"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function MdTab() {
  function e(e, n, a, s) {
    if (s) {
      var r = s.getTabElementIndex(n),
          i = t(n, "md-tab-body").remove(),
          d = t(n, "md-tab-label").remove(),
          o = s.insertTab({ scope: e, parent: e.$parent, index: r, element: n, template: i.html(), label: d.html() }, r);e.select = e.select || angular.noop, e.deselect = e.deselect || angular.noop, e.$watch("active", function (e) {
        e && s.select(o.getIndex(), !0);
      }), e.$watch("disabled", function () {
        s.refreshIndex();
      }), e.$watch(function () {
        return s.getTabElementIndex(n);
      }, function (e) {
        o.index = e, s.updateTabOrder();
      }), e.$on("$destroy", function () {
        s.removeTab(o);
      });
    }
  }function t(e, t) {
    for (var n = e[0].children, a = 0, s = n.length; a < s; a++) {
      var r = n[a];if (r.tagName === t.toUpperCase()) return angular.element(r);
    }return angular.element();
  }return { require: "^?mdTabs", terminal: !0, compile: function compile(n, a) {
      var s = t(n, "md-tab-label"),
          r = t(n, "md-tab-body");if (0 === s.length && (s = angular.element("<md-tab-label></md-tab-label>"), a.label ? s.text(a.label) : s.append(n.contents()), 0 === r.length)) {
        var i = n.contents().detach();r = angular.element("<md-tab-body></md-tab-body>"), r.append(i);
      }return n.append(s), r.html() && n.append(r), e;
    }, scope: { active: "=?mdActive", disabled: "=?ngDisabled", select: "&?mdOnSelect", deselect: "&?mdOnDeselect" } };
}function MdTabItem() {
  return { require: "^?mdTabs", link: function link(e, t, n, a) {
      a && a.attachRipple(e, t);
    } };
}function MdTabLabel() {
  return { terminal: !0 };
}function MdTabScroll(e) {
  return { restrict: "A", compile: function compile(t, n) {
      var a = e(n.mdTabScroll, null, !0);return function (e, t) {
        t.on("mousewheel", function (t) {
          e.$apply(function () {
            a(e, { $event: t });
          });
        });
      };
    } };
}function MdTabsController(e, t, n, a, s, r, i, d, o, c, l) {
  function b() {
    g("stretchTabs", x), Y("focusIndex", y, ue.selectedIndex || 0), Y("offsetLeft", w, 0), Y("hasContent", I, !1), Y("maxTabWidth", $, X()), Y("shouldPaginate", C, !1), h("noInkBar", E), h("dynamicHeight", F), h("noPagination"), h("swipeContent"), h("noDisconnect"), h("autoselect"), h("noSelectClick"), h("centerTabs", v, !1), h("enableDisconnect"), ue.scope = e, ue.parent = e.$parent, ue.tabs = [], ue.lastSelectedIndex = null, ue.hasFocus = !1, ue.styleTabItemFocus = !1, ue.shouldCenterTabs = z(), ue.tabContentPrefix = "tab-content-", u();
  }function u() {
    ue.selectedIndex = ue.selectedIndex || 0, m(), p(), f(), c(t), r.nextTick(function () {
      fe = q(), ie(), ne(), de(), ue.tabs[ue.selectedIndex] && ue.tabs[ue.selectedIndex].scope.select(), he = !0, G();
    });
  }function m() {
    var e = d.$mdTabsTemplate,
        n = angular.element(t[0].querySelector("md-tab-data"));n.html(e), o(n.contents())(ue.parent), delete d.$mdTabsTemplate;
  }function f() {
    angular.element(n).on("resize", O), e.$on("$destroy", T);
  }function p() {
    e.$watch("$mdTabsCtrl.selectedIndex", k);
  }function g(e, t) {
    var n = d.$normalize("md-" + e);t && Y(e, t), d.$observe(n, function (t) {
      ue[e] = t;
    });
  }function h(e, t) {
    function n(t) {
      ue[e] = "false" !== t;
    }var a = d.$normalize("md-" + e);t && Y(e, t), d.hasOwnProperty(a) && n(d[a]), d.$observe(a, n);
  }function T() {
    ge = !0, angular.element(n).off("resize", O);
  }function x(e) {
    var t = q();angular.element(t.wrapper).toggleClass("md-stretch-tabs", N()), de();
  }function v(e) {
    ue.shouldCenterTabs = z();
  }function $(e, t) {
    if (e !== t) {
      var n = q();angular.forEach(n.tabs, function (t) {
        t.style.maxWidth = e + "px";
      }), r.nextTick(ue.updateInkBarStyles);
    }
  }function C(e, t) {
    e !== t && (ue.maxTabWidth = X(), ue.shouldCenterTabs = z(), r.nextTick(function () {
      ue.maxTabWidth = X(), ne(ue.selectedIndex);
    }));
  }function I(e) {
    t[e ? "removeClass" : "addClass"]("md-no-tab-content");
  }function w(t) {
    var n = q(),
        s = ue.shouldCenterTabs ? "" : "-" + t + "px";angular.element(n.paging).css(a.CSS.TRANSFORM, "translate3d(" + s + ", 0, 0)"), e.$broadcast("$mdTabsPaginationChanged");
  }function y(e, t) {
    e !== t && q().tabs[e] && (ne(), te());
  }function k(t, n) {
    t !== n && (ue.selectedIndex = K(t), ue.lastSelectedIndex = n, ue.updateInkBarStyles(), ie(), ne(t), e.$broadcast("$mdTabsChanged"), ue.tabs[n] && ue.tabs[n].scope.deselect(), ue.tabs[t] && ue.tabs[t].scope.select());
  }function S(e) {
    var n = t[0].getElementsByTagName("md-tab");return Array.prototype.indexOf.call(n, e[0]);
  }function M() {
    M.watcher || (M.watcher = e.$watch(function () {
      r.nextTick(function () {
        M.watcher && t.prop("offsetParent") && (M.watcher(), M.watcher = null, O());
      }, !1);
    }));
  }function L(e) {
    switch (e.keyCode) {case a.KEY_CODE.LEFT_ARROW:
        e.preventDefault(), ee(-1, !0);break;case a.KEY_CODE.RIGHT_ARROW:
        e.preventDefault(), ee(1, !0);break;case a.KEY_CODE.SPACE:case a.KEY_CODE.ENTER:
        e.preventDefault(), me || P(ue.focusIndex);}
  }function P(e, t) {
    me || (ue.focusIndex = ue.selectedIndex = e), t && ue.noSelectClick || r.nextTick(function () {
      ue.tabs[e].element.triggerHandler("click");
    }, !1);
  }function W(e) {
    ue.shouldPaginate && (e.preventDefault(), ue.offsetLeft = ce(ue.offsetLeft - e.wheelDelta));
  }function D() {
    var e,
        t,
        n = q(),
        a = n.canvas.clientWidth,
        s = a + ue.offsetLeft;for (e = 0; e < n.tabs.length && (t = n.tabs[e], !(t.offsetLeft + t.offsetWidth > s)); e++) {}a > t.offsetWidth ? ue.offsetLeft = ce(t.offsetLeft) : ue.offsetLeft = ce(t.offsetLeft + (t.offsetWidth - a + 1));
  }function A() {
    var e,
        t,
        n = q();for (e = 0; e < n.tabs.length && (t = n.tabs[e], !(t.offsetLeft + t.offsetWidth >= ue.offsetLeft)); e++) {}n.canvas.clientWidth > t.offsetWidth ? ue.offsetLeft = ce(t.offsetLeft + t.offsetWidth - n.canvas.clientWidth) : ue.offsetLeft = ce(t.offsetLeft);
  }function O() {
    ue.lastSelectedIndex = ue.selectedIndex, ue.offsetLeft = ce(ue.offsetLeft), r.nextTick(function () {
      ue.updateInkBarStyles(), G();
    });
  }function E(e) {
    angular.element(q().inkBar).toggleClass("ng-hide", e);
  }function F(e) {
    t.toggleClass("md-dynamic-height", e);
  }function B(e) {
    if (!ge) {
      var t = ue.selectedIndex,
          n = ue.tabs.splice(e.getIndex(), 1)[0];re(), ue.selectedIndex === t && (n.scope.deselect(), ue.tabs[ue.selectedIndex] && ue.tabs[ue.selectedIndex].scope.select()), r.nextTick(function () {
        G(), ue.offsetLeft = ce(ue.offsetLeft);
      });
    }
  }function R(e, t) {
    var n = he,
        a = { getIndex: function getIndex() {
        return ue.tabs.indexOf(s);
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
      }, id: r.nextUid(), hasContent: !(!e.template || !e.template.trim()) },
        s = angular.extend(a, e);return angular.isDefined(t) ? ue.tabs.splice(t, 0, s) : ue.tabs.push(s), ae(), se(), r.nextTick(function () {
      G(), be(s), n && ue.autoselect && r.nextTick(function () {
        r.nextTick(function () {
          P(ue.tabs.indexOf(s));
        });
      });
    }), s;
  }function q() {
    var e = {},
        n = t[0];return e.wrapper = n.querySelector("md-tabs-wrapper"), e.canvas = e.wrapper.querySelector("md-tabs-canvas"), e.paging = e.canvas.querySelector("md-pagination-wrapper"), e.inkBar = e.paging.querySelector("md-ink-bar"), e.contents = n.querySelectorAll("md-tabs-content-wrapper > md-tab-content"), e.tabs = e.paging.querySelectorAll("md-tab-item"), e.dummies = e.canvas.querySelectorAll("md-dummy-tab"), e;
  }function H() {
    return ue.offsetLeft > 0;
  }function _() {
    var e = q(),
        t = e.tabs[e.tabs.length - 1];return t && t.offsetLeft + t.offsetWidth > e.canvas.clientWidth + ue.offsetLeft;
  }function j() {
    var e = ue.tabs[ue.focusIndex];return e && e.id ? "tab-item-" + e.id : null;
  }function N() {
    switch (ue.stretchTabs) {case "always":
        return !0;case "never":
        return !1;default:
        return !ue.shouldPaginate && n.matchMedia("(max-width: 600px)").matches;}
  }function z() {
    return ue.centerTabs && !ue.shouldPaginate;
  }function U() {
    if (ue.noPagination || !he) return !1;var e = t.prop("clientWidth");return angular.forEach(q().dummies, function (t) {
      e -= t.offsetWidth;
    }), e < 0;
  }function K(e) {
    if (e === -1) return -1;var t,
        n,
        a = Math.max(ue.tabs.length - e, e);for (t = 0; t <= a; t++) {
      if (n = ue.tabs[e + t], n && n.scope.disabled !== !0) return n.getIndex();if (n = ue.tabs[e - t], n && n.scope.disabled !== !0) return n.getIndex();
    }return e;
  }function Y(e, t, n) {
    Object.defineProperty(ue, e, { get: function get() {
        return n;
      }, set: function set(e) {
        var a = n;n = e, t && t(e, a);
      } });
  }function G() {
    J(), ue.maxTabWidth = X(), ue.shouldPaginate = U();
  }function J() {
    var e = q();N() ? angular.element(e.paging).css("width", "") : angular.element(e.paging).css("width", Q() + "px");
  }function Q() {
    return V(q().dummies);
  }function V(e) {
    var t = 0;return angular.forEach(e, function (e) {
      t += Math.max(e.offsetWidth, e.getBoundingClientRect().width);
    }), Math.ceil(t);
  }function X() {
    return t.prop("clientWidth");
  }function Z() {
    var e = ue.tabs[ue.selectedIndex],
        t = ue.tabs[ue.focusIndex];ue.tabs = ue.tabs.sort(function (e, t) {
      return e.index - t.index;
    }), ue.selectedIndex = ue.tabs.indexOf(e), ue.focusIndex = ue.tabs.indexOf(t);
  }function ee(e, t) {
    var n,
        a = t ? "focusIndex" : "selectedIndex",
        s = ue[a];for (n = s + e; ue.tabs[n] && ue.tabs[n].scope.disabled; n += e) {}ue.tabs[n] && (ue[a] = n);
  }function te() {
    ue.styleTabItemFocus = "keyboard" === l.getLastInteractionType(), q().dummies[ue.focusIndex].focus();
  }function ne(e) {
    var t = q();if (angular.isNumber(e) || (e = ue.focusIndex), t.tabs[e] && !ue.shouldCenterTabs) {
      var n = t.tabs[e],
          a = n.offsetLeft,
          s = n.offsetWidth + a;ue.offsetLeft = Math.max(ue.offsetLeft, ce(s - t.canvas.clientWidth + 64)), ue.offsetLeft = Math.min(ue.offsetLeft, ce(a));
    }
  }function ae() {
    pe.forEach(function (e) {
      r.nextTick(e);
    }), pe = [];
  }function se() {
    for (var e = !1, t = 0; t < ue.tabs.length; t++) {
      if (ue.tabs[t].hasContent) {
        e = !0;break;
      }
    }ue.hasContent = e;
  }function re() {
    ue.selectedIndex = K(ue.selectedIndex), ue.focusIndex = K(ue.focusIndex);
  }function ie() {
    if (!ue.dynamicHeight) return t.css("height", "");if (!ue.tabs.length) return pe.push(ie);var e = q(),
        n = e.contents[ue.selectedIndex],
        a = n ? n.offsetHeight : 0,
        s = e.wrapper.offsetHeight,
        d = a + s,
        o = t.prop("clientHeight");if (o !== d) {
      "bottom" === t.attr("md-align-tabs") && (o -= s, d -= s, void 0 !== t.attr("md-border-bottom") && ++o), me = !0;var c = { height: o + "px" },
          l = { height: d + "px" };t.css(c), i(t, { from: c, to: l, easing: "cubic-bezier(0.35, 0, 0.25, 1)", duration: .5 }).start().done(function () {
        t.css({ transition: "none", height: "" }), r.nextTick(function () {
          t.css("transition", "");
        }), me = !1;
      });
    }
  }function de() {
    var e = q();if (!e.tabs[ue.selectedIndex]) return void angular.element(e.inkBar).css({ left: "auto", right: "auto" });if (!ue.tabs.length) return pe.push(ue.updateInkBarStyles);if (!t.prop("offsetParent")) return M();var n = ue.selectedIndex,
        a = e.paging.offsetWidth,
        s = e.tabs[n],
        i = s.offsetLeft,
        d = a - i - s.offsetWidth;if (ue.shouldCenterTabs) {
      var o = V(e.tabs);a > o && r.nextTick(de, !1);
    }oe(), angular.element(e.inkBar).css({ left: i + "px", right: d + "px" });
  }function oe() {
    var e = q(),
        t = ue.selectedIndex,
        n = ue.lastSelectedIndex,
        a = angular.element(e.inkBar);angular.isNumber(n) && a.toggleClass("md-left", t < n).toggleClass("md-right", t > n);
  }function ce(e) {
    var t = q();if (!t.tabs.length || !ue.shouldPaginate) return 0;var n = t.tabs[t.tabs.length - 1],
        a = n.offsetLeft + n.offsetWidth;return e = Math.max(0, e), e = Math.min(a - t.canvas.clientWidth, e);
  }function le(e, t) {
    var n = q(),
        a = { colorElement: angular.element(n.inkBar) };s.attach(e, t, a);
  }function be(e) {
    if (e.hasContent) {
      var n = t[0].querySelectorAll('[md-tab-id="' + e.id + '"]');angular.element(n).attr("aria-controls", ue.tabContentPrefix + e.id);
    }
  }var ue = this,
      me = !1,
      fe = q(),
      pe = [],
      ge = !1,
      he = !1;ue.$onInit = b, ue.updatePagination = r.debounce(G, 100), ue.redirectFocus = te, ue.attachRipple = le, ue.insertTab = R, ue.removeTab = B, ue.select = P, ue.scroll = W, ue.nextPage = D, ue.previousPage = A, ue.keydown = L, ue.canPageForward = _, ue.canPageBack = H, ue.refreshIndex = re, ue.incrementIndex = ee, ue.getTabElementIndex = S, ue.updateInkBarStyles = r.debounce(de, 100), ue.updateTabOrder = r.debounce(Z, 100), ue.getFocusedTabId = j, 1 === angular.version.major && angular.version.minor <= 4 && this.$onInit();
}function MdTabs(e) {
  return { scope: { selectedIndex: "=?mdSelected" }, template: function template(t, n) {
      return n.$mdTabsTemplate = t.html(), '<md-tabs-wrapper> <md-tab-data></md-tab-data> <md-prev-button tabindex="-1" role="button" aria-label="Previous Page" aria-disabled="{{!$mdTabsCtrl.canPageBack()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageBack() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.previousPage()"> <md-icon md-svg-src="' + e.mdTabsArrow + '"></md-icon> </md-prev-button> <md-next-button tabindex="-1" role="button" aria-label="Next Page" aria-disabled="{{!$mdTabsCtrl.canPageForward()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageForward() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.nextPage()"> <md-icon md-svg-src="' + e.mdTabsArrow + '"></md-icon> </md-next-button> <md-tabs-canvas tabindex="{{ $mdTabsCtrl.hasFocus ? -1 : 0 }}" aria-activedescendant="{{$mdTabsCtrl.getFocusedTabId()}}" ng-focus="$mdTabsCtrl.redirectFocus()" ng-class="{ \'md-paginated\': $mdTabsCtrl.shouldPaginate, \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" ng-keydown="$mdTabsCtrl.keydown($event)" role="tablist"> <md-pagination-wrapper ng-class="{ \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" md-tab-scroll="$mdTabsCtrl.scroll($event)"> <md-tab-item tabindex="-1" class="md-tab" ng-repeat="tab in $mdTabsCtrl.tabs" role="tab" md-tab-id="{{::tab.id}}"aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-click="$mdTabsCtrl.select(tab.getIndex())" ng-class="{ \'md-active\':    tab.isActive(), \'md-focused\':   tab.hasFocus(), \'md-disabled\':  tab.scope.disabled }" ng-disabled="tab.scope.disabled" md-swipe-left="$mdTabsCtrl.nextPage()" md-swipe-right="$mdTabsCtrl.previousPage()" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-tab-item> <md-ink-bar></md-ink-bar> </md-pagination-wrapper> <md-tabs-dummy-wrapper class="md-visually-hidden md-dummy-wrapper"> <md-dummy-tab class="md-tab" tabindex="-1" id="tab-item-{{::tab.id}}" md-tab-id="{{::tab.id}}"aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-focus="$mdTabsCtrl.hasFocus = true" ng-blur="$mdTabsCtrl.hasFocus = false" ng-repeat="tab in $mdTabsCtrl.tabs" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-dummy-tab> </md-tabs-dummy-wrapper> </md-tabs-canvas> </md-tabs-wrapper> <md-tabs-content-wrapper ng-show="$mdTabsCtrl.hasContent && $mdTabsCtrl.selectedIndex >= 0" class="_md"> <md-tab-content id="{{:: $mdTabsCtrl.tabContentPrefix + tab.id}}" class="_md" role="tabpanel" aria-labelledby="tab-item-{{::tab.id}}" md-swipe-left="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(1)" md-swipe-right="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(-1)" ng-if="tab.hasContent" ng-repeat="(index, tab) in $mdTabsCtrl.tabs" ng-class="{ \'md-no-transition\': $mdTabsCtrl.lastSelectedIndex == null, \'md-active\':        tab.isActive(), \'md-left\':          tab.isLeft(), \'md-right\':         tab.isRight(), \'md-no-scroll\':     $mdTabsCtrl.dynamicHeight }"> <div md-tabs-template="::tab.template" md-connected-if="tab.isActive()" md-scope="::tab.parent" ng-if="$mdTabsCtrl.enableDisconnect || tab.shouldRender()"></div> </md-tab-content> </md-tabs-content-wrapper>';
    }, controller: "MdTabsController", controllerAs: "$mdTabsCtrl", bindToController: !0 };
}function MdTabsDummyWrapper(e, t) {
  return { require: "^?mdTabs", link: function link(n, a, s, r) {
      if (r) {
        var i,
            d,
            o = function o() {
          r.updatePagination(), r.updateInkBarStyles();
        };if ("MutationObserver" in t) {
          var c = { childList: !0, subtree: !0, characterData: !0 };i = new MutationObserver(o), i.observe(a[0], c), d = i.disconnect.bind(i);
        } else {
          var l = e.debounce(o, 15, null, !1);a.on("DOMSubtreeModified", l), d = a.off.bind(a, "DOMSubtreeModified", l);
        }n.$on("$destroy", function () {
          d();
        });
      }
    } };
}function MdTabsTemplate(e, t) {
  function n(n, a, s, r) {
    function i() {
      n.$watch("connected", function (e) {
        e === !1 ? d() : o();
      }), n.$on("$destroy", o);
    }function d() {
      r.enableDisconnect && t.disconnectScope(c);
    }function o() {
      r.enableDisconnect && t.reconnectScope(c);
    }if (r) {
      var c = r.enableDisconnect ? n.compileScope.$new() : n.compileScope;return a.html(n.template), e(a.contents())(c), t.nextTick(i);
    }
  }return { restrict: "A", link: n, scope: { template: "=mdTabsTemplate", connected: "=?mdConnectedIf", compileScope: "=mdScope" }, require: "^?mdTabs" };
}goog.provide("ngmaterial.components.tabs"), goog.require("ngmaterial.components.icon"), goog.require("ngmaterial.core"), angular.module("material.components.tabs", ["material.core", "material.components.icon"]), angular.module("material.components.tabs").directive("mdTab", MdTab), angular.module("material.components.tabs").directive("mdTabItem", MdTabItem), angular.module("material.components.tabs").directive("mdTabLabel", MdTabLabel), MdTabScroll.$inject = ["$parse"], angular.module("material.components.tabs").directive("mdTabScroll", MdTabScroll), MdTabsController.$inject = ["$scope", "$element", "$window", "$mdConstant", "$mdTabInkRipple", "$mdUtil", "$animateCss", "$attrs", "$compile", "$mdTheming", "$mdInteraction"], angular.module("material.components.tabs").controller("MdTabsController", MdTabsController), MdTabs.$inject = ["$$mdSvgRegistry"], angular.module("material.components.tabs").directive("mdTabs", MdTabs), MdTabsDummyWrapper.$inject = ["$mdUtil", "$window"], angular.module("material.components.tabs").directive("mdTabsDummyWrapper", MdTabsDummyWrapper), MdTabsTemplate.$inject = ["$compile", "$mdUtil"], angular.module("material.components.tabs").directive("mdTabsTemplate", MdTabsTemplate), ngmaterial.components.tabs = angular.module("material.components.tabs");

//# sourceMappingURL=tabs.min-compiled.js.map