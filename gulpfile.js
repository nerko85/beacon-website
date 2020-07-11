const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sync', function () {

    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(['./*.html', 'src/js/*.js', 'build/css/*.css']).on('change', browserSync.reload);

})

gulp.task('sass', function () {
    gulp.src('src/sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css'))
});