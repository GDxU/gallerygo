"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function SelectDirective(e, t, n, r, l, a, i, o) {
  function d(o, d) {
    var s = angular.element("<md-select-value><span></span></md-select-value>");if (s.append('<span class="md-select-icon" aria-hidden="true"></span>'), s.addClass("md-select-value"), s[0].hasAttribute("id") || s.attr("id", "select_value_label_" + t.nextUid()), o.find("md-content").length || o.append(angular.element("<md-content>").append(o.contents())), d.mdOnOpen && (o.find("md-content").prepend(angular.element('<div> <md-progress-circular md-mode="indeterminate" ng-if="$$loadingAsyncDone === false" md-diameter="25px"></md-progress-circular></div>')), o.find("md-option").attr("ng-show", "$$loadingAsyncDone")), d.name) {
      var c = angular.element('<select class="md-visually-hidden">');c.attr({ name: d.name, "aria-hidden": "true", tabindex: "-1" });var u = o.find("md-option");angular.forEach(u, function (e) {
        var t = angular.element("<option>" + e.innerHTML + "</option>");e.hasAttribute("ng-value") ? t.attr("ng-value", e.getAttribute("ng-value")) : e.hasAttribute("value") && t.attr("value", e.getAttribute("value")), c.append(t);
      }), c.append('<option ng-value="' + d.ngModel + '" selected></option>'), o.parent().append(c);
    }var p = t.parseAttributeBoolean(d.multiple),
        m = p ? "multiple" : "",
        f = '<div class="md-select-menu-container" aria-hidden="true"><md-select-menu {0}>{1}</md-select-menu></div>';return f = t.supplant(f, [m, o.html()]), o.empty().append(s), o.append(f), d.tabindex || d.$set("tabindex", 0), function (o, d, s, c) {
      function u() {
        var e = d.attr("aria-label") || d.attr("placeholder");!e && S && S.label && (e = S.label.text()), y = e, l.expect(d, "aria-label", e);
      }function m() {
        O && (R = R || O.find("md-select-menu").controller("mdSelectMenu"), E.setLabelText(R.selectedLabels()));
      }function f() {
        if (y) {
          var e = R.selectedLabels({ mode: "aria" });d.attr("aria-label", e.length ? y + ": " + e : y);
        }
      }function h() {
        S && S.setHasValue(R.selectedLabels().length > 0 || (d[0].validity || {}).badInput);
      }function g() {
        if (O = angular.element(d[0].querySelector(".md-select-menu-container")), T = o, s.mdContainerClass) {
          var e = O[0].getAttribute("class") + " " + s.mdContainerClass;O[0].setAttribute("class", e);
        }R = O.find("md-select-menu").controller("mdSelectMenu"), R.init(M, s.ngModel), d.on("$destroy", function () {
          O.remove();
        });
      }function v(e) {
        if (n.isNavigationKey(e)) e.preventDefault(), b(e);else if (n.isInputKey(e) || n.isNumPadKey(e)) {
          e.preventDefault();var t = R.optNodeForKeyboardSearch(e);if (!t || t.hasAttribute("disabled")) return;var r = angular.element(t).controller("mdOption");R.isMultiple || R.deselect(Object.keys(R.selected)[0]), R.select(r.hashKey, r.value), R.refreshViewValue();
        }
      }function b() {
        T._mdSelectIsOpen = !0, d.attr("aria-expanded", "true"), e.show({ scope: T, preserveScope: !0, skipCompile: !0, element: O, target: d[0], selectCtrl: E, preserveElement: !0, hasBackdrop: !0, loadingAsync: !!s.mdOnOpen && (o.$eval(s.mdOnOpen) || !0) })["finally"](function () {
          T._mdSelectIsOpen = !1, d.focus(), d.attr("aria-expanded", "false"), M.$setTouched();
        });
      }var $,
          y,
          C = !0,
          S = c[0],
          E = c[1],
          M = c[2],
          w = c[3],
          k = d.find("md-select-value"),
          D = angular.isDefined(s.readonly),
          x = t.parseAttributeBoolean(s.mdNoAsterisk);if (x && d.addClass("md-no-asterisk"), S) {
        var A = S.isErrorGetter || function () {
          return M.$invalid && (M.$touched || w && w.$submitted);
        };if (S.input && d.find("md-select-header").find("input")[0] !== S.input[0]) throw new Error("<md-input-container> can only have *one* child <input>, <textarea> or <select> element!");S.input = d, S.label || l.expect(d, "aria-label", d.attr("placeholder")), o.$watch(A, S.setInvalid);
      }var O, T, R;g(), r(d), w && angular.isDefined(s.multiple) && t.nextTick(function () {
        var e = M.$modelValue || M.$viewValue;e && w.$setPristine();
      });var N = M.$render;M.$render = function () {
        N(), m(), f(), h();
      }, s.$observe("placeholder", M.$render), S && S.label && s.$observe("required", function (e) {
        S.label.toggleClass("md-required", e && !x);
      }), E.setLabelText = function (e) {
        E.setIsPlaceholder(!e);var t = !1;if (s.mdSelectedText && s.mdSelectedHtml) throw Error("md-select cannot have both `md-selected-text` and `md-selected-html`");if (s.mdSelectedText || s.mdSelectedHtml) e = a(s.mdSelectedText || s.mdSelectedHtml)(o), t = !0;else if (!e) {
          var n = s.placeholder || (S && S.label ? S.label.text() : "");e = n || "", t = !0;
        }var r = k.children().eq(0);s.mdSelectedHtml ? r.html(i.getTrustedHtml(e)) : t ? r.text(e) : r.html(e);
      }, E.setIsPlaceholder = function (e) {
        e ? (k.addClass("md-select-placeholder"), S && S.label && S.label.addClass("md-placeholder")) : (k.removeClass("md-select-placeholder"), S && S.label && S.label.removeClass("md-placeholder"));
      }, D || (d.on("focus", function (e) {
        S && S.setFocused(!0);
      }), d.on("blur", function (e) {
        C && (C = !1, T._mdSelectIsOpen && e.stopImmediatePropagation()), T._mdSelectIsOpen || (S && S.setFocused(!1), h());
      })), E.triggerClose = function () {
        a(s.mdOnClose)(o);
      }, o.$$postDigest(function () {
        u(), m(), f();
      }), o.$watch(function () {
        return R.selectedLabels();
      }, m);var _;s.$observe("ngMultiple", function (e) {
        _ && _();var t = a(e);_ = o.$watch(function () {
          return t(o);
        }, function (e, t) {
          void 0 === e && void 0 === t || (e ? d.attr("multiple", "multiple") : d.removeAttr("multiple"), d.attr("aria-multiselectable", e ? "true" : "false"), O && (R.setMultiple(e), N = M.$render, M.$render = function () {
            N(), m(), f(), h();
          }, M.$render()));
        });
      }), s.$observe("disabled", function (e) {
        angular.isString(e) && (e = !0), void 0 !== $ && $ === e || ($ = e, e ? d.attr({ "aria-disabled": "true" }).removeAttr("tabindex").off("click", b).off("keydown", v) : d.attr({ tabindex: s.tabindex, "aria-disabled": "false" }).on("click", b).on("keydown", v));
      }), s.hasOwnProperty("disabled") || s.hasOwnProperty("ngDisabled") || (d.attr({ "aria-disabled": "false" }), d.on("click", b), d.on("keydown", v));var I = { role: "listbox", "aria-expanded": "false", "aria-multiselectable": p && !s.ngMultiple ? "true" : "false" };d[0].hasAttribute("id") || (I.id = "select_" + t.nextUid());var P = "select_container_" + t.nextUid();O.attr("id", P), I["aria-owns"] = P, d.attr(I), o.$on("$destroy", function () {
        e.destroy()["finally"](function () {
          S && (S.setFocused(!1), S.setHasValue(!1), S.input = null), M.$setTouched();
        });
      });
    };
  }var s = n.KEY_CODE;[s.SPACE, s.ENTER, s.UP_ARROW, s.DOWN_ARROW];return { restrict: "E", require: ["^?mdInputContainer", "mdSelect", "ngModel", "?^form"], compile: d, controller: function controller() {} };
}function SelectMenuDirective(e, t, n, r) {
  function l(e, n, l, a) {
    function i(e) {
      13 != e.keyCode && 32 != e.keyCode || o(e);
    }function o(n) {
      var r = t.getClosest(n.target, "md-option"),
          l = r && angular.element(r).data("$mdOptionController");if (r && l) {
        if (r.hasAttribute("disabled")) return n.stopImmediatePropagation(), !1;var a = d.hashGetter(l.value),
            i = angular.isDefined(d.selected[a]);e.$apply(function () {
          d.isMultiple ? i ? d.deselect(a) : d.select(a, l.value) : i || (d.deselect(Object.keys(d.selected)[0]), d.select(a, l.value)), d.refreshViewValue();
        });
      }
    }var d = a[0];n.addClass("_md"), r(n), n.on("click", o), n.on("keypress", i);
  }function a(r, l, a) {
    function i() {
      var e = d.ngModel.$modelValue || d.ngModel.$viewValue || [];if (angular.isArray(e)) {
        var t = Object.keys(d.selected),
            n = e.map(d.hashGetter),
            r = t.filter(function (e) {
          return n.indexOf(e) === -1;
        });r.forEach(d.deselect), n.forEach(function (t, n) {
          d.select(t, e[n]);
        });
      }
    }function o() {
      var e = d.ngModel.$viewValue || d.ngModel.$modelValue;Object.keys(d.selected).forEach(d.deselect), d.select(d.hashGetter(e), e);
    }var d = this;d.isMultiple = angular.isDefined(l.multiple), d.selected = {}, d.options = {}, r.$watchCollection(function () {
      return d.options;
    }, function () {
      d.ngModel.$render();
    });var s, c;d.setMultiple = function (e) {
      function t(e, t) {
        return angular.isArray(e || t || []);
      }var n = d.ngModel;c = c || n.$isEmpty, d.isMultiple = e, s && s(), d.isMultiple ? (n.$validators["md-multiple"] = t, n.$render = i, r.$watchCollection(d.modelBinding, function (e) {
        t(e) && i(e), d.ngModel.$setPristine();
      }), n.$isEmpty = function (e) {
        return !e || 0 === e.length;
      }) : (delete n.$validators["md-multiple"], n.$render = o);
    };var u,
        p,
        m,
        f = "",
        h = 300;d.optNodeForKeyboardSearch = function (e) {
      u && clearTimeout(u), u = setTimeout(function () {
        u = void 0, f = "", m = void 0, p = void 0;
      }, h);var t = e.keyCode - (n.isNumPadKey(e) ? 48 : 0);f += String.fromCharCode(t);var r = new RegExp("^" + f, "i");p || (p = a.find("md-option"), m = new Array(p.length), angular.forEach(p, function (e, t) {
        m[t] = e.textContent.trim();
      }));for (var l = 0; l < m.length; ++l) {
        if (r.test(m[l])) return p[l];
      }
    }, d.init = function (n, l) {
      d.ngModel = n, d.modelBinding = l, d.ngModel.$isEmpty = function (e) {
        return !d.options[d.hashGetter(e)];
      };var a = t.getModelOption(n, "trackBy");if (a) {
        var i = {},
            o = e(a);d.hashGetter = function (e, t) {
          return i.$value = e, o(t || r, i);
        };
      } else d.hashGetter = function (e) {
        return angular.isObject(e) ? "object_" + (e.$$mdSelectId || (e.$$mdSelectId = ++selectNextId)) : e;
      };d.setMultiple(d.isMultiple);
    }, d.selectedLabels = function (e) {
      e = e || {};var n = e.mode || "html",
          r = t.nodesToArray(a[0].querySelectorAll("md-option[selected]"));if (r.length) {
        var l;return "html" == n ? l = function l(e) {
          if (e.hasAttribute("md-option-empty")) return "";var t = e.innerHTML,
              n = e.querySelector(".md-ripple-container");n && (t = t.replace(n.outerHTML, ""));var r = e.querySelector(".md-container");return r && (t = t.replace(r.outerHTML, "")), t;
        } : "aria" == n && (l = function l(e) {
          return e.hasAttribute("aria-label") ? e.getAttribute("aria-label") : e.textContent;
        }), t.uniq(r.map(l)).join(", ");
      }return "";
    }, d.select = function (e, t) {
      var n = d.options[e];n && n.setSelected(!0), d.selected[e] = t;
    }, d.deselect = function (e) {
      var t = d.options[e];t && t.setSelected(!1), delete d.selected[e];
    }, d.addOption = function (e, t) {
      if (angular.isDefined(d.options[e])) throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "' + t.value + '" found.');d.options[e] = t, angular.isDefined(d.selected[e]) && (d.select(e, t.value), angular.isDefined(d.ngModel.$modelValue) && d.hashGetter(d.ngModel.$modelValue) === e && d.ngModel.$validate(), d.refreshViewValue());
    }, d.removeOption = function (e) {
      delete d.options[e];
    }, d.refreshViewValue = function () {
      var e,
          n = [];for (var r in d.selected) {
        (e = d.options[r]) ? n.push(e.value) : n.push(d.selected[r]);
      }var l = t.getModelOption(d.ngModel, "trackBy"),
          a = d.isMultiple ? n : n[0],
          i = d.ngModel.$modelValue;(l ? angular.equals(i, a) : i == a) || (d.ngModel.$setViewValue(a), d.ngModel.$render());
    };
  }return a.$inject = ["$scope", "$attrs", "$element"], { restrict: "E", require: ["mdSelectMenu"], scope: !1, controller: a, link: { pre: l } };
}function OptionDirective(e, t) {
  function n(e, t) {
    return e.append(angular.element('<div class="md-text">').append(e.contents())), e.attr("tabindex", t.tabindex || "0"), r(t) || e.attr("md-option-empty", ""), l;
  }function r(e) {
    var t = e.value,
        n = e.ngValue;return t || n;
  }function l(n, r, l, a) {
    function i(e, t, r) {
      if (!s.hashGetter) return void (r || n.$$postDigest(function () {
        i(e, t, !0);
      }));var l = s.hashGetter(t, n),
          a = s.hashGetter(e, n);d.hashKey = a, d.value = e, s.removeOption(l, d), s.addOption(a, d);
    }function o() {
      var e = { role: "option", "aria-selected": "false" };r[0].hasAttribute("id") || (e.id = "select_option_" + t.nextUid()), r.attr(e);
    }var d = a[0],
        s = a[1];s.isMultiple && (r.addClass("md-checkbox-enabled"), r.prepend(CHECKBOX_SELECTION_INDICATOR.clone())), angular.isDefined(l.ngValue) ? n.$watch(l.ngValue, i) : angular.isDefined(l.value) ? i(l.value) : n.$watch(function () {
      return r.text().trim();
    }, i), l.$observe("disabled", function (e) {
      e ? r.attr("tabindex", "-1") : r.attr("tabindex", "0");
    }), n.$$postDigest(function () {
      l.$observe("selected", function (e) {
        angular.isDefined(e) && ("string" == typeof e && (e = !0), e ? (s.isMultiple || s.deselect(Object.keys(s.selected)[0]), s.select(d.hashKey, d.value)) : s.deselect(d.hashKey), s.refreshViewValue());
      });
    }), e.attach(n, r), o(), n.$on("$destroy", function () {
      s.removeOption(d.hashKey, d);
    });
  }function a(e) {
    this.selected = !1, this.setSelected = function (t) {
      t && !this.selected ? e.attr({ selected: "selected", "aria-selected": "true" }) : !t && this.selected && (e.removeAttr("selected"), e.attr("aria-selected", "false")), this.selected = t;
    };
  }return a.$inject = ["$element"], { restrict: "E", require: ["mdOption", "^^mdSelectMenu"], controller: a, compile: n };
}function OptgroupDirective() {
  function e(e, t) {
    function n() {
      return e.parent().find("md-select-header").length;
    }function r() {
      var n = e.find("label");n.length || (n = angular.element("<label>"), e.prepend(n)), n.addClass("md-container-ignore"), t.label && n.text(t.label);
    }n() || r();
  }return { restrict: "E", compile: e };
}function SelectHeaderDirective() {
  return { restrict: "E" };
}function SelectProvider(e) {
  function t(e, t, i, o, d, s, c, u, p) {
    function m(e, t, n) {
      function r() {
        return c(t, { addClass: "md-leave" }).start();
      }function l() {
        t.removeClass("md-active"), t.attr("aria-hidden", "true"), t[0].style.display = "none", h(n), !n.$destroy && n.restoreFocus && n.target.focus();
      }return n = n || {}, n.cleanupInteraction(), n.cleanupResizing(), n.hideBackdrop(), n.$destroy === !0 ? l() : r().then(l);
    }function f(n, r, l) {
      function a(e, t, n) {
        return n.parent.append(t), d(function (e, n) {
          try {
            c(t, { removeClass: "md-leave", duration: 0 }).start().then(m).then(e);
          } catch (r) {
            n(r);
          }
        });
      }function m() {
        return d(function (e) {
          if (l.isRemoved) return d.reject(!1);var t = g(n, r, l);t.container.element.css(b.toCss(t.container.styles)), t.dropDown.element.css(b.toCss(t.dropDown.styles)), s(function () {
            r.addClass("md-active"), t.dropDown.element.css(b.toCss({ transform: "" })), h(l.focusedNode), e();
          });
        });
      }function f(e, t, n) {
        return n.disableParentScroll && !i.getClosest(n.target, "MD-DIALOG") ? n.restoreScroll = i.disableScrollAround(n.element, n.parent) : n.disableParentScroll = !1, n.hasBackdrop && (n.backdrop = i.createBackdrop(e, "md-select-backdrop md-click-catcher"), u.enter(n.backdrop, p[0].body, null, { duration: 0 })), function () {
          n.backdrop && n.backdrop.remove(), n.disableParentScroll && n.restoreScroll(), delete n.restoreScroll;
        };
      }function h(e) {
        e && !e.hasAttribute("disabled") && e.focus();
      }function y(e, t) {
        var n = r.find("md-select-menu");if (!t.target) throw new Error(i.supplant(v, [t.target]));angular.extend(t, { isRemoved: !1, target: angular.element(t.target), parent: angular.element(t.parent), selectEl: n, contentEl: r.find("md-content"), optionNodes: n[0].getElementsByTagName("md-option") });
      }function C() {
        var e = function (e, t, n) {
          return function () {
            if (!n.isRemoved) {
              var r = g(e, t, n),
                  l = r.container,
                  a = r.dropDown;l.element.css(b.toCss(l.styles)), a.element.css(b.toCss(a.styles));
            }
          };
        }(n, r, l),
            t = angular.element(o);return t.on("resize", e), t.on("orientationchange", e), function () {
          t.off("resize", e), t.off("orientationchange", e);
        };
      }function S() {
        l.loadingAsync && !l.isRemoved && (n.$$loadingAsyncDone = !1, d.when(l.loadingAsync).then(function () {
          n.$$loadingAsyncDone = !0, delete l.loadingAsync;
        }).then(function () {
          s(m);
        }));
      }function E() {
        function n(t) {
          t.preventDefault(), t.stopPropagation(), l.restoreFocus = !1, i.nextTick(e.hide, !0);
        }function a(n) {
          switch (n.preventDefault(), n.stopPropagation(), n.keyCode) {case $.UP_ARROW:
              return s();case $.DOWN_ARROW:
              return d();case $.SPACE:case $.ENTER:
              var r = i.getClosest(n.target, "md-option");r && (u.triggerHandler({ type: "click", target: r }), n.preventDefault()), c(n);break;case $.TAB:case $.ESCAPE:
              n.stopPropagation(), n.preventDefault(), l.restoreFocus = !0, i.nextTick(e.hide, !0);break;default:
              if (t.isInputKey(n) || t.isNumPadKey(n)) {
                var a = u.controller("mdSelectMenu").optNodeForKeyboardSearch(n);l.focusedNode = a || l.focusedNode, a && a.focus();
              }}
        }function o(e) {
          var t,
              n = i.nodesToArray(l.optionNodes),
              r = n.indexOf(l.focusedNode);do {
            r === -1 ? r = 0 : "next" === e && r < n.length - 1 ? r++ : "prev" === e && r > 0 && r--, t = n[r], t.hasAttribute("disabled") && (t = void 0);
          } while (!t && r < n.length - 1 && r > 0);t && t.focus(), l.focusedNode = t;
        }function d() {
          o("next");
        }function s() {
          o("prev");
        }function c(t) {
          function n() {
            var e = !1;if (t && t.currentTarget.children.length > 0) {
              var n = t.currentTarget.children[0],
                  r = n.scrollHeight > n.clientHeight;if (r && n.children.length > 0) {
                var l = t.pageX - t.currentTarget.getBoundingClientRect().left;l > n.querySelector("md-option").offsetWidth && (e = !0);
              }
            }return e;
          }if (!(t && "click" == t.type && t.currentTarget != u[0] || n())) {
            var r = i.getClosest(t.target, "md-option");r && r.hasAttribute && !r.hasAttribute("disabled") && (t.preventDefault(), t.stopPropagation(), p.isMultiple || (l.restoreFocus = !0, i.nextTick(function () {
              e.hide(p.ngModel.$viewValue);
            }, !0)));
          }
        }if (!l.isRemoved) {
          var u = l.selectEl,
              p = u.controller("mdSelectMenu") || {};return r.addClass("md-clickable"), l.backdrop && l.backdrop.on("click", n), u.on("keydown", a), u.on("click", c), function () {
            l.backdrop && l.backdrop.off("click", n), u.off("keydown", a), u.off("click", c), r.removeClass("md-clickable"), l.isRemoved = !0;
          };
        }
      }return S(), y(n, l), l.hideBackdrop = f(n, r, l), a(n, r, l).then(function (e) {
        return r.attr("aria-hidden", "false"), l.alreadyOpen = !0, l.cleanupInteraction = E(), l.cleanupResizing = C(), e;
      }, l.hideBackdrop);
    }function h(e) {
      var t = e.selectCtrl;if (t) {
        var n = e.selectEl.controller("mdSelectMenu");t.setLabelText(n ? n.selectedLabels() : ""), t.triggerClose();
      }
    }function g(e, t, d) {
      var s,
          c = t[0],
          u = d.target[0].children[0],
          m = p[0].body,
          f = d.selectEl[0],
          h = d.contentEl[0],
          g = m.getBoundingClientRect(),
          v = u.getBoundingClientRect(),
          b = !1,
          $ = { left: g.left + SELECT_EDGE_MARGIN, top: SELECT_EDGE_MARGIN, bottom: g.height - SELECT_EDGE_MARGIN, right: g.width - SELECT_EDGE_MARGIN - (i.floatingScrollbars() ? 16 : 0) },
          y = { top: v.top - $.top, left: v.left - $.left, right: $.right - (v.left + v.width), bottom: $.bottom - (v.top + v.height) },
          C = g.width - 2 * SELECT_EDGE_MARGIN,
          S = f.querySelector("md-option[selected]"),
          E = f.getElementsByTagName("md-option"),
          M = f.getElementsByTagName("md-optgroup"),
          w = a(t, h),
          k = n(d.loadingAsync);s = k ? h.firstElementChild || h : S ? S : M.length ? M[0] : E.length ? E[0] : h.firstElementChild || h, h.offsetWidth > C ? h.style["max-width"] = C + "px" : h.style.maxWidth = null, b && (h.style["min-width"] = v.width + "px"), w && f.classList.add("md-overflow");var D = s;"MD-OPTGROUP" === (D.tagName || "").toUpperCase() && (D = E[0] || h.firstElementChild || h, s = D), d.focusedNode = D, c.style.display = "block";var x = f.getBoundingClientRect(),
          A = l(s);if (s) {
        var O = o.getComputedStyle(s);A.paddingLeft = parseInt(O.paddingLeft, 10) || 0, A.paddingRight = parseInt(O.paddingRight, 10) || 0;
      }if (w) {
        var T = h.offsetHeight / 2;h.scrollTop = A.top + A.height / 2 - T, y.top < T ? h.scrollTop = Math.min(A.top, h.scrollTop + T - y.top) : y.bottom < T && (h.scrollTop = Math.max(A.top + A.height - x.height, h.scrollTop - T + y.bottom));
      }var R, N, _, I, P;b ? (R = v.left, N = v.top + v.height, _ = "50% 0", N + x.height > $.bottom && (N = v.top - x.height, _ = "50% 100%")) : (R = v.left + A.left - A.paddingLeft + 2, N = Math.floor(v.top + v.height / 2 - A.height / 2 - A.top + h.scrollTop) + 2, _ = A.left + v.width / 2 + "px " + (A.top + A.height / 2 - h.scrollTop) + "px 0px", I = Math.min(v.width + A.paddingLeft + A.paddingRight, C), P = window.getComputedStyle(u)["font-size"]);var L = c.getBoundingClientRect(),
          V = Math.round(100 * Math.min(v.width / x.width, 1)) / 100,
          B = Math.round(100 * Math.min(v.height / x.height, 1)) / 100;return { container: { element: angular.element(c), styles: { left: Math.floor(r($.left, R, $.right - L.width)), top: Math.floor(r($.top, N, $.bottom - L.height)), "min-width": I, "font-size": P } }, dropDown: { element: angular.element(f), styles: { transformOrigin: _, transform: d.alreadyOpen ? "" : i.supplant("scale({0},{1})", [V, B]) } } };
    }var v = "$mdSelect.show() expected a target element in options.target but got '{0}'!",
        b = i.dom.animator,
        $ = t.KEY_CODE;return { parent: "body", themable: !0, onShow: f, onRemove: m, hasBackdrop: !0, disableParentScroll: !0 };
  }function n(e) {
    return e && angular.isFunction(e.then);
  }function r(e, t, n) {
    return Math.max(e, Math.min(t, n));
  }function l(e) {
    return e ? { left: e.offsetLeft, top: e.offsetTop, width: e.offsetWidth, height: e.offsetHeight } : { left: 0, top: 0, width: 0, height: 0 };
  }function a(e, t) {
    var n = !1;try {
      var r = e[0].style.display;e[0].style.display = "block", n = t.scrollHeight > t.offsetHeight, e[0].style.display = r;
    } finally {}return n;
  }return t.$inject = ["$mdSelect", "$mdConstant", "$mdUtil", "$window", "$q", "$$rAF", "$animateCss", "$animate", "$document"], e("$mdSelect").setDefaults({ methods: ["target"], options: t });
}goog.provide("ngmaterial.components.select"), goog.require("ngmaterial.components.backdrop"), goog.require("ngmaterial.core"), SelectDirective.$inject = ["$mdSelect", "$mdUtil", "$mdConstant", "$mdTheming", "$mdAria", "$parse", "$sce", "$injector"], SelectMenuDirective.$inject = ["$parse", "$mdUtil", "$mdConstant", "$mdTheming"], OptionDirective.$inject = ["$mdButtonInkRipple", "$mdUtil"], SelectProvider.$inject = ["$$interimElementProvider"];var SELECT_EDGE_MARGIN = 8,
    selectNextId = 0,
    CHECKBOX_SELECTION_INDICATOR = angular.element('<div class="md-container"><div class="md-icon"></div></div>');angular.module("material.components.select", ["material.core", "material.components.backdrop"]).directive("mdSelect", SelectDirective).directive("mdSelectMenu", SelectMenuDirective).directive("mdOption", OptionDirective).directive("mdOptgroup", OptgroupDirective).directive("mdSelectHeader", SelectHeaderDirective).provider("$mdSelect", SelectProvider), ngmaterial.components.select = angular.module("material.components.select");

//# sourceMappingURL=select.min-compiled.js.map