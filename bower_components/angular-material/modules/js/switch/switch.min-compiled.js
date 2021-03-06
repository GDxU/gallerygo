"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (e, t, n) {
  "use strict";
  function a(e, n, a, i, r, d, o) {
    function l(e, l) {
      var c = s.compile(e, l).post;return e.addClass("md-dragging"), function (e, l, s, m) {
        function u(t) {
          f && f(e) || (t.stopPropagation(), l.addClass("md-dragging"), w = { width: $.prop("offsetWidth") });
        }function g(e) {
          if (w) {
            e.stopPropagation(), e.srcEvent && e.srcEvent.preventDefault();var t = e.pointer.distanceX / w.width,
                n = m.$viewValue ? 1 + t : t;n = Math.max(0, Math.min(1, n)), $.css(a.CSS.TRANSFORM, "translate3d(" + 100 * n + "%,0,0)"), w.translate = n;
          }
        }function p(t) {
          if (w) {
            t.stopPropagation(), l.removeClass("md-dragging"), $.css(a.CSS.TRANSFORM, "");var n = m.$viewValue ? w.translate < .5 : w.translate > .5;n && v(!m.$viewValue), w = null, e.skipToggle = !0, o(function () {
              e.skipToggle = !1;
            }, 1);
          }
        }function v(t) {
          e.$apply(function () {
            m.$setViewValue(t), m.$render();
          });
        }m = m || n.fakeNgModel();var f = null;null != s.disabled ? f = function f() {
          return !0;
        } : s.ngDisabled && (f = i(s.ngDisabled));var $ = t.element(l[0].querySelector(".md-thumb-container")),
            b = t.element(l[0].querySelector(".md-container")),
            h = t.element(l[0].querySelector(".md-label"));r(function () {
          l.removeClass("md-dragging");
        }), c(e, l, s, m), f && e.$watch(f, function (e) {
          l.attr("tabindex", e ? -1 : 0);
        }), s.$observe("mdInvert", function (e) {
          var t = n.parseAttributeBoolean(e);t ? l.prepend(h) : l.prepend(b), l.toggleClass("md-inverted", t);
        }), d.register(b, "drag"), b.on("$md.dragstart", u).on("$md.drag", g).on("$md.dragend", p);var w;
      };
    }var s = e[0];return { restrict: "E", priority: a.BEFORE_NG_ARIA, transclude: !0, template: '<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>', require: "?ngModel", compile: l };
  }a.$inject = ["mdCheckboxDirective", "$mdUtil", "$mdConstant", "$parse", "$$rAF", "$mdGesture", "$timeout"], t.module("material.components.switch", ["material.core", "material.components.checkbox"]).directive("mdSwitch", a);
}(window, window.angular);

//# sourceMappingURL=switch.min-compiled.js.map