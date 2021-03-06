"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function MdDialogDirective(e, t, n) {
  return { restrict: "E", link: function link(o, a) {
      a.addClass("_md"), t(a), e(function () {
        function e() {
          a.toggleClass("md-content-overflow", i.scrollHeight > i.clientHeight);
        }var t,
            i = a[0].querySelector("md-dialog-content");i && (t = i.getElementsByTagName("img"), e(), angular.element(t).on("load", e)), o.$on("$destroy", function () {
          n.destroy(a);
        });
      });
    } };
}function MdDialogProvider(e) {
  function t(e, t) {
    return { template: ['<md-dialog md-theme="{{ dialog.theme || dialog.defaultTheme }}" aria-label="{{ dialog.ariaLabel }}" ng-class="dialog.css">', '  <md-dialog-content class="md-dialog-content" role="document" tabIndex="-1">', '    <h2 class="md-title">{{ dialog.title }}</h2>', '    <div ng-if="::dialog.mdHtmlContent" class="md-dialog-content-body" ', '        ng-bind-html="::dialog.mdHtmlContent"></div>', '    <div ng-if="::!dialog.mdHtmlContent" class="md-dialog-content-body">', "      <p>{{::dialog.mdTextContent}}</p>", "    </div>", '    <md-input-container md-no-float ng-if="::dialog.$type == \'prompt\'" class="md-prompt-input-container">', '      <input ng-keypress="dialog.keypress($event)" md-autofocus ng-model="dialog.result"              placeholder="{{::dialog.placeholder}}">', "    </md-input-container>", "  </md-dialog-content>", "  <md-dialog-actions>", '    <md-button ng-if="dialog.$type === \'confirm\' || dialog.$type === \'prompt\'"               ng-click="dialog.abort()" class="md-primary md-cancel-button">', "      {{ dialog.cancel }}", "    </md-button>", '    <md-button ng-click="dialog.hide()" class="md-primary md-confirm-button" md-autofocus="dialog.$type===\'alert\'">', "      {{ dialog.ok }}", "    </md-button>", "  </md-dialog-actions>", "</md-dialog>"].join("").replace(/\s\s+/g, ""), controller: function controller() {
        var n = "prompt" == this.$type;n && this.initialValue && (this.result = this.initialValue), this.hide = function () {
          e.hide(!n || this.result);
        }, this.abort = function () {
          e.cancel();
        }, this.keypress = function (n) {
          n.keyCode === t.KEY_CODE.ENTER && e.hide(this.result);
        };
      }, controllerAs: "dialog", bindToController: !0 };
  }function n(e, t, n, i, r, l, d, c, s, m, u, g, p) {
    function f(e) {
      e.defaultTheme = u.defaultTheme(), b(e);
    }function h(e, t, n, o) {
      if (o) {
        var a = o.htmlContent || n.htmlContent || "",
            i = o.textContent || n.textContent || o.content || n.content || "";if (a && !m.has("$sanitize")) throw Error("The ngSanitize module must be loaded in order to use htmlContent.");if (a && i) throw Error("md-dialog cannot have both `htmlContent` and `textContent`");o.mdHtmlContent = a, o.mdTextContent = i;
      }
    }function v(e, t, o, a) {
      function i() {
        function e() {
          return t[0].querySelector(".dialog-close, md-dialog-actions button:last-child");
        }if (o.focusOnOpen) {
          var a = n.findFocusTarget(t) || e() || r;a.focus();
        }
      }angular.element(l[0].body).addClass("md-dialog-is-showing");var r = t.find("md-dialog");if (r.hasClass("ng-cloak")) {
        var d = "$mdDialog: using `<md-dialog ng-cloak>` will affect the dialog opening animations.";s.warn(d, t[0]);
      }return $(o), T(r, o), y(e, t, o), k(t, o), x(t, o).then(function () {
        E(t, o), i();
      });
    }function C(e, t, n) {
      function i() {
        return D(t, n);
      }function r() {
        angular.element(l[0].body).removeClass("md-dialog-is-showing"), n.contentElement && n.reverseContainerStretch(), n.cleanupElement(), n.$destroy || "keyboard" !== n.originInteraction || n.origin.focus();
      }return n.deactivateListeners(), n.unlockScreenReader(), n.hideBackdrop(n.$destroy), o && o.parentNode && o.parentNode.removeChild(o), a && a.parentNode && a.parentNode.removeChild(a), n.$destroy ? r() : i().then(r);
    }function b(e) {
      var t;e.targetEvent && e.targetEvent.target && (t = angular.element(e.targetEvent.target));var n = t && t.controller("mdTheme");if (n) {
        e.themeWatch = n.$shouldWatch;var o = e.theme || n.$mdTheme;o && (e.scope.theme = o);var a = n.registerChanges(function (t) {
          e.scope.theme = t, e.themeWatch || a();
        });
      }
    }function $(e) {
      function t(e, t) {
        var n = angular.element(e || {});if (n && n.length) {
          var o = { top: 0, left: 0, height: 0, width: 0 },
              a = angular.isFunction(n[0].getBoundingClientRect);return angular.extend(t || {}, { element: a ? n : void 0, bounds: a ? n[0].getBoundingClientRect() : angular.extend({}, o, n[0]), focus: angular.bind(n, n.focus) });
        }
      }function n(e, t) {
        return angular.isString(e) && (e = l[0].querySelector(e)), angular.element(e || t);
      }e.origin = angular.extend({ element: null, bounds: null, focus: angular.noop }, e.origin || {}), e.parent = n(e.parent, c), e.closeTo = t(n(e.closeTo)), e.openFrom = t(n(e.openFrom)), e.targetEvent && (e.origin = t(e.targetEvent.target, e.origin), e.originInteraction = p.getLastInteractionType());
    }function k(t, o) {
      var a = angular.element(d),
          r = n.debounce(function () {
        S(t, o);
      }, 60),
          l = [],
          c = function c() {
        var t = "alert" == o.$type ? e.hide : e.cancel;n.nextTick(t, !0);
      };if (o.escapeToClose) {
        var s = o.parent,
            m = function m(e) {
          e.keyCode === i.KEY_CODE.ESCAPE && (e.stopPropagation(), e.preventDefault(), c());
        };t.on("keydown", m), s.on("keydown", m), l.push(function () {
          t.off("keydown", m), s.off("keydown", m);
        });
      }if (a.on("resize", r), l.push(function () {
        a.off("resize", r);
      }), o.clickOutsideToClose) {
        var u,
            g = t,
            p = function p(e) {
          u = e.target;
        },
            f = function f(e) {
          u === g[0] && e.target === g[0] && (e.stopPropagation(), e.preventDefault(), c());
        };g.on("mousedown", p), g.on("mouseup", f), l.push(function () {
          g.off("mousedown", p), g.off("mouseup", f);
        });
      }o.deactivateListeners = function () {
        l.forEach(function (e) {
          e();
        }), o.deactivateListeners = null;
      };
    }function y(e, t, o) {
      o.disableParentScroll && (o.restoreScroll = n.disableScrollAround(t, o.parent)), o.hasBackdrop && (o.backdrop = n.createBackdrop(e, "md-dialog-backdrop md-opaque"), r.enter(o.backdrop, o.parent)), o.hideBackdrop = function (e) {
        o.backdrop && (e ? o.backdrop.remove() : r.leave(o.backdrop)), o.disableParentScroll && (o.restoreScroll && o.restoreScroll(), delete o.restoreScroll), o.hideBackdrop = null;
      };
    }function T(e, i) {
      var r = "alert" === i.$type ? "alertdialog" : "dialog",
          l = e.find("md-dialog-content"),
          d = e.attr("id"),
          c = "dialogContent_" + (d || n.nextUid());e.attr({ role: r, tabIndex: "-1" }), 0 === l.length && (l = e, d && (c = d)), l.attr("id", c), e.attr("aria-describedby", c), i.ariaLabel ? t.expect(e, "aria-label", i.ariaLabel) : t.expectAsync(e, "aria-label", function () {
        var e = l.text().split(/\s+/);return e.length > 3 && (e = e.slice(0, 3).concat("...")), e.join(" ");
      }), o = document.createElement("div"), o.classList.add("md-dialog-focus-trap"), o.tabIndex = 0, a = o.cloneNode(!1);var s = function s() {
        e.focus();
      };o.addEventListener("focus", s), a.addEventListener("focus", s), e[0].parentNode.insertBefore(o, e[0]), e.after(a);
    }function E(e, t) {
      function n(e) {
        for (; e.parentNode;) {
          if (e === document.body) return;for (var t = e.parentNode.children, a = 0; a < t.length; a++) {
            e === t[a] || w(t[a], ["SCRIPT", "STYLE"]) || t[a].setAttribute("aria-hidden", o);
          }n(e = e.parentNode);
        }
      }var o = !0;n(e[0]), t.unlockScreenReader = function () {
        o = !1, n(e[0]), t.unlockScreenReader = null;
      };
    }function S(e, t) {
      var n = "fixed" == d.getComputedStyle(l[0].body).position,
          o = t.backdrop ? d.getComputedStyle(t.backdrop[0]) : null,
          a = o ? Math.min(l[0].body.clientHeight, Math.ceil(Math.abs(parseInt(o.height, 10)))) : 0,
          i = { top: e.css("top"), height: e.css("height") },
          r = Math.abs(t.parent[0].getBoundingClientRect().top);return e.css({ top: (n ? r : 0) + "px", height: a ? a + "px" : "100%" }), function () {
        e.css(i);
      };
    }function x(e, t) {
      t.parent.append(e), t.reverseContainerStretch = S(e, t);var o = e.find("md-dialog"),
          a = n.dom.animator,
          i = a.calculateZoomToOrigin,
          r = { transitionInClass: "md-transition-in", transitionOutClass: "md-transition-out" },
          l = a.toTransformCss(i(o, t.openFrom || t.origin)),
          d = a.toTransformCss("");return o.toggleClass("md-dialog-fullscreen", !!t.fullscreen), a.translate3d(o, l, d, r).then(function (e) {
        return t.reverseAnimate = function () {
          return delete t.reverseAnimate, t.closeTo ? (r = { transitionInClass: "md-transition-out", transitionOutClass: "md-transition-in" }, l = d, d = a.toTransformCss(i(o, t.closeTo)), a.translate3d(o, l, d, r)) : e(d = a.toTransformCss(i(o, t.origin)));
        }, t.clearAnimate = function () {
          return delete t.clearAnimate, o.removeClass([r.transitionOutClass, r.transitionInClass].join(" ")), a.translate3d(o, d, a.toTransformCss(""), {});
        }, !0;
      });
    }function D(e, t) {
      return t.reverseAnimate().then(function () {
        t.contentElement && t.clearAnimate();
      });
    }function w(e, t) {
      if (t.indexOf(e.nodeName) !== -1) return !0;
    }return { hasBackdrop: !0, isolateScope: !0, onCompiling: f, onShow: v, onShowing: h, onRemove: C, clickOutsideToClose: !1, escapeToClose: !0, targetEvent: null, closeTo: null, openFrom: null, focusOnOpen: !0, disableParentScroll: !0, autoWrap: !0, fullscreen: !1, transformTemplate: function transformTemplate(e, t) {
        function n(e) {
          return t.autoWrap && !/<\/md-dialog>/g.test(e) ? "<md-dialog>" + (e || "") + "</md-dialog>" : e || "";
        }var o = g.startSymbol(),
            a = g.endSymbol(),
            i = o + (t.themeWatch ? "" : "::") + "theme" + a;return '<div class="md-dialog-container" tabindex="-1" md-theme="' + i + '">' + n(e) + "</div>";
      } };
  }t.$inject = ["$mdDialog", "$mdConstant"], n.$inject = ["$mdDialog", "$mdAria", "$mdUtil", "$mdConstant", "$animate", "$document", "$window", "$rootElement", "$log", "$injector", "$mdTheming", "$interpolate", "$mdInteraction"];var o, a;return e("$mdDialog").setDefaults({ methods: ["disableParentScroll", "hasBackdrop", "clickOutsideToClose", "escapeToClose", "targetEvent", "closeTo", "openFrom", "parent", "fullscreen", "multiple"], options: n }).addPreset("alert", { methods: ["title", "htmlContent", "textContent", "content", "ariaLabel", "ok", "theme", "css"], options: t }).addPreset("confirm", { methods: ["title", "htmlContent", "textContent", "content", "ariaLabel", "ok", "cancel", "theme", "css"], options: t }).addPreset("prompt", { methods: ["title", "htmlContent", "textContent", "initialValue", "content", "placeholder", "ariaLabel", "ok", "cancel", "theme", "css"], options: t });
}goog.provide("ngmaterial.components.dialog"), goog.require("ngmaterial.components.backdrop"), goog.require("ngmaterial.core"), MdDialogDirective.$inject = ["$$rAF", "$mdTheming", "$mdDialog"], MdDialogProvider.$inject = ["$$interimElementProvider"], angular.module("material.components.dialog", ["material.core", "material.components.backdrop"]).directive("mdDialog", MdDialogDirective).provider("$mdDialog", MdDialogProvider), ngmaterial.components.dialog = angular.module("material.components.dialog");

//# sourceMappingURL=dialog.min-compiled.js.map