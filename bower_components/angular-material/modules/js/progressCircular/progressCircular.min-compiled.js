"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (e, t, r) {
  "use strict";
  function n(e, r, n, a, i, o) {
    function s(o, s, m) {
      function g(t, n, i, s, m) {
        var u = ++D,
            f = a.now(),
            g = n - t,
            p = l(o.mdDiameter),
            w = p - c(p),
            h = i || r.easeFn,
            M = s || r.duration;n === t ? P.attr("d", d(n, p, w, m)) : I = v(function $() {
          var r = e.Math.max(0, e.Math.min(a.now() - f, M));P.attr("d", d(h(r, t, g, M), p, w, m)), u === D && r < M && (I = v($));
        });
      }function $() {
        g(k, q, r.easeFnIndeterminate, r.durationIndeterminate, y), y = (y + q) % 100;var e = k;k = -q, q = -e;
      }function C() {
        F || (F = i($, r.durationIndeterminate + 50, 0, !1), $(), s.addClass(M).removeAttr("aria-valuenow"));
      }function x() {
        F && (i.cancel(F), F = null, s.removeClass(M));
      }var I,
          F,
          b = s[0],
          A = t.element(b.querySelector("svg")),
          P = t.element(b.querySelector("path")),
          k = r.startIndeterminate,
          q = r.endIndeterminate,
          y = 0,
          D = 0;n(s), s.toggleClass(h, m.hasOwnProperty("disabled")), o.mdMode === w && C(), o.$on("$destroy", function () {
        x(), I && f(I);
      }), o.$watchGroup(["value", "mdMode", function () {
        var e = b.disabled;return e === !0 || e === !1 ? e : t.isDefined(s.attr("disabled"));
      }], function (e, t) {
        var r = e[1],
            n = e[2],
            a = t[2];if (n !== a && s.toggleClass(h, !!n), n) x();else if (r !== p && r !== w && (r = w, m.$set("mdMode", r)), r === w) C();else {
          var i = u(e[0]);x(), s.attr("aria-valuenow", i), g(u(t[0]), i);
        }
      }), o.$watch("mdDiameter", function (e) {
        var t = l(e),
            r = c(t),
            n = u(o.value),
            a = t / 2 + "px",
            i = { width: t + "px", height: t + "px" };A[0].setAttribute("viewBox", "0 0 " + t + " " + t), A.css(i).css("transform-origin", a + " " + a + " " + a), s.css(i), P.css("stroke-width", r + "px"), g(n, n);
      });
    }function d(e, t, r, n) {
      var a,
          i = 3.5999,
          o = n || 0,
          s = t / 2,
          d = r / 2,
          u = o * i,
          l = e * i,
          c = m(s, d, u),
          v = m(s, d, l + u),
          f = l < 0 ? 0 : 1;return a = l < 0 ? l >= -180 ? 0 : 1 : l <= 180 ? 0 : 1, "M" + c + "A" + d + "," + d + " 0 " + a + "," + f + " " + v;
    }function m(t, r, n) {
      var a = (n - 90) * g;return t + r * e.Math.cos(a) + "," + (t + r * e.Math.sin(a));
    }function u(t) {
      return e.Math.max(0, e.Math.min(t || 0, 100));
    }function l(e) {
      var t = r.progressSize;if (e) {
        var n = parseFloat(e);return e.lastIndexOf("%") === e.length - 1 && (n = n / 100 * t), n;
      }return t;
    }function c(e) {
      return r.strokeWidth / 100 * e;
    }var v = e.requestAnimationFrame || e.webkitRequestAnimationFrame || t.noop,
        f = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame || t.noop,
        g = e.Math.PI / 180,
        p = "determinate",
        w = "indeterminate",
        h = "_md-progress-circular-disabled",
        M = "md-mode-indeterminate";return { restrict: "E", scope: { value: "@", mdDiameter: "@", mdMode: "@" }, template: '<svg xmlns="http://www.w3.org/2000/svg"><path fill="none"/></svg>', compile: function compile(e, r) {
        if (e.attr({ "aria-valuemin": 0, "aria-valuemax": 100, role: "progressbar" }), t.isUndefined(r.mdMode)) {
          var n = r.hasOwnProperty("value") ? p : w;r.$set("mdMode", n);
        } else r.$set("mdMode", r.mdMode.trim());return s;
      } };
  }function a() {
    function e(e, t, r, n) {
      return r * e / n + t;
    }function r(e, t, r, n) {
      var a = (e /= n) * e,
          i = a * e;return t + r * (6 * i * a + -15 * a * a + 10 * i);
    }var n = { progressSize: 50, strokeWidth: 10, duration: 100, easeFn: e, durationIndeterminate: 500, startIndeterminate: 3, endIndeterminate: 80, easeFnIndeterminate: r, easingPresets: { linearEase: e, materialEase: r } };return { configure: function configure(e) {
        return n = t.extend(n, e || {});
      }, $get: function $get() {
        return n;
      } };
  }t.module("material.components.progressCircular", ["material.core"]), n.$inject = ["$window", "$mdProgressCircular", "$mdTheming", "$mdUtil", "$interval", "$log"], t.module("material.components.progressCircular").directive("mdProgressCircular", n), t.module("material.components.progressCircular").provider("$mdProgressCircular", a);
}(window, window.angular);

//# sourceMappingURL=progressCircular.min-compiled.js.map