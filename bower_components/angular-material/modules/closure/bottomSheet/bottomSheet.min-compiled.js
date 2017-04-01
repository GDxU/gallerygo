"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function MdBottomSheetDirective(e) {
  return { restrict: "E", link: function link(t, o) {
      o.addClass("_md"), t.$on("$destroy", function () {
        e.destroy();
      });
    } };
}function MdBottomSheetProvider(e) {
  function t(e, t, r, a, i, c, l, m) {
    function d(o, n, l, d) {
      if (n = r.extractElementByName(n, "md-bottom-sheet"), n.attr("tabindex", "-1"), n.hasClass("ng-cloak")) {
        var s = "$mdBottomSheet: using `<md-bottom-sheet ng-cloak >` will affect the bottom-sheet opening animations.";m.warn(s, n[0]);
      }l.disableBackdrop || (S = r.createBackdrop(o, "md-bottom-sheet-backdrop md-opaque"), S[0].tabIndex = -1, l.clickOutsideToClose && S.on("click", function () {
        r.nextTick(i.cancel, !0);
      }), a.inherit(S, l.parent), e.enter(S, l.parent, null));var p = new u(n, l.parent);return l.bottomSheet = p, a.inherit(p.element, l.parent), l.disableParentScroll && (l.restoreScroll = r.disableScrollAround(p.element, l.parent)), e.enter(p.element, l.parent, S).then(function () {
        var e = r.findFocusTarget(n) || angular.element(n[0].querySelector("button") || n[0].querySelector("a") || n[0].querySelector(r.prefixer("ng-click", !0))) || S;l.escapeToClose && (l.rootElementKeyupCallback = function (e) {
          e.keyCode === t.KEY_CODE.ESCAPE && r.nextTick(i.cancel, !0);
        }, c.on("keyup", l.rootElementKeyupCallback), e && e.focus());
      });
    }function s(t, o, n) {
      var r = n.bottomSheet;return n.disableBackdrop || e.leave(S), e.leave(r.element).then(function () {
        n.disableParentScroll && (n.restoreScroll(), delete n.restoreScroll), r.cleanup();
      });
    }function u(e, a) {
      function c(o) {
        e.css(t.CSS.TRANSITION_DURATION, "0ms");
      }function m(o) {
        var r = o.pointer.distanceY;r < 5 && (r = Math.max(-n, r / 2)), e.css(t.CSS.TRANSFORM, "translate3d(0," + (n + r) + "px,0)");
      }function d(n) {
        if (n.pointer.distanceY > 0 && (n.pointer.distanceY > 20 || Math.abs(n.pointer.velocityY) > o)) {
          var a = e.prop("offsetHeight") - n.pointer.distanceY,
              c = Math.min(a / n.pointer.velocityY * .75, 500);e.css(t.CSS.TRANSITION_DURATION, c + "ms"), r.nextTick(i.cancel, !0);
        } else e.css(t.CSS.TRANSITION_DURATION, ""), e.css(t.CSS.TRANSFORM, "");
      }var s = l.register(a, "drag", { horizontal: !1 });return a.on("$md.dragstart", c).on("$md.drag", m).on("$md.dragend", d), { element: e, cleanup: function cleanup() {
          s(), a.off("$md.dragstart", c), a.off("$md.drag", m), a.off("$md.dragend", d);
        } };
    }var S;return { themable: !0, onShow: d, onRemove: s, disableBackdrop: !1, escapeToClose: !0, clickOutsideToClose: !0, disableParentScroll: !0 };
  }t.$inject = ["$animate", "$mdConstant", "$mdUtil", "$mdTheming", "$mdBottomSheet", "$rootElement", "$mdGesture", "$log"];var o = .5,
      n = 80;return e("$mdBottomSheet").setDefaults({ methods: ["disableParentScroll", "escapeToClose", "clickOutsideToClose"], options: t });
}goog.provide("ngmaterial.components.bottomSheet"), goog.require("ngmaterial.components.backdrop"), goog.require("ngmaterial.core"), MdBottomSheetDirective.$inject = ["$mdBottomSheet"], MdBottomSheetProvider.$inject = ["$$interimElementProvider"], angular.module("material.components.bottomSheet", ["material.core", "material.components.backdrop"]).directive("mdBottomSheet", MdBottomSheetDirective).provider("$mdBottomSheet", MdBottomSheetProvider), ngmaterial.components.bottomSheet = angular.module("material.components.bottomSheet");

//# sourceMappingURL=bottomSheet.min-compiled.js.map