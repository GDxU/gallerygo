"use strict";

/*
 AngularJS v1.5.10-build.5179+sha.752b1e6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (U, C) {
  'use strict';
  function Ea(a, b, c) {
    if (!a) throw Oa("areq", b || "?", c || "required");return a;
  }function Fa(a, b) {
    if (!a && !b) return "";if (!a) return b;if (!b) return a;X(a) && (a = a.join(" "));X(b) && (b = b.join(" "));return a + " " + b;
  }function Pa(a) {
    var b = {};a && (a.to || a.from) && (b.to = a.to, b.from = a.from);return b;
  }function Y(a, b, c) {
    var d = "";a = X(a) ? a : a && G(a) && a.length ? a.split(/\s+/) : [];r(a, function (a, e) {
      a && 0 < a.length && (d += 0 < e ? " " : "", d += c ? b + a : a + b);
    });return d;
  }function Qa(a) {
    if (a instanceof w) switch (a.length) {case 0:
        return a;
      case 1:
        if (1 === a[0].nodeType) return a;break;default:
        return w(ua(a));}if (1 === a.nodeType) return w(a);
  }function ua(a) {
    if (!a[0]) return a;for (var b = 0; b < a.length; b++) {
      var c = a[b];if (1 === c.nodeType) return c;
    }
  }function Ra(a, b, c) {
    r(b, function (b) {
      a.addClass(b, c);
    });
  }function Sa(a, b, c) {
    r(b, function (b) {
      a.removeClass(b, c);
    });
  }function Z(a) {
    return function (b, c) {
      c.addClass && (Ra(a, b, c.addClass), c.addClass = null);c.removeClass && (Sa(a, b, c.removeClass), c.removeClass = null);
    };
  }function oa(a) {
    a = a || {};if (!a.$$prepared) {
      var b = a.domOperation || N;a.domOperation = function () {
        a.$$domOperationFired = !0;b();b = N;
      };a.$$prepared = !0;
    }return a;
  }function ha(a, b) {
    Ga(a, b);Ha(a, b);
  }function Ga(a, b) {
    b.from && (a.css(b.from), b.from = null);
  }function Ha(a, b) {
    b.to && (a.css(b.to), b.to = null);
  }function V(a, b, c) {
    var d = b.options || {};c = c.options || {};var f = (d.addClass || "") + " " + (c.addClass || ""),
        e = (d.removeClass || "") + " " + (c.removeClass || "");a = Ta(a.attr("class"), f, e);c.preparationClasses && (d.preparationClasses = ea(c.preparationClasses, d.preparationClasses), delete c.preparationClasses);
    f = d.domOperation !== N ? d.domOperation : null;va(d, c);f && (d.domOperation = f);d.addClass = a.addClass ? a.addClass : null;d.removeClass = a.removeClass ? a.removeClass : null;b.addClass = d.addClass;b.removeClass = d.removeClass;return d;
  }function Ta(a, b, c) {
    function d(a) {
      G(a) && (a = a.split(" "));var b = {};r(a, function (a) {
        a.length && (b[a] = !0);
      });return b;
    }var f = {};a = d(a);b = d(b);r(b, function (a, b) {
      f[b] = 1;
    });c = d(c);r(c, function (a, b) {
      f[b] = 1 === f[b] ? null : -1;
    });var e = { addClass: "", removeClass: "" };r(f, function (b, c) {
      var d, f;1 === b ? (d = "addClass", f = !a[c] || a[c + "-remove"]) : -1 === b && (d = "removeClass", f = a[c] || a[c + "-add"]);f && (e[d].length && (e[d] += " "), e[d] += c);
    });return e;
  }function z(a) {
    return a instanceof w ? a[0] : a;
  }function Ua(a, b, c) {
    var d = "";b && (d = Y(b, "ng-", !0));c.addClass && (d = ea(d, Y(c.addClass, "-add")));c.removeClass && (d = ea(d, Y(c.removeClass, "-remove")));d.length && (c.preparationClasses = d, a.addClass(d));
  }function pa(a, b) {
    var c = b ? "-" + b + "s" : "";ka(a, [la, c]);return [la, c];
  }function wa(a, b) {
    var c = b ? "paused" : "",
        d = $ + "PlayState";ka(a, [d, c]);return [d, c];
  }function ka(a, b) {
    a.style[b[0]] = b[1];
  }function ea(a, b) {
    return a ? b ? a + " " + b : a : b;
  }function Ia(a, b, c) {
    var d = Object.create(null),
        f = a.getComputedStyle(b) || {};r(c, function (a, b) {
      var c = f[a];if (c) {
        var y = c.charAt(0);if ("-" === y || "+" === y || 0 <= y) c = Va(c);0 === c && (c = null);d[b] = c;
      }
    });return d;
  }function Va(a) {
    var b = 0;a = a.split(/\s*,\s*/);r(a, function (a) {
      "s" === a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));a = parseFloat(a) || 0;b = b ? Math.max(a, b) : a;
    });return b;
  }function xa(a) {
    return 0 === a || null != a;
  }function Ja(a, b) {
    var c = R,
        d = a + "s";b ? c += "Duration" : d += " linear all";return [c, d];
  }function Ka() {
    var a = Object.create(null);return { flush: function flush() {
        a = Object.create(null);
      }, count: function count(b) {
        return (b = a[b]) ? b.total : 0;
      }, get: function get(b) {
        return (b = a[b]) && b.value;
      }, put: function put(b, c) {
        a[b] ? a[b].total++ : a[b] = { total: 1, value: c };
      } };
  }function La(a, b, c) {
    r(c, function (c) {
      a[c] = ya(a[c]) ? a[c] : b.style.getPropertyValue(c);
    });
  }var R, za, $, Aa;void 0 === U.ontransitionend && void 0 !== U.onwebkittransitionend ? (R = "WebkitTransition", za = "webkitTransitionEnd transitionend") : (R = "transition", za = "transitionend");void 0 === U.onanimationend && void 0 !== U.onwebkitanimationend ? ($ = "WebkitAnimation", Aa = "webkitAnimationEnd animationend") : ($ = "animation", Aa = "animationend");var qa = $ + "Delay",
      Ba = $ + "Duration",
      la = R + "Delay",
      Ma = R + "Duration",
      Oa = C.$$minErr("ng"),
      Wa = { transitionDuration: Ma, transitionDelay: la, transitionProperty: R + "Property", animationDuration: Ba, animationDelay: qa, animationIterationCount: $ + "IterationCount" },
      Xa = { transitionDuration: Ma, transitionDelay: la, animationDuration: Ba, animationDelay: qa },
      Ca,
      va,
      r,
      X,
      ya,
      aa,
      Da,
      ra,
      G,
      K,
      w,
      N;C.module("ngAnimate", [], function () {
    N = C.noop;Ca = C.copy;va = C.extend;w = C.element;r = C.forEach;X = C.isArray;G = C.isString;ra = C.isObject;K = C.isUndefined;ya = C.isDefined;Da = C.isFunction;aa = C.isElement;
  }).directive("ngAnimateSwap", ["$animate", "$rootScope", function (a, b) {
    return { restrict: "A", transclude: "element", terminal: !0, priority: 600, link: function link(b, d, f, e, m) {
        var A, y;b.$watchCollection(f.ngAnimateSwap || f["for"], function (f) {
          A && a.leave(A);y && (y.$destroy(), y = null);if (f || 0 === f) y = b.$new(), m(y, function (b) {
            A = b;a.enter(b, null, d);
          });
        });
      } };
  }]).directive("ngAnimateChildren", ["$interpolate", function (a) {
    return { link: function link(b, c, d) {
        function f(a) {
          c.data("$$ngAnimateChildren", "on" === a || "true" === a);
        }var e = d.ngAnimateChildren;G(e) && 0 === e.length ? c.data("$$ngAnimateChildren", !0) : (f(a(e)(b)), d.$observe("ngAnimateChildren", f));
      } };
  }]).factory("$$rAFScheduler", ["$$rAF", function (a) {
    function b(a) {
      d = d.concat(a);c();
    }function c() {
      if (d.length) {
        for (var b = d.shift(), m = 0; m < b.length; m++) {
          b[m]();
        }f || a(function () {
          f || c();
        });
      }
    }var d, f;d = b.queue = [];b.waitUntilQuiet = function (b) {
      f && f();f = a(function () {
        f = null;b();c();
      });
    };return b;
  }]).provider("$$animateQueue", ["$animateProvider", function (a) {
    function b(a) {
      if (!a) return null;a = a.split(" ");var b = Object.create(null);r(a, function (a) {
        b[a] = !0;
      });return b;
    }function c(a, c) {
      if (a && c) {
        var d = b(c);return a.split(" ").some(function (a) {
          return d[a];
        });
      }
    }function d(a, b, c, d) {
      return e[a].some(function (a) {
        return a(b, c, d);
      });
    }function f(a, b) {
      var c = 0 < (a.addClass || "").length,
          d = 0 < (a.removeClass || "").length;return b ? c && d : c || d;
    }var e = this.rules = { skip: [], cancel: [], join: [] };e.join.push(function (a, b, c) {
      return !b.structural && f(b);
    });e.skip.push(function (a, b, c) {
      return !b.structural && !f(b);
    });e.skip.push(function (a, b, c) {
      return "leave" === c.event && b.structural;
    });e.skip.push(function (a, b, c) {
      return c.structural && 2 === c.state && !b.structural;
    });e.cancel.push(function (a, b, c) {
      return c.structural && b.structural;
    });e.cancel.push(function (a, b, c) {
      return 2 === c.state && b.structural;
    });e.cancel.push(function (a, b, d) {
      if (d.structural) return !1;a = b.addClass;b = b.removeClass;var f = d.addClass;d = d.removeClass;return K(a) && K(b) || K(f) && K(d) ? !1 : c(a, d) || c(b, f);
    });this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", "$$isDocumentHidden", function (b, c, y, e, ba, Ya, O, v, H, S, P) {
      function I() {
        var a = !1;return function (b) {
          a ? b() : c.$$postDigest(function () {
            a = !0;b();
          });
        };
      }function B(a, b, c) {
        var g = z(b),
            d = z(a),
            E = [];(a = t[c]) && r(a, function (a) {
          J.call(a.node, g) ? E.push(a.callback) : "leave" === c && J.call(a.node, d) && E.push(a.callback);
        });return E;
      }function n(a, b, c) {
        var g = ua(b);return a.filter(function (a) {
          return !(a.node === g && (!c || a.callback === c));
        });
      }function p(a, h, u) {
        function p(c, g, d, h) {
          y(function () {
            var c = B(S, a, g);c.length ? b(function () {
              r(c, function (b) {
                b(a, d, h);
              });"close" !== d || a[0].parentNode || sa.off(a);
            }) : "close" !== d || a[0].parentNode || sa.off(a);
          });c.progress(g, d, h);
        }function n(b) {
          var c = a,
              g = k;g.preparationClasses && (c.removeClass(g.preparationClasses), g.preparationClasses = null);g.activeClasses && (c.removeClass(g.activeClasses), g.activeClasses = null);Na(a, k);ha(a, k);k.domOperation();e.complete(!b);
        }var k = Ca(u),
            t,
            S;if (a = Qa(a)) t = z(a), S = a.parent();var k = oa(k),
            e = new O(),
            y = I();X(k.addClass) && (k.addClass = k.addClass.join(" "));k.addClass && !G(k.addClass) && (k.addClass = null);X(k.removeClass) && (k.removeClass = k.removeClass.join(" "));k.removeClass && !G(k.removeClass) && (k.removeClass = null);k.from && !ra(k.from) && (k.from = null);k.to && !ra(k.to) && (k.to = null);if (!t) return n(), e;u = [t.getAttribute("class"), k.addClass, k.removeClass].join(" ");if (!F(u)) return n(), e;var s = 0 <= ["enter", "move", "leave"].indexOf(h),
            x = P(),
            v = !ma || x || g.get(t);u = !v && E.get(t) || {};var J = !!u.state;v || J && 1 === u.state || (v = !L(a, S, h));if (v) return x && p(e, h, "start"), n(), x && p(e, h, "close"), e;s && ta(a);x = { structural: s, element: a, event: h, addClass: k.addClass, removeClass: k.removeClass, close: n, options: k, runner: e };if (J) {
          if (d("skip", a, x, u)) {
            if (2 === u.state) return n(), e;V(a, u, x);return u.runner;
          }if (d("cancel", a, x, u)) {
            if (2 === u.state) u.runner.end();else if (u.structural) u.close();else return V(a, u, x), u.runner;
          } else if (d("join", a, x, u)) if (2 === u.state) V(a, x, {});else return Ua(a, s ? h : null, k), h = x.event = u.event, k = V(a, u, x), u.runner;
        } else V(a, x, {});(J = x.structural) || (J = "animate" === x.event && 0 < Object.keys(x.options.to || {}).length || f(x));if (!J) return n(), l(a), e;var H = (u.counter || 0) + 1;x.counter = H;Q(a, 1, x);c.$$postDigest(function () {
          var b = E.get(t),
              c = !b,
              b = b || {},
              g = 0 < (a.parent() || []).length && ("animate" === b.event || b.structural || f(b));if (c || b.counter !== H || !g) {
            c && (Na(a, k), ha(a, k));if (c || s && b.event !== h) k.domOperation(), e.end();g || l(a);
          } else h = !b.structural && f(b, !0) ? "setClass" : b.event, Q(a, 2), b = Ya(a, h, b.options), e.setHost(b), p(e, h, "start", {}), b.done(function (b) {
            n(!b);(b = E.get(t)) && b.counter === H && l(z(a));p(e, h, "close", {});
          });
        });return e;
      }function ta(a) {
        a = z(a).querySelectorAll("[data-ng-animate]");r(a, function (a) {
          var b = parseInt(a.getAttribute("data-ng-animate"), 10),
              c = E.get(a);if (c) switch (b) {case 2:
              c.runner.end();case 1:
              E.remove(a);}
        });
      }function l(a) {
        a = z(a);a.removeAttribute("data-ng-animate");E.remove(a);
      }
      function k(a, b) {
        return z(a) === z(b);
      }function L(a, b, c) {
        c = w(e[0].body);var d = k(a, c) || "HTML" === a[0].nodeName,
            h = k(a, y),
            f = !1,
            B,
            p = g.get(z(a));(a = w.data(a[0], "$ngAnimatePin")) && (b = a);for (b = z(b); b;) {
          h || (h = k(b, y));if (1 !== b.nodeType) break;a = E.get(b) || {};if (!f) {
            var n = g.get(b);if (!0 === n && !1 !== p) {
              p = !0;break;
            } else !1 === n && (p = !1);f = a.structural;
          }if (K(B) || !0 === B) a = w.data(b, "$$ngAnimateChildren"), ya(a) && (B = a);if (f && !1 === B) break;d || (d = k(b, c));if (d && h) break;if (!h && (a = w.data(b, "$ngAnimatePin"))) {
            b = z(a);continue;
          }b = b.parentNode;
        }return (!f || B) && !0 !== p && h && d;
      }function Q(a, b, c) {
        c = c || {};c.state = b;a = z(a);a.setAttribute("data-ng-animate", b);c = (b = E.get(a)) ? va(b, c) : c;E.put(a, c);
      }var E = new ba(),
          g = new ba(),
          ma = null,
          h = c.$watch(function () {
        return 0 === v.totalPendingRequests;
      }, function (a) {
        a && (h(), c.$$postDigest(function () {
          c.$$postDigest(function () {
            null === ma && (ma = !0);
          });
        }));
      }),
          t = Object.create(null),
          x = a.classNameFilter(),
          F = x ? function (a) {
        return x.test(a);
      } : function () {
        return !0;
      },
          Na = Z(H),
          J = U.Node.prototype.contains || function (a) {
        return this === a || !!(this.compareDocumentPosition(a) & 16);
      },
          sa = { on: function on(a, b, c) {
          var g = ua(b);t[a] = t[a] || [];t[a].push({ node: g, callback: c });w(b).on("$destroy", function () {
            E.get(g) || sa.off(a, b, c);
          });
        }, off: function off(a, b, c) {
          if (1 !== arguments.length || G(arguments[0])) {
            var g = t[a];g && (t[a] = 1 === arguments.length ? null : n(g, b, c));
          } else for (g in b = arguments[0], t) {
            t[g] = n(t[g], b);
          }
        }, pin: function pin(a, b) {
          Ea(aa(a), "element", "not an element");Ea(aa(b), "parentElement", "not an element");a.data("$ngAnimatePin", b);
        }, push: function push(a, b, c, g) {
          c = c || {};c.domOperation = g;return p(a, b, c);
        }, enabled: function enabled(a, b) {
          var c = arguments.length;if (0 === c) b = !!ma;else if (aa(a)) {
            var d = z(a);1 === c ? b = !g.get(d) : g.put(d, !b);
          } else b = ma = !!a;return b;
        } };return sa;
    }];
  }]).provider("$$animation", ["$animateProvider", function (a) {
    var b = this.drivers = [];this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function (a, d, f, e, m, A) {
      function y(a) {
        function b(a) {
          if (a.processed) return a;a.processed = !0;var d = a.domNode,
              n = d.parentNode;f.put(d, a);for (var p; n;) {
            if (p = f.get(n)) {
              p.processed || (p = b(p));break;
            }n = n.parentNode;
          }(p || c).children.push(a);return a;
        }var c = { children: [] },
            d,
            f = new m();for (d = 0; d < a.length; d++) {
          var e = a[d];f.put(e.domNode, a[d] = { domNode: e.domNode, fn: e.fn, children: [] });
        }for (d = 0; d < a.length; d++) {
          b(a[d]);
        }return function (a) {
          var b = [],
              c = [],
              d;for (d = 0; d < a.children.length; d++) {
            c.push(a.children[d]);
          }a = c.length;var f = 0,
              e = [];for (d = 0; d < c.length; d++) {
            var k = c[d];0 >= a && (a = f, f = 0, b.push(e), e = []);e.push(k.fn);k.children.forEach(function (a) {
              f++;c.push(a);
            });a--;
          }e.length && b.push(e);return b;
        }(c);
      }var s = [],
          ba = Z(a);return function (m, O, v) {
        function H(a) {
          a = a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]");var b = [];r(a, function (a) {
            var c = a.getAttribute("ng-animate-ref");c && c.length && b.push(a);
          });return b;
        }function S(a) {
          var b = [],
              c = {};r(a, function (a, d) {
            var h = z(a.element),
                k = 0 <= ["enter", "move"].indexOf(a.event),
                h = a.structural ? H(h) : [];if (h.length) {
              var f = k ? "to" : "from";r(h, function (a) {
                var b = a.getAttribute("ng-animate-ref");c[b] = c[b] || {};c[b][f] = { animationID: d, element: w(a) };
              });
            } else b.push(a);
          });var d = {},
              k = {};r(c, function (c, f) {
            var e = c.from,
                B = c.to;if (e && B) {
              var p = a[e.animationID],
                  n = a[B.animationID],
                  l = e.animationID.toString();if (!k[l]) {
                var m = k[l] = { structural: !0, beforeStart: function beforeStart() {
                    p.beforeStart();n.beforeStart();
                  }, close: function close() {
                    p.close();n.close();
                  }, classes: P(p.classes, n.classes), from: p, to: n, anchors: [] };m.classes.length ? b.push(m) : (b.push(p), b.push(n));
              }k[l].anchors.push({ out: e.element, "in": B.element });
            } else e = e ? e.animationID : B.animationID, B = e.toString(), d[B] || (d[B] = !0, b.push(a[e]));
          });return b;
        }function P(a, b) {
          a = a.split(" ");b = b.split(" ");
          for (var c = [], d = 0; d < a.length; d++) {
            var k = a[d];if ("ng-" !== k.substring(0, 3)) for (var f = 0; f < b.length; f++) {
              if (k === b[f]) {
                c.push(k);break;
              }
            }
          }return c.join(" ");
        }function I(a) {
          for (var c = b.length - 1; 0 <= c; c--) {
            var d = f.get(b[c])(a);if (d) return d;
          }
        }function B(a, b) {
          function c(a) {
            (a = a.data("$$animationRunner")) && a.setHost(b);
          }a.from && a.to ? (c(a.from.element), c(a.to.element)) : c(a.element);
        }function n() {
          var a = m.data("$$animationRunner");!a || "leave" === O && v.$$domOperationFired || a.end();
        }function p(b) {
          m.off("$destroy", n);m.removeData("$$animationRunner");
          ba(m, v);ha(m, v);v.domOperation();L && a.removeClass(m, L);m.removeClass("ng-animate");l.complete(!b);
        }v = oa(v);var ta = 0 <= ["enter", "move", "leave"].indexOf(O),
            l = new e({ end: function end() {
            p();
          }, cancel: function cancel() {
            p(!0);
          } });if (!b.length) return p(), l;m.data("$$animationRunner", l);var k = Fa(m.attr("class"), Fa(v.addClass, v.removeClass)),
            L = v.tempClasses;L && (k += " " + L, v.tempClasses = null);var Q;ta && (Q = "ng-" + O + "-prepare", a.addClass(m, Q));s.push({ element: m, classes: k, event: O, structural: ta, options: v, beforeStart: function beforeStart() {
            m.addClass("ng-animate");
            L && a.addClass(m, L);Q && (a.removeClass(m, Q), Q = null);
          }, close: p });m.on("$destroy", n);if (1 < s.length) return l;d.$$postDigest(function () {
          var a = [];r(s, function (b) {
            b.element.data("$$animationRunner") ? a.push(b) : b.close();
          });s.length = 0;var b = S(a),
              c = [];r(b, function (a) {
            c.push({ domNode: z(a.from ? a.from.element : a.element), fn: function fn() {
                a.beforeStart();var b,
                    c = a.close;if ((a.anchors ? a.from.element || a.to.element : a.element).data("$$animationRunner")) {
                  var d = I(a);d && (b = d.start);
                }b ? (b = b(), b.done(function (a) {
                  c(!a);
                }), B(a, b)) : c();
              } });
          });A(y(c));
        });return l;
      };
    }];
  }]).provider("$animateCss", ["$animateProvider", function (a) {
    var b = Ka(),
        c = Ka();this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function (a, f, e, m, A, y, s, ba) {
      function C(a, b) {
        var c = a.parentNode;return (c.$$ngAnimateParentKey || (c.$$ngAnimateParentKey = ++P)) + "-" + a.getAttribute("class") + "-" + b;
      }function O(e, n, p, m) {
        var l;0 < b.count(p) && (l = c.get(p), l || (n = Y(n, "-stagger"), f.addClass(e, n), l = Ia(a, e, m), l.animationDuration = Math.max(l.animationDuration, 0), l.transitionDuration = Math.max(l.transitionDuration, 0), f.removeClass(e, n), c.put(p, l)));return l || {};
      }function v(a) {
        I.push(a);s.waitUntilQuiet(function () {
          b.flush();c.flush();for (var a = A(), d = 0; d < I.length; d++) {
            I[d](a);
          }I.length = 0;
        });
      }function H(c, f, e) {
        f = b.get(e);f || (f = Ia(a, c, Wa), "infinite" === f.animationIterationCount && (f.animationIterationCount = 1));b.put(e, f);c = f;e = c.animationDelay;f = c.transitionDelay;c.maxDelay = e && f ? Math.max(e, f) : e || f;c.maxDuration = Math.max(c.animationDuration * c.animationIterationCount, c.transitionDuration);return c;
      }var S = Z(f),
          P = 0,
          I = [];return function (a, c) {
        function d() {
          l();
        }function s() {
          l(!0);
        }function l(b) {
          if (!(A || P && J)) {
            A = !0;J = !1;g.$$skipPreparationClasses || f.removeClass(a, ga);f.removeClass(a, ea);wa(h, !1);pa(h, !1);r(t, function (a) {
              h.style[a[0]] = "";
            });S(a, g);ha(a, g);Object.keys(I).length && r(I, function (a, b) {
              a ? h.style.setProperty(b, a) : h.style.removeProperty(b);
            });if (g.onDone) g.onDone();fa && fa.length && a.off(fa.join(" "), Q);var c = a.data("$$animateCss");c && (m.cancel(c[0].timer), a.removeData("$$animateCss"));w && w.complete(!b);
          }
        }function k(a) {
          q.blockTransition && pa(h, a);q.blockKeyframeAnimation && wa(h, !!a);
        }function L() {
          w = new e({ end: d, cancel: s });v(N);l();return { $$willAnimate: !1, start: function start() {
              return w;
            }, end: d };
        }function Q(a) {
          a.stopPropagation();var b = a.originalEvent || a;a = b.$manualTimeStamp || Date.now();b = parseFloat(b.elapsedTime.toFixed(3));Math.max(a - V, 0) >= K && b >= M && (P = !0, l());
        }function E() {
          function b() {
            if (!A) {
              k(!1);r(t, function (a) {
                h.style[a[0]] = a[1];
              });S(a, g);f.addClass(a, ea);if (q.recalculateTimingStyles) {
                na = h.getAttribute("class") + " " + ga;ja = C(h, na);D = H(h, na, ja);ca = D.maxDelay;u = Math.max(ca, 0);M = D.maxDuration;if (0 === M) {
                  l();return;
                }q.hasTransitions = 0 < D.transitionDuration;q.hasAnimations = 0 < D.animationDuration;
              }q.applyAnimationDelay && (ca = "boolean" !== typeof g.delay && xa(g.delay) ? parseFloat(g.delay) : ca, u = Math.max(ca, 0), D.animationDelay = ca, da = [qa, ca + "s"], t.push(da), h.style[da[0]] = da[1]);K = 1E3 * u;U = 1E3 * M;if (g.easing) {
                var d,
                    e = g.easing;q.hasTransitions && (d = R + "TimingFunction", t.push([d, e]), h.style[d] = e);q.hasAnimations && (d = $ + "TimingFunction", t.push([d, e]), h.style[d] = e);
              }D.transitionDuration && fa.push(za);D.animationDuration && fa.push(Aa);V = Date.now();var E = K + 1.5 * U;d = V + E;var e = a.data("$$animateCss") || [],
                  n = !0;if (e.length) {
                var p = e[0];(n = d > p.expectedEndTime) ? m.cancel(p.timer) : e.push(l);
              }n && (E = m(c, E, !1), e[0] = { timer: E, expectedEndTime: d }, e.push(l), a.data("$$animateCss", e));if (fa.length) a.on(fa.join(" "), Q);g.to && (g.cleanupStyles && La(I, h, Object.keys(g.to)), Ha(a, g));
            }
          }function c() {
            var b = a.data("$$animateCss");if (b) {
              for (var d = 1; d < b.length; d++) {
                b[d]();
              }a.removeData("$$animateCss");
            }
          }if (!A) if (h.parentNode) {
            var d = function d(a) {
              if (P) J && a && (J = !1, l());else if (J = !a, D.animationDuration) if (a = wa(h, J), J) t.push(a);else {
                var b = t,
                    c = b.indexOf(a);0 <= a && b.splice(c, 1);
              }
            },
                e = 0 < aa && (D.transitionDuration && 0 === W.transitionDuration || D.animationDuration && 0 === W.animationDuration) && Math.max(W.animationDelay, W.transitionDelay);e ? m(b, Math.floor(e * aa * 1E3), !1) : b();G.resume = function () {
              d(!0);
            };G.pause = function () {
              d(!1);
            };
          } else l();
        }var g = c || {};g.$$prepared || (g = oa(Ca(g)));
        var I = {},
            h = z(a);if (!h || !h.parentNode || !ba.enabled()) return L();var t = [],
            x = a.attr("class"),
            F = Pa(g),
            A,
            J,
            P,
            w,
            G,
            u,
            K,
            M,
            U,
            V,
            fa = [];if (0 === g.duration || !y.animations && !y.transitions) return L();var ia = g.event && X(g.event) ? g.event.join(" ") : g.event,
            Z = "",
            T = "";ia && g.structural ? Z = Y(ia, "ng-", !0) : ia && (Z = ia);g.addClass && (T += Y(g.addClass, "-add"));g.removeClass && (T.length && (T += " "), T += Y(g.removeClass, "-remove"));g.applyClassesEarly && T.length && S(a, g);var ga = [Z, T].join(" ").trim(),
            na = x + " " + ga,
            ea = Y(ga, "-active"),
            x = F.to && 0 < Object.keys(F.to).length;if (!(0 < (g.keyframeStyle || "").length || x || ga)) return L();var ja, W;0 < g.stagger ? (F = parseFloat(g.stagger), W = { transitionDelay: F, animationDelay: F, transitionDuration: 0, animationDuration: 0 }) : (ja = C(h, na), W = O(h, ga, ja, Xa));g.$$skipPreparationClasses || f.addClass(a, ga);g.transitionStyle && (F = [R, g.transitionStyle], ka(h, F), t.push(F));0 <= g.duration && (F = 0 < h.style[R].length, F = Ja(g.duration, F), ka(h, F), t.push(F));g.keyframeStyle && (F = [$, g.keyframeStyle], ka(h, F), t.push(F));var aa = W ? 0 <= g.staggerIndex ? g.staggerIndex : b.count(ja) : 0;(ia = 0 === aa) && !g.skipBlocking && pa(h, 9999);var D = H(h, na, ja),
            ca = D.maxDelay;u = Math.max(ca, 0);M = D.maxDuration;var q = {};q.hasTransitions = 0 < D.transitionDuration;q.hasAnimations = 0 < D.animationDuration;q.hasTransitionAll = q.hasTransitions && "all" === D.transitionProperty;q.applyTransitionDuration = x && (q.hasTransitions && !q.hasTransitionAll || q.hasAnimations && !q.hasTransitions);q.applyAnimationDuration = g.duration && q.hasAnimations;q.applyTransitionDelay = xa(g.delay) && (q.applyTransitionDuration || q.hasTransitions);q.applyAnimationDelay = xa(g.delay) && q.hasAnimations;q.recalculateTimingStyles = 0 < T.length;if (q.applyTransitionDuration || q.applyAnimationDuration) M = g.duration ? parseFloat(g.duration) : M, q.applyTransitionDuration && (q.hasTransitions = !0, D.transitionDuration = M, F = 0 < h.style[R + "Property"].length, t.push(Ja(M, F))), q.applyAnimationDuration && (q.hasAnimations = !0, D.animationDuration = M, t.push([Ba, M + "s"]));if (0 === M && !q.recalculateTimingStyles) return L();if (null != g.delay) {
          var da;"boolean" !== typeof g.delay && (da = parseFloat(g.delay), u = Math.max(da, 0));q.applyTransitionDelay && t.push([la, da + "s"]);q.applyAnimationDelay && t.push([qa, da + "s"]);
        }null == g.duration && 0 < D.transitionDuration && (q.recalculateTimingStyles = q.recalculateTimingStyles || ia);K = 1E3 * u;U = 1E3 * M;g.skipBlocking || (q.blockTransition = 0 < D.transitionDuration, q.blockKeyframeAnimation = 0 < D.animationDuration && 0 < W.animationDelay && 0 === W.animationDuration);g.from && (g.cleanupStyles && La(I, h, Object.keys(g.from)), Ga(a, g));q.blockTransition || q.blockKeyframeAnimation ? k(M) : g.skipBlocking || pa(h, !1);return { $$willAnimate: !0, end: d, start: function start() {
            if (!A) return G = { end: d, cancel: s, resume: null, pause: null }, w = new e(G), v(E), w;
          } };
      };
    }];
  }]).provider("$$animateCssDriver", ["$$animationProvider", function (a) {
    a.drivers.push("$$animateCssDriver");this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function (a, c, d, f, e, m, A) {
      function y(a) {
        return a.replace(/\bng-\S+\b/g, "");
      }function s(a, b) {
        G(a) && (a = a.split(" "));G(b) && (b = b.split(" "));return a.filter(function (a) {
          return -1 === b.indexOf(a);
        }).join(" ");
      }function ba(c, e, f) {
        function m(a) {
          var b = {},
              c = z(a).getBoundingClientRect();r(["width", "height", "top", "left"], function (a) {
            var d = c[a];switch (a) {case "top":
                d += v.scrollTop;break;case "left":
                d += v.scrollLeft;}b[a] = Math.floor(d) + "px";
          });return b;
        }function n() {
          var c = y(f.attr("class") || ""),
              d = s(c, l),
              c = s(l, c),
              d = a(A, { to: m(f), addClass: "ng-anchor-in " + d, removeClass: "ng-anchor-out " + c, delay: !0 });return d.$$willAnimate ? d : null;
        }function p() {
          A.remove();e.removeClass("ng-animate-shim");f.removeClass("ng-animate-shim");
        }
        var A = w(z(e).cloneNode(!0)),
            l = y(A.attr("class") || "");e.addClass("ng-animate-shim");f.addClass("ng-animate-shim");A.addClass("ng-anchor");H.append(A);var k;c = function () {
          var c = a(A, { addClass: "ng-anchor-out", delay: !0, from: m(e) });return c.$$willAnimate ? c : null;
        }();if (!c && (k = n(), !k)) return p();var L = c || k;return { start: function start() {
            function a() {
              c && c.end();
            }var b,
                c = L.start();c.done(function () {
              c = null;if (!k && (k = n())) return c = k.start(), c.done(function () {
                c = null;p();b.complete();
              }), c;p();b.complete();
            });return b = new d({ end: a,
              cancel: a });
          } };
      }function C(a, b, c, e) {
        var f = O(a, N),
            m = O(b, N),
            y = [];r(e, function (a) {
          (a = ba(c, a.out, a["in"])) && y.push(a);
        });if (f || m || 0 !== y.length) return { start: function start() {
            function a() {
              r(b, function (a) {
                a.end();
              });
            }var b = [];f && b.push(f.start());m && b.push(m.start());r(y, function (a) {
              b.push(a.start());
            });var c = new d({ end: a, cancel: a });d.all(b, function (a) {
              c.complete(a);
            });return c;
          } };
      }function O(c) {
        var d = c.element,
            e = c.options || {};c.structural && (e.event = c.event, e.structural = !0, e.applyClassesEarly = !0, "leave" === c.event && (e.onDone = e.domOperation));e.preparationClasses && (e.event = ea(e.event, e.preparationClasses));c = a(d, e);return c.$$willAnimate ? c : null;
      }if (!e.animations && !e.transitions) return N;var v = A[0].body;c = z(f);var H = w(c.parentNode && 11 === c.parentNode.nodeType || v.contains(c) ? c : v);return function (a) {
        return a.from && a.to ? C(a.from, a.to, a.classes, a.anchors) : O(a);
      };
    }];
  }]).provider("$$animateJs", ["$animateProvider", function (a) {
    this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function (b, c, d) {
      function f(c) {
        c = X(c) ? c : c.split(" ");for (var d = [], e = {}, f = 0; f < c.length; f++) {
          var r = c[f],
              w = a.$$registeredAnimations[r];w && !e[r] && (d.push(b.get(w)), e[r] = !0);
        }return d;
      }var e = Z(d);return function (a, b, d, s) {
        function w() {
          s.domOperation();e(a, s);
        }function C(a, b, d, e, f) {
          switch (d) {case "animate":
              b = [b, e.from, e.to, f];break;case "setClass":
              b = [b, G, P, f];break;case "addClass":
              b = [b, G, f];break;case "removeClass":
              b = [b, P, f];break;default:
              b = [b, f];}b.push(e);if (a = a.apply(a, b)) if (Da(a.start) && (a = a.start()), a instanceof c) a.done(f);else if (Da(a)) return a;return N;
        }function z(a, b, d, e, f) {
          var l = [];r(e, function (e) {
            var m = e[f];m && l.push(function () {
              var e,
                  f,
                  g = !1,
                  h = function h(a) {
                g || (g = !0, (f || N)(a), e.complete(!a));
              };e = new c({ end: function end() {
                  h();
                }, cancel: function cancel() {
                  h(!0);
                } });f = C(m, a, b, d, function (a) {
                h(!1 === a);
              });return e;
            });
          });return l;
        }function v(a, b, d, e, f) {
          var l = z(a, b, d, e, f);if (0 === l.length) {
            var h, m;"beforeSetClass" === f ? (h = z(a, "removeClass", d, e, "beforeRemoveClass"), m = z(a, "addClass", d, e, "beforeAddClass")) : "setClass" === f && (h = z(a, "removeClass", d, e, "removeClass"), m = z(a, "addClass", d, e, "addClass"));
            h && (l = l.concat(h));m && (l = l.concat(m));
          }if (0 !== l.length) return function (a) {
            var b = [];l.length && r(l, function (a) {
              b.push(a());
            });b.length ? c.all(b, a) : a();return function (a) {
              r(b, function (b) {
                a ? b.cancel() : b.end();
              });
            };
          };
        }var H = !1;3 === arguments.length && ra(d) && (s = d, d = null);s = oa(s);d || (d = a.attr("class") || "", s.addClass && (d += " " + s.addClass), s.removeClass && (d += " " + s.removeClass));var G = s.addClass,
            P = s.removeClass,
            I = f(d),
            B,
            n;if (I.length) {
          var p, K;"leave" === b ? (K = "leave", p = "afterLeave") : (K = "before" + b.charAt(0).toUpperCase() + b.substr(1), p = b);"enter" !== b && "move" !== b && (B = v(a, b, s, I, K));n = v(a, b, s, I, p);
        }if (B || n) {
          var l;return { $$willAnimate: !0, end: function end() {
              l ? l.end() : (H = !0, w(), ha(a, s), l = new c(), l.complete(!0));return l;
            }, start: function start() {
              function b(c) {
                H = !0;w();ha(a, s);l.complete(c);
              }if (l) return l;l = new c();var d,
                  e = [];B && e.push(function (a) {
                d = B(a);
              });e.length ? e.push(function (a) {
                w();a(!0);
              }) : w();n && e.push(function (a) {
                d = n(a);
              });l.setHost({ end: function end() {
                  H || ((d || N)(void 0), b(void 0));
                }, cancel: function cancel() {
                  H || ((d || N)(!0), b(!0));
                } });c.chain(e, b);return l;
            } };
        }
      };
    }];
  }]).provider("$$animateJsDriver", ["$$animationProvider", function (a) {
    a.drivers.push("$$animateJsDriver");this.$get = ["$$animateJs", "$$AnimateRunner", function (a, c) {
      function d(c) {
        return a(c.element, c.event, c.classes, c.options);
      }return function (a) {
        if (a.from && a.to) {
          var b = d(a.from),
              m = d(a.to);if (b || m) return { start: function start() {
              function a() {
                return function () {
                  r(d, function (a) {
                    a.end();
                  });
                };
              }var d = [];b && d.push(b.start());m && d.push(m.start());c.all(d, function (a) {
                f.complete(a);
              });var f = new c({ end: a(), cancel: a() });
              return f;
            } };
        } else return d(a);
      };
    }];
  }]);
})(window, window.angular);
//# sourceMappingURL=angular-animate.min.js.map

//# sourceMappingURL=angular-animate.min-compiled.js.map