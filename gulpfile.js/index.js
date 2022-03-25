const { series, watch, parallel } = require('gulp');

const compileScripts = require("./scripts");
const compileSass = require("./sass");
const { minifyHtml } = require("./html");
const migrateDocs = require("./assets");

function defaultTask(cb) {
	console.log("This is the default task for the personal portfolio.");
	console.log("This task should analyze the project and return helpful diagnostics.");
	cb();
}

exports.default = defaultTask;
exports.sass = compileSass;
exports.html = minifyHtml;
exports.docs = migrateDocs;
exports.scripts = compileScripts;

exports.buildFull = series(compileSass, minifyHtml, compileScripts, migrateDocs);

exports.watchHtml = () => {
	console.log("Watching HTML");

	return watch('./src/*.html', { ignoreInitial: false }, minifyHtml);
};

exports.watchJs = () => {
	console.log("Watching JS");

	return watch('./src/scripts/*.js', { ignoreInitial: false }, compileScripts);
};

exports.watchSass = () => {
	console.log("Watching CSS");

	return watch('./src/**/*.scss', { ignoreInitial: false }, compileSass);
};

exports.watch = parallel( this.watchHtml, this.watchJs, this.watchSass );