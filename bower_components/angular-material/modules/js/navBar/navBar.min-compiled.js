"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (t, e, n) {
  "use strict";
  function r(t, n) {
    return { restrict: "E", transclude: !0, controller: a, controllerAs: "ctrl", bindToController: !0, scope: { mdSelectedNavItem: "=?", mdNoInkBar: "=?", navBarAriaLabel: "@?" }, template: '<div class="md-nav-bar"><nav role="navigation"><ul class="_md-nav-bar-list" ng-transclude role="listbox"tabindex="0"ng-focus="ctrl.onFocus()"ng-keydown="ctrl.onKeydown($event)"aria-label="{{ctrl.navBarAriaLabel}}"></ul></nav><md-nav-ink-bar ng-hide="ctrl.mdNoInkBar"></md-nav-ink-bar></div>', link: function link(r, a, o, i) {
        n(a), i.navBarAriaLabel || t.expectAsync(a, "aria-label", e.noop);
      } };
  }function a(t, e, n, r) {
    this._$timeout = n, this._$scope = e, this._$mdConstant = r, this.mdSelectedNavItem, this.navBarAriaLabel, this._navBarEl = t[0], this._inkbar;var a = this,
        o = this._$scope.$watch(function () {
      return a._navBarEl.querySelectorAll("._md-nav-button").length;
    }, function (t) {
      t > 0 && (a._initTabs(), o());
    });
  }function o(t) {
    return { restrict: "E", require: ["mdNavItem", "^mdNavBar"], controller: i, bindToController: !0, controllerAs: "ctrl", replace: !0, transclude: !0, template: function template(t, e) {
        var n,
            r,
            a,
            o = e.mdNavClick,
            i = e.mdNavHref,
            s = e.mdNavSref,
            c = e.srefOpts;if ((o ? 1 : 0) + (i ? 1 : 0) + (s ? 1 : 0) > 1) throw Error("Must not specify more than one of the md-nav-click, md-nav-href, or md-nav-sref attributes per nav-item directive.");return o ? n = 'ng-click="ctrl.mdNavClick()"' : i ? n = 'ng-href="{{ctrl.mdNavHref}}"' : s && (n = 'ui-sref="{{ctrl.mdNavSref}}"'), r = c ? 'ui-sref-opts="{{ctrl.srefOpts}}" ' : "", n && (a = '<md-button class="_md-nav-button md-accent" ng-class="ctrl.getNgClassMap()" ng-blur="ctrl.setFocused(false)" tabindex="-1" ' + r + n + '><span ng-transclude class="_md-nav-button-text"></span></md-button>'), '<li class="md-nav-item" role="option" aria-selected="{{ctrl.isSelected()}}">' + (a || "") + "</li>";
      }, scope: { mdNavClick: "&?", mdNavHref: "@?", mdNavSref: "@?", srefOpts: "=?", name: "@" }, link: function link(n, r, a, o) {
        t(function () {
          var t = o[0],
              a = o[1],
              i = e.element(r[0].querySelector("._md-nav-button"));t.name || (t.name = e.element(r[0].querySelector("._md-nav-button-text")).text().trim()), i.on("click", function () {
            a.mdSelectedNavItem = t.name, n.$apply();
          });
        });
      } };
  }function i(t) {
    this._$element = t, this.mdNavClick, this.mdNavHref, this.mdNavSref, this.srefOpts, this.name, this._selected = !1, this._focused = !1;
  }a.$inject = ["$element", "$scope", "$timeout", "$mdConstant"], o.$inject = ["$$rAF"], i.$inject = ["$element"], r.$inject = ["$mdAria", "$mdTheming"], e.module("material.components.navBar", ["material.core"]).controller("MdNavBarController", a).directive("mdNavBar", r).controller("MdNavItemController", i).directive("mdNavItem", o), a.prototype._initTabs = function () {
    this._inkbar = e.element(this._navBarEl.querySelector("md-nav-ink-bar"));var t = this;this._$timeout(function () {
      t._updateTabs(t.mdSelectedNavItem, n);
    }), this._$scope.$watch("ctrl.mdSelectedNavItem", function (e, n) {
      t._$timeout(function () {
        t._updateTabs(e, n);
      });
    });
  }, a.prototype._updateTabs = function (t, e) {
    var n = this,
        r = this._getTabs(),
        a = -1,
        o = -1,
        i = this._getTabByName(t),
        s = this._getTabByName(e);s && (s.setSelected(!1), a = r.indexOf(s)), i && (i.setSelected(!0), o = r.indexOf(i)), this._$timeout(function () {
      n._updateInkBarStyles(i, o, a);
    });
  }, a.prototype._updateInkBarStyles = function (t, e, n) {
    if (this._inkbar.toggleClass("_md-left", e < n).toggleClass("_md-right", e > n), this._inkbar.css({ display: e < 0 ? "none" : "" }), t) {
      var r = t.getButtonEl(),
          a = r.offsetLeft;this._inkbar.css({ left: a + "px", width: r.offsetWidth + "px" });
    }
  }, a.prototype._getTabs = function () {
    var t = Array.prototype.slice.call(this._navBarEl.querySelectorAll(".md-nav-item"));return t.map(function (t) {
      return e.element(t).controller("mdNavItem");
    });
  }, a.prototype._getTabByName = function (t) {
    return this._findTab(function (e) {
      return e.getName() == t;
    });
  }, a.prototype._getSelectedTab = function () {
    return this._findTab(function (t) {
      return t.isSelected();
    });
  }, a.prototype.getFocusedTab = function () {
    return this._findTab(function (t) {
      return t.hasFocus();
    });
  }, a.prototype._findTab = function (t) {
    for (var e = this._getTabs(), n = 0; n < e.length; n++) {
      if (t(e[n])) return e[n];
    }return null;
  }, a.prototype.onFocus = function () {
    var t = this._getSelectedTab();t && t.setFocused(!0);
  }, a.prototype._moveFocus = function (t, e) {
    t.setFocused(!1), e.setFocused(!0);
  }, a.prototype.onKeydown = function (t) {
    var e = this._$mdConstant.KEY_CODE,
        n = this._getTabs(),
        r = this.getFocusedTab();if (r) {
      var a = n.indexOf(r);switch (t.keyCode) {case e.UP_ARROW:case e.LEFT_ARROW:
          a > 0 && this._moveFocus(r, n[a - 1]);break;case e.DOWN_ARROW:case e.RIGHT_ARROW:
          a < n.length - 1 && this._moveFocus(r, n[a + 1]);break;case e.SPACE:case e.ENTER:
          this._$timeout(function () {
            r.getButtonEl().click();
          });}
    }
  }, i.prototype.getNgClassMap = function () {
    return { "md-active": this._selected, "md-primary": this._selected, "md-unselected": !this._selected, "md-focused": this._focused };
  }, i.prototype.getName = function () {
    return this.name;
  }, i.prototype.getButtonEl = function () {
    return this._$element[0].querySelector("._md-nav-button");
  }, i.prototype.setSelected = function (t) {
    this._selected = t;
  }, i.prototype.isSelected = function () {
    return this._selected;
  }, i.prototype.setFocused = function (t) {
    this._focused = t, t && this.getButtonEl().focus();
  }, i.prototype.hasFocus = function () {
    return this._focused;
  };
}(window, window.angular);

//# sourceMappingURL=navBar.min-compiled.js.map