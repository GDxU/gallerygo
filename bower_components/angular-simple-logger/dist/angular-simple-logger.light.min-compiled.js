"use strict";

!function (n, r) {
  r.module("nemLogging", []), r.module("nemLogging").provider("nemDebug", function () {
    var n = null;return this.$get = function () {
      return n;
    }, this.debug = n, this;
  });var t = function t(n, r) {
    return function () {
      return n.apply(r, arguments);
    };
  },
      e = [].slice;r.module("nemLogging").provider("nemSimpleLogger", ["nemDebugProvider", function (n) {
    var r, i, o, u, g, l, s, f, h, a, c, d;for (c = n.debug, o = {}, u = ["debug", "info", "warn", "error", "log"], r = {}, h = f = 0, a = u.length; a > f; h = ++f) {
      d = u[h], r[d] = h;
    }return l = function l(n, r, t) {
      return n >= r ? t() : void 0;
    }, g = function g(n) {
      var r, t, e;if (r = !1, !n) return r;for (t = 0, e = u.length; e > t && (d = u[t], r = null != n[d] && "function" == typeof n[d], r); t++) {}return r;
    }, s = function s(n, r) {
      var t, e, i, g;for (null == o[n] && (o[n] = c(n)), t = o[n], g = {}, e = 0, i = u.length; i > e; e++) {
        d = u[e], g[d] = "debug" === d ? t : r[d];
      }return g;
    }, i = function () {
      function n(n) {
        var i, o, s, f, h;if (this.$log = n, this.spawn = t(this.spawn, this), !this.$log) throw "internalLogger undefined";if (!g(this.$log)) throw "@$log is invalid";for (this.doLog = !0, h = {}, i = function (n) {
          return function (t) {
            return h[t] = function () {
              var i;return i = 1 <= arguments.length ? e.call(arguments, 0) : [], n.doLog ? l(r[t], n.currentLevel, function () {
                var r;return (r = n.$log)[t].apply(r, i);
              }) : void 0;
            }, n[t] = h[t];
          };
        }(this), o = 0, s = u.length; s > o; o++) {
          f = u[o], i(f);
        }this.LEVELS = r, this.currentLevel = r.error;
      }return n.prototype.spawn = function (r) {
        if ("string" == typeof r) {
          if (!g(this.$log)) throw "@$log is invalid";if (!c) throw "nemDebug is undefined this is probably the light version of this library sep debug logggers is not supported!";return s(r, this.$log);
        }return new n(r || this.$log);
      }, n;
    }(), this.decorator = ["$log", function (n) {
      var t;return t = new i(n), t.currentLevel = r.debug, t;
    }], this.$get = ["$log", function (n) {
      return new i(n);
    }], this;
  }]);
}(window, angular);

//# sourceMappingURL=angular-simple-logger.light.min-compiled.js.map