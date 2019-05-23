function trimSlashes(str: string) {
	return str.replace(/^\/|\/$/g, '')
}

function startsWith(a: string, b: string) {
	return a.substr(0, b.length) == b
}

export const action = Object.assign(
	(
		data: string | {url: string; target?: string},
		cb: null | Function = null,
		replace: boolean = false
	): any => {
		if (typeof data == 'string') return action({url: data}, cb, replace)
		if (!data || !data.url) return {}
		const {url, target} = data
		if (url.indexOf('mailto:') === 0) return {href: url}
		if (url.indexOf('@') > -1) return {href: 'mailto:' + url}
		if (url.indexOf('.') > -1 || url.indexOf('://') > -1)
			return {
				href: url,
				target: target || '_blank',
				rel: 'external noopener',
				onclick: cb
			}
		else
			return {
				href: url,
				target,
				onclick: (e: MouseEvent) => {
					if (cb) cb()
					action.anchorClick(e, url, replace)
				}
			}
	},
	{
		isActive(data: any, exact = false): boolean {
			if (typeof data == 'string') return action.isActive({url: data}, exact)
			const {pathname} = window.location
			const path = trimSlashes(pathname)
			const url = trimSlashes(data.url)
			if (exact) return path == url
			return startsWith(path, url)
		},
		anchorClick(e: MouseEvent, href: string, replace = false) {
			if (e.which == 2) return
			e.preventDefault()
			action.navigate(href, replace)
		},
		navigate(url: string | {url: string}, replace = false): void {
			if (!url) return
			if (typeof url != 'string' && 'url' in url)
				return action.navigate(url.url, replace)
			if (replace) history.replaceState(null, '', url)
			else history.pushState(null, '', url)
			window.onpopstate && window.onpopstate({state: null} as any)
		}
	}
)
