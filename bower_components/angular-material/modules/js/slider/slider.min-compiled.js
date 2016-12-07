"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (e, t, i) {
  "use strict";
  function n() {
    return { controller: function controller() {}, compile: function compile(e) {
        var n = e.find("md-slider");if (n) {
          var a = n.attr("md-vertical");return a !== i && e.attr("md-vertical", ""), n.attr("flex") || n.attr("flex", ""), function (e, i, n, a) {
            function r(e) {
              i.children().attr("disabled", e), i.find("input").attr("disabled", e);
            }i.addClass("_md");var o = t.noop;n.disabled ? r(!0) : n.ngDisabled && (o = e.$watch(n.ngDisabled, function (e) {
              r(e);
            })), e.$on("$destroy", function () {
              o();
            });var d;a.fitInputWidthToTextLength = function (e) {
              var t = i[0].querySelector("md-input-container");if (t) {
                var n = getComputedStyle(t),
                    a = parseInt(n.minWidth),
                    r = 2 * parseInt(n.padding);d = d || parseInt(n.maxWidth);var o = Math.max(d, a + r + a / 2 * e);t.style.maxWidth = o + "px";
              }
            };
          };
        }
      } };
  }function a(e, i, n, a, r, o, d, s, l, u) {
    function c(e, i) {
      var a = t.element(e[0].getElementsByClassName("md-slider-wrapper")),
          r = i.tabindex || 0;return a.attr("tabindex", r), (i.disabled || i.ngDisabled) && a.attr("tabindex", -1), a.attr("role", "slider"), n.expect(e, "aria-label"), m;
    }function m(n, c, m, f) {
      function v() {
        C(), S();
      }function h(e) {
        se = parseFloat(e), c.attr("aria-valuemin", e), v();
      }function p(e) {
        le = parseFloat(e), c.attr("aria-valuemax", e), v();
      }function g(e) {
        ue = parseFloat(e);
      }function $(e) {
        ce = A(parseInt(e), 0, 6);
      }function b() {
        c.attr("aria-disabled", !!G());
      }function w() {
        if (ae && !G() && !t.isUndefined(ue)) {
          if (ue <= 0) {
            var e = "Slider step value must be greater than zero when in discrete mode";throw l.error(e), new Error(e);
          }var n = Math.floor((le - se) / ue);me || (me = t.element("<canvas>").css("position", "absolute"), Z.append(me), fe = me[0].getContext("2d"));var a = x();!a || a.height || a.width || (C(), a = ve), me[0].width = a.width, me[0].height = a.height;for (var r, o = 0; o <= n; o++) {
            var d = i.getComputedStyle(Z[0]);fe.fillStyle = d.color || "black", r = Math.floor((ne ? a.height : a.width) * (o / n)), fe.fillRect(ne ? 0 : r - 1, ne ? r - 1 : 0, ne ? a.width : 2, ne ? 2 : a.height);
          }
        }
      }function y() {
        if (me && fe) {
          var e = x();fe.clearRect(0, 0, e.width, e.height);
        }
      }function C() {
        ve = Q[0].getBoundingClientRect();
      }function x() {
        return te(), ve;
      }function D(e) {
        if (!G()) {
          var t;(ne ? e.keyCode === r.KEY_CODE.DOWN_ARROW : e.keyCode === r.KEY_CODE.LEFT_ARROW) ? t = -ue : (ne ? e.keyCode === r.KEY_CODE.UP_ARROW : e.keyCode === r.KEY_CODE.RIGHT_ARROW) && (t = ue), t = re ? -t : t, t && ((e.metaKey || e.ctrlKey || e.altKey) && (t *= 4), e.preventDefault(), e.stopPropagation(), n.$evalAsync(function () {
            M(Y.$viewValue + t);
          }));
        }
      }function V() {
        w(), n.mouseActive = !0, ee.removeClass("md-focused"), u(function () {
          n.mouseActive = !1;
        }, 100);
      }function k() {
        n.mouseActive === !1 && ee.addClass("md-focused");
      }function E() {
        ee.removeClass("md-focused"), c.removeClass("md-active"), y();
      }function M(e) {
        Y.$setViewValue(A(R(e)));
      }function S() {
        isNaN(Y.$viewValue) && (Y.$viewValue = Y.$modelValue), Y.$viewValue = A(Y.$viewValue);var e = B(Y.$viewValue);n.modelValue = Y.$viewValue, c.attr("aria-valuenow", Y.$viewValue), W(e), H.text(Y.$viewValue);
      }function A(e, i, n) {
        if (t.isNumber(e)) return i = t.isNumber(i) ? i : se, n = t.isNumber(n) ? n : le, Math.max(i, Math.min(n, e));
      }function R(e) {
        if (t.isNumber(e)) {
          var i = Math.round((e - se) / ue) * ue + se;return i = Math.round(i * Math.pow(10, ce)) / Math.pow(10, ce), U && U.fitInputWidthToTextLength && a.debounce(function () {
            U.fitInputWidthToTextLength(i.toString().length);
          }, 100)(), i;
        }
      }function W(e) {
        e = P(e);var t = 100 * e + "%",
            i = re ? 100 * (1 - e) + "%" : t;ne ? J.css("bottom", t) : a.bidiProperty(J, "left", "right", t), X.css(ne ? "height" : "width", i), c.toggleClass(re ? "md-max" : "md-min", 0 === e), c.toggleClass(re ? "md-min" : "md-max", 1 === e);
      }function N(e) {
        if (!G()) {
          c.addClass("md-active"), c[0].focus(), C();var t = z(F(ne ? e.pointer.y : e.pointer.x)),
              i = A(R(t));n.$apply(function () {
            M(i), W(B(i));
          });
        }
      }function T(e) {
        if (!G()) {
          c.removeClass("md-dragging");var t = z(F(ne ? e.pointer.y : e.pointer.x)),
              i = A(R(t));n.$apply(function () {
            M(i), S();
          });
        }
      }function _(e) {
        G() || (he = !0, e.stopPropagation(), c.addClass("md-dragging"), q(e));
      }function I(e) {
        he && (e.stopPropagation(), q(e));
      }function O(e) {
        he && (e.stopPropagation(), he = !1);
      }function q(e) {
        ae ? L(ne ? e.pointer.y : e.pointer.x) : K(ne ? e.pointer.y : e.pointer.x);
      }function K(e) {
        n.$evalAsync(function () {
          M(z(F(e)));
        });
      }function L(e) {
        var t = z(F(e)),
            i = A(R(t));W(F(e)), H.text(i);
      }function P(e) {
        return Math.max(0, Math.min(e || 0, 1));
      }function F(e) {
        var t = ne ? ve.top : ve.left,
            i = ne ? ve.height : ve.width,
            n = (e - t) / i;return ne || "rtl" !== a.bidi() || (n = 1 - n), Math.max(0, Math.min(1, ne ? 1 - n : n));
      }function z(e) {
        var t = re ? 1 - e : e;return se + t * (le - se);
      }function B(e) {
        var t = (e - se) / (le - se);return re ? 1 - t : t;
      }o(c);var Y = f[0] || { $setViewValue: function $setViewValue(e) {
          this.$viewValue = e, this.$viewChangeListeners.forEach(function (e) {
            e();
          });
        }, $parsers: [], $formatters: [], $viewChangeListeners: [] },
          U = f[1],
          G = (t.element(a.getClosest(c, "_md-slider-container", !0)), m.ngDisabled ? t.bind(null, s(m.ngDisabled), n.$parent) : function () {
        return c[0].hasAttribute("disabled");
      }),
          j = t.element(c[0].querySelector(".md-thumb")),
          H = t.element(c[0].querySelector(".md-thumb-text")),
          J = j.parent(),
          Q = t.element(c[0].querySelector(".md-track-container")),
          X = t.element(c[0].querySelector(".md-track-fill")),
          Z = t.element(c[0].querySelector(".md-track-ticks")),
          ee = t.element(c[0].getElementsByClassName("md-slider-wrapper")),
          te = (t.element(c[0].getElementsByClassName("md-slider-content")), a.throttle(C, 5e3)),
          ie = 3,
          ne = t.isDefined(m.mdVertical),
          ae = t.isDefined(m.mdDiscrete),
          re = t.isDefined(m.mdInvert);t.isDefined(m.min) ? m.$observe("min", h) : h(0), t.isDefined(m.max) ? m.$observe("max", p) : p(100), t.isDefined(m.step) ? m.$observe("step", g) : g(1), t.isDefined(m.round) ? m.$observe("round", $) : $(ie);var oe = t.noop;m.ngDisabled && (oe = n.$parent.$watch(m.ngDisabled, b)), d.register(ee, "drag", { horizontal: !ne }), n.mouseActive = !1, ee.on("keydown", D).on("mousedown", V).on("focus", k).on("blur", E).on("$md.pressdown", N).on("$md.pressup", T).on("$md.dragstart", _).on("$md.drag", I).on("$md.dragend", O), setTimeout(v, 0);var de = e.throttle(v);t.element(i).on("resize", de), n.$on("$destroy", function () {
        t.element(i).off("resize", de);
      }), Y.$render = S, Y.$viewChangeListeners.push(S), Y.$formatters.push(A), Y.$formatters.push(R);var se,
          le,
          ue,
          ce,
          me,
          fe,
          ve = {};C();var he = !1;
    }return { scope: {}, require: ["?ngModel", "?^mdSliderContainer"], template: '<div class="md-slider-wrapper"><div class="md-slider-content"><div class="md-track-container"><div class="md-track"></div><div class="md-track md-track-fill"></div><div class="md-track-ticks"></div></div><div class="md-thumb-container"><div class="md-thumb"></div><div class="md-focus-thumb"></div><div class="md-focus-ring"></div><div class="md-sign"><span class="md-thumb-text"></span></div><div class="md-disabled-thumb"></div></div></div></div>', compile: c };
  }a.$inject = ["$$rAF", "$window", "$mdAria", "$mdUtil", "$mdConstant", "$mdTheming", "$mdGesture", "$parse", "$log", "$timeout"], t.module("material.components.slider", ["material.core"]).directive("mdSlider", a).directive("mdSliderContainer", n);
}(window, window.angular);

//# sourceMappingURL=slider.min-compiled.js.map