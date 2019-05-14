import {ChildrenType} from 'hyperscript'
import {Component, FunctionComponent} from 'preact'

export type StatelessView<P = {}> = FunctionComponent<P>

type Dom = Element | Text | undefined

export abstract class View<A = {}, S = {}> extends Component<A, S> {
	get dom() {
		return this.base
	}

	get attrs(): A {
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

	constructor(attrs?: A, context?: any) {
		super(attrs, context)
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
