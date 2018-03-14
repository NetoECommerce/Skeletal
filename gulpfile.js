const path = require('path');
const fs = require('fs');

const gulp = require('gulp');
const less = require('gulp-less');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

const src = './src/';

// Use next-gen js, today
gulp.task('babel', function() {
	gulp.src(src +'js/core/*.js')
	.pipe(babel({
		presets: [
			['env' ,
				{
					modules: false,
					"targets": {
						"browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
					}
				}
			]
		]
	}))
	.pipe(concat('custom.js'))
	.pipe(gulp.dest(src +'js'));
});

// Compile less
gulp.task('less', function () {
	fs.stat(src +'css/less/app.less', function(err, stat) {
		if(err != null) { console.log('Error:' + err.code);}
	});
	gulp.src(src +'css/less/app.less')
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(gulp.dest(src +'css/'));
});

// Watch assets
gulp.task('default', function () {
	gulp.watch([src +'css/less/*.less', src +'css/less/_*.less'], ['less']);
	gulp.watch([src +'js/core/*.js'], ['babel']);
});
