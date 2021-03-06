"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function mdListDirective(e) {
  return { restrict: "E", compile: function compile(t) {
      return t[0].setAttribute("role", "list"), e;
    } };
}function mdListItemDirective(e, t, n, r) {
  var a = ["md-checkbox", "md-switch", "md-menu"];return { restrict: "E", controller: "MdListController", compile: function compile(i, o) {
      function l() {
        for (var e, t, n = ["md-switch", "md-checkbox"], r = 0; t = n[r]; ++r) {
          if ((e = i.find(t)[0]) && !e.hasAttribute("aria-label")) {
            var a = i.find("p")[0];if (!a) return;e.setAttribute("aria-label", "Toggle " + a.textContent);
          }
        }
      }function s() {
        var e = angular.element(b),
            t = e.parent().hasClass("md-secondary-container") || b.parentNode.firstElementChild !== b,
            n = "left";t && (n = "right"), e.attr("md-position-mode") || e.attr("md-position-mode", n + " target");var r = e.children().eq(0);p(r[0]) || r.attr("ng-click", "$mdMenu.open($event)"), r.attr("aria-label") || r.attr("aria-label", "Open List Menu");
      }function d(t) {
        if ("div" == t) y = angular.element('<div class="md-no-style md-list-item-inner">'), y.append(i.contents()), i.addClass("md-proxy-focus");else {
          y = angular.element('<div class="md-button md-no-style">   <div class="md-list-item-inner"></div></div>');var n = angular.element('<md-button class="md-no-style"></md-button>');e.expectWithText(i, "aria-label"), u(i[0], n[0]), i.hasClass("md-no-focus") && n.addClass("md-no-focus"), y.prepend(n), y.children().eq(1).append(i.contents()), i.addClass("_md-button-wrap");
        }i[0].setAttribute("tabindex", "-1"), i.append(y);
      }function c() {
        var e = angular.element('<div class="md-secondary-container">');angular.forEach(C, function (t) {
          m(t, e);
        }), y.append(e);
      }function m(t, n) {
        if (t && !g(t) && t.hasAttribute("ng-click")) {
          e.expect(t, "aria-label");var r = angular.element('<md-button class="md-secondary md-icon-button">');u(t, r[0], ["ng-if", "ng-hide", "ng-show"]), t.setAttribute("tabindex", "-1"), r.append(t), t = r[0];
        }t && (!p(t) || !o.ngClick && f(t)) && angular.element(t).removeClass("md-secondary"), i.addClass("md-with-secondary"), n.append(t);
      }function u(e, t, r) {
        var a = n.prefixer(["ng-if", "ng-click", "ng-dblclick", "aria-label", "ng-disabled", "ui-sref", "href", "ng-href", "target", "ng-attr-ui-sref", "ui-sref-opts"]);r && (a = a.concat(n.prefixer(r))), angular.forEach(a, function (n) {
          e.hasAttribute(n) && (t.setAttribute(n, e.getAttribute(n)), e.removeAttribute(n));
        });
      }function f(e) {
        return a.indexOf(e.nodeName.toLowerCase()) != -1;
      }function g(e) {
        var t = e.nodeName.toUpperCase();return "MD-BUTTON" == t || "BUTTON" == t;
      }function p(e) {
        for (var t = e.attributes, n = 0; n < t.length; n++) {
          if ("ngClick" === o.$normalize(t[n].name)) return !0;
        }return !1;
      }function h(e, i, o, l) {
        function s() {
          u && u.children && !h && !v && angular.forEach(a, function (e) {
            angular.forEach(u.querySelectorAll(e + ":not(.md-secondary)"), function (e) {
              m.push(e);
            });
          });
        }function d() {
          (1 == m.length || h) && (i.addClass("md-clickable"), h || l.attachRipple(e, angular.element(i[0].querySelector(".md-no-style"))));
        }function c(e) {
          var t = ["md-slider"];if (!e.path) return t.indexOf(e.target.tagName.toLowerCase()) !== -1;for (var n = e.path.indexOf(i.children()[0]), r = 0; r < n; r++) {
            if (t.indexOf(e.path[r].tagName.toLowerCase()) !== -1) return !0;
          }
        }i.addClass("_md");var m = [],
            u = i[0].firstElementChild,
            f = i.hasClass("_md-button-wrap"),
            g = f ? u.firstElementChild : u,
            h = g && p(g),
            v = i.hasClass("md-no-proxy");s(), d(), m.length && angular.forEach(m, function (t) {
          t = angular.element(t), e.mouseActive = !1, t.on("mousedown", function () {
            e.mouseActive = !0, r(function () {
              e.mouseActive = !1;
            }, 100);
          }).on("focus", function () {
            e.mouseActive === !1 && i.addClass("md-focused"), t.on("blur", function n() {
              i.removeClass("md-focused"), t.off("blur", n);
            });
          });
        });var b = function b(e) {
          if ("INPUT" != e.target.nodeName && "TEXTAREA" != e.target.nodeName && !e.target.isContentEditable) {
            var n = e.which || e.keyCode;n == t.KEY_CODE.SPACE && g && (g.click(), e.preventDefault(), e.stopPropagation());
          }
        };h || m.length || g && g.addEventListener("keypress", b), i.off("click"), i.off("keypress"), 1 == m.length && g && i.children().eq(0).on("click", function (e) {
          if (!c(e)) {
            var t = n.getClosest(e.target, "BUTTON");!t && g.contains(e.target) && angular.forEach(m, function (t) {
              e.target === t || t.contains(e.target) || ("MD-MENU" === t.nodeName && (t = t.children[0]), angular.element(t).triggerHandler("click"));
            });
          }
        }), e.$on("$destroy", function () {
          g && g.removeEventListener("keypress", b);
        });
      }var v,
          b,
          C = i[0].querySelectorAll(".md-secondary"),
          y = i;if (i[0].setAttribute("role", "listitem"), o.ngClick || o.ngDblclick || o.ngHref || o.href || o.uiSref || o.ngAttrUiSref) d("button");else if (!i.hasClass("md-no-proxy")) {
        for (var A, k = 0; A = a[k]; ++k) {
          if (b = i[0].querySelector(A)) {
            v = !0;break;
          }
        }v ? d("div") : i.addClass("md-no-proxy");
      }return c(), l(), v && "MD-MENU" === b.nodeName && s(), h;
    } };
}function MdListController(e, t, n) {
  function r(e, t) {
    var r = {};n.attach(e, t, r);
  }var a = this;a.attachRipple = r;
}goog.provide("ngmaterial.components.list"), goog.require("ngmaterial.core"), MdListController.$inject = ["$scope", "$element", "$mdListInkRipple"], mdListDirective.$inject = ["$mdTheming"], mdListItemDirective.$inject = ["$mdAria", "$mdConstant", "$mdUtil", "$timeout"], angular.module("material.components.list", ["material.core"]).controller("MdListController", MdListController).directive("mdList", mdListDirective).directive("mdListItem", mdListItemDirective), ngmaterial.components.list = angular.module("material.components.list");

//# sourceMappingURL=list.min-compiled.js.map