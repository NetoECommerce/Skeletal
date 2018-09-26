var path = require('path');
var fs = require('fs');
var { task, src, dest, watch, series, parallel } = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var config = {};
config.src = './src';
config.JS = config.src + '/js';
config.SCSS = config.src + '/scss';
config.CSS = config.src + '/css';
config.buildTasks = ['sass', 'js'];

// Compile SASS into CSS
task('sass', function() {
	var plugins = [ cssnext ];
	return src(config.SCSS +'/*.scss')
		.pipe(sass())
		.pipe(postcss(plugins))
		.pipe(dest(config.CSS))
});

// Move the javascript files into our /src/js folder
task('js', function() {
	return src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js'])
		.pipe(concat('vendor.js'))
		.pipe(dest(config.JS))
});

// Watches scss files
task('watch', series('sass', function(done) {
	watch([config.SCSS + '/*.scss', config.SCSS + '/_*.scss'], series('sass'));
	done();
}));

task('build', series(config.buildTasks));

task('default', series('watch'));