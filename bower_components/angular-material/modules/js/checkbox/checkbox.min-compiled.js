"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (e, t, n) {
  "use strict";
  function i(e, n, i, a, c, d) {
    function o(o, r) {
      function s(o, r, s, l) {
        function u(e, t, n) {
          s[e] && o.$watch(s[e], function (e) {
            n[e] && r.attr(t, n[e]);
          });
        }function m(e) {
          var t = e.which || e.keyCode;t !== i.KEY_CODE.SPACE && t !== i.KEY_CODE.ENTER || (e.preventDefault(), r.addClass("md-focused"), f(e));
        }function f(e) {
          r[0].hasAttribute("disabled") || o.skipToggle || o.$apply(function () {
            var t = s.ngChecked ? s.checked : !l.$viewValue;l.$setViewValue(t, e && e.type), l.$render();
          });
        }function p() {
          r.toggleClass("md-checked", !!l.$viewValue && !$);
        }function h(e) {
          $ = e !== !1, $ && r.attr("aria-checked", "mixed"), r.toggleClass("md-indeterminate", $);
        }var $;l = l || c.fakeNgModel(), a(r), r.children().on("focus", function () {
          r.focus();
        }), c.parseAttributeBoolean(s.mdIndeterminate) && (h(), o.$watch(s.mdIndeterminate, h)), s.ngChecked && o.$watch(o.$eval.bind(o, s.ngChecked), function (e) {
          l.$setViewValue(e), l.$render();
        }), u("ngDisabled", "tabindex", { "true": "-1", "false": s.tabindex }), n.expectWithText(r, "aria-label"), e.link.pre(o, { on: t.noop, 0: {} }, s, [l]), r.on("click", f).on("keypress", m).on("focus", function () {
          "keyboard" === d.getLastInteractionType() && r.addClass("md-focused");
        }).on("blur", function () {
          r.removeClass("md-focused");
        }), l.$render = p;
      }return r.$set("tabindex", r.tabindex || "0"), r.$set("type", "checkbox"), r.$set("role", r.type), { pre: function pre(e, t) {
          t.on("click", function (e) {
            this.hasAttribute("disabled") && e.stopImmediatePropagation();
          });
        }, post: s };
    }return e = e[0], { restrict: "E", transclude: !0, require: "?ngModel", priority: i.BEFORE_NG_ARIA, template: '<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>', compile: o };
  }i.$inject = ["inputDirective", "$mdAria", "$mdConstant", "$mdTheming", "$mdUtil", "$mdInteraction"], t.module("material.components.checkbox", ["material.core"]).directive("mdCheckbox", i);
}(window, window.angular);

//# sourceMappingURL=checkbox.min-compiled.js.map