"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function MdDividerDirective(e) {
  return { restrict: "E", link: e };
}goog.provide("ngmaterial.components.divider"), goog.require("ngmaterial.core"), MdDividerDirective.$inject = ["$mdTheming"], angular.module("material.components.divider", ["material.core"]).directive("mdDivider", MdDividerDirective), ngmaterial.components.divider = angular.module("material.components.divider");

//# sourceMappingURL=divider.min-compiled.js.map