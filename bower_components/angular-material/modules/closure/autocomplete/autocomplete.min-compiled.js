"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function MdAutocompleteCtrl(e, t, n, o, i, l, r, a, c, u, d, m) {
  function s() {
    n.initOptionalProperties(e, c, { searchText: "", selectedItem: null, clearButton: !1 }), i(t), $(), n.nextTick(function () {
      v(), g(), e.autofocus && t.on("focus", f);
    });
  }function p() {
    e.requireMatch && Ie && Ie.$setValidity("md-require-match", !!e.selectedItem || !e.searchText);
  }function h() {
    function o() {
      var e = 0,
          n = t.find("md-input-container");if (n.length) {
        var o = n.find("input");e = n.prop("offsetHeight"), e -= o.prop("offsetTop"), e -= o.prop("offsetHeight"), e += n.prop("offsetTop");
      }return e;
    }function i() {
      var e = xe.scrollContainer.getBoundingClientRect(),
          t = {};e.right > d.right - MENU_PADDING && (t.left = a.right - e.width + "px"), xe.$.scrollContainer.css(t);
    }if (!xe) return n.nextTick(h, !1, e);var l,
        r = (e.dropdownItems || MAX_ITEMS) * ITEM_HEIGHT,
        a = xe.wrap.getBoundingClientRect(),
        u = xe.snap.getBoundingClientRect(),
        d = xe.root.getBoundingClientRect(),
        m = u.bottom - d.top,
        s = d.bottom - u.top,
        p = a.left - d.left,
        g = a.width,
        f = o(),
        $ = e.dropdownPosition;if ($ || ($ = m > s && d.height - a.bottom - MENU_PADDING < r ? "top" : "bottom"), c.mdFloatingLabel && (p += INPUT_PADDING, g -= 2 * INPUT_PADDING), l = { left: p + "px", minWidth: g + "px", maxWidth: Math.max(a.right - d.left, d.right - a.left) - MENU_PADDING + "px" }, "top" === $) l.top = "auto", l.bottom = s + "px", l.maxHeight = Math.min(r, a.top - d.top - MENU_PADDING) + "px";else {
      var C = d.bottom - a.bottom - MENU_PADDING + n.getViewportTop();l.top = m - f + "px", l.bottom = "auto", l.maxHeight = Math.min(r, C) + "px";
    }xe.$.scrollContainer.css(l), n.nextTick(i, !1);
  }function g() {
    xe.$.root.length && (i(xe.$.scrollContainer), xe.$.scrollContainer.detach(), xe.$.root.append(xe.$.scrollContainer), r.pin && r.pin(xe.$.scrollContainer, a));
  }function f() {
    xe.input.focus();
  }function $() {
    var t = parseInt(e.delay, 10) || 0;c.$observe("disabled", function (e) {
      fe.isDisabled = n.parseAttributeBoolean(e, !1);
    }), c.$observe("required", function (e) {
      fe.isRequired = n.parseAttributeBoolean(e, !1);
    }), c.$observe("readonly", function (e) {
      fe.isReadonly = n.parseAttributeBoolean(e, !1);
    }), e.$watch("searchText", t ? n.debounce(P, t) : P), e.$watch("selectedItem", y), angular.element(l).on("resize", De), e.$on("$destroy", C);
  }function C() {
    if (fe.hidden || n.enableScrolling(), angular.element(l).off("resize", De), xe) {
      var e = ["ul", "scroller", "scrollContainer", "input"];angular.forEach(e, function (e) {
        xe.$[e].remove();
      });
    }
  }function x() {
    fe.hidden || h();
  }function v() {
    xe = { main: t[0], scrollContainer: t[0].querySelector(".md-virtual-repeat-container"), scroller: t[0].querySelector(".md-virtual-repeat-scroller"), ul: t.find("ul")[0], input: t.find("input")[0], wrap: t.find("md-autocomplete-wrap")[0], root: document.body }, xe.li = xe.ul.getElementsByTagName("li"), xe.snap = b(), xe.$ = A(xe), Ie = xe.$.input.controller("ngModel");
  }function b() {
    for (var e = t; e.length; e = e.parent()) {
      if (angular.isDefined(e.attr("md-autocomplete-snap"))) return e[0];
    }return xe.wrap;
  }function A(e) {
    var t = {};for (var n in e) {
      e.hasOwnProperty(n) && (t[n] = angular.element(e[n]));
    }return t;
  }function M(e, t) {
    !e && t ? (h(), re(!0, ye.Count | ye.Selected), xe && (n.disableScrollAround(xe.ul), we = T(angular.element(xe.wrap)))) : e && !t && (n.enableScrolling(), we && (we(), we = null));
  }function T(e) {
    function t(e) {
      e.preventDefault();
    }return e.on("wheel", t), e.on("touchmove", t), function () {
      e.off("wheel", t), e.off("touchmove", t);
    };
  }function w() {
    be = !0;
  }function I() {
    Me || fe.hidden || xe.input.focus(), be = !1, fe.hidden = V();
  }function D() {
    xe.input.focus();
  }function y(t, n) {
    p(), t ? B(t).then(function (o) {
      e.searchText = o, R(t, n);
    }) : n && e.searchText && B(n).then(function (t) {
      t.toString().toLowerCase() === e.searchText.toLowerCase() && (e.searchText = "");
    }), t !== n && E();
  }function E() {
    angular.isFunction(e.itemChange) && e.itemChange(F(e.selectedItem));
  }function N() {
    angular.isFunction(e.textChange) && e.textChange();
  }function R(e, t) {
    Ae.forEach(function (n) {
      n(e, t);
    });
  }function S(e) {
    Ae.indexOf(e) == -1 && Ae.push(e);
  }function H(e) {
    var t = Ae.indexOf(e);t != -1 && Ae.splice(t, 1);
  }function P(t, n) {
    fe.index = U(), t !== n && (p(), B(e.selectedItem).then(function (o) {
      t !== o && (e.selectedItem = null, t !== n && N(), Z() ? se() : (fe.matches = [], G(!1), re(!1, ye.Count)));
    }));
  }function L(e) {
    Me = !1, be || (fe.hidden = V(), ge("ngBlur", { $event: e }));
  }function k(e) {
    e && (be = !1, Me = !1), xe.input.blur();
  }function O(e) {
    Me = !0, j() && Z() && se(), fe.hidden = V(), ge("ngFocus", { $event: e });
  }function _(t) {
    switch (t.keyCode) {case o.KEY_CODE.DOWN_ARROW:
        if (fe.loading) return;t.stopPropagation(), t.preventDefault(), fe.index = Math.min(fe.index + 1, fe.matches.length - 1), ce(), re(!1, ye.Selected);break;case o.KEY_CODE.UP_ARROW:
        if (fe.loading) return;t.stopPropagation(), t.preventDefault(), fe.index = fe.index < 0 ? fe.matches.length - 1 : Math.max(0, fe.index - 1), ce(), re(!1, ye.Selected);break;case o.KEY_CODE.TAB:
        if (I(), fe.hidden || fe.loading || fe.index < 0 || fe.matches.length < 1) return;te(fe.index);break;case o.KEY_CODE.ENTER:
        if (fe.hidden || fe.loading || fe.index < 0 || fe.matches.length < 1) return;if (X()) return;t.stopPropagation(), t.preventDefault(), te(fe.index);break;case o.KEY_CODE.ESCAPE:
        if (t.preventDefault(), !z()) return;t.stopPropagation(), oe(), e.searchText && W("clear") && ie(), fe.hidden = !0, W("blur") && k(!0);}
  }function q() {
    return angular.isNumber(e.minLength) ? e.minLength : 1;
  }function B(t) {
    function n(t) {
      return t && e.itemText ? e.itemText(F(t)) : null;
    }return u.when(n(t) || t).then(function (e) {
      return e && !angular.isString(e) && d.warn("md-autocomplete: Could not resolve display value to a string. Please check the `md-item-text` attribute."), e;
    });
  }function F(e) {
    if (e) {
      var t = {};return fe.itemName && (t[fe.itemName] = e), t;
    }
  }function U() {
    return e.autoselect ? 0 : -1;
  }function G(e) {
    fe.loading != e && (fe.loading = e), fe.hidden = V();
  }function V() {
    return !j() || !K();
  }function j() {
    return !(fe.loading && !Y()) && !X() && !!Me;
  }function z() {
    return W("blur") || !fe.hidden || fe.loading || W("clear") && e.searchText;
  }function W(t) {
    return !e.escapeOptions || e.escapeOptions.toLowerCase().indexOf(t) !== -1;
  }function K() {
    return Z() && Y() || me();
  }function Y() {
    return !!fe.matches.length;
  }function X() {
    return !!fe.scope.selectedItem;
  }function J() {
    return fe.loading && !X();
  }function Q() {
    return B(fe.matches[fe.index]);
  }function Z() {
    return (e.searchText || "").length >= q();
  }function ee(e, t, n) {
    Object.defineProperty(fe, e, { get: function get() {
        return n;
      }, set: function set(e) {
        var o = n;n = e, t(e, o);
      } });
  }function te(t) {
    n.nextTick(function () {
      B(fe.matches[t]).then(function (e) {
        var t = xe.$.input.controller("ngModel");t.$setViewValue(e), t.$render();
      })["finally"](function () {
        e.selectedItem = fe.matches[t], G(!1);
      });
    }, !1);
  }function ne() {
    oe(), ie();
  }function oe() {
    fe.index = 0, fe.matches = [];
  }function ie() {
    G(!0), e.searchText = "";var t = document.createEvent("CustomEvent");t.initCustomEvent("change", !0, !0, { value: "" }), xe.input.dispatchEvent(t), xe.input.blur(), e.searchText = "", xe.input.focus();
  }function le(t) {
    function o(t) {
      t && (t = u.when(t), Te++, G(!0), n.nextTick(function () {
        t.then(i)["finally"](function () {
          0 === --Te && G(!1);
        });
      }, !0, e));
    }function i(n) {
      ve[r] = n, (t || "") === (e.searchText || "") && pe(n);
    }var l = e.$parent.$eval(Ce),
        r = t.toLowerCase(),
        a = angular.isArray(l),
        c = !!l.then;a ? i(l) : c && o(l);
  }function re(e, t) {
    var n = e ? "polite" : "assertive",
        o = [];t & ye.Selected && fe.index !== -1 && o.push(Q()), t & ye.Count && o.push(u.resolve(ae())), u.all(o).then(function (e) {
      m.announce(e.join(" "), n);
    });
  }function ae() {
    switch (fe.matches.length) {case 0:
        return "There are no matches available.";case 1:
        return "There is 1 match available.";default:
        return "There are " + fe.matches.length + " matches available.";}
  }function ce() {
    if (xe.li[0]) {
      var e = xe.li[0].offsetHeight,
          t = e * fe.index,
          n = t + e,
          o = xe.scroller.clientHeight,
          i = xe.scroller.scrollTop;t < i ? de(t) : n > i + o && de(n - o);
    }
  }function ue() {
    return 0 !== Te;
  }function de(e) {
    xe.$.scrollContainer.controller("mdVirtualRepeatContainer").scrollTo(e);
  }function me() {
    var e = (fe.scope.searchText || "").length;return fe.hasNotFound && !Y() && (!fe.loading || ue()) && e >= q() && (Me || be) && !X();
  }function se() {
    var t = e.searchText || "",
        n = t.toLowerCase();!e.noCache && ve[n] ? pe(ve[n]) : le(t), fe.hidden = V();
  }function pe(t) {
    fe.matches = t, fe.hidden = V(), fe.loading && G(!1), e.selectOnMatch && he(), h(), re(!0, ye.Count);
  }function he() {
    var t = e.searchText,
        n = fe.matches,
        o = n[0];1 === n.length && B(o).then(function (n) {
      var o = t == n;e.matchInsensitive && !o && (o = t.toLowerCase() == n.toLowerCase()), o && te(0);
    });
  }function ge(t, n) {
    c[t] && e.$parent.$eval(c[t], n || {});
  }var fe = this,
      $e = e.itemsExpr.split(/ in /i),
      Ce = $e[1],
      xe = null,
      ve = {},
      be = !1,
      Ae = [],
      Me = !1,
      Te = 0,
      we = null,
      Ie = null,
      De = n.debounce(x);ee("hidden", M, !0), fe.scope = e, fe.parent = e.$parent, fe.itemName = $e[0], fe.matches = [], fe.loading = !1, fe.hidden = !0, fe.index = null, fe.id = n.nextUid(), fe.isDisabled = null, fe.isRequired = null, fe.isReadonly = null, fe.hasNotFound = !1, fe.keydown = _, fe.blur = L, fe.focus = O, fe.clear = ne, fe.select = te, fe.listEnter = w, fe.listLeave = I, fe.mouseUp = D, fe.getCurrentDisplayValue = Q, fe.registerSelectedItemWatcher = S, fe.unregisterSelectedItemWatcher = H, fe.notFoundVisible = me, fe.loadingIsVisible = J, fe.positionDropdown = h;var ye = { Count: 1, Selected: 2 };return s();
}function MdAutocomplete(e) {
  return { controller: "MdAutocompleteCtrl", controllerAs: "$mdAutocompleteCtrl", scope: { inputName: "@mdInputName", inputMinlength: "@mdInputMinlength", inputMaxlength: "@mdInputMaxlength", searchText: "=?mdSearchText", selectedItem: "=?mdSelectedItem", itemsExpr: "@mdItems", itemText: "&mdItemText", placeholder: "@placeholder", noCache: "=?mdNoCache", requireMatch: "=?mdRequireMatch", selectOnMatch: "=?mdSelectOnMatch", matchInsensitive: "=?mdMatchCaseInsensitive", itemChange: "&?mdSelectedItemChange", textChange: "&?mdSearchTextChange", minLength: "=?mdMinLength", delay: "=?mdDelay", autofocus: "=?mdAutofocus", floatingLabel: "@?mdFloatingLabel", autoselect: "=?mdAutoselect", menuClass: "@?mdMenuClass", inputId: "@?mdInputId", escapeOptions: "@?mdEscapeOptions", dropdownItems: "=?mdDropdownItems", dropdownPosition: "@?mdDropdownPosition", clearButton: "=?mdClearButton" }, compile: function compile(e, t) {
      var n = ["md-select-on-focus", "md-no-asterisk", "ng-trim", "ng-pattern"],
          o = e.find("input");return n.forEach(function (e) {
        var n = t[t.$normalize(e)];null !== n && o.attr(e, n);
      }), function (e, t, n, o) {
        o.hasNotFound = !!t.attr("md-has-not-found"), angular.isDefined(n.mdClearButton) || e.floatingLabel || (e.clearButton = !0);
      };
    }, template: function template(t, n) {
      function o() {
        var e = t.find("md-item-template").detach(),
            n = e.length ? e.html() : t.html();return e.length || t.empty(), "<md-autocomplete-parent-scope md-autocomplete-replace>" + n + "</md-autocomplete-parent-scope>";
      }function i() {
        var e = t.find("md-not-found").detach(),
            n = e.length ? e.html() : "";return n ? '<li ng-if="$mdAutocompleteCtrl.notFoundVisible()"                         md-autocomplete-parent-scope>' + n + "</li>" : "";
      }function l() {
        return n.mdFloatingLabel ? '            <md-input-container ng-if="floatingLabel">              <label>{{floatingLabel}}</label>              <input type="search"                  ' + (null != d ? 'tabindex="' + d + '"' : "") + '                  id="{{ inputId || \'fl-input-\' + $mdAutocompleteCtrl.id }}"                  name="{{inputName}}"                  autocomplete="off"                  ng-required="$mdAutocompleteCtrl.isRequired"                  ng-readonly="$mdAutocompleteCtrl.isReadonly"                  ng-minlength="inputMinlength"                  ng-maxlength="inputMaxlength"                  ng-disabled="$mdAutocompleteCtrl.isDisabled"                  ng-model="$mdAutocompleteCtrl.scope.searchText"                  ng-model-options="{ allowInvalid: true }"                  ng-keydown="$mdAutocompleteCtrl.keydown($event)"                  ng-blur="$mdAutocompleteCtrl.blur($event)"                  ng-focus="$mdAutocompleteCtrl.focus($event)"                  aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                  aria-label="{{floatingLabel}}"                  aria-autocomplete="list"                  role="combobox"                  aria-haspopup="true"                  aria-activedescendant=""                  aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>              <div md-autocomplete-parent-scope md-autocomplete-replace>' + u + "</div>            </md-input-container>" : '            <input type="search"                ' + (null != d ? 'tabindex="' + d + '"' : "") + '                id="{{ inputId || \'input-\' + $mdAutocompleteCtrl.id }}"                name="{{inputName}}"                ng-if="!floatingLabel"                autocomplete="off"                ng-required="$mdAutocompleteCtrl.isRequired"                ng-disabled="$mdAutocompleteCtrl.isDisabled"                ng-readonly="$mdAutocompleteCtrl.isReadonly"                ng-model="$mdAutocompleteCtrl.scope.searchText"                ng-keydown="$mdAutocompleteCtrl.keydown($event)"                ng-blur="$mdAutocompleteCtrl.blur($event)"                ng-focus="$mdAutocompleteCtrl.focus($event)"                placeholder="{{placeholder}}"                aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                aria-label="{{placeholder}}"                aria-autocomplete="list"                role="combobox"                aria-haspopup="true"                aria-activedescendant=""                aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>';
      }function r() {
        return '<button type="button" aria-label="Clear Input" tabindex="-1" ng-if="clearButton && $mdAutocompleteCtrl.scope.searchText && !$mdAutocompleteCtrl.isDisabled" ng-click="$mdAutocompleteCtrl.clear($event)"><md-icon md-svg-src="' + e.mdClose + '"></md-icon></button>';
      }var a = i(),
          c = o(),
          u = t.html(),
          d = n.tabindex;return a && t.attr("md-has-not-found", !0), t.attr("tabindex", "-1"), "        <md-autocomplete-wrap            ng-class=\"{ 'md-whiteframe-z1': !floatingLabel,                         'md-menu-showing': !$mdAutocompleteCtrl.hidden,                         'md-show-clear-button': !!clearButton }\">          " + l() + "          " + r() + '          <md-progress-linear              class="' + (n.mdFloatingLabel ? "md-inline" : "") + '"              ng-if="$mdAutocompleteCtrl.loadingIsVisible()"              md-mode="indeterminate"></md-progress-linear>          <md-virtual-repeat-container              md-auto-shrink              md-auto-shrink-min="1"              ng-mouseenter="$mdAutocompleteCtrl.listEnter()"              ng-mouseleave="$mdAutocompleteCtrl.listLeave()"              ng-mouseup="$mdAutocompleteCtrl.mouseUp()"              ng-hide="$mdAutocompleteCtrl.hidden"              class="md-autocomplete-suggestions-container md-whiteframe-z1"              ng-class="{ \'md-not-found\': $mdAutocompleteCtrl.notFoundVisible() }"              role="presentation">            <ul class="md-autocomplete-suggestions"                ng-class="::menuClass"                id="ul-{{$mdAutocompleteCtrl.id}}">              <li md-virtual-repeat="item in $mdAutocompleteCtrl.matches"                  ng-class="{ selected: $index === $mdAutocompleteCtrl.index }"                  ng-click="$mdAutocompleteCtrl.select($index)"                  md-extra-name="$mdAutocompleteCtrl.itemName">                  ' + c + "                  </li>" + a + "            </ul>          </md-virtual-repeat-container>        </md-autocomplete-wrap>";
    } };
}function MdAutocompleteItemScopeDirective(e, t) {
  function n(e, n, o) {
    return function (e, n, i) {
      function l(n, o) {
        c[o] = e[n], e.$watch(n, function (e) {
          t.nextTick(function () {
            c[o] = e;
          });
        });
      }function r() {
        var t = !1,
            n = !1;e.$watch(function () {
          n || t || (t = !0, e.$$postDigest(function () {
            n || c.$digest(), t = n = !1;
          }));
        }), c.$watch(function () {
          n = !0;
        });
      }var a = e.$mdAutocompleteCtrl,
          c = a.parent.$new(),
          u = a.itemName;l("$index", "$index"), l("item", u), r(), o(c, function (e) {
        n.after(e);
      });
    };
  }return { restrict: "AE", compile: n, terminal: !0, transclude: "element" };
}function MdHighlightCtrl(e, t, n) {
  this.$scope = e, this.$element = t, this.$attrs = n, this.regex = null;
}function MdHighlight(e, t) {
  return { terminal: !0, controller: "MdHighlightCtrl", compile: function compile(n, o) {
      var i = t(o.mdHighlightText),
          l = e(n.html());return function (e, t, n, o) {
        o.init(i, l);
      };
    } };
}goog.provide("ngmaterial.components.autocomplete"), goog.require("ngmaterial.components.icon"), goog.require("ngmaterial.components.virtualRepeat"), goog.require("ngmaterial.core"), angular.module("material.components.autocomplete", ["material.core", "material.components.icon", "material.components.virtualRepeat"]), MdAutocompleteCtrl.$inject = ["$scope", "$element", "$mdUtil", "$mdConstant", "$mdTheming", "$window", "$animate", "$rootElement", "$attrs", "$q", "$log", "$mdLiveAnnouncer"], angular.module("material.components.autocomplete").controller("MdAutocompleteCtrl", MdAutocompleteCtrl);var ITEM_HEIGHT = 48,
    MAX_ITEMS = 5,
    MENU_PADDING = 8,
    INPUT_PADDING = 2;MdAutocomplete.$inject = ["$$mdSvgRegistry"], angular.module("material.components.autocomplete").directive("mdAutocomplete", MdAutocomplete), MdAutocompleteItemScopeDirective.$inject = ["$compile", "$mdUtil"], angular.module("material.components.autocomplete").directive("mdAutocompleteParentScope", MdAutocompleteItemScopeDirective), MdHighlightCtrl.$inject = ["$scope", "$element", "$attrs"], angular.module("material.components.autocomplete").controller("MdHighlightCtrl", MdHighlightCtrl), MdHighlightCtrl.prototype.init = function (e, t) {
  this.flags = this.$attrs.mdHighlightFlags || "", this.unregisterFn = this.$scope.$watch(function (n) {
    return { term: e(n), contentText: t(n) };
  }.bind(this), this.onRender.bind(this), !0), this.$element.on("$destroy", this.unregisterFn);
}, MdHighlightCtrl.prototype.onRender = function (e, t) {
  var n = e.contentText;null !== this.regex && e.term === t.term || (this.regex = this.createRegex(e.term, this.flags)), e.term ? this.applyRegex(n) : this.$element.text(n);
}, MdHighlightCtrl.prototype.applyRegex = function (e) {
  var t = this.resolveTokens(e);this.$element.empty(), t.forEach(function (e) {
    if (e.isMatch) {
      var t = angular.element('<span class="highlight">').text(e.text);this.$element.append(t);
    } else this.$element.append(document.createTextNode(e));
  }.bind(this));
}, MdHighlightCtrl.prototype.resolveTokens = function (e) {
  function t(t, o) {
    var i = e.slice(t, o);i && n.push(i);
  }var n = [],
      o = 0;return e.replace(this.regex, function (e, i) {
    t(o, i), n.push({ text: e, isMatch: !0 }), o = i + e.length;
  }), t(o), n;
}, MdHighlightCtrl.prototype.createRegex = function (e, t) {
  var n = "",
      o = "",
      i = this.sanitizeRegex(e);return t.indexOf("^") >= 0 && (n = "^"), t.indexOf("$") >= 0 && (o = "$"), new RegExp(n + i + o, t.replace(/[$\^]/g, ""));
}, MdHighlightCtrl.prototype.sanitizeRegex = function (e) {
  return e && e.toString().replace(/[\\\^\$\*\+\?\.\(\)\|\{}\[\]]/g, "\\$&");
}, MdHighlight.$inject = ["$interpolate", "$parse"], angular.module("material.components.autocomplete").directive("mdHighlightText", MdHighlight), ngmaterial.components.autocomplete = angular.module("material.components.autocomplete");

//# sourceMappingURL=autocomplete.min-compiled.js.map