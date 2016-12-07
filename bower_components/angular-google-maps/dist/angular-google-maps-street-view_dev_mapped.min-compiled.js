"use strict";

/*! angular-google-maps 2.4.0 2016-09-19
 *  AngularJS directives for Google Maps
 *  git: https://github.com/angular-ui/angular-google-maps.git
 */

!function (a, b, c, d) {
  "use strict";
  (function () {
    b.module("uiGmapgoogle-maps.providers", ["nemLogging"]), b.module("uiGmapgoogle-maps.wrapped", []), b.module("uiGmapgoogle-maps.extensions", ["uiGmapgoogle-maps.wrapped", "uiGmapgoogle-maps.providers"]), b.module("uiGmapgoogle-maps.directives.api.utils", ["uiGmapgoogle-maps.extensions"]), b.module("uiGmapgoogle-maps.directives.api.managers", []), b.module("uiGmapgoogle-maps.directives.api.options", ["uiGmapgoogle-maps.directives.api.utils"]), b.module("uiGmapgoogle-maps.directives.api.options.builders", []), b.module("uiGmapgoogle-maps.directives.api.models.child", ["uiGmapgoogle-maps.directives.api.utils", "uiGmapgoogle-maps.directives.api.options", "uiGmapgoogle-maps.directives.api.options.builders"]), b.module("uiGmapgoogle-maps.directives.api.models.parent", ["uiGmapgoogle-maps.directives.api.managers", "uiGmapgoogle-maps.directives.api.models.child", "uiGmapgoogle-maps.providers"]), b.module("uiGmapgoogle-maps.directives.api", ["uiGmapgoogle-maps.directives.api.models.parent"]), b.module("uiGmapgoogle-maps", ["uiGmapgoogle-maps.directives.api", "uiGmapgoogle-maps.providers"]);
  }).call(this), b.module("uiGmapgoogle-maps.wrapped").service("uiGmapuuid", function () {
    function a() {}return a.generate = function () {
      var b = a._gri,
          c = a._ha;return c(b(32), 8) + "-" + c(b(16), 4) + "-" + c(16384 | b(12), 4) + "-" + c(32768 | b(14), 4) + "-" + c(b(48), 12);
    }, a._gri = function (a) {
      return 0 > a ? NaN : 30 >= a ? 0 | Math.random() * (1 << a) : 53 >= a ? (0 | 1073741824 * Math.random()) + 1073741824 * (0 | Math.random() * (1 << a - 30)) : NaN;
    }, a._ha = function (a, b) {
      for (var c = a.toString(16), d = b - c.length, e = "0"; 0 < d; d >>>= 1, e += e) {
        1 & d && (c = e + c);
      }return c;
    }, a;
  }), function () {
    b.module("uiGmapgoogle-maps.providers").factory("uiGmapMapScriptLoader", ["$q", "uiGmapuuid", function (d, e) {
      var f, g, h, i, j;return i = void 0, j = void 0, f = function f(a) {
        return a.china ? "http://maps.google.cn/maps/api/js?" : "auto" === a.transport ? "//maps.googleapis.com/maps/api/js?" : a.transport + "://maps.googleapis.com/maps/api/js?";
      }, g = function g(a) {
        var b, d, g, h;return b = ["transport", "isGoogleMapsForWork", "china", "preventLoad"], a.isGoogleMapsForWork && b.push("key"), d = c.map(c.omit(a, b), function (a, b) {
          return b + "=" + a;
        }), i && (h = document.getElementById(i), h.parentNode.removeChild(h)), d = d.join("&"), g = document.createElement("script"), g.id = i = "ui_gmap_map_load_" + e.generate(), g.type = "text/javascript", g.src = f(a) + d, document.head.appendChild(g);
      }, h = function h() {
        return b.isDefined(a.google) && b.isDefined(a.google.maps);
      }, { load: function load(b) {
          var c, e;return c = d.defer(), h() ? (c.resolve(a.google.maps), c.promise) : (e = b.callback = "onGoogleMapsReady" + Math.round(1e3 * Math.random()), a[e] = function () {
            a[e] = null, c.resolve(a.google.maps);
          }, a.navigator.connection && a.Connection && a.navigator.connection.type === a.Connection.NONE && !b.preventLoad ? document.addEventListener("online", function () {
            if (!h()) return g(b);
          }) : b.preventLoad || g(b), j = b, j.randomizedFunctionName = e, c.promise);
        }, manualLoad: function manualLoad() {
          var b;return b = j, h() ? a[b.randomizedFunctionName] ? a[b.randomizedFunctionName]() : void 0 : g(b);
        } };
    }]).provider("uiGmapGoogleMapApi", function () {
      return this.options = { transport: "https", isGoogleMapsForWork: !1, china: !1, v: "3", libraries: "", language: "en", preventLoad: !1 }, this.configure = function (a) {
        b.extend(this.options, a);
      }, this.$get = ["uiGmapMapScriptLoader", function (a) {
        return function (b) {
          return b.load(a.options);
        };
      }(this)], this;
    }).service("uiGmapGoogleMapApiManualLoader", ["uiGmapMapScriptLoader", function (a) {
      return { load: function load() {
          a.manualLoad();
        } };
    }]);
  }.call(this), function () {
    b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapLogger", ["nemSimpleLogger", function (a) {
      return a.spawn();
    }]);
  }.call(this), function () {
    b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapGmapUtil", ["uiGmapLogger", "$compile", function (a, d) {
      var e, f, g, h, i, j;return f = function f(a, b, c) {
        return a === b || c.indexOf(a) !== -1;
      }, e = function e(a) {
        return f(a, !1, ["false", "FALSE", 0, "n", "N", "no", "NO"]);
      }, h = function h(a) {
        return Array.isArray(a) && 2 === a.length ? a[1] : b.isDefined(a.type) && "Point" === a.type ? a.coordinates[1] : a.latitude;
      }, i = function i(a) {
        return Array.isArray(a) && 2 === a.length ? a[0] : b.isDefined(a.type) && "Point" === a.type ? a.coordinates[0] : a.longitude;
      }, g = function g(a) {
        if (a) return a instanceof google.maps.LatLng ? a : Array.isArray(a) && 2 === a.length ? new google.maps.LatLng(a[1], a[0]) : b.isDefined(a.type) && "Point" === a.type ? new google.maps.LatLng(a.coordinates[1], a.coordinates[0]) : new google.maps.LatLng(a.latitude, a.longitude);
      }, j = function j(a) {
        if (b.isUndefined(a)) return !1;if (c.isArray(a)) {
          if (2 === a.length) return !0;
        } else if (null != a && (null != a ? a.type : void 0) && "Point" === a.type && c.isArray(a.coordinates) && 2 === a.coordinates.length) return !0;return !(!a || !b.isDefined((null != a ? a.latitude : void 0) && b.isDefined(null != a ? a.longitude : void 0)));
      }, { setCoordsFromEvent: function setCoordsFromEvent(a, c) {
          if (a) return Array.isArray(a) && 2 === a.length ? (a[1] = c.lat(), a[0] = c.lng()) : b.isDefined(a.type) && "Point" === a.type ? (a.coordinates[1] = c.lat(), a.coordinates[0] = c.lng()) : (a.latitude = c.lat(), a.longitude = c.lng()), a;
        }, getLabelPositionPoint: function getLabelPositionPoint(a) {
          var b, c;if (void 0 !== a) return a = /^([-\d\.]+)\s([-\d\.]+)$/.exec(a), b = parseFloat(a[1]), c = parseFloat(a[2]), null != b && null != c ? new google.maps.Point(b, c) : void 0;
        }, createWindowOptions: function createWindowOptions(c, e, f, h) {
          var i;return null != f && null != h && null != d ? (i = b.extend({}, h, { content: this.buildContent(e, h, f), position: null != h.position ? h.position : b.isObject(c) ? c.getPosition() : g(e.coords) }), null != c && null == (null != i ? i.pixelOffset : void 0) && (null == i.boxClass || (i.pixelOffset = { height: 0, width: -2 })), i) : h ? h : (a.error("infoWindow defaults not defined"), f ? void 0 : a.error("infoWindow content not defined"));
        }, buildContent: function buildContent(a, b, c) {
          var e, f;return null != b.content ? f = b.content : null != d ? (c = c.replace(/^\s+|\s+$/g, ""), e = "" === c ? "" : d(c)(a), e.length > 0 && (f = e[0])) : f = c, f;
        }, defaultDelay: 50, isTrue: function isTrue(a) {
          return f(a, !0, ["true", "TRUE", 1, "y", "Y", "yes", "YES"]);
        }, isFalse: e, isFalsy: function isFalsy(a) {
          return f(a, !1, [void 0, null]) || e(a);
        }, getCoords: g, validateCoords: j, equalCoords: function equalCoords(a, b) {
          return h(a) === h(b) && i(a) === i(b);
        }, validatePath: function validatePath(a) {
          var d, e, f, g;if (e = 0, b.isUndefined(a.type)) {
            if (!Array.isArray(a) || a.length < 2) return !1;for (; e < a.length;) {
              if (!(b.isDefined(a[e].latitude) && b.isDefined(a[e].longitude) || "function" == typeof a[e].lat && "function" == typeof a[e].lng)) return !1;e++;
            }return !0;
          }if (b.isUndefined(a.coordinates)) return !1;if ("Polygon" === a.type) {
            if (a.coordinates[0].length < 4) return !1;d = a.coordinates[0];
          } else if ("MultiPolygon" === a.type) {
            if (g = { max: 0, index: 0 }, c.forEach(a.coordinates, function (a, b) {
              if (a[0].length > this.max) return this.max = a[0].length, this.index = b;
            }, g), f = a.coordinates[g.index], d = f[0], d.length < 4) return !1;
          } else {
            if ("LineString" !== a.type) return !1;if (a.coordinates.length < 2) return !1;d = a.coordinates;
          }for (; e < d.length;) {
            if (2 !== d[e].length) return !1;e++;
          }return !0;
        }, convertPathPoints: function convertPathPoints(a) {
          var d, e, f, g, h;if (e = 0, g = new google.maps.MVCArray(), b.isUndefined(a.type)) for (; e < a.length;) {
            b.isDefined(a[e].latitude) && b.isDefined(a[e].longitude) ? f = new google.maps.LatLng(a[e].latitude, a[e].longitude) : "function" == typeof a[e].lat && "function" == typeof a[e].lng && (f = a[e]), g.push(f), e++;
          } else for ("Polygon" === a.type ? d = a.coordinates[0] : "MultiPolygon" === a.type ? (h = { max: 0, index: 0 }, c.forEach(a.coordinates, function (a, b) {
            if (a[0].length > this.max) return this.max = a[0].length, this.index = b;
          }, h), d = a.coordinates[h.index][0]) : "LineString" === a.type && (d = a.coordinates); e < d.length;) {
            g.push(new google.maps.LatLng(d[e][1], d[e][0])), e++;
          }return g;
        }, getPath: function getPath(a, b) {
          var d;return null != b && c.isString(b) ? (d = a, c.each(b.split("."), function (a) {
            if (d) return d = d[a];
          }), d) : b;
        }, validateBoundPoints: function validateBoundPoints(a) {
          return !(b.isUndefined(a.sw.latitude) || b.isUndefined(a.sw.longitude) || b.isUndefined(a.ne.latitude) || b.isUndefined(a.ne.longitude));
        }, convertBoundPoints: function convertBoundPoints(a) {
          var b;return b = new google.maps.LatLngBounds(new google.maps.LatLng(a.sw.latitude, a.sw.longitude), new google.maps.LatLng(a.ne.latitude, a.ne.longitude));
        }, fitMapBounds: function fitMapBounds(a, b) {
          return a.fitBounds(b);
        } };
    }]);
  }.call(this), function () {
    b.module("uiGmapgoogle-maps.directives.api.utils").service("uiGmapEventsHelper", ["uiGmapLogger", function (a) {
      var d, e;return e = function e(a) {
        return b.isDefined(a.events) && null != a.events && b.isObject(a.events);
      }, d = function d(a, b) {
        return e(a) ? a : e(b) ? b : void 0;
      }, { setEvents: function setEvents(a, e, f, g) {
          var h;if (h = d(e, f), null != h) return c.compact(c.map(h.events, function (d, i) {
            var j;if (g && (j = c(g).includes(i)), h.events.hasOwnProperty(i) && b.isFunction(h.events[i]) && !j) return google.maps.event.addListener(a, i, function () {
              return e.$evalAsync || (e.$evalAsync = function () {}), e.$evalAsync(d.apply(e, [a, i, f, arguments]));
            });
          }));
        }, removeEvents: function removeEvents(a) {
          var b, c;if (a) for (b in a) {
            c = a[b], c && a.hasOwnProperty(b) && google.maps.event.removeListener(c);
          }
        } };
    }]);
  }.call(this), function () {
    b.module("uiGmapgoogle-maps").directive("uiGmapStreetViewPanorama", ["uiGmapGoogleMapApi", "uiGmapLogger", "uiGmapGmapUtil", "uiGmapEventsHelper", function (a, c, d, e) {
      var f;return f = "uiGmapStreetViewPanorama", { restrict: "EMA", template: '<div class="angular-google-map-street-view-panorama"></div>', replace: !0, scope: { focalcoord: "=", radius: "=?", events: "=?", options: "=?", control: "=?", povoptions: "=?", imagestatus: "=" }, link: function link(g, h, i) {
          return a.then(function (a) {
            return function (a) {
              var i, j, k, l, m, n, o, p, q, r;return p = void 0, r = void 0, k = !1, n = void 0, o = null, q = null, i = function i() {
                if (e.removeEvents(n), null != p && (p.unbind("position"), p.setVisible(!1)), null != r) return null != (null != r ? r.setVisible : void 0) && r.setVisible(!1), r = void 0;
              }, m = function m(a, c) {
                var d;return d = google.maps.geometry.spherical.computeHeading(a, c), k = !0, g.radius = g.radius || 50, q = b.extend({ heading: d, zoom: 1, pitch: 0 }, g.povoptions || {}), o = o = b.extend({ navigationControl: !1, addressControl: !1, linksControl: !1, position: a, pov: q, visible: !0 }, g.options || {}), k = !1;
              }, j = function j() {
                var a;return g.focalcoord ? g.radius ? (i(), null == r && (r = new google.maps.StreetViewService()), g.events && (n = e.setEvents(r, g, g)), a = d.getCoords(g.focalcoord), r.getPanoramaByLocation(a, g.radius, function (b, c) {
                  var d, e, f;if (null != g.imagestatus && (g.imagestatus = c), null != (null != (f = g.events) ? f.image_status_changed : void 0) && g.events.image_status_changed(r, "image_status_changed", g, c), "OK" === c) return e = b.location.latLng, m(e, a), d = h[0], p = new google.maps.StreetViewPanorama(d, o);
                })) : void c.error(f + ": needs a radius to set the camera view from its focal target.") : void c.error(f + ": focalCoord needs to be defined");
              }, null != g.control && (g.control.getOptions = function () {
                return o;
              }, g.control.getPovOptions = function () {
                return q;
              }, g.control.getGObject = function () {
                return r;
              }, g.control.getGPano = function () {
                return p;
              }), g.$watch("options", function (a, b) {
                if (a !== b && a !== o && !k) return j();
              }), l = !0, g.$watch("focalcoord", function (a, b) {
                if ((a !== b || l) && null != a) return l = !1, j();
              }), g.$on("$destroy", function () {
                return i();
              });
            };
          }(this));
        } };
    }]);
  }.call(this);
}(window, angular, _);
//# sourceMappingURL=angular-google-maps-street-view_dev_mapped.min.js.map

//# sourceMappingURL=angular-google-maps-street-view_dev_mapped.min-compiled.js.map