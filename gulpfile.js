var gulp    = require("gulp");
var pug     = require("gulp-pug");
var minify  = require('gulp-minifier');
var scp     = require('gulp-scp2');

var Config = require("./gulpconfig.json");

gulp.task('html', () => {
    return gulp.src('src/index.pug')
    .pipe(pug())
    .pipe(minify({
        minify: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyCSS: true,
        minifyJS: true
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('assets', () => {
    return gulp.src('src/assets/**/*.*')
    .pipe(gulp.dest('build/assets'));
});

gulp.task("deploy", ['build'], () => {
    return gulp.src(['build/**/*.*'])
    .pipe(scp(Config.scp));
});

gulp.task('build', ['html', 'assets']);

gulp.task('watch', () => {
    gulp.watch("src/**/*.*", ['build']);
});