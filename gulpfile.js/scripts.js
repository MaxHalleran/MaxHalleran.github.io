const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const minifyScripts = (cb) => {
	console.log("Compiling Scripts");

	return gulp
		.src("./src/scripts/*")
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./build/js/'));
}

module.exports = minifyScripts;