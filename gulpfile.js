'use strict';

const autoPrefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const gulp = require('gulp');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const sourceMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

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

gulp.task('vendor', () => {
  var b = browserify({
    entries: './scripts/app.js',
    debug: true
  });

  return b
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourceMaps.init())
    .pipe(uglify())
    .pipe(concat('vendor.js'))
    .on('error', (err) => console.log(err))
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest('./dist/'));
});

// Compile JS
gulp.task('js', () => {
  return gulp
    .src('./scripts/**/*.js')
    .pipe(sourceMaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('app.js'))
    .on('error', (err) => console.log(err))
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest('./dist'));
});

// Default task
gulp.task('default', gulp.parallel('scss', 'js', 'vendor'));

// Watch task
gulp.task('watch', () => {
  gulp.watch('./styles/**/*.scss', gulp.series('scss'));
  gulp.watch('./scripts/**/*.js', gulp.parallel('js', 'vendor'));
});
