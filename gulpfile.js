var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var fs = require('fs');
var jsImport = require('gulp-js-import');

// js imports
gulp.task('import', function() {
	fs.stat('./src/js/core/custom.js', function(err, stat) {
		if(err != null) { console.log('Error:' + err.code);}
	});
		gulp.src('./src/js/core/custom.js')
        .pipe(jsImport({hideConsole: true}))
        .pipe(gulp.dest('src/js'));
});

// compile less
gulp.task('less', function () {
	fs.stat('./src/css/less/app.less', function(err, stat) {
		if(err != null) { console.log('Error:' + err.code);}
	});
	gulp.src('./src/css/less/app.less')
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(gulp.dest('./src/css/'));
});

// watch less
gulp.task('default', function () {
	gulp.watch(['./src/css/less/*.less', './src/css/less/_*.less'], ['less']);
});
