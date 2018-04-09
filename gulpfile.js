var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile SCSS
gulp.task('css:compile', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass.sync({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./src/css'))
});