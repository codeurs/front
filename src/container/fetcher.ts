import deepEqual from 'deep-equal'
import {RequestOptions} from 'mithril'
import requestService from 'mithril/request'
import {ComponentChildren} from 'preact'
import {View} from '../ui/view'

export type FetcherState<T> = {
	isLoading: boolean
	data?: T
	error?: Error
}

export type FetcherRender<T> = (state: FetcherState<T>) => ComponentChildren

type RequestData<T> = {
	url: string
	hydrate?: T
	cache?: any
	setCache?: (cache: any) => void
} & RequestOptions<T>

export class Fetcher<T> extends View<
	RequestData<T> & {children: FetcherRender<T>}
> {
	isLoading = false
	error?: Error
	data?: T
	transport?: XMLHttpRequest
	cache?: RequestData<T>
	hydrated = false

	onInit = this.load
	onBeforeUpdate = this.load

	load() {
		const {
			cache = this.cache,
			setCache = (cache: any) => (this.cache = cache),
			children,
			hydrate,
			...req
		} = this.attrs
		if (hydrate && !this.hydrated) {
			this.data = hydrate
			this.hydrated = true
			setCache(req)
		}
		if (deepEqual(cache, req)) return
		setCache(req)
		this.isLoading = true
		this.onRemove()
		requestService
			.request({
				...req,
				config: xhr => (this.transport = xhr)
			})
			.then(data => (this.data = data as T))
			.catch(e => console.error((this.error = e)))
			.then(() => (this.isLoading = false))
			.then(this.redraw)
	}

	onRemove() {
		if (this.transport) this.transport = void this.transport.abort()
	}

	render() {
		return this.children({
			isLoading: this.isLoading,
			data: this.data,
			error: this.error
		})
	}
}
