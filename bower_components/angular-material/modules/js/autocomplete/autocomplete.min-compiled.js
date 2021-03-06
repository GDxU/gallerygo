"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (e, t, n) {
  "use strict";
  function o(e, o, i, r, l, a, s, p, h, f, g, $) {
    function x() {
      i.initOptionalProperties(e, h, { searchText: "", selectedItem: null, clearButton: !1 }), l(o), A(), i.nextTick(function () {
        I(), b(), e.autofocus && o.on("focus", w);
      });
    }function C() {
      e.requireMatch && De && De.$setValidity("md-require-match", !!e.selectedItem || !e.searchText);
    }function v() {
      function t() {
        var e = 0,
            t = o.find("md-input-container");if (t.length) {
          var n = t.find("input");e = t.prop("offsetHeight"), e -= n.prop("offsetTop"), e -= n.prop("offsetHeight"), e += t.prop("offsetTop");
        }return e;
      }function n() {
        var e = ye.scrollContainer.getBoundingClientRect(),
            t = {};e.right > p.right - d && (t.left = a.right - e.width + "px"), ye.$.scrollContainer.css(t);
      }if (!ye) return i.nextTick(v, !1, e);var r,
          l = (e.dropdownItems || u) * c,
          a = ye.wrap.getBoundingClientRect(),
          s = ye.snap.getBoundingClientRect(),
          p = ye.root.getBoundingClientRect(),
          f = s.bottom - p.top,
          g = p.bottom - s.top,
          $ = a.left - p.left,
          x = a.width,
          C = t(),
          b = e.dropdownPosition;if (b || (b = f > g && p.height - a.bottom - d < l ? "top" : "bottom"), h.mdFloatingLabel && ($ += m, x -= 2 * m), r = { left: $ + "px", minWidth: x + "px", maxWidth: Math.max(a.right - p.left, p.right - a.left) - d + "px" }, "top" === b) r.top = "auto", r.bottom = g + "px", r.maxHeight = Math.min(l, a.top - p.top - d) + "px";else {
        var w = p.bottom - a.bottom - d + i.getViewportTop();r.top = f - C + "px", r.bottom = "auto", r.maxHeight = Math.min(l, w) + "px";
      }ye.$.scrollContainer.css(r), i.nextTick(n, !1);
    }function b() {
      ye.$.root.length && (l(ye.$.scrollContainer), ye.$.scrollContainer.detach(), ye.$.root.append(ye.$.scrollContainer), s.pin && s.pin(ye.$.scrollContainer, p));
    }function w() {
      ye.input.focus();
    }function A() {
      var n = parseInt(e.delay, 10) || 0;h.$observe("disabled", function (e) {
        we.isDisabled = i.parseAttributeBoolean(e, !1);
      }), h.$observe("required", function (e) {
        we.isRequired = i.parseAttributeBoolean(e, !1);
      }), h.$observe("readonly", function (e) {
        we.isReadonly = i.parseAttributeBoolean(e, !1);
      }), e.$watch("searchText", n ? i.debounce(H, n) : H), e.$watch("selectedItem", S), t.element(a).on("resize", Oe), e.$on("$destroy", T);
    }function T() {
      if (we.hidden || i.enableScrolling(), t.element(a).off("resize", Oe), ye) {
        var e = ["ul", "scroller", "scrollContainer", "input"];t.forEach(e, function (e) {
          ye.$[e].remove();
        });
      }
    }function y() {
      we.hidden || v();
    }function I() {
      ye = { main: o[0], scrollContainer: o[0].querySelector(".md-virtual-repeat-container"), scroller: o[0].querySelector(".md-virtual-repeat-scroller"), ul: o.find("ul")[0], input: o.find("input")[0], wrap: o.find("md-autocomplete-wrap")[0], root: document.body }, ye.li = ye.ul.getElementsByTagName("li"), ye.snap = E(), ye.$ = R(ye), De = ye.$.input.controller("ngModel");
    }function E() {
      for (var e = o; e.length; e = e.parent()) {
        if (t.isDefined(e.attr("md-autocomplete-snap"))) return e[0];
      }return ye.wrap;
    }function R(e) {
      var n = {};for (var o in e) {
        e.hasOwnProperty(o) && (n[o] = t.element(e[o]));
      }return n;
    }function M(e, n) {
      !e && n ? (v(), se(!0, Se.Count | Se.Selected), ye && (i.disableScrollAround(ye.ul), ke = L(t.element(ye.wrap)))) : e && !n && (i.enableScrolling(), ke && (ke(), ke = null));
    }function L(e) {
      function t(e) {
        e.preventDefault();
      }return e.on("wheel", t), e.on("touchmove", t), function () {
        e.off("wheel", t), e.off("touchmove", t);
      };
    }function k() {
      Ee = !0;
    }function D() {
      Me || we.hidden || ye.input.focus(), Ee = !1, we.hidden = J();
    }function O() {
      ye.input.focus();
    }function S(t, n) {
      C(), t ? U(t).then(function (o) {
        e.searchText = o, F(t, n);
      }) : n && e.searchText && U(n).then(function (t) {
        t.toString().toLowerCase() === e.searchText.toLowerCase() && (e.searchText = "");
      }), t !== n && N();
    }function N() {
      t.isFunction(e.itemChange) && e.itemChange(K(e.selectedItem));
    }function B() {
      t.isFunction(e.textChange) && e.textChange();
    }function F(e, t) {
      Re.forEach(function (n) {
        n(e, t);
      });
    }function q(e) {
      Re.indexOf(e) == -1 && Re.push(e);
    }function P(e) {
      var t = Re.indexOf(e);t != -1 && Re.splice(t, 1);
    }function H(t, n) {
      we.index = Y(), t !== n && (C(), U(e.selectedItem).then(function (o) {
        t !== o && (e.selectedItem = null, t !== n && B(), re() ? xe() : (we.matches = [], G(!1), se(!1, Se.Count)));
      }));
    }function V(e) {
      Me = !1, Ee || (we.hidden = J(), be("ngBlur", { $event: e }));
    }function j(e) {
      e && (Ee = !1, Me = !1), ye.input.blur();
    }function z(e) {
      Me = !0, Q() && re() && xe(), we.hidden = J(), be("ngFocus", { $event: e });
    }function W(t) {
      switch (t.keyCode) {case r.KEY_CODE.DOWN_ARROW:
          if (we.loading) return;t.stopPropagation(), t.preventDefault(), we.index = Math.min(we.index + 1, we.matches.length - 1), he(), se(!1, Se.Selected);break;case r.KEY_CODE.UP_ARROW:
          if (we.loading) return;t.stopPropagation(), t.preventDefault(), we.index = we.index < 0 ? we.matches.length - 1 : Math.max(0, we.index - 1), he(), se(!1, Se.Selected);break;case r.KEY_CODE.TAB:
          if (D(), we.hidden || we.loading || we.index < 0 || we.matches.length < 1) return;ae(we.index);break;case r.KEY_CODE.ENTER:
          if (we.hidden || we.loading || we.index < 0 || we.matches.length < 1) return;if (ne()) return;t.stopPropagation(), t.preventDefault(), ae(we.index);break;case r.KEY_CODE.ESCAPE:
          if (t.preventDefault(), !X()) return;t.stopPropagation(), ue(), e.searchText && Z("clear") && de(), we.hidden = !0, Z("blur") && j(!0);}
    }function _() {
      return t.isNumber(e.minLength) ? e.minLength : 1;
    }function U(n) {
      function o(t) {
        return t && e.itemText ? e.itemText(K(t)) : null;
      }return f.when(o(n) || n).then(function (e) {
        return e && !t.isString(e) && g.warn("md-autocomplete: Could not resolve display value to a string. Please check the `md-item-text` attribute."), e;
      });
    }function K(e) {
      if (!e) return n;var t = {};return we.itemName && (t[we.itemName] = e), t;
    }function Y() {
      return e.autoselect ? 0 : -1;
    }function G(e) {
      we.loading != e && (we.loading = e), we.hidden = J();
    }function J() {
      return !Q() || !ee();
    }function Q() {
      return !(we.loading && !te()) && !ne() && !!Me;
    }function X() {
      return Z("blur") || !we.hidden || we.loading || Z("clear") && e.searchText;
    }function Z(t) {
      return !e.escapeOptions || e.escapeOptions.toLowerCase().indexOf(t) !== -1;
    }function ee() {
      return re() && te() || $e();
    }function te() {
      return !!we.matches.length;
    }function ne() {
      return !!we.scope.selectedItem;
    }function oe() {
      return we.loading && !ne();
    }function ie() {
      return U(we.matches[we.index]);
    }function re() {
      return (e.searchText || "").length >= _();
    }function le(e, t, n) {
      Object.defineProperty(we, e, { get: function get() {
          return n;
        }, set: function set(e) {
          var o = n;n = e, t(e, o);
        } });
    }function ae(t) {
      i.nextTick(function () {
        U(we.matches[t]).then(function (e) {
          var t = ye.$.input.controller("ngModel");t.$setViewValue(e), t.$render();
        })["finally"](function () {
          e.selectedItem = we.matches[t], G(!1);
        });
      }, !1);
    }function ce() {
      ue(), de();
    }function ue() {
      we.index = 0, we.matches = [];
    }function de() {
      G(!0), e.searchText = "";var t = document.createEvent("CustomEvent");t.initCustomEvent("change", !0, !0, { value: "" }), ye.input.dispatchEvent(t), ye.input.blur(), e.searchText = "", ye.input.focus();
    }function me(n) {
      function o(t) {
        t && (t = f.when(t), Le++, G(!0), i.nextTick(function () {
          t.then(r)["finally"](function () {
            0 === --Le && G(!1);
          });
        }, !0, e));
      }function r(t) {
        Ie[a] = t, (n || "") === (e.searchText || "") && Ce(t);
      }var l = e.$parent.$eval(Te),
          a = n.toLowerCase(),
          c = t.isArray(l),
          u = !!l.then;c ? r(l) : u && o(l);
    }function se(e, t) {
      var n = e ? "polite" : "assertive",
          o = [];t & Se.Selected && we.index !== -1 && o.push(ie()), t & Se.Count && o.push(f.resolve(pe())), f.all(o).then(function (e) {
        $.announce(e.join(" "), n);
      });
    }function pe() {
      switch (we.matches.length) {case 0:
          return "There are no matches available.";case 1:
          return "There is 1 match available.";default:
          return "There are " + we.matches.length + " matches available.";}
    }function he() {
      if (ye.li[0]) {
        var e = ye.li[0].offsetHeight,
            t = e * we.index,
            n = t + e,
            o = ye.scroller.clientHeight,
            i = ye.scroller.scrollTop;t < i ? ge(t) : n > i + o && ge(n - o);
      }
    }function fe() {
      return 0 !== Le;
    }function ge(e) {
      ye.$.scrollContainer.controller("mdVirtualRepeatContainer").scrollTo(e);
    }function $e() {
      var e = (we.scope.searchText || "").length;return we.hasNotFound && !te() && (!we.loading || fe()) && e >= _() && (Me || Ee) && !ne();
    }function xe() {
      var t = e.searchText || "",
          n = t.toLowerCase();!e.noCache && Ie[n] ? Ce(Ie[n]) : me(t), we.hidden = J();
    }function Ce(t) {
      we.matches = t, we.hidden = J(), we.loading && G(!1), e.selectOnMatch && ve(), v(), se(!0, Se.Count);
    }function ve() {
      var t = e.searchText,
          n = we.matches,
          o = n[0];1 === n.length && U(o).then(function (n) {
        var o = t == n;e.matchInsensitive && !o && (o = t.toLowerCase() == n.toLowerCase()), o && ae(0);
      });
    }function be(t, n) {
      h[t] && e.$parent.$eval(h[t], n || {});
    }var we = this,
        Ae = e.itemsExpr.split(/ in /i),
        Te = Ae[1],
        ye = null,
        Ie = {},
        Ee = !1,
        Re = [],
        Me = !1,
        Le = 0,
        ke = null,
        De = null,
        Oe = i.debounce(y);le("hidden", M, !0), we.scope = e, we.parent = e.$parent, we.itemName = Ae[0], we.matches = [], we.loading = !1, we.hidden = !0, we.index = null, we.id = i.nextUid(), we.isDisabled = null, we.isRequired = null, we.isReadonly = null, we.hasNotFound = !1, we.keydown = W, we.blur = V, we.focus = z, we.clear = ce, we.select = ae, we.listEnter = k, we.listLeave = D, we.mouseUp = O, we.getCurrentDisplayValue = ie, we.registerSelectedItemWatcher = q, we.unregisterSelectedItemWatcher = P, we.notFoundVisible = $e, we.loadingIsVisible = oe, we.positionDropdown = v;var Se = { Count: 1, Selected: 2 };return x();
  }function i(e) {
    return { controller: "MdAutocompleteCtrl", controllerAs: "$mdAutocompleteCtrl", scope: { inputName: "@mdInputName", inputMinlength: "@mdInputMinlength", inputMaxlength: "@mdInputMaxlength", searchText: "=?mdSearchText", selectedItem: "=?mdSelectedItem", itemsExpr: "@mdItems", itemText: "&mdItemText", placeholder: "@placeholder", noCache: "=?mdNoCache", requireMatch: "=?mdRequireMatch", selectOnMatch: "=?mdSelectOnMatch", matchInsensitive: "=?mdMatchCaseInsensitive", itemChange: "&?mdSelectedItemChange", textChange: "&?mdSearchTextChange", minLength: "=?mdMinLength", delay: "=?mdDelay", autofocus: "=?mdAutofocus", floatingLabel: "@?mdFloatingLabel", autoselect: "=?mdAutoselect", menuClass: "@?mdMenuClass", inputId: "@?mdInputId", escapeOptions: "@?mdEscapeOptions", dropdownItems: "=?mdDropdownItems", dropdownPosition: "@?mdDropdownPosition", clearButton: "=?mdClearButton" }, compile: function compile(e, n) {
        var o = ["md-select-on-focus", "md-no-asterisk", "ng-trim", "ng-pattern"],
            i = e.find("input");return o.forEach(function (e) {
          var t = n[n.$normalize(e)];null !== t && i.attr(e, t);
        }), function (e, n, o, i) {
          i.hasNotFound = !!n.attr("md-has-not-found"), t.isDefined(o.mdClearButton) || e.floatingLabel || (e.clearButton = !0);
        };
      }, template: function template(t, n) {
        function o() {
          var e = t.find("md-item-template").detach(),
              n = e.length ? e.html() : t.html();return e.length || t.empty(), "<md-autocomplete-parent-scope md-autocomplete-replace>" + n + "</md-autocomplete-parent-scope>";
        }function i() {
          var e = t.find("md-not-found").detach(),
              n = e.length ? e.html() : "";return n ? '<li ng-if="$mdAutocompleteCtrl.notFoundVisible()"                         md-autocomplete-parent-scope>' + n + "</li>" : "";
        }function r() {
          return n.mdFloatingLabel ? '            <md-input-container ng-if="floatingLabel">              <label>{{floatingLabel}}</label>              <input type="search"                  ' + (null != d ? 'tabindex="' + d + '"' : "") + '                  id="{{ inputId || \'fl-input-\' + $mdAutocompleteCtrl.id }}"                  name="{{inputName}}"                  autocomplete="off"                  ng-required="$mdAutocompleteCtrl.isRequired"                  ng-readonly="$mdAutocompleteCtrl.isReadonly"                  ng-minlength="inputMinlength"                  ng-maxlength="inputMaxlength"                  ng-disabled="$mdAutocompleteCtrl.isDisabled"                  ng-model="$mdAutocompleteCtrl.scope.searchText"                  ng-model-options="{ allowInvalid: true }"                  ng-keydown="$mdAutocompleteCtrl.keydown($event)"                  ng-blur="$mdAutocompleteCtrl.blur($event)"                  ng-focus="$mdAutocompleteCtrl.focus($event)"                  aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                  aria-label="{{floatingLabel}}"                  aria-autocomplete="list"                  role="combobox"                  aria-haspopup="true"                  aria-activedescendant=""                  aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>              <div md-autocomplete-parent-scope md-autocomplete-replace>' + u + "</div>            </md-input-container>" : '            <input type="search"                ' + (null != d ? 'tabindex="' + d + '"' : "") + '                id="{{ inputId || \'input-\' + $mdAutocompleteCtrl.id }}"                name="{{inputName}}"                ng-if="!floatingLabel"                autocomplete="off"                ng-required="$mdAutocompleteCtrl.isRequired"                ng-disabled="$mdAutocompleteCtrl.isDisabled"                ng-readonly="$mdAutocompleteCtrl.isReadonly"                ng-model="$mdAutocompleteCtrl.scope.searchText"                ng-keydown="$mdAutocompleteCtrl.keydown($event)"                ng-blur="$mdAutocompleteCtrl.blur($event)"                ng-focus="$mdAutocompleteCtrl.focus($event)"                placeholder="{{placeholder}}"                aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                aria-label="{{placeholder}}"                aria-autocomplete="list"                role="combobox"                aria-haspopup="true"                aria-activedescendant=""                aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>';
        }function l() {
          return '<button type="button" aria-label="Clear Input" tabindex="-1" ng-if="clearButton && $mdAutocompleteCtrl.scope.searchText && !$mdAutocompleteCtrl.isDisabled" ng-click="$mdAutocompleteCtrl.clear($event)"><md-icon md-svg-src="' + e.mdClose + '"></md-icon></button>';
        }var a = i(),
            c = o(),
            u = t.html(),
            d = n.tabindex;return a && t.attr("md-has-not-found", !0), t.attr("tabindex", "-1"), "        <md-autocomplete-wrap            ng-class=\"{ 'md-whiteframe-z1': !floatingLabel,                         'md-menu-showing': !$mdAutocompleteCtrl.hidden,                         'md-show-clear-button': !!clearButton }\">          " + r() + "          " + l() + '          <md-progress-linear              class="' + (n.mdFloatingLabel ? "md-inline" : "") + '"              ng-if="$mdAutocompleteCtrl.loadingIsVisible()"              md-mode="indeterminate"></md-progress-linear>          <md-virtual-repeat-container              md-auto-shrink              md-auto-shrink-min="1"              ng-mouseenter="$mdAutocompleteCtrl.listEnter()"              ng-mouseleave="$mdAutocompleteCtrl.listLeave()"              ng-mouseup="$mdAutocompleteCtrl.mouseUp()"              ng-hide="$mdAutocompleteCtrl.hidden"              class="md-autocomplete-suggestions-container md-whiteframe-z1"              ng-class="{ \'md-not-found\': $mdAutocompleteCtrl.notFoundVisible() }"              role="presentation">            <ul class="md-autocomplete-suggestions"                ng-class="::menuClass"                id="ul-{{$mdAutocompleteCtrl.id}}">              <li md-virtual-repeat="item in $mdAutocompleteCtrl.matches"                  ng-class="{ selected: $index === $mdAutocompleteCtrl.index }"                  ng-click="$mdAutocompleteCtrl.select($index)"                  md-extra-name="$mdAutocompleteCtrl.itemName">                  ' + c + "                  </li>" + a + "            </ul>          </md-virtual-repeat-container>        </md-autocomplete-wrap>";
      } };
  }function r(e, t) {
    function n(e, n, o) {
      return function (e, n, i) {
        function r(n, o) {
          c[o] = e[n], e.$watch(n, function (e) {
            t.nextTick(function () {
              c[o] = e;
            });
          });
        }function l() {
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
            u = a.itemName;r("$index", "$index"), r("item", u), l(), o(c, function (e) {
          n.after(e);
        });
      };
    }return { restrict: "AE", compile: n, terminal: !0, transclude: "element" };
  }function l(e, t, n) {
    this.$scope = e, this.$element = t, this.$attrs = n, this.regex = null;
  }function a(e, t) {
    return { terminal: !0, controller: "MdHighlightCtrl", compile: function compile(n, o) {
        var i = t(o.mdHighlightText),
            r = e(n.html());return function (e, t, n, o) {
          o.init(i, r);
        };
      } };
  }t.module("material.components.autocomplete", ["material.core", "material.components.icon", "material.components.virtualRepeat"]), o.$inject = ["$scope", "$element", "$mdUtil", "$mdConstant", "$mdTheming", "$window", "$animate", "$rootElement", "$attrs", "$q", "$log", "$mdLiveAnnouncer"], t.module("material.components.autocomplete").controller("MdAutocompleteCtrl", o);var c = 48,
      u = 5,
      d = 8,
      m = 2;i.$inject = ["$$mdSvgRegistry"], t.module("material.components.autocomplete").directive("mdAutocomplete", i), r.$inject = ["$compile", "$mdUtil"], t.module("material.components.autocomplete").directive("mdAutocompleteParentScope", r), l.$inject = ["$scope", "$element", "$attrs"], t.module("material.components.autocomplete").controller("MdHighlightCtrl", l), l.prototype.init = function (e, t) {
    this.flags = this.$attrs.mdHighlightFlags || "", this.unregisterFn = this.$scope.$watch(function (n) {
      return { term: e(n), contentText: t(n) };
    }.bind(this), this.onRender.bind(this), !0), this.$element.on("$destroy", this.unregisterFn);
  }, l.prototype.onRender = function (e, t) {
    var n = e.contentText;null !== this.regex && e.term === t.term || (this.regex = this.createRegex(e.term, this.flags)), e.term ? this.applyRegex(n) : this.$element.text(n);
  }, l.prototype.applyRegex = function (e) {
    var n = this.resolveTokens(e);this.$element.empty(), n.forEach(function (e) {
      if (e.isMatch) {
        var n = t.element('<span class="highlight">').text(e.text);this.$element.append(n);
      } else this.$element.append(document.createTextNode(e));
    }.bind(this));
  }, l.prototype.resolveTokens = function (e) {
    function t(t, o) {
      var i = e.slice(t, o);i && n.push(i);
    }var n = [],
        o = 0;return e.replace(this.regex, function (e, i) {
      t(o, i), n.push({ text: e, isMatch: !0 }), o = i + e.length;
    }), t(o), n;
  }, l.prototype.createRegex = function (e, t) {
    var n = "",
        o = "",
        i = this.sanitizeRegex(e);return t.indexOf("^") >= 0 && (n = "^"), t.indexOf("$") >= 0 && (o = "$"), new RegExp(n + i + o, t.replace(/[$\^]/g, ""));
  }, l.prototype.sanitizeRegex = function (e) {
    return e && e.toString().replace(/[\\\^\$\*\+\?\.\(\)\|\{}\[\]]/g, "\\$&");
  }, a.$inject = ["$interpolate", "$parse"], t.module("material.components.autocomplete").directive("mdHighlightText", a);
}(window, window.angular);

//# sourceMappingURL=autocomplete.min-compiled.js.map