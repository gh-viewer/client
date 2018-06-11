const path = require('path')

module.exports = {
  clipboard: false,
  content: [path.resolve(__dirname, 'desktop')],
  port: 8082,
  dev: { publicPath: '/dist' },
}
