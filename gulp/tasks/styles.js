'use strict';

module.exports = function() {
  $.gulp.task('styles', function() {
    return $.gulp.src($.config.path.styles)
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(function(error) {
          return {
            title: 'Styles',
            message: error.message
          }
        })
      }))
      .pipe($.gp.if($.isDevelopment, $.gp.sourcemaps.init()))
      .pipe($.gp.sassGlob())
      .pipe($.gp.sass())
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      .pipe($.gp.cssUnit({type: 'px-to-rem', rootSize: 16}))
      .pipe($.gp.if($.isDevelopment, $.gp.sourcemaps.write()))
      .pipe($.gulp.dest($.config.path.build + '/assets/css'))
      .pipe($.browserSync.stream());
  });
};
