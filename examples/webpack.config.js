const path = require('path')

const pack = require('@codeurs/packer')('src/index.tsx', 'dist/bundle.js', {
	include: [path.resolve('../node_modules/@codeurs/front/dist')]
})

module.exports = (...args) => {
	const config = pack(...args)
	config.resolve.alias = {
		react: 'preact/compat',
		'react-dom': 'preact/compat'
	}
	return config
}
