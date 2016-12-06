"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
goog.provide("ngmaterial.components.datepicker"), goog.require("ngmaterial.components.icon"), goog.require("ngmaterial.components.virtualRepeat"), goog.require("ngmaterial.core"), angular.module("material.components.datepicker", ["material.core", "material.components.icon", "material.components.virtualRepeat"]), function () {
  "use strict";
  function e() {
    return { template: function template(e, t) {
        var a = t.hasOwnProperty("ngIf") ? "" : 'ng-if="calendarCtrl.isInitialized"',
            n = '<div ng-switch="calendarCtrl.currentView" ' + a + '><md-calendar-year ng-switch-when="year"></md-calendar-year><md-calendar-month ng-switch-default></md-calendar-month></div>';return n;
      }, scope: { minDate: "=mdMinDate", maxDate: "=mdMaxDate", dateFilter: "=mdDateFilter", _currentView: "@mdCurrentView" }, require: ["ngModel", "mdCalendar"], controller: t, controllerAs: "calendarCtrl", bindToController: !0, link: function link(e, t, a, n) {
        var i = n[0],
            r = n[1];r.configureNgModel(i);
      } };
  }function t(e, t, a, i, r, l, s, d, o) {
    l(e), this.$element = e, this.$scope = t, this.dateUtil = a, this.$mdUtil = i, this.keyCode = r.KEY_CODE, this.$$rAF = s, this.$mdDateLocale = o, this.today = this.dateUtil.createDateAtMidnight(), this.ngModelCtrl = null, this.SELECTED_DATE_CLASS = "md-calendar-selected-date", this.TODAY_CLASS = "md-calendar-date-today", this.FOCUSED_DATE_CLASS = "md-focus", this.id = n++, this.displayDate = null, this.selectedDate = null, this.firstRenderableDate = null, this.lastRenderableDate = null, this.isInitialized = !1, this.width = 0, this.scrollbarWidth = 0, d.tabindex || e.attr("tabindex", "-1");var c,
        h = angular.bind(this, this.handleKeyEvent);c = e.parent().hasClass("md-datepicker-calendar") ? angular.element(document.body) : e, c.on("keydown", h), t.$on("$destroy", function () {
      c.off("keydown", h);
    }), 1 === angular.version.major && angular.version.minor <= 4 && this.$onInit();
  }t.$inject = ["$element", "$scope", "$$mdDateUtil", "$mdUtil", "$mdConstant", "$mdTheming", "$$rAF", "$attrs", "$mdDateLocale"], angular.module("material.components.datepicker").directive("mdCalendar", e);var a = 340,
      n = 0;t.prototype.$onInit = function () {
    this.currentView = this._currentView || "month";var e = this.$mdDateLocale;this.minDate && this.minDate > e.firstRenderableDate ? this.firstRenderableDate = this.minDate : this.firstRenderableDate = e.firstRenderableDate, this.maxDate && this.maxDate < e.lastRenderableDate ? this.lastRenderableDate = this.maxDate : this.lastRenderableDate = e.lastRenderableDate;
  }, t.prototype.configureNgModel = function (e) {
    var t = this;t.ngModelCtrl = e, t.$mdUtil.nextTick(function () {
      t.isInitialized = !0;
    }), e.$render = function () {
      var e = this.$viewValue;t.$scope.$broadcast("md-calendar-parent-changed", e), t.selectedDate || (t.selectedDate = e), t.displayDate || (t.displayDate = t.selectedDate || t.today);
    };
  }, t.prototype.setNgModelValue = function (e) {
    var t = this.dateUtil.createDateAtMidnight(e);return this.focus(t), this.$scope.$emit("md-calendar-change", t), this.ngModelCtrl.$setViewValue(t), this.ngModelCtrl.$render(), t;
  }, t.prototype.setCurrentView = function (e, t) {
    var a = this;a.$mdUtil.nextTick(function () {
      a.currentView = e, t && (a.displayDate = angular.isDate(t) ? t : new Date(t));
    });
  }, t.prototype.focus = function (e) {
    if (this.dateUtil.isValidDate(e)) {
      var t = this.$element[0].querySelector(".md-focus");t && t.classList.remove(this.FOCUSED_DATE_CLASS);var a = this.getDateId(e, this.currentView),
          n = document.getElementById(a);n && (n.classList.add(this.FOCUSED_DATE_CLASS), n.focus(), this.displayDate = e);
    } else {
      var i = this.$element[0].querySelector("[ng-switch]");i && i.focus();
    }
  }, t.prototype.getActionFromKeyEvent = function (e) {
    var t = this.keyCode;switch (e.which) {case t.ENTER:
        return "select";case t.RIGHT_ARROW:
        return "move-right";case t.LEFT_ARROW:
        return "move-left";case t.DOWN_ARROW:
        return e.metaKey ? "move-page-down" : "move-row-down";case t.UP_ARROW:
        return e.metaKey ? "move-page-up" : "move-row-up";case t.PAGE_DOWN:
        return "move-page-down";case t.PAGE_UP:
        return "move-page-up";case t.HOME:
        return "start";case t.END:
        return "end";default:
        return null;}
  }, t.prototype.handleKeyEvent = function (e) {
    var t = this;this.$scope.$apply(function () {
      if (e.which == t.keyCode.ESCAPE || e.which == t.keyCode.TAB) return t.$scope.$emit("md-calendar-close"), void (e.which == t.keyCode.TAB && e.preventDefault());var a = t.getActionFromKeyEvent(e);a && (e.preventDefault(), e.stopPropagation(), t.$scope.$broadcast("md-calendar-parent-action", a));
    });
  }, t.prototype.hideVerticalScrollbar = function (e) {
    function t() {
      var t = n.width || a,
          i = n.scrollbarWidth,
          l = e.calendarScroller;r.style.width = t + "px", l.style.width = t + i + "px", l.style.paddingRight = i + "px";
    }var n = this,
        i = e.$element[0],
        r = i.querySelector(".md-calendar-scroll-mask");n.width > 0 ? t() : n.$$rAF(function () {
      var a = e.calendarScroller;n.scrollbarWidth = a.offsetWidth - a.clientWidth, n.width = i.querySelector("table").offsetWidth, t();
    });
  }, t.prototype.getDateId = function (e, t) {
    if (!t) throw new Error("A namespace for the date id has to be specified.");return ["md", this.id, t, e.getFullYear(), e.getMonth(), e.getDate()].join("-");
  }, t.prototype.updateVirtualRepeat = function () {
    var e = this.$scope,
        t = e.$on("$md-resize-enable", function () {
      e.$$phase || e.$apply(), t();
    });
  };
}(), function () {
  "use strict";
  function e() {
    return { template: '<table aria-hidden="true" class="md-calendar-day-header"><thead></thead></table><div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container" md-offset-size="' + (n - a) + '"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody md-calendar-month-body role="rowgroup" md-virtual-repeat="i in monthCtrl.items" md-month-offset="$index" class="md-calendar-month" md-start-index="monthCtrl.getSelectedMonthIndex()" md-item-size="' + a + '"><tr aria-hidden="true" style="height:' + a + 'px;"></tr></tbody></table></md-virtual-repeat-container></div>', require: ["^^mdCalendar", "mdCalendarMonth"], controller: t, controllerAs: "monthCtrl", bindToController: !0, link: function link(e, t, a, n) {
        var i = n[0],
            r = n[1];r.initialize(i);
      } };
  }function t(e, t, a, n, i, r) {
    this.$element = e, this.$scope = t, this.$animate = a, this.$q = n, this.dateUtil = i, this.dateLocale = r, this.calendarScroller = e[0].querySelector(".md-virtual-repeat-scroller"), this.isInitialized = !1, this.isMonthTransitionInProgress = !1;var l = this;this.cellClickHandler = function () {
      var e = i.getTimestampFromNode(this);l.$scope.$apply(function () {
        l.calendarCtrl.setNgModelValue(e);
      });
    }, this.headerClickHandler = function () {
      l.calendarCtrl.setCurrentView("year", i.getTimestampFromNode(this));
    };
  }t.$inject = ["$element", "$scope", "$animate", "$q", "$$mdDateUtil", "$mdDateLocale"], angular.module("material.components.datepicker").directive("mdCalendarMonth", e);var a = 265,
      n = 45;t.prototype.initialize = function (e) {
    this.items = { length: this.dateUtil.getMonthDistance(e.firstRenderableDate, e.lastRenderableDate) + 2 }, this.calendarCtrl = e, this.attachScopeListeners(), e.updateVirtualRepeat(), e.ngModelCtrl && e.ngModelCtrl.$render();
  }, t.prototype.getSelectedMonthIndex = function () {
    var e = this.calendarCtrl;return this.dateUtil.getMonthDistance(e.firstRenderableDate, e.displayDate || e.selectedDate || e.today);
  }, t.prototype.changeSelectedDate = function (e) {
    var t = this,
        a = t.calendarCtrl,
        n = a.selectedDate;a.selectedDate = e, this.changeDisplayDate(e).then(function () {
      var t = a.SELECTED_DATE_CLASS,
          i = "month";if (n) {
        var r = document.getElementById(a.getDateId(n, i));r && (r.classList.remove(t), r.setAttribute("aria-selected", "false"));
      }if (e) {
        var l = document.getElementById(a.getDateId(e, i));l && (l.classList.add(t), l.setAttribute("aria-selected", "true"));
      }
    });
  }, t.prototype.changeDisplayDate = function (e) {
    if (!this.isInitialized) return this.buildWeekHeader(), this.calendarCtrl.hideVerticalScrollbar(this), this.isInitialized = !0, this.$q.when();if (!this.dateUtil.isValidDate(e) || this.isMonthTransitionInProgress) return this.$q.when();this.isMonthTransitionInProgress = !0;var t = this.animateDateChange(e);this.calendarCtrl.displayDate = e;var a = this;return t.then(function () {
      a.isMonthTransitionInProgress = !1;
    }), t;
  }, t.prototype.animateDateChange = function (e) {
    if (this.dateUtil.isValidDate(e)) {
      var t = this.dateUtil.getMonthDistance(this.calendarCtrl.firstRenderableDate, e);this.calendarScroller.scrollTop = t * a;
    }return this.$q.when();
  }, t.prototype.buildWeekHeader = function () {
    for (var e = this.dateLocale.firstDayOfWeek, t = this.dateLocale.shortDays, a = document.createElement("tr"), n = 0; n < 7; n++) {
      var i = document.createElement("th");i.textContent = t[(n + e) % 7], a.appendChild(i);
    }this.$element.find("thead").append(a);
  }, t.prototype.attachScopeListeners = function () {
    var e = this;e.$scope.$on("md-calendar-parent-changed", function (t, a) {
      e.changeSelectedDate(a);
    }), e.$scope.$on("md-calendar-parent-action", angular.bind(this, this.handleKeyEvent));
  }, t.prototype.handleKeyEvent = function (e, t) {
    var a = this.calendarCtrl,
        n = a.displayDate;if ("select" === t) a.setNgModelValue(n);else {
      var i = null,
          r = this.dateUtil;switch (t) {case "move-right":
          i = r.incrementDays(n, 1);break;case "move-left":
          i = r.incrementDays(n, -1);break;case "move-page-down":
          i = r.incrementMonths(n, 1);break;case "move-page-up":
          i = r.incrementMonths(n, -1);break;case "move-row-down":
          i = r.incrementDays(n, 7);break;case "move-row-up":
          i = r.incrementDays(n, -7);break;case "start":
          i = r.getFirstDateOfMonth(n);break;case "end":
          i = r.getLastDateOfMonth(n);}i && (i = this.dateUtil.clampDate(i, a.minDate, a.maxDate), this.changeDisplayDate(i).then(function () {
        a.focus(i);
      }));
    }
  };
}(), function () {
  "use strict";
  function e(e, a) {
    var n = e('<md-icon md-svg-src="' + a.mdTabsArrow + '"></md-icon>')({})[0];return { require: ["^^mdCalendar", "^^mdCalendarMonth", "mdCalendarMonthBody"], scope: { offset: "=mdMonthOffset" }, controller: t, controllerAs: "mdMonthBodyCtrl", bindToController: !0, link: function link(e, t, a, i) {
        var r = i[0],
            l = i[1],
            s = i[2];s.calendarCtrl = r, s.monthCtrl = l, s.arrowIcon = n.cloneNode(!0), e.$watch(function () {
          return s.offset;
        }, function (e) {
          angular.isNumber(e) && s.generateContent();
        });
      } };
  }function t(e, t, a) {
    this.$element = e, this.dateUtil = t, this.dateLocale = a, this.monthCtrl = null, this.calendarCtrl = null, this.offset = null, this.focusAfterAppend = null;
  }e.$inject = ["$compile", "$$mdSvgRegistry"], t.$inject = ["$element", "$$mdDateUtil", "$mdDateLocale"], angular.module("material.components.datepicker").directive("mdCalendarMonthBody", e), t.prototype.generateContent = function () {
    var e = this.dateUtil.incrementMonths(this.calendarCtrl.firstRenderableDate, this.offset);this.$element.empty().append(this.buildCalendarForMonth(e)), this.focusAfterAppend && (this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS), this.focusAfterAppend.focus(), this.focusAfterAppend = null);
  }, t.prototype.buildDateCell = function (e) {
    var t = this.monthCtrl,
        a = this.calendarCtrl,
        n = document.createElement("td");if (n.tabIndex = -1, n.classList.add("md-calendar-date"), n.setAttribute("role", "gridcell"), e) {
      n.setAttribute("tabindex", "-1"), n.setAttribute("aria-label", this.dateLocale.longDateFormatter(e)), n.id = a.getDateId(e, "month"), n.setAttribute("data-timestamp", e.getTime()), this.dateUtil.isSameDay(e, a.today) && n.classList.add(a.TODAY_CLASS), this.dateUtil.isValidDate(a.selectedDate) && this.dateUtil.isSameDay(e, a.selectedDate) && (n.classList.add(a.SELECTED_DATE_CLASS), n.setAttribute("aria-selected", "true"));var i = this.dateLocale.dates[e.getDate()];if (this.isDateEnabled(e)) {
        var r = document.createElement("span");r.classList.add("md-calendar-date-selection-indicator"), r.textContent = i, n.appendChild(r), n.addEventListener("click", t.cellClickHandler), a.displayDate && this.dateUtil.isSameDay(e, a.displayDate) && (this.focusAfterAppend = n);
      } else n.classList.add("md-calendar-date-disabled"), n.textContent = i;
    }return n;
  }, t.prototype.isDateEnabled = function (e) {
    return this.dateUtil.isDateWithinRange(e, this.calendarCtrl.minDate, this.calendarCtrl.maxDate) && (!angular.isFunction(this.calendarCtrl.dateFilter) || this.calendarCtrl.dateFilter(e));
  }, t.prototype.buildDateRow = function (e) {
    var t = document.createElement("tr");return t.setAttribute("role", "row"), t.setAttribute("aria-label", this.dateLocale.weekNumberFormatter(e)), t;
  }, t.prototype.buildCalendarForMonth = function (e) {
    var t = this.dateUtil.isValidDate(e) ? e : new Date(),
        a = this.dateUtil.getFirstDateOfMonth(t),
        n = this.getLocaleDay_(a),
        i = this.dateUtil.getNumberOfDaysInMonth(t),
        r = document.createDocumentFragment(),
        l = 1,
        s = this.buildDateRow(l);r.appendChild(s);var d = this.offset === this.monthCtrl.items.length - 1,
        o = 0,
        c = document.createElement("td"),
        h = document.createElement("span");if (h.textContent = this.dateLocale.monthHeaderFormatter(t), c.appendChild(h), c.classList.add("md-calendar-month-label"), this.calendarCtrl.maxDate && a > this.calendarCtrl.maxDate ? c.classList.add("md-calendar-month-label-disabled") : (c.addEventListener("click", this.monthCtrl.headerClickHandler), c.setAttribute("data-timestamp", a.getTime()), c.setAttribute("aria-label", this.dateLocale.monthFormatter(t)), c.appendChild(this.arrowIcon.cloneNode(!0))), n <= 2) {
      c.setAttribute("colspan", "7");var u = this.buildDateRow();if (u.appendChild(c), r.insertBefore(u, s), d) return r;
    } else o = 3, c.setAttribute("colspan", "3"), s.appendChild(c);for (var m = o; m < n; m++) {
      s.appendChild(this.buildDateCell());
    }for (var p = n, g = a, f = 1; f <= i; f++) {
      if (7 === p) {
        if (d) return r;p = 0, l++, s = this.buildDateRow(l), r.appendChild(s);
      }g.setDate(f);var D = this.buildDateCell(g);s.appendChild(D), p++;
    }for (; s.childNodes.length < 7;) {
      s.appendChild(this.buildDateCell());
    }for (; r.childNodes.length < 6;) {
      for (var C = this.buildDateRow(), v = 0; v < 7; v++) {
        C.appendChild(this.buildDateCell());
      }r.appendChild(C);
    }return r;
  }, t.prototype.getLocaleDay_ = function (e) {
    return (e.getDay() + (7 - this.dateLocale.firstDayOfWeek)) % 7;
  };
}(), function () {
  "use strict";
  function e() {
    return { template: '<div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody md-calendar-year-body role="rowgroup" md-virtual-repeat="i in yearCtrl.items" md-year-offset="$index" class="md-calendar-year" md-start-index="yearCtrl.getFocusedYearIndex()" md-item-size="' + a + '"><tr aria-hidden="true" style="height:' + a + 'px;"></tr></tbody></table></md-virtual-repeat-container></div>', require: ["^^mdCalendar", "mdCalendarYear"], controller: t, controllerAs: "yearCtrl", bindToController: !0, link: function link(e, t, a, n) {
        var i = n[0],
            r = n[1];r.initialize(i);
      } };
  }function t(e, t, a, n, i) {
    this.$element = e, this.$scope = t, this.$animate = a, this.$q = n, this.dateUtil = i, this.calendarScroller = e[0].querySelector(".md-virtual-repeat-scroller"), this.isInitialized = !1, this.isMonthTransitionInProgress = !1;var r = this;this.cellClickHandler = function () {
      r.calendarCtrl.setCurrentView("month", i.getTimestampFromNode(this));
    };
  }t.$inject = ["$element", "$scope", "$animate", "$q", "$$mdDateUtil"], angular.module("material.components.datepicker").directive("mdCalendarYear", e);var a = 88;t.prototype.initialize = function (e) {
    this.items = { length: this.dateUtil.getYearDistance(e.firstRenderableDate, e.lastRenderableDate) + 1 }, this.calendarCtrl = e, this.attachScopeListeners(), e.updateVirtualRepeat(), e.ngModelCtrl && e.ngModelCtrl.$render();
  }, t.prototype.getFocusedYearIndex = function () {
    var e = this.calendarCtrl;return this.dateUtil.getYearDistance(e.firstRenderableDate, e.displayDate || e.selectedDate || e.today);
  }, t.prototype.changeDate = function (e) {
    if (!this.isInitialized) return this.calendarCtrl.hideVerticalScrollbar(this), this.isInitialized = !0, this.$q.when();if (this.dateUtil.isValidDate(e) && !this.isMonthTransitionInProgress) {
      var t = this,
          a = this.animateDateChange(e);return t.isMonthTransitionInProgress = !0, t.calendarCtrl.displayDate = e, a.then(function () {
        t.isMonthTransitionInProgress = !1;
      });
    }
  }, t.prototype.animateDateChange = function (e) {
    if (this.dateUtil.isValidDate(e)) {
      var t = this.dateUtil.getYearDistance(this.calendarCtrl.firstRenderableDate, e);this.calendarScroller.scrollTop = t * a;
    }return this.$q.when();
  }, t.prototype.handleKeyEvent = function (e, t) {
    var a = this.calendarCtrl,
        n = a.displayDate;if ("select" === t) this.changeDate(n).then(function () {
      a.setCurrentView("month", n), a.focus(n);
    });else {
      var i = null,
          r = this.dateUtil;switch (t) {case "move-right":
          i = r.incrementMonths(n, 1);break;case "move-left":
          i = r.incrementMonths(n, -1);break;case "move-row-down":
          i = r.incrementMonths(n, 6);break;case "move-row-up":
          i = r.incrementMonths(n, -6);}if (i) {
        var l = a.minDate ? r.getFirstDateOfMonth(a.minDate) : null,
            s = a.maxDate ? r.getFirstDateOfMonth(a.maxDate) : null;i = r.getFirstDateOfMonth(this.dateUtil.clampDate(i, l, s)), this.changeDate(i).then(function () {
          a.focus(i);
        });
      }
    }
  }, t.prototype.attachScopeListeners = function () {
    var e = this;e.$scope.$on("md-calendar-parent-changed", function (t, a) {
      e.changeDate(a);
    }), e.$scope.$on("md-calendar-parent-action", angular.bind(e, e.handleKeyEvent));
  };
}(), function () {
  "use strict";
  function e() {
    return { require: ["^^mdCalendar", "^^mdCalendarYear", "mdCalendarYearBody"], scope: { offset: "=mdYearOffset" }, controller: t, controllerAs: "mdYearBodyCtrl", bindToController: !0, link: function link(e, t, a, n) {
        var i = n[0],
            r = n[1],
            l = n[2];l.calendarCtrl = i, l.yearCtrl = r, e.$watch(function () {
          return l.offset;
        }, function (e) {
          angular.isNumber(e) && l.generateContent();
        });
      } };
  }function t(e, t, a) {
    this.$element = e, this.dateUtil = t, this.dateLocale = a, this.calendarCtrl = null, this.yearCtrl = null, this.offset = null, this.focusAfterAppend = null;
  }t.$inject = ["$element", "$$mdDateUtil", "$mdDateLocale"], angular.module("material.components.datepicker").directive("mdCalendarYearBody", e), t.prototype.generateContent = function () {
    var e = this.dateUtil.incrementYears(this.calendarCtrl.firstRenderableDate, this.offset);this.$element.empty().append(this.buildCalendarForYear(e)), this.focusAfterAppend && (this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS), this.focusAfterAppend.focus(), this.focusAfterAppend = null);
  }, t.prototype.buildMonthCell = function (e, t) {
    var a = this.calendarCtrl,
        n = this.yearCtrl,
        i = this.buildBlankCell(),
        r = new Date(e, t, 1);i.setAttribute("aria-label", this.dateLocale.monthFormatter(r)), i.id = a.getDateId(r, "year"), i.setAttribute("data-timestamp", r.getTime()), this.dateUtil.isSameMonthAndYear(r, a.today) && i.classList.add(a.TODAY_CLASS), this.dateUtil.isValidDate(a.selectedDate) && this.dateUtil.isSameMonthAndYear(r, a.selectedDate) && (i.classList.add(a.SELECTED_DATE_CLASS), i.setAttribute("aria-selected", "true"));var l = this.dateLocale.shortMonths[t];if (this.dateUtil.isMonthWithinRange(r, a.minDate, a.maxDate)) {
      var s = document.createElement("span");s.classList.add("md-calendar-date-selection-indicator"), s.textContent = l, i.appendChild(s), i.addEventListener("click", n.cellClickHandler), a.displayDate && this.dateUtil.isSameMonthAndYear(r, a.displayDate) && (this.focusAfterAppend = i);
    } else i.classList.add("md-calendar-date-disabled"), i.textContent = l;return i;
  }, t.prototype.buildBlankCell = function () {
    var e = document.createElement("td");return e.tabIndex = -1, e.classList.add("md-calendar-date"), e.setAttribute("role", "gridcell"), e.setAttribute("tabindex", "-1"), e;
  }, t.prototype.buildCalendarForYear = function (e) {
    var t,
        a = e.getFullYear(),
        n = document.createDocumentFragment(),
        i = document.createElement("tr"),
        r = document.createElement("td");for (r.className = "md-calendar-month-label", r.textContent = a, i.appendChild(r), t = 0; t < 6; t++) {
      i.appendChild(this.buildMonthCell(a, t));
    }n.appendChild(i);var l = document.createElement("tr");for (l.appendChild(this.buildBlankCell()), t = 6; t < 12; t++) {
      l.appendChild(this.buildMonthCell(a, t));
    }return n.appendChild(l), n;
  };
}(), function () {
  "use strict";
  angular.module("material.components.datepicker").config(["$provide", function (e) {
    function t() {
      this.months = null, this.shortMonths = null, this.days = null, this.shortDays = null, this.dates = null, this.firstDayOfWeek = 0, this.formatDate = null, this.parseDate = null, this.monthHeaderFormatter = null, this.weekNumberFormatter = null, this.longDateFormatter = null, this.msgCalendar = "", this.msgOpenCalendar = "";
    }t.prototype.$get = function (e, t) {
      function a(e, a) {
        if (!e) return "";var n = e.toLocaleTimeString(),
            i = e;return 0 !== e.getHours() || n.indexOf("11:") === -1 && n.indexOf("23:") === -1 || (i = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 1, 0, 0)), t("date")(i, "M/d/yyyy", a);
      }function n(e) {
        return new Date(e);
      }function i(e) {
        e = e.trim();var t = /^(([a-zA-Z]{3,}|[0-9]{1,4})([ \.,]+|[\/\-])){2}([a-zA-Z]{3,}|[0-9]{1,4})$/;return t.test(e);
      }function r(e) {
        return f.shortMonths[e.getMonth()] + " " + e.getFullYear();
      }function l(e) {
        return f.months[e.getMonth()] + " " + e.getFullYear();
      }function s(e) {
        return "Week " + e;
      }function d(e) {
        return [f.days[e.getDay()], f.months[e.getMonth()], f.dates[e.getDate()], e.getFullYear()].join(" ");
      }for (var o = e.DATETIME_FORMATS.SHORTDAY.map(function (e) {
        return e.substring(0, 1);
      }), c = Array(32), h = 1; h <= 31; h++) {
        c[h] = h;
      }var u = "Calendar",
          m = "Open calendar",
          p = new Date(1880, 0, 1),
          g = new Date(p.getFullYear() + 250, 0, 1),
          f = { months: this.months || e.DATETIME_FORMATS.MONTH, shortMonths: this.shortMonths || e.DATETIME_FORMATS.SHORTMONTH, days: this.days || e.DATETIME_FORMATS.DAY, shortDays: this.shortDays || o, dates: this.dates || c, firstDayOfWeek: this.firstDayOfWeek || 0, formatDate: this.formatDate || a, parseDate: this.parseDate || n, isDateComplete: this.isDateComplete || i, monthHeaderFormatter: this.monthHeaderFormatter || r, monthFormatter: this.monthFormatter || l, weekNumberFormatter: this.weekNumberFormatter || s, longDateFormatter: this.longDateFormatter || d, msgCalendar: this.msgCalendar || u, msgOpenCalendar: this.msgOpenCalendar || m, firstRenderableDate: this.firstRenderableDate || p, lastRenderableDate: this.lastRenderableDate || g };return f;
    }, t.prototype.$get.$inject = ["$locale", "$filter"], e.provider("$mdDateLocale", new t());
  }]);
}(), function () {
  "use strict";
  angular.module("material.components.datepicker").factory("$$mdDateUtil", function () {
    function e(e) {
      return new Date(e.getFullYear(), e.getMonth(), 1);
    }function t(e) {
      return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
    }function a(e) {
      return new Date(e.getFullYear(), e.getMonth() + 1, 1);
    }function n(e) {
      return new Date(e.getFullYear(), e.getMonth() - 1, 1);
    }function i(e, t) {
      return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth();
    }function r(e, t) {
      return e.getDate() == t.getDate() && i(e, t);
    }function l(e, t) {
      var n = a(e);return i(n, t);
    }function s(e, t) {
      var a = n(e);return i(t, a);
    }function d(e, t) {
      return f((e.getTime() + t.getTime()) / 2);
    }function o(t) {
      var a = e(t);return Math.floor((a.getDay() + t.getDate() - 1) / 7);
    }function c(e, t) {
      return new Date(e.getFullYear(), e.getMonth(), e.getDate() + t);
    }function h(e, a) {
      var n = new Date(e.getFullYear(), e.getMonth() + a, 1),
          i = t(n);return i < e.getDate() ? n.setDate(i) : n.setDate(e.getDate()), n;
    }function u(e, t) {
      return 12 * (t.getFullYear() - e.getFullYear()) + (t.getMonth() - e.getMonth());
    }function m(e) {
      return new Date(e.getFullYear(), e.getMonth(), t(e));
    }function p(e) {
      return e && e.getTime && !isNaN(e.getTime());
    }function g(e) {
      p(e) && e.setHours(0, 0, 0, 0);
    }function f(e) {
      var t;return t = angular.isUndefined(e) ? new Date() : new Date(e), g(t), t;
    }function D(e, t, a) {
      var n = f(e),
          i = p(t) ? f(t) : null,
          r = p(a) ? f(a) : null;return (!i || i <= n) && (!r || r >= n);
    }function C(e, t) {
      return h(e, 12 * t);
    }function v(e, t) {
      return t.getFullYear() - e.getFullYear();
    }function y(e, t, a) {
      var n = e;return t && e < t && (n = new Date(t.getTime())), a && e > a && (n = new Date(a.getTime())), n;
    }function $(e) {
      if (e && e.hasAttribute("data-timestamp")) return Number(e.getAttribute("data-timestamp"));
    }function b(e, t, a) {
      var n = e.getMonth(),
          i = e.getFullYear();return (!t || t.getFullYear() < i || t.getMonth() <= n) && (!a || a.getFullYear() > i || a.getMonth() >= n);
    }return { getFirstDateOfMonth: e, getNumberOfDaysInMonth: t, getDateInNextMonth: a, getDateInPreviousMonth: n, isInNextMonth: l, isInPreviousMonth: s, getDateMidpoint: d, isSameMonthAndYear: i, getWeekOfMonth: o, incrementDays: c, incrementMonths: h, getLastDateOfMonth: m, isSameDay: r, getMonthDistance: u, isValidDate: p, setDateTimeToMidnight: g, createDateAtMidnight: f, isDateWithinRange: D, incrementYears: C, getYearDistance: v, clampDate: y, getTimestampFromNode: $, isMonthWithinRange: b };
  });
}(), function () {
  "use strict";
  function e(e, a, n, i) {
    return { template: function template(t, a) {
        var n = a.mdHideIcons,
            i = a.ariaLabel || a.mdPlaceholder,
            r = "all" === n || "calendar" === n ? "" : '<md-button class="md-datepicker-button md-icon-button" type="button" tabindex="-1" aria-hidden="true" ng-click="ctrl.openCalendarPane($event)"><md-icon class="md-datepicker-calendar-icon" aria-label="md-calendar" md-svg-src="' + e.mdCalendar + '"></md-icon></md-button>',
            l = "";return "all" !== n && "triangle" !== n && (l = '<md-button type="button" md-no-ink class="md-datepicker-triangle-button md-icon-button" ng-click="ctrl.openCalendarPane($event)" aria-label="{{::ctrl.locale.msgOpenCalendar}}"><div class="md-datepicker-expand-triangle"></div></md-button>', t.addClass(s)), r + '<div class="md-datepicker-input-container" ng-class="{\'md-datepicker-focused\': ctrl.isFocused}"><input ' + (i ? 'aria-label="' + i + '" ' : "") + 'class="md-datepicker-input" aria-haspopup="true" aria-expanded="{{ctrl.isCalendarOpen}}" ng-focus="ctrl.setFocused(true)" ng-blur="ctrl.setFocused(false)"> ' + l + '</div><div class="md-datepicker-calendar-pane md-whiteframe-z1" id="{{::ctrl.calendarPaneId}}"><div class="md-datepicker-input-mask"><div class="md-datepicker-input-mask-opaque"></div></div><div class="md-datepicker-calendar"><md-calendar role="dialog" aria-label="{{::ctrl.locale.msgCalendar}}" md-current-view="{{::ctrl.currentView}}"md-min-date="ctrl.minDate"md-max-date="ctrl.maxDate"md-date-filter="ctrl.dateFilter"ng-model="ctrl.date" ng-if="ctrl.isCalendarOpen"></md-calendar></div></div>';
      }, require: ["ngModel", "mdDatepicker", "?^mdInputContainer", "?^form"], scope: { minDate: "=mdMinDate", maxDate: "=mdMaxDate", placeholder: "@mdPlaceholder", currentView: "@mdCurrentView", dateFilter: "=mdDateFilter", isOpen: "=?mdIsOpen", debounceInterval: "=mdDebounceInterval", dateLocale: "=mdDateLocale" }, controller: t, controllerAs: "ctrl", bindToController: !0, link: function link(e, t, s, d) {
        var o = d[0],
            c = d[1],
            h = d[2],
            u = d[3],
            m = a.parseAttributeBoolean(s.mdNoAsterisk);if (c.configureNgModel(o, h, i), h) {
          var p = t[0].querySelector(".md-errors-spacer");p && t.after(angular.element("<div>").append(p)), h.setHasPlaceholder(s.mdPlaceholder), h.input = t, h.element.addClass(r).toggleClass(l, "calendar" !== s.mdHideIcons && "all" !== s.mdHideIcons), h.label ? m || s.$observe("required", function (e) {
            h.label.toggleClass("md-required", !!e);
          }) : n.expect(t, "aria-label", s.mdPlaceholder), e.$watch(h.isErrorGetter || function () {
            return o.$invalid && (o.$touched || u && u.$submitted);
          }, h.setInvalid);
        } else if (u) var g = e.$watch(function () {
          return u.$submitted;
        }, function (e) {
          e && (c.updateErrorState(), g());
        });
      } };
  }function t(e, t, a, n, i, r, l, s, d, o, c) {
    this.$window = n, this.dateUtil = d, this.$mdConstant = i, this.$mdUtil = l, this.$$rAF = o, this.$mdDateLocale = s, this.documentElement = angular.element(document.documentElement), this.ngModelCtrl = null, this.inputElement = t[0].querySelector("input"), this.ngInputElement = angular.element(this.inputElement), this.inputContainer = t[0].querySelector(".md-datepicker-input-container"), this.calendarPane = t[0].querySelector(".md-datepicker-calendar-pane"), this.calendarButton = t[0].querySelector(".md-datepicker-button"), this.inputMask = angular.element(t[0].querySelector(".md-datepicker-input-mask-opaque")), this.$element = t, this.$attrs = a, this.$scope = e, this.date = null, this.isFocused = !1, this.isDisabled, this.setDisabled(t[0].disabled || angular.isString(a.disabled)), this.isCalendarOpen = !1, this.openOnFocus = a.hasOwnProperty("mdOpenOnFocus"), this.mdInputContainer = null, this.calendarPaneOpenedFrom = null, this.calendarPaneId = "md-date-pane-" + l.nextUid(), this.bodyClickHandler = angular.bind(this, this.handleBodyClick), this.windowEventName = h.test(navigator.userAgent || navigator.vendor || window.opera) ? "orientationchange" : "resize", this.windowEventHandler = l.debounce(angular.bind(this, this.closeCalendarPane), 100), this.windowBlurHandler = angular.bind(this, this.handleWindowBlur), this.ngDateFilter = c("date"), this.leftMargin = 20, this.topMargin = null, a.tabindex ? (this.ngInputElement.attr("tabindex", a.tabindex), a.$set("tabindex", null)) : a.$set("tabindex", "-1"), a.$set("aria-owns", this.calendarPaneId), r(t), r(angular.element(this.calendarPane));var u = this;e.$on("$destroy", function () {
      u.detachCalendarPane();
    }), a.mdIsOpen && e.$watch("ctrl.isOpen", function (e) {
      e ? u.openCalendarPane({ target: u.inputElement }) : u.closeCalendarPane();
    }), 1 === angular.version.major && angular.version.minor <= 4 && this.$onInit();
  }t.$inject = ["$scope", "$element", "$attrs", "$window", "$mdConstant", "$mdTheming", "$mdUtil", "$mdDateLocale", "$$mdDateUtil", "$$rAF", "$filter"], e.$inject = ["$$mdSvgRegistry", "$mdUtil", "$mdAria", "inputDirective"], angular.module("material.components.datepicker").directive("mdDatepicker", e);var a = 3,
      n = "md-datepicker-invalid",
      i = "md-datepicker-open",
      r = "_md-datepicker-floating-label",
      l = "_md-datepicker-has-calendar-icon",
      s = "_md-datepicker-has-triangle-icon",
      d = 500,
      o = 368,
      c = 360,
      h = /ipad|iphone|ipod|android/i;t.prototype.$onInit = function () {
    this.locale = this.dateLocale ? angular.extend({}, this.$mdDateLocale, this.dateLocale) : this.$mdDateLocale, this.installPropertyInterceptors(), this.attachChangeListeners(), this.attachInteractionListeners();
  }, t.prototype.configureNgModel = function (e, t, a) {
    this.ngModelCtrl = e, this.mdInputContainer = t, this.$attrs.$set("type", "date"), a[0].link.pre(this.$scope, { on: angular.noop, val: angular.noop, 0: {} }, this.$attrs, [e]);var n = this;n.ngModelCtrl.$formatters.push(function (e) {
      if (e && !(e instanceof Date)) throw Error("The ng-model for md-datepicker must be a Date instance. Currently the model is a: " + (typeof e === "undefined" ? "undefined" : _typeof(e)));return n.onExternalChange(e), e;
    }), e.$viewChangeListeners.unshift(angular.bind(this, this.updateErrorState));var i = n.$mdUtil.getModelOption(e, "updateOn");i && this.ngInputElement.on(i, angular.bind(this.$element, this.$element.triggerHandler, i));
  }, t.prototype.attachChangeListeners = function () {
    var e = this;e.$scope.$on("md-calendar-change", function (t, a) {
      e.setModelValue(a), e.onExternalChange(a), e.closeCalendarPane();
    }), e.ngInputElement.on("input", angular.bind(e, e.resizeInputElement));var t = angular.isDefined(this.debounceInterval) ? this.debounceInterval : d;e.ngInputElement.on("input", e.$mdUtil.debounce(e.handleInputEvent, t, e));
  }, t.prototype.attachInteractionListeners = function () {
    var e = this,
        t = this.$scope,
        a = this.$mdConstant.KEY_CODE;e.ngInputElement.on("keydown", function (n) {
      n.altKey && n.keyCode == a.DOWN_ARROW && (e.openCalendarPane(n), t.$digest());
    }), e.openOnFocus && (e.ngInputElement.on("focus", angular.bind(e, e.openCalendarPane)), angular.element(e.$window).on("blur", e.windowBlurHandler), t.$on("$destroy", function () {
      angular.element(e.$window).off("blur", e.windowBlurHandler);
    })), t.$on("md-calendar-close", function () {
      e.closeCalendarPane();
    });
  }, t.prototype.installPropertyInterceptors = function () {
    var e = this;if (this.$attrs.ngDisabled) {
      var t = this.$scope.$parent;t && t.$watch(this.$attrs.ngDisabled, function (t) {
        e.setDisabled(t);
      });
    }Object.defineProperty(this, "placeholder", { get: function get() {
        return e.inputElement.placeholder;
      }, set: function set(t) {
        e.inputElement.placeholder = t || "";
      } });
  }, t.prototype.setDisabled = function (e) {
    this.isDisabled = e, this.inputElement.disabled = e, this.calendarButton && (this.calendarButton.disabled = e);
  }, t.prototype.updateErrorState = function (e) {
    var t = e || this.date;if (this.clearErrorState(), this.dateUtil.isValidDate(t)) {
      if (t = this.dateUtil.createDateAtMidnight(t), this.dateUtil.isValidDate(this.minDate)) {
        var a = this.dateUtil.createDateAtMidnight(this.minDate);this.ngModelCtrl.$setValidity("mindate", t >= a);
      }if (this.dateUtil.isValidDate(this.maxDate)) {
        var i = this.dateUtil.createDateAtMidnight(this.maxDate);this.ngModelCtrl.$setValidity("maxdate", t <= i);
      }angular.isFunction(this.dateFilter) && this.ngModelCtrl.$setValidity("filtered", this.dateFilter(t));
    } else this.ngModelCtrl.$setValidity("valid", null == t);angular.element(this.inputContainer).toggleClass(n, !this.ngModelCtrl.$valid);
  }, t.prototype.clearErrorState = function () {
    this.inputContainer.classList.remove(n), ["mindate", "maxdate", "filtered", "valid"].forEach(function (e) {
      this.ngModelCtrl.$setValidity(e, !0);
    }, this);
  }, t.prototype.resizeInputElement = function () {
    this.inputElement.size = this.inputElement.value.length + a;
  }, t.prototype.handleInputEvent = function () {
    var e = this.inputElement.value,
        t = e ? this.locale.parseDate(e) : null;this.dateUtil.setDateTimeToMidnight(t);var a = "" == e || this.dateUtil.isValidDate(t) && this.locale.isDateComplete(e) && this.isDateEnabled(t);a && (this.setModelValue(t), this.date = t), this.updateErrorState(t);
  }, t.prototype.isDateEnabled = function (e) {
    return this.dateUtil.isDateWithinRange(e, this.minDate, this.maxDate) && (!angular.isFunction(this.dateFilter) || this.dateFilter(e));
  }, t.prototype.attachCalendarPane = function () {
    var e = this.calendarPane,
        t = document.body;e.style.transform = "", this.$element.addClass(i), this.mdInputContainer && this.mdInputContainer.element.addClass(i), angular.element(t).addClass("md-datepicker-is-showing");var a = this.inputContainer.getBoundingClientRect(),
        n = t.getBoundingClientRect();(!this.topMargin || this.topMargin < 0) && (this.topMargin = (this.inputMask.parent().prop("clientHeight") - this.ngInputElement.prop("clientHeight")) / 2);var r = a.top - n.top - this.topMargin,
        l = a.left - n.left - this.leftMargin,
        s = n.top < 0 && 0 == document.body.scrollTop ? -n.top : document.body.scrollTop,
        d = n.left < 0 && 0 == document.body.scrollLeft ? -n.left : document.body.scrollLeft,
        h = s + this.$window.innerHeight,
        u = d + this.$window.innerWidth;
    if (this.inputMask.css({ position: "absolute", left: this.leftMargin + "px", top: this.topMargin + "px", width: a.width - 1 + "px", height: a.height - 2 + "px" }), l + c > u) {
      if (u - c > 0) l = u - c;else {
        l = d;var m = this.$window.innerWidth / c;e.style.transform = "scale(" + m + ")";
      }e.classList.add("md-datepicker-pos-adjusted");
    }r + o > h && h - o > s && (r = h - o, e.classList.add("md-datepicker-pos-adjusted")), e.style.left = l + "px", e.style.top = r + "px", document.body.appendChild(e), this.$$rAF(function () {
      e.classList.add("md-pane-open");
    });
  }, t.prototype.detachCalendarPane = function () {
    this.$element.removeClass(i), this.mdInputContainer && this.mdInputContainer.element.removeClass(i), angular.element(document.body).removeClass("md-datepicker-is-showing"), this.calendarPane.classList.remove("md-pane-open"), this.calendarPane.classList.remove("md-datepicker-pos-adjusted"), this.isCalendarOpen && this.$mdUtil.enableScrolling(), this.calendarPane.parentNode && this.calendarPane.parentNode.removeChild(this.calendarPane);
  }, t.prototype.openCalendarPane = function (e) {
    if (!this.isCalendarOpen && !this.isDisabled && !this.inputFocusedOnWindowBlur) {
      this.isCalendarOpen = this.isOpen = !0, this.calendarPaneOpenedFrom = e.target, this.$mdUtil.disableScrollAround(this.calendarPane), this.attachCalendarPane(), this.focusCalendar(), this.evalAttr("ngFocus");var t = this;this.$mdUtil.nextTick(function () {
        t.documentElement.on("click touchstart", t.bodyClickHandler);
      }, !1), window.addEventListener(this.windowEventName, this.windowEventHandler);
    }
  }, t.prototype.closeCalendarPane = function () {
    function e() {
      t.isCalendarOpen = t.isOpen = !1;
    }if (this.isCalendarOpen) {
      var t = this;t.detachCalendarPane(), t.ngModelCtrl.$setTouched(), t.evalAttr("ngBlur"), t.documentElement.off("click touchstart", t.bodyClickHandler), window.removeEventListener(t.windowEventName, t.windowEventHandler), t.calendarPaneOpenedFrom.focus(), t.calendarPaneOpenedFrom = null, t.openOnFocus ? t.$mdUtil.nextTick(e) : e();
    }
  }, t.prototype.getCalendarCtrl = function () {
    return angular.element(this.calendarPane.querySelector("md-calendar")).controller("mdCalendar");
  }, t.prototype.focusCalendar = function () {
    var e = this;this.$mdUtil.nextTick(function () {
      e.getCalendarCtrl().focus();
    }, !1);
  }, t.prototype.setFocused = function (e) {
    e || this.ngModelCtrl.$setTouched(), this.openOnFocus || this.evalAttr(e ? "ngFocus" : "ngBlur"), this.isFocused = e;
  }, t.prototype.handleBodyClick = function (e) {
    if (this.isCalendarOpen) {
      var t = this.$mdUtil.getClosest(e.target, "md-calendar");t || this.closeCalendarPane(), this.$scope.$digest();
    }
  }, t.prototype.handleWindowBlur = function () {
    this.inputFocusedOnWindowBlur = document.activeElement === this.inputElement;
  }, t.prototype.evalAttr = function (e) {
    this.$attrs[e] && this.$scope.$parent.$eval(this.$attrs[e]);
  }, t.prototype.setModelValue = function (e) {
    var t = this.$mdUtil.getModelOption(this.ngModelCtrl, "timezone");this.ngModelCtrl.$setViewValue(this.ngDateFilter(e, "yyyy-MM-dd", t));
  }, t.prototype.onExternalChange = function (e) {
    var t = this.$mdUtil.getModelOption(this.ngModelCtrl, "timezone");this.date = e, this.inputElement.value = this.locale.formatDate(e, t), this.mdInputContainer && this.mdInputContainer.setHasValue(!!e), this.resizeInputElement(), this.updateErrorState();
  };
}(), ngmaterial.components.datepicker = angular.module("material.components.datepicker");

//# sourceMappingURL=datepicker.min-compiled.js.map