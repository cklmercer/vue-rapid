const path = require('path')

/*
||=============================================================================
|| Resolve
||=============================================================================
*/

module.exports.resolve = {
  alias: {
    'assets': path.resolve('app', 'assets'),
    'components': path.resolve('app', 'components'),
    'styles': path.resolve('app', 'assets', 'scss'),
    'store': path.resolve('app', 'store')
  }
}
