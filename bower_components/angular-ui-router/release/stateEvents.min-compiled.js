"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/*!
 * State-based routing for AngularJS
 * @version v1.0.0-beta.3
 * @link https://ui-router.github.io
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e(require("angular")) : "function" == typeof define && define.amd ? define("angular-ui-router", ["angular"], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports["angular-ui-router"] = e(require("angular")) : t["angular-ui-router"] = e(t.angular);
}(undefined, function (t) {
  return function (t) {
    function e(n) {
      if (r[n]) return r[n].exports;var o = r[n] = { exports: {}, id: n, loaded: !1 };return t[n].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports;
    }var r = {};return e.m = t, e.c = r, e.p = "", e(0);
  }({ 0: function _(t, e, r) {
      "use strict";
      var n = r(57);!function () {
        function t(t, e) {
          var r, n;if (Array.isArray(e) && (r = e[0], n = e[1]), !i(r)) throw new Error("invalid parameters to applyPairs");return t[r] = n, t;
        }function e(t) {
          if (t.options().notify && t.valid() && !t.ignored()) {
            var e = t.injector(),
                r = e.get("$stateEvents"),
                n = e.get("$rootScope"),
                o = e.get("$state"),
                a = e.get("$urlRouter"),
                i = r.provider.enabled(),
                s = t.params("to"),
                u = t.params("from");if (i.$stateChangeSuccess) {
              var c = n.$broadcast("$stateChangeStart", t.to(), s, t.from(), u, t.options(), t);if (c.defaultPrevented) return i.$stateChangeCancel && n.$broadcast("$stateChangeCancel", t.to(), s, t.from(), u, t.options(), t), null == o.transition && a.update(), !1;t.promise.then(function () {
                n.$broadcast("$stateChangeSuccess", t.to(), s, t.from(), u, t.options(), t);
              });
            }i.$stateChangeError && t.promise["catch"](function (e) {
              if (!e || 2 !== e.type && 3 !== e.type) {
                var r = n.$broadcast("$stateChangeError", t.to(), s, t.from(), u, e, t.options(), t);r.defaultPrevented || a.update();
              }
            });
          }
        }function r(t, e, r) {
          function n() {
            return o.target(u.to, u.toParams, u.options);
          }var o = r.get("$state"),
              i = r.get("$rootScope"),
              s = r.get("$urlRouter"),
              u = { to: t.identifier(), toParams: t.params(), options: t.options() },
              c = i.$broadcast("$stateNotFound", u, e.state(), e.params());return (c.defaultPrevented || c.retry) && s.update(), !c.defaultPrevented && (c.retry || o.get(u.to) ? c.retry && a(c.retry.then) ? c.retry.then(n) : n() : void 0);
        }function o(n) {
          function a() {
            if (s) throw new Error("Cannot enable events at runtime (use $stateEventsProvider");
          }function i(t) {
            return s = !0, c.$stateNotFound && n.onInvalid(r), c.$stateChangeStart && t.onBefore({}, e, { priority: 1e3 }), { provider: o.prototype.instance };
          }o.prototype.instance = this;var s = !1,
              u = ["$stateChangeStart", "$stateNotFound", "$stateChangeSuccess", "$stateChangeError"],
              c = u.map(function (t) {
            return [t, !0];
          }).reduce(t, {});this.enable = function () {
            for (var t = [], e = 0; e < arguments.length; e++) {
              t[e - 0] = arguments[e];
            }a(), t && t.length || (t = u), t.forEach(function (t) {
              return c[t] = !0;
            });
          }, this.disable = function () {
            for (var t = [], e = 0; e < arguments.length; e++) {
              t[e - 0] = arguments[e];
            }a(), t && t.length || (t = u), t.forEach(function (t) {
              return delete c[t];
            });
          }, this.enabled = function () {
            return c;
          }, this.$get = i, i.$inject = ["$transitions"];
        }var a = n.isFunction,
            i = n.isString;r.$inject = ["$to$", "$from$", "$state", "$rootScope", "$urlRouter"], o.$inject = ["$stateProvider"], n.module("ui.router.state.events", ["ui.router.state"]).provider("$stateEvents", o).run(["$stateEvents", function (t) {}]);
      }();
    }, 57: function _(e, r) {
      e.exports = t;
    } });
});
//# sourceMappingURL=stateEvents.min.js.map

//# sourceMappingURL=stateEvents.min-compiled.js.map