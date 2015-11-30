var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {

    return gulp.src('style.less')
    .pipe( less() )
    .on( 'error', error)
    .pipe( gulp.dest('./') );

});

gulp.task('watch-less', function() {

    return gulp.watch( 'css/less/**/*.less', ['less'] );

});


function error( e ) {
    console.error( e );
};
