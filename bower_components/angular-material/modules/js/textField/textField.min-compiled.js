"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.9.0-rc1-master-3c0ce9b
 */
!function () {
  "use strict";
  function t(t, e, n, i) {
    return { restrict: "E", replace: !0, scope: { fid: "@?mdFid", label: "@?", value: "=ngModel" }, compile: function compile(a, r) {
        return i.warn("<md-text-float> is deprecated. Please use `<md-input-container>` and `<input>`.More information at http://material.angularjs.org/#/api/material.components.input/directive/mdInputContainer"), angular.isUndefined(r.mdFid) && (r.mdFid = e.nextUid()), { pre: function pre(t, e, i) {
            var a = n(i.ngDisabled);t.isDisabled = function () {
              return a(t.$parent);
            }, t.inputType = i.type || "text";
          }, post: t };
      }, template: '<md-input-group tabindex="-1"> <label for="{{fid}}" >{{label}}</label> <md-input id="{{fid}}" ng-disabled="isDisabled()" ng-model="value" type="{{inputType}}"></md-input></md-input-group>' };
  }function e(t) {
    return { restrict: "CE", controller: ["$element", function (e) {
        t.warn("<md-input-group> is deprecated. Please use `<md-input-container>` and `<input>`.More information at http://material.angularjs.org/#/api/material.components.input/directive/mdInputContainer"), this.setFocused = function (t) {
          e.toggleClass("md-input-focused", !!t);
        }, this.setHasValue = function (t) {
          e.toggleClass("md-input-has-value", t);
        };
      }] };
  }function n(t, e) {
    return { restrict: "E", replace: !0, template: "<input >", require: ["^?mdInputGroup", "?ngModel"], link: function link(t, n, i, a) {
        function r(t) {
          return t = angular.isUndefined(t) ? n.val() : t, angular.isDefined(t) && null !== t && "" !== t.toString().trim();
        }if (a[0]) {
          e.warn("<md-input> is deprecated. Please use `<md-input-container>` and `<input>`.More information at http://material.angularjs.org/#/api/material.components.input/directive/mdInputContainer");var u = a[0],
              o = a[1];t.$watch(t.isDisabled, function (t) {
            n.attr("aria-disabled", !!t), n.attr("tabindex", !!t);
          }), n.attr("type", i.type || n.parent().attr("type") || "text"), o && o.$formatters.push(function (t) {
            return u.setHasValue(r(t)), t;
          }), n.on("input", function () {
            u.setHasValue(r());
          }).on("focus", function (t) {
            u.setFocused(!0);
          }).on("blur", function (t) {
            u.setFocused(!1), u.setHasValue(r());
          }), t.$on("$destroy", function () {
            u.setFocused(!1), u.setHasValue(!1);
          });
        }
      } };
  }angular.module("material.components.textField", ["material.core"]).directive("mdInputGroup", e).directive("mdInput", n).directive("mdTextFloat", t), t.$inject = ["$mdTheming", "$mdUtil", "$parse", "$log"], e.$inject = ["$log"], n.$inject = ["$mdUtil", "$log"];
}();

//# sourceMappingURL=textField.min-compiled.js.map