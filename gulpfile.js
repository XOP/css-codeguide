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
gulp.task('clean', function(cb){
    return del([
        '*.md'
    ], cb);
});


//
// all in all
gulp.task('default', ['clean'], function(){
    return runSequence(
        'content',
        'menu'
    );
});