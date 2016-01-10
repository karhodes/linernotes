// LinerNotes Application Webpack | Webpack dependencies *******************
var path 	= require('path');
var	webpack = require('webpack');

// Module *****************************************************************
// FIXME: no return
module.exports = {
	cache: 		true,
	debug: 		true,
	devtool: 	'source-map',
	entry: {
		main: 	'server.js'
	},
	output:{
		path: 		path.join(__dirname, 'public/js'),
		publicPath: '/js',
		filename: 	'[name].bundle.js'
	},
	stats: {
		colors: 	true,
		modules: 	false,
		reasons: 	true
	},
	module: {
	    loaders: [
	      {test: /\.json$/, loader: 'json-loader'},
	      {test: /\.js$/, exclude: [/node_modules/], loader: 'babel-loader?optional=runtime'},
	      {
	        test: /\.jsx$/,
	        exclude: [/node_modules/],
	        loaders: ['react-hot', 'babel-loader?optional=runtime']
	      },
	      {test: /\.scss$/, loaders: ["style", "css", "sass?config=otherSassLoaderConfig"]},
	      {test: /\.css/, loader: 'style-loader!css-loader'}
	    ],
	    noParse: /\.min\.js/
	},
	resolve: {
  		modulesDirectories: ['node_modules'],
  		root: [path.join(__dirname, "bower_components")],
  		extensions: ['', '.js', '.json', '.jsx', '.json', '.styl', '.css', '.scss']
  	},
  	plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ]
};