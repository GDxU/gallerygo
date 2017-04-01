"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/*
 AngularJS v1.5.10-build.5179+sha.752b1e6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (W, b) {
  'use strict';
  function K(q, g) {
    g = g || {};b.forEach(g, function (b, h) {
      delete g[h];
    });for (var h in q) {
      !q.hasOwnProperty(h) || "$" === h.charAt(0) && "$" === h.charAt(1) || (g[h] = q[h]);
    }return g;
  }var B = b.$$minErr("$resource"),
      Q = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;b.module("ngResource", ["ng"]).provider("$resource", function () {
    var q = /^https?:\/\/\[[^\]]*][^/]*/,
        g = this;this.defaults = { stripTrailingSlashes: !0, cancellable: !1, actions: { get: { method: "GET" }, save: { method: "POST" }, query: { method: "GET", isArray: !0 }, remove: { method: "DELETE" },
        "delete": { method: "DELETE" } } };this.$get = ["$http", "$log", "$q", "$timeout", function (h, P, L, M) {
      function C(b, e) {
        this.template = b;this.defaults = p({}, g.defaults, e);this.urlParams = {};
      }function x(D, e, u, m) {
        function c(a, d) {
          var c = {};d = p({}, e, d);t(d, function (d, l) {
            y(d) && (d = d(a));var f;if (d && d.charAt && "@" === d.charAt(0)) {
              f = a;var k = d.substr(1);if (null == k || "" === k || "hasOwnProperty" === k || !Q.test("." + k)) throw B("badmember", k);for (var k = k.split("."), e = 0, g = k.length; e < g && b.isDefined(f); e++) {
                var h = k[e];f = null !== f ? f[h] : void 0;
              }
            } else f = d;c[l] = f;
          });return c;
        }function R(a) {
          return a.resource;
        }function l(a) {
          K(a || {}, this);
        }var q = new C(D, m);u = p({}, g.defaults.actions, u);l.prototype.toJSON = function () {
          var a = p({}, this);delete a.$promise;delete a.$resolved;return a;
        };t(u, function (a, d) {
          var b = /^(POST|PUT|PATCH)$/i.test(a.method),
              e = a.timeout,
              g = N(a.cancellable) ? a.cancellable : q.defaults.cancellable;e && !S(e) && (P.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."), delete a.timeout, e = null);l[d] = function (f, k, m, D) {
            function u(a) {
              r.catch(E);z.resolve(a);
            }var G = {},
                v,
                w,
                A;switch (arguments.length) {case 4:
                A = D, w = m;case 3:case 2:
                if (y(k)) {
                  if (y(f)) {
                    w = f;A = k;break;
                  }w = k;A = m;
                } else {
                  G = f;v = k;w = m;break;
                }case 1:
                y(f) ? w = f : b ? v = f : G = f;break;case 0:
                break;default:
                throw B("badargs", arguments.length);}var F = this instanceof l,
                n = F ? v : a.isArray ? [] : new l(v),
                s = {},
                C = a.interceptor && a.interceptor.response || R,
                x = a.interceptor && a.interceptor.responseError || void 0,
                H = !!A,
                I = !!x,
                z,
                J;t(a, function (a, d) {
              switch (d) {default:
                  s[d] = T(a);case "params":case "isArray":case "interceptor":case "cancellable":}
            });!F && g && (z = L.defer(), s.timeout = z.promise, e && (J = M(z.resolve, e)));b && (s.data = v);q.setUrlParams(s, p({}, c(v, a.params || {}), G), a.url);var r = h(s).then(function (f) {
              var c = f.data;if (c) {
                if (O(c) !== !!a.isArray) throw B("badcfg", d, a.isArray ? "array" : "object", O(c) ? "array" : "object", s.method, s.url);if (a.isArray) n.length = 0, t(c, function (a) {
                  "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) ? n.push(new l(a)) : n.push(a);
                });else {
                  var b = n.$promise;K(c, n);n.$promise = b;
                }
              }f.resource = n;
              return f;
            }),
                r = r["finally"](function () {
              n.$resolved = !0;!F && g && (n.$cancelRequest = E, M.cancel(J), z = J = s.timeout = null);
            }),
                r = r.then(function (a) {
              var d = C(a);(w || E)(d, a.headers, a.status, a.statusText);return d;
            }, H || I ? function (a) {
              H && A(a);return I ? x(a) : L.reject(a);
            } : void 0);H && !I && r.catch(E);return F ? r : (n.$promise = r, n.$resolved = !1, g && (n.$cancelRequest = u), n);
          };l.prototype["$" + d] = function (a, c, b) {
            y(a) && (b = c, c = a, a = {});a = l[d].call(this, a, this, c, b);return a.$promise || a;
          };
        });l.bind = function (a) {
          a = p({}, e, a);return x(D, a, u, m);
        };
        return l;
      }var E = b.noop,
          t = b.forEach,
          p = b.extend,
          T = b.copy,
          O = b.isArray,
          N = b.isDefined,
          y = b.isFunction,
          S = b.isNumber,
          U = b.$$encodeUriQuery,
          V = b.$$encodeUriSegment;C.prototype = { setUrlParams: function setUrlParams(b, e, g) {
          var m = this,
              c = g || m.template,
              h,
              l,
              p = "",
              a = m.urlParams = Object.create(null);t(c.split(/\W/), function (d) {
            if ("hasOwnProperty" === d) throw B("badname");!/^\d+$/.test(d) && d && new RegExp("(^|[^\\\\]):" + d + "(\\W|$)").test(c) && (a[d] = { isQueryParamValue: new RegExp("\\?.*=:" + d + "(?:\\W|$)").test(c) });
          });c = c.replace(/\\:/g, ":");
          c = c.replace(q, function (a) {
            p = a;return "";
          });e = e || {};t(m.urlParams, function (a, b) {
            h = e.hasOwnProperty(b) ? e[b] : m.defaults[b];N(h) && null !== h ? (l = a.isQueryParamValue ? U(h, !0) : V(h), c = c.replace(new RegExp(":" + b + "(\\W|$)", "g"), function (a, b) {
              return l + b;
            })) : c = c.replace(new RegExp("(/?):" + b + "(\\W|$)", "g"), function (a, b, d) {
              return "/" === d.charAt(0) ? d : b + d;
            });
          });m.defaults.stripTrailingSlashes && (c = c.replace(/\/+$/, "") || "/");c = c.replace(/\/\.(?=\w+($|\?))/, ".");b.url = p + c.replace(/\/\\\./, "/.");t(e, function (a, c) {
            m.urlParams[c] || (b.params = b.params || {}, b.params[c] = a);
          });
        } };return x;
    }];
  });
})(window, window.angular);
//# sourceMappingURL=angular-resource.min.js.map

//# sourceMappingURL=angular-resource.min-compiled.js.map