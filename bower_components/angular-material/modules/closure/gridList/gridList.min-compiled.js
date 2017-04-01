"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function GridListDirective(t, e, i, r) {
  function n(n, o, a, u) {
    function l() {
      for (var t in e.MEDIA) {
        r(t), r.getQuery(e.MEDIA[t]).addListener(G);
      }return r.watchResponsiveAttributes(["md-cols", "md-row-height", "md-gutter"], a, d);
    }function s() {
      u.layoutDelegate = angular.noop, T();for (var t in e.MEDIA) {
        r.getQuery(e.MEDIA[t]).removeListener(G);
      }
    }function d(t) {
      null == t ? u.invalidateLayout() : r(t) && u.invalidateLayout();
    }function c(t) {
      var e = p(),
          r = { tileSpans: h(e), colCount: v(), rowMode: $(), rowHeight: w(), gutter: y() };if (t || !angular.equals(r, D)) {
        var a = i(r.colCount, r.tileSpans, e).map(function (t, i) {
          return { grid: { element: o, style: m(r.colCount, i, r.gutter, r.rowMode, r.rowHeight) }, tiles: t.map(function (t, n) {
              return { element: angular.element(e[n]), style: g(t.position, t.spans, r.colCount, i, r.gutter, r.rowMode, r.rowHeight) };
            }) };
        }).reflow().performance();n.mdOnLayout({ $event: { performance: a } }), D = r;
      }
    }function f(t) {
      return b + t + I;
    }function g(t, e, i, r, n, o, a) {
      var u = 1 / i * 100,
          l = (i - 1) / i,
          s = C({ share: u, gutterShare: l, gutter: n }),
          d = { left: x({ unit: s, offset: t.col, gutter: n }), width: M({ unit: s, span: e.col, gutter: n }), paddingTop: "", marginTop: "", top: "", height: "" };switch (o) {case "fixed":
          d.top = x({ unit: a, offset: t.row, gutter: n }), d.height = M({ unit: a, span: e.row, gutter: n });break;case "ratio":
          var c = u / a,
              f = C({ share: c, gutterShare: l, gutter: n });d.paddingTop = M({ unit: f, span: e.row, gutter: n }), d.marginTop = x({ unit: f, offset: t.row, gutter: n });break;case "fit":
          var g = (r - 1) / r,
              c = 1 / r * 100,
              f = C({ share: c, gutterShare: g, gutter: n });d.top = x({ unit: f, offset: t.row, gutter: n }), d.height = M({ unit: f, span: e.row, gutter: n });}return d;
    }function m(t, e, i, r, n) {
      var o = {};switch (r) {case "fixed":
          o.height = M({ unit: n, span: e, gutter: i }), o.paddingBottom = "";break;case "ratio":
          var a = 1 === t ? 0 : (t - 1) / t,
              u = 1 / t * 100,
              l = u * (1 / n),
              s = C({ share: l, gutterShare: a, gutter: i });o.height = "", o.paddingBottom = M({ unit: s, span: e, gutter: i });break;case "fit":}return o;
    }function p() {
      return [].filter.call(o.children(), function (t) {
        return "MD-GRID-TILE" == t.tagName && !t.$$mdDestroyed;
      });
    }function h(t) {
      return [].map.call(t, function (t) {
        var e = angular.element(t).controller("mdGridTile");return { row: parseInt(r.getResponsiveAttribute(e.$attrs, "md-rowspan"), 10) || 1, col: parseInt(r.getResponsiveAttribute(e.$attrs, "md-colspan"), 10) || 1 };
      });
    }function v() {
      var t = parseInt(r.getResponsiveAttribute(a, "md-cols"), 10);if (isNaN(t)) throw "md-grid-list: md-cols attribute was not found, or contained a non-numeric value";return t;
    }function y() {
      return L(r.getResponsiveAttribute(a, "md-gutter") || 1);
    }function w() {
      var t = r.getResponsiveAttribute(a, "md-row-height");if (!t) throw "md-grid-list: md-row-height attribute was not found";switch ($()) {case "fixed":
          return L(t);case "ratio":
          var e = t.split(":");return parseFloat(e[0]) / parseFloat(e[1]);case "fit":
          return 0;}
    }function $() {
      var t = r.getResponsiveAttribute(a, "md-row-height");if (!t) throw "md-grid-list: md-row-height attribute was not found";return "fit" == t ? "fit" : t.indexOf(":") !== -1 ? "ratio" : "fixed";
    }function L(t) {
      return (/\D$/.test(t) ? t : t + "px"
      );
    }o.addClass("_md"), o.attr("role", "list"), u.layoutDelegate = c;var G = angular.bind(u, u.invalidateLayout),
        T = l();n.$on("$destroy", s);var D,
        b = t.startSymbol(),
        I = t.endSymbol(),
        C = t(f("share") + "% - (" + f("gutter") + " * " + f("gutterShare") + ")"),
        x = t("calc((" + f("unit") + " + " + f("gutter") + ") * " + f("offset") + ")"),
        M = t("calc((" + f("unit") + ") * " + f("span") + " + (" + f("span") + " - 1) * " + f("gutter") + ")");
  }return { restrict: "E", controller: GridListController, scope: { mdOnLayout: "&" }, link: n };
}function GridListController(t) {
  this.layoutInvalidated = !1, this.tilesInvalidated = !1, this.$timeout_ = t.nextTick, this.layoutDelegate = angular.noop;
}function GridLayoutFactory(t) {
  function e(e, i) {
    var o, a, u, l, s, d;return l = t.time(function () {
      a = r(e, i);
    }), o = { layoutInfo: function layoutInfo() {
        return a;
      }, map: function map(e) {
        return s = t.time(function () {
          var t = o.layoutInfo();u = e(t.positioning, t.rowCount);
        }), o;
      }, reflow: function reflow(e) {
        return d = t.time(function () {
          var t = e || n;t(u.grid, u.tiles);
        }), o;
      }, performance: function performance() {
        return { tileCount: i.length, layoutTime: l, mapTime: s, reflowTime: d, totalTime: l + s + d };
      } };
  }function i(t, e) {
    t.element.css(t.style), e.forEach(function (t) {
      t.element.css(t.style);
    });
  }function r(t, e) {
    function i(e, i) {
      if (e.col > t) throw "md-grid-list: Tile at position " + i + " has a colspan (" + e.col + ") that exceeds the column count (" + t + ")";for (var a = 0, d = 0; d - a < e.col;) {
        u >= t ? r() : (a = s.indexOf(0, u), a !== -1 && (d = o(a + 1)) !== -1 ? u = d + 1 : (a = d = 0, r()));
      }return n(a, e.col, e.row), u = a + e.col, { col: a, row: l };
    }function r() {
      u = 0, l++, n(0, t, -1);
    }function n(t, e, i) {
      for (var r = t; r < t + e; r++) {
        s[r] = Math.max(s[r] + i, 0);
      }
    }function o(t) {
      var e;for (e = t; e < s.length; e++) {
        if (0 !== s[e]) return e;
      }if (e === s.length) return e;
    }function a() {
      for (var e = [], i = 0; i < t; i++) {
        e.push(0);
      }return e;
    }var u = 0,
        l = 0,
        s = a();return { positioning: e.map(function (t, e) {
        return { spans: t, position: i(t, e) };
      }), rowCount: l + Math.max.apply(Math, s) };
  }var n = i;return e.animateWith = function (t) {
    n = angular.isFunction(t) ? t : i;
  }, e;
}function GridTileDirective(t) {
  function e(e, i, r, n) {
    i.attr("role", "listitem");var o = t.watchResponsiveAttributes(["md-colspan", "md-rowspan"], r, angular.bind(n, n.invalidateLayout));n.invalidateTiles(), e.$on("$destroy", function () {
      i[0].$$mdDestroyed = !0, o(), n.invalidateLayout();
    }), angular.isDefined(e.$parent.$index) && e.$watch(function () {
      return e.$parent.$index;
    }, function (t, e) {
      t !== e && n.invalidateTiles();
    });
  }return { restrict: "E", require: "^mdGridList", template: "<figure ng-transclude></figure>", transclude: !0, scope: {}, controller: ["$attrs", function (t) {
      this.$attrs = t;
    }], link: e };
}function GridTileCaptionDirective() {
  return { template: "<figcaption ng-transclude></figcaption>", transclude: !0 };
}goog.provide("ngmaterial.components.gridList"), goog.require("ngmaterial.core"), GridListController.$inject = ["$mdUtil"], GridLayoutFactory.$inject = ["$mdUtil"], GridListDirective.$inject = ["$interpolate", "$mdConstant", "$mdGridLayout", "$mdMedia"], GridTileDirective.$inject = ["$mdMedia"], angular.module("material.components.gridList", ["material.core"]).directive("mdGridList", GridListDirective).directive("mdGridTile", GridTileDirective).directive("mdGridTileFooter", GridTileCaptionDirective).directive("mdGridTileHeader", GridTileCaptionDirective).factory("$mdGridLayout", GridLayoutFactory), GridListController.prototype = { invalidateTiles: function invalidateTiles() {
    this.tilesInvalidated = !0, this.invalidateLayout();
  }, invalidateLayout: function invalidateLayout() {
    this.layoutInvalidated || (this.layoutInvalidated = !0, this.$timeout_(angular.bind(this, this.layout)));
  }, layout: function layout() {
    try {
      this.layoutDelegate(this.tilesInvalidated);
    } finally {
      this.layoutInvalidated = !1, this.tilesInvalidated = !1;
    }
  } }, ngmaterial.components.gridList = angular.module("material.components.gridList");

//# sourceMappingURL=gridList.min-compiled.js.map