"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (e, t, i) {
  "use strict";
  function n(e, i, n, d, r) {
    return { restrict: "E", replace: !0, transclude: !0, template: '<div class="md-subheader _md">  <div class="md-subheader-inner">    <div class="md-subheader-content"></div>  </div></div>', link: function link(a, c, s, m, u) {
        function o(e) {
          return t.element(e[0].querySelector(".md-subheader-content"));
        }n(c), c.addClass("_md"), d.prefixer().removeAttribute(c, "ng-repeat");var l = c[0].outerHTML;s.$set("role", "heading"), r.expect(c, "aria-level", "2"), u(a, function (e) {
          o(c).append(e);
        }), c.hasClass("md-no-sticky") || u(a, function (t) {
          var n = i('<div class="md-subheader-wrapper" aria-hidden="true">' + l + "</div>")(a);d.nextTick(function () {
            o(n).append(t);
          }), e(a, c, n);
        });
      } };
  }n.$inject = ["$mdSticky", "$compile", "$mdTheming", "$mdUtil", "$mdAria"], t.module("material.components.subheader", ["material.core", "material.components.sticky"]).directive("mdSubheader", n);
}(window, window.angular);

//# sourceMappingURL=subheader.min-compiled.js.map