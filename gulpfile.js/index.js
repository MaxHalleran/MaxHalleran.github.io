const gulp = require('gulp');

const compileScripts = require("./scripts");
const compileSass = require("./sass");
const compileHTML = require("./html");
const migrateDocs = require("./assets");
const { series } = require('gulp');

function defaultTask(cb) {
	console.log("This is the default task for the personal portfolio.");
	console.log("This task should analyze the project and return helpful diagnostics.");
	cb();
}

exports.default = defaultTask;
exports.sass = compileSass;
exports.html = compileHTML;
exports.docs = migrateDocs;
exports.scripts = compileScripts;

function buildFull(cb) {
	console.log("Building entire site");

	console.log(compileSass);

	series(compileSass, compileHTML, compileScripts, migrateDocs);
	cb();
}

exports.buildFull = series(compileSass, compileHTML, compileScripts, migrateDocs);