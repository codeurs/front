import m from 'mithril'

export function subComponent(selector) {
  return {
    view(vnode) {
      return m(selector, vnode.attrs, vnode.children)
    }
  }
}