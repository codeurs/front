const path = require('path')

module.exports = require('@codeurs/packer')(
  'src/index.ts', 'dist/bundle.js', {
    include: [path.resolve('../dist')]
  }
)