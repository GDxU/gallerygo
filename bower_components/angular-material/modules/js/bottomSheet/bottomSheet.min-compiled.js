"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (e, t, o) {
  "use strict";
  function n(e) {
    return { restrict: "E", link: function link(t, o) {
        o.addClass("_md"), t.$on("$destroy", function () {
          e.destroy();
        });
      } };
  }function r(e) {
    function o(e, o, a, c, i, l, s, d) {
      function m(n, r, s, m) {
        if (r = a.extractElementByName(r, "md-bottom-sheet"), r.attr("tabindex", "-1"), r.hasClass("ng-cloak")) {
          var u = "$mdBottomSheet: using `<md-bottom-sheet ng-cloak >` will affect the bottom-sheet opening animations.";d.warn(u, r[0]);
        }s.disableBackdrop || (p = a.createBackdrop(n, "md-bottom-sheet-backdrop md-opaque"), p[0].tabIndex = -1, s.clickOutsideToClose && p.on("click", function () {
          a.nextTick(i.cancel, !0);
        }), c.inherit(p, s.parent), e.enter(p, s.parent, null));var f = new S(r, s.parent);return s.bottomSheet = f, c.inherit(f.element, s.parent), s.disableParentScroll && (s.restoreScroll = a.disableScrollAround(f.element, s.parent)), e.enter(f.element, s.parent, p).then(function () {
          var e = a.findFocusTarget(r) || t.element(r[0].querySelector("button") || r[0].querySelector("a") || r[0].querySelector(a.prefixer("ng-click", !0))) || p;s.escapeToClose && (s.rootElementKeyupCallback = function (e) {
            e.keyCode === o.KEY_CODE.ESCAPE && a.nextTick(i.cancel, !0);
          }, l.on("keyup", s.rootElementKeyupCallback), e && e.focus());
        });
      }function u(t, o, n) {
        var r = n.bottomSheet;return n.disableBackdrop || e.leave(p), e.leave(r.element).then(function () {
          n.disableParentScroll && (n.restoreScroll(), delete n.restoreScroll), r.cleanup();
        });
      }function S(e, t) {
        function c(t) {
          e.css(o.CSS.TRANSITION_DURATION, "0ms");
        }function l(t) {
          var n = t.pointer.distanceY;n < 5 && (n = Math.max(-r, n / 2)), e.css(o.CSS.TRANSFORM, "translate3d(0," + (r + n) + "px,0)");
        }function d(t) {
          if (t.pointer.distanceY > 0 && (t.pointer.distanceY > 20 || Math.abs(t.pointer.velocityY) > n)) {
            var r = e.prop("offsetHeight") - t.pointer.distanceY,
                c = Math.min(r / t.pointer.velocityY * .75, 500);e.css(o.CSS.TRANSITION_DURATION, c + "ms"), a.nextTick(i.cancel, !0);
          } else e.css(o.CSS.TRANSITION_DURATION, ""), e.css(o.CSS.TRANSFORM, "");
        }var m = s.register(t, "drag", { horizontal: !1 });return t.on("$md.dragstart", c).on("$md.drag", l).on("$md.dragend", d), { element: e, cleanup: function cleanup() {
            m(), t.off("$md.dragstart", c), t.off("$md.drag", l), t.off("$md.dragend", d);
          } };
      }var p;return { themable: !0, onShow: m, onRemove: u, disableBackdrop: !1, escapeToClose: !0, clickOutsideToClose: !0, disableParentScroll: !0 };
    }o.$inject = ["$animate", "$mdConstant", "$mdUtil", "$mdTheming", "$mdBottomSheet", "$rootElement", "$mdGesture", "$log"];var n = .5,
        r = 80;return e("$mdBottomSheet").setDefaults({ methods: ["disableParentScroll", "escapeToClose", "clickOutsideToClose"], options: o });
  }n.$inject = ["$mdBottomSheet"], r.$inject = ["$$interimElementProvider"], t.module("material.components.bottomSheet", ["material.core", "material.components.backdrop"]).directive("mdBottomSheet", n).provider("$mdBottomSheet", r);
}(window, window.angular);

//# sourceMappingURL=bottomSheet.min-compiled.js.map