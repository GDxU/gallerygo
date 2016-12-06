"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (t, e, n) {
  "use strict";
  function r(t, e, r, o) {
    function i(o) {
      function i(t, e) {
        e.addClass("md-sticky-clone");var n = { element: t, clone: e };return v.items.push(n), r.nextTick(function () {
          m.prepend(n.clone);
        }), d(), function () {
          v.items.forEach(function (e, n) {
            e.element[0] === t[0] && (v.items.splice(n, 1), e.clone.remove());
          }), d();
        };
      }function c() {
        v.items.forEach(s), v.items = v.items.sort(function (t, e) {
          return t.top < e.top ? -1 : 1;
        });for (var t, e = m.prop("scrollTop"), n = v.items.length - 1; n >= 0; n--) {
          if (e > v.items[n].top) {
            t = v.items[n];break;
          }
        }f(t);
      }function s(t) {
        var e = t.element[0];for (t.top = 0, t.left = 0, t.right = 0; e && e !== m[0];) {
          t.top += e.offsetTop, t.left += e.offsetLeft, e.offsetParent && (t.right += e.offsetParent.offsetWidth - e.offsetWidth - e.offsetLeft), e = e.offsetParent;
        }t.height = t.element.prop("offsetHeight");var o = r.floatingScrollbars() ? "0" : n;r.bidi(t.clone, "margin-left", t.left, o), r.bidi(t.clone, "margin-right", o, t.right);
      }function a() {
        var t = m.prop("scrollTop"),
            e = t > (a.prevScrollTop || 0);if (a.prevScrollTop = t, 0 === t) return void f(null);if (e) {
          if (v.next && v.next.top <= t) return void f(v.next);if (v.current && v.next && v.next.top - t <= v.next.height) return void p(v.current, t + (v.next.top - v.next.height - t));
        }if (!e) {
          if (v.current && v.prev && t < v.current.top) return void f(v.prev);if (v.next && v.current && t >= v.next.top - v.current.height) return void p(v.current, t + (v.next.top - t - v.current.height));
        }v.current && p(v.current, t);
      }function f(t) {
        if (v.current !== t) {
          v.current && (p(v.current, null), u(v.current, null)), t && u(t, "active"), v.current = t;var e = v.items.indexOf(t);v.next = v.items[e + 1], v.prev = v.items[e - 1], u(v.next, "next"), u(v.prev, "prev");
        }
      }function u(t, e) {
        t && t.state !== e && (t.state && (t.clone.attr("sticky-prev-state", t.state), t.element.attr("sticky-prev-state", t.state)), t.clone.attr("sticky-state", e), t.element.attr("sticky-state", e), t.state = e);
      }function p(e, o) {
        e && (null === o || o === n ? e.translateY && (e.translateY = null, e.clone.css(t.CSS.TRANSFORM, "")) : (e.translateY = o, r.bidi(e.clone, t.CSS.TRANSFORM, "translate3d(" + e.left + "px," + o + "px,0)", "translateY(" + o + "px)")));
      }var m = o.$element,
          d = e.throttle(c);l(m), m.on("$scrollstart", d), m.on("$scroll", a);var v;return v = { prev: null, current: null, next: null, items: [], add: i, refreshElements: c };
    }function l(t) {
      function n() {
        +r.now() - i > l ? (o = !1, t.triggerHandler("$scrollend")) : (t.triggerHandler("$scroll"), e.throttle(n));
      }var o,
          i,
          l = 200;t.on("scroll touchmove", function () {
        o || (o = !0, e.throttle(n), t.triggerHandler("$scrollstart")), t.triggerHandler("$scroll"), i = +r.now();
      });
    }var c = r.checkStickySupport();return function (t, e, n) {
      var r = e.controller("mdContent");if (r) if (c) e.css({ position: c, top: 0, "z-index": 2 });else {
        var l = r.$element.data("$$sticky");l || (l = i(r), r.$element.data("$$sticky", l));var s = n || o(e.clone())(t),
            a = l.add(e, s);t.$on("$destroy", a);
      }
    };
  }r.$inject = ["$mdConstant", "$$rAF", "$mdUtil", "$compile"], e.module("material.components.sticky", ["material.core", "material.components.content"]).factory("$mdSticky", r);
}(window, window.angular);

//# sourceMappingURL=sticky.min-compiled.js.map