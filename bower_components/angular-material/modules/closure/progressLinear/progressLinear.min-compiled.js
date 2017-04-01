"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function MdProgressLinearDirective(e, a, r) {
  function n(e, a, r) {
    return e.attr("aria-valuemin", 0), e.attr("aria-valuemax", 100), e.attr("role", "progressbar"), t;
  }function t(r, n, t) {
    function c() {
      t.$observe("value", function (e) {
        var a = i(e);n.attr("aria-valuenow", a), g() != l && v(L, a);
      }), t.$observe("mdBufferValue", function (e) {
        v(M, i(e));
      }), t.$observe("disabled", function (e) {
        b = e === !0 || e === !1 ? !!e : angular.isDefined(e), n.toggleClass(m, b), $.toggleClass(f, !b);
      }), t.$observe("mdMode", function (e) {
        switch (f && $.removeClass(f), e) {case l:case d:case s:case o:
            $.addClass(f = "md-mode-" + e);break;default:
            $.addClass(f = "md-mode-" + o);}
      });
    }function u() {
      if (angular.isUndefined(t.mdMode)) {
        var e = angular.isDefined(t.value),
            a = e ? s : o;n.attr("md-mode", a), t.mdMode = a;
      }
    }function g() {
      var e = (t.mdMode || "").trim();if (e) switch (e) {case s:case o:case d:case l:
          break;default:
          e = o;}return e;
    }function v(e, r) {
      if (!b && g()) {
        var n = a.supplant("translateX({0}%) scale({1},1)", [(r - 100) / 2, r / 100]),
            t = p({ transform: n });angular.element(e).css(t);
      }
    }e(n);var f,
        b = t.hasOwnProperty("disabled"),
        p = a.dom.animator.toCss,
        M = angular.element(n[0].querySelector(".md-bar1")),
        L = angular.element(n[0].querySelector(".md-bar2")),
        $ = angular.element(n[0].querySelector(".md-container"));n.attr("md-mode", g()).toggleClass(m, b), u(), c();
  }function i(e) {
    return Math.max(0, Math.min(e || 0, 100));
  }var s = "determinate",
      o = "indeterminate",
      d = "buffer",
      l = "query",
      m = "_md-progress-linear-disabled";return { restrict: "E", template: '<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>', compile: n };
}goog.provide("ngmaterial.components.progressLinear"), goog.require("ngmaterial.core"), MdProgressLinearDirective.$inject = ["$mdTheming", "$mdUtil", "$log"], angular.module("material.components.progressLinear", ["material.core"]).directive("mdProgressLinear", MdProgressLinearDirective), ngmaterial.components.progressLinear = angular.module("material.components.progressLinear");

//# sourceMappingURL=progressLinear.min-compiled.js.map