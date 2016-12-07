/**
 * Created by hesk on 16年12月7日.
 */
var bowerMin = require('bower-min');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var merge2 = require('merge2');
var gulpIgnore = require('gulp-ignore');
var exists = require('path-exists').sync;
var gulp = require('gulp');

var bowerMinJavaScriptFiles = bowerMin('js', 'min.js');
/*
 * A function that checks whether a Bower file has a minified version.
 */
function keepNonMinified(file) {
  var keep = true;
  if (file.path.match('\.js$')) {
    var minPath = file.path.replace('.js', '.min.js');
    keep = !exists(minPath);

  } else if (file.path.match('\.css$')) {
    var minPath = file.path.replace('.css', '.min.css');
    keep = !exists(minPath);
  }
  // gutil.log( file.path + ' => ' + keep );
  return keep;
}

// Create some task
gulp.task('copy-bower-dep', ()=> {
  // Copy minified resources (Bower)
  gulp.src(bowermin('js', 'min.js').minified, {base: './my-bower-components/dir'})
    .pipe(gulp.dest('./target/dist/lib'));

  gulp.src(bowermin('css', 'min.css').minified, {base: './my-bower-components/dir'})
    .pipe(gulp.dest('./target/dist/lib'));

  // Copy non-minified resources (Bower)
  // Notice we filter these resources to distinguish which one are minified.
  gulp.src(mainBowerFiles(), {base: './my-bower-components/dir'})
    .pipe(gulpIgnore.include(keepNonMinified))
    .pipe(gulp.dest('./target/dist/lib'));
});

gulp.task('vendorScriptsDevelopment', ()=> {
  return gulp.src(bowerMinJavaScriptFiles.normal)
    .pipe(concat('vendor-scripts.js'))
    .pipe(gulp.dest('dev'))
});

gulp.task('vendorScriptsProduction', ()=> {
  return merge2(
    gulp.src(bowerMinJavaScriptFiles.minified),
    gulp.src(bowerMinJavaScriptFiles.minifiedNotFound)
      .pipe(concat('tmp.min.js'))
      .pipe(uglify())
  )
    .pipe(concat('vendor-scripts.min.js'))
    .pipe(gulp.dest('dist'))
});

// Concatenate JS Files
gulp.task('scripts', function () {
  return gulp.src('js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});
// Default Task
gulp.task('default', ['scripts']);
