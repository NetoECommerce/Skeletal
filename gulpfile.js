var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var fs = require('fs');
var international = require('gulp-international');

gulp.task('less', function () {
	fs.stat('./src/css/app.less', function(err, stat) {
		if(err != null) {
			console.log('Error:' + err.code);
		}
	});
	gulp.src('./src/css/app.less')
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(gulp.dest('./src/css/'));
});

gulp.task('translate', function () {
	return gulp.src('src/**/*.*')
		.pipe(international({
			//dryRun: true,
            verbose: true,
			encodeEntities: false,
			filename: '${lang}/${path}/${name}.${ext}',
			delimiter: {
				prefix: '${',
				suffix: '}'
			}
		}))
		.pipe(gulp.dest('./dist'));
});

gulp.task('default', function () {
	gulp.watch('./src/css/*.less', ['less']);
});
