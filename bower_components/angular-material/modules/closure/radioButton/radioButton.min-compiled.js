"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function mdRadioGroupDirective(e, t, n, i) {
  function o(o, r, a, d) {
    function u() {
      r.hasClass("md-focused") || r.addClass("md-focused");
    }function c(n) {
      var i = n.which || n.keyCode;if (i == t.KEY_CODE.ENTER || n.currentTarget == n.target) switch (i) {case t.KEY_CODE.LEFT_ARROW:case t.KEY_CODE.UP_ARROW:
          n.preventDefault(), s.selectPrevious(), u();break;case t.KEY_CODE.RIGHT_ARROW:case t.KEY_CODE.DOWN_ARROW:
          n.preventDefault(), s.selectNext(), u();break;case t.KEY_CODE.ENTER:
          var o = angular.element(e.getClosest(r[0], "form"));o.length > 0 && o.triggerHandler("submit");}
    }r.addClass("_md"), n(r);var s = d[0],
        l = d[1] || e.fakeNgModel();s.init(l), o.mouseActive = !1, r.attr({ role: "radiogroup", tabIndex: r.attr("tabindex") || "0" }).on("keydown", c).on("mousedown", function (e) {
      o.mouseActive = !0, i(function () {
        o.mouseActive = !1;
      }, 100);
    }).on("focus", function () {
      o.mouseActive === !1 && s.$element.addClass("md-focused");
    }).on("blur", function () {
      s.$element.removeClass("md-focused");
    });
  }function r(e) {
    this._radioButtonRenderFns = [], this.$element = e;
  }function a() {
    return { init: function init(e) {
        this._ngModelCtrl = e, this._ngModelCtrl.$render = angular.bind(this, this.render);
      }, add: function add(e) {
        this._radioButtonRenderFns.push(e);
      }, remove: function remove(e) {
        var t = this._radioButtonRenderFns.indexOf(e);t !== -1 && this._radioButtonRenderFns.splice(t, 1);
      }, render: function render() {
        this._radioButtonRenderFns.forEach(function (e) {
          e();
        });
      }, setViewValue: function setViewValue(e, t) {
        this._ngModelCtrl.$setViewValue(e, t), this.render();
      }, getViewValue: function getViewValue() {
        return this._ngModelCtrl.$viewValue;
      }, selectNext: function selectNext() {
        return d(this.$element, 1);
      }, selectPrevious: function selectPrevious() {
        return d(this.$element, -1);
      }, setActiveDescendant: function setActiveDescendant(e) {
        this.$element.attr("aria-activedescendant", e);
      }, isDisabled: function isDisabled() {
        return this.$element[0].hasAttribute("disabled");
      } };
  }function d(t, n) {
    var i = e.iterator(t[0].querySelectorAll("md-radio-button"), !0);if (i.count()) {
      var o = function o(e) {
        return !angular.element(e).attr("disabled");
      },
          r = t[0].querySelector("md-radio-button.md-checked"),
          a = i[n < 0 ? "previous" : "next"](r, o) || i.first();angular.element(a).triggerHandler("click");
    }
  }return r.prototype = a(), { restrict: "E", controller: ["$element", r], require: ["mdRadioGroup", "?ngModel"], link: { pre: o } };
}function mdRadioButtonDirective(e, t, n) {
  function i(i, r, a, d) {
    function u() {
      if (!d) throw "RadioButton: No RadioGroupController could be found.";d.add(s), a.$observe("value", s), r.on("click", c).on("$destroy", function () {
        d.remove(s);
      });
    }function c(e) {
      r[0].hasAttribute("disabled") || d.isDisabled() || i.$apply(function () {
        d.setViewValue(a.value, e && e.type);
      });
    }function s() {
      var e = d.getViewValue() == a.value;e !== m && ("md-radio-group" !== r[0].parentNode.nodeName.toLowerCase() && r.parent().toggleClass(o, e), e && d.setActiveDescendant(r.attr("id")), m = e, r.attr("aria-checked", e).toggleClass(o, e));
    }function l(n, i) {
      n.attr({ id: a.id || "radio_" + t.nextUid(), role: "radio", "aria-checked": "false" }), e.expectWithText(n, "aria-label");
    }var m;n(r), l(r, i), a.ngValue ? t.nextTick(u, !1) : u();
  }var o = "md-checked";return { restrict: "E", require: "^mdRadioGroup", transclude: !0, template: '<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>', link: i };
}goog.provide("ngmaterial.components.radioButton"), goog.require("ngmaterial.core"), mdRadioGroupDirective.$inject = ["$mdUtil", "$mdConstant", "$mdTheming", "$timeout"], mdRadioButtonDirective.$inject = ["$mdAria", "$mdUtil", "$mdTheming"], angular.module("material.components.radioButton", ["material.core"]).directive("mdRadioGroup", mdRadioGroupDirective).directive("mdRadioButton", mdRadioButtonDirective), ngmaterial.components.radioButton = angular.module("material.components.radioButton");

//# sourceMappingURL=radioButton.min-compiled.js.map