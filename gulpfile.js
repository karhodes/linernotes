// LinerNotes Application GULP ******************************************
var fs    = require('fs')
var gulp  = require('gulp')
var bower = require('gulp-bower');

// Run bower to update front end dependencies
gulp.task('bower', function() { 
    return bower()
         .pipe(gulp.dest('./bower_components')) ;
});

// Build gulpfile from individual modules in the gulp folder
fs.readdirSync('./gulp').forEach(function (module) {
  require('./gulp/' + module)
})

// Calling the tasks built in the modules in the gulp folder
gulp.task('build', ['js:build', 'css:build', 'bower'])
gulp.task('watch', ['js:watch', 'css:watch'])
gulp.task('default', ['watch', 'server'])