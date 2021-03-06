"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function MdProgressCircularDirective(e, r, a, n, t, i) {
  function o(i, o, u) {
    function v(a, t, o, u, d) {
      var g = ++q,
          v = n.now(),
          p = t - a,
          f = l(i.mdDiameter),
          h = f - m(f),
          M = o || r.easeFn,
          w = u || r.duration;t === a ? b.attr("d", s(t, f, h, d)) : P = c(function C() {
        var r = e.Math.max(0, e.Math.min(n.now() - v, w));b.attr("d", s(M(r, a, p, w), f, h, d)), g === q && r < w && (P = c(C));
      });
    }function w() {
      v(A, D, r.easeFnIndeterminate, r.durationIndeterminate, k), k = (k + D) % 100;var e = A;A = -D, D = -e;
    }function C() {
      x || (x = t(w, r.durationIndeterminate + 50, 0, !1), w(), o.addClass(M).removeAttr("aria-valuenow"));
    }function $() {
      x && (t.cancel(x), x = null, o.removeClass(M));
    }var P,
        x,
        I = o[0],
        F = angular.element(I.querySelector("svg")),
        b = angular.element(I.querySelector("path")),
        A = r.startIndeterminate,
        D = r.endIndeterminate,
        k = 0,
        q = 0;a(o), o.toggleClass(h, u.hasOwnProperty("disabled")), i.mdMode === f && C(), i.$on("$destroy", function () {
      $(), P && g(P);
    }), i.$watchGroup(["value", "mdMode", function () {
      var e = I.disabled;return e === !0 || e === !1 ? e : angular.isDefined(o.attr("disabled"));
    }], function (e, r) {
      var a = e[1],
          n = e[2],
          t = r[2];if (n !== t && o.toggleClass(h, !!n), n) $();else if (a !== p && a !== f && (a = f, u.$set("mdMode", a)), a === f) C();else {
        var i = d(e[0]);$(), o.attr("aria-valuenow", i), v(d(r[0]), i);
      }
    }), i.$watch("mdDiameter", function (e) {
      var r = l(e),
          a = m(r),
          n = d(i.value),
          t = r / 2 + "px",
          s = { width: r + "px", height: r + "px" };F[0].setAttribute("viewBox", "0 0 " + r + " " + r), F.css(s).css("transform-origin", t + " " + t + " " + t), o.css(s), b.css("stroke-width", a + "px"), v(n, n);
    });
  }function s(e, r, a, n) {
    var t,
        i = 3.5999,
        o = n || 0,
        s = r / 2,
        d = a / 2,
        l = o * i,
        m = e * i,
        c = u(s, d, l),
        g = u(s, d, m + l),
        v = m < 0 ? 0 : 1;return t = m < 0 ? m >= -180 ? 0 : 1 : m <= 180 ? 0 : 1, "M" + c + "A" + d + "," + d + " 0 " + t + "," + v + " " + g;
  }function u(r, a, n) {
    var t = (n - 90) * v;return r + a * e.Math.cos(t) + "," + (r + a * e.Math.sin(t));
  }function d(r) {
    return e.Math.max(0, e.Math.min(r || 0, 100));
  }function l(e) {
    var a = r.progressSize;if (e) {
      var n = parseFloat(e);return e.lastIndexOf("%") === e.length - 1 && (n = n / 100 * a), n;
    }return a;
  }function m(e) {
    return r.strokeWidth / 100 * e;
  }var c = e.requestAnimationFrame || e.webkitRequestAnimationFrame || angular.noop,
      g = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame || angular.noop,
      v = e.Math.PI / 180,
      p = "determinate",
      f = "indeterminate",
      h = "_md-progress-circular-disabled",
      M = "md-mode-indeterminate";return { restrict: "E", scope: { value: "@", mdDiameter: "@", mdMode: "@" }, template: '<svg xmlns="http://www.w3.org/2000/svg"><path fill="none"/></svg>', compile: function compile(e, r) {
      if (e.attr({ "aria-valuemin": 0, "aria-valuemax": 100, role: "progressbar" }), angular.isUndefined(r.mdMode)) {
        var a = r.hasOwnProperty("value") ? p : f;r.$set("mdMode", a);
      } else r.$set("mdMode", r.mdMode.trim());return o;
    } };
}function MdProgressCircularProvider() {
  function e(e, r, a, n) {
    return a * e / n + r;
  }function r(e, r, a, n) {
    var t = (e /= n) * e,
        i = t * e;return r + a * (6 * i * t + -15 * t * t + 10 * i);
  }var a = { progressSize: 50, strokeWidth: 10, duration: 100, easeFn: e, durationIndeterminate: 500, startIndeterminate: 3, endIndeterminate: 80, easeFnIndeterminate: r, easingPresets: { linearEase: e, materialEase: r } };return { configure: function configure(e) {
      return a = angular.extend(a, e || {});
    }, $get: function $get() {
      return a;
    } };
}goog.provide("ngmaterial.components.progressCircular"), goog.require("ngmaterial.core"), angular.module("material.components.progressCircular", ["material.core"]), MdProgressCircularDirective.$inject = ["$window", "$mdProgressCircular", "$mdTheming", "$mdUtil", "$interval", "$log"], angular.module("material.components.progressCircular").directive("mdProgressCircular", MdProgressCircularDirective), angular.module("material.components.progressCircular").provider("$mdProgressCircular", MdProgressCircularProvider), ngmaterial.components.progressCircular = angular.module("material.components.progressCircular");

//# sourceMappingURL=progressCircular.min-compiled.js.map