var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('.'))
    .pipe(browserSync.stream());
})

gulp.task('serve', function(done) {

   browserSync.init({
        proxy: 'http://jeverly/',
        host: 'jeverly',
        open: 'external'
    });

    gulp.watch("sass/**/*.sass", gulp.series('sass'));
    gulp.watch("*.php").on('change', () => {
      browserSync.reload();
      done();
    });
  

    done();
});

gulp.task('default', gulp.series('sass', 'serve'));