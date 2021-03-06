"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (e, t, n) {
  "use strict";
  function r(e, r, o, i, a, l, s, d, u) {
    var c,
        m,
        f = a.prefixer(),
        p = this;this.nestLevel = parseInt(r.mdNestLevel, 10) || 0, this.init = function (n, r) {
      r = r || {}, c = n, m = o[0].querySelector(f.buildSelector(["ng-click", "ng-mouseenter"])), m.setAttribute("aria-expanded", "false"), this.isInMenuBar = r.isInMenuBar, this.nestedMenus = a.nodesToArray(c[0].querySelectorAll(".md-nested-menu")), c.on("$mdInterimElementRemove", function () {
        p.isOpen = !1, a.nextTick(function () {
          p.onIsOpenChanged(p.isOpen);
        });
      }), a.nextTick(function () {
        p.onIsOpenChanged(p.isOpen);
      });var l = "menu_container_" + a.nextUid();c.attr("id", l), t.element(m).attr({ "aria-owns": l, "aria-haspopup": "true" }), i.$on("$destroy", t.bind(this, function () {
        this.disableHoverListener(), e.destroy();
      })), c.on("$destroy", function () {
        e.destroy();
      });
    };var h,
        g,
        v = [];this.enableHoverListener = function () {
      v.push(s.$on("$mdMenuOpen", function (e, t) {
        c[0].contains(t[0]) && (p.currentlyOpenMenu = t.controller("mdMenu"), p.isAlreadyOpening = !1, p.currentlyOpenMenu.registerContainerProxy(p.triggerContainerProxy.bind(p)));
      })), v.push(s.$on("$mdMenuClose", function (e, t) {
        c[0].contains(t[0]) && (p.currentlyOpenMenu = n);
      })), g = t.element(a.nodesToArray(c[0].children[0].children)), g.on("mouseenter", p.handleMenuItemHover), g.on("mouseleave", p.handleMenuItemMouseLeave);
    }, this.disableHoverListener = function () {
      for (; v.length;) {
        v.shift()();
      }g && g.off("mouseenter", p.handleMenuItemHover), g && g.off("mouseleave", p.handleMenuItemMouseLeave);
    }, this.handleMenuItemHover = function (e) {
      if (!p.isAlreadyOpening) {
        var n = e.target.querySelector("md-menu") || a.getClosest(e.target, "MD-MENU");h = l(function () {
          if (n && (n = t.element(n).controller("mdMenu")), p.currentlyOpenMenu && p.currentlyOpenMenu != n) {
            var e = p.nestLevel + 1;p.currentlyOpenMenu.close(!0, { closeTo: e }), p.isAlreadyOpening = !!n, n && n.open();
          } else n && !n.isOpen && n.open && (p.isAlreadyOpening = !!n, n && n.open());
        }, n ? 100 : 250);var r = e.currentTarget.querySelector(".md-button:not([disabled])");r && r.focus();
      }
    }, this.handleMenuItemMouseLeave = function () {
      h && (l.cancel(h), h = n);
    }, this.open = function (t) {
      t && t.stopPropagation(), t && t.preventDefault(), p.isOpen || (p.enableHoverListener(), p.isOpen = !0, a.nextTick(function () {
        p.onIsOpenChanged(p.isOpen);
      }), m = m || (t ? t.target : o[0]), m.setAttribute("aria-expanded", "true"), i.$emit("$mdMenuOpen", o), e.show({ scope: i, mdMenuCtrl: p, nestLevel: p.nestLevel, element: c, target: m, preserveElement: !0, parent: "body" })["finally"](function () {
        m.setAttribute("aria-expanded", "false"), p.disableHoverListener();
      }));
    }, this.onIsOpenChanged = function (e) {
      e ? (c.attr("aria-hidden", "false"), o[0].classList.add("md-open"), t.forEach(p.nestedMenus, function (e) {
        e.classList.remove("md-open");
      })) : (c.attr("aria-hidden", "true"), o[0].classList.remove("md-open")), i.$mdMenuIsOpen = p.isOpen;
    }, this.focusMenuContainer = function () {
      var e = c[0].querySelector(f.buildSelector(["md-menu-focus-target", "md-autofocus"]));e || (e = c[0].querySelector(".md-button:not([disabled])")), e.focus();
    }, this.registerContainerProxy = function (e) {
      this.containerProxy = e;
    }, this.triggerContainerProxy = function (e) {
      this.containerProxy && this.containerProxy(e);
    }, this.destroy = function () {
      return p.isOpen ? e.destroy() : d.when(!1);
    }, this.close = function (n, r) {
      if (p.isOpen) {
        p.isOpen = !1, a.nextTick(function () {
          p.onIsOpenChanged(p.isOpen);
        });var l = t.extend({}, r, { skipFocus: n });if (i.$emit("$mdMenuClose", o, l), e.hide(null, r), !n) {
          var s = p.restoreFocusTo || o.find("button")[0];s instanceof t.element && (s = s[0]), s && s.focus();
        }
      }
    }, this.positionMode = function () {
      var e = (r.mdPositionMode || "target").split(" ");return 1 == e.length && e.push(e[0]), { left: e[0], top: e[1] };
    }, this.offsets = function () {
      var e = (r.mdOffset || "0 0").split(" ").map(parseFloat);if (2 == e.length) return { left: e[0], top: e[1] };if (1 == e.length) return { top: e[0], left: e[0] };throw Error("Invalid offsets specified. Please follow format <x, y> or <n>");
    }, i.$mdMenu = { open: this.open, close: this.close }, i.$mdOpenMenu = t.bind(this, function () {
      return u.warn("mdMenu: The $mdOpenMenu method is deprecated. Please use `$mdMenu.open`."), this.open.apply(this, arguments);
    });
  }function o(e) {
    function n(n) {
      n.addClass("md-menu");var i = n.children()[0],
          a = e.prefixer();if (a.hasAttribute(i, "ng-click") || (i = i.querySelector(a.buildSelector(["ng-click", "ng-mouseenter"])) || i), !i || "MD-BUTTON" != i.nodeName && "BUTTON" != i.nodeName || i.hasAttribute("type") || i.setAttribute("type", "button"), 2 != n.children().length) throw Error(o + "Expected two children elements.");i && i.setAttribute("aria-haspopup", "true");var l = n[0].querySelectorAll("md-menu"),
          s = parseInt(n[0].getAttribute("md-nest-level"), 10) || 0;return l && t.forEach(e.nodesToArray(l), function (e) {
        e.hasAttribute("md-position-mode") || e.setAttribute("md-position-mode", "cascade"), e.classList.add("_md-nested-menu"), e.setAttribute("md-nest-level", s + 1);
      }), r;
    }function r(e, n, r, o) {
      var i = o[0],
          a = !!o[1],
          l = t.element('<div class="_md md-open-menu-container md-whiteframe-z2"></div>'),
          s = n.children()[1];n.addClass("_md"), s.hasAttribute("role") || s.setAttribute("role", "menu"), l.append(s), n.on("$destroy", function () {
        l.remove();
      }), n.append(l), l[0].style.display = "none", i.init(l, { isInMenuBar: a });
    }var o = "Invalid HTML for md-menu: ";return { restrict: "E", require: ["mdMenu", "?^mdMenuBar"], controller: "mdMenuCtrl", scope: !0, compile: n };
  }function i(e) {
    function r(e, r, a, l, s, d, u, c, m) {
      function f(n, r, o) {
        return o.nestLevel ? t.noop : (o.disableParentScroll && !e.getClosest(o.target, "MD-DIALOG") ? o.restoreScroll = e.disableScrollAround(o.element, o.parent) : o.disableParentScroll = !1, o.hasBackdrop && (o.backdrop = e.createBackdrop(n, "md-menu-backdrop md-click-catcher"), m.enter(o.backdrop, l[0].body)), function () {
          o.backdrop && o.backdrop.remove(), o.disableParentScroll && o.restoreScroll();
        });
      }function p(e, t, n) {
        function r() {
          return c(t, { addClass: "md-leave" }).start();
        }function o() {
          t.removeClass("md-active"), b(t, n), n.alreadyOpen = !1;
        }return n.cleanupInteraction && n.cleanupInteraction(), n.cleanupResizing(), n.hideBackdrop(), n.$destroy === !0 ? o() : r().then(o);
      }function h(n, o, i) {
        function l() {
          return i.parent.append(o), o[0].style.display = "", d(function (e) {
            var t = M(o, i);o.removeClass("md-leave"), c(o, { addClass: "md-active", from: C.toCss(t), to: C.toCss({ transform: "" }) }).start().then(e);
          });
        }function m() {
          if (!i.target) throw Error("$mdMenu.show() expected a target to animate from in options.target");t.extend(i, { alreadyOpen: !1, isRemoved: !1, target: t.element(i.target), parent: t.element(i.parent), menuContentEl: t.element(o[0].querySelector("md-menu-content")) });
        }function p() {
          var e = function (e, t) {
            return u.throttle(function () {
              if (!i.isRemoved) {
                var n = M(e, t);e.css(C.toCss(n));
              }
            });
          }(o, i);return s.addEventListener("resize", e), s.addEventListener("orientationchange", e), function () {
            s.removeEventListener("resize", e), s.removeEventListener("orientationchange", e);
          };
        }function h() {
          function t(t) {
            var n;switch (t.keyCode) {case a.KEY_CODE.ESCAPE:
                i.mdMenuCtrl.close(!1, { closeAll: !0 }), n = !0;break;case a.KEY_CODE.UP_ARROW:
                g(t, i.menuContentEl, i, -1) || i.nestLevel || i.mdMenuCtrl.triggerContainerProxy(t), n = !0;break;case a.KEY_CODE.DOWN_ARROW:
                g(t, i.menuContentEl, i, 1) || i.nestLevel || i.mdMenuCtrl.triggerContainerProxy(t), n = !0;break;case a.KEY_CODE.LEFT_ARROW:
                i.nestLevel ? i.mdMenuCtrl.close() : i.mdMenuCtrl.triggerContainerProxy(t), n = !0;break;case a.KEY_CODE.RIGHT_ARROW:
                var r = e.getClosest(t.target, "MD-MENU");r && r != i.parent[0] ? t.target.click() : i.mdMenuCtrl.triggerContainerProxy(t), n = !0;}n && (t.preventDefault(), t.stopImmediatePropagation());
          }function r(e) {
            e.preventDefault(), e.stopPropagation(), n.$apply(function () {
              i.mdMenuCtrl.close(!0, { closeAll: !0 });
            });
          }function l(t) {
            function r() {
              n.$apply(function () {
                i.mdMenuCtrl.close(!0, { closeAll: !0 });
              });
            }function o(e, t) {
              if (!e) return !1;for (var n, r = 0; n = t[r]; ++r) {
                if (y.hasAttribute(e, n)) return !0;
              }return !1;
            }var a = t.target;do {
              if (a == i.menuContentEl[0]) return;if ((o(a, ["ng-click", "ng-href", "ui-sref"]) || "BUTTON" == a.nodeName || "MD-BUTTON" == a.nodeName) && !o(a, ["md-prevent-menu-close"])) {
                var l = e.getClosest(a, "MD-MENU");a.hasAttribute("disabled") || l && l != i.parent[0] || r();break;
              }
            } while (a = a.parentNode);
          }o.addClass("md-clickable"), i.backdrop && i.backdrop.on("click", r), i.menuContentEl.on("keydown", t), i.menuContentEl[0].addEventListener("click", l, !0);var s = i.menuContentEl[0].querySelector(y.buildSelector(["md-menu-focus-target", "md-autofocus"]));if (!s) for (var d = i.menuContentEl[0].children.length, u = 0; u < d; u++) {
            var c = i.menuContentEl[0].children[u];if (s = c.querySelector(".md-button:not([disabled])")) break;if (c.firstElementChild && !c.firstElementChild.disabled) {
              s = c.firstElementChild;break;
            }
          }return s && s.focus(), function () {
            o.removeClass("md-clickable"), i.backdrop && i.backdrop.off("click", r), i.menuContentEl.off("keydown", t), i.menuContentEl[0].removeEventListener("click", l, !0);
          };
        }return m(i), r.inherit(i.menuContentEl, i.target), i.cleanupResizing = p(), i.hideBackdrop = f(n, o, i), l().then(function (e) {
          return i.alreadyOpen = !0, i.cleanupInteraction = h(), e;
        });
      }function g(t, n, r, o) {
        for (var i, a = e.getClosest(t.target, "MD-MENU-ITEM"), l = e.nodesToArray(n[0].children), s = l.indexOf(a), d = s + o; d >= 0 && d < l.length; d += o) {
          var u = l[d].querySelector(".md-button");if (i = v(u)) break;
        }return i;
      }function v(e) {
        if (e && e.getAttribute("tabindex") != -1) return e.focus(), l[0].activeElement == e;
      }function b(e, t) {
        t.preserveElement ? o(e).style.display = "none" : o(e).parentNode === o(t.parent) && o(t.parent).removeChild(o(e));
      }function M(t, r) {
        function o(e) {
          e.top = Math.max(Math.min(e.top, b.bottom - u.offsetHeight), b.top), e.left = Math.max(Math.min(e.left, b.right - u.offsetWidth), b.left);
        }function a() {
          for (var e = 0; e < c.children.length; ++e) {
            if ("none" != s.getComputedStyle(c.children[e]).display) return c.children[e];
          }
        }var d,
            u = t[0],
            c = t[0].firstElementChild,
            m = c.getBoundingClientRect(),
            f = l[0].body,
            p = f.getBoundingClientRect(),
            h = s.getComputedStyle(c),
            g = r.target[0].querySelector(y.buildSelector("md-menu-origin")) || r.target[0],
            v = g.getBoundingClientRect(),
            b = { left: p.left + i, top: Math.max(p.top, 0) + i, bottom: Math.max(p.bottom, Math.max(p.top, 0) + p.height) - i, right: p.right - i },
            M = { top: 0, left: 0, right: 0, bottom: 0 },
            C = { top: 0, left: 0, right: 0, bottom: 0 },
            E = r.mdMenuCtrl.positionMode();"target" != E.top && "target" != E.left && "target-right" != E.left || (d = a(), d && (d = d.firstElementChild || d, d = d.querySelector(y.buildSelector("md-menu-align-target")) || d, M = d.getBoundingClientRect(), C = { top: parseFloat(u.style.top || 0), left: parseFloat(u.style.left || 0) }));var O = {},
            k = "top ";switch (E.top) {case "target":
            O.top = C.top + v.top - M.top;break;case "cascade":
            O.top = v.top - parseFloat(h.paddingTop) - g.style.top;break;case "bottom":
            O.top = v.top + v.height;break;default:
            throw new Error('Invalid target mode "' + E.top + '" specified for md-menu on Y axis.');}var $ = "rtl" == e.bidi();switch (E.left) {case "target":
            O.left = C.left + v.left - M.left, k += $ ? "right" : "left";break;case "target-left":
            O.left = v.left, k += "left";break;case "target-right":
            O.left = v.right - m.width + (m.right - M.right), k += "right";break;case "cascade":
            var A = $ ? v.left - m.width < b.left : v.right + m.width < b.right;O.left = A ? v.right - g.style.left : v.left - g.style.left - m.width, k += A ? "left" : "right";break;case "right":
            $ ? (O.left = v.right - v.width, k += "left") : (O.left = v.right - m.width, k += "right");break;case "left":
            $ ? (O.left = v.right - m.width, k += "right") : (O.left = v.left, k += "left");break;default:
            throw new Error('Invalid target mode "' + E.left + '" specified for md-menu on X axis.');}var w = r.mdMenuCtrl.offsets();O.top += w.top, O.left += w.left, o(O);var x = Math.round(100 * Math.min(v.width / u.offsetWidth, 1)) / 100,
            S = Math.round(100 * Math.min(v.height / u.offsetHeight, 1)) / 100;return { top: Math.round(O.top), left: Math.round(O.left), transform: r.alreadyOpen ? n : e.supplant("scale({0},{1})", [x, S]), transformOrigin: k };
      }var y = e.prefixer(),
          C = e.dom.animator;return { parent: "body", onShow: h, onRemove: p, hasBackdrop: !0, disableParentScroll: !0, skipCompile: !0, preserveScope: !0, multiple: !0, themable: !0 };
    }function o(e) {
      return e instanceof t.element && (e = e[0]), e;
    }r.$inject = ["$mdUtil", "$mdTheming", "$mdConstant", "$document", "$window", "$q", "$$rAF", "$animateCss", "$animate"];var i = 8;return e("$mdMenu").setDefaults({ methods: ["target"], options: r });
  }t.module("material.components.menu", ["material.core", "material.components.backdrop"]), r.$inject = ["$mdMenu", "$attrs", "$element", "$scope", "$mdUtil", "$timeout", "$rootScope", "$q", "$log"], t.module("material.components.menu").controller("mdMenuCtrl", r), o.$inject = ["$mdUtil"], t.module("material.components.menu").directive("mdMenu", o), i.$inject = ["$$interimElementProvider"], t.module("material.components.menu").provider("$mdMenu", i);
}(window, window.angular);

//# sourceMappingURL=menu.min-compiled.js.map