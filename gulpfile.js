var gulp = require('gulp');
var runSequence = require('gulp-run-sequence');
var webpack = require('webpack-stream');

gulp.task('build', function() {
  return gulp.src('src/containers/app.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('build/'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['build']);
});

gulp.task('develop', function() {
  runSequence(
    'build',
    'watch'
  )
});
