'use strict';

/**
 * Compile sass
 */
var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');

function convertToCommonJs(es6Stream) {
  return es6Stream
    .pipe(plumber())
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(rename(function(transpiled) {
      transpiled.basename = transpiled.basename.substring(0, transpiled.basename.length - 4);
    }));
}

function allES6(done) {
  return convertToCommonJs(gulp.src('client/**/*.es6.js'))
    .pipe(gulp.dest('client/transpiled'));
};

function watchES6(done) {
  watch('client/**/*.es6.js', {read: false}, function(es6Vinyl) {
    var dirname = es6Vinyl.relative.substring(0, es6Vinyl.relative.length - es6Vinyl.basename.length);
    convertToCommonJs(gulp.src(es6Vinyl.path))
      .pipe(gulp.dest('client/transpiled/' + dirname));
  });
  done();
};

module.exports = {
  allES6: allES6,
  watchES6: watchES6
};

