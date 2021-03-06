"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (e, n, t) {
  "use strict";
  function o(e, o, r, i) {
    function s(e, t) {
      var i = function i() {
        return !1;
      },
          s = function s() {
        return r.when(o.supplant(c, [t || ""]));
      };return n.extend({ isLockedOpen: i, isOpen: i, toggle: s, open: s, close: s, onClose: n.noop, then: function then(e) {
          return l(t).then(e || n.noop);
        } }, e);
    }function d(n, r) {
      var s = e.get(n);return s || r ? s : (i.error(o.supplant(c, [n || ""])), t);
    }function l(n) {
      return e.when(n)["catch"](i.error);
    }var c = "SideNav '{0}' is not available! Did you use md-component-id='{0}'?",
        a = { find: d, waitFor: l };return function (e, t) {
      if (n.isUndefined(e)) return a;var o = t === !0,
          r = a.find(e, o);return !r && o ? a.waitFor(e) : !r && n.isUndefined(t) ? s(a, e) : r;
    };
  }function r() {
    return { restrict: "A", require: "^mdSidenav", link: function link(e, n, t, o) {} };
  }function i(e, o, r, i, s, d, l, c, a, u, p, m, f) {
    function $(l, $, g, v) {
      function h(e, n) {
        l.isLockedOpen = e, e === n ? $.toggleClass("md-locked-open", !!e) : d[e ? "addClass" : "removeClass"]($, "md-locked-open"), T && T.toggleClass("md-locked-open", !!e);
      }function y(e) {
        var n = o.findFocusTarget($) || o.findFocusTarget($, "[md-sidenav-focus]") || $,
            t = $.parent();t[e ? "on" : "off"]("keydown", b), T && T[e ? "on" : "off"]("click", k);var r = C(t, e);return e && (q = p[0].activeElement, D = s.getLastInteractionType()), O(e), x = u.all([e && T ? d.enter(T, t) : T ? d.leave(T) : u.when(!0), d[e ? "removeClass" : "addClass"]($, "md-closed")]).then(function () {
          l.isOpen && (f(function () {
            L.triggerHandler("resize");
          }), n && n.focus()), r && r();
        });
      }function C(e, n) {
        var t = $[0],
            o = e[0].scrollTop;if (n && o) {
          F = { top: t.style.top, bottom: t.style.bottom, height: t.style.height };var r = { top: o + "px", bottom: "auto", height: e[0].clientHeight + "px" };$.css(r), T.css(r);
        }if (!n && F) return function () {
          t.style.top = F.top, t.style.bottom = F.bottom, t.style.height = F.height, T[0].style.top = null, T[0].style.bottom = null, T[0].style.height = null, F = null;
        };
      }function O(e) {
        e && !S ? (S = I.css("overflow"), I.css("overflow", "hidden")) : n.isDefined(S) && (I.css("overflow", S), S = t);
      }function w(e) {
        return l.isOpen == e ? u.when(!0) : (l.isOpen && v.onCloseCb && v.onCloseCb(), u(function (n) {
          l.isOpen = e, o.nextTick(function () {
            x.then(function (e) {
              !l.isOpen && q && "keyboard" === D && (q.focus(), q = null), n(e);
            });
          });
        }));
      }function b(e) {
        var n = e.keyCode === r.KEY_CODE.ESCAPE;return n ? k(e) : u.when(!0);
      }function k(e) {
        return e.preventDefault(), v.close();
      }var S,
          T,
          D,
          F,
          I = null,
          q = null,
          x = u.when(!0),
          E = c(g.mdIsLockedOpen),
          L = n.element(m),
          U = function U() {
        return E(l.$parent, { $media: function $media(n) {
            return a.warn("$media is deprecated for is-locked-open. Use $mdMedia instead."), e(n);
          }, $mdMedia: e });
      };g.mdDisableScrollTarget && (I = p[0].querySelector(g.mdDisableScrollTarget), I ? I = n.element(I) : a.warn(o.supplant('mdSidenav: couldn\'t find element matching selector "{selector}". Falling back to parent.', { selector: g.mdDisableScrollTarget }))), I || (I = $.parent()), g.hasOwnProperty("mdDisableBackdrop") || (T = o.createBackdrop(l, "md-sidenav-backdrop md-opaque ng-enter")), $.addClass("_md"), i($), T && i.inherit(T, $), $.on("$destroy", function () {
        T && T.remove(), v.destroy();
      }), l.$on("$destroy", function () {
        T && T.remove();
      }), l.$watch(U, h), l.$watch("isOpen", y), v.$toggleOpen = w;
    }return { restrict: "E", scope: { isOpen: "=?mdIsOpen" }, controller: "$mdSidenavController", compile: function compile(e) {
        return e.addClass("md-closed").attr("tabIndex", "-1"), $;
      } };
  }function s(e, n, t, o, r) {
    var i = this;i.isOpen = function () {
      return !!e.isOpen;
    }, i.isLockedOpen = function () {
      return !!e.isLockedOpen;
    }, i.onClose = function (e) {
      return i.onCloseCb = e, i;
    }, i.open = function () {
      return i.$toggleOpen(!0);
    }, i.close = function () {
      return i.$toggleOpen(!1);
    }, i.toggle = function () {
      return i.$toggleOpen(!e.isOpen);
    }, i.$toggleOpen = function (n) {
      return o.when(e.isOpen = n);
    };var s = n.mdComponentId,
        d = s && s.indexOf(r.startSymbol()) > -1,
        l = d ? r(s)(e.$parent) : s;i.destroy = t.register(i, l), d && n.$observe("mdComponentId", function (e) {
      e && e !== i.$$mdHandle && (i.destroy(), i.destroy = t.register(i, e));
    });
  }o.$inject = ["$mdComponentRegistry", "$mdUtil", "$q", "$log"], i.$inject = ["$mdMedia", "$mdUtil", "$mdConstant", "$mdTheming", "$mdInteraction", "$animate", "$compile", "$parse", "$log", "$q", "$document", "$window", "$$rAF"], s.$inject = ["$scope", "$attrs", "$mdComponentRegistry", "$q", "$interpolate"], n.module("material.components.sidenav", ["material.core", "material.components.backdrop"]).factory("$mdSidenav", o).directive("mdSidenav", i).directive("mdSidenavFocus", r).controller("$mdSidenavController", s);
}(window, window.angular);

//# sourceMappingURL=sidenav.min-compiled.js.map