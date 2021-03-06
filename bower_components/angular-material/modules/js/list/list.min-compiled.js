"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (e, t, n) {
  "use strict";
  function r(e) {
    return { restrict: "E", compile: function compile(t) {
        return t[0].setAttribute("role", "list"), e;
      } };
  }function i(e, n, r, i) {
    var a = ["md-checkbox", "md-switch", "md-menu"];return { restrict: "E", controller: "MdListController", compile: function compile(o, s) {
        function c() {
          for (var e, t, n = ["md-switch", "md-checkbox"], r = 0; t = n[r]; ++r) {
            if ((e = o.find(t)[0]) && !e.hasAttribute("aria-label")) {
              var i = o.find("p")[0];if (!i) return;e.setAttribute("aria-label", "Toggle " + i.textContent);
            }
          }
        }function d() {
          var e = t.element(C),
              n = e.parent().hasClass("md-secondary-container") || C.parentNode.firstElementChild !== C,
              r = "left";n && (r = "right"), e.attr("md-position-mode") || e.attr("md-position-mode", r + " target");var i = e.children().eq(0);g(i[0]) || i.attr("ng-click", "$mdMenu.open($event)"), i.attr("aria-label") || i.attr("aria-label", "Open List Menu");
        }function l(n) {
          if ("div" == n) A = t.element('<div class="md-no-style md-list-item-inner">'), A.append(o.contents()), o.addClass("md-proxy-focus");else {
            A = t.element('<div class="md-button md-no-style">   <div class="md-list-item-inner"></div></div>');var r = t.element('<md-button class="md-no-style"></md-button>');e.expectWithText(o, "aria-label"), f(o[0], r[0]), o.hasClass("md-no-focus") && r.addClass("md-no-focus"), A.prepend(r), A.children().eq(1).append(o.contents()), o.addClass("_md-button-wrap");
          }o[0].setAttribute("tabindex", "-1"), o.append(A);
        }function m() {
          var e = t.element('<div class="md-secondary-container">');t.forEach(y, function (t) {
            u(t, e);
          }), A.append(e);
        }function u(n, r) {
          if (n && !h(n) && n.hasAttribute("ng-click")) {
            e.expect(n, "aria-label");var i = t.element('<md-button class="md-secondary md-icon-button">');f(n, i[0], ["ng-if", "ng-hide", "ng-show"]), n.setAttribute("tabindex", "-1"), i.append(n), n = i[0];
          }n && (!g(n) || !s.ngClick && p(n)) && t.element(n).removeClass("md-secondary"), o.addClass("md-with-secondary"), r.append(n);
        }function f(e, n, i) {
          var a = r.prefixer(["ng-if", "ng-click", "ng-dblclick", "aria-label", "ng-disabled", "ui-sref", "href", "ng-href", "target", "ng-attr-ui-sref", "ui-sref-opts"]);i && (a = a.concat(r.prefixer(i))), t.forEach(a, function (t) {
            e.hasAttribute(t) && (n.setAttribute(t, e.getAttribute(t)), e.removeAttribute(t));
          });
        }function p(e) {
          return a.indexOf(e.nodeName.toLowerCase()) != -1;
        }function h(e) {
          var t = e.nodeName.toUpperCase();return "MD-BUTTON" == t || "BUTTON" == t;
        }function g(e) {
          for (var t = e.attributes, n = 0; n < t.length; n++) {
            if ("ngClick" === s.$normalize(t[n].name)) return !0;
          }return !1;
        }function v(e, o, s, c) {
          function d() {
            f && f.children && !v && !b && t.forEach(a, function (e) {
              t.forEach(f.querySelectorAll(e + ":not(.md-secondary)"), function (e) {
                u.push(e);
              });
            });
          }function l() {
            (1 == u.length || v) && (o.addClass("md-clickable"), v || c.attachRipple(e, t.element(o[0].querySelector(".md-no-style"))));
          }function m(e) {
            var t = ["md-slider"];if (!e.path) return t.indexOf(e.target.tagName.toLowerCase()) !== -1;for (var n = e.path.indexOf(o.children()[0]), r = 0; r < n; r++) {
              if (t.indexOf(e.path[r].tagName.toLowerCase()) !== -1) return !0;
            }
          }o.addClass("_md");var u = [],
              f = o[0].firstElementChild,
              p = o.hasClass("_md-button-wrap"),
              h = p ? f.firstElementChild : f,
              v = h && g(h),
              b = o.hasClass("md-no-proxy");d(), l(), u.length && t.forEach(u, function (n) {
            n = t.element(n), e.mouseActive = !1, n.on("mousedown", function () {
              e.mouseActive = !0, i(function () {
                e.mouseActive = !1;
              }, 100);
            }).on("focus", function () {
              e.mouseActive === !1 && o.addClass("md-focused"), n.on("blur", function t() {
                o.removeClass("md-focused"), n.off("blur", t);
              });
            });
          });var C = function C(e) {
            if ("INPUT" != e.target.nodeName && "TEXTAREA" != e.target.nodeName && !e.target.isContentEditable) {
              var t = e.which || e.keyCode;t == n.KEY_CODE.SPACE && h && (h.click(), e.preventDefault(), e.stopPropagation());
            }
          };v || u.length || h && h.addEventListener("keypress", C), o.off("click"), o.off("keypress"), 1 == u.length && h && o.children().eq(0).on("click", function (e) {
            if (!m(e)) {
              var n = r.getClosest(e.target, "BUTTON");!n && h.contains(e.target) && t.forEach(u, function (n) {
                e.target === n || n.contains(e.target) || ("MD-MENU" === n.nodeName && (n = n.children[0]), t.element(n).triggerHandler("click"));
              });
            }
          }), e.$on("$destroy", function () {
            h && h.removeEventListener("keypress", C);
          });
        }var b,
            C,
            y = o[0].querySelectorAll(".md-secondary"),
            A = o;if (o[0].setAttribute("role", "listitem"), s.ngClick || s.ngDblclick || s.ngHref || s.href || s.uiSref || s.ngAttrUiSref) l("button");else if (!o.hasClass("md-no-proxy")) {
          for (var k, E = 0; k = a[E]; ++E) {
            if (C = o[0].querySelector(k)) {
              b = !0;break;
            }
          }b ? l("div") : o.addClass("md-no-proxy");
        }return m(), c(), b && "MD-MENU" === C.nodeName && d(), v;
      } };
  }function a(e, t, n) {
    function r(e, t) {
      var r = {};n.attach(e, t, r);
    }var i = this;i.attachRipple = r;
  }a.$inject = ["$scope", "$element", "$mdListInkRipple"], r.$inject = ["$mdTheming"], i.$inject = ["$mdAria", "$mdConstant", "$mdUtil", "$timeout"], t.module("material.components.list", ["material.core"]).controller("MdListController", a).directive("mdList", r).directive("mdListItem", i);
}(window, window.angular);

//# sourceMappingURL=list.min-compiled.js.map