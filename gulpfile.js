// -------------------- Utils ------------------------------------
var path = require('path')

// -------------------- Required Gulp modules --------------------
var { task, src, dest, watch, series, parallel } = require('gulp'),
	concat = require('gulp-concat'),
	chmod = require('gulp-chmod'),
	plumber = require('gulp-plumber'),
	postcss = require('gulp-postcss'),
	sass = require('gulp-sass'),
	autoprefixer = require('autoprefixer'),
	cssnano = require('cssnano'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	uglify = require('gulp-uglify'),
	buffer = require('vinyl-buffer'),
	source = require('vinyl-source-stream'),
	rename = require('gulp-rename');

// -------------------- Configure object --------------------
var config = {};
var srcPath = './src'
config.src = path.resolve(srcPath)
config.JS = path.resolve(srcPath, 'js')
config.search = path.resolve(srcPath, 'js', 'search')
config.SCSS = path.resolve(srcPath, 'scss')
config.CSS = path.resolve(srcPath, 'css')
config.buildTasks = ['sass', 'js', 'search'];
config.jsFiles = ['node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js'];

//  -------------------- Gulp Tasks --------------------
// Compile SASS into CSS
task('sass', function () {
	var plugins = [
		autoprefixer(),
		cssnano()
	];
	return src(config.SCSS + '/*.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss(plugins))
		.pipe(chmod(0o755))
		.pipe(dest(config.CSS))
});

// Move the JS files into our /src/js folder
task('js', function () {
	return src(config.jsFiles)
		.pipe(plumber())
		.pipe(concat('vendor.js'))
		.pipe(dest(config.JS))
});

// Transpile search JS files
task('search', function() {

	var options = {
		entries: path.resolve(config.search, 'index.js'),
		extensions: [".js", ".jsx"],
		paths: [config.search]
	}

	return browserify(options)
		.transform(babelify.configure({ 
			presets: ["@babel/preset-env", "@babel/preset-react"]
		}))
		.bundle()
		.pipe(source("search.dev.js"))
		.pipe(dest(config.JS))
		.pipe(rename("search.prod.js"))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(dest(config.JS))
})

// Watches scss files
task('watch', series('sass', function (done) {
	watch([config.SCSS + '/*.scss', config.SCSS + '/_*.scss'], series('sass'));
	done();
}));

task('build', series(config.buildTasks));

task('default', series('watch'));