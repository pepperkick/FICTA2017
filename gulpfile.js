var gulp    = require("gulp");
var pug     = require("gulp-pug");
var minify  = require('gulp-minifier');

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

gulp.task('build', ['html', 'assets']);

gulp.task('watch', () => {
    gulp.watch("src/**/*.*", ['build']);
});