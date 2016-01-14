// LinerNotes GULP for CSS ******************************************

// Dependencies
var gulp 		 = require('gulp');
var sourcemaps 	 = require('gulp-sourcemaps');
var sass  		 = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

var config = {
     bowerDir: './bower_components' 
};

// Move fonts from Font Awesome to Public
gulp.task('icons', function() { 
    return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*') 
        .pipe(gulp.dest('./public/fonts')); 
});

// Setting up SASS, linking bootstrap and Font Awesome
gulp.task('cssBuild', function() { 
    return sass('css/sass/style.scss', {
             style: 'compressed',
             loadPath: [
                 './css/sass',
                 config.bowerDir + '/bootstrap-sass/assets/stylesheets',
                 config.bowerDir + '/font-awesome/scss',
             ]
         }) 
         .pipe(gulp.dest('./public/css')); 
});


// CSS Build (Called in gulpfile):
gulp.task('css:build', ['icons', 'cssBuild']);

// CSS Watch (Called in gulpfile):
gulp.task('css:watch', ['css:build'], function () {
  gulp.watch('./css/**/*.scss', ['css:build']);
});








