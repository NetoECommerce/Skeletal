var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var fs = require('fs');

gulp.task('less', function () {
	fs.stat('./src/css/less/app.less', function(err, stat) {
		if(err != null) {
			console.log('Error:' + err.code);
		}
	});
	gulp.src('./src/css/less/app.less')
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(gulp.dest('./src/css/'));
});

gulp.task('default', function () {
	gulp.watch(['./src/css/less/*.less', './src/css/less/_*.less'], ['less']);
});
