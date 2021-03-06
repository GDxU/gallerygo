"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (e, t, i) {
  "use strict";
  function n(e, i, n, o, r, d, l, a) {
    function s(s, p, v) {
      function y() {
        s.mdZIndex = s.mdZIndex || m, s.mdDelay = s.mdDelay || f, b[s.mdDirection] || (s.mdDirection = h);
      }function x(e) {
        if (e || !R.attr("aria-label")) {
          var t = e || p.text().trim(),
              i = r(t)(R.scope());R.attr("aria-label", i);
        }
      }function E() {
        y(), C && C.panelEl && C.panelEl.removeClass(D), D = "md-origin-" + s.mdDirection, V = b[s.mdDirection], A = l.newPanelPosition().relativeTo(R).addPanelPosition(V.x, V.y), C && C.panelEl && (C.panelEl.addClass(D), C.updatePosition(A));
      }function w() {
        function t(e) {
          return e.some(function (e) {
            return "disabled" === e.attributeName && R[0].disabled;
          }), !1;
        }function n() {
          P(!1);
        }function r() {
          I = document.activeElement === R[0];
        }function l(e) {
          "focus" === e.type && I ? I = !1 : s.mdVisible || (R.on(u, m), P(!0), "touchstart" === e.type && R.one("touchend", function () {
            d.nextTick(function () {
              o.one("touchend", m);
            }, !1);
          }));
        }function m() {
          W = s.hasOwnProperty("mdAutohide") ? s.mdAutohide : v.hasOwnProperty("mdAutohide"), (W || F || o[0].activeElement !== R[0]) && (N && (e.cancel(N), P.queued = !1, N = null), R.off(u, m), R.triggerHandler("blur"), P(!1)), F = !1;
        }function f() {
          F = !0;
        }function h() {
          a.deregister("scroll", n, !0), a.deregister("blur", r), a.deregister("resize", q), R.off(c, l).off(u, m).off("mousedown", f), m(), b && b.disconnect();
        }if (R[0] && "MutationObserver" in i) {
          var b = new MutationObserver(function (e) {
            t(e) && d.nextTick(function () {
              P(!1);
            });
          });b.observe(R[0], { attributes: !0 });
        }I = !1, a.register("scroll", n, !0), a.register("blur", r), a.register("resize", q), s.$on("$destroy", h), R.on("mousedown", f), R.on(c, l);
      }function $() {
        function e() {
          s.$destroy();
        }if (p[0] && "MutationObserver" in i) {
          var t = new MutationObserver(function (e) {
            e.forEach(function (e) {
              "md-visible" !== e.attributeName || s.visibleWatcher || (s.visibleWatcher = s.$watch("mdVisible", g));
            });
          });t.observe(p[0], { attributes: !0 }), v.hasOwnProperty("mdVisible") && (s.visibleWatcher = s.$watch("mdVisible", g));
        } else s.visibleWatcher = s.$watch("mdVisible", g);s.$watch("mdDirection", E), p.one("$destroy", e), R.one("$destroy", e), s.$on("$destroy", function () {
          P(!1), p.remove(), t && t.disconnect();
        }), p.text().indexOf(r.startSymbol()) > -1 && s.$watch(function () {
          return p.text().trim();
        }, x);
      }function P(t) {
        P.queued && P.value === !!t || !P.queued && s.mdVisible === !!t || (P.value = !!t, P.queued || (t ? (P.queued = !0, N = e(function () {
          s.mdVisible = P.value, P.queued = !1, N = null, s.visibleWatcher || g(s.mdVisible);
        }, s.mdDelay)) : d.nextTick(function () {
          s.mdVisible = !1, s.visibleWatcher || g(!1);
        })));
      }function g(e) {
        e ? T() : O();
      }function T() {
        if (!p[0].textContent.trim()) throw new Error("Text for the tooltip has not been provided. Please include text within the mdTooltip element.");if (!C) {
          var e = "tooltip-" + d.nextUid(),
              i = t.element(document.body),
              n = p.html().trim(),
              o = l.newPanelAnimation().openFrom(R).closeTo(R).withAnimation({ open: "md-show", close: "md-hide" }),
              r = { id: e, attachTo: i, template: n, propagateContainerEvents: !0, panelClass: "md-tooltip " + D, animation: o, position: A, zIndex: s.mdZIndex, focusOnOpen: !1 };C = l.create(r);
        }C.open();
      }function O() {
        C && C.close();
      }var D,
          V,
          A,
          C,
          W,
          N,
          R = d.getParentWithPointerEvents(p),
          q = n.throttle(E),
          F = !1,
          I = null;y(), x(), p.detach(), p.attr("role", "tooltip"), E(), w(), $();
    }var c = "focus touchstart mouseenter",
        u = "blur touchcancel mouseleave",
        m = 100,
        f = 0,
        h = "bottom",
        b = { top: { x: l.xPosition.CENTER, y: l.yPosition.ABOVE }, right: { x: l.xPosition.OFFSET_END, y: l.yPosition.CENTER }, bottom: { x: l.xPosition.CENTER, y: l.yPosition.BELOW }, left: { x: l.xPosition.OFFSET_START, y: l.yPosition.CENTER } };return { restrict: "E", priority: 210, scope: { mdZIndex: "=?mdZIndex", mdDelay: "=?mdDelay", mdVisible: "=?mdVisible", mdAutohide: "=?mdAutohide", mdDirection: "@?mdDirection" }, link: s };
  }function o() {
    function i(e) {
      r[e.type] && r[e.type].forEach(function (t) {
        t.call(this, e);
      }, this);
    }function n(t, n, o) {
      var l = r[t] = r[t] || [];l.length || (o ? e.addEventListener(t, i, !0) : d.on(t, i)), l.indexOf(n) === -1 && l.push(n);
    }function o(t, n, o) {
      var l = r[t],
          a = l ? l.indexOf(n) : -1;a > -1 && (l.splice(a, 1), 0 === l.length && (o ? e.removeEventListener(t, i, !0) : d.off(t, i)));
    }var r = {},
        d = t.element(e);return { register: n, deregister: o };
  }n.$inject = ["$timeout", "$window", "$$rAF", "$document", "$interpolate", "$mdUtil", "$mdPanel", "$$mdTooltipRegistry"], t.module("material.components.tooltip", ["material.core", "material.components.panel"]).directive("mdTooltip", n).service("$$mdTooltipRegistry", o);
}(window, window.angular);

//# sourceMappingURL=tooltip.min-compiled.js.map