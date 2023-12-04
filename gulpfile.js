import gulp from "gulp";
import browserSync from "browser-sync";
import ejs from "gulp-ejs";
import ts from "gulp-typescript";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);
import rename from "gulp-rename";
import htmlbeautify from "gulp-html-beautify";
import autoprefixer from "gulp-autoprefixer";

function buildEjs() {
  return gulp
    .src(["./src/ejs/**/*.ejs", "!./src/ejs/**/_*.ejs"])
    .pipe(ejs({}, {}, { ext: ".html" }))
    .on("error", console.log)
    .pipe(rename({ extname: ".html" }))
    .pipe(
      htmlbeautify({
        indent_size: 2,
        preserve_newlines: false,
        indent_inner_html: true,
        extra_liners: [],
        end_with_newline: true,
      })
    )
    .pipe(gulp.dest("./dist/"));
}

function buildScripts(done) {
  let numEnd = 0
  function onEnd() {
    numEnd++
    if (numEnd === 2) {
      done();
    }
  }
  gulp
    .src("./src/**/*.+(js)")
    .pipe(gulp.dest("./dist/"))
    .on('end', onEnd)
  gulp
    .src("./src/**/*.+(ts)")
    .pipe(ts())
    .on("error", console.log)
    .pipe(gulp.dest("./dist/"))
    .on('end', onEnd)
}

function buildStyles(done) {
  let numEnd = 0
  function onEnd() {
    numEnd++
    if (numEnd === 2) {
      done();
    }
  }
  gulp
    .src("./src/**/*.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("./dist/"))
    .on('end', onEnd);
  gulp
    .src("./src/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./dist/"))
    .on('end', onEnd);
}

function buildImages() {
  return gulp
    .src("./src/**/*.+(jpg|jpeg|JPG|JPEG|png|PNG|svg|webp)")
    .pipe(gulp.dest("./dist/"));
}

function buildRawFiles() {
  return gulp
    .src("./src/**/*.+(ico|mp4|eot|ttf|woff|pdf|zip)")
    .pipe(gulp.dest("./dist/"));
}

function initBrowserSync(done) {
  browserSync.init({
    server: {
      baseDir: "./dist/",
      index: "index.html",
    },
    port: 3000,
    reloadOnRestart: true,
  })
  done()
}

function reload(done) {
  browserSync.reload();
  done();
}

function watch(done) {
  gulp.watch("./src/**/*.ejs", gulp.series(buildEjs, reload))
  gulp.watch("./src/**/*.(jpg|jpeg|JPG|JPEG|png|PNG|svg|webp)", gulp.series(buildImages, reload))
  gulp.watch("./src/**/*.(js|ts)", gulp.series(buildScripts, reload))
  gulp.watch("./src/**/*.(css|scss)", gulp.series(buildStyles, reload))
  gulp.watch("./src/**/*.(ico|mp4|eot|ttf|woff|pdf|zip)", gulp.series(buildRawFiles, reload))
  done()
}

gulp.task("build",
  gulp.parallel(
    buildEjs,
    buildImages,
    buildScripts,
    buildStyles,
    buildRawFiles,
  )
);

gulp.task("default",
  gulp.series("build", initBrowserSync, watch)
);
