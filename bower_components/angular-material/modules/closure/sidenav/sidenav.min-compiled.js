"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function SidenavService(e, n, t, o) {
  function r(e, o) {
    var r = function r() {
      return !1;
    },
        i = function i() {
      return t.when(n.supplant(l, [o || ""]));
    };return angular.extend({ isLockedOpen: r, isOpen: r, toggle: i, open: i, close: i, onClose: angular.noop, then: function then(e) {
        return a(o).then(e || angular.noop);
      } }, e);
  }function i(t, r) {
    var i = e.get(t);return i || r ? i : void o.error(n.supplant(l, [t || ""]));
  }function a(n) {
    return e.when(n)["catch"](o.error);
  }var l = "SideNav '{0}' is not available! Did you use md-component-id='{0}'?",
      d = { find: i, waitFor: a };return function (e, n) {
    if (angular.isUndefined(e)) return d;var t = n === !0,
        o = d.find(e, t);return !o && t ? d.waitFor(e) : !o && angular.isUndefined(n) ? r(d, e) : o;
  };
}function SidenavFocusDirective() {
  return { restrict: "A", require: "^mdSidenav", link: function link(e, n, t, o) {} };
}function SidenavDirective(e, n, t, o, r, i, a, l, d, c, s, u, m) {
  function p(a, p, f, g) {
    function v(e, n) {
      a.isLockedOpen = e, e === n ? p.toggleClass("md-locked-open", !!e) : i[e ? "addClass" : "removeClass"](p, "md-locked-open"), k && k.toggleClass("md-locked-open", !!e);
    }function $(e) {
      var t = n.findFocusTarget(p) || n.findFocusTarget(p, "[md-sidenav-focus]") || p,
          o = p.parent();o[e ? "on" : "off"]("keydown", y), k && k[e ? "on" : "off"]("click", O);var l = h(o, e);return e && (T = s[0].activeElement, w = r.getLastInteractionType()), C(e), q = c.all([e && k ? i.enter(k, o) : k ? i.leave(k) : c.when(!0), i[e ? "removeClass" : "addClass"](p, "md-closed")]).then(function () {
        a.isOpen && (m(function () {
          x.triggerHandler("resize");
        }), t && t.focus()), l && l();
      });
    }function h(e, n) {
      var t = p[0],
          o = e[0].scrollTop;if (n && o) {
        D = { top: t.style.top, bottom: t.style.bottom, height: t.style.height };var r = { top: o + "px", bottom: "auto", height: e[0].clientHeight + "px" };p.css(r), k.css(r);
      }if (!n && D) return function () {
        t.style.top = D.top, t.style.bottom = D.bottom, t.style.height = D.height, k[0].style.top = null, k[0].style.bottom = null, k[0].style.height = null, D = null;
      };
    }function C(e) {
      e && !b ? (b = F.css("overflow"), F.css("overflow", "hidden")) : angular.isDefined(b) && (F.css("overflow", b), b = void 0);
    }function S(e) {
      return a.isOpen == e ? c.when(!0) : (a.isOpen && g.onCloseCb && g.onCloseCb(), c(function (t) {
        a.isOpen = e, n.nextTick(function () {
          q.then(function (e) {
            !a.isOpen && T && "keyboard" === w && (T.focus(), T = null), t(e);
          });
        });
      }));
    }function y(e) {
      var n = e.keyCode === t.KEY_CODE.ESCAPE;return n ? O(e) : c.when(!0);
    }function O(e) {
      return e.preventDefault(), g.close();
    }var b,
        k,
        w,
        D,
        F = null,
        T = null,
        q = c.when(!0),
        I = l(f.mdIsLockedOpen),
        x = angular.element(u),
        E = function E() {
      return I(a.$parent, { $media: function $media(n) {
          return d.warn("$media is deprecated for is-locked-open. Use $mdMedia instead."), e(n);
        }, $mdMedia: e });
    };f.mdDisableScrollTarget && (F = s[0].querySelector(f.mdDisableScrollTarget), F ? F = angular.element(F) : d.warn(n.supplant('mdSidenav: couldn\'t find element matching selector "{selector}". Falling back to parent.', { selector: f.mdDisableScrollTarget }))), F || (F = p.parent()), f.hasOwnProperty("mdDisableBackdrop") || (k = n.createBackdrop(a, "md-sidenav-backdrop md-opaque ng-enter")), p.addClass("_md"), o(p), k && o.inherit(k, p), p.on("$destroy", function () {
      k && k.remove(), g.destroy();
    }), a.$on("$destroy", function () {
      k && k.remove();
    }), a.$watch(E, v), a.$watch("isOpen", $), g.$toggleOpen = S;
  }return { restrict: "E", scope: { isOpen: "=?mdIsOpen" }, controller: "$mdSidenavController", compile: function compile(e) {
      return e.addClass("md-closed").attr("tabIndex", "-1"), p;
    } };
}function SidenavController(e, n, t, o, r) {
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
  };var a = n.mdComponentId,
      l = a && a.indexOf(r.startSymbol()) > -1,
      d = l ? r(a)(e.$parent) : a;i.destroy = t.register(i, d), l && n.$observe("mdComponentId", function (e) {
    e && e !== i.$$mdHandle && (i.destroy(), i.destroy = t.register(i, e));
  });
}goog.provide("ngmaterial.components.sidenav"), goog.require("ngmaterial.components.backdrop"), goog.require("ngmaterial.core"), SidenavService.$inject = ["$mdComponentRegistry", "$mdUtil", "$q", "$log"], SidenavDirective.$inject = ["$mdMedia", "$mdUtil", "$mdConstant", "$mdTheming", "$mdInteraction", "$animate", "$compile", "$parse", "$log", "$q", "$document", "$window", "$$rAF"], SidenavController.$inject = ["$scope", "$attrs", "$mdComponentRegistry", "$q", "$interpolate"], angular.module("material.components.sidenav", ["material.core", "material.components.backdrop"]).factory("$mdSidenav", SidenavService).directive("mdSidenav", SidenavDirective).directive("mdSidenavFocus", SidenavFocusDirective).controller("$mdSidenavController", SidenavController), ngmaterial.components.sidenav = angular.module("material.components.sidenav");

//# sourceMappingURL=sidenav.min-compiled.js.map