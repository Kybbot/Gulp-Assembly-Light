const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const atoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const del = require('del');

let projectFolder = 'result';
let sourceFolder = 'build';

let path = {
	resultSrc: {
		html: projectFolder + '/',
		css: projectFolder + '/css/',
		js: projectFolder + '/js/',
		img: projectFolder + '/img/',
		fonts: projectFolder + '/fonts/'
	},
	buildSrc: {
		html: sourceFolder + '/*.html',
		css: sourceFolder + '/sass/main.sass',
		js: sourceFolder + '/js/main.js',
		img: sourceFolder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
		fonts: sourceFolder + '/fonts/**/*.*'
	},
	watchSrc: {
		html: sourceFolder + '/**/*.html',
		css: sourceFolder + '/sass/**/*sass',
		js: sourceFolder + '/js/**/*.js',
		img: sourceFolder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
		fonts: sourceFolder + '/fonts/**/*.*'
	},
	cleanSrc: './' + projectFolder + '/'
}

function html() {
	return src(path.buildSrc.html)
	.pipe(dest(path.resultSrc.html))
	.pipe(browserSync.stream())
}

function css() {
	return src(path.buildSrc.css)
	.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))	
	.pipe(atoprefixer(['last 15 versions']))
	.pipe(dest(path.resultSrc.css))
	.pipe(cleanCss())
	.pipe(rename({ suffix: '.min', prefix : '' }))
	.pipe(dest(path.resultSrc.css))
	.pipe(browserSync.stream())
}

function js() {
	return src(path.buildSrc.js)
	.pipe(dest(path.resultSrc.js))
	.pipe(uglify())
	.pipe(rename({ suffix: '.min', prefix : '' }))
	.pipe(dest(path.resultSrc.js))
	.pipe(browserSync.stream())
}

function img() {
	return src(path.buildSrc.img)
	.pipe(dest(path.resultSrc.img))
}

function fonts() {
	return src(path.buildSrc.fonts)
	.pipe(dest(path.resultSrc.fonts))
}

function watchFiles() {
	watch(path.watchSrc.html, html)
	watch(path.watchSrc.css, css)
	watch(path.watchSrc.js, js)
	watch(path.watchSrc.img, img)
	watch(path.watchSrc.fonts, fonts)
}

function serve() {
	browserSync.init({
		server: {
			baseDir: projectFolder + '/'
		},
		port: 3000
	});
}

function clean() {
	return del(path.cleanSrc)
}

const build = series(clean, parallel(html, css, js, img, fonts)); 

exports.html = html;
exports.css = css;
exports.js = js;
exports.img = img;
exports.fonts = fonts;
exports.build = build;
exports.serve = serve;
exports.default = parallel(build, watchFiles, serve);