"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function MdPanelService(t, e, n, o) {
  this._defaultConfigOptions = { bindToController: !0, clickOutsideToClose: !1, disableParentScroll: !1, escapeToClose: !1, focusOnOpen: !0, fullscreen: !1, hasBackdrop: !1, propagateContainerEvents: !1, transformTemplate: angular.bind(this, this._wrapTemplate), trapFocus: !1, zIndex: defaultZIndex }, this._config = {}, this._$rootElement = t, this._$rootScope = e, this._$injector = n, this._$window = o, this._$mdUtil = this._$injector.get("$mdUtil"), this._trackedPanels = {}, this._groups = Object.create(null), this.animation = MdPanelAnimation.animation, this.xPosition = MdPanelPosition.xPosition, this.yPosition = MdPanelPosition.yPosition, this.interceptorTypes = MdPanelRef.interceptorTypes, this.closeReasons = MdPanelRef.closeReasons, this.absPosition = MdPanelPosition.absPosition;
}function MdPanelRef(t, e) {
  this._$q = e.get("$q"), this._$mdCompiler = e.get("$mdCompiler"), this._$mdConstant = e.get("$mdConstant"), this._$mdUtil = e.get("$mdUtil"), this._$mdTheming = e.get("$mdTheming"), this._$rootScope = e.get("$rootScope"), this._$animate = e.get("$animate"), this._$mdPanel = e.get("$mdPanel"), this._$log = e.get("$log"), this._$window = e.get("$window"), this._$$rAF = e.get("$$rAF"), this.id = t.id, this.config = t, this.panelContainer, this.panelEl, this.isAttached = !1, this._removeListeners = [], this._topFocusTrap, this._bottomFocusTrap, this._backdropRef, this._restoreScroll = null, this._interceptors = Object.create(null), this._compilerCleanup = null, this._restoreCache = { styles: "", classes: "" };
}function MdPanelPosition(t) {
  this._$window = t.get("$window"), this._isRTL = "rtl" === t.get("$mdUtil").bidi(), this._$mdConstant = t.get("$mdConstant"), this._absolute = !1, this._relativeToEl, this._top = "", this._bottom = "", this._left = "", this._right = "", this._translateX = [], this._translateY = [], this._positions = [], this._actualPosition;
}function MdPanelAnimation(t) {
  this._$mdUtil = t.get("$mdUtil"), this._openFrom, this._closeTo, this._animationClass = "", this._openDuration, this._closeDuration, this._rawDuration;
}function getElement(t) {
  var e = angular.isString(t) ? document.querySelector(t) : t;return angular.element(e);
}function getComputedTranslations(t, e) {
  var n = getComputedStyle(t[0] || t)[e],
      o = n.indexOf("("),
      i = n.lastIndexOf(")"),
      a = { x: 0, y: 0 };if (o > -1 && i > -1) {
    var s = n.substring(o + 1, i).split(", ").slice(-2);a.x = parseInt(s[0]), a.y = parseInt(s[1]);
  }return a;
}goog.provide("ngmaterial.components.panel"), goog.require("ngmaterial.components.backdrop"), goog.require("ngmaterial.core"), MdPanelService.$inject = ["$rootElement", "$rootScope", "$injector", "$window"], angular.module("material.components.panel", ["material.core", "material.components.backdrop"]).service("$mdPanel", MdPanelService);var defaultZIndex = 80,
    MD_PANEL_HIDDEN = "_md-panel-hidden",
    FOCUS_TRAP_TEMPLATE = angular.element('<div class="_md-panel-focus-trap" tabindex="0"></div>');MdPanelService.prototype.create = function (t) {
  if (t = t || {}, angular.isDefined(t.id) && this._trackedPanels[t.id]) return this._trackedPanels[t.id];this._config = { id: t.id || "panel_" + this._$mdUtil.nextUid(), scope: this._$rootScope.$new(!0), attachTo: this._$rootElement }, angular.extend(this._config, this._defaultConfigOptions, t);var e = new MdPanelRef(this._config, this._$injector);return this._trackedPanels[t.id] = e, this._config.scope.$on("$destroy", angular.bind(e, e.detach)), this._config.groupName && (angular.isString(this._config.groupName) && (this._config.groupName = [this._config.groupName]), angular.forEach(this._config.groupName, function (t) {
    e.addToGroup(t);
  })), e;
}, MdPanelService.prototype.open = function (t) {
  var e = this.create(t);return e.open().then(function () {
    return e;
  });
}, MdPanelService.prototype.newPanelPosition = function () {
  return new MdPanelPosition(this._$injector);
}, MdPanelService.prototype.newPanelAnimation = function () {
  return new MdPanelAnimation(this._$injector);
}, MdPanelService.prototype.newPanelGroup = function (t, e) {
  if (!this._groups[t]) {
    e = e || {};var n = { panels: [], openPanels: [], maxOpen: e.maxOpen > 0 ? e.maxOpen : 1 / 0 };this._groups[t] = n;
  }return this._groups[t];
}, MdPanelService.prototype.setGroupMaxOpen = function (t, e) {
  if (!this._groups[t]) throw new Error("mdPanel: Group does not exist yet. Call newPanelGroup().");this._groups[t].maxOpen = e;
}, MdPanelService.prototype._openCountExceedsMaxOpen = function (t) {
  if (this._groups[t]) {
    var e = this._groups[t];return e.maxOpen > 0 && e.openPanels.length > e.maxOpen;
  }return !1;
}, MdPanelService.prototype._closeFirstOpenedPanel = function (t) {
  this._groups[t].openPanels[0].close();
}, MdPanelService.prototype._wrapTemplate = function (t) {
  var e = t || "";return '<div class="md-panel-outer-wrapper">  <div class="md-panel" style="left: -9999px;">' + e + "</div></div>";
}, MdPanelService.prototype._wrapContentElement = function (t) {
  var e = angular.element('<div class="md-panel-outer-wrapper">');return t.addClass("md-panel").css("left", "-9999px"), e.append(t), e;
}, MdPanelRef.interceptorTypes = { CLOSE: "onClose" }, MdPanelRef.prototype.open = function () {
  var t = this;return this._$q(function (e, n) {
    var o = t._done(e, t),
        i = t._simpleBind(t.show, t),
        a = function a() {
      t.config.groupName && angular.forEach(t.config.groupName, function (e) {
        t._$mdPanel._openCountExceedsMaxOpen(e) && t._$mdPanel._closeFirstOpenedPanel(e);
      });
    };t.attach().then(i).then(a).then(o)["catch"](n);
  });
}, MdPanelRef.prototype.close = function (t) {
  var e = this;return this._$q(function (n, o) {
    e._callInterceptors(MdPanelRef.interceptorTypes.CLOSE).then(function () {
      var i = e._done(n, e),
          a = e._simpleBind(e.detach, e),
          s = e.config.onCloseSuccess || angular.noop;s = angular.bind(e, s, e, t), e.hide().then(a).then(i).then(s)["catch"](o);
    }, o);
  });
}, MdPanelRef.prototype.attach = function () {
  if (this.isAttached && this.panelEl) return this._$q.when(this);var t = this;return this._$q(function (e, n) {
    var o = t._done(e, t),
        i = t.config.onDomAdded || angular.noop,
        a = function a(e) {
      return t.isAttached = !0, t._addEventListeners(), e;
    };t._$q.all([t._createBackdrop(), t._createPanel().then(a)["catch"](n)]).then(i).then(o)["catch"](n);
  });
}, MdPanelRef.prototype.detach = function () {
  if (!this.isAttached) return this._$q.when(this);var t = this,
      e = t.config.onDomRemoved || angular.noop,
      n = function n() {
    return t._removeEventListeners(), t._topFocusTrap && t._topFocusTrap.parentNode && t._topFocusTrap.parentNode.removeChild(t._topFocusTrap), t._bottomFocusTrap && t._bottomFocusTrap.parentNode && t._bottomFocusTrap.parentNode.removeChild(t._bottomFocusTrap), t._restoreCache.classes && (t.panelEl[0].className = t._restoreCache.classes), t.panelEl[0].style.cssText = t._restoreCache.styles || "", t._compilerCleanup(), t.panelContainer.remove(), t.isAttached = !1, t._$q.when(t);
  };return this._restoreScroll && (this._restoreScroll(), this._restoreScroll = null), this._$q(function (o, i) {
    var a = t._done(o, t);t._$q.all([n(), !t._backdropRef || t._backdropRef.detach()]).then(e).then(a)["catch"](i);
  });
}, MdPanelRef.prototype.destroy = function () {
  var t = this;this.config.groupName && angular.forEach(this.config.groupName, function (e) {
    t.removeFromGroup(e);
  }), this.config.scope.$destroy(), this.config.locals = null, this._interceptors = null;
}, MdPanelRef.prototype.show = function () {
  if (!this.panelContainer) return this._$q(function (t, e) {
    e("mdPanel: Panel does not exist yet. Call open() or attach().");
  });if (!this.panelContainer.hasClass(MD_PANEL_HIDDEN)) return this._$q.when(this);var t = this,
      e = function e() {
    return t.panelContainer.removeClass(MD_PANEL_HIDDEN), t._animateOpen();
  };return this._$q(function (n, o) {
    var i = t._done(n, t),
        a = t.config.onOpenComplete || angular.noop,
        s = function s() {
      t.config.groupName && angular.forEach(t.config.groupName, function (e) {
        t._$mdPanel._groups[e].openPanels.push(t);
      });
    };t._$q.all([t._backdropRef ? t._backdropRef.show() : t, e().then(function () {
      t._focusOnOpen();
    }, o)]).then(a).then(s).then(i)["catch"](o);
  });
}, MdPanelRef.prototype.hide = function () {
  if (!this.panelContainer) return this._$q(function (t, e) {
    e("mdPanel: Panel does not exist yet. Call open() or attach().");
  });if (this.panelContainer.hasClass(MD_PANEL_HIDDEN)) return this._$q.when(this);var t = this;return this._$q(function (e, n) {
    var o = t._done(e, t),
        i = t.config.onRemoving || angular.noop,
        a = function a() {
      t.panelContainer.addClass(MD_PANEL_HIDDEN);
    },
        s = function s() {
      if (t.config.groupName) {
        var e;angular.forEach(t.config.groupName, function (n) {
          n = t._$mdPanel._groups[n], e = n.openPanels.indexOf(t), e > -1 && n.openPanels.splice(e, 1);
        });
      }
    },
        r = function r() {
      var e = t.config.origin;e && getElement(e).focus();
    };t._$q.all([t._backdropRef ? t._backdropRef.hide() : t, t._animateClose().then(i).then(a).then(s).then(r)["catch"](n)]).then(o, n);
  });
}, MdPanelRef.prototype.addClass = function (t, e) {
  if (this._$log.warn("mdPanel: The addClass method is in the process of being deprecated. Full deprecation is scheduled for the Angular Material 1.2 release. To achieve the same results, use the panelContainer or panelEl JQLite elements that are referenced in MdPanelRef."), !this.panelContainer) throw new Error("mdPanel: Panel does not exist yet. Call open() or attach().");e || this.panelContainer.hasClass(t) ? e && !this.panelEl.hasClass(t) && this.panelEl.addClass(t) : this.panelContainer.addClass(t);
}, MdPanelRef.prototype.removeClass = function (t, e) {
  if (this._$log.warn("mdPanel: The removeClass method is in the process of being deprecated. Full deprecation is scheduled for the Angular Material 1.2 release. To achieve the same results, use the panelContainer or panelEl JQLite elements that are referenced in MdPanelRef."), !this.panelContainer) throw new Error("mdPanel: Panel does not exist yet. Call open() or attach().");!e && this.panelContainer.hasClass(t) ? this.panelContainer.removeClass(t) : e && this.panelEl.hasClass(t) && this.panelEl.removeClass(t);
}, MdPanelRef.prototype.toggleClass = function (t, e) {
  if (this._$log.warn("mdPanel: The toggleClass method is in the process of being deprecated. Full deprecation is scheduled for the Angular Material 1.2 release. To achieve the same results, use the panelContainer or panelEl JQLite elements that are referenced in MdPanelRef."), !this.panelContainer) throw new Error("mdPanel: Panel does not exist yet. Call open() or attach().");e ? this.panelEl.toggleClass(t) : this.panelContainer.toggleClass(t);
}, MdPanelRef.prototype._compile = function () {
  var t = this;return t._$mdCompiler.compile(t.config).then(function (e) {
    var n = t.config;if (n.contentElement) {
      var o = e.element;t._restoreCache.styles = o[0].style.cssText, t._restoreCache.classes = o[0].className, t.panelContainer = t._$mdPanel._wrapContentElement(o), t.panelEl = o;
    } else t.panelContainer = e.link(n.scope), t.panelEl = angular.element(t.panelContainer[0].querySelector(".md-panel"));return t._compilerCleanup = e.cleanup, getElement(t.config.attachTo).append(t.panelContainer), t;
  });
}, MdPanelRef.prototype._createPanel = function () {
  var t = this;return this._$q(function (e, n) {
    t.config.locals || (t.config.locals = {}), t.config.locals.mdPanelRef = t, t._compile().then(function () {
      t.config.disableParentScroll && (t._restoreScroll = t._$mdUtil.disableScrollAround(null, t.panelContainer, { disableScrollMask: !0 })), t.config.panelClass && t.panelEl.addClass(t.config.panelClass), t.config.propagateContainerEvents && t.panelContainer.css("pointer-events", "none"), t._$animate.pin && t._$animate.pin(t.panelContainer, getElement(t.config.attachTo)), t._configureTrapFocus(), t._addStyles().then(function () {
        e(t);
      }, n);
    }, n);
  });
}, MdPanelRef.prototype._addStyles = function () {
  var t = this;return this._$q(function (e) {
    t.panelContainer.css("z-index", t.config.zIndex), t.panelEl.css("z-index", t.config.zIndex + 1);var n = function n() {
      t._setTheming(), t.panelEl.css("left", ""), t.panelContainer.addClass(MD_PANEL_HIDDEN), e(t);
    };if (t.config.fullscreen) return t.panelEl.addClass("_md-panel-fullscreen"), void n();var o = t.config.position;return o ? void t._$rootScope.$$postDigest(function () {
      t._updatePosition(!0), t._setTheming(), e(t);
    }) : void n();
  });
}, MdPanelRef.prototype._setTheming = function () {
  this._$mdTheming(this.panelEl), this._$mdTheming(this.panelContainer);
}, MdPanelRef.prototype.updatePosition = function (t) {
  if (!this.panelContainer) throw new Error("mdPanel: Panel does not exist yet. Call open() or attach().");this.config.position = t, this._updatePosition();
}, MdPanelRef.prototype._updatePosition = function (t) {
  var e = this.config.position;e && (e._setPanelPosition(this.panelEl), t && this.panelContainer.addClass(MD_PANEL_HIDDEN), this.panelEl.css(MdPanelPosition.absPosition.TOP, e.getTop()), this.panelEl.css(MdPanelPosition.absPosition.BOTTOM, e.getBottom()), this.panelEl.css(MdPanelPosition.absPosition.LEFT, e.getLeft()), this.panelEl.css(MdPanelPosition.absPosition.RIGHT, e.getRight()));
}, MdPanelRef.prototype._focusOnOpen = function () {
  if (this.config.focusOnOpen) {
    var t = this;this._$rootScope.$$postDigest(function () {
      var e = t._$mdUtil.findFocusTarget(t.panelEl) || t.panelEl;e.focus();
    });
  }
}, MdPanelRef.prototype._createBackdrop = function () {
  if (this.config.hasBackdrop) {
    if (!this._backdropRef) {
      var t = this._$mdPanel.newPanelAnimation().openFrom(this.config.attachTo).withAnimation({ open: "_md-opaque-enter", close: "_md-opaque-leave" });this.config.animation && t.duration(this.config.animation._rawDuration);var e = { animation: t, attachTo: this.config.attachTo, focusOnOpen: !1, panelClass: "_md-panel-backdrop", zIndex: this.config.zIndex - 1 };this._backdropRef = this._$mdPanel.create(e);
    }if (!this._backdropRef.isAttached) return this._backdropRef.attach();
  }
}, MdPanelRef.prototype._addEventListeners = function () {
  this._configureEscapeToClose(), this._configureClickOutsideToClose(), this._configureScrollListener();
}, MdPanelRef.prototype._removeEventListeners = function () {
  this._removeListeners && this._removeListeners.forEach(function (t) {
    t();
  }), this._removeListeners = [];
}, MdPanelRef.prototype._configureEscapeToClose = function () {
  if (this.config.escapeToClose) {
    var t = getElement(this.config.attachTo),
        e = this,
        n = function n(t) {
      t.keyCode === e._$mdConstant.KEY_CODE.ESCAPE && (t.stopPropagation(), t.preventDefault(), e.close(MdPanelRef.closeReasons.ESCAPE));
    };this.panelContainer.on("keydown", n), t.on("keydown", n), this._removeListeners.push(function () {
      e.panelContainer.off("keydown", n), t.off("keydown", n);
    });
  }
}, MdPanelRef.prototype._configureClickOutsideToClose = function () {
  if (this.config.clickOutsideToClose) {
    var t,
        e = this.config.propagateContainerEvents ? angular.element(document.body) : this.panelContainer,
        n = function n(e) {
      t = e.target;
    },
        o = this,
        i = function i(n) {
      o.config.propagateContainerEvents ? t === o.panelEl[0] || o.panelEl[0].contains(t) || o.close() : t === e[0] && n.target === e[0] && (n.stopPropagation(), n.preventDefault(), o.close(MdPanelRef.closeReasons.CLICK_OUTSIDE));
    };e.on("mousedown", n), e.on("mouseup", i), this._removeListeners.push(function () {
      e.off("mousedown", n), e.off("mouseup", i);
    });
  }
}, MdPanelRef.prototype._configureScrollListener = function () {
  if (!this.config.disableParentScroll) {
    var t = angular.bind(this, this._updatePosition),
        e = this._$$rAF.throttle(t),
        n = this,
        o = function o() {
      e();
    };this._$window.addEventListener("scroll", o, !0), this._removeListeners.push(function () {
      n._$window.removeEventListener("scroll", o, !0);
    });
  }
}, MdPanelRef.prototype._configureTrapFocus = function () {
  if (this.panelEl.attr("tabIndex", "-1"), this.config.trapFocus) {
    var t = this.panelEl;this._topFocusTrap = FOCUS_TRAP_TEMPLATE.clone()[0], this._bottomFocusTrap = FOCUS_TRAP_TEMPLATE.clone()[0];var e = function e() {
      t.focus();
    };this._topFocusTrap.addEventListener("focus", e), this._bottomFocusTrap.addEventListener("focus", e), this._removeListeners.push(this._simpleBind(function () {
      this._topFocusTrap.removeEventListener("focus", e), this._bottomFocusTrap.removeEventListener("focus", e);
    }, this)), t[0].parentNode.insertBefore(this._topFocusTrap, t[0]), t.after(this._bottomFocusTrap);
  }
}, MdPanelRef.prototype.updateAnimation = function (t) {
  this.config.animation = t, this._backdropRef && this._backdropRef.config.animation.duration(t._rawDuration);
}, MdPanelRef.prototype._animateOpen = function () {
  this.panelContainer.addClass("md-panel-is-showing");var t = this.config.animation;if (!t) return this.panelContainer.addClass("_md-panel-shown"), this._$q.when(this);var e = this;return this._$q(function (n) {
    var o = e._done(n, e),
        i = function i() {
      e._$log.warn("mdPanel: MdPanel Animations failed. Showing panel without animating."), o();
    };t.animateOpen(e.panelEl).then(o, i);
  });
}, MdPanelRef.prototype._animateClose = function () {
  var t = this.config.animation;if (!t) return this.panelContainer.removeClass("md-panel-is-showing"), this.panelContainer.removeClass("_md-panel-shown"), this._$q.when(this);var e = this;return this._$q(function (n) {
    var o = function o() {
      e.panelContainer.removeClass("md-panel-is-showing"), n(e);
    },
        i = function i() {
      e._$log.warn("mdPanel: MdPanel Animations failed. Hiding panel without animating."), o();
    };t.animateClose(e.panelEl).then(o, i);
  });
}, MdPanelRef.prototype.registerInterceptor = function (t, e) {
  var n = null;if (angular.isString(t) ? angular.isFunction(e) || (n = "Interceptor callback must be a function, instead got " + (typeof e === "undefined" ? "undefined" : _typeof(e))) : n = "Interceptor type must be a string, instead got " + (typeof t === "undefined" ? "undefined" : _typeof(t)), n) throw new Error("MdPanel: " + n);var o = this._interceptors[t] = this._interceptors[t] || [];return o.indexOf(e) === -1 && o.push(e), this;
}, MdPanelRef.prototype.removeInterceptor = function (t, e) {
  var n = this._interceptors[t] ? this._interceptors[t].indexOf(e) : -1;return n > -1 && this._interceptors[t].splice(n, 1), this;
}, MdPanelRef.prototype.removeAllInterceptors = function (t) {
  return t ? this._interceptors[t] = [] : this._interceptors = Object.create(null), this;
}, MdPanelRef.prototype._callInterceptors = function (t) {
  var e = this,
      n = e._$q,
      o = e._interceptors && e._interceptors[t] || [];return o.reduceRight(function (t, o) {
    var i = o && angular.isFunction(o.then),
        a = i ? o : null;return t.then(function () {
      if (!a) try {
        a = o(e);
      } catch (t) {
        a = n.reject(t);
      }return a;
    });
  }, n.resolve(e));
}, MdPanelRef.prototype._simpleBind = function (t, e) {
  return function (n) {
    return t.apply(e, n);
  };
}, MdPanelRef.prototype._done = function (t, e) {
  return function () {
    t(e);
  };
}, MdPanelRef.prototype.addToGroup = function (t) {
  this._$mdPanel._groups[t] || this._$mdPanel.newPanelGroup(t);var e = this._$mdPanel._groups[t],
      n = e.panels.indexOf(this);n < 0 && e.panels.push(this);
}, MdPanelRef.prototype.removeFromGroup = function (t) {
  if (!this._$mdPanel._groups[t]) throw new Error("mdPanel: The group " + t + " does not exist.");var e = this._$mdPanel._groups[t],
      n = e.panels.indexOf(this);n > -1 && e.panels.splice(n, 1);
}, MdPanelRef.closeReasons = { CLICK_OUTSIDE: "clickOutsideToClose", ESCAPE: "escapeToClose" }, MdPanelPosition.xPosition = { CENTER: "center", ALIGN_START: "align-start", ALIGN_END: "align-end", OFFSET_START: "offset-start", OFFSET_END: "offset-end" }, MdPanelPosition.yPosition = { CENTER: "center", ALIGN_TOPS: "align-tops", ALIGN_BOTTOMS: "align-bottoms", ABOVE: "above", BELOW: "below" }, MdPanelPosition.absPosition = { TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }, MdPanelPosition.viewportMargin = 8, MdPanelPosition.prototype.absolute = function () {
  return this._absolute = !0, this;
}, MdPanelPosition.prototype._setPosition = function (t, e) {
  if (t === MdPanelPosition.absPosition.RIGHT || t === MdPanelPosition.absPosition.LEFT) this._left = this._right = "";else {
    if (t !== MdPanelPosition.absPosition.BOTTOM && t !== MdPanelPosition.absPosition.TOP) {
      var n = Object.keys(MdPanelPosition.absPosition).join().toLowerCase();throw new Error("mdPanel: Position must be one of " + n + ".");
    }this._top = this._bottom = "";
  }return this["_" + t] = angular.isString(e) ? e : "0", this;
}, MdPanelPosition.prototype.top = function (t) {
  return this._setPosition(MdPanelPosition.absPosition.TOP, t);
}, MdPanelPosition.prototype.bottom = function (t) {
  return this._setPosition(MdPanelPosition.absPosition.BOTTOM, t);
}, MdPanelPosition.prototype.start = function (t) {
  var e = this._isRTL ? MdPanelPosition.absPosition.RIGHT : MdPanelPosition.absPosition.LEFT;return this._setPosition(e, t);
}, MdPanelPosition.prototype.end = function (t) {
  var e = this._isRTL ? MdPanelPosition.absPosition.LEFT : MdPanelPosition.absPosition.RIGHT;return this._setPosition(e, t);
}, MdPanelPosition.prototype.left = function (t) {
  return this._setPosition(MdPanelPosition.absPosition.LEFT, t);
}, MdPanelPosition.prototype.right = function (t) {
  return this._setPosition(MdPanelPosition.absPosition.RIGHT, t);
}, MdPanelPosition.prototype.centerHorizontally = function () {
  return this._left = "50%", this._right = "", this._translateX = ["-50%"], this;
}, MdPanelPosition.prototype.centerVertically = function () {
  return this._top = "50%", this._bottom = "", this._translateY = ["-50%"], this;
}, MdPanelPosition.prototype.center = function () {
  return this.centerHorizontally().centerVertically();
}, MdPanelPosition.prototype.relativeTo = function (t) {
  return this._absolute = !1, this._relativeToEl = getElement(t), this;
}, MdPanelPosition.prototype.addPanelPosition = function (t, e) {
  if (!this._relativeToEl) throw new Error("mdPanel: addPanelPosition can only be used with relative positioning. Set relativeTo first.");return this._validateXPosition(t), this._validateYPosition(e), this._positions.push({ x: t, y: e }), this;
}, MdPanelPosition.prototype._validateYPosition = function (t) {
  if (null != t) {
    for (var e, n = Object.keys(MdPanelPosition.yPosition), o = [], i = 0; e = n[i]; i++) {
      var a = MdPanelPosition.yPosition[e];if (o.push(a), a === t) return;
    }throw new Error("mdPanel: Panel y position only accepts the following values:\n" + o.join(" | "));
  }
}, MdPanelPosition.prototype._validateXPosition = function (t) {
  if (null != t) {
    for (var e, n = Object.keys(MdPanelPosition.xPosition), o = [], i = 0; e = n[i]; i++) {
      var a = MdPanelPosition.xPosition[e];if (o.push(a), a === t) return;
    }throw new Error("mdPanel: Panel x Position only accepts the following values:\n" + o.join(" | "));
  }
}, MdPanelPosition.prototype.withOffsetX = function (t) {
  return this._translateX.push(t), this;
}, MdPanelPosition.prototype.withOffsetY = function (t) {
  return this._translateY.push(t), this;
}, MdPanelPosition.prototype.getTop = function () {
  return this._top;
}, MdPanelPosition.prototype.getBottom = function () {
  return this._bottom;
}, MdPanelPosition.prototype.getLeft = function () {
  return this._left;
}, MdPanelPosition.prototype.getRight = function () {
  return this._right;
}, MdPanelPosition.prototype.getTransform = function () {
  var t = this._reduceTranslateValues("translateX", this._translateX),
      e = this._reduceTranslateValues("translateY", this._translateY);return (t + " " + e).trim();
}, MdPanelPosition.prototype._setTransform = function (t) {
  return t.css(this._$mdConstant.CSS.TRANSFORM, this.getTransform());
}, MdPanelPosition.prototype._isOnscreen = function (t) {
  var e = parseInt(this.getLeft()),
      n = parseInt(this.getTop());if (this._translateX.length || this._translateY.length) {
    var o = this._$mdConstant.CSS.TRANSFORM,
        i = getComputedTranslations(t, o);e += i.x, n += i.y;
  }var a = e + t[0].offsetWidth,
      s = n + t[0].offsetHeight;return e >= 0 && n >= 0 && s <= this._$window.innerHeight && a <= this._$window.innerWidth;
}, MdPanelPosition.prototype.getActualPosition = function () {
  return this._actualPosition;
}, MdPanelPosition.prototype._reduceTranslateValues = function (t, e) {
  return e.map(function (e) {
    var n = angular.isFunction(e) ? e(this) : e;return t + "(" + n + ")";
  }, this).join(" ");
}, MdPanelPosition.prototype._setPanelPosition = function (t) {
  if (t.removeClass("_md-panel-position-adjusted"), this._absolute) return void this._setTransform(t);if (this._actualPosition) return this._calculatePanelPosition(t, this._actualPosition), this._setTransform(t), void this._constrainToViewport(t);for (var e = 0; e < this._positions.length; e++) {
    if (this._actualPosition = this._positions[e], this._calculatePanelPosition(t, this._actualPosition), this._setTransform(t), this._isOnscreen(t)) return;
  }this._constrainToViewport(t);
}, MdPanelPosition.prototype._constrainToViewport = function (t) {
  var e = MdPanelPosition.viewportMargin,
      n = this._top,
      o = this._left;if (this.getTop()) {
    var i = parseInt(this.getTop()),
        a = t[0].offsetHeight + i,
        s = this._$window.innerHeight;i < e ? this._top = e + "px" : a > s && (this._top = i - (a - s + e) + "px");
  }if (this.getLeft()) {
    var r = parseInt(this.getLeft()),
        l = t[0].offsetWidth + r,
        p = this._$window.innerWidth;r < e ? this._left = e + "px" : l > p && (this._left = r - (l - p + e) + "px");
  }t.toggleClass("_md-panel-position-adjusted", this._top !== n || this._left !== o);
}, MdPanelPosition.prototype._reverseXPosition = function (t) {
  if (t !== MdPanelPosition.xPosition.CENTER) {
    var e = "start",
        n = "end";return t.indexOf(e) > -1 ? t.replace(e, n) : t.replace(n, e);
  }
}, MdPanelPosition.prototype._bidi = function (t) {
  return this._isRTL ? this._reverseXPosition(t) : t;
}, MdPanelPosition.prototype._calculatePanelPosition = function (t, e) {
  var n = t[0].getBoundingClientRect(),
      o = n.width,
      i = n.height,
      a = this._relativeToEl[0].getBoundingClientRect(),
      s = a.left,
      r = a.right,
      l = a.width;switch (this._bidi(e.x)) {case MdPanelPosition.xPosition.OFFSET_START:
      this._left = s - o + "px";break;case MdPanelPosition.xPosition.ALIGN_END:
      this._left = r - o + "px";break;case MdPanelPosition.xPosition.CENTER:
      var p = s + .5 * l - .5 * o;this._left = p + "px";break;case MdPanelPosition.xPosition.ALIGN_START:
      this._left = s + "px";break;case MdPanelPosition.xPosition.OFFSET_END:
      this._left = r + "px";}var c = a.top,
      h = a.bottom,
      d = a.height;switch (e.y) {case MdPanelPosition.yPosition.ABOVE:
      this._top = c - i + "px";break;case MdPanelPosition.yPosition.ALIGN_BOTTOMS:
      this._top = h - i + "px";break;case MdPanelPosition.yPosition.CENTER:
      var u = c + .5 * d - .5 * i;this._top = u + "px";break;case MdPanelPosition.yPosition.ALIGN_TOPS:
      this._top = c + "px";break;case MdPanelPosition.yPosition.BELOW:
      this._top = h + "px";}
}, MdPanelAnimation.animation = { SLIDE: "md-panel-animate-slide", SCALE: "md-panel-animate-scale", FADE: "md-panel-animate-fade" }, MdPanelAnimation.prototype.openFrom = function (t) {
  return t = t.target ? t.target : t, this._openFrom = this._getPanelAnimationTarget(t), this._closeTo || (this._closeTo = this._openFrom), this;
}, MdPanelAnimation.prototype.closeTo = function (t) {
  return this._closeTo = this._getPanelAnimationTarget(t), this;
}, MdPanelAnimation.prototype.duration = function (t) {
  function e(t) {
    if (angular.isNumber(t)) return t / 1e3;
  }return t && (angular.isNumber(t) ? this._openDuration = this._closeDuration = e(t) : angular.isObject(t) && (this._openDuration = e(t.open), this._closeDuration = e(t.close))), this._rawDuration = t, this;
}, MdPanelAnimation.prototype._getPanelAnimationTarget = function (t) {
  return angular.isDefined(t.top) || angular.isDefined(t.left) ? { element: void 0, bounds: { top: t.top || 0, left: t.left || 0 } } : this._getBoundingClientRect(getElement(t));
}, MdPanelAnimation.prototype.withAnimation = function (t) {
  return this._animationClass = t, this;
}, MdPanelAnimation.prototype.animateOpen = function (t) {
  var e = this._$mdUtil.dom.animator;this._fixBounds(t);var n = {},
      o = t[0].style.transform || "",
      i = e.toTransformCss(o),
      a = e.toTransformCss(o);switch (this._animationClass) {case MdPanelAnimation.animation.SLIDE:
      t.css("opacity", "1"), n = { transitionInClass: "_md-panel-animate-enter" };var s = e.calculateSlideToOrigin(t, this._openFrom) || "";i = e.toTransformCss(s + " " + o);break;case MdPanelAnimation.animation.SCALE:
      n = { transitionInClass: "_md-panel-animate-enter" };var r = e.calculateZoomToOrigin(t, this._openFrom) || "";i = e.toTransformCss(r + " " + o);break;case MdPanelAnimation.animation.FADE:
      n = { transitionInClass: "_md-panel-animate-enter" };break;default:
      n = angular.isString(this._animationClass) ? { transitionInClass: this._animationClass } : { transitionInClass: this._animationClass.open, transitionOutClass: this._animationClass.close };}return n.duration = this._openDuration, e.translate3d(t, i, a, n);
}, MdPanelAnimation.prototype.animateClose = function (t) {
  var e = this._$mdUtil.dom.animator,
      n = {},
      o = t[0].style.transform || "",
      i = e.toTransformCss(o),
      a = e.toTransformCss(o);switch (this._animationClass) {case MdPanelAnimation.animation.SLIDE:
      t.css("opacity", "1"), n = { transitionInClass: "_md-panel-animate-leave" };var s = e.calculateSlideToOrigin(t, this._closeTo) || "";a = e.toTransformCss(s + " " + o);break;case MdPanelAnimation.animation.SCALE:
      n = { transitionInClass: "_md-panel-animate-scale-out _md-panel-animate-leave" };var r = e.calculateZoomToOrigin(t, this._closeTo) || "";a = e.toTransformCss(r + " " + o);break;case MdPanelAnimation.animation.FADE:
      n = { transitionInClass: "_md-panel-animate-fade-out _md-panel-animate-leave" };break;default:
      n = angular.isString(this._animationClass) ? { transitionOutClass: this._animationClass } : { transitionInClass: this._animationClass.close, transitionOutClass: this._animationClass.open };}return n.duration = this._closeDuration, e.translate3d(t, i, a, n);
}, MdPanelAnimation.prototype._fixBounds = function (t) {
  var e = t[0].offsetWidth,
      n = t[0].offsetHeight;this._openFrom && null == this._openFrom.bounds.height && (this._openFrom.bounds.height = n), this._openFrom && null == this._openFrom.bounds.width && (this._openFrom.bounds.width = e), this._closeTo && null == this._closeTo.bounds.height && (this._closeTo.bounds.height = n), this._closeTo && null == this._closeTo.bounds.width && (this._closeTo.bounds.width = e);
}, MdPanelAnimation.prototype._getBoundingClientRect = function (t) {
  if (t instanceof angular.element) return { element: t, bounds: t[0].getBoundingClientRect() };
}, ngmaterial.components.panel = angular.module("material.components.panel");

//# sourceMappingURL=panel.min-compiled.js.map