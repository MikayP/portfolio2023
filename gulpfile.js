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
// function side_project_styles() {
//     return src('./library/src/css/side_projects/**/*.scss')
//         .pipe(scss ())
//         .pipe(autoPrefixer('last 2 versions'))
//         .pipe(cssMinify() )
//         .pipe(dest('./library/dist/styles/side_projects/'))
// }

// scripts

const jsMinify = require('gulp-terser');

function scripts() {
    return src('./library/src/js/**/*.js')
        .pipe(jsMinify())
        .pipe(dest('./library/dist/scripts/'))
}

// function side_project_scripts() {
//     return src('./library/src/js/side_projects/**/*.js')
//         .pipe(jsMinify())
//         .pipe(dest('./library/dist/scripts/side_projects/'))
// }

// watch

function watchTask() {
    watch(
        ['./library/src/css/**/*.scss', './library/src/js/**/*.js'],
        series(styles, scripts)
    )
}

exports.default = series(styles, scripts, watchTask);