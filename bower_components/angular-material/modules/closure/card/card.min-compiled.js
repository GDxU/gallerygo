"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function mdCardDirective(e) {
  return { restrict: "E", link: function link(r, a, i) {
      a.addClass("_md"), e(a);
    } };
}goog.provide("ngmaterial.components.card"), goog.require("ngmaterial.core"), mdCardDirective.$inject = ["$mdTheming"], angular.module("material.components.card", ["material.core"]).directive("mdCard", mdCardDirective), ngmaterial.components.card = angular.module("material.components.card");

//# sourceMappingURL=card.min-compiled.js.map