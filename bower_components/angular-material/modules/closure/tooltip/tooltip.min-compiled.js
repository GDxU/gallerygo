"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function MdTooltipDirective(e, t, i, o, n, r, l, a) {
  function d(d, h, v) {
    function b() {
      d.mdZIndex = d.mdZIndex || u, d.mdDelay = d.mdDelay || m, p[d.mdDirection] || (d.mdDirection = f);
    }function g(e) {
      if (e || !R.attr("aria-label")) {
        var t = e || h.text().trim(),
            i = n(t)(R.scope());R.attr("aria-label", i);
      }
    }function y() {
      b(), A && A.panelEl && A.panelEl.removeClass(D), D = "md-origin-" + d.mdDirection, O = p[d.mdDirection], V = l.newPanelPosition().relativeTo(R).addPanelPosition(O.x, O.y), A && A.panelEl && (A.panelEl.addClass(D), A.updatePosition(V));
    }function x() {
      function i(e) {
        return e.some(function (e) {
          return "disabled" === e.attributeName && R[0].disabled;
        }), !1;
      }function n() {
        E(!1);
      }function l() {
        N = document.activeElement === R[0];
      }function u(e) {
        "focus" === e.type && N ? N = !1 : d.mdVisible || (R.on(c, m), E(!0), "touchstart" === e.type && R.one("touchend", function () {
          r.nextTick(function () {
            o.one("touchend", m);
          }, !1);
        }));
      }function m() {
        C = d.hasOwnProperty("mdAutohide") ? d.mdAutohide : v.hasOwnProperty("mdAutohide"), (C || W || o[0].activeElement !== R[0]) && (M && (e.cancel(M), E.queued = !1, M = null), R.off(c, m), R.triggerHandler("blur"), E(!1)), W = !1;
      }function f() {
        W = !0;
      }function p() {
        a.deregister("scroll", n, !0), a.deregister("blur", l), a.deregister("resize", q), R.off(s, u).off(c, m).off("mousedown", f), m(), h && h.disconnect();
      }if (R[0] && "MutationObserver" in t) {
        var h = new MutationObserver(function (e) {
          i(e) && r.nextTick(function () {
            E(!1);
          });
        });h.observe(R[0], { attributes: !0 });
      }N = !1, a.register("scroll", n, !0), a.register("blur", l), a.register("resize", q), d.$on("$destroy", p), R.on("mousedown", f), R.on(s, u);
    }function w() {
      function e() {
        d.$destroy();
      }if (h[0] && "MutationObserver" in t) {
        var i = new MutationObserver(function (e) {
          e.forEach(function (e) {
            "md-visible" !== e.attributeName || d.visibleWatcher || (d.visibleWatcher = d.$watch("mdVisible", $));
          });
        });i.observe(h[0], { attributes: !0 }), v.hasOwnProperty("mdVisible") && (d.visibleWatcher = d.$watch("mdVisible", $));
      } else d.visibleWatcher = d.$watch("mdVisible", $);d.$watch("mdDirection", y), h.one("$destroy", e), R.one("$destroy", e), d.$on("$destroy", function () {
        E(!1), h.remove(), i && i.disconnect();
      }), h.text().indexOf(n.startSymbol()) > -1 && d.$watch(function () {
        return h.text().trim();
      }, g);
    }function E(t) {
      E.queued && E.value === !!t || !E.queued && d.mdVisible === !!t || (E.value = !!t, E.queued || (t ? (E.queued = !0, M = e(function () {
        d.mdVisible = E.value, E.queued = !1, M = null, d.visibleWatcher || $(d.mdVisible);
      }, d.mdDelay)) : r.nextTick(function () {
        d.mdVisible = !1, d.visibleWatcher || $(!1);
      })));
    }function $(e) {
      e ? T() : P();
    }function T() {
      if (!h[0].textContent.trim()) throw new Error("Text for the tooltip has not been provided. Please include text within the mdTooltip element.");if (!A) {
        var e = "tooltip-" + r.nextUid(),
            t = angular.element(document.body),
            i = h.html().trim(),
            o = l.newPanelAnimation().openFrom(R).closeTo(R).withAnimation({ open: "md-show", close: "md-hide" }),
            n = { id: e, attachTo: t, template: i, propagateContainerEvents: !0, panelClass: "md-tooltip " + D, animation: o, position: V, zIndex: d.mdZIndex, focusOnOpen: !1 };A = l.create(n);
      }A.open();
    }function P() {
      A && A.close();
    }var D,
        O,
        V,
        A,
        C,
        M,
        R = r.getParentWithPointerEvents(h),
        q = i.throttle(y),
        W = !1,
        N = null;b(), g(), h.detach(), h.attr("role", "tooltip"), y(), x(), w();
  }var s = "focus touchstart mouseenter",
      c = "blur touchcancel mouseleave",
      u = 100,
      m = 0,
      f = "bottom",
      p = { top: { x: l.xPosition.CENTER, y: l.yPosition.ABOVE }, right: { x: l.xPosition.OFFSET_END, y: l.yPosition.CENTER }, bottom: { x: l.xPosition.CENTER, y: l.yPosition.BELOW }, left: { x: l.xPosition.OFFSET_START, y: l.yPosition.CENTER } };return { restrict: "E", priority: 210, scope: { mdZIndex: "=?mdZIndex", mdDelay: "=?mdDelay", mdVisible: "=?mdVisible", mdAutohide: "=?mdAutohide", mdDirection: "@?mdDirection" }, link: d };
}function MdTooltipRegistry() {
  function e(e) {
    o[e.type] && o[e.type].forEach(function (t) {
      t.call(this, e);
    }, this);
  }function t(t, i, r) {
    var l = o[t] = o[t] || [];l.length || (r ? window.addEventListener(t, e, !0) : n.on(t, e)), l.indexOf(i) === -1 && l.push(i);
  }function i(t, i, r) {
    var l = o[t],
        a = l ? l.indexOf(i) : -1;a > -1 && (l.splice(a, 1), 0 === l.length && (r ? window.removeEventListener(t, e, !0) : n.off(t, e)));
  }var o = {},
      n = angular.element(window);return { register: t, deregister: i };
}goog.provide("ngmaterial.components.tooltip"), goog.require("ngmaterial.components.panel"), goog.require("ngmaterial.core"), MdTooltipDirective.$inject = ["$timeout", "$window", "$$rAF", "$document", "$interpolate", "$mdUtil", "$mdPanel", "$$mdTooltipRegistry"], angular.module("material.components.tooltip", ["material.core", "material.components.panel"]).directive("mdTooltip", MdTooltipDirective).service("$$mdTooltipRegistry", MdTooltipRegistry), ngmaterial.components.tooltip = angular.module("material.components.tooltip");

//# sourceMappingURL=tooltip.min-compiled.js.map