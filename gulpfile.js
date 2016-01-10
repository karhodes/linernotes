// LinerNotes Application GULP ******************************************
// Break into individual modules for css, js & server?
var gulp 				       = require('gulp');
var concat 				     = require('gulp-concat');
var uglify 				     = require('gulp-uglify');
var sourcemaps 			   = require('gulp-sourcemaps');
var gutil 				     = require('gulp-util');
var webpack 			     = require('webpack');
var WebpackDevServer 	 = require('webpack-dev-server');
var webpackConfig 		 = require('./webpack.config.js');
var stream 				     = require('webpack-stream');
var nodemon 			     = require('gulp-nodemon');
var jshint 				     = require('gulp-jshint');
var stylish 			     = require('jshint-stylish');
var autoprefixer 		   = require('gulp-autoprefixer');
var sass  				     = require('gulp-ruby-sass');
var notify  			     = require('gulp-notify');
var bower 				     = require('gulp-bower');

// To Do:  Delete after transistioning to sequelize
var mongojs            = require('mongojs');

var config = {
     sassPath: './resources/sass',
     bowerDir: './bower_components' 
};

// DEFAULT GULP TASKS ******************************************
gulp.task('default', ['bower', 'css', 'icons', 'jshint', 'bundle', 'nodemon']);

gulp.task('build-dev', ['webpack:build-dev'], function() {
  gulp.watch(['linernotes/**/*'], ['webpack:build-dev']);
});

function onBuild(done) {
  return function(err, stats) {
    if (err) {
      console.log('Error: ', err);
    } else {
      console.log(stats.toString());
    }

    if (done) done();
  };
}

gulp.task('bundle', function(done) {
  webpack(webpackConfig).run(onBuild(done));
});

// GULP TASKS ******************************************

// BOWER
gulp.task('bower', function() { 
    return bower()
         .pipe(gulp.dest(config.bowerDir)) ;
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

// UGLIFY 
gulp.task('uglify', function() {
  gulp.src('public/js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public/js'));
});

// JSHINT
gulp.task('jshint', function() {
  gulp.src(['gulpfile.js', 'server.js', 'public/js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

// NODEMON
gulp.task('nodemon', ['bundle'], function (done) {
  nodemon({
    script: 'server.js',
    ext: 'html js css',
    ignore: ['ignore.js'],
    env: { 'NODE_ENV': 'development' }
  }).on('restart');
  console.log('Going into dev watch mode...');
  console.log('Watching...');
});