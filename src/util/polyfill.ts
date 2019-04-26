import assign from 'core-js-pure/stable/object/assign'
import setPolyfill from 'core-js-pure/stable/weak-set'

const w = window as {[key: string]: any}
if (!w['WeakSet']) w['WeakSet'] = setPolyfill
if (!Object.assign) Object.assign = assign

// Workaround tree shaking... Should probably find a better way to do this
export default () => {}
