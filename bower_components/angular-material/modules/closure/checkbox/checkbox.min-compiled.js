"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function MdCheckboxDirective(e, t, n, i, c, o) {
  function a(a, d) {
    function r(a, d, r, l) {
      function s(e, t, n) {
        r[e] && a.$watch(r[e], function (e) {
          n[e] && d.attr(t, n[e]);
        });
      }function u(e) {
        var t = e.which || e.keyCode;t !== n.KEY_CODE.SPACE && t !== n.KEY_CODE.ENTER || (e.preventDefault(), d.addClass("md-focused"), m(e));
      }function m(e) {
        d[0].hasAttribute("disabled") || a.skipToggle || a.$apply(function () {
          var t = r.ngChecked ? r.checked : !l.$viewValue;l.$setViewValue(t, e && e.type), l.$render();
        });
      }function p() {
        d.toggleClass("md-checked", !!l.$viewValue && !g);
      }function h(e) {
        g = e !== !1, g && d.attr("aria-checked", "mixed"), d.toggleClass("md-indeterminate", g);
      }var g;l = l || c.fakeNgModel(), i(d), d.children().on("focus", function () {
        d.focus();
      }), c.parseAttributeBoolean(r.mdIndeterminate) && (h(), a.$watch(r.mdIndeterminate, h)), r.ngChecked && a.$watch(a.$eval.bind(a, r.ngChecked), function (e) {
        l.$setViewValue(e), l.$render();
      }), s("ngDisabled", "tabindex", { "true": "-1", "false": r.tabindex }), t.expectWithText(d, "aria-label"), e.link.pre(a, { on: angular.noop, 0: {} }, r, [l]), d.on("click", m).on("keypress", u).on("focus", function () {
        "keyboard" === o.getLastInteractionType() && d.addClass("md-focused");
      }).on("blur", function () {
        d.removeClass("md-focused");
      }), l.$render = p;
    }return d.$set("tabindex", d.tabindex || "0"), d.$set("type", "checkbox"), d.$set("role", d.type), { pre: function pre(e, t) {
        t.on("click", function (e) {
          this.hasAttribute("disabled") && e.stopImmediatePropagation();
        });
      }, post: r };
  }return e = e[0], { restrict: "E", transclude: !0, require: "?ngModel", priority: n.BEFORE_NG_ARIA, template: '<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>', compile: a };
}goog.provide("ngmaterial.components.checkbox"), goog.require("ngmaterial.core"), MdCheckboxDirective.$inject = ["inputDirective", "$mdAria", "$mdConstant", "$mdTheming", "$mdUtil", "$mdInteraction"], angular.module("material.components.checkbox", ["material.core"]).directive("mdCheckbox", MdCheckboxDirective), ngmaterial.components.checkbox = angular.module("material.components.checkbox");

//# sourceMappingURL=checkbox.min-compiled.js.map