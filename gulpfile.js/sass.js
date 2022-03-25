const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css'); 

// For now, we will recompile all css files upon running this task
const compileSass = (cb) => {
	console.log("Compiling Css from Sass");

	return gulp
		.src("./src/scss/*main.scss")
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			cascade: false,
			grid: true,
		}))
		.pipe(cleanCss({ debug: true }, (details) => {
			console.log(`Starting size: ${details.name}: ${details.stats.originalSize}`);
			console.log(`Compiled Size: ${details.name}: ${details.stats.minifiedSize}`);
		}))
		.pipe(gulp.dest("./build/styles"))
}

module.exports = compileSass;