const gulp    = require("gulp");
const minify  = require('gulp-minifier');
const pug     = require("gulp-pug");
const puglint = require('gulp-pug-lint');

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

gulp.task('lint', () => {
    return gulp.src('src/**/*.pug')
        .pipe(puglint())
})