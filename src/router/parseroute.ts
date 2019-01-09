// Source: https://github.com/jorgebucaran/hyperapp-router/blob/19f95f843ae2dc5b4d83f9647edc591a6450c4e3/src/parseRoute.js

export type Match = {
	isExact: boolean
	path: string
	url: string
	params?: {}
}

function createMatch(isExact: boolean, path: string, url: string, params?: {}) {
	return {
		isExact,
		path,
		url,
		params
	}
}

function trimTrailingSlash(url: string) {
	for (var len = url.length; '/' === url[--len]; );
	return url.slice(0, len + 1)
}

function decodeParam(val: string) {
	try {
		return decodeURIComponent(val)
	} catch (e) {
		return val
	}
}

export const parseRoute = (
	url: string,
	route: {path?: string; exact?: boolean}
) => {
	const {path, exact = false} = route
	if (path === url || !path) return createMatch(path === url, path, url)
	var paths = trimTrailingSlash(path).split('/')
	var urls = trimTrailingSlash(url).split('/')

	if (paths.length > urls.length || (exact && paths.length < urls.length))
		return

	for (var i = 0, params = {}, len = paths.length, url = ''; i < len; i++) {
		if (':' === paths[i][0]) {
			params[paths[i].slice(1)] = urls[i] = decodeParam(urls[i])
		} else if (paths[i] !== urls[i]) {
			return
		}
		url += urls[i] + '/'
	}

	return createMatch(false, path, url.slice(0, -1), params)
}
