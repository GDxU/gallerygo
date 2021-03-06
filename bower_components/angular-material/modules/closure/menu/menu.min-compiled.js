"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function MenuController(e, t, n, r, o, i, a, l, s) {
  var u,
      d,
      c = o.prefixer(),
      m = this;this.nestLevel = parseInt(t.mdNestLevel, 10) || 0, this.init = function (t, i) {
    i = i || {}, u = t, d = n[0].querySelector(c.buildSelector(["ng-click", "ng-mouseenter"])), d.setAttribute("aria-expanded", "false"), this.isInMenuBar = i.isInMenuBar, this.nestedMenus = o.nodesToArray(u[0].querySelectorAll(".md-nested-menu")), u.on("$mdInterimElementRemove", function () {
      m.isOpen = !1, o.nextTick(function () {
        m.onIsOpenChanged(m.isOpen);
      });
    }), o.nextTick(function () {
      m.onIsOpenChanged(m.isOpen);
    });var a = "menu_container_" + o.nextUid();u.attr("id", a), angular.element(d).attr({ "aria-owns": a, "aria-haspopup": "true" }), r.$on("$destroy", angular.bind(this, function () {
      this.disableHoverListener(), e.destroy();
    })), u.on("$destroy", function () {
      e.destroy();
    });
  };var f,
      p,
      h = [];this.enableHoverListener = function () {
    h.push(a.$on("$mdMenuOpen", function (e, t) {
      u[0].contains(t[0]) && (m.currentlyOpenMenu = t.controller("mdMenu"), m.isAlreadyOpening = !1, m.currentlyOpenMenu.registerContainerProxy(m.triggerContainerProxy.bind(m)));
    })), h.push(a.$on("$mdMenuClose", function (e, t) {
      u[0].contains(t[0]) && (m.currentlyOpenMenu = void 0);
    })), p = angular.element(o.nodesToArray(u[0].children[0].children)), p.on("mouseenter", m.handleMenuItemHover), p.on("mouseleave", m.handleMenuItemMouseLeave);
  }, this.disableHoverListener = function () {
    for (; h.length;) {
      h.shift()();
    }p && p.off("mouseenter", m.handleMenuItemHover), p && p.off("mouseleave", m.handleMenuItemMouseLeave);
  }, this.handleMenuItemHover = function (e) {
    if (!m.isAlreadyOpening) {
      var t = e.target.querySelector("md-menu") || o.getClosest(e.target, "MD-MENU");f = i(function () {
        if (t && (t = angular.element(t).controller("mdMenu")), m.currentlyOpenMenu && m.currentlyOpenMenu != t) {
          var e = m.nestLevel + 1;m.currentlyOpenMenu.close(!0, { closeTo: e }), m.isAlreadyOpening = !!t, t && t.open();
        } else t && !t.isOpen && t.open && (m.isAlreadyOpening = !!t, t && t.open());
      }, t ? 100 : 250);var n = e.currentTarget.querySelector(".md-button:not([disabled])");n && n.focus();
    }
  }, this.handleMenuItemMouseLeave = function () {
    f && (i.cancel(f), f = void 0);
  }, this.open = function (t) {
    t && t.stopPropagation(), t && t.preventDefault(), m.isOpen || (m.enableHoverListener(), m.isOpen = !0, o.nextTick(function () {
      m.onIsOpenChanged(m.isOpen);
    }), d = d || (t ? t.target : n[0]), d.setAttribute("aria-expanded", "true"), r.$emit("$mdMenuOpen", n), e.show({ scope: r, mdMenuCtrl: m, nestLevel: m.nestLevel, element: u, target: d, preserveElement: !0, parent: "body" })["finally"](function () {
      d.setAttribute("aria-expanded", "false"), m.disableHoverListener();
    }));
  }, this.onIsOpenChanged = function (e) {
    e ? (u.attr("aria-hidden", "false"), n[0].classList.add("md-open"), angular.forEach(m.nestedMenus, function (e) {
      e.classList.remove("md-open");
    })) : (u.attr("aria-hidden", "true"), n[0].classList.remove("md-open")), r.$mdMenuIsOpen = m.isOpen;
  }, this.focusMenuContainer = function () {
    var e = u[0].querySelector(c.buildSelector(["md-menu-focus-target", "md-autofocus"]));e || (e = u[0].querySelector(".md-button:not([disabled])")), e.focus();
  }, this.registerContainerProxy = function (e) {
    this.containerProxy = e;
  }, this.triggerContainerProxy = function (e) {
    this.containerProxy && this.containerProxy(e);
  }, this.destroy = function () {
    return m.isOpen ? e.destroy() : l.when(!1);
  }, this.close = function (t, i) {
    if (m.isOpen) {
      m.isOpen = !1, o.nextTick(function () {
        m.onIsOpenChanged(m.isOpen);
      });var a = angular.extend({}, i, { skipFocus: t });if (r.$emit("$mdMenuClose", n, a), e.hide(null, i), !t) {
        var l = m.restoreFocusTo || n.find("button")[0];l instanceof angular.element && (l = l[0]), l && l.focus();
      }
    }
  }, this.positionMode = function () {
    var e = (t.mdPositionMode || "target").split(" ");return 1 == e.length && e.push(e[0]), { left: e[0], top: e[1] };
  }, this.offsets = function () {
    var e = (t.mdOffset || "0 0").split(" ").map(parseFloat);if (2 == e.length) return { left: e[0], top: e[1] };if (1 == e.length) return { top: e[0], left: e[0] };throw Error("Invalid offsets specified. Please follow format <x, y> or <n>");
  }, r.$mdMenu = { open: this.open, close: this.close }, r.$mdOpenMenu = angular.bind(this, function () {
    return s.warn("mdMenu: The $mdOpenMenu method is deprecated. Please use `$mdMenu.open`."), this.open.apply(this, arguments);
  });
}function MenuDirective(e) {
  function t(t) {
    t.addClass("md-menu");var o = t.children()[0],
        i = e.prefixer();if (i.hasAttribute(o, "ng-click") || (o = o.querySelector(i.buildSelector(["ng-click", "ng-mouseenter"])) || o), !o || "MD-BUTTON" != o.nodeName && "BUTTON" != o.nodeName || o.hasAttribute("type") || o.setAttribute("type", "button"), 2 != t.children().length) throw Error(r + "Expected two children elements.");o && o.setAttribute("aria-haspopup", "true");var a = t[0].querySelectorAll("md-menu"),
        l = parseInt(t[0].getAttribute("md-nest-level"), 10) || 0;return a && angular.forEach(e.nodesToArray(a), function (e) {
      e.hasAttribute("md-position-mode") || e.setAttribute("md-position-mode", "cascade"), e.classList.add("_md-nested-menu"), e.setAttribute("md-nest-level", l + 1);
    }), n;
  }function n(e, t, n, r) {
    var o = r[0],
        i = !!r[1],
        a = angular.element('<div class="_md md-open-menu-container md-whiteframe-z2"></div>'),
        l = t.children()[1];t.addClass("_md"), l.hasAttribute("role") || l.setAttribute("role", "menu"), a.append(l), t.on("$destroy", function () {
      a.remove();
    }), t.append(a), a[0].style.display = "none", o.init(a, { isInMenuBar: i });
  }var r = "Invalid HTML for md-menu: ";return { restrict: "E", require: ["mdMenu", "?^mdMenuBar"], controller: "mdMenuCtrl", scope: !0, compile: t };
}function MenuProvider(e) {
  function t(e, t, o, i, a, l, s, u, d) {
    function c(t, n, r) {
      return r.nestLevel ? angular.noop : (r.disableParentScroll && !e.getClosest(r.target, "MD-DIALOG") ? r.restoreScroll = e.disableScrollAround(r.element, r.parent) : r.disableParentScroll = !1, r.hasBackdrop && (r.backdrop = e.createBackdrop(t, "md-menu-backdrop md-click-catcher"), d.enter(r.backdrop, i[0].body)), function () {
        r.backdrop && r.backdrop.remove(), r.disableParentScroll && r.restoreScroll();
      });
    }function m(e, t, n) {
      function r() {
        return u(t, { addClass: "md-leave" }).start();
      }function o() {
        t.removeClass("md-active"), g(t, n), n.alreadyOpen = !1;
      }return n.cleanupInteraction && n.cleanupInteraction(), n.cleanupResizing(), n.hideBackdrop(), n.$destroy === !0 ? o() : r().then(o);
    }function f(n, r, i) {
      function d() {
        return i.parent.append(r), r[0].style.display = "", l(function (e) {
          var t = v(r, i);r.removeClass("md-leave"), u(r, { addClass: "md-active", from: b.toCss(t), to: b.toCss({ transform: "" }) }).start().then(e);
        });
      }function m() {
        if (!i.target) throw Error("$mdMenu.show() expected a target to animate from in options.target");angular.extend(i, { alreadyOpen: !1, isRemoved: !1, target: angular.element(i.target), parent: angular.element(i.parent), menuContentEl: angular.element(r[0].querySelector("md-menu-content")) });
      }function f() {
        var e = function (e, t) {
          return s.throttle(function () {
            if (!i.isRemoved) {
              var n = v(e, t);e.css(b.toCss(n));
            }
          });
        }(r, i);return a.addEventListener("resize", e), a.addEventListener("orientationchange", e), function () {
          a.removeEventListener("resize", e), a.removeEventListener("orientationchange", e);
        };
      }function h() {
        function t(t) {
          var n;switch (t.keyCode) {case o.KEY_CODE.ESCAPE:
              i.mdMenuCtrl.close(!1, { closeAll: !0 }), n = !0;break;case o.KEY_CODE.UP_ARROW:
              p(t, i.menuContentEl, i, -1) || i.nestLevel || i.mdMenuCtrl.triggerContainerProxy(t), n = !0;break;case o.KEY_CODE.DOWN_ARROW:
              p(t, i.menuContentEl, i, 1) || i.nestLevel || i.mdMenuCtrl.triggerContainerProxy(t), n = !0;break;case o.KEY_CODE.LEFT_ARROW:
              i.nestLevel ? i.mdMenuCtrl.close() : i.mdMenuCtrl.triggerContainerProxy(t), n = !0;break;case o.KEY_CODE.RIGHT_ARROW:
              var r = e.getClosest(t.target, "MD-MENU");r && r != i.parent[0] ? t.target.click() : i.mdMenuCtrl.triggerContainerProxy(t), n = !0;}n && (t.preventDefault(), t.stopImmediatePropagation());
        }function a(e) {
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
              if (M.hasAttribute(e, n)) return !0;
            }return !1;
          }var a = t.target;do {
            if (a == i.menuContentEl[0]) return;if ((o(a, ["ng-click", "ng-href", "ui-sref"]) || "BUTTON" == a.nodeName || "MD-BUTTON" == a.nodeName) && !o(a, ["md-prevent-menu-close"])) {
              var l = e.getClosest(a, "MD-MENU");a.hasAttribute("disabled") || l && l != i.parent[0] || r();break;
            }
          } while (a = a.parentNode);
        }r.addClass("md-clickable"), i.backdrop && i.backdrop.on("click", a), i.menuContentEl.on("keydown", t), i.menuContentEl[0].addEventListener("click", l, !0);var s = i.menuContentEl[0].querySelector(M.buildSelector(["md-menu-focus-target", "md-autofocus"]));if (!s) for (var u = i.menuContentEl[0].children.length, d = 0; d < u; d++) {
          var c = i.menuContentEl[0].children[d];if (s = c.querySelector(".md-button:not([disabled])")) break;if (c.firstElementChild && !c.firstElementChild.disabled) {
            s = c.firstElementChild;break;
          }
        }return s && s.focus(), function () {
          r.removeClass("md-clickable"), i.backdrop && i.backdrop.off("click", a), i.menuContentEl.off("keydown", t), i.menuContentEl[0].removeEventListener("click", l, !0);
        };
      }return m(i), t.inherit(i.menuContentEl, i.target), i.cleanupResizing = f(), i.hideBackdrop = c(n, r, i), d().then(function (e) {
        return i.alreadyOpen = !0, i.cleanupInteraction = h(), e;
      });
    }function p(t, n, r, o) {
      for (var i, a = e.getClosest(t.target, "MD-MENU-ITEM"), l = e.nodesToArray(n[0].children), s = l.indexOf(a), u = s + o; u >= 0 && u < l.length; u += o) {
        var d = l[u].querySelector(".md-button");if (i = h(d)) break;
      }return i;
    }function h(e) {
      if (e && e.getAttribute("tabindex") != -1) return e.focus(), i[0].activeElement == e;
    }function g(e, t) {
      t.preserveElement ? n(e).style.display = "none" : n(e).parentNode === n(t.parent) && n(t.parent).removeChild(n(e));
    }function v(t, n) {
      function o(e) {
        e.top = Math.max(Math.min(e.top, v.bottom - u.offsetHeight), v.top), e.left = Math.max(Math.min(e.left, v.right - u.offsetWidth), v.left);
      }function l() {
        for (var e = 0; e < d.children.length; ++e) {
          if ("none" != a.getComputedStyle(d.children[e]).display) return d.children[e];
        }
      }var s,
          u = t[0],
          d = t[0].firstElementChild,
          c = d.getBoundingClientRect(),
          m = i[0].body,
          f = m.getBoundingClientRect(),
          p = a.getComputedStyle(d),
          h = n.target[0].querySelector(M.buildSelector("md-menu-origin")) || n.target[0],
          g = h.getBoundingClientRect(),
          v = { left: f.left + r, top: Math.max(f.top, 0) + r, bottom: Math.max(f.bottom, Math.max(f.top, 0) + f.height) - r, right: f.right - r },
          b = { top: 0, left: 0, right: 0, bottom: 0 },
          C = { top: 0, left: 0, right: 0, bottom: 0 },
          y = n.mdMenuCtrl.positionMode();"target" != y.top && "target" != y.left && "target-right" != y.left || (s = l(), s && (s = s.firstElementChild || s, s = s.querySelector(M.buildSelector("md-menu-align-target")) || s, b = s.getBoundingClientRect(), C = { top: parseFloat(u.style.top || 0), left: parseFloat(u.style.left || 0) }));var E = {},
          k = "top ";switch (y.top) {case "target":
          E.top = C.top + g.top - b.top;break;case "cascade":
          E.top = g.top - parseFloat(p.paddingTop) - h.style.top;break;case "bottom":
          E.top = g.top + g.height;break;default:
          throw new Error('Invalid target mode "' + y.top + '" specified for md-menu on Y axis.');}var O = "rtl" == e.bidi();switch (y.left) {case "target":
          E.left = C.left + g.left - b.left, k += O ? "right" : "left";break;case "target-left":
          E.left = g.left, k += "left";break;case "target-right":
          E.left = g.right - c.width + (c.right - b.right), k += "right";break;case "cascade":
          var $ = O ? g.left - c.width < v.left : g.right + c.width < v.right;E.left = $ ? g.right - h.style.left : g.left - h.style.left - c.width, k += $ ? "left" : "right";break;case "right":
          O ? (E.left = g.right - g.width, k += "left") : (E.left = g.right - c.width, k += "right");break;case "left":
          O ? (E.left = g.right - c.width, k += "right") : (E.left = g.left, k += "left");break;default:
          throw new Error('Invalid target mode "' + y.left + '" specified for md-menu on X axis.');}var A = n.mdMenuCtrl.offsets();E.top += A.top, E.left += A.left, o(E);var x = Math.round(100 * Math.min(g.width / u.offsetWidth, 1)) / 100,
          S = Math.round(100 * Math.min(g.height / u.offsetHeight, 1)) / 100;return { top: Math.round(E.top), left: Math.round(E.left), transform: n.alreadyOpen ? void 0 : e.supplant("scale({0},{1})", [x, S]), transformOrigin: k };
    }var M = e.prefixer(),
        b = e.dom.animator;return { parent: "body", onShow: f, onRemove: m, hasBackdrop: !0, disableParentScroll: !0, skipCompile: !0, preserveScope: !0, multiple: !0, themable: !0 };
  }function n(e) {
    return e instanceof angular.element && (e = e[0]), e;
  }t.$inject = ["$mdUtil", "$mdTheming", "$mdConstant", "$document", "$window", "$q", "$$rAF", "$animateCss", "$animate"];var r = 8;return e("$mdMenu").setDefaults({ methods: ["target"], options: t });
}goog.provide("ngmaterial.components.menu"), goog.require("ngmaterial.components.backdrop"), goog.require("ngmaterial.core"), angular.module("material.components.menu", ["material.core", "material.components.backdrop"]), MenuController.$inject = ["$mdMenu", "$attrs", "$element", "$scope", "$mdUtil", "$timeout", "$rootScope", "$q", "$log"], angular.module("material.components.menu").controller("mdMenuCtrl", MenuController), MenuDirective.$inject = ["$mdUtil"], angular.module("material.components.menu").directive("mdMenu", MenuDirective), MenuProvider.$inject = ["$$interimElementProvider"], angular.module("material.components.menu").provider("$mdMenu", MenuProvider), ngmaterial.components.menu = angular.module("material.components.menu");

//# sourceMappingURL=menu.min-compiled.js.map