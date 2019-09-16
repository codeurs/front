import deepEqual from 'deep-equal'
import {RequestOptions} from 'mithril'
import requestService from 'mithril/request'
import {Children} from '../hyperscript'
import {View} from '../ui/view'

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

export const createFetcherCache = (): Cache & {
	render: () => void
	clear: () => void
} => ({
	data: undefined,
	error: undefined,
	req: undefined,
	isLoading: true,
	callbacks: new Set(),
	render() {
		this.callbacks.forEach(f => f())
	},
	clear() {
		this.data = undefined
		this.error = undefined
		this.req = undefined
		this.isLoading = false
	}
})

export class Fetcher<T> extends View<
	RequestData<T> & {children: FetcherRender<T>},
	FetcherPrivateState<T>
> {
	cache: Cache = createFetcherCache()

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
			if (cache.isLoading) cache.callbacks.add(this.redraw)
			return
		}
		cache.req = req
		cache.callbacks.add(this.redraw)
		cache.isLoading = true
		requestService
			.request({
				...req,
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
		const {cache = this.cache} = this.attrs
		return this.children(cache)
	}
}
