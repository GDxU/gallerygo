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
      if (r[n]) return r[n].exports;var i = r[n] = { exports: {}, id: n, loaded: !1 };return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
    }var r = {};return e.m = t, e.c = r, e.p = "", e(0);
  }([function (t, e, r) {
    "use strict";
    function n(t) {
      for (var r in t) {
        e.hasOwnProperty(r) || (e[r] = t[r]);
      }
    }n(r(1)), n(r(53)), n(r(55)), n(r(58)), r(60), r(61), r(62), r(63), Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = "ui.router";
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      for (var r in t) {
        e.hasOwnProperty(r) || (e[r] = t[r]);
      }
    }n(r(2)), n(r(46)), n(r(47)), n(r(48)), n(r(49)), n(r(50)), n(r(51)), n(r(52)), n(r(44));var i = r(25);e.UIRouter = i.UIRouter;
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      for (var r in t) {
        e.hasOwnProperty(r) || (e[r] = t[r]);
      }
    }n(r(3)), n(r(6)), n(r(7)), n(r(5)), n(r(4)), n(r(8)), n(r(9)), n(r(12));
  }, function (t, e, r) {
    "use strict";
    function n(t, e, r, n) {
      return void 0 === n && (n = Object.keys(t)), n.filter(function (e) {
        return "function" == typeof t[e];
      }).forEach(function (n) {
        return e[n] = t[n].bind(r);
      });
    }function i(t) {
      void 0 === t && (t = {});for (var r = [], n = 1; n < arguments.length; n++) {
        r[n - 1] = arguments[n];
      }var i = o.apply(null, [{}].concat(r));return e.extend({}, i, c(t || {}, Object.keys(i)));
    }function o(t) {
      for (var r = [], n = 1; n < arguments.length; n++) {
        r[n - 1] = arguments[n];
      }return e.forEach(r, function (r) {
        e.forEach(r, function (e, r) {
          t.hasOwnProperty(r) || (t[r] = e);
        });
      }), t;
    }function a(t, e) {
      var r = [];for (var n in t.path) {
        if (t.path[n] !== e.path[n]) break;r.push(t.path[n]);
      }return r;
    }function s(t, e, r) {
      void 0 === r && (r = Object.keys(t));for (var n = 0; n < r.length; n++) {
        var i = r[n];if (t[i] != e[i]) return !1;
      }return !0;
    }function u(t, e) {
      for (var r = [], n = 2; n < arguments.length; n++) {
        r[n - 2] = arguments[n];
      }var i = {};for (var o in e) {
        t(r, o) && (i[o] = e[o]);
      }return i;
    }function c(t) {
      return u.apply(null, [e.inArray].concat(T(arguments)));
    }function f(t) {
      var r = function r(t, _r) {
        return !e.inArray(t, _r);
      };return u.apply(null, [r].concat(T(arguments)));
    }function l(t, e) {
      return v(t, P.prop(e));
    }function p(t, r) {
      var n = k.isArray(t),
          i = n ? [] : {},
          o = n ? function (t) {
        return i.push(t);
      } : function (t, e) {
        return i[e] = t;
      };return e.forEach(t, function (t, e) {
        r(t, e) && o(t, e);
      }), i;
    }function h(t, r) {
      var n;return e.forEach(t, function (t, e) {
        n || r(t, e) && (n = t);
      }), n;
    }function v(t, r) {
      var n = k.isArray(t) ? [] : {};return e.forEach(t, function (t, e) {
        return n[e] = r(t, e);
      }), n;
    }function d(t, e) {
      return t.push(e), t;
    }function m(t, e) {
      return void 0 === e && (e = "assert failure"), function (r) {
        if (!t(r)) throw new Error(k.isFunction(e) ? e(r) : e);return !0;
      };
    }function g() {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t[e - 0] = arguments[e];
      }if (0 === t.length) return [];var r = t.reduce(function (t, e) {
        return Math.min(e.length, t);
      }, 9007199254740991);return Array.apply(null, Array(r)).map(function (e, r) {
        return t.map(function (t) {
          return t[r];
        });
      });
    }function y(t, e) {
      var r, n;if (k.isArray(e) && (r = e[0], n = e[1]), !k.isString(r)) throw new Error("invalid parameters to applyPairs");return t[r] = n, t;
    }function w(t) {
      return t.length && t[t.length - 1] || void 0;
    }function b(t, r) {
      return r && Object.keys(r).forEach(function (t) {
        return delete r[t];
      }), r || (r = {}), e.extend(r, t);
    }function $(t, e, r) {
      return k.isArray(t) ? t.forEach(e, r) : void Object.keys(t).forEach(function (r) {
        return e(t[r], r);
      });
    }function R(t, e) {
      return Object.keys(e).forEach(function (r) {
        return t[r] = e[r];
      }), t;
    }function S(t) {
      return T(arguments, 1).filter(e.identity).reduce(R, t);
    }function E(t, e) {
      if (t === e) return !0;if (null === t || null === e) return !1;if (t !== t && e !== e) return !0;var r = typeof t === "undefined" ? "undefined" : _typeof(t),
          n = typeof e === "undefined" ? "undefined" : _typeof(e);if (r !== n || "object" !== r) return !1;var i = [t, e];if (P.all(k.isArray)(i)) return x(t, e);if (P.all(k.isDate)(i)) return t.getTime() === e.getTime();if (P.all(k.isRegExp)(i)) return t.toString() === e.toString();if (P.all(k.isFunction)(i)) return !0;var o = [k.isFunction, k.isArray, k.isDate, k.isRegExp];if (o.map(P.any).reduce(function (t, e) {
        return t || !!e(i);
      }, !1)) return !1;var a,
          s = {};for (a in t) {
        if (!E(t[a], e[a])) return !1;s[a] = !0;
      }for (a in e) {
        if (!s[a]) return !1;
      }return !0;
    }function x(t, e) {
      return t.length === e.length && g(t, e).reduce(function (t, e) {
        return t && E(e[0], e[1]);
      }, !0);
    }var k = r(4),
        P = r(5),
        _ = r(6),
        C = "undefined" == typeof window ? {} : window,
        O = C.angular || {};e.fromJson = O.fromJson || JSON.parse.bind(JSON), e.toJson = O.toJson || JSON.stringify.bind(JSON), e.copy = O.copy || b, e.forEach = O.forEach || $, e.extend = O.extend || S, e.equals = O.equals || E, e.identity = function (t) {
      return t;
    }, e.noop = function () {}, e.bindFunctions = n, e.inherit = function (t, r) {
      return e.extend(new (e.extend(function () {}, { prototype: t }))(), r);
    };var T = function T(t, e) {
      return void 0 === e && (e = 0), Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(t, e));
    };e.inArray = function (t, e) {
      return t.indexOf(e) !== -1;
    }, e.removeFrom = P.curry(function (t, e) {
      var r = t.indexOf(e);return r >= 0 && t.splice(r, 1), t;
    }), e.defaults = i, e.merge = o, e.mergeR = function (t, r) {
      return e.extend(t, r);
    }, e.ancestors = a, e.equalForKeys = s, e.pick = c, e.omit = f, e.pluck = l, e.filter = p, e.find = h, e.mapObj = v, e.map = v, e.values = function (t) {
      return Object.keys(t).map(function (e) {
        return t[e];
      });
    }, e.allTrueR = function (t, e) {
      return t && e;
    }, e.anyTrueR = function (t, e) {
      return t || e;
    }, e.unnestR = function (t, e) {
      return t.concat(e);
    }, e.flattenR = function (t, r) {
      return k.isArray(r) ? t.concat(r.reduce(e.flattenR, [])) : d(t, r);
    }, e.pushR = d, e.uniqR = function (t, r) {
      return e.inArray(t, r) ? t : d(t, r);
    }, e.unnest = function (t) {
      return t.reduce(e.unnestR, []);
    }, e.flatten = function (t) {
      return t.reduce(e.flattenR, []);
    }, e.assertPredicate = m, e.pairs = function (t) {
      return Object.keys(t).map(function (e) {
        return [e, t[e]];
      });
    }, e.arrayTuples = g, e.applyPairs = y, e.tail = w, e.silenceUncaughtInPromise = function (t) {
      return t["catch"](function (t) {
        return 0;
      }) && t;
    }, e.silentRejection = function (t) {
      return e.silenceUncaughtInPromise(_.services.$q.reject(t));
    };
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      if (e.isArray(t) && t.length) {
        var r = t.slice(0, -1),
            n = t.slice(-1);return !(r.filter(i.not(e.isString)).length || n.filter(i.not(e.isFunction)).length);
      }return e.isFunction(t);
    }var i = r(5),
        o = Object.prototype.toString,
        a = function a(t) {
      return function (e) {
        return (typeof e === "undefined" ? "undefined" : _typeof(e)) === t;
      };
    };e.isUndefined = a("undefined"), e.isDefined = i.not(e.isUndefined), e.isNull = function (t) {
      return null === t;
    }, e.isFunction = a("function"), e.isNumber = a("number"), e.isString = a("string"), e.isObject = function (t) {
      return null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t));
    }, e.isArray = Array.isArray, e.isDate = function (t) {
      return "[object Date]" === o.call(t);
    }, e.isRegExp = function (t) {
      return "[object RegExp]" === o.call(t);
    }, e.isInjectable = n, e.isPromise = i.and(e.isObject, i.pipe(i.prop("then"), e.isFunction));
  }, function (t, e) {
    "use strict";
    function r(t) {
      function e(r) {
        return r.length >= n ? t.apply(null, r) : function () {
          return e(r.concat([].slice.apply(arguments)));
        };
      }var r = [].slice.apply(arguments, [1]),
          n = t.length;return e(r);
    }function n() {
      var t = arguments,
          e = t.length - 1;return function () {
        for (var r = e, n = t[e].apply(this, arguments); r--;) {
          n = t[r].call(this, n);
        }return n;
      };
    }function i() {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t[e - 0] = arguments[e];
      }return n.apply(null, [].slice.call(arguments).reverse());
    }function o(t, e) {
      return function () {
        for (var r = [], n = 0; n < arguments.length; n++) {
          r[n - 0] = arguments[n];
        }return t.apply(null, r) && e.apply(null, r);
      };
    }function a(t, e) {
      return function () {
        for (var r = [], n = 0; n < arguments.length; n++) {
          r[n - 0] = arguments[n];
        }return t.apply(null, r) || e.apply(null, r);
      };
    }function s(t, e) {
      return function (r) {
        return r[t].apply(r, e);
      };
    }function u(t) {
      return function (e) {
        for (var r = 0; r < t.length; r++) {
          if (t[r][0](e)) return t[r][1](e);
        }
      };
    }e.curry = r, e.compose = n, e.pipe = i, e.prop = function (t) {
      return function (e) {
        return e && e[t];
      };
    }, e.propEq = r(function (t, e, r) {
      return r && r[t] === e;
    }), e.parse = function (t) {
      return i.apply(null, t.split(".").map(e.prop));
    }, e.not = function (t) {
      return function () {
        for (var e = [], r = 0; r < arguments.length; r++) {
          e[r - 0] = arguments[r];
        }return !t.apply(null, e);
      };
    }, e.and = o, e.or = a, e.all = function (t) {
      return function (e) {
        return e.reduce(function (e, r) {
          return e && !!t(r);
        }, !0);
      };
    }, e.any = function (t) {
      return function (e) {
        return e.reduce(function (e, r) {
          return e || !!t(r);
        }, !1);
      };
    }, e.is = function (t) {
      return function (e) {
        return null != e && e.constructor === t || e instanceof t;
      };
    }, e.eq = function (t) {
      return function (e) {
        return t === e;
      };
    }, e.val = function (t) {
      return function () {
        return t;
      };
    }, e.invoke = s, e.pattern = u;
  }, function (t, e) {
    "use strict";
    var r = function r(t) {
      return function () {
        throw new Error(t + "(): No coreservices implementation for UI-Router is loaded. You should include one of: ['angular1.js']");
      };
    },
        n = { $q: void 0, $injector: void 0, location: {}, locationConfig: {}, template: {} };e.services = n, ["setUrl", "path", "search", "hash", "onChange"].forEach(function (t) {
      return n.location[t] = r(t);
    }), ["port", "protocol", "host", "baseHref", "html5Mode", "hashPrefix"].forEach(function (t) {
      return n.locationConfig[t] = r(t);
    });
  }, function (t, e) {
    "use strict";
    var r = function () {
      function t(t) {
        this.text = t, this.glob = t.split(".");var e = this.text.split(".").map(function (t) {
          return "**" === t ? "(?:|(?:\\.[^.]*)*)" : "*" === t ? "\\.[^.]*" : "\\." + t;
        }).join("");this.regexp = new RegExp("^" + e + "$");
      }return t.prototype.matches = function (t) {
        return this.regexp.test("." + t);
      }, t.is = function (t) {
        return t.indexOf("*") > -1;
      }, t.fromString = function (e) {
        return this.is(e) ? new t(e) : null;
      }, t;
    }();e.Glob = r;
  }, function (t, e) {
    "use strict";
    var r = function () {
      function t(t, e) {
        void 0 === t && (t = []), void 0 === e && (e = null), this._items = t, this._limit = e;
      }return t.prototype.enqueue = function (t) {
        var e = this._items;return e.push(t), this._limit && e.length > this._limit && e.shift(), t;
      }, t.prototype.dequeue = function () {
        if (this.size()) return this._items.splice(0, 1)[0];
      }, t.prototype.clear = function () {
        var t = this._items;return this._items = [], t;
      }, t.prototype.size = function () {
        return this._items.length;
      }, t.prototype.remove = function (t) {
        var e = this._items.indexOf(t);return e > -1 && this._items.splice(e, 1)[0];
      }, t.prototype.peekTail = function () {
        return this._items[this._items.length - 1];
      }, t.prototype.peekHead = function () {
        if (this.size()) return this._items[0];
      }, t;
    }();e.Queue = r;
  }, function (t, e, r) {
    "use strict";
    function n(t, e) {
      return e.length <= t ? e : e.substr(0, t - 3) + "...";
    }function i(t, e) {
      for (; e.length < t;) {
        e += " ";
      }return e;
    }function o(t) {
      return t.replace(/^([A-Z])/, function (t) {
        return t.toLowerCase();
      }).replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }function a(t) {
      var e = s(t),
          r = e.match(/^(function [^ ]+\([^)]*\))/),
          n = r ? r[1] : e,
          i = t.name || "";return i && n.match(/function \(/) ? "function " + i + n.substr(9) : n;
    }function s(t) {
      var e = c.isArray(t) ? t.slice(-1)[0] : t;return e && e.toString() || "undefined";
    }function u(t) {
      function e(t) {
        if (c.isObject(t)) {
          if (r.indexOf(t) !== -1) return "[circular ref]";r.push(t);
        }return m(t);
      }var r = [];return JSON.stringify(t, function (t, r) {
        return e(r);
      }).replace(/\\"/g, '"');
    }var c = r(4),
        f = r(10),
        l = r(3),
        p = r(5),
        h = r(11),
        v = r(19);e.maxLength = n, e.padString = i, e.kebobString = o, e.functionToString = a, e.fnToString = s;var d = null,
        m = function m(t) {
      var e = f.Rejection.isTransitionRejectionPromise;return (d = d || p.pattern([[p.not(c.isDefined), p.val("undefined")], [c.isNull, p.val("null")], [c.isPromise, p.val("[Promise]")], [e, function (t) {
        return t._transitionRejection.toString();
      }], [p.is(f.Rejection), p.invoke("toString")], [p.is(h.Transition), p.invoke("toString")], [p.is(v.Resolvable), p.invoke("toString")], [c.isInjectable, a], [p.val(!0), l.identity]]))(t);
    };e.stringify = u, e.beforeAfterSubstr = function (t) {
      return function (e) {
        if (!e) return ["", ""];var r = e.indexOf(t);return r === -1 ? [e, ""] : [e.substr(0, r), e.substr(r + 1)];
      };
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(3),
        i = r(9);!function (t) {
      t[t.SUPERSEDED = 2] = "SUPERSEDED", t[t.ABORTED = 3] = "ABORTED", t[t.INVALID = 4] = "INVALID", t[t.IGNORED = 5] = "IGNORED", t[t.ERROR = 6] = "ERROR";
    }(e.RejectType || (e.RejectType = {}));var o = e.RejectType,
        a = function () {
      function t(t, e, r) {
        this.type = t, this.message = e, this.detail = r;
      }return t.prototype.toString = function () {
        var t = function t(_t) {
          return _t && _t.toString !== Object.prototype.toString ? _t.toString() : i.stringify(_t);
        },
            e = this.type,
            r = this.message,
            n = t(this.detail);return "TransitionRejection(type: " + e + ", message: " + r + ", detail: " + n + ")";
      }, t.prototype.toPromise = function () {
        return n.extend(n.silentRejection(this), { _transitionRejection: this });
      }, t.isTransitionRejectionPromise = function (e) {
        return e && "function" == typeof e.then && e._transitionRejection instanceof t;
      }, t.superseded = function (e, r) {
        var n = "The transition has been superseded by a different transition",
            i = new t(o.SUPERSEDED, n, e);return r && r.redirected && (i.redirected = !0), i;
      }, t.redirected = function (e) {
        return t.superseded(e, { redirected: !0 });
      }, t.invalid = function (e) {
        var r = "This transition is invalid";return new t(o.INVALID, r, e);
      }, t.ignored = function (e) {
        var r = "The transition was ignored";return new t(o.IGNORED, r, e);
      }, t.aborted = function (e) {
        var r = "The transition has been aborted";return new t(o.ABORTED, r, e);
      }, t.errored = function (e) {
        var r = "The transition errored";return new t(o.ERROR, r, e);
      }, t;
    }();e.Rejection = a;
  }, function (t, e, r) {
    "use strict";
    var n = r(9),
        i = r(12),
        o = r(6),
        a = r(3),
        s = r(4),
        u = r(5),
        c = r(13),
        f = r(15),
        l = r(16),
        p = r(21),
        h = r(20),
        v = r(14),
        d = r(22),
        m = r(19),
        g = r(10),
        y = r(17),
        w = r(25),
        b = 0,
        $ = u.prop("self"),
        R = function () {
      function t(e, r, n) {
        var i = this;if (this._deferred = o.services.$q.defer(), this.promise = this._deferred.promise, this.treeChanges = function () {
          return i._treeChanges;
        }, this.isActive = function () {
          return i === i._options.current();
        }, this.router = n, this._targetState = r, !r.valid()) throw new Error(r.error());f.HookRegistry.mixin(new f.HookRegistry(), this), this._options = a.extend({ current: u.val(this) }, r.options()), this.$id = b++;var s = h.PathFactory.buildToPath(e, r);this._treeChanges = h.PathFactory.treeChanges(e, s, this._options.reloadState);var c = this._treeChanges.entering.map(function (t) {
          return t.state;
        });h.PathFactory.applyViewConfigs(n.transitionService.$view, this._treeChanges.to, c);var l = [new m.Resolvable(w.UIRouter, function () {
          return n;
        }, [], void 0, n), new m.Resolvable(t, function () {
          return i;
        }, [], void 0, this), new m.Resolvable("$transition$", function () {
          return i;
        }, [], void 0, this), new m.Resolvable("$stateParams", function () {
          return i.params();
        }, [], void 0, this.params())],
            p = this._treeChanges.to[0],
            v = new y.ResolveContext(this._treeChanges.to);v.addResolvables(l, p.state);
      }return t.prototype.onBefore = function (t, e, r) {
        throw "";
      }, t.prototype.onStart = function (t, e, r) {
        throw "";
      }, t.prototype.onExit = function (t, e, r) {
        throw "";
      }, t.prototype.onRetain = function (t, e, r) {
        throw "";
      }, t.prototype.onEnter = function (t, e, r) {
        throw "";
      }, t.prototype.onFinish = function (t, e, r) {
        throw "";
      }, t.prototype.onSuccess = function (t, e, r) {
        throw "";
      }, t.prototype.onError = function (t, e, r) {
        throw "";
      }, t.prototype.$from = function () {
        return a.tail(this._treeChanges.from).state;
      }, t.prototype.$to = function () {
        return a.tail(this._treeChanges.to).state;
      }, t.prototype.from = function () {
        return this.$from().self;
      }, t.prototype.to = function () {
        return this.$to().self;
      }, t.prototype.targetState = function () {
        return this._targetState;
      }, t.prototype.is = function (e) {
        return e instanceof t ? this.is({ to: e.$to().name, from: e.$from().name }) : !(e.to && !f.matchState(this.$to(), e.to) || e.from && !f.matchState(this.$from(), e.from));
      }, t.prototype.params = function (t) {
        return void 0 === t && (t = "to"), this._treeChanges[t].map(u.prop("paramValues")).reduce(a.mergeR, {});
      }, t.prototype.injector = function (t) {
        var e = this.treeChanges().to;return t && (e = h.PathFactory.subPath(e, function (e) {
          return e.state === t || e.state.name === t;
        })), new y.ResolveContext(e).injector();
      }, t.prototype.getResolveTokens = function () {
        return new y.ResolveContext(this._treeChanges.to).getTokens();
      }, t.prototype.getResolveValue = function (t) {
        var e = new y.ResolveContext(this._treeChanges.to),
            r = function r(t) {
          var r = e.getResolvable(t);if (void 0 === r) throw new Error("Dependency Injection token not found: " + n.stringify(t));return r.data;
        };return s.isArray(t) ? t.map(r) : r(t);
      }, t.prototype.getResolvable = function (t) {
        return new y.ResolveContext(this._treeChanges.to).getResolvable(t);
      }, t.prototype.addResolvable = function (t, e) {
        void 0 === e && (e = "");var r = "string" == typeof e ? e : e.name,
            n = this._treeChanges.to,
            i = a.find(n, function (t) {
          return t.state.name === r;
        }),
            o = new y.ResolveContext(n);o.addResolvables([t], i.state);
      }, t.prototype.redirectedFrom = function () {
        return this._options.redirectedFrom || null;
      }, t.prototype.options = function () {
        return this._options;
      }, t.prototype.entering = function () {
        return a.map(this._treeChanges.entering, u.prop("state")).map($);
      }, t.prototype.exiting = function () {
        return a.map(this._treeChanges.exiting, u.prop("state")).map($).reverse();
      }, t.prototype.retained = function () {
        return a.map(this._treeChanges.retained, u.prop("state")).map($);
      }, t.prototype.views = function (t, e) {
        void 0 === t && (t = "entering");var r = this._treeChanges[t];return r = e ? r.filter(u.propEq("state", e)) : r, r.map(u.prop("views")).filter(a.identity).reduce(a.unnestR, []);
      }, t.prototype.redirect = function (t) {
        var e = a.extend({}, this.options(), t.options(), { redirectedFrom: this, source: "redirect" });t = new v.TargetState(t.identifier(), t.$state(), t.params(), e);var r = this.router.transitionService.create(this._treeChanges.from, t),
            n = this.treeChanges().entering,
            i = r.treeChanges().entering,
            o = function o(t) {
          return function (e) {
            return t && e.state.includes[t.name];
          };
        },
            s = p.PathNode.matching(i, n).filter(u.not(o(t.options().reloadState)));return s.forEach(function (t, e) {
          t.resolvables = n[e].resolvables;
        }), r;
      }, t.prototype._changedParams = function () {
        var t = this._treeChanges,
            e = t.to,
            r = t.from;if (!this._options.reload && a.tail(e).state === a.tail(r).state) {
          var n = e.map(function (t) {
            return t.paramSchema;
          }),
              i = [e, r].map(function (t) {
            return t.map(function (t) {
              return t.paramValues;
            });
          }),
              o = i[0],
              s = i[1],
              u = a.arrayTuples(n, o, s);return u.map(function (t) {
            var e = t[0],
                r = t[1],
                n = t[2];return d.Param.changed(e, r, n);
          }).reduce(a.unnestR, []);
        }
      }, t.prototype.dynamic = function () {
        var t = this._changedParams();return !!t && t.map(function (t) {
          return t.dynamic;
        }).reduce(a.anyTrueR, !1);
      }, t.prototype.ignored = function () {
        var t = this._changedParams();return !!t && 0 === t.length;
      }, t.prototype.hookBuilder = function () {
        return new l.HookBuilder(this.router.transitionService, this, { transition: this, current: this._options.current });
      }, t.prototype.run = function () {
        var t = this,
            e = c.TransitionHook.runSynchronousHooks,
            r = this.hookBuilder(),
            n = this.router.globals;n.transitionHistory.enqueue(this);var o = e(r.getOnBeforeHooks());if (g.Rejection.isTransitionRejectionPromise(o)) {
          o["catch"](function () {
            return 0;
          });var a = o._transitionRejection;return this._deferred.reject(a), this.promise;
        }if (!this.valid()) {
          var s = new Error(this.error());return this._deferred.reject(s), this.promise;
        }if (this.ignored()) return i.trace.traceTransitionIgnored(this), this._deferred.reject(g.Rejection.ignored()), this.promise;var u = function u() {
          i.trace.traceSuccess(t.$to(), t), t.success = !0, t._deferred.resolve(t.to()), e(r.getOnSuccessHooks(), !0);
        },
            f = function f(n) {
          i.trace.traceError(n, t), t.success = !1, t._deferred.reject(n), t._error = n, e(r.getOnErrorHooks(), !0);
        };i.trace.traceTransitionStart(this);var l = function l(t, e) {
          return t.then(function () {
            return e.invokeHook();
          });
        };return r.asyncHooks().reduce(l, o).then(u, f), this.promise;
      }, t.prototype.valid = function () {
        return !this.error() || void 0 !== this.success;
      }, t.prototype.error = function () {
        for (var t = this.$to(), e = 0, r = this; null != (r = r.redirectedFrom());) {
          if (++e > 20) return "Too many Transition redirects (20+)";
        }return t.self["abstract"] ? "Cannot transition to abstract state '" + t.name + "'" : d.Param.validates(t.parameters(), this.params()) ? this.success === !1 ? this._error : void 0 : "Param values not valid for state '" + t.name + "'";
      }, t.prototype.toString = function () {
        var t = this.from(),
            e = this.to(),
            r = function r(t) {
          return null !== t["#"] && void 0 !== t["#"] ? t : a.omit(t, "#");
        },
            n = this.$id,
            i = s.isObject(t) ? t.name : t,
            o = a.toJson(r(this._treeChanges.from.map(u.prop("paramValues")).reduce(a.mergeR, {}))),
            c = this.valid() ? "" : "(X) ",
            f = s.isObject(e) ? e.name : e,
            l = a.toJson(r(this.params()));return "Transition#" + n + "( '" + i + "'" + o + " -> " + c + "'" + f + "'" + l + " )";
      }, t.diToken = t, t;
    }();e.Transition = R;
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t ? "[ui-view#" + t.id + " tag " + ("in template from '" + (t.creationContext && t.creationContext.name || "(root)") + "' state]: ") + ("fqn: '" + t.fqn + "', ") + ("name: '" + t.name + "@" + t.creationContext + "')") : "ui-view (defunct)";
    }function i(t) {
      return a.isNumber(t) ? c[t] : c[c[t]];
    }var o = r(5),
        a = r(4),
        s = r(9),
        u = function u(t) {
      return "[ViewConfig#" + t.$id + " from '" + (t.viewDecl.$context.name || "(root)") + "' state]: target ui-view: '" + t.viewDecl.$uiViewName + "@" + t.viewDecl.$uiViewContextAnchor + "'";
    };!function (t) {
      t[t.RESOLVE = 0] = "RESOLVE", t[t.TRANSITION = 1] = "TRANSITION", t[t.HOOK = 2] = "HOOK", t[t.UIVIEW = 3] = "UIVIEW", t[t.VIEWCONFIG = 4] = "VIEWCONFIG";
    }(e.Category || (e.Category = {}));var c = e.Category,
        f = function () {
      function t() {
        this._enabled = {}, this.approximateDigests = 0;
      }return t.prototype._set = function (t, e) {
        var r = this;e.length || (e = Object.keys(c).map(function (t) {
          return parseInt(t, 10);
        }).filter(function (t) {
          return !isNaN(t);
        }).map(function (t) {
          return c[t];
        })), e.map(i).forEach(function (e) {
          return r._enabled[e] = t;
        });
      }, t.prototype.enable = function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e - 0] = arguments[e];
        }this._set(!0, t);
      }, t.prototype.disable = function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e - 0] = arguments[e];
        }this._set(!1, t);
      }, t.prototype.enabled = function (t) {
        return !!this._enabled[i(t)];
      }, t.prototype.traceTransitionStart = function (t) {
        if (this.enabled(c.TRANSITION)) {
          var e = t.$id,
              r = this.approximateDigests,
              n = s.stringify(t);console.log("Transition #" + e + " Digest #" + r + ": Started  -> " + n);
        }
      }, t.prototype.traceTransitionIgnored = function (t) {
        if (this.enabled(c.TRANSITION)) {
          var e = t && t.$id,
              r = this.approximateDigests,
              n = s.stringify(t);console.log("Transition #" + e + " Digest #" + r + ": Ignored  <> " + n);
        }
      }, t.prototype.traceHookInvocation = function (t, e) {
        if (this.enabled(c.HOOK)) {
          var r = o.parse("transition.$id")(e),
              n = this.approximateDigests,
              i = o.parse("traceData.hookType")(e) || "internal",
              a = o.parse("traceData.context.state.name")(e) || o.parse("traceData.context")(e) || "unknown",
              u = s.functionToString(t.eventHook.callback);console.log("Transition #" + r + " Digest #" + n + ":   Hook -> " + i + " context: " + a + ", " + s.maxLength(200, u));
        }
      }, t.prototype.traceHookResult = function (t, e) {
        if (this.enabled(c.HOOK)) {
          var r = o.parse("transition.$id")(e),
              n = this.approximateDigests,
              i = s.stringify(t);console.log("Transition #" + r + " Digest #" + n + ":   <- Hook returned: " + s.maxLength(200, i));
        }
      }, t.prototype.traceResolvePath = function (t, e, r) {
        if (this.enabled(c.RESOLVE)) {
          var n = r && r.$id,
              i = this.approximateDigests,
              o = t && t.toString();console.log("Transition #" + n + " Digest #" + i + ":         Resolving " + o + " (" + e + ")");
        }
      }, t.prototype.traceResolvableResolved = function (t, e) {
        if (this.enabled(c.RESOLVE)) {
          var r = e && e.$id,
              n = this.approximateDigests,
              i = t && t.toString(),
              o = s.stringify(t.data);console.log("Transition #" + r + " Digest #" + n + ":               <- Resolved  " + i + " to: " + s.maxLength(200, o));
        }
      }, t.prototype.traceError = function (t, e) {
        if (this.enabled(c.TRANSITION)) {
          var r = e && e.$id,
              n = this.approximateDigests,
              i = s.stringify(e);console.log("Transition #" + r + " Digest #" + n + ": <- Rejected " + i + ", reason: " + t);
        }
      }, t.prototype.traceSuccess = function (t, e) {
        if (this.enabled(c.TRANSITION)) {
          var r = e && e.$id,
              n = this.approximateDigests,
              i = t.name,
              o = s.stringify(e);console.log("Transition #" + r + " Digest #" + n + ": <- Success  " + o + ", final state: " + i);
        }
      }, t.prototype.traceUIViewEvent = function (t, e, r) {
        void 0 === r && (r = ""), this.enabled(c.UIVIEW) && console.log("ui-view: " + s.padString(30, t) + " " + n(e) + r);
      }, t.prototype.traceUIViewConfigUpdated = function (t, e) {
        this.enabled(c.UIVIEW) && this.traceUIViewEvent("Updating", t, " with ViewConfig from context='" + e + "'");
      }, t.prototype.traceUIViewFill = function (t, e) {
        this.enabled(c.UIVIEW) && this.traceUIViewEvent("Fill", t, " with: " + s.maxLength(200, e));
      }, t.prototype.traceViewServiceEvent = function (t, e) {
        this.enabled(c.VIEWCONFIG) && console.log("VIEWCONFIG: " + t + " " + u(e));
      }, t.prototype.traceViewServiceUIViewEvent = function (t, e) {
        this.enabled(c.VIEWCONFIG) && console.log("VIEWCONFIG: " + t + " " + n(e));
      }, t;
    }();e.Trace = f;var l = new f();e.trace = l;
  }, function (t, e, r) {
    "use strict";
    var n = r(3),
        i = r(9),
        o = r(4),
        a = r(5),
        s = r(12),
        u = r(6),
        c = r(10),
        f = r(14),
        l = { async: !0, rejectIfSuperseded: !0, current: n.noop, transition: null, traceData: {}, bind: null },
        p = function () {
      function t(t, e, r, i) {
        var o = this;this.transition = t, this.stateContext = e, this.eventHook = r, this.options = i, this.isSuperseded = function () {
          return o.options.current() !== o.options.transition;
        }, this.options = n.defaults(i, l);
      }return t.prototype.invokeHook = function () {
        var t = this,
            e = t.options,
            r = t.eventHook;if (s.trace.traceHookInvocation(this, e), e.rejectIfSuperseded && this.isSuperseded()) return c.Rejection.superseded(e.current()).toPromise();var n = r._deregistered ? void 0 : r.callback.call(e.bind, this.transition, this.stateContext);return this.handleHookResult(n);
      }, t.prototype.handleHookResult = function (t) {
        if (this.isSuperseded()) return c.Rejection.superseded(this.options.current()).toPromise();if (o.isPromise(t)) return t.then(this.handleHookResult.bind(this));if (s.trace.traceHookResult(t, this.options), t === !1) return c.Rejection.aborted("Hook aborted transition").toPromise();var e = a.is(f.TargetState);return e(t) ? c.Rejection.redirected(t).toPromise() : void 0;
      }, t.prototype.toString = function () {
        var t = this,
            e = t.options,
            r = t.eventHook,
            n = a.parse("traceData.hookType")(e) || "internal",
            o = a.parse("traceData.context.state.name")(e) || a.parse("traceData.context")(e) || "unknown",
            s = i.fnToString(r.callback);return n + " context: " + o + ", " + i.maxLength(200, s);
      }, t.runSynchronousHooks = function (t, e) {
        void 0 === e && (e = !1);for (var r = [], n = 0; n < t.length; n++) {
          var i = t[n];try {
            r.push(i.invokeHook());
          } catch (s) {
            if (!e) return c.Rejection.errored(s).toPromise();var f = i.transition.router.stateService.defaultErrorHandler();f(s);
          }
        }var l = r.filter(c.Rejection.isTransitionRejectionPromise);return l.length ? l[0] : r.filter(o.isPromise).reduce(function (t, e) {
          return t.then(a.val(e));
        }, u.services.$q.when());
      }, t;
    }();e.TransitionHook = p;
  }, function (t, e, r) {
    "use strict";
    var n = r(3),
        i = function () {
      function t(t, e, r, n) {
        void 0 === r && (r = {}), void 0 === n && (n = {}), this._identifier = t, this._definition = e, this._options = n, this._params = r || {};
      }return t.prototype.name = function () {
        return this._definition && this._definition.name || this._identifier;
      }, t.prototype.identifier = function () {
        return this._identifier;
      }, t.prototype.params = function () {
        return this._params;
      }, t.prototype.$state = function () {
        return this._definition;
      }, t.prototype.state = function () {
        return this._definition && this._definition.self;
      }, t.prototype.options = function () {
        return this._options;
      }, t.prototype.exists = function () {
        return !(!this._definition || !this._definition.self);
      }, t.prototype.valid = function () {
        return !this.error();
      }, t.prototype.error = function () {
        var t = this.options().relative;if (!this._definition && t) {
          var e = t.name ? t.name : t;return "Could not resolve '" + this.name() + "' from state '" + e + "'";
        }return this._definition ? this._definition.self ? void 0 : "State '" + this.name() + "' has an invalid definition" : "No such state '" + this.name() + "'";
      }, t.prototype.toString = function () {
        return "'" + this.name() + "'" + n.toJson(this.params());
      }, t;
    }();e.TargetState = i;
  }, function (t, e, r) {
    "use strict";
    function n(t, e) {
      function r(t) {
        for (var e = n, r = 0; r < e.length; r++) {
          var i = s.Glob.fromString(e[r]);if (i && i.matches(t.name) || !i && e[r] === t.name) return !0;
        }return !1;
      }var n = a.isString(e) ? [e] : e,
          i = a.isFunction(n) ? n : r;return !!i(t);
    }function i(t, e) {
      return function (r, n, i) {
        void 0 === i && (i = {});var a = new u(r, n, i);return t[e].push(a), function () {
          a._deregistered = !0, o.removeFrom(t[e])(a);
        };
      };
    }var o = r(3),
        a = r(4),
        s = r(7);e.matchState = n;var u = function () {
      function t(t, e, r) {
        void 0 === r && (r = {}), this.callback = e, this.matchCriteria = o.extend({ to: !0, from: !0, exiting: !0, retained: !0, entering: !0 }, t), this.priority = r.priority || 0, this.bind = r.bind || null, this._deregistered = !1;
      }return t._matchingNodes = function (t, e) {
        if (e === !0) return t;var r = t.filter(function (t) {
          return n(t.state, e);
        });return r.length ? r : null;
      }, t.prototype.matches = function (e) {
        var r = this.matchCriteria,
            n = t._matchingNodes,
            i = { to: n([o.tail(e.to)], r.to), from: n([o.tail(e.from)], r.from), exiting: n(e.exiting, r.exiting), retained: n(e.retained, r.retained), entering: n(e.entering, r.entering) },
            a = ["to", "from", "exiting", "retained", "entering"].map(function (t) {
          return i[t];
        }).reduce(o.allTrueR, !0);return a ? i : null;
      }, t;
    }();e.EventHook = u;var c = function () {
      function t() {
        var t = this;this._transitionEvents = { onBefore: [], onStart: [], onEnter: [], onRetain: [], onExit: [], onFinish: [], onSuccess: [], onError: [] }, this.getHooks = function (e) {
          return t._transitionEvents[e];
        }, this.onBefore = i(this._transitionEvents, "onBefore"), this.onStart = i(this._transitionEvents, "onStart"), this.onEnter = i(this._transitionEvents, "onEnter"), this.onRetain = i(this._transitionEvents, "onRetain"), this.onExit = i(this._transitionEvents, "onExit"), this.onFinish = i(this._transitionEvents, "onFinish"), this.onSuccess = i(this._transitionEvents, "onSuccess"), this.onError = i(this._transitionEvents, "onError");
      }return t.mixin = function (t, e) {
        Object.keys(t._transitionEvents).concat(["getHooks"]).forEach(function (r) {
          return e[r] = t[r];
        });
      }, t;
    }();e.HookRegistry = c;
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return void 0 === t && (t = !1), function (e, r) {
        var n = t ? -1 : 1,
            i = (e.node.state.path.length - r.node.state.path.length) * n;return 0 !== i ? i : r.hook.priority - e.hook.priority;
      };
    }var i = r(3),
        o = r(4),
        a = r(13),
        s = r(17),
        u = function () {
      function t(t, e, r) {
        var o = this;this.$transitions = t, this.transition = e, this.baseHookOptions = r, this.getOnBeforeHooks = function () {
          return o._buildNodeHooks("onBefore", "to", n(), { async: !1 });
        }, this.getOnStartHooks = function () {
          return o._buildNodeHooks("onStart", "to", n());
        }, this.getOnExitHooks = function () {
          return o._buildNodeHooks("onExit", "exiting", n(!0), { stateHook: !0 });
        }, this.getOnRetainHooks = function () {
          return o._buildNodeHooks("onRetain", "retained", n(!1), { stateHook: !0 });
        }, this.getOnEnterHooks = function () {
          return o._buildNodeHooks("onEnter", "entering", n(!1), { stateHook: !0 });
        }, this.getOnFinishHooks = function () {
          return o._buildNodeHooks("onFinish", "to", n());
        }, this.getOnSuccessHooks = function () {
          return o._buildNodeHooks("onSuccess", "to", n(), { async: !1, rejectIfSuperseded: !1 });
        }, this.getOnErrorHooks = function () {
          return o._buildNodeHooks("onError", "to", n(), { async: !1, rejectIfSuperseded: !1 });
        }, this.treeChanges = e.treeChanges(), this.toState = i.tail(this.treeChanges.to).state, this.fromState = i.tail(this.treeChanges.from).state, this.transitionOptions = e.options();
      }return t.prototype.asyncHooks = function () {
        var t = this.getOnStartHooks(),
            e = this.getOnExitHooks(),
            r = this.getOnRetainHooks(),
            n = this.getOnEnterHooks(),
            o = this.getOnFinishHooks(),
            a = [t, e, r, n, o];return a.reduce(i.unnestR, []).filter(i.identity);
      }, t.prototype._buildNodeHooks = function (t, e, r, n) {
        var o = this,
            u = this._matchingHooks(t, this.treeChanges);if (!u) return [];var c = function c(r) {
          var u = r.matches(o.treeChanges),
              c = u[e],
              f = "exiting" === e ? o.treeChanges.from : o.treeChanges.to;new s.ResolveContext(f);return c.map(function (e) {
            var s = i.extend({ bind: r.bind, traceData: { hookType: t, context: e } }, o.baseHookOptions, n),
                u = s.stateHook ? e.state : null,
                c = new a.TransitionHook(o.transition, u, r, s);return { hook: r, node: e, transitionHook: c };
          });
        };return u.map(c).reduce(i.unnestR, []).sort(r).map(function (t) {
          return t.transitionHook;
        });
      }, t.prototype._matchingHooks = function (t, e) {
        return [this.transition, this.$transitions].map(function (e) {
          return e.getHooks(t);
        }).filter(i.assertPredicate(o.isArray, "broken event named: " + t)).reduce(i.unnestR, []).filter(function (t) {
          return t.matches(e);
        });
      }, t;
    }();e.HookBuilder = u;
  }, function (t, e, r) {
    "use strict";
    var n = r(3),
        i = r(5),
        o = r(12),
        a = r(6),
        s = r(18),
        u = r(19),
        c = r(20),
        f = r(9),
        l = s.resolvePolicies.when,
        p = [l.EAGER, l.LAZY],
        h = [l.EAGER];e.NATIVE_INJECTOR_TOKEN = "Native Injector";var v = function () {
      function t(t) {
        this._path = t;
      }return t.prototype.getTokens = function () {
        return this._path.reduce(function (t, e) {
          return t.concat(e.resolvables.map(function (t) {
            return t.token;
          }));
        }, []).reduce(n.uniqR, []);
      }, t.prototype.getResolvable = function (t) {
        var e = this._path.map(function (t) {
          return t.resolvables;
        }).reduce(n.unnestR, []).filter(function (e) {
          return e.token === t;
        });return n.tail(e);
      }, t.prototype.subContext = function (e) {
        return new t(c.PathFactory.subPath(this._path, function (t) {
          return t.state === e;
        }));
      }, t.prototype.addResolvables = function (t, e) {
        var r = n.find(this._path, i.propEq("state", e)),
            o = t.map(function (t) {
          return t.token;
        });r.resolvables = r.resolvables.filter(function (t) {
          return o.indexOf(t.token) === -1;
        }).concat(t);
      }, t.prototype.resolvePath = function (t, e) {
        var r = this;void 0 === t && (t = "LAZY");var i = n.inArray(p, t) ? t : "LAZY",
            u = i === s.resolvePolicies.when.EAGER ? h : p;o.trace.traceResolvePath(this._path, t, e);var c = this._path.reduce(function (t, i) {
          var o = function o(t) {
            return n.inArray(u, t.getPolicy(i.state).when);
          },
              a = i.resolvables.filter(o),
              s = r.subContext(i.state),
              c = function c(t) {
            return t.get(s, e).then(function (e) {
              return { token: t.token, value: e };
            });
          };return t.concat(a.map(c));
        }, []);return a.services.$q.all(c);
      }, t.prototype.injector = function () {
        return this._injector || (this._injector = new d(this));
      }, t.prototype.findNode = function (t) {
        return n.find(this._path, function (e) {
          return n.inArray(e.resolvables, t);
        });
      }, t.prototype.getDependencies = function (t) {
        var e = this,
            r = this.findNode(t),
            i = c.PathFactory.subPath(this._path, function (t) {
          return t === r;
        }) || this._path,
            o = i.reduce(function (t, e) {
          return t.concat(e.resolvables);
        }, []).filter(function (e) {
          return e !== t;
        }),
            a = function a(t) {
          var r = o.filter(function (e) {
            return e.token === t;
          });if (r.length) return n.tail(r);var i = e.injector().getNative(t);if (!i) throw new Error("Could not find Dependency Injection token: " + f.stringify(t));return new u.Resolvable(t, function () {
            return i;
          }, [], i);
        };return t.deps.map(a);
      }, t;
    }();e.ResolveContext = v;var d = function () {
      function t(t) {
        this.context = t, this["native"] = this.get(e.NATIVE_INJECTOR_TOKEN) || a.services.$injector;
      }return t.prototype.get = function (t) {
        var e = this.context.getResolvable(t);if (e) {
          if (!e.resolved) throw new Error("Resolvable async .get() not complete:" + f.stringify(e.token));return e.data;
        }return this["native"] && this["native"].get(t);
      }, t.prototype.getAsync = function (t) {
        var e = this.context.getResolvable(t);return e ? e.get(this.context) : a.services.$q.when(this["native"].get(t));
      }, t.prototype.getNative = function (t) {
        return this["native"].get(t);
      }, t;
    }();
  }, function (t, e) {
    "use strict";
    e.resolvePolicies = { when: { LAZY: "LAZY", EAGER: "EAGER" }, async: { WAIT: "WAIT", NOWAIT: "NOWAIT", RXWAIT: "RXWAIT" } };
  }, function (t, e, r) {
    "use strict";
    var n = r(3),
        i = r(6),
        o = r(12),
        a = r(9),
        s = r(4);e.defaultResolvePolicy = { when: "LAZY", async: "WAIT" };var u = function () {
      function t(e, r, o, a, u) {
        if (this.resolved = !1, this.promise = void 0, e instanceof t) n.extend(this, e);else if (s.isFunction(r)) {
          if (null == e || void 0 == e) throw new Error("new Resolvable(): token argument is required");if (!s.isFunction(r)) throw new Error("new Resolvable(): resolveFn argument must be a function");this.token = e, this.policy = a, this.resolveFn = r, this.deps = o || [], this.data = u, this.resolved = void 0 !== u, this.promise = this.resolved ? i.services.$q.when(this.data) : void 0;
        } else if (s.isObject(e) && e.token && s.isFunction(e.resolveFn)) {
          var c = e;return new t(c.token, c.resolveFn, c.deps, c.policy, c.data);
        }
      }return t.prototype.getPolicy = function (t) {
        var r = this.policy || {},
            n = t && t.resolvePolicy || {};return { when: r.when || n.when || e.defaultResolvePolicy.when, async: r.async || n.async || e.defaultResolvePolicy.async };
      }, t.prototype.resolve = function (t, e) {
        var r = this,
            a = i.services.$q,
            s = function s() {
          return a.all(t.getDependencies(r).map(function (r) {
            return r.get(t, e);
          }));
        },
            u = function u(t) {
          return r.resolveFn.apply(null, t);
        },
            c = function c(t) {
          var e = t.cache(1);return e.take(1).toPromise().then(function () {
            return e;
          });
        },
            f = t.findNode(this),
            l = f && f.state,
            p = "RXWAIT" === this.getPolicy(l).async ? c : n.identity,
            h = function h(t) {
          return r.data = t, r.resolved = !0, o.trace.traceResolvableResolved(r, e), r.data;
        };return this.promise = a.when().then(s).then(u).then(p).then(h);
      }, t.prototype.get = function (t, e) {
        return this.promise || this.resolve(t, e);
      }, t.prototype.toString = function () {
        return "Resolvable(token: " + a.stringify(this.token) + ", requires: [" + this.deps.map(a.stringify) + "])";
      }, t.prototype.clone = function () {
        return new t(this);
      }, t.fromData = function (e, r) {
        return new t(e, function () {
          return r;
        }, null, null, r);
      }, t;
    }();e.Resolvable = u;
  }, function (t, e, r) {
    "use strict";
    var n = r(3),
        i = r(5),
        o = r(14),
        a = r(21),
        s = function () {
      function t() {}return t.makeTargetState = function (t) {
        var e = n.tail(t).state;return new o.TargetState(e, e, t.map(i.prop("paramValues")).reduce(n.mergeR, {}));
      }, t.buildPath = function (t) {
        var e = t.params();return t.$state().path.map(function (t) {
          return new a.PathNode(t).applyRawParams(e);
        });
      }, t.buildToPath = function (e, r) {
        var n = t.buildPath(r);return r.options().inherit ? t.inheritParams(e, n, Object.keys(r.params())) : n;
      }, t.applyViewConfigs = function (e, r, i) {
        r.filter(function (t) {
          return n.inArray(i, t.state);
        }).forEach(function (i) {
          var o = n.values(i.state.views || {}),
              a = t.subPath(r, function (t) {
            return t === i;
          }),
              s = o.map(function (t) {
            return e.createViewConfig(a, t);
          });i.views = s.reduce(n.unnestR, []);
        });
      }, t.inheritParams = function (t, e, r) {
        function o(t, e) {
          var r = n.find(t, i.propEq("state", e));return n.extend({}, r && r.paramValues);
        }function s(e) {
          var i = n.extend({}, e && e.paramValues),
              s = n.pick(i, r);i = n.omit(i, r);var u = o(t, e.state) || {},
              c = n.extend(i, u, s);return new a.PathNode(e.state).applyRawParams(c);
        }return void 0 === r && (r = []), e.map(s);
      }, t.treeChanges = function (t, e, r) {
        function n(t, r) {
          var n = a.PathNode.clone(t);return n.paramValues = e[r].paramValues, n;
        }for (var o = 0, s = Math.min(t.length, e.length), u = function u(t) {
          return t.parameters({ inherit: !1 }).filter(i.not(i.prop("dynamic"))).map(i.prop("id"));
        }, c = function c(t, e) {
          return t.equals(e, u(t.state));
        }; o < s && t[o].state !== r && c(t[o], e[o]);) {
          o++;
        }var f, l, p, h, v;f = t, l = f.slice(0, o), p = f.slice(o);var d = l.map(n);return h = e.slice(o), v = d.concat(h), { from: f, to: v, retained: l, exiting: p, entering: h };
      }, t.subPath = function (t, e) {
        var r = n.find(t, e),
            i = t.indexOf(r);return i === -1 ? void 0 : t.slice(0, i + 1);
      }, t.paramValues = function (t) {
        return t.reduce(function (t, e) {
          return n.extend(t, e.paramValues);
        }, {});
      }, t;
    }();e.PathFactory = s;
  }, function (t, e, r) {
    "use strict";
    var n = r(3),
        i = r(5),
        o = r(22),
        a = function () {
      function t(e) {
        if (e instanceof t) {
          var r = e;this.state = r.state, this.paramSchema = r.paramSchema.slice(), this.paramValues = n.extend({}, r.paramValues), this.resolvables = r.resolvables.slice(), this.views = r.views && r.views.slice();
        } else {
          var i = e;this.state = i, this.paramSchema = i.parameters({ inherit: !1 }), this.paramValues = {}, this.resolvables = i.resolvables.map(function (t) {
            return t.clone();
          });
        }
      }return t.prototype.applyRawParams = function (t) {
        var e = function e(_e) {
          return [_e.id, _e.value(t[_e.id])];
        };return this.paramValues = this.paramSchema.reduce(function (t, r) {
          return n.applyPairs(t, e(r));
        }, {}), this;
      }, t.prototype.parameter = function (t) {
        return n.find(this.paramSchema, i.propEq("id", t));
      }, t.prototype.equals = function (t, e) {
        var r = this;void 0 === e && (e = this.paramSchema.map(function (t) {
          return t.id;
        }));var i = function i(e) {
          return r.parameter(e).type.equals(r.paramValues[e], t.paramValues[e]);
        };return this.state === t.state && e.map(i).reduce(n.allTrueR, !0);
      }, t.clone = function (e) {
        return new t(e);
      }, t.matching = function (t, e, r) {
        void 0 === r && (r = !0);for (var n = [], i = 0; i < t.length && i < e.length; i++) {
          var a = t[i],
              s = e[i];if (a.state !== s.state) break;var u = o.Param.changed(a.paramSchema, a.paramValues, s.paramValues).filter(function (t) {
            return !(r && t.dynamic);
          });if (u.length) break;n.push(a);
        }return n;
      }, t;
    }();e.PathNode = a;
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t = v(t) && { value: t } || t, s.extend(t, { $$fn: c.isInjectable(t.value) ? t.value : function () {
          return t.value;
        } });
    }function i(t, e, r, n, i) {
      if (t.type && e && "string" !== e.name) throw new Error("Param '" + n + "' has two type configurations.");return t.type && e && "string" === e.name && i.type(t.type) ? i.type(t.type) : e ? e : t.type ? t.type instanceof p.ParamType ? t.type : i.type(t.type) : r === d.CONFIG ? i.type("any") : i.type("string");
    }function o(t, e) {
      var r = t.squash;if (!e || r === !1) return !1;if (!c.isDefined(r) || null == r) return l.matcherConfig.defaultSquashPolicy();if (r === !0 || c.isString(r)) return r;throw new Error("Invalid squash policy: '" + r + "'. Valid policies: false, true, or arbitrary string");
    }function a(t, e, r, n) {
      var i,
          o,
          a = [{ from: "", to: r || e ? void 0 : "" }, { from: null, to: r || e ? void 0 : "" }];return i = c.isArray(t.replace) ? t.replace : [], c.isString(n) && i.push({ from: n, to: void 0 }), o = s.map(i, u.prop("from")), s.filter(a, function (t) {
        return o.indexOf(t.from) === -1;
      }).concat(i);
    }var s = r(3),
        u = r(5),
        c = r(4),
        f = r(6),
        l = r(23),
        p = r(24),
        h = Object.prototype.hasOwnProperty,
        v = function v(t) {
      return 0 === ["value", "type", "squash", "array", "dynamic"].filter(h.bind(t || {})).length;
    };!function (t) {
      t[t.PATH = 0] = "PATH", t[t.SEARCH = 1] = "SEARCH", t[t.CONFIG = 2] = "CONFIG";
    }(e.DefType || (e.DefType = {}));var d = e.DefType,
        m = function () {
      function t(t, e, r, u, f) {
        function l() {
          var e = { array: u === d.SEARCH && "auto" },
              n = t.match(/\[\]$/) ? { array: !0 } : {};return s.extend(e, n, r).array;
        }r = n(r), e = i(r, e, u, t, f);var p = l();e = p ? e.$asArray(p, u === d.SEARCH) : e;var h = void 0 !== r.value,
            v = c.isDefined(r.dynamic) ? !!r.dynamic : !!e.dynamic,
            m = o(r, h),
            g = a(r, p, h, m);s.extend(this, { id: t, type: e, location: u, squash: m, replace: g, isOptional: h, dynamic: v, config: r, array: p });
      }return t.prototype.isDefaultValue = function (t) {
        return this.isOptional && this.type.equals(this.value(), t);
      }, t.prototype.value = function (t) {
        var e = this,
            r = function r() {
          if (!f.services.$injector) throw new Error("Injectable functions cannot be called at configuration time");var t = f.services.$injector.invoke(e.config.$$fn);if (null !== t && void 0 !== t && !e.type.is(t)) throw new Error("Default value (" + t + ") for parameter '" + e.id + "' is not an instance of ParamType (" + e.type.name + ")");return t;
        },
            n = function n(t) {
          var r = s.map(s.filter(e.replace, u.propEq("from", t)), u.prop("to"));return r.length ? r[0] : t;
        };return t = n(t), c.isDefined(t) ? this.type.$normalize(t) : r();
      }, t.prototype.isSearch = function () {
        return this.location === d.SEARCH;
      }, t.prototype.validates = function (t) {
        if ((!c.isDefined(t) || null === t) && this.isOptional) return !0;var e = this.type.$normalize(t);if (!this.type.is(e)) return !1;var r = this.type.encode(e);return !(c.isString(r) && !this.type.pattern.exec(r));
      }, t.prototype.toString = function () {
        return "{Param:" + this.id + " " + this.type + " squash: '" + this.squash + "' optional: " + this.isOptional + "}";
      }, t.fromConfig = function (e, r, n, i) {
        return new t(e, r, n, d.CONFIG, i);
      }, t.fromPath = function (e, r, n, i) {
        return new t(e, r, n, d.PATH, i);
      }, t.fromSearch = function (e, r, n, i) {
        return new t(e, r, n, d.SEARCH, i);
      }, t.values = function (t, e) {
        return void 0 === e && (e = {}), t.map(function (t) {
          return [t.id, t.value(e[t.id])];
        }).reduce(s.applyPairs, {});
      }, t.changed = function (t, e, r) {
        return void 0 === e && (e = {}), void 0 === r && (r = {}), t.filter(function (t) {
          return !t.type.equals(e[t.id], r[t.id]);
        });
      }, t.equals = function (e, r, n) {
        return void 0 === r && (r = {}), void 0 === n && (n = {}), 0 === t.changed(e, r, n).length;
      }, t.validates = function (t, e) {
        return void 0 === e && (e = {}), t.map(function (t) {
          return t.validates(e[t.id]);
        }).reduce(s.allTrueR, !0);
      }, t;
    }();e.Param = m;
  }, function (t, e, r) {
    "use strict";
    var n = r(4),
        i = function () {
      function t() {
        this._isCaseInsensitive = !1, this._isStrictMode = !0, this._defaultSquashPolicy = !1;
      }return t.prototype.caseInsensitive = function (t) {
        return this._isCaseInsensitive = n.isDefined(t) ? t : this._isCaseInsensitive;
      }, t.prototype.strictMode = function (t) {
        return this._isStrictMode = n.isDefined(t) ? t : this._isStrictMode;
      }, t.prototype.defaultSquashPolicy = function (t) {
        if (n.isDefined(t) && t !== !0 && t !== !1 && !n.isString(t)) throw new Error("Invalid squash policy: " + t + ". Valid policies: false, true, arbitrary-string");return this._defaultSquashPolicy = n.isDefined(t) ? t : this._defaultSquashPolicy;
      }, t;
    }();e.MatcherConfig = i, e.matcherConfig = new i();
  }, function (t, e, r) {
    "use strict";
    function n(t, e) {
      function r(t) {
        return o.isArray(t) ? t : o.isDefined(t) ? [t] : [];
      }function n(t) {
        switch (t.length) {case 0:
            return;case 1:
            return "auto" === e ? t[0] : t;default:
            return t;}
      }function a(t, e) {
        return function (a) {
          if (o.isArray(a) && 0 === a.length) return a;var s = r(a),
              u = i.map(s, t);return e === !0 ? 0 === i.filter(u, function (t) {
            return !t;
          }).length : n(u);
        };
      }function s(t) {
        return function (e, n) {
          var i = r(e),
              o = r(n);if (i.length !== o.length) return !1;for (var a = 0; a < i.length; a++) {
            if (!t(i[a], o[a])) return !1;
          }return !0;
        };
      }var u = this;["encode", "decode", "equals", "$normalize"].forEach(function (e) {
        var r = t[e].bind(t),
            n = "equals" === e ? s : a;u[e] = n(r);
      }), i.extend(this, { dynamic: t.dynamic, name: t.name, pattern: t.pattern, is: a(t.is.bind(t), !0), $arrayMode: e });
    }var i = r(3),
        o = r(4),
        a = function () {
      function t(t) {
        this.pattern = /.*/, i.extend(this, t);
      }return t.prototype.is = function (t, e) {
        return !0;
      }, t.prototype.encode = function (t, e) {
        return t;
      }, t.prototype.decode = function (t, e) {
        return t;
      }, t.prototype.equals = function (t, e) {
        return t == e;
      }, t.prototype.$subPattern = function () {
        var t = this.pattern.toString();return t.substr(1, t.length - 2);
      }, t.prototype.toString = function () {
        return "{ParamType:" + this.name + "}";
      }, t.prototype.$normalize = function (t) {
        return this.is(t) ? t : this.decode(t);
      }, t.prototype.$asArray = function (t, e) {
        if (!t) return this;if ("auto" === t && !e) throw new Error("'auto' array mode is for query parameters only");return new n(this, t);
      }, t;
    }();e.ParamType = a;
  }, function (t, e, r) {
    "use strict";
    var n = r(26),
        i = r(29),
        o = r(29),
        a = r(30),
        s = r(37),
        u = r(38),
        c = r(43),
        f = r(44),
        l = function () {
      function t() {
        this.viewService = new s.ViewService(), this.transitionService = new a.TransitionService(this), this.globals = new f.Globals(this.transitionService), this.urlMatcherFactory = new n.UrlMatcherFactory(), this.urlRouterProvider = new i.UrlRouterProvider(this.urlMatcherFactory, this.globals.params), this.urlRouter = new o.UrlRouter(this.urlRouterProvider), this.stateRegistry = new u.StateRegistry(this.urlMatcherFactory, this.urlRouterProvider), this.stateService = new c.StateService(this), this.viewService.rootContext(this.stateRegistry.root()), this.globals.$current = this.stateRegistry.root(), this.globals.current = this.globals.$current.self;
      }return t;
    }();e.UIRouter = l;
  }, function (t, e, r) {
    "use strict";
    function n() {
      return { strict: s.matcherConfig.strictMode(), caseInsensitive: s.matcherConfig.caseInsensitive() };
    }var i = r(3),
        o = r(4),
        a = r(27),
        s = r(23),
        u = r(22),
        c = r(28),
        f = function () {
      function t() {
        this.paramTypes = new c.ParamTypes(), i.extend(this, { UrlMatcher: a.UrlMatcher, Param: u.Param });
      }return t.prototype.caseInsensitive = function (t) {
        return s.matcherConfig.caseInsensitive(t);
      }, t.prototype.strictMode = function (t) {
        return s.matcherConfig.strictMode(t);
      }, t.prototype.defaultSquashPolicy = function (t) {
        return s.matcherConfig.defaultSquashPolicy(t);
      }, t.prototype.compile = function (t, e) {
        return new a.UrlMatcher(t, this.paramTypes, i.extend(n(), e));
      }, t.prototype.isMatcher = function (t) {
        if (!o.isObject(t)) return !1;var e = !0;return i.forEach(a.UrlMatcher.prototype, function (r, n) {
          o.isFunction(r) && (e = e && o.isDefined(t[n]) && o.isFunction(t[n]));
        }), e;
      }, t.prototype.type = function (t, e, r) {
        var n = this.paramTypes.type(t, e, r);return o.isDefined(e) ? this : n;
      }, t.prototype.$get = function () {
        return this.paramTypes.enqueue = !1, this.paramTypes._flushTypeQueue(), this;
      }, t;
    }();e.UrlMatcherFactory = f;
  }, function (t, e, r) {
    "use strict";
    function n(t, e) {
      var r = ["", ""],
          n = t.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");if (!e) return n;switch (e.squash) {case !1:
          r = ["(", ")" + (e.isOptional ? "?" : "")];break;case !0:
          n = n.replace(/\/$/, ""), r = ["(?:/(", ")|/)?"];break;default:
          r = ["(" + e.squash + "|", ")?"];}return n + r[0] + e.type.pattern.source + r[1];
    }var i = r(3),
        o = r(5),
        a = r(4),
        s = r(22),
        u = r(4),
        c = r(22),
        f = r(3),
        l = r(3),
        p = function p(t, e, r) {
      return t[e] = t[e] || r();
    },
        h = function () {
      function t(e, r, a) {
        var u = this;this.config = a, this._cache = { path: [], pattern: null }, this._children = [], this._params = [], this._segments = [], this._compiled = [], this.pattern = e, this.config = i.defaults(this.config, { params: {}, strict: !0, caseInsensitive: !1, paramMap: i.identity });for (var c, f, l, p = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, h = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, v = 0, d = [], m = function m(r) {
          if (!t.nameValidator.test(r)) throw new Error("Invalid parameter name '" + r + "' in pattern '" + e + "'");if (i.find(u._params, o.propEq("id", r))) throw new Error("Duplicate parameter name '" + r + "' in pattern '" + e + "'");
        }, g = function g(t, n) {
          var o = t[2] || t[3],
              a = n ? t[4] : t[4] || ("*" === t[1] ? ".*" : null);return { id: o, regexp: a, cfg: u.config.params[o], segment: e.substring(v, t.index), type: a ? r.type(a || "string") || i.inherit(r.type("string"), { pattern: new RegExp(a, u.config.caseInsensitive ? "i" : void 0) }) : null };
        }; (c = p.exec(e)) && (f = g(c, !1), !(f.segment.indexOf("?") >= 0));) {
          m(f.id), this._params.push(s.Param.fromPath(f.id, f.type, this.config.paramMap(f.cfg, !1), r)), this._segments.push(f.segment), d.push([f.segment, i.tail(this._params)]), v = p.lastIndex;
        }l = e.substring(v);var y = l.indexOf("?");if (y >= 0) {
          var w = l.substring(y);if (l = l.substring(0, y), w.length > 0) for (v = 0; c = h.exec(w);) {
            f = g(c, !0), m(f.id), this._params.push(s.Param.fromSearch(f.id, f.type, this.config.paramMap(f.cfg, !0), r)), v = p.lastIndex;
          }
        }this._segments.push(l), i.extend(this, { _compiled: d.map(function (t) {
            return n.apply(null, t);
          }).concat(n(l)), prefix: this._segments[0] }), Object.freeze(this);
      }return t.prototype.append = function (t) {
        return this._children.push(t), i.forEach(t._cache, function (e, r) {
          return t._cache[r] = a.isArray(e) ? [] : null;
        }), t._cache.path = this._cache.path.concat(this), t;
      }, t.prototype.isRoot = function () {
        return 0 === this._cache.path.length;
      }, t.prototype.toString = function () {
        return this.pattern;
      }, t.prototype.exec = function (t, e, r, n) {
        function a(t) {
          var e = function e(t) {
            return t.split("").reverse().join("");
          },
              r = function r(t) {
            return t.replace(/\\-/g, "-");
          },
              n = e(t).split(/-(?!\\)/),
              o = i.map(n, e);return i.map(o, r).reverse();
        }var s = this;void 0 === e && (e = {}), void 0 === n && (n = {});var c = p(this._cache, "pattern", function () {
          return new RegExp(["^", i.unnest(s._cache.path.concat(s).map(o.prop("_compiled"))).join(""), s.config.strict === !1 ? "/?" : "", "$"].join(""), s.config.caseInsensitive ? "i" : void 0);
        }).exec(t);if (!c) return null;var f = this.parameters(),
            l = f.filter(function (t) {
          return !t.isSearch();
        }),
            h = f.filter(function (t) {
          return t.isSearch();
        }),
            v = this._cache.path.concat(this).map(function (t) {
          return t._segments.length - 1;
        }).reduce(function (t, e) {
          return t + e;
        }),
            d = {};if (v !== c.length - 1) throw new Error("Unbalanced capture group in route '" + this.pattern + "'");for (var m = 0; m < v; m++) {
          for (var g = l[m], y = c[m + 1], w = 0; w < g.replace.length; w++) {
            g.replace[w].from === y && (y = g.replace[w].to);
          }y && g.array === !0 && (y = a(y)), u.isDefined(y) && (y = g.type.decode(y)), d[g.id] = g.value(y);
        }return h.forEach(function (t) {
          for (var r = e[t.id], n = 0; n < t.replace.length; n++) {
            t.replace[n].from === r && (r = t.replace[n].to);
          }u.isDefined(r) && (r = t.type.decode(r)), d[t.id] = t.value(r);
        }), r && (d["#"] = r), d;
      }, t.prototype.parameters = function (t) {
        return void 0 === t && (t = {}), t.inherit === !1 ? this._params : i.unnest(this._cache.path.concat(this).map(o.prop("_params")));
      }, t.prototype.parameter = function (t, e) {
        void 0 === e && (e = {});var r = i.tail(this._cache.path);return i.find(this._params, o.propEq("id", t)) || e.inherit !== !1 && r && r.parameter(t) || null;
      }, t.prototype.validates = function (t) {
        var e = this,
            r = function r(t, e) {
          return !t || t.validates(e);
        };return i.pairs(t || {}).map(function (t) {
          var n = t[0],
              i = t[1];return r(e.parameter(n), i);
        }).reduce(i.allTrueR, !0);
      }, t.prototype.format = function (e) {
        function r(t) {
          var r = t.value(e[t.id]),
              n = t.isDefaultValue(r),
              i = !!n && t.squash,
              o = t.type.encode(r);return { param: t, value: r, isDefaultValue: n, squash: i, encoded: o };
        }if (void 0 === e && (e = {}), !this.validates(e)) return null;var n = this._cache.path.slice().concat(this),
            o = n.map(t.pathSegmentsAndParams).reduce(f.unnestR, []),
            s = n.map(t.queryParams).reduce(f.unnestR, []),
            u = o.reduce(function (e, n) {
          if (a.isString(n)) return e + n;var o = r(n),
              s = o.squash,
              u = o.encoded,
              c = o.param;return s === !0 ? e.match(/\/$/) ? e.slice(0, -1) : e : a.isString(s) ? e + s : s !== !1 ? e : null == u ? e : a.isArray(u) ? e + i.map(u, t.encodeDashes).join("-") : c.type.raw ? e + u : e + encodeURIComponent(u);
        }, ""),
            c = s.map(function (t) {
          var e = r(t),
              n = e.squash,
              o = e.encoded,
              s = e.isDefaultValue;if (!(null == o || s && n !== !1) && (a.isArray(o) || (o = [o]), 0 !== o.length)) return t.type.raw || (o = i.map(o, encodeURIComponent)), o.map(function (e) {
            return t.id + "=" + e;
          });
        }).filter(i.identity).reduce(f.unnestR, []).join("&");return u + (c ? "?" + c : "") + (e["#"] ? "#" + e["#"] : "");
      }, t.encodeDashes = function (t) {
        return encodeURIComponent(t).replace(/-/g, function (t) {
          return "%5C%" + t.charCodeAt(0).toString(16).toUpperCase();
        });
      }, t.pathSegmentsAndParams = function (t) {
        var e = t._segments,
            r = t._params.filter(function (t) {
          return t.location === c.DefType.PATH;
        });return l.arrayTuples(e, r.concat(void 0)).reduce(f.unnestR, []).filter(function (t) {
          return "" !== t && u.isDefined(t);
        });
      }, t.queryParams = function (t) {
        return t._params.filter(function (t) {
          return t.location === c.DefType.SEARCH;
        });
      }, t.nameValidator = /^\w+([-.]+\w+)*(?:\[\])?$/, t;
    }();e.UrlMatcher = h;
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return null != t ? t.toString().replace(/(~|\/)/g, function (t) {
        return { "~": "~~", "/": "~2F" }[t];
      }) : t;
    }function i(t) {
      return null != t ? t.toString().replace(/(~~|~2F)/g, function (t) {
        return { "~~": "~", "~2F": "/" }[t];
      }) : t;
    }var o = r(3),
        a = r(4),
        s = r(5),
        u = r(6),
        c = r(24),
        f = function () {
      function t() {
        this.enqueue = !0, this.typeQueue = [], this.defaultTypes = { hash: { encode: n, decode: i, is: s.is(String), pattern: /.*/, equals: function equals(t, e) {
              return t == e;
            } }, string: { encode: n, decode: i, is: s.is(String), pattern: /[^\/]*/ }, "int": { encode: n, decode: function decode(t) {
              return parseInt(t, 10);
            }, is: function is(t) {
              return a.isDefined(t) && this.decode(t.toString()) === t;
            }, pattern: /-?\d+/ }, bool: { encode: function encode(t) {
              return t && 1 || 0;
            }, decode: function decode(t) {
              return 0 !== parseInt(t, 10);
            }, is: s.is(Boolean), pattern: /0|1/ }, date: { encode: function encode(t) {
              return this.is(t) ? [t.getFullYear(), ("0" + (t.getMonth() + 1)).slice(-2), ("0" + t.getDate()).slice(-2)].join("-") : void 0;
            }, decode: function decode(t) {
              if (this.is(t)) return t;var e = this.capture.exec(t);return e ? new Date(e[1], e[2] - 1, e[3]) : void 0;
            }, is: function is(t) {
              return t instanceof Date && !isNaN(t.valueOf());
            }, equals: function equals(t, e) {
              return ["getFullYear", "getMonth", "getDate"].reduce(function (r, n) {
                return r && t[n]() === e[n]();
              }, !0);
            }, pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/, capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/ }, json: { encode: o.toJson, decode: o.fromJson, is: s.is(Object), equals: o.equals, pattern: /[^\/]*/ }, any: { encode: o.identity, decode: o.identity, equals: o.equals, pattern: /.*/ } };var t = function t(_t2, e) {
          return new c.ParamType(o.extend({ name: e }, _t2));
        };this.types = o.inherit(o.map(this.defaultTypes, t), {});
      }return t.prototype.type = function (t, e, r) {
        if (!a.isDefined(e)) return this.types[t];if (this.types.hasOwnProperty(t)) throw new Error("A type named '" + t + "' has already been defined.");return this.types[t] = new c.ParamType(o.extend({ name: t }, e)), r && (this.typeQueue.push({ name: t, def: r }), this.enqueue || this._flushTypeQueue()), this;
      }, t.prototype._flushTypeQueue = function () {
        for (; this.typeQueue.length;) {
          var t = this.typeQueue.shift();if (t.pattern) throw new Error("You cannot override a type's .pattern at runtime.");o.extend(this.types[t.name], u.services.$injector.invoke(t.def));
        }
      }, t;
    }();e.ParamTypes = f;
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      var e = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(t.source);return null != e ? e[1].replace(/\\(.)/g, "$1") : "";
    }function i(t, e) {
      return t.replace(/\$(\$|\d{1,2})/, function (t, r) {
        return e["$" === r ? 0 : Number(r)];
      });
    }function o(t, e, r, n) {
      if (!n) return !1;var i = t.invoke(r, r, { $match: n, $stateParams: e });return !c.isDefined(i) || i;
    }function a(t, e, r) {
      var n = f.services.locationConfig.baseHref();return "/" === n ? t : e ? n.slice(0, -1) + t : r ? n.slice(1) + t : t;
    }function s(t, e, r) {
      function n(t) {
        var e = t(f.services.$injector, l);return !!e && (c.isString(e) && l.setUrl(e, !0), !0);
      }if (!r || !r.defaultPrevented) {
        for (var i = t.length, o = 0; o < i; o++) {
          if (n(t[o])) return;
        }e && n(e);
      }
    }var u = r(3),
        c = r(4),
        f = r(6),
        l = f.services.location,
        p = function () {
      function t(t, e) {
        this.rules = [], this.interceptDeferred = !1, this.$urlMatcherFactory = t, this.$stateParams = e;
      }return t.prototype.rule = function (t) {
        if (!c.isFunction(t)) throw new Error("'rule' must be a function");return this.rules.push(t), this;
      }, t.prototype.removeRule = function (t) {
        return this.rules.length !== u.removeFrom(this.rules, t).length;
      }, t.prototype.otherwise = function (t) {
        if (!c.isFunction(t) && !c.isString(t)) throw new Error("'rule' must be a string or function");return this.otherwiseFn = c.isString(t) ? function () {
          return t;
        } : t, this;
      }, t.prototype.when = function (t, e, r) {
        void 0 === r && (r = function r(t) {});var a,
            s = this,
            p = s.$urlMatcherFactory,
            h = s.$stateParams,
            v = c.isString(e);if (c.isString(t) && (t = p.compile(t)), !v && !c.isFunction(e) && !c.isArray(e)) throw new Error("invalid 'handler' in when()");var d = { matcher: function matcher(t, e) {
            return v && (a = p.compile(e), e = ["$match", a.format.bind(a)]), u.extend(function () {
              return o(f.services.$injector, h, e, t.exec(l.path(), l.search(), l.hash()));
            }, { prefix: c.isString(t.prefix) ? t.prefix : "" });
          }, regex: function regex(t, e) {
            if (t.global || t.sticky) throw new Error("when() RegExp must not be global or sticky");return v && (a = e, e = ["$match", function (t) {
              return i(a, t);
            }]), u.extend(function () {
              return o(f.services.$injector, h, e, t.exec(l.path()));
            }, { prefix: n(t) });
          } },
            m = { matcher: p.isMatcher(t), regex: t instanceof RegExp };for (var g in m) {
          if (m[g]) {
            var y = d[g](t, e);return r(y), this.rule(y);
          }
        }throw new Error("invalid 'what' in when()");
      }, t.prototype.deferIntercept = function (t) {
        void 0 === t && (t = !0), this.interceptDeferred = t;
      }, t;
    }();e.UrlRouterProvider = p;var h = function () {
      function t(e) {
        this.urlRouterProvider = e, u.bindFunctions(t.prototype, this, this);
      }return t.prototype.sync = function () {
        s(this.urlRouterProvider.rules, this.urlRouterProvider.otherwiseFn);
      }, t.prototype.listen = function () {
        var t = this;return this.listener = this.listener || l.onChange(function (e) {
          return s(t.urlRouterProvider.rules, t.urlRouterProvider.otherwiseFn, e);
        });
      }, t.prototype.update = function (t) {
        return t ? void (this.location = l.path()) : void (l.path() !== this.location && l.setUrl(this.location, !0));
      }, t.prototype.push = function (t, e, r) {
        var n = r && !!r.replace;l.setUrl(t.format(e || {}), n);
      }, t.prototype.href = function (t, e, r) {
        if (!t.validates(e)) return null;var n = t.format(e);r = r || { absolute: !1 };var i = f.services.locationConfig,
            o = i.html5Mode();if (o || null === n || (n = "#" + i.hashPrefix() + n), n = a(n, o, r.absolute), !r.absolute || !n) return n;var s = !o && n ? "/" : "",
            u = i.port();return u = 80 === u || 443 === u ? "" : ":" + u, [i.protocol(), "://", i.host(), u, s, n].join("");
      }, t;
    }();e.UrlRouter = h;
  }, function (t, e, r) {
    "use strict";
    var n = r(11),
        i = r(15),
        o = r(31),
        a = r(32),
        s = r(33),
        u = r(34),
        c = r(35),
        f = r(36);e.defaultTransOpts = { location: !0, relative: null, inherit: !1, notify: !0, reload: !1, custom: {}, current: function current() {
        return null;
      }, source: "unknown" };var l = function () {
      function t(t) {
        this._router = t, this.$view = t.viewService, i.HookRegistry.mixin(new i.HookRegistry(), this), this._deregisterHookFns = {}, this.registerTransitionHooks();
      }return t.prototype.registerTransitionHooks = function () {
        var t = this._deregisterHookFns;t.redirectTo = u.registerRedirectToHook(this), t.onExit = c.registerOnExitHook(this), t.onRetain = c.registerOnRetainHook(this), t.onEnter = c.registerOnEnterHook(this), t.eagerResolve = o.registerEagerResolvePath(this), t.lazyResolve = o.registerLazyResolveState(this), t.loadViews = a.registerLoadEnteringViews(this), t.activateViews = a.registerActivateViews(this), t.updateUrl = s.registerUpdateUrl(this), t.lazyLoad = f.registerLazyLoadHook(this);
      }, t.prototype.onBefore = function (t, e, r) {
        throw "";
      }, t.prototype.onStart = function (t, e, r) {
        throw "";
      }, t.prototype.onExit = function (t, e, r) {
        throw "";
      }, t.prototype.onRetain = function (t, e, r) {
        throw "";
      }, t.prototype.onEnter = function (t, e, r) {
        throw "";
      }, t.prototype.onFinish = function (t, e, r) {
        throw "";
      }, t.prototype.onSuccess = function (t, e, r) {
        throw "";
      }, t.prototype.onError = function (t, e, r) {
        throw "";
      }, t.prototype.create = function (t, e) {
        return new n.Transition(t, e, this._router);
      }, t;
    }();e.TransitionService = l;
  }, function (t, e, r) {
    "use strict";
    var n = r(3),
        i = r(17),
        o = r(5),
        a = function a(t) {
      return new i.ResolveContext(t.treeChanges().to).resolvePath("EAGER", t).then(n.noop);
    };e.registerEagerResolvePath = function (t) {
      return t.onStart({}, a, { priority: 1e3 });
    };var s = function s(t, e) {
      return new i.ResolveContext(t.treeChanges().to).subContext(e).resolvePath("LAZY", t).then(n.noop);
    };e.registerLazyResolveState = function (t) {
      return t.onEnter({ entering: o.val(!0) }, s, { priority: 1e3 });
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(3),
        i = r(6),
        o = function o(t) {
      var e = t.views("entering");if (e.length) return i.services.$q.all(e.map(function (t) {
        return t.load();
      })).then(n.noop);
    };e.registerLoadEnteringViews = function (t) {
      return t.onStart({}, o);
    };var a = function a(t) {
      var e = t.views("entering"),
          r = t.views("exiting");if (e.length || r.length) {
        var n = t.router.viewService;r.forEach(function (t) {
          return n.deactivateViewConfig(t);
        }), e.forEach(function (t) {
          return n.activateViewConfig(t);
        }), n.sync();
      }
    };e.registerActivateViews = function (t) {
      return t.onSuccess({}, a);
    };
  }, function (t, e) {
    "use strict";
    var r = function r(t) {
      var e = t.options(),
          r = t.router.stateService,
          n = t.router.urlRouter;if ("url" !== e.source && e.location && r.$current.navigable) {
        var i = { replace: "replace" === e.location };n.push(r.$current.navigable.url, r.params, i);
      }n.update(!0);
    };e.registerUpdateUrl = function (t) {
      return t.onSuccess({}, r, { priority: 9999 });
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(4),
        i = r(6),
        o = r(14),
        a = function a(t) {
      function e(e) {
        var r = t.router.stateService;return e instanceof o.TargetState ? e : n.isString(e) ? r.target(e, t.params(), t.options()) : e.state || e.params ? r.target(e.state || t.to(), e.params || t.params(), t.options()) : void 0;
      }var r = t.to().redirectTo;if (r) return n.isFunction(r) ? i.services.$q.when(r(t)).then(e) : e(r);
    };e.registerRedirectToHook = function (t) {
      return t.onStart({ to: function to(t) {
          return !!t.redirectTo;
        } }, a);
    };
  }, function (t, e) {
    "use strict";
    function r(t) {
      return function (e, r) {
        var n = r[t];return n(e, r);
      };
    }var n = r("onExit");e.registerOnExitHook = function (t) {
      return t.onExit({ exiting: function exiting(t) {
          return !!t.onExit;
        } }, n);
    };var i = r("onRetain");e.registerOnRetainHook = function (t) {
      return t.onRetain({ retained: function retained(t) {
          return !!t.onRetain;
        } }, i);
    };var o = r("onEnter");e.registerOnEnterHook = function (t) {
      return t.onEnter({ entering: function entering(t) {
          return !!t.onEnter;
        } }, o);
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(6),
        i = function i(t) {
      function e() {
        if ("url" === t.options().source) {
          var e = n.services.location,
              r = e.path(),
              i = e.search(),
              a = e.hash(),
              s = function s(t) {
            return [t, t.url && t.url.exec(r, i, a)];
          },
              u = o.get().map(function (t) {
            return t.$$state();
          }).map(s).filter(function (t) {
            var e = (t[0], t[1]);return !!e;
          });if (u.length) {
            var c = u[0],
                f = c[0],
                l = c[1];return t.router.stateService.target(f, l, t.options());
          }t.router.urlRouter.sync();
        }var p = t.targetState();return t.router.stateService.target(p.identifier(), p.params(), p.options());
      }function r(e) {
        o.deregister(t.$to()), e && Array.isArray(e.states) && e.states.forEach(function (t) {
          return o.register(t);
        });
      }var i = t.to(),
          o = t.router.stateRegistry,
          a = i.lazyLoad,
          s = a._promise;if (!s) {
        s = a._promise = a(t).then(r);var u = function u() {
          return delete a._promise;
        };s.then(u, u);
      }return s.then(e);
    };e.registerLazyLoadHook = function (t) {
      return t.onBefore({ to: function to(t) {
          return !!t.lazyLoad;
        } }, i);
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(3),
        i = r(5),
        o = r(4),
        a = r(12),
        s = function () {
      function t() {
        var t = this;this.uiViews = [], this.viewConfigs = [], this._viewConfigFactories = {}, this.sync = function () {
          function e(t) {
            return t.fqn.split(".").length;
          }function r(t) {
            for (var e = t.viewDecl.$context, r = 0; ++r && e.parent;) {
              e = e.parent;
            }return r;
          }var o = t.uiViews.map(function (t) {
            return [t.fqn, t];
          }).reduce(n.applyPairs, {}),
              a = function a(t) {
            return function (e) {
              if (t.$type !== e.viewDecl.$type) return !1;var r = e.viewDecl,
                  i = r.$uiViewName.split("."),
                  a = t.fqn.split(".");if (!n.equals(i, a.slice(0 - i.length))) return !1;var s = 1 - i.length || void 0,
                  u = a.slice(0, s).join("."),
                  c = o[u].creationContext;return r.$uiViewContextAnchor === (c && c.name);
            };
          },
              s = i.curry(function (t, e, r, n) {
            return e * (t(r) - t(n));
          }),
              u = function u(e) {
            var n = t.viewConfigs.filter(a(e));return n.length > 1 && n.sort(s(r, -1)), [e, n[0]];
          },
              c = function c(e) {
            var r = e[0],
                n = e[1];t.uiViews.indexOf(r) !== -1 && r.configUpdated(n);
          };t.uiViews.sort(s(e, 1)).map(u).forEach(c);
        };
      }return t.prototype.rootContext = function (t) {
        return this._rootContext = t || this._rootContext;
      }, t.prototype.viewConfigFactory = function (t, e) {
        this._viewConfigFactories[t] = e;
      }, t.prototype.createViewConfig = function (t, e) {
        var r = this._viewConfigFactories[e.$type];if (!r) throw new Error("ViewService: No view config factory registered for type " + e.$type);var n = r(t, e);return o.isArray(n) ? n : [n];
      }, t.prototype.deactivateViewConfig = function (t) {
        a.trace.traceViewServiceEvent("<- Removing", t), n.removeFrom(this.viewConfigs, t);
      }, t.prototype.activateViewConfig = function (t) {
        a.trace.traceViewServiceEvent("-> Registering", t), this.viewConfigs.push(t);
      }, t.prototype.registerUIView = function (t) {
        a.trace.traceViewServiceUIViewEvent("-> Registering", t);var e = this.uiViews,
            r = function r(e) {
          return e.fqn === t.fqn;
        };return e.filter(r).length && a.trace.traceViewServiceUIViewEvent("!!!! duplicate uiView named:", t), e.push(t), this.sync(), function () {
          var r = e.indexOf(t);return r === -1 ? void a.trace.traceViewServiceUIViewEvent("Tried removing non-registered uiView", t) : (a.trace.traceViewServiceUIViewEvent("<- Deregistering", t), void n.removeFrom(e)(t));
        };
      }, t.prototype.available = function () {
        return this.uiViews.map(i.prop("fqn"));
      }, t.prototype.active = function () {
        return this.uiViews.filter(i.prop("$config")).map(i.prop("name"));
      }, t.normalizeUIViewTarget = function (t, e) {
        void 0 === e && (e = "");var r = e.split("@"),
            n = r[0] || "$default",
            i = o.isString(r[1]) ? r[1] : "^",
            a = /^(\^(?:\.\^)*)\.(.*$)/.exec(n);a && (i = a[1], n = a[2]), "!" === n.charAt(0) && (n = n.substr(1), i = "");var s = /^(\^(?:\.\^)*)$/;if (s.exec(i)) {
          var u = i.split(".").reduce(function (t, e) {
            return t.parent;
          }, t);i = u.name;
        }return { uiViewName: n, uiViewContextAnchor: i };
      }, t;
    }();e.ViewService = s;
  }, function (t, e, r) {
    "use strict";
    var n = r(39),
        i = r(40),
        o = r(41),
        a = r(3),
        s = function () {
      function t(t, e) {
        this.urlRouterProvider = e, this.states = {}, this.listeners = [], this.matcher = new n.StateMatcher(this.states), this.builder = new i.StateBuilder(this.matcher, t), this.stateQueue = new o.StateQueueManager(this.states, this.builder, e, this.listeners);
        var r = { name: "", url: "^", views: null, params: { "#": { value: null, type: "hash", dynamic: !0 } }, "abstract": !0 },
            a = this._root = this.stateQueue.register(r);a.navigable = null;
      }return t.prototype.onStatesChanged = function (t) {
        return this.listeners.push(t), function () {
          a.removeFrom(this.listeners)(t);
        }.bind(this);
      }, t.prototype.root = function () {
        return this._root;
      }, t.prototype.register = function (t) {
        return this.stateQueue.register(t);
      }, t.prototype._deregisterTree = function (t) {
        var e = this,
            r = this.get().map(function (t) {
          return t.$$state();
        }),
            n = function n(t) {
          var e = r.filter(function (e) {
            return t.indexOf(e.parent) !== -1;
          });return 0 === e.length ? e : e.concat(n(e));
        },
            i = n([t]),
            o = [t].concat(i).reverse();return o.forEach(function (t) {
          e.urlRouterProvider.removeRule(t._urlRule), delete e.states[t.name];
        }), o;
      }, t.prototype.deregister = function (t) {
        var e = this.get(t);if (!e) throw new Error("Can't deregister state; not found: " + t);var r = this._deregisterTree(e.$$state());return this.listeners.forEach(function (t) {
          return t("deregistered", r.map(function (t) {
            return t.self;
          }));
        }), r;
      }, t.prototype.get = function (t, e) {
        var r = this;if (0 === arguments.length) return Object.keys(this.states).map(function (t) {
          return r.states[t].self;
        });var n = this.matcher.find(t, e);return n && n.self || null;
      }, t.prototype.decorator = function (t, e) {
        return this.builder.builder(t, e);
      }, t;
    }();e.StateRegistry = s;
  }, function (t, e, r) {
    "use strict";
    var n = r(4),
        i = r(7),
        o = r(3),
        a = function () {
      function t(t) {
        this._states = t;
      }return t.prototype.isRelative = function (t) {
        return t = t || "", 0 === t.indexOf(".") || 0 === t.indexOf("^");
      }, t.prototype.find = function (t, e) {
        if (t || "" === t) {
          var r = n.isString(t),
              a = r ? t : t.name;this.isRelative(a) && (a = this.resolvePath(a, e));var s = this._states[a];if (s && (r || !(r || s !== t && s.self !== t))) return s;if (r) {
            var u = o.values(this._states).filter(function (t) {
              return new i.Glob(t.name).matches(a);
            });return u.length > 1 && console.log("stateMatcher.find: Found multiple matches for " + a + " using glob: ", u.map(function (t) {
              return t.name;
            })), u[0];
          }
        }
      }, t.prototype.resolvePath = function (t, e) {
        if (!e) throw new Error("No reference point given for path '" + t + "'");for (var r = this.find(e), n = t.split("."), i = 0, o = n.length, a = r; i < o; i++) {
          if ("" !== n[i] || 0 !== i) {
            if ("^" !== n[i]) break;if (!a.parent) throw new Error("Path '" + t + "' not valid for state '" + r.name + "'");a = a.parent;
          } else a = r;
        }var s = n.slice(i).join(".");return a.name + (a.name && s ? "." : "") + s;
      }, t;
    }();e.StateMatcher = a;
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      return t.lazyLoad && (t.name = t.self.name + ".**"), t.name;
    }function i(t) {
      return t.self.$$state = function () {
        return t;
      }, t.self;
    }function o(t) {
      return t.parent && t.parent.data && (t.data = t.self.data = c.inherit(t.parent.data, t.data)), t.data;
    }function a(t) {
      return t.parent ? t.parent.path.concat(t) : [t];
    }function s(t) {
      var e = t.parent ? c.extend({}, t.parent.includes) : {};return e[t.name] = !0, e;
    }function u(t) {
      var e = function e(t, _e2) {
        return Object.keys(t || {}).map(function (r) {
          return { token: r, val: t[r], deps: void 0, policy: _e2[r] };
        });
      },
          r = function r(t) {
        return t.$inject || d.services.$injector.annotate(t, d.services.$injector.strictDi);
      },
          n = function n(t) {
        return !(!t.token || !t.resolveFn);
      },
          i = function i(t) {
        return !(!t.provide && !t.token || !(t.useValue || t.useFactory || t.useExisting || t.useClass));
      },
          o = function o(t) {
        return !!(t && t.val && (f.isString(t.val) || f.isArray(t.val) || f.isFunction(t.val)));
      },
          a = function a(t) {
        return t.provide || t.token;
      },
          s = p.pattern([[p.prop("resolveFn"), function (t) {
        return new v.Resolvable(a(t), t.resolveFn, t.deps, t.policy);
      }], [p.prop("useFactory"), function (t) {
        return new v.Resolvable(a(t), t.useFactory, t.deps || t.dependencies, t.policy);
      }], [p.prop("useClass"), function (t) {
        return new v.Resolvable(a(t), function () {
          return new t.useClass();
        }, [], t.policy);
      }], [p.prop("useValue"), function (t) {
        return new v.Resolvable(a(t), function () {
          return t.useValue;
        }, [], t.policy, t.useValue);
      }], [p.prop("useExisting"), function (t) {
        return new v.Resolvable(a(t), c.identity, [t.useExisting], t.policy);
      }]]),
          u = p.pattern([[p.pipe(p.prop("val"), f.isString), function (t) {
        return new v.Resolvable(t.token, c.identity, [t.val], t.policy);
      }], [p.pipe(p.prop("val"), f.isArray), function (t) {
        return new v.Resolvable(t.token, c.tail(t.val), t.val.slice(0, -1), t.policy);
      }], [p.pipe(p.prop("val"), f.isFunction), function (t) {
        return new v.Resolvable(t.token, t.val, r(t.val), t.policy);
      }]]),
          h = p.pattern([[p.is(v.Resolvable), function (t) {
        return t;
      }], [n, s], [i, s], [o, u], [p.val(!0), function (t) {
        throw new Error("Invalid resolve value: " + l.stringify(t));
      }]]),
          m = t.resolve,
          g = f.isArray(m) ? m : e(m, t.resolvePolicy || {});return g.map(h);
    }var c = r(3),
        f = r(4),
        l = r(9),
        p = r(5),
        h = r(22),
        v = r(19),
        d = r(6),
        m = function m(t) {
      if (!f.isString(t)) return !1;var e = "^" === t.charAt(0);return { val: e ? t.substring(1) : t, root: e };
    },
        g = function g(t, e) {
      return function (r) {
        var n = r;n && n.url && n.lazyLoad && (n.url += "{remainder:any}");var i = m(n.url),
            o = r.parent,
            a = i ? t.compile(i.val, { params: r.params || {}, paramMap: function paramMap(t, e) {
            return n.reloadOnSearch === !1 && e && (t = c.extend(t || {}, { dynamic: !0 })), t;
          } }) : n.url;if (!a) return null;if (!t.isMatcher(a)) throw new Error("Invalid url '" + a + "' in state '" + r + "'");return i && i.root ? a : (o && o.navigable || e()).url.append(a);
      };
    },
        y = function y(t) {
      return function (e) {
        return !t(e) && e.url ? e : e.parent ? e.parent.navigable : null;
      };
    },
        w = function w(t) {
      return function (e) {
        var r = function r(e, _r2) {
          return h.Param.fromConfig(_r2, null, e, t);
        },
            n = e.url && e.url.parameters({ inherit: !1 }) || [],
            i = c.values(c.mapObj(c.omit(e.params || {}, n.map(p.prop("id"))), r));return n.concat(i).map(function (t) {
          return [t.id, t];
        }).reduce(c.applyPairs, {});
      };
    };e.resolvablesBuilder = u;var b = function () {
      function t(t, e) {
        function r(e) {
          return l(e) ? null : t.find(c.parentName(e)) || f();
        }this.matcher = t;var c = this,
            f = function f() {
          return t.find("");
        },
            l = function l(t) {
          return "" === t.name;
        };this.builders = { name: [n], self: [i], parent: [r], data: [o], url: [g(e, f)], navigable: [y(l)], params: [w(e.paramTypes)], views: [], path: [a], includes: [s], resolvables: [u] };
      }return t.prototype.builder = function (t, e) {
        var r = this.builders,
            n = r[t] || [];return f.isString(t) && !f.isDefined(e) ? n.length > 1 ? n : n[0] : f.isString(t) && f.isFunction(e) ? (r[t] = n, r[t].push(e), function () {
          return r[t].splice(r[t].indexOf(e, 1)) && null;
        }) : void 0;
      }, t.prototype.build = function (t) {
        var e = this,
            r = e.matcher,
            n = e.builders,
            i = this.parentName(t);if (i && !r.find(i)) return null;for (var o in n) {
          if (n.hasOwnProperty(o)) {
            var a = n[o].reduce(function (t, e) {
              return function (r) {
                return e(r, t);
              };
            }, c.noop);t[o] = a(t);
          }
        }return t;
      }, t.prototype.parentName = function (t) {
        var e = t.name || "",
            r = e.split(".");if (r.length > 1) {
          if (t.parent) throw new Error("States that specify the 'parent:' property should not have a '.' in their name (" + e + ")");var n = r.pop();return "**" === n && r.pop(), r.join(".");
        }return t.parent ? f.isString(t.parent) ? t.parent : t.parent.name : "";
      }, t.prototype.name = function (t) {
        var e = t.name;if (e.indexOf(".") !== -1 || !t.parent) return e;var r = f.isString(t.parent) ? t.parent : t.parent.name;return r ? r + "." + e : e;
      }, t;
    }();e.StateBuilder = b;
  }, function (t, e, r) {
    "use strict";
    var n = r(3),
        i = r(4),
        o = r(42),
        a = function () {
      function t(t, e, r, n) {
        this.states = t, this.builder = e, this.$urlRouterProvider = r, this.listeners = n, this.queue = [];
      }return t.prototype.register = function (t) {
        var e = this,
            r = e.states,
            a = e.queue,
            s = e.$state,
            u = n.inherit(new o.State(), n.extend({}, t, { self: t, resolve: t.resolve || [], toString: function toString() {
            return t.name;
          } }));if (!i.isString(u.name)) throw new Error("State must have a valid name");if (r.hasOwnProperty(u.name) || n.pluck(a, "name").indexOf(u.name) !== -1) throw new Error("State '" + u.name + "' is already defined");return a.push(u), this.$state && this.flush(s), u;
      }, t.prototype.flush = function (t) {
        for (var e = this, r = e.queue, n = e.states, i = e.builder, o = [], a = [], s = {}; r.length > 0;) {
          var u = r.shift(),
              c = i.build(u),
              f = a.indexOf(u);if (c) {
            if (n.hasOwnProperty(u.name)) throw new Error("State '" + name + "' is already defined");n[u.name] = u, this.attachRoute(t, u), f >= 0 && a.splice(f, 1), o.push(u);
          } else {
            var l = s[u.name];if (s[u.name] = r.length, f >= 0 && l === r.length) return r.push(u), n;f < 0 && a.push(u), r.push(u);
          }
        }return o.length && this.listeners.forEach(function (t) {
          return t("registered", o.map(function (t) {
            return t.self;
          }));
        }), n;
      }, t.prototype.autoFlush = function (t) {
        this.$state = t, this.flush(t);
      }, t.prototype.attachRoute = function (t, e) {
        var r = this.$urlRouterProvider;!e["abstract"] && e.url && r.when(e.url, ["$match", "$stateParams", function (r, i) {
          t.$current.navigable === e && n.equalForKeys(r, i) || t.transitionTo(e, r, { inherit: !0, source: "url" });
        }], function (t) {
          return e._urlRule = t;
        });
      }, t;
    }();e.StateQueueManager = a;
  }, function (t, e, r) {
    "use strict";
    var n = r(3),
        i = r(5),
        o = function () {
      function t(t) {
        n.extend(this, t);
      }return t.prototype.is = function (t) {
        return this === t || this.self === t || this.fqn() === t;
      }, t.prototype.fqn = function () {
        if (!(this.parent && this.parent instanceof this.constructor)) return this.name;var t = this.parent.fqn();return t ? t + "." + this.name : this.name;
      }, t.prototype.root = function () {
        return this.parent && this.parent.root() || this;
      }, t.prototype.parameters = function (t) {
        t = n.defaults(t, { inherit: !0 });var e = t.inherit && this.parent && this.parent.parameters() || [];return e.concat(n.values(this.params));
      }, t.prototype.parameter = function (t, e) {
        return void 0 === e && (e = {}), this.url && this.url.parameter(t, e) || n.find(n.values(this.params), i.propEq("id", t)) || e.inherit && this.parent && this.parent.parameter(t);
      }, t.prototype.toString = function () {
        return this.fqn();
      }, t;
    }();e.State = o;
  }, function (t, e, r) {
    "use strict";
    var n = r(3),
        i = r(4),
        o = r(8),
        a = r(6),
        s = r(20),
        u = r(21),
        c = r(30),
        f = r(10),
        l = r(14),
        p = r(22),
        h = r(7),
        v = r(3),
        d = r(3),
        m = r(17),
        g = function () {
      function t(e) {
        this.router = e, this.invalidCallbacks = [], this._defaultErrorHandler = function (t) {
          t instanceof Error && t.stack ? (console.error(t), console.error(t.stack)) : t instanceof f.Rejection ? (console.error(t.toString()), t.detail && t.detail.stack && console.error(t.detail.stack)) : console.error(t);
        };var r = ["current", "$current", "params", "transition"],
            n = Object.keys(t.prototype).filter(function (t) {
          return r.indexOf(t) === -1;
        });d.bindFunctions(t.prototype, this, this, n);
      }return Object.defineProperty(t.prototype, "transition", { get: function get() {
          return this.router.globals.transition;
        }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "params", { get: function get() {
          return this.router.globals.params;
        }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "current", { get: function get() {
          return this.router.globals.current;
        }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "$current", { get: function get() {
          return this.router.globals.$current;
        }, enumerable: !0, configurable: !0 }), t.prototype._handleInvalidTargetState = function (t, e) {
        function r() {
          var t = h.dequeue();if (void 0 === t) return f.Rejection.invalid(e.error()).toPromise();var n = a.services.$q.when(t(e, i, v));return n.then(d).then(function (t) {
            return t || r();
          });
        }var n = this,
            i = s.PathFactory.makeTargetState(t),
            u = this.router.globals,
            c = function c() {
          return u.transitionHistory.peekTail();
        },
            p = c(),
            h = new o.Queue(this.invalidCallbacks.slice()),
            v = new m.ResolveContext(t).injector(),
            d = function d(t) {
          if (t instanceof l.TargetState) {
            var e = t;return e = n.target(e.identifier(), e.params(), e.options()), e.valid() ? c() !== p ? f.Rejection.superseded().toPromise() : n.transitionTo(e.identifier(), e.params(), e.options()) : f.Rejection.invalid(e.error()).toPromise();
          }
        };return r();
      }, t.prototype.onInvalid = function (t) {
        return this.invalidCallbacks.push(t), function () {
          n.removeFrom(this.invalidCallbacks)(t);
        }.bind(this);
      }, t.prototype.reload = function (t) {
        return this.transitionTo(this.current, this.params, { reload: !i.isDefined(t) || t, inherit: !1, notify: !1 });
      }, t.prototype.go = function (t, e, r) {
        var i = { relative: this.$current, inherit: !0 },
            o = n.defaults(r, i, c.defaultTransOpts);return this.transitionTo(t, e, o);
      }, t.prototype.target = function (t, e, r) {
        if (void 0 === r && (r = {}), i.isObject(r.reload) && !r.reload.name) throw new Error("Invalid reload state object");var n = this.router.stateRegistry;if (r.reloadState = r.reload === !0 ? n.root() : n.matcher.find(r.reload, r.relative), r.reload && !r.reloadState) throw new Error("No such reload state '" + (i.isString(r.reload) ? r.reload : r.reload.name) + "'");var o = n.matcher.find(t, r.relative);return new l.TargetState(t, o, e, r);
      }, t.prototype.transitionTo = function (t, e, r) {
        var i = this;void 0 === e && (e = {}), void 0 === r && (r = {});var o = this.router,
            s = o.globals,
            p = s.transitionHistory;r = n.defaults(r, c.defaultTransOpts), r = n.extend(r, { current: p.peekTail.bind(p) });var h = this.target(t, e, r),
            v = s.successfulTransitions.peekTail(),
            d = function d() {
          return [new u.PathNode(i.router.stateRegistry.root())];
        },
            m = v ? v.treeChanges().to : d();if (!h.exists()) return this._handleInvalidTargetState(m, h);if (!h.valid()) return n.silentRejection(h.error());var g = function g(t) {
          return function (e) {
            if (e instanceof f.Rejection) {
              if (e.type === f.RejectType.IGNORED) return o.urlRouter.update(), a.services.$q.when(s.current);var r = e.detail;if (e.type === f.RejectType.SUPERSEDED && e.redirected && r instanceof l.TargetState) {
                var n = t.redirect(r);return n.run()["catch"](g(n));
              }e.type === f.RejectType.ABORTED && o.urlRouter.update();
            }var u = i.defaultErrorHandler();return u(e), a.services.$q.reject(e);
          };
        },
            y = this.router.transitionService.create(m, h),
            w = y.run()["catch"](g(y));return n.silenceUncaughtInPromise(w), n.extend(w, { transition: y });
      }, t.prototype.is = function (t, e, r) {
        r = n.defaults(r, { relative: this.$current });var o = this.router.stateRegistry.matcher.find(t, r.relative);if (i.isDefined(o)) return this.$current === o && (!i.isDefined(e) || null === e || p.Param.equals(o.parameters(), this.params, e));
      }, t.prototype.includes = function (t, e, r) {
        r = n.defaults(r, { relative: this.$current });var o = i.isString(t) && h.Glob.fromString(t);if (o) {
          if (!o.matches(this.$current.name)) return !1;t = this.$current.name;
        }var a = this.router.stateRegistry.matcher.find(t, r.relative),
            s = this.$current.includes;if (i.isDefined(a)) return !!i.isDefined(s[a.name]) && (!e || v.equalForKeys(p.Param.values(a.parameters(), e), this.params, Object.keys(e)));
      }, t.prototype.href = function (t, e, r) {
        var o = { lossy: !0, inherit: !0, absolute: !1, relative: this.$current };r = n.defaults(r, o), e = e || {};var a = this.router.stateRegistry.matcher.find(t, r.relative);if (!i.isDefined(a)) return null;r.inherit && (e = this.params.$inherit(e, this.$current, a));var s = a && r.lossy ? a.navigable : a;return s && void 0 !== s.url && null !== s.url ? this.router.urlRouter.href(s.url, p.Param.values(a.parameters(), e), { absolute: r.absolute }) : null;
      }, t.prototype.defaultErrorHandler = function (t) {
        return this._defaultErrorHandler = t || this._defaultErrorHandler;
      }, t.prototype.get = function (t, e) {
        var r = this.router.stateRegistry;return 0 === arguments.length ? r.get() : r.get(t, e || this.$current);
      }, t;
    }();e.StateService = g;
  }, function (t, e, r) {
    "use strict";
    var n = r(45),
        i = r(8),
        o = r(3),
        a = function () {
      function t(t) {
        var e = this;this.params = new n.StateParams(), this.transitionHistory = new i.Queue([], 1), this.successfulTransitions = new i.Queue([], 1);var r = function r(t) {
          e.transition = t, e.transitionHistory.enqueue(t);var r = function r() {
            e.successfulTransitions.enqueue(t), e.$current = t.$to(), e.current = e.$current.self, o.copy(t.params(), e.params);
          };t.onSuccess({}, r, { priority: 1e4 });var n = function n() {
            e.transition === t && (e.transition = null);
          };t.promise.then(n, n);
        };t.onBefore({}, r);
      }return t;
    }();e.Globals = a;
  }, function (t, e, r) {
    "use strict";
    var n = r(3),
        i = function () {
      function t(t) {
        void 0 === t && (t = {}), n.extend(this, t);
      }return t.prototype.$inherit = function (t, e, r) {
        var i,
            o = n.ancestors(e, r),
            a = {},
            s = [];for (var u in o) {
          if (o[u] && o[u].params && (i = Object.keys(o[u].params), i.length)) for (var c in i) {
            s.indexOf(i[c]) >= 0 || (s.push(i[c]), a[i[c]] = this[i[c]]);
          }
        }return n.extend({}, a, t);
      }, t;
    }();e.StateParams = i;
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      for (var r in t) {
        e.hasOwnProperty(r) || (e[r] = t[r]);
      }
    }n(r(22)), n(r(28)), n(r(45)), n(r(24));
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      for (var r in t) {
        e.hasOwnProperty(r) || (e[r] = t[r]);
      }
    }n(r(21)), n(r(20));
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      for (var r in t) {
        e.hasOwnProperty(r) || (e[r] = t[r]);
      }
    }n(r(18)), n(r(19)), n(r(17));
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      for (var r in t) {
        e.hasOwnProperty(r) || (e[r] = t[r]);
      }
    }n(r(40)), n(r(42)), n(r(39)), n(r(41)), n(r(38)), n(r(43)), n(r(14));
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      for (var r in t) {
        e.hasOwnProperty(r) || (e[r] = t[r]);
      }
    }n(r(16)), n(r(15)), n(r(10)), n(r(11)), n(r(13)), n(r(30));
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      for (var r in t) {
        e.hasOwnProperty(r) || (e[r] = t[r]);
      }
    }n(r(27)), n(r(23)), n(r(26)), n(r(29));
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      for (var r in t) {
        e.hasOwnProperty(r) || (e[r] = t[r]);
      }
    }n(r(37));
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      var e = l.services.$injector,
          r = e.get("$controller"),
          n = e.instantiate;try {
        var i;return e.instantiate = function (t) {
          e.instantiate = n, i = e.annotate(t);
        }, r(t, { $scope: {} }), i;
      } finally {
        e.instantiate = n;
      }
    }function i(t) {
      function e(e, n, i, o, a, s) {
        return o.$on("$locationChangeSuccess", function (t) {
          return r.forEach(function (e) {
            return e(t);
          });
        }), l.services.locationConfig.html5Mode = function () {
          var e = t.html5Mode();return e = v.isObject(e) ? e.enabled : e, e && i.history;
        }, l.services.location.setUrl = function (t, r) {
          void 0 === r && (r = !1), e.url(t), r && e.replace();
        }, l.services.template.get = function (t) {
          return a.get(t, { cache: s, headers: { Accept: "text/html" } }).then(h.prop("data"));
        }, p.bindFunctions(e, l.services.location, e, ["replace", "url", "path", "search", "hash"]), p.bindFunctions(e, l.services.locationConfig, e, ["port", "protocol", "host"]), p.bindFunctions(n, l.services.locationConfig, n, ["baseHref"]), R;
      }R = new f.UIRouter(), R.stateProvider = new w.StateProvider(R.stateRegistry, R.stateService), R.stateRegistry.decorator("views", g.ng1ViewsBuilder), R.stateRegistry.decorator("onExit", b.getStateHookBuilder("onExit")), R.stateRegistry.decorator("onRetain", b.getStateHookBuilder("onRetain")), R.stateRegistry.decorator("onEnter", b.getStateHookBuilder("onEnter")), R.viewService.viewConfigFactory("ng1", g.ng1ViewConfigFactory), p.bindFunctions(t, l.services.locationConfig, t, ["hashPrefix"]);var r = [];l.services.location.onChange = function (t) {
        return r.push(t), function () {
          return p.removeFrom(r)(t);
        };
      }, this.$get = e, e.$inject = ["$location", "$browser", "$sniffer", "$rootScope", "$http", "$templateCache"];
    }function o(t, e) {
      l.services.$injector = t, l.services.$q = e;
    }function a() {
      return R.urlRouterProvider.$get = function () {
        return R.urlRouter.update(!0), this.interceptDeferred || R.urlRouter.listen(), R.urlRouter;
      }, R.urlRouterProvider;
    }function s() {
      return R.stateProvider.$get = function () {
        return R.stateRegistry.stateQueue.autoFlush(R.stateService), R.stateService;
      }, R.stateProvider;
    }function u() {
      return R.transitionService.$get = function () {
        return R.transitionService;
      }, R.transitionService;
    }function c(t) {
      t.$watch(function () {
        m.trace.approximateDigests++;
      });
    }var f = r(25),
        l = r(6),
        p = r(3),
        h = r(5),
        v = r(4),
        d = r(54),
        m = r(12),
        g = r(55),
        y = r(56),
        w = r(58),
        b = r(59),
        $ = r(57);$.module("ui.router.angular1", []);$.module("ui.router.util", ["ng", "ui.router.init"]), $.module("ui.router.router", ["ui.router.util"]), $.module("ui.router.state", ["ui.router.router", "ui.router.util", "ui.router.angular1"]), $.module("ui.router", ["ui.router.init", "ui.router.state", "ui.router.angular1"]), $.module("ui.router.compat", ["ui.router"]), e.annotateController = n;var R = null;i.$inject = ["$locationProvider"], $.module("ui.router.init", []).provider("$uiRouter", i), o.$inject = ["$injector", "$q"], $.module("ui.router.init").run(o), $.module("ui.router.init").run(["$uiRouter", function (t) {}]), $.module("ui.router.util").provider("$urlMatcherFactory", ["$uiRouterProvider", function () {
      return R.urlMatcherFactory;
    }]), $.module("ui.router.util").run(["$urlMatcherFactory", function (t) {}]), $.module("ui.router.router").provider("$urlRouter", ["$uiRouterProvider", a]), $.module("ui.router.router").run(["$urlRouter", function (t) {}]), $.module("ui.router.state").provider("$state", ["$uiRouterProvider", s]), $.module("ui.router.state").run(["$state", function (t) {}]), $.module("ui.router.state").factory("$stateParams", ["$uiRouter", function (t) {
      return t.globals.params;
    }]), $.module("ui.router.state").provider("$transitions", ["$uiRouterProvider", u]), $.module("ui.router.util").factory("$templateFactory", ["$uiRouter", function () {
      return new y.TemplateFactory();
    }]), $.module("ui.router").factory("$view", function () {
      return R.viewService;
    }), $.module("ui.router").factory("$resolve", d.resolveFactory), $.module("ui.router").service("$trace", function () {
      return m.trace;
    }), c.$inject = ["$rootScope"], e.watchDigests = c, $.module("ui.router").run(c), e.getLocals = function (t) {
      var e = t.getTokens().filter(v.isString),
          r = e.map(function (e) {
        return [e, t.getResolvable(e).data];
      });return r.reduce(p.applyPairs, {});
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(42),
        i = r(21),
        o = r(17),
        a = r(3),
        s = r(40),
        u = { resolve: function resolve(t, e, r) {
        void 0 === e && (e = {});var u = new i.PathNode(new n.State({ params: {}, resolvables: [] })),
            c = new i.PathNode(new n.State({ params: {}, resolvables: [] })),
            f = new o.ResolveContext([u, c]);f.addResolvables(s.resolvablesBuilder({ resolve: t }), c.state);var l = function l(t) {
          var r = function r(t) {
            return s.resolvablesBuilder({ resolve: a.mapObj(t, function (t) {
                return function () {
                  return t;
                };
              }) });
          };f.addResolvables(r(t), u.state), f.addResolvables(r(e), c.state);var n = function n(t, e) {
            return t[e.token] = e.value, t;
          };return f.resolvePath().then(function (t) {
            return t.reduce(n, {});
          });
        };return r ? r.then(l) : l({});
      } };e.resolveFactory = function () {
      return u;
    };
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      var e = ["templateProvider", "templateUrl", "template", "notify", "async"],
          r = ["controller", "controllerProvider", "controllerAs", "resolveAs"],
          n = ["component", "bindings"],
          c = e.concat(r),
          f = n.concat(c),
          l = {},
          p = t.views || { $default: o.pick(t, f) };return o.forEach(p, function (e, r) {
        if (r = r || "$default", u.isString(e) && (e = { component: e }), Object.keys(e).length) {
          if (e.component) {
            if (c.map(function (t) {
              return u.isDefined(e[t]);
            }).reduce(o.anyTrueR, !1)) throw new Error("Cannot combine: " + n.join("|") + " with: " + c.join("|") + " in stateview: 'name@" + t.name + "'");e.templateProvider = ["$injector", function (t) {
              var r = function r(t) {
                return e.bindings && e.bindings[t] || t;
              },
                  n = v.version.minor >= 3 ? "::" : "",
                  o = function o(t) {
                var e = a.kebobString(t.name),
                    i = r(t.name);return "@" === t.type ? e + "='{{" + n + "$resolve." + i + "}}'" : e + "='" + n + "$resolve." + i + "'";
              },
                  s = i(t, e.component).map(o).join(" "),
                  u = a.kebobString(e.component);return "<" + u + " " + s + "></" + u + ">";
            }];
          }e.resolveAs = e.resolveAs || "$resolve", e.$type = "ng1", e.$context = t, e.$name = r;var f = s.ViewService.normalizeUIViewTarget(e.$context, e.$name);e.$uiViewName = f.uiViewName, e.$uiViewContextAnchor = f.uiViewContextAnchor, l[r] = e;
        }
      }), l;
    }function i(t, e) {
      var r = t.get(e + "Directive");if (!r || !r.length) throw new Error("Unable to find component named '" + e + "'");return r.map(m).reduce(o.unnestR, []);
    }var o = r(3),
        a = r(9),
        s = r(37),
        u = r(4),
        c = r(6),
        f = r(12),
        l = r(56),
        p = r(17),
        h = r(19),
        v = r(57);e.ng1ViewConfigFactory = function (t, e) {
      return [new y(t, e)];
    }, e.ng1ViewsBuilder = n;var d = function d(t) {
      return Object.keys(t || {}).map(function (e) {
        return [e, /^([=<@])[?]?(.*)/.exec(t[e])];
      }).filter(function (t) {
        return u.isDefined(t) && u.isDefined(t[1]);
      }).map(function (t) {
        return { name: t[1][2] || t[0], type: t[1][1] };
      });
    },
        m = function m(t) {
      return d(u.isObject(t.bindToController) ? t.bindToController : t.scope);
    },
        g = 0,
        y = function () {
      function t(t, e) {
        this.path = t, this.viewDecl = e, this.$id = g++, this.loaded = !1;
      }return t.prototype.load = function () {
        var t = this,
            e = c.services.$q;if (!this.hasTemplate()) throw new Error("No template configuration specified for '" + this.viewDecl.$uiViewName + "@" + this.viewDecl.$uiViewContextAnchor + "'");var r = new p.ResolveContext(this.path),
            n = this.path.reduce(function (t, e) {
          return o.extend(t, e.paramValues);
        }, {}),
            i = { template: e.when(this.getTemplate(n, new l.TemplateFactory(), r)), controller: e.when(this.getController(r)) };return e.all(i).then(function (e) {
          return f.trace.traceViewServiceEvent("Loaded", t), t.controller = e.controller, t.template = e.template, t;
        });
      }, t.prototype.hasTemplate = function () {
        return !!(this.viewDecl.template || this.viewDecl.templateUrl || this.viewDecl.templateProvider);
      }, t.prototype.getTemplate = function (t, e, r) {
        return e.fromConfig(this.viewDecl, t, r);
      }, t.prototype.getController = function (t) {
        var e = this.viewDecl.controllerProvider;if (!u.isInjectable(e)) return this.viewDecl.controller;var r = c.services.$injector.annotate(e),
            n = u.isArray(e) ? o.tail(e) : e,
            i = new h.Resolvable("", n, r);return i.get(t);
      }, t;
    }();e.Ng1ViewConfig = y;
  }, function (t, e, r) {
    "use strict";
    var n = r(4),
        i = r(6),
        o = r(3),
        a = r(19),
        s = function () {
      function t() {}return t.prototype.fromConfig = function (t, e, r) {
        return n.isDefined(t.template) ? this.fromString(t.template, e) : n.isDefined(t.templateUrl) ? this.fromUrl(t.templateUrl, e) : n.isDefined(t.templateProvider) ? this.fromProvider(t.templateProvider, e, r) : null;
      }, t.prototype.fromString = function (t, e) {
        return n.isFunction(t) ? t(e) : t;
      }, t.prototype.fromUrl = function (t, e) {
        return n.isFunction(t) && (t = t(e)), null == t ? null : i.services.template.get(t);
      }, t.prototype.fromProvider = function (t, e, r) {
        var s = i.services.$injector.annotate(t),
            u = n.isArray(t) ? o.tail(t) : t,
            c = new a.Resolvable("", u, s);return c.get(r);
      }, t;
    }();e.TemplateFactory = s;
  }, function (e, r) {
    e.exports = t;
  }, function (t, e, r) {
    "use strict";
    var n = r(4),
        i = r(3),
        o = function () {
      function t(e, r) {
        this.stateRegistry = e, this.stateService = r, i.bindFunctions(t.prototype, this, this);
      }return t.prototype.decorator = function (t, e) {
        return this.stateRegistry.decorator(t, e) || this;
      }, t.prototype.state = function (t, e) {
        return n.isObject(t) ? e = t : e.name = t, this.stateRegistry.register(e), this;
      }, t.prototype.onInvalid = function (t) {
        return this.stateService.onInvalid(t);
      }, t;
    }();e.StateProvider = o;
  }, function (t, e, r) {
    "use strict";
    var n = r(6),
        i = r(53),
        o = r(17),
        a = r(3);e.getStateHookBuilder = function (t) {
      return function (e, r) {
        function s(t, e) {
          var r = new o.ResolveContext(t.treeChanges().to);return n.services.$injector.invoke(u, this, a.extend({ $state$: e }, i.getLocals(r)));
        }var u = e[t];return u ? s : void 0;
      };
    };
  }, function (t, e, r) {
    "use strict";
    function n(t, e) {
      var r,
          n = t.match(/^\s*({[^}]*})\s*$/);if (n && (t = e + "(" + n[1] + ")"), r = t.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !r || 4 !== r.length) throw new Error("Invalid state ref '" + t + "'");return { state: r[1], paramExpr: r[3] || null };
    }function i(t) {
      var e = t.parent().inheritedData("$uiView"),
          r = l.parse("$cfg.path")(e);return r ? c.tail(r).state.name : void 0;
    }function o(t) {
      var e = "[object SVGAnimatedString]" === Object.prototype.toString.call(t.prop("href")),
          r = "FORM" === t[0].nodeName;return { attr: r ? "action" : e ? "xlink:href" : "href", isAnchor: "A" === t.prop("tagName").toUpperCase(), clickable: !r };
    }function a(t, e, r, n, i) {
      return function (o) {
        var a = o.which || o.button,
            s = i();if (!(a > 1 || o.ctrlKey || o.metaKey || o.shiftKey || t.attr("target"))) {
          var u = r(function () {
            e.go(s.state, s.params, s.options);
          });o.preventDefault();var c = n.isAnchor && !s.href ? 1 : 0;o.preventDefault = function () {
            c-- <= 0 && r.cancel(u);
          };
        }
      };
    }function s(t, e) {
      return { relative: i(t) || e.$current, inherit: !0, source: "sref" };
    }var u = r(57),
        c = r(3),
        f = r(4),
        l = r(5),
        p = ["$state", "$timeout", function (t, e) {
      return { restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function link(r, i, f, l) {
          var p,
              h = n(f.uiSref, t.current.name),
              v = { state: h.state, href: null, params: null, options: null },
              d = o(i),
              m = l[1] || l[0],
              g = null;v.options = c.extend(s(i, t), f.uiSrefOpts ? r.$eval(f.uiSrefOpts) : {});var y = function y(e) {
            e && (v.params = u.copy(e)), v.href = t.href(h.state, v.params, v.options), g && g(), m && (g = m.$$addStateInfo(h.state, v.params)), null !== v.href && f.$set(d.attr, v.href);
          };h.paramExpr && (r.$watch(h.paramExpr, function (t) {
            t !== v.params && y(t);
          }, !0), v.params = u.copy(r.$eval(h.paramExpr))), y(), d.clickable && (p = a(i, t, e, d, function () {
            return v;
          }), i.on("click", p), r.$on("$destroy", function () {
            i.off("click", p);
          }));
        } };
    }],
        h = ["$state", "$timeout", function (t, e) {
      return { restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function link(r, n, i, s) {
          function u(e) {
            v.state = e[0], v.params = e[1], v.options = e[2], v.href = t.href(v.state, v.params, v.options), d && d(), l && (d = l.$$addStateInfo(v.state, v.params)), v.href && i.$set(f.attr, v.href);
          }var c,
              f = o(n),
              l = s[1] || s[0],
              p = [i.uiState, i.uiStateParams || null, i.uiStateOpts || null],
              h = "[" + p.map(function (t) {
            return t || "null";
          }).join(", ") + "]",
              v = { state: null, params: null, options: null, href: null },
              d = null;r.$watch(h, u, !0), u(r.$eval(h)), f.clickable && (c = a(n, t, e, f, function () {
            return v;
          }), n.on("click", c), r.$on("$destroy", function () {
            n.off("click", c);
          }));
        } };
    }],
        v = ["$state", "$stateParams", "$interpolate", "$transitions", "$uiRouter", function (t, e, r, o, a) {
      return { restrict: "A", controller: ["$scope", "$element", "$attrs", "$timeout", function (e, s, u, l) {
          function p(t) {
            t.promise.then(d);
          }function h(e, r, n) {
            var o = t.get(e, i(s)),
                a = v(e, r),
                u = { state: o || { name: e }, params: r, hash: a };return R.push(u), S[a] = n, function () {
              var t = R.indexOf(u);t !== -1 && R.splice(t, 1);
            };
          }function v(t, r) {
            if (!f.isString(t)) throw new Error("state should be a string");return f.isObject(r) ? t + c.toJson(r) : (r = e.$eval(r), f.isObject(r) ? t + c.toJson(r) : t);
          }function d() {
            for (var t = 0; t < R.length; t++) {
              y(R[t].state, R[t].params) ? m(s, S[R[t].hash]) : g(s, S[R[t].hash]), w(R[t].state, R[t].params) ? m(s, b) : g(s, b);
            }
          }function m(t, e) {
            l(function () {
              t.addClass(e);
            });
          }function g(t, e) {
            t.removeClass(e);
          }function y(e, r) {
            return t.includes(e.name, r);
          }function w(e, r) {
            return t.is(e.name, r);
          }var b,
              $,
              R = [],
              S = {};b = r(u.uiSrefActiveEq || "", !1)(e);try {
            $ = e.$eval(u.uiSrefActive);
          } catch (E) {}$ = $ || r(u.uiSrefActive || "", !1)(e), f.isObject($) && c.forEach($, function (r, i) {
            if (f.isString(r)) {
              var o = n(r, t.current.name);h(o.state, e.$eval(o.paramExpr), i);
            }
          }), this.$$addStateInfo = function (t, e) {
            if (!(f.isObject($) && R.length > 0)) {
              var r = h(t, e, $);return d(), r;
            }
          }, e.$on("$stateChangeSuccess", d), e.$on("$destroy", o.onStart({}, p)), a.globals.transition && p(a.globals.transition), d();
        }] };
    }];u.module("ui.router.state").directive("uiSref", p).directive("uiSrefActive", v).directive("uiSrefActiveEq", v).directive("uiState", h);
  }, function (t, e, r) {
    "use strict";
    function n(t) {
      var e = function e(_e3, r, n) {
        return t.is(_e3, r, n);
      };return e.$stateful = !0, e;
    }function i(t) {
      var e = function e(_e4, r, n) {
        return t.includes(_e4, r, n);
      };return e.$stateful = !0, e;
    }var o = r(57);n.$inject = ["$state"], e.$IsStateFilter = n, i.$inject = ["$state"], e.$IncludedByStateFilter = i, o.module("ui.router.state").filter("isState", n).filter("includedByState", i);
  }, function (t, e, r) {
    "use strict";
    function n(t, e, r, n, u) {
      var v = c.parse("viewDecl.controllerAs"),
          d = c.parse("viewDecl.resolveAs");return { restrict: "ECA", priority: -400, compile: function compile(n) {
          var u = n.html();return function (n, c) {
            var m = c.data("$uiView");if (m) {
              var g = m.$cfg || { viewDecl: {} };c.html(g.template || u), s.trace.traceUIViewFill(m.$uiView, c.html());var y = t(c.contents()),
                  w = g.controller,
                  b = v(g),
                  $ = d(g),
                  R = g.path && new f.ResolveContext(g.path),
                  S = R && p.getLocals(R);if (n[$] = S, w) {
                var E = e(w, o.extend({}, S, { $scope: n, $element: c }));b && (n[b] = E, n[b][$] = S), c.data("$ngControllerController", E), c.children().data("$ngControllerController", E), i(r, E, n, g);
              }if (a.isString(g.viewDecl.component)) var x = g.viewDecl.component,
                  k = l.kebobString(x),
                  P = function P() {
                var t = [].slice.call(c[0].children).filter(function (t) {
                  return t && t.tagName && t.tagName.toLowerCase() === k;
                });return t && h.element(t).data("$" + x + "Controller");
              },
                  _ = n.$watch(P, function (t) {
                t && (i(r, t, n, g), _());
              });y(n);
            }
          };
        } };
    }function i(t, e, r, n) {
      !a.isFunction(e.$onInit) || n.viewDecl.component && d || e.$onInit();var i = o.tail(n.path).state.self,
          s = { bind: e };if (a.isFunction(e.uiOnParamsChanged)) {
        var u = new f.ResolveContext(n.path),
            c = u.getResolvable("$transition$").data,
            l = function l(t) {
          if (t !== c && t.exiting().indexOf(i) === -1) {
            var r = t.params("to"),
                n = t.params("from"),
                a = t.treeChanges().to.map(function (t) {
              return t.paramSchema;
            }).reduce(o.unnestR, []),
                s = t.treeChanges().from.map(function (t) {
              return t.paramSchema;
            }).reduce(o.unnestR, []),
                u = a.filter(function (t) {
              var e = s.indexOf(t);return e === -1 || !s[e].type.equals(r[t.id], n[t.id]);
            });if (u.length) {
              var f = u.map(function (t) {
                return t.id;
              });e.uiOnParamsChanged(o.filter(r, function (t, e) {
                return f.indexOf(e) !== -1;
              }), t);
            }
          }
        };r.$on("$destroy", t.onSuccess({}, l, s));
      }if (a.isFunction(e.uiCanExit)) {
        var p = { exiting: i.name };r.$on("$destroy", t.onBefore(p, e.uiCanExit, s));
      }
    }var o = r(3),
        a = r(4),
        s = r(12),
        u = r(55),
        c = r(5),
        f = r(17),
        l = r(9),
        p = r(53),
        h = r(57),
        v = ["$view", "$animate", "$uiViewScroll", "$interpolate", "$q", function (t, e, r, n, i) {
      function o(t, r) {
        return { enter: function enter(t, r, n) {
            h.version.minor > 2 ? e.enter(t, null, r).then(n) : e.enter(t, null, r, n);
          }, leave: function leave(t, r) {
            h.version.minor > 2 ? e.leave(t).then(r) : e.leave(t, r);
          } };
      }function f(t, e) {
        return t === e;
      }var l = { $cfg: { viewDecl: { $context: t.rootContext() } }, $uiView: {} },
          p = { count: 0, restrict: "ECA", terminal: !0, priority: 400, transclude: "element", compile: function compile(e, h, v) {
          return function (e, h, d) {
            function m(t) {
              (!t || t instanceof u.Ng1ViewConfig) && (f(k, t) || (s.trace.traceUIViewConfigUpdated(C, t && t.viewDecl && t.viewDecl.$context), k = t, y(t)));
            }function g() {
              if (w && (s.trace.traceUIViewEvent("Removing (previous) el", w.data("$uiView")), w.remove(), w = null), $ && (s.trace.traceUIViewEvent("Destroying scope", C), $.$destroy(), $ = null), b) {
                var t = b.data("$uiViewAnim");s.trace.traceUIViewEvent("Animate out", t), x.leave(b, function () {
                  t.$$animLeave.resolve(), w = null;
                }), w = b, b = null;
              }
            }function y(t) {
              var n = e.$new(),
                  o = i.defer(),
                  s = i.defer(),
                  u = { $cfg: t, $uiView: C },
                  c = { $animEnter: o.promise, $animLeave: s.promise, $$animLeave: s },
                  f = v(n, function (t) {
                t.data("$uiViewAnim", c), t.data("$uiView", u), x.enter(t, h, function () {
                  o.resolve(), $ && $.$emit("$viewContentAnimationEnded"), (a.isDefined(E) && !E || e.$eval(E)) && r(t);
                }), g();
              });b = f, $ = n, $.$emit("$viewContentLoaded", t || k), $.$eval(S);
            }var w,
                b,
                $,
                R,
                S = d.onload || "",
                E = d.autoscroll,
                x = o(d, e),
                k = void 0,
                P = h.inheritedData("$uiView") || l,
                _ = n(d.uiView || d.name || "")(e) || "$default",
                C = { $type: "ng1", id: p.count++, name: _, fqn: P.$uiView.fqn ? P.$uiView.fqn + "." + _ : _, config: null, configUpdated: m, get creationContext() {
                return c.parse("$cfg.viewDecl.$context")(P);
              } };s.trace.traceUIViewEvent("Linking", C), h.data("$uiView", { $uiView: C }), y(), R = t.registerUIView(C), e.$on("$destroy", function () {
              s.trace.traceUIViewEvent("Destroying/Unregistering", C), R();
            });
          };
        } };return p;
    }];n.$inject = ["$compile", "$controller", "$transitions", "$view", "$timeout"];var d = "function" == typeof h.module("ui.router").component;h.module("ui.router.state").directive("uiView", v), h.module("ui.router.state").directive("uiView", n);
  }, function (t, e, r) {
    "use strict";
    function n() {
      var t = !1;this.useAnchorScroll = function () {
        t = !0;
      }, this.$get = ["$anchorScroll", "$timeout", function (e, r) {
        return t ? e : function (t) {
          return r(function () {
            t[0].scrollIntoView();
          }, 0, !1);
        };
      }];
    }var i = r(57);i.module("ui.router.state").provider("$uiViewScroll", n);
  }]);
});
//# sourceMappingURL=angular-ui-router.min.js.map

//# sourceMappingURL=angular-ui-router.min-compiled.js.map