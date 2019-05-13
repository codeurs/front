import deepEqual from 'deep-equal'
import m, {Children, RequestOptions} from 'mithril'
import {View} from '../ui/view'

export type FetcherState<T> = {
	isLoading: boolean
	data?: T
	error?: Error
}

export type FetcherRender<T> = (state: FetcherState<T>) => Children

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
			...request
		} = this.attrs
		if (hydrate && !this.hydrated) {
			this.data = hydrate
			this.hydrated = true
			setCache(request)
		}
		if (deepEqual(cache, request)) return
		setCache(request)
		this.isLoading = true
		this.onRemove()
		m.request({
			...request,
			config: xhr => (this.transport = xhr)
		})
			.then(data => (this.data = data))
			.catch(e => console.error((this.error = e)))
			.then(() => (this.isLoading = false))
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
