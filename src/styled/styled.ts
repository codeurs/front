import createCache from '@emotion/cache'
import {serializeStyles} from '@emotion/serialize'
import {EmotionCache, getRegisteredStyles, insertStyles} from '@emotion/utils'
import {StatelessView} from 'ui'
import {DOMAttrs, m} from '../hyperscript'
import {createContext} from '../ui/context'
import {addClasses} from '../util/classes'

const EmotionCacheContext = createContext<EmotionCache>(createCache())

type Styled = {
	(tag: string): (...args: any[]) => StatelessView<DOMAttrs>
	<T>(tag: T): (...args: any[]) => T
}

export const styled: Styled = (tag: any): any => {
	const isReal = tag.__emotion_real === tag
	const baseTag = (isReal && tag.__emotion_base) || tag

	return function(): StatelessView<DOMAttrs> {
		const args = arguments
		const styles: any = /*isReal && tag.__emotion_styles !== undefined
        ? tag.__emotion_styles.slice(0)
				:*/ []
		const name =
			(typeof tag === 'string' && tag) ||
			(tag.name !== 'component' && tag.name) ||
			tag.displayName
		if (name) styles.push(`label:${name};`)
		if (args[0] == null || args[0].raw === undefined) {
			styles.push.apply(styles, args)
		} else {
			styles.push(args[0][0])
			const len = args.length
			for (let i = 1; i < len; i++) {
				styles.push(args[i], args[0][i])
			}
		}

		const component: StatelessView<DOMAttrs> = ({children, ...attrs}) =>
			m(EmotionCacheContext.Consumer, (cache: EmotionCache) => {
				let className = ''
				const classInterpolations: Array<string> = []
				if (typeof attrs.className === 'string') {
					className += getRegisteredStyles(
						cache.registered,
						classInterpolations,
						attrs.className
					)
				}
				// Todo: typescript typings are wrong, first two arguments are switched
				const serialized = (serializeStyles as any)(
					styles.concat(classInterpolations),
					cache.registered,
					attrs
				)
				const rules = insertStyles(cache, serialized, typeof tag === 'string')
				className += `${cache.key}-${serialized.name}`
				if (typeof tag === 'string' && attrs.as) {
					tag = attrs.as
					delete attrs.as
				}
				return m(tag, addClasses(attrs, className), children)
			})

		const Styled: any = component
		if (name) Styled.displayName = name
		Styled.__emotion_real = Styled
		Styled.__emotion_base = baseTag
		Styled.__emotion_styles = styles

		return Styled
	}
}
