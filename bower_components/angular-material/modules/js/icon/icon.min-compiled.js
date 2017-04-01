"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (t, e, n) {
  "use strict";
  function i(t, e, n, i) {
    function o(i, o, a) {
      function r() {
        var t = o.parent();return !(!t.attr("aria-label") && !t.text()) || !(!t.parent().attr("aria-label") && !t.parent().text());
      }function u() {
        a.mdSvgIcon || a.mdSvgSrc || (a.mdFontIcon && o.addClass("md-font " + a.mdFontIcon), o.addClass(g));
      }function I() {
        if (!a.mdSvgIcon && !a.mdSvgSrc) {
          a.mdFontIcon && (o.removeClass(c), o.addClass(a.mdFontIcon), c = a.mdFontIcon);var e = t.fontSet(a.mdFontSet);g !== e && (o.removeClass(g), o.addClass(e), g = e);
        }
      }e(o);var c = a.mdFontIcon,
          g = t.fontSet(a.mdFontSet);u(), a.$observe("mdFontIcon", I), a.$observe("mdFontSet", I);var d = (o[0].getAttribute(a.$attr.mdSvgSrc), a.alt || a.mdFontIcon || a.mdSvgIcon || o.text()),
          s = a.$normalize(a.$attr.mdSvgIcon || a.$attr.mdSvgSrc || "");a["aria-label"] || ("" === d || r() ? o.text() || n.expect(o, "aria-hidden", "true") : (n.expect(o, "aria-label", d), n.expect(o, "role", "img"))), s && a.$observe(s, function (e) {
        o.empty(), e && t(e).then(function (t) {
          o.empty(), o.append(t);
        });
      });
    }return { restrict: "E", link: o };
  }function o() {}function a(t, e) {
    this.url = t, this.viewBoxSize = e || u.defaultViewBoxSize;
  }function r(n, i, o, a, r, u) {
    function I(t) {
      if (t = t || "", e.isString(t) || (t = u.getTrustedUrl(t)), j[t]) return o.when(g(j[t]));if (v.test(t) || D.test(t)) return m(t).then(d(t));t.indexOf(":") == -1 && (t = "$default:" + t);var i = n[t] ? s : l;return i(t).then(d(t));
    }function c(t) {
      var i = e.isUndefined(t) || !(t && t.length);if (i) return n.defaultFontSet;var o = t;return e.forEach(n.fontSets, function (e) {
        e.alias == t && (o = e.fontSet || o);
      }), o;
    }function g(t) {
      var n = t.clone(),
          i = "_cache" + r.nextUid();return n.id && (n.id += i), e.forEach(n.querySelectorAll("[id]"), function (t) {
        t.id += i;
      }), n;
    }function d(t) {
      return function (e) {
        return j[t] = S(e) ? e : new x(e, n[t]), j[t].clone();
      };
    }function s(t) {
      var e = n[t];return m(e.url).then(function (t) {
        return new x(t, e);
      });
    }function l(t) {
      function e(e) {
        var n = t.slice(t.lastIndexOf(":") + 1),
            o = e.querySelector("#" + n);return o ? new x(o, u) : i(t);
      }function i(t) {
        var e = "icon " + t + " not found";return a.warn(e), o.reject(e || t);
      }var r = t.substring(0, t.lastIndexOf(":")) || "$default",
          u = n[r];return u ? m(u.url).then(e) : i(t);
    }function m(n) {
      function r(n) {
        var i = D.exec(n),
            a = /base64/i.test(n),
            r = a ? t.atob(i[2]) : i[2];return o.when(e.element(r)[0]);
      }function u(t) {
        return o(function (n, o) {
          var r = function r(t) {
            var n = e.isString(t) ? t : t.message || t.data || t.statusText;a.warn(n), o(t);
          },
              u = function u(i) {
            w[t] || (w[t] = e.element("<div>").append(i)[0].querySelector("svg")), n(w[t]);
          };i(t, !0).then(u, r);
        });
      }return D.test(n) ? r(n) : u(n);
    }function S(t) {
      return e.isDefined(t.element) && e.isDefined(t.config);
    }function x(t, n) {
      t && "svg" != t.tagName && (t = e.element('<svg xmlns="http://www.w3.org/2000/svg">').append(t.cloneNode(!0))[0]), t.getAttribute("xmlns") || t.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.element = t, this.config = n, this.prepare();
    }function M() {
      var t = this.config ? this.config.viewBoxSize : n.defaultViewBoxSize;e.forEach({ fit: "", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", viewBox: this.element.getAttribute("viewBox") || "0 0 " + t + " " + t, focusable: !1 }, function (t, e) {
        this.element.setAttribute(e, t);
      }, this);
    }function f() {
      return this.element.cloneNode(!0);
    }var j = {},
        w = {},
        v = /[-\w@:%\+.~#?&\/\/=]{2,}\.[a-z]{2,4}\b(\/[-\w@:%\+.~#?&\/\/=]*)?/i,
        D = /^data:image\/svg\+xml[\s*;\w\-\=]*?(base64)?,(.*)$/i;return x.prototype = { clone: f, prepare: M }, I.fontSet = c, I;
  }e.module("material.components.icon", ["material.core"]), e.module("material.components.icon").directive("mdIcon", ["$mdIcon", "$mdTheming", "$mdAria", "$sce", i]), r.$inject = ["config", "$templateRequest", "$q", "$log", "$mdUtil", "$sce"], e.module("material.components.icon").constant("$$mdSvgRegistry", { mdTabsArrow: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyICIvPjwvZz48L3N2Zz4=", mdClose: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik0xOSA2LjQxbC0xLjQxLTEuNDEtNS41OSA1LjU5LTUuNTktNS41OS0xLjQxIDEuNDEgNS41OSA1LjU5LTUuNTkgNS41OSAxLjQxIDEuNDEgNS41OS01LjU5IDUuNTkgNS41OSAxLjQxLTEuNDEtNS41OS01LjU5eiIvPjwvZz48L3N2Zz4=", mdCancel: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik0xMiAyYy01LjUzIDAtMTAgNC40Ny0xMCAxMHM0LjQ3IDEwIDEwIDEwIDEwLTQuNDcgMTAtMTAtNC40Ny0xMC0xMC0xMHptNSAxMy41OWwtMS40MSAxLjQxLTMuNTktMy41OS0zLjU5IDMuNTktMS40MS0xLjQxIDMuNTktMy41OS0zLjU5LTMuNTkgMS40MS0xLjQxIDMuNTkgMy41OSAzLjU5LTMuNTkgMS40MSAxLjQxLTMuNTkgMy41OSAzLjU5IDMuNTl6Ii8+PC9nPjwvc3ZnPg==", mdMenu: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0zLDZIMjFWOEgzVjZNMywxMUgyMVYxM0gzVjExTTMsMTZIMjFWMThIM1YxNloiIC8+PC9zdmc+", mdToggleArrow: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiPjxwYXRoIGQ9Ik0yNCAxNmwtMTIgMTIgMi44MyAyLjgzIDkuMTctOS4xNyA5LjE3IDkuMTcgMi44My0yLjgzeiIvPjxwYXRoIGQ9Ik0wIDBoNDh2NDhoLTQ4eiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==", mdCalendar: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgM2gtMVYxaC0ydjJIOFYxSDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY4aDE0djExek03IDEwaDV2NUg3eiIvPjwvc3ZnPg==", mdChecked: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik05IDE2LjE3TDQuODMgMTJsLTEuNDIgMS40MUw5IDE5IDIxIDdsLTEuNDEtMS40MXoiLz48L2c+PC9zdmc+" }).provider("$mdIcon", o);var u = { defaultViewBoxSize: 24, defaultFontSet: "material-icons", fontSets: [] };o.prototype = { icon: function icon(t, e, n) {
      return t.indexOf(":") == -1 && (t = "$default:" + t), u[t] = new a(e, n), this;
    }, iconSet: function iconSet(t, e, n) {
      return u[t] = new a(e, n), this;
    }, defaultIconSet: function defaultIconSet(t, e) {
      var n = "$default";return u[n] || (u[n] = new a(t, e)), u[n].viewBoxSize = e || u.defaultViewBoxSize, this;
    }, defaultViewBoxSize: function defaultViewBoxSize(t) {
      return u.defaultViewBoxSize = t, this;
    }, fontSet: function fontSet(t, e) {
      return u.fontSets.push({ alias: t, fontSet: e || t }), this;
    }, defaultFontSet: function defaultFontSet(t) {
      return u.defaultFontSet = t ? t : "", this;
    }, defaultIconSize: function defaultIconSize(t) {
      return u.defaultIconSize = t, this;
    }, $get: ["$templateRequest", "$q", "$log", "$mdUtil", "$sce", function (t, e, n, i, o) {
      return r(u, t, e, n, i, o);
    }] };
}(window, window.angular);

//# sourceMappingURL=icon.min-compiled.js.map