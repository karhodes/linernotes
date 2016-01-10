// LinerNotes GULP for CSS ******************************************
var gulp 				       = require('gulp');
var sourcemaps 			   = require('gulp-sourcemaps');
var sass  				     = require('gulp-ruby-sass');

gulp.task('css:build', function () {
  gulp.src('./sass/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/css'));
});
 
gulp.task('css:watch', ['css:build'], function () {
  gulp.watch('./sass/**/*.sass', ['css:build']);
});




// FONT AWESOME
gulp.task('icons', function() { 
    return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*') 
        .pipe(gulp.dest('./public/fonts')); 
});

// BOOTSTRAP SASS
gulp.task('css', function () {
  return sass('resources/**/*.scss',{
    style: 'compressed',
             loadPath: [
                 './resources/sass',
                 config.bowerDir + '/bootstrap-sass/assets/stylesheets',
                 config.bowerDir + '/font-awesome/scss',
             ]
  })
    .on('error', sass.logError)
    .pipe(gulp.dest('./public/css'));
});

