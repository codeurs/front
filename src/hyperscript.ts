import {Attributes, ComponentTypes, Lifecycle, Children, Vnode} from 'mithril'
import hyperscript from 'mithril/hyperscript'

type ExtendedHyperscript = {
	(selector: string, ...children: Children[]): Vnode<any, any>;
	(selector: string, attributes: Attributes, ...children: Children[]): Vnode<any, any>;
	<Attrs, State>(component: ComponentTypes<Attrs, State>, ...args: Children[]): Vnode<Attrs, State>;
	<Attrs, State>(component: ComponentTypes<Attrs, State>, attributes: Attrs & Lifecycle<Attrs, State> & { key?: string | number }, ...args: Children[]): Vnode<Attrs, State>;
	(component: (attrs: {children?: Children}) => Children, ...args: Children[]): Vnode<{}>;
	<Attrs>(component: (attrs: {children?: Children} & Attrs) => Children, attributes: Attrs & { key?: string | number }, ...args: Children[]): Vnode<Attrs>;
}

const isPlainFunction = input =>
	typeof input === 'function' && typeof input.prototype.view !== "function"

export const m: ExtendedHyperscript = (selector, attrs, ...children) => {
	if (isPlainFunction(selector)) {
		if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs))
			return selector({children: [...attrs, ...children]})
		return selector({...attrs, children})
	}
	return hyperscript(selector, attrs, ...children)
}