export function action(data, cb, replace = false) {
  if (typeof data == 'string') return action({url: data}, cb, replace)
  if (!data || !data.url) return {}
  const {url, target} = data
  if (url.indexOf('mailto:') === 0) return {href: url}
  //if (url.indexOf('@') > -1) return {href: 'mailto:'+url}
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
      onclick: e => {
        if (cb) cb()
        action.anchorClick(e, url, replace)
      }
    }
}

function trimSlashes(str) {
  return str.replace(/^\/|\/$/g, '')
}

function startsWith(a, b) {
  return a.substr(0, b.length) == b
}

action.isActive = (data, exact = false) => {
  if (typeof data == 'string') return action.isActive({url: data}, exact)
  const {pathname} = window.location
  const path = trimSlashes(pathname)
  const url = trimSlashes(data.url)
  if (exact) return path == url
  return startsWith(path, url)
}

action.anchorClick = (e, href, replace) => {
  if (e.which == 2) return
  e.preventDefault()
  action.navigate(href, replace)
}

action.navigate = (url, replace) => {
  if (!url) return
  if (typeof url != 'string' && 'url' in url)
    return action.navigate(url.url, replace)
  if (replace) history.replaceState(null, null, url)
  else history.pushState(null, null, url)
  window.onpopstate({state: null})
}
