'use strict';

const autoPrefixer = require('gulp-autoprefixer');
const babel = require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const gulp = require('gulp');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const sourceMaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');

// Compile SCSS
gulp.task('scss', () => {
  return gulp
    .src('./styles/**/*.scss')
    .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(
      autoPrefixer({
        browsers: ['> 1%', 'last 4 versions', 'not ie <= 10', 'ie 11'],
        cascade: false
      })
    )
    .pipe(cleanCss({ compatibility: 'ie11' }))
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('bundle', () => {
  var b = browserify({
    entries: './scripts/app.js',
    debug: true
  });

  return b
    .transform(babel)
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourceMaps.init())
    .pipe(terser())
    .pipe(concat('bundle.js'))
    .on('error', (err) => console.log(err))
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest('./dist/'));
});

// Default task
gulp.task('default', gulp.parallel('scss', 'bundle'));

// Watch task
gulp.task('watch', () => {
  gulp.watch('./styles/**/*.scss', gulp.series('scss'));
  gulp.watch('./scripts/**/*.js', gulp.parallel('bundle'));
});
