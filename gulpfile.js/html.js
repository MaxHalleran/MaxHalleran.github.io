const gulp = require('gulp');
const htmlmin = require("gulp-htmlmin");

const minifyOptions = {
	collapseWhitespace: true,
	removeComments: true
}

const minifyHtml = (cb) => {
	console.log("Minifying HTML");

	return gulp
		.src("./src/*.html")
		.pipe(htmlmin( minifyOptions ))
		.pipe(gulp.dest('./build'));
}

module.exports = minifyHtml;