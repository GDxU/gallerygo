"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (n, t, e) {
  "use strict";
  function i(n) {
    return { restrict: "E", link: function link(t, e) {
        n(e);
      } };
  }function o(n, e, i, o) {
    function a(n) {
      return t.isDefined(n.href) || t.isDefined(n.ngHref) || t.isDefined(n.ngLink) || t.isDefined(n.uiSref);
    }function r(n, t) {
      if (a(t)) return '<a class="md-button" ng-transclude></a>';var e = "undefined" == typeof t.type ? "button" : t.type;return '<button class="md-button" type="' + e + '" ng-transclude></button>';
    }function u(r, u, d) {
      e(u), n.attach(r, u), i.expectWithoutText(u, "aria-label"), a(d) && t.isDefined(d.ngDisabled) && r.$watch(d.ngDisabled, function (n) {
        u.attr("tabindex", n ? -1 : 0);
      }), u.on("click", function (n) {
        d.disabled === !0 && (n.preventDefault(), n.stopImmediatePropagation());
      }), u.hasClass("md-no-focus") || (u.on("focus", function () {
        o.isUserInvoked() && "keyboard" !== o.getLastInteractionType() || u.addClass("md-focused");
      }), u.on("blur", function () {
        u.removeClass("md-focused");
      }));
    }return { restrict: "EA", replace: !0, transclude: !0, template: r, link: u };
  }o.$inject = ["$mdButtonInkRipple", "$mdTheming", "$mdAria", "$mdInteraction"], i.$inject = ["$mdTheming"], t.module("material.components.button", ["material.core"]).directive("mdButton", o).directive("a", i);
}(window, window.angular);

//# sourceMappingURL=button.min-compiled.js.map