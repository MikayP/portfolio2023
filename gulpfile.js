const { src, dest, series, watch } = require('gulp');

// styles
const scss = require('gulp-sass')(require('sass'));
const autoPrefixer = require('gulp-autoprefixer');
const cssMinify = require('gulp-clean-css');

function styles() {
    return src('./library/src/css/**/*.scss')
        .pipe(scss ())
        .pipe(autoPrefixer('last 2 versions'))
        .pipe(cssMinify() )
        .pipe(dest('./library/dist/styles/'))
}

// scripts

const jsMinify = require('gulp-terser');

function scripts() {
    return src('./library/src/js/**/*.js')
        .pipe(jsMinify())
        .pipe(dest('./library/dist/scripts/'))
}

// watch

function watchTask() {
    watch(
        ['./library/src/css/**/*.scss', './library/src/js/**/*.js'],
        series(styles, scripts)
    )
}

exports.default = series(styles, scripts, watchTask);