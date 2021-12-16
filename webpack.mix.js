// webpack.mix.js

let mix = require('laravel-mix');

mix
    .vue()
    .postCss('src/app.css', 'dist');