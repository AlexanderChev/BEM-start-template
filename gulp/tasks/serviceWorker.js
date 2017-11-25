'use strict';

module.exports = function () {
  $.gulp.task('serviceWorker', function (cb) {
    const rootDir = 'build/';
    const config = {
      // Determines whether the `fetch` event handler is included in the generated service worker code. It is useful to set this to `false` in development builds, to ensure that features like live reload still work. Otherwise, the content would always be served from the service worker cache.
      handleFetch: !$.isDevelopment,
      staticFileGlobs: [
        rootDir + '**/*.{html,css,js}',
        rootDir + '**/*.{eot,ttf,woff,woff2}',
        rootDir + '**/*.{png,jpg,svg,ico}'
      ],
      stripPrefix: 'build/',
      replacePrefix: '/'
    };

    $.swPrecache.write('build/service-worker.js', config, cb);
  });
};
