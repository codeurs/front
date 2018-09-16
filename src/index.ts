declare global {
	namespace JSX {
		interface ElementAttributesProperty {
			attrs
		}
		interface ElementChildrenAttribute {
			children: {}
		}
	}
}

export * from './hyperscript'
export * from './ui'

export * from './store/sliderstore'
export * from './store/formstore'
export * from './store/modalstore'

export * from './router'
export * from './action'
export * from './form'

export * from './util/classes'
export * from './util/subcomponent'
