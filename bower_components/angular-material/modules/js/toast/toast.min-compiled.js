"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (t, e, n) {
  "use strict";
  function o(t) {
    return { restrict: "E", link: function link(e, n) {
        n.addClass("_md"), e.$on("$destroy", function () {
          t.destroy();
        });
      } };
  }function a(t) {
    function n(t) {
      a = t;
    }function o(t, n, o, s) {
      function i(e, i, r) {
        a = r.textContent || r.content;var m = !s("gt-sm");return i = o.extractElementByName(i, "md-toast", !0), r.element = i, r.onSwipe = function (t, e) {
          var a = t.type.replace("$md.", ""),
              s = a.replace("swipe", "");"down" === s && r.position.indexOf("top") != -1 && !m || "up" === s && (r.position.indexOf("bottom") != -1 || m) || ("left" !== s && "right" !== s || !m) && (i.addClass("md-" + a), o.nextTick(n.cancel));
        }, r.openClass = d(r.position), i.addClass(r.toastClass), r.parent.addClass(r.openClass), o.hasComputedStyle(r.parent, "position", "static") && r.parent.css("position", "relative"), i.on(l, r.onSwipe), i.addClass(m ? "md-bottom" : r.position.split(" ").map(function (t) {
          return "md-" + t;
        }).join(" ")), r.parent && r.parent.addClass("md-toast-animating"), t.enter(i, r.parent).then(function () {
          r.parent && r.parent.removeClass("md-toast-animating");
        });
      }function r(e, n, a) {
        return n.off(l, a.onSwipe), a.parent && a.parent.addClass("md-toast-animating"), a.openClass && a.parent.removeClass(a.openClass), (1 == a.$destroy ? n.remove() : t.leave(n)).then(function () {
          a.parent && a.parent.removeClass("md-toast-animating"), o.hasComputedStyle(a.parent, "position", "static") && a.parent.css("position", "");
        });
      }function d(t) {
        return s("gt-xs") ? "md-toast-open-" + (t.indexOf("top") > -1 ? "top" : "bottom") : "md-toast-open-bottom";
      }var l = "$md.swipeleft $md.swiperight $md.swipeup $md.swipedown";return { onShow: i, onRemove: r, toastClass: "", position: "bottom left", themable: !0, hideDelay: 3e3, autoWrap: !0, transformTemplate: function transformTemplate(t, n) {
          var o = n.autoWrap && t && !/md-toast-content/g.test(t);if (o) {
            var a = document.createElement("md-template");a.innerHTML = t;for (var s = 0; s < a.children.length; s++) {
              if ("MD-TOAST" === a.children[s].nodeName) {
                var i = e.element('<div class="md-toast-content">');i.append(e.element(a.children[s].childNodes)), a.children[s].appendChild(i[0]);
              }
            }return a.innerHTML;
          }return t || "";
        } };
    }o.$inject = ["$animate", "$mdToast", "$mdUtil", "$mdMedia"];var a,
        s = "ok",
        i = t("$mdToast").setDefaults({ methods: ["position", "hideDelay", "capsule", "parent", "position", "toastClass"], options: o }).addPreset("simple", { argOption: "textContent", methods: ["textContent", "content", "action", "highlightAction", "highlightClass", "theme", "parent"], options: ["$mdToast", "$mdTheming", function (t, e) {
        return { template: '<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">  <div class="md-toast-content">    <span class="md-toast-text" role="alert" aria-relevant="all" aria-atomic="true">      {{ toast.content }}    </span>    <md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()"         ng-class="highlightClasses">      {{ toast.action }}    </md-button>  </div></md-toast>', controller: ["$scope", function (e) {
            var n = this;n.highlightAction && (e.highlightClasses = ["md-highlight", n.highlightClass]), e.$watch(function () {
              return a;
            }, function () {
              n.content = a;
            }), this.resolve = function () {
              t.hide(s);
            };
          }], theme: e.defaultTheme(), controllerAs: "toast", bindToController: !0 };
      }] }).addMethod("updateTextContent", n).addMethod("updateContent", n);return i;
  }o.$inject = ["$mdToast"], a.$inject = ["$$interimElementProvider"], e.module("material.components.toast", ["material.core", "material.components.button"]).directive("mdToast", o).provider("$mdToast", a);
}(window, window.angular);

//# sourceMappingURL=toast.min-compiled.js.map