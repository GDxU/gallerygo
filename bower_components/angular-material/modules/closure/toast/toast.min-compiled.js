"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function MdToastDirective(t) {
  return { restrict: "E", link: function link(e, n) {
      n.addClass("_md"), e.$on("$destroy", function () {
        t.destroy();
      });
    } };
}function MdToastProvider(t) {
  function e(t) {
    o = t;
  }function n(t, e, n, a) {
    function s(s, i, l) {
      o = l.textContent || l.content;var m = !a("gt-sm");return i = n.extractElementByName(i, "md-toast", !0), l.element = i, l.onSwipe = function (t, o) {
        var a = t.type.replace("$md.", ""),
            s = a.replace("swipe", "");"down" === s && l.position.indexOf("top") != -1 && !m || "up" === s && (l.position.indexOf("bottom") != -1 || m) || ("left" !== s && "right" !== s || !m) && (i.addClass("md-" + a), n.nextTick(e.cancel));
      }, l.openClass = r(l.position), i.addClass(l.toastClass), l.parent.addClass(l.openClass), n.hasComputedStyle(l.parent, "position", "static") && l.parent.css("position", "relative"), i.on(d, l.onSwipe), i.addClass(m ? "md-bottom" : l.position.split(" ").map(function (t) {
        return "md-" + t;
      }).join(" ")), l.parent && l.parent.addClass("md-toast-animating"), t.enter(i, l.parent).then(function () {
        l.parent && l.parent.removeClass("md-toast-animating");
      });
    }function i(e, o, a) {
      return o.off(d, a.onSwipe), a.parent && a.parent.addClass("md-toast-animating"), a.openClass && a.parent.removeClass(a.openClass), (1 == a.$destroy ? o.remove() : t.leave(o)).then(function () {
        a.parent && a.parent.removeClass("md-toast-animating"), n.hasComputedStyle(a.parent, "position", "static") && a.parent.css("position", "");
      });
    }function r(t) {
      return a("gt-xs") ? "md-toast-open-" + (t.indexOf("top") > -1 ? "top" : "bottom") : "md-toast-open-bottom";
    }var d = "$md.swipeleft $md.swiperight $md.swipeup $md.swipedown";return { onShow: s, onRemove: i, toastClass: "", position: "bottom left", themable: !0, hideDelay: 3e3, autoWrap: !0, transformTemplate: function transformTemplate(t, e) {
        var n = e.autoWrap && t && !/md-toast-content/g.test(t);if (n) {
          var o = document.createElement("md-template");o.innerHTML = t;for (var a = 0; a < o.children.length; a++) {
            if ("MD-TOAST" === o.children[a].nodeName) {
              var s = angular.element('<div class="md-toast-content">');s.append(angular.element(o.children[a].childNodes)), o.children[a].appendChild(s[0]);
            }
          }return o.innerHTML;
        }return t || "";
      } };
  }n.$inject = ["$animate", "$mdToast", "$mdUtil", "$mdMedia"];var o,
      a = "ok",
      s = t("$mdToast").setDefaults({ methods: ["position", "hideDelay", "capsule", "parent", "position", "toastClass"], options: n }).addPreset("simple", { argOption: "textContent", methods: ["textContent", "content", "action", "highlightAction", "highlightClass", "theme", "parent"], options: ["$mdToast", "$mdTheming", function (t, e) {
      return { template: '<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">  <div class="md-toast-content">    <span class="md-toast-text" role="alert" aria-relevant="all" aria-atomic="true">      {{ toast.content }}    </span>    <md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()"         ng-class="highlightClasses">      {{ toast.action }}    </md-button>  </div></md-toast>', controller: ["$scope", function (e) {
          var n = this;n.highlightAction && (e.highlightClasses = ["md-highlight", n.highlightClass]), e.$watch(function () {
            return o;
          }, function () {
            n.content = o;
          }), this.resolve = function () {
            t.hide(a);
          };
        }], theme: e.defaultTheme(), controllerAs: "toast", bindToController: !0 };
    }] }).addMethod("updateTextContent", e).addMethod("updateContent", e);return s;
}goog.provide("ngmaterial.components.toast"), goog.require("ngmaterial.components.button"), goog.require("ngmaterial.core"), MdToastDirective.$inject = ["$mdToast"], MdToastProvider.$inject = ["$$interimElementProvider"], angular.module("material.components.toast", ["material.core", "material.components.button"]).directive("mdToast", MdToastDirective).provider("$mdToast", MdToastProvider), ngmaterial.components.toast = angular.module("material.components.toast");

//# sourceMappingURL=toast.min-compiled.js.map