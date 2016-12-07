'use strict';

var _bowerMin = require('bower-min');

var _bowerMin2 = _interopRequireDefault(_bowerMin);

var _gulpConcat = require('gulp-concat');

var _gulpConcat2 = _interopRequireDefault(_gulpConcat);

var _gulpUglify = require('gulp-uglify');

var _gulpUglify2 = _interopRequireDefault(_gulpUglify);

var _merge = require('merge2');

var _merge2 = _interopRequireDefault(_merge);

var _gulpIgnore = require('gulp-ignore');

var _gulpIgnore2 = _interopRequireDefault(_gulpIgnore);

var _pathExists = require('path-exists');

var _pathExists2 = _interopRequireDefault(_pathExists);

var _gulpObfuscate = require('gulp-obfuscate');

var _gulpObfuscate2 = _interopRequireDefault(_gulpObfuscate);

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bowerMinJavaScriptFiles = (0, _bowerMin2.default)('js', 'min.js');
/*
 * A function that checks whether a Bower file has a minified version.
 */
function keepNonMinified(file) {
  var keep = true;
  if (file.path.match('\.js$')) {
    var minPath = file.path.replace('.js', '.min.js');
    keep = !(0, _pathExists.sync)(minPath);
  } else if (file.path.match('\.css$')) {
    var minPath = file.path.replace('.css', '.min.css');
    keep = !(0, _pathExists.sync)(minPath);
  }
  // gutil.log( file.path + ' => ' + keep );
  return keep;
}

// Create some task
_gulp2.default.task('copy-bower-dep', function () {
  // Copy minified resources (Bower)
  _gulp2.default.src(bowermin('js', 'min.js').minified, { base: './my-bower-components/dir' }).pipe(_gulp2.default.dest('./target/dist/lib'));

  _gulp2.default.src(bowermin('css', 'min.css').minified, { base: './my-bower-components/dir' }).pipe(_gulp2.default.dest('./target/dist/lib'));

  // Copy non-minified resources (Bower)
  // Notice we filter these resources to distinguish which one are minified.
  _gulp2.default.src(mainBowerFiles(), { base: './my-bower-components/dir' }).pipe(_gulpIgnore2.default.include(keepNonMinified)).pipe(_gulp2.default.dest('./target/dist/lib'));
});

_gulp2.default.task('vendorScriptsDevelopment', function () {
  return _gulp2.default.src(bowerMinJavaScriptFiles.normal).pipe((0, _gulpConcat2.default)('vendor-scripts.js')).pipe(_gulp2.default.dest('dev'));
});

_gulp2.default.task('vendorScriptsProduction', function () {
  return (0, _merge2.default)(_gulp2.default.src(bowerMinJavaScriptFiles.minified), _gulp2.default.src(bowerMinJavaScriptFiles.minifiedNotFound).pipe((0, _gulpConcat2.default)('tmp.min.js')).pipe((0, _gulpUglify2.default)())).pipe((0, _gulpConcat2.default)('vendor-scripts.min.js')).pipe(_gulp2.default.dest('dist'));
});

// Concatenate JS Files
_gulp2.default.task('scripts', function () {
  return _gulp2.default.src('js/*.js').pipe((0, _gulpConcat2.default)('main.js')).pipe(_gulp2.default.dest('dist/js'));
});
// Default Task
_gulp2.default.task('default', ['scripts']);

//# sourceMappingURL=gulp-make-compiled.js.map