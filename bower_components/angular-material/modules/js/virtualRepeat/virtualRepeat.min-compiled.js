"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
!function (t, e, i) {
  "use strict";
  function s() {
    return { controller: o, template: n, compile: function compile(t, e) {
        t.addClass("md-virtual-repeat-container").addClass(e.hasOwnProperty("mdOrientHorizontal") ? "md-orient-horizontal" : "md-orient-vertical");
      } };
  }function n(t) {
    return '<div class="md-virtual-repeat-scroller"><div class="md-virtual-repeat-sizer"></div><div class="md-virtual-repeat-offsetter">' + t[0].innerHTML + "</div></div>";
  }function o(t, i, s, n, o, r, h, l, a) {
    this.$rootScope = o, this.$scope = h, this.$element = l, this.$attrs = a, this.size = 0, this.scrollSize = 0, this.scrollOffset = 0, this.horizontal = this.$attrs.hasOwnProperty("mdOrientHorizontal"), this.repeater = null, this.autoShrink = this.$attrs.hasOwnProperty("mdAutoShrink"), this.autoShrinkMin = parseInt(this.$attrs.mdAutoShrinkMin, 10) || 0, this.originalSize = null, this.offsetSize = parseInt(this.$attrs.mdOffsetSize, 10) || 0, this.oldElementSize = null, this.maxElementPixels = s.ELEMENT_MAX_PIXELS, this.$attrs.mdTopIndex ? (this.bindTopIndex = n(this.$attrs.mdTopIndex), this.topIndex = this.bindTopIndex(this.$scope), e.isDefined(this.topIndex) || (this.topIndex = 0, this.bindTopIndex.assign(this.$scope, 0)), this.$scope.$watch(this.bindTopIndex, e.bind(this, function (t) {
      t !== this.topIndex && this.scrollToIndex(t);
    }))) : this.topIndex = 0, this.scroller = l[0].querySelector(".md-virtual-repeat-scroller"), this.sizer = this.scroller.querySelector(".md-virtual-repeat-sizer"), this.offsetter = this.scroller.querySelector(".md-virtual-repeat-offsetter");var c = e.bind(this, this.updateSize);t(e.bind(this, function () {
      c();var t = i.debounce(c, 10, null, !1),
          s = e.element(r);this.size || t(), s.on("resize", t), h.$on("$destroy", function () {
        s.off("resize", t);
      }), h.$emit("$md-resize-enable"), h.$on("$md-resize", c);
    }));
  }function r(t) {
    return { controller: h, priority: 1e3, require: ["mdVirtualRepeat", "^^mdVirtualRepeatContainer"], restrict: "A", terminal: !0, transclude: "element", compile: function compile(e, i) {
        var s = i.mdVirtualRepeat,
            n = s.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)\s*$/),
            o = n[1],
            r = t(n[2]),
            h = i.mdExtraName && t(i.mdExtraName);return function (t, e, i, s, n) {
          s[0].link_(s[1], n, o, r, h);
        };
      } };
  }function h(t, i, s, n, o, r, h, l) {
    this.$scope = t, this.$element = i, this.$attrs = s, this.$browser = n, this.$document = o, this.$rootScope = r, this.$$rAF = h, this.onDemand = l.parseAttributeBoolean(s.mdOnDemand), this.browserCheckUrlChange = n.$$checkUrlChange, this.newStartIndex = 0, this.newEndIndex = 0, this.newVisibleEnd = 0, this.startIndex = 0, this.endIndex = 0, this.itemSize = t.$eval(s.mdItemSize) || null, this.isFirstRender = !0, this.isVirtualRepeatUpdating_ = !1, this.itemsLength = 0, this.unwatchItemSize_ = e.noop, this.blocks = {}, this.pooledBlocks = [], t.$on("$destroy", e.bind(this, this.cleanupBlocks_));
  }function l(t) {
    if (!e.isFunction(t.getItemAtIndex) || !e.isFunction(t.getLength)) throw Error("When md-on-demand is enabled, the Object passed to md-virtual-repeat must implement functions getItemAtIndex() and getLength() ");this.model = t;
  }o.$inject = ["$$rAF", "$mdUtil", "$mdConstant", "$parse", "$rootScope", "$window", "$scope", "$element", "$attrs"], h.$inject = ["$scope", "$element", "$attrs", "$browser", "$document", "$rootScope", "$$rAF", "$mdUtil"], r.$inject = ["$parse"], e.module("material.components.virtualRepeat", ["material.core", "material.components.showHide"]).directive("mdVirtualRepeatContainer", s).directive("mdVirtualRepeat", r);var a = 3;o.prototype.register = function (t) {
    this.repeater = t, e.element(this.scroller).on("scroll wheel touchmove touchend", e.bind(this, this.handleScroll_));
  }, o.prototype.isHorizontal = function () {
    return this.horizontal;
  }, o.prototype.getSize = function () {
    return this.size;
  }, o.prototype.setSize_ = function (t) {
    var e = this.getDimensionName_();this.size = t, this.$element[0].style[e] = t + "px";
  }, o.prototype.unsetSize_ = function () {
    this.$element[0].style[this.getDimensionName_()] = this.oldElementSize, this.oldElementSize = null;
  }, o.prototype.updateSize = function () {
    this.originalSize || (this.size = this.isHorizontal() ? this.$element[0].clientWidth : this.$element[0].clientHeight, this.handleScroll_(), this.repeater && this.repeater.containerUpdated());
  }, o.prototype.getScrollSize = function () {
    return this.scrollSize;
  }, o.prototype.getDimensionName_ = function () {
    return this.isHorizontal() ? "width" : "height";
  }, o.prototype.sizeScroller_ = function (t) {
    var e = this.getDimensionName_(),
        i = this.isHorizontal() ? "height" : "width";if (this.sizer.innerHTML = "", t < this.maxElementPixels) this.sizer.style[e] = t + "px";else {
      this.sizer.style[e] = "auto", this.sizer.style[i] = "auto";var s = Math.floor(t / this.maxElementPixels),
          n = document.createElement("div");n.style[e] = this.maxElementPixels + "px", n.style[i] = "1px";for (var o = 0; o < s; o++) {
        this.sizer.appendChild(n.cloneNode(!1));
      }n.style[e] = t - s * this.maxElementPixels + "px", this.sizer.appendChild(n);
    }
  }, o.prototype.autoShrink_ = function (t) {
    var e = Math.max(t, this.autoShrinkMin * this.repeater.getItemSize());if (this.autoShrink && e !== this.size) {
      null === this.oldElementSize && (this.oldElementSize = this.$element[0].style[this.getDimensionName_()]);var i = this.originalSize || this.size;if (!i || e < i) this.originalSize || (this.originalSize = this.size), this.setSize_(e);else if (null !== this.originalSize) {
        this.unsetSize_();var s = this.originalSize;this.originalSize = null, s || this.updateSize(), this.setSize_(s || this.size);
      }this.repeater.containerUpdated();
    }
  }, o.prototype.setScrollSize = function (t) {
    var e = t + this.offsetSize;this.scrollSize !== e && (this.sizeScroller_(e), this.autoShrink_(e), this.scrollSize = e);
  }, o.prototype.getScrollOffset = function () {
    return this.scrollOffset;
  }, o.prototype.scrollTo = function (t) {
    this.scroller[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = t, this.handleScroll_();
  }, o.prototype.scrollToIndex = function (t) {
    var e = this.repeater.getItemSize(),
        i = this.repeater.itemsLength;t > i && (t = i - 1), this.scrollTo(e * t);
  }, o.prototype.resetScroll = function () {
    this.scrollTo(0);
  }, o.prototype.handleScroll_ = function () {
    var t = "rtl" != document.dir && "rtl" != document.body.dir;t || this.maxSize || (this.scroller.scrollLeft = this.scrollSize, this.maxSize = this.scroller.scrollLeft);var e = this.isHorizontal() ? t ? this.scroller.scrollLeft : this.maxSize - this.scroller.scrollLeft : this.scroller.scrollTop;if (!(e === this.scrollOffset || e > this.scrollSize - this.size)) {
      var i = this.repeater.getItemSize();if (i) {
        var s = Math.max(0, Math.floor(e / i) - a),
            n = (this.isHorizontal() ? "translateX(" : "translateY(") + (!this.isHorizontal() || t ? s * i : -(s * i)) + "px)";if (this.scrollOffset = e, this.offsetter.style.webkitTransform = n, this.offsetter.style.transform = n, this.bindTopIndex) {
          var o = Math.floor(e / i);o !== this.topIndex && o < this.repeater.getItemCount() && (this.topIndex = o, this.bindTopIndex.assign(this.$scope, o), this.$rootScope.$$phase || this.$scope.$digest());
        }this.repeater.containerUpdated();
      }
    }
  }, h.Block, h.prototype.link_ = function (t, i, s, n, o) {
    this.container = t, this.transclude = i, this.repeatName = s, this.rawRepeatListExpression = n, this.extraName = o, this.sized = !1, this.repeatListExpression = e.bind(this, this.repeatListExpression_), this.container.register(this);
  }, h.prototype.cleanupBlocks_ = function () {
    e.forEach(this.pooledBlocks, function (t) {
      t.element.remove();
    });
  }, h.prototype.readItemSize_ = function () {
    if (!this.itemSize) {
      this.items = this.repeatListExpression(this.$scope), this.parentNode = this.$element[0].parentNode;var t = this.getBlock_(0);t.element[0].parentNode || this.parentNode.appendChild(t.element[0]), this.itemSize = t.element[0][this.container.isHorizontal() ? "offsetWidth" : "offsetHeight"] || null, this.blocks[0] = t, this.poolBlock_(0), this.itemSize && this.containerUpdated();
    }
  }, h.prototype.repeatListExpression_ = function (t) {
    var e = this.rawRepeatListExpression(t);if (this.onDemand && e) {
      var i = new l(e);return i.$$includeIndexes(this.newStartIndex, this.newVisibleEnd), i;
    }return e;
  }, h.prototype.containerUpdated = function () {
    return this.itemSize ? (this.sized || (this.items = this.repeatListExpression(this.$scope)), this.sized || (this.unwatchItemSize_(), this.sized = !0, this.$scope.$watchCollection(this.repeatListExpression, e.bind(this, function (t, e) {
      this.isVirtualRepeatUpdating_ || this.virtualRepeatUpdate_(t, e);
    }))), this.updateIndexes_(), void ((this.newStartIndex !== this.startIndex || this.newEndIndex !== this.endIndex || this.container.getScrollOffset() > this.container.getScrollSize()) && (this.items instanceof l && this.items.$$includeIndexes(this.newStartIndex, this.newEndIndex), this.virtualRepeatUpdate_(this.items, this.items)))) : (this.unwatchItemSize_ && this.unwatchItemSize_ !== e.noop && this.unwatchItemSize_(), this.unwatchItemSize_ = this.$scope.$watchCollection(this.repeatListExpression, e.bind(this, function (t) {
      t && t.length && this.readItemSize_();
    })), void (this.$rootScope.$$phase || this.$scope.$digest()));
  }, h.prototype.getItemSize = function () {
    return this.itemSize;
  }, h.prototype.getItemCount = function () {
    return this.itemsLength;
  }, h.prototype.virtualRepeatUpdate_ = function (t, i) {
    this.isVirtualRepeatUpdating_ = !0;var s = t && t.length || 0,
        n = !1;if (this.items && s < this.items.length && 0 !== this.container.getScrollOffset()) {
      this.items = t;var o = this.container.getScrollOffset();this.container.resetScroll(), this.container.scrollTo(o);
    }if (s !== this.itemsLength && (n = !0, this.itemsLength = s), this.items = t, (t !== i || n) && this.updateIndexes_(), this.parentNode = this.$element[0].parentNode, n && this.container.setScrollSize(s * this.itemSize), this.isFirstRender) {
      this.isFirstRender = !1;var r = this.$attrs.mdStartIndex ? this.$scope.$eval(this.$attrs.mdStartIndex) : this.container.topIndex;this.container.scrollToIndex(r);
    }Object.keys(this.blocks).forEach(function (t) {
      var e = parseInt(t, 10);(e < this.newStartIndex || e >= this.newEndIndex) && this.poolBlock_(e);
    }, this), this.$browser.$$checkUrlChange = e.noop;var h,
        l,
        a = [],
        c = [];for (h = this.newStartIndex; h < this.newEndIndex && null == this.blocks[h]; h++) {
      l = this.getBlock_(h), this.updateBlock_(l, h), a.push(l);
    }for (; null != this.blocks[h]; h++) {
      this.updateBlock_(this.blocks[h], h);
    }for (var d = h - 1; h < this.newEndIndex; h++) {
      l = this.getBlock_(h), this.updateBlock_(l, h), c.push(l);
    }a.length && this.parentNode.insertBefore(this.domFragmentFromBlocks_(a), this.$element[0].nextSibling), c.length && this.parentNode.insertBefore(this.domFragmentFromBlocks_(c), this.blocks[d] && this.blocks[d].element[0].nextSibling), this.$browser.$$checkUrlChange = this.browserCheckUrlChange, this.startIndex = this.newStartIndex, this.endIndex = this.newEndIndex, this.isVirtualRepeatUpdating_ = !1;
  }, h.prototype.getBlock_ = function (t) {
    if (this.pooledBlocks.length) return this.pooledBlocks.pop();var i;return this.transclude(e.bind(this, function (e, s) {
      i = { element: e, "new": !0, scope: s }, this.updateScope_(s, t), this.parentNode.appendChild(e[0]);
    })), i;
  }, h.prototype.updateBlock_ = function (t, e) {
    this.blocks[e] = t, (t["new"] || t.scope.$index !== e || t.scope[this.repeatName] !== this.items[e]) && (t["new"] = !1, this.updateScope_(t.scope, e), this.$rootScope.$$phase || t.scope.$digest());
  }, h.prototype.updateScope_ = function (t, e) {
    t.$index = e, t[this.repeatName] = this.items && this.items[e], this.extraName && (t[this.extraName(this.$scope)] = this.items[e]);
  }, h.prototype.poolBlock_ = function (t) {
    this.pooledBlocks.push(this.blocks[t]), this.parentNode.removeChild(this.blocks[t].element[0]), delete this.blocks[t];
  }, h.prototype.domFragmentFromBlocks_ = function (t) {
    var e = this.$document[0].createDocumentFragment();return t.forEach(function (t) {
      e.appendChild(t.element[0]);
    }), e;
  }, h.prototype.updateIndexes_ = function () {
    var t = this.items ? this.items.length : 0,
        e = Math.ceil(this.container.getSize() / this.itemSize);this.newStartIndex = Math.max(0, Math.min(t - e, Math.floor(this.container.getScrollOffset() / this.itemSize))), this.newVisibleEnd = this.newStartIndex + e + a, this.newEndIndex = Math.min(t, this.newVisibleEnd), this.newStartIndex = Math.max(0, this.newStartIndex - a);
  }, l.prototype.$$includeIndexes = function (t, e) {
    for (var i = t; i < e; i++) {
      this.hasOwnProperty(i) || (this[i] = this.model.getItemAtIndex(i));
    }this.length = this.model.getLength();
  };
}(window, window.angular);

//# sourceMappingURL=virtualRepeat.min-compiled.js.map