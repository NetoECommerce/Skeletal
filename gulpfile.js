var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
	gulp.src('./src/css/app.less')
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(gulp.dest('./src/css/'));
});

gulp.task('default', function () {
	gulp.watch('./src/css/*.less', ['less']);
});
