var gulp = require('gulp');
var fs = require('fs');
var menu = require('./md-menu.js');

// auto-load gulp-* plugins
var $ = require('gulp-load-plugins')();

//
// all others
var del = require('del');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var merge = require('merge2');
var runSequence = require('run-sequence');

//var config = require('./config.json');
//var paths = config.paths;
var production = $.util.env.p || $.util.env.prod;

var mdSource = './src/md';


//
// bake MD file based on contents
gulp.task('content', function(){

    var options = {
        ignorePartials: true,
        batch : [mdSource],
        helpers : {
            contents : function(name){
                return fs.readFileSync(mdSource + '/' + name + '.md', 'utf8');
            }
        }
    };

    return gulp.src('src/index.hbs')
        .pipe($.plumber())
        .pipe($.compileHandlebars({}, options))
        .pipe($.rename('_README.md'))
        .pipe(gulp.dest('./'));
});


//
// add table of contents
gulp.task('menu', function(cb){
    return menu(cb);
});


//
// cleanup
gulp.task('clean:md', function(cb){
    return del([
        '*.md'
    ], cb);
});

gulp.task('clean:html', function(cb){
    return del([
        'preview/*'
    ], cb);
});

//
// development
// check out https://github.com/XOP/markdown-preview for clean example
gulp.task('sync', function(){
    return browserSync.init({
        server: {
            baseDir: "./preview"
        },
        files: ["preview/**/*.*"],
        startPath: "README.html",
        port: 4000,
        logLevel: 'debug',
        online: false,
        snippetOptions: {
            // place socket connector into placeholder
            rule: {
                match: /<div placeholder><\/div>/i,
                fn: function (snippet, match) {
                    return snippet;
                }
            }
        }
    });
});

gulp.task('preview', ['clean:html'], function(){
    return gulp.src('README.md')
        .pipe($.markdown())
        .pipe($.wrapper({
            header :
                '<!doctype html>' +
                    '<html>' +
                    '<head>' +
                    '<meta charset="utf-8">' +
                    '<meta name="viewport" content="width=device-width,minimum-scale=1.0,initial-scale=1,user-scalable=yes">' +
                    '<style>' +
                        'html{font: normal 16px/1.4 Tahoma, sans-serif;} body{padding: 2rem;} pre{padding: 1rem; background: #f7f7f7; border: 1px solid #eee;} a{color: #11e;}' +
                    '</style>' +
                    '</head>' +
                    '<body><main>'
            ,
            footer :
                    '</main>' +
                    '<div placeholder></div>' +
                '</body></html>'
        }))
        .pipe(gulp.dest('preview/'))
});

gulp.task('dev', ['build'], function(){
    return runSequence(
        'sync',
        function(){
            gulp.watch('./src/**/*.*', ['build']);
        }
    );
});


//
// build
gulp.task('build', ['clean:md'], function(cb){
    return runSequence(
        'content',
        'menu',
        'preview',
        cb
    );
});