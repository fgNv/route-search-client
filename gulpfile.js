var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    gp_sourcemaps = require('gulp-sourcemaps');

var jsVendorPaths = [
    './node_modules/angular/angular.js',
    './node_modules/jquery/dist/jquery.js',
    './node_modules/angular-ui-router/release/angular-ui-router.js',
    './node_modules/bootstrap/dist/js/bootstrap.js',
];

gulp.task('watch-src', function () {     
    gulp.watch('App/**/*', ['copy-src']);
    gulp.watch('Views/**/*', ['copy-src']);
});

gulp.task('copy-src', function() {
   gulp.src('./App/**/*').pipe(gulp.dest('./public/app'));
   gulp.src('./Views/**/*').pipe(gulp.dest('./public/views'));
});

gulp.task('copy-bootstrap', function() {
   gulp.src('./node_modules/bootstrap/dist/**/*')
       .pipe(gulp.dest('./public/bootstrap'));
});

gulp.task('js-vendors', function(){
    return gulp.src(jsVendorPaths)
        .pipe(gp_sourcemaps.init())
        .pipe(gp_concat('concat.js'))
        .pipe(gulp.dest('./public/dist'))
        .pipe(gp_rename('vendors.js'))
        .pipe(gp_uglify())
        .pipe(gp_sourcemaps.write('./'))
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('default', ['js-vendors', 'copy-bootstrap', 'copy-src'], function(){});

