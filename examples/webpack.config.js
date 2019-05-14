const path = require('path')

module.exports = require('@codeurs/packer')('src/index.tsx', 'dist/bundle.js', {
	include: [path.resolve('../node_modules/@codeurs/front/dist')]
})
