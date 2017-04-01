"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
goog.provide("ngmaterial.components.colors"), goog.require("ngmaterial.core"), function () {
  "use strict";
  function e(e, r, o) {
    function t(e, r) {
      try {
        r && e.css(s(r));
      } catch (n) {
        o.error(n.message);
      }
    }function a(e) {
      var r = i(e);return l(r);
    }function l(o, n) {
      n = n || !1;var t = e.PALETTES[o.palette][o.hue];return t = n ? t.contrast : t.value, r.supplant("rgba({0}, {1}, {2}, {3})", [t[0], t[1], t[2], t[3] || o.opacity]);
    }function s(e) {
      var r = {},
          o = e.hasOwnProperty("color");return angular.forEach(e, function (e, n) {
        var t = i(e),
            a = n.indexOf("background") > -1;r[n] = l(t), a && !o && (r.color = l(t, !0));
      }), r;
    }function u(r) {
      return angular.isDefined(e.THEMES[r.split("-")[0]]);
    }function i(r) {
      var o = r.split("-"),
          n = angular.isDefined(e.THEMES[o[0]]),
          t = n ? o.splice(0, 1)[0] : e.defaultTheme();return { theme: t, palette: c(o, t), hue: m(o, t), opacity: o[2] || 1 };
    }function c(o, t) {
      var a = o.length > 1 && n.indexOf(o[1]) !== -1,
          l = o[0].replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();if (a && (l = o[0] + "-" + o.splice(1, 1)), n.indexOf(l) === -1) {
        var s = e.THEMES[t].colors[l];if (!s) throw new Error(r.supplant("mdColors: couldn't find '{palette}' in the palettes.", { palette: l }));l = s.name;
      }return l;
    }function m(o, n) {
      var t = e.THEMES[n].colors;if ("hue" === o[1]) {
        var a = parseInt(o.splice(2, 1)[0], 10);if (a < 1 || a > 3) throw new Error(r.supplant("mdColors: 'hue-{hueNumber}' is not a valid hue, can be only 'hue-1', 'hue-2' and 'hue-3'", { hueNumber: a }));if (o[1] = "hue-" + a, !(o[0] in t)) throw new Error(r.supplant("mdColors: 'hue-x' can only be used with [{availableThemes}], but was used with '{usedTheme}'", { availableThemes: Object.keys(t).join(", "), usedTheme: o[0] }));return t[o[0]].hues[o[1]];
      }return o[1] || t[o[0] in t ? o[0] : "primary"].hues["default"];
    }return n = n || Object.keys(e.PALETTES), { applyThemeColors: t, getThemeColor: a, hasTheme: u };
  }function r(e, r, n, t) {
    return { restrict: "A", require: ["^?mdTheme"], compile: function compile(a, l) {
        function s() {
          var e = l.mdColors,
              n = e.indexOf("::") > -1,
              t = !!n || o.test(l.mdColors);l.mdColors = e.replace("::", "");var a = angular.isDefined(l.mdColorsWatch);return !n && !t && (!a || r.parseAttributeBoolean(l.mdColorsWatch));
        }var u = s();return function (r, o, a, l) {
          var s = l[0],
              i = {},
              c = function c(o) {
            "string" != typeof o && (o = ""), a.mdColors || (a.mdColors = "{}");var n = t(a.mdColors)(r);return s && Object.keys(n).forEach(function (r) {
              var t = n[r];e.hasTheme(t) || (n[r] = (o || s.$mdTheme) + "-" + t);
            }), m(n), n;
          },
              m = function m(e) {
            if (!angular.equals(e, i)) {
              var r = Object.keys(i);i.background && !r.color && r.push("color"), r.forEach(function (e) {
                o.css(e, "");
              });
            }i = e;
          },
              h = angular.noop;s && (h = s.registerChanges(function (r) {
            e.applyThemeColors(o, c(r));
          })), r.$on("$destroy", function () {
            h();
          });try {
            u ? r.$watch(c, angular.bind(this, e.applyThemeColors, o), !0) : e.applyThemeColors(o, c());
          } catch (d) {
            n.error(d.message);
          }
        };
      } };
  }r.$inject = ["$mdColors", "$mdUtil", "$log", "$parse"], e.$inject = ["$mdTheming", "$mdUtil", "$log"];var o = /^{((\s|,)*?["'a-zA-Z-]+?\s*?:\s*?('|")[a-zA-Z0-9-.]*('|"))+\s*}$/,
      n = null;angular.module("material.components.colors", ["material.core"]).directive("mdColors", r).service("$mdColors", e);
}(), ngmaterial.components.colors = angular.module("material.components.colors");

//# sourceMappingURL=colors.min-compiled.js.map