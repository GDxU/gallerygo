"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function MdSwitch(e, t, n, a, r, i, o) {
  function d(e, d) {
    var c = l.compile(e, d).post;return e.addClass("md-dragging"), function (e, d, l, s) {
      function m(t) {
        v && v(e) || (t.stopPropagation(), d.addClass("md-dragging"), b = { width: h.prop("offsetWidth") });
      }function g(e) {
        if (b) {
          e.stopPropagation(), e.srcEvent && e.srcEvent.preventDefault();var t = e.pointer.distanceX / b.width,
              a = s.$viewValue ? 1 + t : t;a = Math.max(0, Math.min(1, a)), h.css(n.CSS.TRANSFORM, "translate3d(" + 100 * a + "%,0,0)"), b.translate = a;
        }
      }function u(t) {
        if (b) {
          t.stopPropagation(), d.removeClass("md-dragging"), h.css(n.CSS.TRANSFORM, "");var a = s.$viewValue ? b.translate < .5 : b.translate > .5;a && p(!s.$viewValue), b = null, e.skipToggle = !0, o(function () {
            e.skipToggle = !1;
          }, 1);
        }
      }function p(t) {
        e.$apply(function () {
          s.$setViewValue(t), s.$render();
        });
      }s = s || t.fakeNgModel();var v = null;null != l.disabled ? v = function v() {
        return !0;
      } : l.ngDisabled && (v = a(l.ngDisabled));var h = angular.element(d[0].querySelector(".md-thumb-container")),
          f = angular.element(d[0].querySelector(".md-container")),
          $ = angular.element(d[0].querySelector(".md-label"));r(function () {
        d.removeClass("md-dragging");
      }), c(e, d, l, s), v && e.$watch(v, function (e) {
        d.attr("tabindex", e ? -1 : 0);
      }), l.$observe("mdInvert", function (e) {
        var n = t.parseAttributeBoolean(e);n ? d.prepend($) : d.prepend(f), d.toggleClass("md-inverted", n);
      }), i.register(f, "drag"), f.on("$md.dragstart", m).on("$md.drag", g).on("$md.dragend", u);var b;
    };
  }var l = e[0];return { restrict: "E", priority: n.BEFORE_NG_ARIA, transclude: !0, template: '<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>', require: "?ngModel", compile: d };
}goog.provide("ngmaterial.components.switch"), goog.require("ngmaterial.components.checkbox"), goog.require("ngmaterial.core"), MdSwitch.$inject = ["mdCheckboxDirective", "$mdUtil", "$mdConstant", "$parse", "$$rAF", "$mdGesture", "$timeout"], angular.module("material.components.switch", ["material.core", "material.components.checkbox"]).directive("mdSwitch", MdSwitch), ngmaterial.components["switch"] = angular.module("material.components.switch");

//# sourceMappingURL=switch.min-compiled.js.map