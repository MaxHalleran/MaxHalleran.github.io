const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
// const babel = require('gulp-babel');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

function defaultTask(cb) {
	console.log("This is the default task for the personal portfolio.");
	console.log("This task should analyze the project and return helpful diagnostics.");
	cb();
}

function compileSass(cb) {
	console.log("Compiling Css from Sass");

	return gulp
		.src("./assets/sass/main.scss")
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			cascade: false,
			grid: true,
		}))
		.pipe(cleanCss({ debug: true }, (details) => {
			console.log(`${details.name}: ${details.stats.originalSize}`);
			console.log(`${details.name}: ${details.stats.minifiedSize}`);
		}))
		.pipe(gulp.dest("./output"))
}

exports.default = defaultTask;
exports.sass = compileSass;