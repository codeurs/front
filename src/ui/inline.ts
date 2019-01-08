// See https://github.com/MithrilJS/mithril.js/issues/2148#issuecomment-452023800
export const Inline = v =>
	typeof v.attrs.view === 'function'
		? {
				view: vnode => v.attrs.view(vnode)
		  }
		: typeof v.children[0] === 'function'
		? v.children[0](v)
		: console.error(
				'Inline component must be provided with a closure or POJO component declaration as its first argument'
		  )
