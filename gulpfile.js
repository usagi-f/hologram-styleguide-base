'use strict'

var gulp = require('gulp'),
    hologram = require('gulp-hologram'),
    concat = require('gulp-concat');

gulp.task('concat', function() {
    gulp.src('src/category/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('src'));
});

gulp.task('hologram', function() {
    gulp.src('hologram_config.yml')
    .pipe(hologram());
});

gulp.task('default', ['concat', 'hologram']);