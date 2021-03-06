"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (t, e, n) {
  "use strict";
  function o(t, n, o, r) {
    this._defaultConfigOptions = { bindToController: !0, clickOutsideToClose: !1, disableParentScroll: !1, escapeToClose: !1, focusOnOpen: !0, fullscreen: !1, hasBackdrop: !1, propagateContainerEvents: !1, transformTemplate: e.bind(this, this._wrapTemplate), trapFocus: !1, zIndex: p }, this._config = {}, this._$rootElement = t, this._$rootScope = n, this._$injector = o, this._$window = r, this._$mdUtil = this._$injector.get("$mdUtil"), this._trackedPanels = {}, this._groups = Object.create(null), this.animation = a.animation, this.xPosition = s.xPosition, this.yPosition = s.yPosition, this.interceptorTypes = i.interceptorTypes, this.closeReasons = i.closeReasons, this.absPosition = s.absPosition;
  }function i(t, e) {
    this._$q = e.get("$q"), this._$mdCompiler = e.get("$mdCompiler"), this._$mdConstant = e.get("$mdConstant"), this._$mdUtil = e.get("$mdUtil"), this._$mdTheming = e.get("$mdTheming"), this._$rootScope = e.get("$rootScope"), this._$animate = e.get("$animate"), this._$mdPanel = e.get("$mdPanel"), this._$log = e.get("$log"), this._$window = e.get("$window"), this._$$rAF = e.get("$$rAF"), this.id = t.id, this.config = t, this.panelContainer, this.panelEl, this.isAttached = !1, this._removeListeners = [], this._topFocusTrap, this._bottomFocusTrap, this._backdropRef, this._restoreScroll = null, this._interceptors = Object.create(null), this._compilerCleanup = null, this._restoreCache = { styles: "", classes: "" };
  }function s(t) {
    this._$window = t.get("$window"), this._isRTL = "rtl" === t.get("$mdUtil").bidi(), this._$mdConstant = t.get("$mdConstant"), this._absolute = !1, this._relativeToEl, this._top = "", this._bottom = "", this._left = "", this._right = "", this._translateX = [], this._translateY = [], this._positions = [], this._actualPosition;
  }function a(t) {
    this._$mdUtil = t.get("$mdUtil"), this._openFrom, this._closeTo, this._animationClass = "", this._openDuration, this._closeDuration, this._rawDuration;
  }function r(t) {
    var n = e.isString(t) ? document.querySelector(t) : t;return e.element(n);
  }function l(t, e) {
    var n = getComputedStyle(t[0] || t)[e],
        o = n.indexOf("("),
        i = n.lastIndexOf(")"),
        s = { x: 0, y: 0 };if (o > -1 && i > -1) {
      var a = n.substring(o + 1, i).split(", ").slice(-2);s.x = parseInt(a[0]), s.y = parseInt(a[1]);
    }return s;
  }o.$inject = ["$rootElement", "$rootScope", "$injector", "$window"], e.module("material.components.panel", ["material.core", "material.components.backdrop"]).service("$mdPanel", o);var p = 80,
      h = "_md-panel-hidden",
      c = e.element('<div class="_md-panel-focus-trap" tabindex="0"></div>');o.prototype.create = function (t) {
    if (t = t || {}, e.isDefined(t.id) && this._trackedPanels[t.id]) return this._trackedPanels[t.id];this._config = { id: t.id || "panel_" + this._$mdUtil.nextUid(), scope: this._$rootScope.$new(!0), attachTo: this._$rootElement }, e.extend(this._config, this._defaultConfigOptions, t);var n = new i(this._config, this._$injector);return this._trackedPanels[t.id] = n, this._config.scope.$on("$destroy", e.bind(n, n.detach)), this._config.groupName && (e.isString(this._config.groupName) && (this._config.groupName = [this._config.groupName]), e.forEach(this._config.groupName, function (t) {
      n.addToGroup(t);
    })), n;
  }, o.prototype.open = function (t) {
    var e = this.create(t);return e.open().then(function () {
      return e;
    });
  }, o.prototype.newPanelPosition = function () {
    return new s(this._$injector);
  }, o.prototype.newPanelAnimation = function () {
    return new a(this._$injector);
  }, o.prototype.newPanelGroup = function (t, e) {
    if (!this._groups[t]) {
      e = e || {};var n = { panels: [], openPanels: [], maxOpen: e.maxOpen > 0 ? e.maxOpen : 1 / 0 };this._groups[t] = n;
    }return this._groups[t];
  }, o.prototype.setGroupMaxOpen = function (t, e) {
    if (!this._groups[t]) throw new Error("mdPanel: Group does not exist yet. Call newPanelGroup().");this._groups[t].maxOpen = e;
  }, o.prototype._openCountExceedsMaxOpen = function (t) {
    if (this._groups[t]) {
      var e = this._groups[t];return e.maxOpen > 0 && e.openPanels.length > e.maxOpen;
    }return !1;
  }, o.prototype._closeFirstOpenedPanel = function (t) {
    this._groups[t].openPanels[0].close();
  }, o.prototype._wrapTemplate = function (t) {
    var e = t || "";return '<div class="md-panel-outer-wrapper">  <div class="md-panel" style="left: -9999px;">' + e + "</div></div>";
  }, o.prototype._wrapContentElement = function (t) {
    var n = e.element('<div class="md-panel-outer-wrapper">');return t.addClass("md-panel").css("left", "-9999px"), n.append(t), n;
  }, i.interceptorTypes = { CLOSE: "onClose" }, i.prototype.open = function () {
    var t = this;return this._$q(function (n, o) {
      var i = t._done(n, t),
          s = t._simpleBind(t.show, t),
          a = function a() {
        t.config.groupName && e.forEach(t.config.groupName, function (e) {
          t._$mdPanel._openCountExceedsMaxOpen(e) && t._$mdPanel._closeFirstOpenedPanel(e);
        });
      };t.attach().then(s).then(a).then(i)["catch"](o);
    });
  }, i.prototype.close = function (t) {
    var n = this;return this._$q(function (o, s) {
      n._callInterceptors(i.interceptorTypes.CLOSE).then(function () {
        var i = n._done(o, n),
            a = n._simpleBind(n.detach, n),
            r = n.config.onCloseSuccess || e.noop;r = e.bind(n, r, n, t), n.hide().then(a).then(i).then(r)["catch"](s);
      }, s);
    });
  }, i.prototype.attach = function () {
    if (this.isAttached && this.panelEl) return this._$q.when(this);var t = this;return this._$q(function (n, o) {
      var i = t._done(n, t),
          s = t.config.onDomAdded || e.noop,
          a = function a(e) {
        return t.isAttached = !0, t._addEventListeners(), e;
      };t._$q.all([t._createBackdrop(), t._createPanel().then(a)["catch"](o)]).then(s).then(i)["catch"](o);
    });
  }, i.prototype.detach = function () {
    if (!this.isAttached) return this._$q.when(this);var t = this,
        n = t.config.onDomRemoved || e.noop,
        o = function o() {
      return t._removeEventListeners(), t._topFocusTrap && t._topFocusTrap.parentNode && t._topFocusTrap.parentNode.removeChild(t._topFocusTrap), t._bottomFocusTrap && t._bottomFocusTrap.parentNode && t._bottomFocusTrap.parentNode.removeChild(t._bottomFocusTrap), t._restoreCache.classes && (t.panelEl[0].className = t._restoreCache.classes), t.panelEl[0].style.cssText = t._restoreCache.styles || "", t._compilerCleanup(), t.panelContainer.remove(), t.isAttached = !1, t._$q.when(t);
    };return this._restoreScroll && (this._restoreScroll(), this._restoreScroll = null), this._$q(function (e, i) {
      var s = t._done(e, t);t._$q.all([o(), !t._backdropRef || t._backdropRef.detach()]).then(n).then(s)["catch"](i);
    });
  }, i.prototype.destroy = function () {
    var t = this;this.config.groupName && e.forEach(this.config.groupName, function (e) {
      t.removeFromGroup(e);
    }), this.config.scope.$destroy(), this.config.locals = null, this._interceptors = null;
  }, i.prototype.show = function () {
    if (!this.panelContainer) return this._$q(function (t, e) {
      e("mdPanel: Panel does not exist yet. Call open() or attach().");
    });if (!this.panelContainer.hasClass(h)) return this._$q.when(this);var t = this,
        n = function n() {
      return t.panelContainer.removeClass(h), t._animateOpen();
    };return this._$q(function (o, i) {
      var s = t._done(o, t),
          a = t.config.onOpenComplete || e.noop,
          r = function r() {
        t.config.groupName && e.forEach(t.config.groupName, function (e) {
          t._$mdPanel._groups[e].openPanels.push(t);
        });
      };t._$q.all([t._backdropRef ? t._backdropRef.show() : t, n().then(function () {
        t._focusOnOpen();
      }, i)]).then(a).then(r).then(s)["catch"](i);
    });
  }, i.prototype.hide = function () {
    if (!this.panelContainer) return this._$q(function (t, e) {
      e("mdPanel: Panel does not exist yet. Call open() or attach().");
    });if (this.panelContainer.hasClass(h)) return this._$q.when(this);var t = this;return this._$q(function (n, o) {
      var i = t._done(n, t),
          s = t.config.onRemoving || e.noop,
          a = function a() {
        t.panelContainer.addClass(h);
      },
          l = function l() {
        if (t.config.groupName) {
          var n;e.forEach(t.config.groupName, function (e) {
            e = t._$mdPanel._groups[e], n = e.openPanels.indexOf(t), n > -1 && e.openPanels.splice(n, 1);
          });
        }
      },
          p = function p() {
        var e = t.config.origin;e && r(e).focus();
      };t._$q.all([t._backdropRef ? t._backdropRef.hide() : t, t._animateClose().then(s).then(a).then(l).then(p)["catch"](o)]).then(i, o);
    });
  }, i.prototype.addClass = function (t, e) {
    if (this._$log.warn("mdPanel: The addClass method is in the process of being deprecated. Full deprecation is scheduled for the Angular Material 1.2 release. To achieve the same results, use the panelContainer or panelEl JQLite elements that are referenced in MdPanelRef."), !this.panelContainer) throw new Error("mdPanel: Panel does not exist yet. Call open() or attach().");e || this.panelContainer.hasClass(t) ? e && !this.panelEl.hasClass(t) && this.panelEl.addClass(t) : this.panelContainer.addClass(t);
  }, i.prototype.removeClass = function (t, e) {
    if (this._$log.warn("mdPanel: The removeClass method is in the process of being deprecated. Full deprecation is scheduled for the Angular Material 1.2 release. To achieve the same results, use the panelContainer or panelEl JQLite elements that are referenced in MdPanelRef."), !this.panelContainer) throw new Error("mdPanel: Panel does not exist yet. Call open() or attach().");!e && this.panelContainer.hasClass(t) ? this.panelContainer.removeClass(t) : e && this.panelEl.hasClass(t) && this.panelEl.removeClass(t);
  }, i.prototype.toggleClass = function (t, e) {
    if (this._$log.warn("mdPanel: The toggleClass method is in the process of being deprecated. Full deprecation is scheduled for the Angular Material 1.2 release. To achieve the same results, use the panelContainer or panelEl JQLite elements that are referenced in MdPanelRef."), !this.panelContainer) throw new Error("mdPanel: Panel does not exist yet. Call open() or attach().");e ? this.panelEl.toggleClass(t) : this.panelContainer.toggleClass(t);
  }, i.prototype._compile = function () {
    var t = this;return t._$mdCompiler.compile(t.config).then(function (n) {
      var o = t.config;if (o.contentElement) {
        var i = n.element;t._restoreCache.styles = i[0].style.cssText, t._restoreCache.classes = i[0].className, t.panelContainer = t._$mdPanel._wrapContentElement(i), t.panelEl = i;
      } else t.panelContainer = n.link(o.scope), t.panelEl = e.element(t.panelContainer[0].querySelector(".md-panel"));return t._compilerCleanup = n.cleanup, r(t.config.attachTo).append(t.panelContainer), t;
    });
  }, i.prototype._createPanel = function () {
    var t = this;return this._$q(function (e, n) {
      t.config.locals || (t.config.locals = {}), t.config.locals.mdPanelRef = t, t._compile().then(function () {
        t.config.disableParentScroll && (t._restoreScroll = t._$mdUtil.disableScrollAround(null, t.panelContainer, { disableScrollMask: !0 })), t.config.panelClass && t.panelEl.addClass(t.config.panelClass), t.config.propagateContainerEvents && t.panelContainer.css("pointer-events", "none"), t._$animate.pin && t._$animate.pin(t.panelContainer, r(t.config.attachTo)), t._configureTrapFocus(), t._addStyles().then(function () {
          e(t);
        }, n);
      }, n);
    });
  }, i.prototype._addStyles = function () {
    var t = this;return this._$q(function (e) {
      t.panelContainer.css("z-index", t.config.zIndex), t.panelEl.css("z-index", t.config.zIndex + 1);var n = function n() {
        t._setTheming(), t.panelEl.css("left", ""), t.panelContainer.addClass(h), e(t);
      };if (t.config.fullscreen) return t.panelEl.addClass("_md-panel-fullscreen"), void n();var o = t.config.position;return o ? void t._$rootScope.$$postDigest(function () {
        t._updatePosition(!0), t._setTheming(), e(t);
      }) : void n();
    });
  }, i.prototype._setTheming = function () {
    this._$mdTheming(this.panelEl), this._$mdTheming(this.panelContainer);
  }, i.prototype.updatePosition = function (t) {
    if (!this.panelContainer) throw new Error("mdPanel: Panel does not exist yet. Call open() or attach().");this.config.position = t, this._updatePosition();
  }, i.prototype._updatePosition = function (t) {
    var e = this.config.position;e && (e._setPanelPosition(this.panelEl), t && this.panelContainer.addClass(h), this.panelEl.css(s.absPosition.TOP, e.getTop()), this.panelEl.css(s.absPosition.BOTTOM, e.getBottom()), this.panelEl.css(s.absPosition.LEFT, e.getLeft()), this.panelEl.css(s.absPosition.RIGHT, e.getRight()));
  }, i.prototype._focusOnOpen = function () {
    if (this.config.focusOnOpen) {
      var t = this;this._$rootScope.$$postDigest(function () {
        var e = t._$mdUtil.findFocusTarget(t.panelEl) || t.panelEl;e.focus();
      });
    }
  }, i.prototype._createBackdrop = function () {
    if (this.config.hasBackdrop) {
      if (!this._backdropRef) {
        var t = this._$mdPanel.newPanelAnimation().openFrom(this.config.attachTo).withAnimation({ open: "_md-opaque-enter", close: "_md-opaque-leave" });this.config.animation && t.duration(this.config.animation._rawDuration);var e = { animation: t, attachTo: this.config.attachTo, focusOnOpen: !1, panelClass: "_md-panel-backdrop", zIndex: this.config.zIndex - 1 };this._backdropRef = this._$mdPanel.create(e);
      }if (!this._backdropRef.isAttached) return this._backdropRef.attach();
    }
  }, i.prototype._addEventListeners = function () {
    this._configureEscapeToClose(), this._configureClickOutsideToClose(), this._configureScrollListener();
  }, i.prototype._removeEventListeners = function () {
    this._removeListeners && this._removeListeners.forEach(function (t) {
      t();
    }), this._removeListeners = [];
  }, i.prototype._configureEscapeToClose = function () {
    if (this.config.escapeToClose) {
      var t = r(this.config.attachTo),
          e = this,
          n = function n(t) {
        t.keyCode === e._$mdConstant.KEY_CODE.ESCAPE && (t.stopPropagation(), t.preventDefault(), e.close(i.closeReasons.ESCAPE));
      };this.panelContainer.on("keydown", n), t.on("keydown", n), this._removeListeners.push(function () {
        e.panelContainer.off("keydown", n), t.off("keydown", n);
      });
    }
  }, i.prototype._configureClickOutsideToClose = function () {
    if (this.config.clickOutsideToClose) {
      var t,
          n = this.config.propagateContainerEvents ? e.element(document.body) : this.panelContainer,
          o = function o(e) {
        t = e.target;
      },
          s = this,
          a = function a(e) {
        s.config.propagateContainerEvents ? t === s.panelEl[0] || s.panelEl[0].contains(t) || s.close() : t === n[0] && e.target === n[0] && (e.stopPropagation(), e.preventDefault(), s.close(i.closeReasons.CLICK_OUTSIDE));
      };n.on("mousedown", o), n.on("mouseup", a), this._removeListeners.push(function () {
        n.off("mousedown", o), n.off("mouseup", a);
      });
    }
  }, i.prototype._configureScrollListener = function () {
    if (!this.config.disableParentScroll) {
      var t = e.bind(this, this._updatePosition),
          n = this._$$rAF.throttle(t),
          o = this,
          i = function i() {
        n();
      };this._$window.addEventListener("scroll", i, !0), this._removeListeners.push(function () {
        o._$window.removeEventListener("scroll", i, !0);
      });
    }
  }, i.prototype._configureTrapFocus = function () {
    if (this.panelEl.attr("tabIndex", "-1"), this.config.trapFocus) {
      var t = this.panelEl;this._topFocusTrap = c.clone()[0], this._bottomFocusTrap = c.clone()[0];var e = function e() {
        t.focus();
      };this._topFocusTrap.addEventListener("focus", e), this._bottomFocusTrap.addEventListener("focus", e), this._removeListeners.push(this._simpleBind(function () {
        this._topFocusTrap.removeEventListener("focus", e), this._bottomFocusTrap.removeEventListener("focus", e);
      }, this)), t[0].parentNode.insertBefore(this._topFocusTrap, t[0]), t.after(this._bottomFocusTrap);
    }
  }, i.prototype.updateAnimation = function (t) {
    this.config.animation = t, this._backdropRef && this._backdropRef.config.animation.duration(t._rawDuration);
  }, i.prototype._animateOpen = function () {
    this.panelContainer.addClass("md-panel-is-showing");var t = this.config.animation;if (!t) return this.panelContainer.addClass("_md-panel-shown"), this._$q.when(this);var e = this;return this._$q(function (n) {
      var o = e._done(n, e),
          i = function i() {
        e._$log.warn("mdPanel: MdPanel Animations failed. Showing panel without animating."), o();
      };t.animateOpen(e.panelEl).then(o, i);
    });
  }, i.prototype._animateClose = function () {
    var t = this.config.animation;if (!t) return this.panelContainer.removeClass("md-panel-is-showing"), this.panelContainer.removeClass("_md-panel-shown"), this._$q.when(this);var e = this;return this._$q(function (n) {
      var o = function o() {
        e.panelContainer.removeClass("md-panel-is-showing"), n(e);
      },
          i = function i() {
        e._$log.warn("mdPanel: MdPanel Animations failed. Hiding panel without animating."), o();
      };t.animateClose(e.panelEl).then(o, i);
    });
  }, i.prototype.registerInterceptor = function (t, n) {
    var o = null;if (e.isString(t) ? e.isFunction(n) || (o = "Interceptor callback must be a function, instead got " + (typeof n === "undefined" ? "undefined" : _typeof(n))) : o = "Interceptor type must be a string, instead got " + (typeof t === "undefined" ? "undefined" : _typeof(t)), o) throw new Error("MdPanel: " + o);var i = this._interceptors[t] = this._interceptors[t] || [];return i.indexOf(n) === -1 && i.push(n), this;
  }, i.prototype.removeInterceptor = function (t, e) {
    var n = this._interceptors[t] ? this._interceptors[t].indexOf(e) : -1;return n > -1 && this._interceptors[t].splice(n, 1), this;
  }, i.prototype.removeAllInterceptors = function (t) {
    return t ? this._interceptors[t] = [] : this._interceptors = Object.create(null), this;
  }, i.prototype._callInterceptors = function (t) {
    var n = this,
        o = n._$q,
        i = n._interceptors && n._interceptors[t] || [];return i.reduceRight(function (t, i) {
      var s = i && e.isFunction(i.then),
          a = s ? i : null;return t.then(function () {
        if (!a) try {
          a = i(n);
        } catch (t) {
          a = o.reject(t);
        }return a;
      });
    }, o.resolve(n));
  }, i.prototype._simpleBind = function (t, e) {
    return function (n) {
      return t.apply(e, n);
    };
  }, i.prototype._done = function (t, e) {
    return function () {
      t(e);
    };
  }, i.prototype.addToGroup = function (t) {
    this._$mdPanel._groups[t] || this._$mdPanel.newPanelGroup(t);var e = this._$mdPanel._groups[t],
        n = e.panels.indexOf(this);n < 0 && e.panels.push(this);
  }, i.prototype.removeFromGroup = function (t) {
    if (!this._$mdPanel._groups[t]) throw new Error("mdPanel: The group " + t + " does not exist.");var e = this._$mdPanel._groups[t],
        n = e.panels.indexOf(this);n > -1 && e.panels.splice(n, 1);
  }, i.closeReasons = { CLICK_OUTSIDE: "clickOutsideToClose", ESCAPE: "escapeToClose" }, s.xPosition = { CENTER: "center", ALIGN_START: "align-start", ALIGN_END: "align-end", OFFSET_START: "offset-start", OFFSET_END: "offset-end" }, s.yPosition = { CENTER: "center", ALIGN_TOPS: "align-tops", ALIGN_BOTTOMS: "align-bottoms", ABOVE: "above", BELOW: "below" }, s.absPosition = { TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }, s.viewportMargin = 8, s.prototype.absolute = function () {
    return this._absolute = !0, this;
  }, s.prototype._setPosition = function (t, n) {
    if (t === s.absPosition.RIGHT || t === s.absPosition.LEFT) this._left = this._right = "";else {
      if (t !== s.absPosition.BOTTOM && t !== s.absPosition.TOP) {
        var o = Object.keys(s.absPosition).join().toLowerCase();throw new Error("mdPanel: Position must be one of " + o + ".");
      }this._top = this._bottom = "";
    }return this["_" + t] = e.isString(n) ? n : "0", this;
  }, s.prototype.top = function (t) {
    return this._setPosition(s.absPosition.TOP, t);
  }, s.prototype.bottom = function (t) {
    return this._setPosition(s.absPosition.BOTTOM, t);
  }, s.prototype.start = function (t) {
    var e = this._isRTL ? s.absPosition.RIGHT : s.absPosition.LEFT;return this._setPosition(e, t);
  }, s.prototype.end = function (t) {
    var e = this._isRTL ? s.absPosition.LEFT : s.absPosition.RIGHT;return this._setPosition(e, t);
  }, s.prototype.left = function (t) {
    return this._setPosition(s.absPosition.LEFT, t);
  }, s.prototype.right = function (t) {
    return this._setPosition(s.absPosition.RIGHT, t);
  }, s.prototype.centerHorizontally = function () {
    return this._left = "50%", this._right = "", this._translateX = ["-50%"], this;
  }, s.prototype.centerVertically = function () {
    return this._top = "50%", this._bottom = "", this._translateY = ["-50%"], this;
  }, s.prototype.center = function () {
    return this.centerHorizontally().centerVertically();
  }, s.prototype.relativeTo = function (t) {
    return this._absolute = !1, this._relativeToEl = r(t), this;
  }, s.prototype.addPanelPosition = function (t, e) {
    if (!this._relativeToEl) throw new Error("mdPanel: addPanelPosition can only be used with relative positioning. Set relativeTo first.");return this._validateXPosition(t), this._validateYPosition(e), this._positions.push({ x: t, y: e }), this;
  }, s.prototype._validateYPosition = function (t) {
    if (null != t) {
      for (var e, n = Object.keys(s.yPosition), o = [], i = 0; e = n[i]; i++) {
        var a = s.yPosition[e];if (o.push(a), a === t) return;
      }throw new Error("mdPanel: Panel y position only accepts the following values:\n" + o.join(" | "));
    }
  }, s.prototype._validateXPosition = function (t) {
    if (null != t) {
      for (var e, n = Object.keys(s.xPosition), o = [], i = 0; e = n[i]; i++) {
        var a = s.xPosition[e];if (o.push(a), a === t) return;
      }throw new Error("mdPanel: Panel x Position only accepts the following values:\n" + o.join(" | "));
    }
  }, s.prototype.withOffsetX = function (t) {
    return this._translateX.push(t), this;
  }, s.prototype.withOffsetY = function (t) {
    return this._translateY.push(t), this;
  }, s.prototype.getTop = function () {
    return this._top;
  }, s.prototype.getBottom = function () {
    return this._bottom;
  }, s.prototype.getLeft = function () {
    return this._left;
  }, s.prototype.getRight = function () {
    return this._right;
  }, s.prototype.getTransform = function () {
    var t = this._reduceTranslateValues("translateX", this._translateX),
        e = this._reduceTranslateValues("translateY", this._translateY);return (t + " " + e).trim();
  }, s.prototype._setTransform = function (t) {
    return t.css(this._$mdConstant.CSS.TRANSFORM, this.getTransform());
  }, s.prototype._isOnscreen = function (t) {
    var e = parseInt(this.getLeft()),
        n = parseInt(this.getTop());if (this._translateX.length || this._translateY.length) {
      var o = this._$mdConstant.CSS.TRANSFORM,
          i = l(t, o);e += i.x, n += i.y;
    }var s = e + t[0].offsetWidth,
        a = n + t[0].offsetHeight;return e >= 0 && n >= 0 && a <= this._$window.innerHeight && s <= this._$window.innerWidth;
  }, s.prototype.getActualPosition = function () {
    return this._actualPosition;
  }, s.prototype._reduceTranslateValues = function (t, n) {
    return n.map(function (n) {
      var o = e.isFunction(n) ? n(this) : n;return t + "(" + o + ")";
    }, this).join(" ");
  }, s.prototype._setPanelPosition = function (t) {
    if (t.removeClass("_md-panel-position-adjusted"), this._absolute) return void this._setTransform(t);if (this._actualPosition) return this._calculatePanelPosition(t, this._actualPosition), this._setTransform(t), void this._constrainToViewport(t);for (var e = 0; e < this._positions.length; e++) {
      if (this._actualPosition = this._positions[e], this._calculatePanelPosition(t, this._actualPosition), this._setTransform(t), this._isOnscreen(t)) return;
    }this._constrainToViewport(t);
  }, s.prototype._constrainToViewport = function (t) {
    var e = s.viewportMargin,
        n = this._top,
        o = this._left;if (this.getTop()) {
      var i = parseInt(this.getTop()),
          a = t[0].offsetHeight + i,
          r = this._$window.innerHeight;i < e ? this._top = e + "px" : a > r && (this._top = i - (a - r + e) + "px");
    }if (this.getLeft()) {
      var l = parseInt(this.getLeft()),
          p = t[0].offsetWidth + l,
          h = this._$window.innerWidth;l < e ? this._left = e + "px" : p > h && (this._left = l - (p - h + e) + "px");
    }t.toggleClass("_md-panel-position-adjusted", this._top !== n || this._left !== o);
  }, s.prototype._reverseXPosition = function (t) {
    if (t !== s.xPosition.CENTER) {
      var e = "start",
          n = "end";return t.indexOf(e) > -1 ? t.replace(e, n) : t.replace(n, e);
    }
  }, s.prototype._bidi = function (t) {
    return this._isRTL ? this._reverseXPosition(t) : t;
  }, s.prototype._calculatePanelPosition = function (t, e) {
    var n = t[0].getBoundingClientRect(),
        o = n.width,
        i = n.height,
        a = this._relativeToEl[0].getBoundingClientRect(),
        r = a.left,
        l = a.right,
        p = a.width;switch (this._bidi(e.x)) {case s.xPosition.OFFSET_START:
        this._left = r - o + "px";break;case s.xPosition.ALIGN_END:
        this._left = l - o + "px";break;case s.xPosition.CENTER:
        var h = r + .5 * p - .5 * o;this._left = h + "px";break;case s.xPosition.ALIGN_START:
        this._left = r + "px";break;case s.xPosition.OFFSET_END:
        this._left = l + "px";}var c = a.top,
        u = a.bottom,
        _ = a.height;switch (e.y) {case s.yPosition.ABOVE:
        this._top = c - i + "px";break;case s.yPosition.ALIGN_BOTTOMS:
        this._top = u - i + "px";break;case s.yPosition.CENTER:
        var f = c + .5 * _ - .5 * i;this._top = f + "px";break;case s.yPosition.ALIGN_TOPS:
        this._top = c + "px";break;case s.yPosition.BELOW:
        this._top = u + "px";}
  }, a.animation = { SLIDE: "md-panel-animate-slide", SCALE: "md-panel-animate-scale", FADE: "md-panel-animate-fade" }, a.prototype.openFrom = function (t) {
    return t = t.target ? t.target : t, this._openFrom = this._getPanelAnimationTarget(t), this._closeTo || (this._closeTo = this._openFrom), this;
  }, a.prototype.closeTo = function (t) {
    return this._closeTo = this._getPanelAnimationTarget(t), this;
  }, a.prototype.duration = function (t) {
    function n(t) {
      if (e.isNumber(t)) return t / 1e3;
    }return t && (e.isNumber(t) ? this._openDuration = this._closeDuration = n(t) : e.isObject(t) && (this._openDuration = n(t.open), this._closeDuration = n(t.close))), this._rawDuration = t, this;
  }, a.prototype._getPanelAnimationTarget = function (t) {
    return e.isDefined(t.top) || e.isDefined(t.left) ? { element: n, bounds: { top: t.top || 0, left: t.left || 0 } } : this._getBoundingClientRect(r(t));
  }, a.prototype.withAnimation = function (t) {
    return this._animationClass = t, this;
  }, a.prototype.animateOpen = function (t) {
    var n = this._$mdUtil.dom.animator;this._fixBounds(t);var o = {},
        i = t[0].style.transform || "",
        s = n.toTransformCss(i),
        r = n.toTransformCss(i);switch (this._animationClass) {case a.animation.SLIDE:
        t.css("opacity", "1"), o = { transitionInClass: "_md-panel-animate-enter" };var l = n.calculateSlideToOrigin(t, this._openFrom) || "";s = n.toTransformCss(l + " " + i);break;case a.animation.SCALE:
        o = { transitionInClass: "_md-panel-animate-enter" };var p = n.calculateZoomToOrigin(t, this._openFrom) || "";s = n.toTransformCss(p + " " + i);break;case a.animation.FADE:
        o = { transitionInClass: "_md-panel-animate-enter" };break;default:
        o = e.isString(this._animationClass) ? { transitionInClass: this._animationClass } : { transitionInClass: this._animationClass.open, transitionOutClass: this._animationClass.close };}return o.duration = this._openDuration, n.translate3d(t, s, r, o);
  }, a.prototype.animateClose = function (t) {
    var n = this._$mdUtil.dom.animator,
        o = {},
        i = t[0].style.transform || "",
        s = n.toTransformCss(i),
        r = n.toTransformCss(i);switch (this._animationClass) {case a.animation.SLIDE:
        t.css("opacity", "1"), o = { transitionInClass: "_md-panel-animate-leave" };var l = n.calculateSlideToOrigin(t, this._closeTo) || "";r = n.toTransformCss(l + " " + i);break;case a.animation.SCALE:
        o = { transitionInClass: "_md-panel-animate-scale-out _md-panel-animate-leave" };var p = n.calculateZoomToOrigin(t, this._closeTo) || "";r = n.toTransformCss(p + " " + i);break;case a.animation.FADE:
        o = { transitionInClass: "_md-panel-animate-fade-out _md-panel-animate-leave" };break;default:
        o = e.isString(this._animationClass) ? { transitionOutClass: this._animationClass } : { transitionInClass: this._animationClass.close, transitionOutClass: this._animationClass.open };}return o.duration = this._closeDuration, n.translate3d(t, s, r, o);
  }, a.prototype._fixBounds = function (t) {
    var e = t[0].offsetWidth,
        n = t[0].offsetHeight;this._openFrom && null == this._openFrom.bounds.height && (this._openFrom.bounds.height = n), this._openFrom && null == this._openFrom.bounds.width && (this._openFrom.bounds.width = e), this._closeTo && null == this._closeTo.bounds.height && (this._closeTo.bounds.height = n), this._closeTo && null == this._closeTo.bounds.width && (this._closeTo.bounds.width = e);
  }, a.prototype._getBoundingClientRect = function (t) {
    if (t instanceof e.element) return { element: t, bounds: t[0].getBoundingClientRect() };
  };
}(window, window.angular);

//# sourceMappingURL=panel.min-compiled.js.map