let mix = require('laravel-mix');
require('laravel-mix-tailwind');

mix.browserSync({
    proxy: 'http://localhost/emelyragazi/',
    files: ['assets/js/app.min.js', '*.html', 'views/*.html'],
})
    .js('src/js/app.js', 'assets/js/app.min.js')
    .sass('src/scss/app.scss', 'assets/css/app.min.css')
    .tailwind();