"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/*! angular-pageslide-directive 2016-09-06 */
!function (a, b) {
  "function" == typeof define && define.amd ? define(["angular"], b) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = b(require("angular")) : b(a.angular);
}(undefined, function (a) {
  a.module("pageslide-directive", []).directive("pageslide", ["$document", "$timeout", function (b, c) {
    return { restrict: "EA", transclude: !1, scope: { psOpen: "=?", psAutoClose: "@", psSide: "@", psSpeed: "@", psClass: "@", psSize: "@", psZindex: "@", psPush: "@", psContainer: "@", psKeyListener: "@", psBodyClass: "@", psClickOutside: "@", onopen: "=?", onclose: "=?" }, link: function link(d, e, f) {
        function g(a) {
          r && !p.contains(a.target) && (r = !1, d.psOpen = !1, d.$apply()), d.psOpen && (r = !0);
        }function h(a) {
          if (n.bodyClass) {
            var b = n.className + "-body",
                c = new RegExp(" " + b + "-closed| " + b + "-open");q.className = q.className.replace(c, ""), q.className += " " + b + "-" + a;
          }
        }function i() {
          d.psOpen ? "function" == typeof d.onopen && d.onopen() : "function" == typeof d.onclose && d.onclose();
        }function j() {
          switch (n.side) {case "right":
              p.style.width = n.size, p.style.height = "100%", p.style.top = "0px", p.style.bottom = "0px", p.style.right = "0px";break;case "left":
              p.style.width = n.size, p.style.height = "100%", p.style.top = "0px", p.style.bottom = "0px", p.style.left = "0px";break;case "top":
              p.style.height = n.size, p.style.width = "100%", p.style.left = "0px", p.style.top = "0px", p.style.right = "0px";break;case "bottom":
              p.style.height = n.size, p.style.width = "100%", p.style.bottom = "0px", p.style.left = "0px", p.style.right = "0px";}
        }function k(a, c) {
          switch (c.side) {case "right":
              a.style.right = "-" + c.size, c.push && (q.style.right = "0px", q.style.left = "0px");break;case "left":
              a.style.left = "-" + c.size, c.push && (q.style.left = "0px", q.style.right = "0px");break;case "top":
              a.style.top = "-" + c.size, c.push && (q.style.top = "0px", q.style.bottom = "0px");break;case "bottom":
              a.style.bottom = "-" + c.size, c.push && (q.style.bottom = "0px", q.style.top = "0px");}c.keyListener && b.off("keydown", m), c.clickOutside && b.off("touchend click", g), r = !1, h("closed"), d.psOpen = !1;
        }function l(a, c) {
          switch (c.side) {case "right":
              a.style.right = "0px", c.push && (q.style.right = c.size, q.style.left = "-" + c.size);break;case "left":
              a.style.left = "0px", c.push && (q.style.left = c.size, q.style.right = "-" + c.size);break;case "top":
              a.style.top = "0px", c.push && (q.style.top = c.size, q.style.bottom = "-" + c.size);break;case "bottom":
              a.style.bottom = "0px", c.push && (q.style.bottom = c.size, q.style.top = "-" + c.size);}d.psOpen = !0, c.keyListener && b.on("keydown", m), c.clickOutside && b.on("touchend click", g), h("open");
        }function m(a) {
          var b = 27,
              e = a.keyCode || a.which;e === b && (k(p, n), c(function () {
            d.$apply();
          }));
        }var n = {};n.side = d.psSide || "right", n.speed = d.psSpeed || "0.5", n.size = d.psSize || "300px", n.zindex = d.psZindex || 1e3, n.className = d.psClass || "ng-pageslide", n.push = "true" === d.psPush, n.container = d.psContainer || !1, n.keyListener = "true" === d.psKeyListener, n.bodyClass = d.psBodyClass || !1, n.clickOutside = "false" !== d.psClickOutside, n.push = n.push && !n.container, e.addClass(n.className);var o,
            p,
            q,
            r = !1;if (q = n.container ? document.getElementById(n.container) : document.body, h("closed"), p = e[0], "div" !== p.tagName.toLowerCase() && "pageslide" !== p.tagName.toLowerCase()) throw new Error("Pageslide can only be applied to <div> or <pageslide> elements");if (0 === p.children.length) throw new Error("You need to have content inside the <pageslide>");o = a.element(p.children), q.appendChild(p), p.style.zIndex = n.zindex, p.style.position = "fixed", p.style.transitionDuration = n.speed + "s", p.style.webkitTransitionDuration = n.speed + "s", p.style.height = n.size, p.style.transitionProperty = "top, bottom, left, right", n.push && (q.style.position = "absolute", q.style.transitionDuration = n.speed + "s", q.style.webkitTransitionDuration = n.speed + "s", q.style.transitionProperty = "top, bottom, left, right"), n.container && (p.style.position = "absolute", q.style.position = "relative", q.style.overflow = "hidden"), p.addEventListener("transitionend", i), j(), d.$watch("psOpen", function (a) {
          a ? l(p, n) : k(p, n);
        }), d.$watch("psSize", function (a, b) {
          b !== a && (n.size = a, j());
        }), d.$on("$destroy", function () {
          p.parentNode === q && (n.clickOutside && b.off("touchend click", g), q.removeChild(p)), p.removeEventListener("transitionend", i);
        }), d.psAutoClose && (d.$on("$locationChangeStart", function () {
          k(p, n);
        }), d.$on("$stateChangeStart", function () {
          k(p, n);
        }));
      } };
  }]);
});

//# sourceMappingURL=angular-pageslide-directive.min-compiled.js.map