"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (n, e, t) {
  "use strict";
  !function () {
    function n(n, t, i, o, a, r) {
      function c() {
        k.direction = k.direction || "down", k.isOpen = k.isOpen || !1, d(), t.addClass("md-animations-waiting");
      }function s() {
        var i = ["click", "focusin", "focusout"];e.forEach(i, function (n) {
          t.on(n, l);
        }), n.$on("$destroy", function () {
          e.forEach(i, function (n) {
            t.off(n, l);
          }), p();
        });
      }function l(n) {
        "click" == n.type && I(n), "focusout" != n.type || F || (F = r(function () {
          k.close();
        }, 100, !1)), "focusin" == n.type && F && (r.cancel(F), F = null);
      }function d() {
        k.currentActionIndex = -1;
      }function u() {
        n.$watch("vm.direction", function (n, e) {
          i.removeClass(t, "md-" + e), i.addClass(t, "md-" + n), d();
        });var e, o;n.$watch("vm.isOpen", function (n) {
          d(), e && o || (e = S(), o = D()), n ? m() : p();var a = n ? "md-is-open" : "",
              r = n ? "" : "md-is-open";e.attr("aria-haspopup", !0), e.attr("aria-expanded", n), o.attr("aria-hidden", !n), i.setClass(t, a, r);
        });
      }function f() {
        t[0].scrollHeight > 0 ? i.addClass(t, "_md-animations-ready").then(function () {
          t.removeClass("md-animations-waiting");
        }) : _ < 10 && (r(f, 100), _ += 1);
      }function m() {
        t.on("keydown", h), o.nextTick(function () {
          e.element(document).on("click touchend", g);
        });
      }function p() {
        t.off("keydown", h), e.element(document).off("click touchend", g);
      }function g(n) {
        if (n.target) {
          var e = o.getClosest(n.target, "md-fab-trigger"),
              t = o.getClosest(n.target, "md-fab-actions");e || t || k.close();
        }
      }function h(n) {
        switch (n.which) {case a.KEY_CODE.ESCAPE:
            return k.close(), n.preventDefault(), !1;case a.KEY_CODE.LEFT_ARROW:
            return A(n), !1;case a.KEY_CODE.UP_ARROW:
            return O(n), !1;case a.KEY_CODE.RIGHT_ARROW:
            return w(n), !1;case a.KEY_CODE.DOWN_ARROW:
            return E(n), !1;}
      }function v(n) {
        C(n, -1);
      }function b(n) {
        C(n, 1);
      }function C(n, t) {
        var i = y();k.currentActionIndex = k.currentActionIndex + t, k.currentActionIndex = Math.min(i.length - 1, k.currentActionIndex), k.currentActionIndex = Math.max(0, k.currentActionIndex);var o = e.element(i[k.currentActionIndex]).children()[0];e.element(o).attr("tabindex", 0), o.focus(), n.preventDefault(), n.stopImmediatePropagation();
      }function y() {
        var n = D()[0].querySelectorAll(".md-fab-action-item");return e.forEach(n, function (n) {
          e.element(e.element(n).children()[0]).attr("tabindex", -1);
        }), n;
      }function A(n) {
        "left" === k.direction ? b(n) : v(n);
      }function O(n) {
        "down" === k.direction ? v(n) : b(n);
      }function w(n) {
        "left" === k.direction ? v(n) : b(n);
      }function E(n) {
        "up" === k.direction ? v(n) : b(n);
      }function $(n) {
        return o.getClosest(n, "md-fab-trigger");
      }function x(n) {
        return o.getClosest(n, "md-fab-actions");
      }function I(n) {
        $(n.target) && k.toggle(), x(n.target) && k.close();
      }function S() {
        return t.find("md-fab-trigger");
      }function D() {
        return t.find("md-fab-actions");
      }var k = this,
          _ = 0;k.open = function () {
        n.$evalAsync("vm.isOpen = true");
      }, k.close = function () {
        n.$evalAsync("vm.isOpen = false"), t.find("md-fab-trigger")[0].focus();
      }, k.toggle = function () {
        n.$evalAsync("vm.isOpen = !vm.isOpen");
      }, k.$onInit = function () {
        c(), s(), u(), f();
      }, 1 === e.version.major && e.version.minor <= 4 && this.$onInit();var F;
    }n.$inject = ["$scope", "$element", "$animate", "$mdUtil", "$mdConstant", "$timeout"], e.module("material.components.fabShared", ["material.core"]).controller("MdFabController", n);
  }(), function () {
    function t() {
      function n(n, e) {
        e.prepend('<div class="_md-css-variables"></div>');
      }return { restrict: "E", scope: { direction: "@?mdDirection", isOpen: "=?mdOpen" }, bindToController: !0, controller: "MdFabController", controllerAs: "vm", link: n };
    }function i(t) {
      function i(n) {
        t(n, a, !1);
      }function o(t) {
        if (!t.hasClass("md-animations-waiting") || t.hasClass("_md-animations-ready")) {
          var i = t[0],
              o = t.controller("mdFabSpeedDial"),
              a = i.querySelectorAll(".md-fab-action-item"),
              r = i.querySelector("md-fab-trigger"),
              c = i.querySelector("._md-css-variables"),
              s = parseInt(n.getComputedStyle(c).zIndex);e.forEach(a, function (n, e) {
            var t = n.style;t.transform = t.webkitTransform = "", t.transitionDelay = "", t.opacity = 1, t.zIndex = a.length - e + s;
          }), r.style.zIndex = s + a.length + 1, o.isOpen || e.forEach(a, function (n, e) {
            var t,
                i,
                a = n.style,
                c = (r.clientHeight - n.clientHeight) / 2,
                s = (r.clientWidth - n.clientWidth) / 2;switch (o.direction) {case "up":
                t = n.scrollHeight * (e + 1) + c, i = "Y";break;case "down":
                t = -(n.scrollHeight * (e + 1) + c), i = "Y";break;case "left":
                t = n.scrollWidth * (e + 1) + s, i = "X";break;case "right":
                t = -(n.scrollWidth * (e + 1) + s), i = "X";}var l = "translate" + i + "(" + t + "px)";a.transform = a.webkitTransform = l;
          });
        }
      }return { addClass: function addClass(n, e, t) {
          n.hasClass("md-fling") ? (o(n), i(t)) : t();
        }, removeClass: function removeClass(n, e, t) {
          o(n), i(t);
        } };
    }function o(t) {
      function i(n) {
        t(n, a, !1);
      }function o(t) {
        var i = t[0],
            o = t.controller("mdFabSpeedDial"),
            a = i.querySelectorAll(".md-fab-action-item"),
            c = i.querySelector("._md-css-variables"),
            s = parseInt(n.getComputedStyle(c).zIndex);e.forEach(a, function (n, e) {
          var t = n.style,
              i = e * r;t.opacity = o.isOpen ? 1 : 0, t.transform = t.webkitTransform = o.isOpen ? "scale(1)" : "scale(0)", t.transitionDelay = (o.isOpen ? i : a.length - i) + "ms", t.zIndex = a.length - e + s;
        });
      }var r = 65;return { addClass: function addClass(n, e, t) {
          o(n), i(t);
        }, removeClass: function removeClass(n, e, t) {
          o(n), i(t);
        } };
    }i.$inject = ["$timeout"], o.$inject = ["$timeout"];var a = 300;e.module("material.components.fabSpeedDial", ["material.core", "material.components.fabShared", "material.components.fabActions"]).directive("mdFabSpeedDial", t).animation(".md-fling", i).animation(".md-scale", o).service("mdFabSpeedDialFlingAnimation", i).service("mdFabSpeedDialScaleAnimation", o);
  }();
}(window, window.angular);

//# sourceMappingURL=fabSpeedDial.min-compiled.js.map