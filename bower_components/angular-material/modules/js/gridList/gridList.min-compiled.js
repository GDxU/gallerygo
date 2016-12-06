"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (t, e, n) {
  "use strict";
  function i(t, n, i, o) {
    function a(r, a, u, s) {
      function l() {
        for (var t in n.MEDIA) {
          o(t), o.getQuery(n.MEDIA[t]).addListener(T);
        }return o.watchResponsiveAttributes(["md-cols", "md-row-height", "md-gutter"], u, d);
      }function c() {
        s.layoutDelegate = e.noop, L();for (var t in n.MEDIA) {
          o.getQuery(n.MEDIA[t]).removeListener(T);
        }
      }function d(t) {
        null == t ? s.invalidateLayout() : o(t) && s.invalidateLayout();
      }function f(t) {
        var n = h(),
            o = { tileSpans: v(n), colCount: w(), rowMode: b(), rowHeight: $(), gutter: y() };if (t || !e.equals(o, D)) {
          var u = i(o.colCount, o.tileSpans, n).map(function (t, i) {
            return { grid: { element: a, style: p(o.colCount, i, o.gutter, o.rowMode, o.rowHeight) }, tiles: t.map(function (t, r) {
                return { element: e.element(n[r]), style: g(t.position, t.spans, o.colCount, i, o.gutter, o.rowMode, o.rowHeight) };
              }) };
          }).reflow().performance();r.mdOnLayout({ $event: { performance: u } }), D = o;
        }
      }function m(t) {
        return x + t + M;
      }function g(t, e, n, i, r, o, a) {
        var u = 1 / n * 100,
            s = (n - 1) / n,
            l = A({ share: u, gutterShare: s, gutter: r }),
            c = { left: C({ unit: l, offset: t.col, gutter: r }), width: G({ unit: l, span: e.col, gutter: r }), paddingTop: "", marginTop: "", top: "", height: "" };switch (o) {case "fixed":
            c.top = C({ unit: a, offset: t.row, gutter: r }), c.height = G({ unit: a, span: e.row, gutter: r });break;case "ratio":
            var d = u / a,
                f = A({ share: d, gutterShare: s, gutter: r });c.paddingTop = G({ unit: f, span: e.row, gutter: r }), c.marginTop = C({ unit: f, offset: t.row, gutter: r });break;case "fit":
            var m = (i - 1) / i,
                d = 1 / i * 100,
                f = A({ share: d, gutterShare: m, gutter: r });c.top = C({ unit: f, offset: t.row, gutter: r }), c.height = G({ unit: f, span: e.row, gutter: r });}return c;
      }function p(t, e, n, i, r) {
        var o = {};switch (i) {case "fixed":
            o.height = G({ unit: r, span: e, gutter: n }), o.paddingBottom = "";break;case "ratio":
            var a = 1 === t ? 0 : (t - 1) / t,
                u = 1 / t * 100,
                s = u * (1 / r),
                l = A({ share: s, gutterShare: a, gutter: n });o.height = "", o.paddingBottom = G({ unit: l, span: e, gutter: n });break;case "fit":}return o;
      }function h() {
        return [].filter.call(a.children(), function (t) {
          return "MD-GRID-TILE" == t.tagName && !t.$$mdDestroyed;
        });
      }function v(t) {
        return [].map.call(t, function (t) {
          var n = e.element(t).controller("mdGridTile");return { row: parseInt(o.getResponsiveAttribute(n.$attrs, "md-rowspan"), 10) || 1, col: parseInt(o.getResponsiveAttribute(n.$attrs, "md-colspan"), 10) || 1 };
        });
      }function w() {
        var t = parseInt(o.getResponsiveAttribute(u, "md-cols"), 10);if (isNaN(t)) throw "md-grid-list: md-cols attribute was not found, or contained a non-numeric value";return t;
      }function y() {
        return I(o.getResponsiveAttribute(u, "md-gutter") || 1);
      }function $() {
        var t = o.getResponsiveAttribute(u, "md-row-height");if (!t) throw "md-grid-list: md-row-height attribute was not found";switch (b()) {case "fixed":
            return I(t);case "ratio":
            var e = t.split(":");return parseFloat(e[0]) / parseFloat(e[1]);case "fit":
            return 0;}
      }function b() {
        var t = o.getResponsiveAttribute(u, "md-row-height");if (!t) throw "md-grid-list: md-row-height attribute was not found";return "fit" == t ? "fit" : t.indexOf(":") !== -1 ? "ratio" : "fixed";
      }function I(t) {
        return (/\D$/.test(t) ? t : t + "px"
        );
      }a.addClass("_md"), a.attr("role", "list"), s.layoutDelegate = f;var T = e.bind(s, s.invalidateLayout),
          L = l();r.$on("$destroy", c);var D,
          x = t.startSymbol(),
          M = t.endSymbol(),
          A = t(m("share") + "% - (" + m("gutter") + " * " + m("gutterShare") + ")"),
          C = t("calc((" + m("unit") + " + " + m("gutter") + ") * " + m("offset") + ")"),
          G = t("calc((" + m("unit") + ") * " + m("span") + " + (" + m("span") + " - 1) * " + m("gutter") + ")");
    }return { restrict: "E", controller: r, scope: { mdOnLayout: "&" }, link: a };
  }function r(t) {
    this.layoutInvalidated = !1, this.tilesInvalidated = !1, this.$timeout_ = t.nextTick, this.layoutDelegate = e.noop;
  }function o(t) {
    function n(e, n) {
      var i, a, u, s, l, c;return s = t.time(function () {
        a = r(e, n);
      }), i = { layoutInfo: function layoutInfo() {
          return a;
        }, map: function map(e) {
          return l = t.time(function () {
            var t = i.layoutInfo();u = e(t.positioning, t.rowCount);
          }), i;
        }, reflow: function reflow(e) {
          return c = t.time(function () {
            var t = e || o;t(u.grid, u.tiles);
          }), i;
        }, performance: function performance() {
          return { tileCount: n.length, layoutTime: s, mapTime: l, reflowTime: c, totalTime: s + l + c };
        } };
    }function i(t, e) {
      t.element.css(t.style), e.forEach(function (t) {
        t.element.css(t.style);
      });
    }function r(t, e) {
      function n(e, n) {
        if (e.col > t) throw "md-grid-list: Tile at position " + n + " has a colspan (" + e.col + ") that exceeds the column count (" + t + ")";for (var a = 0, c = 0; c - a < e.col;) {
          u >= t ? i() : (a = l.indexOf(0, u), a !== -1 && (c = o(a + 1)) !== -1 ? u = c + 1 : (a = c = 0, i()));
        }return r(a, e.col, e.row), u = a + e.col, { col: a, row: s };
      }function i() {
        u = 0, s++, r(0, t, -1);
      }function r(t, e, n) {
        for (var i = t; i < t + e; i++) {
          l[i] = Math.max(l[i] + n, 0);
        }
      }function o(t) {
        var e;for (e = t; e < l.length; e++) {
          if (0 !== l[e]) return e;
        }if (e === l.length) return e;
      }function a() {
        for (var e = [], n = 0; n < t; n++) {
          e.push(0);
        }return e;
      }var u = 0,
          s = 0,
          l = a();return { positioning: e.map(function (t, e) {
          return { spans: t, position: n(t, e) };
        }), rowCount: s + Math.max.apply(Math, l) };
    }var o = i;return n.animateWith = function (t) {
      o = e.isFunction(t) ? t : i;
    }, n;
  }function a(t) {
    function n(n, i, r, o) {
      i.attr("role", "listitem");var a = t.watchResponsiveAttributes(["md-colspan", "md-rowspan"], r, e.bind(o, o.invalidateLayout));o.invalidateTiles(), n.$on("$destroy", function () {
        i[0].$$mdDestroyed = !0, a(), o.invalidateLayout();
      }), e.isDefined(n.$parent.$index) && n.$watch(function () {
        return n.$parent.$index;
      }, function (t, e) {
        t !== e && o.invalidateTiles();
      });
    }return { restrict: "E", require: "^mdGridList", template: "<figure ng-transclude></figure>", transclude: !0, scope: {}, controller: ["$attrs", function (t) {
        this.$attrs = t;
      }], link: n };
  }function u() {
    return { template: "<figcaption ng-transclude></figcaption>", transclude: !0 };
  }r.$inject = ["$mdUtil"], o.$inject = ["$mdUtil"], i.$inject = ["$interpolate", "$mdConstant", "$mdGridLayout", "$mdMedia"], a.$inject = ["$mdMedia"], e.module("material.components.gridList", ["material.core"]).directive("mdGridList", i).directive("mdGridTile", a).directive("mdGridTileFooter", u).directive("mdGridTileHeader", u).factory("$mdGridLayout", o), r.prototype = { invalidateTiles: function invalidateTiles() {
      this.tilesInvalidated = !0, this.invalidateLayout();
    }, invalidateLayout: function invalidateLayout() {
      this.layoutInvalidated || (this.layoutInvalidated = !0, this.$timeout_(e.bind(this, this.layout)));
    }, layout: function layout() {
      try {
        this.layoutDelegate(this.tilesInvalidated);
      } finally {
        this.layoutInvalidated = !1, this.tilesInvalidated = !1;
      }
    } };
}(window, window.angular);

//# sourceMappingURL=gridList.min-compiled.js.map