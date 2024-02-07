let mix = require('laravel-mix');
var LiveReloadPlugin = require('webpack-livereload-plugin');

mix
.js('public/js/app.js', 'js')
.sass('public/scss/app.scss', 'css')
.setPublicPath('dist')
.webpackConfig({
    plugins: [new LiveReloadPlugin()]
})
.setResourceRoot('../')
;
