var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');

/* PATHS */
const html = 'src/*.html';
const images = 'src/img/*';
const favicon = 'src/favicon.ico';
const stylesheets = 'src/css/*.{css,sass,scss}';
const fonts = 'src/fonts/*';
const files = 'src/files/*';

gulp.task('HTML', function () {
    return gulp.src(html)
        .pipe(gulp.dest('build'))
});

gulp.task('images', function () {
    return gulp.src(images)
        .pipe(gulp.dest('build/img'))
});

gulp.task('favicon', function () {
    return gulp.src(favicon)
        .pipe(gulp.dest('build'))
})

gulp.task('Sass/SCSS', function () {
    return gulp.src(stylesheets)
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css'))
});

gulp.task('fonts', function () {
    return gulp.src(fonts)
        .pipe(gulp.dest('build/fonts'))
});

gulp.task('files', function () {
    return gulp.src(files)
        .pipe(gulp.dest('build/files'))
})

gulp.task('watch', function () {
    gulp.watch(html, ['HTML'])
    gulp.watch(stylesheets, ['Sass/SCSS'])
    gulp.watch(images, ['images'])
    gulp.watch(fonts, ['fonts'])
    gulp.watch(favicon, ['favicon'])
    gulp.watch(files, ['files'])
});

gulp.task('default', ['HTML', 'images', 'favicon', 'Sass/SCSS', 'fonts']);