"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (e, n, t) {
  "use strict";
  function i(e, n) {
    function t(n) {
      var t = n[0].querySelector(a),
          i = n[0].querySelector(o);return t && n.addClass("md-icon-left"), i && n.addClass("md-icon-right"), function (n, t) {
        e(t);
      };
    }function i(e, t, i, r) {
      var a = this;a.isErrorGetter = i.mdIsError && n(i.mdIsError), a.delegateClick = function () {
        a.input.focus();
      }, a.element = t, a.setFocused = function (e) {
        t.toggleClass("md-input-focused", !!e);
      }, a.setHasValue = function (e) {
        t.toggleClass("md-input-has-value", !!e);
      }, a.setHasPlaceholder = function (e) {
        t.toggleClass("md-input-has-placeholder", !!e);
      }, a.setInvalid = function (e) {
        e ? r.addClass(t, "md-input-invalid") : r.removeClass(t, "md-input-invalid");
      }, e.$watch(function () {
        return a.label && a.input;
      }, function (e) {
        e && !a.label.attr("for") && a.label.attr("for", a.input.attr("id"));
      });
    }i.$inject = ["$scope", "$element", "$attrs", "$animate"];var r = ["INPUT", "TEXTAREA", "SELECT", "MD-SELECT"],
        a = r.reduce(function (e, n) {
      return e.concat(["md-icon ~ " + n, ".md-icon ~ " + n]);
    }, []).join(","),
        o = r.reduce(function (e, n) {
      return e.concat([n + " ~ md-icon", n + " ~ .md-icon"]);
    }, []).join(",");return { restrict: "E", compile: t, controller: i };
  }function r() {
    return { restrict: "E", require: "^?mdInputContainer", link: function link(e, n, t, i) {
        !i || t.mdNoFloat || n.hasClass("md-container-ignore") || (i.label = n, e.$on("$destroy", function () {
          i.label = null;
        }));
      } };
  }function a(e, t, i, r, a) {
    function o(o, s, u, l) {
      function d(e) {
        return p.setHasValue(!v.$isEmpty(e)), e;
      }function c() {
        p.label && u.$observe("required", function (e) {
          p.label.toggleClass("md-required", e && !C);
        });
      }function m() {
        p.setHasValue(s.val().length > 0 || (s[0].validity || {}).badInput);
      }function f() {
        function i() {
          s.attr("rows", 1).css("height", "auto").addClass("md-no-flex");var e = l();if (!w) {
            var n = s[0].style.padding || "";w = s.css("padding", 0).prop("offsetHeight"), s[0].style.padding = n;
          }if (h && w && (e = Math.max(e, w * h)), $ && w) {
            var t = w * $;t < e ? (s.attr("md-no-autogrow", ""), e = t) : s.removeAttr("md-no-autogrow");
          }w && s.attr("rows", Math.round(e / w)), s.css("height", e + "px").removeClass("md-no-flex");
        }function l() {
          var e = y.offsetHeight,
              n = y.scrollHeight - e;return e + Math.max(n, 0);
        }function d(n) {
          return e.nextTick(i), n;
        }function c() {
          if (f && (f = !1, n.element(t).off("resize", i), C && C(), s.attr("md-no-autogrow", "").off("input", i), g)) {
            var e = v.$formatters.indexOf(d);e > -1 && v.$formatters.splice(e, 1);
          }
        }function m() {
          function e(e) {
            e.preventDefault(), d = !0, m = e.clientY, f = parseFloat(s.css("height")) || s.prop("offsetHeight");
          }function t(e) {
            d && (e.preventDefault(), c(), g.addClass("md-input-resized"));
          }function i(e) {
            d && s.css("height", f + e.pointer.distanceY + "px");
          }function r(e) {
            d && (d = !1, g.removeClass("md-input-resized"));
          }if (!u.hasOwnProperty("mdNoResize")) {
            var l = n.element('<div class="md-resize-handle"></div>'),
                d = !1,
                m = null,
                f = 0,
                g = p.element,
                v = a.register(l, "drag", { horizontal: !1 });s.wrap('<div class="md-resize-wrapper">').after(l), l.on("mousedown", e), g.on("$md.dragstart", t).on("$md.drag", i).on("$md.dragend", r), o.$on("$destroy", function () {
              l.off("mousedown", e).remove(), g.off("$md.dragstart", t).off("$md.drag", i).off("$md.dragend", r), v(), l = null, g = null, v = null;
            });
          }
        }var f = !u.hasOwnProperty("mdNoAutogrow");if (m(), f) {
          var h = u.hasOwnProperty("rows") ? parseInt(u.rows) : NaN,
              $ = u.hasOwnProperty("maxRows") ? parseInt(u.maxRows) : NaN,
              C = o.$on("md-resize-textarea", i),
              w = null,
              y = s[0];if (r(function () {
            e.nextTick(i);
          }, 10, !1), s.on("input", i), g && v.$formatters.push(d), h || s.attr("rows", 1), n.element(t).on("resize", i), o.$on("$destroy", c), u.hasOwnProperty("mdDetectHidden")) {
            var x = function () {
              var e = !1;return function () {
                var n = 0 === y.offsetHeight;n === !1 && e === !0 && i(), e = n;
              };
            }();o.$watch(function () {
              return e.nextTick(x, !1), !0;
            });
          }
        }
      }var p = l[0],
          g = !!l[1],
          v = l[1] || e.fakeNgModel(),
          h = l[2],
          $ = n.isDefined(u.readonly),
          C = e.parseAttributeBoolean(u.mdNoAsterisk),
          w = s[0].tagName.toLowerCase();if (p) {
        if ("hidden" === u.type) return void s.attr("aria-hidden", "true");if (p.input) {
          if (p.input[0].contains(s[0])) return;throw new Error("<md-input-container> can only have *one* <input>, <textarea> or <md-select> child element!");
        }p.input = s, c();var y = n.element('<div class="md-errors-spacer">');s.after(y), p.label || i.expect(s, "aria-label", u.placeholder), s.addClass("md-input"), s.attr("id") || s.attr("id", "input_" + e.nextUid()), "input" === w && "number" === u.type && u.min && u.max && !u.step ? s.attr("step", "any") : "textarea" === w && f(), g || m();var x = p.isErrorGetter || function () {
          return v.$invalid && (v.$touched || h && h.$submitted);
        };o.$watch(x, p.setInvalid), u.ngValue && u.$observe("value", m), v.$parsers.push(d), v.$formatters.push(d), s.on("input", m), $ || s.on("focus", function (n) {
          e.nextTick(function () {
            p.setFocused(!0);
          });
        }).on("blur", function (n) {
          e.nextTick(function () {
            p.setFocused(!1), m();
          });
        }), o.$on("$destroy", function () {
          p.setFocused(!1), p.setHasValue(!1), p.input = null;
        });
      }
    }return { restrict: "E", require: ["^?mdInputContainer", "?ngModel", "?^form"], link: o };
  }function o(e, t) {
    function i(i, r, a, o) {
      function s(e) {
        return l.parent ? (l.text(String(r.val() || e || "").length + " / " + u), e) : e;
      }var u,
          l,
          d,
          c = o[0],
          m = o[1];t.nextTick(function () {
        d = n.element(m.element[0].querySelector(".md-errors-spacer")), l = n.element('<div class="md-char-counter">'), d.append(l), a.$set("ngTrim", "false"), i.$watch(a.mdMaxlength, function (t) {
          u = t, n.isNumber(t) && t > 0 ? (l.parent().length || e.enter(l, d), s()) : e.leave(l);
        }), c.$validators["md-maxlength"] = function (e, t) {
          return !n.isNumber(u) || u < 0 || (s(), (e || r.val() || t || "").length <= u);
        };
      });
    }return { restrict: "A", require: ["ngModel", "^mdInputContainer"], link: i };
  }function s(e) {
    function t(t, i, r, a) {
      if (a) {
        var o = a.element.find("label"),
            s = a.element.attr("md-no-float");if (o && o.length || "" === s || t.$eval(s)) return void a.setHasPlaceholder(!0);if ("MD-SELECT" != i[0].nodeName) {
          var u = n.element('<label ng-click="delegateClick()" tabindex="-1">' + r.placeholder + "</label>");r.$set("placeholder", null), a.element.addClass("md-icon-float").prepend(u), e(u)(t);
        }
      }
    }return { restrict: "A", require: "^^?mdInputContainer", priority: 200, link: { pre: t } };
  }function u(e) {
    function n(n, t, i) {
      function r() {
        o = !0, e(function () {
          t[0].select(), o = !1;
        }, 1, !1);
      }function a(e) {
        o && e.preventDefault();
      }if ("INPUT" === t[0].nodeName || "TEXTAREA" === t[0].nodeName) {
        var o = !1;t.on("focus", r).on("mouseup", a), n.$on("$destroy", function () {
          t.off("focus", r).off("mouseup", a);
        });
      }
    }return { restrict: "A", link: n };
  }function l() {
    function e(e, t, i, r) {
      r && (t.toggleClass("md-input-messages-animation", !0), t.toggleClass("md-auto-hide", !0), ("false" == i.mdAutoHide || n(i)) && t.toggleClass("md-auto-hide", !1));
    }function n(e) {
      return A.some(function (n) {
        return e[n];
      });
    }return { restrict: "EA", link: e, require: "^^?mdInputContainer" };
  }function d(e) {
    function n(n) {
      function t() {
        for (var e = n[0]; e = e.parentNode;) {
          if (e.nodeType === Node.DOCUMENT_FRAGMENT_NODE) return !0;
        }return !1;
      }function i(n) {
        return !!e.getClosest(n, "md-input-container");
      }function r(e) {
        e.toggleClass("md-input-message-animation", !0);
      }if (i(n)) r(n);else if (t()) return function (e, t) {
        i(t) && r(n);
      };
    }return { restrict: "EA", compile: n, priority: 100 };
  }function c(e, n, t, i) {
    return w(e, n, t, i), { addClass: function addClass(e, n, t) {
        p(e, t);
      } };
  }function m(e, n, t, i) {
    return w(e, n, t, i), { enter: function enter(e, n) {
        p(e, n);
      }, leave: function leave(e, n) {
        g(e, n);
      }, addClass: function addClass(e, n, t) {
        "ng-hide" == n ? g(e, t) : t();
      }, removeClass: function removeClass(e, n, t) {
        "ng-hide" == n ? p(e, t) : t();
      } };
  }function f(e, n, t, i) {
    return w(e, n, t, i), { enter: function enter(e, n) {
        var t = v(e);t.start().done(n);
      }, leave: function leave(e, n) {
        var t = h(e);t.start().done(n);
      } };
  }function p(e, t) {
    var i,
        r = [],
        a = C(e),
        o = a.children();return 0 == a.length || 0 == o.length ? (b.warn("mdInput messages show animation called on invalid messages element: ", e), void t()) : (n.forEach(o, function (e) {
      i = v(n.element(e)), r.push(i.start());
    }), void x.all(r, t));
  }function g(e, t) {
    var i,
        r = [],
        a = C(e),
        o = a.children();return 0 == a.length || 0 == o.length ? (b.warn("mdInput messages hide animation called on invalid messages element: ", e), void t()) : (n.forEach(o, function (e) {
      i = h(n.element(e)), r.push(i.start());
    }), void x.all(r, t));
  }function v(n) {
    var t = parseInt(e.getComputedStyle(n[0]).height),
        i = parseInt(e.getComputedStyle(n[0]).marginTop),
        r = C(n),
        a = $(n),
        o = i > -t;return o || r.hasClass("md-auto-hide") && !a.hasClass("md-input-invalid") ? E(n, {}) : E(n, { event: "enter", structural: !0, from: { opacity: 0, "margin-top": -t + "px" }, to: { opacity: 1, "margin-top": "0" }, duration: .3 });
  }function h(n) {
    var t = n[0].offsetHeight,
        i = e.getComputedStyle(n[0]);return 0 === parseInt(i.opacity) ? E(n, {}) : E(n, { event: "leave", structural: !0, from: { opacity: 1, "margin-top": 0 }, to: { opacity: 0, "margin-top": -t + "px" }, duration: .3 });
  }function $(e) {
    var n = e.controller("mdInputContainer");return n.element;
  }function C(e) {
    return e.hasClass("md-input-messages-animation") ? e : e.hasClass("md-input-message-animation") ? n.element(I.getClosest(e, function (e) {
      return e.classList.contains("md-input-messages-animation");
    })) : n.element(e[0].querySelector(".md-input-messages-animation"));
  }function w(e, n, t, i) {
    x = e, E = n, I = t, b = i;
  }i.$inject = ["$mdTheming", "$parse"], a.$inject = ["$mdUtil", "$window", "$mdAria", "$timeout", "$mdGesture"], o.$inject = ["$animate", "$mdUtil"], s.$inject = ["$compile"], d.$inject = ["$mdUtil"], u.$inject = ["$timeout"], c.$inject = ["$$AnimateRunner", "$animateCss", "$mdUtil", "$log"], m.$inject = ["$$AnimateRunner", "$animateCss", "$mdUtil", "$log"], f.$inject = ["$$AnimateRunner", "$animateCss", "$mdUtil", "$log"];var y = n.module("material.components.input", ["material.core"]).directive("mdInputContainer", i).directive("label", r).directive("input", a).directive("textarea", a).directive("mdMaxlength", o).directive("placeholder", s).directive("ngMessages", l).directive("ngMessage", d).directive("ngMessageExp", d).directive("mdSelectOnFocus", u).animation(".md-input-invalid", c).animation(".md-input-messages-animation", m).animation(".md-input-message-animation", f);e._mdMocksIncluded && y.service("$$mdInput", function () {
    return { messages: { show: p, hide: g, getElement: C } };
  }).service("mdInputInvalidAnimation", c).service("mdInputMessagesAnimation", m).service("mdInputMessageAnimation", f);var x,
      E,
      I,
      b,
      A = ["ngIf", "ngShow", "ngHide", "ngSwitchWhen", "ngSwitchDefault"];
}(window, window.angular);

//# sourceMappingURL=input.min-compiled.js.map