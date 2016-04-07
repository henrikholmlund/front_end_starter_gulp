var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        }
    })
});

gulp.task('sass', function () {
    gulp.src('app/scss/**/*.{scss,sass}')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
           stream: true
    }));


});

gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.{scss,sass}', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);

});

gulp.task('default', ['sass', 'browserSync', 'watch']);
