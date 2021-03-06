"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function MdSubheaderDirective(e, r, a, i, t) {
  return { restrict: "E", replace: !0, transclude: !0, template: '<div class="md-subheader _md">  <div class="md-subheader-inner">    <div class="md-subheader-content"></div>  </div></div>', link: function link(n, d, o, c, m) {
      function s(e) {
        return angular.element(e[0].querySelector(".md-subheader-content"));
      }a(d), d.addClass("_md"), i.prefixer().removeAttribute(d, "ng-repeat");var u = d[0].outerHTML;o.$set("role", "heading"), t.expect(d, "aria-level", "2"), m(n, function (e) {
        s(d).append(e);
      }), d.hasClass("md-no-sticky") || m(n, function (a) {
        var t = r('<div class="md-subheader-wrapper" aria-hidden="true">' + u + "</div>")(n);i.nextTick(function () {
          s(t).append(a);
        }), e(n, d, t);
      });
    } };
}goog.provide("ngmaterial.components.subheader"), goog.require("ngmaterial.components.sticky"), goog.require("ngmaterial.core"), MdSubheaderDirective.$inject = ["$mdSticky", "$compile", "$mdTheming", "$mdUtil", "$mdAria"], angular.module("material.components.subheader", ["material.core", "material.components.sticky"]).directive("mdSubheader", MdSubheaderDirective), ngmaterial.components.subheader = angular.module("material.components.subheader");

//# sourceMappingURL=subheader.min-compiled.js.map