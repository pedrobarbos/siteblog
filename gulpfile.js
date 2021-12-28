
"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");


sass.compiler = require ("node-sass");

gulp.task('sass', compilaSass);


function compilaSass(){
      return gulp
      .src ( scr/scss/**/* style.scss)
      .pipe (sass())
      .pipe (gulp.dest(src/scss))

}
 