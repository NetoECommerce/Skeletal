// -------------------- Required modules --------------------
var { task, src, dest, watch, series } = require('gulp'),
	less = require('gulp-less'),
	path = require('path'),
	fs = require('fs');

//  -------------------- Gulp Tasks --------------------
// Compile LESS into CSS
task('less', function () {
	fs.stat('./src/css/less/app.less', function(err, stat) {
		if(err != null) { console.log('Error:' + err.code); }
	});
	return src('./src/css/less/app.less')
		.pipe(less({ paths: [ path.join(__dirname, 'less', 'includes') ] }))
		.pipe(dest('./src/css/'));
});

// Watches less files
task('watch', series('less', function(done) {
	watch(['./src/css/less/*.less', './src/css/less/_*.less'], series('less'));
	done();
}));

task('default', series('watch'));