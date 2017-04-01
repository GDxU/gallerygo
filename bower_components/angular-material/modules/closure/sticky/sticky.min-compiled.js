"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function MdSticky(t, e, n, r) {
  function o(r) {
    function o(t, e) {
      e.addClass("md-sticky-clone");var r = { element: t, clone: e };return d.items.push(r), n.nextTick(function () {
        p.prepend(r.clone);
      }), m(), function () {
        d.items.forEach(function (e, n) {
          e.element[0] === t[0] && (d.items.splice(n, 1), e.clone.remove());
        }), m();
      };
    }function l() {
      d.items.forEach(c), d.items = d.items.sort(function (t, e) {
        return t.top < e.top ? -1 : 1;
      });for (var t, e = p.prop("scrollTop"), n = d.items.length - 1; n >= 0; n--) {
        if (e > d.items[n].top) {
          t = d.items[n];break;
        }
      }s(t);
    }function c(t) {
      var e = t.element[0];for (t.top = 0, t.left = 0, t.right = 0; e && e !== p[0];) {
        t.top += e.offsetTop, t.left += e.offsetLeft, e.offsetParent && (t.right += e.offsetParent.offsetWidth - e.offsetWidth - e.offsetLeft), e = e.offsetParent;
      }t.height = t.element.prop("offsetHeight");var r = n.floatingScrollbars() ? "0" : void 0;n.bidi(t.clone, "margin-left", t.left, r), n.bidi(t.clone, "margin-right", r, t.right);
    }function a() {
      var t = p.prop("scrollTop"),
          e = t > (a.prevScrollTop || 0);if (a.prevScrollTop = t, 0 === t) return void s(null);if (e) {
        if (d.next && d.next.top <= t) return void s(d.next);if (d.current && d.next && d.next.top - t <= d.next.height) return void u(d.current, t + (d.next.top - d.next.height - t));
      }if (!e) {
        if (d.current && d.prev && t < d.current.top) return void s(d.prev);if (d.next && d.current && t >= d.next.top - d.current.height) return void u(d.current, t + (d.next.top - t - d.current.height));
      }d.current && u(d.current, t);
    }function s(t) {
      if (d.current !== t) {
        d.current && (u(d.current, null), f(d.current, null)), t && f(t, "active"), d.current = t;var e = d.items.indexOf(t);d.next = d.items[e + 1], d.prev = d.items[e - 1], f(d.next, "next"), f(d.prev, "prev");
      }
    }function f(t, e) {
      t && t.state !== e && (t.state && (t.clone.attr("sticky-prev-state", t.state), t.element.attr("sticky-prev-state", t.state)), t.clone.attr("sticky-state", e), t.element.attr("sticky-state", e), t.state = e);
    }function u(e, r) {
      e && (null === r || void 0 === r ? e.translateY && (e.translateY = null, e.clone.css(t.CSS.TRANSFORM, "")) : (e.translateY = r, n.bidi(e.clone, t.CSS.TRANSFORM, "translate3d(" + e.left + "px," + r + "px,0)", "translateY(" + r + "px)")));
    }var p = r.$element,
        m = e.throttle(l);i(p), p.on("$scrollstart", m), p.on("$scroll", a);var d;return d = { prev: null, current: null, next: null, items: [], add: o, refreshElements: l };
  }function i(t) {
    function r() {
      +n.now() - i > l ? (o = !1, t.triggerHandler("$scrollend")) : (t.triggerHandler("$scroll"), e.throttle(r));
    }var o,
        i,
        l = 200;t.on("scroll touchmove", function () {
      o || (o = !0, e.throttle(r), t.triggerHandler("$scrollstart")), t.triggerHandler("$scroll"), i = +n.now();
    });
  }var l = n.checkStickySupport();return function (t, e, n) {
    var i = e.controller("mdContent");if (i) if (l) e.css({ position: l, top: 0, "z-index": 2 });else {
      var c = i.$element.data("$$sticky");c || (c = o(i), i.$element.data("$$sticky", c));var a = n || r(e.clone())(t),
          s = c.add(e, a);t.$on("$destroy", s);
    }
  };
}goog.provide("ngmaterial.components.sticky"), goog.require("ngmaterial.components.content"), goog.require("ngmaterial.core"), MdSticky.$inject = ["$mdConstant", "$$rAF", "$mdUtil", "$compile"], angular.module("material.components.sticky", ["material.core", "material.components.content"]).factory("$mdSticky", MdSticky), ngmaterial.components.sticky = angular.module("material.components.sticky");

//# sourceMappingURL=sticky.min-compiled.js.map