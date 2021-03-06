"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function MdNavBar(t, e) {
  return { restrict: "E", transclude: !0, controller: MdNavBarController, controllerAs: "ctrl", bindToController: !0, scope: { mdSelectedNavItem: "=?", mdNoInkBar: "=?", navBarAriaLabel: "@?" }, template: '<div class="md-nav-bar"><nav role="navigation"><ul class="_md-nav-bar-list" ng-transclude role="listbox"tabindex="0"ng-focus="ctrl.onFocus()"ng-keydown="ctrl.onKeydown($event)"aria-label="{{ctrl.navBarAriaLabel}}"></ul></nav><md-nav-ink-bar ng-hide="ctrl.mdNoInkBar"></md-nav-ink-bar></div>', link: function link(r, n, a, o) {
      e(n), o.navBarAriaLabel || t.expectAsync(n, "aria-label", angular.noop);
    } };
}function MdNavBarController(t, e, r, n) {
  this._$timeout = r, this._$scope = e, this._$mdConstant = n, this.mdSelectedNavItem, this.navBarAriaLabel, this._navBarEl = t[0], this._inkbar;var a = this,
      o = this._$scope.$watch(function () {
    return a._navBarEl.querySelectorAll("._md-nav-button").length;
  }, function (t) {
    t > 0 && (a._initTabs(), o());
  });
}function MdNavItem(t) {
  return { restrict: "E", require: ["mdNavItem", "^mdNavBar"], controller: MdNavItemController, bindToController: !0, controllerAs: "ctrl", replace: !0, transclude: !0, template: function template(t, e) {
      var r,
          n,
          a,
          o = e.mdNavClick,
          l = e.mdNavHref,
          i = e.mdNavSref,
          s = e.srefOpts;if ((o ? 1 : 0) + (l ? 1 : 0) + (i ? 1 : 0) > 1) throw Error("Must not specify more than one of the md-nav-click, md-nav-href, or md-nav-sref attributes per nav-item directive.");return o ? r = 'ng-click="ctrl.mdNavClick()"' : l ? r = 'ng-href="{{ctrl.mdNavHref}}"' : i && (r = 'ui-sref="{{ctrl.mdNavSref}}"'), n = s ? 'ui-sref-opts="{{ctrl.srefOpts}}" ' : "", r && (a = '<md-button class="_md-nav-button md-accent" ng-class="ctrl.getNgClassMap()" ng-blur="ctrl.setFocused(false)" tabindex="-1" ' + n + r + '><span ng-transclude class="_md-nav-button-text"></span></md-button>'), '<li class="md-nav-item" role="option" aria-selected="{{ctrl.isSelected()}}">' + (a || "") + "</li>";
    }, scope: { mdNavClick: "&?", mdNavHref: "@?", mdNavSref: "@?", srefOpts: "=?", name: "@" }, link: function link(e, r, n, a) {
      t(function () {
        var t = a[0],
            n = a[1],
            o = angular.element(r[0].querySelector("._md-nav-button"));t.name || (t.name = angular.element(r[0].querySelector("._md-nav-button-text")).text().trim()), o.on("click", function () {
          n.mdSelectedNavItem = t.name, e.$apply();
        });
      });
    } };
}function MdNavItemController(t) {
  this._$element = t, this.mdNavClick, this.mdNavHref, this.mdNavSref, this.srefOpts, this.name, this._selected = !1, this._focused = !1;
}goog.provide("ngmaterial.components.navBar"), goog.require("ngmaterial.core"), MdNavBarController.$inject = ["$element", "$scope", "$timeout", "$mdConstant"], MdNavItem.$inject = ["$$rAF"], MdNavItemController.$inject = ["$element"], MdNavBar.$inject = ["$mdAria", "$mdTheming"], angular.module("material.components.navBar", ["material.core"]).controller("MdNavBarController", MdNavBarController).directive("mdNavBar", MdNavBar).controller("MdNavItemController", MdNavItemController).directive("mdNavItem", MdNavItem), MdNavBarController.prototype._initTabs = function () {
  this._inkbar = angular.element(this._navBarEl.querySelector("md-nav-ink-bar"));var t = this;this._$timeout(function () {
    t._updateTabs(t.mdSelectedNavItem, void 0);
  }), this._$scope.$watch("ctrl.mdSelectedNavItem", function (e, r) {
    t._$timeout(function () {
      t._updateTabs(e, r);
    });
  });
}, MdNavBarController.prototype._updateTabs = function (t, e) {
  var r = this,
      n = this._getTabs(),
      a = -1,
      o = -1,
      l = this._getTabByName(t),
      i = this._getTabByName(e);i && (i.setSelected(!1), a = n.indexOf(i)), l && (l.setSelected(!0), o = n.indexOf(l)), this._$timeout(function () {
    r._updateInkBarStyles(l, o, a);
  });
}, MdNavBarController.prototype._updateInkBarStyles = function (t, e, r) {
  if (this._inkbar.toggleClass("_md-left", e < r).toggleClass("_md-right", e > r), this._inkbar.css({ display: e < 0 ? "none" : "" }), t) {
    var n = t.getButtonEl(),
        a = n.offsetLeft;this._inkbar.css({ left: a + "px", width: n.offsetWidth + "px" });
  }
}, MdNavBarController.prototype._getTabs = function () {
  var t = Array.prototype.slice.call(this._navBarEl.querySelectorAll(".md-nav-item"));return t.map(function (t) {
    return angular.element(t).controller("mdNavItem");
  });
}, MdNavBarController.prototype._getTabByName = function (t) {
  return this._findTab(function (e) {
    return e.getName() == t;
  });
}, MdNavBarController.prototype._getSelectedTab = function () {
  return this._findTab(function (t) {
    return t.isSelected();
  });
}, MdNavBarController.prototype.getFocusedTab = function () {
  return this._findTab(function (t) {
    return t.hasFocus();
  });
}, MdNavBarController.prototype._findTab = function (t) {
  for (var e = this._getTabs(), r = 0; r < e.length; r++) {
    if (t(e[r])) return e[r];
  }return null;
}, MdNavBarController.prototype.onFocus = function () {
  var t = this._getSelectedTab();t && t.setFocused(!0);
}, MdNavBarController.prototype._moveFocus = function (t, e) {
  t.setFocused(!1), e.setFocused(!0);
}, MdNavBarController.prototype.onKeydown = function (t) {
  var e = this._$mdConstant.KEY_CODE,
      r = this._getTabs(),
      n = this.getFocusedTab();if (n) {
    var a = r.indexOf(n);switch (t.keyCode) {case e.UP_ARROW:case e.LEFT_ARROW:
        a > 0 && this._moveFocus(n, r[a - 1]);break;case e.DOWN_ARROW:case e.RIGHT_ARROW:
        a < r.length - 1 && this._moveFocus(n, r[a + 1]);break;case e.SPACE:case e.ENTER:
        this._$timeout(function () {
          n.getButtonEl().click();
        });}
  }
}, MdNavItemController.prototype.getNgClassMap = function () {
  return { "md-active": this._selected, "md-primary": this._selected, "md-unselected": !this._selected, "md-focused": this._focused };
}, MdNavItemController.prototype.getName = function () {
  return this.name;
}, MdNavItemController.prototype.getButtonEl = function () {
  return this._$element[0].querySelector("._md-nav-button");
}, MdNavItemController.prototype.setSelected = function (t) {
  this._selected = t;
}, MdNavItemController.prototype.isSelected = function () {
  return this._selected;
}, MdNavItemController.prototype.setFocused = function (t) {
  this._focused = t, t && this.getButtonEl().focus();
}, MdNavItemController.prototype.hasFocus = function () {
  return this._focused;
}, ngmaterial.components.navBar = angular.module("material.components.navBar");

//# sourceMappingURL=navBar.min-compiled.js.map