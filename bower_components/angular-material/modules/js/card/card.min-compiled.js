"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (n, i, t) {
  "use strict";
  function e(n) {
    return { restrict: "E", link: function link(i, t, e) {
        t.addClass("_md"), n(t);
      } };
  }e.$inject = ["$mdTheming"], i.module("material.components.card", ["material.core"]).directive("mdCard", e);
}(window, window.angular);

//# sourceMappingURL=card.min-compiled.js.map