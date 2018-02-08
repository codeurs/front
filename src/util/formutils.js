export function cleanupOptions(options) {
    if (!options) return []
    if (Array.isArray(options)) {
        return options.map(o => (typeof o === 'string' ? {key: o, label: o} : o))
    }

    return Object.keys(options).map(key => ({
        key: key,
        label: options[key]
    }))
}

export function randomKey(prefix = '') {
    return (
        prefix +
        Math.random()
            .toString(36)
            .substr(2, 10)
    )
}
