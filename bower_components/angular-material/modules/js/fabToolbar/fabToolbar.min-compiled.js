"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (t, e, o) {
  "use strict";
  !function () {
    function o() {
      function t(t, e, o) {
        e.addClass("md-fab-toolbar"), e.find("md-fab-trigger").find("button").prepend('<div class="md-fab-toolbar-background"></div>');
      }return { restrict: "E", transclude: !0, template: '<div class="md-fab-toolbar-wrapper">  <div class="md-fab-toolbar-content" ng-transclude></div></div>', scope: { direction: "@?mdDirection", isOpen: "=?mdOpen" }, bindToController: !0, controller: "MdFabController", controllerAs: "vm", link: t };
    }function n() {
      function o(o, n, r) {
        if (n) {
          var a = o[0],
              l = o.controller("mdFabToolbar"),
              i = a.querySelector(".md-fab-toolbar-background"),
              s = a.querySelector("md-fab-trigger button"),
              d = a.querySelector("md-toolbar"),
              c = a.querySelector("md-fab-trigger button md-icon"),
              f = o.find("md-fab-actions").children();if (s && i) {
            var m = t.getComputedStyle(s).getPropertyValue("background-color"),
                b = a.offsetWidth,
                u = (a.offsetHeight, 2 * (b / s.offsetWidth));i.style.backgroundColor = m, i.style.borderRadius = b + "px", l.isOpen ? (d.style.pointerEvents = "inherit", i.style.width = s.offsetWidth + "px", i.style.height = s.offsetHeight + "px", i.style.transform = "scale(" + u + ")", i.style.transitionDelay = "0ms", c && (c.style.transitionDelay = ".3s"), e.forEach(f, function (t, e) {
              t.style.transitionDelay = 25 * (f.length - e) + "ms";
            })) : (d.style.pointerEvents = "none", i.style.transform = "scale(1)", i.style.top = "0", o.hasClass("md-right") && (i.style.left = "0", i.style.right = null), o.hasClass("md-left") && (i.style.right = "0", i.style.left = null), i.style.transitionDelay = "200ms", c && (c.style.transitionDelay = "0ms"), e.forEach(f, function (t, e) {
              t.style.transitionDelay = 200 + 25 * e + "ms";
            }));
          }
        }
      }return { addClass: function addClass(t, e, n) {
          o(t, e, n), n();
        }, removeClass: function removeClass(t, e, n) {
          o(t, e, n), n();
        } };
    }e.module("material.components.fabToolbar", ["material.core", "material.components.fabShared", "material.components.fabActions"]).directive("mdFabToolbar", o).animation(".md-fab-toolbar", n).service("mdFabToolbarAnimation", n);
  }();
}(window, window.angular);

//# sourceMappingURL=fabToolbar.min-compiled.js.map