const mix = require('laravel-mix')
const config = require('./config')

mix.webpackConfig(config)
mix.setPublicPath('public')
mix.js('app/index.js', 'public/js/app.js')
