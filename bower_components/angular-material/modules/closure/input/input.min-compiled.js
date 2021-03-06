"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function mdInputContainerDirective(e, n) {
  function t(n) {
    var t = n[0].querySelector(r),
        i = n[0].querySelector(s);return t && n.addClass("md-icon-left"), i && n.addClass("md-icon-right"), function (n, t) {
      e(t);
    };
  }function i(e, t, i, a) {
    var r = this;r.isErrorGetter = i.mdIsError && n(i.mdIsError), r.delegateClick = function () {
      r.input.focus();
    }, r.element = t, r.setFocused = function (e) {
      t.toggleClass("md-input-focused", !!e);
    }, r.setHasValue = function (e) {
      t.toggleClass("md-input-has-value", !!e);
    }, r.setHasPlaceholder = function (e) {
      t.toggleClass("md-input-has-placeholder", !!e);
    }, r.setInvalid = function (e) {
      e ? a.addClass(t, "md-input-invalid") : a.removeClass(t, "md-input-invalid");
    }, e.$watch(function () {
      return r.label && r.input;
    }, function (e) {
      e && !r.label.attr("for") && r.label.attr("for", r.input.attr("id"));
    });
  }i.$inject = ["$scope", "$element", "$attrs", "$animate"];var a = ["INPUT", "TEXTAREA", "SELECT", "MD-SELECT"],
      r = a.reduce(function (e, n) {
    return e.concat(["md-icon ~ " + n, ".md-icon ~ " + n]);
  }, []).join(","),
      s = a.reduce(function (e, n) {
    return e.concat([n + " ~ md-icon", n + " ~ .md-icon"]);
  }, []).join(",");return { restrict: "E", compile: t, controller: i };
}function labelDirective() {
  return { restrict: "E", require: "^?mdInputContainer", link: function link(e, n, t, i) {
      !i || t.mdNoFloat || n.hasClass("md-container-ignore") || (i.label = n, e.$on("$destroy", function () {
        i.label = null;
      }));
    } };
}function inputTextareaDirective(e, n, t, i, a) {
  function r(r, s, o, u) {
    function l(e) {
      return g.setHasValue(!p.$isEmpty(e)), e;
    }function d() {
      g.label && o.$observe("required", function (e) {
        g.label.toggleClass("md-required", e && !$);
      });
    }function c() {
      g.setHasValue(s.val().length > 0 || (s[0].validity || {}).badInput);
    }function m() {
      function t() {
        s.attr("rows", 1).css("height", "auto").addClass("md-no-flex");var e = u();if (!M) {
          var n = s[0].style.padding || "";M = s.css("padding", 0).prop("offsetHeight"), s[0].style.padding = n;
        }if (v && M && (e = Math.max(e, M * v)), h && M) {
          var t = M * h;t < e ? (s.attr("md-no-autogrow", ""), e = t) : s.removeAttr("md-no-autogrow");
        }M && s.attr("rows", Math.round(e / M)), s.css("height", e + "px").removeClass("md-no-flex");
      }function u() {
        var e = C.offsetHeight,
            n = C.scrollHeight - e;return e + Math.max(n, 0);
      }function l(n) {
        return e.nextTick(t), n;
      }function d() {
        if (m && (m = !1, angular.element(n).off("resize", t), $ && $(), s.attr("md-no-autogrow", "").off("input", t), f)) {
          var e = p.$formatters.indexOf(l);e > -1 && p.$formatters.splice(e, 1);
        }
      }function c() {
        function e(e) {
          e.preventDefault(), l = !0, c = e.clientY, m = parseFloat(s.css("height")) || s.prop("offsetHeight");
        }function n(e) {
          l && (e.preventDefault(), d(), f.addClass("md-input-resized"));
        }function t(e) {
          l && s.css("height", m + e.pointer.distanceY + "px");
        }function i(e) {
          l && (l = !1, f.removeClass("md-input-resized"));
        }if (!o.hasOwnProperty("mdNoResize")) {
          var u = angular.element('<div class="md-resize-handle"></div>'),
              l = !1,
              c = null,
              m = 0,
              f = g.element,
              p = a.register(u, "drag", { horizontal: !1 });s.wrap('<div class="md-resize-wrapper">').after(u), u.on("mousedown", e), f.on("$md.dragstart", n).on("$md.drag", t).on("$md.dragend", i), r.$on("$destroy", function () {
            u.off("mousedown", e).remove(), f.off("$md.dragstart", n).off("$md.drag", t).off("$md.dragend", i), p(), u = null, f = null, p = null;
          });
        }
      }var m = !o.hasOwnProperty("mdNoAutogrow");if (c(), m) {
        var v = o.hasOwnProperty("rows") ? parseInt(o.rows) : NaN,
            h = o.hasOwnProperty("maxRows") ? parseInt(o.maxRows) : NaN,
            $ = r.$on("md-resize-textarea", t),
            M = null,
            C = s[0];if (i(function () {
          e.nextTick(t);
        }, 10, !1), s.on("input", t), f && p.$formatters.push(l), v || s.attr("rows", 1), angular.element(n).on("resize", t), r.$on("$destroy", d), o.hasOwnProperty("mdDetectHidden")) {
          var w = function () {
            var e = !1;return function () {
              var n = 0 === C.offsetHeight;n === !1 && e === !0 && t(), e = n;
            };
          }();r.$watch(function () {
            return e.nextTick(w, !1), !0;
          });
        }
      }
    }var g = u[0],
        f = !!u[1],
        p = u[1] || e.fakeNgModel(),
        v = u[2],
        h = angular.isDefined(o.readonly),
        $ = e.parseAttributeBoolean(o.mdNoAsterisk),
        M = s[0].tagName.toLowerCase();if (g) {
      if ("hidden" === o.type) return void s.attr("aria-hidden", "true");if (g.input) {
        if (g.input[0].contains(s[0])) return;throw new Error("<md-input-container> can only have *one* <input>, <textarea> or <md-select> child element!");
      }g.input = s, d();var C = angular.element('<div class="md-errors-spacer">');s.after(C), g.label || t.expect(s, "aria-label", o.placeholder), s.addClass("md-input"), s.attr("id") || s.attr("id", "input_" + e.nextUid()), "input" === M && "number" === o.type && o.min && o.max && !o.step ? s.attr("step", "any") : "textarea" === M && m(), f || c();var w = g.isErrorGetter || function () {
        return p.$invalid && (p.$touched || v && v.$submitted);
      };r.$watch(w, g.setInvalid), o.ngValue && o.$observe("value", c), p.$parsers.push(l), p.$formatters.push(l), s.on("input", c), h || s.on("focus", function (n) {
        e.nextTick(function () {
          g.setFocused(!0);
        });
      }).on("blur", function (n) {
        e.nextTick(function () {
          g.setFocused(!1), c();
        });
      }), r.$on("$destroy", function () {
        g.setFocused(!1), g.setHasValue(!1), g.input = null;
      });
    }
  }return { restrict: "E", require: ["^?mdInputContainer", "?ngModel", "?^form"], link: r };
}function mdMaxlengthDirective(e, n) {
  function t(t, i, a, r) {
    function s(e) {
      return u.parent ? (u.text(String(i.val() || e || "").length + " / " + o), e) : e;
    }var o,
        u,
        l,
        d = r[0],
        c = r[1];n.nextTick(function () {
      l = angular.element(c.element[0].querySelector(".md-errors-spacer")), u = angular.element('<div class="md-char-counter">'), l.append(u), a.$set("ngTrim", "false"), t.$watch(a.mdMaxlength, function (n) {
        o = n, angular.isNumber(n) && n > 0 ? (u.parent().length || e.enter(u, l), s()) : e.leave(u);
      }), d.$validators["md-maxlength"] = function (e, n) {
        return !angular.isNumber(o) || o < 0 || (s(), (e || i.val() || n || "").length <= o);
      };
    });
  }return { restrict: "A", require: ["ngModel", "^mdInputContainer"], link: t };
}function placeholderDirective(e) {
  function n(n, t, i, a) {
    if (a) {
      var r = a.element.find("label"),
          s = a.element.attr("md-no-float");if (r && r.length || "" === s || n.$eval(s)) return void a.setHasPlaceholder(!0);if ("MD-SELECT" != t[0].nodeName) {
        var o = angular.element('<label ng-click="delegateClick()" tabindex="-1">' + i.placeholder + "</label>");i.$set("placeholder", null), a.element.addClass("md-icon-float").prepend(o), e(o)(n);
      }
    }
  }return { restrict: "A", require: "^^?mdInputContainer", priority: 200, link: { pre: n } };
}function mdSelectOnFocusDirective(e) {
  function n(n, t, i) {
    function a() {
      s = !0, e(function () {
        t[0].select(), s = !1;
      }, 1, !1);
    }function r(e) {
      s && e.preventDefault();
    }if ("INPUT" === t[0].nodeName || "TEXTAREA" === t[0].nodeName) {
      var s = !1;t.on("focus", a).on("mouseup", r), n.$on("$destroy", function () {
        t.off("focus", a).off("mouseup", r);
      });
    }
  }return { restrict: "A", link: n };
}function ngMessagesDirective() {
  function e(e, t, i, a) {
    a && (t.toggleClass("md-input-messages-animation", !0), t.toggleClass("md-auto-hide", !0), ("false" == i.mdAutoHide || n(i)) && t.toggleClass("md-auto-hide", !1));
  }function n(e) {
    return visibilityDirectives.some(function (n) {
      return e[n];
    });
  }return { restrict: "EA", link: e, require: "^^?mdInputContainer" };
}function ngMessageDirective(e) {
  function n(n) {
    function t() {
      for (var e = n[0]; e = e.parentNode;) {
        if (e.nodeType === Node.DOCUMENT_FRAGMENT_NODE) return !0;
      }return !1;
    }function i(n) {
      return !!e.getClosest(n, "md-input-container");
    }function a(e) {
      e.toggleClass("md-input-message-animation", !0);
    }if (i(n)) a(n);else if (t()) return function (e, t) {
      i(t) && a(n);
    };
  }return { restrict: "EA", compile: n, priority: 100 };
}function mdInputInvalidMessagesAnimation(e, n, t, i) {
  return saveSharedServices(e, n, t, i), { addClass: function addClass(e, n, t) {
      showInputMessages(e, t);
    } };
}function ngMessagesAnimation(e, n, t, i) {
  return saveSharedServices(e, n, t, i), { enter: function enter(e, n) {
      showInputMessages(e, n);
    }, leave: function leave(e, n) {
      hideInputMessages(e, n);
    }, addClass: function addClass(e, n, t) {
      "ng-hide" == n ? hideInputMessages(e, t) : t();
    }, removeClass: function removeClass(e, n, t) {
      "ng-hide" == n ? showInputMessages(e, t) : t();
    } };
}function ngMessageAnimation(e, n, t, i) {
  return saveSharedServices(e, n, t, i), { enter: function enter(e, n) {
      var t = showMessage(e);t.start().done(n);
    }, leave: function leave(e, n) {
      var t = hideMessage(e);t.start().done(n);
    } };
}function showInputMessages(e, n) {
  var t,
      i = [],
      a = getMessagesElement(e),
      r = a.children();return 0 == a.length || 0 == r.length ? ($log.warn("mdInput messages show animation called on invalid messages element: ", e), void n()) : (angular.forEach(r, function (e) {
    t = showMessage(angular.element(e)), i.push(t.start());
  }), void $$AnimateRunner.all(i, n));
}function hideInputMessages(e, n) {
  var t,
      i = [],
      a = getMessagesElement(e),
      r = a.children();return 0 == a.length || 0 == r.length ? ($log.warn("mdInput messages hide animation called on invalid messages element: ", e), void n()) : (angular.forEach(r, function (e) {
    t = hideMessage(angular.element(e)), i.push(t.start());
  }), void $$AnimateRunner.all(i, n));
}function showMessage(e) {
  var n = parseInt(window.getComputedStyle(e[0]).height),
      t = parseInt(window.getComputedStyle(e[0]).marginTop),
      i = getMessagesElement(e),
      a = getInputElement(e),
      r = t > -n;return r || i.hasClass("md-auto-hide") && !a.hasClass("md-input-invalid") ? $animateCss(e, {}) : $animateCss(e, { event: "enter", structural: !0, from: { opacity: 0, "margin-top": -n + "px" }, to: { opacity: 1, "margin-top": "0" }, duration: .3 });
}function hideMessage(e) {
  var n = e[0].offsetHeight,
      t = window.getComputedStyle(e[0]);return 0 === parseInt(t.opacity) ? $animateCss(e, {}) : $animateCss(e, { event: "leave", structural: !0, from: { opacity: 1, "margin-top": 0 }, to: { opacity: 0, "margin-top": -n + "px" }, duration: .3 });
}function getInputElement(e) {
  var n = e.controller("mdInputContainer");return n.element;
}function getMessagesElement(e) {
  return e.hasClass("md-input-messages-animation") ? e : e.hasClass("md-input-message-animation") ? angular.element($mdUtil.getClosest(e, function (e) {
    return e.classList.contains("md-input-messages-animation");
  })) : angular.element(e[0].querySelector(".md-input-messages-animation"));
}function saveSharedServices(e, n, t, i) {
  $$AnimateRunner = e, $animateCss = n, $mdUtil = t, $log = i;
}goog.provide("ngmaterial.components.input"), goog.require("ngmaterial.core"), mdInputContainerDirective.$inject = ["$mdTheming", "$parse"], inputTextareaDirective.$inject = ["$mdUtil", "$window", "$mdAria", "$timeout", "$mdGesture"], mdMaxlengthDirective.$inject = ["$animate", "$mdUtil"], placeholderDirective.$inject = ["$compile"], ngMessageDirective.$inject = ["$mdUtil"], mdSelectOnFocusDirective.$inject = ["$timeout"], mdInputInvalidMessagesAnimation.$inject = ["$$AnimateRunner", "$animateCss", "$mdUtil", "$log"], ngMessagesAnimation.$inject = ["$$AnimateRunner", "$animateCss", "$mdUtil", "$log"], ngMessageAnimation.$inject = ["$$AnimateRunner", "$animateCss", "$mdUtil", "$log"];var inputModule = angular.module("material.components.input", ["material.core"]).directive("mdInputContainer", mdInputContainerDirective).directive("label", labelDirective).directive("input", inputTextareaDirective).directive("textarea", inputTextareaDirective).directive("mdMaxlength", mdMaxlengthDirective).directive("placeholder", placeholderDirective).directive("ngMessages", ngMessagesDirective).directive("ngMessage", ngMessageDirective).directive("ngMessageExp", ngMessageDirective).directive("mdSelectOnFocus", mdSelectOnFocusDirective).animation(".md-input-invalid", mdInputInvalidMessagesAnimation).animation(".md-input-messages-animation", ngMessagesAnimation).animation(".md-input-message-animation", ngMessageAnimation);window._mdMocksIncluded && inputModule.service("$$mdInput", function () {
  return { messages: { show: showInputMessages, hide: hideInputMessages, getElement: getMessagesElement } };
}).service("mdInputInvalidAnimation", mdInputInvalidMessagesAnimation).service("mdInputMessagesAnimation", ngMessagesAnimation).service("mdInputMessageAnimation", ngMessageAnimation);var visibilityDirectives = ["ngIf", "ngShow", "ngHide", "ngSwitchWhen", "ngSwitchDefault"],
    $$AnimateRunner,
    $animateCss,
    $mdUtil,
    $log;ngmaterial.components.input = angular.module("material.components.input");

//# sourceMappingURL=input.min-compiled.js.map