// LinerNotes Application GULP ******************************************
var fs    = require('fs')
var gulp  = require('gulp')
var bower = require('gulp-bower');

var config = {
	bowerDir: './bower_components'
}

// Run bower to update front end dependencies
gulp.task('bower', function() {
  return bower('./bower_components')
    .pipe(gulp.dest('./public/bower'))
});

gulp.task('html', function() { 
    return gulp.src('./html/**/*.html') 
        .pipe(gulp.dest('./public/html')); 
});

fs.readdirSync('./gulp').forEach(function (module) {
  require('./gulp/' + module)
})

// Calling the tasks built in the modules in the gulp folder
gulp.task('build', ['bower', 'html', 'js:build', 'css:build'])
gulp.task('watch', ['bower', 'html', 'js:watch', 'css:watch'])
gulp.task('default', ['watch', 'server'])