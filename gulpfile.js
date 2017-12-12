var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');

gulp.task('HTML', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('build'))
});

gulp.task('images', function () {
    return gulp.src('src/img/*')
        .pipe(gulp.dest('build/img'))
});

gulp.task('Sass/SCSS', function () {
    return gulp.src('src/css/*.{sass,scss}')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css'))
});

gulp.task('fonts', function () {
    return gulp.src('src/fonts/*')
        .pipe(gulp.dest('build/fonts'))
});

gulp.task('default', ['HTML', 'images', 'Sass/SCSS']);