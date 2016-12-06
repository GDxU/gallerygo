"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function mdIconDirective(e, t, n, i) {
  function o(i, o, a) {
    function r() {
      var e = o.parent();return !(!e.attr("aria-label") && !e.text()) || !(!e.parent().attr("aria-label") && !e.parent().text());
    }function u() {
      a.mdSvgIcon || a.mdSvgSrc || (a.mdFontIcon && o.addClass("md-font " + a.mdFontIcon), o.addClass(I));
    }function c() {
      if (!a.mdSvgIcon && !a.mdSvgSrc) {
        a.mdFontIcon && (o.removeClass(g), o.addClass(a.mdFontIcon), g = a.mdFontIcon);var t = e.fontSet(a.mdFontSet);I !== t && (o.removeClass(I), o.addClass(t), I = t);
      }
    }t(o);var g = a.mdFontIcon,
        I = e.fontSet(a.mdFontSet);u(), a.$observe("mdFontIcon", c), a.$observe("mdFontSet", c);var d = (o[0].getAttribute(a.$attr.mdSvgSrc), a.alt || a.mdFontIcon || a.mdSvgIcon || o.text()),
        l = a.$normalize(a.$attr.mdSvgIcon || a.$attr.mdSvgSrc || "");a["aria-label"] || ("" === d || r() ? o.text() || n.expect(o, "aria-hidden", "true") : (n.expect(o, "aria-label", d), n.expect(o, "role", "img"))), l && a.$observe(l, function (t) {
      o.empty(), t && e(t).then(function (e) {
        o.empty(), o.append(e);
      });
    });
  }return { restrict: "E", link: o };
}function MdIconProvider() {}function ConfigurationItem(e, t) {
  this.url = e, this.viewBoxSize = t || config.defaultViewBoxSize;
}function MdIconService(e, t, n, i, o, a) {
  function r(t) {
    if (t = t || "", angular.isString(t) || (t = a.getTrustedUrl(t)), M[t]) return n.when(c(M[t]));if (j.test(t) || v.test(t)) return l(t).then(g(t));t.indexOf(":") == -1 && (t = "$default:" + t);var i = e[t] ? I : d;return i(t).then(g(t));
  }function u(t) {
    var n = angular.isUndefined(t) || !(t && t.length);if (n) return e.defaultFontSet;var i = t;return angular.forEach(e.fontSets, function (e) {
      e.alias == t && (i = e.fontSet || i);
    }), i;
  }function c(e) {
    var t = e.clone(),
        n = "_cache" + o.nextUid();return t.id && (t.id += n), angular.forEach(t.querySelectorAll("[id]"), function (e) {
      e.id += n;
    }), t;
  }function g(t) {
    return function (n) {
      return M[t] = m(n) ? n : new s(n, e[t]), M[t].clone();
    };
  }function I(t) {
    var n = e[t];return l(n.url).then(function (e) {
      return new s(e, n);
    });
  }function d(t) {
    function o(e) {
      var n = t.slice(t.lastIndexOf(":") + 1),
          i = e.querySelector("#" + n);return i ? new s(i, u) : a(t);
    }function a(e) {
      var t = "icon " + e + " not found";return i.warn(t), n.reject(t || e);
    }var r = t.substring(0, t.lastIndexOf(":")) || "$default",
        u = e[r];return u ? l(u.url).then(o) : a(t);
  }function l(e) {
    function o(e) {
      var t = v.exec(e),
          i = /base64/i.test(e),
          o = i ? window.atob(t[2]) : t[2];return n.when(angular.element(o)[0]);
    }function a(e) {
      return n(function (n, o) {
        var a = function a(e) {
          var t = angular.isString(e) ? e : e.message || e.data || e.statusText;i.warn(t), o(e);
        },
            r = function r(t) {
          x[e] || (x[e] = angular.element("<div>").append(t)[0].querySelector("svg")), n(x[e]);
        };t(e, !0).then(r, a);
      });
    }return v.test(e) ? o(e) : a(e);
  }function m(e) {
    return angular.isDefined(e.element) && angular.isDefined(e.config);
  }function s(e, t) {
    e && "svg" != e.tagName && (e = angular.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e.cloneNode(!0))[0]), e.getAttribute("xmlns") || e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.element = e, this.config = t, this.prepare();
  }function f() {
    var t = this.config ? this.config.viewBoxSize : e.defaultViewBoxSize;angular.forEach({ fit: "", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", viewBox: this.element.getAttribute("viewBox") || "0 0 " + t + " " + t, focusable: !1 }, function (e, t) {
      this.element.setAttribute(t, e);
    }, this);
  }function S() {
    return this.element.cloneNode(!0);
  }var M = {},
      x = {},
      j = /[-\w@:%\+.~#?&\/\/=]{2,}\.[a-z]{2,4}\b(\/[-\w@:%\+.~#?&\/\/=]*)?/i,
      v = /^data:image\/svg\+xml[\s*;\w\-\=]*?(base64)?,(.*)$/i;return s.prototype = { clone: S, prepare: f }, r.fontSet = u, r;
}goog.provide("ngmaterial.components.icon"), goog.require("ngmaterial.core"), angular.module("material.components.icon", ["material.core"]), angular.module("material.components.icon").directive("mdIcon", ["$mdIcon", "$mdTheming", "$mdAria", "$sce", mdIconDirective]), MdIconService.$inject = ["config", "$templateRequest", "$q", "$log", "$mdUtil", "$sce"], angular.module("material.components.icon").constant("$$mdSvgRegistry", { mdTabsArrow: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyICIvPjwvZz48L3N2Zz4=", mdClose: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik0xOSA2LjQxbC0xLjQxLTEuNDEtNS41OSA1LjU5LTUuNTktNS41OS0xLjQxIDEuNDEgNS41OSA1LjU5LTUuNTkgNS41OSAxLjQxIDEuNDEgNS41OS01LjU5IDUuNTkgNS41OSAxLjQxLTEuNDEtNS41OS01LjU5eiIvPjwvZz48L3N2Zz4=", mdCancel: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik0xMiAyYy01LjUzIDAtMTAgNC40Ny0xMCAxMHM0LjQ3IDEwIDEwIDEwIDEwLTQuNDcgMTAtMTAtNC40Ny0xMC0xMC0xMHptNSAxMy41OWwtMS40MSAxLjQxLTMuNTktMy41OS0zLjU5IDMuNTktMS40MS0xLjQxIDMuNTktMy41OS0zLjU5LTMuNTkgMS40MS0xLjQxIDMuNTkgMy41OSAzLjU5LTMuNTkgMS40MSAxLjQxLTMuNTkgMy41OSAzLjU5IDMuNTl6Ii8+PC9nPjwvc3ZnPg==", mdMenu: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0zLDZIMjFWOEgzVjZNMywxMUgyMVYxM0gzVjExTTMsMTZIMjFWMThIM1YxNloiIC8+PC9zdmc+", mdToggleArrow: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiPjxwYXRoIGQ9Ik0yNCAxNmwtMTIgMTIgMi44MyAyLjgzIDkuMTctOS4xNyA5LjE3IDkuMTcgMi44My0yLjgzeiIvPjxwYXRoIGQ9Ik0wIDBoNDh2NDhoLTQ4eiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==", mdCalendar: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgM2gtMVYxaC0ydjJIOFYxSDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY4aDE0djExek03IDEwaDV2NUg3eiIvPjwvc3ZnPg==", mdChecked: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik05IDE2LjE3TDQuODMgMTJsLTEuNDIgMS40MUw5IDE5IDIxIDdsLTEuNDEtMS40MXoiLz48L2c+PC9zdmc+" }).provider("$mdIcon", MdIconProvider);var config = { defaultViewBoxSize: 24, defaultFontSet: "material-icons", fontSets: [] };MdIconProvider.prototype = { icon: function icon(e, t, n) {
    return e.indexOf(":") == -1 && (e = "$default:" + e), config[e] = new ConfigurationItem(t, n), this;
  }, iconSet: function iconSet(e, t, n) {
    return config[e] = new ConfigurationItem(t, n), this;
  }, defaultIconSet: function defaultIconSet(e, t) {
    var n = "$default";return config[n] || (config[n] = new ConfigurationItem(e, t)), config[n].viewBoxSize = t || config.defaultViewBoxSize, this;
  }, defaultViewBoxSize: function defaultViewBoxSize(e) {
    return config.defaultViewBoxSize = e, this;
  }, fontSet: function fontSet(e, t) {
    return config.fontSets.push({ alias: e, fontSet: t || e }), this;
  }, defaultFontSet: function defaultFontSet(e) {
    return config.defaultFontSet = e ? e : "", this;
  }, defaultIconSize: function defaultIconSize(e) {
    return config.defaultIconSize = e, this;
  }, $get: ["$templateRequest", "$q", "$log", "$mdUtil", "$sce", function (e, t, n, i, o) {
    return MdIconService(config, e, t, n, i, o);
  }] }, ngmaterial.components.icon = angular.module("material.components.icon");

//# sourceMappingURL=icon.min-compiled.js.map