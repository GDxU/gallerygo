"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (e, a, r) {
  "use strict";
  function t(e, r, t) {
    function d(e, a, r) {
      return e.attr("aria-valuemin", 0), e.attr("aria-valuemax", 100), e.attr("role", "progressbar"), n;
    }function n(t, d, n) {
      function u() {
        n.$observe("value", function (e) {
          var a = i(e);d.attr("aria-valuenow", a), v() != l && b(h, a);
        }), n.$observe("mdBufferValue", function (e) {
          b($, i(e));
        }), n.$observe("disabled", function (e) {
          p = e === !0 || e === !1 ? !!e : a.isDefined(e), d.toggleClass(c, p), C.toggleClass(g, !p);
        }), n.$observe("mdMode", function (e) {
          switch (g && C.removeClass(g), e) {case l:case m:case s:case o:
              C.addClass(g = "md-mode-" + e);break;default:
              C.addClass(g = "md-mode-" + o);}
        });
      }function f() {
        if (a.isUndefined(n.mdMode)) {
          var e = a.isDefined(n.value),
              r = e ? s : o;d.attr("md-mode", r), n.mdMode = r;
        }
      }function v() {
        var e = (n.mdMode || "").trim();if (e) switch (e) {case s:case o:case m:case l:
            break;default:
            e = o;}return e;
      }function b(e, t) {
        if (!p && v()) {
          var d = r.supplant("translateX({0}%) scale({1},1)", [(t - 100) / 2, t / 100]),
              n = w({ transform: d });a.element(e).css(n);
        }
      }e(d);var g,
          p = n.hasOwnProperty("disabled"),
          w = r.dom.animator.toCss,
          $ = a.element(d[0].querySelector(".md-bar1")),
          h = a.element(d[0].querySelector(".md-bar2")),
          C = a.element(d[0].querySelector(".md-container"));d.attr("md-mode", v()).toggleClass(c, p), f(), u();
    }function i(e) {
      return Math.max(0, Math.min(e || 0, 100));
    }var s = "determinate",
        o = "indeterminate",
        m = "buffer",
        l = "query",
        c = "_md-progress-linear-disabled";return { restrict: "E", template: '<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>', compile: d };
  }t.$inject = ["$mdTheming", "$mdUtil", "$log"], a.module("material.components.progressLinear", ["material.core"]).directive("mdProgressLinear", t);
}(window, window.angular);

//# sourceMappingURL=progressLinear.min-compiled.js.map