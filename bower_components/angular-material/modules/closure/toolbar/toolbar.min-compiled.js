"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function mdToolbarDirective(n, o, t, a, r) {
  var e = angular.bind(null, t.supplant, "translate3d(0,{0}px,0)");return { template: "", restrict: "E", link: function link(i, l, c) {
      function m() {
        function a(n) {
          var o = l.parent().find("md-content");!f && o.length && m(null, o), n = i.$eval(n), n === !1 ? p() : p = d();
        }function m(n, o) {
          o && l.parent()[0] === o.parent()[0] && (f && f.off("scroll", S), f = o, p = d());
        }function s(n) {
          var a = n ? n.target.scrollTop : $;b(), h = Math.min(g / v, Math.max(0, h + a - $)), l.css(o.CSS.TRANSFORM, e([-h * v])), f.css(o.CSS.TRANSFORM, e([(g - h) * v])), $ = a, t.nextTick(function () {
            var n = l.hasClass("md-whiteframe-z1");n && !h ? r.removeClass(l, "md-whiteframe-z1") : !n && h && r.addClass(l, "md-whiteframe-z1");
          });
        }function d() {
          return f ? (f.on("scroll", S), f.attr("scroll-shrink", "true"), t.nextTick(u, !1), function () {
            f.off("scroll", S), f.attr("scroll-shrink", "false"), u();
          }) : angular.noop;
        }function u() {
          g = l.prop("offsetHeight");var n = -g * v + "px";f.css({ "margin-top": n, "margin-bottom": n }), s();
        }var g,
            f,
            p = angular.noop,
            h = 0,
            $ = 0,
            v = c.mdShrinkSpeedFactor || .5,
            S = n.throttle(s),
            b = t.debounce(u, 5e3);i.$on("$mdContentLoaded", m), c.$observe("mdScrollShrink", a), c.ngShow && i.$watch(c.ngShow, u), c.ngHide && i.$watch(c.ngHide, u), i.$on("$destroy", p);
      }l.addClass("_md"), a(l), t.nextTick(function () {
        l.addClass("_md-toolbar-transitions");
      }, !1), angular.isDefined(c.mdScrollShrink) && m();
    } };
}goog.provide("ngmaterial.components.toolbar"), goog.require("ngmaterial.components.content"), goog.require("ngmaterial.core"), mdToolbarDirective.$inject = ["$$rAF", "$mdConstant", "$mdUtil", "$mdTheming", "$animate"], angular.module("material.components.toolbar", ["material.core", "material.components.content"]).directive("mdToolbar", mdToolbarDirective), ngmaterial.components.toolbar = angular.module("material.components.toolbar");

//# sourceMappingURL=toolbar.min-compiled.js.map