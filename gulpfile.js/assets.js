const gulp = require('gulp');

const migrateDocs = (cb) => {
	console.log("migrating docs");

	return gulp
		.src('./src/assets/docs/*.pdf')
		.pipe(gulp.dest('./build/assets/docs/'));
}

module.exports = migrateDocs;