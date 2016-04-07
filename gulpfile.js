var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: './'
        }
    })
});

gulp.task('sass', function () {
    gulp.src('./scss/**/*.{scss,sass}')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({
           stream: true
    }));


});

gulp.task('watch', function () {
    gulp.watch('./scss/**/*.{scss,sass}', ['sass']);
    gulp.watch('./*.html', browserSync.reload);
    gulp.watch('./js/*.js', browserSync.reload);

});

gulp.task('default', ['sass', 'browserSync', 'watch']);
