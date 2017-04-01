"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (n, e, i) {
  "use strict";
  function t(n, e) {
    return ["$mdUtil", "$window", function (i, t) {
      return { restrict: "A", multiElement: !0, link: function link(o, r, a) {
          var d = o.$on("$md-resize-enable", function () {
            d();var c = r[0],
                u = c.nodeType === t.Node.ELEMENT_NODE ? t.getComputedStyle(c) : {};o.$watch(a[n], function (n) {
              if (!!n === e) {
                i.nextTick(function () {
                  o.$broadcast("$md-resize");
                });var t = { cachedTransitionStyles: u };i.dom.animator.waitTransitionEnd(r, t).then(function () {
                  o.$broadcast("$md-resize");
                });
              }
            });
          });
        } };
    }];
  }e.module("material.components.showHide", ["material.core"]).directive("ngShow", t("ngShow", !0)).directive("ngHide", t("ngHide", !1));
}(window, window.angular);

//# sourceMappingURL=showHide.min-compiled.js.map