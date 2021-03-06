"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function MdAnchorDirective(t) {
  return { restrict: "E", link: function link(n, e) {
      t(e);
    } };
}function MdButtonDirective(t, n, e, i) {
  function a(t) {
    return angular.isDefined(t.href) || angular.isDefined(t.ngHref) || angular.isDefined(t.ngLink) || angular.isDefined(t.uiSref);
  }function o(t, n) {
    if (a(n)) return '<a class="md-button" ng-transclude></a>';var e = "undefined" == typeof n.type ? "button" : n.type;return '<button class="md-button" type="' + e + '" ng-transclude></button>';
  }function r(o, r, u) {
    n(r), t.attach(o, r), e.expectWithoutText(r, "aria-label"), a(u) && angular.isDefined(u.ngDisabled) && o.$watch(u.ngDisabled, function (t) {
      r.attr("tabindex", t ? -1 : 0);
    }), r.on("click", function (t) {
      u.disabled === !0 && (t.preventDefault(), t.stopImmediatePropagation());
    }), r.hasClass("md-no-focus") || (r.on("focus", function () {
      i.isUserInvoked() && "keyboard" !== i.getLastInteractionType() || r.addClass("md-focused");
    }), r.on("blur", function () {
      r.removeClass("md-focused");
    }));
  }return { restrict: "EA", replace: !0, transclude: !0, template: o, link: r };
}goog.provide("ngmaterial.components.button"), goog.require("ngmaterial.core"), MdButtonDirective.$inject = ["$mdButtonInkRipple", "$mdTheming", "$mdAria", "$mdInteraction"], MdAnchorDirective.$inject = ["$mdTheming"], angular.module("material.components.button", ["material.core"]).directive("mdButton", MdButtonDirective).directive("a", MdAnchorDirective), ngmaterial.components.button = angular.module("material.components.button");

//# sourceMappingURL=button.min-compiled.js.map