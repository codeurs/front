import {Children, DOMAttrs, m, View} from '@codeurs/front'
import deepEqual from 'deep-equal'
import {RequestOptions} from 'mithril'
import requestService from 'mithril/request'

export type FetcherState<T> = {
	isLoading: boolean
	data?: T
	error?: Error
}

export type FetcherRender<T> = (state: FetcherState<T>) => Children

type RequestData<T> = {
	url: string
	cache?: Cache
	hydrate?: T
	suspend?: boolean
} & RequestOptions<T>

type FetcherPrivateState<T> = FetcherState<T> & {
	hydrated: boolean
	cache?: RequestData<T>
}

type Cache = {
	data?: any
	error?: Error
	isLoading: boolean
	transport?: XMLHttpRequest
	hydrated?: boolean
	req?: any
	callbacks: Set<Function>
}

export const createCache = (): Cache & {clear} => ({
	isLoading: true,
	callbacks: new Set(),
	clear() {
		//this.data = undefined
		this.error = undefined
		this.req = undefined
		this.isLoading = false
		if (this.transport) this.transport.abort()
		this.callbacks.forEach(f => f())
	}
})

export class Fetcher<T> extends View<
	RequestData<T> & {children: FetcherRender<T>},
	FetcherPrivateState<T>
> {
	cache: Cache = createCache()

	onInit() {
		const {children, hydrate, cache = this.cache, ...req} = this.attrs
		if (hydrate && !cache.hydrated) {
			cache.data = hydrate
			cache.hydrated = true
			cache.isLoading = false
			cache.req = req
		}
	}

	onCreate = this.load
	onUpdate = this.load

	onRemove() {
		const {cache = this.cache} = this.attrs
		cache.callbacks.delete(this.redraw)
	}

	load() {
		const {children, hydrate, cache = this.cache, ...req} = this.attrs
		if (deepEqual(cache.req, req)) {
			if (cache.isLoading)
				return new Promise(done =>
					cache.callbacks.add(() => {
						this.redraw()
						done()
					})
				)
			return Promise.resolve()
		}
		cache.req = req
		cache.callbacks.add(this.redraw)
		cache.isLoading = true
		return requestService
			.request({
				...req,
				deserialize: d => JSON.parse(d),
				config: xhr => (cache.transport = xhr)
			})
			.then(data => {
				cache.data = data
			})
			.catch(error => {
				console.error(error)
				cache.error = error
			})
			.then(() => {
				cache.isLoading = false
				cache.callbacks.forEach(f => f())
			})
	}

	render() {
		const {cache = this.cache, suspend = false} = this.attrs
		const finish = this.load()
		if (cache.isLoading && suspend) throw finish
		return this.children(cache)
	}
}
