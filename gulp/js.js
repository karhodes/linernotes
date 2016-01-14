// LinerNotes Application GULP ******************************************

// Dependencies:
var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var plumber = require('gulp-plumber')

// JS Build (Called in gulpfile):
gulp.task('js:build', function () {
  return gulp.src(['ng/**/module.js', 'ng/**/*.js'])
    .pipe(plumber())
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('.public/js'))
})

// JS Watch (Called in gulpfile):
gulp.task('js:watch', ['js:build'], function () {
  gulp.watch('ng/**/*.js', ['js:build'])
})