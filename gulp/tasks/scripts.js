'use strict';

const path = require('path');
const gulplog = require('gulplog');

module.exports = function() {
  $.gulp.task('scripts', function(callback) {
    let firstBuildReady = false;

    function done(err, stats) {
      firstBuildReady = true;

      if (err) {
        return;
      }

      gulplog[stats.hasErrors() ? 'error' : 'info'](stats.toString({
        colors: true
      }));
    }
    let options = {
      watch: $.isDevelopment,
      devtool: $.isDevelopment ? 'eval' : false,
      context: path.resolve(__dirname, 'src/scripts'),
      module: {
        noParse: /\/node_modules\/jquery/,
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['babel-loader']
          }
        ]
      },
      plugins: [
        new $.webpack.NoEmitOnErrorsPlugin()
      ]
    };

    if ($.isDevelopment) {
      options.plugins.push(
        new $.webpack.NamedModulesPlugin(),
        new $.webpack.HotModuleReplacementPlugin()
      );
    } else {
      options.plugins.push(
        new $.webpack.optimize.ModuleConcatenationPlugin(),
        new $.webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false
        })
      );
    }
    return $.gulp.src($.config.path.scripts)
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(function(error) {
          return {
            title: 'JavaScript',
            message:  error.message
          };
        })
      }))
      .pipe($.named())
      .pipe($.webpackStream(options, $.webpack, done))
      .pipe($.gulp.dest($.config.path.build + '/assets/js'))
      .on('data', function() {
        if (firstBuildReady) {
          callback();
        }
      });
  });
};
