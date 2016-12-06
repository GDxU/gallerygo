'use strict';

/*!
Jasmine-jQuery: a set of jQuery helpers for Jasmine tests.

Version 2.0.2

https://github.com/velesin/jasmine-jquery

Copyright (c) 2010-2014 Wojciech Zawistowski, Travis Jeffery

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

+function (window, jasmine, $) {
  "use strict";

  jasmine.spiedEventsKey = function (selector, eventName) {
    return [$(selector).selector, eventName].toString();
  };

  jasmine.getFixtures = function () {
    return jasmine.currentFixtures_ = jasmine.currentFixtures_ || new jasmine.Fixtures();
  };

  jasmine.getStyleFixtures = function () {
    return jasmine.currentStyleFixtures_ = jasmine.currentStyleFixtures_ || new jasmine.StyleFixtures();
  };

  jasmine.Fixtures = function () {
    this.containerId = 'jasmine-fixtures';
    this.fixturesCache_ = {};
    this.fixturesPath = 'spec/javascripts/fixtures';
  };

  jasmine.Fixtures.prototype.set = function (html) {
    this.cleanUp();
    return this.createContainer_(html);
  };

  jasmine.Fixtures.prototype.appendSet = function (html) {
    this.addToContainer_(html);
  };

  jasmine.Fixtures.prototype.preload = function () {
    this.read.apply(this, arguments);
  };

  jasmine.Fixtures.prototype.load = function () {
    this.cleanUp();
    this.createContainer_(this.read.apply(this, arguments));
  };

  jasmine.Fixtures.prototype.appendLoad = function () {
    this.addToContainer_(this.read.apply(this, arguments));
  };

  jasmine.Fixtures.prototype.read = function () {
    var htmlChunks = [],
        fixtureUrls = arguments;

    for (var urlCount = fixtureUrls.length, urlIndex = 0; urlIndex < urlCount; urlIndex++) {
      htmlChunks.push(this.getFixtureHtml_(fixtureUrls[urlIndex]));
    }

    return htmlChunks.join('');
  };

  jasmine.Fixtures.prototype.clearCache = function () {
    this.fixturesCache_ = {};
  };

  jasmine.Fixtures.prototype.cleanUp = function () {
    $('#' + this.containerId).remove();
  };

  jasmine.Fixtures.prototype.sandbox = function (attributes) {
    var attributesToSet = attributes || {};
    return $('<div id="sandbox" />').attr(attributesToSet);
  };

  jasmine.Fixtures.prototype.createContainer_ = function (html) {
    var container = $('<div>').attr('id', this.containerId).html(html);

    $(document.body).append(container);
    return container;
  };

  jasmine.Fixtures.prototype.addToContainer_ = function (html) {
    var container = $(document.body).find('#' + this.containerId).append(html);

    if (!container.length) {
      this.createContainer_(html);
    }
  };

  jasmine.Fixtures.prototype.getFixtureHtml_ = function (url) {
    if (typeof this.fixturesCache_[url] === 'undefined') {
      this.loadFixtureIntoCache_(url);
    }
    return this.fixturesCache_[url];
  };

  jasmine.Fixtures.prototype.loadFixtureIntoCache_ = function (relativeUrl) {
    var self = this,
        url = this.makeFixtureUrl_(relativeUrl),
        htmlText = '',
        request = $.ajax({
      async: false, // must be synchronous to guarantee that no tests are run before fixture is loaded
      cache: false,
      url: url,
      success: function success(data, status, $xhr) {
        htmlText = $xhr.responseText;
      }
    }).fail(function () {
      throw new Error('Fixture could not be loaded: ' + url + ' (status: ' + status + ', message: ' + errorThrown.message + ')');
    });

    var scripts = $($.parseHTML(htmlText, true)).find('script[src]') || [];

    scripts.each(function () {
      $.ajax({
        async: false, // must be synchronous to guarantee that no tests are run before fixture is loaded
        cache: false,
        dataType: 'script',
        url: $(this).attr('src'),
        success: function success(data, status, $xhr) {
          htmlText += '<script>' + $xhr.responseText + '</script>';
        },
        error: function error(jqXHR, status, errorThrown) {
          throw new Error('Script could not be loaded: ' + scriptSrc + ' (status: ' + status + ', message: ' + errorThrown.message + ')');
        }
      });
    });

    self.fixturesCache_[relativeUrl] = htmlText;
  };

  jasmine.Fixtures.prototype.makeFixtureUrl_ = function (relativeUrl) {
    return this.fixturesPath.match('/$') ? this.fixturesPath + relativeUrl : this.fixturesPath + '/' + relativeUrl;
  };

  jasmine.Fixtures.prototype.proxyCallTo_ = function (methodName, passedArguments) {
    return this[methodName].apply(this, passedArguments);
  };

  jasmine.StyleFixtures = function () {
    this.fixturesCache_ = {};
    this.fixturesNodes_ = [];
    this.fixturesPath = 'spec/javascripts/fixtures';
  };

  jasmine.StyleFixtures.prototype.set = function (css) {
    this.cleanUp();
    this.createStyle_(css);
  };

  jasmine.StyleFixtures.prototype.appendSet = function (css) {
    this.createStyle_(css);
  };

  jasmine.StyleFixtures.prototype.preload = function () {
    this.read_.apply(this, arguments);
  };

  jasmine.StyleFixtures.prototype.load = function () {
    this.cleanUp();
    this.createStyle_(this.read_.apply(this, arguments));
  };

  jasmine.StyleFixtures.prototype.appendLoad = function () {
    this.createStyle_(this.read_.apply(this, arguments));
  };

  jasmine.StyleFixtures.prototype.cleanUp = function () {
    while (this.fixturesNodes_.length) {
      this.fixturesNodes_.pop().remove();
    }
  };

  jasmine.StyleFixtures.prototype.createStyle_ = function (html) {
    var styleText = $('<div></div>').html(html).text(),
        style = $('<style>' + styleText + '</style>');

    this.fixturesNodes_.push(style);
    $('head').append(style);
  };

  jasmine.StyleFixtures.prototype.clearCache = jasmine.Fixtures.prototype.clearCache;
  jasmine.StyleFixtures.prototype.read_ = jasmine.Fixtures.prototype.read;
  jasmine.StyleFixtures.prototype.getFixtureHtml_ = jasmine.Fixtures.prototype.getFixtureHtml_;
  jasmine.StyleFixtures.prototype.loadFixtureIntoCache_ = jasmine.Fixtures.prototype.loadFixtureIntoCache_;
  jasmine.StyleFixtures.prototype.makeFixtureUrl_ = jasmine.Fixtures.prototype.makeFixtureUrl_;
  jasmine.StyleFixtures.prototype.proxyCallTo_ = jasmine.Fixtures.prototype.proxyCallTo_;

  jasmine.getJSONFixtures = function () {
    return jasmine.currentJSONFixtures_ = jasmine.currentJSONFixtures_ || new jasmine.JSONFixtures();
  };

  jasmine.JSONFixtures = function () {
    this.fixturesCache_ = {};
    this.fixturesPath = 'spec/javascripts/fixtures/json';
  };

  jasmine.JSONFixtures.prototype.load = function () {
    this.read.apply(this, arguments);
    return this.fixturesCache_;
  };

  jasmine.JSONFixtures.prototype.read = function () {
    var fixtureUrls = arguments;

    for (var urlCount = fixtureUrls.length, urlIndex = 0; urlIndex < urlCount; urlIndex++) {
      this.getFixtureData_(fixtureUrls[urlIndex]);
    }

    return this.fixturesCache_;
  };

  jasmine.JSONFixtures.prototype.clearCache = function () {
    this.fixturesCache_ = {};
  };

  jasmine.JSONFixtures.prototype.getFixtureData_ = function (url) {
    if (!this.fixturesCache_[url]) this.loadFixtureIntoCache_(url);
    return this.fixturesCache_[url];
  };

  jasmine.JSONFixtures.prototype.loadFixtureIntoCache_ = function (relativeUrl) {
    var self = this,
        url = this.fixturesPath.match('/$') ? this.fixturesPath + relativeUrl : this.fixturesPath + '/' + relativeUrl;

    $.ajax({
      async: false, // must be synchronous to guarantee that no tests are run before fixture is loaded
      cache: false,
      dataType: 'json',
      url: url,
      success: function success(data) {
        self.fixturesCache_[relativeUrl] = data;
      },
      error: function error(jqXHR, status, errorThrown) {
        throw new Error('JSONFixture could not be loaded: ' + url + ' (status: ' + status + ', message: ' + errorThrown.message + ')');
      }
    });
  };

  jasmine.JSONFixtures.prototype.proxyCallTo_ = function (methodName, passedArguments) {
    return this[methodName].apply(this, passedArguments);
  };

  jasmine.jQuery = function () {};

  jasmine.jQuery.browserTagCaseIndependentHtml = function (html) {
    return $('<div/>').append(html).html();
  };

  jasmine.jQuery.elementToString = function (element) {
    return $(element).map(function () {
      return this.outerHTML;
    }).toArray().join(', ');
  };

  var data = {
    spiedEvents: {},
    handlers: []
  };

  jasmine.jQuery.events = {
    spyOn: function spyOn(selector, eventName) {
      var handler = function handler(e) {
        data.spiedEvents[jasmine.spiedEventsKey(selector, eventName)] = jasmine.util.argsToArray(arguments);
      };

      $(selector).on(eventName, handler);
      data.handlers.push(handler);

      return {
        selector: selector,
        eventName: eventName,
        handler: handler,
        reset: function reset() {
          delete data.spiedEvents[jasmine.spiedEventsKey(selector, eventName)];
        }
      };
    },

    args: function args(selector, eventName) {
      var actualArgs = data.spiedEvents[jasmine.spiedEventsKey(selector, eventName)];

      if (!actualArgs) {
        throw "There is no spy for " + eventName + " on " + selector.toString() + ". Make sure to create a spy using spyOnEvent.";
      }

      return actualArgs;
    },

    wasTriggered: function wasTriggered(selector, eventName) {
      return !!data.spiedEvents[jasmine.spiedEventsKey(selector, eventName)];
    },

    wasTriggeredWith: function wasTriggeredWith(selector, eventName, expectedArgs, util, customEqualityTesters) {
      var actualArgs = jasmine.jQuery.events.args(selector, eventName).slice(1);

      if (Object.prototype.toString.call(expectedArgs) !== '[object Array]') actualArgs = actualArgs[0];

      return util.equals(expectedArgs, actualArgs, customEqualityTesters);
    },

    wasPrevented: function wasPrevented(selector, eventName) {
      var args = data.spiedEvents[jasmine.spiedEventsKey(selector, eventName)],
          e = args ? args[0] : undefined;

      return e && e.isDefaultPrevented();
    },

    wasStopped: function wasStopped(selector, eventName) {
      var args = data.spiedEvents[jasmine.spiedEventsKey(selector, eventName)],
          e = args ? args[0] : undefined;
      return e && e.isPropagationStopped();
    },

    cleanUp: function cleanUp() {
      data.spiedEvents = {};
      data.handlers = [];
    }
  };

  var hasProperty = function hasProperty(actualValue, expectedValue) {
    if (expectedValue === undefined) return actualValue !== undefined;

    return actualValue === expectedValue;
  };

  beforeEach(function () {
    jasmine.addMatchers({
      toHaveClass: function toHaveClass() {
        return {
          compare: function compare(actual, className) {
            return { pass: $(actual).hasClass(className) };
          }
        };
      },

      toHaveCss: function toHaveCss() {
        return {
          compare: function compare(actual, css) {
            for (var prop in css) {
              var value = css[prop]
              // see issue #147 on gh
              ;if (value === 'auto' && $(actual).get(0).style[prop] === 'auto') continue;
              if ($(actual).css(prop) !== value) return { pass: false };
            }
            return { pass: true };
          }
        };
      },

      toBeVisible: function toBeVisible() {
        return {
          compare: function compare(actual) {
            return { pass: $(actual).is(':visible') };
          }
        };
      },

      toBeHidden: function toBeHidden() {
        return {
          compare: function compare(actual) {
            return { pass: $(actual).is(':hidden') };
          }
        };
      },

      toBeSelected: function toBeSelected() {
        return {
          compare: function compare(actual) {
            return { pass: $(actual).is(':selected') };
          }
        };
      },

      toBeChecked: function toBeChecked() {
        return {
          compare: function compare(actual) {
            return { pass: $(actual).is(':checked') };
          }
        };
      },

      toBeEmpty: function toBeEmpty() {
        return {
          compare: function compare(actual) {
            return { pass: $(actual).is(':empty') };
          }
        };
      },

      toBeInDOM: function toBeInDOM() {
        return {
          compare: function compare(actual) {
            return { pass: $.contains(document.documentElement, $(actual)[0]) };
          }
        };
      },

      toExist: function toExist() {
        return {
          compare: function compare(actual) {
            return { pass: $(actual).length };
          }
        };
      },

      toHaveLength: function toHaveLength() {
        return {
          compare: function compare(actual, length) {
            return { pass: $(actual).length === length };
          }
        };
      },

      toHaveAttr: function toHaveAttr() {
        return {
          compare: function compare(actual, attributeName, expectedAttributeValue) {
            return { pass: hasProperty($(actual).attr(attributeName), expectedAttributeValue) };
          }
        };
      },

      toHaveProp: function toHaveProp() {
        return {
          compare: function compare(actual, propertyName, expectedPropertyValue) {
            return { pass: hasProperty($(actual).prop(propertyName), expectedPropertyValue) };
          }
        };
      },

      toHaveId: function toHaveId() {
        return {
          compare: function compare(actual, id) {
            return { pass: $(actual).attr('id') == id };
          }
        };
      },

      toHaveHtml: function toHaveHtml() {
        return {
          compare: function compare(actual, html) {
            return { pass: $(actual).html() == jasmine.jQuery.browserTagCaseIndependentHtml(html) };
          }
        };
      },

      toContainHtml: function toContainHtml() {
        return {
          compare: function compare(actual, html) {
            var actualHtml = $(actual).html(),
                expectedHtml = jasmine.jQuery.browserTagCaseIndependentHtml(html);

            return { pass: actualHtml.indexOf(expectedHtml) >= 0 };
          }
        };
      },

      toHaveText: function toHaveText() {
        return {
          compare: function compare(actual, text) {
            var trimmedText = $.trim($(actual).text());

            if (text && $.isFunction(text.test)) {
              return { pass: text.test(trimmedText) };
            } else {
              return { pass: trimmedText == text };
            }
          }
        };
      },

      toContainText: function toContainText() {
        return {
          compare: function compare(actual, text) {
            var trimmedText = $.trim($(actual).text());

            if (text && $.isFunction(text.test)) {
              return { pass: text.test(trimmedText) };
            } else {
              return { pass: trimmedText.indexOf(text) != -1 };
            }
          }
        };
      },

      toHaveValue: function toHaveValue() {
        return {
          compare: function compare(actual, value) {
            return { pass: $(actual).val() === value };
          }
        };
      },

      toHaveData: function toHaveData() {
        return {
          compare: function compare(actual, key, expectedValue) {
            return { pass: hasProperty($(actual).data(key), expectedValue) };
          }
        };
      },

      toContainElement: function toContainElement() {
        return {
          compare: function compare(actual, selector) {
            if (window.debug) debugger;
            return { pass: $(actual).find(selector).length };
          }
        };
      },

      toBeMatchedBy: function toBeMatchedBy() {
        return {
          compare: function compare(actual, selector) {
            return { pass: $(actual).filter(selector).length };
          }
        };
      },

      toBeDisabled: function toBeDisabled() {
        return {
          compare: function compare(actual, selector) {
            return { pass: $(actual).is(':disabled') };
          }
        };
      },

      toBeFocused: function toBeFocused(selector) {
        return {
          compare: function compare(actual, selector) {
            return { pass: $(actual)[0] === $(actual)[0].ownerDocument.activeElement };
          }
        };
      },

      toHandle: function toHandle() {
        return {
          compare: function compare(actual, event) {
            var events = $._data($(actual).get(0), "events");

            if (!events || !event || typeof event !== "string") {
              return { pass: false };
            }

            var namespaces = event.split("."),
                eventType = namespaces.shift(),
                sortedNamespaces = namespaces.slice(0).sort(),
                namespaceRegExp = new RegExp("(^|\\.)" + sortedNamespaces.join("\\.(?:.*\\.)?") + "(\\.|$)");

            if (events[eventType] && namespaces.length) {
              for (var i = 0; i < events[eventType].length; i++) {
                var namespace = events[eventType][i].namespace;

                if (namespaceRegExp.test(namespace)) return { pass: true };
              }
            } else {
              return { pass: events[eventType] && events[eventType].length > 0 };
            }

            return { pass: false };
          }
        };
      },

      toHandleWith: function toHandleWith() {
        return {
          compare: function compare(actual, eventName, eventHandler) {
            var normalizedEventName = eventName.split('.')[0],
                stack = $._data($(actual).get(0), "events")[normalizedEventName];

            for (var i = 0; i < stack.length; i++) {
              if (stack[i].handler == eventHandler) return { pass: true };
            }

            return { pass: false };
          }
        };
      },

      toHaveBeenTriggeredOn: function toHaveBeenTriggeredOn() {
        return {
          compare: function compare(actual, selector) {
            var result = { pass: jasmine.jQuery.events.wasTriggered(selector, actual) };

            result.message = result.pass ? "Expected event " + $(actual) + " not to have been triggered on " + selector : "Expected event " + $(actual) + " to have been triggered on " + selector;

            return result;
          }
        };
      },

      toHaveBeenTriggered: function toHaveBeenTriggered() {
        return {
          compare: function compare(actual) {
            var eventName = actual.eventName,
                selector = actual.selector,
                result = { pass: jasmine.jQuery.events.wasTriggered(selector, eventName) };

            result.message = result.pass ? "Expected event " + eventName + " not to have been triggered on " + selector : "Expected event " + eventName + " to have been triggered on " + selector;

            return result;
          }
        };
      },

      toHaveBeenTriggeredOnAndWith: function toHaveBeenTriggeredOnAndWith(j$, customEqualityTesters) {
        return {
          compare: function compare(actual, selector, expectedArgs) {
            var wasTriggered = jasmine.jQuery.events.wasTriggered(selector, actual),
                result = { pass: wasTriggered && jasmine.jQuery.events.wasTriggeredWith(selector, actual, expectedArgs, j$, customEqualityTesters) };

            if (wasTriggered) {
              var actualArgs = jasmine.jQuery.events.args(selector, actual, expectedArgs)[1];
              result.message = result.pass ? "Expected event " + actual + " not to have been triggered with " + jasmine.pp(expectedArgs) + " but it was triggered with " + jasmine.pp(actualArgs) : "Expected event " + actual + " to have been triggered with " + jasmine.pp(expectedArgs) + "  but it was triggered with " + jasmine.pp(actualArgs);
            } else {
              // todo check on this
              result.message = result.pass ? "Expected event " + actual + " not to have been triggered on " + selector : "Expected event " + actual + " to have been triggered on " + selector;
            }

            return result;
          }
        };
      },

      toHaveBeenPreventedOn: function toHaveBeenPreventedOn() {
        return {
          compare: function compare(actual, selector) {
            var result = { pass: jasmine.jQuery.events.wasPrevented(selector, actual) };

            result.message = result.pass ? "Expected event " + actual + " not to have been prevented on " + selector : "Expected event " + actual + " to have been prevented on " + selector;

            return result;
          }
        };
      },

      toHaveBeenPrevented: function toHaveBeenPrevented() {
        return {
          compare: function compare(actual) {
            var eventName = actual.eventName,
                selector = actual.selector,
                result = { pass: jasmine.jQuery.events.wasPrevented(selector, eventName) };

            result.message = result.pass ? "Expected event " + eventName + " not to have been prevented on " + selector : "Expected event " + eventName + " to have been prevented on " + selector;

            return result;
          }
        };
      },

      toHaveBeenStoppedOn: function toHaveBeenStoppedOn() {
        return {
          compare: function compare(actual, selector) {
            var result = { pass: jasmine.jQuery.events.wasStopped(selector, actual) };

            result.message = result.pass ? "Expected event " + actual + " not to have been stopped on " + selector : "Expected event " + actual + " to have been stopped on " + selector;

            return result;
          }
        };
      },

      toHaveBeenStopped: function toHaveBeenStopped() {
        return {
          compare: function compare(actual) {
            var eventName = actual.eventName,
                selector = actual.selector,
                result = { pass: jasmine.jQuery.events.wasStopped(selector, eventName) };

            result.message = result.pass ? "Expected event " + eventName + " not to have been stopped on " + selector : "Expected event " + eventName + " to have been stopped on " + selector;

            return result;
          }
        };
      }
    });

    jasmine.getEnv().addCustomEqualityTester(function (a, b) {
      if (a && b) {
        if (a instanceof $ || jasmine.isDomNode(a)) {
          var $a = $(a);

          if (b instanceof $) return $a.length == b.length && a.is(b);

          return $a.is(b);
        }

        if (b instanceof $ || jasmine.isDomNode(b)) {
          var $b = $(b);

          if (a instanceof jQuery) return a.length == $b.length && $b.is(a);

          return $(b).is(a);
        }
      }
    });

    jasmine.getEnv().addCustomEqualityTester(function (a, b) {
      if (a instanceof jQuery && b instanceof jQuery && a.size() == b.size()) return a.is(b);
    });
  });

  afterEach(function () {
    jasmine.getFixtures().cleanUp();
    jasmine.getStyleFixtures().cleanUp();
    jasmine.jQuery.events.cleanUp();
  });

  window.readFixtures = function () {
    return jasmine.getFixtures().proxyCallTo_('read', arguments);
  };

  window.preloadFixtures = function () {
    jasmine.getFixtures().proxyCallTo_('preload', arguments);
  };

  window.loadFixtures = function () {
    jasmine.getFixtures().proxyCallTo_('load', arguments);
  };

  window.appendLoadFixtures = function () {
    jasmine.getFixtures().proxyCallTo_('appendLoad', arguments);
  };

  window.setFixtures = function (html) {
    return jasmine.getFixtures().proxyCallTo_('set', arguments);
  };

  window.appendSetFixtures = function () {
    jasmine.getFixtures().proxyCallTo_('appendSet', arguments);
  };

  window.sandbox = function (attributes) {
    return jasmine.getFixtures().sandbox(attributes);
  };

  window.spyOnEvent = function (selector, eventName) {
    return jasmine.jQuery.events.spyOn(selector, eventName);
  };

  window.preloadStyleFixtures = function () {
    jasmine.getStyleFixtures().proxyCallTo_('preload', arguments);
  };

  window.loadStyleFixtures = function () {
    jasmine.getStyleFixtures().proxyCallTo_('load', arguments);
  };

  window.appendLoadStyleFixtures = function () {
    jasmine.getStyleFixtures().proxyCallTo_('appendLoad', arguments);
  };

  window.setStyleFixtures = function (html) {
    jasmine.getStyleFixtures().proxyCallTo_('set', arguments);
  };

  window.appendSetStyleFixtures = function (html) {
    jasmine.getStyleFixtures().proxyCallTo_('appendSet', arguments);
  };

  window.loadJSONFixtures = function () {
    return jasmine.getJSONFixtures().proxyCallTo_('load', arguments);
  };

  window.getJSONFixture = function (url) {
    return jasmine.getJSONFixtures().proxyCallTo_('read', arguments)[url];
  };
}(window, window.jasmine, window.jQuery);

//# sourceMappingURL=jasmine-jquery-compiled.js.map