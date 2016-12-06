"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (i, t, e) {
  "use strict";
  !function () {
    function i(i) {
      return { restrict: "E", require: ["^?mdFabSpeedDial", "^?mdFabToolbar"], compile: function compile(t, e) {
          var a = t.children(),
              n = i.prefixer().hasAttribute(a, "ng-repeat");n ? a.addClass("md-fab-action-item") : a.wrap('<div class="md-fab-action-item">');
        } };
    }i.$inject = ["$mdUtil"], t.module("material.components.fabActions", ["material.core"]).directive("mdFabActions", i);
  }();
}(window, window.angular);

//# sourceMappingURL=fabActions.min-compiled.js.map