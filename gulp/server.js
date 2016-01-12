// LinerNotes Application GULP ******************************************

// Dependencies:
var gulp = require('gulp')
var nodemon = require('gulp-nodemon')

// Server using nodemon (Called in gulpfile):
gulp.task('server', function () {
  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: ['ng*', 'gulp*', 'public*']
  })
})