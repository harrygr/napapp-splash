var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['styles']);

gulp.task('styles', function() {
    gulp.src('./assets/sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./assets/css/'));
});