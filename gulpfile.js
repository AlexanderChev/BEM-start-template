'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config/config'),
  task: require('./gulp/config/tasks'),
  gulp: require('gulp'),
  rimraf: require('rimraf'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')(),
  mmq: require('gulp-merge-media-queries'),
  fs: require('fs'),
  webpackStream: require('webpack-stream'),
  webpack: require('webpack'),
  named: require('vinyl-named'),
  emitty: require('emitty').setup('src', 'pug'),
  pugLinter: require('gulp-pug-linter'),
  styleLint: require('gulp-stylelint'),
  chalk: require('chalk'),
  swPrecache: require('sw-precache'),
  isDevelopment: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
};

$.task.forEach(function(taskPath) {
  require(taskPath)();
});
