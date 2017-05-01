var gulp = require('gulp'),
	webpack = require('webpack');

gulp.task('scripts', function(callback) {
	webpack(require('../../webpack.config.js'), function(err, stats) {
		if(err) {
			console.log(err.toString()); //checking for err in the console
		}
		console.log(stats.toString());
		callback(); //check if gulp working with webpack
	});
});