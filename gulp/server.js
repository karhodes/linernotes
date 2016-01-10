// LinerNotes Application GULP ******************************************
var gulp = require('gulp')
var nodemon = require('gulp-nodemon')

gulp.task('server', function () {
  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: ['ng*', 'gulp*', 'public*']
  })
})

// NODEMON
gulp.task('nodemon', ['bundle'], function () {
  nodemon({
    script: 'server.js',
    ext: 'html js css',
    ignore: ['ignore.js'],
    env: { 'NODE_ENV': 'development' }
  })
});