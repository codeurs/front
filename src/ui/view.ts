import {Component} from 'react'
import {ChildrenType} from '../hyperscript'

type Dom = Element | Text | undefined

export abstract class View<A = {}, S = {}> extends Component<A, S> {
	get dom(): Element {
		return (this as any).base
	}

	get attrs(): Readonly<A> & Readonly<{children?: ChildrenType<A>}> {
		return this.props
	}

	get children(): ChildrenType<A> {
		return this.props.children as any
	}

	// Public API

	onInit() {}
	onCreate(dom: Dom) {}
	onUpdate(dom: Dom) {}
	onRemove() {}
	onBeforeUpdate(
		nextAttrs: Readonly<A>,
		nextState: Readonly<S>
	): void | boolean {}

	// Preact connection

	redraw = () => this.setState({})

	componentWillMount() {
		this.onInit()
	}

	componentDidMount() {
		this.onCreate(this.dom)
	}

	componentDidUpdate() {
		this.onUpdate(this.dom)
	}

	componentWillUnmount() {
		this.onRemove()
	}

	shouldComponentUpdate(
		nextAttrs: Readonly<A>,
		nextState: Readonly<S>,
		nextContext: any
	): boolean {
		const res = this.onBeforeUpdate(nextAttrs, nextState)
		if (res === false) return false
		return true
	}
}
