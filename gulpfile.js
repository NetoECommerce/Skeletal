var path = require('path');
var fs = require('fs');
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var config = {};
config.src = './src';
config.JS = config.src + '/js';
config.SCSS = config.src + '/scss';
config.CSS = config.src + '/css';

// Compile SASS into CSS
gulp.task('sass', function() {
	var plugins = [ cssnext ];
	return gulp.src(config.SCSS +'/*.scss')
		.pipe(sass())
		.pipe(postcss(plugins))
		.pipe(gulp.dest(config.CSS))
});

// Move the javascript files into our /src/js folder
gulp.task('js', function() {
	return gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js'])
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest(config.JS))
});

// Watches scss files
gulp.task('watch', ['sass'], function() {
	gulp.watch([config.SCSS + '/*.scss', config.SCSS + '/_*.scss'], ['sass']);
});

gulp.task('build', ['sass', 'js']);

gulp.task('default', ['watch']);
