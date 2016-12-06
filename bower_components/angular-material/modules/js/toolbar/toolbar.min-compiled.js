"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (n, t, o) {
  "use strict";
  function e(n, o, e, r, a) {
    var i = t.bind(null, e.supplant, "translate3d(0,{0}px,0)");return { template: "", restrict: "E", link: function link(l, s, c) {
        function d() {
          function r(n) {
            var t = s.parent().find("md-content");!p && t.length && d(null, t), n = l.$eval(n), n === !1 ? $() : $ = f();
          }function d(n, t) {
            t && s.parent()[0] === t.parent()[0] && (p && p.off("scroll", v), p = t, $ = f());
          }function m(n) {
            var t = n ? n.target.scrollTop : g;k(), S = Math.min(h / w, Math.max(0, S + t - g)), s.css(o.CSS.TRANSFORM, i([-S * w])), p.css(o.CSS.TRANSFORM, i([(h - S) * w])), g = t, e.nextTick(function () {
              var n = s.hasClass("md-whiteframe-z1");n && !S ? a.removeClass(s, "md-whiteframe-z1") : !n && S && a.addClass(s, "md-whiteframe-z1");
            });
          }function f() {
            return p ? (p.on("scroll", v), p.attr("scroll-shrink", "true"), e.nextTick(u, !1), function () {
              p.off("scroll", v), p.attr("scroll-shrink", "false"), u();
            }) : t.noop;
          }function u() {
            h = s.prop("offsetHeight");var n = -h * w + "px";p.css({ "margin-top": n, "margin-bottom": n }), m();
          }var h,
              p,
              $ = t.noop,
              S = 0,
              g = 0,
              w = c.mdShrinkSpeedFactor || .5,
              v = n.throttle(m),
              k = e.debounce(u, 5e3);l.$on("$mdContentLoaded", d), c.$observe("mdScrollShrink", r), c.ngShow && l.$watch(c.ngShow, u), c.ngHide && l.$watch(c.ngHide, u), l.$on("$destroy", $);
        }s.addClass("_md"), r(s), e.nextTick(function () {
          s.addClass("_md-toolbar-transitions");
        }, !1), t.isDefined(c.mdScrollShrink) && d();
      } };
  }e.$inject = ["$$rAF", "$mdConstant", "$mdUtil", "$mdTheming", "$animate"], t.module("material.components.toolbar", ["material.core", "material.components.content"]).directive("mdToolbar", e);
}(window, window.angular);

//# sourceMappingURL=toolbar.min-compiled.js.map