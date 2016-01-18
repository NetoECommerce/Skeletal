var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
	gulp.src('./httpdocs/assets/themes/**/css/app.less')
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(gulp.dest('./httpdocs/assets/themes/'));
});

gulp.task('default', function () {
	gulp.watch('./httpdocs/assets/themes/*/css/**/*.less', ['less']);
});
