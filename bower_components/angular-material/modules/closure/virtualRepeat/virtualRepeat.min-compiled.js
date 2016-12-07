"use strict";

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1-master-f7ecb4f
 */
function VirtualRepeatContainerDirective() {
  return { controller: VirtualRepeatContainerController, template: virtualRepeatContainerTemplate, compile: function compile(t, e) {
      t.addClass("md-virtual-repeat-container").addClass(e.hasOwnProperty("mdOrientHorizontal") ? "md-orient-horizontal" : "md-orient-vertical");
    } };
}function virtualRepeatContainerTemplate(t) {
  return '<div class="md-virtual-repeat-scroller"><div class="md-virtual-repeat-sizer"></div><div class="md-virtual-repeat-offsetter">' + t[0].innerHTML + "</div></div>";
}function VirtualRepeatContainerController(t, e, i, r, s, n, o, a, l) {
  this.$rootScope = s, this.$scope = o, this.$element = a, this.$attrs = l, this.size = 0, this.scrollSize = 0, this.scrollOffset = 0, this.horizontal = this.$attrs.hasOwnProperty("mdOrientHorizontal"), this.repeater = null, this.autoShrink = this.$attrs.hasOwnProperty("mdAutoShrink"), this.autoShrinkMin = parseInt(this.$attrs.mdAutoShrinkMin, 10) || 0, this.originalSize = null, this.offsetSize = parseInt(this.$attrs.mdOffsetSize, 10) || 0, this.oldElementSize = null, this.maxElementPixels = i.ELEMENT_MAX_PIXELS, this.$attrs.mdTopIndex ? (this.bindTopIndex = r(this.$attrs.mdTopIndex), this.topIndex = this.bindTopIndex(this.$scope), angular.isDefined(this.topIndex) || (this.topIndex = 0, this.bindTopIndex.assign(this.$scope, 0)), this.$scope.$watch(this.bindTopIndex, angular.bind(this, function (t) {
    t !== this.topIndex && this.scrollToIndex(t);
  }))) : this.topIndex = 0, this.scroller = a[0].querySelector(".md-virtual-repeat-scroller"), this.sizer = this.scroller.querySelector(".md-virtual-repeat-sizer"), this.offsetter = this.scroller.querySelector(".md-virtual-repeat-offsetter");var h = angular.bind(this, this.updateSize);t(angular.bind(this, function () {
    h();var t = e.debounce(h, 10, null, !1),
        i = angular.element(n);this.size || t(), i.on("resize", t), o.$on("$destroy", function () {
      i.off("resize", t);
    }), o.$emit("$md-resize-enable"), o.$on("$md-resize", h);
  }));
}function VirtualRepeatDirective(t) {
  return { controller: VirtualRepeatController, priority: 1e3, require: ["mdVirtualRepeat", "^^mdVirtualRepeatContainer"], restrict: "A", terminal: !0, transclude: "element", compile: function compile(e, i) {
      var r = i.mdVirtualRepeat,
          s = r.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)\s*$/),
          n = s[1],
          o = t(s[2]),
          a = i.mdExtraName && t(i.mdExtraName);return function (t, e, i, r, s) {
        r[0].link_(r[1], s, n, o, a);
      };
    } };
}function VirtualRepeatController(t, e, i, r, s, n, o, a) {
  this.$scope = t, this.$element = e, this.$attrs = i, this.$browser = r, this.$document = s, this.$rootScope = n, this.$$rAF = o, this.onDemand = a.parseAttributeBoolean(i.mdOnDemand), this.browserCheckUrlChange = r.$$checkUrlChange, this.newStartIndex = 0, this.newEndIndex = 0, this.newVisibleEnd = 0, this.startIndex = 0, this.endIndex = 0, this.itemSize = t.$eval(i.mdItemSize) || null, this.isFirstRender = !0, this.isVirtualRepeatUpdating_ = !1, this.itemsLength = 0, this.unwatchItemSize_ = angular.noop, this.blocks = {}, this.pooledBlocks = [], t.$on("$destroy", angular.bind(this, this.cleanupBlocks_));
}function VirtualRepeatModelArrayLike(t) {
  if (!angular.isFunction(t.getItemAtIndex) || !angular.isFunction(t.getLength)) throw Error("When md-on-demand is enabled, the Object passed to md-virtual-repeat must implement functions getItemAtIndex() and getLength() ");this.model = t;
}goog.provide("ngmaterial.components.virtualRepeat"), goog.require("ngmaterial.components.showHide"), goog.require("ngmaterial.core"), VirtualRepeatContainerController.$inject = ["$$rAF", "$mdUtil", "$mdConstant", "$parse", "$rootScope", "$window", "$scope", "$element", "$attrs"], VirtualRepeatController.$inject = ["$scope", "$element", "$attrs", "$browser", "$document", "$rootScope", "$$rAF", "$mdUtil"], VirtualRepeatDirective.$inject = ["$parse"], angular.module("material.components.virtualRepeat", ["material.core", "material.components.showHide"]).directive("mdVirtualRepeatContainer", VirtualRepeatContainerDirective).directive("mdVirtualRepeat", VirtualRepeatDirective);var NUM_EXTRA = 3;VirtualRepeatContainerController.prototype.register = function (t) {
  this.repeater = t, angular.element(this.scroller).on("scroll wheel touchmove touchend", angular.bind(this, this.handleScroll_));
}, VirtualRepeatContainerController.prototype.isHorizontal = function () {
  return this.horizontal;
}, VirtualRepeatContainerController.prototype.getSize = function () {
  return this.size;
}, VirtualRepeatContainerController.prototype.setSize_ = function (t) {
  var e = this.getDimensionName_();this.size = t, this.$element[0].style[e] = t + "px";
}, VirtualRepeatContainerController.prototype.unsetSize_ = function () {
  this.$element[0].style[this.getDimensionName_()] = this.oldElementSize, this.oldElementSize = null;
}, VirtualRepeatContainerController.prototype.updateSize = function () {
  this.originalSize || (this.size = this.isHorizontal() ? this.$element[0].clientWidth : this.$element[0].clientHeight, this.handleScroll_(), this.repeater && this.repeater.containerUpdated());
}, VirtualRepeatContainerController.prototype.getScrollSize = function () {
  return this.scrollSize;
}, VirtualRepeatContainerController.prototype.getDimensionName_ = function () {
  return this.isHorizontal() ? "width" : "height";
}, VirtualRepeatContainerController.prototype.sizeScroller_ = function (t) {
  var e = this.getDimensionName_(),
      i = this.isHorizontal() ? "height" : "width";if (this.sizer.innerHTML = "", t < this.maxElementPixels) this.sizer.style[e] = t + "px";else {
    this.sizer.style[e] = "auto", this.sizer.style[i] = "auto";var r = Math.floor(t / this.maxElementPixels),
        s = document.createElement("div");s.style[e] = this.maxElementPixels + "px", s.style[i] = "1px";for (var n = 0; n < r; n++) {
      this.sizer.appendChild(s.cloneNode(!1));
    }s.style[e] = t - r * this.maxElementPixels + "px", this.sizer.appendChild(s);
  }
}, VirtualRepeatContainerController.prototype.autoShrink_ = function (t) {
  var e = Math.max(t, this.autoShrinkMin * this.repeater.getItemSize());if (this.autoShrink && e !== this.size) {
    null === this.oldElementSize && (this.oldElementSize = this.$element[0].style[this.getDimensionName_()]);var i = this.originalSize || this.size;if (!i || e < i) this.originalSize || (this.originalSize = this.size), this.setSize_(e);else if (null !== this.originalSize) {
      this.unsetSize_();var r = this.originalSize;this.originalSize = null, r || this.updateSize(), this.setSize_(r || this.size);
    }this.repeater.containerUpdated();
  }
}, VirtualRepeatContainerController.prototype.setScrollSize = function (t) {
  var e = t + this.offsetSize;this.scrollSize !== e && (this.sizeScroller_(e), this.autoShrink_(e), this.scrollSize = e);
}, VirtualRepeatContainerController.prototype.getScrollOffset = function () {
  return this.scrollOffset;
}, VirtualRepeatContainerController.prototype.scrollTo = function (t) {
  this.scroller[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = t, this.handleScroll_();
}, VirtualRepeatContainerController.prototype.scrollToIndex = function (t) {
  var e = this.repeater.getItemSize(),
      i = this.repeater.itemsLength;t > i && (t = i - 1), this.scrollTo(e * t);
}, VirtualRepeatContainerController.prototype.resetScroll = function () {
  this.scrollTo(0);
}, VirtualRepeatContainerController.prototype.handleScroll_ = function () {
  var t = "rtl" != document.dir && "rtl" != document.body.dir;t || this.maxSize || (this.scroller.scrollLeft = this.scrollSize, this.maxSize = this.scroller.scrollLeft);var e = this.isHorizontal() ? t ? this.scroller.scrollLeft : this.maxSize - this.scroller.scrollLeft : this.scroller.scrollTop;if (!(e === this.scrollOffset || e > this.scrollSize - this.size)) {
    var i = this.repeater.getItemSize();if (i) {
      var r = Math.max(0, Math.floor(e / i) - NUM_EXTRA),
          s = (this.isHorizontal() ? "translateX(" : "translateY(") + (!this.isHorizontal() || t ? r * i : -(r * i)) + "px)";if (this.scrollOffset = e, this.offsetter.style.webkitTransform = s, this.offsetter.style.transform = s, this.bindTopIndex) {
        var n = Math.floor(e / i);n !== this.topIndex && n < this.repeater.getItemCount() && (this.topIndex = n, this.bindTopIndex.assign(this.$scope, n), this.$rootScope.$$phase || this.$scope.$digest());
      }this.repeater.containerUpdated();
    }
  }
}, VirtualRepeatController.Block, VirtualRepeatController.prototype.link_ = function (t, e, i, r, s) {
  this.container = t, this.transclude = e, this.repeatName = i, this.rawRepeatListExpression = r, this.extraName = s, this.sized = !1, this.repeatListExpression = angular.bind(this, this.repeatListExpression_), this.container.register(this);
}, VirtualRepeatController.prototype.cleanupBlocks_ = function () {
  angular.forEach(this.pooledBlocks, function (t) {
    t.element.remove();
  });
}, VirtualRepeatController.prototype.readItemSize_ = function () {
  if (!this.itemSize) {
    this.items = this.repeatListExpression(this.$scope), this.parentNode = this.$element[0].parentNode;var t = this.getBlock_(0);t.element[0].parentNode || this.parentNode.appendChild(t.element[0]), this.itemSize = t.element[0][this.container.isHorizontal() ? "offsetWidth" : "offsetHeight"] || null, this.blocks[0] = t, this.poolBlock_(0), this.itemSize && this.containerUpdated();
  }
}, VirtualRepeatController.prototype.repeatListExpression_ = function (t) {
  var e = this.rawRepeatListExpression(t);if (this.onDemand && e) {
    var i = new VirtualRepeatModelArrayLike(e);return i.$$includeIndexes(this.newStartIndex, this.newVisibleEnd), i;
  }return e;
}, VirtualRepeatController.prototype.containerUpdated = function () {
  return this.itemSize ? (this.sized || (this.items = this.repeatListExpression(this.$scope)), this.sized || (this.unwatchItemSize_(), this.sized = !0, this.$scope.$watchCollection(this.repeatListExpression, angular.bind(this, function (t, e) {
    this.isVirtualRepeatUpdating_ || this.virtualRepeatUpdate_(t, e);
  }))), this.updateIndexes_(), void ((this.newStartIndex !== this.startIndex || this.newEndIndex !== this.endIndex || this.container.getScrollOffset() > this.container.getScrollSize()) && (this.items instanceof VirtualRepeatModelArrayLike && this.items.$$includeIndexes(this.newStartIndex, this.newEndIndex), this.virtualRepeatUpdate_(this.items, this.items)))) : (this.unwatchItemSize_ && this.unwatchItemSize_ !== angular.noop && this.unwatchItemSize_(), this.unwatchItemSize_ = this.$scope.$watchCollection(this.repeatListExpression, angular.bind(this, function (t) {
    t && t.length && this.readItemSize_();
  })), void (this.$rootScope.$$phase || this.$scope.$digest()));
}, VirtualRepeatController.prototype.getItemSize = function () {
  return this.itemSize;
}, VirtualRepeatController.prototype.getItemCount = function () {
  return this.itemsLength;
}, VirtualRepeatController.prototype.virtualRepeatUpdate_ = function (t, e) {
  this.isVirtualRepeatUpdating_ = !0;var i = t && t.length || 0,
      r = !1;if (this.items && i < this.items.length && 0 !== this.container.getScrollOffset()) {
    this.items = t;var s = this.container.getScrollOffset();this.container.resetScroll(), this.container.scrollTo(s);
  }if (i !== this.itemsLength && (r = !0, this.itemsLength = i), this.items = t, (t !== e || r) && this.updateIndexes_(), this.parentNode = this.$element[0].parentNode, r && this.container.setScrollSize(i * this.itemSize), this.isFirstRender) {
    this.isFirstRender = !1;var n = this.$attrs.mdStartIndex ? this.$scope.$eval(this.$attrs.mdStartIndex) : this.container.topIndex;this.container.scrollToIndex(n);
  }Object.keys(this.blocks).forEach(function (t) {
    var e = parseInt(t, 10);(e < this.newStartIndex || e >= this.newEndIndex) && this.poolBlock_(e);
  }, this), this.$browser.$$checkUrlChange = angular.noop;var o,
      a,
      l = [],
      h = [];for (o = this.newStartIndex; o < this.newEndIndex && null == this.blocks[o]; o++) {
    a = this.getBlock_(o), this.updateBlock_(a, o), l.push(a);
  }for (; null != this.blocks[o]; o++) {
    this.updateBlock_(this.blocks[o], o);
  }for (var p = o - 1; o < this.newEndIndex; o++) {
    a = this.getBlock_(o), this.updateBlock_(a, o), h.push(a);
  }l.length && this.parentNode.insertBefore(this.domFragmentFromBlocks_(l), this.$element[0].nextSibling), h.length && this.parentNode.insertBefore(this.domFragmentFromBlocks_(h), this.blocks[p] && this.blocks[p].element[0].nextSibling), this.$browser.$$checkUrlChange = this.browserCheckUrlChange, this.startIndex = this.newStartIndex, this.endIndex = this.newEndIndex, this.isVirtualRepeatUpdating_ = !1;
}, VirtualRepeatController.prototype.getBlock_ = function (t) {
  if (this.pooledBlocks.length) return this.pooledBlocks.pop();var e;return this.transclude(angular.bind(this, function (i, r) {
    e = { element: i, "new": !0, scope: r }, this.updateScope_(r, t), this.parentNode.appendChild(i[0]);
  })), e;
}, VirtualRepeatController.prototype.updateBlock_ = function (t, e) {
  this.blocks[e] = t, (t["new"] || t.scope.$index !== e || t.scope[this.repeatName] !== this.items[e]) && (t["new"] = !1, this.updateScope_(t.scope, e), this.$rootScope.$$phase || t.scope.$digest());
}, VirtualRepeatController.prototype.updateScope_ = function (t, e) {
  t.$index = e, t[this.repeatName] = this.items && this.items[e], this.extraName && (t[this.extraName(this.$scope)] = this.items[e]);
}, VirtualRepeatController.prototype.poolBlock_ = function (t) {
  this.pooledBlocks.push(this.blocks[t]), this.parentNode.removeChild(this.blocks[t].element[0]), delete this.blocks[t];
}, VirtualRepeatController.prototype.domFragmentFromBlocks_ = function (t) {
  var e = this.$document[0].createDocumentFragment();return t.forEach(function (t) {
    e.appendChild(t.element[0]);
  }), e;
}, VirtualRepeatController.prototype.updateIndexes_ = function () {
  var t = this.items ? this.items.length : 0,
      e = Math.ceil(this.container.getSize() / this.itemSize);this.newStartIndex = Math.max(0, Math.min(t - e, Math.floor(this.container.getScrollOffset() / this.itemSize))), this.newVisibleEnd = this.newStartIndex + e + NUM_EXTRA, this.newEndIndex = Math.min(t, this.newVisibleEnd), this.newStartIndex = Math.max(0, this.newStartIndex - NUM_EXTRA);
}, VirtualRepeatModelArrayLike.prototype.$$includeIndexes = function (t, e) {
  for (var i = t; i < e; i++) {
    this.hasOwnProperty(i) || (this[i] = this.model.getItemAtIndex(i));
  }this.length = this.model.getLength();
}, ngmaterial.components.virtualRepeat = angular.module("material.components.virtualRepeat");

//# sourceMappingURL=virtualRepeat.min-compiled.js.map