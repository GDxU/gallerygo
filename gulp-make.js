import bowerMin from 'bower-min'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import merge2 from 'merge2'
import gulpIgnore from 'gulp-ignore'
import exists, {sync} from 'path-exists'
import obfuscate from 'gulp-obfuscate'
import gulp from 'gulp'

const bowerMinJavaScriptFiles = bowerMin('js', 'min.js');
/*
 * A function that checks whether a Bower file has a minified version.
 */
function keepNonMinified(file) {
  var keep = true;
  if (file.path.match('\.js$')) {
    var minPath = file.path.replace('.js', '.min.js');
    keep = !sync(minPath);

  } else if (file.path.match('\.css$')) {
    var minPath = file.path.replace('.css', '.min.css');
    keep = !sync(minPath);
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
