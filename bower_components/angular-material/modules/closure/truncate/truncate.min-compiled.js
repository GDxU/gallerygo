"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function MdTruncateDirective() {
  return { restrict: "AE", controller: MdTruncateController, controllerAs: "$ctrl", bindToController: !0 };
}function MdTruncateController(e) {
  e.addClass("md-truncate");
}goog.provide("ngmaterial.components.truncate"), goog.require("ngmaterial.core"), MdTruncateController.$inject = ["$element"], angular.module("material.components.truncate", ["material.core"]).directive("mdTruncate", MdTruncateDirective), ngmaterial.components.truncate = angular.module("material.components.truncate");

//# sourceMappingURL=truncate.min-compiled.js.map