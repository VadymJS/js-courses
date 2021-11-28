const { src, dest, watch, series, parallel } = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');

function cleanDist () {
    return src('./dist', {read: false}).pipe(clean());
}

function copyHtml () {
    return src('./src/index.html').pipe(dest('./dist'));
}

function copyStyles () {
    return src('./src/style.css').pipe(dest('./dist'));
}

function copyJs () {
    return src('./src/app.js').pipe(dest('./dist'));
}

function vendorJs () {
    return src('./node_modules/jquery/dist/jquery.min.js').pipe(concat('vendor.js')).pipe(dest('./dist'));
}

function watchFiles (cb) {
    watch('./src/app.js', {events: 'all'}, copyJs);
    watch('./src/style.css', {events: 'all'}, copyStyles);
    watch('./src/index.html', {events: 'all'}, copyHtml);
    cb();
    
}

module.exports = {
    build: series(cleanDist, parallel(vendorJs, copyHtml, copyStyles, copyJs)),
    serve: series(cleanDist, parallel(vendorJs, copyHtml, copyStyles, copyJs), watchFiles)
}