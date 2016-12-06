"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (e, t, a) {
  "use strict";
  function i(e) {
    function t(t, m, d) {
      var o = "";d.$observe("mdWhiteframe", function (t) {
        t = parseInt(t, 10) || r, t != a && (t > n || t < i) && (e.warn("md-whiteframe attribute value is invalid. It should be a number between " + i + " and " + n, m[0]), t = r);var u = t == a ? "" : "md-whiteframe-" + t + "dp";d.$updateClass(u, o), o = u;
      });
    }var a = -1,
        i = 1,
        n = 24,
        r = 4;return { link: t };
  }i.$inject = ["$log"], t.module("material.components.whiteframe", ["material.core"]).directive("mdWhiteframe", i);
}(window, window.angular);

//# sourceMappingURL=whiteframe.min-compiled.js.map