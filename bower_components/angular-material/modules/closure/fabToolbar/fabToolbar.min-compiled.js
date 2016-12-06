"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
goog.provide("ngmaterial.components.fabToolbar"), goog.require("ngmaterial.components.fabActions"), goog.require("ngmaterial.components.fabShared"), goog.require("ngmaterial.core"), function () {
  "use strict";
  function t() {
    function t(t, e, o) {
      e.addClass("md-fab-toolbar"), e.find("md-fab-trigger").find("button").prepend('<div class="md-fab-toolbar-background"></div>');
    }return { restrict: "E", transclude: !0, template: '<div class="md-fab-toolbar-wrapper">  <div class="md-fab-toolbar-content" ng-transclude></div></div>', scope: { direction: "@?mdDirection", isOpen: "=?mdOpen" }, bindToController: !0, controller: "MdFabController", controllerAs: "vm", link: t };
  }function e() {
    function t(t, e, o) {
      if (e) {
        var a = t[0],
            r = t.controller("mdFabToolbar"),
            n = a.querySelector(".md-fab-toolbar-background"),
            l = a.querySelector("md-fab-trigger button"),
            i = a.querySelector("md-toolbar"),
            s = a.querySelector("md-fab-trigger button md-icon"),
            d = t.find("md-fab-actions").children();if (l && n) {
          var c = window.getComputedStyle(l).getPropertyValue("background-color"),
              m = a.offsetWidth,
              f = (a.offsetHeight, 2 * (m / l.offsetWidth));n.style.backgroundColor = c, n.style.borderRadius = m + "px", r.isOpen ? (i.style.pointerEvents = "inherit", n.style.width = l.offsetWidth + "px", n.style.height = l.offsetHeight + "px", n.style.transform = "scale(" + f + ")", n.style.transitionDelay = "0ms", s && (s.style.transitionDelay = ".3s"), angular.forEach(d, function (t, e) {
            t.style.transitionDelay = 25 * (d.length - e) + "ms";
          })) : (i.style.pointerEvents = "none", n.style.transform = "scale(1)", n.style.top = "0", t.hasClass("md-right") && (n.style.left = "0", n.style.right = null), t.hasClass("md-left") && (n.style.right = "0", n.style.left = null), n.style.transitionDelay = "200ms", s && (s.style.transitionDelay = "0ms"), angular.forEach(d, function (t, e) {
            t.style.transitionDelay = 200 + 25 * e + "ms";
          }));
        }
      }
    }return { addClass: function addClass(e, o, a) {
        t(e, o, a), a();
      }, removeClass: function removeClass(e, o, a) {
        t(e, o, a), a();
      } };
  }angular.module("material.components.fabToolbar", ["material.core", "material.components.fabShared", "material.components.fabActions"]).directive("mdFabToolbar", t).animation(".md-fab-toolbar", e).service("mdFabToolbarAnimation", e);
}(), ngmaterial.components.fabToolbar = angular.module("material.components.fabToolbar");

//# sourceMappingURL=fabToolbar.min-compiled.js.map