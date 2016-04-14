'use strict';


var argv = require('yargs').argv;
// checks for presence of --production option eg: gulp [task] --production
// if set will create minified output files
var production = argv.prod;

// generic modules
var gulp = require('gulp');

// Modules for webserver and livereload
var express = require('express'),
    refresh = require('gulp-livereload'),
    livereload = require('connect-livereload'),
    livereloadport = 35729,
    serverport = 5000;

function configureServer() {
    // Set up an express server (not starting it yet)
    var server = express();

    // Add live reload for development
    server.use(livereload({port: livereloadport}));
    // Use our 'dist' folder as rootfolder
    server.use(express.static('./dist'));
    server.use(express.static('./node_modules'));
    server.use('/app', express.static('./app'));
    server.use('/data', express.static('./data'));
    // Because I like HTML5 pushstate .. this redirects everything back to our index.html
    server.get('/', function(req, res) {
        res.sendFile('index.html', { root: './' });
    });

    return server;
}

// build everything and copy to dist folder
gulp.task('build', ['lint', 'browserify'], function (cb) {
    // indicate that task has completed
    cb(null);
});

// Dev - build code, copy to dist folder and run server, the watch
// task builds the app code and watches with watchify
gulp.task('default', ['lint', 'watchify'], function() { });

// JSHint task
gulp.task('lint', function() {
    var jshint = require('gulp-jshint');

    // lint all script files except templates.js which is generated
    gulp.src(['./app/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Browserify task for building our app bundle
gulp.task('browserify', function() {
    var browserify = require('browserify'),
        source = require('vinyl-source-stream'),
        gulpif = require('gulp-if');
        //buffer = require('vinyl-buffer'),
        //uglify = require('gulp-uglify');

    // start with the entry point (main.js), browserify will figure
    // out which JS files are needed in bundle
    browserify = browserify('./app/app.js',
        {
            debug: true
        });

    return browserify.bundle()
        .pipe(source('edge-pretrade.js'))
        // if production, build minified files also
        .pipe(gulpif(production, gulp.dest('./dist/js')))
        //.pipe(gulpif(production, rename('edge-pretrade-min.js')))
        //.pipe(gulpif(production, buffer()))
        //.pipe(gulpif(production, uglify()))
        .pipe(gulp.dest('./dist/js'));
});

// Watchify task - watch for JS source changes and rebuild the app bundle
// extremely efficiently
gulp.task('watchify', function() {
    var server = configureServer();

    // Start webserver
    server.listen(serverport);
    // Start live reload
    refresh.listen(livereloadport);

    var watchify   = require('watchify'),
        watch = require('gulp-watch'),
        browserify = require('browserify'),
        source     = require('vinyl-source-stream');

    // start with the entry point (main.js), browserify will figure
    // out which JS files are needed in bundle
    browserify = browserify('./app/app.js', {
        debug: true
    });

    watch('./app/**/*.html')
        .pipe(refresh());

    // watchify will rebuild bundle on changes
    var bundler = watchify(browserify);

    function rebundle() {
        return bundler.bundle()
            .pipe(source('app.js'))
            .pipe(gulp.dest('./dist/js'))
            .pipe(refresh());
    }

    bundler.on('update', rebundle);
    // run any other gulp.watch tasks
    bundler.on('log', console.error);

    return rebundle();
});