"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**!
 * The MIT License
 *
 * Copyright (c) the ui-leaflet Team, http://angular-ui.github.io/ui-leaflet
 *
 * Original Copyright (c) https://github.com/angular-ui/ui-leaflet
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * ui-leaflet
 * https://github.com/angular-ui/ui-leaflet
 *
 * @authors https://github.com/angular-ui/ui-leaflet/graphs/contributors
 */

/*!
*  ui-leaflet 2.0.0 2016-10-04
*  ui-leaflet - An AngularJS directive to easily interact with Leaflet maps
*  git: https://github.com/angular-ui/ui-leaflet
*/
!function (a) {
  "use strict";
  a.module("ui-leaflet", ["nemLogging"]).directive("leaflet", ["$q", "leafletData", "leafletMapDefaults", "leafletHelpers", "leafletMapEvents", function (a, b, c, d, e) {
    return { restrict: "EA", replace: !0, scope: { center: "=", lfCenter: "=", defaults: "=", maxbounds: "=", bounds: "=", markers: "=", legend: "=", geojson: "=", paths: "=", tiles: "=", layers: "=", controls: "=", decorations: "=", eventBroadcast: "=", watchOptions: "=", id: "@" }, transclude: !0, template: '<div class="angular-leaflet-map"><div ng-transclude></div></div>', controller: ["$scope", function (b) {
        this._leafletMap = a.defer(), this.getMap = function () {
          return this._leafletMap.promise;
        }, this.getLeafletScope = function () {
          return b;
        };
      }], link: function link(a, f, g, h) {
        function i() {
          isNaN(g.width) ? f.css("width", g.width) : f.css("width", g.width + "px");
        }function j() {
          isNaN(g.height) ? f.css("height", g.height) : f.css("height", g.height + "px");
        }var k = d.isDefined,
            l = c.setDefaults(a.defaults, g.id),
            m = e.getAvailableMapEvents(),
            n = e.addEvents;a.mapId = g.id, b.setDirectiveControls({}, g.id);var o = new L.Map(f[0], c.getMapCreationDefaults(g.id));if (h._leafletMap.resolve(o), k(g.width) && (i(), a.$watch(function () {
          return f[0].getAttribute("width");
        }, function () {
          i(), o.invalidateSize();
        })), k(g.height) && (j(), a.$watch(function () {
          return f[0].getAttribute("height");
        }, function () {
          j(), o.invalidateSize();
        })), k(g.center) || k(g.lfCenter) || o.setView([l.center.lat, l.center.lng], l.center.zoom), !k(g.tiles) && !k(g.layers)) {
          var p = L.tileLayer(l.tileLayer, l.tileLayerOptions);p.addTo(o), b.setTiles(p, g.id);
        }if (k(o.zoomControl) && k(l.zoomControlPosition) && o.zoomControl.setPosition(l.zoomControlPosition), k(o.zoomControl) && l.zoomControl === !1 && o.zoomControl.removeFrom(o), k(o.zoomsliderControl) && k(l.zoomsliderControl) && l.zoomsliderControl === !1 && o.zoomsliderControl.removeFrom(o), !k(g.eventBroadcast)) {
          var q = "broadcast";n(o, g.id, m, "eventName", a, q);
        }o.whenReady(function () {
          b.setMap(o, g.id);
        }), a.$on("$destroy", function () {
          c.reset(), o.remove(), b.unresolveMap(g.id);
        }), a.$on("invalidateSize", function () {
          o.invalidateSize();
        });
      } };
  }]), function () {
    a.module("ui-leaflet").factory("eventManager", [function () {
      var a = function a() {
        this.listeners = {};
      };return a.prototype = { addEventListener: function addEventListener(a, b, c) {
          for (var d = [], e = arguments.length, f = 0; f < e; f++) {
            d.push(arguments[f]);
          }d = d.length > 3 ? d.splice(3, d.length - 1) : [], "undefined" != typeof this.listeners[a] ? this.listeners[a].push({ scope: c, callback: b, args: d }) : this.listeners[a] = [{ scope: c, callback: b, args: d }];
        }, removeEventListener: function removeEventListener(a, b, c) {
          if ("undefined" != typeof this.listeners[a]) {
            for (var d = this.listeners[a].length, e = [], f = 0; f < d; f++) {
              var g = this.listeners[a][f];g.scope === c && g.callback === b || e.push(g);
            }this.listeners[a] = e;
          }
        }, hasEventListener: function hasEventListener(a, b, c) {
          if ("undefined" != typeof this.listeners[a]) {
            var d = this.listeners[a].length;if (void 0 === b && void 0 === c) return d > 0;for (var e = 0; e < d; e++) {
              var f = this.listeners[a][e];if ((!c || f.scope === c) && f.callback === b) return !0;
            }
          }return !1;
        }, dispatch: function dispatch(a, b) {
          for (var c = 0, d = { type: a, target: b }, e = [], f = arguments.length, g = 0; g < f; g++) {
            e.push(arguments[g]);
          }if (e = e.length > 2 ? e.splice(2, e.length - 1) : [], e = [d].concat(e), "undefined" != typeof this.listeners[a]) for (var h = this.listeners[a].length, i = 0; i < h; i++) {
            var j = this.listeners[a][i];if (j && j.callback) {
              var k = e.concat(j.args);j.callback.apply(j.scope, k), c += 1;
            }
          }
        }, getEvents: function getEvents() {
          var a = "";for (var b in this.listeners) {
            for (var c = this.listeners[b].length, d = 0; d < c; d++) {
              var e = this.listeners[b][d];a += e.scope && e.scope.className ? e.scope.className : "anonymous", a += " listen for '" + b + "'\n";
            }
          }return a;
        } }, a;
    }]).service("eventManager", ["EventManager", function (a) {
      return new a();
    }]);
  }(), a.module("ui-leaflet").factory("leafletBoundsHelpers", ["leafletLogger", "leafletHelpers", function (b, c) {
    function d(b) {
      return a.isDefined(b) && a.isDefined(b.southWest) && a.isDefined(b.northEast) && a.isNumber(b.southWest.lat) && a.isNumber(b.southWest.lng) && a.isNumber(b.northEast.lat) && a.isNumber(b.northEast.lng);
    }var e = c.isArray,
        f = c.isNumber,
        g = c.isFunction,
        h = c.isDefined,
        i = b;return { createLeafletBounds: function createLeafletBounds(a) {
        if (d(a)) return L.latLngBounds([a.southWest.lat, a.southWest.lng], [a.northEast.lat, a.northEast.lng]);
      }, isValidBounds: d, createBoundsFromArray: function createBoundsFromArray(a) {
        return e(a) && 2 === a.length && e(a[0]) && e(a[1]) && 2 === a[0].length && 2 === a[1].length && f(a[0][0]) && f(a[0][1]) && f(a[1][0]) && f(a[1][1]) ? { northEast: { lat: a[0][0], lng: a[0][1] }, southWest: { lat: a[1][0], lng: a[1][1] } } : void i.error("[AngularJS - Leaflet] The bounds array is not valid.");
      }, createBoundsFromLeaflet: function createBoundsFromLeaflet(a) {
        if (!(h(a) && g(a.getNorthEast) && g(a.getSouthWest))) return void i.error("[AngularJS - Leaflet] The leaflet bounds is not valid object.");var b = a.getNorthEast(),
            c = a.getSouthWest();return { northEast: { lat: b.lat, lng: b.lng }, southWest: { lat: c.lat, lng: c.lng } };
      } };
  }]), a.module("ui-leaflet").factory("leafletControlHelpers", ["$rootScope", "leafletLogger", "leafletHelpers", "leafletLayerHelpers", "leafletMapDefaults", function (b, c, d, e, f) {
    var g = d.isDefined,
        h = d.isObject,
        i = e.createLayer,
        j = {},
        k = d.errorHeader + " [Controls] ",
        l = c,
        m = function m(a, b, c) {
      var d = f.getDefaults(c);if (!d.controls.layers.visible) return !1;var e = !1;return h(a) && Object.keys(a).forEach(function (b) {
        var c = a[b];g(c.layerOptions) && c.layerOptions.showOnSelector === !1 || (e = !0);
      }), h(b) && Object.keys(b).forEach(function (a) {
        var c = b[a];g(c.layerParams) && c.layerParams.showOnSelector === !1 || (e = !0);
      }), e;
    },
        n = function n(b) {
      var c = f.getDefaults(b),
          d = { collapsed: c.controls.layers.collapsed, position: c.controls.layers.position, autoZIndex: !1 };a.extend(d, c.controls.layers.options);var e;return e = c.controls.layers && g(c.controls.layers.control) ? c.controls.layers.control.apply(this, [[], [], d]) : new L.control.layers([], [], d);
    },
        o = { draw: { isPluginLoaded: function isPluginLoaded() {
          return !!a.isDefined(L.Control.Draw) || (l.error(k + " Draw plugin is not loaded."), !1);
        }, checkValidParams: function checkValidParams() {
          return !0;
        }, createControl: function createControl(a) {
          return new L.Control.Draw(a);
        } }, scale: { isPluginLoaded: function isPluginLoaded() {
          return !0;
        }, checkValidParams: function checkValidParams() {
          return !0;
        }, createControl: function createControl(a) {
          return new L.control.scale(a);
        } }, fullscreen: { isPluginLoaded: function isPluginLoaded() {
          return !!a.isDefined(L.Control.Fullscreen) || (l.error(k + " Fullscreen plugin is not loaded."), !1);
        }, checkValidParams: function checkValidParams() {
          return !0;
        }, createControl: function createControl(a) {
          return new L.Control.Fullscreen(a);
        } }, search: { isPluginLoaded: function isPluginLoaded() {
          return !!a.isDefined(L.Control.Search) || (l.error(k + " Search plugin is not loaded."), !1);
        }, checkValidParams: function checkValidParams() {
          return !0;
        }, createControl: function createControl(a) {
          return new L.Control.Search(a);
        } }, custom: {}, minimap: { isPluginLoaded: function isPluginLoaded() {
          return !!a.isDefined(L.Control.MiniMap) || (l.error(k + " Minimap plugin is not loaded."), !1);
        }, checkValidParams: function checkValidParams(a) {
          return !!g(a.layer) || (l.warn(k + ' minimap "layer" option should be defined.'), !1);
        }, createControl: function createControl(a) {
          var b = i(a.layer);return g(b) ? new L.Control.MiniMap(b, a) : void l.warn(k + ' minimap control "layer" could not be created.');
        } } };return { layersControlMustBeVisible: m, isValidControlType: function isValidControlType(a) {
        return Object.keys(o).indexOf(a) !== -1;
      }, createControl: function createControl(a, b) {
        if (o[a].checkValidParams(b)) return o[a].createControl(b);
      }, updateLayersControl: function updateLayersControl(a, b, c, d, e, f) {
        var h,
            i = j[b],
            k = m(d, e, b);if (g(i) && c) {
          for (h in f.baselayers) {
            i.removeLayer(f.baselayers[h]);
          }for (h in f.overlays) {
            i.removeLayer(f.overlays[h]);
          }a.removeControl(i), delete j[b];
        }if (k) {
          i = n(b), j[b] = i;for (h in d) {
            var l = g(d[h].layerOptions) && d[h].layerOptions.showOnSelector === !1;!l && g(f.baselayers[h]) && i.addBaseLayer(f.baselayers[h], d[h].name);
          }for (h in e) {
            var o = g(e[h].layerParams) && e[h].layerParams.showOnSelector === !1;!o && g(f.overlays[h]) && i.addOverlay(f.overlays[h], e[h].name);
          }a.addControl(i);
        }return k;
      }, destroyMapLayersControl: function destroyMapLayersControl(a) {
        delete j[a];
      } };
  }]), a.module("ui-leaflet").service("leafletData", ["leafletLogger", "$q", "leafletHelpers", function (a, b, c) {
    var d = c.getDefer,
        e = c.getUnresolvedDefer,
        f = c.setResolvedDefer,
        g = {},
        h = this,
        i = function i(a) {
      return a.charAt(0).toUpperCase() + a.slice(1);
    },
        j = ["map", "tiles", "layers", "paths", "markers", "geoJSON", "UTFGrid", "decorations", "directiveControls"];j.forEach(function (a) {
      g[a] = {};
    }), this.unresolveMap = function (a) {
      var b = c.obtainEffectiveMapId(g.map, a);j.forEach(function (a) {
        g[a][b] = void 0;
      });
    }, j.forEach(function (a) {
      var b = i(a);h["set" + b] = function (b, c) {
        var d = e(g[a], c);d.resolve(b), f(g[a], c);
      }, h["get" + b] = function (b) {
        var c = d(g[a], b);return c.promise;
      };
    });
  }]), a.module("ui-leaflet").service("leafletDirectiveControlsHelpers", ["leafletLogger", "leafletData", "leafletHelpers", function (b, c, d) {
    var e = d.isDefined,
        f = d.isString,
        g = d.isObject,
        h = d.errorHeader,
        i = b,
        j = h + "[leafletDirectiveControlsHelpers",
        k = function k(b, d, h, _k) {
      var l = j + ".extend] ",
          m = {};if (!e(d)) return void i.error(l + "thingToAddName cannot be undefined");if (f(d) && e(h) && e(_k)) m[d] = { create: h, clean: _k };else {
        if (!g(d) || e(h) || e(_k)) return void i.error(l + "incorrect arguments");m = d;
      }c.getDirectiveControls().then(function (d) {
        a.extend(d, m), c.setDirectiveControls(d, b);
      });
    };return { extend: k };
  }]), a.module("ui-leaflet").service("leafletGeoJsonHelpers", ["leafletHelpers", "leafletIterators", function (b, c) {
    var d = b,
        e = c,
        f = function f(a, b) {
      return this.lat = a, this.lng = b, this;
    },
        g = function g(a) {
      return Array.isArray(a) && 2 === a.length ? a[1] : d.isDefined(a.type) && "Point" === a.type ? +a.coordinates[1] : +a.lat;
    },
        h = function h(a) {
      return Array.isArray(a) && 2 === a.length ? a[0] : d.isDefined(a.type) && "Point" === a.type ? +a.coordinates[0] : +a.lng;
    },
        i = function i(a) {
      if (d.isUndefined(a)) return !1;if (d.isArray(a)) {
        if (2 === a.length && d.isNumber(a[0]) && d.isNumber(a[1])) return !0;
      } else if (d.isDefined(a.type) && "Point" === a.type && d.isArray(a.coordinates) && 2 === a.coordinates.length && d.isNumber(a.coordinates[0]) && d.isNumber(a.coordinates[1])) return !0;var b = e.all(["lat", "lng"], function (b) {
        return d.isDefined(a[b]) && d.isNumber(a[b]);
      });return b;
    },
        j = function j(b) {
      if (b && i(b)) {
        var c = null;if (Array.isArray(b) && 2 === b.length) c = new f(b[1], b[0]);else {
          if (!d.isDefined(b.type) || "Point" !== b.type) return b;c = new f(b.coordinates[1], b.coordinates[0]);
        }return a.extend(b, c);
      }
    };return { getLat: g, getLng: h, validateCoords: i, getCoords: j };
  }]), a.module("ui-leaflet").service("leafletHelpers", ["$q", "$log", "$timeout", function (b, c, d) {
    function e(b, d) {
      var e, f;if (a.isDefined(d)) e = d;else if (0 === Object.keys(b).length) e = "main";else if (Object.keys(b).length >= 1) for (f in b) {
        b.hasOwnProperty(f) && (e = f);
      } else c.error(g + "- You have more than 1 map on the DOM, you must provide the map ID to the leafletData.getXXX call");return e;
    }function f(c, d) {
      var f,
          g = e(c, d);return a.isDefined(c[g]) && c[g].resolvedDefer !== !0 ? f = c[g].defer : (f = b.defer(), c[g] = { defer: f, resolvedDefer: !1 }), f;
    }var g = "[ui-leaflet] ",
        h = a.copy,
        i = h,
        j = function j(b, c) {
      var d;if (b && a.isObject(b)) return null !== c && a.isString(c) ? (d = b, c.split(".").forEach(function (a) {
        d && (d = d[a]);
      }), d) : c;
    },
        k = function k(a) {
      return a.split(".").reduce(function (a, b) {
        return a + '["' + b + '"]';
      });
    },
        l = function l(a) {
      return a.reduce(function (a, b) {
        return a + "." + b;
      });
    },
        m = function m(b) {
      return a.isDefined(b) && null !== b;
    },
        n = function n(a) {
      return !m(a);
    },
        o = /([\:\-\_]+(.))/g,
        p = /^moz([A-Z])/,
        q = /^((?:x|data)[\:\-_])/i,
        r = function r(a) {
      return a.replace(o, function (a, b, c, d) {
        return d ? c.toUpperCase() : c;
      }).replace(p, "Moz$1");
    },
        s = function s(a) {
      return r(a.replace(q, ""));
    },
        t = 10,
        u = function u(a, b, c) {
      if (!a) throw new Error(g + "trapObj is undefined");if (!b) throw new Error(g + "trapField is undefined");a[b] = !0;var e = c();return d(function () {
        a[b] = !1;
      }, t), e;
    };return { watchTrapDelayMilliSec: t, modelChangeInDirective: u, camelCase: r, directiveNormalize: s, copy: h, clone: i, errorHeader: g, getObjectValue: j, getObjectArrayPath: k, getObjectDotPath: l, defaultTo: function defaultTo(a, b) {
        return m(a) ? a : b;
      }, isTruthy: function isTruthy(a) {
        return "true" === a || a === !0;
      }, isEmpty: function isEmpty(a) {
        return 0 === Object.keys(a).length;
      }, isUndefinedOrEmpty: function isUndefinedOrEmpty(b) {
        return a.isUndefined(b) || null === b || 0 === Object.keys(b).length;
      }, isDefined: m, isUndefined: n, isNumber: a.isNumber, isString: a.isString, isArray: a.isArray, isObject: a.isObject, isFunction: a.isFunction, equals: a.equals, isValidCenter: function isValidCenter(b) {
        return a.isDefined(b) && a.isNumber(b.lat) && a.isNumber(b.lng) && a.isNumber(b.zoom);
      }, isValidPoint: function isValidPoint(b) {
        return !!a.isDefined(b) && (a.isArray(b) ? 2 === b.length && a.isNumber(b[0]) && a.isNumber(b[1]) : a.isNumber(b.lat) && a.isNumber(b.lng));
      }, isSameCenterOnMap: function isSameCenterOnMap(a, b) {
        var c = b.getCenter(),
            d = b.getZoom();return !(!a.lat || !a.lng || c.lat.toFixed(4) !== a.lat.toFixed(4) || c.lng.toFixed(4) !== a.lng.toFixed(4) || d !== a.zoom);
      }, safeApply: function safeApply(a, b) {
        var c = a.$root.$$phase;"$apply" === c || "$digest" === c ? a.$eval(b) : a.$evalAsync(b);
      }, obtainEffectiveMapId: e, getDefer: function getDefer(b, c) {
        var d,
            g = e(b, c);return d = a.isDefined(b[g]) && b[g].resolvedDefer !== !1 ? b[g].defer : f(b, c);
      }, getUnresolvedDefer: f, setResolvedDefer: function setResolvedDefer(a, b) {
        var c = e(a, b);a[c].resolvedDefer = !0;
      }, rangeIsSupported: function rangeIsSupported() {
        var a = document.createElement("input");return a.setAttribute("type", "range"), "range" === a.type;
      }, FullScreenControlPlugin: { isLoaded: function isLoaded() {
          return a.isDefined(L.Control.Fullscreen);
        } }, MiniMapControlPlugin: { isLoaded: function isLoaded() {
          return a.isDefined(L.Control.MiniMap);
        } }, AwesomeMarkersPlugin: { isLoaded: function isLoaded() {
          return a.isDefined(L.AwesomeMarkers) && a.isDefined(L.AwesomeMarkers.Icon);
        }, is: function is(a) {
          return !!this.isLoaded() && a instanceof L.AwesomeMarkers.Icon;
        }, equal: function equal(b, c) {
          return !!this.isLoaded() && !!this.is(b) && a.equals(b, c);
        } }, VectorMarkersPlugin: { isLoaded: function isLoaded() {
          return a.isDefined(L.VectorMarkers) && a.isDefined(L.VectorMarkers.Icon);
        }, is: function is(a) {
          return !!this.isLoaded() && a instanceof L.VectorMarkers.Icon;
        }, equal: function equal(b, c) {
          return !!this.isLoaded() && !!this.is(b) && a.equals(b, c);
        } }, DomMarkersPlugin: { isLoaded: function isLoaded() {
          return !(!a.isDefined(L.DomMarkers) || !a.isDefined(L.DomMarkers.Icon));
        }, is: function is(a) {
          return !!this.isLoaded() && a instanceof L.DomMarkers.Icon;
        }, equal: function equal(b, c) {
          return !!this.isLoaded() && !!this.is(b) && a.equals(b, c);
        } }, PolylineDecoratorPlugin: { isLoaded: function isLoaded() {
          return !!a.isDefined(L.PolylineDecorator);
        }, is: function is(a) {
          return !!this.isLoaded() && a instanceof L.PolylineDecorator;
        }, equal: function equal(b, c) {
          return !!this.isLoaded() && !!this.is(b) && a.equals(b, c);
        } }, MakiMarkersPlugin: { isLoaded: function isLoaded() {
          return !(!a.isDefined(L.MakiMarkers) || !a.isDefined(L.MakiMarkers.Icon));
        }, is: function is(a) {
          return !!this.isLoaded() && a instanceof L.MakiMarkers.Icon;
        }, equal: function equal(b, c) {
          return !!this.isLoaded() && !!this.is(b) && a.equals(b, c);
        } }, ExtraMarkersPlugin: { isLoaded: function isLoaded() {
          return !(!a.isDefined(L.ExtraMarkers) || !a.isDefined(L.ExtraMarkers.Icon));
        }, is: function is(a) {
          return !!this.isLoaded() && a instanceof L.ExtraMarkers.Icon;
        }, equal: function equal(b, c) {
          return !!this.isLoaded() && !!this.is(b) && a.equals(b, c);
        } }, LabelPlugin: { isLoaded: function isLoaded() {
          return a.isDefined(L.Label);
        }, is: function is(a) {
          return !!this.isLoaded() && a instanceof L.MarkerClusterGroup;
        } }, MarkerClusterPlugin: { isLoaded: function isLoaded() {
          return a.isDefined(L.MarkerClusterGroup);
        }, is: function is(a) {
          return !!this.isLoaded() && a instanceof L.MarkerClusterGroup;
        } }, GeoJSONPlugin: { isLoaded: function isLoaded() {
          return a.isDefined(L.TileLayer.GeoJSON);
        }, is: function is(a) {
          return !!this.isLoaded() && a instanceof L.TileLayer.GeoJSON;
        } }, CartoDB: { isLoaded: function isLoaded() {
          return cartodb;
        }, is: function is() {
          return !0;
        } }, Leaflet: { DivIcon: { is: function is(a) {
            return a instanceof L.DivIcon;
          }, equal: function equal(b, c) {
            return !!this.is(b) && a.equals(b, c);
          } }, Icon: { is: function is(a) {
            return a instanceof L.Icon;
          }, equal: function equal(b, c) {
            return !!this.is(b) && a.equals(b, c);
          } } }, watchOptions: { type: "watchDeep", individual: { type: "watchDeep" } } };
  }]), a.module("ui-leaflet").service("leafletIterators", ["leafletLogger", "leafletHelpers", function (a, b) {
    var c,
        d = b,
        e = b.errorHeader + "leafletIterators: ",
        f = Object.keys,
        g = d.isFunction,
        h = d.isObject,
        i = a,
        j = Math.pow(2, 53) - 1,
        k = function k(a) {
      var b = null !== a && a.length;return d.isNumber(b) && b >= 0 && b <= j;
    },
        l = function l(a) {
      return a;
    },
        m = function m(a) {
      return function (b) {
        return null === b ? void 0 : b[a];
      };
    },
        n = function n(a, b, c) {
      if (void 0 === b) return a;switch (null === c ? 3 : c) {case 1:
          return function (c) {
            return a.call(b, c);
          };case 2:
          return function (c, d) {
            return a.call(b, c, d);
          };case 3:
          return function (c, d, e) {
            return a.call(b, c, d, e);
          };case 4:
          return function (c, d, e, f) {
            return a.call(b, c, d, e, f);
          };}return function () {
        return a.apply(b, arguments);
      };
    },
        o = function o(a, b) {
      return function (c) {
        var d = arguments.length;if (d < 2 || null === c) return c;for (var e = 1; e < d; e++) {
          for (var f = arguments[e], g = a(f), h = g.length, i = 0; i < h; i++) {
            var j = g[i];b && void 0 !== c[j] || (c[j] = f[j]);
          }
        }return c;
      };
    },
        p = null;c = p = o(f);var q,
        r = function r(a, b) {
      var c = f(b),
          d = c.length;if (null === a) return !d;for (var e = Object(a), g = 0; g < d; g++) {
        var h = c[g];if (b[h] !== e[h] || !(h in e)) return !1;
      }return !0;
    },
        s = null;q = s = function s(a) {
      return a = c({}, a), function (b) {
        return r(b, a);
      };
    };var t,
        u = function u(a, b, c) {
      return null === a ? l : g(a) ? n(a, b, c) : h(a) ? q(a) : m(a);
    },
        v = null;t = v = function v(a, b, c) {
      b = u(b, c);for (var d = !k(a) && f(a), e = (d || a).length, g = 0; g < e; g++) {
        var h = d ? d[g] : g;if (!b(a[h], h, a)) return !1;
      }return !0;
    };var w = function w(a, b, c, f) {
      return !(c || d.isDefined(a) && d.isDefined(b)) || !d.isFunction(b) && (f = d.defaultTo(b, "cb"), i.error(e + f + " is not a function"), !0);
    },
        x = function x(a, b, c) {
      if (!w(void 0, c, !0, "internalCb") && !w(a, b)) for (var d in a) {
        a.hasOwnProperty(d) && c(a[d], d);
      }
    },
        y = function y(a, b) {
      x(a, b, function (a, c) {
        b(a, c);
      });
    };return { each: y, forEach: y, every: t, all: v };
  }]), a.module("ui-leaflet").factory("leafletLayerHelpers", ["$rootScope", "$q", "leafletLogger", "leafletHelpers", "leafletIterators", function (b, c, d, e, f) {
    function g(a) {
      return l(a.type) ? Object.keys(t).indexOf(a.type) === -1 ? (r.error("[AngularJS - Leaflet] A layer must have a valid type: " + Object.keys(t)), !1) : t[a.type].mustHaveUrl && !l(a.url) ? (r.error("[AngularJS - Leaflet] A base layer must have an url"), !1) : t[a.type].mustHaveData && !o(a.data) ? (r.error('[AngularJS - Leaflet] The base layer must have a "data" array attribute'), !1) : t[a.type].mustHaveLayer && !o(a.layer) ? (r.error("[AngularJS - Leaflet] The type of layer " + a.type + " must have an layer defined"), !1) : t[a.type].mustHaveBounds && !o(a.bounds) ? (r.error("[AngularJS - Leaflet] The type of layer " + a.type + " must have bounds defined"), !1) : !(t[a.type].mustHaveKey && !o(a.key)) || (r.error("[AngularJS - Leaflet] The type of layer " + a.type + " must have key defined"), !1) : (r.error("[AngularJS - Leaflet] A layer must have a valid type defined."), !1);
    }function h(a) {
      if (g(a)) {
        if (!l(a.name)) return void r.error("[AngularJS - Leaflet] A base layer must have a name");m(a.layerParams) || (a.layerParams = {}), m(a.layerOptions) || (a.layerOptions = {});for (var b in a.layerParams) {
          a.layerOptions[b] = a.layerParams[b];
        }var c = { url: a.url, data: a.data, options: a.layerOptions, layer: a.layer, icon: a.icon, type: a.layerType, bounds: a.bounds, key: a.key, apiKey: a.apiKey, pluginOptions: a.pluginOptions, user: a.user, $parent: a };return t[a.type].createLayer(c);
      }
    }function i(a, b) {
      b && "function" == typeof b.addTo ? b.addTo(a) : a.addLayer(b);
    }function j(b, c, d) {
      if (o(d) && o(d.loadedDefer)) {
        if (a.isFunction(d.loadedDefer)) {
          var e = d.loadedDefer();r.debug("Loaded Deferred", e);var f = e.length;if (f > 0) for (var g = function g() {
            f--, 0 === f && b.removeLayer(c);
          }, h = 0; h < e.length; h++) {
            e[h].promise.then(g);
          } else b.removeLayer(c);
        } else d.loadedDefer.promise.then(function () {
          b.removeLayer(c);
        });
      } else b.removeLayer(c);
    }var k = e,
        l = e.isString,
        m = e.isObject,
        n = e.isArray,
        o = e.isDefined,
        p = e.errorHeader,
        q = f,
        r = d,
        s = function s(c) {
      if (!k.UTFGridPlugin.isLoaded()) return void r.error("[AngularJS - Leaflet] The UTFGrid plugin is not loaded.");var d = new L.UtfGrid(c.url, c.pluginOptions),
          e = { model: c.$parent };return d.on("mouseover", function (c) {
        a.extend(e, { leafletEvent: c, leafletObject: c.target }), b.$broadcast("leafletDirectiveMap.utfgridMouseover", e);
      }), d.on("mouseout", function (c) {
        a.extend(e, { leafletEvent: c, leafletObject: c.target }), b.$broadcast("leafletDirectiveMap.utfgridMouseout", e);
      }), d.on("click", function (c) {
        a.extend(e, { leafletEvent: c, leafletObject: c.target }), b.$broadcast("leafletDirectiveMap.utfgridClick", e);
      }), d.on("mousemove", function (c) {
        a.extend(e, { leafletEvent: c, leafletObject: c.target }), b.$broadcast("leafletDirectiveMap.utfgridMousemove", e);
      }), d;
    },
        t = { xyz: { mustHaveUrl: !0, createLayer: function createLayer(a) {
          return L.tileLayer(a.url, a.options);
        } }, geoJSON: { mustHaveUrl: !0, createLayer: function createLayer(a) {
          if (k.GeoJSONPlugin.isLoaded()) return new L.TileLayer.GeoJSON(a.url, a.pluginOptions, a.options);
        } }, geoJSONShape: { mustHaveUrl: !1, createLayer: function createLayer(a) {
          return new L.GeoJSON(a.data, a.options);
        } }, geoJSONAwesomeMarker: { mustHaveUrl: !1, createLayer: function createLayer(a) {
          return new L.geoJson(a.data, { pointToLayer: function pointToLayer(b, c) {
              return L.marker(c, { icon: L.AwesomeMarkers.icon(a.icon) });
            } });
        } }, geoJSONVectorMarker: { mustHaveUrl: !1, createLayer: function createLayer(a) {
          return new L.geoJson(a.data, { pointToLayer: function pointToLayer(b, c) {
              return L.marker(c, { icon: L.VectorMarkers.icon(a.icon) });
            } });
        } }, cartodbTiles: { mustHaveKey: !0, createLayer: function createLayer(a) {
          var b = o(a.url) ? a.url + "/" + a.user : "//" + a.user + ".cartodb.com";return b += "/api/v1/map/" + a.key + "/{z}/{x}/{y}.png", L.tileLayer(b, a.options);
        } }, cartodbUTFGrid: { mustHaveKey: !0, mustHaveLayer: !0, createLayer: function createLayer(a) {
          var b = o(a.url) ? a.url + "/" + a.user : "//" + a.user + ".cartodb.com";return a.url = b + "/api/v1/map/" + a.key + "/" + a.layer + "/{z}/{x}/{y}.grid.json", s(a);
        } }, cartodbInteractive: { mustHaveKey: !0, mustHaveLayer: !0, createLayer: function createLayer(b) {
          var c = o(b.url) ? b.url + "/" + b.user : "//" + b.user + ".cartodb.com",
              d = c + "/api/v1/map/" + b.key + "/{z}/{x}/{y}.png",
              e = L.tileLayer(d, b.options),
              f = [e],
              g = function g(b, d, e) {
            var f = a.copy(d);f.url = c + "/api/v1/map/" + f.key + "/" + e + "/{z}/{x}/{y}.grid.json", b.push(s(f));
          };if (n(b.layer)) for (var h = 0; h < b.layer.length; h++) {
            g(f, b, b.layer[h]);
          } else g(f, b, b.layer);return L.layerGroup(f);
        } }, wms: { mustHaveUrl: !0, createLayer: function createLayer(a) {
          return L.tileLayer.wms(a.url, a.options);
        } }, wmts: { mustHaveUrl: !0, createLayer: function createLayer(a) {
          return L.tileLayer.wmts(a.url, a.options);
        } }, group: { mustHaveUrl: !1, createLayer: function createLayer(a) {
          var b = [];return q.each(a.options.layers, function (a) {
            b.push(h(a));
          }), a.options.loadedDefer = function () {
            var b = [];if (o(a.options.layers)) for (var c = 0; c < a.options.layers.length; c++) {
              var d = a.options.layers[c].layerOptions.loadedDefer;o(d) && b.push(d);
            }return b;
          }, L.layerGroup(b);
        } }, featureGroup: { mustHaveUrl: !1, createLayer: function createLayer() {
          return L.featureGroup();
        } }, markercluster: { mustHaveUrl: !1, createLayer: function createLayer(a) {
          return k.MarkerClusterPlugin.isLoaded() ? new L.MarkerClusterGroup(a.options) : void r.warn(p + " The markercluster plugin is not loaded.");
        } }, imageOverlay: { mustHaveUrl: !0, mustHaveBounds: !0, createLayer: function createLayer(a) {
          return L.imageOverlay(a.url, a.bounds, a.options);
        } }, iip: { mustHaveUrl: !0, createLayer: function createLayer(a) {
          return L.tileLayer.iip(a.url, a.options);
        } }, custom: { createLayer: function createLayer(b) {
          return b.layer instanceof L.Class ? a.copy(b.layer) : void r.error("[AngularJS - Leaflet] A custom layer must be a leaflet Class");
        } }, cartodb: { mustHaveUrl: !0, createLayer: function createLayer(a) {
          return cartodb.createLayer(a.map, a.url);
        } } },
        u = function u(a) {
      return function (b) {
        o(b.setOpacity) && b.setOpacity(a);
      };
    };return { createLayer: h, layerTypes: t, safeAddLayer: i, safeRemoveLayer: j, changeOpacityListener: u };
  }]), a.module("ui-leaflet").factory("leafletLegendHelpers", ["$http", "$q", "$log", "leafletHelpers", function (a, b, c, d) {
    var e = {},
        f = d.isDefined,
        g = function b(c) {
      var d = e[c],
          f = d[0];a(f.c).then(function (a) {
        d.shift(), f.d.resolve(a), d.length > 0 && b(c);
      }, function (a) {
        d.shift(), f.d.reject(a), d.length > 0 && b(c);
      });
    },
        h = function h(a, b, c, d) {
      if (a.innerHTML = "", b.error) a.innerHTML += '<div class="info-title alert alert-danger">' + b.error.message + "</div>";else if ("arcgis" === c) for (var e = 0; e < b.layers.length; e++) {
        var f = b.layers[e];a.innerHTML += '<div class="info-title" data-layerid="' + f.layerId + '">' + f.layerName + "</div>";for (var g = 0; g < f.legend.length; g++) {
          var h = f.legend[g];a.innerHTML += '<div class="inline" data-layerid="' + f.layerId + '"><img src="data:' + h.contentType + ";base64," + h.imageData + '" /></div><div class="info-label" data-layerid="' + f.layerId + '">' + h.label + "</div>";
        }
      } else "image" === c && (a.innerHTML = '<img src="' + d + '"/>');
    },
        i = function i(a, b, c, d) {
      return function () {
        var e = L.DomUtil.create("div", b);return L.Browser.touch ? L.DomEvent.on(e, "click", L.DomEvent.stopPropagation) : (L.DomEvent.disableClickPropagation(e), L.DomEvent.on(e, "mousewheel", L.DomEvent.stopPropagation)), h(e, a, c, d), e;
      };
    },
        j = function j(a, b) {
      return function () {
        for (var c = L.DomUtil.create("div", b), d = 0; d < a.colors.length; d++) {
          c.innerHTML += '<div class="outline"><i style="background:' + a.colors[d] + '"></i></div><div class="info-label">' + a.labels[d] + "</div>";
        }return L.Browser.touch ? L.DomEvent.on(c, "click", L.DomEvent.stopPropagation) : (L.DomEvent.disableClickPropagation(c), L.DomEvent.on(c, "mousewheel", L.DomEvent.stopPropagation)), c;
      };
    };return { getOnAddLegend: i, getOnAddArrayLegend: j, updateLegend: h, addLegendURL: function addLegendURL(a, c) {
        var d = b.defer();return f(e[a]) || (e[a] = []), e[a].push({ c: c, d: d }), 1 === e[a].length && g(a), d.promise;
      } };
  }]), a.module("ui-leaflet").factory("leafletMapDefaults", ["$q", "leafletHelpers", function (b, c) {
    function d() {
      return { keyboard: !0, dragging: !0, worldCopyJump: !1, doubleClickZoom: !0, scrollWheelZoom: !0, tap: !0, touchZoom: !0, zoomControl: !0, zoomsliderControl: !1, zoomControlPosition: "topleft", attributionControl: !0, controls: { layers: { visible: !0, position: "topright", collapsed: !0 } }, nominatim: { server: " http://nominatim.openstreetmap.org/search" }, crs: L.CRS.EPSG3857, tileLayer: "//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", tileLayerOptions: { attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }, path: { weight: 10, opacity: 1, color: "#0000ff" }, center: { lat: 0, lng: 0, zoom: 1 }, trackResize: !0 };
    }var e = c.isDefined,
        f = c.isObject,
        g = c.obtainEffectiveMapId,
        h = {};return { reset: function reset() {
        h = {};
      }, getDefaults: function getDefaults(a) {
        var b = g(h, a);return h[b];
      }, getMapCreationDefaults: function getMapCreationDefaults(a) {
        var b = g(h, a),
            c = h[b],
            d = { maxZoom: c.maxZoom, keyboard: c.keyboard, dragging: c.dragging, zoomControl: c.zoomControl, doubleClickZoom: c.doubleClickZoom, scrollWheelZoom: c.scrollWheelZoom, tap: c.tap, touchZoom: c.touchZoom, attributionControl: c.attributionControl, worldCopyJump: c.worldCopyJump, crs: c.crs, trackResize: c.trackResize };if (e(c.minZoom) && (d.minZoom = c.minZoom), e(c.zoomAnimation) && (d.zoomAnimation = c.zoomAnimation), e(c.fadeAnimation) && (d.fadeAnimation = c.fadeAnimation), e(c.markerZoomAnimation) && (d.markerZoomAnimation = c.markerZoomAnimation), c.map) for (var f in c.map) {
          d[f] = c.map[f];
        }return d;
      }, setDefaults: function setDefaults(b, c) {
        var i = d();e(b) && (i.doubleClickZoom = e(b.doubleClickZoom) ? b.doubleClickZoom : i.doubleClickZoom, i.scrollWheelZoom = e(b.scrollWheelZoom) ? b.scrollWheelZoom : i.doubleClickZoom, i.tap = e(b.tap) ? b.tap : i.tap, i.touchZoom = e(b.touchZoom) ? b.touchZoom : i.doubleClickZoom, i.zoomControl = e(b.zoomControl) ? b.zoomControl : i.zoomControl, i.zoomsliderControl = e(b.zoomsliderControl) ? b.zoomsliderControl : i.zoomsliderControl, i.attributionControl = e(b.attributionControl) ? b.attributionControl : i.attributionControl, i.tileLayer = e(b.tileLayer) ? b.tileLayer : i.tileLayer, i.zoomControlPosition = e(b.zoomControlPosition) ? b.zoomControlPosition : i.zoomControlPosition, i.keyboard = e(b.keyboard) ? b.keyboard : i.keyboard, i.dragging = e(b.dragging) ? b.dragging : i.dragging, i.trackResize = e(b.trackResize) ? b.trackResize : i.trackResize, e(b.controls) && a.extend(i.controls, b.controls), f(b.crs) ? i.crs = b.crs : e(L.CRS[b.crs]) && (i.crs = L.CRS[b.crs]), e(b.center) && a.copy(b.center, i.center), e(b.tileLayerOptions) && a.copy(b.tileLayerOptions, i.tileLayerOptions), e(b.maxZoom) && (i.maxZoom = b.maxZoom), e(b.minZoom) && (i.minZoom = b.minZoom), e(b.zoomAnimation) && (i.zoomAnimation = b.zoomAnimation), e(b.fadeAnimation) && (i.fadeAnimation = b.fadeAnimation), e(b.markerZoomAnimation) && (i.markerZoomAnimation = b.markerZoomAnimation), e(b.worldCopyJump) && (i.worldCopyJump = b.worldCopyJump), e(b.map) && (i.map = b.map), e(b.path) && (i.path = b.path));var j = g(h, c);return h[j] = i, i;
      } };
  }]), a.module("ui-leaflet").service("leafletMarkersHelpers", ["$rootScope", "$timeout", "leafletHelpers", "leafletLogger", "$compile", "leafletGeoJsonHelpers", "leafletWatchHelpers", function (b, c, d, e, f, g, h) {
    var i = d.isDefined,
        j = d.defaultTo,
        k = d.MarkerClusterPlugin,
        l = d.AwesomeMarkersPlugin,
        m = d.VectorMarkersPlugin,
        n = d.MakiMarkersPlugin,
        o = d.ExtraMarkersPlugin,
        p = d.DomMarkersPlugin,
        q = d.safeApply,
        r = d,
        s = d.isString,
        t = d.isNumber,
        u = d.isObject,
        v = {},
        w = g,
        x = d.errorHeader,
        y = h.maybeWatch,
        z = e,
        A = function A(a) {
      var b = "";return ["_icon", "_latlng", "_leaflet_id", "_map", "_shadow"].forEach(function (c) {
        b += c + ": " + j(a[c], "undefined") + " \n";
      }), "[leafletMarker] : \n" + b;
    },
        B = function B(a, b) {
      var c = b ? console : z;c.debug(A(a));
    },
        C = function C(b) {
      return a.element(v[b]._map._container).parent().length > 0;
    },
        D = function D(c) {
      if (i(c) && i(c.type) && "awesomeMarker" === c.type) return l.isLoaded() || z.error(x + " The AwesomeMarkers Plugin is not loaded."), new L.AwesomeMarkers.icon(c);if (i(c) && i(c.type) && "vectorMarker" === c.type) return m.isLoaded() || z.error(x + " The VectorMarkers Plugin is not loaded."), new L.VectorMarkers.icon(c);if (i(c) && i(c.type) && "makiMarker" === c.type) return n.isLoaded() || z.error(x + "The MakiMarkers Plugin is not loaded."), new L.MakiMarkers.icon(c);if (i(c) && i(c.type) && "extraMarker" === c.type) return o.isLoaded() || z.error(x + "The ExtraMarkers Plugin is not loaded."), new L.ExtraMarkers.icon(c);if (i(c) && i(c.type) && "div" === c.type) return new L.divIcon(c);if (i(c) && i(c.type) && "dom" === c.type) {
        p.isLoaded() || z.error(x + "The DomMarkers Plugin is not loaded.");var d = a.isFunction(c.getMarkerScope) ? c.getMarkerScope().$new() : b,
            e = f(c.template)(d),
            g = a.copy(c);return g.ngElement = e, g.element = e[0], a.isFunction(c.getMarkerScope) && (g.scope = d), new L.DomMarkers.icon(g);
      }if (i(c) && i(c.type) && "icon" === c.type) return c.icon;var h = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAGmklEQVRYw7VXeUyTZxjvNnfELFuyIzOabermMZEeQC/OclkO49CpOHXOLJl/CAURuYbQi3KLgEhbrhZ1aDwmaoGqKII6odATmH/scDFbdC7LvFqOCc+e95s2VG50X/LLm/f4/Z7neY/ne18aANCmAr5E/xZf1uDOkTcGcWR6hl9247tT5U7Y6SNvWsKT63P58qbfeLJG8M5qcgTknrvvrdDbsT7Ml+tv82X6vVxJE33aRmgSyYtcWVMqX97Yv2JvW39UhRE2HuyBL+t+gK1116ly06EeWFNlAmHxlQE0OMiV6mQCScusKRlhS3QLeVJdl1+23h5dY4FNB3thrbYboqptEFlphTC1hSpJnbRvxP4NWgsE5Jyz86QNNi/5qSUTGuFk1gu54tN9wuK2wc3o+Wc13RCmsoBwEqzGcZsxsvCSy/9wJKf7UWf1mEY8JWfewc67UUoDbDjQC+FqK4QqLVMGGR9d2wurKzqBk3nqIT/9zLxRRjgZ9bqQgub+DdoeCC03Q8j+0QhFhBHR/eP3U/zCln7Uu+hihJ1+bBNffLIvmkyP0gpBZWYXhKussK6mBz5HT6M1Nqpcp+mBCPXosYQfrekGvrjewd59/GvKCE7TbK/04/ZV5QZYVWmDwH1mF3xa2Q3ra3DBC5vBT1oP7PTj4C0+CcL8c7C2CtejqhuCnuIQHaKHzvcRfZpnylFfXsYJx3pNLwhKzRAwAhEqG0SpusBHfAKkxw3w4627MPhoCH798z7s0ZnBJ/MEJbZSbXPhER2ih7p2ok/zSj2cEJDd4CAe+5WYnBCgR2uruyEw6zRoW6/DWJ/OeAP8pd/BGtzOZKpG8oke0SX6GMmRk6GFlyAc59K32OTEinILRJRchah8HQwND8N435Z9Z0FY1EqtxUg+0SO6RJ/mmXz4VuS+DpxXC3gXmZwIL7dBSH4zKE50wESf8qwVgrP1EIlTO5JP9Igu0aexdh28F1lmAEGJGfh7jE6ElyM5Rw/FDcYJjWhbeiBYoYNIpc2FT/SILivp0F1ipDWk4BIEo2VuodEJUifhbiltnNBIXPUFCMpthtAyqws/BPlEF/VbaIxErdxPphsU7rcCp8DohC+GvBIPJS/tW2jtvTmmAeuNO8BNOYQeG8G/2OzCJ3q+soYB5i6NhMaKr17FSal7GIHheuV3uSCY8qYVuEm1cOzqdWr7ku/R0BDoTT+DT+ohCM6/CCvKLKO4RI+dXPeAuaMqksaKrZ7L3FE5FIFbkIceeOZ2OcHO6wIhTkNo0ffgjRGxEqogXHYUPHfWAC/lADpwGcLRY3aeK4/oRGCKYcZXPVoeX/kelVYY8dUGf8V5EBRbgJXT5QIPhP9ePJi428JKOiEYhYXFBqou2Guh+p/mEB1/RfMw6rY7cxcjTrneI1FrDyuzUSRm9miwEJx8E/gUmqlyvHGkneiwErR21F3tNOK5Tf0yXaT+O7DgCvALTUBXdM4YhC/IawPU+2PduqMvuaR6eoxSwUk75ggqsYJ7VicsnwGIkZBSXKOUww73WGXyqP+J2/b9c+gi1YAg/xpwck3gJuucNrh5JvDPvQr0WFXf0piyt8f8/WI0hV4pRxxkQZdJDfDJNOAmM0Ag8jyT6hz0WGXWuP94Yh2jcfjmXAGvHCMslRimDHYuHuDsy2QtHuIavznhbYURq5R57KpzBBRZKPJi8eQg48h4j8SDdowifdIrEVdU+gbO6QNvRRt4ZBthUaZhUnjlYObNagV3keoeru3rU7rcuceqU1mJBxy+BWZYlNEBH+0eH4vRiB+OYybU2hnblYlTvkHinM4m54YnxSyaZYSF6R3jwgP7udKLGIX6r/lbNa9N6y5MFynjWDtrHd75ZvTYAPO/6RgF0k76mQla3FGq7dO+cH8sKn0Vo7nDllwAhqwLPkxrHwWmHJOo+AKJ4rab5OgrM7rVu8eWb2Pu0Dh4eDgXoOfvp7Y7QeqknRmvcTBEyq9m/HQQSCSz6LHq3z0yzsNySRfMS253wl2KyRDbcZPcfJKjZmSEOjcxyi+Y8dUOtsIEH6R2wNykdqrkYJ0RV92H0W58pkfQk7cKevsLK10Py8SdMGfXNXATY+pPbyJR/ET6n9nIfztNtZYRV9XniQu9IA2vOVgy4ir7GCLVmmd+zjkH0eAF9Po6K61pmCXHxU5rHMYd1ftc3owjwRSVRzLjKvqZEty6cRUD7jGqiOdu5HG6MdHjNcNYGqfDm5YRzLBBCCDl/2bk8a8gdbqcfwECu62Fg/HrggAAAABJRU5ErkJggg==",
          j = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAC5ElEQVRYw+2YW4/TMBCF45S0S1luXZCABy5CgLQgwf//S4BYBLTdJLax0fFqmB07nnQfEGqkIydpVH85M+NLjPe++dcPc4Q8Qh4hj5D/AaQJx6H/4TMwB0PeBNwU7EGQAmAtsNfAzoZkgIa0ZgLMa4Aj6CxIAsjhjOCoL5z7Glg1JAOkaicgvQBXuncwJAWjksLtBTWZe04CnYRktUGdilALppZBOgHGZcBzL6OClABvMSVIzyBjazOgrvACf1ydC5mguqAVg6RhdkSWQFj2uxfaq/BrIZOLEWgZdALIDvcMcZLD8ZbLC9de4yR1sYMi4G20S4Q/PWeJYxTOZn5zJXANZHIxAd4JWhPIloTJZhzMQduM89WQ3MUVAE/RnhAXpTycqys3NZALOBbB7kFrgLesQl2h45Fcj8L1tTSohUwuxhy8H/Qg6K7gIs+3kkaigQCOcyEXCHN07wyQazhrmIulvKMQAwMcmLNqyCVyMAI+BuxSMeTk3OPikLY2J1uE+VHQk6ANrhds+tNARqBeaGc72cK550FP4WhXmFmcMGhTwAR1ifOe3EvPqIegFmF+C8gVy0OfAaWQPMR7gF1OQKqGoBjq90HPMP01BUjPOqGFksC4emE48tWQAH0YmvOgF3DST6xieJgHAWxPAHMuNhrImIdvoNOKNWIOcE+UXE0pYAnkX6uhWsgVXDxHdTfCmrEEmMB2zMFimLVOtiiajxiGWrbU52EeCdyOwPEQD8LqyPH9Ti2kgYMf4OhSKB7qYILbBv3CuVTJ11Y80oaseiMWOONc/Y7kJYe0xL2f0BaiFTxknHO5HaMGMublKwxFGzYdWsBF174H/QDknhTHmHHN39iWFnkZx8lPyM8WHfYELmlLKtgWNmFNzQcC1b47gJ4hL19i7o65dhH0Negbca8vONZoP7doIeOC9zXm8RjuL0Gf4d4OYaU5ljo3GYiqzrWQHfJxA6ALhDpVKv9qYeZA8eM3EhfPSCmpuD0AAAAASUVORK5CYII=";
      return i(c) && i(c.iconUrl) ? new L.Icon(c) : new L.Icon.Default({ iconUrl: h, shadowUrl: j, iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41] });
    },
        E = function E(a) {
      i(v[a]) && delete v[a];
    },
        F = function F() {
      v = {};
    },
        G = function G() {
      for (var a in v) {
        C(a) || E(a);
      }
    },
        H = function H(a) {
      a.options.icon.options.ngElement && a.options.icon.options.ngElement.remove(), a.options.icon.options.scope && a.options.icon.options.scope.$destroy();
    },
        I = function I(a, b, c) {
      if (a.closePopup(), a.options.icon && a.options.icon.options && "dom" === a.options.icon.options.type && H(a), i(c) && i(c.overlays)) for (var d in c.overlays) {
        if ((c.overlays[d] instanceof L.LayerGroup || c.overlays[d] instanceof L.FeatureGroup) && c.overlays[d].hasLayer(a)) return void c.overlays[d].removeLayer(a);
      }if (i(v)) for (var e in v) {
        v[e].hasLayer(a) && v[e].removeLayer(a);
      }b.hasLayer(a) && b.removeLayer(a);
    },
        J = function J(a, b) {
      var c = a._popup._container.offsetHeight,
          d = new L.Point(a._popup._containerLeft, -c - a._popup._containerBottom),
          e = b.layerPointToContainerPoint(d);null !== e && a._popup._adjustPan();
    },
        K = function K(a, b) {
      f(a._popup._contentNode)(b);
    },
        M = function a(b, d, e) {
      var f = b._popup._contentNode.innerText || b._popup._contentNode.textContent;f.length < 1 && c(function () {
        a(b, d, e);
      });var g = b._popup._contentNode.offsetWidth;return b._popup._updateLayout(), b._popup._updatePosition(), b._popup.options.autoPan && J(b, e), g;
    },
        N = function N(c, d, e) {
      var f = a.isFunction(d.getMessageScope) ? d.getMessageScope() : b,
          g = !i(d.compileMessage) || d.compileMessage;if (g) {
        if (!i(c._popup) || !i(c._popup._contentNode)) return z.error(x + "Popup is invalid or does not have any content."), !1;K(c, f), M(c, d, e);
      }
    },
        O = function O(c, d) {
      var e = a.isFunction(d.getMessageScope) ? d.getMessageScope() : b,
          g = a.isFunction(d.getLabelScope) ? d.getLabelScope() : e,
          h = !i(d.compileMessage) || d.compileMessage;r.LabelPlugin.isLoaded() && i(d.label) && (i(d.label.options) && d.label.options.noHide === !0 && c.showLabel(), h && i(c.label) && f(c.label._container)(g));
    },
        P = function P(b, c, d, e, f, g, h) {
      if (i(c)) {
        if (!w.validateCoords(b)) return z.warn("There are problems with lat-lng data, please verify your marker model"), void I(d, h, g);var j = b === c;if (i(b.iconAngle) && c.iconAngle !== b.iconAngle && d.setIconAngle(b.iconAngle), s(b.layer) || s(c.layer) && (i(g.overlays[c.layer]) && g.overlays[c.layer].hasLayer(d) && (g.overlays[c.layer].removeLayer(d), d.closePopup()), h.hasLayer(d) || h.addLayer(d)), (t(b.opacity) || t(parseFloat(b.opacity))) && b.opacity !== c.opacity && d.setOpacity(b.opacity), s(b.layer) && c.layer !== b.layer) {
          if (s(c.layer) && i(g.overlays[c.layer]) && g.overlays[c.layer].hasLayer(d) && g.overlays[c.layer].removeLayer(d), d.closePopup(), h.hasLayer(d) && h.removeLayer(d), !i(g.overlays[b.layer])) return void z.error(x + "You must use a name of an existing layer");var k = g.overlays[b.layer];if (!(k instanceof L.LayerGroup || k instanceof L.FeatureGroup)) return void z.error(x + 'A marker can only be added to a layer of type "group" or "featureGroup"');k.addLayer(d), h.hasLayer(d) && b.focus === !0 && d.openPopup();
        }if (b.draggable !== !0 && c.draggable === !0 && i(d.dragging) && d.dragging.disable(), b.draggable === !0 && c.draggable !== !0 && (d.dragging ? d.dragging.enable() : L.Handler.MarkerDrag && (d.dragging = new L.Handler.MarkerDrag(d), d.options.draggable = !0, d.dragging.enable())), u(b.icon) || u(c.icon) && ("dom" === c.icon.type && H(d), d.setIcon(D()), d.closePopup(), d.unbindPopup(), s(b.message) && d.bindPopup(b.message, b.popupOptions)), u(b.icon) && u(c.icon) && !a.equals(b.icon, c.icon)) {
          var l = !1;d.dragging && (l = d.dragging.enabled()), "dom" === c.icon.type && H(d), d.setIcon(D(b.icon)), l && d.dragging.enable(), d.closePopup(), d.unbindPopup(), s(b.message) && (d.bindPopup(b.message, b.popupOptions), h.hasLayer(d) && b.focus === !0 && d.openPopup());
        }!s(b.message) && s(c.message) && (d.closePopup(), d.unbindPopup()), r.LabelPlugin.isLoaded() && (i(b.label) && i(b.label.message) ? "label" in c && "message" in c.label && !a.equals(b.label.message, c.label.message) ? d.updateLabelContent(b.label.message) : !a.isFunction(d.getLabel) || a.isFunction(d.getLabel) && !i(d.getLabel()) ? (d.bindLabel(b.label.message, b.label.options), O(d, b)) : O(d, b) : "label" in b && !("message" in b.label) || a.isFunction(d.unbindLabel) && d.unbindLabel()), s(b.message) && !s(c.message) && d.bindPopup(b.message, b.popupOptions), s(b.message) && s(c.message) && b.message !== c.message && d.setPopupContent(b.message);var m = !1;b.focus !== !0 && c.focus === !0 && (d.closePopup(), m = !0), (b.focus === !0 && (!i(c.focus) || c.focus === !1) || j && b.focus === !0) && (d.openPopup(), m = !0), c.zIndexOffset !== b.zIndexOffset && d.setZIndexOffset(b.zIndexOffset);var n = d.getLatLng(),
            o = s(b.layer) && r.MarkerClusterPlugin.is(g.overlays[b.layer]);o ? m ? b.lat === c.lat && b.lng === c.lng || (g.overlays[b.layer].removeLayer(d), d.setLatLng([b.lat, b.lng]), g.overlays[b.layer].addLayer(d)) : n.lat !== b.lat || n.lng !== b.lng ? (g.overlays[b.layer].removeLayer(d), d.setLatLng([b.lat, b.lng]), g.overlays[b.layer].addLayer(d)) : b.lat !== c.lat || b.lng !== c.lng ? (g.overlays[b.layer].removeLayer(d), d.setLatLng([b.lat, b.lng]), g.overlays[b.layer].addLayer(d)) : u(b.icon) && u(c.icon) && !a.equals(b.icon, c.icon) && (g.overlays[b.layer].removeLayer(d), g.overlays[b.layer].addLayer(d)) : n.lat === b.lat && n.lng === b.lng || d.setLatLng([b.lat, b.lng]);
      }
    },
        Q = function Q(a, b) {
      if (i(a)) return b ? a[b] : a;
    },
        R = function R(a, b, c) {
      if (i(a)) return b ? c ? a[c][b] : a[b] : void z.error(x + "marker id missing in getMarker");
    };return { resetMarkerGroup: E, resetMarkerGroups: F, resetUnusedMarkerGroups: G, deleteMarker: I, manageOpenPopup: N, manageOpenLabel: O, createMarker: function createMarker(a) {
        if (!i(a) || !w.validateCoords(a)) return void z.error(x + "The marker definition is not valid.");var b = w.getCoords(a);if (!i(b)) return void z.error(x + "Unable to get coordinates from markerData.");var c = { icon: D(a.icon), title: i(a.title) ? a.title : "", draggable: !!i(a.draggable) && a.draggable, clickable: !i(a.clickable) || a.clickable, riseOnHover: !!i(a.riseOnHover) && a.riseOnHover, zIndexOffset: i(a.zIndexOffset) ? a.zIndexOffset : 0, iconAngle: i(a.iconAngle) ? a.iconAngle : 0 };for (var d in a) {
          a.hasOwnProperty(d) && !c.hasOwnProperty(d) && (c[d] = a[d]);
        }var e = new L.marker(b, c);return s(a.message) || e.unbindPopup(), e;
      }, addMarkerToGroup: function addMarkerToGroup(a, b, c, d) {
        return s(b) ? k.isLoaded() ? (i(v[b]) || (v[b] = new L.MarkerClusterGroup(c), d.addLayer(v[b])), void v[b].addLayer(a)) : void z.error(x + "The MarkerCluster plugin is not loaded.") : void z.error(x + "The marker group you have specified is invalid.");
      }, listenMarkerEvents: function listenMarkerEvents(a, b, c, d, e) {
        a.on("popupopen", function () {
          q(c, function () {
            (i(a._popup) || i(a._popup._contentNode)) && (b.focus = !0, N(a, b, e));
          });
        }), a.on("popupclose", function () {
          q(c, function () {
            b.focus = !1;
          });
        }), a.on("add", function () {
          q(c, function () {
            "label" in b && O(a, b);
          });
        });
      }, updateMarker: P, addMarkerWatcher: function addMarkerWatcher(a, b, c, d, e, f) {
        var g = r.getObjectArrayPath("markers." + b);y(c, g, f, function (f, g, h) {
          return i(f) ? void P(f, g, a, b, c, d, e) : (I(a, e, d), void h());
        });
      }, string: A, log: B, getModelFromModels: R, getLayerModels: Q };
  }]), a.module("ui-leaflet").factory("leafletPathsHelpers", ["$rootScope", "leafletLogger", "leafletHelpers", function (a, b, c) {
    function d(a) {
      return a.filter(function (a) {
        return k(a);
      }).map(function (a) {
        return e(a);
      });
    }function e(a) {
      return i(a) ? new L.LatLng(a[0], a[1]) : new L.LatLng(a.lat, a.lng);
    }function f(a) {
      return a.map(function (a) {
        return d(a);
      });
    }function g(a, b) {
      for (var c = {}, d = 0; d < m.length; d++) {
        var e = m[d];h(a[e]) ? c[e] = a[e] : h(b.path[e]) && (c[e] = b.path[e]);
      }return c;
    }var h = c.isDefined,
        i = c.isArray,
        j = c.isNumber,
        k = c.isValidPoint,
        l = b,
        m = ["stroke", "weight", "color", "opacity", "fill", "fillColor", "fillOpacity", "dashArray", "lineCap", "lineJoin", "clickable", "pointerEvents", "className", "smoothFactor", "noClip"],
        n = function n(a, b) {
      for (var c = {}, d = 0; d < m.length; d++) {
        var e = m[d];h(b[e]) && (c[e] = b[e]);
      }a.setStyle(b);
    },
        o = function o(a) {
      if (!i(a)) return !1;for (var b = 0; b < a.length; b++) {
        var c = a[b];if (!k(c)) return !1;
      }return !0;
    },
        p = { polyline: { isValid: function isValid(a) {
          var b = a.latlngs;return o(b);
        }, createPath: function createPath(a) {
          return new L.Polyline([], a);
        }, setPath: function setPath(a, b) {
          a.setLatLngs(d(b.latlngs)), n(a, b);
        } }, multiPolyline: { isValid: function isValid(a) {
          var b = a.latlngs;if (!i(b)) return !1;for (var c in b) {
            var d = b[c];if (!o(d)) return !1;
          }return !0;
        }, createPath: function createPath(a) {
          return new L.multiPolyline([[[0, 0], [1, 1]]], a);
        }, setPath: function setPath(a, b) {
          a.setLatLngs(f(b.latlngs)), n(a, b);
        } }, polygon: { isValid: function isValid(a) {
          var b = a.latlngs;return o(b);
        }, createPath: function createPath(a) {
          return new L.Polygon([], a);
        }, setPath: function setPath(a, b) {
          a.setLatLngs(d(b.latlngs)), n(a, b);
        } }, multiPolygon: { isValid: function isValid(a) {
          var b = a.latlngs;if (!i(b)) return !1;for (var c in b) {
            var d = b[c];if (!o(d)) return !1;
          }return !0;
        }, createPath: function createPath(a) {
          return new L.MultiPolygon([[[0, 0], [1, 1], [0, 1]]], a);
        }, setPath: function setPath(a, b) {
          a.setLatLngs(f(b.latlngs)), n(a, b);
        } }, rectangle: { isValid: function isValid(a) {
          var b = a.latlngs;if (!i(b) || 2 !== b.length) return !1;for (var c in b) {
            var d = b[c];if (!k(d)) return !1;
          }return !0;
        }, createPath: function createPath(a) {
          return new L.Rectangle([[0, 0], [1, 1]], a);
        }, setPath: function setPath(a, b) {
          a.setBounds(new L.LatLngBounds(d(b.latlngs))), n(a, b);
        } }, circle: { isValid: function isValid(a) {
          var b = a.latlngs;return k(b) && j(a.radius);
        }, createPath: function createPath(a) {
          return new L.Circle([0, 0], 1, a);
        }, setPath: function setPath(a, b) {
          a.setLatLng(e(b.latlngs)), h(b.radius) && a.setRadius(b.radius), n(a, b);
        } }, circleMarker: { isValid: function isValid(a) {
          var b = a.latlngs;return k(b) && j(a.radius);
        }, createPath: function createPath(a) {
          return new L.CircleMarker([0, 0], a);
        }, setPath: function setPath(a, b) {
          a.setLatLng(e(b.latlngs)), h(b.radius) && a.setRadius(b.radius), n(a, b);
        } } },
        q = function q(a) {
      var b = {};return a.latlngs && (b.latlngs = a.latlngs), a.radius && (b.radius = a.radius), b;
    };return { setPathOptions: function setPathOptions(a, b, c) {
        h(b) || (b = "polyline"), p[b].setPath(a, c);
      }, createPath: function createPath(a, b, c) {
        h(b.type) || (b.type = "polyline");var d = g(b, c),
            e = q(b);return p[b.type].isValid(e) ? p[b.type].createPath(d) : void l.error("[AngularJS - Leaflet] Invalid data passed to the " + b.type + " path");
      } };
  }]), a.module("ui-leaflet").service("leafletWatchHelpers", function () {
    var a = function a(_a, b, c, d, e) {
      var f = _a[b](c, function (a, b) {
        e(a, b, f), null === d.type && f();
      }, "watchDeep" === d.type);return f;
    },
        b = function b(_b, c, d, e) {
      var f;return f = "watchCollection" === d.type ? "$watchCollection" : "$watch", a(_b, f, c, d, e);
    };return { maybeWatch: b };
  }), a.module("ui-leaflet").service("leafletLogger", ["nemSimpleLogger", function (a) {
    return a.spawn();
  }]), a.module("ui-leaflet").factory("nominatimService", ["$q", "$http", "leafletHelpers", "leafletMapDefaults", function (a, b, c, d) {
    var e = c.isDefined;return { query: function query(c, f) {
        var g = d.getDefaults(f),
            h = g.nominatim.server,
            i = a.defer();return b.get(h, { params: { format: "json", limit: 1, q: c } }).success(function (a) {
          a.length > 0 && e(a[0].boundingbox) ? i.resolve(a[0]) : i.reject("[Nominatim] Invalid address");
        }), i.promise;
      } };
  }]), a.module("ui-leaflet").directive("bounds", ["leafletLogger", "$timeout", "$http", "leafletHelpers", "nominatimService", "leafletBoundsHelpers", function (b, c, d, e, f, g) {
    var h = b;return { restrict: "A", scope: !1, replace: !1, require: ["leaflet"], link: function link(b, d, i, j) {
        var k = e.isDefined,
            l = g.createLeafletBounds,
            m = j[0].getLeafletScope(),
            n = j[0],
            o = e.errorHeader + " [Bounds] ",
            p = function p(a) {
          return 0 === a._southWest.lat && 0 === a._southWest.lng && 0 === a._northEast.lat && 0 === a._northEast.lng;
        };n.getMap().then(function (d) {
          m.$on("boundsChanged", function (b) {
            var e = b.currentScope,
                f = d.getBounds();if (!p(f) && !e.settingBoundsFromScope) {
              e.settingBoundsFromLeaflet = !0;var g = { northEast: { lat: f._northEast.lat, lng: f._northEast.lng }, southWest: { lat: f._southWest.lat, lng: f._southWest.lng }, options: f.options };a.equals(e.bounds, g) || (e.bounds = g), c(function () {
                e.settingBoundsFromLeaflet = !1;
              });
            }
          });var e;m.$watch("bounds", function (a) {
            if (!b.settingBoundsFromLeaflet) {
              if (k(a.address) && a.address !== e) return b.settingBoundsFromScope = !0, f.query(a.address, i.id).then(function (a) {
                var b = a.boundingbox,
                    c = [[b[0], b[2]], [b[1], b[3]]];d.fitBounds(c);
              }, function (a) {
                h.error(o + " " + a + ".");
              }), e = a.address, void c(function () {
                b.settingBoundsFromScope = !1;
              });var g = l(a);g && !d.getBounds().equals(g) && (b.settingBoundsFromScope = !0, d.fitBounds(g, a.options), c(function () {
                b.settingBoundsFromScope = !1;
              }));
            }
          }, !0);
        });
      } };
  }]);var b = ["center", "lfCenter"],
      c = {};b.forEach(function (b) {
    c[b] = ["leafletLogger", "$q", "$location", "$timeout", "leafletMapDefaults", "leafletHelpers", "leafletBoundsHelpers", "leafletMapEvents", function (c, d, e, f, g, h, i, j) {
      var k,
          l = h.isDefined,
          m = h.isNumber,
          n = h.isSameCenterOnMap,
          o = h.safeApply,
          p = h.isValidCenter,
          q = i.isValidBounds,
          r = h.isUndefinedOrEmpty,
          s = h.errorHeader,
          t = c,
          u = function u(a, b) {
        return l(a) && q(a) && r(b);
      };return { restrict: "A", scope: !1, replace: !1, require: "leaflet", controller: function controller() {
          k = d.defer(), this.getCenter = function () {
            return k.promise;
          };
        }, link: function link(c, d, h, q) {
          var r = q.getLeafletScope(),
              v = r[b];q.getMap().then(function (c) {
            var d = g.getDefaults(h.id);if (h[b].search("-") !== -1) return t.error(s + ' The "center" variable can\'t use a "-" on its key name: "' + h[b] + '".'), void c.setView([d.center.lat, d.center.lng], d.center.zoom);if (u(r.bounds, v)) c.fitBounds(i.createLeafletBounds(r.bounds), r.bounds.options), v = c.getCenter(), o(r, function (d) {
              a.extend(d[b], { lat: c.getCenter().lat, lng: c.getCenter().lng, zoom: c.getZoom(), autoDiscover: !1 });
            }), o(r, function (a) {
              var b = c.getBounds();a.bounds = { northEast: { lat: b._northEast.lat, lng: b._northEast.lng }, southWest: { lat: b._southWest.lat, lng: b._southWest.lng } };
            });else {
              if (!l(v)) return t.error(s + ' The "center" property is not defined in the main scope'), void c.setView([d.center.lat, d.center.lng], d.center.zoom);l(v.lat) && l(v.lng) || l(v.autoDiscover) || a.copy(d.center, v);
            }var q, w;if ("yes" === h.urlHashCenter) {
              var x = function x() {
                var a,
                    b = e.search(),
                    c = h.urlHashParam ? h.urlHashParam : "c";if (l(b[c])) {
                  var d = b[c].split(":");3 === d.length && (a = { lat: parseFloat(d[0]), lng: parseFloat(d[1]), zoom: parseInt(d[2], 10) });
                }return a;
              };q = x(), r.$on("$locationChangeSuccess", function (d) {
                var e = d.currentScope,
                    f = x();l(f) && !n(f, c) && a.extend(e[b], { lat: f.lat, lng: f.lng, zoom: f.zoom });
              });
            }r.$watch(b, function (b) {
              if (!r.settingCenterFromLeaflet) return l(q) && (a.copy(q, b), q = void 0), p(b) || b.autoDiscover === !0 ? b.autoDiscover === !0 ? (m(b.zoom) || c.setView([d.center.lat, d.center.lng], d.center.zoom), void (m(b.zoom) && b.zoom > d.center.zoom ? c.locate({ setView: !0, maxZoom: b.zoom }) : l(d.maxZoom) ? c.locate({ setView: !0, maxZoom: d.maxZoom }) : c.locate({ setView: !0 }))) : void (w && n(b, c) || (r.settingCenterFromScope = !0, c.setView([b.lat, b.lng], b.zoom), j.notifyCenterChangedToBounds(r, c), f(function () {
                r.settingCenterFromScope = !1;
              }))) : void t.warn(s + " invalid 'center'");
            }, !0), c.whenReady(function () {
              w = !0;
            }), c.on("moveend", function () {
              k.resolve(), j.notifyCenterUrlHashChanged(r, c, h, e.search()), n(v, c) || r.settingCenterFromScope || (r.settingCenterFromLeaflet = !0, o(r, function (d) {
                r.settingCenterFromScope || a.extend(d[b], { lat: c.getCenter().lat, lng: c.getCenter().lng, zoom: c.getZoom(), autoDiscover: !1 }), j.notifyCenterChangedToBounds(r, c), f(function () {
                  r.settingCenterFromLeaflet = !1;
                });
              }));
            }), v.autoDiscover === !0 && c.on("locationerror", function () {
              t.warn(s + " The Geolocation API is unauthorized on this page."), p(v) ? (c.setView([v.lat, v.lng], v.zoom), j.notifyCenterChangedToBounds(r, c)) : (c.setView([d.center.lat, d.center.lng], d.center.zoom), j.notifyCenterChangedToBounds(r, c));
            });
          });
        } };
    }];
  }), b.forEach(function (b) {
    a.module("ui-leaflet").directive(b, c[b]);
  }), a.module("ui-leaflet").directive("controls", ["leafletLogger", "leafletHelpers", "leafletControlHelpers", function (a, b, c) {
    var d = a;return { restrict: "A", scope: !1, replace: !1, require: "?^leaflet", link: function link(a, e, f, g) {
        if (g) {
          var h = c.createControl,
              i = c.isValidControlType,
              j = g.getLeafletScope(),
              k = b.isDefined,
              l = b.isArray,
              m = {},
              n = b.errorHeader + " [Controls] ";a.$on("$destroy", function () {
            c.destroyMapLayersControl(a.mapId);
          }), g.getMap().then(function (a) {
            j.$watchCollection("controls", function (b) {
              for (var c in m) {
                k(b[c]) || (a.hasControl(m[c]) && a.removeControl(m[c]), delete m[c]);
              }for (var e in b) {
                var f,
                    g = k(b[e].type) ? b[e].type : e;if (!i(g)) return void d.error(n + " Invalid control type: " + g + ".");if ("custom" !== g) f = h(g, b[e]), a.addControl(f), m[e] = f;else {
                  var j = b[e];if (l(j)) for (var o = 0; o < j.length; o++) {
                    var p = j[o];a.addControl(p), m[e] = k(m[e]) ? m[e].concat([p]) : [p];
                  } else a.addControl(j), m[e] = j;
                }
              }
            });
          });
        }
      } };
  }]), a.module("ui-leaflet").directive("decorations", ["leafletLogger", "leafletHelpers", function (b, c) {
    var d = b;return { restrict: "A", scope: !1, replace: !1, require: "leaflet", link: function link(b, e, f, g) {
        function h(a) {
          return l(a) && l(a.coordinates) && (k.isLoaded() || d.error("[AngularJS - Leaflet] The PolylineDecorator Plugin is not loaded.")), L.polylineDecorator(a.coordinates);
        }function i(a, b) {
          if (l(a) && l(b) && l(b.coordinates) && l(b.patterns)) return a.setPaths(b.coordinates), a.setPatterns(b.patterns), a;
        }var j = g.getLeafletScope(),
            k = c.PolylineDecoratorPlugin,
            l = c.isDefined,
            m = {};g.getMap().then(function (b) {
          j.$watch("decorations", function (c) {
            for (var d in m) {
              l(c[d]) && a.equals(c[d], m) || (b.removeLayer(m[d]), delete m[d]);
            }for (var e in c) {
              var f = c[e],
                  g = h(f);l(g) && (m[e] = g, b.addLayer(g), i(g, f));
            }
          }, !0);
        });
      } };
  }]), a.module("ui-leaflet").directive("eventBroadcast", ["leafletLogger", "$rootScope", "leafletHelpers", "leafletMapEvents", "leafletIterators", function (a, b, c, d, e) {
    var f = a;return { restrict: "A", scope: !1, replace: !1, require: "leaflet", link: function link(a, b, g, h) {
        var i = c.isObject,
            j = c.isDefined,
            k = h.getLeafletScope(),
            l = k.eventBroadcast,
            m = d.getAvailableMapEvents(),
            n = d.addEvents;h.getMap().then(function (a) {
          var b = [],
              c = "broadcast";j(l.map) ? i(l.map) ? ("emit" !== l.map.logic && "broadcast" !== l.map.logic ? f.warn("[AngularJS - Leaflet] Available event propagation logic are: 'emit' or 'broadcast'.") : c = l.map.logic, i(l.map.enable) && l.map.enable.length >= 0 ? e.each(l.map.enable, function (a) {
            b.indexOf(a) === -1 && m.indexOf(a) !== -1 && b.push(a);
          }) : f.warn("[AngularJS - Leaflet] event-broadcast.map.enable must be an object check your model.")) : f.warn("[AngularJS - Leaflet] event-broadcast.map must be an object check your model.") : b = m, n(a, g.id, b, "eventName", k, c);
        });
      } };
  }]), a.module("ui-leaflet").directive("geojson", ["$timeout", "leafletLogger", "leafletData", "leafletHelpers", "leafletWatchHelpers", "leafletDirectiveControlsHelpers", "leafletIterators", "leafletGeoJsonEvents", function (b, c, d, e, f, g, h, i) {
    var j = f.maybeWatch,
        k = e.watchOptions,
        l = g.extend,
        m = e,
        n = h,
        o = { changeFromDirective: !1 };return { restrict: "A", scope: !1, replace: !1, require: "leaflet", link: function link(b, c, f, g) {
        var h = e.isDefined,
            p = g.getLeafletScope(),
            q = {},
            r = !1;g.getMap().then(function (b) {
          var c;c = p.watchOptions && p.watchOptions.geojson ? p.watchOptions.geojson : k;var g = function g(b, c) {
            var d;return d = a.isFunction(b.onEachFeature) ? b.onEachFeature : function (a, d) {
              e.LabelPlugin.isLoaded() && h(a.properties.description) && d.bindLabel(a.properties.description), i.bindEvents(f.id, d, null, a, p, c, { resetStyleOnMouseout: b.resetStyleOnMouseout, mapId: f.id });
            };
          },
              s = m.isDefined(f.geojsonNested) && m.isTruthy(f.geojsonNested),
              t = function t() {
            if (q) {
              var a = function a(_a2) {
                h(_a2) && b.hasLayer(_a2) && b.removeLayer(_a2);
              };return s ? void n.each(q, function (b) {
                a(b);
              }) : void a(q);
            }
          },
              u = function u(a, c) {
            if (h(a) && h(a.data)) {
              var e = g(a, c);h(a.options) || m.modelChangeInDirective(o, "changeFromDirective", function () {
                a.options = { style: a.style, filter: a.filter, onEachFeature: e, pointToLayer: a.pointToLayer };
              });var i = L.geoJson(a.data, a.options);c && m.isString(c) ? q[c] = i : q = i, i.addTo(b), r || (r = !0, d.setGeoJSON(q, f.id));
            }
          },
              v = function v(a) {
            if (t(), s) {
              if (!a || !Object.keys(a).length) return;return void n.each(a, function (a, b) {
                u(a, b);
              });
            }u(a);
          };l(f.id, "geojson", v, t), j(p, "geojson", c, function (a) {
            o.changeFromDirective || v(a);
          });
        });
      } };
  }]), a.module("ui-leaflet").directive("layercontrol", ["$filter", "leafletLogger", "leafletData", "leafletHelpers", function (b, c, d, e) {
    var f = c;return { restrict: "E", scope: { icons: "=?", autoHideOpacity: "=?", showGroups: "=?", title: "@", baseTitle: "@", overlaysTitle: "@" }, replace: !0, transclude: !1, require: "^leaflet", controller: ["$scope", "$element", "$sce", function (b, c, g) {
        f.debug("[Angular Directive - Layers] layers", b, c);var h = e.safeApply,
            i = e.isDefined;a.extend(b, { baselayer: "", oldGroup: "", layerProperties: {}, groupProperties: {}, rangeIsSupported: e.rangeIsSupported(), changeBaseLayer: function changeBaseLayer(a, c) {
            e.safeApply(b, function (c) {
              c.baselayer = a, d.getMap().then(function (e) {
                d.getLayers().then(function (d) {
                  if (!e.hasLayer(d.baselayers[a])) {
                    for (var f in c.layers.baselayers) {
                      c.layers.baselayers[f].icon = c.icons.unradio, e.hasLayer(d.baselayers[f]) && e.removeLayer(d.baselayers[f]);
                    }e.addLayer(d.baselayers[a]), c.layers.baselayers[a].icon = b.icons.radio;
                  }
                });
              });
            }), c.preventDefault();
          }, moveLayer: function moveLayer(a, c, d) {
            var e = Object.keys(b.layers.baselayers).length;if (c >= 1 + e && c <= b.overlaysArray.length + e) {
              var f;for (var g in b.layers.overlays) {
                if (b.layers.overlays[g].index === c) {
                  f = b.layers.overlays[g];break;
                }
              }f && h(b, function () {
                f.index = a.index, a.index = c;
              });
            }d.stopPropagation(), d.preventDefault();
          }, initIndex: function initIndex(a, c) {
            var d = Object.keys(b.layers.baselayers).length;a.index = i(a.index) ? a.index : c + d + 1;
          }, initGroup: function initGroup(a) {
            b.groupProperties[a] = b.groupProperties[a] ? b.groupProperties[a] : {};
          }, toggleOpacity: function toggleOpacity(a, c) {
            if (c.visible) {
              if (b.autoHideOpacity && !b.layerProperties[c.name].opacityControl) for (var d in b.layerProperties) {
                b.layerProperties[d].opacityControl = !1;
              }b.layerProperties[c.name].opacityControl = !b.layerProperties[c.name].opacityControl;
            }a.stopPropagation(), a.preventDefault();
          }, toggleLegend: function toggleLegend(a) {
            b.layerProperties[a.name].showLegend = !b.layerProperties[a.name].showLegend;
          }, showLegend: function showLegend(a) {
            return a.legend && b.layerProperties[a.name].showLegend;
          }, unsafeHTML: function unsafeHTML(a) {
            return g.trustAsHtml(a);
          }, getOpacityIcon: function getOpacityIcon(a) {
            return a.visible && b.layerProperties[a.name].opacityControl ? b.icons.close : b.icons.open;
          }, getGroupIcon: function getGroupIcon(a) {
            return a.visible ? b.icons.check : b.icons.uncheck;
          }, changeGroupVisibility: function changeGroupVisibility(a) {
            if (i(b.groupProperties[a])) {
              var c = b.groupProperties[a].visible;for (var d in b.layers.overlays) {
                var e = b.layers.overlays[d];e.group === a && (e.visible = c);
              }
            }
          } });var j = c.get(0);L.Browser.touch ? L.DomEvent.on(j, "click", L.DomEvent.stopPropagation) : (L.DomEvent.disableClickPropagation(j), L.DomEvent.on(j, "mousewheel", L.DomEvent.stopPropagation));
      }], template: '<div class="angular-leaflet-control-layers" ng-show="overlaysArray.length"><h4 ng-if="title">{{ title }}</h4><div class="lf-baselayers"><h5 class="lf-title" ng-if="baseTitle">{{ baseTitle }}</h5><div class="lf-row" ng-repeat="(key, layer) in baselayersArray"><label class="lf-icon-bl" ng-click="changeBaseLayer(key, $event)"><input class="leaflet-control-layers-selector" type="radio" name="lf-radio" ng-show="false" ng-checked="baselayer === key" ng-value="key" /> <i class="lf-icon lf-icon-radio" ng-class="layer.icon"></i><div class="lf-text">{{layer.name}}</div></label></div></div><div class="lf-overlays"><h5 class="lf-title" ng-if="overlaysTitle">{{ overlaysTitle }}</h5><div class="lf-container"><div class="lf-row" ng-repeat="layer in (o = (overlaysArray | orderBy:\'index\':order))" ng-init="initIndex(layer, $index)"><label class="lf-icon-ol-group" ng-if="showGroups &amp;&amp; layer.group &amp;&amp; layer.group != o[$index-1].group"><input class="lf-control-layers-selector" type="checkbox" ng-show="false" ng-change="changeGroupVisibility(layer.group)" ng-model="groupProperties[layer.group].visible"/> <i class="lf-icon lf-icon-check" ng-class="getGroupIcon(groupProperties[layer.group])"></i><div class="lf-text">{{ layer.group }}</div></label><label class="lf-icon-ol"><input class="lf-control-layers-selector" type="checkbox" ng-show="false" ng-model="layer.visible"/> <i class="lf-icon lf-icon-check" ng-class="layer.icon"></i><div class="lf-text">{{layer.name}}</div></label><div class="lf-icons"><i class="lf-icon lf-up" ng-class="icons.up" ng-click="moveLayer(layer, layer.index - orderNumber, $event)"></i> <i class="lf-icon lf-down" ng-class="icons.down" ng-click="moveLayer(layer, layer.index + orderNumber, $event)"></i> <i class="lf-icon lf-toggle-legend" ng-class="icons.toggleLegend" ng-if="layer.legend" ng-click="toggleLegend(layer)"></i> <i class="lf-icon lf-open" ng-class="getOpacityIcon(layer)" ng-click="toggleOpacity($event, layer)"></i></div><div class="lf-legend" ng-if="showLegend(layer)" ng-bind-html="unsafeHTML(layer.legend)"></div><div class="lf-opacity clearfix" ng-if="layer.visible &amp;&amp; layerProperties[layer.name].opacityControl"><label ng-if="rangeIsSupported" class="pull-left" style="width: 50%">0</label><label ng-if="rangeIsSupported" class="pull-left text-right" style="width: 50%">100</label><input ng-if="rangeIsSupported" class="clearfix" type="range" min="0" max="1" step="0.05" class="lf-opacity-control" ng-model="layerProperties[layer.name].layerOptions.opacity"/><h6 ng-if="!rangeIsSupported">Range is not supported in this browser</h6></div></div></div></div></div>', link: function link(b, c, f, g) {
        var h = e.isDefined,
            i = g.getLeafletScope(),
            j = i.layers;b.$watch("icons", function () {
          var c = { uncheck: "fa fa-square-o", check: "fa fa-check-square-o", radio: "fa fa-dot-circle-o", unradio: "fa fa-circle-o", up: "fa fa-angle-up", down: "fa fa-angle-down", open: "fa fa-angle-double-down", close: "fa fa-angle-double-up", toggleLegend: "fa fa-pencil-square-o" };h(b.icons) ? (a.extend(c, b.icons), a.extend(b.icons, c)) : b.icons = c;
        }), f.order = !h(f.order) || "normal" !== f.order && "reverse" !== f.order ? "normal" : f.order, b.order = "normal" === f.order, b.orderNumber = "normal" === f.order ? -1 : 1, b.layers = j, g.getMap().then(function (a) {
          i.$watch("layers.baselayers", function (c) {
            var e = {};d.getLayers().then(function (d) {
              var f;for (f in c) {
                var g = c[f];g.icon = b.icons[a.hasLayer(d.baselayers[f]) ? "radio" : "unradio"], e[f] = g;
              }b.baselayersArray = e;
            });
          }), i.$watch("layers.overlays", function (a) {
            var c = [],
                e = {};d.getLayers().then(function () {
              var d;for (d in a) {
                var f = a[d];f.icon = b.icons[f.visible ? "check" : "uncheck"], c.push(f), h(b.layerProperties[f.name]) || (h(f.layerOptions.opacity) && (f.layerOptions.opacity = 1), b.layerProperties[f.name] = { opacityControl: !1, showLegend: !0, layerOptions: f.layerOptions }), h(f.group) && (h(b.groupProperties[f.group]) || (b.groupProperties[f.group] = { visible: !1 }), e[f.group] = h(e[f.group]) ? e[f.group] : { count: 0, visibles: 0 }, e[f.group].count++, f.visible && e[f.group].visibles++);
              }for (d in e) {
                b.groupProperties[d].visible = e[d].visibles === e[d].count;
              }b.overlaysArray = c;
            });
          }, !0);
        });
      } };
  }]), a.module("ui-leaflet").directive("layers", ["leafletLogger", "$q", "leafletData", "leafletHelpers", "leafletLayerHelpers", "leafletControlHelpers", function (b, c, d, e, f, g) {
    return { restrict: "A", scope: !1, replace: !1, require: "leaflet", controller: ["$scope", function (a) {
        a._leafletLayers = c.defer(), this.getLayers = function () {
          return a._leafletLayers.promise;
        };
      }], link: function link(b, c, h, i) {
        var j = e.isDefined,
            k = {},
            l = i.getLeafletScope(),
            m = l.layers,
            n = f.createLayer,
            o = f.safeAddLayer,
            p = f.safeRemoveLayer,
            q = f.changeOpacityListener,
            r = g.updateLayersControl,
            s = !1;b.$on("$destroy", function () {
          g.destroyMapLayersControl(b.mapId);
        }), i.getMap().then(function (c) {
          b._leafletLayers.resolve(k), d.setLayers(k, h.id), k.baselayers = {}, k.overlays = {};var e = h.id,
              f = !1;for (var g in m.baselayers) {
            var i = n(m.baselayers[g]);j(i) ? (k.baselayers[g] = i, m.baselayers[g].top === !0 && (o(c, k.baselayers[g]), f = !0)) : delete m.baselayers[g];
          }!f && Object.keys(k.baselayers).length > 0 && o(c, k.baselayers[Object.keys(m.baselayers)[0]]);for (g in m.overlays) {
            "cartodb" === m.overlays[g].type;var t = n(m.overlays[g]);j(t) ? (k.overlays[g] = t, m.overlays[g].visible === !0 && o(c, k.overlays[g])) : delete m.overlays[g];
          }l.$watch("layers.baselayers", function (b, d) {
            if (a.equals(b, d)) return s = r(c, e, s, b, m.overlays, k), !0;for (var f in k.baselayers) {
              j(b[f]) && !b[f].doRefresh || (c.hasLayer(k.baselayers[f]) && c.removeLayer(k.baselayers[f]), delete k.baselayers[f], b[f] && b[f].doRefresh && (b[f].doRefresh = !1));
            }for (var g in b) {
              if (j(k.baselayers[g])) b[g].top !== !0 || c.hasLayer(k.baselayers[g]) ? b[g].top === !1 && c.hasLayer(k.baselayers[g]) && c.removeLayer(k.baselayers[g]) : o(c, k.baselayers[g]);else {
                var h = n(b[g]);j(h) && (k.baselayers[g] = h, b[g].top === !0 && o(c, k.baselayers[g]));
              }
            }var i = !1;for (var l in k.baselayers) {
              if (c.hasLayer(k.baselayers[l])) {
                i = !0;break;
              }
            }!i && Object.keys(k.baselayers).length > 0 && o(c, k.baselayers[Object.keys(k.baselayers)[0]]), s = r(c, e, s, b, m.overlays, k);
          }, !0), l.$watch("layers.overlays", function (b, d) {
            if (a.equals(b, d)) return s = r(c, e, s, m.baselayers, b, k), !0;for (var f in k.overlays) {
              if (!j(b[f]) || b[f].doRefresh) {
                if (c.hasLayer(k.overlays[f])) {
                  var g = j(b[f]) ? b[f].layerOptions : null;p(c, k.overlays[f], g);
                }delete k.overlays[f], b[f] && b[f].doRefresh && (b[f].doRefresh = !1);
              }
            }for (var h in b) {
              if (j(k.overlays[h])) {
                b[h].visible && !c.hasLayer(k.overlays[h]) ? o(c, k.overlays[h]) : b[h].visible === !1 && c.hasLayer(k.overlays[h]) && p(c, k.overlays[h], b[h].layerOptions);var i = k.overlays[h];c.hasLayer(k.overlays[h]) && (b[h].layerOptions.opacity !== d[h].layerOptions.opacity && (j(i.setOpacity) && i.setOpacity(b[h].layerOptions.opacity), j(i.getLayers) && j(i.eachLayer) && i.eachLayer(q(b[h].layerOptions.opacity))), j(b[h].index) && i.setZIndex && b[h].index !== d[h].index && i.setZIndex(b[h].index));
              } else {
                var l = n(b[h]);if (!j(l)) continue;k.overlays[h] = l, b[h].visible === !0 && o(c, k.overlays[h]), j(b[h].index) && k.overlays[h].setZIndex && k.overlays[h].setZIndex(b[h].index);
              }b[h].visible && c._loaded && b[h].data && "heatmap" === b[h].type && (k.overlays[h].setData(b[h].data), k.overlays[h].update());
            }s = r(c, e, s, m.baselayers, b, k);
          }, !0);
        });
      } };
  }]), a.module("ui-leaflet").directive("legend", ["leafletLogger", "$http", "$timeout", "leafletHelpers", "leafletLegendHelpers", function (a, b, c, d, e) {
    var f = a,
        g = d.errorHeader + " [Legend] ";return { restrict: "A", scope: !1, replace: !1, require: "leaflet", transclude: !1, link: function link(a, b, c, h) {
        var i,
            j,
            k,
            l,
            m = d.isArray,
            n = d.isString,
            o = d.isDefined,
            p = d.isFunction,
            q = h.getLeafletScope(),
            r = q.legend;q.$watch("legend", function (a) {
          o(a) && (i = a.legendClass ? a.legendClass : "legend", j = a.position || "bottomright", l = a.type || "arcgis");
        }, !0);var s = function s(a, b, c) {
          b && b.layers && b.layers.length > 0 && (o(k) ? e.updateLegend(k.getContainer(), b, l, c) : (k = L.control({ position: j }), k.onAdd = e.getOnAddLegend(b, i, l, c), k.addTo(a)), o(r.loadedData) && p(r.loadedData) && r.loadedData());
        };h.getMap().then(function (a) {
          q.$watch("legend", function (b) {
            return o(b) ? o(b.url) || "arcgis" !== l || m(b.colors) && m(b.labels) && b.colors.length === b.labels.length ? o(b.url) ? void f.info(g + " loading legend service.") : (o(k) && (k.removeFrom(a), k = null), k = L.control({ position: j }), "arcgis" === l && (k.onAdd = e.getOnAddArrayLegend(b, i)), void k.addTo(a)) : void f.warn(g + " legend.colors and legend.labels must be set.") : void (o(k) && (k.removeFrom(a), k = null));
          }), q.$watch("legend.url", function (b) {
            if (o(b)) {
              if (!m(b) && !n(b)) return void f.warn(g + " legend.url must be an array or string.");for (var d, h = n(b) ? [b] : b, i = function i(c, e) {
                return function (i) {
                  o(i.data.error) ? f.warn(g + "Error loadin legend from: " + e, i.data.error.message) : d && d.layers && d.layers.length > 0 ? d.layers = d.layers.concat(i.data.layers) : d = i.data, c === h.length - 1 && s(a, d, b);
                };
              }, j = function j(a) {
                f.warn(g + " legend.url not loaded.", a);
              }, k = 0; k < h.length; k++) {
                e.addLegendURL(c.id, { url: h[k], method: "GET" }).then(i(k)).catch(j);
              }
            }
          }), q.$watch("legend.legendData", function (b) {
            f.debug("legendData", b), !o(q.legend.url) && o(b) && s(a, b);
          }, !0);
        });
      } };
  }]), a.module("ui-leaflet").directive("markers", ["leafletLogger", "$rootScope", "$q", "leafletData", "leafletHelpers", "leafletMapDefaults", "leafletMarkersHelpers", "leafletMarkerEvents", "leafletIterators", "leafletWatchHelpers", "leafletDirectiveControlsHelpers", function (b, c, d, e, f, g, h, i, j, k, l) {
    var m = f.isDefined,
        n = f.errorHeader,
        o = f,
        p = f.isString,
        q = h.addMarkerWatcher,
        r = h.updateMarker,
        s = h.listenMarkerEvents,
        t = h.addMarkerToGroup,
        u = h.createMarker,
        v = h.deleteMarker,
        w = h.getModelFromModels,
        x = h.getLayerModels,
        y = h.resetUnusedMarkerGroups,
        z = j,
        A = f.watchOptions,
        B = k.maybeWatch,
        C = l.extend,
        D = b,
        E = { changeFromDirective: !1 },
        F = function F(a, b, c) {
      if (Object.keys(a).length) {
        if (c && p(c)) {
          if (!a[c] || !Object.keys(a[c]).length) return;return a[c][b];
        }return a[b];
      }
    },
        G = function G(a, b, c, d) {
      return d && p(d) ? (m(b[d]) || (b[d] = {}), b[d][c] = a) : b[c] = a, a;
    },
        H = function H(a, b, c, d, e, f) {
      if (!p(a)) return D.error(n + " A layername must be a string"), !1;if (!m(b)) return D.error(n + " You must add layers to the directive if the markers are going to use this functionality."), !1;if (!m(b.overlays) || !m(b.overlays[a])) return D.error(n + ' A marker can only be added to a layer of type "group"'), !1;var g = b.overlays[a];return g instanceof L.LayerGroup || g instanceof L.FeatureGroup ? (g.addLayer(d), null === e && f.hasLayer(d) && c.focus === !0 && d.openPopup(), !0) : (D.error(n + ' Adding a marker to an overlay needs a overlay of the type "group" or "featureGroup"'), !1);
    },
        I = function I(a, b, c, d, e, f, g, h, j, k) {
      z.each(b, function (b, l) {
        if (!k[l]) {
          if (l.search("-") !== -1) return void D.error('The marker can\'t use a "-" on his key name: "' + l + '".');var p = o.getObjectDotPath(j ? [j, l] : [l]),
              v = F(f, l, j);o.modelChangeInDirective(E, "changeFromDirective", function () {
            if (m(v)) {
              var k = w(c, l, j);r(b, k, v, p, g, e, d);
            } else {
              var x = u(b),
                  y = (b ? b.layer : void 0) || j;if (!m(x)) return void D.error(n + " Received invalid data on the marker " + l + ".");if (G(x, f, l, j), m(b.message) && x.bindPopup(b.message, b.popupOptions), m(b.group)) {
                var z = m(b.groupOption) ? b.groupOption : null;t(x, b.group, z, d);
              }if (o.LabelPlugin.isLoaded() && m(b.label) && m(b.label.message) && x.bindLabel(b.label.message, b.label.options), m(b) && (m(b.layer) || m(j))) {
                var A = H(y, e, b, x, h.individual.type, d);if (!A) return;
              } else m(b.group) || (d.addLayer(x), null === h.individual.type && b.focus === !0 && x.openPopup());null !== h.individual.type && q(x, p, g, e, d, h.individual), s(x, b, g, h.individual.type, d), i.bindEvents(a, x, p, b, g, y);
            }
          });
        }
      });
    },
        J = function J(b, c, d, e, f) {
      var g,
          h,
          i = !1,
          j = !1,
          k = m(c);for (var l in d) {
        i || (D.debug(n + "[markers] destroy: "), i = !0), k && (h = b[l], g = c[l], j = e && a.equals(h, g)), m(b) && Object.keys(b).length && m(b[l]) && Object.keys(b[l]).length && !j || f && o.isFunction(f) && f(h, g, l);
      }
    },
        K = function K(a, b, c, d, e) {
      J(a, b, c, !1, function (a, b, f) {
        D.debug(n + "[marker] is deleting marker: " + f), v(c[f], d, e), delete c[f];
      });
    },
        M = function M(a, b, c) {
      var d = {};return J(a, b, c, !0, function (a, b, c) {
        D.debug(n + "[marker] is already rendered, marker: " + c), d[c] = a;
      }), d;
    };return { restrict: "A", scope: !1, replace: !1, require: ["leaflet", "?layers"], link: function link(a, b, c, f) {
        var g = f[0],
            h = g.getLeafletScope();g.getMap().then(function (b) {
          var g,
              i = {};g = m(f[1]) ? f[1].getLayers : function () {
            var a = d.defer();return a.resolve(), a.promise;
          };var j;j = h.watchOptions && h.watchOptions.markers ? h.watchOptions.markers : A;var k = m(c.markersNested) && o.isTruthy(c.markersNested);g().then(function (d) {
            var f = function f(a, c) {
              return y(), k ? void z.each(a, function (a, e) {
                var f = x(c, e);K(a, f, i[e], b, d);
              }) : void K(a, c, i, b, d);
            },
                g = function g(a, e) {
              f(a, e);var g = null;return k ? void z.each(a, function (f, k) {
                var l = x(e, k),
                    m = x(a, k);g = M(m, l, i[k]), I(c.id, f, e, b, d, i, h, j, k, g);
              }) : (g = M(a, e, i), void I(c.id, a, e, b, d, i, h, j, void 0, g));
            };C(c.id, "markers", g, f), e.setMarkers(i, c.id), B(h, "markers", j, function (a, b) {
              E.changeFromDirective || g(a, b);
            }), a.$on("$destroy", function () {
              K(h.markers, {}, i, b, d);
            });
          });
        });
      } };
  }]), a.module("ui-leaflet").directive("maxbounds", ["leafletLogger", "leafletMapDefaults", "leafletBoundsHelpers", "leafletHelpers", function (a, b, c, d) {
    return { restrict: "A", scope: !1, replace: !1, require: "leaflet", link: function link(a, b, e, f) {
        var g = f.getLeafletScope(),
            h = c.isValidBounds,
            i = d.isNumber;f.getMap().then(function (a) {
          g.$watch("maxbounds", function (b) {
            if (!h(b)) return void a.setMaxBounds();var d = c.createLeafletBounds(b);i(b.pad) && (d = d.pad(b.pad)), a.setMaxBounds(d), e.center || e.lfCenter || a.fitBounds(d);
          });
        });
      } };
  }]), a.module("ui-leaflet").directive("paths", ["leafletLogger", "$q", "leafletData", "leafletMapDefaults", "leafletHelpers", "leafletPathsHelpers", "leafletPathEvents", "leafletWatchHelpers", function (a, b, c, d, e, f, g, h) {
    var i = a;return { restrict: "A", scope: !1, replace: !1, require: ["leaflet", "?layers"], link: function link(a, j, k, l) {
        var m = l[0],
            n = e.isDefined,
            o = e.isString,
            p = m.getLeafletScope(),
            q = p.paths,
            r = f.createPath,
            s = g.bindPathEvents,
            t = f.setPathOptions,
            u = h.maybeWatch;m.getMap().then(function (a) {
          var f,
              g = d.getDefaults(k.id);if (f = n(l[1]) ? l[1].getLayers : function () {
            var a = b.defer();return a.resolve(), a.promise;
          }, n(q)) {
            var h,
                j = { type: "watchCollection", individual: { type: "watchDeep" } };h = p.watchOptions && p.watchOptions.paths ? p.watchOptions.paths : j, f().then(function (b) {
              var d = {};c.setPaths(d, k.id);var f = function f(c, d, e) {
                var f = 'paths["' + d + '"]';u(p, f, e, function (d, e, f) {
                  if (!n(d)) {
                    if (n(e.layer)) for (var g in b.overlays) {
                      var h = b.overlays[g];h.removeLayer(c);
                    }return a.removeLayer(c), void f();
                  }t(c, d.type, d);
                });
              },
                  j = function j(b) {
                for (var c in d) {
                  n(b[c]) || (a.removeLayer(d[c]), delete d[c]);
                }
              },
                  l = function l(c) {
                j(c);for (var l in c) {
                  if (0 !== l.search("\\$")) if (l.search("-") === -1) {
                    if (!n(d[l])) {
                      var m = c[l],
                          q = r(l, c[l], g);if (n(q) && n(m.message) && q.bindPopup(m.message, m.popupOptions), e.LabelPlugin.isLoaded() && n(m.label) && n(m.label.message) && q.bindLabel(m.label.message, m.label.options), n(m) && n(m.layer)) {
                        if (!o(m.layer)) {
                          i.error("[AngularJS - Leaflet] A layername must be a string");continue;
                        }if (!n(b)) {
                          i.error("[AngularJS - Leaflet] You must add layers to the directive if the markers are going to use this functionality.");continue;
                        }if (!n(b.overlays) || !n(b.overlays[m.layer])) {
                          i.error('[AngularJS - Leaflet] A path can only be added to a layer of type "group"');continue;
                        }var u = b.overlays[m.layer];if (!(u instanceof L.LayerGroup || u instanceof L.FeatureGroup)) {
                          i.error('[AngularJS - Leaflet] Adding a path to an overlay needs a overlay of the type "group" or "featureGroup"');continue;
                        }d[l] = q, u.addLayer(q), null !== h.individual.type ? f(q, l, h.individual) : t(q, m.type, m);
                      } else n(q) && (d[l] = q, a.addLayer(q), null !== h.individual.type ? f(q, l, h.individual) : t(q, m.type, m));s(k.id, q, l, m, p);
                    }
                  } else i.error('[AngularJS - Leaflet] The path name "' + l + '" is not valid. It must not include "-" and a number.');
                }
              };u(p, "paths", h, function (a) {
                l(a);
              });
            });
          }
        });
      } };
  }]), a.module("ui-leaflet").directive("tiles", ["leafletLogger", "leafletData", "leafletMapDefaults", "leafletHelpers", function (b, c, d, e) {
    var f = b;return { restrict: "A", scope: !1, replace: !1, require: "leaflet", link: function link(b, g, h, i) {
        var j = e.isDefined,
            k = i.getLeafletScope(),
            l = k.tiles;return j(l) && j(l.url) ? void i.getMap().then(function (b) {
          var e,
              f = d.getDefaults(h.id);k.$watch("tiles", function (d) {
            var g = f.tileLayerOptions,
                i = f.tileLayer;return !j(d.url) && j(e) ? void b.removeLayer(e) : j(e) ? j(d.url) && j(d.options) && !a.equals(d.options, g) ? (b.removeLayer(e), g = f.tileLayerOptions, a.copy(d.options, g), i = d.url, e = L.tileLayer(i, g), e.addTo(b), void c.setTiles(e, h.id)) : void (j(d.url) && e.setUrl(d.url)) : (j(d.options) && a.copy(d.options, g), j(d.url) && (i = d.url), e = L.tileLayer(i, g), e.addTo(b), void c.setTiles(e, h.id));
          }, !0);
        }) : void f.warn("[AngularJS - Leaflet] The 'tiles' definition doesn't have the 'url' property.");
      } };
  }]), a.module("ui-leaflet").directive("watchOptions", ["$log", "$rootScope", "$q", "leafletData", "leafletHelpers", function (b, c, d, e, f) {
    var g = f.isDefined,
        h = f.errorHeader,
        i = f.isObject,
        j = b;return { restrict: "A", scope: !1, replace: !1, require: ["leaflet"], link: function link(b, c, d, e) {
        var f = e[0],
            k = f.getLeafletScope(),
            l = function l(a) {
          return "watch" === a || "watchCollection" === a || "watchDeep" === a || null === a;
        };g(k.watchOptions) && i(k.watchOptions) && a.forEach(["markers", "geojson", "paths"], function (a) {
          g(k.watchOptions[a]) && (l(k.watchOptions[a].type) || j.error(h + " watchOptions." + a + ".type is not a valid type."), g(k.watchOptions[a].individual) ? l(k.watchOptions[a].individual.type) || j.error(h + " watchOptions." + a + ".individual.type is not a valid type.") : j.error(h + " watchOptions." + a + ".type.individual must be defined."));
        });
      } };
  }]), a.module("ui-leaflet").factory("leafletEventsHelpersFactory", ["$rootScope", "$q", "leafletLogger", "leafletHelpers", function (b, c, d, e) {
    var f = e.safeApply,
        g = e.isDefined,
        h = e.isObject,
        i = e.isArray,
        j = e.errorHeader,
        k = d,
        l = function l(a, b) {
      this.rootBroadcastName = a, k.debug("leafletEventsHelpersFactory: lObjectType: " + b + "rootBroadcastName: " + a), this.lObjectType = b;
    };return l.prototype.getAvailableEvents = function () {
      return [];
    }, l.prototype.genDispatchEvent = function (a, b, c, d, e, f, g, h, i) {
      var j = this;return a = a || "", a && (a = "." + a), function (l) {
        var m = j.rootBroadcastName + a + "." + b;k.debug(m), j.fire(d, m, c, l, l.target || e, g, f, h, i);
      };
    }, l.prototype.fire = function (c, d, e, h, i, j, k, l, m) {
      f(c, function () {
        var f = { leafletEvent: h, leafletObject: i, modelName: k, model: j };g(l) && a.extend(f, { layerName: l }), "emit" === e ? c.$emit(d, f) : b.$broadcast(d, f);
      });
    }, l.prototype.bindEvents = function (a, b, c, d, e, f, l) {
      var m = [],
          n = "emit",
          o = this;if (g(e.eventBroadcast)) {
        if (h(e.eventBroadcast)) {
          if (g(e.eventBroadcast[o.lObjectType])) {
            if (h(e.eventBroadcast[o.lObjectType])) {
              g(e.eventBroadcast[this.lObjectType].logic) && "emit" !== e.eventBroadcast[o.lObjectType].logic && "broadcast" !== e.eventBroadcast[o.lObjectType].logic && k.warn(j + "Available event propagation logic are: 'emit' or 'broadcast'.");var p = !1,
                  q = !1;g(e.eventBroadcast[o.lObjectType].enable) && i(e.eventBroadcast[o.lObjectType].enable) && (p = !0), g(e.eventBroadcast[o.lObjectType].disable) && i(e.eventBroadcast[o.lObjectType].disable) && (q = !0), p && q ? k.warn(j + "can not enable and disable events at the same time") : p || q ? p ? e.eventBroadcast[this.lObjectType].enable.forEach(function (a) {
                m.indexOf(a) !== -1 ? k.warn(j + "This event " + a + " is already enabled") : o.getAvailableEvents().indexOf(a) === -1 ? k.warn(j + "This event " + a + " does not exist") : m.push(a);
              }) : (m = this.getAvailableEvents(), e.eventBroadcast[o.lObjectType].disable.forEach(function (a) {
                var b = m.indexOf(a);b === -1 ? k.warn(j + "This event " + a + " does not exist or has been already disabled") : m.splice(b, 1);
              })) : k.warn(j + "must enable or disable events");
            } else k.warn(j + "event-broadcast." + [o.lObjectType] + " must be an object check your model.");
          } else m = this.getAvailableEvents();
        } else k.error(j + "event-broadcast must be an object check your model.");
      } else m = this.getAvailableEvents();return m.forEach(function (g) {
        b.on(g, o.genDispatchEvent(a, g, n, e, b, c, d, f, l));
      }), n;
    }, l;
  }]).service("leafletEventsHelpers", ["leafletEventsHelpersFactory", function (a) {
    return new a();
  }]), a.module("ui-leaflet").factory("leafletGeoJsonEvents", ["$rootScope", "$q", "leafletLogger", "leafletHelpers", "leafletEventsHelpersFactory", "leafletData", function (a, b, c, d, e, f) {
    var g = d.safeApply,
        h = e,
        i = function i() {
      h.call(this, "leafletDirectiveGeoJson", "geojson");
    };return i.prototype = new h(), i.prototype.genDispatchEvent = function (b, c, d, e, i, j, k, l, m) {
      var n = h.prototype.genDispatchEvent.call(this, b, c, d, e, i, j, k, l),
          o = this;return function (b) {
        "mouseout" === c && (m.resetStyleOnMouseout && f.getGeoJSON(m.mapId).then(function (a) {
          var c = l ? a[l] : a;c.resetStyle(b.target);
        }), g(e, function () {
          a.$broadcast(o.rootBroadcastName + ".mouseout", b);
        })), n(b);
      };
    }, i.prototype.getAvailableEvents = function () {
      return ["click", "dblclick", "mouseover", "mouseout"];
    }, new i();
  }]), a.module("ui-leaflet").factory("leafletLabelEvents", ["$rootScope", "$q", "leafletLogger", "leafletHelpers", "leafletEventsHelpersFactory", function (a, b, c, d, e) {
    var f = d,
        g = e,
        h = function h() {
      g.call(this, "leafletDirectiveLabel", "markers");
    };return h.prototype = new g(), h.prototype.genDispatchEvent = function (a, b, c, d, e, f, h, i) {
      var j = f.replace("markers.", "");return g.prototype.genDispatchEvent.call(this, a, b, c, d, e, j, h, i);
    }, h.prototype.getAvailableEvents = function () {
      return ["click", "dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
    }, h.prototype.genEvents = function (a, b, c, d, e, g, h, i) {
      var j = this,
          k = this.getAvailableEvents(),
          l = f.getObjectArrayPath("markers." + g);k.forEach(function (b) {
        e.label.on(b, j.genDispatchEvent(a, b, c, d, e.label, l, h, i));
      });
    }, h.prototype.bindEvents = function (a, b, c, d, e, f) {}, new h();
  }]), a.module("ui-leaflet").factory("leafletMapEvents", ["$rootScope", "$q", "leafletLogger", "leafletHelpers", "leafletEventsHelpers", "leafletIterators", function (a, b, c, d, e, f) {
    var g = d.isDefined,
        h = e.fire,
        i = function i() {
      return ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "contextmenu", "focus", "blur", "preclick", "load", "unload", "viewreset", "movestart", "move", "moveend", "dragstart", "drag", "dragend", "zoomstart", "zoomanim", "zoomend", "zoomlevelschange", "resize", "autopanstart", "layeradd", "layerremove", "baselayerchange", "overlayadd", "overlayremove", "locationfound", "locationerror", "popupopen", "popupclose", "draw:created", "draw:edited", "draw:deleted", "draw:drawstart", "draw:drawstop", "draw:editstart", "draw:editstop", "draw:deletestart", "draw:deletestop"];
    },
        j = function j(a, b, d, e) {
      return e && (e += "."), function (f) {
        var g = "leafletDirectiveMap." + e + b;c.debug(g), h(a, g, d, f, f.target, a);
      };
    },
        k = function k(a) {
      a.$broadcast("boundsChanged");
    },
        l = function l(a, b, c, d) {
      if (g(c.urlHashCenter)) {
        var e = b.getCenter(),
            f = e.lat.toFixed(4) + ":" + e.lng.toFixed(4) + ":" + b.getZoom();g(d.c) && d.c === f || a.$emit("centerUrlHash", f);
      }
    },
        m = function m(a, b, c, d, e, g) {
      f.each(c, function (c) {
        var f = {};f[d] = c, b || (b = a._container.id || ""), a.on(c, j(e, c, g, b), f);
      });
    };return { getAvailableMapEvents: i, genDispatchMapEvent: j, notifyCenterChangedToBounds: k, notifyCenterUrlHashChanged: l, addEvents: m };
  }]), a.module("ui-leaflet").factory("leafletMarkerEvents", ["$rootScope", "$q", "leafletLogger", "leafletHelpers", "leafletEventsHelpersFactory", "leafletLabelEvents", function (a, b, c, d, e, f) {
    var g = d.safeApply,
        h = d.isDefined,
        i = d,
        j = f,
        k = e,
        l = function l() {
      k.call(this, "leafletDirectiveMarker", "markers");
    };return l.prototype = new k(), l.prototype.genDispatchEvent = function (b, c, d, e, f, h, i, j) {
      var l = k.prototype.genDispatchEvent.call(this, b, c, d, e, f, h, i, j);return function (b) {
        "click" === c ? g(e, function () {
          a.$broadcast("leafletDirectiveMarkersClick", h);
        }) : "dragend" === c && (g(e, function () {
          i.lat = f.getLatLng().lat, i.lng = f.getLatLng().lng;
        }), i.message && i.focus === !0 && f.openPopup()), l(b);
      };
    }, l.prototype.getAvailableEvents = function () {
      return ["click", "dblclick", "mousedown", "mouseover", "mouseout", "contextmenu", "dragstart", "drag", "dragend", "move", "remove", "popupopen", "popupclose", "touchend", "touchstart", "touchmove", "touchcancel", "touchleave"];
    }, l.prototype.bindEvents = function (a, b, c, d, e, f) {
      var g = k.prototype.bindEvents.call(this, a, b, c, d, e, f);i.LabelPlugin.isLoaded() && h(b.label) && j.genEvents(a, c, g, e, b, d, f);
    }, new l();
  }]);var d = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (a) {
    return typeof a === "undefined" ? "undefined" : _typeof(a);
  } : function (a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a === "undefined" ? "undefined" : _typeof(a);
  };a.module("ui-leaflet").factory("leafletPathEvents", ["$rootScope", "$q", "leafletLogger", "leafletHelpers", "leafletLabelEvents", "leafletEventsHelpers", function (a, b, c, e, f, g) {
    var h = e.isDefined,
        i = e.isObject,
        j = e,
        k = e.errorHeader,
        l = f,
        m = g.fire,
        n = c,
        o = function o(a, b, c, d, e, f, g, h) {
      return a = a || "", a && (a = "." + a), function (i) {
        var j = "leafletDirectivePath" + a + "." + b;n.debug(j), m(d, j, c, i, i.target || e, g, f, h);
      };
    },
        p = function p(a, b, c, e, f) {
      var g,
          m,
          p = [],
          r = "broadcast";if (h(f.eventBroadcast)) {
        if (i(f.eventBroadcast)) {
          if (h(f.eventBroadcast.path)) {
            if (i(f.eventBroadcast.paths)) n.warn(k + "event-broadcast.path must be an object check your model.");else {
              void 0 !== f.eventBroadcast.path.logic && null !== f.eventBroadcast.path.logic && ("emit" !== f.eventBroadcast.path.logic && "broadcast" !== f.eventBroadcast.path.logic ? n.warn(k + "Available event propagation logic are: 'emit' or 'broadcast'.") : "emit" === f.eventBroadcast.path.logic && (r = "emit"));var s = !1,
                  t = !1;if (void 0 !== f.eventBroadcast.path.enable && null !== f.eventBroadcast.path.enable && "object" === d(f.eventBroadcast.path.enable) && (s = !0), void 0 !== f.eventBroadcast.path.disable && null !== f.eventBroadcast.path.disable && "object" === d(f.eventBroadcast.path.disable) && (t = !0), s && t) n.warn(k + "can not enable and disable events at the same time");else if (s || t) {
                if (s) for (g = 0; g < f.eventBroadcast.path.enable.length; g++) {
                  m = f.eventBroadcast.path.enable[g], p.indexOf(m) !== -1 ? n.warn(k + "This event " + m + " is already enabled") : q().indexOf(m) === -1 ? n.warn(k + "This event " + m + " does not exist") : p.push(m);
                } else for (p = q(), g = 0; g < f.eventBroadcast.path.disable.length; g++) {
                  m = f.eventBroadcast.path.disable[g];var u = p.indexOf(m);u === -1 ? n.warn(k + "This event " + m + " does not exist or has been already disabled") : p.splice(u, 1);
                }
              } else n.warn(k + "must enable or disable events");
            }
          } else p = q();
        } else n.error(k + "event-broadcast must be an object check your model.");
      } else p = q();for (g = 0; g < p.length; g++) {
        m = p[g], b.on(m, o(a, m, r, f, p, c));
      }j.LabelPlugin.isLoaded() && h(b.label) && l.genEvents(a, c, r, f, b, e);
    },
        q = function q() {
      return ["click", "dblclick", "mousedown", "mouseover", "mouseout", "contextmenu", "add", "remove", "popupopen", "popupclose"];
    };return { getAvailablePathEvents: q, bindPathEvents: p };
  }]);
}(angular);

//# sourceMappingURL=ui-leaflet.min-compiled.js.map