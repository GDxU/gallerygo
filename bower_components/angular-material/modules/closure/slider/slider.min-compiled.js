"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function SliderContainerDirective() {
  return { controller: function controller() {}, compile: function compile(e) {
      var t = e.find("md-slider");if (t) {
        var n = t.attr("md-vertical");return void 0 !== n && e.attr("md-vertical", ""), t.attr("flex") || t.attr("flex", ""), function (e, t, n, a) {
          function i(e) {
            t.children().attr("disabled", e), t.find("input").attr("disabled", e);
          }t.addClass("_md");var r = angular.noop;n.disabled ? i(!0) : n.ngDisabled && (r = e.$watch(n.ngDisabled, function (e) {
            i(e);
          })), e.$on("$destroy", function () {
            r();
          });var o;a.fitInputWidthToTextLength = function (e) {
            var n = t[0].querySelector("md-input-container");if (n) {
              var a = getComputedStyle(n),
                  i = parseInt(a.minWidth),
                  r = 2 * parseInt(a.padding);o = o || parseInt(a.maxWidth);var d = Math.max(o, i + r + i / 2 * e);n.style.maxWidth = d + "px";
            }
          };
        };
      }
    } };
}function SliderDirective(e, t, n, a, i, r, o, d, l, s) {
  function u(e, t) {
    var a = angular.element(e[0].getElementsByClassName("md-slider-wrapper")),
        i = t.tabindex || 0;return a.attr("tabindex", i), (t.disabled || t.ngDisabled) && a.attr("tabindex", -1), a.attr("role", "slider"), n.expect(e, "aria-label"), c;
  }function c(n, u, c, m) {
    function f() {
      C(), E();
    }function v(e) {
      de = parseFloat(e), u.attr("aria-valuemin", e), f();
    }function g(e) {
      le = parseFloat(e), u.attr("aria-valuemax", e), f();
    }function p(e) {
      se = parseFloat(e);
    }function h(e) {
      ue = M(parseInt(e), 0, 6);
    }function $() {
      u.attr("aria-disabled", !!U());
    }function b() {
      if (ae && !U() && !angular.isUndefined(se)) {
        if (se <= 0) {
          var e = "Slider step value must be greater than zero when in discrete mode";throw l.error(e), new Error(e);
        }var n = Math.floor((le - de) / se);ce || (ce = angular.element("<canvas>").css("position", "absolute"), X.append(ce), me = ce[0].getContext("2d"));var a = y();!a || a.height || a.width || (C(), a = fe), ce[0].width = a.width, ce[0].height = a.height;for (var i, r = 0; r <= n; r++) {
          var o = t.getComputedStyle(X[0]);me.fillStyle = o.color || "black", i = Math.floor((ne ? a.height : a.width) * (r / n)), me.fillRect(ne ? 0 : i - 1, ne ? i - 1 : 0, ne ? a.width : 2, ne ? 2 : a.height);
        }
      }
    }function w() {
      if (ce && me) {
        var e = y();me.clearRect(0, 0, e.width, e.height);
      }
    }function C() {
      fe = J[0].getBoundingClientRect();
    }function y() {
      return ee(), fe;
    }function x(e) {
      if (!U()) {
        var t;(ne ? e.keyCode === i.KEY_CODE.DOWN_ARROW : e.keyCode === i.KEY_CODE.LEFT_ARROW) ? t = -se : (ne ? e.keyCode === i.KEY_CODE.UP_ARROW : e.keyCode === i.KEY_CODE.RIGHT_ARROW) && (t = se), t = ie ? -t : t, t && ((e.metaKey || e.ctrlKey || e.altKey) && (t *= 4), e.preventDefault(), e.stopPropagation(), n.$evalAsync(function () {
          k(B.$viewValue + t);
        }));
      }
    }function D() {
      b(), n.mouseActive = !0, Z.removeClass("md-focused"), s(function () {
        n.mouseActive = !1;
      }, 100);
    }function S() {
      n.mouseActive === !1 && Z.addClass("md-focused");
    }function V() {
      Z.removeClass("md-focused"), u.removeClass("md-active"), w();
    }function k(e) {
      B.$setViewValue(M(A(e)));
    }function E() {
      isNaN(B.$viewValue) && (B.$viewValue = B.$modelValue), B.$viewValue = M(B.$viewValue);var e = z(B.$viewValue);n.modelValue = B.$viewValue, u.attr("aria-valuenow", B.$viewValue), R(e), j.text(B.$viewValue);
    }function M(e, t, n) {
      if (angular.isNumber(e)) return t = angular.isNumber(t) ? t : de, n = angular.isNumber(n) ? n : le, Math.max(t, Math.min(n, e));
    }function A(e) {
      if (angular.isNumber(e)) {
        var t = Math.round((e - de) / se) * se + de;return t = Math.round(t * Math.pow(10, ue)) / Math.pow(10, ue), Y && Y.fitInputWidthToTextLength && a.debounce(function () {
          Y.fitInputWidthToTextLength(t.toString().length);
        }, 100)(), t;
      }
    }function R(e) {
      e = L(e);var t = 100 * e + "%",
          n = ie ? 100 * (1 - e) + "%" : t;ne ? H.css("bottom", t) : a.bidiProperty(H, "left", "right", t), Q.css(ne ? "height" : "width", n), u.toggleClass(ie ? "md-max" : "md-min", 0 === e), u.toggleClass(ie ? "md-min" : "md-max", 1 === e);
    }function W(e) {
      if (!U()) {
        u.addClass("md-active"), u[0].focus(), C();var t = F(P(ne ? e.pointer.y : e.pointer.x)),
            a = M(A(t));n.$apply(function () {
          k(a), R(z(a));
        });
      }
    }function N(e) {
      if (!U()) {
        u.removeClass("md-dragging");var t = F(P(ne ? e.pointer.y : e.pointer.x)),
            a = M(A(t));n.$apply(function () {
          k(a), E();
        });
      }
    }function T(e) {
      U() || (ve = !0, e.stopPropagation(), u.addClass("md-dragging"), O(e));
    }function _(e) {
      ve && (e.stopPropagation(), O(e));
    }function I(e) {
      ve && (e.stopPropagation(), ve = !1);
    }function O(e) {
      ae ? K(ne ? e.pointer.y : e.pointer.x) : q(ne ? e.pointer.y : e.pointer.x);
    }function q(e) {
      n.$evalAsync(function () {
        k(F(P(e)));
      });
    }function K(e) {
      var t = F(P(e)),
          n = M(A(t));R(P(e)), j.text(n);
    }function L(e) {
      return Math.max(0, Math.min(e || 0, 1));
    }function P(e) {
      var t = ne ? fe.top : fe.left,
          n = ne ? fe.height : fe.width,
          i = (e - t) / n;return ne || "rtl" !== a.bidi() || (i = 1 - i), Math.max(0, Math.min(1, ne ? 1 - i : i));
    }function F(e) {
      var t = ie ? 1 - e : e;return de + t * (le - de);
    }function z(e) {
      var t = (e - de) / (le - de);return ie ? 1 - t : t;
    }r(u);var B = m[0] || { $setViewValue: function $setViewValue(e) {
        this.$viewValue = e, this.$viewChangeListeners.forEach(function (e) {
          e();
        });
      }, $parsers: [], $formatters: [], $viewChangeListeners: [] },
        Y = m[1],
        U = (angular.element(a.getClosest(u, "_md-slider-container", !0)), c.ngDisabled ? angular.bind(null, d(c.ngDisabled), n.$parent) : function () {
      return u[0].hasAttribute("disabled");
    }),
        G = angular.element(u[0].querySelector(".md-thumb")),
        j = angular.element(u[0].querySelector(".md-thumb-text")),
        H = G.parent(),
        J = angular.element(u[0].querySelector(".md-track-container")),
        Q = angular.element(u[0].querySelector(".md-track-fill")),
        X = angular.element(u[0].querySelector(".md-track-ticks")),
        Z = angular.element(u[0].getElementsByClassName("md-slider-wrapper")),
        ee = (angular.element(u[0].getElementsByClassName("md-slider-content")), a.throttle(C, 5e3)),
        te = 3,
        ne = angular.isDefined(c.mdVertical),
        ae = angular.isDefined(c.mdDiscrete),
        ie = angular.isDefined(c.mdInvert);angular.isDefined(c.min) ? c.$observe("min", v) : v(0), angular.isDefined(c.max) ? c.$observe("max", g) : g(100), angular.isDefined(c.step) ? c.$observe("step", p) : p(1), angular.isDefined(c.round) ? c.$observe("round", h) : h(te);var re = angular.noop;c.ngDisabled && (re = n.$parent.$watch(c.ngDisabled, $)), o.register(Z, "drag", { horizontal: !ne }), n.mouseActive = !1, Z.on("keydown", x).on("mousedown", D).on("focus", S).on("blur", V).on("$md.pressdown", W).on("$md.pressup", N).on("$md.dragstart", T).on("$md.drag", _).on("$md.dragend", I), setTimeout(f, 0);var oe = e.throttle(f);angular.element(t).on("resize", oe), n.$on("$destroy", function () {
      angular.element(t).off("resize", oe);
    }), B.$render = E, B.$viewChangeListeners.push(E), B.$formatters.push(M), B.$formatters.push(A);var de,
        le,
        se,
        ue,
        ce,
        me,
        fe = {};C();var ve = !1;
  }return { scope: {}, require: ["?ngModel", "?^mdSliderContainer"], template: '<div class="md-slider-wrapper"><div class="md-slider-content"><div class="md-track-container"><div class="md-track"></div><div class="md-track md-track-fill"></div><div class="md-track-ticks"></div></div><div class="md-thumb-container"><div class="md-thumb"></div><div class="md-focus-thumb"></div><div class="md-focus-ring"></div><div class="md-sign"><span class="md-thumb-text"></span></div><div class="md-disabled-thumb"></div></div></div></div>', compile: u };
}goog.provide("ngmaterial.components.slider"), goog.require("ngmaterial.core"), SliderDirective.$inject = ["$$rAF", "$window", "$mdAria", "$mdUtil", "$mdConstant", "$mdTheming", "$mdGesture", "$parse", "$log", "$timeout"], angular.module("material.components.slider", ["material.core"]).directive("mdSlider", SliderDirective).directive("mdSliderContainer", SliderContainerDirective), ngmaterial.components.slider = angular.module("material.components.slider");

//# sourceMappingURL=slider.min-compiled.js.map