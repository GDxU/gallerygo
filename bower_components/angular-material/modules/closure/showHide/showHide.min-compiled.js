"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function createDirective(e, i) {
  return ["$mdUtil", "$window", function (n, t) {
    return { restrict: "A", multiElement: !0, link: function link(o, r, a) {
        var c = o.$on("$md-resize-enable", function () {
          c();var d = r[0],
              m = d.nodeType === t.Node.ELEMENT_NODE ? t.getComputedStyle(d) : {};o.$watch(a[e], function (e) {
            if (!!e === i) {
              n.nextTick(function () {
                o.$broadcast("$md-resize");
              });var t = { cachedTransitionStyles: m };n.dom.animator.waitTransitionEnd(r, t).then(function () {
                o.$broadcast("$md-resize");
              });
            }
          });
        });
      } };
  }];
}goog.provide("ngmaterial.components.showHide"), goog.require("ngmaterial.core"), angular.module("material.components.showHide", ["material.core"]).directive("ngShow", createDirective("ngShow", !0)).directive("ngHide", createDirective("ngHide", !1)), ngmaterial.components.showHide = angular.module("material.components.showHide");

//# sourceMappingURL=showHide.min-compiled.js.map