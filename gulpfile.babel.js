/**
 * Gulp Packages
 */

// General
import gulp from 'gulp';
import gutil from 'gulp-util';

// Webpack
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config';


gulp.task('webpack:build', (callback) => {
    webpack(webpackConfig, (err, stats) => {
        if (err) {
            throw new gutil.PluginError('webpack:build', err);
        }
        gutil.log('[webpack:build]', stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('webpack-dev-server', () => {
    new WebpackDevServer(webpack(webpackConfig), {
        publicPath: "/" + webpackConfig.output.publicPath,
        stats: {
            colors: true
        }
    }).listen(8080, 'localhost', (err) => {
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }
        gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
    })
});

/**
 * Task Runners
 */

// Production build
gulp.task('build', ['webpack:build']);

gulp.task('default', ['webpack-dev-server']);