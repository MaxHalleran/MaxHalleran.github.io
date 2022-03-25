const { watch } = require('gulp');
const gulp = require('gulp');
const htmlmin = require("gulp-htmlmin");

const minifyOptions = {
	collapseWhitespace: true,
	removeComments: true
}

exports.minifyHtml = (cb) => {
	console.log("Minifying HTML");

	return gulp
		.src("./src/*.html")
		.pipe(htmlmin( minifyOptions ))
		.pipe(gulp.dest('./'));
};
