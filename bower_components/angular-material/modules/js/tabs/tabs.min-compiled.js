"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (e, t, n) {
  "use strict";
  function a() {
    function e(e, a, s, i) {
      if (i) {
        var d = i.getTabElementIndex(a),
            o = n(a, "md-tab-body").remove(),
            r = n(a, "md-tab-label").remove(),
            c = i.insertTab({ scope: e, parent: e.$parent, index: d, element: a, template: o.html(), label: r.html() }, d);e.select = e.select || t.noop, e.deselect = e.deselect || t.noop, e.$watch("active", function (e) {
          e && i.select(c.getIndex(), !0);
        }), e.$watch("disabled", function () {
          i.refreshIndex();
        }), e.$watch(function () {
          return i.getTabElementIndex(a);
        }, function (e) {
          c.index = e, i.updateTabOrder();
        }), e.$on("$destroy", function () {
          i.removeTab(c);
        });
      }
    }function n(e, n) {
      for (var a = e[0].children, s = 0, i = a.length; s < i; s++) {
        var d = a[s];if (d.tagName === n.toUpperCase()) return t.element(d);
      }return t.element();
    }return { require: "^?mdTabs", terminal: !0, compile: function compile(a, s) {
        var i = n(a, "md-tab-label"),
            d = n(a, "md-tab-body");if (0 === i.length && (i = t.element("<md-tab-label></md-tab-label>"), s.label ? i.text(s.label) : i.append(a.contents()), 0 === d.length)) {
          var o = a.contents().detach();d = t.element("<md-tab-body></md-tab-body>"), d.append(o);
        }return a.append(i), d.html() && a.append(d), e;
      }, scope: { active: "=?mdActive", disabled: "=?ngDisabled", select: "&?mdOnSelect", deselect: "&?mdOnDeselect" } };
  }function s() {
    return { require: "^?mdTabs", link: function link(e, t, n, a) {
        a && a.attachRipple(e, t);
      } };
  }function i() {
    return { terminal: !0 };
  }function d(e) {
    return { restrict: "A", compile: function compile(t, n) {
        var a = e(n.mdTabScroll, null, !0);return function (e, t) {
          t.on("mousewheel", function (t) {
            e.$apply(function () {
              a(e, { $event: t });
            });
          });
        };
      } };
  }function o(e, a, s, i, d, o, r, c, l, f, b) {
    function m() {
      x("stretchTabs", $), J("focusIndex", S, ue.selectedIndex || 0), J("offsetLeft", k, 0), J("hasContent", y, !1), J("maxTabWidth", I, ee()), J("shouldPaginate", w, !1), T("noInkBar", M), T("dynamicHeight", R), T("noPagination"), T("swipeContent"), T("noDisconnect"), T("autoselect"), T("noSelectClick"), T("centerTabs", C, !1), T("enableDisconnect"), ue.scope = e, ue.parent = e.$parent, ue.tabs = [], ue.lastSelectedIndex = null, ue.hasFocus = !1, ue.styleTabItemFocus = !1, ue.shouldCenterTabs = K(), ue.tabContentPrefix = "tab-content-", u();
    }function u() {
      ue.selectedIndex = ue.selectedIndex || 0, p(), g(), h(), f(a), o.nextTick(function () {
        he = _(), re(), se(), ce(), ue.tabs[ue.selectedIndex] && ue.tabs[ue.selectedIndex].scope.select(), Te = !0, Q();
      });
    }function p() {
      var e = c.$mdTabsTemplate,
          n = t.element(a[0].querySelector("md-tab-data"));n.html(e), l(n.contents())(ue.parent), delete c.$mdTabsTemplate;
    }function h() {
      t.element(s).on("resize", B), e.$on("$destroy", v);
    }function g() {
      e.$watch("$mdTabsCtrl.selectedIndex", P);
    }function x(e, t) {
      var n = c.$normalize("md-" + e);t && J(e, t), c.$observe(n, function (t) {
        ue[e] = t;
      });
    }function T(e, t) {
      function n(t) {
        ue[e] = "false" !== t;
      }var a = c.$normalize("md-" + e);t && J(e, t), c.hasOwnProperty(a) && n(c[a]), c.$observe(a, n);
    }function v() {
      xe = !0, t.element(s).off("resize", B);
    }function $(e) {
      var n = _();t.element(n.wrapper).toggleClass("md-stretch-tabs", U()), ce();
    }function C(e) {
      ue.shouldCenterTabs = K();
    }function I(e, n) {
      if (e !== n) {
        var a = _();t.forEach(a.tabs, function (t) {
          t.style.maxWidth = e + "px";
        }), o.nextTick(ue.updateInkBarStyles);
      }
    }function w(e, t) {
      e !== t && (ue.maxTabWidth = ee(), ue.shouldCenterTabs = K(), o.nextTick(function () {
        ue.maxTabWidth = ee(), se(ue.selectedIndex);
      }));
    }function y(e) {
      a[e ? "removeClass" : "addClass"]("md-no-tab-content");
    }function k(n) {
      var a = _(),
          s = ue.shouldCenterTabs ? "" : "-" + n + "px";t.element(a.paging).css(i.CSS.TRANSFORM, "translate3d(" + s + ", 0, 0)"), e.$broadcast("$mdTabsPaginationChanged");
    }function S(e, t) {
      e !== t && _().tabs[e] && (se(), ae());
    }function P(t, n) {
      t !== n && (ue.selectedIndex = G(t), ue.lastSelectedIndex = n, ue.updateInkBarStyles(), re(), se(t), e.$broadcast("$mdTabsChanged"), ue.tabs[n] && ue.tabs[n].scope.deselect(), ue.tabs[t] && ue.tabs[t].scope.select());
    }function L(e) {
      var t = a[0].getElementsByTagName("md-tab");return Array.prototype.indexOf.call(t, e[0]);
    }function W() {
      W.watcher || (W.watcher = e.$watch(function () {
        o.nextTick(function () {
          W.watcher && a.prop("offsetParent") && (W.watcher(), W.watcher = null, B());
        }, !1);
      }));
    }function D(e) {
      switch (e.keyCode) {case i.KEY_CODE.LEFT_ARROW:
          e.preventDefault(), ne(-1, !0);break;case i.KEY_CODE.RIGHT_ARROW:
          e.preventDefault(), ne(1, !0);break;case i.KEY_CODE.SPACE:case i.KEY_CODE.ENTER:
          e.preventDefault(), pe || A(ue.focusIndex);}
    }function A(e, t) {
      pe || (ue.focusIndex = ue.selectedIndex = e), t && ue.noSelectClick || o.nextTick(function () {
        ue.tabs[e].element.triggerHandler("click");
      }, !1);
    }function O(e) {
      ue.shouldPaginate && (e.preventDefault(), ue.offsetLeft = fe(ue.offsetLeft - e.wheelDelta));
    }function E() {
      var e,
          t,
          n = _(),
          a = n.canvas.clientWidth,
          s = a + ue.offsetLeft;for (e = 0; e < n.tabs.length && (t = n.tabs[e], !(t.offsetLeft + t.offsetWidth > s)); e++) {}a > t.offsetWidth ? ue.offsetLeft = fe(t.offsetLeft) : ue.offsetLeft = fe(t.offsetLeft + (t.offsetWidth - a + 1));
    }function F() {
      var e,
          t,
          n = _();for (e = 0; e < n.tabs.length && (t = n.tabs[e], !(t.offsetLeft + t.offsetWidth >= ue.offsetLeft)); e++) {}n.canvas.clientWidth > t.offsetWidth ? ue.offsetLeft = fe(t.offsetLeft + t.offsetWidth - n.canvas.clientWidth) : ue.offsetLeft = fe(t.offsetLeft);
    }function B() {
      ue.lastSelectedIndex = ue.selectedIndex, ue.offsetLeft = fe(ue.offsetLeft), o.nextTick(function () {
        ue.updateInkBarStyles(), Q();
      });
    }function M(e) {
      t.element(_().inkBar).toggleClass("ng-hide", e);
    }function R(e) {
      a.toggleClass("md-dynamic-height", e);
    }function q(e) {
      if (!xe) {
        var t = ue.selectedIndex,
            n = ue.tabs.splice(e.getIndex(), 1)[0];oe(), ue.selectedIndex === t && (n.scope.deselect(), ue.tabs[ue.selectedIndex] && ue.tabs[ue.selectedIndex].scope.select()), o.nextTick(function () {
          Q(), ue.offsetLeft = fe(ue.offsetLeft);
        });
      }
    }function H(e, n) {
      var a = Te,
          s = { getIndex: function getIndex() {
          return ue.tabs.indexOf(i);
        }, isActive: function isActive() {
          return this.getIndex() === ue.selectedIndex;
        }, isLeft: function isLeft() {
          return this.getIndex() < ue.selectedIndex;
        }, isRight: function isRight() {
          return this.getIndex() > ue.selectedIndex;
        }, shouldRender: function shouldRender() {
          return !ue.noDisconnect || this.isActive();
        }, hasFocus: function hasFocus() {
          return ue.styleTabItemFocus && ue.hasFocus && this.getIndex() === ue.focusIndex;
        }, id: o.nextUid(), hasContent: !(!e.template || !e.template.trim()) },
          i = t.extend(s, e);return t.isDefined(n) ? ue.tabs.splice(n, 0, i) : ue.tabs.push(i), ie(), de(), o.nextTick(function () {
        Q(), me(i), a && ue.autoselect && o.nextTick(function () {
          o.nextTick(function () {
            A(ue.tabs.indexOf(i));
          });
        });
      }), i;
    }function _() {
      var e = {},
          t = a[0];return e.wrapper = t.querySelector("md-tabs-wrapper"), e.canvas = e.wrapper.querySelector("md-tabs-canvas"), e.paging = e.canvas.querySelector("md-pagination-wrapper"), e.inkBar = e.paging.querySelector("md-ink-bar"), e.contents = t.querySelectorAll("md-tabs-content-wrapper > md-tab-content"), e.tabs = e.paging.querySelectorAll("md-tab-item"), e.dummies = e.canvas.querySelectorAll("md-dummy-tab"), e;
    }function j() {
      return ue.offsetLeft > 0;
    }function N() {
      var e = _(),
          t = e.tabs[e.tabs.length - 1];return t && t.offsetLeft + t.offsetWidth > e.canvas.clientWidth + ue.offsetLeft;
    }function z() {
      var e = ue.tabs[ue.focusIndex];return e && e.id ? "tab-item-" + e.id : null;
    }function U() {
      switch (ue.stretchTabs) {case "always":
          return !0;case "never":
          return !1;default:
          return !ue.shouldPaginate && s.matchMedia("(max-width: 600px)").matches;}
    }function K() {
      return ue.centerTabs && !ue.shouldPaginate;
    }function Y() {
      if (ue.noPagination || !Te) return !1;var e = a.prop("clientWidth");return t.forEach(_().dummies, function (t) {
        e -= t.offsetWidth;
      }), e < 0;
    }function G(e) {
      if (e === -1) return -1;var t,
          n,
          a = Math.max(ue.tabs.length - e, e);for (t = 0; t <= a; t++) {
        if (n = ue.tabs[e + t], n && n.scope.disabled !== !0) return n.getIndex();if (n = ue.tabs[e - t], n && n.scope.disabled !== !0) return n.getIndex();
      }return e;
    }function J(e, t, n) {
      Object.defineProperty(ue, e, { get: function get() {
          return n;
        }, set: function set(e) {
          var a = n;n = e, t && t(e, a);
        } });
    }function Q() {
      V(), ue.maxTabWidth = ee(), ue.shouldPaginate = Y();
    }function V() {
      var e = _();U() ? t.element(e.paging).css("width", "") : t.element(e.paging).css("width", X() + "px");
    }function X() {
      return Z(_().dummies);
    }function Z(e) {
      var n = 0;return t.forEach(e, function (e) {
        n += Math.max(e.offsetWidth, e.getBoundingClientRect().width);
      }), Math.ceil(n);
    }function ee() {
      return a.prop("clientWidth");
    }function te() {
      var e = ue.tabs[ue.selectedIndex],
          t = ue.tabs[ue.focusIndex];ue.tabs = ue.tabs.sort(function (e, t) {
        return e.index - t.index;
      }), ue.selectedIndex = ue.tabs.indexOf(e), ue.focusIndex = ue.tabs.indexOf(t);
    }function ne(e, t) {
      var n,
          a = t ? "focusIndex" : "selectedIndex",
          s = ue[a];for (n = s + e; ue.tabs[n] && ue.tabs[n].scope.disabled; n += e) {}ue.tabs[n] && (ue[a] = n);
    }function ae() {
      ue.styleTabItemFocus = "keyboard" === b.getLastInteractionType(), _().dummies[ue.focusIndex].focus();
    }function se(e) {
      var n = _();if (t.isNumber(e) || (e = ue.focusIndex), n.tabs[e] && !ue.shouldCenterTabs) {
        var a = n.tabs[e],
            s = a.offsetLeft,
            i = a.offsetWidth + s;ue.offsetLeft = Math.max(ue.offsetLeft, fe(i - n.canvas.clientWidth + 64)), ue.offsetLeft = Math.min(ue.offsetLeft, fe(s));
      }
    }function ie() {
      ge.forEach(function (e) {
        o.nextTick(e);
      }), ge = [];
    }function de() {
      for (var e = !1, t = 0; t < ue.tabs.length; t++) {
        if (ue.tabs[t].hasContent) {
          e = !0;break;
        }
      }ue.hasContent = e;
    }function oe() {
      ue.selectedIndex = G(ue.selectedIndex), ue.focusIndex = G(ue.focusIndex);
    }function re() {
      if (!ue.dynamicHeight) return a.css("height", "");if (!ue.tabs.length) return ge.push(re);var e = _(),
          t = e.contents[ue.selectedIndex],
          s = t ? t.offsetHeight : 0,
          i = e.wrapper.offsetHeight,
          d = s + i,
          c = a.prop("clientHeight");if (c !== d) {
        "bottom" === a.attr("md-align-tabs") && (c -= i, d -= i, a.attr("md-border-bottom") !== n && ++c), pe = !0;var l = { height: c + "px" },
            f = { height: d + "px" };a.css(l), r(a, { from: l, to: f, easing: "cubic-bezier(0.35, 0, 0.25, 1)", duration: .5 }).start().done(function () {
          a.css({ transition: "none", height: "" }), o.nextTick(function () {
            a.css("transition", "");
          }), pe = !1;
        });
      }
    }function ce() {
      var e = _();if (!e.tabs[ue.selectedIndex]) return void t.element(e.inkBar).css({ left: "auto", right: "auto" });if (!ue.tabs.length) return ge.push(ue.updateInkBarStyles);if (!a.prop("offsetParent")) return W();var n = ue.selectedIndex,
          s = e.paging.offsetWidth,
          i = e.tabs[n],
          d = i.offsetLeft,
          r = s - d - i.offsetWidth;if (ue.shouldCenterTabs) {
        var c = Z(e.tabs);s > c && o.nextTick(ce, !1);
      }le(), t.element(e.inkBar).css({ left: d + "px", right: r + "px" });
    }function le() {
      var e = _(),
          n = ue.selectedIndex,
          a = ue.lastSelectedIndex,
          s = t.element(e.inkBar);t.isNumber(a) && s.toggleClass("md-left", n < a).toggleClass("md-right", n > a);
    }function fe(e) {
      var t = _();if (!t.tabs.length || !ue.shouldPaginate) return 0;var n = t.tabs[t.tabs.length - 1],
          a = n.offsetLeft + n.offsetWidth;return e = Math.max(0, e), e = Math.min(a - t.canvas.clientWidth, e);
    }function be(e, n) {
      var a = _(),
          s = { colorElement: t.element(a.inkBar) };d.attach(e, n, s);
    }function me(e) {
      if (e.hasContent) {
        var n = a[0].querySelectorAll('[md-tab-id="' + e.id + '"]');t.element(n).attr("aria-controls", ue.tabContentPrefix + e.id);
      }
    }var ue = this,
        pe = !1,
        he = _(),
        ge = [],
        xe = !1,
        Te = !1;ue.$onInit = m, ue.updatePagination = o.debounce(Q, 100), ue.redirectFocus = ae, ue.attachRipple = be, ue.insertTab = H, ue.removeTab = q, ue.select = A, ue.scroll = O, ue.nextPage = E, ue.previousPage = F, ue.keydown = D, ue.canPageForward = N, ue.canPageBack = j, ue.refreshIndex = oe, ue.incrementIndex = ne, ue.getTabElementIndex = L, ue.updateInkBarStyles = o.debounce(ce, 100), ue.updateTabOrder = o.debounce(te, 100), ue.getFocusedTabId = z, 1 === t.version.major && t.version.minor <= 4 && this.$onInit();
  }function r(e) {
    return { scope: { selectedIndex: "=?mdSelected" }, template: function template(t, n) {
        return n.$mdTabsTemplate = t.html(), '<md-tabs-wrapper> <md-tab-data></md-tab-data> <md-prev-button tabindex="-1" role="button" aria-label="Previous Page" aria-disabled="{{!$mdTabsCtrl.canPageBack()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageBack() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.previousPage()"> <md-icon md-svg-src="' + e.mdTabsArrow + '"></md-icon> </md-prev-button> <md-next-button tabindex="-1" role="button" aria-label="Next Page" aria-disabled="{{!$mdTabsCtrl.canPageForward()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageForward() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.nextPage()"> <md-icon md-svg-src="' + e.mdTabsArrow + '"></md-icon> </md-next-button> <md-tabs-canvas tabindex="{{ $mdTabsCtrl.hasFocus ? -1 : 0 }}" aria-activedescendant="{{$mdTabsCtrl.getFocusedTabId()}}" ng-focus="$mdTabsCtrl.redirectFocus()" ng-class="{ \'md-paginated\': $mdTabsCtrl.shouldPaginate, \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" ng-keydown="$mdTabsCtrl.keydown($event)" role="tablist"> <md-pagination-wrapper ng-class="{ \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" md-tab-scroll="$mdTabsCtrl.scroll($event)"> <md-tab-item tabindex="-1" class="md-tab" ng-repeat="tab in $mdTabsCtrl.tabs" role="tab" md-tab-id="{{::tab.id}}"aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-click="$mdTabsCtrl.select(tab.getIndex())" ng-class="{ \'md-active\':    tab.isActive(), \'md-focused\':   tab.hasFocus(), \'md-disabled\':  tab.scope.disabled }" ng-disabled="tab.scope.disabled" md-swipe-left="$mdTabsCtrl.nextPage()" md-swipe-right="$mdTabsCtrl.previousPage()" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-tab-item> <md-ink-bar></md-ink-bar> </md-pagination-wrapper> <md-tabs-dummy-wrapper class="md-visually-hidden md-dummy-wrapper"> <md-dummy-tab class="md-tab" tabindex="-1" id="tab-item-{{::tab.id}}" md-tab-id="{{::tab.id}}"aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-focus="$mdTabsCtrl.hasFocus = true" ng-blur="$mdTabsCtrl.hasFocus = false" ng-repeat="tab in $mdTabsCtrl.tabs" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-dummy-tab> </md-tabs-dummy-wrapper> </md-tabs-canvas> </md-tabs-wrapper> <md-tabs-content-wrapper ng-show="$mdTabsCtrl.hasContent && $mdTabsCtrl.selectedIndex >= 0" class="_md"> <md-tab-content id="{{:: $mdTabsCtrl.tabContentPrefix + tab.id}}" class="_md" role="tabpanel" aria-labelledby="tab-item-{{::tab.id}}" md-swipe-left="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(1)" md-swipe-right="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(-1)" ng-if="tab.hasContent" ng-repeat="(index, tab) in $mdTabsCtrl.tabs" ng-class="{ \'md-no-transition\': $mdTabsCtrl.lastSelectedIndex == null, \'md-active\':        tab.isActive(), \'md-left\':          tab.isLeft(), \'md-right\':         tab.isRight(), \'md-no-scroll\':     $mdTabsCtrl.dynamicHeight }"> <div md-tabs-template="::tab.template" md-connected-if="tab.isActive()" md-scope="::tab.parent" ng-if="$mdTabsCtrl.enableDisconnect || tab.shouldRender()"></div> </md-tab-content> </md-tabs-content-wrapper>';
      }, controller: "MdTabsController", controllerAs: "$mdTabsCtrl", bindToController: !0 };
  }function c(e, t) {
    return { require: "^?mdTabs", link: function link(n, a, s, i) {
        if (i) {
          var d,
              o,
              r = function r() {
            i.updatePagination(), i.updateInkBarStyles();
          };if ("MutationObserver" in t) {
            var c = { childList: !0, subtree: !0, characterData: !0 };d = new MutationObserver(r), d.observe(a[0], c), o = d.disconnect.bind(d);
          } else {
            var l = e.debounce(r, 15, null, !1);a.on("DOMSubtreeModified", l), o = a.off.bind(a, "DOMSubtreeModified", l);
          }n.$on("$destroy", function () {
            o();
          });
        }
      } };
  }function l(e, t) {
    function n(n, a, s, i) {
      function d() {
        n.$watch("connected", function (e) {
          e === !1 ? o() : r();
        }), n.$on("$destroy", r);
      }function o() {
        i.enableDisconnect && t.disconnectScope(c);
      }function r() {
        i.enableDisconnect && t.reconnectScope(c);
      }if (i) {
        var c = i.enableDisconnect ? n.compileScope.$new() : n.compileScope;return a.html(n.template), e(a.contents())(c), t.nextTick(d);
      }
    }return { restrict: "A", link: n, scope: { template: "=mdTabsTemplate", connected: "=?mdConnectedIf", compileScope: "=mdScope" }, require: "^?mdTabs" };
  }t.module("material.components.tabs", ["material.core", "material.components.icon"]), t.module("material.components.tabs").directive("mdTab", a), t.module("material.components.tabs").directive("mdTabItem", s), t.module("material.components.tabs").directive("mdTabLabel", i), d.$inject = ["$parse"], t.module("material.components.tabs").directive("mdTabScroll", d), o.$inject = ["$scope", "$element", "$window", "$mdConstant", "$mdTabInkRipple", "$mdUtil", "$animateCss", "$attrs", "$compile", "$mdTheming", "$mdInteraction"], t.module("material.components.tabs").controller("MdTabsController", o), r.$inject = ["$$mdSvgRegistry"], t.module("material.components.tabs").directive("mdTabs", r), c.$inject = ["$mdUtil", "$window"], t.module("material.components.tabs").directive("mdTabsDummyWrapper", c), l.$inject = ["$compile", "$mdUtil"], t.module("material.components.tabs").directive("mdTabsTemplate", l);
}(window, window.angular);

//# sourceMappingURL=tabs.min-compiled.js.map