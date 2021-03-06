"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (e, t, n) {
  "use strict";
  function i(e, i, r, l, o, a, d, s) {
    function c(s, c) {
      var u = t.element("<md-select-value><span></span></md-select-value>");if (u.append('<span class="md-select-icon" aria-hidden="true"></span>'), u.addClass("md-select-value"), u[0].hasAttribute("id") || u.attr("id", "select_value_label_" + i.nextUid()), s.find("md-content").length || s.append(t.element("<md-content>").append(s.contents())), c.mdOnOpen && (s.find("md-content").prepend(t.element('<div> <md-progress-circular md-mode="indeterminate" ng-if="$$loadingAsyncDone === false" md-diameter="25px"></md-progress-circular></div>')), s.find("md-option").attr("ng-show", "$$loadingAsyncDone")), c.name) {
        var p = t.element('<select class="md-visually-hidden">');p.attr({ name: c.name, "aria-hidden": "true", tabindex: "-1" });var f = s.find("md-option");t.forEach(f, function (e) {
          var n = t.element("<option>" + e.innerHTML + "</option>");e.hasAttribute("ng-value") ? n.attr("ng-value", e.getAttribute("ng-value")) : e.hasAttribute("value") && n.attr("value", e.getAttribute("value")), p.append(n);
        }), p.append('<option ng-value="' + c.ngModel + '" selected></option>'), s.parent().append(p);
      }var m = i.parseAttributeBoolean(c.multiple),
          h = m ? "multiple" : "",
          g = '<div class="md-select-menu-container" aria-hidden="true"><md-select-menu {0}>{1}</md-select-menu></div>';return g = i.supplant(g, [h, s.html()]), s.empty().append(u), s.append(g), c.tabindex || c.$set("tabindex", 0), function (s, c, u, p) {
        function f() {
          var e = c.attr("aria-label") || c.attr("placeholder");!e && k && k.label && (e = k.label.text()), C = e, o.expect(c, "aria-label", e);
        }function h() {
          R && (V = V || R.find("md-select-menu").controller("mdSelectMenu"), S.setLabelText(V.selectedLabels()));
        }function g() {
          if (C) {
            var e = V.selectedLabels({ mode: "aria" });c.attr("aria-label", e.length ? C + ": " + e : C);
          }
        }function v() {
          k && k.setHasValue(V.selectedLabels().length > 0 || (c[0].validity || {}).badInput);
        }function b() {
          if (R = t.element(c[0].querySelector(".md-select-menu-container")), P = s, u.mdContainerClass) {
            var e = R[0].getAttribute("class") + " " + u.mdContainerClass;R[0].setAttribute("class", e);
          }V = R.find("md-select-menu").controller("mdSelectMenu"), V.init(x, u.ngModel), c.on("$destroy", function () {
            R.remove();
          });
        }function $(e) {
          if (r.isNavigationKey(e)) e.preventDefault(), y(e);else if (r.isInputKey(e) || r.isNumPadKey(e)) {
            e.preventDefault();var n = V.optNodeForKeyboardSearch(e);if (!n || n.hasAttribute("disabled")) return;var i = t.element(n).controller("mdOption");V.isMultiple || V.deselect(Object.keys(V.selected)[0]), V.select(i.hashKey, i.value), V.refreshViewValue();
          }
        }function y() {
          P._mdSelectIsOpen = !0, c.attr("aria-expanded", "true"), e.show({ scope: P, preserveScope: !0, skipCompile: !0, element: R, target: c[0], selectCtrl: S, preserveElement: !0, hasBackdrop: !0, loadingAsync: !!u.mdOnOpen && (s.$eval(u.mdOnOpen) || !0) })["finally"](function () {
            P._mdSelectIsOpen = !1, c.focus(), c.attr("aria-expanded", "false"), x.$setTouched();
          });
        }var w,
            C,
            M = !0,
            k = p[0],
            S = p[1],
            x = p[2],
            A = p[3],
            O = c.find("md-select-value"),
            E = t.isDefined(u.readonly),
            T = i.parseAttributeBoolean(u.mdNoAsterisk);if (T && c.addClass("md-no-asterisk"), k) {
          var D = k.isErrorGetter || function () {
            return x.$invalid && (x.$touched || A && A.$submitted);
          };if (k.input && c.find("md-select-header").find("input")[0] !== k.input[0]) throw new Error("<md-input-container> can only have *one* child <input>, <textarea> or <select> element!");k.input = c, k.label || o.expect(c, "aria-label", c.attr("placeholder")), s.$watch(D, k.setInvalid);
        }var R, P, V;b(), l(c), A && t.isDefined(u.multiple) && i.nextTick(function () {
          var e = x.$modelValue || x.$viewValue;e && A.$setPristine();
        });var N = x.$render;x.$render = function () {
          N(), h(), g(), v();
        }, u.$observe("placeholder", x.$render), k && k.label && u.$observe("required", function (e) {
          k.label.toggleClass("md-required", e && !T);
        }), S.setLabelText = function (e) {
          S.setIsPlaceholder(!e);var t = !1;if (u.mdSelectedText && u.mdSelectedHtml) throw Error("md-select cannot have both `md-selected-text` and `md-selected-html`");if (u.mdSelectedText || u.mdSelectedHtml) e = a(u.mdSelectedText || u.mdSelectedHtml)(s), t = !0;else if (!e) {
            var n = u.placeholder || (k && k.label ? k.label.text() : "");e = n || "", t = !0;
          }var i = O.children().eq(0);u.mdSelectedHtml ? i.html(d.getTrustedHtml(e)) : t ? i.text(e) : i.html(e);
        }, S.setIsPlaceholder = function (e) {
          e ? (O.addClass("md-select-placeholder"), k && k.label && k.label.addClass("md-placeholder")) : (O.removeClass("md-select-placeholder"), k && k.label && k.label.removeClass("md-placeholder"));
        }, E || (c.on("focus", function (e) {
          k && k.setFocused(!0);
        }), c.on("blur", function (e) {
          M && (M = !1, P._mdSelectIsOpen && e.stopImmediatePropagation()), P._mdSelectIsOpen || (k && k.setFocused(!1), v());
        })), S.triggerClose = function () {
          a(u.mdOnClose)(s);
        }, s.$$postDigest(function () {
          f(), h(), g();
        }), s.$watch(function () {
          return V.selectedLabels();
        }, h);var B;u.$observe("ngMultiple", function (e) {
          B && B();var t = a(e);B = s.$watch(function () {
            return t(s);
          }, function (e, t) {
            e === n && t === n || (e ? c.attr("multiple", "multiple") : c.removeAttr("multiple"), c.attr("aria-multiselectable", e ? "true" : "false"), R && (V.setMultiple(e), N = x.$render, x.$render = function () {
              N(), h(), g(), v();
            }, x.$render()));
          });
        }), u.$observe("disabled", function (e) {
          t.isString(e) && (e = !0), w !== n && w === e || (w = e, e ? c.attr({ "aria-disabled": "true" }).removeAttr("tabindex").off("click", y).off("keydown", $) : c.attr({ tabindex: u.tabindex, "aria-disabled": "false" }).on("click", y).on("keydown", $));
        }), u.hasOwnProperty("disabled") || u.hasOwnProperty("ngDisabled") || (c.attr({ "aria-disabled": "false" }), c.on("click", y), c.on("keydown", $));var I = { role: "listbox", "aria-expanded": "false", "aria-multiselectable": m && !u.ngMultiple ? "true" : "false" };c[0].hasAttribute("id") || (I.id = "select_" + i.nextUid());var L = "select_container_" + i.nextUid();R.attr("id", L), I["aria-owns"] = L, c.attr(I), s.$on("$destroy", function () {
          e.destroy()["finally"](function () {
            k && (k.setFocused(!1), k.setHasValue(!1), k.input = null), x.$setTouched();
          });
        });
      };
    }var u = r.KEY_CODE;[u.SPACE, u.ENTER, u.UP_ARROW, u.DOWN_ARROW];return { restrict: "E", require: ["^?mdInputContainer", "mdSelect", "ngModel", "?^form"], compile: c, controller: function controller() {} };
  }function r(e, i, r, l) {
    function o(e, n, r, o) {
      function a(e) {
        13 != e.keyCode && 32 != e.keyCode || d(e);
      }function d(n) {
        var r = i.getClosest(n.target, "md-option"),
            l = r && t.element(r).data("$mdOptionController");if (r && l) {
          if (r.hasAttribute("disabled")) return n.stopImmediatePropagation(), !1;var o = s.hashGetter(l.value),
              a = t.isDefined(s.selected[o]);e.$apply(function () {
            s.isMultiple ? a ? s.deselect(o) : s.select(o, l.value) : a || (s.deselect(Object.keys(s.selected)[0]), s.select(o, l.value)), s.refreshViewValue();
          });
        }
      }var s = o[0];n.addClass("_md"), l(n), n.on("click", d), n.on("keypress", a);
    }function a(l, o, a) {
      function d() {
        var e = u.ngModel.$modelValue || u.ngModel.$viewValue || [];if (t.isArray(e)) {
          var n = Object.keys(u.selected),
              i = e.map(u.hashGetter),
              r = n.filter(function (e) {
            return i.indexOf(e) === -1;
          });r.forEach(u.deselect), i.forEach(function (t, n) {
            u.select(t, e[n]);
          });
        }
      }function s() {
        var e = u.ngModel.$viewValue || u.ngModel.$modelValue;Object.keys(u.selected).forEach(u.deselect), u.select(u.hashGetter(e), e);
      }var u = this;u.isMultiple = t.isDefined(o.multiple), u.selected = {}, u.options = {}, l.$watchCollection(function () {
        return u.options;
      }, function () {
        u.ngModel.$render();
      });var p, f;u.setMultiple = function (e) {
        function n(e, n) {
          return t.isArray(e || n || []);
        }var i = u.ngModel;f = f || i.$isEmpty, u.isMultiple = e, p && p(), u.isMultiple ? (i.$validators["md-multiple"] = n, i.$render = d, l.$watchCollection(u.modelBinding, function (e) {
          n(e) && d(e), u.ngModel.$setPristine();
        }), i.$isEmpty = function (e) {
          return !e || 0 === e.length;
        }) : (delete i.$validators["md-multiple"], i.$render = s);
      };var m,
          h,
          g,
          v = "",
          b = 300;u.optNodeForKeyboardSearch = function (e) {
        m && clearTimeout(m), m = setTimeout(function () {
          m = n, v = "", g = n, h = n;
        }, b);var i = e.keyCode - (r.isNumPadKey(e) ? 48 : 0);v += String.fromCharCode(i);var l = new RegExp("^" + v, "i");h || (h = a.find("md-option"), g = new Array(h.length), t.forEach(h, function (e, t) {
          g[t] = e.textContent.trim();
        }));for (var o = 0; o < g.length; ++o) {
          if (l.test(g[o])) return h[o];
        }
      }, u.init = function (n, r) {
        u.ngModel = n, u.modelBinding = r, u.ngModel.$isEmpty = function (e) {
          return !u.options[u.hashGetter(e)];
        };var o = i.getModelOption(n, "trackBy");if (o) {
          var a = {},
              d = e(o);u.hashGetter = function (e, t) {
            return a.$value = e, d(t || l, a);
          };
        } else u.hashGetter = function (e) {
          return t.isObject(e) ? "object_" + (e.$$mdSelectId || (e.$$mdSelectId = ++c)) : e;
        };u.setMultiple(u.isMultiple);
      }, u.selectedLabels = function (e) {
        e = e || {};var t = e.mode || "html",
            n = i.nodesToArray(a[0].querySelectorAll("md-option[selected]"));if (n.length) {
          var r;return "html" == t ? r = function r(e) {
            if (e.hasAttribute("md-option-empty")) return "";var t = e.innerHTML,
                n = e.querySelector(".md-ripple-container");n && (t = t.replace(n.outerHTML, ""));var i = e.querySelector(".md-container");return i && (t = t.replace(i.outerHTML, "")), t;
          } : "aria" == t && (r = function r(e) {
            return e.hasAttribute("aria-label") ? e.getAttribute("aria-label") : e.textContent;
          }), i.uniq(n.map(r)).join(", ");
        }return "";
      }, u.select = function (e, t) {
        var n = u.options[e];n && n.setSelected(!0), u.selected[e] = t;
      }, u.deselect = function (e) {
        var t = u.options[e];t && t.setSelected(!1), delete u.selected[e];
      }, u.addOption = function (e, n) {
        if (t.isDefined(u.options[e])) throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "' + n.value + '" found.');u.options[e] = n, t.isDefined(u.selected[e]) && (u.select(e, n.value), t.isDefined(u.ngModel.$modelValue) && u.hashGetter(u.ngModel.$modelValue) === e && u.ngModel.$validate(), u.refreshViewValue());
      }, u.removeOption = function (e) {
        delete u.options[e];
      }, u.refreshViewValue = function () {
        var e,
            n = [];for (var r in u.selected) {
          (e = u.options[r]) ? n.push(e.value) : n.push(u.selected[r]);
        }var l = i.getModelOption(u.ngModel, "trackBy"),
            o = u.isMultiple ? n : n[0],
            a = u.ngModel.$modelValue;(l ? t.equals(a, o) : a == o) || (u.ngModel.$setViewValue(o), u.ngModel.$render());
      };
    }return a.$inject = ["$scope", "$attrs", "$element"], { restrict: "E", require: ["mdSelectMenu"], scope: !1, controller: a, link: { pre: o } };
  }function l(e, n) {
    function i(e, n) {
      return e.append(t.element('<div class="md-text">').append(e.contents())), e.attr("tabindex", n.tabindex || "0"), r(n) || e.attr("md-option-empty", ""), l;
    }function r(e) {
      var t = e.value,
          n = e.ngValue;return t || n;
    }function l(i, r, l, o) {
      function a(e, t, n) {
        if (!c.hashGetter) return void (n || i.$$postDigest(function () {
          a(e, t, !0);
        }));var r = c.hashGetter(t, i),
            l = c.hashGetter(e, i);s.hashKey = l, s.value = e, c.removeOption(r, s), c.addOption(l, s);
      }function d() {
        var e = { role: "option", "aria-selected": "false" };r[0].hasAttribute("id") || (e.id = "select_option_" + n.nextUid()), r.attr(e);
      }var s = o[0],
          c = o[1];c.isMultiple && (r.addClass("md-checkbox-enabled"), r.prepend(u.clone())), t.isDefined(l.ngValue) ? i.$watch(l.ngValue, a) : t.isDefined(l.value) ? a(l.value) : i.$watch(function () {
        return r.text().trim();
      }, a), l.$observe("disabled", function (e) {
        e ? r.attr("tabindex", "-1") : r.attr("tabindex", "0");
      }), i.$$postDigest(function () {
        l.$observe("selected", function (e) {
          t.isDefined(e) && ("string" == typeof e && (e = !0), e ? (c.isMultiple || c.deselect(Object.keys(c.selected)[0]), c.select(s.hashKey, s.value)) : c.deselect(s.hashKey), c.refreshViewValue());
        });
      }), e.attach(i, r), d(), i.$on("$destroy", function () {
        c.removeOption(s.hashKey, s);
      });
    }function o(e) {
      this.selected = !1, this.setSelected = function (t) {
        t && !this.selected ? e.attr({ selected: "selected", "aria-selected": "true" }) : !t && this.selected && (e.removeAttr("selected"), e.attr("aria-selected", "false")), this.selected = t;
      };
    }return o.$inject = ["$element"], { restrict: "E", require: ["mdOption", "^^mdSelectMenu"], controller: o, compile: i };
  }function o() {
    function e(e, n) {
      function i() {
        return e.parent().find("md-select-header").length;
      }function r() {
        var i = e.find("label");i.length || (i = t.element("<label>"), e.prepend(i)), i.addClass("md-container-ignore"), n.label && i.text(n.label);
      }i() || r();
    }return { restrict: "E", compile: e };
  }function a() {
    return { restrict: "E" };
  }function d(i) {
    function r(i, r, c, u, p, f, m, h, g) {
      function v(e, t, n) {
        function i() {
          return m(t, { addClass: "md-leave" }).start();
        }function r() {
          t.removeClass("md-active"), t.attr("aria-hidden", "true"), t[0].style.display = "none", $(n), !n.$destroy && n.restoreFocus && n.target.focus();
        }return n = n || {}, n.cleanupInteraction(), n.cleanupResizing(), n.hideBackdrop(), n.$destroy === !0 ? r() : i().then(r);
      }function b(e, l, o) {
        function a(e, t, n) {
          return n.parent.append(t), p(function (e, n) {
            try {
              m(t, { removeClass: "md-leave", duration: 0 }).start().then(d).then(e);
            } catch (i) {
              n(i);
            }
          });
        }function d() {
          return p(function (t) {
            if (o.isRemoved) return p.reject(!1);var n = y(e, l, o);n.container.element.css(C.toCss(n.container.styles)), n.dropDown.element.css(C.toCss(n.dropDown.styles)), f(function () {
              l.addClass("md-active"), n.dropDown.element.css(C.toCss({ transform: "" })), v(o.focusedNode), t();
            });
          });
        }function s(e, t, n) {
          return n.disableParentScroll && !c.getClosest(n.target, "MD-DIALOG") ? n.restoreScroll = c.disableScrollAround(n.element, n.parent) : n.disableParentScroll = !1, n.hasBackdrop && (n.backdrop = c.createBackdrop(e, "md-select-backdrop md-click-catcher"), h.enter(n.backdrop, g[0].body, null, { duration: 0 })), function () {
            n.backdrop && n.backdrop.remove(), n.disableParentScroll && n.restoreScroll(), delete n.restoreScroll;
          };
        }function v(e) {
          e && !e.hasAttribute("disabled") && e.focus();
        }function b(e, n) {
          var i = l.find("md-select-menu");if (!n.target) throw new Error(c.supplant(w, [n.target]));t.extend(n, { isRemoved: !1, target: t.element(n.target), parent: t.element(n.parent), selectEl: i, contentEl: l.find("md-content"), optionNodes: i[0].getElementsByTagName("md-option") });
        }function $() {
          var n = function (e, t, n) {
            return function () {
              if (!n.isRemoved) {
                var i = y(e, t, n),
                    r = i.container,
                    l = i.dropDown;r.element.css(C.toCss(r.styles)), l.element.css(C.toCss(l.styles));
              }
            };
          }(e, l, o),
              i = t.element(u);return i.on("resize", n), i.on("orientationchange", n), function () {
            i.off("resize", n), i.off("orientationchange", n);
          };
        }function k() {
          o.loadingAsync && !o.isRemoved && (e.$$loadingAsyncDone = !1, p.when(o.loadingAsync).then(function () {
            e.$$loadingAsyncDone = !0, delete o.loadingAsync;
          }).then(function () {
            f(d);
          }));
        }function S() {
          function e(e) {
            e.preventDefault(), e.stopPropagation(), o.restoreFocus = !1, c.nextTick(i.hide, !0);
          }function t(e) {
            switch (e.preventDefault(), e.stopPropagation(), e.keyCode) {case M.UP_ARROW:
                return s();case M.DOWN_ARROW:
                return d();case M.SPACE:case M.ENTER:
                var t = c.getClosest(e.target, "md-option");t && (p.triggerHandler({ type: "click", target: t }), e.preventDefault()), u(e);break;case M.TAB:case M.ESCAPE:
                e.stopPropagation(), e.preventDefault(), o.restoreFocus = !0, c.nextTick(i.hide, !0);break;default:
                if (r.isInputKey(e) || r.isNumPadKey(e)) {
                  var n = p.controller("mdSelectMenu").optNodeForKeyboardSearch(e);o.focusedNode = n || o.focusedNode, n && n.focus();
                }}
          }function a(e) {
            var t,
                i = c.nodesToArray(o.optionNodes),
                r = i.indexOf(o.focusedNode);do {
              r === -1 ? r = 0 : "next" === e && r < i.length - 1 ? r++ : "prev" === e && r > 0 && r--, t = i[r], t.hasAttribute("disabled") && (t = n);
            } while (!t && r < i.length - 1 && r > 0);t && t.focus(), o.focusedNode = t;
          }function d() {
            a("next");
          }function s() {
            a("prev");
          }function u(e) {
            function t() {
              var t = !1;if (e && e.currentTarget.children.length > 0) {
                var n = e.currentTarget.children[0],
                    i = n.scrollHeight > n.clientHeight;if (i && n.children.length > 0) {
                  var r = e.pageX - e.currentTarget.getBoundingClientRect().left;r > n.querySelector("md-option").offsetWidth && (t = !0);
                }
              }return t;
            }if (!(e && "click" == e.type && e.currentTarget != p[0] || t())) {
              var n = c.getClosest(e.target, "md-option");n && n.hasAttribute && !n.hasAttribute("disabled") && (e.preventDefault(), e.stopPropagation(), f.isMultiple || (o.restoreFocus = !0, c.nextTick(function () {
                i.hide(f.ngModel.$viewValue);
              }, !0)));
            }
          }if (!o.isRemoved) {
            var p = o.selectEl,
                f = p.controller("mdSelectMenu") || {};return l.addClass("md-clickable"), o.backdrop && o.backdrop.on("click", e), p.on("keydown", t), p.on("click", u), function () {
              o.backdrop && o.backdrop.off("click", e), p.off("keydown", t), p.off("click", u), l.removeClass("md-clickable"), o.isRemoved = !0;
            };
          }
        }return k(), b(e, o), o.hideBackdrop = s(e, l, o), a(e, l, o).then(function (e) {
          return l.attr("aria-hidden", "false"), o.alreadyOpen = !0, o.cleanupInteraction = S(), o.cleanupResizing = $(), e;
        }, o.hideBackdrop);
      }function $(e) {
        var t = e.selectCtrl;if (t) {
          var n = e.selectEl.controller("mdSelectMenu");t.setLabelText(n ? n.selectedLabels() : ""), t.triggerClose();
        }
      }function y(n, i, r) {
        var p,
            f = i[0],
            m = r.target[0].children[0],
            h = g[0].body,
            v = r.selectEl[0],
            b = r.contentEl[0],
            $ = h.getBoundingClientRect(),
            y = m.getBoundingClientRect(),
            w = !1,
            C = { left: $.left + s, top: s, bottom: $.height - s, right: $.width - s - (c.floatingScrollbars() ? 16 : 0) },
            M = { top: y.top - C.top, left: y.left - C.left, right: C.right - (y.left + y.width), bottom: C.bottom - (y.top + y.height) },
            k = $.width - 2 * s,
            S = v.querySelector("md-option[selected]"),
            x = v.getElementsByTagName("md-option"),
            A = v.getElementsByTagName("md-optgroup"),
            O = d(i, b),
            E = l(r.loadingAsync);p = E ? b.firstElementChild || b : S ? S : A.length ? A[0] : x.length ? x[0] : b.firstElementChild || b, b.offsetWidth > k ? b.style["max-width"] = k + "px" : b.style.maxWidth = null, w && (b.style["min-width"] = y.width + "px"), O && v.classList.add("md-overflow");var T = p;"MD-OPTGROUP" === (T.tagName || "").toUpperCase() && (T = x[0] || b.firstElementChild || b, p = T), r.focusedNode = T, f.style.display = "block";var D = v.getBoundingClientRect(),
            R = a(p);if (p) {
          var P = u.getComputedStyle(p);R.paddingLeft = parseInt(P.paddingLeft, 10) || 0, R.paddingRight = parseInt(P.paddingRight, 10) || 0;
        }if (O) {
          var V = b.offsetHeight / 2;b.scrollTop = R.top + R.height / 2 - V, M.top < V ? b.scrollTop = Math.min(R.top, b.scrollTop + V - M.top) : M.bottom < V && (b.scrollTop = Math.max(R.top + R.height - D.height, b.scrollTop - V + M.bottom));
        }var N, B, I, L, _;w ? (N = y.left, B = y.top + y.height, I = "50% 0", B + D.height > C.bottom && (B = y.top - D.height, I = "50% 100%")) : (N = y.left + R.left - R.paddingLeft + 2, B = Math.floor(y.top + y.height / 2 - R.height / 2 - R.top + b.scrollTop) + 2, I = R.left + y.width / 2 + "px " + (R.top + R.height / 2 - b.scrollTop) + "px 0px", L = Math.min(y.width + R.paddingLeft + R.paddingRight, k), _ = e.getComputedStyle(m)["font-size"]);var H = f.getBoundingClientRect(),
            j = Math.round(100 * Math.min(y.width / D.width, 1)) / 100,
            K = Math.round(100 * Math.min(y.height / D.height, 1)) / 100;return { container: { element: t.element(f), styles: { left: Math.floor(o(C.left, N, C.right - H.width)), top: Math.floor(o(C.top, B, C.bottom - H.height)), "min-width": L, "font-size": _ } }, dropDown: { element: t.element(v), styles: { transformOrigin: I, transform: r.alreadyOpen ? "" : c.supplant("scale({0},{1})", [j, K]) } } };
      }var w = "$mdSelect.show() expected a target element in options.target but got '{0}'!",
          C = c.dom.animator,
          M = r.KEY_CODE;return { parent: "body", themable: !0, onShow: b, onRemove: v, hasBackdrop: !0, disableParentScroll: !0 };
    }function l(e) {
      return e && t.isFunction(e.then);
    }function o(e, t, n) {
      return Math.max(e, Math.min(t, n));
    }function a(e) {
      return e ? { left: e.offsetLeft, top: e.offsetTop, width: e.offsetWidth, height: e.offsetHeight } : { left: 0, top: 0, width: 0, height: 0 };
    }function d(e, t) {
      var n = !1;try {
        var i = e[0].style.display;e[0].style.display = "block", n = t.scrollHeight > t.offsetHeight, e[0].style.display = i;
      } finally {}return n;
    }return r.$inject = ["$mdSelect", "$mdConstant", "$mdUtil", "$window", "$q", "$$rAF", "$animateCss", "$animate", "$document"], i("$mdSelect").setDefaults({ methods: ["target"], options: r });
  }i.$inject = ["$mdSelect", "$mdUtil", "$mdConstant", "$mdTheming", "$mdAria", "$parse", "$sce", "$injector"], r.$inject = ["$parse", "$mdUtil", "$mdConstant", "$mdTheming"], l.$inject = ["$mdButtonInkRipple", "$mdUtil"], d.$inject = ["$$interimElementProvider"];var s = 8,
      c = 0,
      u = t.element('<div class="md-container"><div class="md-icon"></div></div>');t.module("material.components.select", ["material.core", "material.components.backdrop"]).directive("mdSelect", i).directive("mdSelectMenu", r).directive("mdOption", l).directive("mdOptgroup", o).directive("mdSelectHeader", a).provider("$mdSelect", d);
}(window, window.angular);

//# sourceMappingURL=select.min-compiled.js.map