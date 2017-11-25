'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    global.watch = true;
    $.gulp.watch(['src/styles/**/*.{scss,css}', 'src/blocks/**/*.scss'], $.gulp.series('styles'));
    $.gulp.watch('src/images/**/*.*', $.gulp.series('copy:images'));
    $.gulp.watch('src/blocks/*/data/**/*.json', $.gulp.series('data'));
    $.gulp.watch(['src/pages/*.pug', 'src/blocks/**/*.pug'], $.gulp.series('templates'))
      .on('all', (event, filepath) => {
        global.emittyChangedFile = filepath;
      });
  });
};
