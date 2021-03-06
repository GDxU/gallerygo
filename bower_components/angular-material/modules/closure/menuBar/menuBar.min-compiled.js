"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function MenuBarController(e, n, t, o, r, i, a, l) {
  this.$element = t, this.$attrs = o, this.$mdConstant = r, this.$mdUtil = a, this.$document = i, this.$scope = e, this.$rootScope = n, this.$timeout = l;var u = this;angular.forEach(BOUND_MENU_METHODS, function (e) {
    u[e] = angular.bind(u, u[e]);
  });
}function MenuBarDirective(e, n) {
  return { restrict: "E", require: "mdMenuBar", controller: "MenuBarController", compile: function compile(t, o) {
      return o.ariaRole || t[0].setAttribute("role", "menubar"), angular.forEach(t[0].children, function (n) {
        if ("MD-MENU" == n.nodeName) {
          n.hasAttribute("md-position-mode") || (n.setAttribute("md-position-mode", "left bottom"), n.querySelector("button, a, md-button").setAttribute("role", "menuitem"));var t = e.nodesToArray(n.querySelectorAll("md-menu-content"));angular.forEach(t, function (e) {
            e.classList.add("md-menu-bar-menu"), e.classList.add("md-dense"), e.hasAttribute("width") || e.setAttribute("width", 5);
          });
        }
      }), t.find("md-menu-item").addClass("md-in-menu-bar"), function (e, t, o, r) {
        t.addClass("_md"), n(e, t), r.init();
      };
    } };
}function MenuDividerDirective() {
  return { restrict: "E", compile: function compile(e, n) {
      n.role || e[0].setAttribute("role", "separator");
    } };
}function MenuItemController(e, n, t) {
  this.$element = n, this.$attrs = t, this.$scope = e;
}function MenuItemDirective(e, n, t) {
  return { controller: "MenuItemController", require: ["mdMenuItem", "?ngModel"], priority: n.BEFORE_NG_ARIA, compile: function compile(n, o) {
      function r(e, t, o) {
        o = o || n, o instanceof angular.element && (o = o[0]), o.hasAttribute(e) || o.setAttribute(e, t);
      }function i(t) {
        var o = e.prefixer(t);angular.forEach(o, function (e) {
          if (n[0].hasAttribute(e)) {
            var t = n[0].getAttribute(e);s[0].setAttribute(e, t), n[0].removeAttribute(e);
          }
        });
      }var a = o.type,
          l = "md-in-menu-bar";if ("checkbox" != a && "radio" != a || !n.hasClass(l)) r("role", "menuitem", n[0].querySelector("md-button, button, a"));else {
        var u = n[0].textContent,
            s = angular.element('<md-button type="button"></md-button>'),
            c = '<md-icon md-svg-src="' + t.mdChecked + '"></md-icon>';s.html(u), s.attr("tabindex", "0"), n.html(""), n.append(angular.element(c)), n.append(s), n.addClass("md-indent").removeClass(l), r("role", "checkbox" == a ? "menuitemcheckbox" : "menuitemradio", s), i("ng-disabled");
      }return function (e, n, t, o) {
        var r = o[0],
            i = o[1];r.init(i);
      };
    } };
}goog.provide("ngmaterial.components.menuBar"), goog.require("ngmaterial.components.icon"), goog.require("ngmaterial.components.menu"), goog.require("ngmaterial.core"), angular.module("material.components.menuBar", ["material.core", "material.components.icon", "material.components.menu"]), MenuBarController.$inject = ["$scope", "$rootScope", "$element", "$attrs", "$mdConstant", "$document", "$mdUtil", "$timeout"], angular.module("material.components.menuBar").controller("MenuBarController", MenuBarController);var BOUND_MENU_METHODS = ["handleKeyDown", "handleMenuHover", "scheduleOpenHoveredMenu", "cancelScheduledOpen"];MenuBarController.prototype.init = function () {
  var e = this.$element,
      n = this.$mdUtil,
      t = this.$scope,
      o = this,
      r = [];e.on("keydown", this.handleKeyDown), this.parentToolbar = n.getClosest(e, "MD-TOOLBAR"), r.push(this.$rootScope.$on("$mdMenuOpen", function (n, t) {
    o.getMenus().indexOf(t[0]) != -1 && (e[0].classList.add("md-open"), t[0].classList.add("md-open"), o.currentlyOpenMenu = t.controller("mdMenu"), o.currentlyOpenMenu.registerContainerProxy(o.handleKeyDown), o.enableOpenOnHover());
  })), r.push(this.$rootScope.$on("$mdMenuClose", function (t, r, i) {
    var a = o.getMenus();if (a.indexOf(r[0]) != -1 && (e[0].classList.remove("md-open"), r[0].classList.remove("md-open")), e[0].contains(r[0])) {
      for (var l = r[0]; l && a.indexOf(l) == -1;) {
        l = n.getClosest(l, "MD-MENU", !0);
      }l && (i.skipFocus || l.querySelector("button:not([disabled])").focus(), o.currentlyOpenMenu = void 0, o.disableOpenOnHover(), o.setKeyboardMode(!0));
    }
  })), t.$on("$destroy", function () {
    for (o.disableOpenOnHover(); r.length;) {
      r.shift()();
    }
  }), this.setKeyboardMode(!0);
}, MenuBarController.prototype.setKeyboardMode = function (e) {
  e ? this.$element[0].classList.add("md-keyboard-mode") : this.$element[0].classList.remove("md-keyboard-mode");
}, MenuBarController.prototype.enableOpenOnHover = function () {
  if (!this.openOnHoverEnabled) {
    var e = this;e.openOnHoverEnabled = !0, e.parentToolbar && (e.parentToolbar.classList.add("md-has-open-menu"), e.$mdUtil.nextTick(function () {
      angular.element(e.parentToolbar).on("click", e.handleParentClick);
    }, !1)), angular.element(e.getMenus()).on("mouseenter", e.handleMenuHover);
  }
}, MenuBarController.prototype.handleMenuHover = function (e) {
  this.setKeyboardMode(!1), this.openOnHoverEnabled && this.scheduleOpenHoveredMenu(e);
}, MenuBarController.prototype.disableOpenOnHover = function () {
  this.openOnHoverEnabled && (this.openOnHoverEnabled = !1, this.parentToolbar && (this.parentToolbar.classList.remove("md-has-open-menu"), angular.element(this.parentToolbar).off("click", this.handleParentClick)), angular.element(this.getMenus()).off("mouseenter", this.handleMenuHover));
}, MenuBarController.prototype.scheduleOpenHoveredMenu = function (e) {
  var n = angular.element(e.currentTarget),
      t = n.controller("mdMenu");this.setKeyboardMode(!1), this.scheduleOpenMenu(t);
}, MenuBarController.prototype.scheduleOpenMenu = function (e) {
  var n = this,
      t = this.$timeout;e != n.currentlyOpenMenu && (t.cancel(n.pendingMenuOpen), n.pendingMenuOpen = t(function () {
    n.pendingMenuOpen = void 0, n.currentlyOpenMenu && n.currentlyOpenMenu.close(!0, { closeAll: !0 }), e.open();
  }, 200, !1));
}, MenuBarController.prototype.handleKeyDown = function (e) {
  var n = this.$mdConstant.KEY_CODE,
      t = this.currentlyOpenMenu,
      o = t && t.isOpen;this.setKeyboardMode(!0);var r, i, a;switch (e.keyCode) {case n.DOWN_ARROW:
      t ? t.focusMenuContainer() : this.openFocusedMenu(), r = !0;break;case n.UP_ARROW:
      t && t.close(), r = !0;break;case n.LEFT_ARROW:
      i = this.focusMenu(-1), o && (a = angular.element(i).controller("mdMenu"), this.scheduleOpenMenu(a)), r = !0;break;case n.RIGHT_ARROW:
      i = this.focusMenu(1), o && (a = angular.element(i).controller("mdMenu"), this.scheduleOpenMenu(a)), r = !0;}r && (e && e.preventDefault && e.preventDefault(), e && e.stopImmediatePropagation && e.stopImmediatePropagation());
}, MenuBarController.prototype.focusMenu = function (e) {
  var n = this.getMenus(),
      t = this.getFocusedMenuIndex();t == -1 && (t = this.getOpenMenuIndex());var o = !1;if (t == -1 ? (t = 0, o = !0) : (e < 0 && t > 0 || e > 0 && t < n.length - e) && (t += e, o = !0), o) return n[t].querySelector("button").focus(), n[t];
}, MenuBarController.prototype.openFocusedMenu = function () {
  var e = this.getFocusedMenu();e && angular.element(e).controller("mdMenu").open();
}, MenuBarController.prototype.getMenus = function () {
  var e = this.$element;return this.$mdUtil.nodesToArray(e[0].children).filter(function (e) {
    return "MD-MENU" == e.nodeName;
  });
}, MenuBarController.prototype.getFocusedMenu = function () {
  return this.getMenus()[this.getFocusedMenuIndex()];
}, MenuBarController.prototype.getFocusedMenuIndex = function () {
  var e = this.$mdUtil,
      n = e.getClosest(this.$document[0].activeElement, "MD-MENU");if (!n) return -1;var t = this.getMenus().indexOf(n);return t;
}, MenuBarController.prototype.getOpenMenuIndex = function () {
  for (var e = this.getMenus(), n = 0; n < e.length; ++n) {
    if (e[n].classList.contains("md-open")) return n;
  }return -1;
}, MenuBarController.prototype.handleParentClick = function (e) {
  var n = this.querySelector("md-menu.md-open");n && !n.contains(e.target) && angular.element(n).controller("mdMenu").close(!0, { closeAll: !0 });
}, MenuBarDirective.$inject = ["$mdUtil", "$mdTheming"], angular.module("material.components.menuBar").directive("mdMenuBar", MenuBarDirective), angular.module("material.components.menuBar").directive("mdMenuDivider", MenuDividerDirective), MenuItemController.$inject = ["$scope", "$element", "$attrs"], angular.module("material.components.menuBar").controller("MenuItemController", MenuItemController), MenuItemController.prototype.init = function (e) {
  var n = this.$element,
      t = this.$attrs;this.ngModel = e, "checkbox" != t.type && "radio" != t.type || (this.mode = t.type, this.iconEl = n[0].children[0], this.buttonEl = n[0].children[1], e && this.initClickListeners());
}, MenuItemController.prototype.clearNgAria = function () {
  var e = this.$element[0],
      n = ["role", "tabindex", "aria-invalid", "aria-checked"];angular.forEach(n, function (n) {
    e.removeAttribute(n);
  });
}, MenuItemController.prototype.initClickListeners = function () {
  function e() {
    if ("radio" == a) {
      var e = i.ngValue ? r.$eval(i.ngValue) : i.value;return o.$modelValue == e;
    }return o.$modelValue;
  }function n(e) {
    e ? u.off("click", s) : u.on("click", s);
  }var t = this,
      o = this.ngModel,
      r = this.$scope,
      i = this.$attrs,
      a = (this.$element, this.mode);this.handleClick = angular.bind(this, this.handleClick);var l = this.iconEl,
      u = angular.element(this.buttonEl),
      s = this.handleClick;i.$observe("disabled", n), n(i.disabled), o.$render = function () {
    t.clearNgAria(), e() ? (l.style.display = "", u.attr("aria-checked", "true")) : (l.style.display = "none", u.attr("aria-checked", "false"));
  }, r.$$postDigest(o.$render);
}, MenuItemController.prototype.handleClick = function (e) {
  var n,
      t = this.mode,
      o = this.ngModel,
      r = this.$attrs;"checkbox" == t ? n = !o.$modelValue : "radio" == t && (n = r.ngValue ? this.$scope.$eval(r.ngValue) : r.value), o.$setViewValue(n), o.$render();
}, MenuItemDirective.$inject = ["$mdUtil", "$mdConstant", "$$mdSvgRegistry"], angular.module("material.components.menuBar").directive("mdMenuItem", MenuItemDirective), ngmaterial.components.menuBar = angular.module("material.components.menuBar");

//# sourceMappingURL=menuBar.min-compiled.js.map