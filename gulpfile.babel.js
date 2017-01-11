/**
 * Gulp Packages
 */

// General
import del from 'del';
import gulp from 'gulp';
import gutil from 'gulp-util';
import rename from 'gulp-rename';

// Styles
import minify from 'gulp-cssnano';
import prefix from 'gulp-autoprefixer';
import sass from 'gulp-sass';

// Webpack
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config';

/**
 * Paths to project folders
 */

let paths = {
    output: 'dist/**/*',
    styles: {
        bootstrap: 'node_modules/bootstrap-sass/assets/stylesheets',
        fontawesome: 'node_modules/font-awesome/scss',
        input: 'src/css/app.scss',
        output: 'dist/css'
    },
    fonts: {
        bootstrap: 'node_modules/bootstrap-sass/assets/fonts/**/*',
        fontawesome: 'node_modules/font-awesome/fonts/**/*',
        output: 'dist/fonts/'
    }
};

/**
 * Gulp Tasks
 */

// Process, and minify Sass files
gulp.task('build:styles', ['build:fonts'], () => gulp.src(paths.styles.input)
    .pipe(sass({
        includePaths: [
            paths.styles.bootstrap,
            paths.styles.fontawesome
        ]
    }))
    .pipe(prefix({
        browsers: ['last 2 version', '> 1%'],
        cascade: true,
        remove: true
    }))
    .pipe(gulp.dest(paths.styles.output))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minify({
        discardComments: {
            removeAll: true
        }
    }))
    .pipe(gulp.dest(paths.styles.output))
);

gulp.task('build:fonts', ['build:fonts:bootstrap', 'build:fonts:fontawesome']);

// Bootstrap fonts
gulp.task('build:fonts:bootstrap', () => gulp.src(paths.fonts.bootstrap)
    .pipe(gulp.dest(paths.fonts.output))
);

// Font Awesome fonts
gulp.task('build:fonts:fontawesome', () => gulp.src(paths.fonts.fontawesome)
    .pipe(gulp.dest(paths.fonts.output))
);

gulp.task('build:webpack', (callback) => {
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

gulp.task('clean:dist', () => {
    del.sync([
        paths.output,
        '!dist/index.html'
    ])
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
gulp.task('build', [
    'clean:dist',
    'build:styles',
    'build:webpack'
]);

gulp.task('default', [
    'clean:dist',
    'build:styles',
    'webpack-dev-server'
]);