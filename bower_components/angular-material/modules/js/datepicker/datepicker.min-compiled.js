"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (t, e, a) {
  "use strict";
  e.module("material.components.datepicker", ["material.core", "material.components.icon", "material.components.virtualRepeat"]), function () {
    function t() {
      return { template: function template(t, e) {
          var a = e.hasOwnProperty("ngIf") ? "" : 'ng-if="calendarCtrl.isInitialized"',
              n = '<div ng-switch="calendarCtrl.currentView" ' + a + '><md-calendar-year ng-switch-when="year"></md-calendar-year><md-calendar-month ng-switch-default></md-calendar-month></div>';return n;
        }, scope: { minDate: "=mdMinDate", maxDate: "=mdMaxDate", dateFilter: "=mdDateFilter", _currentView: "@mdCurrentView" }, require: ["ngModel", "mdCalendar"], controller: a, controllerAs: "calendarCtrl", bindToController: !0, link: function link(t, e, a, n) {
          var i = n[0],
              r = n[1];r.configureNgModel(i);
        } };
    }function a(t, a, n, r, l, s, d, o, c) {
      s(t), this.$element = t, this.$scope = a, this.dateUtil = n, this.$mdUtil = r, this.keyCode = l.KEY_CODE, this.$$rAF = d, this.$mdDateLocale = c, this.today = this.dateUtil.createDateAtMidnight(), this.ngModelCtrl = null, this.SELECTED_DATE_CLASS = "md-calendar-selected-date", this.TODAY_CLASS = "md-calendar-date-today", this.FOCUSED_DATE_CLASS = "md-focus", this.id = i++, this.displayDate = null, this.selectedDate = null, this.firstRenderableDate = null, this.lastRenderableDate = null, this.isInitialized = !1, this.width = 0, this.scrollbarWidth = 0, o.tabindex || t.attr("tabindex", "-1");var h,
          u = e.bind(this, this.handleKeyEvent);h = t.parent().hasClass("md-datepicker-calendar") ? e.element(document.body) : t, h.on("keydown", u), a.$on("$destroy", function () {
        h.off("keydown", u);
      }), 1 === e.version.major && e.version.minor <= 4 && this.$onInit();
    }a.$inject = ["$element", "$scope", "$$mdDateUtil", "$mdUtil", "$mdConstant", "$mdTheming", "$$rAF", "$attrs", "$mdDateLocale"], e.module("material.components.datepicker").directive("mdCalendar", t);var n = 340,
        i = 0;a.prototype.$onInit = function () {
      this.currentView = this._currentView || "month";var t = this.$mdDateLocale;this.minDate && this.minDate > t.firstRenderableDate ? this.firstRenderableDate = this.minDate : this.firstRenderableDate = t.firstRenderableDate, this.maxDate && this.maxDate < t.lastRenderableDate ? this.lastRenderableDate = this.maxDate : this.lastRenderableDate = t.lastRenderableDate;
    }, a.prototype.configureNgModel = function (t) {
      var e = this;e.ngModelCtrl = t, e.$mdUtil.nextTick(function () {
        e.isInitialized = !0;
      }), t.$render = function () {
        var t = this.$viewValue;e.$scope.$broadcast("md-calendar-parent-changed", t), e.selectedDate || (e.selectedDate = t), e.displayDate || (e.displayDate = e.selectedDate || e.today);
      };
    }, a.prototype.setNgModelValue = function (t) {
      var e = this.dateUtil.createDateAtMidnight(t);return this.focus(e), this.$scope.$emit("md-calendar-change", e), this.ngModelCtrl.$setViewValue(e), this.ngModelCtrl.$render(), e;
    }, a.prototype.setCurrentView = function (t, a) {
      var n = this;n.$mdUtil.nextTick(function () {
        n.currentView = t, a && (n.displayDate = e.isDate(a) ? a : new Date(a));
      });
    }, a.prototype.focus = function (t) {
      if (this.dateUtil.isValidDate(t)) {
        var e = this.$element[0].querySelector(".md-focus");e && e.classList.remove(this.FOCUSED_DATE_CLASS);var a = this.getDateId(t, this.currentView),
            n = document.getElementById(a);n && (n.classList.add(this.FOCUSED_DATE_CLASS), n.focus(), this.displayDate = t);
      } else {
        var i = this.$element[0].querySelector("[ng-switch]");i && i.focus();
      }
    }, a.prototype.getActionFromKeyEvent = function (t) {
      var e = this.keyCode;switch (t.which) {case e.ENTER:
          return "select";case e.RIGHT_ARROW:
          return "move-right";case e.LEFT_ARROW:
          return "move-left";case e.DOWN_ARROW:
          return t.metaKey ? "move-page-down" : "move-row-down";case e.UP_ARROW:
          return t.metaKey ? "move-page-up" : "move-row-up";case e.PAGE_DOWN:
          return "move-page-down";case e.PAGE_UP:
          return "move-page-up";case e.HOME:
          return "start";case e.END:
          return "end";default:
          return null;}
    }, a.prototype.handleKeyEvent = function (t) {
      var e = this;this.$scope.$apply(function () {
        if (t.which == e.keyCode.ESCAPE || t.which == e.keyCode.TAB) return e.$scope.$emit("md-calendar-close"), void (t.which == e.keyCode.TAB && t.preventDefault());var a = e.getActionFromKeyEvent(t);a && (t.preventDefault(), t.stopPropagation(), e.$scope.$broadcast("md-calendar-parent-action", a));
      });
    }, a.prototype.hideVerticalScrollbar = function (t) {
      function e() {
        var e = a.width || n,
            i = a.scrollbarWidth,
            l = t.calendarScroller;r.style.width = e + "px", l.style.width = e + i + "px", l.style.paddingRight = i + "px";
      }var a = this,
          i = t.$element[0],
          r = i.querySelector(".md-calendar-scroll-mask");a.width > 0 ? e() : a.$$rAF(function () {
        var n = t.calendarScroller;a.scrollbarWidth = n.offsetWidth - n.clientWidth, a.width = i.querySelector("table").offsetWidth, e();
      });
    }, a.prototype.getDateId = function (t, e) {
      if (!e) throw new Error("A namespace for the date id has to be specified.");return ["md", this.id, e, t.getFullYear(), t.getMonth(), t.getDate()].join("-");
    }, a.prototype.updateVirtualRepeat = function () {
      var t = this.$scope,
          e = t.$on("$md-resize-enable", function () {
        t.$$phase || t.$apply(), e();
      });
    };
  }(), function () {
    function t() {
      return { template: '<table aria-hidden="true" class="md-calendar-day-header"><thead></thead></table><div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container" md-offset-size="' + (i - n) + '"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody md-calendar-month-body role="rowgroup" md-virtual-repeat="i in monthCtrl.items" md-month-offset="$index" class="md-calendar-month" md-start-index="monthCtrl.getSelectedMonthIndex()" md-item-size="' + n + '"><tr aria-hidden="true" style="height:' + n + 'px;"></tr></tbody></table></md-virtual-repeat-container></div>', require: ["^^mdCalendar", "mdCalendarMonth"], controller: a, controllerAs: "monthCtrl", bindToController: !0, link: function link(t, e, a, n) {
          var i = n[0],
              r = n[1];r.initialize(i);
        } };
    }function a(t, e, a, n, i, r) {
      this.$element = t, this.$scope = e, this.$animate = a, this.$q = n, this.dateUtil = i, this.dateLocale = r, this.calendarScroller = t[0].querySelector(".md-virtual-repeat-scroller"), this.isInitialized = !1, this.isMonthTransitionInProgress = !1;var l = this;this.cellClickHandler = function () {
        var t = i.getTimestampFromNode(this);l.$scope.$apply(function () {
          l.calendarCtrl.setNgModelValue(t);
        });
      }, this.headerClickHandler = function () {
        l.calendarCtrl.setCurrentView("year", i.getTimestampFromNode(this));
      };
    }a.$inject = ["$element", "$scope", "$animate", "$q", "$$mdDateUtil", "$mdDateLocale"], e.module("material.components.datepicker").directive("mdCalendarMonth", t);var n = 265,
        i = 45;a.prototype.initialize = function (t) {
      this.items = { length: this.dateUtil.getMonthDistance(t.firstRenderableDate, t.lastRenderableDate) + 2 }, this.calendarCtrl = t, this.attachScopeListeners(), t.updateVirtualRepeat(), t.ngModelCtrl && t.ngModelCtrl.$render();
    }, a.prototype.getSelectedMonthIndex = function () {
      var t = this.calendarCtrl;return this.dateUtil.getMonthDistance(t.firstRenderableDate, t.displayDate || t.selectedDate || t.today);
    }, a.prototype.changeSelectedDate = function (t) {
      var e = this,
          a = e.calendarCtrl,
          n = a.selectedDate;a.selectedDate = t, this.changeDisplayDate(t).then(function () {
        var e = a.SELECTED_DATE_CLASS,
            i = "month";if (n) {
          var r = document.getElementById(a.getDateId(n, i));r && (r.classList.remove(e), r.setAttribute("aria-selected", "false"));
        }if (t) {
          var l = document.getElementById(a.getDateId(t, i));l && (l.classList.add(e), l.setAttribute("aria-selected", "true"));
        }
      });
    }, a.prototype.changeDisplayDate = function (t) {
      if (!this.isInitialized) return this.buildWeekHeader(), this.calendarCtrl.hideVerticalScrollbar(this), this.isInitialized = !0, this.$q.when();if (!this.dateUtil.isValidDate(t) || this.isMonthTransitionInProgress) return this.$q.when();this.isMonthTransitionInProgress = !0;var e = this.animateDateChange(t);this.calendarCtrl.displayDate = t;var a = this;return e.then(function () {
        a.isMonthTransitionInProgress = !1;
      }), e;
    }, a.prototype.animateDateChange = function (t) {
      if (this.dateUtil.isValidDate(t)) {
        var e = this.dateUtil.getMonthDistance(this.calendarCtrl.firstRenderableDate, t);this.calendarScroller.scrollTop = e * n;
      }return this.$q.when();
    }, a.prototype.buildWeekHeader = function () {
      for (var t = this.dateLocale.firstDayOfWeek, e = this.dateLocale.shortDays, a = document.createElement("tr"), n = 0; n < 7; n++) {
        var i = document.createElement("th");i.textContent = e[(n + t) % 7], a.appendChild(i);
      }this.$element.find("thead").append(a);
    }, a.prototype.attachScopeListeners = function () {
      var t = this;t.$scope.$on("md-calendar-parent-changed", function (e, a) {
        t.changeSelectedDate(a);
      }), t.$scope.$on("md-calendar-parent-action", e.bind(this, this.handleKeyEvent));
    }, a.prototype.handleKeyEvent = function (t, e) {
      var a = this.calendarCtrl,
          n = a.displayDate;if ("select" === e) a.setNgModelValue(n);else {
        var i = null,
            r = this.dateUtil;switch (e) {case "move-right":
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
    function t(t, n) {
      var i = t('<md-icon md-svg-src="' + n.mdTabsArrow + '"></md-icon>')({})[0];return { require: ["^^mdCalendar", "^^mdCalendarMonth", "mdCalendarMonthBody"], scope: { offset: "=mdMonthOffset" }, controller: a, controllerAs: "mdMonthBodyCtrl", bindToController: !0, link: function link(t, a, n, r) {
          var l = r[0],
              s = r[1],
              d = r[2];d.calendarCtrl = l, d.monthCtrl = s, d.arrowIcon = i.cloneNode(!0), t.$watch(function () {
            return d.offset;
          }, function (t) {
            e.isNumber(t) && d.generateContent();
          });
        } };
    }function a(t, e, a) {
      this.$element = t, this.dateUtil = e, this.dateLocale = a, this.monthCtrl = null, this.calendarCtrl = null, this.offset = null, this.focusAfterAppend = null;
    }t.$inject = ["$compile", "$$mdSvgRegistry"], a.$inject = ["$element", "$$mdDateUtil", "$mdDateLocale"], e.module("material.components.datepicker").directive("mdCalendarMonthBody", t), a.prototype.generateContent = function () {
      var t = this.dateUtil.incrementMonths(this.calendarCtrl.firstRenderableDate, this.offset);this.$element.empty().append(this.buildCalendarForMonth(t)), this.focusAfterAppend && (this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS), this.focusAfterAppend.focus(), this.focusAfterAppend = null);
    }, a.prototype.buildDateCell = function (t) {
      var e = this.monthCtrl,
          a = this.calendarCtrl,
          n = document.createElement("td");if (n.tabIndex = -1, n.classList.add("md-calendar-date"), n.setAttribute("role", "gridcell"), t) {
        n.setAttribute("tabindex", "-1"), n.setAttribute("aria-label", this.dateLocale.longDateFormatter(t)), n.id = a.getDateId(t, "month"), n.setAttribute("data-timestamp", t.getTime()), this.dateUtil.isSameDay(t, a.today) && n.classList.add(a.TODAY_CLASS), this.dateUtil.isValidDate(a.selectedDate) && this.dateUtil.isSameDay(t, a.selectedDate) && (n.classList.add(a.SELECTED_DATE_CLASS), n.setAttribute("aria-selected", "true"));var i = this.dateLocale.dates[t.getDate()];if (this.isDateEnabled(t)) {
          var r = document.createElement("span");r.classList.add("md-calendar-date-selection-indicator"), r.textContent = i, n.appendChild(r), n.addEventListener("click", e.cellClickHandler), a.displayDate && this.dateUtil.isSameDay(t, a.displayDate) && (this.focusAfterAppend = n);
        } else n.classList.add("md-calendar-date-disabled"), n.textContent = i;
      }return n;
    }, a.prototype.isDateEnabled = function (t) {
      return this.dateUtil.isDateWithinRange(t, this.calendarCtrl.minDate, this.calendarCtrl.maxDate) && (!e.isFunction(this.calendarCtrl.dateFilter) || this.calendarCtrl.dateFilter(t));
    }, a.prototype.buildDateRow = function (t) {
      var e = document.createElement("tr");return e.setAttribute("role", "row"), e.setAttribute("aria-label", this.dateLocale.weekNumberFormatter(t)), e;
    }, a.prototype.buildCalendarForMonth = function (t) {
      var e = this.dateUtil.isValidDate(t) ? t : new Date(),
          a = this.dateUtil.getFirstDateOfMonth(e),
          n = this.getLocaleDay_(a),
          i = this.dateUtil.getNumberOfDaysInMonth(e),
          r = document.createDocumentFragment(),
          l = 1,
          s = this.buildDateRow(l);r.appendChild(s);var d = this.offset === this.monthCtrl.items.length - 1,
          o = 0,
          c = document.createElement("td"),
          h = document.createElement("span");if (h.textContent = this.dateLocale.monthHeaderFormatter(e), c.appendChild(h), c.classList.add("md-calendar-month-label"), this.calendarCtrl.maxDate && a > this.calendarCtrl.maxDate ? c.classList.add("md-calendar-month-label-disabled") : (c.addEventListener("click", this.monthCtrl.headerClickHandler), c.setAttribute("data-timestamp", a.getTime()), c.setAttribute("aria-label", this.dateLocale.monthFormatter(e)), c.appendChild(this.arrowIcon.cloneNode(!0))), n <= 2) {
        c.setAttribute("colspan", "7");var u = this.buildDateRow();if (u.appendChild(c), r.insertBefore(u, s), d) return r;
      } else o = 3, c.setAttribute("colspan", "3"), s.appendChild(c);for (var m = o; m < n; m++) {
        s.appendChild(this.buildDateCell());
      }for (var p = n, f = a, g = 1; g <= i; g++) {
        if (7 === p) {
          if (d) return r;p = 0, l++, s = this.buildDateRow(l), r.appendChild(s);
        }f.setDate(g);var D = this.buildDateCell(f);s.appendChild(D), p++;
      }for (; s.childNodes.length < 7;) {
        s.appendChild(this.buildDateCell());
      }for (; r.childNodes.length < 6;) {
        for (var C = this.buildDateRow(), v = 0; v < 7; v++) {
          C.appendChild(this.buildDateCell());
        }r.appendChild(C);
      }return r;
    }, a.prototype.getLocaleDay_ = function (t) {
      return (t.getDay() + (7 - this.dateLocale.firstDayOfWeek)) % 7;
    };
  }(), function () {
    function t() {
      return { template: '<div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody md-calendar-year-body role="rowgroup" md-virtual-repeat="i in yearCtrl.items" md-year-offset="$index" class="md-calendar-year" md-start-index="yearCtrl.getFocusedYearIndex()" md-item-size="' + n + '"><tr aria-hidden="true" style="height:' + n + 'px;"></tr></tbody></table></md-virtual-repeat-container></div>', require: ["^^mdCalendar", "mdCalendarYear"], controller: a, controllerAs: "yearCtrl", bindToController: !0, link: function link(t, e, a, n) {
          var i = n[0],
              r = n[1];r.initialize(i);
        } };
    }function a(t, e, a, n, i) {
      this.$element = t, this.$scope = e, this.$animate = a, this.$q = n, this.dateUtil = i, this.calendarScroller = t[0].querySelector(".md-virtual-repeat-scroller"), this.isInitialized = !1, this.isMonthTransitionInProgress = !1;var r = this;this.cellClickHandler = function () {
        r.calendarCtrl.setCurrentView("month", i.getTimestampFromNode(this));
      };
    }a.$inject = ["$element", "$scope", "$animate", "$q", "$$mdDateUtil"], e.module("material.components.datepicker").directive("mdCalendarYear", t);var n = 88;a.prototype.initialize = function (t) {
      this.items = { length: this.dateUtil.getYearDistance(t.firstRenderableDate, t.lastRenderableDate) + 1 }, this.calendarCtrl = t, this.attachScopeListeners(), t.updateVirtualRepeat(), t.ngModelCtrl && t.ngModelCtrl.$render();
    }, a.prototype.getFocusedYearIndex = function () {
      var t = this.calendarCtrl;return this.dateUtil.getYearDistance(t.firstRenderableDate, t.displayDate || t.selectedDate || t.today);
    }, a.prototype.changeDate = function (t) {
      if (!this.isInitialized) return this.calendarCtrl.hideVerticalScrollbar(this), this.isInitialized = !0, this.$q.when();if (this.dateUtil.isValidDate(t) && !this.isMonthTransitionInProgress) {
        var e = this,
            a = this.animateDateChange(t);return e.isMonthTransitionInProgress = !0, e.calendarCtrl.displayDate = t, a.then(function () {
          e.isMonthTransitionInProgress = !1;
        });
      }
    }, a.prototype.animateDateChange = function (t) {
      if (this.dateUtil.isValidDate(t)) {
        var e = this.dateUtil.getYearDistance(this.calendarCtrl.firstRenderableDate, t);this.calendarScroller.scrollTop = e * n;
      }return this.$q.when();
    }, a.prototype.handleKeyEvent = function (t, e) {
      var a = this.calendarCtrl,
          n = a.displayDate;if ("select" === e) this.changeDate(n).then(function () {
        a.setCurrentView("month", n), a.focus(n);
      });else {
        var i = null,
            r = this.dateUtil;switch (e) {case "move-right":
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
    }, a.prototype.attachScopeListeners = function () {
      var t = this;t.$scope.$on("md-calendar-parent-changed", function (e, a) {
        t.changeDate(a);
      }), t.$scope.$on("md-calendar-parent-action", e.bind(t, t.handleKeyEvent));
    };
  }(), function () {
    function t() {
      return { require: ["^^mdCalendar", "^^mdCalendarYear", "mdCalendarYearBody"], scope: { offset: "=mdYearOffset" }, controller: a, controllerAs: "mdYearBodyCtrl", bindToController: !0, link: function link(t, a, n, i) {
          var r = i[0],
              l = i[1],
              s = i[2];s.calendarCtrl = r, s.yearCtrl = l, t.$watch(function () {
            return s.offset;
          }, function (t) {
            e.isNumber(t) && s.generateContent();
          });
        } };
    }function a(t, e, a) {
      this.$element = t, this.dateUtil = e, this.dateLocale = a, this.calendarCtrl = null, this.yearCtrl = null, this.offset = null, this.focusAfterAppend = null;
    }a.$inject = ["$element", "$$mdDateUtil", "$mdDateLocale"], e.module("material.components.datepicker").directive("mdCalendarYearBody", t), a.prototype.generateContent = function () {
      var t = this.dateUtil.incrementYears(this.calendarCtrl.firstRenderableDate, this.offset);this.$element.empty().append(this.buildCalendarForYear(t)), this.focusAfterAppend && (this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS), this.focusAfterAppend.focus(), this.focusAfterAppend = null);
    }, a.prototype.buildMonthCell = function (t, e) {
      var a = this.calendarCtrl,
          n = this.yearCtrl,
          i = this.buildBlankCell(),
          r = new Date(t, e, 1);i.setAttribute("aria-label", this.dateLocale.monthFormatter(r)), i.id = a.getDateId(r, "year"), i.setAttribute("data-timestamp", r.getTime()), this.dateUtil.isSameMonthAndYear(r, a.today) && i.classList.add(a.TODAY_CLASS), this.dateUtil.isValidDate(a.selectedDate) && this.dateUtil.isSameMonthAndYear(r, a.selectedDate) && (i.classList.add(a.SELECTED_DATE_CLASS), i.setAttribute("aria-selected", "true"));var l = this.dateLocale.shortMonths[e];if (this.dateUtil.isMonthWithinRange(r, a.minDate, a.maxDate)) {
        var s = document.createElement("span");s.classList.add("md-calendar-date-selection-indicator"), s.textContent = l, i.appendChild(s), i.addEventListener("click", n.cellClickHandler), a.displayDate && this.dateUtil.isSameMonthAndYear(r, a.displayDate) && (this.focusAfterAppend = i);
      } else i.classList.add("md-calendar-date-disabled"), i.textContent = l;return i;
    }, a.prototype.buildBlankCell = function () {
      var t = document.createElement("td");return t.tabIndex = -1, t.classList.add("md-calendar-date"), t.setAttribute("role", "gridcell"), t.setAttribute("tabindex", "-1"), t;
    }, a.prototype.buildCalendarForYear = function (t) {
      var e,
          a = t.getFullYear(),
          n = document.createDocumentFragment(),
          i = document.createElement("tr"),
          r = document.createElement("td");for (r.className = "md-calendar-month-label", r.textContent = a, i.appendChild(r), e = 0; e < 6; e++) {
        i.appendChild(this.buildMonthCell(a, e));
      }n.appendChild(i);var l = document.createElement("tr");for (l.appendChild(this.buildBlankCell()), e = 6; e < 12; e++) {
        l.appendChild(this.buildMonthCell(a, e));
      }return n.appendChild(l), n;
    };
  }(), function () {
    e.module("material.components.datepicker").config(["$provide", function (t) {
      function e() {
        this.months = null, this.shortMonths = null, this.days = null, this.shortDays = null, this.dates = null, this.firstDayOfWeek = 0, this.formatDate = null, this.parseDate = null, this.monthHeaderFormatter = null, this.weekNumberFormatter = null, this.longDateFormatter = null, this.msgCalendar = "", this.msgOpenCalendar = "";
      }e.prototype.$get = function (t, e) {
        function a(t, a) {
          if (!t) return "";var n = t.toLocaleTimeString(),
              i = t;return 0 !== t.getHours() || n.indexOf("11:") === -1 && n.indexOf("23:") === -1 || (i = new Date(t.getFullYear(), t.getMonth(), t.getDate(), 1, 0, 0)), e("date")(i, "M/d/yyyy", a);
        }function n(t) {
          return new Date(t);
        }function i(t) {
          t = t.trim();var e = /^(([a-zA-Z]{3,}|[0-9]{1,4})([ \.,]+|[\/\-])){2}([a-zA-Z]{3,}|[0-9]{1,4})$/;return e.test(t);
        }function r(t) {
          return g.shortMonths[t.getMonth()] + " " + t.getFullYear();
        }function l(t) {
          return g.months[t.getMonth()] + " " + t.getFullYear();
        }function s(t) {
          return "Week " + t;
        }function d(t) {
          return [g.days[t.getDay()], g.months[t.getMonth()], g.dates[t.getDate()], t.getFullYear()].join(" ");
        }for (var o = t.DATETIME_FORMATS.SHORTDAY.map(function (t) {
          return t.substring(0, 1);
        }), c = Array(32), h = 1; h <= 31; h++) {
          c[h] = h;
        }var u = "Calendar",
            m = "Open calendar",
            p = new Date(1880, 0, 1),
            f = new Date(p.getFullYear() + 250, 0, 1),
            g = { months: this.months || t.DATETIME_FORMATS.MONTH, shortMonths: this.shortMonths || t.DATETIME_FORMATS.SHORTMONTH, days: this.days || t.DATETIME_FORMATS.DAY, shortDays: this.shortDays || o, dates: this.dates || c, firstDayOfWeek: this.firstDayOfWeek || 0, formatDate: this.formatDate || a, parseDate: this.parseDate || n, isDateComplete: this.isDateComplete || i, monthHeaderFormatter: this.monthHeaderFormatter || r, monthFormatter: this.monthFormatter || l, weekNumberFormatter: this.weekNumberFormatter || s, longDateFormatter: this.longDateFormatter || d, msgCalendar: this.msgCalendar || u, msgOpenCalendar: this.msgOpenCalendar || m, firstRenderableDate: this.firstRenderableDate || p, lastRenderableDate: this.lastRenderableDate || f };return g;
      }, e.prototype.$get.$inject = ["$locale", "$filter"], t.provider("$mdDateLocale", new e());
    }]);
  }(), function () {
    e.module("material.components.datepicker").factory("$$mdDateUtil", function () {
      function t(t) {
        return new Date(t.getFullYear(), t.getMonth(), 1);
      }function a(t) {
        return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate();
      }function n(t) {
        return new Date(t.getFullYear(), t.getMonth() + 1, 1);
      }function i(t) {
        return new Date(t.getFullYear(), t.getMonth() - 1, 1);
      }function r(t, e) {
        return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth();
      }function l(t, e) {
        return t.getDate() == e.getDate() && r(t, e);
      }function s(t, e) {
        var a = n(t);return r(a, e);
      }function d(t, e) {
        var a = i(t);return r(e, a);
      }function o(t, e) {
        return D((t.getTime() + e.getTime()) / 2);
      }function c(e) {
        var a = t(e);return Math.floor((a.getDay() + e.getDate() - 1) / 7);
      }function h(t, e) {
        return new Date(t.getFullYear(), t.getMonth(), t.getDate() + e);
      }function u(t, e) {
        var n = new Date(t.getFullYear(), t.getMonth() + e, 1),
            i = a(n);return i < t.getDate() ? n.setDate(i) : n.setDate(t.getDate()), n;
      }function m(t, e) {
        return 12 * (e.getFullYear() - t.getFullYear()) + (e.getMonth() - t.getMonth());
      }function p(t) {
        return new Date(t.getFullYear(), t.getMonth(), a(t));
      }function f(t) {
        return t && t.getTime && !isNaN(t.getTime());
      }function g(t) {
        f(t) && t.setHours(0, 0, 0, 0);
      }function D(t) {
        var a;return a = e.isUndefined(t) ? new Date() : new Date(t), g(a), a;
      }function C(t, e, a) {
        var n = D(t),
            i = f(e) ? D(e) : null,
            r = f(a) ? D(a) : null;return (!i || i <= n) && (!r || r >= n);
      }function v(t, e) {
        return u(t, 12 * e);
      }function y(t, e) {
        return e.getFullYear() - t.getFullYear();
      }function $(t, e, a) {
        var n = t;return e && t < e && (n = new Date(e.getTime())), a && t > a && (n = new Date(a.getTime())), n;
      }function b(t) {
        if (t && t.hasAttribute("data-timestamp")) return Number(t.getAttribute("data-timestamp"));
      }function M(t, e, a) {
        var n = t.getMonth(),
            i = t.getFullYear();return (!e || e.getFullYear() < i || e.getMonth() <= n) && (!a || a.getFullYear() > i || a.getMonth() >= n);
      }return { getFirstDateOfMonth: t, getNumberOfDaysInMonth: a, getDateInNextMonth: n, getDateInPreviousMonth: i, isInNextMonth: s, isInPreviousMonth: d, getDateMidpoint: o, isSameMonthAndYear: r, getWeekOfMonth: c, incrementDays: h, incrementMonths: u, getLastDateOfMonth: p, isSameDay: l, getMonthDistance: m, isValidDate: f, setDateTimeToMidnight: g, createDateAtMidnight: D, isDateWithinRange: C, incrementYears: v, getYearDistance: y, clampDate: $, getTimestampFromNode: b, isMonthWithinRange: M };
    });
  }(), function () {
    function a(t, a, i, r) {
      return { template: function template(e, a) {
          var n = a.mdHideIcons,
              i = a.ariaLabel || a.mdPlaceholder,
              r = "all" === n || "calendar" === n ? "" : '<md-button class="md-datepicker-button md-icon-button" type="button" tabindex="-1" aria-hidden="true" ng-click="ctrl.openCalendarPane($event)"><md-icon class="md-datepicker-calendar-icon" aria-label="md-calendar" md-svg-src="' + t.mdCalendar + '"></md-icon></md-button>',
              l = "";return "all" !== n && "triangle" !== n && (l = '<md-button type="button" md-no-ink class="md-datepicker-triangle-button md-icon-button" ng-click="ctrl.openCalendarPane($event)" aria-label="{{::ctrl.locale.msgOpenCalendar}}"><div class="md-datepicker-expand-triangle"></div></md-button>', e.addClass(o)), r + '<div class="md-datepicker-input-container" ng-class="{\'md-datepicker-focused\': ctrl.isFocused}"><input ' + (i ? 'aria-label="' + i + '" ' : "") + 'class="md-datepicker-input" aria-haspopup="true" aria-expanded="{{ctrl.isCalendarOpen}}" ng-focus="ctrl.setFocused(true)" ng-blur="ctrl.setFocused(false)"> ' + l + '</div><div class="md-datepicker-calendar-pane md-whiteframe-z1" id="{{::ctrl.calendarPaneId}}"><div class="md-datepicker-input-mask"><div class="md-datepicker-input-mask-opaque"></div></div><div class="md-datepicker-calendar"><md-calendar role="dialog" aria-label="{{::ctrl.locale.msgCalendar}}" md-current-view="{{::ctrl.currentView}}"md-min-date="ctrl.minDate"md-max-date="ctrl.maxDate"md-date-filter="ctrl.dateFilter"ng-model="ctrl.date" ng-if="ctrl.isCalendarOpen"></md-calendar></div></div>';
        }, require: ["ngModel", "mdDatepicker", "?^mdInputContainer", "?^form"], scope: { minDate: "=mdMinDate", maxDate: "=mdMaxDate", placeholder: "@mdPlaceholder", currentView: "@mdCurrentView", dateFilter: "=mdDateFilter", isOpen: "=?mdIsOpen", debounceInterval: "=mdDebounceInterval", dateLocale: "=mdDateLocale" }, controller: n, controllerAs: "ctrl", bindToController: !0, link: function link(t, n, l, o) {
          var c = o[0],
              h = o[1],
              u = o[2],
              m = o[3],
              p = a.parseAttributeBoolean(l.mdNoAsterisk);if (h.configureNgModel(c, u, r), u) {
            var f = n[0].querySelector(".md-errors-spacer");f && n.after(e.element("<div>").append(f)), u.setHasPlaceholder(l.mdPlaceholder), u.input = n, u.element.addClass(s).toggleClass(d, "calendar" !== l.mdHideIcons && "all" !== l.mdHideIcons), u.label ? p || l.$observe("required", function (t) {
              u.label.toggleClass("md-required", !!t);
            }) : i.expect(n, "aria-label", l.mdPlaceholder), t.$watch(u.isErrorGetter || function () {
              return c.$invalid && (c.$touched || m && m.$submitted);
            }, u.setInvalid);
          } else if (m) var g = t.$watch(function () {
            return m.$submitted;
          }, function (t) {
            t && (h.updateErrorState(), g());
          });
        } };
    }function n(a, n, i, r, l, s, d, o, c, h, u) {
      this.$window = r, this.dateUtil = c, this.$mdConstant = l, this.$mdUtil = d, this.$$rAF = h, this.$mdDateLocale = o, this.documentElement = e.element(document.documentElement), this.ngModelCtrl = null, this.inputElement = n[0].querySelector("input"), this.ngInputElement = e.element(this.inputElement), this.inputContainer = n[0].querySelector(".md-datepicker-input-container"), this.calendarPane = n[0].querySelector(".md-datepicker-calendar-pane"), this.calendarButton = n[0].querySelector(".md-datepicker-button"), this.inputMask = e.element(n[0].querySelector(".md-datepicker-input-mask-opaque")), this.$element = n, this.$attrs = i, this.$scope = a, this.date = null, this.isFocused = !1, this.isDisabled, this.setDisabled(n[0].disabled || e.isString(i.disabled)), this.isCalendarOpen = !1, this.openOnFocus = i.hasOwnProperty("mdOpenOnFocus"), this.mdInputContainer = null, this.calendarPaneOpenedFrom = null, this.calendarPaneId = "md-date-pane-" + d.nextUid(), this.bodyClickHandler = e.bind(this, this.handleBodyClick), this.windowEventName = m.test(navigator.userAgent || navigator.vendor || t.opera) ? "orientationchange" : "resize", this.windowEventHandler = d.debounce(e.bind(this, this.closeCalendarPane), 100), this.windowBlurHandler = e.bind(this, this.handleWindowBlur), this.ngDateFilter = u("date"), this.leftMargin = 20, this.topMargin = null, i.tabindex ? (this.ngInputElement.attr("tabindex", i.tabindex), i.$set("tabindex", null)) : i.$set("tabindex", "-1"), i.$set("aria-owns", this.calendarPaneId), s(n), s(e.element(this.calendarPane));var p = this;a.$on("$destroy", function () {
        p.detachCalendarPane();
      }), i.mdIsOpen && a.$watch("ctrl.isOpen", function (t) {
        t ? p.openCalendarPane({ target: p.inputElement }) : p.closeCalendarPane();
      }), 1 === e.version.major && e.version.minor <= 4 && this.$onInit();
    }n.$inject = ["$scope", "$element", "$attrs", "$window", "$mdConstant", "$mdTheming", "$mdUtil", "$mdDateLocale", "$$mdDateUtil", "$$rAF", "$filter"], a.$inject = ["$$mdSvgRegistry", "$mdUtil", "$mdAria", "inputDirective"], e.module("material.components.datepicker").directive("mdDatepicker", a);var i = 3,
        r = "md-datepicker-invalid",
        l = "md-datepicker-open",
        s = "_md-datepicker-floating-label",
        d = "_md-datepicker-has-calendar-icon",
        o = "_md-datepicker-has-triangle-icon",
        c = 500,
        h = 368,
        u = 360,
        m = /ipad|iphone|ipod|android/i;n.prototype.$onInit = function () {
      this.locale = this.dateLocale ? e.extend({}, this.$mdDateLocale, this.dateLocale) : this.$mdDateLocale, this.installPropertyInterceptors(), this.attachChangeListeners(), this.attachInteractionListeners();
    }, n.prototype.configureNgModel = function (t, a, n) {
      this.ngModelCtrl = t, this.mdInputContainer = a, this.$attrs.$set("type", "date"), n[0].link.pre(this.$scope, { on: e.noop, val: e.noop, 0: {} }, this.$attrs, [t]);var i = this;i.ngModelCtrl.$formatters.push(function (t) {
        if (t && !(t instanceof Date)) throw Error("The ng-model for md-datepicker must be a Date instance. Currently the model is a: " + (typeof t === "undefined" ? "undefined" : _typeof(t)));return i.onExternalChange(t), t;
      }), t.$viewChangeListeners.unshift(e.bind(this, this.updateErrorState));var r = i.$mdUtil.getModelOption(t, "updateOn");r && this.ngInputElement.on(r, e.bind(this.$element, this.$element.triggerHandler, r));
    }, n.prototype.attachChangeListeners = function () {
      var t = this;t.$scope.$on("md-calendar-change", function (e, a) {
        t.setModelValue(a), t.onExternalChange(a), t.closeCalendarPane();
      }), t.ngInputElement.on("input", e.bind(t, t.resizeInputElement));var a = e.isDefined(this.debounceInterval) ? this.debounceInterval : c;t.ngInputElement.on("input", t.$mdUtil.debounce(t.handleInputEvent, a, t));
    }, n.prototype.attachInteractionListeners = function () {
      var t = this,
          a = this.$scope,
          n = this.$mdConstant.KEY_CODE;t.ngInputElement.on("keydown", function (e) {
        e.altKey && e.keyCode == n.DOWN_ARROW && (t.openCalendarPane(e), a.$digest());
      }), t.openOnFocus && (t.ngInputElement.on("focus", e.bind(t, t.openCalendarPane)), e.element(t.$window).on("blur", t.windowBlurHandler), a.$on("$destroy", function () {
        e.element(t.$window).off("blur", t.windowBlurHandler);
      })), a.$on("md-calendar-close", function () {
        t.closeCalendarPane();
      });
    }, n.prototype.installPropertyInterceptors = function () {
      var t = this;if (this.$attrs.ngDisabled) {
        var e = this.$scope.$parent;e && e.$watch(this.$attrs.ngDisabled, function (e) {
          t.setDisabled(e);
        });
      }Object.defineProperty(this, "placeholder", { get: function get() {
          return t.inputElement.placeholder;
        }, set: function set(e) {
          t.inputElement.placeholder = e || "";
        } });
    }, n.prototype.setDisabled = function (t) {
      this.isDisabled = t, this.inputElement.disabled = t, this.calendarButton && (this.calendarButton.disabled = t);
    }, n.prototype.updateErrorState = function (t) {
      var a = t || this.date;if (this.clearErrorState(), this.dateUtil.isValidDate(a)) {
        if (a = this.dateUtil.createDateAtMidnight(a), this.dateUtil.isValidDate(this.minDate)) {
          var n = this.dateUtil.createDateAtMidnight(this.minDate);this.ngModelCtrl.$setValidity("mindate", a >= n);
        }if (this.dateUtil.isValidDate(this.maxDate)) {
          var i = this.dateUtil.createDateAtMidnight(this.maxDate);this.ngModelCtrl.$setValidity("maxdate", a <= i);
        }e.isFunction(this.dateFilter) && this.ngModelCtrl.$setValidity("filtered", this.dateFilter(a));
      } else this.ngModelCtrl.$setValidity("valid", null == a);e.element(this.inputContainer).toggleClass(r, !this.ngModelCtrl.$valid);
    }, n.prototype.clearErrorState = function () {
      this.inputContainer.classList.remove(r), ["mindate", "maxdate", "filtered", "valid"].forEach(function (t) {
        this.ngModelCtrl.$setValidity(t, !0);
      }, this);
    }, n.prototype.resizeInputElement = function () {
      this.inputElement.size = this.inputElement.value.length + i;
    }, n.prototype.handleInputEvent = function () {
      var t = this.inputElement.value,
          e = t ? this.locale.parseDate(t) : null;this.dateUtil.setDateTimeToMidnight(e);var a = "" == t || this.dateUtil.isValidDate(e) && this.locale.isDateComplete(t) && this.isDateEnabled(e);a && (this.setModelValue(e), this.date = e), this.updateErrorState(e);
    }, n.prototype.isDateEnabled = function (t) {
      return this.dateUtil.isDateWithinRange(t, this.minDate, this.maxDate) && (!e.isFunction(this.dateFilter) || this.dateFilter(t));
    }, n.prototype.attachCalendarPane = function () {
      var t = this.calendarPane,
          a = document.body;t.style.transform = "", this.$element.addClass(l), this.mdInputContainer && this.mdInputContainer.element.addClass(l), e.element(a).addClass("md-datepicker-is-showing");var n = this.inputContainer.getBoundingClientRect(),
          i = a.getBoundingClientRect();(!this.topMargin || this.topMargin < 0) && (this.topMargin = (this.inputMask.parent().prop("clientHeight") - this.ngInputElement.prop("clientHeight")) / 2);var r = n.top - i.top - this.topMargin,
          s = n.left - i.left - this.leftMargin,
          d = i.top < 0 && 0 == document.body.scrollTop ? -i.top : document.body.scrollTop,
          o = i.left < 0 && 0 == document.body.scrollLeft ? -i.left : document.body.scrollLeft,
          c = d + this.$window.innerHeight,
          m = o + this.$window.innerWidth;if (this.inputMask.css({ position: "absolute", left: this.leftMargin + "px", top: this.topMargin + "px", width: n.width - 1 + "px", height: n.height - 2 + "px" }), s + u > m) {
        if (m - u > 0) s = m - u;else {
          s = o;var p = this.$window.innerWidth / u;t.style.transform = "scale(" + p + ")";
        }t.classList.add("md-datepicker-pos-adjusted");
      }r + h > c && c - h > d && (r = c - h, t.classList.add("md-datepicker-pos-adjusted")), t.style.left = s + "px", t.style.top = r + "px", document.body.appendChild(t), this.$$rAF(function () {
        t.classList.add("md-pane-open");
      });
    }, n.prototype.detachCalendarPane = function () {
      this.$element.removeClass(l), this.mdInputContainer && this.mdInputContainer.element.removeClass(l), e.element(document.body).removeClass("md-datepicker-is-showing"), this.calendarPane.classList.remove("md-pane-open"), this.calendarPane.classList.remove("md-datepicker-pos-adjusted"), this.isCalendarOpen && this.$mdUtil.enableScrolling(), this.calendarPane.parentNode && this.calendarPane.parentNode.removeChild(this.calendarPane);
    }, n.prototype.openCalendarPane = function (e) {
      if (!this.isCalendarOpen && !this.isDisabled && !this.inputFocusedOnWindowBlur) {
        this.isCalendarOpen = this.isOpen = !0, this.calendarPaneOpenedFrom = e.target, this.$mdUtil.disableScrollAround(this.calendarPane), this.attachCalendarPane(), this.focusCalendar(), this.evalAttr("ngFocus");var a = this;this.$mdUtil.nextTick(function () {
          a.documentElement.on("click touchstart", a.bodyClickHandler);
        }, !1), t.addEventListener(this.windowEventName, this.windowEventHandler);
      }
    }, n.prototype.closeCalendarPane = function () {
      function e() {
        a.isCalendarOpen = a.isOpen = !1;
      }if (this.isCalendarOpen) {
        var a = this;a.detachCalendarPane(), a.ngModelCtrl.$setTouched(), a.evalAttr("ngBlur"), a.documentElement.off("click touchstart", a.bodyClickHandler), t.removeEventListener(a.windowEventName, a.windowEventHandler), a.calendarPaneOpenedFrom.focus(), a.calendarPaneOpenedFrom = null, a.openOnFocus ? a.$mdUtil.nextTick(e) : e();
      }
    }, n.prototype.getCalendarCtrl = function () {
      return e.element(this.calendarPane.querySelector("md-calendar")).controller("mdCalendar");
    }, n.prototype.focusCalendar = function () {
      var t = this;this.$mdUtil.nextTick(function () {
        t.getCalendarCtrl().focus();
      }, !1);
    }, n.prototype.setFocused = function (t) {
      t || this.ngModelCtrl.$setTouched(), this.openOnFocus || this.evalAttr(t ? "ngFocus" : "ngBlur"), this.isFocused = t;
    }, n.prototype.handleBodyClick = function (t) {
      if (this.isCalendarOpen) {
        var e = this.$mdUtil.getClosest(t.target, "md-calendar");e || this.closeCalendarPane(), this.$scope.$digest();
      }
    }, n.prototype.handleWindowBlur = function () {
      this.inputFocusedOnWindowBlur = document.activeElement === this.inputElement;
    }, n.prototype.evalAttr = function (t) {
      this.$attrs[t] && this.$scope.$parent.$eval(this.$attrs[t]);
    }, n.prototype.setModelValue = function (t) {
      var e = this.$mdUtil.getModelOption(this.ngModelCtrl, "timezone");this.ngModelCtrl.$setViewValue(this.ngDateFilter(t, "yyyy-MM-dd", e));
    }, n.prototype.onExternalChange = function (t) {
      var e = this.$mdUtil.getModelOption(this.ngModelCtrl, "timezone");this.date = t, this.inputElement.value = this.locale.formatDate(t, e), this.mdInputContainer && this.mdInputContainer.setHasValue(!!t), this.resizeInputElement(), this.updateErrorState();
    };
  }();
}(window, window.angular);

//# sourceMappingURL=datepicker.min-compiled.js.map