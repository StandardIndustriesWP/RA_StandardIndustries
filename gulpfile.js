'use strict';

const autoPrefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourceMaps = require('gulp-sourcemaps');

// Compile SCSS
gulp.task('scss', () => {
  return gulp
    .src('./styles/**/*.scss')
    .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(
      autoPrefixer({
        browsers: ['last 4 versions'],
        cascade: false
      })
    )
    .pipe(cleanCss({ compatibility: 'ie11' }))
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest('./dist'));
});

// Compile JS
gulp.task('js', () => {
  return gulp
    .src('./scripts/**/*.js')
    .pipe(sourceMaps.init())
    .pipe(babel())
    .pipe(concat('app.js'))
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest('./dist'));
});

// Default task
gulp.task('default', gulp.parallel('scss', 'js'));

// Watch task
gulp.task('watch', () => {
  gulp.watch('./styles/**/*.scss', gulp.series('scss'));
  gulp.watch('./scripts/**/*.js', gulp.series('js'));
});
