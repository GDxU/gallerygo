"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (t, e, i) {
  "use strict";
  function n(t, e, n, s, o) {
    this.$scope = t, this.$element = e, this.$mdConstant = n, this.$timeout = s, this.$mdUtil = o, this.isEditting = !1, this.parentController = i, this.enableChipEdit = !1;
  }function s(t, i) {
    function n(n, o) {
      return n.append(i.processTemplate(s)), function (i, n, s, o) {
        var r = o.shift(),
            h = o.shift();t(n), r && (h.init(r), e.element(n[0].querySelector(".md-chip-content")).on("blur", function () {
          r.resetSelectedChip(), r.$scope.$applyAsync();
        }));
      };
    }var s = i.processTemplate(d);return { restrict: "E", require: ["^?mdChips", "mdChip"], compile: n, controller: "MdChipCtrl" };
  }function o(t) {
    function e(e, i, n, s) {
      i.on("click", function (t) {
        e.$apply(function () {
          s.removeChip(e.$$replacedScope.$index);
        });
      }), t(function () {
        i.attr({ tabindex: -1, "aria-hidden": !0 }), i.find("button").attr("tabindex", "-1");
      });
    }return { restrict: "A", require: "^mdChips", scope: !1, link: e };
  }function r(t) {
    function e(e, i, n) {
      var s = e.$parent.$mdChipsCtrl,
          o = s.parent.$new(!1, s.parent);o.$$replacedScope = e, o.$chip = e.$chip, o.$index = e.$index, o.$mdChipsCtrl = s;var r = s.$scope.$eval(n.mdChipTransclude);i.html(r), t(i.contents())(o);
    }return { restrict: "EA", terminal: !0, link: e, scope: !1 };
  }function h(t, e, i, n, s, o, r) {
    this.$timeout = o, this.$mdConstant = i, this.$scope = t, this.parent = t.$parent, this.$mdUtil = r, this.$log = n, this.$element = s, this.ngModelCtrl = null, this.userInputNgModelCtrl = null, this.autocompleteCtrl = null, this.userInputElement = null, this.items = [], this.selectedChip = -1, this.enableChipEdit = r.parseAttributeBoolean(e.mdEnableChipEdit), this.addOnBlur = r.parseAttributeBoolean(e.mdAddOnBlur), this.deleteHint = "Press delete to remove this chip.", this.deleteButtonLabel = "Remove", this.chipBuffer = "", this.useTransformChip = !1, this.useOnAdd = !1, this.useOnRemove = !1;
  }function p(t, e, i, n, s, o) {
    function r(r, h) {
      function l(t) {
        if (h.ngModel) {
          var e = c[0].querySelector(t);return e && e.outerHTML;
        }
      }var c = h.$mdUserTemplate;h.$mdUserTemplate = null;var d = l("md-chips>md-chip-template"),
          a = e.prefixer().buildList("md-chip-remove").map(function (t) {
        return "md-chips>*[" + t + "]";
      }).join(","),
          m = l(a) || p.remove,
          u = d || p["default"],
          C = l("md-chips>md-autocomplete") || l("md-chips>input") || p.input,
          f = c.find("md-chip");return c[0].querySelector("md-chip-template>*[md-chip-remove]") && n.warn("invalid placement of md-chip-remove within md-chip-template."), function (n, r, l, c) {
        e.initOptionalProperties(n, h), t(r);var a = c[0];if (d && (a.enableChipEdit = !1), a.chipContentsTemplate = u, a.chipRemoveTemplate = m, a.chipInputTemplate = C, a.mdCloseIcon = o.mdClose, r.attr({ "aria-hidden": !0, tabindex: -1 }).on("focus", function () {
          a.onFocus();
        }), h.ngModel && (a.configureNgModel(r.controller("ngModel")), l.mdTransformChip && a.useTransformChipExpression(), l.mdOnAppend && a.useOnAppendExpression(), l.mdOnAdd && a.useOnAddExpression(), l.mdOnRemove && a.useOnRemoveExpression(), l.mdOnSelect && a.useOnSelectExpression(), C != p.input && n.$watch("$mdChipsCtrl.readonly", function (t) {
          t || e.nextTick(function () {
            if (0 === C.indexOf("<md-autocomplete")) {
              var t = r.find("md-autocomplete");a.configureAutocomplete(t.controller("mdAutocomplete"));
            }a.configureUserInput(r.find("input"));
          });
        }), e.nextTick(function () {
          var t = r.find("input");t && t.toggleClass("md-input", !0);
        })), f.length > 0) {
          var $ = i(f.clone())(n.$parent);s(function () {
            r.find("md-chips-wrap").prepend($);
          });
        }
      };
    }function h() {
      return { chips: e.processTemplate(a), input: e.processTemplate(m), "default": e.processTemplate(u), remove: e.processTemplate(C) };
    }var p = h();return { template: function template(t, e) {
        return e.$mdUserTemplate = t.clone(), p.chips;
      }, require: ["mdChips"], restrict: "E", controller: "MdChipsCtrl", controllerAs: "$mdChipsCtrl", bindToController: !0, compile: r, scope: { readonly: "=readonly", removable: "=mdRemovable", placeholder: "@", secondaryPlaceholder: "@", maxChips: "@mdMaxChips", transformChip: "&mdTransformChip", onAppend: "&mdOnAppend", onAdd: "&mdOnAdd", onRemove: "&mdOnRemove", onSelect: "&mdOnSelect", deleteHint: "@", deleteButtonLabel: "@", separatorKeys: "=?mdSeparatorKeys", requireMatch: "=?mdRequireMatch" } };
  }function l() {
    this.selectedItem = null, this.searchText = "";
  }function c(t, e) {
    function i(i, n) {
      return function (i, s, o, r) {
        e.initOptionalProperties(i, n), t(s), s.attr("tabindex", "-1");
      };
    }return { template: function template(t, e) {
        return f;
      }, restrict: "E", controller: "MdContactChipsCtrl", controllerAs: "$mdContactChipsCtrl", bindToController: !0, compile: i, scope: { contactQuery: "&mdContacts", placeholder: "@", secondaryPlaceholder: "@", contactName: "@mdContactName", contactImage: "@mdContactImage", contactEmail: "@mdContactEmail", contacts: "=ngModel", requireMatch: "=?mdRequireMatch", highlightFlags: "@?mdHighlightFlags" } };
  }e.module("material.components.chips", ["material.core", "material.components.autocomplete"]), n.$inject = ["$scope", "$element", "$mdConstant", "$timeout", "$mdUtil"], e.module("material.components.chips").controller("MdChipCtrl", n), n.prototype.init = function (t) {
    this.parentController = t, this.enableChipEdit = this.parentController.enableChipEdit, this.enableChipEdit && (this.$element.on("keydown", this.chipKeyDown.bind(this)), this.$element.on("mousedown", this.chipMouseDown.bind(this)), this.getChipContent().addClass("_md-chip-content-edit-is-enabled"));
  }, n.prototype.getChipContent = function () {
    var t = this.$element[0].getElementsByClassName("md-chip-content");return e.element(t[0]);
  }, n.prototype.getContentElement = function () {
    return e.element(this.getChipContent().children()[0]);
  }, n.prototype.getChipIndex = function () {
    return parseInt(this.$element.attr("index"));
  }, n.prototype.goOutOfEditMode = function () {
    if (this.isEditting) {
      this.isEditting = !1, this.$element.removeClass("_md-chip-editing"), this.getChipContent()[0].contentEditable = "false";var t = this.getChipIndex(),
          e = this.getContentElement().text();e ? (this.parentController.updateChipContents(t, this.getContentElement().text()), this.$mdUtil.nextTick(function () {
        this.parentController.selectedChip === t && this.parentController.focusChip(t);
      }.bind(this))) : this.parentController.removeChipAndFocusInput(t);
    }
  }, n.prototype.selectNodeContents = function (e) {
    var i, n;document.body.createTextRange ? (i = document.body.createTextRange(), i.moveToElementText(e), i.select()) : t.getSelection && (n = t.getSelection(), i = document.createRange(), i.selectNodeContents(e), n.removeAllRanges(), n.addRange(i));
  }, n.prototype.goInEditMode = function () {
    this.isEditting = !0, this.$element.addClass("_md-chip-editing"), this.getChipContent()[0].contentEditable = "true", this.getChipContent().on("blur", function () {
      this.goOutOfEditMode();
    }.bind(this)), this.selectNodeContents(this.getChipContent()[0]);
  }, n.prototype.chipKeyDown = function (t) {
    this.isEditting || t.keyCode !== this.$mdConstant.KEY_CODE.ENTER && t.keyCode !== this.$mdConstant.KEY_CODE.SPACE ? this.isEditting && t.keyCode === this.$mdConstant.KEY_CODE.ENTER && (t.preventDefault(), this.goOutOfEditMode()) : (t.preventDefault(), this.goInEditMode());
  }, n.prototype.chipMouseDown = function () {
    this.getChipIndex() == this.parentController.selectedChip && this.enableChipEdit && !this.isEditting && this.goInEditMode();
  }, s.$inject = ["$mdTheming", "$mdUtil"], e.module("material.components.chips").directive("mdChip", s);var d = '    <span ng-if="!$mdChipsCtrl.readonly" class="md-visually-hidden">      {{$mdChipsCtrl.deleteHint}}    </span>';o.$inject = ["$timeout"], e.module("material.components.chips").directive("mdChipRemove", o), r.$inject = ["$compile"], e.module("material.components.chips").directive("mdChipTransclude", r), h.$inject = ["$scope", "$attrs", "$mdConstant", "$log", "$element", "$timeout", "$mdUtil"], e.module("material.components.chips").controller("MdChipsCtrl", h), h.prototype.inputKeydown = function (t) {
    var e = this.getChipBuffer();if (!(this.autocompleteCtrl && t.isDefaultPrevented && t.isDefaultPrevented())) {
      if (t.keyCode === this.$mdConstant.KEY_CODE.BACKSPACE) {
        if (0 !== this.getCursorPosition(t.target)) return;return t.preventDefault(), t.stopPropagation(), void (this.items.length && this.selectAndFocusChipSafe(this.items.length - 1));
      }if ((!this.separatorKeys || this.separatorKeys.length < 1) && (this.separatorKeys = [this.$mdConstant.KEY_CODE.ENTER]), this.separatorKeys.indexOf(t.keyCode) !== -1) {
        if (this.autocompleteCtrl && this.requireMatch || !e) return;if (t.preventDefault(), this.hasMaxChipsReached()) return;this.appendChip(e.trim()), this.resetChipBuffer();
      }
    }
  }, h.prototype.getCursorPosition = function (t) {
    try {
      if (t.selectionStart === t.selectionEnd) return t.selectionStart;
    } catch (e) {
      if (!t.value) return 0;
    }
  }, h.prototype.updateChipContents = function (t, e) {
    t >= 0 && t < this.items.length && (this.items[t] = e, this.ngModelCtrl.$setDirty());
  }, h.prototype.isEditingChip = function () {
    return !!this.$element[0].querySelector("._md-chip-editing");
  }, h.prototype.isRemovable = function () {
    return !!this.ngModelCtrl && (this.readonly ? this.removable : !e.isDefined(this.removable) || this.removable);
  }, h.prototype.chipKeydown = function (t) {
    if (!this.getChipBuffer() && !this.isEditingChip()) switch (t.keyCode) {case this.$mdConstant.KEY_CODE.BACKSPACE:case this.$mdConstant.KEY_CODE.DELETE:
        if (this.selectedChip < 0) return;if (t.preventDefault(), !this.isRemovable()) return;this.removeAndSelectAdjacentChip(this.selectedChip);break;case this.$mdConstant.KEY_CODE.LEFT_ARROW:
        t.preventDefault(), this.selectedChip < 0 && (this.selectedChip = this.items.length), this.items.length && this.selectAndFocusChipSafe(this.selectedChip - 1);break;case this.$mdConstant.KEY_CODE.RIGHT_ARROW:
        t.preventDefault(), this.selectAndFocusChipSafe(this.selectedChip + 1);break;case this.$mdConstant.KEY_CODE.ESCAPE:case this.$mdConstant.KEY_CODE.TAB:
        if (this.selectedChip < 0) return;t.preventDefault(), this.onFocus();}
  }, h.prototype.getPlaceholder = function () {
    var t = this.items && this.items.length && ("" == this.secondaryPlaceholder || this.secondaryPlaceholder);return t ? this.secondaryPlaceholder : this.placeholder;
  }, h.prototype.removeAndSelectAdjacentChip = function (t) {
    var i = this.getAdjacentChipIndex(t);this.removeChip(t), this.$timeout(e.bind(this, function () {
      this.selectAndFocusChipSafe(i);
    }));
  }, h.prototype.resetSelectedChip = function () {
    this.selectedChip = -1;
  }, h.prototype.getAdjacentChipIndex = function (t) {
    var e = this.items.length - 1;return 0 == e ? -1 : t == e ? t - 1 : t;
  }, h.prototype.appendChip = function (t) {
    if (this.useTransformChip && this.transformChip) {
      var i = this.transformChip({ $chip: t });e.isDefined(i) && (t = i);
    }if (e.isObject(t)) {
      var n = this.items.some(function (i) {
        return e.equals(t, i);
      });if (n) return;
    }if (!(null == t || this.items.indexOf(t) + 1)) {
      var s = this.items.push(t);this.ngModelCtrl.$setDirty(), this.validateModel(), this.useOnAdd && this.onAdd && this.onAdd({ $chip: t, $index: s });
    }
  }, h.prototype.useTransformChipExpression = function () {
    this.useTransformChip = !0;
  }, h.prototype.useOnAddExpression = function () {
    this.useOnAdd = !0;
  }, h.prototype.useOnRemoveExpression = function () {
    this.useOnRemove = !0;
  }, h.prototype.useOnSelectExpression = function () {
    this.useOnSelect = !0;
  }, h.prototype.getChipBuffer = function () {
    var t = this.userInputElement ? this.userInputNgModelCtrl ? this.userInputNgModelCtrl.$viewValue : this.userInputElement[0].value : this.chipBuffer;return e.isString(t) ? t : "";
  }, h.prototype.resetChipBuffer = function () {
    this.userInputElement ? this.userInputNgModelCtrl ? (this.userInputNgModelCtrl.$setViewValue(""), this.userInputNgModelCtrl.$render()) : this.userInputElement[0].value = "" : this.chipBuffer = "";
  }, h.prototype.hasMaxChipsReached = function () {
    return e.isString(this.maxChips) && (this.maxChips = parseInt(this.maxChips, 10) || 0), this.maxChips > 0 && this.items.length >= this.maxChips;
  }, h.prototype.validateModel = function () {
    this.ngModelCtrl.$setValidity("md-max-chips", !this.hasMaxChipsReached());
  }, h.prototype.removeChip = function (t) {
    var e = this.items.splice(t, 1);this.ngModelCtrl.$setDirty(), this.validateModel(), e && e.length && this.useOnRemove && this.onRemove && this.onRemove({ $chip: e[0], $index: t });
  }, h.prototype.removeChipAndFocusInput = function (t) {
    this.removeChip(t), this.autocompleteCtrl ? (this.autocompleteCtrl.hidden = !0, this.$mdUtil.nextTick(this.onFocus.bind(this))) : this.onFocus();
  }, h.prototype.selectAndFocusChipSafe = function (t) {
    return this.items.length ? t === this.items.length ? this.onFocus() : (t = Math.max(t, 0), t = Math.min(t, this.items.length - 1), this.selectChip(t), void this.focusChip(t)) : (this.selectChip(-1), void this.onFocus());
  }, h.prototype.selectChip = function (t) {
    t >= -1 && t <= this.items.length ? (this.selectedChip = t, this.useOnSelect && this.onSelect && this.onSelect({ $chip: this.items[this.selectedChip] })) : this.$log.warn("Selected Chip index out of bounds; ignoring.");
  }, h.prototype.selectAndFocusChip = function (t) {
    this.selectChip(t), t != -1 && this.focusChip(t);
  }, h.prototype.focusChip = function (t) {
    this.$element[0].querySelector('md-chip[index="' + t + '"] .md-chip-content').focus();
  }, h.prototype.configureNgModel = function (t) {
    this.ngModelCtrl = t;var e = this;t.$render = function () {
      e.items = e.ngModelCtrl.$viewValue;
    };
  }, h.prototype.onFocus = function () {
    var t = this.$element[0].querySelector("input");t && t.focus(), this.resetSelectedChip();
  }, h.prototype.onInputFocus = function () {
    this.inputHasFocus = !0, this.resetSelectedChip();
  }, h.prototype.onInputBlur = function () {
    this.inputHasFocus = !1;var t = this.getChipBuffer().trim();this.validateModel();var e = this.ngModelCtrl.$valid;this.userInputNgModelCtrl && (e &= this.userInputNgModelCtrl.$valid), this.addOnBlur && t && e && (this.appendChip(t), this.resetChipBuffer());
  }, h.prototype.configureUserInput = function (t) {
    this.userInputElement = t;var i = t.controller("ngModel");i != this.ngModelCtrl && (this.userInputNgModelCtrl = i);var n = this.$scope,
        s = this,
        o = function o(t, i) {
      n.$evalAsync(e.bind(s, i, t));
    };t.attr({ tabindex: 0 }).on("keydown", function (t) {
      o(t, s.inputKeydown);
    }).on("focus", function (t) {
      o(t, s.onInputFocus);
    }).on("blur", function (t) {
      o(t, s.onInputBlur);
    });
  }, h.prototype.configureAutocomplete = function (t) {
    t && (this.autocompleteCtrl = t, t.registerSelectedItemWatcher(e.bind(this, function (t) {
      if (t) {
        if (this.hasMaxChipsReached()) return;this.appendChip(t), this.resetChipBuffer();
      }
    })), this.$element.find("input").on("focus", e.bind(this, this.onInputFocus)).on("blur", e.bind(this, this.onInputBlur)));
  }, h.prototype.hasFocus = function () {
    return this.inputHasFocus || this.selectedChip >= 0;
  }, p.$inject = ["$mdTheming", "$mdUtil", "$compile", "$log", "$timeout", "$$mdSvgRegistry"], e.module("material.components.chips").directive("mdChips", p);var a = '      <md-chips-wrap          ng-keydown="$mdChipsCtrl.chipKeydown($event)"          ng-class="{ \'md-focused\': $mdChipsCtrl.hasFocus(),                       \'md-readonly\': !$mdChipsCtrl.ngModelCtrl || $mdChipsCtrl.readonly,                      \'md-removable\': $mdChipsCtrl.isRemovable() }"          class="md-chips">        <md-chip ng-repeat="$chip in $mdChipsCtrl.items"            index="{{$index}}"            ng-class="{\'md-focused\': $mdChipsCtrl.selectedChip == $index, \'md-readonly\': !$mdChipsCtrl.ngModelCtrl || $mdChipsCtrl.readonly}">          <div class="md-chip-content"              tabindex="-1"              aria-hidden="true"              ng-click="!$mdChipsCtrl.readonly && $mdChipsCtrl.focusChip($index)"              ng-focus="!$mdChipsCtrl.readonly && $mdChipsCtrl.selectChip($index)"              md-chip-transclude="$mdChipsCtrl.chipContentsTemplate"></div>          <div ng-if="$mdChipsCtrl.isRemovable()"               class="md-chip-remove-container"               md-chip-transclude="$mdChipsCtrl.chipRemoveTemplate"></div>        </md-chip>        <div class="md-chip-input-container" ng-if="!$mdChipsCtrl.readonly && $mdChipsCtrl.ngModelCtrl">          <div md-chip-transclude="$mdChipsCtrl.chipInputTemplate"></div>        </div>      </md-chips-wrap>',
      m = '        <input            class="md-input"            tabindex="0"            placeholder="{{$mdChipsCtrl.getPlaceholder()}}"            aria-label="{{$mdChipsCtrl.getPlaceholder()}}"            ng-model="$mdChipsCtrl.chipBuffer"            ng-focus="$mdChipsCtrl.onInputFocus()"            ng-blur="$mdChipsCtrl.onInputBlur()"            ng-keydown="$mdChipsCtrl.inputKeydown($event)">',
      u = "      <span>{{$chip}}</span>",
      C = '      <button          class="md-chip-remove"          ng-if="$mdChipsCtrl.isRemovable()"          ng-click="$mdChipsCtrl.removeChipAndFocusInput($$replacedScope.$index)"          type="button"          aria-hidden="true"          tabindex="-1">        <md-icon md-svg-src="{{ $mdChipsCtrl.mdCloseIcon }}"></md-icon>        <span class="md-visually-hidden">          {{$mdChipsCtrl.deleteButtonLabel}}        </span>      </button>';e.module("material.components.chips").controller("MdContactChipsCtrl", l), l.prototype.queryContact = function (t) {
    var i = this.contactQuery({ $query: t });return this.filterSelected ? i.filter(e.bind(this, this.filterSelectedContacts)) : i;
  }, l.prototype.itemName = function (t) {
    return t[this.contactName];
  }, l.prototype.filterSelectedContacts = function (t) {
    return this.contacts.indexOf(t) == -1;
  }, c.$inject = ["$mdTheming", "$mdUtil"], e.module("material.components.chips").directive("mdContactChips", c);var f = '      <md-chips class="md-contact-chips"          ng-model="$mdContactChipsCtrl.contacts"          md-require-match="$mdContactChipsCtrl.requireMatch"          md-autocomplete-snap>          <md-autocomplete              md-menu-class="md-contact-chips-suggestions"              md-selected-item="$mdContactChipsCtrl.selectedItem"              md-search-text="$mdContactChipsCtrl.searchText"              md-items="item in $mdContactChipsCtrl.queryContact($mdContactChipsCtrl.searchText)"              md-item-text="$mdContactChipsCtrl.itemName(item)"              md-no-cache="true"              md-autoselect              placeholder="{{$mdContactChipsCtrl.contacts.length == 0 ?                  $mdContactChipsCtrl.placeholder : $mdContactChipsCtrl.secondaryPlaceholder}}">            <div class="md-contact-suggestion">              <img                   ng-src="{{item[$mdContactChipsCtrl.contactImage]}}"                  alt="{{item[$mdContactChipsCtrl.contactName]}}"                  ng-if="item[$mdContactChipsCtrl.contactImage]" />              <span class="md-contact-name" md-highlight-text="$mdContactChipsCtrl.searchText"                    md-highlight-flags="{{$mdContactChipsCtrl.highlightFlags}}">                {{item[$mdContactChipsCtrl.contactName]}}              </span>              <span class="md-contact-email" >{{item[$mdContactChipsCtrl.contactEmail]}}</span>            </div>          </md-autocomplete>          <md-chip-template>            <div class="md-contact-avatar">              <img                   ng-src="{{$chip[$mdContactChipsCtrl.contactImage]}}"                  alt="{{$chip[$mdContactChipsCtrl.contactName]}}"                  ng-if="$chip[$mdContactChipsCtrl.contactImage]" />            </div>            <div class="md-contact-name">              {{$chip[$mdContactChipsCtrl.contactName]}}            </div>          </md-chip-template>      </md-chips>';
}(window, window.angular);

//# sourceMappingURL=chips.min-compiled.js.map