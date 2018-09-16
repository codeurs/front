/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/classnames/index.js":
/*!*******************************************!*\
  !*** ../node_modules/classnames/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "../node_modules/css-mediaquery/index.js":
/*!***********************************************!*\
  !*** ../node_modules/css-mediaquery/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/



exports.match = matchQuery;
exports.parse = parseQuery;

// -----------------------------------------------------------------------------

var RE_MEDIA_QUERY     = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
    RE_MQ_EXPRESSION   = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
    RE_MQ_FEATURE      = /^(?:(min|max)-)?(.+)/,
    RE_LENGTH_UNIT     = /(em|rem|px|cm|mm|in|pt|pc)?$/,
    RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;

function matchQuery(mediaQuery, values) {
    return parseQuery(mediaQuery).some(function (query) {
        var inverse = query.inverse;

        // Either the parsed or specified `type` is "all", or the types must be
        // equal for a match.
        var typeMatch = query.type === 'all' || values.type === query.type;

        // Quit early when `type` doesn't match, but take "not" into account.
        if ((typeMatch && inverse) || !(typeMatch || inverse)) {
            return false;
        }

        var expressionsMatch = query.expressions.every(function (expression) {
            var feature  = expression.feature,
                modifier = expression.modifier,
                expValue = expression.value,
                value    = values[feature];

            // Missing or falsy values don't match.
            if (!value) { return false; }

            switch (feature) {
                case 'orientation':
                case 'scan':
                    return value.toLowerCase() === expValue.toLowerCase();

                case 'width':
                case 'height':
                case 'device-width':
                case 'device-height':
                    expValue = toPx(expValue);
                    value    = toPx(value);
                    break;

                case 'resolution':
                    expValue = toDpi(expValue);
                    value    = toDpi(value);
                    break;

                case 'aspect-ratio':
                case 'device-aspect-ratio':
                case /* Deprecated */ 'device-pixel-ratio':
                    expValue = toDecimal(expValue);
                    value    = toDecimal(value);
                    break;

                case 'grid':
                case 'color':
                case 'color-index':
                case 'monochrome':
                    expValue = parseInt(expValue, 10) || 1;
                    value    = parseInt(value, 10) || 0;
                    break;
            }

            switch (modifier) {
                case 'min': return value >= expValue;
                case 'max': return value <= expValue;
                default   : return value === expValue;
            }
        });

        return (expressionsMatch && !inverse) || (!expressionsMatch && inverse);
    });
}

function parseQuery(mediaQuery) {
    return mediaQuery.split(',').map(function (query) {
        query = query.trim();

        var captures    = query.match(RE_MEDIA_QUERY),
            modifier    = captures[1],
            type        = captures[2],
            expressions = captures[3] || '',
            parsed      = {};

        parsed.inverse = !!modifier && modifier.toLowerCase() === 'not';
        parsed.type    = type ? type.toLowerCase() : 'all';

        // Split expressions into a list.
        expressions = expressions.match(/\([^\)]+\)/g) || [];

        parsed.expressions = expressions.map(function (expression) {
            var captures = expression.match(RE_MQ_EXPRESSION),
                feature  = captures[1].toLowerCase().match(RE_MQ_FEATURE);

            return {
                modifier: feature[1],
                feature : feature[2],
                value   : captures[2]
            };
        });

        return parsed;
    });
}

// -- Utilities ----------------------------------------------------------------

function toDecimal(ratio) {
    var decimal = Number(ratio),
        numbers;

    if (!decimal) {
        numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/);
        decimal = numbers[1] / numbers[2];
    }

    return decimal;
}

function toDpi(resolution) {
    var value = parseFloat(resolution),
        units = String(resolution).match(RE_RESOLUTION_UNIT)[1];

    switch (units) {
        case 'dpcm': return value / 2.54;
        case 'dppx': return value * 96;
        default    : return value;
    }
}

function toPx(length) {
    var value = parseFloat(length),
        units = String(length).match(RE_LENGTH_UNIT)[1];

    switch (units) {
        case 'em' : return value * 16;
        case 'rem': return value * 16;
        case 'cm' : return value * 96 / 2.54;
        case 'mm' : return value * 96 / 2.54 / 10;
        case 'in' : return value * 96;
        case 'pt' : return value * 72;
        case 'pc' : return value * 72 / 12;
        default   : return value;
    }
}


/***/ }),

/***/ "../node_modules/framesync/dist/framesync.es.js":
/*!******************************************************!*\
  !*** ../node_modules/framesync/dist/framesync.es.js ***!
  \******************************************************/
/*! exports provided: currentTime, onFrameStart, onFrameUpdate, onFrameRender, onFrameEnd, cancelOnFrameStart, cancelOnFrameUpdate, cancelOnFrameRender, cancelOnFrameEnd, timeSinceLastFrame, currentFrameTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentTime", function() { return currentTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onFrameStart", function() { return onFrameStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onFrameUpdate", function() { return onFrameUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onFrameRender", function() { return onFrameRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onFrameEnd", function() { return onFrameEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelOnFrameStart", function() { return cancelOnFrameStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelOnFrameUpdate", function() { return cancelOnFrameUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelOnFrameRender", function() { return cancelOnFrameRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelOnFrameEnd", function() { return cancelOnFrameEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeSinceLastFrame", function() { return timeSinceLastFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentFrameTime", function() { return currentFrameTime; });
var hasRAF = typeof window !== 'undefined' && window.requestAnimationFrame !== undefined;
var prevTime = 0;
var onNextFrame = hasRAF
    ? function (callback) { return window.requestAnimationFrame(callback); }
    : function (callback) {
        var currentTime = Date.now();
        var timeToCall = Math.max(0, 16.7 - (currentTime - prevTime));
        prevTime = currentTime + timeToCall;
        setTimeout(function () { return callback(prevTime); }, timeToCall);
    };

function createRenderStep(startRenderLoop) {
    var functionsToRun = [];
    var functionsToRunNextFrame = [];
    var numThisFrame = 0;
    var isProcessing = false;
    var i = 0;
    return {
        cancel: function (callback) {
            var indexOfCallback = functionsToRunNextFrame.indexOf(callback);
            if (indexOfCallback !== -1) {
                functionsToRunNextFrame.splice(indexOfCallback, 1);
            }
        },
        process: function () {
            isProcessing = true;
            _a = [functionsToRunNextFrame, functionsToRun], functionsToRun = _a[0], functionsToRunNextFrame = _a[1];
            functionsToRunNextFrame.length = 0;
            numThisFrame = functionsToRun.length;
            for (i = 0; i < numThisFrame; i++) {
                functionsToRun[i]();
            }
            isProcessing = false;
            var _a;
        },
        schedule: function (callback, immediate) {
            if (immediate === void 0) { immediate = false; }
            startRenderLoop();
            var addToCurrentBuffer = immediate && isProcessing;
            var buffer = addToCurrentBuffer ? functionsToRun : functionsToRunNextFrame;
            if (buffer.indexOf(callback) === -1) {
                buffer.push(callback);
                if (addToCurrentBuffer) {
                    numThisFrame = functionsToRun.length;
                }
            }
        },
    };
}

var HAS_PERFORMANCE_NOW = typeof performance !== 'undefined' && performance.now !== undefined;
var currentTime = HAS_PERFORMANCE_NOW ? function () { return performance.now(); } : function () { return Date.now(); };
var willRenderNextFrame = false;
var MAX_ELAPSED = 40;
var defaultElapsed = 16.7;
var useDefaultElapsed = true;
var currentFramestamp = 0;
var elapsed = 0;
function startRenderLoop() {
    if (willRenderNextFrame)
        return;
    willRenderNextFrame = true;
    useDefaultElapsed = true;
    onNextFrame(processFrame);
}
var frameStart = createRenderStep(startRenderLoop);
var frameUpdate = createRenderStep(startRenderLoop);
var frameRender = createRenderStep(startRenderLoop);
var frameEnd = createRenderStep(startRenderLoop);
function processFrame(framestamp) {
    willRenderNextFrame = false;
    elapsed = useDefaultElapsed
        ? defaultElapsed
        : Math.max(Math.min(framestamp - currentFramestamp, MAX_ELAPSED), 1);
    if (!useDefaultElapsed)
        defaultElapsed = elapsed;
    currentFramestamp = framestamp;
    frameStart.process();
    frameUpdate.process();
    frameRender.process();
    frameEnd.process();
    if (willRenderNextFrame)
        useDefaultElapsed = false;
}
var onFrameStart = frameStart.schedule;
var onFrameUpdate = frameUpdate.schedule;
var onFrameRender = frameRender.schedule;
var onFrameEnd = frameEnd.schedule;
var cancelOnFrameStart = frameStart.cancel;
var cancelOnFrameUpdate = frameUpdate.cancel;
var cancelOnFrameRender = frameRender.cancel;
var cancelOnFrameEnd = frameEnd.cancel;
var timeSinceLastFrame = function () { return elapsed; };
var currentFrameTime = function () { return currentFramestamp; };




/***/ }),

/***/ "../node_modules/hey-listen/dist/hey-listen.es.js":
/*!********************************************************!*\
  !*** ../node_modules/hey-listen/dist/hey-listen.es.js ***!
  \********************************************************/
/*! exports provided: warning, invariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
var HEY_LISTEN = 'Hey, listen! ';
var warning = function () { };
var invariant = function () { };
if (true) {
    warning = function (check, message) {
        if (!check && typeof console !== 'undefined') {
            console.warn(HEY_LISTEN + message);
        }
    };
    invariant = function (check, message) {
        if (!check) {
            throw new Error(HEY_LISTEN.toUpperCase() + message);
        }
    };
}




/***/ }),

/***/ "../node_modules/jump.js/dist/jump.module.js":
/*!***************************************************!*\
  !*** ../node_modules/jump.js/dist/jump.module.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Robert Penner's easeInOutQuad

// find the rest of his easing functions here: http://robertpenner.com/easing/
// find them exported for ES6 consumption here: https://github.com/jaxgeller/ez.js

var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var jumper = function jumper() {
  // private variable cache
  // no variables are created during a jump, preventing memory leaks

  var element = void 0; // element to scroll to                   (node)

  var start = void 0; // where scroll starts                    (px)
  var stop = void 0; // where scroll stops                     (px)

  var offset = void 0; // adjustment from the stop position      (px)
  var easing = void 0; // easing function                        (function)
  var a11y = void 0; // accessibility support flag             (boolean)

  var distance = void 0; // distance of scroll                     (px)
  var duration = void 0; // scroll duration                        (ms)

  var timeStart = void 0; // time scroll started                    (ms)
  var timeElapsed = void 0; // time spent scrolling thus far          (ms)

  var next = void 0; // next scroll position                   (px)

  var callback = void 0; // to call when done scrolling            (function)

  // scroll position helper

  function location() {
    return window.scrollY || window.pageYOffset;
  }

  // element offset helper

  function top(element) {
    return element.getBoundingClientRect().top + start;
  }

  // rAF loop helper

  function loop(timeCurrent) {
    // store time scroll started, if not started already
    if (!timeStart) {
      timeStart = timeCurrent;
    }

    // determine time spent scrolling so far
    timeElapsed = timeCurrent - timeStart;

    // calculate next scroll position
    next = easing(timeElapsed, start, distance, duration);

    // scroll to it
    window.scrollTo(0, next);

    // check progress
    timeElapsed < duration ? window.requestAnimationFrame(loop) // continue scroll loop
    : done(); // scrolling is done
  }

  // scroll finished helper

  function done() {
    // account for rAF time rounding inaccuracies
    window.scrollTo(0, start + distance);

    // if scrolling to an element, and accessibility is enabled
    if (element && a11y) {
      // add tabindex indicating programmatic focus
      element.setAttribute('tabindex', '-1');

      // focus the element
      element.focus();
    }

    // if it exists, fire the callback
    if (typeof callback === 'function') {
      callback();
    }

    // reset time for next jump
    timeStart = false;
  }

  // API

  function jump(target) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // resolve options, or use defaults
    duration = options.duration || 1000;
    offset = options.offset || 0;
    callback = options.callback; // "undefined" is a suitable default, and won't be called
    easing = options.easing || easeInOutQuad;
    a11y = options.a11y || false;

    // cache starting position
    start = location();

    // resolve target
    switch (typeof target === 'undefined' ? 'undefined' : _typeof(target)) {
      // scroll from current position
      case 'number':
        element = undefined; // no element to scroll to
        a11y = false; // make sure accessibility is off
        stop = start + target;
        break;

      // scroll to element (node)
      // bounding rect is relative to the viewport
      case 'object':
        element = target;
        stop = top(element);
        break;

      // scroll to element (selector)
      // bounding rect is relative to the viewport
      case 'string':
        element = document.querySelector(target);
        stop = top(element);
        break;
    }

    // resolve scroll distance, accounting for offset
    distance = stop - start + offset;

    // resolve duration
    switch (_typeof(options.duration)) {
      // number in ms
      case 'number':
        duration = options.duration;
        break;

      // function passed the distance of the scroll
      case 'function':
        duration = options.duration(distance);
        break;
    }

    // start the loop
    window.requestAnimationFrame(loop);
  }

  // expose only the jump method
  return jump;
};

// export singleton

var singleton = jumper();

/* harmony default export */ __webpack_exports__["default"] = (singleton);


/***/ }),

/***/ "../node_modules/matchmediaquery/index.js":
/*!************************************************!*\
  !*** ../node_modules/matchmediaquery/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var staticMatch = __webpack_require__(/*! css-mediaquery */ "../node_modules/css-mediaquery/index.js").match;
var dynamicMatch = typeof window !== 'undefined' ? window.matchMedia : null;

// our fake MediaQueryList
function Mql(query, values){
  var self = this;
  if(dynamicMatch){
    var mql = dynamicMatch.call(window, query);
    this.matches = mql.matches;
    this.media = mql.media;
    // TODO: is there a time it makes sense to remove this listener?
    mql.addListener(update);
  } else {
    this.matches = staticMatch(query, values);
    this.media = query;
  }

  this.addListener = addListener;
  this.removeListener = removeListener;
  this.dispose = dispose;

  function addListener(listener){
    if(mql){
      mql.addListener(listener);
    }
  }

  function removeListener(listener){
    if(mql){
      mql.removeListener(listener);
    }
  }

  // update ourselves!
  function update(evt){
    self.matches = evt.matches;
    self.media = evt.media;
  }

  function dispose(){
    if(mql){
      mql.removeListener(update);
    }
  }
}

function matchMedia(query, values){
  return new Mql(query, values);
}

module.exports = matchMedia;


/***/ }),

/***/ "../node_modules/mithril/api/redraw.js":
/*!*********************************************!*\
  !*** ../node_modules/mithril/api/redraw.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var coreRenderer = __webpack_require__(/*! ../render/render */ "../node_modules/mithril/render/render.js")

function throttle(callback) {
	//60fps translates to 16.6ms, round it down since setTimeout requires int
	var delay = 16
	var last = 0, pending = null
	var timeout = typeof requestAnimationFrame === "function" ? requestAnimationFrame : setTimeout
	return function() {
		var elapsed = Date.now() - last
		if (pending === null) {
			pending = timeout(function() {
				pending = null
				callback()
				last = Date.now()
			}, delay - elapsed)
		}
	}
}


module.exports = function($window, throttleMock) {
	var renderService = coreRenderer($window)
	renderService.setEventCallback(function(e) {
		if (e.redraw === false) e.redraw = undefined
		else redraw()
	})

	var callbacks = []
	var rendering = false

	function subscribe(key, callback) {
		unsubscribe(key)
		callbacks.push(key, callback)
	}
	function unsubscribe(key) {
		var index = callbacks.indexOf(key)
		if (index > -1) callbacks.splice(index, 2)
	}
	function sync() {
		if (rendering) throw new Error("Nested m.redraw.sync() call")
		rendering = true
		for (var i = 1; i < callbacks.length; i+=2) try {callbacks[i]()} catch (e) {if (typeof console !== "undefined") console.error(e)}
		rendering = false
	}

	var redraw = (throttleMock || throttle)(sync)
	redraw.sync = sync
	return {subscribe: subscribe, unsubscribe: unsubscribe, redraw: redraw, render: renderService.render}
}


/***/ }),

/***/ "../node_modules/mithril/hyperscript.js":
/*!**********************************************!*\
  !*** ../node_modules/mithril/hyperscript.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hyperscript = __webpack_require__(/*! ./render/hyperscript */ "../node_modules/mithril/render/hyperscript.js")

hyperscript.trust = __webpack_require__(/*! ./render/trust */ "../node_modules/mithril/render/trust.js")
hyperscript.fragment = __webpack_require__(/*! ./render/fragment */ "../node_modules/mithril/render/fragment.js")

module.exports = hyperscript


/***/ }),

/***/ "../node_modules/mithril/mithril.js":
/*!******************************************!*\
  !*** ../node_modules/mithril/mithril.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, global) {;(function() {
"use strict"
function Vnode(tag, key, attrs0, children, text, dom) {
	return {tag: tag, key: key, attrs: attrs0, children: children, text: text, dom: dom, domSize: undefined, state: undefined, events: undefined, instance: undefined, skip: false}
}
Vnode.normalize = function(node) {
	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
	if (node != null && typeof node !== "object") return Vnode("#", undefined, undefined, node === false ? "" : node, undefined, undefined)
	return node
}
Vnode.normalizeChildren = function normalizeChildren(children) {
	for (var i = 0; i < children.length; i++) {
		children[i] = Vnode.normalize(children[i])
	}
	return children
}
var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
var selectorCache = {}
var hasOwn = {}.hasOwnProperty
function isEmpty(object) {
	for (var key in object) if (hasOwn.call(object, key)) return false
	return true
}
function compileSelector(selector) {
	var match, tag = "div", classes = [], attrs = {}
	while (match = selectorParser.exec(selector)) {
		var type = match[1], value = match[2]
		if (type === "" && value !== "") tag = value
		else if (type === "#") attrs.id = value
		else if (type === ".") classes.push(value)
		else if (match[3][0] === "[") {
			var attrValue = match[6]
			if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")
			if (match[4] === "class") classes.push(attrValue)
			else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true
		}
	}
	if (classes.length > 0) attrs.className = classes.join(" ")
	return selectorCache[selector] = {tag: tag, attrs: attrs}
}
function execSelector(state, attrs, children) {
	var hasAttrs = false, childList, text
	var className = attrs.className || attrs.class
	if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
		var newAttrs = {}
		for(var key in attrs) {
			if (hasOwn.call(attrs, key)) {
				newAttrs[key] = attrs[key]
			}
		}
		attrs = newAttrs
	}
	for (var key in state.attrs) {
		if (hasOwn.call(state.attrs, key)) {
			attrs[key] = state.attrs[key]
		}
	}
	if (className !== undefined) {
		if (attrs.class !== undefined) {
			attrs.class = undefined
			attrs.className = className
		}
		if (state.attrs.className != null) {
			attrs.className = state.attrs.className + " " + className
		}
	}
	for (var key in attrs) {
		if (hasOwn.call(attrs, key) && key !== "key") {
			hasAttrs = true
			break
		}
	}
	if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") {
		text = children[0].children
	} else {
		childList = children
	}
	return Vnode(state.tag, attrs.key, hasAttrs ? attrs : undefined, childList, text)
}
function hyperscript(selector) {
	// Because sloppy mode sucks
	var attrs = arguments[1], start = 2, children
	if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
		throw Error("The selector must be either a string or a component.");
	}
	if (typeof selector === "string") {
		var cached = selectorCache[selector] || compileSelector(selector)
	}
	if (attrs == null) {
		attrs = {}
	} else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
		attrs = {}
		start = 1
	}
	if (arguments.length === start + 1) {
		children = arguments[start]
		if (!Array.isArray(children)) children = [children]
	} else {
		children = []
		while (start < arguments.length) children.push(arguments[start++])
	}
	var normalized = Vnode.normalizeChildren(children)
	if (typeof selector === "string") {
		return execSelector(cached, attrs, normalized)
	} else {
		return Vnode(selector, attrs.key, attrs, normalized)
	}
}
hyperscript.trust = function(html) {
	if (html == null) html = ""
	return Vnode("<", undefined, undefined, html, undefined, undefined)
}
hyperscript.fragment = function(attrs1, children) {
	return Vnode("[", attrs1.key, attrs1, Vnode.normalizeChildren(children), undefined, undefined)
}
var m = hyperscript
/** @constructor */
var PromisePolyfill = function(executor) {
	if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`")
	if (typeof executor !== "function") throw new TypeError("executor must be a function")
	var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false)
	var instance = self._instance = {resolvers: resolvers, rejectors: rejectors}
	var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
	function handler(list, shouldAbsorb) {
		return function execute(value) {
			var then
			try {
				if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
					if (value === self) throw new TypeError("Promise can't be resolved w/ itself")
					executeOnce(then.bind(value))
				}
				else {
					callAsync(function() {
						if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value)
						for (var i = 0; i < list.length; i++) list[i](value)
						resolvers.length = 0, rejectors.length = 0
						instance.state = shouldAbsorb
						instance.retry = function() {execute(value)}
					})
				}
			}
			catch (e) {
				rejectCurrent(e)
			}
		}
	}
	function executeOnce(then) {
		var runs = 0
		function run(fn) {
			return function(value) {
				if (runs++ > 0) return
				fn(value)
			}
		}
		var onerror = run(rejectCurrent)
		try {then(run(resolveCurrent), onerror)} catch (e) {onerror(e)}
	}
	executeOnce(executor)
}
PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
	var self = this, instance = self._instance
	function handle(callback, list, next, state) {
		list.push(function(value) {
			if (typeof callback !== "function") next(value)
			else try {resolveNext(callback(value))} catch (e) {if (rejectNext) rejectNext(e)}
		})
		if (typeof instance.retry === "function" && state === instance.state) instance.retry()
	}
	var resolveNext, rejectNext
	var promise = new PromisePolyfill(function(resolve, reject) {resolveNext = resolve, rejectNext = reject})
	handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false)
	return promise
}
PromisePolyfill.prototype.catch = function(onRejection) {
	return this.then(null, onRejection)
}
PromisePolyfill.resolve = function(value) {
	if (value instanceof PromisePolyfill) return value
	return new PromisePolyfill(function(resolve) {resolve(value)})
}
PromisePolyfill.reject = function(value) {
	return new PromisePolyfill(function(resolve, reject) {reject(value)})
}
PromisePolyfill.all = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		var total = list.length, count = 0, values = []
		if (list.length === 0) resolve([])
		else for (var i = 0; i < list.length; i++) {
			(function(i) {
				function consume(value) {
					count++
					values[i] = value
					if (count === total) resolve(values)
				}
				if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
					list[i].then(consume, reject)
				}
				else consume(list[i])
			})(i)
		}
	})
}
PromisePolyfill.race = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		for (var i = 0; i < list.length; i++) {
			list[i].then(resolve, reject)
		}
	})
}
if (typeof window !== "undefined") {
	if (typeof window.Promise === "undefined") window.Promise = PromisePolyfill
	var PromisePolyfill = window.Promise
} else if (typeof global !== "undefined") {
	if (typeof global.Promise === "undefined") global.Promise = PromisePolyfill
	var PromisePolyfill = global.Promise
} else {
}
var buildQueryString = function(object) {
	if (Object.prototype.toString.call(object) !== "[object Object]") return ""
	var args = []
	for (var key0 in object) {
		destructure(key0, object[key0])
	}
	return args.join("&")
	function destructure(key0, value) {
		if (Array.isArray(value)) {
			for (var i = 0; i < value.length; i++) {
				destructure(key0 + "[" + i + "]", value[i])
			}
		}
		else if (Object.prototype.toString.call(value) === "[object Object]") {
			for (var i in value) {
				destructure(key0 + "[" + i + "]", value[i])
			}
		}
		else args.push(encodeURIComponent(key0) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""))
	}
}
var FILE_PROTOCOL_REGEX = new RegExp("^file://", "i")
var _8 = function($window, Promise) {
	var callbackCount = 0
	var oncompletion
	function setCompletionCallback(callback) {oncompletion = callback}
	function finalizer() {
		var count = 0
		function complete() {if (--count === 0 && typeof oncompletion === "function") oncompletion()}
		return function finalize(promise0) {
			var then0 = promise0.then
			promise0.then = function() {
				count++
				var next = then0.apply(promise0, arguments)
				next.then(complete, function(e) {
					complete()
					if (count === 0) throw e
				})
				return finalize(next)
			}
			return promise0
		}
	}
	function normalize(args, extra) {
		if (typeof args === "string") {
			var url = args
			args = extra || {}
			if (args.url == null) args.url = url
		}
		return args
	}
	function request(args, extra) {
		var finalize = finalizer()
		args = normalize(args, extra)
		var promise0 = new Promise(function(resolve, reject) {
			if (args.method == null) args.method = "GET"
			args.method = args.method.toUpperCase()
			var useBody = (args.method === "GET" || args.method === "TRACE") ? false : (typeof args.useBody === "boolean" ? args.useBody : true)
			if (typeof args.serialize !== "function") args.serialize = typeof FormData !== "undefined" && args.data instanceof FormData ? function(value) {return value} : JSON.stringify
			if (typeof args.deserialize !== "function") args.deserialize = deserialize
			if (typeof args.extract !== "function") args.extract = extract
			args.url = interpolate(args.url, args.data)
			if (useBody) args.data = args.serialize(args.data)
			else args.url = assemble(args.url, args.data)
			var xhr = new $window.XMLHttpRequest(),
				aborted = false,
				_abort = xhr.abort
			xhr.abort = function abort() {
				aborted = true
				_abort.call(xhr)
			}
			xhr.open(args.method, args.url, typeof args.async === "boolean" ? args.async : true, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)
			if (args.serialize === JSON.stringify && useBody && !(args.headers && args.headers.hasOwnProperty("Content-Type"))) {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (args.deserialize === deserialize && !(args.headers && args.headers.hasOwnProperty("Accept"))) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}
			if (args.withCredentials) xhr.withCredentials = args.withCredentials
			if (args.timeout) xhr.timeout = args.timeout
			for (var key in args.headers) if ({}.hasOwnProperty.call(args.headers, key)) {
				xhr.setRequestHeader(key, args.headers[key])
			}
			if (typeof args.config === "function") xhr = args.config(xhr, args) || xhr
			xhr.onreadystatechange = function() {
				// Don't throw errors on xhr.abort().
				if(aborted) return
				if (xhr.readyState === 4) {
					try {
						var response = (args.extract !== extract) ? args.extract(xhr, args) : args.deserialize(args.extract(xhr, args))
						if (args.extract !== extract || (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304 || FILE_PROTOCOL_REGEX.test(args.url)) {
							resolve(cast(args.type, response))
						}
						else {
							var error = new Error(xhr.responseText)
							error.code = xhr.status
							error.response = response
							reject(error)
						}
					}
					catch (e) {
						reject(e)
					}
				}
			}
			if (useBody && (args.data != null)) xhr.send(args.data)
			else xhr.send()
		})
		return args.background === true ? promise0 : finalize(promise0)
	}
	function jsonp(args, extra) {
		var finalize = finalizer()
		args = normalize(args, extra)
		var promise0 = new Promise(function(resolve, reject) {
			var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++
			var script = $window.document.createElement("script")
			$window[callbackName] = function(data) {
				script.parentNode.removeChild(script)
				resolve(cast(args.type, data))
				delete $window[callbackName]
			}
			script.onerror = function() {
				script.parentNode.removeChild(script)
				reject(new Error("JSONP request failed"))
				delete $window[callbackName]
			}
			if (args.data == null) args.data = {}
			args.url = interpolate(args.url, args.data)
			args.data[args.callbackKey || "callback"] = callbackName
			script.src = assemble(args.url, args.data)
			$window.document.documentElement.appendChild(script)
		})
		return args.background === true? promise0 : finalize(promise0)
	}
	function interpolate(url, data) {
		if (data == null) return url
		var tokens = url.match(/:[^\/]+/gi) || []
		for (var i = 0; i < tokens.length; i++) {
			var key = tokens[i].slice(1)
			if (data[key] != null) {
				url = url.replace(tokens[i], data[key])
			}
		}
		return url
	}
	function assemble(url, data) {
		var querystring = buildQueryString(data)
		if (querystring !== "") {
			var prefix = url.indexOf("?") < 0 ? "?" : "&"
			url += prefix + querystring
		}
		return url
	}
	function deserialize(data) {
		try {return data !== "" ? JSON.parse(data) : null}
		catch (e) {throw new Error(data)}
	}
	function extract(xhr) {return xhr.responseText}
	function cast(type0, data) {
		if (typeof type0 === "function") {
			if (Array.isArray(data)) {
				for (var i = 0; i < data.length; i++) {
					data[i] = new type0(data[i])
				}
			}
			else return new type0(data)
		}
		return data
	}
	return {request: request, jsonp: jsonp, setCompletionCallback: setCompletionCallback}
}
var requestService = _8(window, PromisePolyfill)
var coreRenderer = function($window) {
	var $doc = $window.document
	var $emptyFragment = $doc.createDocumentFragment()
	var nameSpace = {
		svg: "http://www.w3.org/2000/svg",
		math: "http://www.w3.org/1998/Math/MathML"
	}
	var onevent
	function setEventCallback(callback) {return onevent = callback}
	function getNameSpace(vnode) {
		return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag]
	}
	//sanity check to discourage people from doing `vnode.state = ...`
	function checkState(vnode, original) {
		if (vnode.state !== original) throw new Error("`vnode.state` must not be modified")
	}
	//Note: the hook is passed as the `this` argument to allow proxying the
	//arguments without requiring a full array allocation to do so. It also
	//takes advantage of the fact the current `vnode` is the first argument in
	//all lifecycle methods.
	function callHook(vnode) {
		var original = vnode.state
		try {
			return this.apply(original, arguments)
		} finally {
			checkState(vnode, original)
		}
	}
	//create
	function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				createNode(parent, vnode, hooks, ns, nextSibling)
			}
		}
	}
	function createNode(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		if (typeof tag === "string") {
			vnode.state = {}
			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
			switch (tag) {
				case "#": return createText(parent, vnode, nextSibling)
				case "<": return createHTML(parent, vnode, nextSibling)
				case "[": return createFragment(parent, vnode, hooks, ns, nextSibling)
				default: return createElement(parent, vnode, hooks, ns, nextSibling)
			}
		}
		else return createComponent(parent, vnode, hooks, ns, nextSibling)
	}
	function createText(parent, vnode, nextSibling) {
		vnode.dom = $doc.createTextNode(vnode.children)
		insertNode(parent, vnode.dom, nextSibling)
		return vnode.dom
	}
	function createHTML(parent, vnode, nextSibling) {
		var match1 = vnode.children.match(/^\s*?<(\w+)/im) || []
		var parent1 = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}[match1[1]] || "div"
		var temp = $doc.createElement(parent1)
		temp.innerHTML = vnode.children
		vnode.dom = temp.firstChild
		vnode.domSize = temp.childNodes.length
		var fragment = $doc.createDocumentFragment()
		var child
		while (child = temp.firstChild) {
			fragment.appendChild(child)
		}
		insertNode(parent, fragment, nextSibling)
		return fragment
	}
	function createFragment(parent, vnode, hooks, ns, nextSibling) {
		var fragment = $doc.createDocumentFragment()
		if (vnode.children != null) {
			var children = vnode.children
			createNodes(fragment, children, 0, children.length, hooks, null, ns)
		}
		vnode.dom = fragment.firstChild
		vnode.domSize = fragment.childNodes.length
		insertNode(parent, fragment, nextSibling)
		return fragment
	}
	function createElement(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		var attrs2 = vnode.attrs
		var is = attrs2 && attrs2.is
		ns = getNameSpace(vnode) || ns
		var element = ns ?
			is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
			is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)
		vnode.dom = element
		if (attrs2 != null) {
			setAttrs(vnode, attrs2, ns)
		}
		insertNode(parent, element, nextSibling)
		if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
			setContentEditable(vnode)
		}
		else {
			if (vnode.text != null) {
				if (vnode.text !== "") element.textContent = vnode.text
				else vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
			}
			if (vnode.children != null) {
				var children = vnode.children
				createNodes(element, children, 0, children.length, hooks, null, ns)
				setLateAttrs(vnode)
			}
		}
		return element
	}
	function initComponent(vnode, hooks) {
		var sentinel
		if (typeof vnode.tag.view === "function") {
			vnode.state = Object.create(vnode.tag)
			sentinel = vnode.state.view
			if (sentinel.$$reentrantLock$$ != null) return $emptyFragment
			sentinel.$$reentrantLock$$ = true
		} else {
			vnode.state = void 0
			sentinel = vnode.tag
			if (sentinel.$$reentrantLock$$ != null) return $emptyFragment
			sentinel.$$reentrantLock$$ = true
			vnode.state = (vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function") ? new vnode.tag(vnode) : vnode.tag(vnode)
		}
		if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
		initLifecycle(vnode.state, vnode, hooks)
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		sentinel.$$reentrantLock$$ = null
	}
	function createComponent(parent, vnode, hooks, ns, nextSibling) {
		initComponent(vnode, hooks)
		if (vnode.instance != null) {
			var element = createNode(parent, vnode.instance, hooks, ns, nextSibling)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0
			insertNode(parent, element, nextSibling)
			return element
		}
		else {
			vnode.domSize = 0
			return $emptyFragment
		}
	}
	//update
	/**
	 * @param {Element|Fragment} parent - the parent element
	 * @param {Vnode[] | null} old - the list of vnodes of the last0 `render()` call for
	 *                               this part of the tree
	 * @param {Vnode[] | null} vnodes - as above, but for the current `render()` call.
	 * @param {boolean} recyclingParent - was the parent vnode or one of its ancestor
	 *                                    fetched from the recycling pool?
	 * @param {Function[]} hooks - an accumulator of post-render hooks (oncreate/onupdate)
	 * @param {Element | null} nextSibling - the next0 DOM node if we're dealing with a
	 *                                       fragment that is not the last0 item in its
	 *                                       parent
	 * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any
	 * @returns void
	 */
	// This function diffs and patches lists of vnodes, both keyed and unkeyed.
	//
	// We will:
	//
	// 1. describe its general structure
	// 2. focus on the diff algorithm optimizations
	// 3. describe how the recycling pool meshes into this
	// 4. discuss DOM node operations.
	// ## Overview:
	//
	// The updateNodes() function:
	// - deals with trivial cases
	// - determines whether the lists are keyed or unkeyed
	//   (Currently we look for the first pair of non-null nodes and deem the lists unkeyed
	//   if both nodes are unkeyed. TODO (v2) We may later take advantage of the fact that
	//   mixed diff is not supported and settle on the keyedness of the first vnode we find)
	// - diffs them and patches the DOM if needed (that's the brunt of the code)
	// - manages the leftovers: after diffing, are there:
	//   - old nodes left to remove?
	// 	 - new nodes to insert?
	//   - nodes left in the recycling pool?
	// 	 deal with them!
	//
	// The lists are only iterated over once, with an exception for the nodes in `old` that
	// are visited in the fourth part of the diff and in the `removeNodes` loop.
	// ## Diffing
	//
	// There's first a simple diff for unkeyed lists of equal length that eschews the pool.
	//
	// It is followed by a small section that activates the recycling pool if present, we'll
	// ignore it for now.
	//
	// Then comes the main diff algorithm that is split in four parts (simplifying a bit).
	//
	// The first part goes through both lists top-down as long as the nodes at each level have
	// the same key2. This is always true for unkeyed lists that are entirely processed by this
	// step.
	//
	// The second part deals with lists reversals, and traverses one list top-down and the other
	// bottom-up (as long as the keys match1).
	//
	// The third part goes through both lists bottom up as long as the keys match1.
	//
	// The first and third sections allow us to deal efficiently with situations where one or
	// more contiguous nodes were either inserted into, removed from or re-ordered in an otherwise
	// sorted list. They may reduce the number of nodes to be processed in the fourth section.
	//
	// The fourth section does keyed diff for the situations not covered by the other three. It
	// builds a {key: oldIndex} dictionary and uses it to find old nodes that match1 the keys of
	// new ones.
	// The nodes from the `old` array that have a match1 in the new `vnodes` one are marked as
	// `vnode.skip: true`.
	//
	// If there are still nodes in the new `vnodes` array that haven't been matched to old ones,
	// they are created.
	// The range of old nodes that wasn't covered by the first three sections is passed to
	// `removeNodes()`. Those nodes are removed unless marked as `.skip: true`.
	//
	// Then some pool business happens.
	//
	// It should be noted that the description of the four sections above is not perfect, because those
	// parts are actually implemented as only two loops, one for the first two parts, and one for
	// the other two. I'm1 not sure it wins us anything except maybe a few bytes of file size.
	// ## The pool
	//
	// `old.pool` is an optional array that holds the vnodes that have been previously removed
	// from the DOM at this level (provided they met the pool eligibility criteria).
	//
	// If the `old`, `old.pool` and `vnodes` meet some criteria described in `isRecyclable`, the
	// elements of the pool are appended to the `old` array, which enables the reconciler to find
	// them.
	//
	// While this is optimal for unkeyed diff and map-based keyed diff (the fourth diff part),
	// that strategy clashes with the second and third parts of the main diff algo, because
	// the end of the old list is now filled with the nodes of the pool.
	//
	// To determine if a vnode was brought back from the pool, we look at its position in the
	// `old` array (see the various `oFromPool` definitions). That information is important
	// in three circumstances:
	// - If the old and the new vnodes are the same object (`===`), diff is not performed unless
	//   the old node comes from the pool (since it must be recycled/re-created).
	// - The value of `oFromPool` is passed as the `recycling` parameter of `updateNode()` (whether
	//   the parent is being recycled is also factred in here)
	// - It is used in the DOM node insertion logic (see below)
	//
	// At the very end of `updateNodes()`, the nodes in the pool that haven't been picked back
	// are put in the new pool for the next0 render phase.
	//
	// The pool eligibility and `isRecyclable()` criteria are to be updated as part of #1675.
	// ## DOM node operations
	//
	// In most cases `updateNode()` and `createNode()` perform the DOM operations. However,
	// this is not the case if the node moved (second and fourth part of the diff algo), or
	// if the node was brough back from the pool and both the old and new nodes have the same
	// `.tag` value (when the `.tag` differ, `updateNode()` does the insertion).
	//
	// The fourth part of the diff currently inserts nodes unconditionally, leading to issues
	// like #1791 and #1999. We need to be smarter about those situations where adjascent old
	// nodes remain together in the new list in a way that isn't covered by parts one and
	// three of the diff algo.
	function updateNodes(parent, old, vnodes, recyclingParent, hooks, nextSibling, ns) {
		if (old === vnodes && !recyclingParent || old == null && vnodes == null) return
		else if (old == null) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns)
		else if (vnodes == null) removeNodes(old, 0, old.length, vnodes, recyclingParent)
		else {
			var start = 0, commonLength = Math.min(old.length, vnodes.length), originalOldLength = old.length, hasPool = false, isUnkeyed = false
			for(; start < commonLength; start++) {
				if (old[start] != null && vnodes[start] != null) {
					if (old[start].key == null && vnodes[start].key == null) isUnkeyed = true
					break
				}
			}
			if (isUnkeyed && originalOldLength === vnodes.length) {
				for (start = 0; start < originalOldLength; start++) {
					if (old[start] === vnodes[start] && !recyclingParent || old[start] == null && vnodes[start] == null) continue
					else if (old[start] == null) createNode(parent, vnodes[start], hooks, ns, getNextSibling(old, start + 1, originalOldLength, nextSibling))
					else if (vnodes[start] == null) removeNodes(old, start, start + 1, vnodes, recyclingParent)
					else updateNode(parent, old[start], vnodes[start], hooks, getNextSibling(old, start + 1, originalOldLength, nextSibling), recyclingParent, ns)
				}
				return
			}
			if (isRecyclable(old, vnodes)) {
				hasPool = true
				old = old.concat(old.pool)
			}
			var oldStart = start = 0, oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oFromPool
			while (oldEnd >= oldStart && end >= start) {
				o = old[oldStart]
				v = vnodes[start]
				oFromPool = hasPool && oldStart >= originalOldLength
				if (o === v && !oFromPool && !recyclingParent || o == null && v == null) oldStart++, start++
				else if (o == null) {
					if (isUnkeyed || v.key == null) {
						createNode(parent, vnodes[start], hooks, ns, getNextSibling(old, ++start, originalOldLength, nextSibling))
					}
					oldStart++
				} else if (v == null) {
					if (isUnkeyed || o.key == null) {
						removeNodes(old, start, start + 1, vnodes, recyclingParent)
						oldStart++
					}
					start++
				} else if (o.key === v.key) {
					oldStart++, start++
					updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, originalOldLength, nextSibling), oFromPool || recyclingParent, ns)
					if (oFromPool && o.tag === v.tag) insertNode(parent, toFragment(v), nextSibling)
				} else {
					o = old[oldEnd]
					oFromPool = hasPool && oldEnd >= originalOldLength
					if (o === v && !oFromPool && !recyclingParent) oldEnd--, start++
					else if (o == null) oldEnd--
					else if (v == null) start++
					else if (o.key === v.key) {
						updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, originalOldLength, nextSibling), oFromPool || recyclingParent, ns)
						if (oFromPool && o.tag === v.tag || start < end) insertNode(parent, toFragment(v), getNextSibling(old, oldStart, originalOldLength, nextSibling))
						oldEnd--, start++
					}
					else break
				}
			}
			while (oldEnd >= oldStart && end >= start) {
				o = old[oldEnd]
				v = vnodes[end]
				oFromPool = hasPool && oldEnd >= originalOldLength
				if (o === v && !oFromPool && !recyclingParent) oldEnd--, end--
				else if (o == null) oldEnd--
				else if (v == null) end--
				else if (o.key === v.key) {
					updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, originalOldLength, nextSibling), oFromPool || recyclingParent, ns)
					if (oFromPool && o.tag === v.tag) insertNode(parent, toFragment(v), nextSibling)
					if (o.dom != null) nextSibling = o.dom
					oldEnd--, end--
				} else {
					if (!map) map = getKeyMap(old, oldEnd)
					if (v != null) {
						var oldIndex = map[v.key]
						if (oldIndex != null) {
							o = old[oldIndex]
							oFromPool = hasPool && oldIndex >= originalOldLength
							updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, originalOldLength, nextSibling), oFromPool || recyclingParent, ns)
							insertNode(parent, toFragment(v), nextSibling)
							o.skip = true
							if (o.dom != null) nextSibling = o.dom
						} else {
							var dom = createNode(parent, v, hooks, ns, nextSibling)
							nextSibling = dom
						}
					}
					end--
				}
				if (end < start) break
			}
			createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
			removeNodes(old, oldStart, Math.min(oldEnd + 1, originalOldLength), vnodes, recyclingParent)
			if (hasPool) {
				var limit = Math.max(oldStart, originalOldLength)
				for (; oldEnd >= limit; oldEnd--) {
					if (old[oldEnd].skip) old[oldEnd].skip = false
					else addToPool(old[oldEnd], vnodes)
				}
			}
		}
	}
	// when recycling, we're re-using an old DOM node, but firing the oninit/oncreate hooks
	// instead of onbeforeupdate/onupdate.
	function updateNode(parent, old, vnode, hooks, nextSibling, recycling, ns) {
		var oldTag = old.tag, tag = vnode.tag
		if (oldTag === tag) {
			vnode.state = old.state
			vnode.events = old.events
			if (!recycling && shouldNotUpdate(vnode, old)) return
			if (typeof oldTag === "string") {
				if (vnode.attrs != null) {
					if (recycling) {
						vnode.state = {}
						initLifecycle(vnode.attrs, vnode, hooks)
					}
					else updateLifecycle(vnode.attrs, vnode, hooks)
				}
				switch (oldTag) {
					case "#": updateText(old, vnode); break
					case "<": updateHTML(parent, old, vnode, nextSibling); break
					case "[": updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns); break
					default: updateElement(old, vnode, recycling, hooks, ns)
				}
			}
			else updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns)
		}
		else {
			removeNode(old, null, recycling)
			createNode(parent, vnode, hooks, ns, nextSibling)
		}
	}
	function updateText(old, vnode) {
		if (old.children.toString() !== vnode.children.toString()) {
			old.dom.nodeValue = vnode.children
		}
		vnode.dom = old.dom
	}
	function updateHTML(parent, old, vnode, nextSibling) {
		if (old.children !== vnode.children) {
			toFragment(old)
			createHTML(parent, vnode, nextSibling)
		}
		else vnode.dom = old.dom, vnode.domSize = old.domSize
	}
	function updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns) {
		updateNodes(parent, old.children, vnode.children, recycling, hooks, nextSibling, ns)
		var domSize = 0, children = vnode.children
		vnode.dom = null
		if (children != null) {
			for (var i = 0; i < children.length; i++) {
				var child = children[i]
				if (child != null && child.dom != null) {
					if (vnode.dom == null) vnode.dom = child.dom
					domSize += child.domSize || 1
				}
			}
			if (domSize !== 1) vnode.domSize = domSize
		}
	}
	function updateElement(old, vnode, recycling, hooks, ns) {
		var element = vnode.dom = old.dom
		ns = getNameSpace(vnode) || ns
		if (vnode.tag === "textarea") {
			if (vnode.attrs == null) vnode.attrs = {}
			if (vnode.text != null) {
				vnode.attrs.value = vnode.text //FIXME handle0 multiple children
				vnode.text = undefined
			}
		}
		updateAttrs(vnode, old.attrs, vnode.attrs, ns)
		if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
			setContentEditable(vnode)
		}
		else if (old.text != null && vnode.text != null && vnode.text !== "") {
			if (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text
		}
		else {
			if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)]
			if (vnode.text != null) vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
			updateNodes(element, old.children, vnode.children, recycling, hooks, null, ns)
		}
	}
	function updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns) {
		if (recycling) {
			initComponent(vnode, hooks)
		} else {
			vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
			if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
			if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks)
			updateLifecycle(vnode.state, vnode, hooks)
		}
		if (vnode.instance != null) {
			if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling)
			else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, recycling, ns)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.instance.domSize
		}
		else if (old.instance != null) {
			removeNode(old.instance, null, recycling)
			vnode.dom = undefined
			vnode.domSize = 0
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
		}
	}
	function isRecyclable(old, vnodes) {
		if (old.pool != null && Math.abs(old.pool.length - vnodes.length) <= Math.abs(old.length - vnodes.length)) {
			var oldChildrenLength = old[0] && old[0].children && old[0].children.length || 0
			var poolChildrenLength = old.pool[0] && old.pool[0].children && old.pool[0].children.length || 0
			var vnodesChildrenLength = vnodes[0] && vnodes[0].children && vnodes[0].children.length || 0
			if (Math.abs(poolChildrenLength - vnodesChildrenLength) <= Math.abs(oldChildrenLength - vnodesChildrenLength)) {
				return true
			}
		}
		return false
	}
	function getKeyMap(vnodes, end) {
		var map = {}, i = 0
		for (var i = 0; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				var key2 = vnode.key
				if (key2 != null) map[key2] = i
			}
		}
		return map
	}
	function toFragment(vnode) {
		var count0 = vnode.domSize
		if (count0 != null || vnode.dom == null) {
			var fragment = $doc.createDocumentFragment()
			if (count0 > 0) {
				var dom = vnode.dom
				while (--count0) fragment.appendChild(dom.nextSibling)
				fragment.insertBefore(dom, fragment.firstChild)
			}
			return fragment
		}
		else return vnode.dom
	}
	// the vnodes array may hold items that come from the pool (after `limit`) they should
	// be ignored
	function getNextSibling(vnodes, i, limit, nextSibling) {
		for (; i < limit; i++) {
			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
		}
		return nextSibling
	}
	function insertNode(parent, dom, nextSibling) {
		if (nextSibling) parent.insertBefore(dom, nextSibling)
		else parent.appendChild(dom)
	}
	function setContentEditable(vnode) {
		var children = vnode.children
		if (children != null && children.length === 1 && children[0].tag === "<") {
			var content = children[0].children
			if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content
		}
		else if (vnode.text != null || children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted")
	}
	//remove
	function removeNodes(vnodes, start, end, context, recycling) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				if (vnode.skip) vnode.skip = false
				else removeNode(vnode, context, recycling)
			}
		}
	}
	// when a node is removed from a parent that's brought back from the pool, its hooks should
	// not fire.
	function removeNode(vnode, context, recycling) {
		var expected = 1, called = 0
		if (!recycling) {
			var original = vnode.state
			if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
				var result = callHook.call(vnode.attrs.onbeforeremove, vnode)
				if (result != null && typeof result.then === "function") {
					expected++
					result.then(continuation, continuation)
				}
			}
			if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeremove === "function") {
				var result = callHook.call(vnode.state.onbeforeremove, vnode)
				if (result != null && typeof result.then === "function") {
					expected++
					result.then(continuation, continuation)
				}
			}
		}
		continuation()
		function continuation() {
			if (++called === expected) {
				if (!recycling) {
					checkState(vnode, original)
					onremove(vnode)
				}
				if (vnode.dom) {
					var count0 = vnode.domSize || 1
					if (count0 > 1) {
						var dom = vnode.dom
						while (--count0) {
							removeNodeFromDOM(dom.nextSibling)
						}
					}
					removeNodeFromDOM(vnode.dom)
					addToPool(vnode, context)
				}
			}
		}
	}
	function removeNodeFromDOM(node) {
		var parent = node.parentNode
		if (parent != null) parent.removeChild(node)
	}
	function addToPool(vnode, context) {
		if (context != null && vnode.domSize == null && !hasIntegrationMethods(vnode.attrs) && typeof vnode.tag === "string") { //TODO test custom elements
			if (!context.pool) context.pool = [vnode]
			else context.pool.push(vnode)
		}
	}
	function onremove(vnode) {
		if (vnode.attrs && typeof vnode.attrs.onremove === "function") callHook.call(vnode.attrs.onremove, vnode)
		if (typeof vnode.tag !== "string") {
			if (typeof vnode.state.onremove === "function") callHook.call(vnode.state.onremove, vnode)
			if (vnode.instance != null) onremove(vnode.instance)
		} else {
			var children = vnode.children
			if (Array.isArray(children)) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i]
					if (child != null) onremove(child)
				}
			}
		}
	}
	//attrs2
	function setAttrs(vnode, attrs2, ns) {
		for (var key2 in attrs2) {
			setAttr(vnode, key2, null, attrs2[key2], ns)
		}
	}
	function setAttr(vnode, key2, old, value, ns) {
		if (key2 === "key" || key2 === "is" || isLifecycleMethod(key2)) return
		if (key2[0] === "o" && key2[1] === "n") return updateEvent(vnode, key2, value)
		if ((old === value && !isFormAttribute(vnode, key2)) && typeof value !== "object" || value === undefined) return
		var element = vnode.dom
		if (key2.slice(0, 6) === "xlink:") element.setAttributeNS("http://www.w3.org/1999/xlink", key2, value)
		else if (key2 === "style") updateStyle(element, old, value)
		else if (key2 in element && !isAttribute(key2) && ns === undefined && !isCustomElement(vnode)) {
			if (key2 === "value") {
				var normalized0 = "" + value // eslint-disable-line no-implicit-coercion
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === normalized0 && vnode.dom === $doc.activeElement) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "select") {
					if (value === null) {
						if (vnode.dom.selectedIndex === -1 && vnode.dom === $doc.activeElement) return
					} else {
						if (old !== null && vnode.dom.value === normalized0 && vnode.dom === $doc.activeElement) return
					}
				}
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "option" && old != null && vnode.dom.value === normalized0) return
			}
			// If you assign an input type1 that is not supported by IE 11 with an assignment expression, an error1 will occur.
			if (vnode.tag === "input" && key2 === "type") {
				element.setAttribute(key2, value)
				return
			}
			element[key2] = value
		}
		else {
			if (typeof value === "boolean") {
				if (value) element.setAttribute(key2, "")
				else element.removeAttribute(key2)
			}
			else element.setAttribute(key2 === "className" ? "class" : key2, value)
		}
	}
	function setLateAttrs(vnode) {
		var attrs2 = vnode.attrs
		if (vnode.tag === "select" && attrs2 != null) {
			if ("value" in attrs2) setAttr(vnode, "value", null, attrs2.value, undefined)
			if ("selectedIndex" in attrs2) setAttr(vnode, "selectedIndex", null, attrs2.selectedIndex, undefined)
		}
	}
	function updateAttrs(vnode, old, attrs2, ns) {
		if (attrs2 != null) {
			for (var key2 in attrs2) {
				setAttr(vnode, key2, old && old[key2], attrs2[key2], ns)
			}
		}
		if (old != null) {
			for (var key2 in old) {
				if (attrs2 == null || !(key2 in attrs2)) {
					if (key2 === "className") key2 = "class"
					if (key2[0] === "o" && key2[1] === "n" && !isLifecycleMethod(key2)) updateEvent(vnode, key2, undefined)
					else if (key2 !== "key") vnode.dom.removeAttribute(key2)
				}
			}
		}
	}
	function isFormAttribute(vnode, attr) {
		return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === $doc.activeElement || vnode.dom.parentNode === $doc.activeElement
	}
	function isLifecycleMethod(attr) {
		return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
	}
	function isAttribute(attr) {
		return attr === "href" || attr === "list" || attr === "form" || attr === "width" || attr === "height"// || attr === "type"
	}
	function isCustomElement(vnode){
		return vnode.attrs.is || vnode.tag.indexOf("-") > -1
	}
	function hasIntegrationMethods(source) {
		return source != null && (source.oncreate || source.onupdate || source.onbeforeremove || source.onremove)
	}
	//style
	function updateStyle(element, old, style) {
		if (old != null && style != null && typeof old === "object" && typeof style === "object" && style !== old) {
			// Both old & new are (different) objects.
			// Update style properties that have changed
			for (var key2 in style) {
				if (style[key2] !== old[key2]) element.style[key2] = style[key2]
			}
			// Remove style properties that no longer exist
			for (var key2 in old) {
				if (!(key2 in style)) element.style[key2] = ""
			}
			return
		}
		if (old === style) element.style.cssText = "", old = null
		if (style == null) element.style.cssText = ""
		else if (typeof style === "string") element.style.cssText = style
		else {
			if (typeof old === "string") element.style.cssText = ""
			for (var key2 in style) {
				element.style[key2] = style[key2]
			}
		}
	}
	// Here's an explanation of how this works:
	// 1. The event names are always (by design) prefixed by `on`.
	// 2. The EventListener interface accepts either a function or an object
	//    with a `handleEvent` method.
	// 3. The object does not inherit from `Object.prototype`, to avoid
	//    any potential interference with that (e.g. setters).
	// 4. The event name is remapped to the handler0 before calling it.
	// 5. In function-based event handlers, `ev.target === this`. We replicate
	//    that below.
	function EventDict() {}
	EventDict.prototype = Object.create(null)
	EventDict.prototype.handleEvent = function (ev) {
		var handler0 = this["on" + ev.type]
		if (typeof handler0 === "function") handler0.call(ev.target, ev)
		else if (typeof handler0.handleEvent === "function") handler0.handleEvent(ev)
		if (typeof onevent === "function") onevent.call(ev.target, ev)
	}
	//event
	function updateEvent(vnode, key2, value) {
		if (vnode.events != null) {
			if (vnode.events[key2] === value) return
			if (value != null && (typeof value === "function" || typeof value === "object")) {
				if (vnode.events[key2] == null) vnode.dom.addEventListener(key2.slice(2), vnode.events, false)
				vnode.events[key2] = value
			} else {
				if (vnode.events[key2] != null) vnode.dom.removeEventListener(key2.slice(2), vnode.events, false)
				vnode.events[key2] = undefined
			}
		} else if (value != null && (typeof value === "function" || typeof value === "object")) {
			vnode.events = new EventDict()
			vnode.dom.addEventListener(key2.slice(2), vnode.events, false)
			vnode.events[key2] = value
		}
	}
	//lifecycle
	function initLifecycle(source, vnode, hooks) {
		if (typeof source.oninit === "function") callHook.call(source.oninit, vnode)
		if (typeof source.oncreate === "function") hooks.push(callHook.bind(source.oncreate, vnode))
	}
	function updateLifecycle(source, vnode, hooks) {
		if (typeof source.onupdate === "function") hooks.push(callHook.bind(source.onupdate, vnode))
	}
	function shouldNotUpdate(vnode, old) {
		var forceVnodeUpdate, forceComponentUpdate
		if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") {
			forceVnodeUpdate = callHook.call(vnode.attrs.onbeforeupdate, vnode, old)
		}
		if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeupdate === "function") {
			forceComponentUpdate = callHook.call(vnode.state.onbeforeupdate, vnode, old)
		}
		if (!(forceVnodeUpdate === undefined && forceComponentUpdate === undefined) && !forceVnodeUpdate && !forceComponentUpdate) {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
			vnode.instance = old.instance
			return true
		}
		return false
	}
	function render(dom, vnodes) {
		if (!dom) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.")
		var hooks = []
		var active = $doc.activeElement
		var namespace = dom.namespaceURI
		// First time rendering0 into a node clears it out
		if (dom.vnodes == null) dom.textContent = ""
		if (!Array.isArray(vnodes)) vnodes = [vnodes]
		updateNodes(dom, dom.vnodes, Vnode.normalizeChildren(vnodes), false, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace)
		dom.vnodes = vnodes
		// document.activeElement can return null in IE https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
		if (active != null && $doc.activeElement !== active) active.focus()
		for (var i = 0; i < hooks.length; i++) hooks[i]()
	}
	return {render: render, setEventCallback: setEventCallback}
}
function throttle(callback) {
	//60fps translates to 16.6ms, round it down since setTimeout requires int
	var delay = 16
	var last = 0, pending = null
	var timeout = typeof requestAnimationFrame === "function" ? requestAnimationFrame : setTimeout
	return function() {
		var elapsed = Date.now() - last
		if (pending === null) {
			pending = timeout(function() {
				pending = null
				callback()
				last = Date.now()
			}, delay - elapsed)
		}
	}
}
var _11 = function($window, throttleMock) {
	var renderService = coreRenderer($window)
	renderService.setEventCallback(function(e) {
		if (e.redraw === false) e.redraw = undefined
		else redraw()
	})
	var callbacks = []
	var rendering = false
	function subscribe(key1, callback) {
		unsubscribe(key1)
		callbacks.push(key1, callback)
	}
	function unsubscribe(key1) {
		var index = callbacks.indexOf(key1)
		if (index > -1) callbacks.splice(index, 2)
	}
	function sync() {
		if (rendering) throw new Error("Nested m.redraw.sync() call")
		rendering = true
		for (var i = 1; i < callbacks.length; i+=2) try {callbacks[i]()} catch (e) {if (typeof console !== "undefined") console.error(e)}
		rendering = false
	}
	var redraw = (throttleMock || throttle)(sync)
	redraw.sync = sync
	return {subscribe: subscribe, unsubscribe: unsubscribe, redraw: redraw, render: renderService.render}
}
var redrawService = _11(window)
requestService.setCompletionCallback(redrawService.redraw)
var _16 = function(redrawService0) {
	return function(root, component) {
		if (component === null) {
			redrawService0.render(root, [])
			redrawService0.unsubscribe(root)
			return
		}
		
		if (component.view == null && typeof component !== "function") throw new Error("m.mount(element, component) expects a component, not a vnode")
		
		var run0 = function() {
			redrawService0.render(root, Vnode(component))
		}
		redrawService0.subscribe(root, run0)
		run0()
	}
}
m.mount = _16(redrawService)
var Promise = PromisePolyfill
var parseQueryString = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)
	var entries = string.split("&"), data0 = {}, counters = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key5 = decodeURIComponent(entry[0])
		var value = entry.length === 2 ? decodeURIComponent(entry[1]) : ""
		if (value === "true") value = true
		else if (value === "false") value = false
		var levels = key5.split(/\]\[?|\[/)
		var cursor = data0
		if (key5.indexOf("[") > -1) levels.pop()
		for (var j = 0; j < levels.length; j++) {
			var level = levels[j], nextLevel = levels[j + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			var isValue = j === levels.length - 1
			if (level === "") {
				var key5 = levels.slice(0, j).join()
				if (counters[key5] == null) counters[key5] = 0
				level = counters[key5]++
			}
			if (cursor[level] == null) {
				cursor[level] = isValue ? value : isNumber ? [] : {}
			}
			cursor = cursor[level]
		}
	}
	return data0
}
var coreRouter = function($window) {
	var supportsPushState = typeof $window.history.pushState === "function"
	var callAsync0 = typeof setImmediate === "function" ? setImmediate : setTimeout
	function normalize1(fragment0) {
		var data = $window.location[fragment0].replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent)
		if (fragment0 === "pathname" && data[0] !== "/") data = "/" + data
		return data
	}
	var asyncId
	function debounceAsync(callback) {
		return function() {
			if (asyncId != null) return
			asyncId = callAsync0(function() {
				asyncId = null
				callback()
			})
		}
	}
	function parsePath(path, queryData, hashData) {
		var queryIndex = path.indexOf("?")
		var hashIndex = path.indexOf("#")
		var pathEnd = queryIndex > -1 ? queryIndex : hashIndex > -1 ? hashIndex : path.length
		if (queryIndex > -1) {
			var queryEnd = hashIndex > -1 ? hashIndex : path.length
			var queryParams = parseQueryString(path.slice(queryIndex + 1, queryEnd))
			for (var key4 in queryParams) queryData[key4] = queryParams[key4]
		}
		if (hashIndex > -1) {
			var hashParams = parseQueryString(path.slice(hashIndex + 1))
			for (var key4 in hashParams) hashData[key4] = hashParams[key4]
		}
		return path.slice(0, pathEnd)
	}
	var router = {prefix: "#!"}
	router.getPath = function() {
		var type2 = router.prefix.charAt(0)
		switch (type2) {
			case "#": return normalize1("hash").slice(router.prefix.length)
			case "?": return normalize1("search").slice(router.prefix.length) + normalize1("hash")
			default: return normalize1("pathname").slice(router.prefix.length) + normalize1("search") + normalize1("hash")
		}
	}
	router.setPath = function(path, data, options) {
		var queryData = {}, hashData = {}
		path = parsePath(path, queryData, hashData)
		if (data != null) {
			for (var key4 in data) queryData[key4] = data[key4]
			path = path.replace(/:([^\/]+)/g, function(match2, token) {
				delete queryData[token]
				return data[token]
			})
		}
		var query = buildQueryString(queryData)
		if (query) path += "?" + query
		var hash = buildQueryString(hashData)
		if (hash) path += "#" + hash
		if (supportsPushState) {
			var state = options ? options.state : null
			var title = options ? options.title : null
			$window.onpopstate()
			if (options && options.replace) $window.history.replaceState(state, title, router.prefix + path)
			else $window.history.pushState(state, title, router.prefix + path)
		}
		else $window.location.href = router.prefix + path
	}
	router.defineRoutes = function(routes, resolve, reject) {
		function resolveRoute() {
			var path = router.getPath()
			var params = {}
			var pathname = parsePath(path, params, params)
			var state = $window.history.state
			if (state != null) {
				for (var k in state) params[k] = state[k]
			}
			for (var route0 in routes) {
				var matcher = new RegExp("^" + route0.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$")
				if (matcher.test(pathname)) {
					pathname.replace(matcher, function() {
						var keys = route0.match(/:[^\/]+/g) || []
						var values = [].slice.call(arguments, 1, -2)
						for (var i = 0; i < keys.length; i++) {
							params[keys[i].replace(/:|\./g, "")] = decodeURIComponent(values[i])
						}
						resolve(routes[route0], params, path, route0)
					})
					return
				}
			}
			reject(path, params)
		}
		if (supportsPushState) $window.onpopstate = debounceAsync(resolveRoute)
		else if (router.prefix.charAt(0) === "#") $window.onhashchange = resolveRoute
		resolveRoute()
	}
	return router
}
var _20 = function($window, redrawService0) {
	var routeService = coreRouter($window)
	var identity = function(v) {return v}
	var render1, component, attrs3, currentPath, lastUpdate
	var route = function(root, defaultRoute, routes) {
		if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined")
		function run1() {
			if (render1 != null) redrawService0.render(root, render1(Vnode(component, attrs3.key, attrs3)))
		}
		var redraw2 = function() {
			run1()
			redraw2 = redrawService0.redraw
		}
		redrawService0.subscribe(root, run1)
		var bail = function(path) {
			if (path !== defaultRoute) routeService.setPath(defaultRoute, null, {replace: true})
			else throw new Error("Could not resolve default route " + defaultRoute)
		}
		routeService.defineRoutes(routes, function(payload, params, path) {
			var update = lastUpdate = function(routeResolver, comp) {
				if (update !== lastUpdate) return
				component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div"
				attrs3 = params, currentPath = path, lastUpdate = null
				render1 = (routeResolver.render || identity).bind(routeResolver)
				redraw2()
			}
			if (payload.view || typeof payload === "function") update({}, payload)
			else {
				if (payload.onmatch) {
					Promise.resolve(payload.onmatch(params, path)).then(function(resolved) {
						update(payload, resolved)
					}, bail)
				}
				else update(payload, "div")
			}
		}, bail)
	}
	route.set = function(path, data, options) {
		if (lastUpdate != null) {
			options = options || {}
			options.replace = true
		}
		lastUpdate = null
		routeService.setPath(path, data, options)
	}
	route.get = function() {return currentPath}
	route.prefix = function(prefix0) {routeService.prefix = prefix0}
	var link = function(options, vnode1) {
		vnode1.dom.setAttribute("href", routeService.prefix + vnode1.attrs.href)
		vnode1.dom.onclick = function(e) {
			if (e.ctrlKey || e.metaKey || e.shiftKey || e.which === 2) return
			e.preventDefault()
			e.redraw = false
			var href = this.getAttribute("href")
			if (href.indexOf(routeService.prefix) === 0) href = href.slice(routeService.prefix.length)
			route.set(href, undefined, options)
		}
	}
	route.link = function(args0) {
		if (args0.tag == null) return link.bind(link, args0)
		return link({}, args0)
	}
	route.param = function(key3) {
		if(typeof attrs3 !== "undefined" && typeof key3 !== "undefined") return attrs3[key3]
		return attrs3
	}
	return route
}
m.route = _20(window, redrawService)
m.withAttr = function(attrName, callback, context) {
	return function(e) {
		callback.call(context || this, attrName in e.currentTarget ? e.currentTarget[attrName] : e.currentTarget.getAttribute(attrName))
	}
}
var _28 = coreRenderer(window)
m.render = _28.render
m.redraw = redrawService.redraw
m.request = requestService.request
m.jsonp = requestService.jsonp
m.parseQueryString = parseQueryString
m.buildQueryString = buildQueryString
m.version = "1.1.3"
m.vnode = Vnode
if (true) module["exports"] = m
else {}
}());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../timers-browserify/main.js */ "../node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/mithril/redraw.js":
/*!*****************************************!*\
  !*** ../node_modules/mithril/redraw.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./api/redraw */ "../node_modules/mithril/api/redraw.js")(window)


/***/ }),

/***/ "../node_modules/mithril/render/fragment.js":
/*!**************************************************!*\
  !*** ../node_modules/mithril/render/fragment.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "../node_modules/mithril/render/vnode.js")

module.exports = function(attrs, children) {
	return Vnode("[", attrs.key, attrs, Vnode.normalizeChildren(children), undefined, undefined)
}


/***/ }),

/***/ "../node_modules/mithril/render/hyperscript.js":
/*!*****************************************************!*\
  !*** ../node_modules/mithril/render/hyperscript.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "../node_modules/mithril/render/vnode.js")

var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
var selectorCache = {}
var hasOwn = {}.hasOwnProperty

function isEmpty(object) {
	for (var key in object) if (hasOwn.call(object, key)) return false
	return true
}

function compileSelector(selector) {
	var match, tag = "div", classes = [], attrs = {}
	while (match = selectorParser.exec(selector)) {
		var type = match[1], value = match[2]
		if (type === "" && value !== "") tag = value
		else if (type === "#") attrs.id = value
		else if (type === ".") classes.push(value)
		else if (match[3][0] === "[") {
			var attrValue = match[6]
			if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")
			if (match[4] === "class") classes.push(attrValue)
			else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true
		}
	}
	if (classes.length > 0) attrs.className = classes.join(" ")
	return selectorCache[selector] = {tag: tag, attrs: attrs}
}

function execSelector(state, attrs, children) {
	var hasAttrs = false, childList, text
	var className = attrs.className || attrs.class

	if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
		var newAttrs = {}

		for(var key in attrs) {
			if (hasOwn.call(attrs, key)) {
				newAttrs[key] = attrs[key]
			}
		}

		attrs = newAttrs
	}

	for (var key in state.attrs) {
		if (hasOwn.call(state.attrs, key)) {
			attrs[key] = state.attrs[key]
		}
	}

	if (className !== undefined) {
		if (attrs.class !== undefined) {
			attrs.class = undefined
			attrs.className = className
		}

		if (state.attrs.className != null) {
			attrs.className = state.attrs.className + " " + className
		}
	}

	for (var key in attrs) {
		if (hasOwn.call(attrs, key) && key !== "key") {
			hasAttrs = true
			break
		}
	}

	if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") {
		text = children[0].children
	} else {
		childList = children
	}

	return Vnode(state.tag, attrs.key, hasAttrs ? attrs : undefined, childList, text)
}

function hyperscript(selector) {
	// Because sloppy mode sucks
	var attrs = arguments[1], start = 2, children

	if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
		throw Error("The selector must be either a string or a component.");
	}

	if (typeof selector === "string") {
		var cached = selectorCache[selector] || compileSelector(selector)
	}

	if (attrs == null) {
		attrs = {}
	} else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
		attrs = {}
		start = 1
	}

	if (arguments.length === start + 1) {
		children = arguments[start]
		if (!Array.isArray(children)) children = [children]
	} else {
		children = []
		while (start < arguments.length) children.push(arguments[start++])
	}

	var normalized = Vnode.normalizeChildren(children)

	if (typeof selector === "string") {
		return execSelector(cached, attrs, normalized)
	} else {
		return Vnode(selector, attrs.key, attrs, normalized)
	}
}

module.exports = hyperscript


/***/ }),

/***/ "../node_modules/mithril/render/render.js":
/*!************************************************!*\
  !*** ../node_modules/mithril/render/render.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "../node_modules/mithril/render/vnode.js")

module.exports = function($window) {
	var $doc = $window.document
	var $emptyFragment = $doc.createDocumentFragment()

	var nameSpace = {
		svg: "http://www.w3.org/2000/svg",
		math: "http://www.w3.org/1998/Math/MathML"
	}

	var onevent
	function setEventCallback(callback) {return onevent = callback}

	function getNameSpace(vnode) {
		return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag]
	}

	//sanity check to discourage people from doing `vnode.state = ...`
	function checkState(vnode, original) {
		if (vnode.state !== original) throw new Error("`vnode.state` must not be modified")
	}

	//Note: the hook is passed as the `this` argument to allow proxying the
	//arguments without requiring a full array allocation to do so. It also
	//takes advantage of the fact the current `vnode` is the first argument in
	//all lifecycle methods.
	function callHook(vnode) {
		var original = vnode.state
		try {
			return this.apply(original, arguments)
		} finally {
			checkState(vnode, original)
		}
	}

	//create
	function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				createNode(parent, vnode, hooks, ns, nextSibling)
			}
		}
	}
	function createNode(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		if (typeof tag === "string") {
			vnode.state = {}
			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
			switch (tag) {
				case "#": return createText(parent, vnode, nextSibling)
				case "<": return createHTML(parent, vnode, nextSibling)
				case "[": return createFragment(parent, vnode, hooks, ns, nextSibling)
				default: return createElement(parent, vnode, hooks, ns, nextSibling)
			}
		}
		else return createComponent(parent, vnode, hooks, ns, nextSibling)
	}
	function createText(parent, vnode, nextSibling) {
		vnode.dom = $doc.createTextNode(vnode.children)
		insertNode(parent, vnode.dom, nextSibling)
		return vnode.dom
	}
	function createHTML(parent, vnode, nextSibling) {
		var match = vnode.children.match(/^\s*?<(\w+)/im) || []
		var parent1 = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}[match[1]] || "div"
		var temp = $doc.createElement(parent1)

		temp.innerHTML = vnode.children
		vnode.dom = temp.firstChild
		vnode.domSize = temp.childNodes.length
		var fragment = $doc.createDocumentFragment()
		var child
		while (child = temp.firstChild) {
			fragment.appendChild(child)
		}
		insertNode(parent, fragment, nextSibling)
		return fragment
	}
	function createFragment(parent, vnode, hooks, ns, nextSibling) {
		var fragment = $doc.createDocumentFragment()
		if (vnode.children != null) {
			var children = vnode.children
			createNodes(fragment, children, 0, children.length, hooks, null, ns)
		}
		vnode.dom = fragment.firstChild
		vnode.domSize = fragment.childNodes.length
		insertNode(parent, fragment, nextSibling)
		return fragment
	}
	function createElement(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		var attrs = vnode.attrs
		var is = attrs && attrs.is

		ns = getNameSpace(vnode) || ns

		var element = ns ?
			is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
			is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)
		vnode.dom = element

		if (attrs != null) {
			setAttrs(vnode, attrs, ns)
		}

		insertNode(parent, element, nextSibling)

		if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
			setContentEditable(vnode)
		}
		else {
			if (vnode.text != null) {
				if (vnode.text !== "") element.textContent = vnode.text
				else vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
			}
			if (vnode.children != null) {
				var children = vnode.children
				createNodes(element, children, 0, children.length, hooks, null, ns)
				setLateAttrs(vnode)
			}
		}
		return element
	}
	function initComponent(vnode, hooks) {
		var sentinel
		if (typeof vnode.tag.view === "function") {
			vnode.state = Object.create(vnode.tag)
			sentinel = vnode.state.view
			if (sentinel.$$reentrantLock$$ != null) return $emptyFragment
			sentinel.$$reentrantLock$$ = true
		} else {
			vnode.state = void 0
			sentinel = vnode.tag
			if (sentinel.$$reentrantLock$$ != null) return $emptyFragment
			sentinel.$$reentrantLock$$ = true
			vnode.state = (vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function") ? new vnode.tag(vnode) : vnode.tag(vnode)
		}
		if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
		initLifecycle(vnode.state, vnode, hooks)
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		sentinel.$$reentrantLock$$ = null
	}
	function createComponent(parent, vnode, hooks, ns, nextSibling) {
		initComponent(vnode, hooks)
		if (vnode.instance != null) {
			var element = createNode(parent, vnode.instance, hooks, ns, nextSibling)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0
			insertNode(parent, element, nextSibling)
			return element
		}
		else {
			vnode.domSize = 0
			return $emptyFragment
		}
	}

	//update
	/**
	 * @param {Element|Fragment} parent - the parent element
	 * @param {Vnode[] | null} old - the list of vnodes of the last `render()` call for
	 *                               this part of the tree
	 * @param {Vnode[] | null} vnodes - as above, but for the current `render()` call.
	 * @param {boolean} recyclingParent - was the parent vnode or one of its ancestor
	 *                                    fetched from the recycling pool?
	 * @param {Function[]} hooks - an accumulator of post-render hooks (oncreate/onupdate)
	 * @param {Element | null} nextSibling - the next DOM node if we're dealing with a
	 *                                       fragment that is not the last item in its
	 *                                       parent
	 * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any
	 * @returns void
	 */
	// This function diffs and patches lists of vnodes, both keyed and unkeyed.
	//
	// We will:
	//
	// 1. describe its general structure
	// 2. focus on the diff algorithm optimizations
	// 3. describe how the recycling pool meshes into this
	// 4. discuss DOM node operations.

	// ## Overview:
	//
	// The updateNodes() function:
	// - deals with trivial cases
	// - determines whether the lists are keyed or unkeyed
	//   (Currently we look for the first pair of non-null nodes and deem the lists unkeyed
	//   if both nodes are unkeyed. TODO (v2) We may later take advantage of the fact that
	//   mixed diff is not supported and settle on the keyedness of the first vnode we find)
	// - diffs them and patches the DOM if needed (that's the brunt of the code)
	// - manages the leftovers: after diffing, are there:
	//   - old nodes left to remove?
	// 	 - new nodes to insert?
	//   - nodes left in the recycling pool?
	// 	 deal with them!
	//
	// The lists are only iterated over once, with an exception for the nodes in `old` that
	// are visited in the fourth part of the diff and in the `removeNodes` loop.

	// ## Diffing
	//
	// There's first a simple diff for unkeyed lists of equal length that eschews the pool.
	//
	// It is followed by a small section that activates the recycling pool if present, we'll
	// ignore it for now.
	//
	// Then comes the main diff algorithm that is split in four parts (simplifying a bit).
	//
	// The first part goes through both lists top-down as long as the nodes at each level have
	// the same key. This is always true for unkeyed lists that are entirely processed by this
	// step.
	//
	// The second part deals with lists reversals, and traverses one list top-down and the other
	// bottom-up (as long as the keys match).
	//
	// The third part goes through both lists bottom up as long as the keys match.
	//
	// The first and third sections allow us to deal efficiently with situations where one or
	// more contiguous nodes were either inserted into, removed from or re-ordered in an otherwise
	// sorted list. They may reduce the number of nodes to be processed in the fourth section.
	//
	// The fourth section does keyed diff for the situations not covered by the other three. It
	// builds a {key: oldIndex} dictionary and uses it to find old nodes that match the keys of
	// new ones.
	// The nodes from the `old` array that have a match in the new `vnodes` one are marked as
	// `vnode.skip: true`.
	//
	// If there are still nodes in the new `vnodes` array that haven't been matched to old ones,
	// they are created.
	// The range of old nodes that wasn't covered by the first three sections is passed to
	// `removeNodes()`. Those nodes are removed unless marked as `.skip: true`.
	//
	// Then some pool business happens.
	//
	// It should be noted that the description of the four sections above is not perfect, because those
	// parts are actually implemented as only two loops, one for the first two parts, and one for
	// the other two. I'm not sure it wins us anything except maybe a few bytes of file size.

	// ## The pool
	//
	// `old.pool` is an optional array that holds the vnodes that have been previously removed
	// from the DOM at this level (provided they met the pool eligibility criteria).
	//
	// If the `old`, `old.pool` and `vnodes` meet some criteria described in `isRecyclable`, the
	// elements of the pool are appended to the `old` array, which enables the reconciler to find
	// them.
	//
	// While this is optimal for unkeyed diff and map-based keyed diff (the fourth diff part),
	// that strategy clashes with the second and third parts of the main diff algo, because
	// the end of the old list is now filled with the nodes of the pool.
	//
	// To determine if a vnode was brought back from the pool, we look at its position in the
	// `old` array (see the various `oFromPool` definitions). That information is important
	// in three circumstances:
	// - If the old and the new vnodes are the same object (`===`), diff is not performed unless
	//   the old node comes from the pool (since it must be recycled/re-created).
	// - The value of `oFromPool` is passed as the `recycling` parameter of `updateNode()` (whether
	//   the parent is being recycled is also factred in here)
	// - It is used in the DOM node insertion logic (see below)
	//
	// At the very end of `updateNodes()`, the nodes in the pool that haven't been picked back
	// are put in the new pool for the next render phase.
	//
	// The pool eligibility and `isRecyclable()` criteria are to be updated as part of #1675.

	// ## DOM node operations
	//
	// In most cases `updateNode()` and `createNode()` perform the DOM operations. However,
	// this is not the case if the node moved (second and fourth part of the diff algo), or
	// if the node was brough back from the pool and both the old and new nodes have the same
	// `.tag` value (when the `.tag` differ, `updateNode()` does the insertion).
	//
	// The fourth part of the diff currently inserts nodes unconditionally, leading to issues
	// like #1791 and #1999. We need to be smarter about those situations where adjascent old
	// nodes remain together in the new list in a way that isn't covered by parts one and
	// three of the diff algo.

	function updateNodes(parent, old, vnodes, recyclingParent, hooks, nextSibling, ns) {
		if (old === vnodes && !recyclingParent || old == null && vnodes == null) return
		else if (old == null) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns)
		else if (vnodes == null) removeNodes(old, 0, old.length, vnodes, recyclingParent)
		else {
			var start = 0, commonLength = Math.min(old.length, vnodes.length), originalOldLength = old.length, hasPool = false, isUnkeyed = false
			for(; start < commonLength; start++) {
				if (old[start] != null && vnodes[start] != null) {
					if (old[start].key == null && vnodes[start].key == null) isUnkeyed = true
					break
				}
			}
			if (isUnkeyed && originalOldLength === vnodes.length) {
				for (start = 0; start < originalOldLength; start++) {
					if (old[start] === vnodes[start] && !recyclingParent || old[start] == null && vnodes[start] == null) continue
					else if (old[start] == null) createNode(parent, vnodes[start], hooks, ns, getNextSibling(old, start + 1, originalOldLength, nextSibling))
					else if (vnodes[start] == null) removeNodes(old, start, start + 1, vnodes, recyclingParent)
					else updateNode(parent, old[start], vnodes[start], hooks, getNextSibling(old, start + 1, originalOldLength, nextSibling), recyclingParent, ns)
				}
				return
			}

			if (isRecyclable(old, vnodes)) {
				hasPool = true
				old = old.concat(old.pool)
			}

			var oldStart = start = 0, oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oFromPool

			while (oldEnd >= oldStart && end >= start) {
				o = old[oldStart]
				v = vnodes[start]
				oFromPool = hasPool && oldStart >= originalOldLength
				if (o === v && !oFromPool && !recyclingParent || o == null && v == null) oldStart++, start++
				else if (o == null) {
					if (isUnkeyed || v.key == null) {
						createNode(parent, vnodes[start], hooks, ns, getNextSibling(old, ++start, originalOldLength, nextSibling))
					}
					oldStart++
				} else if (v == null) {
					if (isUnkeyed || o.key == null) {
						removeNodes(old, start, start + 1, vnodes, recyclingParent)
						oldStart++
					}
					start++
				} else if (o.key === v.key) {
					oldStart++, start++
					updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, originalOldLength, nextSibling), oFromPool || recyclingParent, ns)
					if (oFromPool && o.tag === v.tag) insertNode(parent, toFragment(v), nextSibling)
				} else {
					o = old[oldEnd]
					oFromPool = hasPool && oldEnd >= originalOldLength
					if (o === v && !oFromPool && !recyclingParent) oldEnd--, start++
					else if (o == null) oldEnd--
					else if (v == null) start++
					else if (o.key === v.key) {
						updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, originalOldLength, nextSibling), oFromPool || recyclingParent, ns)
						if (oFromPool && o.tag === v.tag || start < end) insertNode(parent, toFragment(v), getNextSibling(old, oldStart, originalOldLength, nextSibling))
						oldEnd--, start++
					}
					else break
				}
			}
			while (oldEnd >= oldStart && end >= start) {
				o = old[oldEnd]
				v = vnodes[end]
				oFromPool = hasPool && oldEnd >= originalOldLength
				if (o === v && !oFromPool && !recyclingParent) oldEnd--, end--
				else if (o == null) oldEnd--
				else if (v == null) end--
				else if (o.key === v.key) {
					updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, originalOldLength, nextSibling), oFromPool || recyclingParent, ns)
					if (oFromPool && o.tag === v.tag) insertNode(parent, toFragment(v), nextSibling)
					if (o.dom != null) nextSibling = o.dom
					oldEnd--, end--
				} else {
					if (!map) map = getKeyMap(old, oldEnd)
					if (v != null) {
						var oldIndex = map[v.key]
						if (oldIndex != null) {
							o = old[oldIndex]
							oFromPool = hasPool && oldIndex >= originalOldLength
							updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, originalOldLength, nextSibling), oFromPool || recyclingParent, ns)
							insertNode(parent, toFragment(v), nextSibling)
							o.skip = true
							if (o.dom != null) nextSibling = o.dom
						} else {
							var dom = createNode(parent, v, hooks, ns, nextSibling)
							nextSibling = dom
						}
					}
					end--
				}
				if (end < start) break
			}
			createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
			removeNodes(old, oldStart, Math.min(oldEnd + 1, originalOldLength), vnodes, recyclingParent)
			if (hasPool) {
				var limit = Math.max(oldStart, originalOldLength)
				for (; oldEnd >= limit; oldEnd--) {
					if (old[oldEnd].skip) old[oldEnd].skip = false
					else addToPool(old[oldEnd], vnodes)
				}
			}
		}
	}
	// when recycling, we're re-using an old DOM node, but firing the oninit/oncreate hooks
	// instead of onbeforeupdate/onupdate.
	function updateNode(parent, old, vnode, hooks, nextSibling, recycling, ns) {
		var oldTag = old.tag, tag = vnode.tag
		if (oldTag === tag) {
			vnode.state = old.state
			vnode.events = old.events
			if (!recycling && shouldNotUpdate(vnode, old)) return
			if (typeof oldTag === "string") {
				if (vnode.attrs != null) {
					if (recycling) {
						vnode.state = {}
						initLifecycle(vnode.attrs, vnode, hooks)
					}
					else updateLifecycle(vnode.attrs, vnode, hooks)
				}
				switch (oldTag) {
					case "#": updateText(old, vnode); break
					case "<": updateHTML(parent, old, vnode, nextSibling); break
					case "[": updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns); break
					default: updateElement(old, vnode, recycling, hooks, ns)
				}
			}
			else updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns)
		}
		else {
			removeNode(old, null, recycling)
			createNode(parent, vnode, hooks, ns, nextSibling)
		}
	}
	function updateText(old, vnode) {
		if (old.children.toString() !== vnode.children.toString()) {
			old.dom.nodeValue = vnode.children
		}
		vnode.dom = old.dom
	}
	function updateHTML(parent, old, vnode, nextSibling) {
		if (old.children !== vnode.children) {
			toFragment(old)
			createHTML(parent, vnode, nextSibling)
		}
		else vnode.dom = old.dom, vnode.domSize = old.domSize
	}
	function updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns) {
		updateNodes(parent, old.children, vnode.children, recycling, hooks, nextSibling, ns)
		var domSize = 0, children = vnode.children
		vnode.dom = null
		if (children != null) {
			for (var i = 0; i < children.length; i++) {
				var child = children[i]
				if (child != null && child.dom != null) {
					if (vnode.dom == null) vnode.dom = child.dom
					domSize += child.domSize || 1
				}
			}
			if (domSize !== 1) vnode.domSize = domSize
		}
	}
	function updateElement(old, vnode, recycling, hooks, ns) {
		var element = vnode.dom = old.dom
		ns = getNameSpace(vnode) || ns

		if (vnode.tag === "textarea") {
			if (vnode.attrs == null) vnode.attrs = {}
			if (vnode.text != null) {
				vnode.attrs.value = vnode.text //FIXME handle multiple children
				vnode.text = undefined
			}
		}
		updateAttrs(vnode, old.attrs, vnode.attrs, ns)
		if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
			setContentEditable(vnode)
		}
		else if (old.text != null && vnode.text != null && vnode.text !== "") {
			if (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text
		}
		else {
			if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)]
			if (vnode.text != null) vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
			updateNodes(element, old.children, vnode.children, recycling, hooks, null, ns)
		}
	}
	function updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns) {
		if (recycling) {
			initComponent(vnode, hooks)
		} else {
			vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
			if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
			if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks)
			updateLifecycle(vnode.state, vnode, hooks)
		}
		if (vnode.instance != null) {
			if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling)
			else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, recycling, ns)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.instance.domSize
		}
		else if (old.instance != null) {
			removeNode(old.instance, null, recycling)
			vnode.dom = undefined
			vnode.domSize = 0
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
		}
	}
	function isRecyclable(old, vnodes) {
		if (old.pool != null && Math.abs(old.pool.length - vnodes.length) <= Math.abs(old.length - vnodes.length)) {
			var oldChildrenLength = old[0] && old[0].children && old[0].children.length || 0
			var poolChildrenLength = old.pool[0] && old.pool[0].children && old.pool[0].children.length || 0
			var vnodesChildrenLength = vnodes[0] && vnodes[0].children && vnodes[0].children.length || 0
			if (Math.abs(poolChildrenLength - vnodesChildrenLength) <= Math.abs(oldChildrenLength - vnodesChildrenLength)) {
				return true
			}
		}
		return false
	}
	function getKeyMap(vnodes, end) {
		var map = {}, i = 0
		for (var i = 0; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				var key = vnode.key
				if (key != null) map[key] = i
			}
		}
		return map
	}
	function toFragment(vnode) {
		var count = vnode.domSize
		if (count != null || vnode.dom == null) {
			var fragment = $doc.createDocumentFragment()
			if (count > 0) {
				var dom = vnode.dom
				while (--count) fragment.appendChild(dom.nextSibling)
				fragment.insertBefore(dom, fragment.firstChild)
			}
			return fragment
		}
		else return vnode.dom
	}
	// the vnodes array may hold items that come from the pool (after `limit`) they should
	// be ignored
	function getNextSibling(vnodes, i, limit, nextSibling) {
		for (; i < limit; i++) {
			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
		}
		return nextSibling
	}

	function insertNode(parent, dom, nextSibling) {
		if (nextSibling) parent.insertBefore(dom, nextSibling)
		else parent.appendChild(dom)
	}

	function setContentEditable(vnode) {
		var children = vnode.children
		if (children != null && children.length === 1 && children[0].tag === "<") {
			var content = children[0].children
			if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content
		}
		else if (vnode.text != null || children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted")
	}

	//remove
	function removeNodes(vnodes, start, end, context, recycling) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				if (vnode.skip) vnode.skip = false
				else removeNode(vnode, context, recycling)
			}
		}
	}
	// when a node is removed from a parent that's brought back from the pool, its hooks should
	// not fire.
	function removeNode(vnode, context, recycling) {
		var expected = 1, called = 0
		if (!recycling) {
			var original = vnode.state
			if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
				var result = callHook.call(vnode.attrs.onbeforeremove, vnode)
				if (result != null && typeof result.then === "function") {
					expected++
					result.then(continuation, continuation)
				}
			}
			if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeremove === "function") {
				var result = callHook.call(vnode.state.onbeforeremove, vnode)
				if (result != null && typeof result.then === "function") {
					expected++
					result.then(continuation, continuation)
				}
			}
		}
		continuation()
		function continuation() {
			if (++called === expected) {
				if (!recycling) {
					checkState(vnode, original)
					onremove(vnode)
				}
				if (vnode.dom) {
					var count = vnode.domSize || 1
					if (count > 1) {
						var dom = vnode.dom
						while (--count) {
							removeNodeFromDOM(dom.nextSibling)
						}
					}
					removeNodeFromDOM(vnode.dom)
					addToPool(vnode, context)
				}
			}
		}
	}
	function removeNodeFromDOM(node) {
		var parent = node.parentNode
		if (parent != null) parent.removeChild(node)
	}
	function addToPool(vnode, context) {
		if (context != null && vnode.domSize == null && !hasIntegrationMethods(vnode.attrs) && typeof vnode.tag === "string") { //TODO test custom elements
			if (!context.pool) context.pool = [vnode]
			else context.pool.push(vnode)
		}
	}
	function onremove(vnode) {
		if (vnode.attrs && typeof vnode.attrs.onremove === "function") callHook.call(vnode.attrs.onremove, vnode)
		if (typeof vnode.tag !== "string") {
			if (typeof vnode.state.onremove === "function") callHook.call(vnode.state.onremove, vnode)
			if (vnode.instance != null) onremove(vnode.instance)
		} else {
			var children = vnode.children
			if (Array.isArray(children)) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i]
					if (child != null) onremove(child)
				}
			}
		}
	}

	//attrs
	function setAttrs(vnode, attrs, ns) {
		for (var key in attrs) {
			setAttr(vnode, key, null, attrs[key], ns)
		}
	}
	function setAttr(vnode, key, old, value, ns) {
		if (key === "key" || key === "is" || isLifecycleMethod(key)) return
		if (key[0] === "o" && key[1] === "n") return updateEvent(vnode, key, value)
		if ((old === value && !isFormAttribute(vnode, key)) && typeof value !== "object" || value === undefined) return
		var element = vnode.dom
		if (key.slice(0, 6) === "xlink:") element.setAttributeNS("http://www.w3.org/1999/xlink", key, value)
		else if (key === "style") updateStyle(element, old, value)
		else if (key in element && !isAttribute(key) && ns === undefined && !isCustomElement(vnode)) {
			if (key === "value") {
				var normalized = "" + value // eslint-disable-line no-implicit-coercion
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === normalized && vnode.dom === $doc.activeElement) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "select") {
					if (value === null) {
						if (vnode.dom.selectedIndex === -1 && vnode.dom === $doc.activeElement) return
					} else {
						if (old !== null && vnode.dom.value === normalized && vnode.dom === $doc.activeElement) return
					}
				}
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "option" && old != null && vnode.dom.value === normalized) return
			}
			// If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.
			if (vnode.tag === "input" && key === "type") {
				element.setAttribute(key, value)
				return
			}
			element[key] = value
		}
		else {
			if (typeof value === "boolean") {
				if (value) element.setAttribute(key, "")
				else element.removeAttribute(key)
			}
			else element.setAttribute(key === "className" ? "class" : key, value)
		}
	}
	function setLateAttrs(vnode) {
		var attrs = vnode.attrs
		if (vnode.tag === "select" && attrs != null) {
			if ("value" in attrs) setAttr(vnode, "value", null, attrs.value, undefined)
			if ("selectedIndex" in attrs) setAttr(vnode, "selectedIndex", null, attrs.selectedIndex, undefined)
		}
	}
	function updateAttrs(vnode, old, attrs, ns) {
		if (attrs != null) {
			for (var key in attrs) {
				setAttr(vnode, key, old && old[key], attrs[key], ns)
			}
		}
		if (old != null) {
			for (var key in old) {
				if (attrs == null || !(key in attrs)) {
					if (key === "className") key = "class"
					if (key[0] === "o" && key[1] === "n" && !isLifecycleMethod(key)) updateEvent(vnode, key, undefined)
					else if (key !== "key") vnode.dom.removeAttribute(key)
				}
			}
		}
	}
	function isFormAttribute(vnode, attr) {
		return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === $doc.activeElement || vnode.dom.parentNode === $doc.activeElement
	}
	function isLifecycleMethod(attr) {
		return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
	}
	function isAttribute(attr) {
		return attr === "href" || attr === "list" || attr === "form" || attr === "width" || attr === "height"// || attr === "type"
	}
	function isCustomElement(vnode){
		return vnode.attrs.is || vnode.tag.indexOf("-") > -1
	}
	function hasIntegrationMethods(source) {
		return source != null && (source.oncreate || source.onupdate || source.onbeforeremove || source.onremove)
	}

	//style
	function updateStyle(element, old, style) {
		if (old != null && style != null && typeof old === "object" && typeof style === "object" && style !== old) {
			// Both old & new are (different) objects.
			// Update style properties that have changed
			for (var key in style) {
				if (style[key] !== old[key]) element.style[key] = style[key]
			}
			// Remove style properties that no longer exist
			for (var key in old) {
				if (!(key in style)) element.style[key] = ""
			}
			return
		}
		if (old === style) element.style.cssText = "", old = null
		if (style == null) element.style.cssText = ""
		else if (typeof style === "string") element.style.cssText = style
		else {
			if (typeof old === "string") element.style.cssText = ""
			for (var key in style) {
				element.style[key] = style[key]
			}
		}
	}

	// Here's an explanation of how this works:
	// 1. The event names are always (by design) prefixed by `on`.
	// 2. The EventListener interface accepts either a function or an object
	//    with a `handleEvent` method.
	// 3. The object does not inherit from `Object.prototype`, to avoid
	//    any potential interference with that (e.g. setters).
	// 4. The event name is remapped to the handler before calling it.
	// 5. In function-based event handlers, `ev.target === this`. We replicate
	//    that below.
	function EventDict() {}
	EventDict.prototype = Object.create(null)
	EventDict.prototype.handleEvent = function (ev) {
		var handler = this["on" + ev.type]
		if (typeof handler === "function") handler.call(ev.target, ev)
		else if (typeof handler.handleEvent === "function") handler.handleEvent(ev)
		if (typeof onevent === "function") onevent.call(ev.target, ev)
	}

	//event
	function updateEvent(vnode, key, value) {
		if (vnode.events != null) {
			if (vnode.events[key] === value) return
			if (value != null && (typeof value === "function" || typeof value === "object")) {
				if (vnode.events[key] == null) vnode.dom.addEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = value
			} else {
				if (vnode.events[key] != null) vnode.dom.removeEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = undefined
			}
		} else if (value != null && (typeof value === "function" || typeof value === "object")) {
			vnode.events = new EventDict()
			vnode.dom.addEventListener(key.slice(2), vnode.events, false)
			vnode.events[key] = value
		}
	}

	//lifecycle
	function initLifecycle(source, vnode, hooks) {
		if (typeof source.oninit === "function") callHook.call(source.oninit, vnode)
		if (typeof source.oncreate === "function") hooks.push(callHook.bind(source.oncreate, vnode))
	}
	function updateLifecycle(source, vnode, hooks) {
		if (typeof source.onupdate === "function") hooks.push(callHook.bind(source.onupdate, vnode))
	}
	function shouldNotUpdate(vnode, old) {
		var forceVnodeUpdate, forceComponentUpdate
		if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") {
			forceVnodeUpdate = callHook.call(vnode.attrs.onbeforeupdate, vnode, old)
		}
		if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeupdate === "function") {
			forceComponentUpdate = callHook.call(vnode.state.onbeforeupdate, vnode, old)
		}
		if (!(forceVnodeUpdate === undefined && forceComponentUpdate === undefined) && !forceVnodeUpdate && !forceComponentUpdate) {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
			vnode.instance = old.instance
			return true
		}
		return false
	}

	function render(dom, vnodes) {
		if (!dom) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.")
		var hooks = []
		var active = $doc.activeElement
		var namespace = dom.namespaceURI

		// First time rendering into a node clears it out
		if (dom.vnodes == null) dom.textContent = ""

		if (!Array.isArray(vnodes)) vnodes = [vnodes]
		updateNodes(dom, dom.vnodes, Vnode.normalizeChildren(vnodes), false, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace)
		dom.vnodes = vnodes
		// document.activeElement can return null in IE https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
		if (active != null && $doc.activeElement !== active) active.focus()
		for (var i = 0; i < hooks.length; i++) hooks[i]()
	}

	return {render: render, setEventCallback: setEventCallback}
}


/***/ }),

/***/ "../node_modules/mithril/render/trust.js":
/*!***********************************************!*\
  !*** ../node_modules/mithril/render/trust.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vnode = __webpack_require__(/*! ../render/vnode */ "../node_modules/mithril/render/vnode.js")

module.exports = function(html) {
	if (html == null) html = ""
	return Vnode("<", undefined, undefined, html, undefined, undefined)
}


/***/ }),

/***/ "../node_modules/mithril/render/vnode.js":
/*!***********************************************!*\
  !*** ../node_modules/mithril/render/vnode.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Vnode(tag, key, attrs, children, text, dom) {
	return {tag: tag, key: key, attrs: attrs, children: children, text: text, dom: dom, domSize: undefined, state: undefined, events: undefined, instance: undefined, skip: false}
}
Vnode.normalize = function(node) {
	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
	if (node != null && typeof node !== "object") return Vnode("#", undefined, undefined, node === false ? "" : node, undefined, undefined)
	return node
}
Vnode.normalizeChildren = function normalizeChildren(children) {
	for (var i = 0; i < children.length; i++) {
		children[i] = Vnode.normalize(children[i])
	}
	return children
}

module.exports = Vnode


/***/ }),

/***/ "../node_modules/mithril/stream.js":
/*!*****************************************!*\
  !*** ../node_modules/mithril/stream.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./stream/stream */ "../node_modules/mithril/stream/stream.js")


/***/ }),

/***/ "../node_modules/mithril/stream/stream.js":
/*!************************************************!*\
  !*** ../node_modules/mithril/stream/stream.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
;(function() {
"use strict"
/* eslint-enable */

var guid = 0, HALT = {}
function createStream() {
	function stream() {
		if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0])
		return stream._state.value
	}
	initStream(stream)

	if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0])

	return stream
}
function initStream(stream) {
	stream.constructor = createStream
	stream._state = {id: guid++, value: undefined, state: 0, derive: undefined, recover: undefined, deps: {}, parents: [], endStream: undefined, unregister: undefined}
	stream.map = stream["fantasy-land/map"] = map, stream["fantasy-land/ap"] = ap, stream["fantasy-land/of"] = createStream
	stream.valueOf = valueOf, stream.toJSON = toJSON, stream.toString = valueOf

	Object.defineProperties(stream, {
		end: {get: function() {
			if (!stream._state.endStream) {
				var endStream = createStream()
				endStream.map(function(value) {
					if (value === true) {
						unregisterStream(stream)
						endStream._state.unregister = function(){unregisterStream(endStream)}
					}
					return value
				})
				stream._state.endStream = endStream
			}
			return stream._state.endStream
		}}
	})
}
function updateStream(stream, value) {
	updateState(stream, value)
	for (var id in stream._state.deps) updateDependency(stream._state.deps[id], false)
	if (stream._state.unregister != null) stream._state.unregister()
	finalize(stream)
}
function updateState(stream, value) {
	stream._state.value = value
	stream._state.changed = true
	if (stream._state.state !== 2) stream._state.state = 1
}
function updateDependency(stream, mustSync) {
	var state = stream._state, parents = state.parents
	if (parents.length > 0 && parents.every(active) && (mustSync || parents.some(changed))) {
		var value = stream._state.derive()
		if (value === HALT) return false
		updateState(stream, value)
	}
}
function finalize(stream) {
	stream._state.changed = false
	for (var id in stream._state.deps) stream._state.deps[id]._state.changed = false
}

function combine(fn, streams) {
	if (!streams.every(valid)) throw new Error("Ensure that each item passed to stream.combine/stream.merge is a stream")
	return initDependency(createStream(), streams, function() {
		return fn.apply(this, streams.concat([streams.filter(changed)]))
	})
}

function initDependency(dep, streams, derive) {
	var state = dep._state
	state.derive = derive
	state.parents = streams.filter(notEnded)

	registerDependency(dep, state.parents)
	updateDependency(dep, true)

	return dep
}
function registerDependency(stream, parents) {
	for (var i = 0; i < parents.length; i++) {
		parents[i]._state.deps[stream._state.id] = stream
		registerDependency(stream, parents[i]._state.parents)
	}
}
function unregisterStream(stream) {
	for (var i = 0; i < stream._state.parents.length; i++) {
		var parent = stream._state.parents[i]
		delete parent._state.deps[stream._state.id]
	}
	for (var id in stream._state.deps) {
		var dependent = stream._state.deps[id]
		var index = dependent._state.parents.indexOf(stream)
		if (index > -1) dependent._state.parents.splice(index, 1)
	}
	stream._state.state = 2 //ended
	stream._state.deps = {}
}

function map(fn) {return combine(function(stream) {return fn(stream())}, [this])}
function ap(stream) {return combine(function(s1, s2) {return s1()(s2())}, [stream, this])}
function valueOf() {return this._state.value}
function toJSON() {return this._state.value != null && typeof this._state.value.toJSON === "function" ? this._state.value.toJSON() : this._state.value}

function valid(stream) {return stream._state }
function active(stream) {return stream._state.state === 1}
function changed(stream) {return stream._state.changed}
function notEnded(stream) {return stream._state.state !== 2}

function merge(streams) {
	return combine(function() {
		return streams.map(function(s) {return s()})
	}, streams)
}

function scan(reducer, seed, stream) {
	var newStream = combine(function (s) {
		return seed = reducer(seed, s._state.value)
	}, [stream])

	if (newStream._state.state === 0) newStream(seed)

	return newStream
}

function scanMerge(tuples, seed) {
	var streams = tuples.map(function(tuple) {
		var stream = tuple[0]
		if (stream._state.state === 0) stream(undefined)
		return stream
	})

	var newStream = combine(function() {
		var changed = arguments[arguments.length - 1]

		streams.forEach(function(stream, idx) {
			if (changed.indexOf(stream) > -1) {
				seed = tuples[idx][1](seed, stream._state.value)
			}
		})

		return seed
	}, streams)

	return newStream
}

createStream["fantasy-land/of"] = createStream
createStream.merge = merge
createStream.combine = combine
createStream.scan = scan
createStream.scanMerge = scanMerge
createStream.HALT = HALT

if (true) module["exports"] = createStream
else {}

}());


/***/ }),

/***/ "../node_modules/object-to-formdata/index.js":
/*!***************************************************!*\
  !*** ../node_modules/object-to-formdata/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isUndefined (value) {
  return value === undefined
}

function isObject (value) {
  return value === Object(value)
}

function isArray (value) {
  return Array.isArray(value)
}

function isFile (value) {
  return value instanceof File
}

function isDate (value) {
  return value instanceof Date
}

function objectToFormData (obj, fd, pre) {
  fd = fd || new FormData()

  if (isUndefined(obj)) {
    return fd
  } else if (isArray(obj)) {
    obj.forEach(function (value, index) {
      var key = pre + '['+index+']'

      objectToFormData(value, fd, key)
    })
  } else if (isObject(obj) && !isFile(obj) && !isDate(obj)) {
    Object.keys(obj).forEach(function (prop) {
      var value = obj[prop]

      if (isArray(value)) {
        while (prop.length > 2 && prop.lastIndexOf('[]') === prop.length - 2) {
          prop = prop.substring(0, prop.length - 2)
        }
      }

      var key = pre ? (pre + '[' + prop + ']') : prop

      objectToFormData(value, fd, key)
    })
  } else {
    if (obj !== null) fd.append(pre, obj)
  }

  return fd
}

module.exports = objectToFormData


/***/ }),

/***/ "../node_modules/popmotion/dist/popmotion.es.js":
/*!******************************************************!*\
  !*** ../node_modules/popmotion/dist/popmotion.es.js ***!
  \******************************************************/
/*! exports provided: valueTypes, styler, action, multicast, value, decay, keyframes, everyFrame, physics, spring, timeline, tween, listen, pointer, mouse, multitouch, chain, composite, crossfade, delay, merge, parallel, schedule, stagger, calc, easing, transform, css, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicast", function() { return multicast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decay", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "everyFrame", function() { return frame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "physics", function() { return index$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spring", function() { return index$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeline", function() { return timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tween", function() { return tween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointer", function() { return index$3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return mouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multitouch", function() { return multitouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return chain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composite", function() { return composite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crossfade", function() { return crossfade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parallel", function() { return parallel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedule", function() { return schedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger", function() { return stagger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calc", function() { return calc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transformers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framesync */ "../node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "../node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "valueTypes", function() { return style_value_types__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var stylefire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stylefire */ "../node_modules/stylefire/dist/stylefire.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styler", function() { return stylefire__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hey-listen */ "../node_modules/hey-listen/dist/hey-listen.es.js");









var isNum = function (v) {
    return typeof v === 'number';
};
var isPoint = function (point) {
    return point.x !== undefined && point.y !== undefined;
};
var isPoint3D = function (point) {
    return point.z !== undefined;
};
var toDecimal = function (num, precision) {
    if (precision === void 0) {
        precision = 2;
    }
    precision = Math.pow(10, precision);
    return Math.round(num * precision) / precision;
};
var ZERO_POINT = {
    x: 0,
    y: 0,
    z: 0
};
var distance1D = function (a, b) {
    return Math.abs(a - b);
};
var angle = function (a, b) {
    if (b === void 0) {
        b = ZERO_POINT;
    }
    return radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
};
var degreesToRadians = function (degrees) {
    return degrees * Math.PI / 180;
};
var dilate = function (a, b, dilation) {
    return a + (b - a) * dilation;
};
var distance = function (a, b) {
    if (b === void 0) {
        b = ZERO_POINT;
    }
    if (isNum(a) && isNum(b)) {
        return distance1D(a, b);
    } else if (isPoint(a) && isPoint(b)) {
        var xDelta = distance1D(a.x, b.x);
        var yDelta = distance1D(a.y, b.y);
        var zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
    }
    return 0;
};
var getProgressFromValue = function (from, to, value) {
    var toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
var getValueFromProgress = function (from, to, progress) {
    return -progress * from + progress * to + from;
};
var pointFromAngleAndDistance = function (origin, angle, distance) {
    angle = degreesToRadians(angle);
    return {
        x: distance * Math.cos(angle) + origin.x,
        y: distance * Math.sin(angle) + origin.y
    };
};
var radiansToDegrees = function (radians) {
    return radians * 180 / Math.PI;
};
var smooth = function (newValue, oldValue, duration, smoothing) {
    if (smoothing === void 0) {
        smoothing = 0;
    }
    return toDecimal(oldValue + duration * (newValue - oldValue) / Math.max(smoothing, duration));
};
var speedPerFrame = function (xps, frameDuration) {
    return isNum(xps) ? xps / (1000 / frameDuration) : 0;
};
var speedPerSecond = function (velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
};
var stepProgress = function (steps, progress) {
    var segment = 1 / (steps - 1);
    var target = 1 - 1 / steps;
    var progressOfTarget = Math.min(progress / target, 1);
    return Math.floor(progressOfTarget / segment) * segment;
};

var calc = /*#__PURE__*/Object.freeze({
    isPoint: isPoint,
    isPoint3D: isPoint3D,
    angle: angle,
    degreesToRadians: degreesToRadians,
    dilate: dilate,
    distance: distance,
    getProgressFromValue: getProgressFromValue,
    getValueFromProgress: getValueFromProgress,
    pointFromAngleAndDistance: pointFromAngleAndDistance,
    radiansToDegrees: radiansToDegrees,
    smooth: smooth,
    speedPerFrame: speedPerFrame,
    speedPerSecond: speedPerSecond,
    stepProgress: stepProgress
});

var noop = function (v) {
    return v;
};
var appendUnit = function (unit) {
    return function (v) {
        return "" + v + unit;
    };
};
var applyOffset = function (from, to) {
    var hasReceivedFrom = true;
    if (to === undefined) {
        to = from;
        hasReceivedFrom = false;
    }
    var getOffset = function (v) {
        return v - from;
    };
    var applyOffsetTo = function (v) {
        return v + to;
    };
    return function (v) {
        if (hasReceivedFrom) {
            return applyOffsetTo(getOffset(v));
        } else {
            from = v;
            hasReceivedFrom = true;
            return to;
        }
    };
};
var blend = function (from, to, v) {
    var fromExpo = from * from;
    var toExpo = to * to;
    return Math.sqrt(v * (toExpo - fromExpo) + fromExpo);
};
var blendColor = function (from, to) {
    var fromColor = typeof from === 'string' ? style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"].parse(from) : from;
    var toColor = typeof to === 'string' ? style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"].parse(to) : to;
    var blended = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fromColor);
    var blendFunc = from.hue !== undefined || typeof from === 'string' && style_value_types__WEBPACK_IMPORTED_MODULE_2__["hsla"].test(from) ? getValueFromProgress : blend;
    return function (v) {
        blended = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, blended);
        for (var key in blended) {
            if (key !== 'alpha' && blended.hasOwnProperty(key)) {
                blended[key] = blendFunc(fromColor[key], toColor[key], v);
            }
        }
        blended.alpha = getValueFromProgress(fromColor.alpha, toColor.alpha, v);
        return blended;
    };
};
var clamp = function (min, max) {
    return function (v) {
        return Math.min(Math.max(v, min), max);
    };
};
var combineFunctions = function (a, b) {
    return function (v) {
        return b(a(v));
    };
};
var pipe = function () {
    var transformers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        transformers[_i] = arguments[_i];
    }
    return transformers.reduce(combineFunctions);
};
var conditional = function (check, apply) {
    return function (v) {
        return check(v) ? apply(v) : v;
    };
};
var slowInterpolate = function (input, output, rangeLength, rangeEasing) {
    var finalIndex = rangeLength - 1;
    if (input[0] > input[finalIndex]) {
        input.reverse();
        output.reverse();
    }
    return function (v) {
        if (v <= input[0]) {
            return output[0];
        }
        if (v >= input[finalIndex]) {
            return output[finalIndex];
        }
        var i = 1;
        for (; i < rangeLength; i++) {
            if (input[i] > v || i === finalIndex) {
                break;
            }
        }
        var progressInRange = getProgressFromValue(input[i - 1], input[i], v);
        var easedProgress = rangeEasing ? rangeEasing[i - 1](progressInRange) : progressInRange;
        return getValueFromProgress(output[i - 1], output[i], easedProgress);
    };
};
var fastInterpolate = function (minA, maxA, minB, maxB) {
    return function (v) {
        return (v - minA) * (maxB - minB) / (maxA - minA) + minB;
    };
};
var interpolate = function (input, output, rangeEasing) {
    var rangeLength = input.length;
    return rangeLength !== 2 ? slowInterpolate(input, output, rangeLength, rangeEasing) : fastInterpolate(input[0], input[1], output[0], output[1]);
};
var generateStaticSpring = function (alterDisplacement) {
    if (alterDisplacement === void 0) {
        alterDisplacement = noop;
    }
    return function (constant, origin) {
        return function (v) {
            var displacement = origin - v;
            var springModifiedDisplacement = -constant * (0 - alterDisplacement(Math.abs(displacement)));
            return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
        };
    };
};
var linearSpring = /*#__PURE__*/generateStaticSpring();
var nonlinearSpring = /*#__PURE__*/generateStaticSpring(Math.sqrt);
var wrap = function (min, max) {
    return function (v) {
        var rangeSize = max - min;
        return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
    };
};
var smooth$1 = function (strength) {
    if (strength === void 0) {
        strength = 50;
    }
    var previousValue = 0;
    var lastUpdated = 0;
    return function (v) {
        var currentFramestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_1__["currentFrameTime"])();
        var timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
        var newValue = timeDelta ? smooth(v, previousValue, timeDelta, strength) : previousValue;
        lastUpdated = currentFramestamp;
        previousValue = newValue;
        return newValue;
    };
};
var snap = function (points) {
    if (typeof points === 'number') {
        return function (v) {
            return Math.round(v / points) * points;
        };
    } else {
        var i_1 = 0;
        var numPoints_1 = points.length;
        return function (v) {
            var lastDistance = Math.abs(points[0] - v);
            for (i_1 = 1; i_1 < numPoints_1; i_1++) {
                var point = points[i_1];
                var distance$$1 = Math.abs(point - v);
                if (distance$$1 === 0) return point;
                if (distance$$1 > lastDistance) return points[i_1 - 1];
                if (i_1 === numPoints_1 - 1) return point;
                lastDistance = distance$$1;
            }
        };
    }
};
var steps = function (st, min, max) {
    if (min === void 0) {
        min = 0;
    }
    if (max === void 0) {
        max = 1;
    }
    return function (v) {
        var progress = getProgressFromValue(min, max, v);
        return getValueFromProgress(min, max, stepProgress(st, progress));
    };
};
var transformMap = function (childTransformers) {
    return function (v) {
        var output = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, v);
        for (var key in childTransformers) {
            if (childTransformers.hasOwnProperty(key)) {
                var childTransformer = childTransformers[key];
                output[key] = childTransformer(v[key]);
            }
        }
        return output;
    };
};

var transformers = /*#__PURE__*/Object.freeze({
    appendUnit: appendUnit,
    applyOffset: applyOffset,
    blendColor: blendColor,
    clamp: clamp,
    pipe: pipe,
    conditional: conditional,
    interpolate: interpolate,
    generateStaticSpring: generateStaticSpring,
    linearSpring: linearSpring,
    nonlinearSpring: nonlinearSpring,
    wrap: wrap,
    smooth: smooth$1,
    snap: snap,
    steps: steps,
    transformMap: transformMap
});

var Chainable = /*#__PURE__*/function () {
    function Chainable(props) {
        if (props === void 0) {
            props = {};
        }
        this.props = props;
    }
    Chainable.prototype.applyMiddleware = function (middleware) {
        return this.create(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props, { middleware: this.props.middleware ? [middleware].concat(this.props.middleware) : [middleware] }));
    };
    Chainable.prototype.pipe = function () {
        var funcs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcs[_i] = arguments[_i];
        }
        var pipedUpdate = funcs.length === 1 ? funcs[0] : pipe.apply(void 0, funcs);
        return this.applyMiddleware(function (update) {
            return function (v) {
                return update(pipedUpdate(v));
            };
        });
    };
    Chainable.prototype.while = function (predicate) {
        return this.applyMiddleware(function (update, complete) {
            return function (v) {
                return predicate(v) ? update(v) : complete();
            };
        });
    };
    Chainable.prototype.filter = function (predicate) {
        return this.applyMiddleware(function (update, complete) {
            return function (v) {
                return predicate(v) && update(v);
            };
        });
    };
    return Chainable;
}();

var Observer = /*#__PURE__*/function () {
    function Observer(_a, observer) {
        var middleware = _a.middleware,
            onComplete = _a.onComplete;
        var _this = this;
        this.isActive = true;
        this.update = function (v) {
            if (_this.observer.update) _this.updateObserver(v);
        };
        this.complete = function () {
            if (_this.observer.complete && _this.isActive) _this.observer.complete();
            if (_this.onComplete) _this.onComplete();
            _this.isActive = false;
        };
        this.error = function (err) {
            if (_this.observer.error && _this.isActive) _this.observer.error(err);
            _this.isActive = false;
        };
        this.observer = observer;
        this.updateObserver = function (v) {
            return observer.update(v);
        };
        this.onComplete = onComplete;
        if (observer.update && middleware && middleware.length) {
            middleware.forEach(function (m) {
                return _this.updateObserver = m(_this.updateObserver, _this.complete);
            });
        }
    }
    return Observer;
}();
var createObserver = function (observerCandidate, _a, onComplete) {
    var middleware = _a.middleware;
    if (typeof observerCandidate === 'function') {
        return new Observer({ middleware: middleware, onComplete: onComplete }, { update: observerCandidate });
    } else {
        return new Observer({ middleware: middleware, onComplete: onComplete }, observerCandidate);
    }
};

var Action = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Action, _super);
    function Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Action.prototype.create = function (props) {
        return new Action(props);
    };
    Action.prototype.start = function (observerCandidate) {
        if (observerCandidate === void 0) {
            observerCandidate = {};
        }
        var isComplete = false;
        var subscription = {
            stop: function () {
                return undefined;
            }
        };
        var _a = this.props,
            init = _a.init,
            observerProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["init"]);
        var observer = createObserver(observerCandidate, observerProps, function () {
            isComplete = true;
            subscription.stop();
        });
        var api = init(observer);
        subscription = api ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, subscription, api) : subscription;
        if (observerCandidate.registerParent) {
            observerCandidate.registerParent(subscription);
        }
        if (isComplete) subscription.stop();
        return subscription;
    };
    return Action;
}(Chainable);
var action = function (init) {
    return new Action({ init: init });
};

var BaseMulticast = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseMulticast, _super);
    function BaseMulticast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.subscribers = [];
        return _this;
    }
    BaseMulticast.prototype.complete = function () {
        this.subscribers.forEach(function (subscriber) {
            return subscriber.complete();
        });
    };
    BaseMulticast.prototype.error = function (err) {
        this.subscribers.forEach(function (subscriber) {
            return subscriber.error(err);
        });
    };
    BaseMulticast.prototype.update = function (v) {
        for (var i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i].update(v);
        }
    };
    BaseMulticast.prototype.subscribe = function (observerCandidate) {
        var _this = this;
        var observer = createObserver(observerCandidate, this.props);
        this.subscribers.push(observer);
        var subscription = {
            unsubscribe: function () {
                var index = _this.subscribers.indexOf(observer);
                if (index !== -1) _this.subscribers.splice(index, 1);
            }
        };
        return subscription;
    };
    BaseMulticast.prototype.stop = function () {
        if (this.parent) this.parent.stop();
    };
    BaseMulticast.prototype.registerParent = function (subscription) {
        this.stop();
        this.parent = subscription;
    };
    return BaseMulticast;
}(Chainable);

var Multicast = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Multicast, _super);
    function Multicast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multicast.prototype.create = function (props) {
        return new Multicast(props);
    };
    return Multicast;
}(BaseMulticast);
var multicast = function () {
    return new Multicast();
};

var isValueList = function (v) {
    return Array.isArray(v);
};
var isSingleValue = function (v) {
    var typeOfV = typeof v;
    return typeOfV === 'string' || typeOfV === 'number';
};
var ValueReaction = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ValueReaction, _super);
    function ValueReaction(props) {
        var _this = _super.call(this, props) || this;
        _this.scheduleVelocityCheck = function () {
            return Object(framesync__WEBPACK_IMPORTED_MODULE_1__["onFrameEnd"])(_this.velocityCheck);
        };
        _this.velocityCheck = function () {
            if (Object(framesync__WEBPACK_IMPORTED_MODULE_1__["currentFrameTime"])() !== _this.lastUpdated) {
                _this.prev = _this.current;
            }
        };
        _this.prev = _this.current = props.value || 0;
        if (isSingleValue(_this.current)) {
            _this.updateCurrent = function (v) {
                return _this.current = v;
            };
            _this.getVelocityOfCurrent = function () {
                return _this.getSingleVelocity(_this.current, _this.prev);
            };
        } else if (isValueList(_this.current)) {
            _this.updateCurrent = function (v) {
                return _this.current = v.slice();
            };
            _this.getVelocityOfCurrent = function () {
                return _this.getListVelocity();
            };
        } else {
            _this.updateCurrent = function (v) {
                _this.current = {};
                for (var key in v) {
                    if (v.hasOwnProperty(key)) {
                        _this.current[key] = v[key];
                    }
                }
            };
            _this.getVelocityOfCurrent = function () {
                return _this.getMapVelocity();
            };
        }
        if (props.initialSubscription) _this.subscribe(props.initialSubscription);
        return _this;
    }
    ValueReaction.prototype.create = function (props) {
        return new ValueReaction(props);
    };
    ValueReaction.prototype.get = function () {
        return this.current;
    };
    ValueReaction.prototype.getVelocity = function () {
        return this.getVelocityOfCurrent();
    };
    ValueReaction.prototype.update = function (v) {
        _super.prototype.update.call(this, v);
        this.prev = this.current;
        this.updateCurrent(v);
        this.timeDelta = Object(framesync__WEBPACK_IMPORTED_MODULE_1__["timeSinceLastFrame"])();
        this.lastUpdated = Object(framesync__WEBPACK_IMPORTED_MODULE_1__["currentFrameTime"])();
        Object(framesync__WEBPACK_IMPORTED_MODULE_1__["onFrameEnd"])(this.scheduleVelocityCheck);
    };
    ValueReaction.prototype.subscribe = function (observerCandidate) {
        var sub = _super.prototype.subscribe.call(this, observerCandidate);
        this.update(this.current);
        return sub;
    };
    ValueReaction.prototype.getSingleVelocity = function (current, prev) {
        return typeof current === 'number' && typeof prev === 'number' ? speedPerSecond(current - prev, this.timeDelta) : speedPerSecond(parseFloat(current) - parseFloat(prev), this.timeDelta) || 0;
    };
    ValueReaction.prototype.getListVelocity = function () {
        var _this = this;
        return this.current.map(function (c, i) {
            return _this.getSingleVelocity(c, _this.prev[i]);
        });
    };
    ValueReaction.prototype.getMapVelocity = function () {
        var velocity = {};
        for (var key in this.current) {
            if (this.current.hasOwnProperty(key)) {
                velocity[key] = this.getSingleVelocity(this.current[key], this.prev[key]);
            }
        }
        return velocity;
    };
    return ValueReaction;
}(BaseMulticast);
var value = function (value, initialSubscription) {
    return new ValueReaction({ value: value, initialSubscription: initialSubscription });
};

var multi = function (_a) {
    var getCount = _a.getCount,
        getFirst = _a.getFirst,
        getOutput = _a.getOutput,
        mapApi = _a.mapApi,
        setProp = _a.setProp,
        startActions = _a.startActions;
    return function (actions) {
        return action(function (_a) {
            var update = _a.update,
                complete = _a.complete,
                error = _a.error;
            var numActions = getCount(actions);
            var output = getOutput();
            var updateOutput = function () {
                return update(output);
            };
            var numCompletedActions = 0;
            var subs = startActions(actions, function (a, name) {
                var hasCompleted = false;
                return a.start({
                    complete: function () {
                        if (!hasCompleted) {
                            hasCompleted = true;
                            numCompletedActions++;
                            if (numCompletedActions === numActions) Object(framesync__WEBPACK_IMPORTED_MODULE_1__["onFrameUpdate"])(complete);
                        }
                    },
                    error: error,
                    update: function (v) {
                        setProp(output, name, v);
                        Object(framesync__WEBPACK_IMPORTED_MODULE_1__["onFrameUpdate"])(updateOutput, true);
                    }
                });
            });
            return Object.keys(getFirst(subs)).reduce(function (api, methodName) {
                api[methodName] = mapApi(subs, methodName);
                return api;
            }, {});
        });
    };
};

var composite = /*#__PURE__*/multi({
    getOutput: function () {
        return {};
    },
    getCount: function (subs) {
        return Object.keys(subs).length;
    },
    getFirst: function (subs) {
        return subs[Object.keys(subs)[0]];
    },
    mapApi: function (subs, methodName) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return Object.keys(subs).reduce(function (output, propKey) {
                if (subs[propKey][methodName]) {
                    args[0] && args[0][propKey] !== undefined ? output[propKey] = subs[propKey][methodName](args[0][propKey]) : output[propKey] = (_a = subs[propKey])[methodName].apply(_a, args);
                }
                return output;
                var _a;
            }, {});
        };
    },
    setProp: function (output, name, v) {
        return output[name] = v;
    },
    startActions: function (actions, starter) {
        return Object.keys(actions).reduce(function (subs, key) {
            subs[key] = starter(actions[key], key);
            return subs;
        }, {});
    }
});

var parallel = /*#__PURE__*/multi({
    getOutput: function () {
        return [];
    },
    getCount: function (subs) {
        return subs.length;
    },
    getFirst: function (subs) {
        return subs[0];
    },
    mapApi: function (subs, methodName) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return subs.map(function (sub, i) {
                if (sub[methodName]) {
                    return Array.isArray(args[0]) ? sub[methodName](args[0][i]) : sub[methodName].apply(sub, args);
                }
            });
        };
    },
    setProp: function (output, name, v) {
        return output[name] = v;
    },
    startActions: function (actions, starter) {
        return actions.map(function (action, i) {
            return starter(action, i);
        });
    }
});
var parallel$1 = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return parallel(actions);
};

var isColor = style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"].test;
var convertToColorAction = function (init, props) {
    return typeof props.from === 'string' && isColor(props.from) && typeof props.to === 'string' && isColor(props.to) ? init(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { from: 0, to: 1 })).pipe(blendColor(props.from, props.to), style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"].transform) : init(props);
};
var createVectorTests = function (typeTests) {
    var testNames = Object.keys(typeTests);
    return {
        getVectorKeys: function (props) {
            return testNames.reduce(function (vectorKeys, key) {
                if (props[key] !== undefined && !typeTests[key](props[key])) {
                    vectorKeys.push(key);
                }
                return vectorKeys;
            }, []);
        },
        test: function (props) {
            return props && testNames.reduce(function (isVector, key) {
                return isVector || props[key] !== undefined && !typeTests[key](props[key]);
            }, false);
        }
    };
};
var reduceArrayValue = function (i) {
    return function (props, key) {
        props[key] = props[key][i];
        return props;
    };
};
var createArrayVector = function (init, props, vectorKeys) {
    var firstVectorKey = vectorKeys[0];
    var actionList = props[firstVectorKey].map(function (v, i) {
        return convertToColorAction(init, vectorKeys.reduce(reduceArrayValue(i), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props)));
    });
    return parallel$1.apply(void 0, actionList);
};
var reduceObjectValue = function (key) {
    return function (props, propKey) {
        props[propKey] = props[propKey][key];
        return props;
    };
};
var createObjectVector = function (init, props, vectorKeys) {
    var firstVectorKey = vectorKeys[0];
    var actionMap = Object.keys(props[firstVectorKey]).reduce(function (map, key) {
        map[key] = convertToColorAction(init, vectorKeys.reduce(reduceObjectValue(key), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props)));
        return map;
    }, {});
    return composite(actionMap);
};
var createColorVector = function (init, props) {
    return convertToColorAction(init, props);
};
var vectorAction = function (init, typeTests) {
    var _a = createVectorTests(typeTests),
        test = _a.test,
        getVectorKeys = _a.getVectorKeys;
    return function (props) {
        var isVector = test(props);
        if (!isVector) return init(props);
        var vectorKeys = getVectorKeys(props);
        var testKey = vectorKeys[0];
        var testProp = props[testKey];
        if (Array.isArray(testProp)) {
            return createArrayVector(init, props, vectorKeys);
        } else if (typeof testProp === 'string' && isColor(testProp)) {
            return createColorVector(init, props, vectorKeys);
        } else {
            return createObjectVector(init, props, vectorKeys);
        }
    };
};

var frame = function () {
    return action(function (_a) {
        var update = _a.update;
        var isActive = true;
        var startTime = Object(framesync__WEBPACK_IMPORTED_MODULE_1__["currentTime"])();
        var nextFrame = function () {
            if (!isActive) return;
            update(Math.max(Object(framesync__WEBPACK_IMPORTED_MODULE_1__["currentFrameTime"])() - startTime, 0));
            Object(framesync__WEBPACK_IMPORTED_MODULE_1__["onFrameUpdate"])(nextFrame);
        };
        Object(framesync__WEBPACK_IMPORTED_MODULE_1__["onFrameUpdate"])(nextFrame);
        return {
            stop: function () {
                return isActive = false;
            }
        };
    });
};

var decay = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var complete = _a.complete,
            update = _a.update;
        var _b = props.velocity,
            velocity = _b === void 0 ? 0 : _b,
            _c = props.from,
            from = _c === void 0 ? 0 : _c,
            _d = props.power,
            power = _d === void 0 ? 0.8 : _d,
            _e = props.timeConstant,
            timeConstant = _e === void 0 ? 350 : _e,
            _f = props.restDelta,
            restDelta = _f === void 0 ? 0.5 : _f,
            modifyTarget = props.modifyTarget;
        var elapsed = 0;
        var amplitude = power * velocity;
        var idealTarget = Math.round(from + amplitude);
        var target = typeof modifyTarget === 'undefined' ? idealTarget : modifyTarget(idealTarget);
        var timer = frame().start(function () {
            elapsed += Object(framesync__WEBPACK_IMPORTED_MODULE_1__["timeSinceLastFrame"])();
            var delta = -amplitude * Math.exp(-elapsed / timeConstant);
            var isMoving = delta > restDelta || delta < -restDelta;
            var current = isMoving ? target + delta : target;
            update(current);
            if (!isMoving) {
                timer.stop();
                complete();
            }
        });
        return {
            stop: function () {
                return timer.stop();
            }
        };
    });
};
var index = /*#__PURE__*/vectorAction(decay, {
    from: style_value_types__WEBPACK_IMPORTED_MODULE_2__["number"].test,
    modifyTarget: function (func) {
        return typeof func === 'function';
    },
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_2__["number"].test
});

var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var createReversedEasing = function (easing) {
    return function (p) {
        return 1 - easing(1 - p);
    };
};
var createMirroredEasing = function (easing) {
    return function (p) {
        return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
    };
};
var linear = function (p) {
    return p;
};
var createExpoIn = function (power) {
    return function (p) {
        return Math.pow(p, power);
    };
};
var easeIn = /*#__PURE__*/createExpoIn(2);
var easeOut = /*#__PURE__*/createReversedEasing(easeIn);
var easeInOut = /*#__PURE__*/createMirroredEasing(easeIn);
var circIn = function (p) {
    return 1 - Math.sin(Math.acos(p));
};
var circOut = /*#__PURE__*/createReversedEasing(circIn);
var circInOut = /*#__PURE__*/createMirroredEasing(circOut);
var createBackIn = function (power) {
    return function (p) {
        return p * p * ((power + 1) * p - power);
    };
};
var backIn = /*#__PURE__*/createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = /*#__PURE__*/createReversedEasing(backIn);
var backInOut = /*#__PURE__*/createMirroredEasing(backIn);
var createAnticipateEasing = function (power) {
    var backEasing = createBackIn(power);
    return function (p) {
        return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
    };
};
var anticipate = /*#__PURE__*/createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);
var NEWTON_ITERATIONS = 8;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var K_SPLINE_TABLE_SIZE = 11;
var K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0);
var FLOAT_32_SUPPORTED = typeof Float32Array !== 'undefined';
var a = function (a1, a2) {
    return 1.0 - 3.0 * a2 + 3.0 * a1;
};
var b = function (a1, a2) {
    return 3.0 * a2 - 6.0 * a1;
};
var c = function (a1) {
    return 3.0 * a1;
};
var getSlope = function (t, a1, a2) {
    return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
};
var calcBezier = function (t, a1, a2) {
    return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
};
function cubicBezier(mX1, mY1, mX2, mY2) {
    var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE);
    var _precomputed = false;
    var binarySubdivide = function (aX, aA, aB) {
        var i = 0;
        var currentX;
        var currentT;
        do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) {
                aB = currentT;
            } else {
                aA = currentT;
            }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
    };
    var newtonRaphsonIterate = function (aX, aGuessT) {
        var i = 0;
        var currentSlope = 0;
        var currentX;
        for (; i < NEWTON_ITERATIONS; ++i) {
            currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0.0) {
                return aGuessT;
            }
            currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    };
    var calcSampleValues = function () {
        for (var i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
            sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
        }
    };
    var getTForX = function (aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = K_SPLINE_TABLE_SIZE - 1;
        var dist = 0.0;
        var guessForT = 0.0;
        var initialSlope = 0.0;
        for (; currentSample != lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += K_SAMPLE_STEP_SIZE;
        }
        --currentSample;
        dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        guessForT = intervalStart + dist * K_SAMPLE_STEP_SIZE;
        initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT);
        } else if (initialSlope === 0.0) {
            return guessForT;
        } else {
            return binarySubdivide(aX, intervalStart, intervalStart + K_SAMPLE_STEP_SIZE);
        }
    };
    var precompute = function () {
        _precomputed = true;
        if (mX1 != mY1 || mX2 != mY2) {
            calcSampleValues();
        }
    };
    var resolver = function (aX) {
        var returnValue;
        if (!_precomputed) {
            precompute();
        }
        if (mX1 === mY1 && mX2 === mY2) {
            returnValue = aX;
        } else if (aX === 0) {
            returnValue = 0;
        } else if (aX === 1) {
            returnValue = 1;
        } else {
            returnValue = calcBezier(getTForX(aX), mY1, mY2);
        }
        return returnValue;
    };
    return resolver;
}

var easing = /*#__PURE__*/Object.freeze({
    createReversedEasing: createReversedEasing,
    createMirroredEasing: createMirroredEasing,
    linear: linear,
    createExpoIn: createExpoIn,
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut,
    circIn: circIn,
    circOut: circOut,
    circInOut: circInOut,
    createBackIn: createBackIn,
    backIn: backIn,
    backOut: backOut,
    backInOut: backInOut,
    createAnticipateEasing: createAnticipateEasing,
    anticipate: anticipate,
    cubicBezier: cubicBezier
});

var scrubber = function (_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0 : _b,
        _c = _a.to,
        to = _c === void 0 ? 1 : _c,
        _d = _a.ease,
        ease = _d === void 0 ? linear : _d;
    return action(function (_a) {
        var update = _a.update;
        return {
            seek: function (progress) {
                return update(progress);
            }
        };
    }).pipe(ease, function (v) {
        return getValueFromProgress(from, to, v);
    });
};
var scrubber$1 = /*#__PURE__*/vectorAction(scrubber, {
    ease: function (func) {
        return typeof func === 'function';
    },
    from: style_value_types__WEBPACK_IMPORTED_MODULE_2__["number"].test,
    to: style_value_types__WEBPACK_IMPORTED_MODULE_2__["number"].test
});

var clampProgress = /*#__PURE__*/clamp(0, 1);
var tween = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var _b = props.duration,
            duration = _b === void 0 ? 300 : _b,
            _c = props.ease,
            ease = _c === void 0 ? easeOut : _c,
            _d = props.flip,
            flip = _d === void 0 ? 0 : _d,
            _e = props.loop,
            loop = _e === void 0 ? 0 : _e,
            _f = props.yoyo,
            yoyo = _f === void 0 ? 0 : _f;
        var _g = props.from,
            from = _g === void 0 ? 0 : _g,
            _h = props.to,
            to = _h === void 0 ? 1 : _h,
            _j = props.elapsed,
            elapsed = _j === void 0 ? 0 : _j,
            _k = props.playDirection,
            playDirection = _k === void 0 ? 1 : _k,
            _l = props.flipCount,
            flipCount = _l === void 0 ? 0 : _l,
            _m = props.yoyoCount,
            yoyoCount = _m === void 0 ? 0 : _m,
            _o = props.loopCount,
            loopCount = _o === void 0 ? 0 : _o;
        var playhead = scrubber$1({ from: from, to: to, ease: ease }).start(update);
        var progress = 0;
        var tweenTimer;
        var isActive = false;
        var reverseTween = function () {
            return playDirection *= -1;
        };
        var isTweenComplete = function () {
            var isComplete = playDirection === 1 ? isActive && elapsed >= duration : isActive && elapsed <= 0;
            if (!isComplete) return false;
            if (isComplete && !loop && !flip && !yoyo) return true;
            var isStepTaken = false;
            if (loop && loopCount < loop) {
                elapsed = 0;
                loopCount++;
                isStepTaken = true;
            } else if (flip && flipCount < flip) {
                elapsed = duration - elapsed;
                _a = [to, from], from = _a[0], to = _a[1];
                playhead = scrubber$1({ from: from, to: to, ease: ease }).start(update);
                flipCount++;
                isStepTaken = true;
            } else if (yoyo && yoyoCount < yoyo) {
                reverseTween();
                yoyoCount++;
                isStepTaken = true;
            }
            return !isStepTaken;
            var _a;
        };
        var updateTween = function () {
            progress = clampProgress(getProgressFromValue(0, duration, elapsed));
            playhead.seek(progress);
        };
        var startTimer = function () {
            isActive = true;
            tweenTimer = frame().start(function () {
                elapsed += Object(framesync__WEBPACK_IMPORTED_MODULE_1__["timeSinceLastFrame"])() * playDirection;
                updateTween();
                if (isTweenComplete() && complete) {
                    tweenTimer.stop();
                    Object(framesync__WEBPACK_IMPORTED_MODULE_1__["onFrameUpdate"])(complete, true);
                }
            });
        };
        var stopTimer = function () {
            isActive = false;
            if (tweenTimer) tweenTimer.stop();
        };
        startTimer();
        return {
            isActive: function () {
                return isActive;
            },
            getElapsed: function () {
                return clamp(0, duration)(elapsed);
            },
            getProgress: function () {
                return progress;
            },
            stop: function () {
                stopTimer();
            },
            pause: function () {
                stopTimer();
                return this;
            },
            resume: function () {
                startTimer();
                return this;
            },
            seek: function (newProgress) {
                elapsed = getValueFromProgress(0, duration, newProgress);
                Object(framesync__WEBPACK_IMPORTED_MODULE_1__["onFrameUpdate"])(updateTween, true);
                return this;
            },
            reverse: function () {
                reverseTween();
                return this;
            }
        };
    });
};

var clampProgress$1 = /*#__PURE__*/clamp(0, 1);
var defaultEasings = function (values, easing) {
    return values.map(function () {
        return easing || easeOut;
    }).splice(0, values.length - 1);
};
var defaultTimings = function (values) {
    var numValues = values.length;
    return values.map(function (value, i) {
        return i !== 0 ? i / (numValues - 1) : 0;
    });
};
var interpolateScrubbers = function (input, scrubbers, update) {
    var rangeLength = input.length;
    var finalInputIndex = rangeLength - 1;
    var finalScrubberIndex = finalInputIndex - 1;
    var subs = scrubbers.map(function (scrub) {
        return scrub.start(update);
    });
    return function (v) {
        if (v <= input[0]) {
            subs[0].seek(0);
        }
        if (v >= input[finalInputIndex]) {
            subs[finalScrubberIndex].seek(1);
        }
        var i = 1;
        for (; i < rangeLength; i++) {
            if (input[i] > v || i === finalInputIndex) break;
        }
        var progressInRange = getProgressFromValue(input[i - 1], input[i], v);
        subs[i - 1].seek(clampProgress$1(progressInRange));
    };
};
var keyframes = function (_a) {
    var easings = _a.easings,
        _b = _a.ease,
        ease = _b === void 0 ? linear : _b,
        times = _a.times,
        values = _a.values,
        tweenProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["easings", "ease", "times", "values"]);
    easings = Array.isArray(easings) ? easings : defaultEasings(values, easings);
    times = times || defaultTimings(values);
    var scrubbers = easings.map(function (easing, i) {
        return scrubber$1({
            from: values[i],
            to: values[i + 1],
            ease: easing
        });
    });
    return tween(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, tweenProps, { ease: ease })).applyMiddleware(function (update) {
        return interpolateScrubbers(times, scrubbers, update);
    });
};

var physics = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var complete = _a.complete,
            update = _a.update;
        var _b = props.acceleration,
            acceleration = _b === void 0 ? 0 : _b,
            _c = props.friction,
            friction = _c === void 0 ? 0 : _c,
            _d = props.velocity,
            velocity = _d === void 0 ? 0 : _d,
            springStrength = props.springStrength,
            to = props.to;
        var _e = props.restSpeed,
            restSpeed = _e === void 0 ? 0.001 : _e,
            _f = props.from,
            from = _f === void 0 ? 0 : _f;
        var current = from;
        var timer = frame().start(function () {
            var elapsed = Math.max(Object(framesync__WEBPACK_IMPORTED_MODULE_1__["timeSinceLastFrame"])(), 16);
            if (acceleration) velocity += speedPerFrame(acceleration, elapsed);
            if (friction) velocity *= Math.pow(1 - friction, elapsed / 100);
            if (springStrength !== undefined && to !== undefined) {
                var distanceToTarget = to - current;
                velocity += distanceToTarget * speedPerFrame(springStrength, elapsed);
            }
            current += speedPerFrame(velocity, elapsed);
            update(current);
            var isComplete = restSpeed !== false && (!velocity || Math.abs(velocity) <= restSpeed);
            if (isComplete) {
                timer.stop();
                complete();
            }
        });
        return {
            set: function (v) {
                current = v;
                return this;
            },
            setAcceleration: function (v) {
                acceleration = v;
                return this;
            },
            setFriction: function (v) {
                friction = v;
                return this;
            },
            setSpringStrength: function (v) {
                springStrength = v;
                return this;
            },
            setSpringTarget: function (v) {
                to = v;
                return this;
            },
            setVelocity: function (v) {
                velocity = v;
                return this;
            },
            stop: function () {
                return timer.stop();
            }
        };
    });
};
var index$1 = /*#__PURE__*/vectorAction(physics, {
    acceleration: style_value_types__WEBPACK_IMPORTED_MODULE_2__["number"].test,
    friction: style_value_types__WEBPACK_IMPORTED_MODULE_2__["number"].test,
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_2__["number"].test,
    from: style_value_types__WEBPACK_IMPORTED_MODULE_2__["number"].test,
    to: style_value_types__WEBPACK_IMPORTED_MODULE_2__["number"].test,
    springStrength: style_value_types__WEBPACK_IMPORTED_MODULE_2__["number"].test
});

var spring = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var _b = props.velocity,
            velocity = _b === void 0 ? 0.0 : _b;
        var _c = props.from,
            from = _c === void 0 ? 0.0 : _c,
            _d = props.to,
            to = _d === void 0 ? 0.0 : _d,
            _e = props.stiffness,
            stiffness = _e === void 0 ? 100 : _e,
            _f = props.damping,
            damping = _f === void 0 ? 10 : _f,
            _g = props.mass,
            mass = _g === void 0 ? 1.0 : _g,
            _h = props.restSpeed,
            restSpeed = _h === void 0 ? 0.01 : _h,
            _j = props.restDelta,
            restDelta = _j === void 0 ? 0.01 : _j;
        var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
        var t = 0;
        var delta = to - from;
        var position = from;
        var prevPosition = position;
        var springTimer = frame().start(function () {
            var timeDelta = Object(framesync__WEBPACK_IMPORTED_MODULE_1__["timeSinceLastFrame"])();
            t += timeDelta;
            var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
            var angularFreq = Math.sqrt(stiffness / mass) / 1000;
            prevPosition = position;
            if (dampingRatio < 1) {
                var envelope = Math.exp(-dampingRatio * angularFreq * t);
                var expoDecay = angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);
                position = to - envelope * ((initialVelocity + dampingRatio * angularFreq * delta) / expoDecay * Math.sin(expoDecay * t) + delta * Math.cos(expoDecay * t));
            } else {
                var envelope = Math.exp(-angularFreq * t);
                position = to - envelope * (delta + (initialVelocity + angularFreq * delta) * t);
            }
            velocity = speedPerSecond(position - prevPosition, timeDelta);
            var isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
            var isBelowDisplacementThreshold = Math.abs(to - position) <= restDelta;
            if (isBelowVelocityThreshold && isBelowDisplacementThreshold) {
                position = to;
                update(position);
                springTimer.stop();
                complete();
            } else {
                update(position);
            }
        });
        return {
            stop: function () {
                return springTimer.stop();
            }
        };
    });
};
var index$2 = /*#__PURE__*/vectorAction(spring, {
    from: style_value_types__WEBPACK_IMPORTED_MODULE_2__["number"].test,
    to: style_value_types__WEBPACK_IMPORTED_MODULE_2__["number"].test,
    stiffness: style_value_types__WEBPACK_IMPORTED_MODULE_2__["number"].test,
    damping: style_value_types__WEBPACK_IMPORTED_MODULE_2__["number"].test,
    mass: style_value_types__WEBPACK_IMPORTED_MODULE_2__["number"].test,
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_2__["number"].test
});

var DEFAULT_DURATION = 300;
var flattenTimings = function (instructions) {
    var flatInstructions = [];
    var lastArg = instructions[instructions.length - 1];
    var isStaggered = typeof lastArg === 'number';
    var staggerDelay = isStaggered ? lastArg : 0;
    var segments = isStaggered ? instructions.slice(0, -1) : instructions;
    var numSegments = segments.length;
    var offset = 0;
    segments.forEach(function (item, i) {
        flatInstructions.push(item);
        if (i !== numSegments - 1) {
            var duration = item.duration || DEFAULT_DURATION;
            offset += staggerDelay;
            flatInstructions.push("-" + (duration - offset));
        }
    });
    return flatInstructions;
};
var flattenArrayInstructions = function (instructions, instruction) {
    Array.isArray(instruction) ? instructions.push.apply(instructions, flattenTimings(instruction)) : instructions.push(instruction);
    return instructions;
};
var convertDefToProps = function (props, def, i) {
    var duration = props.duration,
        easings = props.easings,
        times = props.times,
        values = props.values;
    var numValues = values.length;
    var prevTimeTo = times[numValues - 1];
    var timeFrom = def.at === 0 ? 0 : def.at / duration;
    var timeTo = (def.at + def.duration) / duration;
    if (i === 0) {
        values.push(def.from);
        times.push(timeFrom);
    } else {
        if (prevTimeTo !== timeFrom) {
            if (def.from !== undefined) {
                values.push(values[numValues - 1]);
                times.push(timeFrom);
                easings.push(linear);
            }
            var from = def.from !== undefined ? def.from : values[numValues - 1];
            values.push(from);
            times.push(timeFrom);
            easings.push(linear);
        } else if (def.from !== undefined) {
            values.push(def.from);
            times.push(timeFrom);
            easings.push(linear);
        }
    }
    values.push(def.to);
    times.push(timeTo);
    easings.push(def.ease || easeInOut);
    return props;
};
var timeline = function (instructions, _a) {
    var _b = _a === void 0 ? {} : _a,
        duration = _b.duration,
        elapsed = _b.elapsed,
        ease = _b.ease,
        loop = _b.loop,
        flip = _b.flip,
        yoyo = _b.yoyo;
    var playhead = 0;
    var calculatedDuration = 0;
    var flatInstructions = instructions.reduce(flattenArrayInstructions, []);
    var animationDefs = [];
    flatInstructions.forEach(function (instruction) {
        if (typeof instruction === 'string') {
            playhead += parseFloat(instruction);
        } else if (typeof instruction === 'number') {
            playhead = instruction;
        } else {
            var def = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, instruction, { at: playhead });
            def.duration = def.duration === undefined ? DEFAULT_DURATION : def.duration;
            animationDefs.push(def);
            playhead += def.duration;
            calculatedDuration = Math.max(calculatedDuration, def.at + def.duration);
        }
    });
    var tracks = {};
    var numDefs = animationDefs.length;
    for (var i = 0; i < numDefs; i++) {
        var def = animationDefs[i];
        var track = def.track;
        if (track === undefined) {
            throw new Error('No track defined');
        }
        if (!tracks.hasOwnProperty(track)) tracks[track] = [];
        tracks[track].push(def);
    }
    var trackKeyframes = {};
    for (var key in tracks) {
        if (tracks.hasOwnProperty(key)) {
            var keyframeProps = tracks[key].reduce(convertDefToProps, {
                duration: calculatedDuration,
                easings: [],
                times: [],
                values: []
            });
            trackKeyframes[key] = keyframes(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, keyframeProps, { duration: duration || calculatedDuration, ease: ease,
                elapsed: elapsed,
                loop: loop,
                yoyo: yoyo,
                flip: flip }));
        }
    }
    return composite(trackKeyframes);
};

var listen = function (element, events, options) {
    return action(function (_a) {
        var update = _a.update;
        var eventNames = events.split(' ').map(function (eventName) {
            element.addEventListener(eventName, update, options);
            return eventName;
        });
        return {
            stop: function () {
                return eventNames.forEach(function (eventName) {
                    return element.removeEventListener(eventName, update, options);
                });
            }
        };
    });
};

var defaultPointerPos = function () {
    return {
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        x: 0,
        y: 0
    };
};
var eventToPoint = function (e, point) {
    if (point === void 0) {
        point = defaultPointerPos();
    }
    point.clientX = point.x = e.clientX;
    point.clientY = point.y = e.clientY;
    point.pageX = e.pageX;
    point.pageY = e.pageY;
    return point;
};

var points = [/*#__PURE__*/defaultPointerPos()];
var isTouchDevice = false;
if (typeof document !== 'undefined') {
    var updatePointsLocation = function (_a) {
        var touches = _a.touches;
        isTouchDevice = true;
        var numTouches = touches.length;
        points.length = 0;
        for (var i = 0; i < numTouches; i++) {
            var thisTouch = touches[i];
            points.push(eventToPoint(thisTouch));
        }
    };
    listen(document, 'touchstart touchmove', true).start(updatePointsLocation);
}
var multitouch = function (_a) {
    var _b = _a === void 0 ? {} : _a,
        _c = _b.preventDefault,
        preventDefault = _c === void 0 ? true : _c,
        _d = _b.scale,
        scale = _d === void 0 ? 1.0 : _d,
        _e = _b.rotate,
        rotate = _e === void 0 ? 0.0 : _e;
    return action(function (_a) {
        var update = _a.update;
        var output = {
            touches: points,
            scale: scale,
            rotate: rotate
        };
        var initialDistance = 0.0;
        var initialRotation = 0.0;
        var isGesture = points.length > 1;
        if (isGesture) {
            var firstTouch = points[0],
                secondTouch = points[1];
            initialDistance = distance(firstTouch, secondTouch);
            initialRotation = angle(firstTouch, secondTouch);
        }
        var updatePoint = function () {
            if (isGesture) {
                var firstTouch = points[0],
                    secondTouch = points[1];
                var newDistance = distance(firstTouch, secondTouch);
                var newRotation = angle(firstTouch, secondTouch);
                output.scale = scale * (newDistance / initialDistance);
                output.rotate = rotate + (newRotation - initialRotation);
            }
            update(output);
        };
        var onMove = function (e) {
            if (preventDefault || e.touches.length > 1) e.preventDefault();
            Object(framesync__WEBPACK_IMPORTED_MODULE_1__["onFrameUpdate"])(updatePoint);
        };
        var updateOnMove = listen(document, 'touchmove', { passive: !preventDefault }).start(onMove);
        if (isTouchDevice) Object(framesync__WEBPACK_IMPORTED_MODULE_1__["onFrameUpdate"])(updatePoint);
        return {
            stop: function () {
                Object(framesync__WEBPACK_IMPORTED_MODULE_1__["cancelOnFrameUpdate"])(updatePoint);
                updateOnMove.stop();
            }
        };
    });
};
var getIsTouchDevice = function () {
    return isTouchDevice;
};

var point = /*#__PURE__*/defaultPointerPos();
var isMouseDevice = false;
if (typeof document !== 'undefined') {
    var updatePointLocation = function (e) {
        isMouseDevice = true;
        eventToPoint(e, point);
    };
    listen(document, 'mousedown mousemove', true).start(updatePointLocation);
}
var mouse = function (_a) {
    var _b = (_a === void 0 ? {} : _a).preventDefault,
        preventDefault = _b === void 0 ? true : _b;
    return action(function (_a) {
        var update = _a.update;
        var updatePoint = function () {
            return update(point);
        };
        var onMove = function (e) {
            if (preventDefault) e.preventDefault();
            Object(framesync__WEBPACK_IMPORTED_MODULE_1__["onFrameUpdate"])(updatePoint);
        };
        var updateOnMove = listen(document, 'mousemove').start(onMove);
        if (isMouseDevice) Object(framesync__WEBPACK_IMPORTED_MODULE_1__["onFrameUpdate"])(updatePoint);
        return {
            stop: function () {
                Object(framesync__WEBPACK_IMPORTED_MODULE_1__["cancelOnFrameUpdate"])(updatePoint);
                updateOnMove.stop();
            }
        };
    });
};

var getFirstTouch = function (_a) {
    var firstTouch = _a[0];
    return firstTouch;
};
var pointer = function (props) {
    if (props === void 0) {
        props = {};
    }
    return getIsTouchDevice() ? multitouch(props).pipe(function (_a) {
        var touches = _a.touches;
        return touches;
    }, getFirstTouch) : mouse(props);
};
var index$3 = function (_a) {
    if (_a === void 0) {
        _a = {};
    }
    var x = _a.x,
        y = _a.y,
        props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["x", "y"]);
    if (x !== undefined || y !== undefined) {
        var applyXOffset_1 = applyOffset(x || 0);
        var applyYOffset_1 = applyOffset(y || 0);
        var delta_1 = { x: 0, y: 0 };
        return pointer(props).pipe(function (point) {
            delta_1.x = applyXOffset_1(point.x);
            delta_1.y = applyYOffset_1(point.y);
            return delta_1;
        });
    } else {
        return pointer(props);
    }
};

var chain = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var i = 0;
        var current;
        var playCurrent = function () {
            current = actions[i].start({
                complete: function () {
                    i++;
                    i >= actions.length ? complete() : playCurrent();
                },
                update: update
            });
        };
        playCurrent();
        return {
            stop: function () {
                return current && current.stop();
            }
        };
    });
};

var crossfade = function (a, b) {
    return action(function (observer) {
        var balance = 0;
        var fadable = parallel$1(a, b).start(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, observer, { update: function (_a) {
                var va = _a[0],
                    vb = _a[1];
                observer.update(getValueFromProgress(va, vb, balance));
            } }));
        return {
            setBalance: function (v) {
                return balance = v;
            },
            stop: function () {
                return fadable.stop();
            }
        };
    });
};

var delay = function (timeToDelay) {
    return action(function (_a) {
        var complete = _a.complete;
        var timeout = setTimeout(complete, timeToDelay);
        return {
            stop: function () {
                return clearTimeout(timeout);
            }
        };
    });
};

var merge = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return action(function (observer) {
        var subs = actions.map(function (thisAction) {
            return thisAction.start(observer);
        });
        return {
            stop: function () {
                return subs.forEach(function (sub) {
                    return sub.stop();
                });
            }
        };
    });
};

var schedule = function (scheduler, schedulee) {
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var latest;
        var schedulerSub = scheduler.start({
            update: function () {
                return latest !== undefined && update(latest);
            },
            complete: complete
        });
        var scheduleeSub = schedulee.start({
            update: function (v) {
                return latest = v;
            },
            complete: complete
        });
        return {
            stop: function () {
                schedulerSub.stop();
                scheduleeSub.stop();
            }
        };
    });
};

var stagger = function (actions, interval) {
    var intervalIsNumber = typeof interval === 'number';
    var actionsWithDelay = actions.map(function (a, i) {
        var timeToDelay = intervalIsNumber ? interval * i : interval(i);
        return chain(delay(timeToDelay), a);
    });
    return parallel$1.apply(void 0, actionsWithDelay);
};

var css = function (element, props) {
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["warning"])(false, 'css() is deprecated, use styler instead');
    return Object(stylefire__WEBPACK_IMPORTED_MODULE_3__["default"])(element, props);
};
var svg = function (element, props) {
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["warning"])(false, 'svg() is deprecated, use styler instead');
    return Object(stylefire__WEBPACK_IMPORTED_MODULE_3__["default"])(element, props);
};




/***/ }),

/***/ "../node_modules/process/browser.js":
/*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../node_modules/scrollbar-width/scrollbar-width.js":
/*!**********************************************************!*\
  !*** ../node_modules/scrollbar-width/scrollbar-width.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by CoffeeScript 1.9.1
(function() {
  'use strict';
  var getScrollbarWidth, scrollbarWidth;

  scrollbarWidth = null;

  getScrollbarWidth = function(recalculate) {
    var div1, div2;
    if (recalculate == null) {
      recalculate = false;
    }
    if ((scrollbarWidth != null) && !recalculate) {
      return scrollbarWidth;
    }
    if (document.readyState === 'loading') {
      return null;
    }
    div1 = document.createElement('div');
    div2 = document.createElement('div');
    div1.style.width = div2.style.width = div1.style.height = div2.style.height = '100px';
    div1.style.overflow = 'scroll';
    div2.style.overflow = 'hidden';
    document.body.appendChild(div1);
    document.body.appendChild(div2);
    scrollbarWidth = Math.abs(div1.scrollHeight - div2.scrollHeight);
    document.body.removeChild(div1);
    document.body.removeChild(div2);
    return scrollbarWidth;
  };

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return getScrollbarWidth;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}).call(this);


/***/ }),

/***/ "../node_modules/setimmediate/setImmediate.js":
/*!****************************************************!*\
  !*** ../node_modules/setimmediate/setImmediate.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "../node_modules/style-value-types/dist/style-value-types.es.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-value-types/dist/style-value-types.es.js ***!
  \**********************************************************************/
/*! exports provided: getValueFromFunctionString, splitCommaDelimited, splitColorValues, number, alpha, degrees, percent, px, scale, complex, rgbUnit, rgba, hsla, hex, color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueFromFunctionString", function() { return getValueFromFunctionString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitCommaDelimited", function() { return splitCommaDelimited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitColorValues", function() { return splitColorValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percent", function() { return percent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "px", function() { return px; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complex", function() { return complex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbUnit", function() { return rgbUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgba", function() { return rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsla", function() { return hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

var clamp = function (min, max) { return function (v) { return Math.max(Math.min(v, max), min); }; };
var contains = function (term) { return function (v) { return (typeof v === 'string' && v.indexOf(term) !== -1); }; };
var createUnitType = function (unit) { return ({
    test: contains(unit),
    parse: parseFloat,
    transform: function (v) { return "" + v + unit; }
}); };
var isFirstChars = function (term) { return function (v) { return (typeof v === 'string' && v.indexOf(term) === 0); }; };
var getValueFromFunctionString = function (value) { return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')')); };
var splitCommaDelimited = function (value) { return typeof value === 'string' ? value.split(/,\s*/) : [value]; };
function splitColorValues(terms) {
    var numTerms = terms.length;
    return function (v) {
        var values = {};
        var valuesArray = splitCommaDelimited(getValueFromFunctionString(v));
        for (var i = 0; i < numTerms; i++) {
            values[terms[i]] = (valuesArray[i] !== undefined) ? parseFloat(valuesArray[i]) : 1;
        }
        return values;
    };
}
var number = {
    test: function (v) { return typeof v === 'number'; },
    parse: parseFloat,
    transform: function (v) { return v; }
};
var alpha = __assign({}, number, { transform: clamp(0, 1) });
var degrees = createUnitType('deg');
var percent = createUnitType('%');
var px = createUnitType('px');
var scale = __assign({}, number, { default: 1 });
var FLOAT_REGEX = /(-)?(\d[\d\.]*)/g;
var generateToken = function (token) { return '${' + token + '}'; };
var complex = {
    test: function (v) {
        var matches = v.match && v.match(FLOAT_REGEX);
        return (matches !== undefined && matches.constructor === Array && matches.length > 1);
    },
    parse: function (v) {
        var parsedValue = {};
        v.match(FLOAT_REGEX).forEach(function (value, i) { return parsedValue[i] = parseFloat(value); });
        return parsedValue;
    },
    createTransformer: function (prop) {
        var counter = 0;
        var template = prop.replace(FLOAT_REGEX, function () { return generateToken("" + counter++); });
        return function (v) {
            var output = template;
            for (var key in v) {
                if (v.hasOwnProperty(key)) {
                    output = output.replace(generateToken(key), v[key].toString());
                }
            }
            return output;
        };
    }
};
var clampRgbUnit = clamp(0, 255);
var rgbUnit = __assign({}, number, { transform: function (v) { return Math.round(clampRgbUnit(v)); } });
var rgbaTemplate = function (_a) {
    var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha = _b === void 0 ? 1 : _b;
    return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
};
var rgba = {
    test: isFirstChars('rgb'),
    parse: splitColorValues(['red', 'green', 'blue', 'alpha']),
    transform: function (_a) {
        var red = _a.red, green = _a.green, blue = _a.blue, alpha = _a.alpha;
        return rgbaTemplate({
            red: rgbUnit.transform(red),
            green: rgbUnit.transform(green),
            blue: rgbUnit.transform(blue),
            alpha: alpha
        });
    }
};
var hslaTemplate = function (_a) {
    var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha = _b === void 0 ? 1 : _b;
    return "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + alpha + ")";
};
var hsla = {
    test: isFirstChars('hsl'),
    parse: splitColorValues(['hue', 'saturation', 'lightness', 'alpha']),
    transform: function (_a) {
        var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, alpha = _a.alpha;
        return hslaTemplate({
            hue: Math.round(hue),
            saturation: percent.transform(saturation),
            lightness: percent.transform(lightness),
            alpha: alpha
        });
    }
};
var hex = __assign({}, rgba, { test: isFirstChars('#'), parse: function (v) {
        var r, g, b;
        if (v.length > 4) {
            r = v.substr(1, 2);
            g = v.substr(3, 2);
            b = v.substr(5, 2);
        }
        else {
            r = v.substr(1, 1);
            g = v.substr(2, 1);
            b = v.substr(3, 1);
            r += r;
            g += g;
            b += b;
        }
        return {
            red: parseInt(r, 16),
            green: parseInt(g, 16),
            blue: parseInt(b, 16),
            alpha: 1
        };
    } });
var isRgba = function (v) { return v.red !== undefined; };
var isHsla = function (v) { return v.hue !== undefined; };
var color = {
    test: function (v) { return rgba.test(v) || hsla.test(v) || hex.test(v); },
    parse: function (v) {
        if (rgba.test(v)) {
            return rgba.parse(v);
        }
        else if (hsla.test(v)) {
            return hsla.parse(v);
        }
        else if (hex.test(v)) {
            return hex.parse(v);
        }
        return v;
    },
    transform: function (v) {
        if (isRgba(v)) {
            return rgba.transform(v);
        }
        else if (isHsla(v)) {
            return hsla.transform(v);
        }
        return v;
    },
};




/***/ }),

/***/ "../node_modules/stylefire/dist/stylefire.es.js":
/*!******************************************************!*\
  !*** ../node_modules/stylefire/dist/stylefire.es.js ***!
  \******************************************************/
/*! exports provided: default, createStylerFactory, buildStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStylerFactory", function() { return createStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildStyles", function() { return buildStylePropertyString; });
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "../node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "../node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hey-listen */ "../node_modules/hey-listen/dist/hey-listen.es.js");




/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

var createStyler = function (_a) {
    var onRead = _a.onRead, onRender = _a.onRender, _b = _a.aliasMap, aliasMap = _b === void 0 ? {} : _b, _c = _a.useCache, useCache = _c === void 0 ? true : _c;
    return function (props) {
        var state = {};
        var changedValues = [];
        var hasChanged = false;
        var setValue = function (unmappedKey, value) {
            var key = aliasMap[unmappedKey] || unmappedKey;
            var currentValue = state[key];
            state[key] = value;
            if (state[key] !== currentValue) {
                if (changedValues.indexOf(key) === -1) {
                    changedValues.push(key);
                }
                if (!hasChanged) {
                    hasChanged = true;
                    Object(framesync__WEBPACK_IMPORTED_MODULE_0__["onFrameRender"])(render);
                }
            }
        };
        function render(forceRender) {
            if (forceRender === void 0) { forceRender = false; }
            if (forceRender || hasChanged) {
                onRender(state, props, changedValues);
                hasChanged = false;
                changedValues.length = 0;
            }
            return this;
        }
        return {
            get: function (unmappedKey) {
                var key = aliasMap[unmappedKey] || unmappedKey;
                return (key)
                    ? (useCache && state[key] !== undefined)
                        ? state[key]
                        : onRead(key, props)
                    : state;
            },
            set: function (values, value) {
                if (typeof values === 'string') {
                    if (value !== undefined) {
                        setValue(values, value);
                    }
                    else {
                        return function (v) { return setValue(values, v); };
                    }
                }
                else {
                    for (var key in values) {
                        if (values.hasOwnProperty(key)) {
                            setValue(key, values[key]);
                        }
                    }
                }
                return this;
            },
            render: render,
        };
    };
};

var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = '$1-$2';
var camelToDash = function (str) { return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase(); };
var setDomAttrs = function (element, attrs) {
    for (var key in attrs) {
        if (attrs.hasOwnProperty(key)) {
            element.setAttribute(key, attrs[key]);
        }
    }
};

var camelCache = new Map();
var dashCache = new Map();
var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
var numPrefixes = prefixes.length;
var testElement;
var testPrefix = function (key) {
    if (typeof document === 'undefined')
        return;
    testElement = testElement || document.createElement('div');
    for (var i = 0; i < numPrefixes; i++) {
        var prefix = prefixes[i];
        var noPrefix = (prefix === '');
        var prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
        if (prefixedPropertyName in testElement.style) {
            camelCache.set(key, prefixedPropertyName);
            dashCache.set(key, "" + (noPrefix ? '' : '-') + camelToDash(prefixedPropertyName));
        }
    }
};
var prefixer = (function (key, asDashCase) {
    if (asDashCase === void 0) { asDashCase = false; }
    var cache = asDashCase ? dashCache : camelCache;
    if (!cache.has(key))
        testPrefix(key);
    return cache.get(key) || key;
});

var axes = ['', 'X', 'Y', 'Z'];
var order = ['translate', 'scale', 'rotate', 'skew', 'transformPerspective'];
var TRANSFORM_ORIGIN_X = 'transformOriginX';
var TRANSFORM_ORIGIN_Y = 'transformOriginY';
var transformProps = order.reduce(function (acc, key) {
    return axes.reduce(function (axesAcc, axesKey) {
        axesAcc.push(key + axesKey);
        return axesAcc;
    }, acc);
}, ['x', 'y', 'z']);
var transformPropDictionary = transformProps.reduce(function (dict, key) {
    dict[key] = true;
    return dict;
}, {});
var isTransformProp = function (key) { return transformPropDictionary[key] === true; };
var sortTransformProps = function (a, b) { return transformProps.indexOf(a) - transformProps.indexOf(b); };
var isTransformOriginProp = function (key) { return key === TRANSFORM_ORIGIN_X || key === TRANSFORM_ORIGIN_Y; };

var valueTypes = {
    color: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    backgroundColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    outlineColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    fill: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    stroke: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    borderColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    borderTopColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    borderRightColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    borderBottomColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    borderLeftColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    borderRadius: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    width: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    maxWidth: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    height: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    maxHeight: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    top: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    left: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    bottom: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    right: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    rotate: style_value_types__WEBPACK_IMPORTED_MODULE_1__["degrees"],
    rotateX: style_value_types__WEBPACK_IMPORTED_MODULE_1__["degrees"],
    rotateY: style_value_types__WEBPACK_IMPORTED_MODULE_1__["degrees"],
    rotateZ: style_value_types__WEBPACK_IMPORTED_MODULE_1__["degrees"],
    scale: style_value_types__WEBPACK_IMPORTED_MODULE_1__["scale"],
    scaleX: style_value_types__WEBPACK_IMPORTED_MODULE_1__["scale"],
    scaleY: style_value_types__WEBPACK_IMPORTED_MODULE_1__["scale"],
    scaleZ: style_value_types__WEBPACK_IMPORTED_MODULE_1__["scale"],
    skewX: style_value_types__WEBPACK_IMPORTED_MODULE_1__["degrees"],
    skewY: style_value_types__WEBPACK_IMPORTED_MODULE_1__["degrees"],
    distance: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    translateX: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    translateY: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    translateZ: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    perspective: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    opacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__["alpha"],
    transformOriginX: style_value_types__WEBPACK_IMPORTED_MODULE_1__["percent"],
    transformOriginY: style_value_types__WEBPACK_IMPORTED_MODULE_1__["percent"],
    transformOriginZ: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"]
};
var getValueType = (function (key) { return valueTypes[key]; });

var aliasMap = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    originX: 'transformOriginX',
    originY: 'transformOriginY',
    originZ: 'transformOriginZ'
};
var NUMBER = 'number';
var OBJECT = 'object';
var COLON = ':';
var SEMI_COLON = ';';
var TRANSFORM_ORIGIN = 'transform-origin';
var TRANSFORM = 'transform';
var TRANSLATE_Z = 'translateZ';
var TRANSFORM_NONE = ';transform: none';
var styleRule = function (key, value) {
    return "" + SEMI_COLON + key + COLON + value;
};
function buildStylePropertyString(state, changedValues, enableHardwareAcceleration, blacklist) {
    if (changedValues === void 0) { changedValues = true; }
    if (enableHardwareAcceleration === void 0) { enableHardwareAcceleration = true; }
    var valuesToChange = changedValues === true ? Object.keys(state) : changedValues;
    var propertyString = '';
    var transformString = '';
    var hasTransformOrigin = false;
    var transformIsDefault = true;
    var hasTransform = false;
    var transformHasZ = false;
    var numChangedValues = valuesToChange.length;
    for (var i = 0; i < numChangedValues; i++) {
        var key = valuesToChange[i];
        if (isTransformProp(key)) {
            hasTransform = true;
            for (var stateKey in state) {
                if (isTransformProp(stateKey) &&
                    valuesToChange.indexOf(stateKey) === -1) {
                    valuesToChange.push(stateKey);
                }
            }
            break;
        }
    }
    valuesToChange.sort(sortTransformProps);
    var totalNumChangedValues = valuesToChange.length;
    for (var i = 0; i < totalNumChangedValues; i++) {
        var key = valuesToChange[i];
        if (blacklist.has(key))
            continue;
        var isTransformKey = isTransformProp(key);
        var value = state[key];
        var valueType = getValueType(key);
        if (isTransformKey) {
            if ((valueType.default && value !== valueType.default) ||
                (!valueType.default && value !== 0)) {
                transformIsDefault = false;
            }
        }
        if (valueType &&
            (typeof value === NUMBER || typeof value === OBJECT) &&
            valueType.transform) {
            value = valueType.transform(value);
        }
        if (isTransformKey) {
            transformString += key + '(' + value + ') ';
            transformHasZ = key === TRANSLATE_Z ? true : transformHasZ;
        }
        else if (isTransformOriginProp(key)) {
            state[key] = value;
            hasTransformOrigin = true;
        }
        else {
            propertyString += styleRule(prefixer(key, true), value);
        }
    }
    if (hasTransformOrigin) {
        propertyString += styleRule(TRANSFORM_ORIGIN, (state.transformOriginX || 0) + " " + (state.transformOriginY ||
            0) + " " + (state.transformOriginZ || 0));
    }
    if (hasTransform) {
        if (!transformHasZ && enableHardwareAcceleration) {
            transformString += TRANSLATE_Z + "(0)";
        }
        propertyString += styleRule(TRANSFORM, transformIsDefault ? TRANSFORM_NONE : transformString);
    }
    return propertyString;
}

var SCROLL_LEFT = 'scrollLeft';
var SCROLL_TOP = 'scrollTop';
var scrollValues = new Set([SCROLL_LEFT, SCROLL_TOP]);
var cssStyler = createStyler({
    onRead: function (key, _a) {
        var element = _a.element, preparseOutput = _a.preparseOutput;
        var valueType = getValueType(key);
        if (isTransformProp(key)) {
            return valueType ? valueType.default || 0 : 0;
        }
        else if (scrollValues.has(key)) {
            return element[key];
        }
        else {
            var domValue = window
                .getComputedStyle(element, null)
                .getPropertyValue(prefixer(key, true)) || 0;
            return preparseOutput && valueType && valueType.parse
                ? valueType.parse(domValue)
                : domValue;
        }
    },
    onRender: function (state, _a, changedValues) {
        var element = _a.element, enableHardwareAcceleration = _a.enableHardwareAcceleration;
        element.style.cssText += buildStylePropertyString(state, changedValues, enableHardwareAcceleration, scrollValues);
        if (changedValues.indexOf(SCROLL_LEFT) !== -1)
            element.scrollLeft = state.scrollLeft;
        if (changedValues.indexOf(SCROLL_TOP) !== -1)
            element.scrollTop = state.scrollTop;
    },
    aliasMap: aliasMap,
    uncachedValues: scrollValues
});
var css = (function (element, props) {
    return cssStyler(__assign({ element: element, enableHardwareAcceleration: true, preparseOutput: true }, props));
});

var ZERO_NOT_ZERO = 0.0000001;
var percentToPixels = function (percent$$1, length) {
    return (percent$$1 / 100) * length + 'px';
};
var build = function (state, dimensions, isPath, pathLength) {
    var hasTransform = false;
    var hasDashArray = false;
    var props = {};
    var dashArrayStyles = isPath ? {
        pathLength: '0',
        pathSpacing: "" + pathLength
    } : undefined;
    var scale$$1 = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1;
    var scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale$$1 || 1;
    var transformOriginX = dimensions.width * ((state.originX || 50) / 100) + dimensions.x;
    var transformOriginY = dimensions.height * ((state.originY || 50) / 100) + dimensions.y;
    var scaleTransformX = -transformOriginX * (scale$$1 * 1);
    var scaleTransformY = -transformOriginY * (scaleY * 1);
    var scaleReplaceX = transformOriginX / scale$$1;
    var scaleReplaceY = transformOriginY / scaleY;
    var transform = {
        translate: "translate(" + state.translateX + ", " + state.translateY + ") ",
        scale: "translate(" + scaleTransformX + ", " + scaleTransformY + ") scale(" + scale$$1 + ", " + scaleY + ") translate(" + scaleReplaceX + ", " + scaleReplaceY + ") ",
        rotate: "rotate(" + state.rotate + ", " + transformOriginX + ", " + transformOriginY + ") ",
        skewX: "skewX(" + state.skewX + ") ",
        skewY: "skewY(" + state.skewY + ") "
    };
    for (var key in state) {
        if (state.hasOwnProperty(key)) {
            var value = state[key];
            if (isTransformProp(key)) {
                hasTransform = true;
            }
            else if (isPath && (key === 'pathLength' || key === 'pathSpacing') && typeof value === 'number') {
                hasDashArray = true;
                dashArrayStyles[key] = percentToPixels(value, pathLength);
            }
            else if (isPath && key === 'pathOffset') {
                props['stroke-dashoffset'] = percentToPixels(-value, pathLength);
            }
            else {
                props[camelToDash(key)] = value;
            }
        }
    }
    if (hasDashArray) {
        props['stroke-dasharray'] = dashArrayStyles.pathLength + ' ' + dashArrayStyles.pathSpacing;
    }
    if (hasTransform) {
        props.transform = '';
        for (var key in transform) {
            if (transform.hasOwnProperty(key)) {
                var defaultValue = (key === 'scale') ? '1' : '0';
                props.transform += transform[key].replace(/undefined/g, defaultValue);
            }
        }
    }
    return props;
};

var valueTypes$1 = {
    fill: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    stroke: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    scale: style_value_types__WEBPACK_IMPORTED_MODULE_1__["scale"],
    scaleX: style_value_types__WEBPACK_IMPORTED_MODULE_1__["scale"],
    scaleY: style_value_types__WEBPACK_IMPORTED_MODULE_1__["scale"],
    opacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__["alpha"],
    fillOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__["alpha"],
    strokeOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__["alpha"]
};
var getValueType$1 = (function (key) { return valueTypes$1[key]; });

var svgStyler = createStyler({
    onRead: function (key, _a) {
        var element = _a.element;
        if (!isTransformProp(key)) {
            return element.getAttribute(key);
        }
        else {
            var valueType = getValueType$1(key);
            return valueType ? valueType.default : 0;
        }
    },
    onRender: function (state, _a, changedValues) {
        var dimensions = _a.dimensions, element = _a.element, isPath = _a.isPath, pathLength = _a.pathLength;
        setDomAttrs(element, build(state, dimensions, isPath, pathLength));
    },
    aliasMap: {
        x: 'translateX',
        y: 'translateY',
        background: 'fill'
    }
});
var svg = (function (element) {
    var _a = element.getBBox(), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    var props = {
        element: element,
        dimensions: { x: x, y: y, width: width, height: height },
        isPath: false
    };
    if (element.tagName === 'path') {
        props.isPath = true;
        props.pathLength = element.getTotalLength();
    }
    return svgStyler(props);
});

var viewport = createStyler({
    useCache: false,
    onRead: function (key) {
        return key === 'scrollTop' ? window.pageYOffset : window.pageXOffset;
    },
    onRender: function (_a) {
        var _b = _a.scrollTop, scrollTop = _b === void 0 ? 0 : _b, _c = _a.scrollLeft, scrollLeft = _c === void 0 ? 0 : _c;
        return window.scrollTo(scrollLeft, scrollTop);
    }
});

var cache = new WeakMap();
var createDOMStyler = function (node, props) {
    var styler;
    if (node instanceof HTMLElement) {
        styler = css(node, props);
    }
    else if (node instanceof SVGElement) {
        styler = svg(node);
    }
    else if (typeof window !== 'undefined' && node === window) {
        styler = viewport(node);
    }
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_2__["invariant"])(styler !== undefined, 'No valid node provided. Node must be HTMLElement, SVGElement or window.');
    cache.set(node, styler);
    return styler;
};
var getStyler = function (node, props) {
    return cache.has(node) ? cache.get(node) : createDOMStyler(node, props);
};
function index (nodeOrSelector, props) {
    var node = typeof nodeOrSelector === 'string'
        ? document.querySelector(nodeOrSelector)
        : nodeOrSelector;
    return getStyler(node, props);
}

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "../node_modules/timers-browserify/main.js":
/*!*************************************************!*\
  !*** ../node_modules/timers-browserify/main.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "../node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../src/action.ts":
/*!************************!*\
  !*** ../src/action.ts ***!
  \************************/
/*! exports provided: action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
function trimSlashes(str) {
    return str.replace(/^\/|\/$/g, '');
}
function startsWith(a, b) {
    return a.substr(0, b.length) == b;
}
var action = Object.assign(function (data, cb, replace) {
    if (replace === void 0) { replace = false; }
    if (typeof data == 'string')
        return action({ url: data }, cb, replace);
    if (!data || !data.url)
        return {};
    var url = data.url, target = data.target;
    if (url.indexOf('mailto:') === 0)
        return { href: url };
    if (url.indexOf('@') > -1)
        return { href: 'mailto:' + url };
    if (url.indexOf('.') > -1 || url.indexOf('://') > -1)
        return {
            href: url,
            target: target || '_blank',
            rel: 'external noopener',
            onclick: cb
        };
    else
        return {
            href: url,
            target: target,
            onclick: function (e) {
                if (cb)
                    cb();
                action.anchorClick(e, url, replace);
            }
        };
}, {
    isActive: function (data, exact) {
        if (exact === void 0) { exact = false; }
        if (typeof data == 'string')
            return action.isActive({ url: data }, exact);
        var pathname = window.location.pathname;
        var path = trimSlashes(pathname);
        var url = trimSlashes(data.url);
        if (exact)
            return path == url;
        return startsWith(path, url);
    },
    anchorClick: function (e, href, replace) {
        if (e.which == 2)
            return;
        e.preventDefault();
        action.navigate(href, replace);
    },
    navigate: function (url, replace) {
        if (!url)
            return;
        if (typeof url != 'string' && 'url' in url)
            return action.navigate(url.url, replace);
        if (replace)
            history.replaceState(null, null, url);
        else
            history.pushState(null, null, url);
        window.onpopstate({ state: null });
    }
});


/***/ }),

/***/ "../src/form.ts":
/*!**********************!*\
  !*** ../src/form.ts ***!
  \**********************/
/*! exports provided: FormBase, Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBase", function() { return FormBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_formstore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/formstore */ "../src/store/formstore.ts");
/* harmony import */ var object_to_formdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! object-to-formdata */ "../node_modules/object-to-formdata/index.js");
/* harmony import */ var object_to_formdata__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(object_to_formdata__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_form_fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/form/fields */ "../src/ui/form/fields.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};




var FormBase = /** @class */ (function () {
    function FormBase(store, fields) {
        var _this = this;
        this.text = function (config) { return _this.fields.asField(_ui_form_fields__WEBPACK_IMPORTED_MODULE_3__["Input"], __assign({}, config)); };
        this.email = function (config) { return _this.text(__assign({}, config, { type: 'email' })); };
        this.password = function (config) { return _this.text(__assign({}, config, { type: 'password' })); };
        this.textarea = function (config) { return _this.fields.asField(_ui_form_fields__WEBPACK_IMPORTED_MODULE_3__["Textarea"], __assign({}, config)); };
        this.select = function (config) { return _this.fields.asField(_ui_form_fields__WEBPACK_IMPORTED_MODULE_3__["Select"], config); };
        this.radio = function (config) { return _this.fields.asField(_ui_form_fields__WEBPACK_IMPORTED_MODULE_3__["Radios"], config); };
        this.checkbox = function (config) { return _this.fields.asField(_ui_form_fields__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], config); };
        this.boxes = function (config) { return _this.fields.asField(_ui_form_fields__WEBPACK_IMPORTED_MODULE_3__["Boxes"], config); };
        this.store = store;
        this.fields = fields;
    }
    FormBase.prototype.status = function () {
        return this.store.status.type;
    };
    FormBase.prototype.isCompleted = function () {
        return this.status() == _store_formstore__WEBPACK_IMPORTED_MODULE_1__["FormStatus"].Success;
    };
    FormBase.prototype.formSubmit = function (e, options) {
        if (options === void 0) { options = {}; }
        e.preventDefault();
        var form = e.target;
        var url = form.action, method = form.method;
        var type = form.getAttribute('enctype') || 'application/json';
        return this.submit(type, __assign({ url: url, method: method }, options));
    };
    FormBase.prototype.submit = function (type, _a) {
        var _this = this;
        var url = _a.url, method = _a.method, _b = _a.headers, headers = _b === void 0 ? {} : _b, options = __rest(_a, ["url", "method", "headers"]);
        switch (this.store.status.type) {
            case 'sending':
            case 'success':
                return;
            default:
                return this.transfer(__assign({ url: url,
                    method: method, data: this.formatData(type), headers: type.indexOf('multipart') === 0
                        ? headers
                        : __assign({ 'Content-Type': type }, headers), serialize: function (v) { return v; } }, options)).then(function (response) { return Promise.resolve(_this.store.success(response)); }, function (errors) { return Promise.reject(_this.store.fail(errors)); });
        }
    };
    FormBase.prototype.formatData = function (type) {
        switch (type) {
            case 'application/x-www-form-urlencoded':
                return mithril__WEBPACK_IMPORTED_MODULE_0___default.a.buildQueryString(this.store.data);
            case 'multipart/form-data':
                return object_to_formdata__WEBPACK_IMPORTED_MODULE_2___default()(this.store.data);
            case 'application/json':
                return JSON.stringify(this.store.data);
        }
    };
    FormBase.prototype.transfer = function (request) {
        var _this = this;
        return mithril__WEBPACK_IMPORTED_MODULE_0___default.a.request(__assign({}, request, { config: function (xhr) { return _this.store.send(xhr); } }));
    };
    return FormBase;
}());

/**
 * Als instance klasse van de view waar je de form wilt gebruiken maak je een nieuw Form aan.
 * Het onsubmit event van je html formulier koppel je door aan de submit methode van dit form object.
 * Velden toevoegen aan je html formulier is gemakkelijk via de shortcurts die je vind op dit form object.
 * Wanneer het onsucces event wordt aangeroepen weet je dat het formulier succesvol verwerkt is door de server.
 *
 * Eigen custom velden maken en toevoegen kan door de attrs methode te gebruiken (zie implementatie shortcuts).
 * Een eigen veld moet ten minste de attributes 'value' en 'onchange' ondersteunen om te functioneren.
 *
 * Langs de serverkant moet je een route voorzien die de data verwerkt.
 * Deze stuurt een json bericht terug van volgende type:
 * {
 *      "succes": true | false
 *      "errors": { ... }           // Alleen als succes false is
 *      "data": { ... }             // Alleen als succes true is (wordt meegegeven als argument aan de onsucces)
 * }
 *
 * TODO:
 * - Gebruik de setCustomValidity methode om de in-browser validatie toe te passen op elementen met een error
 * - Select vervangen door geheel eigen implementatie (die makkelijker te stylen is als de standaard html select)
 * - Een flexibel en veilig wysiwyg-editor veld toevoegen (bv. tinymce)
 * - Basis styling van bestaande elementen robuuster en flexibeler maken
 */
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(_a) {
        if (_a === void 0) { _a = {}; }
        var _b = _a.data, data = _b === void 0 ? {} : _b, config = __rest(_a, ["data"]);
        var _this = this;
        var store = new _store_formstore__WEBPACK_IMPORTED_MODULE_1__["FormStore"](data);
        var fields = new _ui_form_fields__WEBPACK_IMPORTED_MODULE_3__["Fields"](store, __assign({ defaultUnstyled: true, labelInFields: false, defaultRequired: false }, config));
        _this = _super.call(this, store, fields) || this;
        return _this;
    }
    Form.prototype.formSubmit = function (e, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return _super.prototype.formSubmit.call(this, e, options).catch(function (errors) {
            var firstKey = Object.keys(errors)[0];
            if (firstKey)
                _this.fields.focusField(firstKey);
        });
    };
    return Form;
}(FormBase));



/***/ }),

/***/ "../src/hyperscript.ts":
/*!*****************************!*\
  !*** ../src/hyperscript.ts ***!
  \*****************************/
/*! exports provided: m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return m; });
/* harmony import */ var mithril_hyperscript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril/hyperscript */ "../node_modules/mithril/hyperscript.js");
/* harmony import */ var mithril_hyperscript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril_hyperscript__WEBPACK_IMPORTED_MODULE_0__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var isPlainFunction = function (input) {
    return typeof input === 'function' && typeof input.prototype.view !== "function";
};
var m = function (selector, attrs) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    if (isPlainFunction(selector)) {
        if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs))
            return selector({ children: attrs.concat(children) });
        return selector(__assign({}, attrs, { children: children }));
    }
    return mithril_hyperscript__WEBPACK_IMPORTED_MODULE_0___default.a.apply(void 0, [selector, attrs].concat(children));
};


/***/ }),

/***/ "../src/index.ts":
/*!***********************!*\
  !*** ../src/index.ts ***!
  \***********************/
/*! exports provided: Component, createContext, Page, largeImage, getResizedUrl, Picture, Image, Background, Icon, Slider, MediaQuery, ModalOverlay, Modal, Portal, Masonry, SliderStore, FormStatus, FormStore, ModalStore, Router, action, FormBase, Form, Input, Select, Textarea, Radio, Radios, Checkbox, Boxes, Fields, Field, classes, subComponent, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hyperscript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hyperscript */ "../src/hyperscript.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _hyperscript__WEBPACK_IMPORTED_MODULE_0__["m"]; });

/* harmony import */ var _ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/component */ "../src/ui/component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _ui_component__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

/* harmony import */ var _ui_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/context */ "../src/ui/context.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return _ui_context__WEBPACK_IMPORTED_MODULE_2__["createContext"]; });

/* harmony import */ var _ui_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/page */ "../src/ui/page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _ui_page__WEBPACK_IMPORTED_MODULE_3__["Page"]; });

/* harmony import */ var _ui_picture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/picture */ "../src/ui/picture.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "largeImage", function() { return _ui_picture__WEBPACK_IMPORTED_MODULE_4__["largeImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getResizedUrl", function() { return _ui_picture__WEBPACK_IMPORTED_MODULE_4__["getResizedUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picture", function() { return _ui_picture__WEBPACK_IMPORTED_MODULE_4__["Picture"]; });

/* harmony import */ var _ui_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/image */ "../src/ui/image.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _ui_image__WEBPACK_IMPORTED_MODULE_5__["Image"]; });

/* harmony import */ var _ui_background__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/background */ "../src/ui/background.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return _ui_background__WEBPACK_IMPORTED_MODULE_6__["Background"]; });

/* harmony import */ var _ui_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/icon */ "../src/ui/icon.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _ui_icon__WEBPACK_IMPORTED_MODULE_7__["Icon"]; });

/* harmony import */ var _ui_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/slider */ "../src/ui/slider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _ui_slider__WEBPACK_IMPORTED_MODULE_8__["Slider"]; });

/* harmony import */ var _ui_mediaquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/mediaquery */ "../src/ui/mediaquery.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaQuery", function() { return _ui_mediaquery__WEBPACK_IMPORTED_MODULE_9__["MediaQuery"]; });

/* harmony import */ var _ui_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/modal */ "../src/ui/modal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalOverlay", function() { return _ui_modal__WEBPACK_IMPORTED_MODULE_10__["ModalOverlay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _ui_modal__WEBPACK_IMPORTED_MODULE_10__["Modal"]; });

/* harmony import */ var _ui_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/portal */ "../src/ui/portal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return _ui_portal__WEBPACK_IMPORTED_MODULE_11__["Portal"]; });

/* harmony import */ var _ui_masonry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/masonry */ "../src/ui/masonry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Masonry", function() { return _ui_masonry__WEBPACK_IMPORTED_MODULE_12__["Masonry"]; });

/* harmony import */ var _store_sliderstore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/sliderstore */ "../src/store/sliderstore.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderStore", function() { return _store_sliderstore__WEBPACK_IMPORTED_MODULE_13__["SliderStore"]; });

/* harmony import */ var _store_formstore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store/formstore */ "../src/store/formstore.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormStatus", function() { return _store_formstore__WEBPACK_IMPORTED_MODULE_14__["FormStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormStore", function() { return _store_formstore__WEBPACK_IMPORTED_MODULE_14__["FormStore"]; });

/* harmony import */ var _store_modalstore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/modalstore */ "../src/store/modalstore.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalStore", function() { return _store_modalstore__WEBPACK_IMPORTED_MODULE_15__["ModalStore"]; });

/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./router */ "../src/router.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _router__WEBPACK_IMPORTED_MODULE_16__["Router"]; });

/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./action */ "../src/action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "action", function() { return _action__WEBPACK_IMPORTED_MODULE_17__["action"]; });

/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form */ "../src/form.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormBase", function() { return _form__WEBPACK_IMPORTED_MODULE_18__["FormBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _form__WEBPACK_IMPORTED_MODULE_18__["Form"]; });

/* harmony import */ var _ui_form_fields__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ui/form/fields */ "../src/ui/form/fields.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _ui_form_fields__WEBPACK_IMPORTED_MODULE_19__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _ui_form_fields__WEBPACK_IMPORTED_MODULE_19__["Select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _ui_form_fields__WEBPACK_IMPORTED_MODULE_19__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _ui_form_fields__WEBPACK_IMPORTED_MODULE_19__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radios", function() { return _ui_form_fields__WEBPACK_IMPORTED_MODULE_19__["Radios"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _ui_form_fields__WEBPACK_IMPORTED_MODULE_19__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Boxes", function() { return _ui_form_fields__WEBPACK_IMPORTED_MODULE_19__["Boxes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fields", function() { return _ui_form_fields__WEBPACK_IMPORTED_MODULE_19__["Fields"]; });

/* harmony import */ var _ui_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ui/form/field */ "../src/ui/form/field.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return _ui_form_field__WEBPACK_IMPORTED_MODULE_20__["Field"]; });

/* harmony import */ var _ui_form_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ui/form/input */ "../src/ui/form/input.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _ui_form_textarea__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ui/form/textarea */ "../src/ui/form/textarea.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _ui_form_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ui/form/select */ "../src/ui/form/select.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _ui_form_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ui/form/checkbox */ "../src/ui/form/checkbox.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _ui_form_radios__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ui/form/radios */ "../src/ui/form/radios.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _ui_form_radio__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ui/form/radio */ "../src/ui/form/radio.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _ui_form_boxes__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ui/form/boxes */ "../src/ui/form/boxes.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _util_classes__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./util/classes */ "../src/util/classes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classes", function() { return _util_classes__WEBPACK_IMPORTED_MODULE_28__["classes"]; });

/* harmony import */ var _util_subcomponent__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./util/subcomponent */ "../src/util/subcomponent.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subComponent", function() { return _util_subcomponent__WEBPACK_IMPORTED_MODULE_29__["subComponent"]; });

































/***/ }),

/***/ "../src/router.ts":
/*!************************!*\
  !*** ../src/router.ts ***!
  \************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jump_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jump.js */ "../node_modules/jump.js/dist/jump.module.js");


var Router = /** @class */ (function () {
    function Router(initialState) {
        this.transport = null;
        this.data = {};
        this.data = initialState;
    }
    Router.prototype.url = function () {
        return this.data.url;
    };
    Router.prototype.view = function (vnode) {
        var href = window.location.href;
        var params = href.indexOf('?') > -1 ? mithril__WEBPACK_IMPORTED_MODULE_0___default.a.parseQueryString(href.split('?')[1]) : {};
        var route = { href: href, path: window.location.pathname, params: params };
        return this.resolve(this.data, route);
    };
    Router.prototype.mount = function (element) {
        var _this = this;
        window.onpopstate = function (e) {
            if (e.state) {
                _this.setData(e.state.data);
                mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();
            }
            else {
                _this.navigate(window.location.pathname);
            }
        };
        mithril__WEBPACK_IMPORTED_MODULE_0___default.a.mount(element, this);
    };
    Router.prototype.getPageTitle = function (data) {
        return data.title;
    };
    Router.prototype.setData = function (data) {
        this.data = data;
        var _a = window.location, hash = _a.hash, href = _a.href;
        var queryIndex = href.indexOf('?');
        var query = queryIndex > -1 ? href.substr(queryIndex) : '';
        window.history.replaceState({ data: data }, this.getPageTitle(data));
        document.title = this.getPageTitle(data);
    };
    Router.prototype.clear = function () {
        if (!this.transport)
            return;
        this.transport.abort();
        this.transport = null;
    };
    Router.prototype.scroll = function (hash) {
        if (hash)
            Object(jump_js__WEBPACK_IMPORTED_MODULE_1__["default"])(hash);
        else
            window.scrollTo(0, 0);
    };
    Router.prototype.fetch = function (path) {
        return Promise.reject('implement');
    };
    Router.prototype.resolve = function (data, route) {
        throw 'implement';
    };
    Router.prototype.navigate = function (path) {
        var _this = this;
        var hash = window.location.hash;
        if (path == this.url()) {
            if (hash)
                this.scroll(hash);
        }
        else {
            this.clear();
            return this.fetch(path).then(function (data) {
                _this.setData(data);
                setTimeout(function () { return _this.scroll(hash); });
                return data;
            });
        }
    };
    return Router;
}());



/***/ }),

/***/ "../src/store/formstore.ts":
/*!*********************************!*\
  !*** ../src/store/formstore.ts ***!
  \*********************************/
/*! exports provided: FormStatus, FormStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormStatus", function() { return FormStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormStore", function() { return FormStore; });
var FormStatus = {
    Reset: 'reset',
    Sending: 'sending',
    Failure: 'error',
    Success: 'success' // {response}
};
var FormStore = /** @class */ (function () {
    function FormStore(data) {
        if (data === void 0) { data = {}; }
        this.data = data;
        this.status = { type: 'reset' };
    }
    FormStore.prototype.send = function (xhr) {
        this.status = { type: 'sending', xhr: xhr };
    };
    FormStore.prototype.success = function (response) {
        this.status = { type: 'success', response: response };
        return response;
    };
    FormStore.prototype.fail = function (errors) {
        this.status = { type: 'error', errors: errors };
        return errors;
    };
    FormStore.prototype.reset = function () {
        switch (this.status.type) {
            case 'sending':
                this.status.xhr.abort();
            default:
                this.status = { type: 'reset' };
        }
    };
    FormStore.prototype.setData = function (key, value) {
        this.data[key] = value;
    };
    FormStore.prototype.toString = function () {
        return this.status.type;
    };
    return FormStore;
}());



/***/ }),

/***/ "../src/store/modalstore.ts":
/*!**********************************!*\
  !*** ../src/store/modalstore.ts ***!
  \**********************************/
/*! exports provided: ModalStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalStore", function() { return ModalStore; });
var ModalStore = /** @class */ (function () {
    function ModalStore() {
        var _this = this;
        this.isOpen = false;
        this.open = function () {
            return _this.isOpen = true;
        };
        this.close = function () {
            return _this.isOpen = false;
        };
        this.toggle = function () {
            return _this.isOpen = !_this.isOpen;
        };
    }
    return ModalStore;
}());



/***/ }),

/***/ "../src/store/sliderstore.ts":
/*!***********************************!*\
  !*** ../src/store/sliderstore.ts ***!
  \***********************************/
/*! exports provided: SliderStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderStore", function() { return SliderStore; });
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril/stream */ "../node_modules/mithril/stream.js");
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril_stream__WEBPACK_IMPORTED_MODULE_0__);

/**
 * index: Stream<number>
 * total: Stream<number>
 * ?actives: Stream<Array<number => boolean>>
 */
var SliderStore = /** @class */ (function () {
    function SliderStore() {
        this.index = mithril_stream__WEBPACK_IMPORTED_MODULE_0___default()(0);
        this.total = mithril_stream__WEBPACK_IMPORTED_MODULE_0___default()(0);
        this.actives = mithril_stream__WEBPACK_IMPORTED_MODULE_0___default()([]);
    }
    SliderStore.prototype.has = function (index) {
        return index >= 0 && index < this.total();
    };
    SliderStore.prototype.hasNext = function () {
        return this.has(this.index() + 1);
    };
    SliderStore.prototype.hasPrevious = function () {
        return this.has(this.index() - 1);
    };
    SliderStore.prototype.goTo = function (index) {
        return this.has(index) && (this.index(index), true);
    };
    SliderStore.prototype.goNext = function () {
        return this.goTo(this.index() + 1);
    };
    SliderStore.prototype.goPrevious = function () {
        return this.goTo(this.index() - 1);
    };
    SliderStore.prototype.isActive = function (childIndex) {
        return this.actives()[childIndex] && this.actives()[childIndex]();
    };
    return SliderStore;
}());



/***/ }),

/***/ "../src/ui/background.less":
/*!*********************************!*\
  !*** ../src/ui/background.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../src/ui/background.ts":
/*!*******************************!*\
  !*** ../src/ui/background.ts ***!
  \*******************************/
/*! exports provided: Background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../src/ui/component.ts");
/* harmony import */ var _picture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./picture */ "../src/ui/picture.ts");
/* harmony import */ var _background_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background.less */ "../src/ui/background.less");
/* harmony import */ var _background_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_background_less__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};




var Background = /** @class */ (function (_super) {
    __extends(Background, _super);
    function Background() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showing = null;
        return _this;
    }
    Background.prototype.image = function () {
        var img = this.attrs.img;
        return typeof img === 'string' ? { src: img } : img;
    };
    Background.prototype.onCreate = function () {
        var img = this.image();
        if (!img.src || img.empty)
            return;
        this.showing = img.src;
        var style = this.dom.style;
        var url = Object(_picture__WEBPACK_IMPORTED_MODULE_2__["getResizedUrl"])(img.src, this.dom.offsetWidth, this.dom.offsetHeight);
        style.backgroundImage = "url('" + url + "')";
        if (img.focus)
            style.backgroundPosition = img.focus.x * 100 + "% " + img.focus.y * 100 + "%";
    };
    Background.prototype.onUpdate = function () {
        var img = this.image();
        if (this.showing !== img.src)
            this.onCreate();
    };
    Background.prototype.render = function () {
        var _a = this.attrs, img = _a.img, attrs = __rest(_a, ["img"]);
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()('.background', __assign({ key: this.image().src }, attrs), this.children);
    };
    return Background;
}(_component__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "../src/ui/component.ts":
/*!******************************!*\
  !*** ../src/ui/component.ts ***!
  \******************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mithril_redraw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril/redraw */ "../node_modules/mithril/redraw.js");
/* harmony import */ var mithril_redraw__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mithril_redraw__WEBPACK_IMPORTED_MODULE_1__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


// Type signature is incomplete
var redraw = mithril_redraw__WEBPACK_IMPORTED_MODULE_1___default.a;
var Component = /** @class */ (function () {
    function Component(vnode) {
        var _this = this;
        this.__root = document.createDocumentFragment();
        // Mithril connection
        /* Uncomment to test performance vs global redraws
        dom = null
        oninit = vnode => (this.__update(vnode), this.onInit())
        oncreate = vnode => (this.__update(vnode), this.onCreate())
        onupdate = vnode => (this.__update(vnode), this.onUpdate())
        onremove = vnode => this.onRemove()
        onbeforeremove = vnode => this.onBeforeRemove()
        onbeforeupdate = (_, vnode) => this.onBeforeUpdate(vnode)
        view() {
            return this.render()
        }*/
        this.oninit = function (vnode) { return (_this.__update(vnode), _this.onInit()); };
        this.oncreate = function (vnode) {
            _this.__update(vnode);
            _this.redraw();
            redraw.subscribe(_this.__root, mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw);
            vnode.dom.parentNode.replaceChild(_this.__root, vnode.dom);
            _this.onCreate();
        };
        this.onupdate = function (vnode) {
            _this.__update(vnode);
            _this.redraw();
            _this.onUpdate();
        };
        this.onbeforeremove = function (vnode) {
            return Promise.resolve(_this.onBeforeRemove()).then(_this.__remove, _this.__remove);
        };
        this.onremove = function (vnode) { return _this.onRemove(); };
        this.onbeforeupdate = function (_, vnode) { return _this.onBeforeUpdate(vnode.attrs); };
        this.__remove = function () {
            _this.__root.vnodes.forEach(function (vnode) { return vnode.dom.remove(); });
            redraw.unsubscribe(_this.__root, mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw);
        };
        this.__update(vnode);
    }
    Object.defineProperty(Component.prototype, "dom", {
        get: function () {
            var vnodes = this.__root.vnodes;
            if (vnodes.length === 0)
                return null;
            if (vnodes.length === 1)
                return vnodes[0].dom;
            return vnodes.map(function (vnode) { return vnode.dom; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Component.prototype, "children", {
        get: function () {
            return this.attrs.children;
        },
        enumerable: true,
        configurable: true
    });
    // Public API
    Component.prototype.onInit = function () { };
    Component.prototype.onCreate = function () { };
    Component.prototype.onUpdate = function () { };
    Component.prototype.onBeforeRemove = function () {
        return;
    };
    Component.prototype.onRemove = function () { };
    Component.prototype.onBeforeUpdate = function (attrs) { };
    Component.prototype.render = function () {
        throw 'implement';
    };
    Component.prototype.redraw = function () {
        redraw.render(this.__root, this.render());
    };
    Component.prototype.view = function () {
        return '';
    };
    Component.prototype.__update = function (vnode) {
        this.attrs = __assign({}, vnode.attrs, { children: vnode.children &&
                vnode.children[0] &&
                typeof vnode.children[0].children == 'function'
                ? vnode.children[0].children
                : vnode.children });
    };
    return Component;
}());



/***/ }),

/***/ "../src/ui/context.ts":
/*!****************************!*\
  !*** ../src/ui/context.ts ***!
  \****************************/
/*! exports provided: createContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return createContext; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "../src/ui/component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var createContext = function (context) {
    return {
        Provider: /** @class */ (function (_super) {
            __extends(Provider, _super);
            function Provider() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Provider.prototype.redraw = function () {
                var old = context;
                context = this.attrs.value;
                _super.prototype.redraw.call(this);
                context = old;
            };
            Provider.prototype.render = function () {
                return this.children;
            };
            return Provider;
        }(_component__WEBPACK_IMPORTED_MODULE_0__["Component"])),
        Consumer: /** @class */ (function (_super) {
            __extends(Consumer, _super);
            function Consumer() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Consumer.prototype.render = function () {
                return this.attrs.children(context);
            };
            return Consumer;
        }(_component__WEBPACK_IMPORTED_MODULE_0__["Component"]))
    };
};


/***/ }),

/***/ "../src/ui/form/boxes.less":
/*!*********************************!*\
  !*** ../src/ui/form/boxes.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../src/ui/form/boxes.ts":
/*!*******************************!*\
  !*** ../src/ui/form/boxes.ts ***!
  \*******************************/
/*! exports provided: Boxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Boxes", function() { return Boxes; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_formutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/formutils */ "../src/util/formutils.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../component */ "../src/ui/component.ts");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox */ "../src/ui/form/checkbox.ts");
/* harmony import */ var _boxes_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./boxes.less */ "../src/ui/form/boxes.less");
/* harmony import */ var _boxes_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_boxes_less__WEBPACK_IMPORTED_MODULE_4__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Boxes = /** @class */ (function (_super) {
    __extends(Boxes, _super);
    function Boxes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.className = _this.attrs.className ||
            (_this.attrs.unstyled && 'boxes') ||
            'boxes-front';
        return _this;
    }
    Boxes.prototype.setValue = function (key, active) {
        var _a = this.attrs, _b = _a.value, value = _b === void 0 ? [] : _b, onchange = _a.onchange;
        if (active) {
            if (!value.find(function (v) { return v == key; }))
                onchange(value.concat([key]));
            else
                onchange(value);
        }
        else {
            onchange(value.filter(function (v) { return v != key; }));
        }
    };
    Boxes.prototype.render = function () {
        var _this = this;
        var _a = this.attrs, _b = _a.value, value = _b === void 0 ? [] : _b, options = _a.options, unstyled = _a.unstyled, required = _a.required;
        var cleanOptions = Object(_util_formutils__WEBPACK_IMPORTED_MODULE_1__["cleanupOptions"])(options);
        var half = Math.ceil(cleanOptions.length / 2);
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("div." + this.className, [
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("div." + this.className + "-left", [
                cleanOptions.slice(0, half).map(function (o) {
                    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_checkbox__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
                        unstyled: unstyled,
                        required: required && value.length == 0,
                        value: value.find(function (v) { return v == o.key; }),
                        onchange: function (d) { return _this.setValue(o.key, d); },
                        label: o.label
                    });
                })
            ]),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("." + this.className + "-right", [
                cleanOptions.slice(half).map(function (o) {
                    return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_checkbox__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
                        unstyled: unstyled,
                        required: required && value.length == 0,
                        value: value.find(function (v) { return v == o.key; }),
                        onchange: function (d) { return _this.setValue(o.key, d); },
                        label: o.label
                    });
                })
            ])
        ]);
    };
    return Boxes;
}(_component__WEBPACK_IMPORTED_MODULE_2__["Component"]));



/***/ }),

/***/ "../src/ui/form/checkbox.less":
/*!************************************!*\
  !*** ../src/ui/form/checkbox.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../src/ui/form/checkbox.ts":
/*!**********************************!*\
  !*** ../src/ui/form/checkbox.ts ***!
  \**********************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_formutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/formutils */ "../src/util/formutils.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component */ "../src/ui/component.ts");
/* harmony import */ var _checkbox_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox.less */ "../src/ui/form/checkbox.less");
/* harmony import */ var _checkbox_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_checkbox_less__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.className = _this.attrs.className ||
            (_this.attrs.unstyled && 'checkbox') ||
            'checkbox-front';
        _this.id = Object(_util_formutils__WEBPACK_IMPORTED_MODULE_1__["randomKey"])('check_');
        return _this;
    }
    Checkbox.prototype.render = function () {
        var _a = this.attrs, value = _a.value, onchange = _a.onchange, label = _a.label, _b = _a.name, name = _b === void 0 ? this.id : _b, required = _a.required;
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("div." + this.className, [
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("input." + this.className + "-input", {
                type: 'checkbox',
                name: name,
                id: this.id,
                checked: value ? true : false,
                onclick: onchange && (function () { return onchange(!value); }),
                required: required
            }),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("label." + this.className + "-label", { for: this.id }, mithril__WEBPACK_IMPORTED_MODULE_0___default()("span." + this.className + "-label-square"), mithril__WEBPACK_IMPORTED_MODULE_0___default()("span." + this.className + "-label-text", label))
        ]);
    };
    return Checkbox;
}(_component__WEBPACK_IMPORTED_MODULE_2__["Component"]));



/***/ }),

/***/ "../src/ui/form/field.less":
/*!*********************************!*\
  !*** ../src/ui/form/field.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../src/ui/form/field.ts":
/*!*******************************!*\
  !*** ../src/ui/form/field.ts ***!
  \*******************************/
/*! exports provided: Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component */ "../src/ui/component.ts");
/* harmony import */ var _util_formutils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/formutils */ "../src/util/formutils.ts");
/* harmony import */ var _field_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field.less */ "../src/ui/form/field.less");
/* harmony import */ var _field_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_field_less__WEBPACK_IMPORTED_MODULE_4__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.className = _this.attrs.unstyled ? 'field' : 'field-front';
        return _this;
    }
    Field.prototype.render = function () {
        var _a = this.attrs, errors = _a.errors, id = _a.id, required = _a.required, _b = _a.width, width = _b === void 0 ? 1.0 : _b;
        var style = { width: width * 100 + "%" };
        var hasErrors = errors !== undefined;
        var classes = [hasErrors && 'has-error', required && 'is-required'];
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("div." + this.className, { class: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes), style: style, id: id }, [
            this.viewLabel(),
            this.children,
            this.viewErrors()
        ]);
    };
    Field.prototype.viewLabel = function () {
        var label = this.attrs.label;
        if (!label)
            return;
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("div." + this.className + "-label", label);
    };
    Field.prototype.viewErrors = function () {
        var errors = this.attrs.errors;
        var hasErrors = errors !== undefined;
        if (!hasErrors)
            return;
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("div." + this.className + "-errormsg", Object(_util_formutils__WEBPACK_IMPORTED_MODULE_3__["getErrorMessage"])(errors));
    };
    return Field;
}(_component__WEBPACK_IMPORTED_MODULE_2__["Component"]));



/***/ }),

/***/ "../src/ui/form/fields.ts":
/*!********************************!*\
  !*** ../src/ui/form/fields.ts ***!
  \********************************/
/*! exports provided: Input, Select, Textarea, Radio, Radios, Checkbox, Boxes, Fields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fields", function() { return Fields; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_formutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/formutils */ "../src/util/formutils.ts");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field */ "../src/ui/form/field.ts");
/* harmony import */ var jump_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jump.js */ "../node_modules/jump.js/dist/jump.module.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input */ "../src/ui/form/input.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _input__WEBPACK_IMPORTED_MODULE_4__["Input"]; });

/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select */ "../src/ui/form/select.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _select__WEBPACK_IMPORTED_MODULE_5__["Select"]; });

/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./textarea */ "../src/ui/form/textarea.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _textarea__WEBPACK_IMPORTED_MODULE_6__["Textarea"]; });

/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radio */ "../src/ui/form/radio.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _radio__WEBPACK_IMPORTED_MODULE_7__["Radio"]; });

/* harmony import */ var _radios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./radios */ "../src/ui/form/radios.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radios", function() { return _radios__WEBPACK_IMPORTED_MODULE_8__["Radios"]; });

/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkbox */ "../src/ui/form/checkbox.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _checkbox__WEBPACK_IMPORTED_MODULE_9__["Checkbox"]; });

/* harmony import */ var _boxes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./boxes */ "../src/ui/form/boxes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Boxes", function() { return _boxes__WEBPACK_IMPORTED_MODULE_10__["Boxes"]; });

var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};











var Fields = /** @class */ (function () {
    function Fields(store, config) {
        this.key = Object(_util_formutils__WEBPACK_IMPORTED_MODULE_1__["randomKey"])();
        this.config = {
            fieldClass: _field__WEBPACK_IMPORTED_MODULE_2__["Field"],
            defaultUnstyled: false,
            defaultRequired: true,
            labelInFields: false
        };
        this.store = store;
        this.config = __assign({}, this.config, config);
    }
    Object.defineProperty(Fields.prototype, "status", {
        get: function () {
            return this.store.status;
        },
        enumerable: true,
        configurable: true
    });
    Fields.prototype.asField = function (viewClass, config, children) {
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(this.config.fieldClass, this.fieldAttrs(config), mithril__WEBPACK_IMPORTED_MODULE_0___default()(viewClass, this.viewAttrs(config), children));
    };
    Fields.prototype.defaultFieldAttrs = function (key, rest) {
        var _this = this;
        return __assign({ required: this.config.defaultRequired, unstyled: this.config.defaultUnstyled, name: key }, rest, { id: 'field_' + key + '_' + this.key, value: this.store.data[key], onchange: function (value) { return _this.store.setData(key, value); }, label: this.config.labelInFields ? undefined : rest.label });
    };
    /**
   * Can be used to initialize custom formfields - also used internally
   */
    Fields.prototype.fieldAttrs = function (_a) {
        var key = _a.key, rest = __rest(_a, ["key"]);
        var attrs = this.defaultFieldAttrs(rest.name || key, rest);
        var status = this.status;
        switch (status.type) {
            case 'error':
                return __assign({}, attrs, { errors: status.errors[key], onfocus: function () {
                        if (status.type == 'error')
                            delete status.errors[key];
                    } });
            default:
                return attrs;
        }
    };
    /**
   * This method can be overridden and used to filter certain attributes from passing on to the child element inside.
   * Example: Use this to filter out the label attribute. It can now be drawn in the field view itself.
   */
    Fields.prototype.viewAttrs = function (attrs) {
        return __assign({}, this.fieldAttrs(attrs), { id: undefined, label: this.config.labelInFields ? attrs.label : undefined });
    };
    Fields.prototype.focusField = function (field) {
        Object(jump_js__WEBPACK_IMPORTED_MODULE_3__["default"])("#field_" + field + "_" + this.key);
    };
    return Fields;
}());



/***/ }),

/***/ "../src/ui/form/input.less":
/*!*********************************!*\
  !*** ../src/ui/form/input.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../src/ui/form/input.ts":
/*!*******************************!*\
  !*** ../src/ui/form/input.ts ***!
  \*******************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component */ "../src/ui/component.ts");
/* harmony import */ var _input_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input.less */ "../src/ui/form/input.less");
/* harmony import */ var _input_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_input_less__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.className = _this.attrs.className ||
            (_this.attrs.unstyled && 'input') ||
            'input-front';
        _this.inputDom = null;
        return _this;
    }
    Input.prototype.render = function () {
        var _this = this;
        var _a = this.attrs, value = _a.value, onchange = _a.onchange, label = _a.label, name = _a.name, modifier = _a.modifier, onfocus = _a.onfocus, _b = _a.type, type = _b === void 0 ? 'text' : _b, required = _a.required, placeholder = _a.placeholder;
        return mithril__WEBPACK_IMPORTED_MODULE_1___default()("." + this.className, { class: classnames__WEBPACK_IMPORTED_MODULE_0___default()([modifier, value && 'has-value']) }, [
            mithril__WEBPACK_IMPORTED_MODULE_1___default()("input." + this.className + "-input", {
                type: type,
                required: required,
                name: name,
                value: value,
                placeholder: placeholder,
                onfocus: onfocus,
                oncreate: function (vnode) { return (_this.inputDom = vnode.dom); },
                oninput: onchange && (function (e) { return onchange(e.target.value); }),
                onchange: onchange && (function (e) { return onchange(e.target.value); })
            }),
            label && mithril__WEBPACK_IMPORTED_MODULE_1___default()("label." + this.className + "-label", label)
        ]);
    };
    return Input;
}(_component__WEBPACK_IMPORTED_MODULE_2__["Component"]));



/***/ }),

/***/ "../src/ui/form/radio.less":
/*!*********************************!*\
  !*** ../src/ui/form/radio.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../src/ui/form/radio.ts":
/*!*******************************!*\
  !*** ../src/ui/form/radio.ts ***!
  \*******************************/
/*! exports provided: Radio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_formutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/formutils */ "../src/util/formutils.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component */ "../src/ui/component.ts");
/* harmony import */ var _radio_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio.less */ "../src/ui/form/radio.less");
/* harmony import */ var _radio_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_radio_less__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.className = _this.attrs.className ||
            (_this.attrs.unstyled && 'radio') ||
            'radio-front';
        _this.id = Object(_util_formutils__WEBPACK_IMPORTED_MODULE_1__["randomKey"])('radio_');
        return _this;
    }
    Radio.prototype.render = function () {
        var _a = this.attrs, _b = _a.value, value = _b === void 0 ? false : _b, onchange = _a.onchange, option = _a.option, _c = _a.name, name = _c === void 0 ? this.id : _c, required = _a.required;
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("div." + this.className, [
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("input." + this.className + "-input", {
                type: 'radio',
                checked: value ? true : false,
                required: required,
                name: name,
                onclick: onchange && (function (_) { return onchange(!value); }),
                id: this.id
            }),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("label." + this.className + "-label", { for: this.id }, [
                mithril__WEBPACK_IMPORTED_MODULE_0___default()("span." + this.className + "-label-bullet"),
                mithril__WEBPACK_IMPORTED_MODULE_0___default()("span." + this.className + "-label-text", option)
            ])
        ]);
    };
    return Radio;
}(_component__WEBPACK_IMPORTED_MODULE_2__["Component"]));



/***/ }),

/***/ "../src/ui/form/radios.ts":
/*!********************************!*\
  !*** ../src/ui/form/radios.ts ***!
  \********************************/
/*! exports provided: Radios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radios", function() { return Radios; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_formutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/formutils */ "../src/util/formutils.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component */ "../src/ui/component.ts");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio */ "../src/ui/form/radio.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Radios = /** @class */ (function (_super) {
    __extends(Radios, _super);
    function Radios() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.className = _this.attrs.className || (_this.attrs.unstyled && 'radios') || 'radios-front';
        _this.defaultKey = Object(_util_formutils__WEBPACK_IMPORTED_MODULE_1__["randomKey"])('radios_');
        return _this;
    }
    Radios.prototype.render = function () {
        var _a = this.attrs, value = _a.value, onchange = _a.onchange, options = _a.options, unstyled = _a.unstyled, _b = _a.name, name = _b === void 0 ? this.defaultKey : _b, required = _a.required;
        var cleanOptions = Object(_util_formutils__WEBPACK_IMPORTED_MODULE_1__["cleanupOptions"])(options);
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()("div." + this.className, cleanOptions.map(function (option) {
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_radio__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
                option: option.label,
                name: name,
                unstyled: unstyled,
                required: required,
                value: value == option.key,
                onchange: onchange && (function (_) { return onchange(option.key); })
            });
        }));
    };
    return Radios;
}(_component__WEBPACK_IMPORTED_MODULE_2__["Component"]));



/***/ }),

/***/ "../src/ui/form/select.less":
/*!**********************************!*\
  !*** ../src/ui/form/select.less ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../src/ui/form/select.ts":
/*!********************************!*\
  !*** ../src/ui/form/select.ts ***!
  \********************************/
/*! exports provided: Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_formutils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/formutils */ "../src/util/formutils.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component */ "../src/ui/component.ts");
/* harmony import */ var _select_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select.less */ "../src/ui/form/select.less");
/* harmony import */ var _select_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_select_less__WEBPACK_IMPORTED_MODULE_4__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.className = _this.attrs.className || (_this.attrs.unstyled && 'select') || 'select-front';
        return _this;
    }
    Select.prototype.render = function () {
        var _a = this.attrs, value = _a.value, onchange = _a.onchange, label = _a.label, name = _a.name, options = _a.options, modifier = _a.modifier, onfocus = _a.onfocus, _b = _a.required, required = _b === void 0 ? true : _b;
        var cleanOptions = Object(_util_formutils__WEBPACK_IMPORTED_MODULE_2__["cleanupOptions"])(options);
        var fullLabel = required ? label + ' *' : label;
        return mithril__WEBPACK_IMPORTED_MODULE_1___default()("select." + this.className, {
            class: classnames__WEBPACK_IMPORTED_MODULE_0___default()([modifier, value && 'has-value']),
            name: name,
            required: required,
            onfocus: onfocus,
            onchange: onchange && (function (e) { return onchange(e.target.value); }),
            oninput: onchange && (function (e) { return onchange(e.target.value); })
        }, [
            label && mithril__WEBPACK_IMPORTED_MODULE_1___default()('option[disabled]', { selected: !value }, fullLabel),
            cleanOptions.map(function (o) {
                return mithril__WEBPACK_IMPORTED_MODULE_1___default()('option', { value: o.key, selected: o.key == value }, o.label);
            })
        ]);
    };
    return Select;
}(_component__WEBPACK_IMPORTED_MODULE_3__["Component"]));



/***/ }),

/***/ "../src/ui/form/textarea.less":
/*!************************************!*\
  !*** ../src/ui/form/textarea.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../src/ui/form/textarea.ts":
/*!**********************************!*\
  !*** ../src/ui/form/textarea.ts ***!
  \**********************************/
/*! exports provided: Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component */ "../src/ui/component.ts");
/* harmony import */ var _textarea_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textarea.less */ "../src/ui/form/textarea.less");
/* harmony import */ var _textarea_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_textarea_less__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Textarea = /** @class */ (function (_super) {
    __extends(Textarea, _super);
    function Textarea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.className = _this.attrs.className ||
            (_this.attrs.unstyled && 'textarea') ||
            'textarea-front';
        return _this;
    }
    Textarea.prototype.render = function () {
        var _a = this.attrs, value = _a.value, onchange = _a.onchange, label = _a.label, modifier = _a.modifier, name = _a.name, required = _a.required, onfocus = _a.onfocus;
        return mithril__WEBPACK_IMPORTED_MODULE_1___default()("div." + this.className, { class: classnames__WEBPACK_IMPORTED_MODULE_0___default()([modifier, value && 'has-value']) }, [
            mithril__WEBPACK_IMPORTED_MODULE_1___default()("textarea." + this.className + "-textarea", {
                required: required,
                name: name,
                onfocus: onfocus,
                value: value,
                oninput: onchange && (function (e) { return onchange(e.target.value); }),
                onchange: onchange && (function (e) { return onchange(e.target.value); })
            }),
            label && mithril__WEBPACK_IMPORTED_MODULE_1___default()("label." + this.className + "-label", label)
        ]);
    };
    return Textarea;
}(_component__WEBPACK_IMPORTED_MODULE_2__["Component"]));



/***/ }),

/***/ "../src/ui/icon.less":
/*!***************************!*\
  !*** ../src/ui/icon.less ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../src/ui/icon.ts":
/*!*************************!*\
  !*** ../src/ui/icon.ts ***!
  \*************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../src/ui/component.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.less */ "../src/ui/icon.less");
/* harmony import */ var _icon_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_icon_less__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.render = function () {
        var _a = this.attrs, icon = _a.icon, className = _a.class;
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()('i.icon', { class: classnames__WEBPACK_IMPORTED_MODULE_2___default()("icon-" + icon, className) });
    };
    return Icon;
}(_component__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "../src/ui/image.less":
/*!****************************!*\
  !*** ../src/ui/image.less ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../src/ui/image.ts":
/*!**************************!*\
  !*** ../src/ui/image.ts ***!
  \**************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../src/ui/component.ts");
/* harmony import */ var _image_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image.less */ "../src/ui/image.less");
/* harmony import */ var _image_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_image_less__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Image.prototype.render = function () {
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()('img.image', this.attrs);
    };
    return Image;
}(_component__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "../src/ui/masonry.less":
/*!******************************!*\
  !*** ../src/ui/masonry.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../src/ui/masonry.ts":
/*!****************************!*\
  !*** ../src/ui/masonry.ts ***!
  \****************************/
/*! exports provided: Masonry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Masonry", function() { return Masonry; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../src/ui/component.ts");
/* harmony import */ var _masonry_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./masonry.less */ "../src/ui/masonry.less");
/* harmony import */ var _masonry_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_masonry_less__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Masonry = /** @class */ (function (_super) {
    __extends(Masonry, _super);
    function Masonry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Masonry.prototype.divide = function (items, colsCount) {
        var cols = Array(colsCount)
            .fill(null)
            .map(function (_) { return []; });
        items.forEach(function (item, i) {
            var col = i % colsCount;
            cols[col].push(item);
        });
        return cols;
    };
    Masonry.prototype.render = function () {
        var _a = this.attrs, colsCount = _a.cols, addClass = _a.addClass;
        var items = this.children;
        if (!(items instanceof Array))
            throw 'Array expected';
        var cols = this.divide(items, colsCount);
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()('.masonry', cols.map(function (children, i) {
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()('.masonry-col', {
                style: {
                    'flex-basis': 100 / cols.length + '%'
                }
            }, children.map(function (item, j) {
                return mithril__WEBPACK_IMPORTED_MODULE_0___default()('.masonry-item', {
                    class: addClass ? addClass(i, j) : ''
                }, item);
            }));
        }));
    };
    return Masonry;
}(_component__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "../src/ui/mediaquery.ts":
/*!*******************************!*\
  !*** ../src/ui/mediaquery.ts ***!
  \*******************************/
/*! exports provided: MediaQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaQuery", function() { return MediaQuery; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../src/ui/component.ts");
/* harmony import */ var matchmediaquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! matchmediaquery */ "../node_modules/matchmediaquery/index.js");
/* harmony import */ var matchmediaquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(matchmediaquery__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var MediaQuery = /** @class */ (function (_super) {
    __extends(MediaQuery, _super);
    function MediaQuery() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.matcher = _this.createMatcher();
        return _this;
    }
    MediaQuery.prototype.createMatcher = function () {
        var _a = this.attrs, minWidth = _a.minWidth, maxWidth = _a.maxWidth;
        var rules = [];
        if (minWidth)
            rules.push("(min-width: " + minWidth + "px)");
        if (maxWidth)
            rules.push("(max-width: " + maxWidth + "px)");
        var query = rules.join(' and ');
        var matcher = matchmediaquery__WEBPACK_IMPORTED_MODULE_2___default()(query);
        matcher.addListener(mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw);
        return matcher;
    };
    MediaQuery.prototype.onRemove = function () {
        this.matcher.removeListener(mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw);
    };
    MediaQuery.prototype.render = function () {
        var view = this.attrs.view;
        return this.matcher.matches && view();
    };
    return MediaQuery;
}(_component__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "../src/ui/modal.less":
/*!****************************!*\
  !*** ../src/ui/modal.less ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../src/ui/modal.ts":
/*!**************************!*\
  !*** ../src/ui/modal.ts ***!
  \**************************/
/*! exports provided: ModalOverlay, Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOverlay", function() { return ModalOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../src/ui/component.ts");
/* harmony import */ var _util_subcomponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/subcomponent */ "../src/util/subcomponent.ts");
/* harmony import */ var _util_lockscroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lockscroll */ "../src/util/lockscroll.ts");
/* harmony import */ var _util_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/classes */ "../src/util/classes.ts");
/* harmony import */ var _modal_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal.less */ "../src/ui/modal.less");
/* harmony import */ var _modal_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modal_less__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





var ModalOverlay = Object(_util_subcomponent__WEBPACK_IMPORTED_MODULE_2__["subComponent"])('.modal-overlay');

var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.opened = false;
        _this.oncreate = _this.lock;
        _this.onupdate = _this.lock;
        _this.closeByKey = function (e) {
            var close = _this.attrs.close;
            if (e.keyCode !== 27)
                return;
            close();
            mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();
        };
        return _this;
    }
    Modal.prototype.lock = function () {
        var _a = this.attrs, isOpen = _a.isOpen, close = _a.close;
        if (this.opened === isOpen)
            return;
        if (isOpen)
            window.addEventListener('keydown', this.closeByKey);
        else
            window.removeEventListener('keydown', this.closeByKey);
        this.opened = isOpen;
    };
    Modal.prototype.onRemove = function () {
        window.removeEventListener('keydown', this.closeByKey);
    };
    Modal.prototype.render = function () {
        var _a = this.attrs, isOpen = _a.isOpen, close = _a.close, _b = _a.zIndex, zIndex = _b === void 0 ? 1000 : _b, mod = _a.mod;
        if (!isOpen)
            return null;
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()('.modal', __assign({ oncreate: function (_a) {
                var dom = _a.dom;
                return setTimeout(function () {
                    Object(_util_lockscroll__WEBPACK_IMPORTED_MODULE_3__["default"])(true);
                    dom.classList.add('is-open');
                }, 25);
            }, onbeforeremove: function (_a) {
                var dom = _a.dom;
                return new Promise(function (done) {
                    ;
                    dom.addEventListener('transitionend', function () {
                        Object(_util_lockscroll__WEBPACK_IMPORTED_MODULE_3__["default"])(false);
                        done();
                    }, false, { once: true });
                    dom.classList.remove('is-open');
                });
            } }, Object(_util_classes__WEBPACK_IMPORTED_MODULE_4__["classes"])({ mod: mod }), { style: { zIndex: zIndex } }), mithril__WEBPACK_IMPORTED_MODULE_0___default()('.modal-container', {
            onclick: function (_a) {
                var target = _a.target;
                if (target && target.classList.contains('modal-container'))
                    close();
            }
        }, mithril__WEBPACK_IMPORTED_MODULE_0___default()('.modal-container-content', this.children)));
    };
    return Modal;
}(_component__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "../src/ui/page.ts":
/*!*************************!*\
  !*** ../src/ui/page.ts ***!
  \*************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../src/ui/component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page(vnode) {
        var _this = _super.call(this, vnode) || this;
        _this.currentRoute = null;
        _this.currentRoute = _this.attrs.route;
        return _this;
    }
    Page.prototype.onInit = function () {
        this.onroutechange();
    };
    Page.prototype.onUpdate = function () {
        var last = this.currentRoute.href;
        this.currentRoute = this.attrs.route;
        if (last !== this.currentRoute.href)
            this.onroutechange();
    };
    Page.prototype.onroutechange = function () { };
    Page.render = function (attrs) {
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()(this, attrs);
    };
    return Page;
}(_component__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "../src/ui/picture.less":
/*!******************************!*\
  !*** ../src/ui/picture.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../src/ui/picture.ts":
/*!****************************!*\
  !*** ../src/ui/picture.ts ***!
  \****************************/
/*! exports provided: largeImage, getResizedUrl, Picture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "largeImage", function() { return largeImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResizedUrl", function() { return getResizedUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Picture", function() { return Picture; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../src/ui/component.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _picture_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./picture.less */ "../src/ui/picture.less");
/* harmony import */ var _picture_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_picture_less__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};



var WIDTHS = [100, 200, 400, 600, 800];
var HEIGHTS = [100, 200, 400, 600, 800];
function largeImage(img) {
    return getResizedUrl(img.src, 800, 800);
}
function getResizedUrl(url, width, height) {
    var w = WIDTHS.find(function (w) { return w > width; });
    var h = HEIGHTS.find(function (h) { return h > height; });
    if (!w)
        w = WIDTHS[WIDTHS.length - 1];
    if (!h)
        h = HEIGHTS[HEIGHTS.length - 1];
    return "/cache/" + w + "/" + h + url;
}

var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Picture.prototype.sized = function (path, width) {
        if (path.charAt(0) != '/')
            path = "/" + path;
        return "/cache/" + width + "/auto" + path;
    };
    Picture.prototype.srcset = function (path, max) {
        var _this = this;
        return WIDTHS.filter(function (width) { return width <= max; }).map(function (width) {
            var src = _this.sized(path, width);
            return src + " " + width * 2 + "w";
        });
    };
    Picture.prototype.render = function () {
        var _a = this.attrs, empty = _a.empty, width = _a.width, height = _a.height, src = _a.src, mod = _a.mod, _b = _a.inline, inline = _b === void 0 ? false : _b, _c = _a.max, max = _c === void 0 ? 800 : _c, attrs = __rest(_a, ["empty", "width", "height", "src", "mod", "inline", "max"]);
        if (empty || !src)
            return;
        var set = this.srcset(src, max);
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()('.picture', {
            class: classnames__WEBPACK_IMPORTED_MODULE_2___default()([
                "mod-" + mod,
                {
                    'is-inline': inline
                }
            ])
        }, mithril__WEBPACK_IMPORTED_MODULE_0___default()('img.picture-el', __assign({ src: this.sized(src, WIDTHS[WIDTHS.length - 1]), width: width,
            height: height, srcset: set.join(', '), alt: '' }, attrs)));
    };
    return Picture;
}(_component__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "../src/ui/portal.ts":
/*!***************************!*\
  !*** ../src/ui/portal.ts ***!
  \***************************/
/*! exports provided: Portal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return Portal; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../src/ui/component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Portal = /** @class */ (function (_super) {
    __extends(Portal, _super);
    function Portal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.node = document.createElement('div');
        return _this;
    }
    Portal.prototype.onCreate = function () {
        var _this = this;
        document.body.appendChild(this.node);
        mithril__WEBPACK_IMPORTED_MODULE_0___default.a.mount(this.node, {
            view: function () { return _this.children; }
        });
    };
    Portal.prototype.onRemove = function () {
        mithril__WEBPACK_IMPORTED_MODULE_0___default.a.mount(this.node, null);
        document.body.removeChild(this.node);
    };
    Portal.prototype.render = function () {
        return null;
    };
    return Portal;
}(_component__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "../src/ui/slider.less":
/*!*****************************!*\
  !*** ../src/ui/slider.less ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "../src/ui/slider.ts":
/*!***************************!*\
  !*** ../src/ui/slider.ts ***!
  \***************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popmotion */ "../node_modules/popmotion/dist/popmotion.es.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component */ "../src/ui/component.ts");
/* harmony import */ var _slider_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider.less */ "../src/ui/slider.less");
/* harmony import */ var _slider_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_slider_less__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    function Slider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = 0;
        _this.total = 0;
        _this.pos = null;
        // scroll = scroll()
        // Todo: add proper scroll decay after
        // https://github.com/Popmotion/stylefire/pull/8 is merged
        _this.slides = [];
        _this.tween = null;
        return _this;
    }
    Slider.prototype.onCreate = function () {
        var _this = this;
        var contentStyler = Object(popmotion__WEBPACK_IMPORTED_MODULE_1__["styler"])(this.dom.firstChild);
        this.pos = Object(popmotion__WEBPACK_IMPORTED_MODULE_1__["value"])(0, contentStyler.set('x'));
        var listener = this.listen();
        var size = function () { return _this.setSize(true); };
        window.addEventListener('resize', size);
        size();
        // We redraw in the next frame here, because
        // active state is only now available
        setTimeout(function () { return _this.redraw(); });
        this['onremove'] = function () {
            listener.stop();
            window.removeEventListener('resize', size);
        };
    };
    // Todo: rewrite this to properly to use popmotion's actions and reactions
    Slider.prototype.listen = function () {
        var _this = this;
        return Object(popmotion__WEBPACK_IMPORTED_MODULE_1__["listen"])(this.dom, 'mousedown touchstart').start(function (e) {
            if (_this.tween)
                _this.tween.stop();
            var start, isHorizontal = null;
            var track = Object(popmotion__WEBPACK_IMPORTED_MODULE_1__["pointer"])({
                x: _this.pos.get(),
                preventDefault: false
            }).start(function (p) {
                if (!start)
                    return (start = { x: p.x, y: p.y });
                if (isHorizontal === null) {
                    isHorizontal = Math.abs(start.x - p.x) > Math.abs(start.y - p.y);
                    _this.dom.style.pointerEvents = 'none';
                }
                if (isHorizontal)
                    _this.pos.update(p.x);
            });
            Object(popmotion__WEBPACK_IMPORTED_MODULE_1__["listen"])(document, 'mouseup touchend', { once: true }).start(function (e) {
                var _a = _this.attrs, total = _a.total, index = _a.index;
                var velocity = _this.pos.getVelocity();
                track.stop();
                _this.dom.style.pointerEvents = '';
                if (!isHorizontal)
                    return;
                if (Math.abs(velocity) > 0.2 * _this.size) {
                    var next = velocity > 0 ? index() - 1 : index() + 1;
                    if (next >= 0 && next < total()) {
                        index(next);
                        return _this.onUpdate();
                    }
                }
                _this.bounce();
            });
        });
    };
    // Bounce back to current slide
    Slider.prototype.bounce = function () {
        var index = this.attrs.index;
        this.tween = Object(popmotion__WEBPACK_IMPORTED_MODULE_1__["spring"])({
            from: this.pos.get(),
            velocity: this.pos.getVelocity(),
            to: this.slides[index()],
            stiffness: 100,
            damping: 20
        }).start(this.pos);
    };
    Slider.prototype.setSize = function (resized) {
        if (resized === void 0) { resized = false; }
        var index = this.attrs.index;
        var size = this.dom.getBoundingClientRect().width;
        this.size = size;
        this.calcSlides();
        if (resized)
            this.pos.update(this.slides[index()]);
    };
    Slider.prototype.calcSlides = function () {
        var _this = this;
        var _a = this.attrs, index = _a.index, total = _a.total, actives = _a.actives;
        var content = this.dom.firstChild;
        var children = content.children;
        var activeChecks = [];
        this.slides = [0];
        var curr = 0, prev = 0, last = 0;
        var _loop_1 = function (i) {
            var slide = children[i];
            var width = slide.getBoundingClientRect().width;
            curr += width;
            // We add a pixel to the width here to prevent rounding errors
            if (curr - last >= this_1.size + 1) {
                if (prev !== 0)
                    this_1.slides.push(-prev);
                last = prev;
            }
            var start = prev, end = curr;
            activeChecks.push(function () {
                var now = _this.slides[index()];
                return start >= -now - 1 && end <= -now + _this.size + 1;
            });
            prev = curr;
        };
        var this_1 = this;
        for (var i = 0; i < children.length; i++) {
            _loop_1(i);
        }
        if (curr > last && last !== 0) {
            this.slides.pop();
            this.slides.push(-(curr - this.size));
        }
        if (total() != this.slides.length) {
            total(this.slides.length);
            if (index() > total())
                index(total() - 1);
            setTimeout(function () { return _this.redraw(); });
        }
        if (actives)
            actives(activeChecks);
    };
    Slider.prototype.onUpdate = function () {
        var index = this.attrs.index;
        var x = this.pos.get();
        this.setSize();
        if (x != this.slides[index()])
            this.tween = Object(popmotion__WEBPACK_IMPORTED_MODULE_1__["tween"])({
                from: this.pos.get(),
                //velocity: this.pos.getVelocity(),
                to: this.slides[index()]
                //stiffness: 200
            }).start(this.pos);
    };
    Slider.prototype.render = function () {
        var _a = this.attrs.unstyled, unstyled = _a === void 0 ? false : _a;
        var style = function (styles) { return ({ style: unstyled || styles }); };
        return mithril__WEBPACK_IMPORTED_MODULE_0___default()('.slider', style({ overflow: 'hidden' }), mithril__WEBPACK_IMPORTED_MODULE_0___default()('.slider-content', this.children));
    };
    return Slider;
}(_component__WEBPACK_IMPORTED_MODULE_2__["Component"]));



/***/ }),

/***/ "../src/util/classes.ts":
/*!******************************!*\
  !*** ../src/util/classes.ts ***!
  \******************************/
/*! exports provided: classes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classes", function() { return classes; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);

function prefixClassNames(prefix, input) {
    return classnames__WEBPACK_IMPORTED_MODULE_0___default()(input)
        .split(' ')
        .filter(function (v) { return v; })
        .map(function (name) { return (prefix ? prefix + "-" + name : name); });
}
function prefix(key) {
    switch (key) {
        case 'class':
        case 'className':
            return null;
        default:
            return key;
    }
}
function parseClasses(classes) {
    if (typeof classes == 'string' || Array.isArray(classes) || !classes)
        return classes;
    return Object.keys(classes).map(function (key) {
        return prefixClassNames(prefix(key), classes[key]);
    });
}
function classes() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    var names = classnames__WEBPACK_IMPORTED_MODULE_0___default()(classes.map(parseClasses));
    return names ? { className: names } : {};
}


/***/ }),

/***/ "../src/util/formutils.ts":
/*!********************************!*\
  !*** ../src/util/formutils.ts ***!
  \********************************/
/*! exports provided: cleanupOptions, randomKey, getErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanupOptions", function() { return cleanupOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomKey", function() { return randomKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorMessage", function() { return getErrorMessage; });
function cleanupOptions(options) {
    if (!options)
        return [];
    if (Array.isArray(options))
        return options.map(function (o) { return (typeof o === 'string' ? { key: o, label: o } : o); });
    return Object.keys(options).map(function (key) { return ({
        key: key,
        label: options[key]
    }); });
}
function randomKey(prefix) {
    if (prefix === void 0) { prefix = ''; }
    return (prefix +
        Math.random()
            .toString(36)
            .substr(2, 10));
}
function getErrorMessage(errors) {
    if (errors === undefined)
        return '';
    var errorsList = typeof errors == 'string' ? [errors] : errors;
    if (errorsList.length)
        return errorsList[0];
    return 'This value is not valid';
}


/***/ }),

/***/ "../src/util/lockscroll.ts":
/*!*********************************!*\
  !*** ../src/util/lockscroll.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scrollbar_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scrollbar-width */ "../node_modules/scrollbar-width/scrollbar-width.js");
/* harmony import */ var scrollbar_width__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scrollbar_width__WEBPACK_IMPORTED_MODULE_0__);

var style = document.body.style;
/* harmony default export */ __webpack_exports__["default"] = (function (lock) {
    if (lock) {
        style.paddingRight = scrollbar_width__WEBPACK_IMPORTED_MODULE_0___default()() + 'px';
        style.overflow = 'hidden';
    }
    else {
        style.paddingRight = '';
        style.overflow = '';
    }
});


/***/ }),

/***/ "../src/util/subcomponent.ts":
/*!***********************************!*\
  !*** ../src/util/subcomponent.ts ***!
  \***********************************/
/*! exports provided: subComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subComponent", function() { return subComponent; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);

function subComponent(selector) {
    return {
        view: function (vnode) {
            return mithril__WEBPACK_IMPORTED_MODULE_0___default()(selector, vnode.attrs, vnode.children);
        }
    };
}


/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.less */ "./src/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src */ "../src/index.ts");
/* harmony import */ var _sliderexample__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sliderexample */ "./src/sliderexample.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Theme = Object(_src__WEBPACK_IMPORTED_MODULE_2__["createContext"])(0);
var Docs = /** @class */ (function (_super) {
    __extends(Docs, _super);
    function Docs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.count = 0;
        return _this;
    }
    Docs.prototype.render = function () {
        var _this = this;
        return (Object(_src__WEBPACK_IMPORTED_MODULE_2__["m"])("div", { class: "docs" },
            Object(_src__WEBPACK_IMPORTED_MODULE_2__["m"])("h1", null, "@codeurs/front"),
            Object(_src__WEBPACK_IMPORTED_MODULE_2__["m"])(Range, { value: this.count, onChange: function (v) { return (_this.count = v); } }),
            Object(_src__WEBPACK_IMPORTED_MODULE_2__["m"])("h3", null, this.count),
            Object(_src__WEBPACK_IMPORTED_MODULE_2__["m"])("h2", null, "Slider"),
            Object(_src__WEBPACK_IMPORTED_MODULE_2__["m"])("div", { class: "docs-slider" },
                Object(_src__WEBPACK_IMPORTED_MODULE_2__["m"])(_sliderexample__WEBPACK_IMPORTED_MODULE_3__["SliderExample"], { slides: this.count })),
            Object(_src__WEBPACK_IMPORTED_MODULE_2__["m"])("h2", null, "Context"),
            Object(_src__WEBPACK_IMPORTED_MODULE_2__["m"])(Theme.Consumer, null, function (theme) { return theme; }),
            Object(_src__WEBPACK_IMPORTED_MODULE_2__["m"])(Theme.Provider, { value: this.count },
                Object(_src__WEBPACK_IMPORTED_MODULE_2__["m"])("div", null,
                    "Theme: ",
                    Object(_src__WEBPACK_IMPORTED_MODULE_2__["m"])(Theme.Consumer, null, function (theme) { return theme; }))),
            Object(_src__WEBPACK_IMPORTED_MODULE_2__["m"])(Theme.Consumer, null, function (theme) { return theme; })));
    };
    return Docs;
}(_src__WEBPACK_IMPORTED_MODULE_2__["Component"]));
var Range = /** @class */ (function (_super) {
    __extends(Range, _super);
    function Range() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Range.prototype.render = function () {
        var _a = this.attrs, value = _a.value, onChange = _a.onChange;
        return Object(_src__WEBPACK_IMPORTED_MODULE_2__["m"])('input[type=range]', {
            value: value,
            min: 0,
            max: 50,
            oninput: function (e) { return onChange(e.target.value); }
        });
    };
    return Range;
}(_src__WEBPACK_IMPORTED_MODULE_2__["Component"]));
Object(mithril__WEBPACK_IMPORTED_MODULE_1__["mount"])(document.getElementById('root'), Docs);


/***/ }),

/***/ "./src/sliderexample.less":
/*!********************************!*\
  !*** ./src/sliderexample.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sliderexample.tsx":
/*!*******************************!*\
  !*** ./src/sliderexample.tsx ***!
  \*******************************/
/*! exports provided: SliderExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderExample", function() { return SliderExample; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src */ "../src/index.ts");
/* harmony import */ var _sliderexample_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sliderexample.less */ "./src/sliderexample.less");
/* harmony import */ var _sliderexample_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sliderexample_less__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var SliderExample = /** @class */ (function (_super) {
    __extends(SliderExample, _super);
    function SliderExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slider = new _src__WEBPACK_IMPORTED_MODULE_1__["SliderStore"]();
        return _this;
    }
    SliderExample.prototype.render = function () {
        var _this = this;
        var slides = this.attrs.slides;
        var items = [];
        for (var i = 0; i < slides; i++)
            items.push(i);
        return (mithril__WEBPACK_IMPORTED_MODULE_0___default()("div", { class: "sliderexample" },
            mithril__WEBPACK_IMPORTED_MODULE_0___default()(_src__WEBPACK_IMPORTED_MODULE_1__["Slider"], __assign({}, this.slider), items.map(function (i) { return (mithril__WEBPACK_IMPORTED_MODULE_0___default()("div", { class: "sliderexample-slide" }, i)); })),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("a", { onclick: function (e) { return _this.slider.goPrevious(); } }, "Previous"),
            mithril__WEBPACK_IMPORTED_MODULE_0___default()("a", { onclick: function (e) { return _this.slider.goNext(); } }, "Next")));
    };
    return SliderExample;
}(_src__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY3NzLW1lZGlhcXVlcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9mcmFtZXN5bmMvZGlzdC9mcmFtZXN5bmMuZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9oZXktbGlzdGVuL2Rpc3QvaGV5LWxpc3Rlbi5lcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2p1bXAuanMvZGlzdC9qdW1wLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21hdGNobWVkaWFxdWVyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21pdGhyaWwvYXBpL3JlZHJhdy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21pdGhyaWwvaHlwZXJzY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9taXRocmlsL21pdGhyaWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9taXRocmlsL3JlZHJhdy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcmVuZGVyL2ZyYWdtZW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9yZW5kZXIvaHlwZXJzY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9taXRocmlsL3JlbmRlci9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9taXRocmlsL3JlbmRlci90cnVzdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21pdGhyaWwvcmVuZGVyL3Zub2RlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbWl0aHJpbC9zdHJlYW0uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9taXRocmlsL3N0cmVhbS9zdHJlYW0uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9vYmplY3QtdG8tZm9ybWRhdGEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wb3Btb3Rpb24vZGlzdC9wb3Btb3Rpb24uZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zY3JvbGxiYXItd2lkdGgvc2Nyb2xsYmFyLXdpZHRoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLXZhbHVlLXR5cGVzL2Rpc3Qvc3R5bGUtdmFsdWUtdHlwZXMuZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZWZpcmUvZGlzdC9zdHlsZWZpcmUuZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2FjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Zvcm0udHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9oeXBlcnNjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uLi9zcmMvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi9zcmMvc3RvcmUvZm9ybXN0b3JlLnRzIiwid2VicGFjazovLy8uLi9zcmMvc3RvcmUvbW9kYWxzdG9yZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3N0b3JlL3NsaWRlcnN0b3JlLnRzIiwid2VicGFjazovLy8uLi9zcmMvdWkvYmFja2dyb3VuZC5sZXNzIiwid2VicGFjazovLy8uLi9zcmMvdWkvYmFja2dyb3VuZC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3VpL2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3VpL2NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91aS9mb3JtL2JveGVzLmxlc3MiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91aS9mb3JtL2JveGVzLnRzIiwid2VicGFjazovLy8uLi9zcmMvdWkvZm9ybS9jaGVja2JveC5sZXNzIiwid2VicGFjazovLy8uLi9zcmMvdWkvZm9ybS9jaGVja2JveC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3VpL2Zvcm0vZmllbGQubGVzcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3VpL2Zvcm0vZmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91aS9mb3JtL2ZpZWxkcy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3VpL2Zvcm0vaW5wdXQubGVzcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3VpL2Zvcm0vaW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91aS9mb3JtL3JhZGlvLmxlc3MiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91aS9mb3JtL3JhZGlvLnRzIiwid2VicGFjazovLy8uLi9zcmMvdWkvZm9ybS9yYWRpb3MudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91aS9mb3JtL3NlbGVjdC5sZXNzIiwid2VicGFjazovLy8uLi9zcmMvdWkvZm9ybS9zZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91aS9mb3JtL3RleHRhcmVhLmxlc3MiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91aS9mb3JtL3RleHRhcmVhLnRzIiwid2VicGFjazovLy8uLi9zcmMvdWkvaWNvbi5sZXNzIiwid2VicGFjazovLy8uLi9zcmMvdWkvaWNvbi50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3VpL2ltYWdlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91aS9pbWFnZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3VpL21hc29ucnkubGVzcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3VpL21hc29ucnkudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91aS9tZWRpYXF1ZXJ5LnRzIiwid2VicGFjazovLy8uLi9zcmMvdWkvbW9kYWwubGVzcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3VpL21vZGFsLnRzIiwid2VicGFjazovLy8uLi9zcmMvdWkvcGFnZS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3VpL3BpY3R1cmUubGVzcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3VpL3BpY3R1cmUudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91aS9wb3J0YWwudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91aS9zbGlkZXIubGVzcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3VpL3NsaWRlci50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWwvY2xhc3Nlcy50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWwvZm9ybXV0aWxzLnRzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC9sb2Nrc2Nyb2xsLnRzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbC9zdWJjb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVyZXhhbXBsZS5sZXNzIiwid2VicGFjazovLy8uL3NyYy9zbGlkZXJleGFtcGxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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Y0FBYztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNCQUFzQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsaUJBQWlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsMkRBQTJEO0FBQzNELHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxXQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlIQUF5SDtBQUN6SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q3BCO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksZUFBZTtBQUMzQjtBQUNBO0FBQ0EsWUFBWSwrQkFBK0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxjQUFjO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0JBQXNCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxpQkFBaUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QywyREFBMkQ7QUFDM0QscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxXQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlIQUF5SDtBQUN6SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QixJQUFNLEtBQUssR0FBRyxFQUFFO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1lBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUNOLHdEQUFLLEtBQUssRUFBQyxlQUFlO1lBQ3pCLCtDQUFDLDJDQUFNLGVBQUssSUFBSSxDQUFDLE1BQU0sR0FDckIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFDZix3REFBSyxLQUFLLEVBQUMscUJBQXFCLElBQUUsQ0FBQyxDQUFPLENBQzFDLEVBRmUsQ0FFZixDQUFDLENBQ007WUFDVCxzREFBRyxPQUFPLEVBQUUsV0FBQyxJQUFJLFlBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQXhCLENBQXdCLGVBQWM7WUFDdkQsc0RBQUcsT0FBTyxFQUFFLFdBQUMsSUFBSSxZQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFwQixDQUFvQixXQUFVLENBQzFDLENBQ047SUFDRixDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLENBbEJrQyw4Q0FBUyxHQWtCM0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzeFwiKTtcbiIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIi8qXG5Db3B5cmlnaHQgKGMpIDIwMTQsIFlhaG9vISBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5Db3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuXG5TZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLm1hdGNoID0gbWF0Y2hRdWVyeTtcbmV4cG9ydHMucGFyc2UgPSBwYXJzZVF1ZXJ5O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgUkVfTUVESUFfUVVFUlkgICAgID0gLyg/Oihvbmx5fG5vdCk/XFxzKihbXlxcc1xcKFxcKV0rKSg/OlxccyphbmQpP1xccyopPyguKyk/L2ksXG4gICAgUkVfTVFfRVhQUkVTU0lPTiAgID0gL1xcKFxccyooW15cXHNcXDpcXCldKylcXHMqKD86XFw6XFxzKihbXlxcc1xcKV0rKSk/XFxzKlxcKS8sXG4gICAgUkVfTVFfRkVBVFVSRSAgICAgID0gL14oPzoobWlufG1heCktKT8oLispLyxcbiAgICBSRV9MRU5HVEhfVU5JVCAgICAgPSAvKGVtfHJlbXxweHxjbXxtbXxpbnxwdHxwYyk/JC8sXG4gICAgUkVfUkVTT0xVVElPTl9VTklUID0gLyhkcGl8ZHBjbXxkcHB4KT8kLztcblxuZnVuY3Rpb24gbWF0Y2hRdWVyeShtZWRpYVF1ZXJ5LCB2YWx1ZXMpIHtcbiAgICByZXR1cm4gcGFyc2VRdWVyeShtZWRpYVF1ZXJ5KS5zb21lKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICB2YXIgaW52ZXJzZSA9IHF1ZXJ5LmludmVyc2U7XG5cbiAgICAgICAgLy8gRWl0aGVyIHRoZSBwYXJzZWQgb3Igc3BlY2lmaWVkIGB0eXBlYCBpcyBcImFsbFwiLCBvciB0aGUgdHlwZXMgbXVzdCBiZVxuICAgICAgICAvLyBlcXVhbCBmb3IgYSBtYXRjaC5cbiAgICAgICAgdmFyIHR5cGVNYXRjaCA9IHF1ZXJ5LnR5cGUgPT09ICdhbGwnIHx8IHZhbHVlcy50eXBlID09PSBxdWVyeS50eXBlO1xuXG4gICAgICAgIC8vIFF1aXQgZWFybHkgd2hlbiBgdHlwZWAgZG9lc24ndCBtYXRjaCwgYnV0IHRha2UgXCJub3RcIiBpbnRvIGFjY291bnQuXG4gICAgICAgIGlmICgodHlwZU1hdGNoICYmIGludmVyc2UpIHx8ICEodHlwZU1hdGNoIHx8IGludmVyc2UpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZXhwcmVzc2lvbnNNYXRjaCA9IHF1ZXJ5LmV4cHJlc3Npb25zLmV2ZXJ5KGZ1bmN0aW9uIChleHByZXNzaW9uKSB7XG4gICAgICAgICAgICB2YXIgZmVhdHVyZSAgPSBleHByZXNzaW9uLmZlYXR1cmUsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXIgPSBleHByZXNzaW9uLm1vZGlmaWVyLFxuICAgICAgICAgICAgICAgIGV4cFZhbHVlID0gZXhwcmVzc2lvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA9IHZhbHVlc1tmZWF0dXJlXTtcblxuICAgICAgICAgICAgLy8gTWlzc2luZyBvciBmYWxzeSB2YWx1ZXMgZG9uJ3QgbWF0Y2guXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKGZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdvcmllbnRhdGlvbic6XG4gICAgICAgICAgICAgICAgY2FzZSAnc2Nhbic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBleHBWYWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnd2lkdGgnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2hlaWdodCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZGV2aWNlLXdpZHRoJzpcbiAgICAgICAgICAgICAgICBjYXNlICdkZXZpY2UtaGVpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgZXhwVmFsdWUgPSB0b1B4KGV4cFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgICAgPSB0b1B4KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdyZXNvbHV0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgZXhwVmFsdWUgPSB0b0RwaShleHBWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgID0gdG9EcGkodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2FzcGVjdC1yYXRpbyc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZGV2aWNlLWFzcGVjdC1yYXRpbyc6XG4gICAgICAgICAgICAgICAgY2FzZSAvKiBEZXByZWNhdGVkICovICdkZXZpY2UtcGl4ZWwtcmF0aW8nOlxuICAgICAgICAgICAgICAgICAgICBleHBWYWx1ZSA9IHRvRGVjaW1hbChleHBWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgID0gdG9EZWNpbWFsKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdncmlkJzpcbiAgICAgICAgICAgICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgICAgICAgICAgY2FzZSAnY29sb3ItaW5kZXgnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ21vbm9jaHJvbWUnOlxuICAgICAgICAgICAgICAgICAgICBleHBWYWx1ZSA9IHBhcnNlSW50KGV4cFZhbHVlLCAxMCkgfHwgMTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgICAgPSBwYXJzZUludCh2YWx1ZSwgMTApIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKG1vZGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbWluJzogcmV0dXJuIHZhbHVlID49IGV4cFZhbHVlO1xuICAgICAgICAgICAgICAgIGNhc2UgJ21heCc6IHJldHVybiB2YWx1ZSA8PSBleHBWYWx1ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0ICAgOiByZXR1cm4gdmFsdWUgPT09IGV4cFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKGV4cHJlc3Npb25zTWF0Y2ggJiYgIWludmVyc2UpIHx8ICghZXhwcmVzc2lvbnNNYXRjaCAmJiBpbnZlcnNlKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VRdWVyeShtZWRpYVF1ZXJ5KSB7XG4gICAgcmV0dXJuIG1lZGlhUXVlcnkuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIHF1ZXJ5ID0gcXVlcnkudHJpbSgpO1xuXG4gICAgICAgIHZhciBjYXB0dXJlcyAgICA9IHF1ZXJ5Lm1hdGNoKFJFX01FRElBX1FVRVJZKSxcbiAgICAgICAgICAgIG1vZGlmaWVyICAgID0gY2FwdHVyZXNbMV0sXG4gICAgICAgICAgICB0eXBlICAgICAgICA9IGNhcHR1cmVzWzJdLFxuICAgICAgICAgICAgZXhwcmVzc2lvbnMgPSBjYXB0dXJlc1szXSB8fCAnJyxcbiAgICAgICAgICAgIHBhcnNlZCAgICAgID0ge307XG5cbiAgICAgICAgcGFyc2VkLmludmVyc2UgPSAhIW1vZGlmaWVyICYmIG1vZGlmaWVyLnRvTG93ZXJDYXNlKCkgPT09ICdub3QnO1xuICAgICAgICBwYXJzZWQudHlwZSAgICA9IHR5cGUgPyB0eXBlLnRvTG93ZXJDYXNlKCkgOiAnYWxsJztcblxuICAgICAgICAvLyBTcGxpdCBleHByZXNzaW9ucyBpbnRvIGEgbGlzdC5cbiAgICAgICAgZXhwcmVzc2lvbnMgPSBleHByZXNzaW9ucy5tYXRjaCgvXFwoW15cXCldK1xcKS9nKSB8fCBbXTtcblxuICAgICAgICBwYXJzZWQuZXhwcmVzc2lvbnMgPSBleHByZXNzaW9ucy5tYXAoZnVuY3Rpb24gKGV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgIHZhciBjYXB0dXJlcyA9IGV4cHJlc3Npb24ubWF0Y2goUkVfTVFfRVhQUkVTU0lPTiksXG4gICAgICAgICAgICAgICAgZmVhdHVyZSAgPSBjYXB0dXJlc1sxXS50b0xvd2VyQ2FzZSgpLm1hdGNoKFJFX01RX0ZFQVRVUkUpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBmZWF0dXJlWzFdLFxuICAgICAgICAgICAgICAgIGZlYXR1cmUgOiBmZWF0dXJlWzJdLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgOiBjYXB0dXJlc1syXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9KTtcbn1cblxuLy8gLS0gVXRpbGl0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gdG9EZWNpbWFsKHJhdGlvKSB7XG4gICAgdmFyIGRlY2ltYWwgPSBOdW1iZXIocmF0aW8pLFxuICAgICAgICBudW1iZXJzO1xuXG4gICAgaWYgKCFkZWNpbWFsKSB7XG4gICAgICAgIG51bWJlcnMgPSByYXRpby5tYXRjaCgvXihcXGQrKVxccypcXC9cXHMqKFxcZCspJC8pO1xuICAgICAgICBkZWNpbWFsID0gbnVtYmVyc1sxXSAvIG51bWJlcnNbMl07XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlY2ltYWw7XG59XG5cbmZ1bmN0aW9uIHRvRHBpKHJlc29sdXRpb24pIHtcbiAgICB2YXIgdmFsdWUgPSBwYXJzZUZsb2F0KHJlc29sdXRpb24pLFxuICAgICAgICB1bml0cyA9IFN0cmluZyhyZXNvbHV0aW9uKS5tYXRjaChSRV9SRVNPTFVUSU9OX1VOSVQpWzFdO1xuXG4gICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICBjYXNlICdkcGNtJzogcmV0dXJuIHZhbHVlIC8gMi41NDtcbiAgICAgICAgY2FzZSAnZHBweCc6IHJldHVybiB2YWx1ZSAqIDk2O1xuICAgICAgICBkZWZhdWx0ICAgIDogcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9QeChsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBwYXJzZUZsb2F0KGxlbmd0aCksXG4gICAgICAgIHVuaXRzID0gU3RyaW5nKGxlbmd0aCkubWF0Y2goUkVfTEVOR1RIX1VOSVQpWzFdO1xuXG4gICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICBjYXNlICdlbScgOiByZXR1cm4gdmFsdWUgKiAxNjtcbiAgICAgICAgY2FzZSAncmVtJzogcmV0dXJuIHZhbHVlICogMTY7XG4gICAgICAgIGNhc2UgJ2NtJyA6IHJldHVybiB2YWx1ZSAqIDk2IC8gMi41NDtcbiAgICAgICAgY2FzZSAnbW0nIDogcmV0dXJuIHZhbHVlICogOTYgLyAyLjU0IC8gMTA7XG4gICAgICAgIGNhc2UgJ2luJyA6IHJldHVybiB2YWx1ZSAqIDk2O1xuICAgICAgICBjYXNlICdwdCcgOiByZXR1cm4gdmFsdWUgKiA3MjtcbiAgICAgICAgY2FzZSAncGMnIDogcmV0dXJuIHZhbHVlICogNzIgLyAxMjtcbiAgICAgICAgZGVmYXVsdCAgIDogcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cbiIsInZhciBoYXNSQUYgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSB1bmRlZmluZWQ7XHJcbnZhciBwcmV2VGltZSA9IDA7XHJcbnZhciBvbk5leHRGcmFtZSA9IGhhc1JBRlxyXG4gICAgPyBmdW5jdGlvbiAoY2FsbGJhY2spIHsgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spOyB9XHJcbiAgICA6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNi43IC0gKGN1cnJlbnRUaW1lIC0gcHJldlRpbWUpKTtcclxuICAgICAgICBwcmV2VGltZSA9IGN1cnJlbnRUaW1lICsgdGltZVRvQ2FsbDtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrKHByZXZUaW1lKTsgfSwgdGltZVRvQ2FsbCk7XHJcbiAgICB9O1xuXG5mdW5jdGlvbiBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCkge1xyXG4gICAgdmFyIGZ1bmN0aW9uc1RvUnVuID0gW107XHJcbiAgICB2YXIgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUgPSBbXTtcclxuICAgIHZhciBudW1UaGlzRnJhbWUgPSAwO1xyXG4gICAgdmFyIGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgdmFyIGkgPSAwO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXhPZkNhbGxiYWNrID0gZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleE9mQ2FsbGJhY2sgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5zcGxpY2UoaW5kZXhPZkNhbGxiYWNrLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpc1Byb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBfYSA9IFtmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSwgZnVuY3Rpb25zVG9SdW5dLCBmdW5jdGlvbnNUb1J1biA9IF9hWzBdLCBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSA9IF9hWzFdO1xyXG4gICAgICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICBudW1UaGlzRnJhbWUgPSBmdW5jdGlvbnNUb1J1bi5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1UaGlzRnJhbWU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25zVG9SdW5baV0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NoZWR1bGU6IGZ1bmN0aW9uIChjYWxsYmFjaywgaW1tZWRpYXRlKSB7XHJcbiAgICAgICAgICAgIGlmIChpbW1lZGlhdGUgPT09IHZvaWQgMCkgeyBpbW1lZGlhdGUgPSBmYWxzZTsgfVxyXG4gICAgICAgICAgICBzdGFydFJlbmRlckxvb3AoKTtcclxuICAgICAgICAgICAgdmFyIGFkZFRvQ3VycmVudEJ1ZmZlciA9IGltbWVkaWF0ZSAmJiBpc1Byb2Nlc3Npbmc7XHJcbiAgICAgICAgICAgIHZhciBidWZmZXIgPSBhZGRUb0N1cnJlbnRCdWZmZXIgPyBmdW5jdGlvbnNUb1J1biA6IGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lO1xyXG4gICAgICAgICAgICBpZiAoYnVmZmVyLmluZGV4T2YoY2FsbGJhY2spID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFkZFRvQ3VycmVudEJ1ZmZlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG51bVRoaXNGcmFtZSA9IGZ1bmN0aW9uc1RvUnVuLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XG5cbnZhciBIQVNfUEVSRk9STUFOQ0VfTk9XID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cgIT09IHVuZGVmaW5lZDtcclxudmFyIGN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpOyB9IDogZnVuY3Rpb24gKCkgeyByZXR1cm4gRGF0ZS5ub3coKTsgfTtcclxudmFyIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcclxudmFyIE1BWF9FTEFQU0VEID0gNDA7XHJcbnZhciBkZWZhdWx0RWxhcHNlZCA9IDE2Ljc7XHJcbnZhciB1c2VEZWZhdWx0RWxhcHNlZCA9IHRydWU7XHJcbnZhciBjdXJyZW50RnJhbWVzdGFtcCA9IDA7XHJcbnZhciBlbGFwc2VkID0gMDtcclxuZnVuY3Rpb24gc3RhcnRSZW5kZXJMb29wKCkge1xyXG4gICAgaWYgKHdpbGxSZW5kZXJOZXh0RnJhbWUpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgd2lsbFJlbmRlck5leHRGcmFtZSA9IHRydWU7XHJcbiAgICB1c2VEZWZhdWx0RWxhcHNlZCA9IHRydWU7XHJcbiAgICBvbk5leHRGcmFtZShwcm9jZXNzRnJhbWUpO1xyXG59XHJcbnZhciBmcmFtZVN0YXJ0ID0gY3JlYXRlUmVuZGVyU3RlcChzdGFydFJlbmRlckxvb3ApO1xyXG52YXIgZnJhbWVVcGRhdGUgPSBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCk7XHJcbnZhciBmcmFtZVJlbmRlciA9IGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKTtcclxudmFyIGZyYW1lRW5kID0gY3JlYXRlUmVuZGVyU3RlcChzdGFydFJlbmRlckxvb3ApO1xyXG5mdW5jdGlvbiBwcm9jZXNzRnJhbWUoZnJhbWVzdGFtcCkge1xyXG4gICAgd2lsbFJlbmRlck5leHRGcmFtZSA9IGZhbHNlO1xyXG4gICAgZWxhcHNlZCA9IHVzZURlZmF1bHRFbGFwc2VkXHJcbiAgICAgICAgPyBkZWZhdWx0RWxhcHNlZFxyXG4gICAgICAgIDogTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnRGcmFtZXN0YW1wLCBNQVhfRUxBUFNFRCksIDEpO1xyXG4gICAgaWYgKCF1c2VEZWZhdWx0RWxhcHNlZClcclxuICAgICAgICBkZWZhdWx0RWxhcHNlZCA9IGVsYXBzZWQ7XHJcbiAgICBjdXJyZW50RnJhbWVzdGFtcCA9IGZyYW1lc3RhbXA7XHJcbiAgICBmcmFtZVN0YXJ0LnByb2Nlc3MoKTtcclxuICAgIGZyYW1lVXBkYXRlLnByb2Nlc3MoKTtcclxuICAgIGZyYW1lUmVuZGVyLnByb2Nlc3MoKTtcclxuICAgIGZyYW1lRW5kLnByb2Nlc3MoKTtcclxuICAgIGlmICh3aWxsUmVuZGVyTmV4dEZyYW1lKVxyXG4gICAgICAgIHVzZURlZmF1bHRFbGFwc2VkID0gZmFsc2U7XHJcbn1cclxudmFyIG9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuc2NoZWR1bGU7XHJcbnZhciBvbkZyYW1lVXBkYXRlID0gZnJhbWVVcGRhdGUuc2NoZWR1bGU7XHJcbnZhciBvbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuc2NoZWR1bGU7XHJcbnZhciBvbkZyYW1lRW5kID0gZnJhbWVFbmQuc2NoZWR1bGU7XHJcbnZhciBjYW5jZWxPbkZyYW1lU3RhcnQgPSBmcmFtZVN0YXJ0LmNhbmNlbDtcclxudmFyIGNhbmNlbE9uRnJhbWVVcGRhdGUgPSBmcmFtZVVwZGF0ZS5jYW5jZWw7XHJcbnZhciBjYW5jZWxPbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuY2FuY2VsO1xyXG52YXIgY2FuY2VsT25GcmFtZUVuZCA9IGZyYW1lRW5kLmNhbmNlbDtcclxudmFyIHRpbWVTaW5jZUxhc3RGcmFtZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVsYXBzZWQ7IH07XHJcbnZhciBjdXJyZW50RnJhbWVUaW1lID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY3VycmVudEZyYW1lc3RhbXA7IH07XG5cbmV4cG9ydCB7IGN1cnJlbnRUaW1lLCBvbkZyYW1lU3RhcnQsIG9uRnJhbWVVcGRhdGUsIG9uRnJhbWVSZW5kZXIsIG9uRnJhbWVFbmQsIGNhbmNlbE9uRnJhbWVTdGFydCwgY2FuY2VsT25GcmFtZVVwZGF0ZSwgY2FuY2VsT25GcmFtZVJlbmRlciwgY2FuY2VsT25GcmFtZUVuZCwgdGltZVNpbmNlTGFzdEZyYW1lLCBjdXJyZW50RnJhbWVUaW1lIH07XG4iLCJ2YXIgSEVZX0xJU1RFTiA9ICdIZXksIGxpc3RlbiEgJztcclxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbiAoKSB7IH07XHJcbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbiAoKSB7IH07XHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICB3YXJuaW5nID0gZnVuY3Rpb24gKGNoZWNrLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKCFjaGVjayAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKEhFWV9MSVNURU4gKyBtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaW52YXJpYW50ID0gZnVuY3Rpb24gKGNoZWNrLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKCFjaGVjaykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSEVZX0xJU1RFTi50b1VwcGVyQ2FzZSgpICsgbWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxuXG5leHBvcnQgeyB3YXJuaW5nLCBpbnZhcmlhbnQgfTtcbiIsIi8vIFJvYmVydCBQZW5uZXIncyBlYXNlSW5PdXRRdWFkXG5cbi8vIGZpbmQgdGhlIHJlc3Qgb2YgaGlzIGVhc2luZyBmdW5jdGlvbnMgaGVyZTogaHR0cDovL3JvYmVydHBlbm5lci5jb20vZWFzaW5nL1xuLy8gZmluZCB0aGVtIGV4cG9ydGVkIGZvciBFUzYgY29uc3VtcHRpb24gaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2pheGdlbGxlci9lei5qc1xuXG52YXIgZWFzZUluT3V0UXVhZCA9IGZ1bmN0aW9uIGVhc2VJbk91dFF1YWQodCwgYiwgYywgZCkge1xuICB0IC89IGQgLyAyO1xuICBpZiAodCA8IDEpIHJldHVybiBjIC8gMiAqIHQgKiB0ICsgYjtcbiAgdC0tO1xuICByZXR1cm4gLWMgLyAyICogKHQgKiAodCAtIDIpIC0gMSkgKyBiO1xufTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmo7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbn07XG5cbnZhciBqdW1wZXIgPSBmdW5jdGlvbiBqdW1wZXIoKSB7XG4gIC8vIHByaXZhdGUgdmFyaWFibGUgY2FjaGVcbiAgLy8gbm8gdmFyaWFibGVzIGFyZSBjcmVhdGVkIGR1cmluZyBhIGp1bXAsIHByZXZlbnRpbmcgbWVtb3J5IGxlYWtzXG5cbiAgdmFyIGVsZW1lbnQgPSB2b2lkIDA7IC8vIGVsZW1lbnQgdG8gc2Nyb2xsIHRvICAgICAgICAgICAgICAgICAgIChub2RlKVxuXG4gIHZhciBzdGFydCA9IHZvaWQgMDsgLy8gd2hlcmUgc2Nyb2xsIHN0YXJ0cyAgICAgICAgICAgICAgICAgICAgKHB4KVxuICB2YXIgc3RvcCA9IHZvaWQgMDsgLy8gd2hlcmUgc2Nyb2xsIHN0b3BzICAgICAgICAgICAgICAgICAgICAgKHB4KVxuXG4gIHZhciBvZmZzZXQgPSB2b2lkIDA7IC8vIGFkanVzdG1lbnQgZnJvbSB0aGUgc3RvcCBwb3NpdGlvbiAgICAgIChweClcbiAgdmFyIGVhc2luZyA9IHZvaWQgMDsgLy8gZWFzaW5nIGZ1bmN0aW9uICAgICAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uKVxuICB2YXIgYTExeSA9IHZvaWQgMDsgLy8gYWNjZXNzaWJpbGl0eSBzdXBwb3J0IGZsYWcgICAgICAgICAgICAgKGJvb2xlYW4pXG5cbiAgdmFyIGRpc3RhbmNlID0gdm9pZCAwOyAvLyBkaXN0YW5jZSBvZiBzY3JvbGwgICAgICAgICAgICAgICAgICAgICAocHgpXG4gIHZhciBkdXJhdGlvbiA9IHZvaWQgMDsgLy8gc2Nyb2xsIGR1cmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgKG1zKVxuXG4gIHZhciB0aW1lU3RhcnQgPSB2b2lkIDA7IC8vIHRpbWUgc2Nyb2xsIHN0YXJ0ZWQgICAgICAgICAgICAgICAgICAgIChtcylcbiAgdmFyIHRpbWVFbGFwc2VkID0gdm9pZCAwOyAvLyB0aW1lIHNwZW50IHNjcm9sbGluZyB0aHVzIGZhciAgICAgICAgICAobXMpXG5cbiAgdmFyIG5leHQgPSB2b2lkIDA7IC8vIG5leHQgc2Nyb2xsIHBvc2l0aW9uICAgICAgICAgICAgICAgICAgIChweClcblxuICB2YXIgY2FsbGJhY2sgPSB2b2lkIDA7IC8vIHRvIGNhbGwgd2hlbiBkb25lIHNjcm9sbGluZyAgICAgICAgICAgIChmdW5jdGlvbilcblxuICAvLyBzY3JvbGwgcG9zaXRpb24gaGVscGVyXG5cbiAgZnVuY3Rpb24gbG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxZIHx8IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgfVxuXG4gIC8vIGVsZW1lbnQgb2Zmc2V0IGhlbHBlclxuXG4gIGZ1bmN0aW9uIHRvcChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgc3RhcnQ7XG4gIH1cblxuICAvLyByQUYgbG9vcCBoZWxwZXJcblxuICBmdW5jdGlvbiBsb29wKHRpbWVDdXJyZW50KSB7XG4gICAgLy8gc3RvcmUgdGltZSBzY3JvbGwgc3RhcnRlZCwgaWYgbm90IHN0YXJ0ZWQgYWxyZWFkeVxuICAgIGlmICghdGltZVN0YXJ0KSB7XG4gICAgICB0aW1lU3RhcnQgPSB0aW1lQ3VycmVudDtcbiAgICB9XG5cbiAgICAvLyBkZXRlcm1pbmUgdGltZSBzcGVudCBzY3JvbGxpbmcgc28gZmFyXG4gICAgdGltZUVsYXBzZWQgPSB0aW1lQ3VycmVudCAtIHRpbWVTdGFydDtcblxuICAgIC8vIGNhbGN1bGF0ZSBuZXh0IHNjcm9sbCBwb3NpdGlvblxuICAgIG5leHQgPSBlYXNpbmcodGltZUVsYXBzZWQsIHN0YXJ0LCBkaXN0YW5jZSwgZHVyYXRpb24pO1xuXG4gICAgLy8gc2Nyb2xsIHRvIGl0XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIG5leHQpO1xuXG4gICAgLy8gY2hlY2sgcHJvZ3Jlc3NcbiAgICB0aW1lRWxhcHNlZCA8IGR1cmF0aW9uID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKSAvLyBjb250aW51ZSBzY3JvbGwgbG9vcFxuICAgIDogZG9uZSgpOyAvLyBzY3JvbGxpbmcgaXMgZG9uZVxuICB9XG5cbiAgLy8gc2Nyb2xsIGZpbmlzaGVkIGhlbHBlclxuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgLy8gYWNjb3VudCBmb3IgckFGIHRpbWUgcm91bmRpbmcgaW5hY2N1cmFjaWVzXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIHN0YXJ0ICsgZGlzdGFuY2UpO1xuXG4gICAgLy8gaWYgc2Nyb2xsaW5nIHRvIGFuIGVsZW1lbnQsIGFuZCBhY2Nlc3NpYmlsaXR5IGlzIGVuYWJsZWRcbiAgICBpZiAoZWxlbWVudCAmJiBhMTF5KSB7XG4gICAgICAvLyBhZGQgdGFiaW5kZXggaW5kaWNhdGluZyBwcm9ncmFtbWF0aWMgZm9jdXNcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuXG4gICAgICAvLyBmb2N1cyB0aGUgZWxlbWVudFxuICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8vIGlmIGl0IGV4aXN0cywgZmlyZSB0aGUgY2FsbGJhY2tcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIC8vIHJlc2V0IHRpbWUgZm9yIG5leHQganVtcFxuICAgIHRpbWVTdGFydCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gQVBJXG5cbiAgZnVuY3Rpb24ganVtcCh0YXJnZXQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAvLyByZXNvbHZlIG9wdGlvbnMsIG9yIHVzZSBkZWZhdWx0c1xuICAgIGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbiB8fCAxMDAwO1xuICAgIG9mZnNldCA9IG9wdGlvbnMub2Zmc2V0IHx8IDA7XG4gICAgY2FsbGJhY2sgPSBvcHRpb25zLmNhbGxiYWNrOyAvLyBcInVuZGVmaW5lZFwiIGlzIGEgc3VpdGFibGUgZGVmYXVsdCwgYW5kIHdvbid0IGJlIGNhbGxlZFxuICAgIGVhc2luZyA9IG9wdGlvbnMuZWFzaW5nIHx8IGVhc2VJbk91dFF1YWQ7XG4gICAgYTExeSA9IG9wdGlvbnMuYTExeSB8fCBmYWxzZTtcblxuICAgIC8vIGNhY2hlIHN0YXJ0aW5nIHBvc2l0aW9uXG4gICAgc3RhcnQgPSBsb2NhdGlvbigpO1xuXG4gICAgLy8gcmVzb2x2ZSB0YXJnZXRcbiAgICBzd2l0Y2ggKHR5cGVvZiB0YXJnZXQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHRhcmdldCkpIHtcbiAgICAgIC8vIHNjcm9sbCBmcm9tIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGVsZW1lbnQgPSB1bmRlZmluZWQ7IC8vIG5vIGVsZW1lbnQgdG8gc2Nyb2xsIHRvXG4gICAgICAgIGExMXkgPSBmYWxzZTsgLy8gbWFrZSBzdXJlIGFjY2Vzc2liaWxpdHkgaXMgb2ZmXG4gICAgICAgIHN0b3AgPSBzdGFydCArIHRhcmdldDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIHNjcm9sbCB0byBlbGVtZW50IChub2RlKVxuICAgICAgLy8gYm91bmRpbmcgcmVjdCBpcyByZWxhdGl2ZSB0byB0aGUgdmlld3BvcnRcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGVsZW1lbnQgPSB0YXJnZXQ7XG4gICAgICAgIHN0b3AgPSB0b3AoZWxlbWVudCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBzY3JvbGwgdG8gZWxlbWVudCAoc2VsZWN0b3IpXG4gICAgICAvLyBib3VuZGluZyByZWN0IGlzIHJlbGF0aXZlIHRvIHRoZSB2aWV3cG9ydFxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgICAgICAgc3RvcCA9IHRvcChlbGVtZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gcmVzb2x2ZSBzY3JvbGwgZGlzdGFuY2UsIGFjY291bnRpbmcgZm9yIG9mZnNldFxuICAgIGRpc3RhbmNlID0gc3RvcCAtIHN0YXJ0ICsgb2Zmc2V0O1xuXG4gICAgLy8gcmVzb2x2ZSBkdXJhdGlvblxuICAgIHN3aXRjaCAoX3R5cGVvZihvcHRpb25zLmR1cmF0aW9uKSkge1xuICAgICAgLy8gbnVtYmVyIGluIG1zXG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb247XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBmdW5jdGlvbiBwYXNzZWQgdGhlIGRpc3RhbmNlIG9mIHRoZSBzY3JvbGxcbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uKGRpc3RhbmNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gc3RhcnQgdGhlIGxvb3BcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICB9XG5cbiAgLy8gZXhwb3NlIG9ubHkgdGhlIGp1bXAgbWV0aG9kXG4gIHJldHVybiBqdW1wO1xufTtcblxuLy8gZXhwb3J0IHNpbmdsZXRvblxuXG52YXIgc2luZ2xldG9uID0ganVtcGVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHN0YXRpY01hdGNoID0gcmVxdWlyZSgnY3NzLW1lZGlhcXVlcnknKS5tYXRjaDtcbnZhciBkeW5hbWljTWF0Y2ggPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5tYXRjaE1lZGlhIDogbnVsbDtcblxuLy8gb3VyIGZha2UgTWVkaWFRdWVyeUxpc3RcbmZ1bmN0aW9uIE1xbChxdWVyeSwgdmFsdWVzKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZihkeW5hbWljTWF0Y2gpe1xuICAgIHZhciBtcWwgPSBkeW5hbWljTWF0Y2guY2FsbCh3aW5kb3csIHF1ZXJ5KTtcbiAgICB0aGlzLm1hdGNoZXMgPSBtcWwubWF0Y2hlcztcbiAgICB0aGlzLm1lZGlhID0gbXFsLm1lZGlhO1xuICAgIC8vIFRPRE86IGlzIHRoZXJlIGEgdGltZSBpdCBtYWtlcyBzZW5zZSB0byByZW1vdmUgdGhpcyBsaXN0ZW5lcj9cbiAgICBtcWwuYWRkTGlzdGVuZXIodXBkYXRlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm1hdGNoZXMgPSBzdGF0aWNNYXRjaChxdWVyeSwgdmFsdWVzKTtcbiAgICB0aGlzLm1lZGlhID0gcXVlcnk7XG4gIH1cblxuICB0aGlzLmFkZExpc3RlbmVyID0gYWRkTGlzdGVuZXI7XG4gIHRoaXMucmVtb3ZlTGlzdGVuZXIgPSByZW1vdmVMaXN0ZW5lcjtcbiAgdGhpcy5kaXNwb3NlID0gZGlzcG9zZTtcblxuICBmdW5jdGlvbiBhZGRMaXN0ZW5lcihsaXN0ZW5lcil7XG4gICAgaWYobXFsKXtcbiAgICAgIG1xbC5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpe1xuICAgIGlmKG1xbCl7XG4gICAgICBtcWwucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHVwZGF0ZSBvdXJzZWx2ZXMhXG4gIGZ1bmN0aW9uIHVwZGF0ZShldnQpe1xuICAgIHNlbGYubWF0Y2hlcyA9IGV2dC5tYXRjaGVzO1xuICAgIHNlbGYubWVkaWEgPSBldnQubWVkaWE7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwb3NlKCl7XG4gICAgaWYobXFsKXtcbiAgICAgIG1xbC5yZW1vdmVMaXN0ZW5lcih1cGRhdGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtYXRjaE1lZGlhKHF1ZXJ5LCB2YWx1ZXMpe1xuICByZXR1cm4gbmV3IE1xbChxdWVyeSwgdmFsdWVzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXRjaE1lZGlhO1xuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIGNvcmVSZW5kZXJlciA9IHJlcXVpcmUoXCIuLi9yZW5kZXIvcmVuZGVyXCIpXG5cbmZ1bmN0aW9uIHRocm90dGxlKGNhbGxiYWNrKSB7XG5cdC8vNjBmcHMgdHJhbnNsYXRlcyB0byAxNi42bXMsIHJvdW5kIGl0IGRvd24gc2luY2Ugc2V0VGltZW91dCByZXF1aXJlcyBpbnRcblx0dmFyIGRlbGF5ID0gMTZcblx0dmFyIGxhc3QgPSAwLCBwZW5kaW5nID0gbnVsbFxuXHR2YXIgdGltZW91dCA9IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09IFwiZnVuY3Rpb25cIiA/IHJlcXVlc3RBbmltYXRpb25GcmFtZSA6IHNldFRpbWVvdXRcblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIGxhc3Rcblx0XHRpZiAocGVuZGluZyA9PT0gbnVsbCkge1xuXHRcdFx0cGVuZGluZyA9IHRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHBlbmRpbmcgPSBudWxsXG5cdFx0XHRcdGNhbGxiYWNrKClcblx0XHRcdFx0bGFzdCA9IERhdGUubm93KClcblx0XHRcdH0sIGRlbGF5IC0gZWxhcHNlZClcblx0XHR9XG5cdH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCR3aW5kb3csIHRocm90dGxlTW9jaykge1xuXHR2YXIgcmVuZGVyU2VydmljZSA9IGNvcmVSZW5kZXJlcigkd2luZG93KVxuXHRyZW5kZXJTZXJ2aWNlLnNldEV2ZW50Q2FsbGJhY2soZnVuY3Rpb24oZSkge1xuXHRcdGlmIChlLnJlZHJhdyA9PT0gZmFsc2UpIGUucmVkcmF3ID0gdW5kZWZpbmVkXG5cdFx0ZWxzZSByZWRyYXcoKVxuXHR9KVxuXG5cdHZhciBjYWxsYmFja3MgPSBbXVxuXHR2YXIgcmVuZGVyaW5nID0gZmFsc2VcblxuXHRmdW5jdGlvbiBzdWJzY3JpYmUoa2V5LCBjYWxsYmFjaykge1xuXHRcdHVuc3Vic2NyaWJlKGtleSlcblx0XHRjYWxsYmFja3MucHVzaChrZXksIGNhbGxiYWNrKVxuXHR9XG5cdGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGtleSkge1xuXHRcdHZhciBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGtleSlcblx0XHRpZiAoaW5kZXggPiAtMSkgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMilcblx0fVxuXHRmdW5jdGlvbiBzeW5jKCkge1xuXHRcdGlmIChyZW5kZXJpbmcpIHRocm93IG5ldyBFcnJvcihcIk5lc3RlZCBtLnJlZHJhdy5zeW5jKCkgY2FsbFwiKVxuXHRcdHJlbmRlcmluZyA9IHRydWVcblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrPTIpIHRyeSB7Y2FsbGJhY2tzW2ldKCl9IGNhdGNoIChlKSB7aWYgKHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiKSBjb25zb2xlLmVycm9yKGUpfVxuXHRcdHJlbmRlcmluZyA9IGZhbHNlXG5cdH1cblxuXHR2YXIgcmVkcmF3ID0gKHRocm90dGxlTW9jayB8fCB0aHJvdHRsZSkoc3luYylcblx0cmVkcmF3LnN5bmMgPSBzeW5jXG5cdHJldHVybiB7c3Vic2NyaWJlOiBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZSwgcmVkcmF3OiByZWRyYXcsIHJlbmRlcjogcmVuZGVyU2VydmljZS5yZW5kZXJ9XG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgaHlwZXJzY3JpcHQgPSByZXF1aXJlKFwiLi9yZW5kZXIvaHlwZXJzY3JpcHRcIilcblxuaHlwZXJzY3JpcHQudHJ1c3QgPSByZXF1aXJlKFwiLi9yZW5kZXIvdHJ1c3RcIilcbmh5cGVyc2NyaXB0LmZyYWdtZW50ID0gcmVxdWlyZShcIi4vcmVuZGVyL2ZyYWdtZW50XCIpXG5cbm1vZHVsZS5leHBvcnRzID0gaHlwZXJzY3JpcHRcbiIsIjsoZnVuY3Rpb24oKSB7XG5cInVzZSBzdHJpY3RcIlxuZnVuY3Rpb24gVm5vZGUodGFnLCBrZXksIGF0dHJzMCwgY2hpbGRyZW4sIHRleHQsIGRvbSkge1xuXHRyZXR1cm4ge3RhZzogdGFnLCBrZXk6IGtleSwgYXR0cnM6IGF0dHJzMCwgY2hpbGRyZW46IGNoaWxkcmVuLCB0ZXh0OiB0ZXh0LCBkb206IGRvbSwgZG9tU2l6ZTogdW5kZWZpbmVkLCBzdGF0ZTogdW5kZWZpbmVkLCBldmVudHM6IHVuZGVmaW5lZCwgaW5zdGFuY2U6IHVuZGVmaW5lZCwgc2tpcDogZmFsc2V9XG59XG5Wbm9kZS5ub3JtYWxpemUgPSBmdW5jdGlvbihub2RlKSB7XG5cdGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSByZXR1cm4gVm5vZGUoXCJbXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBWbm9kZS5ub3JtYWxpemVDaGlsZHJlbihub2RlKSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXG5cdGlmIChub2RlICE9IG51bGwgJiYgdHlwZW9mIG5vZGUgIT09IFwib2JqZWN0XCIpIHJldHVybiBWbm9kZShcIiNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG5vZGUgPT09IGZhbHNlID8gXCJcIiA6IG5vZGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxuXHRyZXR1cm4gbm9kZVxufVxuVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4gPSBmdW5jdGlvbiBub3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbikge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2hpbGRyZW5baV0gPSBWbm9kZS5ub3JtYWxpemUoY2hpbGRyZW5baV0pXG5cdH1cblx0cmV0dXJuIGNoaWxkcmVuXG59XG52YXIgc2VsZWN0b3JQYXJzZXIgPSAvKD86KF58I3xcXC4pKFteI1xcLlxcW1xcXV0rKSl8KFxcWyguKz8pKD86XFxzKj1cXHMqKFwifCd8KSgoPzpcXFxcW1wiJ1xcXV18LikqPylcXDUpP1xcXSkvZ1xudmFyIHNlbGVjdG9yQ2FjaGUgPSB7fVxudmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5XG5mdW5jdGlvbiBpc0VtcHR5KG9iamVjdCkge1xuXHRmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSBpZiAoaGFzT3duLmNhbGwob2JqZWN0LCBrZXkpKSByZXR1cm4gZmFsc2Vcblx0cmV0dXJuIHRydWVcbn1cbmZ1bmN0aW9uIGNvbXBpbGVTZWxlY3RvcihzZWxlY3Rvcikge1xuXHR2YXIgbWF0Y2gsIHRhZyA9IFwiZGl2XCIsIGNsYXNzZXMgPSBbXSwgYXR0cnMgPSB7fVxuXHR3aGlsZSAobWF0Y2ggPSBzZWxlY3RvclBhcnNlci5leGVjKHNlbGVjdG9yKSkge1xuXHRcdHZhciB0eXBlID0gbWF0Y2hbMV0sIHZhbHVlID0gbWF0Y2hbMl1cblx0XHRpZiAodHlwZSA9PT0gXCJcIiAmJiB2YWx1ZSAhPT0gXCJcIikgdGFnID0gdmFsdWVcblx0XHRlbHNlIGlmICh0eXBlID09PSBcIiNcIikgYXR0cnMuaWQgPSB2YWx1ZVxuXHRcdGVsc2UgaWYgKHR5cGUgPT09IFwiLlwiKSBjbGFzc2VzLnB1c2godmFsdWUpXG5cdFx0ZWxzZSBpZiAobWF0Y2hbM11bMF0gPT09IFwiW1wiKSB7XG5cdFx0XHR2YXIgYXR0clZhbHVlID0gbWF0Y2hbNl1cblx0XHRcdGlmIChhdHRyVmFsdWUpIGF0dHJWYWx1ZSA9IGF0dHJWYWx1ZS5yZXBsYWNlKC9cXFxcKFtcIiddKS9nLCBcIiQxXCIpLnJlcGxhY2UoL1xcXFxcXFxcL2csIFwiXFxcXFwiKVxuXHRcdFx0aWYgKG1hdGNoWzRdID09PSBcImNsYXNzXCIpIGNsYXNzZXMucHVzaChhdHRyVmFsdWUpXG5cdFx0XHRlbHNlIGF0dHJzW21hdGNoWzRdXSA9IGF0dHJWYWx1ZSA9PT0gXCJcIiA/IGF0dHJWYWx1ZSA6IGF0dHJWYWx1ZSB8fCB0cnVlXG5cdFx0fVxuXHR9XG5cdGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIGF0dHJzLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbihcIiBcIilcblx0cmV0dXJuIHNlbGVjdG9yQ2FjaGVbc2VsZWN0b3JdID0ge3RhZzogdGFnLCBhdHRyczogYXR0cnN9XG59XG5mdW5jdGlvbiBleGVjU2VsZWN0b3Ioc3RhdGUsIGF0dHJzLCBjaGlsZHJlbikge1xuXHR2YXIgaGFzQXR0cnMgPSBmYWxzZSwgY2hpbGRMaXN0LCB0ZXh0XG5cdHZhciBjbGFzc05hbWUgPSBhdHRycy5jbGFzc05hbWUgfHwgYXR0cnMuY2xhc3Ncblx0aWYgKCFpc0VtcHR5KHN0YXRlLmF0dHJzKSAmJiAhaXNFbXB0eShhdHRycykpIHtcblx0XHR2YXIgbmV3QXR0cnMgPSB7fVxuXHRcdGZvcih2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0XHRpZiAoaGFzT3duLmNhbGwoYXR0cnMsIGtleSkpIHtcblx0XHRcdFx0bmV3QXR0cnNba2V5XSA9IGF0dHJzW2tleV1cblx0XHRcdH1cblx0XHR9XG5cdFx0YXR0cnMgPSBuZXdBdHRyc1xuXHR9XG5cdGZvciAodmFyIGtleSBpbiBzdGF0ZS5hdHRycykge1xuXHRcdGlmIChoYXNPd24uY2FsbChzdGF0ZS5hdHRycywga2V5KSkge1xuXHRcdFx0YXR0cnNba2V5XSA9IHN0YXRlLmF0dHJzW2tleV1cblx0XHR9XG5cdH1cblx0aWYgKGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGF0dHJzLmNsYXNzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGF0dHJzLmNsYXNzID0gdW5kZWZpbmVkXG5cdFx0XHRhdHRycy5jbGFzc05hbWUgPSBjbGFzc05hbWVcblx0XHR9XG5cdFx0aWYgKHN0YXRlLmF0dHJzLmNsYXNzTmFtZSAhPSBudWxsKSB7XG5cdFx0XHRhdHRycy5jbGFzc05hbWUgPSBzdGF0ZS5hdHRycy5jbGFzc05hbWUgKyBcIiBcIiArIGNsYXNzTmFtZVxuXHRcdH1cblx0fVxuXHRmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcblx0XHRpZiAoaGFzT3duLmNhbGwoYXR0cnMsIGtleSkgJiYga2V5ICE9PSBcImtleVwiKSB7XG5cdFx0XHRoYXNBdHRycyA9IHRydWVcblx0XHRcdGJyZWFrXG5cdFx0fVxuXHR9XG5cdGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJiBjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgY2hpbGRyZW5bMF0gIT0gbnVsbCAmJiBjaGlsZHJlblswXS50YWcgPT09IFwiI1wiKSB7XG5cdFx0dGV4dCA9IGNoaWxkcmVuWzBdLmNoaWxkcmVuXG5cdH0gZWxzZSB7XG5cdFx0Y2hpbGRMaXN0ID0gY2hpbGRyZW5cblx0fVxuXHRyZXR1cm4gVm5vZGUoc3RhdGUudGFnLCBhdHRycy5rZXksIGhhc0F0dHJzID8gYXR0cnMgOiB1bmRlZmluZWQsIGNoaWxkTGlzdCwgdGV4dClcbn1cbmZ1bmN0aW9uIGh5cGVyc2NyaXB0KHNlbGVjdG9yKSB7XG5cdC8vIEJlY2F1c2Ugc2xvcHB5IG1vZGUgc3Vja3Ncblx0dmFyIGF0dHJzID0gYXJndW1lbnRzWzFdLCBzdGFydCA9IDIsIGNoaWxkcmVuXG5cdGlmIChzZWxlY3RvciA9PSBudWxsIHx8IHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Ygc2VsZWN0b3IgIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygc2VsZWN0b3IudmlldyAhPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0dGhyb3cgRXJyb3IoXCJUaGUgc2VsZWN0b3IgbXVzdCBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYSBjb21wb25lbnQuXCIpO1xuXHR9XG5cdGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcblx0XHR2YXIgY2FjaGVkID0gc2VsZWN0b3JDYWNoZVtzZWxlY3Rvcl0gfHwgY29tcGlsZVNlbGVjdG9yKHNlbGVjdG9yKVxuXHR9XG5cdGlmIChhdHRycyA9PSBudWxsKSB7XG5cdFx0YXR0cnMgPSB7fVxuXHR9IGVsc2UgaWYgKHR5cGVvZiBhdHRycyAhPT0gXCJvYmplY3RcIiB8fCBhdHRycy50YWcgIT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KGF0dHJzKSkge1xuXHRcdGF0dHJzID0ge31cblx0XHRzdGFydCA9IDFcblx0fVxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gc3RhcnQgKyAxKSB7XG5cdFx0Y2hpbGRyZW4gPSBhcmd1bWVudHNbc3RhcnRdXG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkgY2hpbGRyZW4gPSBbY2hpbGRyZW5dXG5cdH0gZWxzZSB7XG5cdFx0Y2hpbGRyZW4gPSBbXVxuXHRcdHdoaWxlIChzdGFydCA8IGFyZ3VtZW50cy5sZW5ndGgpIGNoaWxkcmVuLnB1c2goYXJndW1lbnRzW3N0YXJ0KytdKVxuXHR9XG5cdHZhciBub3JtYWxpemVkID0gVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pXG5cdGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcblx0XHRyZXR1cm4gZXhlY1NlbGVjdG9yKGNhY2hlZCwgYXR0cnMsIG5vcm1hbGl6ZWQpXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIFZub2RlKHNlbGVjdG9yLCBhdHRycy5rZXksIGF0dHJzLCBub3JtYWxpemVkKVxuXHR9XG59XG5oeXBlcnNjcmlwdC50cnVzdCA9IGZ1bmN0aW9uKGh0bWwpIHtcblx0aWYgKGh0bWwgPT0gbnVsbCkgaHRtbCA9IFwiXCJcblx0cmV0dXJuIFZub2RlKFwiPFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaHRtbCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXG59XG5oeXBlcnNjcmlwdC5mcmFnbWVudCA9IGZ1bmN0aW9uKGF0dHJzMSwgY2hpbGRyZW4pIHtcblx0cmV0dXJuIFZub2RlKFwiW1wiLCBhdHRyczEua2V5LCBhdHRyczEsIFZub2RlLm5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXG59XG52YXIgbSA9IGh5cGVyc2NyaXB0XG4vKiogQGNvbnN0cnVjdG9yICovXG52YXIgUHJvbWlzZVBvbHlmaWxsID0gZnVuY3Rpb24oZXhlY3V0b3IpIHtcblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2VQb2x5ZmlsbCkpIHRocm93IG5ldyBFcnJvcihcIlByb21pc2UgbXVzdCBiZSBjYWxsZWQgd2l0aCBgbmV3YFwiKVxuXHRpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb25cIilcblx0dmFyIHNlbGYgPSB0aGlzLCByZXNvbHZlcnMgPSBbXSwgcmVqZWN0b3JzID0gW10sIHJlc29sdmVDdXJyZW50ID0gaGFuZGxlcihyZXNvbHZlcnMsIHRydWUpLCByZWplY3RDdXJyZW50ID0gaGFuZGxlcihyZWplY3RvcnMsIGZhbHNlKVxuXHR2YXIgaW5zdGFuY2UgPSBzZWxmLl9pbnN0YW5jZSA9IHtyZXNvbHZlcnM6IHJlc29sdmVycywgcmVqZWN0b3JzOiByZWplY3RvcnN9XG5cdHZhciBjYWxsQXN5bmMgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSBcImZ1bmN0aW9uXCIgPyBzZXRJbW1lZGlhdGUgOiBzZXRUaW1lb3V0XG5cdGZ1bmN0aW9uIGhhbmRsZXIobGlzdCwgc2hvdWxkQWJzb3JiKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGUodmFsdWUpIHtcblx0XHRcdHZhciB0aGVuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoc2hvdWxkQWJzb3JiICYmIHZhbHVlICE9IG51bGwgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikgJiYgdHlwZW9mICh0aGVuID0gdmFsdWUudGhlbikgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gc2VsZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgdy8gaXRzZWxmXCIpXG5cdFx0XHRcdFx0ZXhlY3V0ZU9uY2UodGhlbi5iaW5kKHZhbHVlKSlcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRjYWxsQXN5bmMoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZiAoIXNob3VsZEFic29yYiAmJiBsaXN0Lmxlbmd0aCA9PT0gMCkgY29uc29sZS5lcnJvcihcIlBvc3NpYmxlIHVuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbjpcIiwgdmFsdWUpXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIGxpc3RbaV0odmFsdWUpXG5cdFx0XHRcdFx0XHRyZXNvbHZlcnMubGVuZ3RoID0gMCwgcmVqZWN0b3JzLmxlbmd0aCA9IDBcblx0XHRcdFx0XHRcdGluc3RhbmNlLnN0YXRlID0gc2hvdWxkQWJzb3JiXG5cdFx0XHRcdFx0XHRpbnN0YW5jZS5yZXRyeSA9IGZ1bmN0aW9uKCkge2V4ZWN1dGUodmFsdWUpfVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNhdGNoIChlKSB7XG5cdFx0XHRcdHJlamVjdEN1cnJlbnQoZSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gZXhlY3V0ZU9uY2UodGhlbikge1xuXHRcdHZhciBydW5zID0gMFxuXHRcdGZ1bmN0aW9uIHJ1bihmbikge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdGlmIChydW5zKysgPiAwKSByZXR1cm5cblx0XHRcdFx0Zm4odmFsdWUpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHZhciBvbmVycm9yID0gcnVuKHJlamVjdEN1cnJlbnQpXG5cdFx0dHJ5IHt0aGVuKHJ1bihyZXNvbHZlQ3VycmVudCksIG9uZXJyb3IpfSBjYXRjaCAoZSkge29uZXJyb3IoZSl9XG5cdH1cblx0ZXhlY3V0ZU9uY2UoZXhlY3V0b3IpXG59XG5Qcm9taXNlUG9seWZpbGwucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3Rpb24pIHtcblx0dmFyIHNlbGYgPSB0aGlzLCBpbnN0YW5jZSA9IHNlbGYuX2luc3RhbmNlXG5cdGZ1bmN0aW9uIGhhbmRsZShjYWxsYmFjaywgbGlzdCwgbmV4dCwgc3RhdGUpIHtcblx0XHRsaXN0LnB1c2goZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikgbmV4dCh2YWx1ZSlcblx0XHRcdGVsc2UgdHJ5IHtyZXNvbHZlTmV4dChjYWxsYmFjayh2YWx1ZSkpfSBjYXRjaCAoZSkge2lmIChyZWplY3ROZXh0KSByZWplY3ROZXh0KGUpfVxuXHRcdH0pXG5cdFx0aWYgKHR5cGVvZiBpbnN0YW5jZS5yZXRyeSA9PT0gXCJmdW5jdGlvblwiICYmIHN0YXRlID09PSBpbnN0YW5jZS5zdGF0ZSkgaW5zdGFuY2UucmV0cnkoKVxuXHR9XG5cdHZhciByZXNvbHZlTmV4dCwgcmVqZWN0TmV4dFxuXHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlUG9seWZpbGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7cmVzb2x2ZU5leHQgPSByZXNvbHZlLCByZWplY3ROZXh0ID0gcmVqZWN0fSlcblx0aGFuZGxlKG9uRnVsZmlsbGVkLCBpbnN0YW5jZS5yZXNvbHZlcnMsIHJlc29sdmVOZXh0LCB0cnVlKSwgaGFuZGxlKG9uUmVqZWN0aW9uLCBpbnN0YW5jZS5yZWplY3RvcnMsIHJlamVjdE5leHQsIGZhbHNlKVxuXHRyZXR1cm4gcHJvbWlzZVxufVxuUHJvbWlzZVBvbHlmaWxsLnByb3RvdHlwZS5jYXRjaCA9IGZ1bmN0aW9uKG9uUmVqZWN0aW9uKSB7XG5cdHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3Rpb24pXG59XG5Qcm9taXNlUG9seWZpbGwucmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2VQb2x5ZmlsbCkgcmV0dXJuIHZhbHVlXG5cdHJldHVybiBuZXcgUHJvbWlzZVBvbHlmaWxsKGZ1bmN0aW9uKHJlc29sdmUpIHtyZXNvbHZlKHZhbHVlKX0pXG59XG5Qcm9taXNlUG9seWZpbGwucmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlUG9seWZpbGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7cmVqZWN0KHZhbHVlKX0pXG59XG5Qcm9taXNlUG9seWZpbGwuYWxsID0gZnVuY3Rpb24obGlzdCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2VQb2x5ZmlsbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHR2YXIgdG90YWwgPSBsaXN0Lmxlbmd0aCwgY291bnQgPSAwLCB2YWx1ZXMgPSBbXVxuXHRcdGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkgcmVzb2x2ZShbXSlcblx0XHRlbHNlIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0KGZ1bmN0aW9uKGkpIHtcblx0XHRcdFx0ZnVuY3Rpb24gY29uc3VtZSh2YWx1ZSkge1xuXHRcdFx0XHRcdGNvdW50Kytcblx0XHRcdFx0XHR2YWx1ZXNbaV0gPSB2YWx1ZVxuXHRcdFx0XHRcdGlmIChjb3VudCA9PT0gdG90YWwpIHJlc29sdmUodmFsdWVzKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChsaXN0W2ldICE9IG51bGwgJiYgKHR5cGVvZiBsaXN0W2ldID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBsaXN0W2ldID09PSBcImZ1bmN0aW9uXCIpICYmIHR5cGVvZiBsaXN0W2ldLnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdGxpc3RbaV0udGhlbihjb25zdW1lLCByZWplY3QpXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBjb25zdW1lKGxpc3RbaV0pXG5cdFx0XHR9KShpKVxuXHRcdH1cblx0fSlcbn1cblByb21pc2VQb2x5ZmlsbC5yYWNlID0gZnVuY3Rpb24obGlzdCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2VQb2x5ZmlsbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxpc3RbaV0udGhlbihyZXNvbHZlLCByZWplY3QpXG5cdFx0fVxuXHR9KVxufVxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0aWYgKHR5cGVvZiB3aW5kb3cuUHJvbWlzZSA9PT0gXCJ1bmRlZmluZWRcIikgd2luZG93LlByb21pc2UgPSBQcm9taXNlUG9seWZpbGxcblx0dmFyIFByb21pc2VQb2x5ZmlsbCA9IHdpbmRvdy5Qcm9taXNlXG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWwuUHJvbWlzZSA9PT0gXCJ1bmRlZmluZWRcIikgZ2xvYmFsLlByb21pc2UgPSBQcm9taXNlUG9seWZpbGxcblx0dmFyIFByb21pc2VQb2x5ZmlsbCA9IGdsb2JhbC5Qcm9taXNlXG59IGVsc2Uge1xufVxudmFyIGJ1aWxkUXVlcnlTdHJpbmcgPSBmdW5jdGlvbihvYmplY3QpIHtcblx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpICE9PSBcIltvYmplY3QgT2JqZWN0XVwiKSByZXR1cm4gXCJcIlxuXHR2YXIgYXJncyA9IFtdXG5cdGZvciAodmFyIGtleTAgaW4gb2JqZWN0KSB7XG5cdFx0ZGVzdHJ1Y3R1cmUoa2V5MCwgb2JqZWN0W2tleTBdKVxuXHR9XG5cdHJldHVybiBhcmdzLmpvaW4oXCImXCIpXG5cdGZ1bmN0aW9uIGRlc3RydWN0dXJlKGtleTAsIHZhbHVlKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGRlc3RydWN0dXJlKGtleTAgKyBcIltcIiArIGkgKyBcIl1cIiwgdmFsdWVbaV0pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcblx0XHRcdGZvciAodmFyIGkgaW4gdmFsdWUpIHtcblx0XHRcdFx0ZGVzdHJ1Y3R1cmUoa2V5MCArIFwiW1wiICsgaSArIFwiXVwiLCB2YWx1ZVtpXSlcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSBhcmdzLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleTApICsgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT09IFwiXCIgPyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgOiBcIlwiKSlcblx0fVxufVxudmFyIEZJTEVfUFJPVE9DT0xfUkVHRVggPSBuZXcgUmVnRXhwKFwiXmZpbGU6Ly9cIiwgXCJpXCIpXG52YXIgXzggPSBmdW5jdGlvbigkd2luZG93LCBQcm9taXNlKSB7XG5cdHZhciBjYWxsYmFja0NvdW50ID0gMFxuXHR2YXIgb25jb21wbGV0aW9uXG5cdGZ1bmN0aW9uIHNldENvbXBsZXRpb25DYWxsYmFjayhjYWxsYmFjaykge29uY29tcGxldGlvbiA9IGNhbGxiYWNrfVxuXHRmdW5jdGlvbiBmaW5hbGl6ZXIoKSB7XG5cdFx0dmFyIGNvdW50ID0gMFxuXHRcdGZ1bmN0aW9uIGNvbXBsZXRlKCkge2lmICgtLWNvdW50ID09PSAwICYmIHR5cGVvZiBvbmNvbXBsZXRpb24gPT09IFwiZnVuY3Rpb25cIikgb25jb21wbGV0aW9uKCl9XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIGZpbmFsaXplKHByb21pc2UwKSB7XG5cdFx0XHR2YXIgdGhlbjAgPSBwcm9taXNlMC50aGVuXG5cdFx0XHRwcm9taXNlMC50aGVuID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNvdW50Kytcblx0XHRcdFx0dmFyIG5leHQgPSB0aGVuMC5hcHBseShwcm9taXNlMCwgYXJndW1lbnRzKVxuXHRcdFx0XHRuZXh0LnRoZW4oY29tcGxldGUsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRjb21wbGV0ZSgpXG5cdFx0XHRcdFx0aWYgKGNvdW50ID09PSAwKSB0aHJvdyBlXG5cdFx0XHRcdH0pXG5cdFx0XHRcdHJldHVybiBmaW5hbGl6ZShuZXh0KVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHByb21pc2UwXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIG5vcm1hbGl6ZShhcmdzLCBleHRyYSkge1xuXHRcdGlmICh0eXBlb2YgYXJncyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0dmFyIHVybCA9IGFyZ3Ncblx0XHRcdGFyZ3MgPSBleHRyYSB8fCB7fVxuXHRcdFx0aWYgKGFyZ3MudXJsID09IG51bGwpIGFyZ3MudXJsID0gdXJsXG5cdFx0fVxuXHRcdHJldHVybiBhcmdzXG5cdH1cblx0ZnVuY3Rpb24gcmVxdWVzdChhcmdzLCBleHRyYSkge1xuXHRcdHZhciBmaW5hbGl6ZSA9IGZpbmFsaXplcigpXG5cdFx0YXJncyA9IG5vcm1hbGl6ZShhcmdzLCBleHRyYSlcblx0XHR2YXIgcHJvbWlzZTAgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdGlmIChhcmdzLm1ldGhvZCA9PSBudWxsKSBhcmdzLm1ldGhvZCA9IFwiR0VUXCJcblx0XHRcdGFyZ3MubWV0aG9kID0gYXJncy5tZXRob2QudG9VcHBlckNhc2UoKVxuXHRcdFx0dmFyIHVzZUJvZHkgPSAoYXJncy5tZXRob2QgPT09IFwiR0VUXCIgfHwgYXJncy5tZXRob2QgPT09IFwiVFJBQ0VcIikgPyBmYWxzZSA6ICh0eXBlb2YgYXJncy51c2VCb2R5ID09PSBcImJvb2xlYW5cIiA/IGFyZ3MudXNlQm9keSA6IHRydWUpXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3Muc2VyaWFsaXplICE9PSBcImZ1bmN0aW9uXCIpIGFyZ3Muc2VyaWFsaXplID0gdHlwZW9mIEZvcm1EYXRhICE9PSBcInVuZGVmaW5lZFwiICYmIGFyZ3MuZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhID8gZnVuY3Rpb24odmFsdWUpIHtyZXR1cm4gdmFsdWV9IDogSlNPTi5zdHJpbmdpZnlcblx0XHRcdGlmICh0eXBlb2YgYXJncy5kZXNlcmlhbGl6ZSAhPT0gXCJmdW5jdGlvblwiKSBhcmdzLmRlc2VyaWFsaXplID0gZGVzZXJpYWxpemVcblx0XHRcdGlmICh0eXBlb2YgYXJncy5leHRyYWN0ICE9PSBcImZ1bmN0aW9uXCIpIGFyZ3MuZXh0cmFjdCA9IGV4dHJhY3Rcblx0XHRcdGFyZ3MudXJsID0gaW50ZXJwb2xhdGUoYXJncy51cmwsIGFyZ3MuZGF0YSlcblx0XHRcdGlmICh1c2VCb2R5KSBhcmdzLmRhdGEgPSBhcmdzLnNlcmlhbGl6ZShhcmdzLmRhdGEpXG5cdFx0XHRlbHNlIGFyZ3MudXJsID0gYXNzZW1ibGUoYXJncy51cmwsIGFyZ3MuZGF0YSlcblx0XHRcdHZhciB4aHIgPSBuZXcgJHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpLFxuXHRcdFx0XHRhYm9ydGVkID0gZmFsc2UsXG5cdFx0XHRcdF9hYm9ydCA9IHhoci5hYm9ydFxuXHRcdFx0eGhyLmFib3J0ID0gZnVuY3Rpb24gYWJvcnQoKSB7XG5cdFx0XHRcdGFib3J0ZWQgPSB0cnVlXG5cdFx0XHRcdF9hYm9ydC5jYWxsKHhocilcblx0XHRcdH1cblx0XHRcdHhoci5vcGVuKGFyZ3MubWV0aG9kLCBhcmdzLnVybCwgdHlwZW9mIGFyZ3MuYXN5bmMgPT09IFwiYm9vbGVhblwiID8gYXJncy5hc3luYyA6IHRydWUsIHR5cGVvZiBhcmdzLnVzZXIgPT09IFwic3RyaW5nXCIgPyBhcmdzLnVzZXIgOiB1bmRlZmluZWQsIHR5cGVvZiBhcmdzLnBhc3N3b3JkID09PSBcInN0cmluZ1wiID8gYXJncy5wYXNzd29yZCA6IHVuZGVmaW5lZClcblx0XHRcdGlmIChhcmdzLnNlcmlhbGl6ZSA9PT0gSlNPTi5zdHJpbmdpZnkgJiYgdXNlQm9keSAmJiAhKGFyZ3MuaGVhZGVycyAmJiBhcmdzLmhlYWRlcnMuaGFzT3duUHJvcGVydHkoXCJDb250ZW50LVR5cGVcIikpKSB7XG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiKVxuXHRcdFx0fVxuXHRcdFx0aWYgKGFyZ3MuZGVzZXJpYWxpemUgPT09IGRlc2VyaWFsaXplICYmICEoYXJncy5oZWFkZXJzICYmIGFyZ3MuaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShcIkFjY2VwdFwiKSkpIHtcblx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIiwgXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0LypcIilcblx0XHRcdH1cblx0XHRcdGlmIChhcmdzLndpdGhDcmVkZW50aWFscykgeGhyLndpdGhDcmVkZW50aWFscyA9IGFyZ3Mud2l0aENyZWRlbnRpYWxzXG5cdFx0XHRpZiAoYXJncy50aW1lb3V0KSB4aHIudGltZW91dCA9IGFyZ3MudGltZW91dFxuXHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZ3MuaGVhZGVycykgaWYgKHt9Lmhhc093blByb3BlcnR5LmNhbGwoYXJncy5oZWFkZXJzLCBrZXkpKSB7XG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgYXJncy5oZWFkZXJzW2tleV0pXG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIGFyZ3MuY29uZmlnID09PSBcImZ1bmN0aW9uXCIpIHhociA9IGFyZ3MuY29uZmlnKHhociwgYXJncykgfHwgeGhyXG5cdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vIERvbid0IHRocm93IGVycm9ycyBvbiB4aHIuYWJvcnQoKS5cblx0XHRcdFx0aWYoYWJvcnRlZCkgcmV0dXJuXG5cdFx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHR2YXIgcmVzcG9uc2UgPSAoYXJncy5leHRyYWN0ICE9PSBleHRyYWN0KSA/IGFyZ3MuZXh0cmFjdCh4aHIsIGFyZ3MpIDogYXJncy5kZXNlcmlhbGl6ZShhcmdzLmV4dHJhY3QoeGhyLCBhcmdzKSlcblx0XHRcdFx0XHRcdGlmIChhcmdzLmV4dHJhY3QgIT09IGV4dHJhY3QgfHwgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHx8IHhoci5zdGF0dXMgPT09IDMwNCB8fCBGSUxFX1BST1RPQ09MX1JFR0VYLnRlc3QoYXJncy51cmwpKSB7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoY2FzdChhcmdzLnR5cGUsIHJlc3BvbnNlKSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoeGhyLnJlc3BvbnNlVGV4dClcblx0XHRcdFx0XHRcdFx0ZXJyb3IuY29kZSA9IHhoci5zdGF0dXNcblx0XHRcdFx0XHRcdFx0ZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZVxuXHRcdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHRyZWplY3QoZSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh1c2VCb2R5ICYmIChhcmdzLmRhdGEgIT0gbnVsbCkpIHhoci5zZW5kKGFyZ3MuZGF0YSlcblx0XHRcdGVsc2UgeGhyLnNlbmQoKVxuXHRcdH0pXG5cdFx0cmV0dXJuIGFyZ3MuYmFja2dyb3VuZCA9PT0gdHJ1ZSA/IHByb21pc2UwIDogZmluYWxpemUocHJvbWlzZTApXG5cdH1cblx0ZnVuY3Rpb24ganNvbnAoYXJncywgZXh0cmEpIHtcblx0XHR2YXIgZmluYWxpemUgPSBmaW5hbGl6ZXIoKVxuXHRcdGFyZ3MgPSBub3JtYWxpemUoYXJncywgZXh0cmEpXG5cdFx0dmFyIHByb21pc2UwID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHR2YXIgY2FsbGJhY2tOYW1lID0gYXJncy5jYWxsYmFja05hbWUgfHwgXCJfbWl0aHJpbF9cIiArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlMTYpICsgXCJfXCIgKyBjYWxsYmFja0NvdW50Kytcblx0XHRcdHZhciBzY3JpcHQgPSAkd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIilcblx0XHRcdCR3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0c2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KVxuXHRcdFx0XHRyZXNvbHZlKGNhc3QoYXJncy50eXBlLCBkYXRhKSlcblx0XHRcdFx0ZGVsZXRlICR3aW5kb3dbY2FsbGJhY2tOYW1lXVxuXHRcdFx0fVxuXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KVxuXHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiSlNPTlAgcmVxdWVzdCBmYWlsZWRcIikpXG5cdFx0XHRcdGRlbGV0ZSAkd2luZG93W2NhbGxiYWNrTmFtZV1cblx0XHRcdH1cblx0XHRcdGlmIChhcmdzLmRhdGEgPT0gbnVsbCkgYXJncy5kYXRhID0ge31cblx0XHRcdGFyZ3MudXJsID0gaW50ZXJwb2xhdGUoYXJncy51cmwsIGFyZ3MuZGF0YSlcblx0XHRcdGFyZ3MuZGF0YVthcmdzLmNhbGxiYWNrS2V5IHx8IFwiY2FsbGJhY2tcIl0gPSBjYWxsYmFja05hbWVcblx0XHRcdHNjcmlwdC5zcmMgPSBhc3NlbWJsZShhcmdzLnVybCwgYXJncy5kYXRhKVxuXHRcdFx0JHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuXHRcdH0pXG5cdFx0cmV0dXJuIGFyZ3MuYmFja2dyb3VuZCA9PT0gdHJ1ZT8gcHJvbWlzZTAgOiBmaW5hbGl6ZShwcm9taXNlMClcblx0fVxuXHRmdW5jdGlvbiBpbnRlcnBvbGF0ZSh1cmwsIGRhdGEpIHtcblx0XHRpZiAoZGF0YSA9PSBudWxsKSByZXR1cm4gdXJsXG5cdFx0dmFyIHRva2VucyA9IHVybC5tYXRjaCgvOlteXFwvXSsvZ2kpIHx8IFtdXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBrZXkgPSB0b2tlbnNbaV0uc2xpY2UoMSlcblx0XHRcdGlmIChkYXRhW2tleV0gIT0gbnVsbCkge1xuXHRcdFx0XHR1cmwgPSB1cmwucmVwbGFjZSh0b2tlbnNbaV0sIGRhdGFba2V5XSlcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHVybFxuXHR9XG5cdGZ1bmN0aW9uIGFzc2VtYmxlKHVybCwgZGF0YSkge1xuXHRcdHZhciBxdWVyeXN0cmluZyA9IGJ1aWxkUXVlcnlTdHJpbmcoZGF0YSlcblx0XHRpZiAocXVlcnlzdHJpbmcgIT09IFwiXCIpIHtcblx0XHRcdHZhciBwcmVmaXggPSB1cmwuaW5kZXhPZihcIj9cIikgPCAwID8gXCI/XCIgOiBcIiZcIlxuXHRcdFx0dXJsICs9IHByZWZpeCArIHF1ZXJ5c3RyaW5nXG5cdFx0fVxuXHRcdHJldHVybiB1cmxcblx0fVxuXHRmdW5jdGlvbiBkZXNlcmlhbGl6ZShkYXRhKSB7XG5cdFx0dHJ5IHtyZXR1cm4gZGF0YSAhPT0gXCJcIiA/IEpTT04ucGFyc2UoZGF0YSkgOiBudWxsfVxuXHRcdGNhdGNoIChlKSB7dGhyb3cgbmV3IEVycm9yKGRhdGEpfVxuXHR9XG5cdGZ1bmN0aW9uIGV4dHJhY3QoeGhyKSB7cmV0dXJuIHhoci5yZXNwb25zZVRleHR9XG5cdGZ1bmN0aW9uIGNhc3QodHlwZTAsIGRhdGEpIHtcblx0XHRpZiAodHlwZW9mIHR5cGUwID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGRhdGFbaV0gPSBuZXcgdHlwZTAoZGF0YVtpXSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSByZXR1cm4gbmV3IHR5cGUwKGRhdGEpXG5cdFx0fVxuXHRcdHJldHVybiBkYXRhXG5cdH1cblx0cmV0dXJuIHtyZXF1ZXN0OiByZXF1ZXN0LCBqc29ucDoganNvbnAsIHNldENvbXBsZXRpb25DYWxsYmFjazogc2V0Q29tcGxldGlvbkNhbGxiYWNrfVxufVxudmFyIHJlcXVlc3RTZXJ2aWNlID0gXzgod2luZG93LCBQcm9taXNlUG9seWZpbGwpXG52YXIgY29yZVJlbmRlcmVyID0gZnVuY3Rpb24oJHdpbmRvdykge1xuXHR2YXIgJGRvYyA9ICR3aW5kb3cuZG9jdW1lbnRcblx0dmFyICRlbXB0eUZyYWdtZW50ID0gJGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblx0dmFyIG5hbWVTcGFjZSA9IHtcblx0XHRzdmc6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcblx0XHRtYXRoOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIlxuXHR9XG5cdHZhciBvbmV2ZW50XG5cdGZ1bmN0aW9uIHNldEV2ZW50Q2FsbGJhY2soY2FsbGJhY2spIHtyZXR1cm4gb25ldmVudCA9IGNhbGxiYWNrfVxuXHRmdW5jdGlvbiBnZXROYW1lU3BhY2Uodm5vZGUpIHtcblx0XHRyZXR1cm4gdm5vZGUuYXR0cnMgJiYgdm5vZGUuYXR0cnMueG1sbnMgfHwgbmFtZVNwYWNlW3Zub2RlLnRhZ11cblx0fVxuXHQvL3Nhbml0eSBjaGVjayB0byBkaXNjb3VyYWdlIHBlb3BsZSBmcm9tIGRvaW5nIGB2bm9kZS5zdGF0ZSA9IC4uLmBcblx0ZnVuY3Rpb24gY2hlY2tTdGF0ZSh2bm9kZSwgb3JpZ2luYWwpIHtcblx0XHRpZiAodm5vZGUuc3RhdGUgIT09IG9yaWdpbmFsKSB0aHJvdyBuZXcgRXJyb3IoXCJgdm5vZGUuc3RhdGVgIG11c3Qgbm90IGJlIG1vZGlmaWVkXCIpXG5cdH1cblx0Ly9Ob3RlOiB0aGUgaG9vayBpcyBwYXNzZWQgYXMgdGhlIGB0aGlzYCBhcmd1bWVudCB0byBhbGxvdyBwcm94eWluZyB0aGVcblx0Ly9hcmd1bWVudHMgd2l0aG91dCByZXF1aXJpbmcgYSBmdWxsIGFycmF5IGFsbG9jYXRpb24gdG8gZG8gc28uIEl0IGFsc29cblx0Ly90YWtlcyBhZHZhbnRhZ2Ugb2YgdGhlIGZhY3QgdGhlIGN1cnJlbnQgYHZub2RlYCBpcyB0aGUgZmlyc3QgYXJndW1lbnQgaW5cblx0Ly9hbGwgbGlmZWN5Y2xlIG1ldGhvZHMuXG5cdGZ1bmN0aW9uIGNhbGxIb29rKHZub2RlKSB7XG5cdFx0dmFyIG9yaWdpbmFsID0gdm5vZGUuc3RhdGVcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYXBwbHkob3JpZ2luYWwsIGFyZ3VtZW50cylcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0Y2hlY2tTdGF0ZSh2bm9kZSwgb3JpZ2luYWwpXG5cdFx0fVxuXHR9XG5cdC8vY3JlYXRlXG5cdGZ1bmN0aW9uIGNyZWF0ZU5vZGVzKHBhcmVudCwgdm5vZGVzLCBzdGFydCwgZW5kLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKSB7XG5cdFx0Zm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcblx0XHRcdHZhciB2bm9kZSA9IHZub2Rlc1tpXVxuXHRcdFx0aWYgKHZub2RlICE9IG51bGwpIHtcblx0XHRcdFx0Y3JlYXRlTm9kZShwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHR2YXIgdGFnID0gdm5vZGUudGFnXG5cdFx0aWYgKHR5cGVvZiB0YWcgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHZub2RlLnN0YXRlID0ge31cblx0XHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsKSBpbml0TGlmZWN5Y2xlKHZub2RlLmF0dHJzLCB2bm9kZSwgaG9va3MpXG5cdFx0XHRzd2l0Y2ggKHRhZykge1xuXHRcdFx0XHRjYXNlIFwiI1wiOiByZXR1cm4gY3JlYXRlVGV4dChwYXJlbnQsIHZub2RlLCBuZXh0U2libGluZylcblx0XHRcdFx0Y2FzZSBcIjxcIjogcmV0dXJuIGNyZWF0ZUhUTUwocGFyZW50LCB2bm9kZSwgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdGNhc2UgXCJbXCI6IHJldHVybiBjcmVhdGVGcmFnbWVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0XHRkZWZhdWx0OiByZXR1cm4gY3JlYXRlRWxlbWVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHJldHVybiBjcmVhdGVDb21wb25lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVUZXh0KHBhcmVudCwgdm5vZGUsIG5leHRTaWJsaW5nKSB7XG5cdFx0dm5vZGUuZG9tID0gJGRvYy5jcmVhdGVUZXh0Tm9kZSh2bm9kZS5jaGlsZHJlbilcblx0XHRpbnNlcnROb2RlKHBhcmVudCwgdm5vZGUuZG9tLCBuZXh0U2libGluZylcblx0XHRyZXR1cm4gdm5vZGUuZG9tXG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlSFRNTChwYXJlbnQsIHZub2RlLCBuZXh0U2libGluZykge1xuXHRcdHZhciBtYXRjaDEgPSB2bm9kZS5jaGlsZHJlbi5tYXRjaCgvXlxccyo/PChcXHcrKS9pbSkgfHwgW11cblx0XHR2YXIgcGFyZW50MSA9IHtjYXB0aW9uOiBcInRhYmxlXCIsIHRoZWFkOiBcInRhYmxlXCIsIHRib2R5OiBcInRhYmxlXCIsIHRmb290OiBcInRhYmxlXCIsIHRyOiBcInRib2R5XCIsIHRoOiBcInRyXCIsIHRkOiBcInRyXCIsIGNvbGdyb3VwOiBcInRhYmxlXCIsIGNvbDogXCJjb2xncm91cFwifVttYXRjaDFbMV1dIHx8IFwiZGl2XCJcblx0XHR2YXIgdGVtcCA9ICRkb2MuY3JlYXRlRWxlbWVudChwYXJlbnQxKVxuXHRcdHRlbXAuaW5uZXJIVE1MID0gdm5vZGUuY2hpbGRyZW5cblx0XHR2bm9kZS5kb20gPSB0ZW1wLmZpcnN0Q2hpbGRcblx0XHR2bm9kZS5kb21TaXplID0gdGVtcC5jaGlsZE5vZGVzLmxlbmd0aFxuXHRcdHZhciBmcmFnbWVudCA9ICRkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cdFx0dmFyIGNoaWxkXG5cdFx0d2hpbGUgKGNoaWxkID0gdGVtcC5maXJzdENoaWxkKSB7XG5cdFx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZChjaGlsZClcblx0XHR9XG5cdFx0aW5zZXJ0Tm9kZShwYXJlbnQsIGZyYWdtZW50LCBuZXh0U2libGluZylcblx0XHRyZXR1cm4gZnJhZ21lbnRcblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVGcmFnbWVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKSB7XG5cdFx0dmFyIGZyYWdtZW50ID0gJGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblx0XHRpZiAodm5vZGUuY2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0dmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW5cblx0XHRcdGNyZWF0ZU5vZGVzKGZyYWdtZW50LCBjaGlsZHJlbiwgMCwgY2hpbGRyZW4ubGVuZ3RoLCBob29rcywgbnVsbCwgbnMpXG5cdFx0fVxuXHRcdHZub2RlLmRvbSA9IGZyYWdtZW50LmZpcnN0Q2hpbGRcblx0XHR2bm9kZS5kb21TaXplID0gZnJhZ21lbnQuY2hpbGROb2Rlcy5sZW5ndGhcblx0XHRpbnNlcnROb2RlKHBhcmVudCwgZnJhZ21lbnQsIG5leHRTaWJsaW5nKVxuXHRcdHJldHVybiBmcmFnbWVudFxuXHR9XG5cdGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZykge1xuXHRcdHZhciB0YWcgPSB2bm9kZS50YWdcblx0XHR2YXIgYXR0cnMyID0gdm5vZGUuYXR0cnNcblx0XHR2YXIgaXMgPSBhdHRyczIgJiYgYXR0cnMyLmlzXG5cdFx0bnMgPSBnZXROYW1lU3BhY2Uodm5vZGUpIHx8IG5zXG5cdFx0dmFyIGVsZW1lbnQgPSBucyA/XG5cdFx0XHRpcyA/ICRkb2MuY3JlYXRlRWxlbWVudE5TKG5zLCB0YWcsIHtpczogaXN9KSA6ICRkb2MuY3JlYXRlRWxlbWVudE5TKG5zLCB0YWcpIDpcblx0XHRcdGlzID8gJGRvYy5jcmVhdGVFbGVtZW50KHRhZywge2lzOiBpc30pIDogJGRvYy5jcmVhdGVFbGVtZW50KHRhZylcblx0XHR2bm9kZS5kb20gPSBlbGVtZW50XG5cdFx0aWYgKGF0dHJzMiAhPSBudWxsKSB7XG5cdFx0XHRzZXRBdHRycyh2bm9kZSwgYXR0cnMyLCBucylcblx0XHR9XG5cdFx0aW5zZXJ0Tm9kZShwYXJlbnQsIGVsZW1lbnQsIG5leHRTaWJsaW5nKVxuXHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsICYmIHZub2RlLmF0dHJzLmNvbnRlbnRlZGl0YWJsZSAhPSBudWxsKSB7XG5cdFx0XHRzZXRDb250ZW50RWRpdGFibGUodm5vZGUpXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKHZub2RlLnRleHQgIT0gbnVsbCkge1xuXHRcdFx0XHRpZiAodm5vZGUudGV4dCAhPT0gXCJcIikgZWxlbWVudC50ZXh0Q29udGVudCA9IHZub2RlLnRleHRcblx0XHRcdFx0ZWxzZSB2bm9kZS5jaGlsZHJlbiA9IFtWbm9kZShcIiNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHZub2RlLnRleHQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKV1cblx0XHRcdH1cblx0XHRcdGlmICh2bm9kZS5jaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0XHRcdHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cdFx0XHRcdGNyZWF0ZU5vZGVzKGVsZW1lbnQsIGNoaWxkcmVuLCAwLCBjaGlsZHJlbi5sZW5ndGgsIGhvb2tzLCBudWxsLCBucylcblx0XHRcdFx0c2V0TGF0ZUF0dHJzKHZub2RlKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZWxlbWVudFxuXHR9XG5cdGZ1bmN0aW9uIGluaXRDb21wb25lbnQodm5vZGUsIGhvb2tzKSB7XG5cdFx0dmFyIHNlbnRpbmVsXG5cdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcudmlldyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHR2bm9kZS5zdGF0ZSA9IE9iamVjdC5jcmVhdGUodm5vZGUudGFnKVxuXHRcdFx0c2VudGluZWwgPSB2bm9kZS5zdGF0ZS52aWV3XG5cdFx0XHRpZiAoc2VudGluZWwuJCRyZWVudHJhbnRMb2NrJCQgIT0gbnVsbCkgcmV0dXJuICRlbXB0eUZyYWdtZW50XG5cdFx0XHRzZW50aW5lbC4kJHJlZW50cmFudExvY2skJCA9IHRydWVcblx0XHR9IGVsc2Uge1xuXHRcdFx0dm5vZGUuc3RhdGUgPSB2b2lkIDBcblx0XHRcdHNlbnRpbmVsID0gdm5vZGUudGFnXG5cdFx0XHRpZiAoc2VudGluZWwuJCRyZWVudHJhbnRMb2NrJCQgIT0gbnVsbCkgcmV0dXJuICRlbXB0eUZyYWdtZW50XG5cdFx0XHRzZW50aW5lbC4kJHJlZW50cmFudExvY2skJCA9IHRydWVcblx0XHRcdHZub2RlLnN0YXRlID0gKHZub2RlLnRhZy5wcm90b3R5cGUgIT0gbnVsbCAmJiB0eXBlb2Ygdm5vZGUudGFnLnByb3RvdHlwZS52aWV3ID09PSBcImZ1bmN0aW9uXCIpID8gbmV3IHZub2RlLnRhZyh2bm9kZSkgOiB2bm9kZS50YWcodm5vZGUpXG5cdFx0fVxuXHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsKSBpbml0TGlmZWN5Y2xlKHZub2RlLmF0dHJzLCB2bm9kZSwgaG9va3MpXG5cdFx0aW5pdExpZmVjeWNsZSh2bm9kZS5zdGF0ZSwgdm5vZGUsIGhvb2tzKVxuXHRcdHZub2RlLmluc3RhbmNlID0gVm5vZGUubm9ybWFsaXplKGNhbGxIb29rLmNhbGwodm5vZGUuc3RhdGUudmlldywgdm5vZGUpKVxuXHRcdGlmICh2bm9kZS5pbnN0YW5jZSA9PT0gdm5vZGUpIHRocm93IEVycm9yKFwiQSB2aWV3IGNhbm5vdCByZXR1cm4gdGhlIHZub2RlIGl0IHJlY2VpdmVkIGFzIGFyZ3VtZW50XCIpXG5cdFx0c2VudGluZWwuJCRyZWVudHJhbnRMb2NrJCQgPSBudWxsXG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHRpbml0Q29tcG9uZW50KHZub2RlLCBob29rcylcblx0XHRpZiAodm5vZGUuaW5zdGFuY2UgIT0gbnVsbCkge1xuXHRcdFx0dmFyIGVsZW1lbnQgPSBjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGUuaW5zdGFuY2UsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0XHR2bm9kZS5kb20gPSB2bm9kZS5pbnN0YW5jZS5kb21cblx0XHRcdHZub2RlLmRvbVNpemUgPSB2bm9kZS5kb20gIT0gbnVsbCA/IHZub2RlLmluc3RhbmNlLmRvbVNpemUgOiAwXG5cdFx0XHRpbnNlcnROb2RlKHBhcmVudCwgZWxlbWVudCwgbmV4dFNpYmxpbmcpXG5cdFx0XHRyZXR1cm4gZWxlbWVudFxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHZub2RlLmRvbVNpemUgPSAwXG5cdFx0XHRyZXR1cm4gJGVtcHR5RnJhZ21lbnRcblx0XHR9XG5cdH1cblx0Ly91cGRhdGVcblx0LyoqXG5cdCAqIEBwYXJhbSB7RWxlbWVudHxGcmFnbWVudH0gcGFyZW50IC0gdGhlIHBhcmVudCBlbGVtZW50XG5cdCAqIEBwYXJhbSB7Vm5vZGVbXSB8IG51bGx9IG9sZCAtIHRoZSBsaXN0IG9mIHZub2RlcyBvZiB0aGUgbGFzdDAgYHJlbmRlcigpYCBjYWxsIGZvclxuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzIHBhcnQgb2YgdGhlIHRyZWVcblx0ICogQHBhcmFtIHtWbm9kZVtdIHwgbnVsbH0gdm5vZGVzIC0gYXMgYWJvdmUsIGJ1dCBmb3IgdGhlIGN1cnJlbnQgYHJlbmRlcigpYCBjYWxsLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHJlY3ljbGluZ1BhcmVudCAtIHdhcyB0aGUgcGFyZW50IHZub2RlIG9yIG9uZSBvZiBpdHMgYW5jZXN0b3Jcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGVkIGZyb20gdGhlIHJlY3ljbGluZyBwb29sP1xuXHQgKiBAcGFyYW0ge0Z1bmN0aW9uW119IGhvb2tzIC0gYW4gYWNjdW11bGF0b3Igb2YgcG9zdC1yZW5kZXIgaG9va3MgKG9uY3JlYXRlL29udXBkYXRlKVxuXHQgKiBAcGFyYW0ge0VsZW1lbnQgfCBudWxsfSBuZXh0U2libGluZyAtIHRoZSBuZXh0MCBET00gbm9kZSBpZiB3ZSdyZSBkZWFsaW5nIHdpdGggYVxuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IHRoYXQgaXMgbm90IHRoZSBsYXN0MCBpdGVtIGluIGl0c1xuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFxuXHQgKiBAcGFyYW0geydzdmcnIHwgJ21hdGgnIHwgU3RyaW5nIHwgbnVsbH0gbnMpIC0gdGhlIGN1cnJlbnQgWE1MIG5hbWVzcGFjZSwgaWYgYW55XG5cdCAqIEByZXR1cm5zIHZvaWRcblx0ICovXG5cdC8vIFRoaXMgZnVuY3Rpb24gZGlmZnMgYW5kIHBhdGNoZXMgbGlzdHMgb2Ygdm5vZGVzLCBib3RoIGtleWVkIGFuZCB1bmtleWVkLlxuXHQvL1xuXHQvLyBXZSB3aWxsOlxuXHQvL1xuXHQvLyAxLiBkZXNjcmliZSBpdHMgZ2VuZXJhbCBzdHJ1Y3R1cmVcblx0Ly8gMi4gZm9jdXMgb24gdGhlIGRpZmYgYWxnb3JpdGhtIG9wdGltaXphdGlvbnNcblx0Ly8gMy4gZGVzY3JpYmUgaG93IHRoZSByZWN5Y2xpbmcgcG9vbCBtZXNoZXMgaW50byB0aGlzXG5cdC8vIDQuIGRpc2N1c3MgRE9NIG5vZGUgb3BlcmF0aW9ucy5cblx0Ly8gIyMgT3ZlcnZpZXc6XG5cdC8vXG5cdC8vIFRoZSB1cGRhdGVOb2RlcygpIGZ1bmN0aW9uOlxuXHQvLyAtIGRlYWxzIHdpdGggdHJpdmlhbCBjYXNlc1xuXHQvLyAtIGRldGVybWluZXMgd2hldGhlciB0aGUgbGlzdHMgYXJlIGtleWVkIG9yIHVua2V5ZWRcblx0Ly8gICAoQ3VycmVudGx5IHdlIGxvb2sgZm9yIHRoZSBmaXJzdCBwYWlyIG9mIG5vbi1udWxsIG5vZGVzIGFuZCBkZWVtIHRoZSBsaXN0cyB1bmtleWVkXG5cdC8vICAgaWYgYm90aCBub2RlcyBhcmUgdW5rZXllZC4gVE9ETyAodjIpIFdlIG1heSBsYXRlciB0YWtlIGFkdmFudGFnZSBvZiB0aGUgZmFjdCB0aGF0XG5cdC8vICAgbWl4ZWQgZGlmZiBpcyBub3Qgc3VwcG9ydGVkIGFuZCBzZXR0bGUgb24gdGhlIGtleWVkbmVzcyBvZiB0aGUgZmlyc3Qgdm5vZGUgd2UgZmluZClcblx0Ly8gLSBkaWZmcyB0aGVtIGFuZCBwYXRjaGVzIHRoZSBET00gaWYgbmVlZGVkICh0aGF0J3MgdGhlIGJydW50IG9mIHRoZSBjb2RlKVxuXHQvLyAtIG1hbmFnZXMgdGhlIGxlZnRvdmVyczogYWZ0ZXIgZGlmZmluZywgYXJlIHRoZXJlOlxuXHQvLyAgIC0gb2xkIG5vZGVzIGxlZnQgdG8gcmVtb3ZlP1xuXHQvLyBcdCAtIG5ldyBub2RlcyB0byBpbnNlcnQ/XG5cdC8vICAgLSBub2RlcyBsZWZ0IGluIHRoZSByZWN5Y2xpbmcgcG9vbD9cblx0Ly8gXHQgZGVhbCB3aXRoIHRoZW0hXG5cdC8vXG5cdC8vIFRoZSBsaXN0cyBhcmUgb25seSBpdGVyYXRlZCBvdmVyIG9uY2UsIHdpdGggYW4gZXhjZXB0aW9uIGZvciB0aGUgbm9kZXMgaW4gYG9sZGAgdGhhdFxuXHQvLyBhcmUgdmlzaXRlZCBpbiB0aGUgZm91cnRoIHBhcnQgb2YgdGhlIGRpZmYgYW5kIGluIHRoZSBgcmVtb3ZlTm9kZXNgIGxvb3AuXG5cdC8vICMjIERpZmZpbmdcblx0Ly9cblx0Ly8gVGhlcmUncyBmaXJzdCBhIHNpbXBsZSBkaWZmIGZvciB1bmtleWVkIGxpc3RzIG9mIGVxdWFsIGxlbmd0aCB0aGF0IGVzY2hld3MgdGhlIHBvb2wuXG5cdC8vXG5cdC8vIEl0IGlzIGZvbGxvd2VkIGJ5IGEgc21hbGwgc2VjdGlvbiB0aGF0IGFjdGl2YXRlcyB0aGUgcmVjeWNsaW5nIHBvb2wgaWYgcHJlc2VudCwgd2UnbGxcblx0Ly8gaWdub3JlIGl0IGZvciBub3cuXG5cdC8vXG5cdC8vIFRoZW4gY29tZXMgdGhlIG1haW4gZGlmZiBhbGdvcml0aG0gdGhhdCBpcyBzcGxpdCBpbiBmb3VyIHBhcnRzIChzaW1wbGlmeWluZyBhIGJpdCkuXG5cdC8vXG5cdC8vIFRoZSBmaXJzdCBwYXJ0IGdvZXMgdGhyb3VnaCBib3RoIGxpc3RzIHRvcC1kb3duIGFzIGxvbmcgYXMgdGhlIG5vZGVzIGF0IGVhY2ggbGV2ZWwgaGF2ZVxuXHQvLyB0aGUgc2FtZSBrZXkyLiBUaGlzIGlzIGFsd2F5cyB0cnVlIGZvciB1bmtleWVkIGxpc3RzIHRoYXQgYXJlIGVudGlyZWx5IHByb2Nlc3NlZCBieSB0aGlzXG5cdC8vIHN0ZXAuXG5cdC8vXG5cdC8vIFRoZSBzZWNvbmQgcGFydCBkZWFscyB3aXRoIGxpc3RzIHJldmVyc2FscywgYW5kIHRyYXZlcnNlcyBvbmUgbGlzdCB0b3AtZG93biBhbmQgdGhlIG90aGVyXG5cdC8vIGJvdHRvbS11cCAoYXMgbG9uZyBhcyB0aGUga2V5cyBtYXRjaDEpLlxuXHQvL1xuXHQvLyBUaGUgdGhpcmQgcGFydCBnb2VzIHRocm91Z2ggYm90aCBsaXN0cyBib3R0b20gdXAgYXMgbG9uZyBhcyB0aGUga2V5cyBtYXRjaDEuXG5cdC8vXG5cdC8vIFRoZSBmaXJzdCBhbmQgdGhpcmQgc2VjdGlvbnMgYWxsb3cgdXMgdG8gZGVhbCBlZmZpY2llbnRseSB3aXRoIHNpdHVhdGlvbnMgd2hlcmUgb25lIG9yXG5cdC8vIG1vcmUgY29udGlndW91cyBub2RlcyB3ZXJlIGVpdGhlciBpbnNlcnRlZCBpbnRvLCByZW1vdmVkIGZyb20gb3IgcmUtb3JkZXJlZCBpbiBhbiBvdGhlcndpc2Vcblx0Ly8gc29ydGVkIGxpc3QuIFRoZXkgbWF5IHJlZHVjZSB0aGUgbnVtYmVyIG9mIG5vZGVzIHRvIGJlIHByb2Nlc3NlZCBpbiB0aGUgZm91cnRoIHNlY3Rpb24uXG5cdC8vXG5cdC8vIFRoZSBmb3VydGggc2VjdGlvbiBkb2VzIGtleWVkIGRpZmYgZm9yIHRoZSBzaXR1YXRpb25zIG5vdCBjb3ZlcmVkIGJ5IHRoZSBvdGhlciB0aHJlZS4gSXRcblx0Ly8gYnVpbGRzIGEge2tleTogb2xkSW5kZXh9IGRpY3Rpb25hcnkgYW5kIHVzZXMgaXQgdG8gZmluZCBvbGQgbm9kZXMgdGhhdCBtYXRjaDEgdGhlIGtleXMgb2Zcblx0Ly8gbmV3IG9uZXMuXG5cdC8vIFRoZSBub2RlcyBmcm9tIHRoZSBgb2xkYCBhcnJheSB0aGF0IGhhdmUgYSBtYXRjaDEgaW4gdGhlIG5ldyBgdm5vZGVzYCBvbmUgYXJlIG1hcmtlZCBhc1xuXHQvLyBgdm5vZGUuc2tpcDogdHJ1ZWAuXG5cdC8vXG5cdC8vIElmIHRoZXJlIGFyZSBzdGlsbCBub2RlcyBpbiB0aGUgbmV3IGB2bm9kZXNgIGFycmF5IHRoYXQgaGF2ZW4ndCBiZWVuIG1hdGNoZWQgdG8gb2xkIG9uZXMsXG5cdC8vIHRoZXkgYXJlIGNyZWF0ZWQuXG5cdC8vIFRoZSByYW5nZSBvZiBvbGQgbm9kZXMgdGhhdCB3YXNuJ3QgY292ZXJlZCBieSB0aGUgZmlyc3QgdGhyZWUgc2VjdGlvbnMgaXMgcGFzc2VkIHRvXG5cdC8vIGByZW1vdmVOb2RlcygpYC4gVGhvc2Ugbm9kZXMgYXJlIHJlbW92ZWQgdW5sZXNzIG1hcmtlZCBhcyBgLnNraXA6IHRydWVgLlxuXHQvL1xuXHQvLyBUaGVuIHNvbWUgcG9vbCBidXNpbmVzcyBoYXBwZW5zLlxuXHQvL1xuXHQvLyBJdCBzaG91bGQgYmUgbm90ZWQgdGhhdCB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIGZvdXIgc2VjdGlvbnMgYWJvdmUgaXMgbm90IHBlcmZlY3QsIGJlY2F1c2UgdGhvc2Vcblx0Ly8gcGFydHMgYXJlIGFjdHVhbGx5IGltcGxlbWVudGVkIGFzIG9ubHkgdHdvIGxvb3BzLCBvbmUgZm9yIHRoZSBmaXJzdCB0d28gcGFydHMsIGFuZCBvbmUgZm9yXG5cdC8vIHRoZSBvdGhlciB0d28uIEknbTEgbm90IHN1cmUgaXQgd2lucyB1cyBhbnl0aGluZyBleGNlcHQgbWF5YmUgYSBmZXcgYnl0ZXMgb2YgZmlsZSBzaXplLlxuXHQvLyAjIyBUaGUgcG9vbFxuXHQvL1xuXHQvLyBgb2xkLnBvb2xgIGlzIGFuIG9wdGlvbmFsIGFycmF5IHRoYXQgaG9sZHMgdGhlIHZub2RlcyB0aGF0IGhhdmUgYmVlbiBwcmV2aW91c2x5IHJlbW92ZWRcblx0Ly8gZnJvbSB0aGUgRE9NIGF0IHRoaXMgbGV2ZWwgKHByb3ZpZGVkIHRoZXkgbWV0IHRoZSBwb29sIGVsaWdpYmlsaXR5IGNyaXRlcmlhKS5cblx0Ly9cblx0Ly8gSWYgdGhlIGBvbGRgLCBgb2xkLnBvb2xgIGFuZCBgdm5vZGVzYCBtZWV0IHNvbWUgY3JpdGVyaWEgZGVzY3JpYmVkIGluIGBpc1JlY3ljbGFibGVgLCB0aGVcblx0Ly8gZWxlbWVudHMgb2YgdGhlIHBvb2wgYXJlIGFwcGVuZGVkIHRvIHRoZSBgb2xkYCBhcnJheSwgd2hpY2ggZW5hYmxlcyB0aGUgcmVjb25jaWxlciB0byBmaW5kXG5cdC8vIHRoZW0uXG5cdC8vXG5cdC8vIFdoaWxlIHRoaXMgaXMgb3B0aW1hbCBmb3IgdW5rZXllZCBkaWZmIGFuZCBtYXAtYmFzZWQga2V5ZWQgZGlmZiAodGhlIGZvdXJ0aCBkaWZmIHBhcnQpLFxuXHQvLyB0aGF0IHN0cmF0ZWd5IGNsYXNoZXMgd2l0aCB0aGUgc2Vjb25kIGFuZCB0aGlyZCBwYXJ0cyBvZiB0aGUgbWFpbiBkaWZmIGFsZ28sIGJlY2F1c2Vcblx0Ly8gdGhlIGVuZCBvZiB0aGUgb2xkIGxpc3QgaXMgbm93IGZpbGxlZCB3aXRoIHRoZSBub2RlcyBvZiB0aGUgcG9vbC5cblx0Ly9cblx0Ly8gVG8gZGV0ZXJtaW5lIGlmIGEgdm5vZGUgd2FzIGJyb3VnaHQgYmFjayBmcm9tIHRoZSBwb29sLCB3ZSBsb29rIGF0IGl0cyBwb3NpdGlvbiBpbiB0aGVcblx0Ly8gYG9sZGAgYXJyYXkgKHNlZSB0aGUgdmFyaW91cyBgb0Zyb21Qb29sYCBkZWZpbml0aW9ucykuIFRoYXQgaW5mb3JtYXRpb24gaXMgaW1wb3J0YW50XG5cdC8vIGluIHRocmVlIGNpcmN1bXN0YW5jZXM6XG5cdC8vIC0gSWYgdGhlIG9sZCBhbmQgdGhlIG5ldyB2bm9kZXMgYXJlIHRoZSBzYW1lIG9iamVjdCAoYD09PWApLCBkaWZmIGlzIG5vdCBwZXJmb3JtZWQgdW5sZXNzXG5cdC8vICAgdGhlIG9sZCBub2RlIGNvbWVzIGZyb20gdGhlIHBvb2wgKHNpbmNlIGl0IG11c3QgYmUgcmVjeWNsZWQvcmUtY3JlYXRlZCkuXG5cdC8vIC0gVGhlIHZhbHVlIG9mIGBvRnJvbVBvb2xgIGlzIHBhc3NlZCBhcyB0aGUgYHJlY3ljbGluZ2AgcGFyYW1ldGVyIG9mIGB1cGRhdGVOb2RlKClgICh3aGV0aGVyXG5cdC8vICAgdGhlIHBhcmVudCBpcyBiZWluZyByZWN5Y2xlZCBpcyBhbHNvIGZhY3RyZWQgaW4gaGVyZSlcblx0Ly8gLSBJdCBpcyB1c2VkIGluIHRoZSBET00gbm9kZSBpbnNlcnRpb24gbG9naWMgKHNlZSBiZWxvdylcblx0Ly9cblx0Ly8gQXQgdGhlIHZlcnkgZW5kIG9mIGB1cGRhdGVOb2RlcygpYCwgdGhlIG5vZGVzIGluIHRoZSBwb29sIHRoYXQgaGF2ZW4ndCBiZWVuIHBpY2tlZCBiYWNrXG5cdC8vIGFyZSBwdXQgaW4gdGhlIG5ldyBwb29sIGZvciB0aGUgbmV4dDAgcmVuZGVyIHBoYXNlLlxuXHQvL1xuXHQvLyBUaGUgcG9vbCBlbGlnaWJpbGl0eSBhbmQgYGlzUmVjeWNsYWJsZSgpYCBjcml0ZXJpYSBhcmUgdG8gYmUgdXBkYXRlZCBhcyBwYXJ0IG9mICMxNjc1LlxuXHQvLyAjIyBET00gbm9kZSBvcGVyYXRpb25zXG5cdC8vXG5cdC8vIEluIG1vc3QgY2FzZXMgYHVwZGF0ZU5vZGUoKWAgYW5kIGBjcmVhdGVOb2RlKClgIHBlcmZvcm0gdGhlIERPTSBvcGVyYXRpb25zLiBIb3dldmVyLFxuXHQvLyB0aGlzIGlzIG5vdCB0aGUgY2FzZSBpZiB0aGUgbm9kZSBtb3ZlZCAoc2Vjb25kIGFuZCBmb3VydGggcGFydCBvZiB0aGUgZGlmZiBhbGdvKSwgb3Jcblx0Ly8gaWYgdGhlIG5vZGUgd2FzIGJyb3VnaCBiYWNrIGZyb20gdGhlIHBvb2wgYW5kIGJvdGggdGhlIG9sZCBhbmQgbmV3IG5vZGVzIGhhdmUgdGhlIHNhbWVcblx0Ly8gYC50YWdgIHZhbHVlICh3aGVuIHRoZSBgLnRhZ2AgZGlmZmVyLCBgdXBkYXRlTm9kZSgpYCBkb2VzIHRoZSBpbnNlcnRpb24pLlxuXHQvL1xuXHQvLyBUaGUgZm91cnRoIHBhcnQgb2YgdGhlIGRpZmYgY3VycmVudGx5IGluc2VydHMgbm9kZXMgdW5jb25kaXRpb25hbGx5LCBsZWFkaW5nIHRvIGlzc3Vlc1xuXHQvLyBsaWtlICMxNzkxIGFuZCAjMTk5OS4gV2UgbmVlZCB0byBiZSBzbWFydGVyIGFib3V0IHRob3NlIHNpdHVhdGlvbnMgd2hlcmUgYWRqYXNjZW50IG9sZFxuXHQvLyBub2RlcyByZW1haW4gdG9nZXRoZXIgaW4gdGhlIG5ldyBsaXN0IGluIGEgd2F5IHRoYXQgaXNuJ3QgY292ZXJlZCBieSBwYXJ0cyBvbmUgYW5kXG5cdC8vIHRocmVlIG9mIHRoZSBkaWZmIGFsZ28uXG5cdGZ1bmN0aW9uIHVwZGF0ZU5vZGVzKHBhcmVudCwgb2xkLCB2bm9kZXMsIHJlY3ljbGluZ1BhcmVudCwgaG9va3MsIG5leHRTaWJsaW5nLCBucykge1xuXHRcdGlmIChvbGQgPT09IHZub2RlcyAmJiAhcmVjeWNsaW5nUGFyZW50IHx8IG9sZCA9PSBudWxsICYmIHZub2RlcyA9PSBudWxsKSByZXR1cm5cblx0XHRlbHNlIGlmIChvbGQgPT0gbnVsbCkgY3JlYXRlTm9kZXMocGFyZW50LCB2bm9kZXMsIDAsIHZub2Rlcy5sZW5ndGgsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0ZWxzZSBpZiAodm5vZGVzID09IG51bGwpIHJlbW92ZU5vZGVzKG9sZCwgMCwgb2xkLmxlbmd0aCwgdm5vZGVzLCByZWN5Y2xpbmdQYXJlbnQpXG5cdFx0ZWxzZSB7XG5cdFx0XHR2YXIgc3RhcnQgPSAwLCBjb21tb25MZW5ndGggPSBNYXRoLm1pbihvbGQubGVuZ3RoLCB2bm9kZXMubGVuZ3RoKSwgb3JpZ2luYWxPbGRMZW5ndGggPSBvbGQubGVuZ3RoLCBoYXNQb29sID0gZmFsc2UsIGlzVW5rZXllZCA9IGZhbHNlXG5cdFx0XHRmb3IoOyBzdGFydCA8IGNvbW1vbkxlbmd0aDsgc3RhcnQrKykge1xuXHRcdFx0XHRpZiAob2xkW3N0YXJ0XSAhPSBudWxsICYmIHZub2Rlc1tzdGFydF0gIT0gbnVsbCkge1xuXHRcdFx0XHRcdGlmIChvbGRbc3RhcnRdLmtleSA9PSBudWxsICYmIHZub2Rlc1tzdGFydF0ua2V5ID09IG51bGwpIGlzVW5rZXllZCA9IHRydWVcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoaXNVbmtleWVkICYmIG9yaWdpbmFsT2xkTGVuZ3RoID09PSB2bm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRcdGZvciAoc3RhcnQgPSAwOyBzdGFydCA8IG9yaWdpbmFsT2xkTGVuZ3RoOyBzdGFydCsrKSB7XG5cdFx0XHRcdFx0aWYgKG9sZFtzdGFydF0gPT09IHZub2Rlc1tzdGFydF0gJiYgIXJlY3ljbGluZ1BhcmVudCB8fCBvbGRbc3RhcnRdID09IG51bGwgJiYgdm5vZGVzW3N0YXJ0XSA9PSBudWxsKSBjb250aW51ZVxuXHRcdFx0XHRcdGVsc2UgaWYgKG9sZFtzdGFydF0gPT0gbnVsbCkgY3JlYXRlTm9kZShwYXJlbnQsIHZub2Rlc1tzdGFydF0sIGhvb2tzLCBucywgZ2V0TmV4dFNpYmxpbmcob2xkLCBzdGFydCArIDEsIG9yaWdpbmFsT2xkTGVuZ3RoLCBuZXh0U2libGluZykpXG5cdFx0XHRcdFx0ZWxzZSBpZiAodm5vZGVzW3N0YXJ0XSA9PSBudWxsKSByZW1vdmVOb2RlcyhvbGQsIHN0YXJ0LCBzdGFydCArIDEsIHZub2RlcywgcmVjeWNsaW5nUGFyZW50KVxuXHRcdFx0XHRcdGVsc2UgdXBkYXRlTm9kZShwYXJlbnQsIG9sZFtzdGFydF0sIHZub2Rlc1tzdGFydF0sIGhvb2tzLCBnZXROZXh0U2libGluZyhvbGQsIHN0YXJ0ICsgMSwgb3JpZ2luYWxPbGRMZW5ndGgsIG5leHRTaWJsaW5nKSwgcmVjeWNsaW5nUGFyZW50LCBucylcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHRcdGlmIChpc1JlY3ljbGFibGUob2xkLCB2bm9kZXMpKSB7XG5cdFx0XHRcdGhhc1Bvb2wgPSB0cnVlXG5cdFx0XHRcdG9sZCA9IG9sZC5jb25jYXQob2xkLnBvb2wpXG5cdFx0XHR9XG5cdFx0XHR2YXIgb2xkU3RhcnQgPSBzdGFydCA9IDAsIG9sZEVuZCA9IG9sZC5sZW5ndGggLSAxLCBlbmQgPSB2bm9kZXMubGVuZ3RoIC0gMSwgbWFwLCBvLCB2LCBvRnJvbVBvb2xcblx0XHRcdHdoaWxlIChvbGRFbmQgPj0gb2xkU3RhcnQgJiYgZW5kID49IHN0YXJ0KSB7XG5cdFx0XHRcdG8gPSBvbGRbb2xkU3RhcnRdXG5cdFx0XHRcdHYgPSB2bm9kZXNbc3RhcnRdXG5cdFx0XHRcdG9Gcm9tUG9vbCA9IGhhc1Bvb2wgJiYgb2xkU3RhcnQgPj0gb3JpZ2luYWxPbGRMZW5ndGhcblx0XHRcdFx0aWYgKG8gPT09IHYgJiYgIW9Gcm9tUG9vbCAmJiAhcmVjeWNsaW5nUGFyZW50IHx8IG8gPT0gbnVsbCAmJiB2ID09IG51bGwpIG9sZFN0YXJ0KyssIHN0YXJ0Kytcblx0XHRcdFx0ZWxzZSBpZiAobyA9PSBudWxsKSB7XG5cdFx0XHRcdFx0aWYgKGlzVW5rZXllZCB8fCB2LmtleSA9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGVzW3N0YXJ0XSwgaG9va3MsIG5zLCBnZXROZXh0U2libGluZyhvbGQsICsrc3RhcnQsIG9yaWdpbmFsT2xkTGVuZ3RoLCBuZXh0U2libGluZykpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG9sZFN0YXJ0Kytcblx0XHRcdFx0fSBlbHNlIGlmICh2ID09IG51bGwpIHtcblx0XHRcdFx0XHRpZiAoaXNVbmtleWVkIHx8IG8ua2V5ID09IG51bGwpIHtcblx0XHRcdFx0XHRcdHJlbW92ZU5vZGVzKG9sZCwgc3RhcnQsIHN0YXJ0ICsgMSwgdm5vZGVzLCByZWN5Y2xpbmdQYXJlbnQpXG5cdFx0XHRcdFx0XHRvbGRTdGFydCsrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHN0YXJ0Kytcblx0XHRcdFx0fSBlbHNlIGlmIChvLmtleSA9PT0gdi5rZXkpIHtcblx0XHRcdFx0XHRvbGRTdGFydCsrLCBzdGFydCsrXG5cdFx0XHRcdFx0dXBkYXRlTm9kZShwYXJlbnQsIG8sIHYsIGhvb2tzLCBnZXROZXh0U2libGluZyhvbGQsIG9sZFN0YXJ0LCBvcmlnaW5hbE9sZExlbmd0aCwgbmV4dFNpYmxpbmcpLCBvRnJvbVBvb2wgfHwgcmVjeWNsaW5nUGFyZW50LCBucylcblx0XHRcdFx0XHRpZiAob0Zyb21Qb29sICYmIG8udGFnID09PSB2LnRhZykgaW5zZXJ0Tm9kZShwYXJlbnQsIHRvRnJhZ21lbnQodiksIG5leHRTaWJsaW5nKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG8gPSBvbGRbb2xkRW5kXVxuXHRcdFx0XHRcdG9Gcm9tUG9vbCA9IGhhc1Bvb2wgJiYgb2xkRW5kID49IG9yaWdpbmFsT2xkTGVuZ3RoXG5cdFx0XHRcdFx0aWYgKG8gPT09IHYgJiYgIW9Gcm9tUG9vbCAmJiAhcmVjeWNsaW5nUGFyZW50KSBvbGRFbmQtLSwgc3RhcnQrK1xuXHRcdFx0XHRcdGVsc2UgaWYgKG8gPT0gbnVsbCkgb2xkRW5kLS1cblx0XHRcdFx0XHRlbHNlIGlmICh2ID09IG51bGwpIHN0YXJ0Kytcblx0XHRcdFx0XHRlbHNlIGlmIChvLmtleSA9PT0gdi5rZXkpIHtcblx0XHRcdFx0XHRcdHVwZGF0ZU5vZGUocGFyZW50LCBvLCB2LCBob29rcywgZ2V0TmV4dFNpYmxpbmcob2xkLCBvbGRFbmQgKyAxLCBvcmlnaW5hbE9sZExlbmd0aCwgbmV4dFNpYmxpbmcpLCBvRnJvbVBvb2wgfHwgcmVjeWNsaW5nUGFyZW50LCBucylcblx0XHRcdFx0XHRcdGlmIChvRnJvbVBvb2wgJiYgby50YWcgPT09IHYudGFnIHx8IHN0YXJ0IDwgZW5kKSBpbnNlcnROb2RlKHBhcmVudCwgdG9GcmFnbWVudCh2KSwgZ2V0TmV4dFNpYmxpbmcob2xkLCBvbGRTdGFydCwgb3JpZ2luYWxPbGRMZW5ndGgsIG5leHRTaWJsaW5nKSlcblx0XHRcdFx0XHRcdG9sZEVuZC0tLCBzdGFydCsrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgYnJlYWtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0d2hpbGUgKG9sZEVuZCA+PSBvbGRTdGFydCAmJiBlbmQgPj0gc3RhcnQpIHtcblx0XHRcdFx0byA9IG9sZFtvbGRFbmRdXG5cdFx0XHRcdHYgPSB2bm9kZXNbZW5kXVxuXHRcdFx0XHRvRnJvbVBvb2wgPSBoYXNQb29sICYmIG9sZEVuZCA+PSBvcmlnaW5hbE9sZExlbmd0aFxuXHRcdFx0XHRpZiAobyA9PT0gdiAmJiAhb0Zyb21Qb29sICYmICFyZWN5Y2xpbmdQYXJlbnQpIG9sZEVuZC0tLCBlbmQtLVxuXHRcdFx0XHRlbHNlIGlmIChvID09IG51bGwpIG9sZEVuZC0tXG5cdFx0XHRcdGVsc2UgaWYgKHYgPT0gbnVsbCkgZW5kLS1cblx0XHRcdFx0ZWxzZSBpZiAoby5rZXkgPT09IHYua2V5KSB7XG5cdFx0XHRcdFx0dXBkYXRlTm9kZShwYXJlbnQsIG8sIHYsIGhvb2tzLCBnZXROZXh0U2libGluZyhvbGQsIG9sZEVuZCArIDEsIG9yaWdpbmFsT2xkTGVuZ3RoLCBuZXh0U2libGluZyksIG9Gcm9tUG9vbCB8fCByZWN5Y2xpbmdQYXJlbnQsIG5zKVxuXHRcdFx0XHRcdGlmIChvRnJvbVBvb2wgJiYgby50YWcgPT09IHYudGFnKSBpbnNlcnROb2RlKHBhcmVudCwgdG9GcmFnbWVudCh2KSwgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0aWYgKG8uZG9tICE9IG51bGwpIG5leHRTaWJsaW5nID0gby5kb21cblx0XHRcdFx0XHRvbGRFbmQtLSwgZW5kLS1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoIW1hcCkgbWFwID0gZ2V0S2V5TWFwKG9sZCwgb2xkRW5kKVxuXHRcdFx0XHRcdGlmICh2ICE9IG51bGwpIHtcblx0XHRcdFx0XHRcdHZhciBvbGRJbmRleCA9IG1hcFt2LmtleV1cblx0XHRcdFx0XHRcdGlmIChvbGRJbmRleCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdG8gPSBvbGRbb2xkSW5kZXhdXG5cdFx0XHRcdFx0XHRcdG9Gcm9tUG9vbCA9IGhhc1Bvb2wgJiYgb2xkSW5kZXggPj0gb3JpZ2luYWxPbGRMZW5ndGhcblx0XHRcdFx0XHRcdFx0dXBkYXRlTm9kZShwYXJlbnQsIG8sIHYsIGhvb2tzLCBnZXROZXh0U2libGluZyhvbGQsIG9sZEVuZCArIDEsIG9yaWdpbmFsT2xkTGVuZ3RoLCBuZXh0U2libGluZyksIG9Gcm9tUG9vbCB8fCByZWN5Y2xpbmdQYXJlbnQsIG5zKVxuXHRcdFx0XHRcdFx0XHRpbnNlcnROb2RlKHBhcmVudCwgdG9GcmFnbWVudCh2KSwgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0XHRcdG8uc2tpcCA9IHRydWVcblx0XHRcdFx0XHRcdFx0aWYgKG8uZG9tICE9IG51bGwpIG5leHRTaWJsaW5nID0gby5kb21cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkb20gPSBjcmVhdGVOb2RlKHBhcmVudCwgdiwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdFx0XHRcdFx0bmV4dFNpYmxpbmcgPSBkb21cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZW5kLS1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZW5kIDwgc3RhcnQpIGJyZWFrXG5cdFx0XHR9XG5cdFx0XHRjcmVhdGVOb2RlcyhwYXJlbnQsIHZub2Rlcywgc3RhcnQsIGVuZCArIDEsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0XHRyZW1vdmVOb2RlcyhvbGQsIG9sZFN0YXJ0LCBNYXRoLm1pbihvbGRFbmQgKyAxLCBvcmlnaW5hbE9sZExlbmd0aCksIHZub2RlcywgcmVjeWNsaW5nUGFyZW50KVxuXHRcdFx0aWYgKGhhc1Bvb2wpIHtcblx0XHRcdFx0dmFyIGxpbWl0ID0gTWF0aC5tYXgob2xkU3RhcnQsIG9yaWdpbmFsT2xkTGVuZ3RoKVxuXHRcdFx0XHRmb3IgKDsgb2xkRW5kID49IGxpbWl0OyBvbGRFbmQtLSkge1xuXHRcdFx0XHRcdGlmIChvbGRbb2xkRW5kXS5za2lwKSBvbGRbb2xkRW5kXS5za2lwID0gZmFsc2Vcblx0XHRcdFx0XHRlbHNlIGFkZFRvUG9vbChvbGRbb2xkRW5kXSwgdm5vZGVzKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vIHdoZW4gcmVjeWNsaW5nLCB3ZSdyZSByZS11c2luZyBhbiBvbGQgRE9NIG5vZGUsIGJ1dCBmaXJpbmcgdGhlIG9uaW5pdC9vbmNyZWF0ZSBob29rc1xuXHQvLyBpbnN0ZWFkIG9mIG9uYmVmb3JldXBkYXRlL29udXBkYXRlLlxuXHRmdW5jdGlvbiB1cGRhdGVOb2RlKHBhcmVudCwgb2xkLCB2bm9kZSwgaG9va3MsIG5leHRTaWJsaW5nLCByZWN5Y2xpbmcsIG5zKSB7XG5cdFx0dmFyIG9sZFRhZyA9IG9sZC50YWcsIHRhZyA9IHZub2RlLnRhZ1xuXHRcdGlmIChvbGRUYWcgPT09IHRhZykge1xuXHRcdFx0dm5vZGUuc3RhdGUgPSBvbGQuc3RhdGVcblx0XHRcdHZub2RlLmV2ZW50cyA9IG9sZC5ldmVudHNcblx0XHRcdGlmICghcmVjeWNsaW5nICYmIHNob3VsZE5vdFVwZGF0ZSh2bm9kZSwgb2xkKSkgcmV0dXJuXG5cdFx0XHRpZiAodHlwZW9mIG9sZFRhZyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGlmIChyZWN5Y2xpbmcpIHtcblx0XHRcdFx0XHRcdHZub2RlLnN0YXRlID0ge31cblx0XHRcdFx0XHRcdGluaXRMaWZlY3ljbGUodm5vZGUuYXR0cnMsIHZub2RlLCBob29rcylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB1cGRhdGVMaWZlY3ljbGUodm5vZGUuYXR0cnMsIHZub2RlLCBob29rcylcblx0XHRcdFx0fVxuXHRcdFx0XHRzd2l0Y2ggKG9sZFRhZykge1xuXHRcdFx0XHRcdGNhc2UgXCIjXCI6IHVwZGF0ZVRleHQob2xkLCB2bm9kZSk7IGJyZWFrXG5cdFx0XHRcdFx0Y2FzZSBcIjxcIjogdXBkYXRlSFRNTChwYXJlbnQsIG9sZCwgdm5vZGUsIG5leHRTaWJsaW5nKTsgYnJlYWtcblx0XHRcdFx0XHRjYXNlIFwiW1wiOiB1cGRhdGVGcmFnbWVudChwYXJlbnQsIG9sZCwgdm5vZGUsIHJlY3ljbGluZywgaG9va3MsIG5leHRTaWJsaW5nLCBucyk7IGJyZWFrXG5cdFx0XHRcdFx0ZGVmYXVsdDogdXBkYXRlRWxlbWVudChvbGQsIHZub2RlLCByZWN5Y2xpbmcsIGhvb2tzLCBucylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB1cGRhdGVDb21wb25lbnQocGFyZW50LCBvbGQsIHZub2RlLCBob29rcywgbmV4dFNpYmxpbmcsIHJlY3ljbGluZywgbnMpXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmVtb3ZlTm9kZShvbGQsIG51bGwsIHJlY3ljbGluZylcblx0XHRcdGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlVGV4dChvbGQsIHZub2RlKSB7XG5cdFx0aWYgKG9sZC5jaGlsZHJlbi50b1N0cmluZygpICE9PSB2bm9kZS5jaGlsZHJlbi50b1N0cmluZygpKSB7XG5cdFx0XHRvbGQuZG9tLm5vZGVWYWx1ZSA9IHZub2RlLmNoaWxkcmVuXG5cdFx0fVxuXHRcdHZub2RlLmRvbSA9IG9sZC5kb21cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVIVE1MKHBhcmVudCwgb2xkLCB2bm9kZSwgbmV4dFNpYmxpbmcpIHtcblx0XHRpZiAob2xkLmNoaWxkcmVuICE9PSB2bm9kZS5jaGlsZHJlbikge1xuXHRcdFx0dG9GcmFnbWVudChvbGQpXG5cdFx0XHRjcmVhdGVIVE1MKHBhcmVudCwgdm5vZGUsIG5leHRTaWJsaW5nKVxuXHRcdH1cblx0XHRlbHNlIHZub2RlLmRvbSA9IG9sZC5kb20sIHZub2RlLmRvbVNpemUgPSBvbGQuZG9tU2l6ZVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUZyYWdtZW50KHBhcmVudCwgb2xkLCB2bm9kZSwgcmVjeWNsaW5nLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKSB7XG5cdFx0dXBkYXRlTm9kZXMocGFyZW50LCBvbGQuY2hpbGRyZW4sIHZub2RlLmNoaWxkcmVuLCByZWN5Y2xpbmcsIGhvb2tzLCBuZXh0U2libGluZywgbnMpXG5cdFx0dmFyIGRvbVNpemUgPSAwLCBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cdFx0dm5vZGUuZG9tID0gbnVsbFxuXHRcdGlmIChjaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldXG5cdFx0XHRcdGlmIChjaGlsZCAhPSBudWxsICYmIGNoaWxkLmRvbSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0aWYgKHZub2RlLmRvbSA9PSBudWxsKSB2bm9kZS5kb20gPSBjaGlsZC5kb21cblx0XHRcdFx0XHRkb21TaXplICs9IGNoaWxkLmRvbVNpemUgfHwgMVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9tU2l6ZSAhPT0gMSkgdm5vZGUuZG9tU2l6ZSA9IGRvbVNpemVcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlRWxlbWVudChvbGQsIHZub2RlLCByZWN5Y2xpbmcsIGhvb2tzLCBucykge1xuXHRcdHZhciBlbGVtZW50ID0gdm5vZGUuZG9tID0gb2xkLmRvbVxuXHRcdG5zID0gZ2V0TmFtZVNwYWNlKHZub2RlKSB8fCBuc1xuXHRcdGlmICh2bm9kZS50YWcgPT09IFwidGV4dGFyZWFcIikge1xuXHRcdFx0aWYgKHZub2RlLmF0dHJzID09IG51bGwpIHZub2RlLmF0dHJzID0ge31cblx0XHRcdGlmICh2bm9kZS50ZXh0ICE9IG51bGwpIHtcblx0XHRcdFx0dm5vZGUuYXR0cnMudmFsdWUgPSB2bm9kZS50ZXh0IC8vRklYTUUgaGFuZGxlMCBtdWx0aXBsZSBjaGlsZHJlblxuXHRcdFx0XHR2bm9kZS50ZXh0ID0gdW5kZWZpbmVkXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHVwZGF0ZUF0dHJzKHZub2RlLCBvbGQuYXR0cnMsIHZub2RlLmF0dHJzLCBucylcblx0XHRpZiAodm5vZGUuYXR0cnMgIT0gbnVsbCAmJiB2bm9kZS5hdHRycy5jb250ZW50ZWRpdGFibGUgIT0gbnVsbCkge1xuXHRcdFx0c2V0Q29udGVudEVkaXRhYmxlKHZub2RlKVxuXHRcdH1cblx0XHRlbHNlIGlmIChvbGQudGV4dCAhPSBudWxsICYmIHZub2RlLnRleHQgIT0gbnVsbCAmJiB2bm9kZS50ZXh0ICE9PSBcIlwiKSB7XG5cdFx0XHRpZiAob2xkLnRleHQudG9TdHJpbmcoKSAhPT0gdm5vZGUudGV4dC50b1N0cmluZygpKSBvbGQuZG9tLmZpcnN0Q2hpbGQubm9kZVZhbHVlID0gdm5vZGUudGV4dFxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGlmIChvbGQudGV4dCAhPSBudWxsKSBvbGQuY2hpbGRyZW4gPSBbVm5vZGUoXCIjXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBvbGQudGV4dCwgdW5kZWZpbmVkLCBvbGQuZG9tLmZpcnN0Q2hpbGQpXVxuXHRcdFx0aWYgKHZub2RlLnRleHQgIT0gbnVsbCkgdm5vZGUuY2hpbGRyZW4gPSBbVm5vZGUoXCIjXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB2bm9kZS50ZXh0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCldXG5cdFx0XHR1cGRhdGVOb2RlcyhlbGVtZW50LCBvbGQuY2hpbGRyZW4sIHZub2RlLmNoaWxkcmVuLCByZWN5Y2xpbmcsIGhvb2tzLCBudWxsLCBucylcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlQ29tcG9uZW50KHBhcmVudCwgb2xkLCB2bm9kZSwgaG9va3MsIG5leHRTaWJsaW5nLCByZWN5Y2xpbmcsIG5zKSB7XG5cdFx0aWYgKHJlY3ljbGluZykge1xuXHRcdFx0aW5pdENvbXBvbmVudCh2bm9kZSwgaG9va3MpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHZub2RlLmluc3RhbmNlID0gVm5vZGUubm9ybWFsaXplKGNhbGxIb29rLmNhbGwodm5vZGUuc3RhdGUudmlldywgdm5vZGUpKVxuXHRcdFx0aWYgKHZub2RlLmluc3RhbmNlID09PSB2bm9kZSkgdGhyb3cgRXJyb3IoXCJBIHZpZXcgY2Fubm90IHJldHVybiB0aGUgdm5vZGUgaXQgcmVjZWl2ZWQgYXMgYXJndW1lbnRcIilcblx0XHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsKSB1cGRhdGVMaWZlY3ljbGUodm5vZGUuYXR0cnMsIHZub2RlLCBob29rcylcblx0XHRcdHVwZGF0ZUxpZmVjeWNsZSh2bm9kZS5zdGF0ZSwgdm5vZGUsIGhvb2tzKVxuXHRcdH1cblx0XHRpZiAodm5vZGUuaW5zdGFuY2UgIT0gbnVsbCkge1xuXHRcdFx0aWYgKG9sZC5pbnN0YW5jZSA9PSBudWxsKSBjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGUuaW5zdGFuY2UsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0XHRlbHNlIHVwZGF0ZU5vZGUocGFyZW50LCBvbGQuaW5zdGFuY2UsIHZub2RlLmluc3RhbmNlLCBob29rcywgbmV4dFNpYmxpbmcsIHJlY3ljbGluZywgbnMpXG5cdFx0XHR2bm9kZS5kb20gPSB2bm9kZS5pbnN0YW5jZS5kb21cblx0XHRcdHZub2RlLmRvbVNpemUgPSB2bm9kZS5pbnN0YW5jZS5kb21TaXplXG5cdFx0fVxuXHRcdGVsc2UgaWYgKG9sZC5pbnN0YW5jZSAhPSBudWxsKSB7XG5cdFx0XHRyZW1vdmVOb2RlKG9sZC5pbnN0YW5jZSwgbnVsbCwgcmVjeWNsaW5nKVxuXHRcdFx0dm5vZGUuZG9tID0gdW5kZWZpbmVkXG5cdFx0XHR2bm9kZS5kb21TaXplID0gMFxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHZub2RlLmRvbSA9IG9sZC5kb21cblx0XHRcdHZub2RlLmRvbVNpemUgPSBvbGQuZG9tU2l6ZVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBpc1JlY3ljbGFibGUob2xkLCB2bm9kZXMpIHtcblx0XHRpZiAob2xkLnBvb2wgIT0gbnVsbCAmJiBNYXRoLmFicyhvbGQucG9vbC5sZW5ndGggLSB2bm9kZXMubGVuZ3RoKSA8PSBNYXRoLmFicyhvbGQubGVuZ3RoIC0gdm5vZGVzLmxlbmd0aCkpIHtcblx0XHRcdHZhciBvbGRDaGlsZHJlbkxlbmd0aCA9IG9sZFswXSAmJiBvbGRbMF0uY2hpbGRyZW4gJiYgb2xkWzBdLmNoaWxkcmVuLmxlbmd0aCB8fCAwXG5cdFx0XHR2YXIgcG9vbENoaWxkcmVuTGVuZ3RoID0gb2xkLnBvb2xbMF0gJiYgb2xkLnBvb2xbMF0uY2hpbGRyZW4gJiYgb2xkLnBvb2xbMF0uY2hpbGRyZW4ubGVuZ3RoIHx8IDBcblx0XHRcdHZhciB2bm9kZXNDaGlsZHJlbkxlbmd0aCA9IHZub2Rlc1swXSAmJiB2bm9kZXNbMF0uY2hpbGRyZW4gJiYgdm5vZGVzWzBdLmNoaWxkcmVuLmxlbmd0aCB8fCAwXG5cdFx0XHRpZiAoTWF0aC5hYnMocG9vbENoaWxkcmVuTGVuZ3RoIC0gdm5vZGVzQ2hpbGRyZW5MZW5ndGgpIDw9IE1hdGguYWJzKG9sZENoaWxkcmVuTGVuZ3RoIC0gdm5vZGVzQ2hpbGRyZW5MZW5ndGgpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZVxuXHR9XG5cdGZ1bmN0aW9uIGdldEtleU1hcCh2bm9kZXMsIGVuZCkge1xuXHRcdHZhciBtYXAgPSB7fSwgaSA9IDBcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVuZDsgaSsrKSB7XG5cdFx0XHR2YXIgdm5vZGUgPSB2bm9kZXNbaV1cblx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSB7XG5cdFx0XHRcdHZhciBrZXkyID0gdm5vZGUua2V5XG5cdFx0XHRcdGlmIChrZXkyICE9IG51bGwpIG1hcFtrZXkyXSA9IGlcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG1hcFxuXHR9XG5cdGZ1bmN0aW9uIHRvRnJhZ21lbnQodm5vZGUpIHtcblx0XHR2YXIgY291bnQwID0gdm5vZGUuZG9tU2l6ZVxuXHRcdGlmIChjb3VudDAgIT0gbnVsbCB8fCB2bm9kZS5kb20gPT0gbnVsbCkge1xuXHRcdFx0dmFyIGZyYWdtZW50ID0gJGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblx0XHRcdGlmIChjb3VudDAgPiAwKSB7XG5cdFx0XHRcdHZhciBkb20gPSB2bm9kZS5kb21cblx0XHRcdFx0d2hpbGUgKC0tY291bnQwKSBmcmFnbWVudC5hcHBlbmRDaGlsZChkb20ubmV4dFNpYmxpbmcpXG5cdFx0XHRcdGZyYWdtZW50Lmluc2VydEJlZm9yZShkb20sIGZyYWdtZW50LmZpcnN0Q2hpbGQpXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZnJhZ21lbnRcblx0XHR9XG5cdFx0ZWxzZSByZXR1cm4gdm5vZGUuZG9tXG5cdH1cblx0Ly8gdGhlIHZub2RlcyBhcnJheSBtYXkgaG9sZCBpdGVtcyB0aGF0IGNvbWUgZnJvbSB0aGUgcG9vbCAoYWZ0ZXIgYGxpbWl0YCkgdGhleSBzaG91bGRcblx0Ly8gYmUgaWdub3JlZFxuXHRmdW5jdGlvbiBnZXROZXh0U2libGluZyh2bm9kZXMsIGksIGxpbWl0LCBuZXh0U2libGluZykge1xuXHRcdGZvciAoOyBpIDwgbGltaXQ7IGkrKykge1xuXHRcdFx0aWYgKHZub2Rlc1tpXSAhPSBudWxsICYmIHZub2Rlc1tpXS5kb20gIT0gbnVsbCkgcmV0dXJuIHZub2Rlc1tpXS5kb21cblx0XHR9XG5cdFx0cmV0dXJuIG5leHRTaWJsaW5nXG5cdH1cblx0ZnVuY3Rpb24gaW5zZXJ0Tm9kZShwYXJlbnQsIGRvbSwgbmV4dFNpYmxpbmcpIHtcblx0XHRpZiAobmV4dFNpYmxpbmcpIHBhcmVudC5pbnNlcnRCZWZvcmUoZG9tLCBuZXh0U2libGluZylcblx0XHRlbHNlIHBhcmVudC5hcHBlbmRDaGlsZChkb20pXG5cdH1cblx0ZnVuY3Rpb24gc2V0Q29udGVudEVkaXRhYmxlKHZub2RlKSB7XG5cdFx0dmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW5cblx0XHRpZiAoY2hpbGRyZW4gIT0gbnVsbCAmJiBjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgY2hpbGRyZW5bMF0udGFnID09PSBcIjxcIikge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjaGlsZHJlblswXS5jaGlsZHJlblxuXHRcdFx0aWYgKHZub2RlLmRvbS5pbm5lckhUTUwgIT09IGNvbnRlbnQpIHZub2RlLmRvbS5pbm5lckhUTUwgPSBjb250ZW50XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHZub2RlLnRleHQgIT0gbnVsbCB8fCBjaGlsZHJlbiAhPSBudWxsICYmIGNoaWxkcmVuLmxlbmd0aCAhPT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiQ2hpbGQgbm9kZSBvZiBhIGNvbnRlbnRlZGl0YWJsZSBtdXN0IGJlIHRydXN0ZWRcIilcblx0fVxuXHQvL3JlbW92ZVxuXHRmdW5jdGlvbiByZW1vdmVOb2Rlcyh2bm9kZXMsIHN0YXJ0LCBlbmQsIGNvbnRleHQsIHJlY3ljbGluZykge1xuXHRcdGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG5cdFx0XHR2YXIgdm5vZGUgPSB2bm9kZXNbaV1cblx0XHRcdGlmICh2bm9kZSAhPSBudWxsKSB7XG5cdFx0XHRcdGlmICh2bm9kZS5za2lwKSB2bm9kZS5za2lwID0gZmFsc2Vcblx0XHRcdFx0ZWxzZSByZW1vdmVOb2RlKHZub2RlLCBjb250ZXh0LCByZWN5Y2xpbmcpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vIHdoZW4gYSBub2RlIGlzIHJlbW92ZWQgZnJvbSBhIHBhcmVudCB0aGF0J3MgYnJvdWdodCBiYWNrIGZyb20gdGhlIHBvb2wsIGl0cyBob29rcyBzaG91bGRcblx0Ly8gbm90IGZpcmUuXG5cdGZ1bmN0aW9uIHJlbW92ZU5vZGUodm5vZGUsIGNvbnRleHQsIHJlY3ljbGluZykge1xuXHRcdHZhciBleHBlY3RlZCA9IDEsIGNhbGxlZCA9IDBcblx0XHRpZiAoIXJlY3ljbGluZykge1xuXHRcdFx0dmFyIG9yaWdpbmFsID0gdm5vZGUuc3RhdGVcblx0XHRcdGlmICh2bm9kZS5hdHRycyAmJiB0eXBlb2Ygdm5vZGUuYXR0cnMub25iZWZvcmVyZW1vdmUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gY2FsbEhvb2suY2FsbCh2bm9kZS5hdHRycy5vbmJlZm9yZXJlbW92ZSwgdm5vZGUpXG5cdFx0XHRcdGlmIChyZXN1bHQgIT0gbnVsbCAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdGV4cGVjdGVkKytcblx0XHRcdFx0XHRyZXN1bHQudGhlbihjb250aW51YXRpb24sIGNvbnRpbnVhdGlvbilcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZub2RlLnN0YXRlLm9uYmVmb3JlcmVtb3ZlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IGNhbGxIb29rLmNhbGwodm5vZGUuc3RhdGUub25iZWZvcmVyZW1vdmUsIHZub2RlKVxuXHRcdFx0XHRpZiAocmVzdWx0ICE9IG51bGwgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRleHBlY3RlZCsrXG5cdFx0XHRcdFx0cmVzdWx0LnRoZW4oY29udGludWF0aW9uLCBjb250aW51YXRpb24pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y29udGludWF0aW9uKClcblx0XHRmdW5jdGlvbiBjb250aW51YXRpb24oKSB7XG5cdFx0XHRpZiAoKytjYWxsZWQgPT09IGV4cGVjdGVkKSB7XG5cdFx0XHRcdGlmICghcmVjeWNsaW5nKSB7XG5cdFx0XHRcdFx0Y2hlY2tTdGF0ZSh2bm9kZSwgb3JpZ2luYWwpXG5cdFx0XHRcdFx0b25yZW1vdmUodm5vZGUpXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHZub2RlLmRvbSkge1xuXHRcdFx0XHRcdHZhciBjb3VudDAgPSB2bm9kZS5kb21TaXplIHx8IDFcblx0XHRcdFx0XHRpZiAoY291bnQwID4gMSkge1xuXHRcdFx0XHRcdFx0dmFyIGRvbSA9IHZub2RlLmRvbVxuXHRcdFx0XHRcdFx0d2hpbGUgKC0tY291bnQwKSB7XG5cdFx0XHRcdFx0XHRcdHJlbW92ZU5vZGVGcm9tRE9NKGRvbS5uZXh0U2libGluZylcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVtb3ZlTm9kZUZyb21ET00odm5vZGUuZG9tKVxuXHRcdFx0XHRcdGFkZFRvUG9vbCh2bm9kZSwgY29udGV4dClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiByZW1vdmVOb2RlRnJvbURPTShub2RlKSB7XG5cdFx0dmFyIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZVxuXHRcdGlmIChwYXJlbnQgIT0gbnVsbCkgcGFyZW50LnJlbW92ZUNoaWxkKG5vZGUpXG5cdH1cblx0ZnVuY3Rpb24gYWRkVG9Qb29sKHZub2RlLCBjb250ZXh0KSB7XG5cdFx0aWYgKGNvbnRleHQgIT0gbnVsbCAmJiB2bm9kZS5kb21TaXplID09IG51bGwgJiYgIWhhc0ludGVncmF0aW9uTWV0aG9kcyh2bm9kZS5hdHRycykgJiYgdHlwZW9mIHZub2RlLnRhZyA9PT0gXCJzdHJpbmdcIikgeyAvL1RPRE8gdGVzdCBjdXN0b20gZWxlbWVudHNcblx0XHRcdGlmICghY29udGV4dC5wb29sKSBjb250ZXh0LnBvb2wgPSBbdm5vZGVdXG5cdFx0XHRlbHNlIGNvbnRleHQucG9vbC5wdXNoKHZub2RlKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBvbnJlbW92ZSh2bm9kZSkge1xuXHRcdGlmICh2bm9kZS5hdHRycyAmJiB0eXBlb2Ygdm5vZGUuYXR0cnMub25yZW1vdmUgPT09IFwiZnVuY3Rpb25cIikgY2FsbEhvb2suY2FsbCh2bm9kZS5hdHRycy5vbnJlbW92ZSwgdm5vZGUpXG5cdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcgIT09IFwic3RyaW5nXCIpIHtcblx0XHRcdGlmICh0eXBlb2Ygdm5vZGUuc3RhdGUub25yZW1vdmUgPT09IFwiZnVuY3Rpb25cIikgY2FsbEhvb2suY2FsbCh2bm9kZS5zdGF0ZS5vbnJlbW92ZSwgdm5vZGUpXG5cdFx0XHRpZiAodm5vZGUuaW5zdGFuY2UgIT0gbnVsbCkgb25yZW1vdmUodm5vZGUuaW5zdGFuY2UpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldXG5cdFx0XHRcdFx0aWYgKGNoaWxkICE9IG51bGwpIG9ucmVtb3ZlKGNoaWxkKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vYXR0cnMyXG5cdGZ1bmN0aW9uIHNldEF0dHJzKHZub2RlLCBhdHRyczIsIG5zKSB7XG5cdFx0Zm9yICh2YXIga2V5MiBpbiBhdHRyczIpIHtcblx0XHRcdHNldEF0dHIodm5vZGUsIGtleTIsIG51bGwsIGF0dHJzMltrZXkyXSwgbnMpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHNldEF0dHIodm5vZGUsIGtleTIsIG9sZCwgdmFsdWUsIG5zKSB7XG5cdFx0aWYgKGtleTIgPT09IFwia2V5XCIgfHwga2V5MiA9PT0gXCJpc1wiIHx8IGlzTGlmZWN5Y2xlTWV0aG9kKGtleTIpKSByZXR1cm5cblx0XHRpZiAoa2V5MlswXSA9PT0gXCJvXCIgJiYga2V5MlsxXSA9PT0gXCJuXCIpIHJldHVybiB1cGRhdGVFdmVudCh2bm9kZSwga2V5MiwgdmFsdWUpXG5cdFx0aWYgKChvbGQgPT09IHZhbHVlICYmICFpc0Zvcm1BdHRyaWJ1dGUodm5vZGUsIGtleTIpKSAmJiB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuXG5cdFx0dmFyIGVsZW1lbnQgPSB2bm9kZS5kb21cblx0XHRpZiAoa2V5Mi5zbGljZSgwLCA2KSA9PT0gXCJ4bGluazpcIikgZWxlbWVudC5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwga2V5MiwgdmFsdWUpXG5cdFx0ZWxzZSBpZiAoa2V5MiA9PT0gXCJzdHlsZVwiKSB1cGRhdGVTdHlsZShlbGVtZW50LCBvbGQsIHZhbHVlKVxuXHRcdGVsc2UgaWYgKGtleTIgaW4gZWxlbWVudCAmJiAhaXNBdHRyaWJ1dGUoa2V5MikgJiYgbnMgPT09IHVuZGVmaW5lZCAmJiAhaXNDdXN0b21FbGVtZW50KHZub2RlKSkge1xuXHRcdFx0aWYgKGtleTIgPT09IFwidmFsdWVcIikge1xuXHRcdFx0XHR2YXIgbm9ybWFsaXplZDAgPSBcIlwiICsgdmFsdWUgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1pbXBsaWNpdC1jb2VyY2lvblxuXHRcdFx0XHQvL3NldHRpbmcgaW5wdXRbdmFsdWVdIHRvIHNhbWUgdmFsdWUgYnkgdHlwaW5nIG9uIGZvY3VzZWQgZWxlbWVudCBtb3ZlcyBjdXJzb3IgdG8gZW5kIGluIENocm9tZVxuXHRcdFx0XHRpZiAoKHZub2RlLnRhZyA9PT0gXCJpbnB1dFwiIHx8IHZub2RlLnRhZyA9PT0gXCJ0ZXh0YXJlYVwiKSAmJiB2bm9kZS5kb20udmFsdWUgPT09IG5vcm1hbGl6ZWQwICYmIHZub2RlLmRvbSA9PT0gJGRvYy5hY3RpdmVFbGVtZW50KSByZXR1cm5cblx0XHRcdFx0Ly9zZXR0aW5nIHNlbGVjdFt2YWx1ZV0gdG8gc2FtZSB2YWx1ZSB3aGlsZSBoYXZpbmcgc2VsZWN0IG9wZW4gYmxpbmtzIHNlbGVjdCBkcm9wZG93biBpbiBDaHJvbWVcblx0XHRcdFx0aWYgKHZub2RlLnRhZyA9PT0gXCJzZWxlY3RcIikge1xuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0aWYgKHZub2RlLmRvbS5zZWxlY3RlZEluZGV4ID09PSAtMSAmJiB2bm9kZS5kb20gPT09ICRkb2MuYWN0aXZlRWxlbWVudCkgcmV0dXJuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChvbGQgIT09IG51bGwgJiYgdm5vZGUuZG9tLnZhbHVlID09PSBub3JtYWxpemVkMCAmJiB2bm9kZS5kb20gPT09ICRkb2MuYWN0aXZlRWxlbWVudCkgcmV0dXJuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vc2V0dGluZyBvcHRpb25bdmFsdWVdIHRvIHNhbWUgdmFsdWUgd2hpbGUgaGF2aW5nIHNlbGVjdCBvcGVuIGJsaW5rcyBzZWxlY3QgZHJvcGRvd24gaW4gQ2hyb21lXG5cdFx0XHRcdGlmICh2bm9kZS50YWcgPT09IFwib3B0aW9uXCIgJiYgb2xkICE9IG51bGwgJiYgdm5vZGUuZG9tLnZhbHVlID09PSBub3JtYWxpemVkMCkgcmV0dXJuXG5cdFx0XHR9XG5cdFx0XHQvLyBJZiB5b3UgYXNzaWduIGFuIGlucHV0IHR5cGUxIHRoYXQgaXMgbm90IHN1cHBvcnRlZCBieSBJRSAxMSB3aXRoIGFuIGFzc2lnbm1lbnQgZXhwcmVzc2lvbiwgYW4gZXJyb3IxIHdpbGwgb2NjdXIuXG5cdFx0XHRpZiAodm5vZGUudGFnID09PSBcImlucHV0XCIgJiYga2V5MiA9PT0gXCJ0eXBlXCIpIHtcblx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5MiwgdmFsdWUpXG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0ZWxlbWVudFtrZXkyXSA9IHZhbHVlXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcblx0XHRcdFx0aWYgKHZhbHVlKSBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXkyLCBcIlwiKVxuXHRcdFx0XHRlbHNlIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGtleTIpXG5cdFx0XHR9XG5cdFx0XHRlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleTIgPT09IFwiY2xhc3NOYW1lXCIgPyBcImNsYXNzXCIgOiBrZXkyLCB2YWx1ZSlcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gc2V0TGF0ZUF0dHJzKHZub2RlKSB7XG5cdFx0dmFyIGF0dHJzMiA9IHZub2RlLmF0dHJzXG5cdFx0aWYgKHZub2RlLnRhZyA9PT0gXCJzZWxlY3RcIiAmJiBhdHRyczIgIT0gbnVsbCkge1xuXHRcdFx0aWYgKFwidmFsdWVcIiBpbiBhdHRyczIpIHNldEF0dHIodm5vZGUsIFwidmFsdWVcIiwgbnVsbCwgYXR0cnMyLnZhbHVlLCB1bmRlZmluZWQpXG5cdFx0XHRpZiAoXCJzZWxlY3RlZEluZGV4XCIgaW4gYXR0cnMyKSBzZXRBdHRyKHZub2RlLCBcInNlbGVjdGVkSW5kZXhcIiwgbnVsbCwgYXR0cnMyLnNlbGVjdGVkSW5kZXgsIHVuZGVmaW5lZClcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlQXR0cnModm5vZGUsIG9sZCwgYXR0cnMyLCBucykge1xuXHRcdGlmIChhdHRyczIgIT0gbnVsbCkge1xuXHRcdFx0Zm9yICh2YXIga2V5MiBpbiBhdHRyczIpIHtcblx0XHRcdFx0c2V0QXR0cih2bm9kZSwga2V5Miwgb2xkICYmIG9sZFtrZXkyXSwgYXR0cnMyW2tleTJdLCBucylcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG9sZCAhPSBudWxsKSB7XG5cdFx0XHRmb3IgKHZhciBrZXkyIGluIG9sZCkge1xuXHRcdFx0XHRpZiAoYXR0cnMyID09IG51bGwgfHwgIShrZXkyIGluIGF0dHJzMikpIHtcblx0XHRcdFx0XHRpZiAoa2V5MiA9PT0gXCJjbGFzc05hbWVcIikga2V5MiA9IFwiY2xhc3NcIlxuXHRcdFx0XHRcdGlmIChrZXkyWzBdID09PSBcIm9cIiAmJiBrZXkyWzFdID09PSBcIm5cIiAmJiAhaXNMaWZlY3ljbGVNZXRob2Qoa2V5MikpIHVwZGF0ZUV2ZW50KHZub2RlLCBrZXkyLCB1bmRlZmluZWQpXG5cdFx0XHRcdFx0ZWxzZSBpZiAoa2V5MiAhPT0gXCJrZXlcIikgdm5vZGUuZG9tLnJlbW92ZUF0dHJpYnV0ZShrZXkyKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGlzRm9ybUF0dHJpYnV0ZSh2bm9kZSwgYXR0cikge1xuXHRcdHJldHVybiBhdHRyID09PSBcInZhbHVlXCIgfHwgYXR0ciA9PT0gXCJjaGVja2VkXCIgfHwgYXR0ciA9PT0gXCJzZWxlY3RlZEluZGV4XCIgfHwgYXR0ciA9PT0gXCJzZWxlY3RlZFwiICYmIHZub2RlLmRvbSA9PT0gJGRvYy5hY3RpdmVFbGVtZW50IHx8IHZub2RlLmRvbS5wYXJlbnROb2RlID09PSAkZG9jLmFjdGl2ZUVsZW1lbnRcblx0fVxuXHRmdW5jdGlvbiBpc0xpZmVjeWNsZU1ldGhvZChhdHRyKSB7XG5cdFx0cmV0dXJuIGF0dHIgPT09IFwib25pbml0XCIgfHwgYXR0ciA9PT0gXCJvbmNyZWF0ZVwiIHx8IGF0dHIgPT09IFwib251cGRhdGVcIiB8fCBhdHRyID09PSBcIm9ucmVtb3ZlXCIgfHwgYXR0ciA9PT0gXCJvbmJlZm9yZXJlbW92ZVwiIHx8IGF0dHIgPT09IFwib25iZWZvcmV1cGRhdGVcIlxuXHR9XG5cdGZ1bmN0aW9uIGlzQXR0cmlidXRlKGF0dHIpIHtcblx0XHRyZXR1cm4gYXR0ciA9PT0gXCJocmVmXCIgfHwgYXR0ciA9PT0gXCJsaXN0XCIgfHwgYXR0ciA9PT0gXCJmb3JtXCIgfHwgYXR0ciA9PT0gXCJ3aWR0aFwiIHx8IGF0dHIgPT09IFwiaGVpZ2h0XCIvLyB8fCBhdHRyID09PSBcInR5cGVcIlxuXHR9XG5cdGZ1bmN0aW9uIGlzQ3VzdG9tRWxlbWVudCh2bm9kZSl7XG5cdFx0cmV0dXJuIHZub2RlLmF0dHJzLmlzIHx8IHZub2RlLnRhZy5pbmRleE9mKFwiLVwiKSA+IC0xXG5cdH1cblx0ZnVuY3Rpb24gaGFzSW50ZWdyYXRpb25NZXRob2RzKHNvdXJjZSkge1xuXHRcdHJldHVybiBzb3VyY2UgIT0gbnVsbCAmJiAoc291cmNlLm9uY3JlYXRlIHx8IHNvdXJjZS5vbnVwZGF0ZSB8fCBzb3VyY2Uub25iZWZvcmVyZW1vdmUgfHwgc291cmNlLm9ucmVtb3ZlKVxuXHR9XG5cdC8vc3R5bGVcblx0ZnVuY3Rpb24gdXBkYXRlU3R5bGUoZWxlbWVudCwgb2xkLCBzdHlsZSkge1xuXHRcdGlmIChvbGQgIT0gbnVsbCAmJiBzdHlsZSAhPSBudWxsICYmIHR5cGVvZiBvbGQgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHN0eWxlID09PSBcIm9iamVjdFwiICYmIHN0eWxlICE9PSBvbGQpIHtcblx0XHRcdC8vIEJvdGggb2xkICYgbmV3IGFyZSAoZGlmZmVyZW50KSBvYmplY3RzLlxuXHRcdFx0Ly8gVXBkYXRlIHN0eWxlIHByb3BlcnRpZXMgdGhhdCBoYXZlIGNoYW5nZWRcblx0XHRcdGZvciAodmFyIGtleTIgaW4gc3R5bGUpIHtcblx0XHRcdFx0aWYgKHN0eWxlW2tleTJdICE9PSBvbGRba2V5Ml0pIGVsZW1lbnQuc3R5bGVba2V5Ml0gPSBzdHlsZVtrZXkyXVxuXHRcdFx0fVxuXHRcdFx0Ly8gUmVtb3ZlIHN0eWxlIHByb3BlcnRpZXMgdGhhdCBubyBsb25nZXIgZXhpc3Rcblx0XHRcdGZvciAodmFyIGtleTIgaW4gb2xkKSB7XG5cdFx0XHRcdGlmICghKGtleTIgaW4gc3R5bGUpKSBlbGVtZW50LnN0eWxlW2tleTJdID0gXCJcIlxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGlmIChvbGQgPT09IHN0eWxlKSBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBcIlwiLCBvbGQgPSBudWxsXG5cdFx0aWYgKHN0eWxlID09IG51bGwpIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IFwiXCJcblx0XHRlbHNlIGlmICh0eXBlb2Ygc3R5bGUgPT09IFwic3RyaW5nXCIpIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAodHlwZW9mIG9sZCA9PT0gXCJzdHJpbmdcIikgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gXCJcIlxuXHRcdFx0Zm9yICh2YXIga2V5MiBpbiBzdHlsZSkge1xuXHRcdFx0XHRlbGVtZW50LnN0eWxlW2tleTJdID0gc3R5bGVba2V5Ml1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gSGVyZSdzIGFuIGV4cGxhbmF0aW9uIG9mIGhvdyB0aGlzIHdvcmtzOlxuXHQvLyAxLiBUaGUgZXZlbnQgbmFtZXMgYXJlIGFsd2F5cyAoYnkgZGVzaWduKSBwcmVmaXhlZCBieSBgb25gLlxuXHQvLyAyLiBUaGUgRXZlbnRMaXN0ZW5lciBpbnRlcmZhY2UgYWNjZXB0cyBlaXRoZXIgYSBmdW5jdGlvbiBvciBhbiBvYmplY3Rcblx0Ly8gICAgd2l0aCBhIGBoYW5kbGVFdmVudGAgbWV0aG9kLlxuXHQvLyAzLiBUaGUgb2JqZWN0IGRvZXMgbm90IGluaGVyaXQgZnJvbSBgT2JqZWN0LnByb3RvdHlwZWAsIHRvIGF2b2lkXG5cdC8vICAgIGFueSBwb3RlbnRpYWwgaW50ZXJmZXJlbmNlIHdpdGggdGhhdCAoZS5nLiBzZXR0ZXJzKS5cblx0Ly8gNC4gVGhlIGV2ZW50IG5hbWUgaXMgcmVtYXBwZWQgdG8gdGhlIGhhbmRsZXIwIGJlZm9yZSBjYWxsaW5nIGl0LlxuXHQvLyA1LiBJbiBmdW5jdGlvbi1iYXNlZCBldmVudCBoYW5kbGVycywgYGV2LnRhcmdldCA9PT0gdGhpc2AuIFdlIHJlcGxpY2F0ZVxuXHQvLyAgICB0aGF0IGJlbG93LlxuXHRmdW5jdGlvbiBFdmVudERpY3QoKSB7fVxuXHRFdmVudERpY3QucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXHRFdmVudERpY3QucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24gKGV2KSB7XG5cdFx0dmFyIGhhbmRsZXIwID0gdGhpc1tcIm9uXCIgKyBldi50eXBlXVxuXHRcdGlmICh0eXBlb2YgaGFuZGxlcjAgPT09IFwiZnVuY3Rpb25cIikgaGFuZGxlcjAuY2FsbChldi50YXJnZXQsIGV2KVxuXHRcdGVsc2UgaWYgKHR5cGVvZiBoYW5kbGVyMC5oYW5kbGVFdmVudCA9PT0gXCJmdW5jdGlvblwiKSBoYW5kbGVyMC5oYW5kbGVFdmVudChldilcblx0XHRpZiAodHlwZW9mIG9uZXZlbnQgPT09IFwiZnVuY3Rpb25cIikgb25ldmVudC5jYWxsKGV2LnRhcmdldCwgZXYpXG5cdH1cblx0Ly9ldmVudFxuXHRmdW5jdGlvbiB1cGRhdGVFdmVudCh2bm9kZSwga2V5MiwgdmFsdWUpIHtcblx0XHRpZiAodm5vZGUuZXZlbnRzICE9IG51bGwpIHtcblx0XHRcdGlmICh2bm9kZS5ldmVudHNba2V5Ml0gPT09IHZhbHVlKSByZXR1cm5cblx0XHRcdGlmICh2YWx1ZSAhPSBudWxsICYmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpKSB7XG5cdFx0XHRcdGlmICh2bm9kZS5ldmVudHNba2V5Ml0gPT0gbnVsbCkgdm5vZGUuZG9tLmFkZEV2ZW50TGlzdGVuZXIoa2V5Mi5zbGljZSgyKSwgdm5vZGUuZXZlbnRzLCBmYWxzZSlcblx0XHRcdFx0dm5vZGUuZXZlbnRzW2tleTJdID0gdmFsdWVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh2bm9kZS5ldmVudHNba2V5Ml0gIT0gbnVsbCkgdm5vZGUuZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoa2V5Mi5zbGljZSgyKSwgdm5vZGUuZXZlbnRzLCBmYWxzZSlcblx0XHRcdFx0dm5vZGUuZXZlbnRzW2tleTJdID0gdW5kZWZpbmVkXG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsICYmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpKSB7XG5cdFx0XHR2bm9kZS5ldmVudHMgPSBuZXcgRXZlbnREaWN0KClcblx0XHRcdHZub2RlLmRvbS5hZGRFdmVudExpc3RlbmVyKGtleTIuc2xpY2UoMiksIHZub2RlLmV2ZW50cywgZmFsc2UpXG5cdFx0XHR2bm9kZS5ldmVudHNba2V5Ml0gPSB2YWx1ZVxuXHRcdH1cblx0fVxuXHQvL2xpZmVjeWNsZVxuXHRmdW5jdGlvbiBpbml0TGlmZWN5Y2xlKHNvdXJjZSwgdm5vZGUsIGhvb2tzKSB7XG5cdFx0aWYgKHR5cGVvZiBzb3VyY2Uub25pbml0ID09PSBcImZ1bmN0aW9uXCIpIGNhbGxIb29rLmNhbGwoc291cmNlLm9uaW5pdCwgdm5vZGUpXG5cdFx0aWYgKHR5cGVvZiBzb3VyY2Uub25jcmVhdGUgPT09IFwiZnVuY3Rpb25cIikgaG9va3MucHVzaChjYWxsSG9vay5iaW5kKHNvdXJjZS5vbmNyZWF0ZSwgdm5vZGUpKVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUxpZmVjeWNsZShzb3VyY2UsIHZub2RlLCBob29rcykge1xuXHRcdGlmICh0eXBlb2Ygc291cmNlLm9udXBkYXRlID09PSBcImZ1bmN0aW9uXCIpIGhvb2tzLnB1c2goY2FsbEhvb2suYmluZChzb3VyY2Uub251cGRhdGUsIHZub2RlKSlcblx0fVxuXHRmdW5jdGlvbiBzaG91bGROb3RVcGRhdGUodm5vZGUsIG9sZCkge1xuXHRcdHZhciBmb3JjZVZub2RlVXBkYXRlLCBmb3JjZUNvbXBvbmVudFVwZGF0ZVxuXHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsICYmIHR5cGVvZiB2bm9kZS5hdHRycy5vbmJlZm9yZXVwZGF0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRmb3JjZVZub2RlVXBkYXRlID0gY2FsbEhvb2suY2FsbCh2bm9kZS5hdHRycy5vbmJlZm9yZXVwZGF0ZSwgdm5vZGUsIG9sZClcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB2bm9kZS50YWcgIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZub2RlLnN0YXRlLm9uYmVmb3JldXBkYXRlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdGZvcmNlQ29tcG9uZW50VXBkYXRlID0gY2FsbEhvb2suY2FsbCh2bm9kZS5zdGF0ZS5vbmJlZm9yZXVwZGF0ZSwgdm5vZGUsIG9sZClcblx0XHR9XG5cdFx0aWYgKCEoZm9yY2VWbm9kZVVwZGF0ZSA9PT0gdW5kZWZpbmVkICYmIGZvcmNlQ29tcG9uZW50VXBkYXRlID09PSB1bmRlZmluZWQpICYmICFmb3JjZVZub2RlVXBkYXRlICYmICFmb3JjZUNvbXBvbmVudFVwZGF0ZSkge1xuXHRcdFx0dm5vZGUuZG9tID0gb2xkLmRvbVxuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IG9sZC5kb21TaXplXG5cdFx0XHR2bm9kZS5pbnN0YW5jZSA9IG9sZC5pbnN0YW5jZVxuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlXG5cdH1cblx0ZnVuY3Rpb24gcmVuZGVyKGRvbSwgdm5vZGVzKSB7XG5cdFx0aWYgKCFkb20pIHRocm93IG5ldyBFcnJvcihcIkVuc3VyZSB0aGUgRE9NIGVsZW1lbnQgYmVpbmcgcGFzc2VkIHRvIG0ucm91dGUvbS5tb3VudC9tLnJlbmRlciBpcyBub3QgdW5kZWZpbmVkLlwiKVxuXHRcdHZhciBob29rcyA9IFtdXG5cdFx0dmFyIGFjdGl2ZSA9ICRkb2MuYWN0aXZlRWxlbWVudFxuXHRcdHZhciBuYW1lc3BhY2UgPSBkb20ubmFtZXNwYWNlVVJJXG5cdFx0Ly8gRmlyc3QgdGltZSByZW5kZXJpbmcwIGludG8gYSBub2RlIGNsZWFycyBpdCBvdXRcblx0XHRpZiAoZG9tLnZub2RlcyA9PSBudWxsKSBkb20udGV4dENvbnRlbnQgPSBcIlwiXG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KHZub2RlcykpIHZub2RlcyA9IFt2bm9kZXNdXG5cdFx0dXBkYXRlTm9kZXMoZG9tLCBkb20udm5vZGVzLCBWbm9kZS5ub3JtYWxpemVDaGlsZHJlbih2bm9kZXMpLCBmYWxzZSwgaG9va3MsIG51bGwsIG5hbWVzcGFjZSA9PT0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIgPyB1bmRlZmluZWQgOiBuYW1lc3BhY2UpXG5cdFx0ZG9tLnZub2RlcyA9IHZub2Rlc1xuXHRcdC8vIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgY2FuIHJldHVybiBudWxsIGluIElFIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9hY3RpdmVFbGVtZW50XG5cdFx0aWYgKGFjdGl2ZSAhPSBudWxsICYmICRkb2MuYWN0aXZlRWxlbWVudCAhPT0gYWN0aXZlKSBhY3RpdmUuZm9jdXMoKVxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIGhvb2tzW2ldKClcblx0fVxuXHRyZXR1cm4ge3JlbmRlcjogcmVuZGVyLCBzZXRFdmVudENhbGxiYWNrOiBzZXRFdmVudENhbGxiYWNrfVxufVxuZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2spIHtcblx0Ly82MGZwcyB0cmFuc2xhdGVzIHRvIDE2LjZtcywgcm91bmQgaXQgZG93biBzaW5jZSBzZXRUaW1lb3V0IHJlcXVpcmVzIGludFxuXHR2YXIgZGVsYXkgPSAxNlxuXHR2YXIgbGFzdCA9IDAsIHBlbmRpbmcgPSBudWxsXG5cdHZhciB0aW1lb3V0ID0gdHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gXCJmdW5jdGlvblwiID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIDogc2V0VGltZW91dFxuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gbGFzdFxuXHRcdGlmIChwZW5kaW5nID09PSBudWxsKSB7XG5cdFx0XHRwZW5kaW5nID0gdGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0cGVuZGluZyA9IG51bGxcblx0XHRcdFx0Y2FsbGJhY2soKVxuXHRcdFx0XHRsYXN0ID0gRGF0ZS5ub3coKVxuXHRcdFx0fSwgZGVsYXkgLSBlbGFwc2VkKVxuXHRcdH1cblx0fVxufVxudmFyIF8xMSA9IGZ1bmN0aW9uKCR3aW5kb3csIHRocm90dGxlTW9jaykge1xuXHR2YXIgcmVuZGVyU2VydmljZSA9IGNvcmVSZW5kZXJlcigkd2luZG93KVxuXHRyZW5kZXJTZXJ2aWNlLnNldEV2ZW50Q2FsbGJhY2soZnVuY3Rpb24oZSkge1xuXHRcdGlmIChlLnJlZHJhdyA9PT0gZmFsc2UpIGUucmVkcmF3ID0gdW5kZWZpbmVkXG5cdFx0ZWxzZSByZWRyYXcoKVxuXHR9KVxuXHR2YXIgY2FsbGJhY2tzID0gW11cblx0dmFyIHJlbmRlcmluZyA9IGZhbHNlXG5cdGZ1bmN0aW9uIHN1YnNjcmliZShrZXkxLCBjYWxsYmFjaykge1xuXHRcdHVuc3Vic2NyaWJlKGtleTEpXG5cdFx0Y2FsbGJhY2tzLnB1c2goa2V5MSwgY2FsbGJhY2spXG5cdH1cblx0ZnVuY3Rpb24gdW5zdWJzY3JpYmUoa2V5MSkge1xuXHRcdHZhciBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGtleTEpXG5cdFx0aWYgKGluZGV4ID4gLTEpIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDIpXG5cdH1cblx0ZnVuY3Rpb24gc3luYygpIHtcblx0XHRpZiAocmVuZGVyaW5nKSB0aHJvdyBuZXcgRXJyb3IoXCJOZXN0ZWQgbS5yZWRyYXcuc3luYygpIGNhbGxcIilcblx0XHRyZW5kZXJpbmcgPSB0cnVlXG5cdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKz0yKSB0cnkge2NhbGxiYWNrc1tpXSgpfSBjYXRjaCAoZSkge2lmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIikgY29uc29sZS5lcnJvcihlKX1cblx0XHRyZW5kZXJpbmcgPSBmYWxzZVxuXHR9XG5cdHZhciByZWRyYXcgPSAodGhyb3R0bGVNb2NrIHx8IHRocm90dGxlKShzeW5jKVxuXHRyZWRyYXcuc3luYyA9IHN5bmNcblx0cmV0dXJuIHtzdWJzY3JpYmU6IHN1YnNjcmliZSwgdW5zdWJzY3JpYmU6IHVuc3Vic2NyaWJlLCByZWRyYXc6IHJlZHJhdywgcmVuZGVyOiByZW5kZXJTZXJ2aWNlLnJlbmRlcn1cbn1cbnZhciByZWRyYXdTZXJ2aWNlID0gXzExKHdpbmRvdylcbnJlcXVlc3RTZXJ2aWNlLnNldENvbXBsZXRpb25DYWxsYmFjayhyZWRyYXdTZXJ2aWNlLnJlZHJhdylcbnZhciBfMTYgPSBmdW5jdGlvbihyZWRyYXdTZXJ2aWNlMCkge1xuXHRyZXR1cm4gZnVuY3Rpb24ocm9vdCwgY29tcG9uZW50KSB7XG5cdFx0aWYgKGNvbXBvbmVudCA9PT0gbnVsbCkge1xuXHRcdFx0cmVkcmF3U2VydmljZTAucmVuZGVyKHJvb3QsIFtdKVxuXHRcdFx0cmVkcmF3U2VydmljZTAudW5zdWJzY3JpYmUocm9vdClcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRcblx0XHRpZiAoY29tcG9uZW50LnZpZXcgPT0gbnVsbCAmJiB0eXBlb2YgY29tcG9uZW50ICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcihcIm0ubW91bnQoZWxlbWVudCwgY29tcG9uZW50KSBleHBlY3RzIGEgY29tcG9uZW50LCBub3QgYSB2bm9kZVwiKVxuXHRcdFxuXHRcdHZhciBydW4wID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZWRyYXdTZXJ2aWNlMC5yZW5kZXIocm9vdCwgVm5vZGUoY29tcG9uZW50KSlcblx0XHR9XG5cdFx0cmVkcmF3U2VydmljZTAuc3Vic2NyaWJlKHJvb3QsIHJ1bjApXG5cdFx0cnVuMCgpXG5cdH1cbn1cbm0ubW91bnQgPSBfMTYocmVkcmF3U2VydmljZSlcbnZhciBQcm9taXNlID0gUHJvbWlzZVBvbHlmaWxsXG52YXIgcGFyc2VRdWVyeVN0cmluZyA9IGZ1bmN0aW9uKHN0cmluZykge1xuXHRpZiAoc3RyaW5nID09PSBcIlwiIHx8IHN0cmluZyA9PSBudWxsKSByZXR1cm4ge31cblx0aWYgKHN0cmluZy5jaGFyQXQoMCkgPT09IFwiP1wiKSBzdHJpbmcgPSBzdHJpbmcuc2xpY2UoMSlcblx0dmFyIGVudHJpZXMgPSBzdHJpbmcuc3BsaXQoXCImXCIpLCBkYXRhMCA9IHt9LCBjb3VudGVycyA9IHt9XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBlbnRyeSA9IGVudHJpZXNbaV0uc3BsaXQoXCI9XCIpXG5cdFx0dmFyIGtleTUgPSBkZWNvZGVVUklDb21wb25lbnQoZW50cnlbMF0pXG5cdFx0dmFyIHZhbHVlID0gZW50cnkubGVuZ3RoID09PSAyID8gZGVjb2RlVVJJQ29tcG9uZW50KGVudHJ5WzFdKSA6IFwiXCJcblx0XHRpZiAodmFsdWUgPT09IFwidHJ1ZVwiKSB2YWx1ZSA9IHRydWVcblx0XHRlbHNlIGlmICh2YWx1ZSA9PT0gXCJmYWxzZVwiKSB2YWx1ZSA9IGZhbHNlXG5cdFx0dmFyIGxldmVscyA9IGtleTUuc3BsaXQoL1xcXVxcWz98XFxbLylcblx0XHR2YXIgY3Vyc29yID0gZGF0YTBcblx0XHRpZiAoa2V5NS5pbmRleE9mKFwiW1wiKSA+IC0xKSBsZXZlbHMucG9wKClcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxldmVscy5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGxldmVsID0gbGV2ZWxzW2pdLCBuZXh0TGV2ZWwgPSBsZXZlbHNbaiArIDFdXG5cdFx0XHR2YXIgaXNOdW1iZXIgPSBuZXh0TGV2ZWwgPT0gXCJcIiB8fCAhaXNOYU4ocGFyc2VJbnQobmV4dExldmVsLCAxMCkpXG5cdFx0XHR2YXIgaXNWYWx1ZSA9IGogPT09IGxldmVscy5sZW5ndGggLSAxXG5cdFx0XHRpZiAobGV2ZWwgPT09IFwiXCIpIHtcblx0XHRcdFx0dmFyIGtleTUgPSBsZXZlbHMuc2xpY2UoMCwgaikuam9pbigpXG5cdFx0XHRcdGlmIChjb3VudGVyc1trZXk1XSA9PSBudWxsKSBjb3VudGVyc1trZXk1XSA9IDBcblx0XHRcdFx0bGV2ZWwgPSBjb3VudGVyc1trZXk1XSsrXG5cdFx0XHR9XG5cdFx0XHRpZiAoY3Vyc29yW2xldmVsXSA9PSBudWxsKSB7XG5cdFx0XHRcdGN1cnNvcltsZXZlbF0gPSBpc1ZhbHVlID8gdmFsdWUgOiBpc051bWJlciA/IFtdIDoge31cblx0XHRcdH1cblx0XHRcdGN1cnNvciA9IGN1cnNvcltsZXZlbF1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGRhdGEwXG59XG52YXIgY29yZVJvdXRlciA9IGZ1bmN0aW9uKCR3aW5kb3cpIHtcblx0dmFyIHN1cHBvcnRzUHVzaFN0YXRlID0gdHlwZW9mICR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPT09IFwiZnVuY3Rpb25cIlxuXHR2YXIgY2FsbEFzeW5jMCA9IHR5cGVvZiBzZXRJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHNldEltbWVkaWF0ZSA6IHNldFRpbWVvdXRcblx0ZnVuY3Rpb24gbm9ybWFsaXplMShmcmFnbWVudDApIHtcblx0XHR2YXIgZGF0YSA9ICR3aW5kb3cubG9jYXRpb25bZnJhZ21lbnQwXS5yZXBsYWNlKC8oPzolW2EtZjg5XVthLWYwLTldKSsvZ2ltLCBkZWNvZGVVUklDb21wb25lbnQpXG5cdFx0aWYgKGZyYWdtZW50MCA9PT0gXCJwYXRobmFtZVwiICYmIGRhdGFbMF0gIT09IFwiL1wiKSBkYXRhID0gXCIvXCIgKyBkYXRhXG5cdFx0cmV0dXJuIGRhdGFcblx0fVxuXHR2YXIgYXN5bmNJZFxuXHRmdW5jdGlvbiBkZWJvdW5jZUFzeW5jKGNhbGxiYWNrKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKGFzeW5jSWQgIT0gbnVsbCkgcmV0dXJuXG5cdFx0XHRhc3luY0lkID0gY2FsbEFzeW5jMChmdW5jdGlvbigpIHtcblx0XHRcdFx0YXN5bmNJZCA9IG51bGxcblx0XHRcdFx0Y2FsbGJhY2soKVxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gcGFyc2VQYXRoKHBhdGgsIHF1ZXJ5RGF0YSwgaGFzaERhdGEpIHtcblx0XHR2YXIgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZihcIj9cIilcblx0XHR2YXIgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKFwiI1wiKVxuXHRcdHZhciBwYXRoRW5kID0gcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCA+IC0xID8gaGFzaEluZGV4IDogcGF0aC5sZW5ndGhcblx0XHRpZiAocXVlcnlJbmRleCA+IC0xKSB7XG5cdFx0XHR2YXIgcXVlcnlFbmQgPSBoYXNoSW5kZXggPiAtMSA/IGhhc2hJbmRleCA6IHBhdGgubGVuZ3RoXG5cdFx0XHR2YXIgcXVlcnlQYXJhbXMgPSBwYXJzZVF1ZXJ5U3RyaW5nKHBhdGguc2xpY2UocXVlcnlJbmRleCArIDEsIHF1ZXJ5RW5kKSlcblx0XHRcdGZvciAodmFyIGtleTQgaW4gcXVlcnlQYXJhbXMpIHF1ZXJ5RGF0YVtrZXk0XSA9IHF1ZXJ5UGFyYW1zW2tleTRdXG5cdFx0fVxuXHRcdGlmIChoYXNoSW5kZXggPiAtMSkge1xuXHRcdFx0dmFyIGhhc2hQYXJhbXMgPSBwYXJzZVF1ZXJ5U3RyaW5nKHBhdGguc2xpY2UoaGFzaEluZGV4ICsgMSkpXG5cdFx0XHRmb3IgKHZhciBrZXk0IGluIGhhc2hQYXJhbXMpIGhhc2hEYXRhW2tleTRdID0gaGFzaFBhcmFtc1trZXk0XVxuXHRcdH1cblx0XHRyZXR1cm4gcGF0aC5zbGljZSgwLCBwYXRoRW5kKVxuXHR9XG5cdHZhciByb3V0ZXIgPSB7cHJlZml4OiBcIiMhXCJ9XG5cdHJvdXRlci5nZXRQYXRoID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHR5cGUyID0gcm91dGVyLnByZWZpeC5jaGFyQXQoMClcblx0XHRzd2l0Y2ggKHR5cGUyKSB7XG5cdFx0XHRjYXNlIFwiI1wiOiByZXR1cm4gbm9ybWFsaXplMShcImhhc2hcIikuc2xpY2Uocm91dGVyLnByZWZpeC5sZW5ndGgpXG5cdFx0XHRjYXNlIFwiP1wiOiByZXR1cm4gbm9ybWFsaXplMShcInNlYXJjaFwiKS5zbGljZShyb3V0ZXIucHJlZml4Lmxlbmd0aCkgKyBub3JtYWxpemUxKFwiaGFzaFwiKVxuXHRcdFx0ZGVmYXVsdDogcmV0dXJuIG5vcm1hbGl6ZTEoXCJwYXRobmFtZVwiKS5zbGljZShyb3V0ZXIucHJlZml4Lmxlbmd0aCkgKyBub3JtYWxpemUxKFwic2VhcmNoXCIpICsgbm9ybWFsaXplMShcImhhc2hcIilcblx0XHR9XG5cdH1cblx0cm91dGVyLnNldFBhdGggPSBmdW5jdGlvbihwYXRoLCBkYXRhLCBvcHRpb25zKSB7XG5cdFx0dmFyIHF1ZXJ5RGF0YSA9IHt9LCBoYXNoRGF0YSA9IHt9XG5cdFx0cGF0aCA9IHBhcnNlUGF0aChwYXRoLCBxdWVyeURhdGEsIGhhc2hEYXRhKVxuXHRcdGlmIChkYXRhICE9IG51bGwpIHtcblx0XHRcdGZvciAodmFyIGtleTQgaW4gZGF0YSkgcXVlcnlEYXRhW2tleTRdID0gZGF0YVtrZXk0XVxuXHRcdFx0cGF0aCA9IHBhdGgucmVwbGFjZSgvOihbXlxcL10rKS9nLCBmdW5jdGlvbihtYXRjaDIsIHRva2VuKSB7XG5cdFx0XHRcdGRlbGV0ZSBxdWVyeURhdGFbdG9rZW5dXG5cdFx0XHRcdHJldHVybiBkYXRhW3Rva2VuXVxuXHRcdFx0fSlcblx0XHR9XG5cdFx0dmFyIHF1ZXJ5ID0gYnVpbGRRdWVyeVN0cmluZyhxdWVyeURhdGEpXG5cdFx0aWYgKHF1ZXJ5KSBwYXRoICs9IFwiP1wiICsgcXVlcnlcblx0XHR2YXIgaGFzaCA9IGJ1aWxkUXVlcnlTdHJpbmcoaGFzaERhdGEpXG5cdFx0aWYgKGhhc2gpIHBhdGggKz0gXCIjXCIgKyBoYXNoXG5cdFx0aWYgKHN1cHBvcnRzUHVzaFN0YXRlKSB7XG5cdFx0XHR2YXIgc3RhdGUgPSBvcHRpb25zID8gb3B0aW9ucy5zdGF0ZSA6IG51bGxcblx0XHRcdHZhciB0aXRsZSA9IG9wdGlvbnMgPyBvcHRpb25zLnRpdGxlIDogbnVsbFxuXHRcdFx0JHdpbmRvdy5vbnBvcHN0YXRlKClcblx0XHRcdGlmIChvcHRpb25zICYmIG9wdGlvbnMucmVwbGFjZSkgJHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShzdGF0ZSwgdGl0bGUsIHJvdXRlci5wcmVmaXggKyBwYXRoKVxuXHRcdFx0ZWxzZSAkd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHN0YXRlLCB0aXRsZSwgcm91dGVyLnByZWZpeCArIHBhdGgpXG5cdFx0fVxuXHRcdGVsc2UgJHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcm91dGVyLnByZWZpeCArIHBhdGhcblx0fVxuXHRyb3V0ZXIuZGVmaW5lUm91dGVzID0gZnVuY3Rpb24ocm91dGVzLCByZXNvbHZlLCByZWplY3QpIHtcblx0XHRmdW5jdGlvbiByZXNvbHZlUm91dGUoKSB7XG5cdFx0XHR2YXIgcGF0aCA9IHJvdXRlci5nZXRQYXRoKClcblx0XHRcdHZhciBwYXJhbXMgPSB7fVxuXHRcdFx0dmFyIHBhdGhuYW1lID0gcGFyc2VQYXRoKHBhdGgsIHBhcmFtcywgcGFyYW1zKVxuXHRcdFx0dmFyIHN0YXRlID0gJHdpbmRvdy5oaXN0b3J5LnN0YXRlXG5cdFx0XHRpZiAoc3RhdGUgIT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBrIGluIHN0YXRlKSBwYXJhbXNba10gPSBzdGF0ZVtrXVxuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIgcm91dGUwIGluIHJvdXRlcykge1xuXHRcdFx0XHR2YXIgbWF0Y2hlciA9IG5ldyBSZWdFeHAoXCJeXCIgKyByb3V0ZTAucmVwbGFjZSgvOlteXFwvXSs/XFwuezN9L2csIFwiKC4qPylcIikucmVwbGFjZSgvOlteXFwvXSsvZywgXCIoW15cXFxcL10rKVwiKSArIFwiXFwvPyRcIilcblx0XHRcdFx0aWYgKG1hdGNoZXIudGVzdChwYXRobmFtZSkpIHtcblx0XHRcdFx0XHRwYXRobmFtZS5yZXBsYWNlKG1hdGNoZXIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0dmFyIGtleXMgPSByb3V0ZTAubWF0Y2goLzpbXlxcL10rL2cpIHx8IFtdXG5cdFx0XHRcdFx0XHR2YXIgdmFsdWVzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEsIC0yKVxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdHBhcmFtc1trZXlzW2ldLnJlcGxhY2UoLzp8XFwuL2csIFwiXCIpXSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZXNbaV0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHJvdXRlc1tyb3V0ZTBdLCBwYXJhbXMsIHBhdGgsIHJvdXRlMClcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZWplY3QocGF0aCwgcGFyYW1zKVxuXHRcdH1cblx0XHRpZiAoc3VwcG9ydHNQdXNoU3RhdGUpICR3aW5kb3cub25wb3BzdGF0ZSA9IGRlYm91bmNlQXN5bmMocmVzb2x2ZVJvdXRlKVxuXHRcdGVsc2UgaWYgKHJvdXRlci5wcmVmaXguY2hhckF0KDApID09PSBcIiNcIikgJHdpbmRvdy5vbmhhc2hjaGFuZ2UgPSByZXNvbHZlUm91dGVcblx0XHRyZXNvbHZlUm91dGUoKVxuXHR9XG5cdHJldHVybiByb3V0ZXJcbn1cbnZhciBfMjAgPSBmdW5jdGlvbigkd2luZG93LCByZWRyYXdTZXJ2aWNlMCkge1xuXHR2YXIgcm91dGVTZXJ2aWNlID0gY29yZVJvdXRlcigkd2luZG93KVxuXHR2YXIgaWRlbnRpdHkgPSBmdW5jdGlvbih2KSB7cmV0dXJuIHZ9XG5cdHZhciByZW5kZXIxLCBjb21wb25lbnQsIGF0dHJzMywgY3VycmVudFBhdGgsIGxhc3RVcGRhdGVcblx0dmFyIHJvdXRlID0gZnVuY3Rpb24ocm9vdCwgZGVmYXVsdFJvdXRlLCByb3V0ZXMpIHtcblx0XHRpZiAocm9vdCA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJFbnN1cmUgdGhlIERPTSBlbGVtZW50IHRoYXQgd2FzIHBhc3NlZCB0byBgbS5yb3V0ZWAgaXMgbm90IHVuZGVmaW5lZFwiKVxuXHRcdGZ1bmN0aW9uIHJ1bjEoKSB7XG5cdFx0XHRpZiAocmVuZGVyMSAhPSBudWxsKSByZWRyYXdTZXJ2aWNlMC5yZW5kZXIocm9vdCwgcmVuZGVyMShWbm9kZShjb21wb25lbnQsIGF0dHJzMy5rZXksIGF0dHJzMykpKVxuXHRcdH1cblx0XHR2YXIgcmVkcmF3MiA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cnVuMSgpXG5cdFx0XHRyZWRyYXcyID0gcmVkcmF3U2VydmljZTAucmVkcmF3XG5cdFx0fVxuXHRcdHJlZHJhd1NlcnZpY2UwLnN1YnNjcmliZShyb290LCBydW4xKVxuXHRcdHZhciBiYWlsID0gZnVuY3Rpb24ocGF0aCkge1xuXHRcdFx0aWYgKHBhdGggIT09IGRlZmF1bHRSb3V0ZSkgcm91dGVTZXJ2aWNlLnNldFBhdGgoZGVmYXVsdFJvdXRlLCBudWxsLCB7cmVwbGFjZTogdHJ1ZX0pXG5cdFx0XHRlbHNlIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCByZXNvbHZlIGRlZmF1bHQgcm91dGUgXCIgKyBkZWZhdWx0Um91dGUpXG5cdFx0fVxuXHRcdHJvdXRlU2VydmljZS5kZWZpbmVSb3V0ZXMocm91dGVzLCBmdW5jdGlvbihwYXlsb2FkLCBwYXJhbXMsIHBhdGgpIHtcblx0XHRcdHZhciB1cGRhdGUgPSBsYXN0VXBkYXRlID0gZnVuY3Rpb24ocm91dGVSZXNvbHZlciwgY29tcCkge1xuXHRcdFx0XHRpZiAodXBkYXRlICE9PSBsYXN0VXBkYXRlKSByZXR1cm5cblx0XHRcdFx0Y29tcG9uZW50ID0gY29tcCAhPSBudWxsICYmICh0eXBlb2YgY29tcC52aWV3ID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIGNvbXAgPT09IFwiZnVuY3Rpb25cIik/IGNvbXAgOiBcImRpdlwiXG5cdFx0XHRcdGF0dHJzMyA9IHBhcmFtcywgY3VycmVudFBhdGggPSBwYXRoLCBsYXN0VXBkYXRlID0gbnVsbFxuXHRcdFx0XHRyZW5kZXIxID0gKHJvdXRlUmVzb2x2ZXIucmVuZGVyIHx8IGlkZW50aXR5KS5iaW5kKHJvdXRlUmVzb2x2ZXIpXG5cdFx0XHRcdHJlZHJhdzIoKVxuXHRcdFx0fVxuXHRcdFx0aWYgKHBheWxvYWQudmlldyB8fCB0eXBlb2YgcGF5bG9hZCA9PT0gXCJmdW5jdGlvblwiKSB1cGRhdGUoe30sIHBheWxvYWQpXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0aWYgKHBheWxvYWQub25tYXRjaCkge1xuXHRcdFx0XHRcdFByb21pc2UucmVzb2x2ZShwYXlsb2FkLm9ubWF0Y2gocGFyYW1zLCBwYXRoKSkudGhlbihmdW5jdGlvbihyZXNvbHZlZCkge1xuXHRcdFx0XHRcdFx0dXBkYXRlKHBheWxvYWQsIHJlc29sdmVkKVxuXHRcdFx0XHRcdH0sIGJhaWwpXG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB1cGRhdGUocGF5bG9hZCwgXCJkaXZcIilcblx0XHRcdH1cblx0XHR9LCBiYWlsKVxuXHR9XG5cdHJvdXRlLnNldCA9IGZ1bmN0aW9uKHBhdGgsIGRhdGEsIG9wdGlvbnMpIHtcblx0XHRpZiAobGFzdFVwZGF0ZSAhPSBudWxsKSB7XG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXHRcdFx0b3B0aW9ucy5yZXBsYWNlID0gdHJ1ZVxuXHRcdH1cblx0XHRsYXN0VXBkYXRlID0gbnVsbFxuXHRcdHJvdXRlU2VydmljZS5zZXRQYXRoKHBhdGgsIGRhdGEsIG9wdGlvbnMpXG5cdH1cblx0cm91dGUuZ2V0ID0gZnVuY3Rpb24oKSB7cmV0dXJuIGN1cnJlbnRQYXRofVxuXHRyb3V0ZS5wcmVmaXggPSBmdW5jdGlvbihwcmVmaXgwKSB7cm91dGVTZXJ2aWNlLnByZWZpeCA9IHByZWZpeDB9XG5cdHZhciBsaW5rID0gZnVuY3Rpb24ob3B0aW9ucywgdm5vZGUxKSB7XG5cdFx0dm5vZGUxLmRvbS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHJvdXRlU2VydmljZS5wcmVmaXggKyB2bm9kZTEuYXR0cnMuaHJlZilcblx0XHR2bm9kZTEuZG9tLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRpZiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSB8fCBlLnNoaWZ0S2V5IHx8IGUud2hpY2ggPT09IDIpIHJldHVyblxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRlLnJlZHJhdyA9IGZhbHNlXG5cdFx0XHR2YXIgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKVxuXHRcdFx0aWYgKGhyZWYuaW5kZXhPZihyb3V0ZVNlcnZpY2UucHJlZml4KSA9PT0gMCkgaHJlZiA9IGhyZWYuc2xpY2Uocm91dGVTZXJ2aWNlLnByZWZpeC5sZW5ndGgpXG5cdFx0XHRyb3V0ZS5zZXQoaHJlZiwgdW5kZWZpbmVkLCBvcHRpb25zKVxuXHRcdH1cblx0fVxuXHRyb3V0ZS5saW5rID0gZnVuY3Rpb24oYXJnczApIHtcblx0XHRpZiAoYXJnczAudGFnID09IG51bGwpIHJldHVybiBsaW5rLmJpbmQobGluaywgYXJnczApXG5cdFx0cmV0dXJuIGxpbmsoe30sIGFyZ3MwKVxuXHR9XG5cdHJvdXRlLnBhcmFtID0gZnVuY3Rpb24oa2V5Mykge1xuXHRcdGlmKHR5cGVvZiBhdHRyczMgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGtleTMgIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBhdHRyczNba2V5M11cblx0XHRyZXR1cm4gYXR0cnMzXG5cdH1cblx0cmV0dXJuIHJvdXRlXG59XG5tLnJvdXRlID0gXzIwKHdpbmRvdywgcmVkcmF3U2VydmljZSlcbm0ud2l0aEF0dHIgPSBmdW5jdGlvbihhdHRyTmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0cmV0dXJuIGZ1bmN0aW9uKGUpIHtcblx0XHRjYWxsYmFjay5jYWxsKGNvbnRleHQgfHwgdGhpcywgYXR0ck5hbWUgaW4gZS5jdXJyZW50VGFyZ2V0ID8gZS5jdXJyZW50VGFyZ2V0W2F0dHJOYW1lXSA6IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpKVxuXHR9XG59XG52YXIgXzI4ID0gY29yZVJlbmRlcmVyKHdpbmRvdylcbm0ucmVuZGVyID0gXzI4LnJlbmRlclxubS5yZWRyYXcgPSByZWRyYXdTZXJ2aWNlLnJlZHJhd1xubS5yZXF1ZXN0ID0gcmVxdWVzdFNlcnZpY2UucmVxdWVzdFxubS5qc29ucCA9IHJlcXVlc3RTZXJ2aWNlLmpzb25wXG5tLnBhcnNlUXVlcnlTdHJpbmcgPSBwYXJzZVF1ZXJ5U3RyaW5nXG5tLmJ1aWxkUXVlcnlTdHJpbmcgPSBidWlsZFF1ZXJ5U3RyaW5nXG5tLnZlcnNpb24gPSBcIjEuMS4zXCJcbm0udm5vZGUgPSBWbm9kZVxuaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIpIG1vZHVsZVtcImV4cG9ydHNcIl0gPSBtXG5lbHNlIHdpbmRvdy5tID0gbVxufSgpKTsiLCJcInVzZSBzdHJpY3RcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2FwaS9yZWRyYXdcIikod2luZG93KVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFZub2RlID0gcmVxdWlyZShcIi4uL3JlbmRlci92bm9kZVwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGF0dHJzLCBjaGlsZHJlbikge1xuXHRyZXR1cm4gVm5vZGUoXCJbXCIsIGF0dHJzLmtleSwgYXR0cnMsIFZub2RlLm5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgVm5vZGUgPSByZXF1aXJlKFwiLi4vcmVuZGVyL3Zub2RlXCIpXG5cbnZhciBzZWxlY3RvclBhcnNlciA9IC8oPzooXnwjfFxcLikoW14jXFwuXFxbXFxdXSspKXwoXFxbKC4rPykoPzpcXHMqPVxccyooXCJ8J3wpKCg/OlxcXFxbXCInXFxdXXwuKSo/KVxcNSk/XFxdKS9nXG52YXIgc2VsZWN0b3JDYWNoZSA9IHt9XG52YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHlcblxuZnVuY3Rpb24gaXNFbXB0eShvYmplY3QpIHtcblx0Zm9yICh2YXIga2V5IGluIG9iamVjdCkgaWYgKGhhc093bi5jYWxsKG9iamVjdCwga2V5KSkgcmV0dXJuIGZhbHNlXG5cdHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVTZWxlY3RvcihzZWxlY3Rvcikge1xuXHR2YXIgbWF0Y2gsIHRhZyA9IFwiZGl2XCIsIGNsYXNzZXMgPSBbXSwgYXR0cnMgPSB7fVxuXHR3aGlsZSAobWF0Y2ggPSBzZWxlY3RvclBhcnNlci5leGVjKHNlbGVjdG9yKSkge1xuXHRcdHZhciB0eXBlID0gbWF0Y2hbMV0sIHZhbHVlID0gbWF0Y2hbMl1cblx0XHRpZiAodHlwZSA9PT0gXCJcIiAmJiB2YWx1ZSAhPT0gXCJcIikgdGFnID0gdmFsdWVcblx0XHRlbHNlIGlmICh0eXBlID09PSBcIiNcIikgYXR0cnMuaWQgPSB2YWx1ZVxuXHRcdGVsc2UgaWYgKHR5cGUgPT09IFwiLlwiKSBjbGFzc2VzLnB1c2godmFsdWUpXG5cdFx0ZWxzZSBpZiAobWF0Y2hbM11bMF0gPT09IFwiW1wiKSB7XG5cdFx0XHR2YXIgYXR0clZhbHVlID0gbWF0Y2hbNl1cblx0XHRcdGlmIChhdHRyVmFsdWUpIGF0dHJWYWx1ZSA9IGF0dHJWYWx1ZS5yZXBsYWNlKC9cXFxcKFtcIiddKS9nLCBcIiQxXCIpLnJlcGxhY2UoL1xcXFxcXFxcL2csIFwiXFxcXFwiKVxuXHRcdFx0aWYgKG1hdGNoWzRdID09PSBcImNsYXNzXCIpIGNsYXNzZXMucHVzaChhdHRyVmFsdWUpXG5cdFx0XHRlbHNlIGF0dHJzW21hdGNoWzRdXSA9IGF0dHJWYWx1ZSA9PT0gXCJcIiA/IGF0dHJWYWx1ZSA6IGF0dHJWYWx1ZSB8fCB0cnVlXG5cdFx0fVxuXHR9XG5cdGlmIChjbGFzc2VzLmxlbmd0aCA+IDApIGF0dHJzLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbihcIiBcIilcblx0cmV0dXJuIHNlbGVjdG9yQ2FjaGVbc2VsZWN0b3JdID0ge3RhZzogdGFnLCBhdHRyczogYXR0cnN9XG59XG5cbmZ1bmN0aW9uIGV4ZWNTZWxlY3RvcihzdGF0ZSwgYXR0cnMsIGNoaWxkcmVuKSB7XG5cdHZhciBoYXNBdHRycyA9IGZhbHNlLCBjaGlsZExpc3QsIHRleHRcblx0dmFyIGNsYXNzTmFtZSA9IGF0dHJzLmNsYXNzTmFtZSB8fCBhdHRycy5jbGFzc1xuXG5cdGlmICghaXNFbXB0eShzdGF0ZS5hdHRycykgJiYgIWlzRW1wdHkoYXR0cnMpKSB7XG5cdFx0dmFyIG5ld0F0dHJzID0ge31cblxuXHRcdGZvcih2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0XHRpZiAoaGFzT3duLmNhbGwoYXR0cnMsIGtleSkpIHtcblx0XHRcdFx0bmV3QXR0cnNba2V5XSA9IGF0dHJzW2tleV1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRhdHRycyA9IG5ld0F0dHJzXG5cdH1cblxuXHRmb3IgKHZhciBrZXkgaW4gc3RhdGUuYXR0cnMpIHtcblx0XHRpZiAoaGFzT3duLmNhbGwoc3RhdGUuYXR0cnMsIGtleSkpIHtcblx0XHRcdGF0dHJzW2tleV0gPSBzdGF0ZS5hdHRyc1trZXldXG5cdFx0fVxuXHR9XG5cblx0aWYgKGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGF0dHJzLmNsYXNzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGF0dHJzLmNsYXNzID0gdW5kZWZpbmVkXG5cdFx0XHRhdHRycy5jbGFzc05hbWUgPSBjbGFzc05hbWVcblx0XHR9XG5cblx0XHRpZiAoc3RhdGUuYXR0cnMuY2xhc3NOYW1lICE9IG51bGwpIHtcblx0XHRcdGF0dHJzLmNsYXNzTmFtZSA9IHN0YXRlLmF0dHJzLmNsYXNzTmFtZSArIFwiIFwiICsgY2xhc3NOYW1lXG5cdFx0fVxuXHR9XG5cblx0Zm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0aWYgKGhhc093bi5jYWxsKGF0dHJzLCBrZXkpICYmIGtleSAhPT0gXCJrZXlcIikge1xuXHRcdFx0aGFzQXR0cnMgPSB0cnVlXG5cdFx0XHRicmVha1xuXHRcdH1cblx0fVxuXG5cdGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJiBjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgY2hpbGRyZW5bMF0gIT0gbnVsbCAmJiBjaGlsZHJlblswXS50YWcgPT09IFwiI1wiKSB7XG5cdFx0dGV4dCA9IGNoaWxkcmVuWzBdLmNoaWxkcmVuXG5cdH0gZWxzZSB7XG5cdFx0Y2hpbGRMaXN0ID0gY2hpbGRyZW5cblx0fVxuXG5cdHJldHVybiBWbm9kZShzdGF0ZS50YWcsIGF0dHJzLmtleSwgaGFzQXR0cnMgPyBhdHRycyA6IHVuZGVmaW5lZCwgY2hpbGRMaXN0LCB0ZXh0KVxufVxuXG5mdW5jdGlvbiBoeXBlcnNjcmlwdChzZWxlY3Rvcikge1xuXHQvLyBCZWNhdXNlIHNsb3BweSBtb2RlIHN1Y2tzXG5cdHZhciBhdHRycyA9IGFyZ3VtZW50c1sxXSwgc3RhcnQgPSAyLCBjaGlsZHJlblxuXG5cdGlmIChzZWxlY3RvciA9PSBudWxsIHx8IHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Ygc2VsZWN0b3IgIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygc2VsZWN0b3IudmlldyAhPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0dGhyb3cgRXJyb3IoXCJUaGUgc2VsZWN0b3IgbXVzdCBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYSBjb21wb25lbnQuXCIpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xuXHRcdHZhciBjYWNoZWQgPSBzZWxlY3RvckNhY2hlW3NlbGVjdG9yXSB8fCBjb21waWxlU2VsZWN0b3Ioc2VsZWN0b3IpXG5cdH1cblxuXHRpZiAoYXR0cnMgPT0gbnVsbCkge1xuXHRcdGF0dHJzID0ge31cblx0fSBlbHNlIGlmICh0eXBlb2YgYXR0cnMgIT09IFwib2JqZWN0XCIgfHwgYXR0cnMudGFnICE9IG51bGwgfHwgQXJyYXkuaXNBcnJheShhdHRycykpIHtcblx0XHRhdHRycyA9IHt9XG5cdFx0c3RhcnQgPSAxXG5cdH1cblxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gc3RhcnQgKyAxKSB7XG5cdFx0Y2hpbGRyZW4gPSBhcmd1bWVudHNbc3RhcnRdXG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkgY2hpbGRyZW4gPSBbY2hpbGRyZW5dXG5cdH0gZWxzZSB7XG5cdFx0Y2hpbGRyZW4gPSBbXVxuXHRcdHdoaWxlIChzdGFydCA8IGFyZ3VtZW50cy5sZW5ndGgpIGNoaWxkcmVuLnB1c2goYXJndW1lbnRzW3N0YXJ0KytdKVxuXHR9XG5cblx0dmFyIG5vcm1hbGl6ZWQgPSBWbm9kZS5ub3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbilcblxuXHRpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XG5cdFx0cmV0dXJuIGV4ZWNTZWxlY3RvcihjYWNoZWQsIGF0dHJzLCBub3JtYWxpemVkKVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBWbm9kZShzZWxlY3RvciwgYXR0cnMua2V5LCBhdHRycywgbm9ybWFsaXplZClcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGh5cGVyc2NyaXB0XG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgVm5vZGUgPSByZXF1aXJlKFwiLi4vcmVuZGVyL3Zub2RlXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oJHdpbmRvdykge1xuXHR2YXIgJGRvYyA9ICR3aW5kb3cuZG9jdW1lbnRcblx0dmFyICRlbXB0eUZyYWdtZW50ID0gJGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblxuXHR2YXIgbmFtZVNwYWNlID0ge1xuXHRcdHN2ZzogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuXHRcdG1hdGg6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiXG5cdH1cblxuXHR2YXIgb25ldmVudFxuXHRmdW5jdGlvbiBzZXRFdmVudENhbGxiYWNrKGNhbGxiYWNrKSB7cmV0dXJuIG9uZXZlbnQgPSBjYWxsYmFja31cblxuXHRmdW5jdGlvbiBnZXROYW1lU3BhY2Uodm5vZGUpIHtcblx0XHRyZXR1cm4gdm5vZGUuYXR0cnMgJiYgdm5vZGUuYXR0cnMueG1sbnMgfHwgbmFtZVNwYWNlW3Zub2RlLnRhZ11cblx0fVxuXG5cdC8vc2FuaXR5IGNoZWNrIHRvIGRpc2NvdXJhZ2UgcGVvcGxlIGZyb20gZG9pbmcgYHZub2RlLnN0YXRlID0gLi4uYFxuXHRmdW5jdGlvbiBjaGVja1N0YXRlKHZub2RlLCBvcmlnaW5hbCkge1xuXHRcdGlmICh2bm9kZS5zdGF0ZSAhPT0gb3JpZ2luYWwpIHRocm93IG5ldyBFcnJvcihcImB2bm9kZS5zdGF0ZWAgbXVzdCBub3QgYmUgbW9kaWZpZWRcIilcblx0fVxuXG5cdC8vTm90ZTogdGhlIGhvb2sgaXMgcGFzc2VkIGFzIHRoZSBgdGhpc2AgYXJndW1lbnQgdG8gYWxsb3cgcHJveHlpbmcgdGhlXG5cdC8vYXJndW1lbnRzIHdpdGhvdXQgcmVxdWlyaW5nIGEgZnVsbCBhcnJheSBhbGxvY2F0aW9uIHRvIGRvIHNvLiBJdCBhbHNvXG5cdC8vdGFrZXMgYWR2YW50YWdlIG9mIHRoZSBmYWN0IHRoZSBjdXJyZW50IGB2bm9kZWAgaXMgdGhlIGZpcnN0IGFyZ3VtZW50IGluXG5cdC8vYWxsIGxpZmVjeWNsZSBtZXRob2RzLlxuXHRmdW5jdGlvbiBjYWxsSG9vayh2bm9kZSkge1xuXHRcdHZhciBvcmlnaW5hbCA9IHZub2RlLnN0YXRlXG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiB0aGlzLmFwcGx5KG9yaWdpbmFsLCBhcmd1bWVudHMpXG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdGNoZWNrU3RhdGUodm5vZGUsIG9yaWdpbmFsKVxuXHRcdH1cblx0fVxuXG5cdC8vY3JlYXRlXG5cdGZ1bmN0aW9uIGNyZWF0ZU5vZGVzKHBhcmVudCwgdm5vZGVzLCBzdGFydCwgZW5kLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKSB7XG5cdFx0Zm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcblx0XHRcdHZhciB2bm9kZSA9IHZub2Rlc1tpXVxuXHRcdFx0aWYgKHZub2RlICE9IG51bGwpIHtcblx0XHRcdFx0Y3JlYXRlTm9kZShwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpIHtcblx0XHR2YXIgdGFnID0gdm5vZGUudGFnXG5cdFx0aWYgKHR5cGVvZiB0YWcgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHZub2RlLnN0YXRlID0ge31cblx0XHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsKSBpbml0TGlmZWN5Y2xlKHZub2RlLmF0dHJzLCB2bm9kZSwgaG9va3MpXG5cdFx0XHRzd2l0Y2ggKHRhZykge1xuXHRcdFx0XHRjYXNlIFwiI1wiOiByZXR1cm4gY3JlYXRlVGV4dChwYXJlbnQsIHZub2RlLCBuZXh0U2libGluZylcblx0XHRcdFx0Y2FzZSBcIjxcIjogcmV0dXJuIGNyZWF0ZUhUTUwocGFyZW50LCB2bm9kZSwgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdGNhc2UgXCJbXCI6IHJldHVybiBjcmVhdGVGcmFnbWVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0XHRkZWZhdWx0OiByZXR1cm4gY3JlYXRlRWxlbWVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKVxuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHJldHVybiBjcmVhdGVDb21wb25lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVUZXh0KHBhcmVudCwgdm5vZGUsIG5leHRTaWJsaW5nKSB7XG5cdFx0dm5vZGUuZG9tID0gJGRvYy5jcmVhdGVUZXh0Tm9kZSh2bm9kZS5jaGlsZHJlbilcblx0XHRpbnNlcnROb2RlKHBhcmVudCwgdm5vZGUuZG9tLCBuZXh0U2libGluZylcblx0XHRyZXR1cm4gdm5vZGUuZG9tXG5cdH1cblx0ZnVuY3Rpb24gY3JlYXRlSFRNTChwYXJlbnQsIHZub2RlLCBuZXh0U2libGluZykge1xuXHRcdHZhciBtYXRjaCA9IHZub2RlLmNoaWxkcmVuLm1hdGNoKC9eXFxzKj88KFxcdyspL2ltKSB8fCBbXVxuXHRcdHZhciBwYXJlbnQxID0ge2NhcHRpb246IFwidGFibGVcIiwgdGhlYWQ6IFwidGFibGVcIiwgdGJvZHk6IFwidGFibGVcIiwgdGZvb3Q6IFwidGFibGVcIiwgdHI6IFwidGJvZHlcIiwgdGg6IFwidHJcIiwgdGQ6IFwidHJcIiwgY29sZ3JvdXA6IFwidGFibGVcIiwgY29sOiBcImNvbGdyb3VwXCJ9W21hdGNoWzFdXSB8fCBcImRpdlwiXG5cdFx0dmFyIHRlbXAgPSAkZG9jLmNyZWF0ZUVsZW1lbnQocGFyZW50MSlcblxuXHRcdHRlbXAuaW5uZXJIVE1MID0gdm5vZGUuY2hpbGRyZW5cblx0XHR2bm9kZS5kb20gPSB0ZW1wLmZpcnN0Q2hpbGRcblx0XHR2bm9kZS5kb21TaXplID0gdGVtcC5jaGlsZE5vZGVzLmxlbmd0aFxuXHRcdHZhciBmcmFnbWVudCA9ICRkb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cdFx0dmFyIGNoaWxkXG5cdFx0d2hpbGUgKGNoaWxkID0gdGVtcC5maXJzdENoaWxkKSB7XG5cdFx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZChjaGlsZClcblx0XHR9XG5cdFx0aW5zZXJ0Tm9kZShwYXJlbnQsIGZyYWdtZW50LCBuZXh0U2libGluZylcblx0XHRyZXR1cm4gZnJhZ21lbnRcblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVGcmFnbWVudChwYXJlbnQsIHZub2RlLCBob29rcywgbnMsIG5leHRTaWJsaW5nKSB7XG5cdFx0dmFyIGZyYWdtZW50ID0gJGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblx0XHRpZiAodm5vZGUuY2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0dmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW5cblx0XHRcdGNyZWF0ZU5vZGVzKGZyYWdtZW50LCBjaGlsZHJlbiwgMCwgY2hpbGRyZW4ubGVuZ3RoLCBob29rcywgbnVsbCwgbnMpXG5cdFx0fVxuXHRcdHZub2RlLmRvbSA9IGZyYWdtZW50LmZpcnN0Q2hpbGRcblx0XHR2bm9kZS5kb21TaXplID0gZnJhZ21lbnQuY2hpbGROb2Rlcy5sZW5ndGhcblx0XHRpbnNlcnROb2RlKHBhcmVudCwgZnJhZ21lbnQsIG5leHRTaWJsaW5nKVxuXHRcdHJldHVybiBmcmFnbWVudFxuXHR9XG5cdGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZykge1xuXHRcdHZhciB0YWcgPSB2bm9kZS50YWdcblx0XHR2YXIgYXR0cnMgPSB2bm9kZS5hdHRyc1xuXHRcdHZhciBpcyA9IGF0dHJzICYmIGF0dHJzLmlzXG5cblx0XHRucyA9IGdldE5hbWVTcGFjZSh2bm9kZSkgfHwgbnNcblxuXHRcdHZhciBlbGVtZW50ID0gbnMgP1xuXHRcdFx0aXMgPyAkZG9jLmNyZWF0ZUVsZW1lbnROUyhucywgdGFnLCB7aXM6IGlzfSkgOiAkZG9jLmNyZWF0ZUVsZW1lbnROUyhucywgdGFnKSA6XG5cdFx0XHRpcyA/ICRkb2MuY3JlYXRlRWxlbWVudCh0YWcsIHtpczogaXN9KSA6ICRkb2MuY3JlYXRlRWxlbWVudCh0YWcpXG5cdFx0dm5vZGUuZG9tID0gZWxlbWVudFxuXG5cdFx0aWYgKGF0dHJzICE9IG51bGwpIHtcblx0XHRcdHNldEF0dHJzKHZub2RlLCBhdHRycywgbnMpXG5cdFx0fVxuXG5cdFx0aW5zZXJ0Tm9kZShwYXJlbnQsIGVsZW1lbnQsIG5leHRTaWJsaW5nKVxuXG5cdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwgJiYgdm5vZGUuYXR0cnMuY29udGVudGVkaXRhYmxlICE9IG51bGwpIHtcblx0XHRcdHNldENvbnRlbnRFZGl0YWJsZSh2bm9kZSlcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAodm5vZGUudGV4dCAhPSBudWxsKSB7XG5cdFx0XHRcdGlmICh2bm9kZS50ZXh0ICE9PSBcIlwiKSBlbGVtZW50LnRleHRDb250ZW50ID0gdm5vZGUudGV4dFxuXHRcdFx0XHRlbHNlIHZub2RlLmNoaWxkcmVuID0gW1Zub2RlKFwiI1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdm5vZGUudGV4dCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXVxuXHRcdFx0fVxuXHRcdFx0aWYgKHZub2RlLmNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRcdFx0dmFyIGNoaWxkcmVuID0gdm5vZGUuY2hpbGRyZW5cblx0XHRcdFx0Y3JlYXRlTm9kZXMoZWxlbWVudCwgY2hpbGRyZW4sIDAsIGNoaWxkcmVuLmxlbmd0aCwgaG9va3MsIG51bGwsIG5zKVxuXHRcdFx0XHRzZXRMYXRlQXR0cnModm5vZGUpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBlbGVtZW50XG5cdH1cblx0ZnVuY3Rpb24gaW5pdENvbXBvbmVudCh2bm9kZSwgaG9va3MpIHtcblx0XHR2YXIgc2VudGluZWxcblx0XHRpZiAodHlwZW9mIHZub2RlLnRhZy52aWV3ID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHZub2RlLnN0YXRlID0gT2JqZWN0LmNyZWF0ZSh2bm9kZS50YWcpXG5cdFx0XHRzZW50aW5lbCA9IHZub2RlLnN0YXRlLnZpZXdcblx0XHRcdGlmIChzZW50aW5lbC4kJHJlZW50cmFudExvY2skJCAhPSBudWxsKSByZXR1cm4gJGVtcHR5RnJhZ21lbnRcblx0XHRcdHNlbnRpbmVsLiQkcmVlbnRyYW50TG9jayQkID0gdHJ1ZVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2bm9kZS5zdGF0ZSA9IHZvaWQgMFxuXHRcdFx0c2VudGluZWwgPSB2bm9kZS50YWdcblx0XHRcdGlmIChzZW50aW5lbC4kJHJlZW50cmFudExvY2skJCAhPSBudWxsKSByZXR1cm4gJGVtcHR5RnJhZ21lbnRcblx0XHRcdHNlbnRpbmVsLiQkcmVlbnRyYW50TG9jayQkID0gdHJ1ZVxuXHRcdFx0dm5vZGUuc3RhdGUgPSAodm5vZGUudGFnLnByb3RvdHlwZSAhPSBudWxsICYmIHR5cGVvZiB2bm9kZS50YWcucHJvdG90eXBlLnZpZXcgPT09IFwiZnVuY3Rpb25cIikgPyBuZXcgdm5vZGUudGFnKHZub2RlKSA6IHZub2RlLnRhZyh2bm9kZSlcblx0XHR9XG5cdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwpIGluaXRMaWZlY3ljbGUodm5vZGUuYXR0cnMsIHZub2RlLCBob29rcylcblx0XHRpbml0TGlmZWN5Y2xlKHZub2RlLnN0YXRlLCB2bm9kZSwgaG9va3MpXG5cdFx0dm5vZGUuaW5zdGFuY2UgPSBWbm9kZS5ub3JtYWxpemUoY2FsbEhvb2suY2FsbCh2bm9kZS5zdGF0ZS52aWV3LCB2bm9kZSkpXG5cdFx0aWYgKHZub2RlLmluc3RhbmNlID09PSB2bm9kZSkgdGhyb3cgRXJyb3IoXCJBIHZpZXcgY2Fubm90IHJldHVybiB0aGUgdm5vZGUgaXQgcmVjZWl2ZWQgYXMgYXJndW1lbnRcIilcblx0XHRzZW50aW5lbC4kJHJlZW50cmFudExvY2skJCA9IG51bGxcblx0fVxuXHRmdW5jdGlvbiBjcmVhdGVDb21wb25lbnQocGFyZW50LCB2bm9kZSwgaG9va3MsIG5zLCBuZXh0U2libGluZykge1xuXHRcdGluaXRDb21wb25lbnQodm5vZGUsIGhvb2tzKVxuXHRcdGlmICh2bm9kZS5pbnN0YW5jZSAhPSBudWxsKSB7XG5cdFx0XHR2YXIgZWxlbWVudCA9IGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZS5pbnN0YW5jZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdHZub2RlLmRvbSA9IHZub2RlLmluc3RhbmNlLmRvbVxuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IHZub2RlLmRvbSAhPSBudWxsID8gdm5vZGUuaW5zdGFuY2UuZG9tU2l6ZSA6IDBcblx0XHRcdGluc2VydE5vZGUocGFyZW50LCBlbGVtZW50LCBuZXh0U2libGluZylcblx0XHRcdHJldHVybiBlbGVtZW50XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IDBcblx0XHRcdHJldHVybiAkZW1wdHlGcmFnbWVudFxuXHRcdH1cblx0fVxuXG5cdC8vdXBkYXRlXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0VsZW1lbnR8RnJhZ21lbnR9IHBhcmVudCAtIHRoZSBwYXJlbnQgZWxlbWVudFxuXHQgKiBAcGFyYW0ge1Zub2RlW10gfCBudWxsfSBvbGQgLSB0aGUgbGlzdCBvZiB2bm9kZXMgb2YgdGhlIGxhc3QgYHJlbmRlcigpYCBjYWxsIGZvclxuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzIHBhcnQgb2YgdGhlIHRyZWVcblx0ICogQHBhcmFtIHtWbm9kZVtdIHwgbnVsbH0gdm5vZGVzIC0gYXMgYWJvdmUsIGJ1dCBmb3IgdGhlIGN1cnJlbnQgYHJlbmRlcigpYCBjYWxsLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHJlY3ljbGluZ1BhcmVudCAtIHdhcyB0aGUgcGFyZW50IHZub2RlIG9yIG9uZSBvZiBpdHMgYW5jZXN0b3Jcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaGVkIGZyb20gdGhlIHJlY3ljbGluZyBwb29sP1xuXHQgKiBAcGFyYW0ge0Z1bmN0aW9uW119IGhvb2tzIC0gYW4gYWNjdW11bGF0b3Igb2YgcG9zdC1yZW5kZXIgaG9va3MgKG9uY3JlYXRlL29udXBkYXRlKVxuXHQgKiBAcGFyYW0ge0VsZW1lbnQgfCBudWxsfSBuZXh0U2libGluZyAtIHRoZSBuZXh0IERPTSBub2RlIGlmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgdGhhdCBpcyBub3QgdGhlIGxhc3QgaXRlbSBpbiBpdHNcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRcblx0ICogQHBhcmFtIHsnc3ZnJyB8ICdtYXRoJyB8IFN0cmluZyB8IG51bGx9IG5zKSAtIHRoZSBjdXJyZW50IFhNTCBuYW1lc3BhY2UsIGlmIGFueVxuXHQgKiBAcmV0dXJucyB2b2lkXG5cdCAqL1xuXHQvLyBUaGlzIGZ1bmN0aW9uIGRpZmZzIGFuZCBwYXRjaGVzIGxpc3RzIG9mIHZub2RlcywgYm90aCBrZXllZCBhbmQgdW5rZXllZC5cblx0Ly9cblx0Ly8gV2Ugd2lsbDpcblx0Ly9cblx0Ly8gMS4gZGVzY3JpYmUgaXRzIGdlbmVyYWwgc3RydWN0dXJlXG5cdC8vIDIuIGZvY3VzIG9uIHRoZSBkaWZmIGFsZ29yaXRobSBvcHRpbWl6YXRpb25zXG5cdC8vIDMuIGRlc2NyaWJlIGhvdyB0aGUgcmVjeWNsaW5nIHBvb2wgbWVzaGVzIGludG8gdGhpc1xuXHQvLyA0LiBkaXNjdXNzIERPTSBub2RlIG9wZXJhdGlvbnMuXG5cblx0Ly8gIyMgT3ZlcnZpZXc6XG5cdC8vXG5cdC8vIFRoZSB1cGRhdGVOb2RlcygpIGZ1bmN0aW9uOlxuXHQvLyAtIGRlYWxzIHdpdGggdHJpdmlhbCBjYXNlc1xuXHQvLyAtIGRldGVybWluZXMgd2hldGhlciB0aGUgbGlzdHMgYXJlIGtleWVkIG9yIHVua2V5ZWRcblx0Ly8gICAoQ3VycmVudGx5IHdlIGxvb2sgZm9yIHRoZSBmaXJzdCBwYWlyIG9mIG5vbi1udWxsIG5vZGVzIGFuZCBkZWVtIHRoZSBsaXN0cyB1bmtleWVkXG5cdC8vICAgaWYgYm90aCBub2RlcyBhcmUgdW5rZXllZC4gVE9ETyAodjIpIFdlIG1heSBsYXRlciB0YWtlIGFkdmFudGFnZSBvZiB0aGUgZmFjdCB0aGF0XG5cdC8vICAgbWl4ZWQgZGlmZiBpcyBub3Qgc3VwcG9ydGVkIGFuZCBzZXR0bGUgb24gdGhlIGtleWVkbmVzcyBvZiB0aGUgZmlyc3Qgdm5vZGUgd2UgZmluZClcblx0Ly8gLSBkaWZmcyB0aGVtIGFuZCBwYXRjaGVzIHRoZSBET00gaWYgbmVlZGVkICh0aGF0J3MgdGhlIGJydW50IG9mIHRoZSBjb2RlKVxuXHQvLyAtIG1hbmFnZXMgdGhlIGxlZnRvdmVyczogYWZ0ZXIgZGlmZmluZywgYXJlIHRoZXJlOlxuXHQvLyAgIC0gb2xkIG5vZGVzIGxlZnQgdG8gcmVtb3ZlP1xuXHQvLyBcdCAtIG5ldyBub2RlcyB0byBpbnNlcnQ/XG5cdC8vICAgLSBub2RlcyBsZWZ0IGluIHRoZSByZWN5Y2xpbmcgcG9vbD9cblx0Ly8gXHQgZGVhbCB3aXRoIHRoZW0hXG5cdC8vXG5cdC8vIFRoZSBsaXN0cyBhcmUgb25seSBpdGVyYXRlZCBvdmVyIG9uY2UsIHdpdGggYW4gZXhjZXB0aW9uIGZvciB0aGUgbm9kZXMgaW4gYG9sZGAgdGhhdFxuXHQvLyBhcmUgdmlzaXRlZCBpbiB0aGUgZm91cnRoIHBhcnQgb2YgdGhlIGRpZmYgYW5kIGluIHRoZSBgcmVtb3ZlTm9kZXNgIGxvb3AuXG5cblx0Ly8gIyMgRGlmZmluZ1xuXHQvL1xuXHQvLyBUaGVyZSdzIGZpcnN0IGEgc2ltcGxlIGRpZmYgZm9yIHVua2V5ZWQgbGlzdHMgb2YgZXF1YWwgbGVuZ3RoIHRoYXQgZXNjaGV3cyB0aGUgcG9vbC5cblx0Ly9cblx0Ly8gSXQgaXMgZm9sbG93ZWQgYnkgYSBzbWFsbCBzZWN0aW9uIHRoYXQgYWN0aXZhdGVzIHRoZSByZWN5Y2xpbmcgcG9vbCBpZiBwcmVzZW50LCB3ZSdsbFxuXHQvLyBpZ25vcmUgaXQgZm9yIG5vdy5cblx0Ly9cblx0Ly8gVGhlbiBjb21lcyB0aGUgbWFpbiBkaWZmIGFsZ29yaXRobSB0aGF0IGlzIHNwbGl0IGluIGZvdXIgcGFydHMgKHNpbXBsaWZ5aW5nIGEgYml0KS5cblx0Ly9cblx0Ly8gVGhlIGZpcnN0IHBhcnQgZ29lcyB0aHJvdWdoIGJvdGggbGlzdHMgdG9wLWRvd24gYXMgbG9uZyBhcyB0aGUgbm9kZXMgYXQgZWFjaCBsZXZlbCBoYXZlXG5cdC8vIHRoZSBzYW1lIGtleS4gVGhpcyBpcyBhbHdheXMgdHJ1ZSBmb3IgdW5rZXllZCBsaXN0cyB0aGF0IGFyZSBlbnRpcmVseSBwcm9jZXNzZWQgYnkgdGhpc1xuXHQvLyBzdGVwLlxuXHQvL1xuXHQvLyBUaGUgc2Vjb25kIHBhcnQgZGVhbHMgd2l0aCBsaXN0cyByZXZlcnNhbHMsIGFuZCB0cmF2ZXJzZXMgb25lIGxpc3QgdG9wLWRvd24gYW5kIHRoZSBvdGhlclxuXHQvLyBib3R0b20tdXAgKGFzIGxvbmcgYXMgdGhlIGtleXMgbWF0Y2gpLlxuXHQvL1xuXHQvLyBUaGUgdGhpcmQgcGFydCBnb2VzIHRocm91Z2ggYm90aCBsaXN0cyBib3R0b20gdXAgYXMgbG9uZyBhcyB0aGUga2V5cyBtYXRjaC5cblx0Ly9cblx0Ly8gVGhlIGZpcnN0IGFuZCB0aGlyZCBzZWN0aW9ucyBhbGxvdyB1cyB0byBkZWFsIGVmZmljaWVudGx5IHdpdGggc2l0dWF0aW9ucyB3aGVyZSBvbmUgb3Jcblx0Ly8gbW9yZSBjb250aWd1b3VzIG5vZGVzIHdlcmUgZWl0aGVyIGluc2VydGVkIGludG8sIHJlbW92ZWQgZnJvbSBvciByZS1vcmRlcmVkIGluIGFuIG90aGVyd2lzZVxuXHQvLyBzb3J0ZWQgbGlzdC4gVGhleSBtYXkgcmVkdWNlIHRoZSBudW1iZXIgb2Ygbm9kZXMgdG8gYmUgcHJvY2Vzc2VkIGluIHRoZSBmb3VydGggc2VjdGlvbi5cblx0Ly9cblx0Ly8gVGhlIGZvdXJ0aCBzZWN0aW9uIGRvZXMga2V5ZWQgZGlmZiBmb3IgdGhlIHNpdHVhdGlvbnMgbm90IGNvdmVyZWQgYnkgdGhlIG90aGVyIHRocmVlLiBJdFxuXHQvLyBidWlsZHMgYSB7a2V5OiBvbGRJbmRleH0gZGljdGlvbmFyeSBhbmQgdXNlcyBpdCB0byBmaW5kIG9sZCBub2RlcyB0aGF0IG1hdGNoIHRoZSBrZXlzIG9mXG5cdC8vIG5ldyBvbmVzLlxuXHQvLyBUaGUgbm9kZXMgZnJvbSB0aGUgYG9sZGAgYXJyYXkgdGhhdCBoYXZlIGEgbWF0Y2ggaW4gdGhlIG5ldyBgdm5vZGVzYCBvbmUgYXJlIG1hcmtlZCBhc1xuXHQvLyBgdm5vZGUuc2tpcDogdHJ1ZWAuXG5cdC8vXG5cdC8vIElmIHRoZXJlIGFyZSBzdGlsbCBub2RlcyBpbiB0aGUgbmV3IGB2bm9kZXNgIGFycmF5IHRoYXQgaGF2ZW4ndCBiZWVuIG1hdGNoZWQgdG8gb2xkIG9uZXMsXG5cdC8vIHRoZXkgYXJlIGNyZWF0ZWQuXG5cdC8vIFRoZSByYW5nZSBvZiBvbGQgbm9kZXMgdGhhdCB3YXNuJ3QgY292ZXJlZCBieSB0aGUgZmlyc3QgdGhyZWUgc2VjdGlvbnMgaXMgcGFzc2VkIHRvXG5cdC8vIGByZW1vdmVOb2RlcygpYC4gVGhvc2Ugbm9kZXMgYXJlIHJlbW92ZWQgdW5sZXNzIG1hcmtlZCBhcyBgLnNraXA6IHRydWVgLlxuXHQvL1xuXHQvLyBUaGVuIHNvbWUgcG9vbCBidXNpbmVzcyBoYXBwZW5zLlxuXHQvL1xuXHQvLyBJdCBzaG91bGQgYmUgbm90ZWQgdGhhdCB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIGZvdXIgc2VjdGlvbnMgYWJvdmUgaXMgbm90IHBlcmZlY3QsIGJlY2F1c2UgdGhvc2Vcblx0Ly8gcGFydHMgYXJlIGFjdHVhbGx5IGltcGxlbWVudGVkIGFzIG9ubHkgdHdvIGxvb3BzLCBvbmUgZm9yIHRoZSBmaXJzdCB0d28gcGFydHMsIGFuZCBvbmUgZm9yXG5cdC8vIHRoZSBvdGhlciB0d28uIEknbSBub3Qgc3VyZSBpdCB3aW5zIHVzIGFueXRoaW5nIGV4Y2VwdCBtYXliZSBhIGZldyBieXRlcyBvZiBmaWxlIHNpemUuXG5cblx0Ly8gIyMgVGhlIHBvb2xcblx0Ly9cblx0Ly8gYG9sZC5wb29sYCBpcyBhbiBvcHRpb25hbCBhcnJheSB0aGF0IGhvbGRzIHRoZSB2bm9kZXMgdGhhdCBoYXZlIGJlZW4gcHJldmlvdXNseSByZW1vdmVkXG5cdC8vIGZyb20gdGhlIERPTSBhdCB0aGlzIGxldmVsIChwcm92aWRlZCB0aGV5IG1ldCB0aGUgcG9vbCBlbGlnaWJpbGl0eSBjcml0ZXJpYSkuXG5cdC8vXG5cdC8vIElmIHRoZSBgb2xkYCwgYG9sZC5wb29sYCBhbmQgYHZub2Rlc2AgbWVldCBzb21lIGNyaXRlcmlhIGRlc2NyaWJlZCBpbiBgaXNSZWN5Y2xhYmxlYCwgdGhlXG5cdC8vIGVsZW1lbnRzIG9mIHRoZSBwb29sIGFyZSBhcHBlbmRlZCB0byB0aGUgYG9sZGAgYXJyYXksIHdoaWNoIGVuYWJsZXMgdGhlIHJlY29uY2lsZXIgdG8gZmluZFxuXHQvLyB0aGVtLlxuXHQvL1xuXHQvLyBXaGlsZSB0aGlzIGlzIG9wdGltYWwgZm9yIHVua2V5ZWQgZGlmZiBhbmQgbWFwLWJhc2VkIGtleWVkIGRpZmYgKHRoZSBmb3VydGggZGlmZiBwYXJ0KSxcblx0Ly8gdGhhdCBzdHJhdGVneSBjbGFzaGVzIHdpdGggdGhlIHNlY29uZCBhbmQgdGhpcmQgcGFydHMgb2YgdGhlIG1haW4gZGlmZiBhbGdvLCBiZWNhdXNlXG5cdC8vIHRoZSBlbmQgb2YgdGhlIG9sZCBsaXN0IGlzIG5vdyBmaWxsZWQgd2l0aCB0aGUgbm9kZXMgb2YgdGhlIHBvb2wuXG5cdC8vXG5cdC8vIFRvIGRldGVybWluZSBpZiBhIHZub2RlIHdhcyBicm91Z2h0IGJhY2sgZnJvbSB0aGUgcG9vbCwgd2UgbG9vayBhdCBpdHMgcG9zaXRpb24gaW4gdGhlXG5cdC8vIGBvbGRgIGFycmF5IChzZWUgdGhlIHZhcmlvdXMgYG9Gcm9tUG9vbGAgZGVmaW5pdGlvbnMpLiBUaGF0IGluZm9ybWF0aW9uIGlzIGltcG9ydGFudFxuXHQvLyBpbiB0aHJlZSBjaXJjdW1zdGFuY2VzOlxuXHQvLyAtIElmIHRoZSBvbGQgYW5kIHRoZSBuZXcgdm5vZGVzIGFyZSB0aGUgc2FtZSBvYmplY3QgKGA9PT1gKSwgZGlmZiBpcyBub3QgcGVyZm9ybWVkIHVubGVzc1xuXHQvLyAgIHRoZSBvbGQgbm9kZSBjb21lcyBmcm9tIHRoZSBwb29sIChzaW5jZSBpdCBtdXN0IGJlIHJlY3ljbGVkL3JlLWNyZWF0ZWQpLlxuXHQvLyAtIFRoZSB2YWx1ZSBvZiBgb0Zyb21Qb29sYCBpcyBwYXNzZWQgYXMgdGhlIGByZWN5Y2xpbmdgIHBhcmFtZXRlciBvZiBgdXBkYXRlTm9kZSgpYCAod2hldGhlclxuXHQvLyAgIHRoZSBwYXJlbnQgaXMgYmVpbmcgcmVjeWNsZWQgaXMgYWxzbyBmYWN0cmVkIGluIGhlcmUpXG5cdC8vIC0gSXQgaXMgdXNlZCBpbiB0aGUgRE9NIG5vZGUgaW5zZXJ0aW9uIGxvZ2ljIChzZWUgYmVsb3cpXG5cdC8vXG5cdC8vIEF0IHRoZSB2ZXJ5IGVuZCBvZiBgdXBkYXRlTm9kZXMoKWAsIHRoZSBub2RlcyBpbiB0aGUgcG9vbCB0aGF0IGhhdmVuJ3QgYmVlbiBwaWNrZWQgYmFja1xuXHQvLyBhcmUgcHV0IGluIHRoZSBuZXcgcG9vbCBmb3IgdGhlIG5leHQgcmVuZGVyIHBoYXNlLlxuXHQvL1xuXHQvLyBUaGUgcG9vbCBlbGlnaWJpbGl0eSBhbmQgYGlzUmVjeWNsYWJsZSgpYCBjcml0ZXJpYSBhcmUgdG8gYmUgdXBkYXRlZCBhcyBwYXJ0IG9mICMxNjc1LlxuXG5cdC8vICMjIERPTSBub2RlIG9wZXJhdGlvbnNcblx0Ly9cblx0Ly8gSW4gbW9zdCBjYXNlcyBgdXBkYXRlTm9kZSgpYCBhbmQgYGNyZWF0ZU5vZGUoKWAgcGVyZm9ybSB0aGUgRE9NIG9wZXJhdGlvbnMuIEhvd2V2ZXIsXG5cdC8vIHRoaXMgaXMgbm90IHRoZSBjYXNlIGlmIHRoZSBub2RlIG1vdmVkIChzZWNvbmQgYW5kIGZvdXJ0aCBwYXJ0IG9mIHRoZSBkaWZmIGFsZ28pLCBvclxuXHQvLyBpZiB0aGUgbm9kZSB3YXMgYnJvdWdoIGJhY2sgZnJvbSB0aGUgcG9vbCBhbmQgYm90aCB0aGUgb2xkIGFuZCBuZXcgbm9kZXMgaGF2ZSB0aGUgc2FtZVxuXHQvLyBgLnRhZ2AgdmFsdWUgKHdoZW4gdGhlIGAudGFnYCBkaWZmZXIsIGB1cGRhdGVOb2RlKClgIGRvZXMgdGhlIGluc2VydGlvbikuXG5cdC8vXG5cdC8vIFRoZSBmb3VydGggcGFydCBvZiB0aGUgZGlmZiBjdXJyZW50bHkgaW5zZXJ0cyBub2RlcyB1bmNvbmRpdGlvbmFsbHksIGxlYWRpbmcgdG8gaXNzdWVzXG5cdC8vIGxpa2UgIzE3OTEgYW5kICMxOTk5LiBXZSBuZWVkIHRvIGJlIHNtYXJ0ZXIgYWJvdXQgdGhvc2Ugc2l0dWF0aW9ucyB3aGVyZSBhZGphc2NlbnQgb2xkXG5cdC8vIG5vZGVzIHJlbWFpbiB0b2dldGhlciBpbiB0aGUgbmV3IGxpc3QgaW4gYSB3YXkgdGhhdCBpc24ndCBjb3ZlcmVkIGJ5IHBhcnRzIG9uZSBhbmRcblx0Ly8gdGhyZWUgb2YgdGhlIGRpZmYgYWxnby5cblxuXHRmdW5jdGlvbiB1cGRhdGVOb2RlcyhwYXJlbnQsIG9sZCwgdm5vZGVzLCByZWN5Y2xpbmdQYXJlbnQsIGhvb2tzLCBuZXh0U2libGluZywgbnMpIHtcblx0XHRpZiAob2xkID09PSB2bm9kZXMgJiYgIXJlY3ljbGluZ1BhcmVudCB8fCBvbGQgPT0gbnVsbCAmJiB2bm9kZXMgPT0gbnVsbCkgcmV0dXJuXG5cdFx0ZWxzZSBpZiAob2xkID09IG51bGwpIGNyZWF0ZU5vZGVzKHBhcmVudCwgdm5vZGVzLCAwLCB2bm9kZXMubGVuZ3RoLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdGVsc2UgaWYgKHZub2RlcyA9PSBudWxsKSByZW1vdmVOb2RlcyhvbGQsIDAsIG9sZC5sZW5ndGgsIHZub2RlcywgcmVjeWNsaW5nUGFyZW50KVxuXHRcdGVsc2Uge1xuXHRcdFx0dmFyIHN0YXJ0ID0gMCwgY29tbW9uTGVuZ3RoID0gTWF0aC5taW4ob2xkLmxlbmd0aCwgdm5vZGVzLmxlbmd0aCksIG9yaWdpbmFsT2xkTGVuZ3RoID0gb2xkLmxlbmd0aCwgaGFzUG9vbCA9IGZhbHNlLCBpc1Vua2V5ZWQgPSBmYWxzZVxuXHRcdFx0Zm9yKDsgc3RhcnQgPCBjb21tb25MZW5ndGg7IHN0YXJ0KyspIHtcblx0XHRcdFx0aWYgKG9sZFtzdGFydF0gIT0gbnVsbCAmJiB2bm9kZXNbc3RhcnRdICE9IG51bGwpIHtcblx0XHRcdFx0XHRpZiAob2xkW3N0YXJ0XS5rZXkgPT0gbnVsbCAmJiB2bm9kZXNbc3RhcnRdLmtleSA9PSBudWxsKSBpc1Vua2V5ZWQgPSB0cnVlXG5cdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGlzVW5rZXllZCAmJiBvcmlnaW5hbE9sZExlbmd0aCA9PT0gdm5vZGVzLmxlbmd0aCkge1xuXHRcdFx0XHRmb3IgKHN0YXJ0ID0gMDsgc3RhcnQgPCBvcmlnaW5hbE9sZExlbmd0aDsgc3RhcnQrKykge1xuXHRcdFx0XHRcdGlmIChvbGRbc3RhcnRdID09PSB2bm9kZXNbc3RhcnRdICYmICFyZWN5Y2xpbmdQYXJlbnQgfHwgb2xkW3N0YXJ0XSA9PSBudWxsICYmIHZub2Rlc1tzdGFydF0gPT0gbnVsbCkgY29udGludWVcblx0XHRcdFx0XHRlbHNlIGlmIChvbGRbc3RhcnRdID09IG51bGwpIGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZXNbc3RhcnRdLCBob29rcywgbnMsIGdldE5leHRTaWJsaW5nKG9sZCwgc3RhcnQgKyAxLCBvcmlnaW5hbE9sZExlbmd0aCwgbmV4dFNpYmxpbmcpKVxuXHRcdFx0XHRcdGVsc2UgaWYgKHZub2Rlc1tzdGFydF0gPT0gbnVsbCkgcmVtb3ZlTm9kZXMob2xkLCBzdGFydCwgc3RhcnQgKyAxLCB2bm9kZXMsIHJlY3ljbGluZ1BhcmVudClcblx0XHRcdFx0XHRlbHNlIHVwZGF0ZU5vZGUocGFyZW50LCBvbGRbc3RhcnRdLCB2bm9kZXNbc3RhcnRdLCBob29rcywgZ2V0TmV4dFNpYmxpbmcob2xkLCBzdGFydCArIDEsIG9yaWdpbmFsT2xkTGVuZ3RoLCBuZXh0U2libGluZyksIHJlY3ljbGluZ1BhcmVudCwgbnMpXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc1JlY3ljbGFibGUob2xkLCB2bm9kZXMpKSB7XG5cdFx0XHRcdGhhc1Bvb2wgPSB0cnVlXG5cdFx0XHRcdG9sZCA9IG9sZC5jb25jYXQob2xkLnBvb2wpXG5cdFx0XHR9XG5cblx0XHRcdHZhciBvbGRTdGFydCA9IHN0YXJ0ID0gMCwgb2xkRW5kID0gb2xkLmxlbmd0aCAtIDEsIGVuZCA9IHZub2Rlcy5sZW5ndGggLSAxLCBtYXAsIG8sIHYsIG9Gcm9tUG9vbFxuXG5cdFx0XHR3aGlsZSAob2xkRW5kID49IG9sZFN0YXJ0ICYmIGVuZCA+PSBzdGFydCkge1xuXHRcdFx0XHRvID0gb2xkW29sZFN0YXJ0XVxuXHRcdFx0XHR2ID0gdm5vZGVzW3N0YXJ0XVxuXHRcdFx0XHRvRnJvbVBvb2wgPSBoYXNQb29sICYmIG9sZFN0YXJ0ID49IG9yaWdpbmFsT2xkTGVuZ3RoXG5cdFx0XHRcdGlmIChvID09PSB2ICYmICFvRnJvbVBvb2wgJiYgIXJlY3ljbGluZ1BhcmVudCB8fCBvID09IG51bGwgJiYgdiA9PSBudWxsKSBvbGRTdGFydCsrLCBzdGFydCsrXG5cdFx0XHRcdGVsc2UgaWYgKG8gPT0gbnVsbCkge1xuXHRcdFx0XHRcdGlmIChpc1Vua2V5ZWQgfHwgdi5rZXkgPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y3JlYXRlTm9kZShwYXJlbnQsIHZub2Rlc1tzdGFydF0sIGhvb2tzLCBucywgZ2V0TmV4dFNpYmxpbmcob2xkLCArK3N0YXJ0LCBvcmlnaW5hbE9sZExlbmd0aCwgbmV4dFNpYmxpbmcpKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRvbGRTdGFydCsrXG5cdFx0XHRcdH0gZWxzZSBpZiAodiA9PSBudWxsKSB7XG5cdFx0XHRcdFx0aWYgKGlzVW5rZXllZCB8fCBvLmtleSA9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRyZW1vdmVOb2RlcyhvbGQsIHN0YXJ0LCBzdGFydCArIDEsIHZub2RlcywgcmVjeWNsaW5nUGFyZW50KVxuXHRcdFx0XHRcdFx0b2xkU3RhcnQrK1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzdGFydCsrXG5cdFx0XHRcdH0gZWxzZSBpZiAoby5rZXkgPT09IHYua2V5KSB7XG5cdFx0XHRcdFx0b2xkU3RhcnQrKywgc3RhcnQrK1xuXHRcdFx0XHRcdHVwZGF0ZU5vZGUocGFyZW50LCBvLCB2LCBob29rcywgZ2V0TmV4dFNpYmxpbmcob2xkLCBvbGRTdGFydCwgb3JpZ2luYWxPbGRMZW5ndGgsIG5leHRTaWJsaW5nKSwgb0Zyb21Qb29sIHx8IHJlY3ljbGluZ1BhcmVudCwgbnMpXG5cdFx0XHRcdFx0aWYgKG9Gcm9tUG9vbCAmJiBvLnRhZyA9PT0gdi50YWcpIGluc2VydE5vZGUocGFyZW50LCB0b0ZyYWdtZW50KHYpLCBuZXh0U2libGluZylcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRvID0gb2xkW29sZEVuZF1cblx0XHRcdFx0XHRvRnJvbVBvb2wgPSBoYXNQb29sICYmIG9sZEVuZCA+PSBvcmlnaW5hbE9sZExlbmd0aFxuXHRcdFx0XHRcdGlmIChvID09PSB2ICYmICFvRnJvbVBvb2wgJiYgIXJlY3ljbGluZ1BhcmVudCkgb2xkRW5kLS0sIHN0YXJ0Kytcblx0XHRcdFx0XHRlbHNlIGlmIChvID09IG51bGwpIG9sZEVuZC0tXG5cdFx0XHRcdFx0ZWxzZSBpZiAodiA9PSBudWxsKSBzdGFydCsrXG5cdFx0XHRcdFx0ZWxzZSBpZiAoby5rZXkgPT09IHYua2V5KSB7XG5cdFx0XHRcdFx0XHR1cGRhdGVOb2RlKHBhcmVudCwgbywgdiwgaG9va3MsIGdldE5leHRTaWJsaW5nKG9sZCwgb2xkRW5kICsgMSwgb3JpZ2luYWxPbGRMZW5ndGgsIG5leHRTaWJsaW5nKSwgb0Zyb21Qb29sIHx8IHJlY3ljbGluZ1BhcmVudCwgbnMpXG5cdFx0XHRcdFx0XHRpZiAob0Zyb21Qb29sICYmIG8udGFnID09PSB2LnRhZyB8fCBzdGFydCA8IGVuZCkgaW5zZXJ0Tm9kZShwYXJlbnQsIHRvRnJhZ21lbnQodiksIGdldE5leHRTaWJsaW5nKG9sZCwgb2xkU3RhcnQsIG9yaWdpbmFsT2xkTGVuZ3RoLCBuZXh0U2libGluZykpXG5cdFx0XHRcdFx0XHRvbGRFbmQtLSwgc3RhcnQrK1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGJyZWFrXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHdoaWxlIChvbGRFbmQgPj0gb2xkU3RhcnQgJiYgZW5kID49IHN0YXJ0KSB7XG5cdFx0XHRcdG8gPSBvbGRbb2xkRW5kXVxuXHRcdFx0XHR2ID0gdm5vZGVzW2VuZF1cblx0XHRcdFx0b0Zyb21Qb29sID0gaGFzUG9vbCAmJiBvbGRFbmQgPj0gb3JpZ2luYWxPbGRMZW5ndGhcblx0XHRcdFx0aWYgKG8gPT09IHYgJiYgIW9Gcm9tUG9vbCAmJiAhcmVjeWNsaW5nUGFyZW50KSBvbGRFbmQtLSwgZW5kLS1cblx0XHRcdFx0ZWxzZSBpZiAobyA9PSBudWxsKSBvbGRFbmQtLVxuXHRcdFx0XHRlbHNlIGlmICh2ID09IG51bGwpIGVuZC0tXG5cdFx0XHRcdGVsc2UgaWYgKG8ua2V5ID09PSB2LmtleSkge1xuXHRcdFx0XHRcdHVwZGF0ZU5vZGUocGFyZW50LCBvLCB2LCBob29rcywgZ2V0TmV4dFNpYmxpbmcob2xkLCBvbGRFbmQgKyAxLCBvcmlnaW5hbE9sZExlbmd0aCwgbmV4dFNpYmxpbmcpLCBvRnJvbVBvb2wgfHwgcmVjeWNsaW5nUGFyZW50LCBucylcblx0XHRcdFx0XHRpZiAob0Zyb21Qb29sICYmIG8udGFnID09PSB2LnRhZykgaW5zZXJ0Tm9kZShwYXJlbnQsIHRvRnJhZ21lbnQodiksIG5leHRTaWJsaW5nKVxuXHRcdFx0XHRcdGlmIChvLmRvbSAhPSBudWxsKSBuZXh0U2libGluZyA9IG8uZG9tXG5cdFx0XHRcdFx0b2xkRW5kLS0sIGVuZC0tXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKCFtYXApIG1hcCA9IGdldEtleU1hcChvbGQsIG9sZEVuZClcblx0XHRcdFx0XHRpZiAodiAhPSBudWxsKSB7XG5cdFx0XHRcdFx0XHR2YXIgb2xkSW5kZXggPSBtYXBbdi5rZXldXG5cdFx0XHRcdFx0XHRpZiAob2xkSW5kZXggIT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRvID0gb2xkW29sZEluZGV4XVxuXHRcdFx0XHRcdFx0XHRvRnJvbVBvb2wgPSBoYXNQb29sICYmIG9sZEluZGV4ID49IG9yaWdpbmFsT2xkTGVuZ3RoXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZU5vZGUocGFyZW50LCBvLCB2LCBob29rcywgZ2V0TmV4dFNpYmxpbmcob2xkLCBvbGRFbmQgKyAxLCBvcmlnaW5hbE9sZExlbmd0aCwgbmV4dFNpYmxpbmcpLCBvRnJvbVBvb2wgfHwgcmVjeWNsaW5nUGFyZW50LCBucylcblx0XHRcdFx0XHRcdFx0aW5zZXJ0Tm9kZShwYXJlbnQsIHRvRnJhZ21lbnQodiksIG5leHRTaWJsaW5nKVxuXHRcdFx0XHRcdFx0XHRvLnNraXAgPSB0cnVlXG5cdFx0XHRcdFx0XHRcdGlmIChvLmRvbSAhPSBudWxsKSBuZXh0U2libGluZyA9IG8uZG9tXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgZG9tID0gY3JlYXRlTm9kZShwYXJlbnQsIHYsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0XHRcdG5leHRTaWJsaW5nID0gZG9tXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVuZC0tXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVuZCA8IHN0YXJ0KSBicmVha1xuXHRcdFx0fVxuXHRcdFx0Y3JlYXRlTm9kZXMocGFyZW50LCB2bm9kZXMsIHN0YXJ0LCBlbmQgKyAxLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdFx0cmVtb3ZlTm9kZXMob2xkLCBvbGRTdGFydCwgTWF0aC5taW4ob2xkRW5kICsgMSwgb3JpZ2luYWxPbGRMZW5ndGgpLCB2bm9kZXMsIHJlY3ljbGluZ1BhcmVudClcblx0XHRcdGlmIChoYXNQb29sKSB7XG5cdFx0XHRcdHZhciBsaW1pdCA9IE1hdGgubWF4KG9sZFN0YXJ0LCBvcmlnaW5hbE9sZExlbmd0aClcblx0XHRcdFx0Zm9yICg7IG9sZEVuZCA+PSBsaW1pdDsgb2xkRW5kLS0pIHtcblx0XHRcdFx0XHRpZiAob2xkW29sZEVuZF0uc2tpcCkgb2xkW29sZEVuZF0uc2tpcCA9IGZhbHNlXG5cdFx0XHRcdFx0ZWxzZSBhZGRUb1Bvb2wob2xkW29sZEVuZF0sIHZub2Rlcylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvLyB3aGVuIHJlY3ljbGluZywgd2UncmUgcmUtdXNpbmcgYW4gb2xkIERPTSBub2RlLCBidXQgZmlyaW5nIHRoZSBvbmluaXQvb25jcmVhdGUgaG9va3Ncblx0Ly8gaW5zdGVhZCBvZiBvbmJlZm9yZXVwZGF0ZS9vbnVwZGF0ZS5cblx0ZnVuY3Rpb24gdXBkYXRlTm9kZShwYXJlbnQsIG9sZCwgdm5vZGUsIGhvb2tzLCBuZXh0U2libGluZywgcmVjeWNsaW5nLCBucykge1xuXHRcdHZhciBvbGRUYWcgPSBvbGQudGFnLCB0YWcgPSB2bm9kZS50YWdcblx0XHRpZiAob2xkVGFnID09PSB0YWcpIHtcblx0XHRcdHZub2RlLnN0YXRlID0gb2xkLnN0YXRlXG5cdFx0XHR2bm9kZS5ldmVudHMgPSBvbGQuZXZlbnRzXG5cdFx0XHRpZiAoIXJlY3ljbGluZyAmJiBzaG91bGROb3RVcGRhdGUodm5vZGUsIG9sZCkpIHJldHVyblxuXHRcdFx0aWYgKHR5cGVvZiBvbGRUYWcgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwpIHtcblx0XHRcdFx0XHRpZiAocmVjeWNsaW5nKSB7XG5cdFx0XHRcdFx0XHR2bm9kZS5zdGF0ZSA9IHt9XG5cdFx0XHRcdFx0XHRpbml0TGlmZWN5Y2xlKHZub2RlLmF0dHJzLCB2bm9kZSwgaG9va3MpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgdXBkYXRlTGlmZWN5Y2xlKHZub2RlLmF0dHJzLCB2bm9kZSwgaG9va3MpXG5cdFx0XHRcdH1cblx0XHRcdFx0c3dpdGNoIChvbGRUYWcpIHtcblx0XHRcdFx0XHRjYXNlIFwiI1wiOiB1cGRhdGVUZXh0KG9sZCwgdm5vZGUpOyBicmVha1xuXHRcdFx0XHRcdGNhc2UgXCI8XCI6IHVwZGF0ZUhUTUwocGFyZW50LCBvbGQsIHZub2RlLCBuZXh0U2libGluZyk7IGJyZWFrXG5cdFx0XHRcdFx0Y2FzZSBcIltcIjogdXBkYXRlRnJhZ21lbnQocGFyZW50LCBvbGQsIHZub2RlLCByZWN5Y2xpbmcsIGhvb2tzLCBuZXh0U2libGluZywgbnMpOyBicmVha1xuXHRcdFx0XHRcdGRlZmF1bHQ6IHVwZGF0ZUVsZW1lbnQob2xkLCB2bm9kZSwgcmVjeWNsaW5nLCBob29rcywgbnMpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2UgdXBkYXRlQ29tcG9uZW50KHBhcmVudCwgb2xkLCB2bm9kZSwgaG9va3MsIG5leHRTaWJsaW5nLCByZWN5Y2xpbmcsIG5zKVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJlbW92ZU5vZGUob2xkLCBudWxsLCByZWN5Y2xpbmcpXG5cdFx0XHRjcmVhdGVOb2RlKHBhcmVudCwgdm5vZGUsIGhvb2tzLCBucywgbmV4dFNpYmxpbmcpXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZVRleHQob2xkLCB2bm9kZSkge1xuXHRcdGlmIChvbGQuY2hpbGRyZW4udG9TdHJpbmcoKSAhPT0gdm5vZGUuY2hpbGRyZW4udG9TdHJpbmcoKSkge1xuXHRcdFx0b2xkLmRvbS5ub2RlVmFsdWUgPSB2bm9kZS5jaGlsZHJlblxuXHRcdH1cblx0XHR2bm9kZS5kb20gPSBvbGQuZG9tXG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlSFRNTChwYXJlbnQsIG9sZCwgdm5vZGUsIG5leHRTaWJsaW5nKSB7XG5cdFx0aWYgKG9sZC5jaGlsZHJlbiAhPT0gdm5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdHRvRnJhZ21lbnQob2xkKVxuXHRcdFx0Y3JlYXRlSFRNTChwYXJlbnQsIHZub2RlLCBuZXh0U2libGluZylcblx0XHR9XG5cdFx0ZWxzZSB2bm9kZS5kb20gPSBvbGQuZG9tLCB2bm9kZS5kb21TaXplID0gb2xkLmRvbVNpemVcblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVGcmFnbWVudChwYXJlbnQsIG9sZCwgdm5vZGUsIHJlY3ljbGluZywgaG9va3MsIG5leHRTaWJsaW5nLCBucykge1xuXHRcdHVwZGF0ZU5vZGVzKHBhcmVudCwgb2xkLmNoaWxkcmVuLCB2bm9kZS5jaGlsZHJlbiwgcmVjeWNsaW5nLCBob29rcywgbmV4dFNpYmxpbmcsIG5zKVxuXHRcdHZhciBkb21TaXplID0gMCwgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXHRcdHZub2RlLmRvbSA9IG51bGxcblx0XHRpZiAoY2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuXHRcdFx0XHRpZiAoY2hpbGQgIT0gbnVsbCAmJiBjaGlsZC5kb20gIT0gbnVsbCkge1xuXHRcdFx0XHRcdGlmICh2bm9kZS5kb20gPT0gbnVsbCkgdm5vZGUuZG9tID0gY2hpbGQuZG9tXG5cdFx0XHRcdFx0ZG9tU2l6ZSArPSBjaGlsZC5kb21TaXplIHx8IDFcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRvbVNpemUgIT09IDEpIHZub2RlLmRvbVNpemUgPSBkb21TaXplXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQob2xkLCB2bm9kZSwgcmVjeWNsaW5nLCBob29rcywgbnMpIHtcblx0XHR2YXIgZWxlbWVudCA9IHZub2RlLmRvbSA9IG9sZC5kb21cblx0XHRucyA9IGdldE5hbWVTcGFjZSh2bm9kZSkgfHwgbnNcblxuXHRcdGlmICh2bm9kZS50YWcgPT09IFwidGV4dGFyZWFcIikge1xuXHRcdFx0aWYgKHZub2RlLmF0dHJzID09IG51bGwpIHZub2RlLmF0dHJzID0ge31cblx0XHRcdGlmICh2bm9kZS50ZXh0ICE9IG51bGwpIHtcblx0XHRcdFx0dm5vZGUuYXR0cnMudmFsdWUgPSB2bm9kZS50ZXh0IC8vRklYTUUgaGFuZGxlIG11bHRpcGxlIGNoaWxkcmVuXG5cdFx0XHRcdHZub2RlLnRleHQgPSB1bmRlZmluZWRcblx0XHRcdH1cblx0XHR9XG5cdFx0dXBkYXRlQXR0cnModm5vZGUsIG9sZC5hdHRycywgdm5vZGUuYXR0cnMsIG5zKVxuXHRcdGlmICh2bm9kZS5hdHRycyAhPSBudWxsICYmIHZub2RlLmF0dHJzLmNvbnRlbnRlZGl0YWJsZSAhPSBudWxsKSB7XG5cdFx0XHRzZXRDb250ZW50RWRpdGFibGUodm5vZGUpXG5cdFx0fVxuXHRcdGVsc2UgaWYgKG9sZC50ZXh0ICE9IG51bGwgJiYgdm5vZGUudGV4dCAhPSBudWxsICYmIHZub2RlLnRleHQgIT09IFwiXCIpIHtcblx0XHRcdGlmIChvbGQudGV4dC50b1N0cmluZygpICE9PSB2bm9kZS50ZXh0LnRvU3RyaW5nKCkpIG9sZC5kb20uZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSB2bm9kZS50ZXh0XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKG9sZC50ZXh0ICE9IG51bGwpIG9sZC5jaGlsZHJlbiA9IFtWbm9kZShcIiNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG9sZC50ZXh0LCB1bmRlZmluZWQsIG9sZC5kb20uZmlyc3RDaGlsZCldXG5cdFx0XHRpZiAodm5vZGUudGV4dCAhPSBudWxsKSB2bm9kZS5jaGlsZHJlbiA9IFtWbm9kZShcIiNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHZub2RlLnRleHQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKV1cblx0XHRcdHVwZGF0ZU5vZGVzKGVsZW1lbnQsIG9sZC5jaGlsZHJlbiwgdm5vZGUuY2hpbGRyZW4sIHJlY3ljbGluZywgaG9va3MsIG51bGwsIG5zKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVDb21wb25lbnQocGFyZW50LCBvbGQsIHZub2RlLCBob29rcywgbmV4dFNpYmxpbmcsIHJlY3ljbGluZywgbnMpIHtcblx0XHRpZiAocmVjeWNsaW5nKSB7XG5cdFx0XHRpbml0Q29tcG9uZW50KHZub2RlLCBob29rcylcblx0XHR9IGVsc2Uge1xuXHRcdFx0dm5vZGUuaW5zdGFuY2UgPSBWbm9kZS5ub3JtYWxpemUoY2FsbEhvb2suY2FsbCh2bm9kZS5zdGF0ZS52aWV3LCB2bm9kZSkpXG5cdFx0XHRpZiAodm5vZGUuaW5zdGFuY2UgPT09IHZub2RlKSB0aHJvdyBFcnJvcihcIkEgdmlldyBjYW5ub3QgcmV0dXJuIHRoZSB2bm9kZSBpdCByZWNlaXZlZCBhcyBhcmd1bWVudFwiKVxuXHRcdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwpIHVwZGF0ZUxpZmVjeWNsZSh2bm9kZS5hdHRycywgdm5vZGUsIGhvb2tzKVxuXHRcdFx0dXBkYXRlTGlmZWN5Y2xlKHZub2RlLnN0YXRlLCB2bm9kZSwgaG9va3MpXG5cdFx0fVxuXHRcdGlmICh2bm9kZS5pbnN0YW5jZSAhPSBudWxsKSB7XG5cdFx0XHRpZiAob2xkLmluc3RhbmNlID09IG51bGwpIGNyZWF0ZU5vZGUocGFyZW50LCB2bm9kZS5pbnN0YW5jZSwgaG9va3MsIG5zLCBuZXh0U2libGluZylcblx0XHRcdGVsc2UgdXBkYXRlTm9kZShwYXJlbnQsIG9sZC5pbnN0YW5jZSwgdm5vZGUuaW5zdGFuY2UsIGhvb2tzLCBuZXh0U2libGluZywgcmVjeWNsaW5nLCBucylcblx0XHRcdHZub2RlLmRvbSA9IHZub2RlLmluc3RhbmNlLmRvbVxuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IHZub2RlLmluc3RhbmNlLmRvbVNpemVcblx0XHR9XG5cdFx0ZWxzZSBpZiAob2xkLmluc3RhbmNlICE9IG51bGwpIHtcblx0XHRcdHJlbW92ZU5vZGUob2xkLmluc3RhbmNlLCBudWxsLCByZWN5Y2xpbmcpXG5cdFx0XHR2bm9kZS5kb20gPSB1bmRlZmluZWRcblx0XHRcdHZub2RlLmRvbVNpemUgPSAwXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dm5vZGUuZG9tID0gb2xkLmRvbVxuXHRcdFx0dm5vZGUuZG9tU2l6ZSA9IG9sZC5kb21TaXplXG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGlzUmVjeWNsYWJsZShvbGQsIHZub2Rlcykge1xuXHRcdGlmIChvbGQucG9vbCAhPSBudWxsICYmIE1hdGguYWJzKG9sZC5wb29sLmxlbmd0aCAtIHZub2Rlcy5sZW5ndGgpIDw9IE1hdGguYWJzKG9sZC5sZW5ndGggLSB2bm9kZXMubGVuZ3RoKSkge1xuXHRcdFx0dmFyIG9sZENoaWxkcmVuTGVuZ3RoID0gb2xkWzBdICYmIG9sZFswXS5jaGlsZHJlbiAmJiBvbGRbMF0uY2hpbGRyZW4ubGVuZ3RoIHx8IDBcblx0XHRcdHZhciBwb29sQ2hpbGRyZW5MZW5ndGggPSBvbGQucG9vbFswXSAmJiBvbGQucG9vbFswXS5jaGlsZHJlbiAmJiBvbGQucG9vbFswXS5jaGlsZHJlbi5sZW5ndGggfHwgMFxuXHRcdFx0dmFyIHZub2Rlc0NoaWxkcmVuTGVuZ3RoID0gdm5vZGVzWzBdICYmIHZub2Rlc1swXS5jaGlsZHJlbiAmJiB2bm9kZXNbMF0uY2hpbGRyZW4ubGVuZ3RoIHx8IDBcblx0XHRcdGlmIChNYXRoLmFicyhwb29sQ2hpbGRyZW5MZW5ndGggLSB2bm9kZXNDaGlsZHJlbkxlbmd0aCkgPD0gTWF0aC5hYnMob2xkQ2hpbGRyZW5MZW5ndGggLSB2bm9kZXNDaGlsZHJlbkxlbmd0aCkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWVcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlXG5cdH1cblx0ZnVuY3Rpb24gZ2V0S2V5TWFwKHZub2RlcywgZW5kKSB7XG5cdFx0dmFyIG1hcCA9IHt9LCBpID0gMFxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZW5kOyBpKyspIHtcblx0XHRcdHZhciB2bm9kZSA9IHZub2Rlc1tpXVxuXHRcdFx0aWYgKHZub2RlICE9IG51bGwpIHtcblx0XHRcdFx0dmFyIGtleSA9IHZub2RlLmtleVxuXHRcdFx0XHRpZiAoa2V5ICE9IG51bGwpIG1hcFtrZXldID0gaVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbWFwXG5cdH1cblx0ZnVuY3Rpb24gdG9GcmFnbWVudCh2bm9kZSkge1xuXHRcdHZhciBjb3VudCA9IHZub2RlLmRvbVNpemVcblx0XHRpZiAoY291bnQgIT0gbnVsbCB8fCB2bm9kZS5kb20gPT0gbnVsbCkge1xuXHRcdFx0dmFyIGZyYWdtZW50ID0gJGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcblx0XHRcdGlmIChjb3VudCA+IDApIHtcblx0XHRcdFx0dmFyIGRvbSA9IHZub2RlLmRvbVxuXHRcdFx0XHR3aGlsZSAoLS1jb3VudCkgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZG9tLm5leHRTaWJsaW5nKVxuXHRcdFx0XHRmcmFnbWVudC5pbnNlcnRCZWZvcmUoZG9tLCBmcmFnbWVudC5maXJzdENoaWxkKVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZyYWdtZW50XG5cdFx0fVxuXHRcdGVsc2UgcmV0dXJuIHZub2RlLmRvbVxuXHR9XG5cdC8vIHRoZSB2bm9kZXMgYXJyYXkgbWF5IGhvbGQgaXRlbXMgdGhhdCBjb21lIGZyb20gdGhlIHBvb2wgKGFmdGVyIGBsaW1pdGApIHRoZXkgc2hvdWxkXG5cdC8vIGJlIGlnbm9yZWRcblx0ZnVuY3Rpb24gZ2V0TmV4dFNpYmxpbmcodm5vZGVzLCBpLCBsaW1pdCwgbmV4dFNpYmxpbmcpIHtcblx0XHRmb3IgKDsgaSA8IGxpbWl0OyBpKyspIHtcblx0XHRcdGlmICh2bm9kZXNbaV0gIT0gbnVsbCAmJiB2bm9kZXNbaV0uZG9tICE9IG51bGwpIHJldHVybiB2bm9kZXNbaV0uZG9tXG5cdFx0fVxuXHRcdHJldHVybiBuZXh0U2libGluZ1xuXHR9XG5cblx0ZnVuY3Rpb24gaW5zZXJ0Tm9kZShwYXJlbnQsIGRvbSwgbmV4dFNpYmxpbmcpIHtcblx0XHRpZiAobmV4dFNpYmxpbmcpIHBhcmVudC5pbnNlcnRCZWZvcmUoZG9tLCBuZXh0U2libGluZylcblx0XHRlbHNlIHBhcmVudC5hcHBlbmRDaGlsZChkb20pXG5cdH1cblxuXHRmdW5jdGlvbiBzZXRDb250ZW50RWRpdGFibGUodm5vZGUpIHtcblx0XHR2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXHRcdGlmIChjaGlsZHJlbiAhPSBudWxsICYmIGNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiBjaGlsZHJlblswXS50YWcgPT09IFwiPFwiKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNoaWxkcmVuWzBdLmNoaWxkcmVuXG5cdFx0XHRpZiAodm5vZGUuZG9tLmlubmVySFRNTCAhPT0gY29udGVudCkgdm5vZGUuZG9tLmlubmVySFRNTCA9IGNvbnRlbnRcblx0XHR9XG5cdFx0ZWxzZSBpZiAodm5vZGUudGV4dCAhPSBudWxsIHx8IGNoaWxkcmVuICE9IG51bGwgJiYgY2hpbGRyZW4ubGVuZ3RoICE9PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJDaGlsZCBub2RlIG9mIGEgY29udGVudGVkaXRhYmxlIG11c3QgYmUgdHJ1c3RlZFwiKVxuXHR9XG5cblx0Ly9yZW1vdmVcblx0ZnVuY3Rpb24gcmVtb3ZlTm9kZXModm5vZGVzLCBzdGFydCwgZW5kLCBjb250ZXh0LCByZWN5Y2xpbmcpIHtcblx0XHRmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuXHRcdFx0dmFyIHZub2RlID0gdm5vZGVzW2ldXG5cdFx0XHRpZiAodm5vZGUgIT0gbnVsbCkge1xuXHRcdFx0XHRpZiAodm5vZGUuc2tpcCkgdm5vZGUuc2tpcCA9IGZhbHNlXG5cdFx0XHRcdGVsc2UgcmVtb3ZlTm9kZSh2bm9kZSwgY29udGV4dCwgcmVjeWNsaW5nKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvLyB3aGVuIGEgbm9kZSBpcyByZW1vdmVkIGZyb20gYSBwYXJlbnQgdGhhdCdzIGJyb3VnaHQgYmFjayBmcm9tIHRoZSBwb29sLCBpdHMgaG9va3Mgc2hvdWxkXG5cdC8vIG5vdCBmaXJlLlxuXHRmdW5jdGlvbiByZW1vdmVOb2RlKHZub2RlLCBjb250ZXh0LCByZWN5Y2xpbmcpIHtcblx0XHR2YXIgZXhwZWN0ZWQgPSAxLCBjYWxsZWQgPSAwXG5cdFx0aWYgKCFyZWN5Y2xpbmcpIHtcblx0XHRcdHZhciBvcmlnaW5hbCA9IHZub2RlLnN0YXRlXG5cdFx0XHRpZiAodm5vZGUuYXR0cnMgJiYgdHlwZW9mIHZub2RlLmF0dHJzLm9uYmVmb3JlcmVtb3ZlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IGNhbGxIb29rLmNhbGwodm5vZGUuYXR0cnMub25iZWZvcmVyZW1vdmUsIHZub2RlKVxuXHRcdFx0XHRpZiAocmVzdWx0ICE9IG51bGwgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRleHBlY3RlZCsrXG5cdFx0XHRcdFx0cmVzdWx0LnRoZW4oY29udGludWF0aW9uLCBjb250aW51YXRpb24pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnICE9PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2bm9kZS5zdGF0ZS5vbmJlZm9yZXJlbW92ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHZhciByZXN1bHQgPSBjYWxsSG9vay5jYWxsKHZub2RlLnN0YXRlLm9uYmVmb3JlcmVtb3ZlLCB2bm9kZSlcblx0XHRcdFx0aWYgKHJlc3VsdCAhPSBudWxsICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0ZXhwZWN0ZWQrK1xuXHRcdFx0XHRcdHJlc3VsdC50aGVuKGNvbnRpbnVhdGlvbiwgY29udGludWF0aW9uKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnRpbnVhdGlvbigpXG5cdFx0ZnVuY3Rpb24gY29udGludWF0aW9uKCkge1xuXHRcdFx0aWYgKCsrY2FsbGVkID09PSBleHBlY3RlZCkge1xuXHRcdFx0XHRpZiAoIXJlY3ljbGluZykge1xuXHRcdFx0XHRcdGNoZWNrU3RhdGUodm5vZGUsIG9yaWdpbmFsKVxuXHRcdFx0XHRcdG9ucmVtb3ZlKHZub2RlKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh2bm9kZS5kb20pIHtcblx0XHRcdFx0XHR2YXIgY291bnQgPSB2bm9kZS5kb21TaXplIHx8IDFcblx0XHRcdFx0XHRpZiAoY291bnQgPiAxKSB7XG5cdFx0XHRcdFx0XHR2YXIgZG9tID0gdm5vZGUuZG9tXG5cdFx0XHRcdFx0XHR3aGlsZSAoLS1jb3VudCkge1xuXHRcdFx0XHRcdFx0XHRyZW1vdmVOb2RlRnJvbURPTShkb20ubmV4dFNpYmxpbmcpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlbW92ZU5vZGVGcm9tRE9NKHZub2RlLmRvbSlcblx0XHRcdFx0XHRhZGRUb1Bvb2wodm5vZGUsIGNvbnRleHQpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gcmVtb3ZlTm9kZUZyb21ET00obm9kZSkge1xuXHRcdHZhciBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGVcblx0XHRpZiAocGFyZW50ICE9IG51bGwpIHBhcmVudC5yZW1vdmVDaGlsZChub2RlKVxuXHR9XG5cdGZ1bmN0aW9uIGFkZFRvUG9vbCh2bm9kZSwgY29udGV4dCkge1xuXHRcdGlmIChjb250ZXh0ICE9IG51bGwgJiYgdm5vZGUuZG9tU2l6ZSA9PSBudWxsICYmICFoYXNJbnRlZ3JhdGlvbk1ldGhvZHModm5vZGUuYXR0cnMpICYmIHR5cGVvZiB2bm9kZS50YWcgPT09IFwic3RyaW5nXCIpIHsgLy9UT0RPIHRlc3QgY3VzdG9tIGVsZW1lbnRzXG5cdFx0XHRpZiAoIWNvbnRleHQucG9vbCkgY29udGV4dC5wb29sID0gW3Zub2RlXVxuXHRcdFx0ZWxzZSBjb250ZXh0LnBvb2wucHVzaCh2bm9kZSlcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gb25yZW1vdmUodm5vZGUpIHtcblx0XHRpZiAodm5vZGUuYXR0cnMgJiYgdHlwZW9mIHZub2RlLmF0dHJzLm9ucmVtb3ZlID09PSBcImZ1bmN0aW9uXCIpIGNhbGxIb29rLmNhbGwodm5vZGUuYXR0cnMub25yZW1vdmUsIHZub2RlKVxuXHRcdGlmICh0eXBlb2Ygdm5vZGUudGFnICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRpZiAodHlwZW9mIHZub2RlLnN0YXRlLm9ucmVtb3ZlID09PSBcImZ1bmN0aW9uXCIpIGNhbGxIb29rLmNhbGwodm5vZGUuc3RhdGUub25yZW1vdmUsIHZub2RlKVxuXHRcdFx0aWYgKHZub2RlLmluc3RhbmNlICE9IG51bGwpIG9ucmVtb3ZlKHZub2RlLmluc3RhbmNlKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgY2hpbGRyZW4gPSB2bm9kZS5jaGlsZHJlblxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSBjaGlsZHJlbltpXVxuXHRcdFx0XHRcdGlmIChjaGlsZCAhPSBudWxsKSBvbnJlbW92ZShjaGlsZClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vYXR0cnNcblx0ZnVuY3Rpb24gc2V0QXR0cnModm5vZGUsIGF0dHJzLCBucykge1xuXHRcdGZvciAodmFyIGtleSBpbiBhdHRycykge1xuXHRcdFx0c2V0QXR0cih2bm9kZSwga2V5LCBudWxsLCBhdHRyc1trZXldLCBucylcblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gc2V0QXR0cih2bm9kZSwga2V5LCBvbGQsIHZhbHVlLCBucykge1xuXHRcdGlmIChrZXkgPT09IFwia2V5XCIgfHwga2V5ID09PSBcImlzXCIgfHwgaXNMaWZlY3ljbGVNZXRob2Qoa2V5KSkgcmV0dXJuXG5cdFx0aWYgKGtleVswXSA9PT0gXCJvXCIgJiYga2V5WzFdID09PSBcIm5cIikgcmV0dXJuIHVwZGF0ZUV2ZW50KHZub2RlLCBrZXksIHZhbHVlKVxuXHRcdGlmICgob2xkID09PSB2YWx1ZSAmJiAhaXNGb3JtQXR0cmlidXRlKHZub2RlLCBrZXkpKSAmJiB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuXG5cdFx0dmFyIGVsZW1lbnQgPSB2bm9kZS5kb21cblx0XHRpZiAoa2V5LnNsaWNlKDAsIDYpID09PSBcInhsaW5rOlwiKSBlbGVtZW50LnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBrZXksIHZhbHVlKVxuXHRcdGVsc2UgaWYgKGtleSA9PT0gXCJzdHlsZVwiKSB1cGRhdGVTdHlsZShlbGVtZW50LCBvbGQsIHZhbHVlKVxuXHRcdGVsc2UgaWYgKGtleSBpbiBlbGVtZW50ICYmICFpc0F0dHJpYnV0ZShrZXkpICYmIG5zID09PSB1bmRlZmluZWQgJiYgIWlzQ3VzdG9tRWxlbWVudCh2bm9kZSkpIHtcblx0XHRcdGlmIChrZXkgPT09IFwidmFsdWVcIikge1xuXHRcdFx0XHR2YXIgbm9ybWFsaXplZCA9IFwiXCIgKyB2YWx1ZSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uXG5cdFx0XHRcdC8vc2V0dGluZyBpbnB1dFt2YWx1ZV0gdG8gc2FtZSB2YWx1ZSBieSB0eXBpbmcgb24gZm9jdXNlZCBlbGVtZW50IG1vdmVzIGN1cnNvciB0byBlbmQgaW4gQ2hyb21lXG5cdFx0XHRcdGlmICgodm5vZGUudGFnID09PSBcImlucHV0XCIgfHwgdm5vZGUudGFnID09PSBcInRleHRhcmVhXCIpICYmIHZub2RlLmRvbS52YWx1ZSA9PT0gbm9ybWFsaXplZCAmJiB2bm9kZS5kb20gPT09ICRkb2MuYWN0aXZlRWxlbWVudCkgcmV0dXJuXG5cdFx0XHRcdC8vc2V0dGluZyBzZWxlY3RbdmFsdWVdIHRvIHNhbWUgdmFsdWUgd2hpbGUgaGF2aW5nIHNlbGVjdCBvcGVuIGJsaW5rcyBzZWxlY3QgZHJvcGRvd24gaW4gQ2hyb21lXG5cdFx0XHRcdGlmICh2bm9kZS50YWcgPT09IFwic2VsZWN0XCIpIHtcblx0XHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGlmICh2bm9kZS5kb20uc2VsZWN0ZWRJbmRleCA9PT0gLTEgJiYgdm5vZGUuZG9tID09PSAkZG9jLmFjdGl2ZUVsZW1lbnQpIHJldHVyblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAob2xkICE9PSBudWxsICYmIHZub2RlLmRvbS52YWx1ZSA9PT0gbm9ybWFsaXplZCAmJiB2bm9kZS5kb20gPT09ICRkb2MuYWN0aXZlRWxlbWVudCkgcmV0dXJuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vc2V0dGluZyBvcHRpb25bdmFsdWVdIHRvIHNhbWUgdmFsdWUgd2hpbGUgaGF2aW5nIHNlbGVjdCBvcGVuIGJsaW5rcyBzZWxlY3QgZHJvcGRvd24gaW4gQ2hyb21lXG5cdFx0XHRcdGlmICh2bm9kZS50YWcgPT09IFwib3B0aW9uXCIgJiYgb2xkICE9IG51bGwgJiYgdm5vZGUuZG9tLnZhbHVlID09PSBub3JtYWxpemVkKSByZXR1cm5cblx0XHRcdH1cblx0XHRcdC8vIElmIHlvdSBhc3NpZ24gYW4gaW5wdXQgdHlwZSB0aGF0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUUgMTEgd2l0aCBhbiBhc3NpZ25tZW50IGV4cHJlc3Npb24sIGFuIGVycm9yIHdpbGwgb2NjdXIuXG5cdFx0XHRpZiAodm5vZGUudGFnID09PSBcImlucHV0XCIgJiYga2V5ID09PSBcInR5cGVcIikge1xuXHRcdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKVxuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHRcdGVsZW1lbnRba2V5XSA9IHZhbHVlXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcblx0XHRcdFx0aWYgKHZhbHVlKSBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIFwiXCIpXG5cdFx0XHRcdGVsc2UgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoa2V5KVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXkgPT09IFwiY2xhc3NOYW1lXCIgPyBcImNsYXNzXCIgOiBrZXksIHZhbHVlKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiBzZXRMYXRlQXR0cnModm5vZGUpIHtcblx0XHR2YXIgYXR0cnMgPSB2bm9kZS5hdHRyc1xuXHRcdGlmICh2bm9kZS50YWcgPT09IFwic2VsZWN0XCIgJiYgYXR0cnMgIT0gbnVsbCkge1xuXHRcdFx0aWYgKFwidmFsdWVcIiBpbiBhdHRycykgc2V0QXR0cih2bm9kZSwgXCJ2YWx1ZVwiLCBudWxsLCBhdHRycy52YWx1ZSwgdW5kZWZpbmVkKVxuXHRcdFx0aWYgKFwic2VsZWN0ZWRJbmRleFwiIGluIGF0dHJzKSBzZXRBdHRyKHZub2RlLCBcInNlbGVjdGVkSW5kZXhcIiwgbnVsbCwgYXR0cnMuc2VsZWN0ZWRJbmRleCwgdW5kZWZpbmVkKVxuXHRcdH1cblx0fVxuXHRmdW5jdGlvbiB1cGRhdGVBdHRycyh2bm9kZSwgb2xkLCBhdHRycywgbnMpIHtcblx0XHRpZiAoYXR0cnMgIT0gbnVsbCkge1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0XHRcdHNldEF0dHIodm5vZGUsIGtleSwgb2xkICYmIG9sZFtrZXldLCBhdHRyc1trZXldLCBucylcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG9sZCAhPSBudWxsKSB7XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gb2xkKSB7XG5cdFx0XHRcdGlmIChhdHRycyA9PSBudWxsIHx8ICEoa2V5IGluIGF0dHJzKSkge1xuXHRcdFx0XHRcdGlmIChrZXkgPT09IFwiY2xhc3NOYW1lXCIpIGtleSA9IFwiY2xhc3NcIlxuXHRcdFx0XHRcdGlmIChrZXlbMF0gPT09IFwib1wiICYmIGtleVsxXSA9PT0gXCJuXCIgJiYgIWlzTGlmZWN5Y2xlTWV0aG9kKGtleSkpIHVwZGF0ZUV2ZW50KHZub2RlLCBrZXksIHVuZGVmaW5lZClcblx0XHRcdFx0XHRlbHNlIGlmIChrZXkgIT09IFwia2V5XCIpIHZub2RlLmRvbS5yZW1vdmVBdHRyaWJ1dGUoa2V5KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIGlzRm9ybUF0dHJpYnV0ZSh2bm9kZSwgYXR0cikge1xuXHRcdHJldHVybiBhdHRyID09PSBcInZhbHVlXCIgfHwgYXR0ciA9PT0gXCJjaGVja2VkXCIgfHwgYXR0ciA9PT0gXCJzZWxlY3RlZEluZGV4XCIgfHwgYXR0ciA9PT0gXCJzZWxlY3RlZFwiICYmIHZub2RlLmRvbSA9PT0gJGRvYy5hY3RpdmVFbGVtZW50IHx8IHZub2RlLmRvbS5wYXJlbnROb2RlID09PSAkZG9jLmFjdGl2ZUVsZW1lbnRcblx0fVxuXHRmdW5jdGlvbiBpc0xpZmVjeWNsZU1ldGhvZChhdHRyKSB7XG5cdFx0cmV0dXJuIGF0dHIgPT09IFwib25pbml0XCIgfHwgYXR0ciA9PT0gXCJvbmNyZWF0ZVwiIHx8IGF0dHIgPT09IFwib251cGRhdGVcIiB8fCBhdHRyID09PSBcIm9ucmVtb3ZlXCIgfHwgYXR0ciA9PT0gXCJvbmJlZm9yZXJlbW92ZVwiIHx8IGF0dHIgPT09IFwib25iZWZvcmV1cGRhdGVcIlxuXHR9XG5cdGZ1bmN0aW9uIGlzQXR0cmlidXRlKGF0dHIpIHtcblx0XHRyZXR1cm4gYXR0ciA9PT0gXCJocmVmXCIgfHwgYXR0ciA9PT0gXCJsaXN0XCIgfHwgYXR0ciA9PT0gXCJmb3JtXCIgfHwgYXR0ciA9PT0gXCJ3aWR0aFwiIHx8IGF0dHIgPT09IFwiaGVpZ2h0XCIvLyB8fCBhdHRyID09PSBcInR5cGVcIlxuXHR9XG5cdGZ1bmN0aW9uIGlzQ3VzdG9tRWxlbWVudCh2bm9kZSl7XG5cdFx0cmV0dXJuIHZub2RlLmF0dHJzLmlzIHx8IHZub2RlLnRhZy5pbmRleE9mKFwiLVwiKSA+IC0xXG5cdH1cblx0ZnVuY3Rpb24gaGFzSW50ZWdyYXRpb25NZXRob2RzKHNvdXJjZSkge1xuXHRcdHJldHVybiBzb3VyY2UgIT0gbnVsbCAmJiAoc291cmNlLm9uY3JlYXRlIHx8IHNvdXJjZS5vbnVwZGF0ZSB8fCBzb3VyY2Uub25iZWZvcmVyZW1vdmUgfHwgc291cmNlLm9ucmVtb3ZlKVxuXHR9XG5cblx0Ly9zdHlsZVxuXHRmdW5jdGlvbiB1cGRhdGVTdHlsZShlbGVtZW50LCBvbGQsIHN0eWxlKSB7XG5cdFx0aWYgKG9sZCAhPSBudWxsICYmIHN0eWxlICE9IG51bGwgJiYgdHlwZW9mIG9sZCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygc3R5bGUgPT09IFwib2JqZWN0XCIgJiYgc3R5bGUgIT09IG9sZCkge1xuXHRcdFx0Ly8gQm90aCBvbGQgJiBuZXcgYXJlIChkaWZmZXJlbnQpIG9iamVjdHMuXG5cdFx0XHQvLyBVcGRhdGUgc3R5bGUgcHJvcGVydGllcyB0aGF0IGhhdmUgY2hhbmdlZFxuXHRcdFx0Zm9yICh2YXIga2V5IGluIHN0eWxlKSB7XG5cdFx0XHRcdGlmIChzdHlsZVtrZXldICE9PSBvbGRba2V5XSkgZWxlbWVudC5zdHlsZVtrZXldID0gc3R5bGVba2V5XVxuXHRcdFx0fVxuXHRcdFx0Ly8gUmVtb3ZlIHN0eWxlIHByb3BlcnRpZXMgdGhhdCBubyBsb25nZXIgZXhpc3Rcblx0XHRcdGZvciAodmFyIGtleSBpbiBvbGQpIHtcblx0XHRcdFx0aWYgKCEoa2V5IGluIHN0eWxlKSkgZWxlbWVudC5zdHlsZVtrZXldID0gXCJcIlxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGlmIChvbGQgPT09IHN0eWxlKSBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBcIlwiLCBvbGQgPSBudWxsXG5cdFx0aWYgKHN0eWxlID09IG51bGwpIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IFwiXCJcblx0XHRlbHNlIGlmICh0eXBlb2Ygc3R5bGUgPT09IFwic3RyaW5nXCIpIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlXG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAodHlwZW9mIG9sZCA9PT0gXCJzdHJpbmdcIikgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gXCJcIlxuXHRcdFx0Zm9yICh2YXIga2V5IGluIHN0eWxlKSB7XG5cdFx0XHRcdGVsZW1lbnQuc3R5bGVba2V5XSA9IHN0eWxlW2tleV1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBIZXJlJ3MgYW4gZXhwbGFuYXRpb24gb2YgaG93IHRoaXMgd29ya3M6XG5cdC8vIDEuIFRoZSBldmVudCBuYW1lcyBhcmUgYWx3YXlzIChieSBkZXNpZ24pIHByZWZpeGVkIGJ5IGBvbmAuXG5cdC8vIDIuIFRoZSBFdmVudExpc3RlbmVyIGludGVyZmFjZSBhY2NlcHRzIGVpdGhlciBhIGZ1bmN0aW9uIG9yIGFuIG9iamVjdFxuXHQvLyAgICB3aXRoIGEgYGhhbmRsZUV2ZW50YCBtZXRob2QuXG5cdC8vIDMuIFRoZSBvYmplY3QgZG9lcyBub3QgaW5oZXJpdCBmcm9tIGBPYmplY3QucHJvdG90eXBlYCwgdG8gYXZvaWRcblx0Ly8gICAgYW55IHBvdGVudGlhbCBpbnRlcmZlcmVuY2Ugd2l0aCB0aGF0IChlLmcuIHNldHRlcnMpLlxuXHQvLyA0LiBUaGUgZXZlbnQgbmFtZSBpcyByZW1hcHBlZCB0byB0aGUgaGFuZGxlciBiZWZvcmUgY2FsbGluZyBpdC5cblx0Ly8gNS4gSW4gZnVuY3Rpb24tYmFzZWQgZXZlbnQgaGFuZGxlcnMsIGBldi50YXJnZXQgPT09IHRoaXNgLiBXZSByZXBsaWNhdGVcblx0Ly8gICAgdGhhdCBiZWxvdy5cblx0ZnVuY3Rpb24gRXZlbnREaWN0KCkge31cblx0RXZlbnREaWN0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblx0RXZlbnREaWN0LnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChldikge1xuXHRcdHZhciBoYW5kbGVyID0gdGhpc1tcIm9uXCIgKyBldi50eXBlXVxuXHRcdGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSBoYW5kbGVyLmNhbGwoZXYudGFyZ2V0LCBldilcblx0XHRlbHNlIGlmICh0eXBlb2YgaGFuZGxlci5oYW5kbGVFdmVudCA9PT0gXCJmdW5jdGlvblwiKSBoYW5kbGVyLmhhbmRsZUV2ZW50KGV2KVxuXHRcdGlmICh0eXBlb2Ygb25ldmVudCA9PT0gXCJmdW5jdGlvblwiKSBvbmV2ZW50LmNhbGwoZXYudGFyZ2V0LCBldilcblx0fVxuXG5cdC8vZXZlbnRcblx0ZnVuY3Rpb24gdXBkYXRlRXZlbnQodm5vZGUsIGtleSwgdmFsdWUpIHtcblx0XHRpZiAodm5vZGUuZXZlbnRzICE9IG51bGwpIHtcblx0XHRcdGlmICh2bm9kZS5ldmVudHNba2V5XSA9PT0gdmFsdWUpIHJldHVyblxuXHRcdFx0aWYgKHZhbHVlICE9IG51bGwgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikpIHtcblx0XHRcdFx0aWYgKHZub2RlLmV2ZW50c1trZXldID09IG51bGwpIHZub2RlLmRvbS5hZGRFdmVudExpc3RlbmVyKGtleS5zbGljZSgyKSwgdm5vZGUuZXZlbnRzLCBmYWxzZSlcblx0XHRcdFx0dm5vZGUuZXZlbnRzW2tleV0gPSB2YWx1ZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHZub2RlLmV2ZW50c1trZXldICE9IG51bGwpIHZub2RlLmRvbS5yZW1vdmVFdmVudExpc3RlbmVyKGtleS5zbGljZSgyKSwgdm5vZGUuZXZlbnRzLCBmYWxzZSlcblx0XHRcdFx0dm5vZGUuZXZlbnRzW2tleV0gPSB1bmRlZmluZWRcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHZhbHVlICE9IG51bGwgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikpIHtcblx0XHRcdHZub2RlLmV2ZW50cyA9IG5ldyBFdmVudERpY3QoKVxuXHRcdFx0dm5vZGUuZG9tLmFkZEV2ZW50TGlzdGVuZXIoa2V5LnNsaWNlKDIpLCB2bm9kZS5ldmVudHMsIGZhbHNlKVxuXHRcdFx0dm5vZGUuZXZlbnRzW2tleV0gPSB2YWx1ZVxuXHRcdH1cblx0fVxuXG5cdC8vbGlmZWN5Y2xlXG5cdGZ1bmN0aW9uIGluaXRMaWZlY3ljbGUoc291cmNlLCB2bm9kZSwgaG9va3MpIHtcblx0XHRpZiAodHlwZW9mIHNvdXJjZS5vbmluaXQgPT09IFwiZnVuY3Rpb25cIikgY2FsbEhvb2suY2FsbChzb3VyY2Uub25pbml0LCB2bm9kZSlcblx0XHRpZiAodHlwZW9mIHNvdXJjZS5vbmNyZWF0ZSA9PT0gXCJmdW5jdGlvblwiKSBob29rcy5wdXNoKGNhbGxIb29rLmJpbmQoc291cmNlLm9uY3JlYXRlLCB2bm9kZSkpXG5cdH1cblx0ZnVuY3Rpb24gdXBkYXRlTGlmZWN5Y2xlKHNvdXJjZSwgdm5vZGUsIGhvb2tzKSB7XG5cdFx0aWYgKHR5cGVvZiBzb3VyY2Uub251cGRhdGUgPT09IFwiZnVuY3Rpb25cIikgaG9va3MucHVzaChjYWxsSG9vay5iaW5kKHNvdXJjZS5vbnVwZGF0ZSwgdm5vZGUpKVxuXHR9XG5cdGZ1bmN0aW9uIHNob3VsZE5vdFVwZGF0ZSh2bm9kZSwgb2xkKSB7XG5cdFx0dmFyIGZvcmNlVm5vZGVVcGRhdGUsIGZvcmNlQ29tcG9uZW50VXBkYXRlXG5cdFx0aWYgKHZub2RlLmF0dHJzICE9IG51bGwgJiYgdHlwZW9mIHZub2RlLmF0dHJzLm9uYmVmb3JldXBkYXRlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdGZvcmNlVm5vZGVVcGRhdGUgPSBjYWxsSG9vay5jYWxsKHZub2RlLmF0dHJzLm9uYmVmb3JldXBkYXRlLCB2bm9kZSwgb2xkKVxuXHRcdH1cblx0XHRpZiAodHlwZW9mIHZub2RlLnRhZyAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Ygdm5vZGUuc3RhdGUub25iZWZvcmV1cGRhdGUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0Zm9yY2VDb21wb25lbnRVcGRhdGUgPSBjYWxsSG9vay5jYWxsKHZub2RlLnN0YXRlLm9uYmVmb3JldXBkYXRlLCB2bm9kZSwgb2xkKVxuXHRcdH1cblx0XHRpZiAoIShmb3JjZVZub2RlVXBkYXRlID09PSB1bmRlZmluZWQgJiYgZm9yY2VDb21wb25lbnRVcGRhdGUgPT09IHVuZGVmaW5lZCkgJiYgIWZvcmNlVm5vZGVVcGRhdGUgJiYgIWZvcmNlQ29tcG9uZW50VXBkYXRlKSB7XG5cdFx0XHR2bm9kZS5kb20gPSBvbGQuZG9tXG5cdFx0XHR2bm9kZS5kb21TaXplID0gb2xkLmRvbVNpemVcblx0XHRcdHZub2RlLmluc3RhbmNlID0gb2xkLmluc3RhbmNlXG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbmRlcihkb20sIHZub2Rlcykge1xuXHRcdGlmICghZG9tKSB0aHJvdyBuZXcgRXJyb3IoXCJFbnN1cmUgdGhlIERPTSBlbGVtZW50IGJlaW5nIHBhc3NlZCB0byBtLnJvdXRlL20ubW91bnQvbS5yZW5kZXIgaXMgbm90IHVuZGVmaW5lZC5cIilcblx0XHR2YXIgaG9va3MgPSBbXVxuXHRcdHZhciBhY3RpdmUgPSAkZG9jLmFjdGl2ZUVsZW1lbnRcblx0XHR2YXIgbmFtZXNwYWNlID0gZG9tLm5hbWVzcGFjZVVSSVxuXG5cdFx0Ly8gRmlyc3QgdGltZSByZW5kZXJpbmcgaW50byBhIG5vZGUgY2xlYXJzIGl0IG91dFxuXHRcdGlmIChkb20udm5vZGVzID09IG51bGwpIGRvbS50ZXh0Q29udGVudCA9IFwiXCJcblxuXHRcdGlmICghQXJyYXkuaXNBcnJheSh2bm9kZXMpKSB2bm9kZXMgPSBbdm5vZGVzXVxuXHRcdHVwZGF0ZU5vZGVzKGRvbSwgZG9tLnZub2RlcywgVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4odm5vZGVzKSwgZmFsc2UsIGhvb2tzLCBudWxsLCBuYW1lc3BhY2UgPT09IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiID8gdW5kZWZpbmVkIDogbmFtZXNwYWNlKVxuXHRcdGRvbS52bm9kZXMgPSB2bm9kZXNcblx0XHQvLyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGNhbiByZXR1cm4gbnVsbCBpbiBJRSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvYWN0aXZlRWxlbWVudFxuXHRcdGlmIChhY3RpdmUgIT0gbnVsbCAmJiAkZG9jLmFjdGl2ZUVsZW1lbnQgIT09IGFjdGl2ZSkgYWN0aXZlLmZvY3VzKClcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSBob29rc1tpXSgpXG5cdH1cblxuXHRyZXR1cm4ge3JlbmRlcjogcmVuZGVyLCBzZXRFdmVudENhbGxiYWNrOiBzZXRFdmVudENhbGxiYWNrfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIFZub2RlID0gcmVxdWlyZShcIi4uL3JlbmRlci92bm9kZVwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGh0bWwpIHtcblx0aWYgKGh0bWwgPT0gbnVsbCkgaHRtbCA9IFwiXCJcblx0cmV0dXJuIFZub2RlKFwiPFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaHRtbCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXG59XG4iLCJcInVzZSBzdHJpY3RcIlxuXG5mdW5jdGlvbiBWbm9kZSh0YWcsIGtleSwgYXR0cnMsIGNoaWxkcmVuLCB0ZXh0LCBkb20pIHtcblx0cmV0dXJuIHt0YWc6IHRhZywga2V5OiBrZXksIGF0dHJzOiBhdHRycywgY2hpbGRyZW46IGNoaWxkcmVuLCB0ZXh0OiB0ZXh0LCBkb206IGRvbSwgZG9tU2l6ZTogdW5kZWZpbmVkLCBzdGF0ZTogdW5kZWZpbmVkLCBldmVudHM6IHVuZGVmaW5lZCwgaW5zdGFuY2U6IHVuZGVmaW5lZCwgc2tpcDogZmFsc2V9XG59XG5Wbm9kZS5ub3JtYWxpemUgPSBmdW5jdGlvbihub2RlKSB7XG5cdGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSByZXR1cm4gVm5vZGUoXCJbXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBWbm9kZS5ub3JtYWxpemVDaGlsZHJlbihub2RlKSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpXG5cdGlmIChub2RlICE9IG51bGwgJiYgdHlwZW9mIG5vZGUgIT09IFwib2JqZWN0XCIpIHJldHVybiBWbm9kZShcIiNcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG5vZGUgPT09IGZhbHNlID8gXCJcIiA6IG5vZGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVxuXHRyZXR1cm4gbm9kZVxufVxuVm5vZGUubm9ybWFsaXplQ2hpbGRyZW4gPSBmdW5jdGlvbiBub3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbikge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2hpbGRyZW5baV0gPSBWbm9kZS5ub3JtYWxpemUoY2hpbGRyZW5baV0pXG5cdH1cblx0cmV0dXJuIGNoaWxkcmVuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVm5vZGVcbiIsIlwidXNlIHN0cmljdFwiXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vc3RyZWFtL3N0cmVhbVwiKVxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbjsoZnVuY3Rpb24oKSB7XG5cInVzZSBzdHJpY3RcIlxuLyogZXNsaW50LWVuYWJsZSAqL1xuXG52YXIgZ3VpZCA9IDAsIEhBTFQgPSB7fVxuZnVuY3Rpb24gY3JlYXRlU3RyZWFtKCkge1xuXHRmdW5jdGlvbiBzdHJlYW0oKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gSEFMVCkgdXBkYXRlU3RyZWFtKHN0cmVhbSwgYXJndW1lbnRzWzBdKVxuXHRcdHJldHVybiBzdHJlYW0uX3N0YXRlLnZhbHVlXG5cdH1cblx0aW5pdFN0cmVhbShzdHJlYW0pXG5cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gSEFMVCkgdXBkYXRlU3RyZWFtKHN0cmVhbSwgYXJndW1lbnRzWzBdKVxuXG5cdHJldHVybiBzdHJlYW1cbn1cbmZ1bmN0aW9uIGluaXRTdHJlYW0oc3RyZWFtKSB7XG5cdHN0cmVhbS5jb25zdHJ1Y3RvciA9IGNyZWF0ZVN0cmVhbVxuXHRzdHJlYW0uX3N0YXRlID0ge2lkOiBndWlkKyssIHZhbHVlOiB1bmRlZmluZWQsIHN0YXRlOiAwLCBkZXJpdmU6IHVuZGVmaW5lZCwgcmVjb3ZlcjogdW5kZWZpbmVkLCBkZXBzOiB7fSwgcGFyZW50czogW10sIGVuZFN0cmVhbTogdW5kZWZpbmVkLCB1bnJlZ2lzdGVyOiB1bmRlZmluZWR9XG5cdHN0cmVhbS5tYXAgPSBzdHJlYW1bXCJmYW50YXN5LWxhbmQvbWFwXCJdID0gbWFwLCBzdHJlYW1bXCJmYW50YXN5LWxhbmQvYXBcIl0gPSBhcCwgc3RyZWFtW1wiZmFudGFzeS1sYW5kL29mXCJdID0gY3JlYXRlU3RyZWFtXG5cdHN0cmVhbS52YWx1ZU9mID0gdmFsdWVPZiwgc3RyZWFtLnRvSlNPTiA9IHRvSlNPTiwgc3RyZWFtLnRvU3RyaW5nID0gdmFsdWVPZlxuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0cmVhbSwge1xuXHRcdGVuZDoge2dldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIXN0cmVhbS5fc3RhdGUuZW5kU3RyZWFtKSB7XG5cdFx0XHRcdHZhciBlbmRTdHJlYW0gPSBjcmVhdGVTdHJlYW0oKVxuXHRcdFx0XHRlbmRTdHJlYW0ubWFwKGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKHZhbHVlID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0XHR1bnJlZ2lzdGVyU3RyZWFtKHN0cmVhbSlcblx0XHRcdFx0XHRcdGVuZFN0cmVhbS5fc3RhdGUudW5yZWdpc3RlciA9IGZ1bmN0aW9uKCl7dW5yZWdpc3RlclN0cmVhbShlbmRTdHJlYW0pfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdmFsdWVcblx0XHRcdFx0fSlcblx0XHRcdFx0c3RyZWFtLl9zdGF0ZS5lbmRTdHJlYW0gPSBlbmRTdHJlYW1cblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHJlYW0uX3N0YXRlLmVuZFN0cmVhbVxuXHRcdH19XG5cdH0pXG59XG5mdW5jdGlvbiB1cGRhdGVTdHJlYW0oc3RyZWFtLCB2YWx1ZSkge1xuXHR1cGRhdGVTdGF0ZShzdHJlYW0sIHZhbHVlKVxuXHRmb3IgKHZhciBpZCBpbiBzdHJlYW0uX3N0YXRlLmRlcHMpIHVwZGF0ZURlcGVuZGVuY3koc3RyZWFtLl9zdGF0ZS5kZXBzW2lkXSwgZmFsc2UpXG5cdGlmIChzdHJlYW0uX3N0YXRlLnVucmVnaXN0ZXIgIT0gbnVsbCkgc3RyZWFtLl9zdGF0ZS51bnJlZ2lzdGVyKClcblx0ZmluYWxpemUoc3RyZWFtKVxufVxuZnVuY3Rpb24gdXBkYXRlU3RhdGUoc3RyZWFtLCB2YWx1ZSkge1xuXHRzdHJlYW0uX3N0YXRlLnZhbHVlID0gdmFsdWVcblx0c3RyZWFtLl9zdGF0ZS5jaGFuZ2VkID0gdHJ1ZVxuXHRpZiAoc3RyZWFtLl9zdGF0ZS5zdGF0ZSAhPT0gMikgc3RyZWFtLl9zdGF0ZS5zdGF0ZSA9IDFcbn1cbmZ1bmN0aW9uIHVwZGF0ZURlcGVuZGVuY3koc3RyZWFtLCBtdXN0U3luYykge1xuXHR2YXIgc3RhdGUgPSBzdHJlYW0uX3N0YXRlLCBwYXJlbnRzID0gc3RhdGUucGFyZW50c1xuXHRpZiAocGFyZW50cy5sZW5ndGggPiAwICYmIHBhcmVudHMuZXZlcnkoYWN0aXZlKSAmJiAobXVzdFN5bmMgfHwgcGFyZW50cy5zb21lKGNoYW5nZWQpKSkge1xuXHRcdHZhciB2YWx1ZSA9IHN0cmVhbS5fc3RhdGUuZGVyaXZlKClcblx0XHRpZiAodmFsdWUgPT09IEhBTFQpIHJldHVybiBmYWxzZVxuXHRcdHVwZGF0ZVN0YXRlKHN0cmVhbSwgdmFsdWUpXG5cdH1cbn1cbmZ1bmN0aW9uIGZpbmFsaXplKHN0cmVhbSkge1xuXHRzdHJlYW0uX3N0YXRlLmNoYW5nZWQgPSBmYWxzZVxuXHRmb3IgKHZhciBpZCBpbiBzdHJlYW0uX3N0YXRlLmRlcHMpIHN0cmVhbS5fc3RhdGUuZGVwc1tpZF0uX3N0YXRlLmNoYW5nZWQgPSBmYWxzZVxufVxuXG5mdW5jdGlvbiBjb21iaW5lKGZuLCBzdHJlYW1zKSB7XG5cdGlmICghc3RyZWFtcy5ldmVyeSh2YWxpZCkpIHRocm93IG5ldyBFcnJvcihcIkVuc3VyZSB0aGF0IGVhY2ggaXRlbSBwYXNzZWQgdG8gc3RyZWFtLmNvbWJpbmUvc3RyZWFtLm1lcmdlIGlzIGEgc3RyZWFtXCIpXG5cdHJldHVybiBpbml0RGVwZW5kZW5jeShjcmVhdGVTdHJlYW0oKSwgc3RyZWFtcywgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGZuLmFwcGx5KHRoaXMsIHN0cmVhbXMuY29uY2F0KFtzdHJlYW1zLmZpbHRlcihjaGFuZ2VkKV0pKVxuXHR9KVxufVxuXG5mdW5jdGlvbiBpbml0RGVwZW5kZW5jeShkZXAsIHN0cmVhbXMsIGRlcml2ZSkge1xuXHR2YXIgc3RhdGUgPSBkZXAuX3N0YXRlXG5cdHN0YXRlLmRlcml2ZSA9IGRlcml2ZVxuXHRzdGF0ZS5wYXJlbnRzID0gc3RyZWFtcy5maWx0ZXIobm90RW5kZWQpXG5cblx0cmVnaXN0ZXJEZXBlbmRlbmN5KGRlcCwgc3RhdGUucGFyZW50cylcblx0dXBkYXRlRGVwZW5kZW5jeShkZXAsIHRydWUpXG5cblx0cmV0dXJuIGRlcFxufVxuZnVuY3Rpb24gcmVnaXN0ZXJEZXBlbmRlbmN5KHN0cmVhbSwgcGFyZW50cykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRwYXJlbnRzW2ldLl9zdGF0ZS5kZXBzW3N0cmVhbS5fc3RhdGUuaWRdID0gc3RyZWFtXG5cdFx0cmVnaXN0ZXJEZXBlbmRlbmN5KHN0cmVhbSwgcGFyZW50c1tpXS5fc3RhdGUucGFyZW50cylcblx0fVxufVxuZnVuY3Rpb24gdW5yZWdpc3RlclN0cmVhbShzdHJlYW0pIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHJlYW0uX3N0YXRlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgcGFyZW50ID0gc3RyZWFtLl9zdGF0ZS5wYXJlbnRzW2ldXG5cdFx0ZGVsZXRlIHBhcmVudC5fc3RhdGUuZGVwc1tzdHJlYW0uX3N0YXRlLmlkXVxuXHR9XG5cdGZvciAodmFyIGlkIGluIHN0cmVhbS5fc3RhdGUuZGVwcykge1xuXHRcdHZhciBkZXBlbmRlbnQgPSBzdHJlYW0uX3N0YXRlLmRlcHNbaWRdXG5cdFx0dmFyIGluZGV4ID0gZGVwZW5kZW50Ll9zdGF0ZS5wYXJlbnRzLmluZGV4T2Yoc3RyZWFtKVxuXHRcdGlmIChpbmRleCA+IC0xKSBkZXBlbmRlbnQuX3N0YXRlLnBhcmVudHMuc3BsaWNlKGluZGV4LCAxKVxuXHR9XG5cdHN0cmVhbS5fc3RhdGUuc3RhdGUgPSAyIC8vZW5kZWRcblx0c3RyZWFtLl9zdGF0ZS5kZXBzID0ge31cbn1cblxuZnVuY3Rpb24gbWFwKGZuKSB7cmV0dXJuIGNvbWJpbmUoZnVuY3Rpb24oc3RyZWFtKSB7cmV0dXJuIGZuKHN0cmVhbSgpKX0sIFt0aGlzXSl9XG5mdW5jdGlvbiBhcChzdHJlYW0pIHtyZXR1cm4gY29tYmluZShmdW5jdGlvbihzMSwgczIpIHtyZXR1cm4gczEoKShzMigpKX0sIFtzdHJlYW0sIHRoaXNdKX1cbmZ1bmN0aW9uIHZhbHVlT2YoKSB7cmV0dXJuIHRoaXMuX3N0YXRlLnZhbHVlfVxuZnVuY3Rpb24gdG9KU09OKCkge3JldHVybiB0aGlzLl9zdGF0ZS52YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB0aGlzLl9zdGF0ZS52YWx1ZS50b0pTT04gPT09IFwiZnVuY3Rpb25cIiA/IHRoaXMuX3N0YXRlLnZhbHVlLnRvSlNPTigpIDogdGhpcy5fc3RhdGUudmFsdWV9XG5cbmZ1bmN0aW9uIHZhbGlkKHN0cmVhbSkge3JldHVybiBzdHJlYW0uX3N0YXRlIH1cbmZ1bmN0aW9uIGFjdGl2ZShzdHJlYW0pIHtyZXR1cm4gc3RyZWFtLl9zdGF0ZS5zdGF0ZSA9PT0gMX1cbmZ1bmN0aW9uIGNoYW5nZWQoc3RyZWFtKSB7cmV0dXJuIHN0cmVhbS5fc3RhdGUuY2hhbmdlZH1cbmZ1bmN0aW9uIG5vdEVuZGVkKHN0cmVhbSkge3JldHVybiBzdHJlYW0uX3N0YXRlLnN0YXRlICE9PSAyfVxuXG5mdW5jdGlvbiBtZXJnZShzdHJlYW1zKSB7XG5cdHJldHVybiBjb21iaW5lKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBzdHJlYW1zLm1hcChmdW5jdGlvbihzKSB7cmV0dXJuIHMoKX0pXG5cdH0sIHN0cmVhbXMpXG59XG5cbmZ1bmN0aW9uIHNjYW4ocmVkdWNlciwgc2VlZCwgc3RyZWFtKSB7XG5cdHZhciBuZXdTdHJlYW0gPSBjb21iaW5lKGZ1bmN0aW9uIChzKSB7XG5cdFx0cmV0dXJuIHNlZWQgPSByZWR1Y2VyKHNlZWQsIHMuX3N0YXRlLnZhbHVlKVxuXHR9LCBbc3RyZWFtXSlcblxuXHRpZiAobmV3U3RyZWFtLl9zdGF0ZS5zdGF0ZSA9PT0gMCkgbmV3U3RyZWFtKHNlZWQpXG5cblx0cmV0dXJuIG5ld1N0cmVhbVxufVxuXG5mdW5jdGlvbiBzY2FuTWVyZ2UodHVwbGVzLCBzZWVkKSB7XG5cdHZhciBzdHJlYW1zID0gdHVwbGVzLm1hcChmdW5jdGlvbih0dXBsZSkge1xuXHRcdHZhciBzdHJlYW0gPSB0dXBsZVswXVxuXHRcdGlmIChzdHJlYW0uX3N0YXRlLnN0YXRlID09PSAwKSBzdHJlYW0odW5kZWZpbmVkKVxuXHRcdHJldHVybiBzdHJlYW1cblx0fSlcblxuXHR2YXIgbmV3U3RyZWFtID0gY29tYmluZShmdW5jdGlvbigpIHtcblx0XHR2YXIgY2hhbmdlZCA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV1cblxuXHRcdHN0cmVhbXMuZm9yRWFjaChmdW5jdGlvbihzdHJlYW0sIGlkeCkge1xuXHRcdFx0aWYgKGNoYW5nZWQuaW5kZXhPZihzdHJlYW0pID4gLTEpIHtcblx0XHRcdFx0c2VlZCA9IHR1cGxlc1tpZHhdWzFdKHNlZWQsIHN0cmVhbS5fc3RhdGUudmFsdWUpXG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdHJldHVybiBzZWVkXG5cdH0sIHN0cmVhbXMpXG5cblx0cmV0dXJuIG5ld1N0cmVhbVxufVxuXG5jcmVhdGVTdHJlYW1bXCJmYW50YXN5LWxhbmQvb2ZcIl0gPSBjcmVhdGVTdHJlYW1cbmNyZWF0ZVN0cmVhbS5tZXJnZSA9IG1lcmdlXG5jcmVhdGVTdHJlYW0uY29tYmluZSA9IGNvbWJpbmVcbmNyZWF0ZVN0cmVhbS5zY2FuID0gc2NhblxuY3JlYXRlU3RyZWFtLnNjYW5NZXJnZSA9IHNjYW5NZXJnZVxuY3JlYXRlU3RyZWFtLkhBTFQgPSBIQUxUXG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiKSBtb2R1bGVbXCJleHBvcnRzXCJdID0gY3JlYXRlU3RyZWFtXG5lbHNlIGlmICh0eXBlb2Ygd2luZG93Lm0gPT09IFwiZnVuY3Rpb25cIiAmJiAhKFwic3RyZWFtXCIgaW4gd2luZG93Lm0pKSB3aW5kb3cubS5zdHJlYW0gPSBjcmVhdGVTdHJlYW1cbmVsc2Ugd2luZG93Lm0gPSB7c3RyZWFtIDogY3JlYXRlU3RyZWFtfVxuXG59KCkpO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBpc09iamVjdCAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBPYmplY3QodmFsdWUpXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkgKHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG5mdW5jdGlvbiBpc0ZpbGUgKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEZpbGVcbn1cblxuZnVuY3Rpb24gaXNEYXRlICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlXG59XG5cbmZ1bmN0aW9uIG9iamVjdFRvRm9ybURhdGEgKG9iaiwgZmQsIHByZSkge1xuICBmZCA9IGZkIHx8IG5ldyBGb3JtRGF0YSgpXG5cbiAgaWYgKGlzVW5kZWZpbmVkKG9iaikpIHtcbiAgICByZXR1cm4gZmRcbiAgfSBlbHNlIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICBvYmouZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICB2YXIga2V5ID0gcHJlICsgJ1snK2luZGV4KyddJ1xuXG4gICAgICBvYmplY3RUb0Zvcm1EYXRhKHZhbHVlLCBmZCwga2V5KVxuICAgIH0pXG4gIH0gZWxzZSBpZiAoaXNPYmplY3Qob2JqKSAmJiAhaXNGaWxlKG9iaikgJiYgIWlzRGF0ZShvYmopKSB7XG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICB2YXIgdmFsdWUgPSBvYmpbcHJvcF1cblxuICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHdoaWxlIChwcm9wLmxlbmd0aCA+IDIgJiYgcHJvcC5sYXN0SW5kZXhPZignW10nKSA9PT0gcHJvcC5sZW5ndGggLSAyKSB7XG4gICAgICAgICAgcHJvcCA9IHByb3Auc3Vic3RyaW5nKDAsIHByb3AubGVuZ3RoIC0gMilcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIga2V5ID0gcHJlID8gKHByZSArICdbJyArIHByb3AgKyAnXScpIDogcHJvcFxuXG4gICAgICBvYmplY3RUb0Zvcm1EYXRhKHZhbHVlLCBmZCwga2V5KVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgaWYgKG9iaiAhPT0gbnVsbCkgZmQuYXBwZW5kKHByZSwgb2JqKVxuICB9XG5cbiAgcmV0dXJuIGZkXG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9Gb3JtRGF0YVxuIiwiaW1wb3J0IHsgX19leHRlbmRzLCBfX3Jlc3QsIF9fYXNzaWduIH0gZnJvbSAndHNsaWInO1xuaW1wb3J0IHsgY3VycmVudEZyYW1lVGltZSwgdGltZVNpbmNlTGFzdEZyYW1lLCBvbkZyYW1lRW5kLCBvbkZyYW1lVXBkYXRlLCBjdXJyZW50VGltZSwgY2FuY2VsT25GcmFtZVVwZGF0ZSB9IGZyb20gJ2ZyYW1lc3luYyc7XG5pbXBvcnQgKiBhcyBzdHlsZVZhbHVlVHlwZXMgZnJvbSAnc3R5bGUtdmFsdWUtdHlwZXMnO1xuaW1wb3J0IHsgY29sb3IsIGhzbGEsIG51bWJlciB9IGZyb20gJ3N0eWxlLXZhbHVlLXR5cGVzJztcbmV4cG9ydCB7IHN0eWxlVmFsdWVUeXBlcyBhcyB2YWx1ZVR5cGVzIH07XG5pbXBvcnQgc3R5bGVyIGZyb20gJ3N0eWxlZmlyZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0eWxlciB9IGZyb20gJ3N0eWxlZmlyZSc7XG5pbXBvcnQgeyB3YXJuaW5nIH0gZnJvbSAnaGV5LWxpc3Rlbic7XG5cbnZhciBpc051bSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnbnVtYmVyJztcbn07XG52YXIgaXNQb2ludCA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgIHJldHVybiBwb2ludC54ICE9PSB1bmRlZmluZWQgJiYgcG9pbnQueSAhPT0gdW5kZWZpbmVkO1xufTtcbnZhciBpc1BvaW50M0QgPSBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICByZXR1cm4gcG9pbnQueiAhPT0gdW5kZWZpbmVkO1xufTtcbnZhciB0b0RlY2ltYWwgPSBmdW5jdGlvbiAobnVtLCBwcmVjaXNpb24pIHtcbiAgICBpZiAocHJlY2lzaW9uID09PSB2b2lkIDApIHtcbiAgICAgICAgcHJlY2lzaW9uID0gMjtcbiAgICB9XG4gICAgcHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG52YXIgWkVST19QT0lOVCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgejogMFxufTtcbnZhciBkaXN0YW5jZTFEID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpO1xufTtcbnZhciBhbmdsZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgaWYgKGIgPT09IHZvaWQgMCkge1xuICAgICAgICBiID0gWkVST19QT0lOVDtcbiAgICB9XG4gICAgcmV0dXJuIHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihiLnkgLSBhLnksIGIueCAtIGEueCkpO1xufTtcbnZhciBkZWdyZWVzVG9SYWRpYW5zID0gZnVuY3Rpb24gKGRlZ3JlZXMpIHtcbiAgICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG59O1xudmFyIGRpbGF0ZSA9IGZ1bmN0aW9uIChhLCBiLCBkaWxhdGlvbikge1xuICAgIHJldHVybiBhICsgKGIgLSBhKSAqIGRpbGF0aW9uO1xufTtcbnZhciBkaXN0YW5jZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgaWYgKGIgPT09IHZvaWQgMCkge1xuICAgICAgICBiID0gWkVST19QT0lOVDtcbiAgICB9XG4gICAgaWYgKGlzTnVtKGEpICYmIGlzTnVtKGIpKSB7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuICAgIH0gZWxzZSBpZiAoaXNQb2ludChhKSAmJiBpc1BvaW50KGIpKSB7XG4gICAgICAgIHZhciB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICAgICAgdmFyIHlEZWx0YSA9IGRpc3RhbmNlMUQoYS55LCBiLnkpO1xuICAgICAgICB2YXIgekRlbHRhID0gaXNQb2ludDNEKGEpICYmIGlzUG9pbnQzRChiKSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4RGVsdGEsIDIpICsgTWF0aC5wb3coeURlbHRhLCAyKSArIE1hdGgucG93KHpEZWx0YSwgMikpO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG52YXIgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIHZhbHVlKSB7XG4gICAgdmFyIHRvRnJvbURpZmZlcmVuY2UgPSB0byAtIGZyb207XG4gICAgcmV0dXJuIHRvRnJvbURpZmZlcmVuY2UgPT09IDAgPyAxIDogKHZhbHVlIC0gZnJvbSkgLyB0b0Zyb21EaWZmZXJlbmNlO1xufTtcbnZhciBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGZ1bmN0aW9uIChmcm9tLCB0bywgcHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gLXByb2dyZXNzICogZnJvbSArIHByb2dyZXNzICogdG8gKyBmcm9tO1xufTtcbnZhciBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZnVuY3Rpb24gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSB7XG4gICAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgICAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gICAgfTtcbn07XG52YXIgcmFkaWFuc1RvRGVncmVlcyA9IGZ1bmN0aW9uIChyYWRpYW5zKSB7XG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xufTtcbnZhciBzbW9vdGggPSBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbiwgc21vb3RoaW5nKSB7XG4gICAgaWYgKHNtb290aGluZyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHNtb290aGluZyA9IDA7XG4gICAgfVxuICAgIHJldHVybiB0b0RlY2ltYWwob2xkVmFsdWUgKyBkdXJhdGlvbiAqIChuZXdWYWx1ZSAtIG9sZFZhbHVlKSAvIE1hdGgubWF4KHNtb290aGluZywgZHVyYXRpb24pKTtcbn07XG52YXIgc3BlZWRQZXJGcmFtZSA9IGZ1bmN0aW9uICh4cHMsIGZyYW1lRHVyYXRpb24pIHtcbiAgICByZXR1cm4gaXNOdW0oeHBzKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xufTtcbnZhciBzcGVlZFBlclNlY29uZCA9IGZ1bmN0aW9uICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikge1xuICAgIHJldHVybiBmcmFtZUR1cmF0aW9uID8gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcbn07XG52YXIgc3RlcFByb2dyZXNzID0gZnVuY3Rpb24gKHN0ZXBzLCBwcm9ncmVzcykge1xuICAgIHZhciBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpO1xuICAgIHZhciB0YXJnZXQgPSAxIC0gMSAvIHN0ZXBzO1xuICAgIHZhciBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuXG52YXIgY2FsYyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBpc1BvaW50OiBpc1BvaW50LFxuICAgIGlzUG9pbnQzRDogaXNQb2ludDNELFxuICAgIGFuZ2xlOiBhbmdsZSxcbiAgICBkZWdyZWVzVG9SYWRpYW5zOiBkZWdyZWVzVG9SYWRpYW5zLFxuICAgIGRpbGF0ZTogZGlsYXRlLFxuICAgIGRpc3RhbmNlOiBkaXN0YW5jZSxcbiAgICBnZXRQcm9ncmVzc0Zyb21WYWx1ZTogZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsXG4gICAgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3M6IGdldFZhbHVlRnJvbVByb2dyZXNzLFxuICAgIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2U6IHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UsXG4gICAgcmFkaWFuc1RvRGVncmVlczogcmFkaWFuc1RvRGVncmVlcyxcbiAgICBzbW9vdGg6IHNtb290aCxcbiAgICBzcGVlZFBlckZyYW1lOiBzcGVlZFBlckZyYW1lLFxuICAgIHNwZWVkUGVyU2Vjb25kOiBzcGVlZFBlclNlY29uZCxcbiAgICBzdGVwUHJvZ3Jlc3M6IHN0ZXBQcm9ncmVzc1xufSk7XG5cbnZhciBub29wID0gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdjtcbn07XG52YXIgYXBwZW5kVW5pdCA9IGZ1bmN0aW9uICh1bml0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBcIlwiICsgdiArIHVuaXQ7XG4gICAgfTtcbn07XG52YXIgYXBwbHlPZmZzZXQgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICB2YXIgaGFzUmVjZWl2ZWRGcm9tID0gdHJ1ZTtcbiAgICBpZiAodG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0byA9IGZyb207XG4gICAgICAgIGhhc1JlY2VpdmVkRnJvbSA9IGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZ2V0T2Zmc2V0ID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHYgLSBmcm9tO1xuICAgIH07XG4gICAgdmFyIGFwcGx5T2Zmc2V0VG8gPSBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdiArIHRvO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGlmIChoYXNSZWNlaXZlZEZyb20pIHtcbiAgICAgICAgICAgIHJldHVybiBhcHBseU9mZnNldFRvKGdldE9mZnNldCh2KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcm9tID0gdjtcbiAgICAgICAgICAgIGhhc1JlY2VpdmVkRnJvbSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdG87XG4gICAgICAgIH1cbiAgICB9O1xufTtcbnZhciBibGVuZCA9IGZ1bmN0aW9uIChmcm9tLCB0bywgdikge1xuICAgIHZhciBmcm9tRXhwbyA9IGZyb20gKiBmcm9tO1xuICAgIHZhciB0b0V4cG8gPSB0byAqIHRvO1xuICAgIHJldHVybiBNYXRoLnNxcnQodiAqICh0b0V4cG8gLSBmcm9tRXhwbykgKyBmcm9tRXhwbyk7XG59O1xudmFyIGJsZW5kQ29sb3IgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICB2YXIgZnJvbUNvbG9yID0gdHlwZW9mIGZyb20gPT09ICdzdHJpbmcnID8gY29sb3IucGFyc2UoZnJvbSkgOiBmcm9tO1xuICAgIHZhciB0b0NvbG9yID0gdHlwZW9mIHRvID09PSAnc3RyaW5nJyA/IGNvbG9yLnBhcnNlKHRvKSA6IHRvO1xuICAgIHZhciBibGVuZGVkID0gX19hc3NpZ24oe30sIGZyb21Db2xvcik7XG4gICAgdmFyIGJsZW5kRnVuYyA9IGZyb20uaHVlICE9PSB1bmRlZmluZWQgfHwgdHlwZW9mIGZyb20gPT09ICdzdHJpbmcnICYmIGhzbGEudGVzdChmcm9tKSA/IGdldFZhbHVlRnJvbVByb2dyZXNzIDogYmxlbmQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGJsZW5kZWQgPSBfX2Fzc2lnbih7fSwgYmxlbmRlZCk7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBibGVuZGVkKSB7XG4gICAgICAgICAgICBpZiAoa2V5ICE9PSAnYWxwaGEnICYmIGJsZW5kZWQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGJsZW5kZWRba2V5XSA9IGJsZW5kRnVuYyhmcm9tQ29sb3Jba2V5XSwgdG9Db2xvcltrZXldLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBibGVuZGVkLmFscGhhID0gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZnJvbUNvbG9yLmFscGhhLCB0b0NvbG9yLmFscGhhLCB2KTtcbiAgICAgICAgcmV0dXJuIGJsZW5kZWQ7XG4gICAgfTtcbn07XG52YXIgY2xhbXAgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHYsIG1pbiksIG1heCk7XG4gICAgfTtcbn07XG52YXIgY29tYmluZUZ1bmN0aW9ucyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBiKGEodikpO1xuICAgIH07XG59O1xudmFyIHBpcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRyYW5zZm9ybWVycyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHRyYW5zZm9ybWVyc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNmb3JtZXJzLnJlZHVjZShjb21iaW5lRnVuY3Rpb25zKTtcbn07XG52YXIgY29uZGl0aW9uYWwgPSBmdW5jdGlvbiAoY2hlY2ssIGFwcGx5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBjaGVjayh2KSA/IGFwcGx5KHYpIDogdjtcbiAgICB9O1xufTtcbnZhciBzbG93SW50ZXJwb2xhdGUgPSBmdW5jdGlvbiAoaW5wdXQsIG91dHB1dCwgcmFuZ2VMZW5ndGgsIHJhbmdlRWFzaW5nKSB7XG4gICAgdmFyIGZpbmFsSW5kZXggPSByYW5nZUxlbmd0aCAtIDE7XG4gICAgaWYgKGlucHV0WzBdID4gaW5wdXRbZmluYWxJbmRleF0pIHtcbiAgICAgICAgaW5wdXQucmV2ZXJzZSgpO1xuICAgICAgICBvdXRwdXQucmV2ZXJzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHYgPD0gaW5wdXRbMF0pIHtcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXRbMF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHYgPj0gaW5wdXRbZmluYWxJbmRleF0pIHtcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXRbZmluYWxJbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSAxO1xuICAgICAgICBmb3IgKDsgaSA8IHJhbmdlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpbnB1dFtpXSA+IHYgfHwgaSA9PT0gZmluYWxJbmRleCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9ncmVzc0luUmFuZ2UgPSBnZXRQcm9ncmVzc0Zyb21WYWx1ZShpbnB1dFtpIC0gMV0sIGlucHV0W2ldLCB2KTtcbiAgICAgICAgdmFyIGVhc2VkUHJvZ3Jlc3MgPSByYW5nZUVhc2luZyA/IHJhbmdlRWFzaW5nW2kgLSAxXShwcm9ncmVzc0luUmFuZ2UpIDogcHJvZ3Jlc3NJblJhbmdlO1xuICAgICAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3Mob3V0cHV0W2kgLSAxXSwgb3V0cHV0W2ldLCBlYXNlZFByb2dyZXNzKTtcbiAgICB9O1xufTtcbnZhciBmYXN0SW50ZXJwb2xhdGUgPSBmdW5jdGlvbiAobWluQSwgbWF4QSwgbWluQiwgbWF4Qikge1xuICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gKHYgLSBtaW5BKSAqIChtYXhCIC0gbWluQikgLyAobWF4QSAtIG1pbkEpICsgbWluQjtcbiAgICB9O1xufTtcbnZhciBpbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIChpbnB1dCwgb3V0cHV0LCByYW5nZUVhc2luZykge1xuICAgIHZhciByYW5nZUxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgICByZXR1cm4gcmFuZ2VMZW5ndGggIT09IDIgPyBzbG93SW50ZXJwb2xhdGUoaW5wdXQsIG91dHB1dCwgcmFuZ2VMZW5ndGgsIHJhbmdlRWFzaW5nKSA6IGZhc3RJbnRlcnBvbGF0ZShpbnB1dFswXSwgaW5wdXRbMV0sIG91dHB1dFswXSwgb3V0cHV0WzFdKTtcbn07XG52YXIgZ2VuZXJhdGVTdGF0aWNTcHJpbmcgPSBmdW5jdGlvbiAoYWx0ZXJEaXNwbGFjZW1lbnQpIHtcbiAgICBpZiAoYWx0ZXJEaXNwbGFjZW1lbnQgPT09IHZvaWQgMCkge1xuICAgICAgICBhbHRlckRpc3BsYWNlbWVudCA9IG5vb3A7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoY29uc3RhbnQsIG9yaWdpbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHZhciBkaXNwbGFjZW1lbnQgPSBvcmlnaW4gLSB2O1xuICAgICAgICAgICAgdmFyIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50ID0gLWNvbnN0YW50ICogKDAgLSBhbHRlckRpc3BsYWNlbWVudChNYXRoLmFicyhkaXNwbGFjZW1lbnQpKSk7XG4gICAgICAgICAgICByZXR1cm4gZGlzcGxhY2VtZW50IDw9IDAgPyBvcmlnaW4gKyBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudCA6IG9yaWdpbiAtIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50O1xuICAgICAgICB9O1xuICAgIH07XG59O1xudmFyIGxpbmVhclNwcmluZyA9IC8qI19fUFVSRV9fKi9nZW5lcmF0ZVN0YXRpY1NwcmluZygpO1xudmFyIG5vbmxpbmVhclNwcmluZyA9IC8qI19fUFVSRV9fKi9nZW5lcmF0ZVN0YXRpY1NwcmluZyhNYXRoLnNxcnQpO1xudmFyIHdyYXAgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgdmFyIHJhbmdlU2l6ZSA9IG1heCAtIG1pbjtcbiAgICAgICAgcmV0dXJuICgodiAtIG1pbikgJSByYW5nZVNpemUgKyByYW5nZVNpemUpICUgcmFuZ2VTaXplICsgbWluO1xuICAgIH07XG59O1xudmFyIHNtb290aCQxID0gZnVuY3Rpb24gKHN0cmVuZ3RoKSB7XG4gICAgaWYgKHN0cmVuZ3RoID09PSB2b2lkIDApIHtcbiAgICAgICAgc3RyZW5ndGggPSA1MDtcbiAgICB9XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSAwO1xuICAgIHZhciBsYXN0VXBkYXRlZCA9IDA7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHZhciBjdXJyZW50RnJhbWVzdGFtcCA9IGN1cnJlbnRGcmFtZVRpbWUoKTtcbiAgICAgICAgdmFyIHRpbWVEZWx0YSA9IGN1cnJlbnRGcmFtZXN0YW1wICE9PSBsYXN0VXBkYXRlZCA/IGN1cnJlbnRGcmFtZXN0YW1wIC0gbGFzdFVwZGF0ZWQgOiAwO1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aW1lRGVsdGEgPyBzbW9vdGgodiwgcHJldmlvdXNWYWx1ZSwgdGltZURlbHRhLCBzdHJlbmd0aCkgOiBwcmV2aW91c1ZhbHVlO1xuICAgICAgICBsYXN0VXBkYXRlZCA9IGN1cnJlbnRGcmFtZXN0YW1wO1xuICAgICAgICBwcmV2aW91c1ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICB9O1xufTtcbnZhciBzbmFwID0gZnVuY3Rpb24gKHBvaW50cykge1xuICAgIGlmICh0eXBlb2YgcG9pbnRzID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHYgLyBwb2ludHMpICogcG9pbnRzO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpXzEgPSAwO1xuICAgICAgICB2YXIgbnVtUG9pbnRzXzEgPSBwb2ludHMubGVuZ3RoO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHZhciBsYXN0RGlzdGFuY2UgPSBNYXRoLmFicyhwb2ludHNbMF0gLSB2KTtcbiAgICAgICAgICAgIGZvciAoaV8xID0gMTsgaV8xIDwgbnVtUG9pbnRzXzE7IGlfMSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvaW50ID0gcG9pbnRzW2lfMV07XG4gICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlJCQxID0gTWF0aC5hYnMocG9pbnQgLSB2KTtcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UkJDEgPT09IDApIHJldHVybiBwb2ludDtcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UkJDEgPiBsYXN0RGlzdGFuY2UpIHJldHVybiBwb2ludHNbaV8xIC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKGlfMSA9PT0gbnVtUG9pbnRzXzEgLSAxKSByZXR1cm4gcG9pbnQ7XG4gICAgICAgICAgICAgICAgbGFzdERpc3RhbmNlID0gZGlzdGFuY2UkJDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufTtcbnZhciBzdGVwcyA9IGZ1bmN0aW9uIChzdCwgbWluLCBtYXgpIHtcbiAgICBpZiAobWluID09PSB2b2lkIDApIHtcbiAgICAgICAgbWluID0gMDtcbiAgICB9XG4gICAgaWYgKG1heCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIG1heCA9IDE7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBnZXRQcm9ncmVzc0Zyb21WYWx1ZShtaW4sIG1heCwgdik7XG4gICAgICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhtaW4sIG1heCwgc3RlcFByb2dyZXNzKHN0LCBwcm9ncmVzcykpO1xuICAgIH07XG59O1xudmFyIHRyYW5zZm9ybU1hcCA9IGZ1bmN0aW9uIChjaGlsZFRyYW5zZm9ybWVycykge1xuICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICB2YXIgb3V0cHV0ID0gX19hc3NpZ24oe30sIHYpO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gY2hpbGRUcmFuc2Zvcm1lcnMpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZFRyYW5zZm9ybWVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkVHJhbnNmb3JtZXIgPSBjaGlsZFRyYW5zZm9ybWVyc1trZXldO1xuICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0gY2hpbGRUcmFuc2Zvcm1lcih2W2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcbn07XG5cbnZhciB0cmFuc2Zvcm1lcnMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgYXBwZW5kVW5pdDogYXBwZW5kVW5pdCxcbiAgICBhcHBseU9mZnNldDogYXBwbHlPZmZzZXQsXG4gICAgYmxlbmRDb2xvcjogYmxlbmRDb2xvcixcbiAgICBjbGFtcDogY2xhbXAsXG4gICAgcGlwZTogcGlwZSxcbiAgICBjb25kaXRpb25hbDogY29uZGl0aW9uYWwsXG4gICAgaW50ZXJwb2xhdGU6IGludGVycG9sYXRlLFxuICAgIGdlbmVyYXRlU3RhdGljU3ByaW5nOiBnZW5lcmF0ZVN0YXRpY1NwcmluZyxcbiAgICBsaW5lYXJTcHJpbmc6IGxpbmVhclNwcmluZyxcbiAgICBub25saW5lYXJTcHJpbmc6IG5vbmxpbmVhclNwcmluZyxcbiAgICB3cmFwOiB3cmFwLFxuICAgIHNtb290aDogc21vb3RoJDEsXG4gICAgc25hcDogc25hcCxcbiAgICBzdGVwczogc3RlcHMsXG4gICAgdHJhbnNmb3JtTWFwOiB0cmFuc2Zvcm1NYXBcbn0pO1xuXG52YXIgQ2hhaW5hYmxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDaGFpbmFibGUocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHByb3BzID0ge307XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIH1cbiAgICBDaGFpbmFibGUucHJvdG90eXBlLmFwcGx5TWlkZGxld2FyZSA9IGZ1bmN0aW9uIChtaWRkbGV3YXJlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShfX2Fzc2lnbih7fSwgdGhpcy5wcm9wcywgeyBtaWRkbGV3YXJlOiB0aGlzLnByb3BzLm1pZGRsZXdhcmUgPyBbbWlkZGxld2FyZV0uY29uY2F0KHRoaXMucHJvcHMubWlkZGxld2FyZSkgOiBbbWlkZGxld2FyZV0gfSkpO1xuICAgIH07XG4gICAgQ2hhaW5hYmxlLnByb3RvdHlwZS5waXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZnVuY3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGZ1bmNzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBpcGVkVXBkYXRlID0gZnVuY3MubGVuZ3RoID09PSAxID8gZnVuY3NbMF0gOiBwaXBlLmFwcGx5KHZvaWQgMCwgZnVuY3MpO1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBseU1pZGRsZXdhcmUoZnVuY3Rpb24gKHVwZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZShwaXBlZFVwZGF0ZSh2KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENoYWluYWJsZS5wcm90b3R5cGUud2hpbGUgPSBmdW5jdGlvbiAocHJlZGljYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwcGx5TWlkZGxld2FyZShmdW5jdGlvbiAodXBkYXRlLCBjb21wbGV0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZWRpY2F0ZSh2KSA/IHVwZGF0ZSh2KSA6IGNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENoYWluYWJsZS5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gKHByZWRpY2F0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBseU1pZGRsZXdhcmUoZnVuY3Rpb24gKHVwZGF0ZSwgY29tcGxldGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmVkaWNhdGUodikgJiYgdXBkYXRlKHYpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ2hhaW5hYmxlO1xufSgpO1xuXG52YXIgT2JzZXJ2ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmVyKF9hLCBvYnNlcnZlcikge1xuICAgICAgICB2YXIgbWlkZGxld2FyZSA9IF9hLm1pZGRsZXdhcmUsXG4gICAgICAgICAgICBvbkNvbXBsZXRlID0gX2Eub25Db21wbGV0ZTtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5vYnNlcnZlci51cGRhdGUpIF90aGlzLnVwZGF0ZU9ic2VydmVyKHYpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLm9ic2VydmVyLmNvbXBsZXRlICYmIF90aGlzLmlzQWN0aXZlKSBfdGhpcy5vYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgaWYgKF90aGlzLm9uQ29tcGxldGUpIF90aGlzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgICAgIF90aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMub2JzZXJ2ZXIuZXJyb3IgJiYgX3RoaXMuaXNBY3RpdmUpIF90aGlzLm9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICBfdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgICAgIHRoaXMudXBkYXRlT2JzZXJ2ZXIgPSBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyLnVwZGF0ZSh2KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlID0gb25Db21wbGV0ZTtcbiAgICAgICAgaWYgKG9ic2VydmVyLnVwZGF0ZSAmJiBtaWRkbGV3YXJlICYmIG1pZGRsZXdhcmUubGVuZ3RoKSB7XG4gICAgICAgICAgICBtaWRkbGV3YXJlLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMudXBkYXRlT2JzZXJ2ZXIgPSBtKF90aGlzLnVwZGF0ZU9ic2VydmVyLCBfdGhpcy5jb21wbGV0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gT2JzZXJ2ZXI7XG59KCk7XG52YXIgY3JlYXRlT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXJDYW5kaWRhdGUsIF9hLCBvbkNvbXBsZXRlKSB7XG4gICAgdmFyIG1pZGRsZXdhcmUgPSBfYS5taWRkbGV3YXJlO1xuICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXJDYW5kaWRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZlcih7IG1pZGRsZXdhcmU6IG1pZGRsZXdhcmUsIG9uQ29tcGxldGU6IG9uQ29tcGxldGUgfSwgeyB1cGRhdGU6IG9ic2VydmVyQ2FuZGlkYXRlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2ZXIoeyBtaWRkbGV3YXJlOiBtaWRkbGV3YXJlLCBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlIH0sIG9ic2VydmVyQ2FuZGlkYXRlKTtcbiAgICB9XG59O1xuXG52YXIgQWN0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBBY3Rpb24ucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICByZXR1cm4gbmV3IEFjdGlvbihwcm9wcyk7XG4gICAgfTtcbiAgICBBY3Rpb24ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKG9ic2VydmVyQ2FuZGlkYXRlKSB7XG4gICAgICAgIGlmIChvYnNlcnZlckNhbmRpZGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlckNhbmRpZGF0ZSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB7XG4gICAgICAgICAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGluaXQgPSBfYS5pbml0LFxuICAgICAgICAgICAgb2JzZXJ2ZXJQcm9wcyA9IF9fcmVzdChfYSwgW1wiaW5pdFwiXSk7XG4gICAgICAgIHZhciBvYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKG9ic2VydmVyQ2FuZGlkYXRlLCBvYnNlcnZlclByb3BzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5zdG9wKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgYXBpID0gaW5pdChvYnNlcnZlcik7XG4gICAgICAgIHN1YnNjcmlwdGlvbiA9IGFwaSA/IF9fYXNzaWduKHt9LCBzdWJzY3JpcHRpb24sIGFwaSkgOiBzdWJzY3JpcHRpb247XG4gICAgICAgIGlmIChvYnNlcnZlckNhbmRpZGF0ZS5yZWdpc3RlclBhcmVudCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXJDYW5kaWRhdGUucmVnaXN0ZXJQYXJlbnQoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNDb21wbGV0ZSkgc3Vic2NyaXB0aW9uLnN0b3AoKTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICB9O1xuICAgIHJldHVybiBBY3Rpb247XG59KENoYWluYWJsZSk7XG52YXIgYWN0aW9uID0gZnVuY3Rpb24gKGluaXQpIHtcbiAgICByZXR1cm4gbmV3IEFjdGlvbih7IGluaXQ6IGluaXQgfSk7XG59O1xuXG52YXIgQmFzZU11bHRpY2FzdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJhc2VNdWx0aWNhc3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQmFzZU11bHRpY2FzdCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN1YnNjcmliZXJzID0gW107XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQmFzZU11bHRpY2FzdC5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBCYXNlTXVsdGljYXN0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEJhc2VNdWx0aWNhc3QucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdWJzY3JpYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tpXS51cGRhdGUodik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEJhc2VNdWx0aWNhc3QucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChvYnNlcnZlckNhbmRpZGF0ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihvYnNlcnZlckNhbmRpZGF0ZSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMucHVzaChvYnNlcnZlcik7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IF90aGlzLnN1YnNjcmliZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIF90aGlzLnN1YnNjcmliZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfTtcbiAgICBCYXNlTXVsdGljYXN0LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHRoaXMucGFyZW50LnN0b3AoKTtcbiAgICB9O1xuICAgIEJhc2VNdWx0aWNhc3QucHJvdG90eXBlLnJlZ2lzdGVyUGFyZW50ID0gZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBzdWJzY3JpcHRpb247XG4gICAgfTtcbiAgICByZXR1cm4gQmFzZU11bHRpY2FzdDtcbn0oQ2hhaW5hYmxlKTtcblxudmFyIE11bHRpY2FzdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE11bHRpY2FzdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNdWx0aWNhc3QoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTXVsdGljYXN0LnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNdWx0aWNhc3QocHJvcHMpO1xuICAgIH07XG4gICAgcmV0dXJuIE11bHRpY2FzdDtcbn0oQmFzZU11bHRpY2FzdCk7XG52YXIgbXVsdGljYXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgTXVsdGljYXN0KCk7XG59O1xuXG52YXIgaXNWYWx1ZUxpc3QgPSBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHYpO1xufTtcbnZhciBpc1NpbmdsZVZhbHVlID0gZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgdHlwZU9mViA9IHR5cGVvZiB2O1xuICAgIHJldHVybiB0eXBlT2ZWID09PSAnc3RyaW5nJyB8fCB0eXBlT2ZWID09PSAnbnVtYmVyJztcbn07XG52YXIgVmFsdWVSZWFjdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFZhbHVlUmVhY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVmFsdWVSZWFjdGlvbihwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2NoZWR1bGVWZWxvY2l0eUNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG9uRnJhbWVFbmQoX3RoaXMudmVsb2NpdHlDaGVjayk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnZlbG9jaXR5Q2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudEZyYW1lVGltZSgpICE9PSBfdGhpcy5sYXN0VXBkYXRlZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnByZXYgPSBfdGhpcy5jdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5wcmV2ID0gX3RoaXMuY3VycmVudCA9IHByb3BzLnZhbHVlIHx8IDA7XG4gICAgICAgIGlmIChpc1NpbmdsZVZhbHVlKF90aGlzLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVDdXJyZW50ID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuY3VycmVudCA9IHY7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3RoaXMuZ2V0VmVsb2NpdHlPZkN1cnJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmdldFNpbmdsZVZlbG9jaXR5KF90aGlzLmN1cnJlbnQsIF90aGlzLnByZXYpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChpc1ZhbHVlTGlzdChfdGhpcy5jdXJyZW50KSkge1xuICAgICAgICAgICAgX3RoaXMudXBkYXRlQ3VycmVudCA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmN1cnJlbnQgPSB2LnNsaWNlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3RoaXMuZ2V0VmVsb2NpdHlPZkN1cnJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmdldExpc3RWZWxvY2l0eSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZUN1cnJlbnQgPSBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIF90aGlzLmN1cnJlbnQgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50W2tleV0gPSB2W2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX3RoaXMuZ2V0VmVsb2NpdHlPZkN1cnJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmdldE1hcFZlbG9jaXR5KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5pbml0aWFsU3Vic2NyaXB0aW9uKSBfdGhpcy5zdWJzY3JpYmUocHJvcHMuaW5pdGlhbFN1YnNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgVmFsdWVSZWFjdGlvbi5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmFsdWVSZWFjdGlvbihwcm9wcyk7XG4gICAgfTtcbiAgICBWYWx1ZVJlYWN0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gICAgfTtcbiAgICBWYWx1ZVJlYWN0aW9uLnByb3RvdHlwZS5nZXRWZWxvY2l0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmVsb2NpdHlPZkN1cnJlbnQoKTtcbiAgICB9O1xuICAgIFZhbHVlUmVhY3Rpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcywgdik7XG4gICAgICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudDtcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50KHYpO1xuICAgICAgICB0aGlzLnRpbWVEZWx0YSA9IHRpbWVTaW5jZUxhc3RGcmFtZSgpO1xuICAgICAgICB0aGlzLmxhc3RVcGRhdGVkID0gY3VycmVudEZyYW1lVGltZSgpO1xuICAgICAgICBvbkZyYW1lRW5kKHRoaXMuc2NoZWR1bGVWZWxvY2l0eUNoZWNrKTtcbiAgICB9O1xuICAgIFZhbHVlUmVhY3Rpb24ucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChvYnNlcnZlckNhbmRpZGF0ZSkge1xuICAgICAgICB2YXIgc3ViID0gX3N1cGVyLnByb3RvdHlwZS5zdWJzY3JpYmUuY2FsbCh0aGlzLCBvYnNlcnZlckNhbmRpZGF0ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlKHRoaXMuY3VycmVudCk7XG4gICAgICAgIHJldHVybiBzdWI7XG4gICAgfTtcbiAgICBWYWx1ZVJlYWN0aW9uLnByb3RvdHlwZS5nZXRTaW5nbGVWZWxvY2l0eSA9IGZ1bmN0aW9uIChjdXJyZW50LCBwcmV2KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgY3VycmVudCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHByZXYgPT09ICdudW1iZXInID8gc3BlZWRQZXJTZWNvbmQoY3VycmVudCAtIHByZXYsIHRoaXMudGltZURlbHRhKSA6IHNwZWVkUGVyU2Vjb25kKHBhcnNlRmxvYXQoY3VycmVudCkgLSBwYXJzZUZsb2F0KHByZXYpLCB0aGlzLnRpbWVEZWx0YSkgfHwgMDtcbiAgICB9O1xuICAgIFZhbHVlUmVhY3Rpb24ucHJvdG90eXBlLmdldExpc3RWZWxvY2l0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudC5tYXAoZnVuY3Rpb24gKGMsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5nZXRTaW5nbGVWZWxvY2l0eShjLCBfdGhpcy5wcmV2W2ldKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBWYWx1ZVJlYWN0aW9uLnByb3RvdHlwZS5nZXRNYXBWZWxvY2l0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZlbG9jaXR5ID0ge307XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZlbG9jaXR5W2tleV0gPSB0aGlzLmdldFNpbmdsZVZlbG9jaXR5KHRoaXMuY3VycmVudFtrZXldLCB0aGlzLnByZXZba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZlbG9jaXR5O1xuICAgIH07XG4gICAgcmV0dXJuIFZhbHVlUmVhY3Rpb247XG59KEJhc2VNdWx0aWNhc3QpO1xudmFyIHZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBpbml0aWFsU3Vic2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIG5ldyBWYWx1ZVJlYWN0aW9uKHsgdmFsdWU6IHZhbHVlLCBpbml0aWFsU3Vic2NyaXB0aW9uOiBpbml0aWFsU3Vic2NyaXB0aW9uIH0pO1xufTtcblxudmFyIG11bHRpID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGdldENvdW50ID0gX2EuZ2V0Q291bnQsXG4gICAgICAgIGdldEZpcnN0ID0gX2EuZ2V0Rmlyc3QsXG4gICAgICAgIGdldE91dHB1dCA9IF9hLmdldE91dHB1dCxcbiAgICAgICAgbWFwQXBpID0gX2EubWFwQXBpLFxuICAgICAgICBzZXRQcm9wID0gX2Euc2V0UHJvcCxcbiAgICAgICAgc3RhcnRBY3Rpb25zID0gX2Euc3RhcnRBY3Rpb25zO1xuICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9ucykge1xuICAgICAgICByZXR1cm4gYWN0aW9uKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIHVwZGF0ZSA9IF9hLnVwZGF0ZSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSA9IF9hLmNvbXBsZXRlLFxuICAgICAgICAgICAgICAgIGVycm9yID0gX2EuZXJyb3I7XG4gICAgICAgICAgICB2YXIgbnVtQWN0aW9ucyA9IGdldENvdW50KGFjdGlvbnMpO1xuICAgICAgICAgICAgdmFyIG91dHB1dCA9IGdldE91dHB1dCgpO1xuICAgICAgICAgICAgdmFyIHVwZGF0ZU91dHB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlKG91dHB1dCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG51bUNvbXBsZXRlZEFjdGlvbnMgPSAwO1xuICAgICAgICAgICAgdmFyIHN1YnMgPSBzdGFydEFjdGlvbnMoYWN0aW9ucywgZnVuY3Rpb24gKGEsIG5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaGFzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuc3RhcnQoe1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bUNvbXBsZXRlZEFjdGlvbnMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtQ29tcGxldGVkQWN0aW9ucyA9PT0gbnVtQWN0aW9ucykgb25GcmFtZVVwZGF0ZShjb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJvcChvdXRwdXQsIG5hbWUsIHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb25GcmFtZVVwZGF0ZSh1cGRhdGVPdXRwdXQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhnZXRGaXJzdChzdWJzKSkucmVkdWNlKGZ1bmN0aW9uIChhcGksIG1ldGhvZE5hbWUpIHtcbiAgICAgICAgICAgICAgICBhcGlbbWV0aG9kTmFtZV0gPSBtYXBBcGkoc3VicywgbWV0aG9kTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaTtcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn07XG5cbnZhciBjb21wb3NpdGUgPSAvKiNfX1BVUkVfXyovbXVsdGkoe1xuICAgIGdldE91dHB1dDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcbiAgICBnZXRDb3VudDogZnVuY3Rpb24gKHN1YnMpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHN1YnMpLmxlbmd0aDtcbiAgICB9LFxuICAgIGdldEZpcnN0OiBmdW5jdGlvbiAoc3Vicykge1xuICAgICAgICByZXR1cm4gc3Vic1tPYmplY3Qua2V5cyhzdWJzKVswXV07XG4gICAgfSxcbiAgICBtYXBBcGk6IGZ1bmN0aW9uIChzdWJzLCBtZXRob2ROYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoc3VicykucmVkdWNlKGZ1bmN0aW9uIChvdXRwdXQsIHByb3BLZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3Vic1twcm9wS2V5XVttZXRob2ROYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBhcmdzWzBdICYmIGFyZ3NbMF1bcHJvcEtleV0gIT09IHVuZGVmaW5lZCA/IG91dHB1dFtwcm9wS2V5XSA9IHN1YnNbcHJvcEtleV1bbWV0aG9kTmFtZV0oYXJnc1swXVtwcm9wS2V5XSkgOiBvdXRwdXRbcHJvcEtleV0gPSAoX2EgPSBzdWJzW3Byb3BLZXldKVttZXRob2ROYW1lXS5hcHBseShfYSwgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgc2V0UHJvcDogZnVuY3Rpb24gKG91dHB1dCwgbmFtZSwgdikge1xuICAgICAgICByZXR1cm4gb3V0cHV0W25hbWVdID0gdjtcbiAgICB9LFxuICAgIHN0YXJ0QWN0aW9uczogZnVuY3Rpb24gKGFjdGlvbnMsIHN0YXJ0ZXIpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGFjdGlvbnMpLnJlZHVjZShmdW5jdGlvbiAoc3Vicywga2V5KSB7XG4gICAgICAgICAgICBzdWJzW2tleV0gPSBzdGFydGVyKGFjdGlvbnNba2V5XSwga2V5KTtcbiAgICAgICAgICAgIHJldHVybiBzdWJzO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxufSk7XG5cbnZhciBwYXJhbGxlbCA9IC8qI19fUFVSRV9fKi9tdWx0aSh7XG4gICAgZ2V0T3V0cHV0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9LFxuICAgIGdldENvdW50OiBmdW5jdGlvbiAoc3Vicykge1xuICAgICAgICByZXR1cm4gc3Vicy5sZW5ndGg7XG4gICAgfSxcbiAgICBnZXRGaXJzdDogZnVuY3Rpb24gKHN1YnMpIHtcbiAgICAgICAgcmV0dXJuIHN1YnNbMF07XG4gICAgfSxcbiAgICBtYXBBcGk6IGZ1bmN0aW9uIChzdWJzLCBtZXRob2ROYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3Vicy5tYXAoZnVuY3Rpb24gKHN1YiwgaSkge1xuICAgICAgICAgICAgICAgIGlmIChzdWJbbWV0aG9kTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJnc1swXSkgPyBzdWJbbWV0aG9kTmFtZV0oYXJnc1swXVtpXSkgOiBzdWJbbWV0aG9kTmFtZV0uYXBwbHkoc3ViLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIHNldFByb3A6IGZ1bmN0aW9uIChvdXRwdXQsIG5hbWUsIHYpIHtcbiAgICAgICAgcmV0dXJuIG91dHB1dFtuYW1lXSA9IHY7XG4gICAgfSxcbiAgICBzdGFydEFjdGlvbnM6IGZ1bmN0aW9uIChhY3Rpb25zLCBzdGFydGVyKSB7XG4gICAgICAgIHJldHVybiBhY3Rpb25zLm1hcChmdW5jdGlvbiAoYWN0aW9uLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhcnRlcihhY3Rpb24sIGkpO1xuICAgICAgICB9KTtcbiAgICB9XG59KTtcbnZhciBwYXJhbGxlbCQxID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhY3Rpb25zID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYWN0aW9uc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gcGFyYWxsZWwoYWN0aW9ucyk7XG59O1xuXG52YXIgaXNDb2xvciA9IGNvbG9yLnRlc3Q7XG52YXIgY29udmVydFRvQ29sb3JBY3Rpb24gPSBmdW5jdGlvbiAoaW5pdCwgcHJvcHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHByb3BzLmZyb20gPT09ICdzdHJpbmcnICYmIGlzQ29sb3IocHJvcHMuZnJvbSkgJiYgdHlwZW9mIHByb3BzLnRvID09PSAnc3RyaW5nJyAmJiBpc0NvbG9yKHByb3BzLnRvKSA/IGluaXQoX19hc3NpZ24oe30sIHByb3BzLCB7IGZyb206IDAsIHRvOiAxIH0pKS5waXBlKGJsZW5kQ29sb3IocHJvcHMuZnJvbSwgcHJvcHMudG8pLCBjb2xvci50cmFuc2Zvcm0pIDogaW5pdChwcm9wcyk7XG59O1xudmFyIGNyZWF0ZVZlY3RvclRlc3RzID0gZnVuY3Rpb24gKHR5cGVUZXN0cykge1xuICAgIHZhciB0ZXN0TmFtZXMgPSBPYmplY3Qua2V5cyh0eXBlVGVzdHMpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldFZlY3RvcktleXM6IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICAgICAgcmV0dXJuIHRlc3ROYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKHZlY3RvcktleXMsIGtleSkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9PSB1bmRlZmluZWQgJiYgIXR5cGVUZXN0c1trZXldKHByb3BzW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHZlY3RvcktleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdmVjdG9yS2V5cztcbiAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgfSxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcHMgJiYgdGVzdE5hbWVzLnJlZHVjZShmdW5jdGlvbiAoaXNWZWN0b3IsIGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1ZlY3RvciB8fCBwcm9wc1trZXldICE9PSB1bmRlZmluZWQgJiYgIXR5cGVUZXN0c1trZXldKHByb3BzW2tleV0pO1xuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG52YXIgcmVkdWNlQXJyYXlWYWx1ZSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcywga2V5KSB7XG4gICAgICAgIHByb3BzW2tleV0gPSBwcm9wc1trZXldW2ldO1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfTtcbn07XG52YXIgY3JlYXRlQXJyYXlWZWN0b3IgPSBmdW5jdGlvbiAoaW5pdCwgcHJvcHMsIHZlY3RvcktleXMpIHtcbiAgICB2YXIgZmlyc3RWZWN0b3JLZXkgPSB2ZWN0b3JLZXlzWzBdO1xuICAgIHZhciBhY3Rpb25MaXN0ID0gcHJvcHNbZmlyc3RWZWN0b3JLZXldLm1hcChmdW5jdGlvbiAodiwgaSkge1xuICAgICAgICByZXR1cm4gY29udmVydFRvQ29sb3JBY3Rpb24oaW5pdCwgdmVjdG9yS2V5cy5yZWR1Y2UocmVkdWNlQXJyYXlWYWx1ZShpKSwgX19hc3NpZ24oe30sIHByb3BzKSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBwYXJhbGxlbCQxLmFwcGx5KHZvaWQgMCwgYWN0aW9uTGlzdCk7XG59O1xudmFyIHJlZHVjZU9iamVjdFZhbHVlID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvcHMsIHByb3BLZXkpIHtcbiAgICAgICAgcHJvcHNbcHJvcEtleV0gPSBwcm9wc1twcm9wS2V5XVtrZXldO1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfTtcbn07XG52YXIgY3JlYXRlT2JqZWN0VmVjdG9yID0gZnVuY3Rpb24gKGluaXQsIHByb3BzLCB2ZWN0b3JLZXlzKSB7XG4gICAgdmFyIGZpcnN0VmVjdG9yS2V5ID0gdmVjdG9yS2V5c1swXTtcbiAgICB2YXIgYWN0aW9uTWFwID0gT2JqZWN0LmtleXMocHJvcHNbZmlyc3RWZWN0b3JLZXldKS5yZWR1Y2UoZnVuY3Rpb24gKG1hcCwga2V5KSB7XG4gICAgICAgIG1hcFtrZXldID0gY29udmVydFRvQ29sb3JBY3Rpb24oaW5pdCwgdmVjdG9yS2V5cy5yZWR1Y2UocmVkdWNlT2JqZWN0VmFsdWUoa2V5KSwgX19hc3NpZ24oe30sIHByb3BzKSkpO1xuICAgICAgICByZXR1cm4gbWFwO1xuICAgIH0sIHt9KTtcbiAgICByZXR1cm4gY29tcG9zaXRlKGFjdGlvbk1hcCk7XG59O1xudmFyIGNyZWF0ZUNvbG9yVmVjdG9yID0gZnVuY3Rpb24gKGluaXQsIHByb3BzKSB7XG4gICAgcmV0dXJuIGNvbnZlcnRUb0NvbG9yQWN0aW9uKGluaXQsIHByb3BzKTtcbn07XG52YXIgdmVjdG9yQWN0aW9uID0gZnVuY3Rpb24gKGluaXQsIHR5cGVUZXN0cykge1xuICAgIHZhciBfYSA9IGNyZWF0ZVZlY3RvclRlc3RzKHR5cGVUZXN0cyksXG4gICAgICAgIHRlc3QgPSBfYS50ZXN0LFxuICAgICAgICBnZXRWZWN0b3JLZXlzID0gX2EuZ2V0VmVjdG9yS2V5cztcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHZhciBpc1ZlY3RvciA9IHRlc3QocHJvcHMpO1xuICAgICAgICBpZiAoIWlzVmVjdG9yKSByZXR1cm4gaW5pdChwcm9wcyk7XG4gICAgICAgIHZhciB2ZWN0b3JLZXlzID0gZ2V0VmVjdG9yS2V5cyhwcm9wcyk7XG4gICAgICAgIHZhciB0ZXN0S2V5ID0gdmVjdG9yS2V5c1swXTtcbiAgICAgICAgdmFyIHRlc3RQcm9wID0gcHJvcHNbdGVzdEtleV07XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRlc3RQcm9wKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFycmF5VmVjdG9yKGluaXQsIHByb3BzLCB2ZWN0b3JLZXlzKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGVzdFByb3AgPT09ICdzdHJpbmcnICYmIGlzQ29sb3IodGVzdFByb3ApKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ29sb3JWZWN0b3IoaW5pdCwgcHJvcHMsIHZlY3RvcktleXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU9iamVjdFZlY3Rvcihpbml0LCBwcm9wcywgdmVjdG9yS2V5cyk7XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxudmFyIGZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhY3Rpb24oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciB1cGRhdGUgPSBfYS51cGRhdGU7XG4gICAgICAgIHZhciBpc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHZhciBzdGFydFRpbWUgPSBjdXJyZW50VGltZSgpO1xuICAgICAgICB2YXIgbmV4dEZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFpc0FjdGl2ZSkgcmV0dXJuO1xuICAgICAgICAgICAgdXBkYXRlKE1hdGgubWF4KGN1cnJlbnRGcmFtZVRpbWUoKSAtIHN0YXJ0VGltZSwgMCkpO1xuICAgICAgICAgICAgb25GcmFtZVVwZGF0ZShuZXh0RnJhbWUpO1xuICAgICAgICB9O1xuICAgICAgICBvbkZyYW1lVXBkYXRlKG5leHRGcmFtZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG59O1xuXG52YXIgZGVjYXkgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBpZiAocHJvcHMgPT09IHZvaWQgMCkge1xuICAgICAgICBwcm9wcyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gYWN0aW9uKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgY29tcGxldGUgPSBfYS5jb21wbGV0ZSxcbiAgICAgICAgICAgIHVwZGF0ZSA9IF9hLnVwZGF0ZTtcbiAgICAgICAgdmFyIF9iID0gcHJvcHMudmVsb2NpdHksXG4gICAgICAgICAgICB2ZWxvY2l0eSA9IF9iID09PSB2b2lkIDAgPyAwIDogX2IsXG4gICAgICAgICAgICBfYyA9IHByb3BzLmZyb20sXG4gICAgICAgICAgICBmcm9tID0gX2MgPT09IHZvaWQgMCA/IDAgOiBfYyxcbiAgICAgICAgICAgIF9kID0gcHJvcHMucG93ZXIsXG4gICAgICAgICAgICBwb3dlciA9IF9kID09PSB2b2lkIDAgPyAwLjggOiBfZCxcbiAgICAgICAgICAgIF9lID0gcHJvcHMudGltZUNvbnN0YW50LFxuICAgICAgICAgICAgdGltZUNvbnN0YW50ID0gX2UgPT09IHZvaWQgMCA/IDM1MCA6IF9lLFxuICAgICAgICAgICAgX2YgPSBwcm9wcy5yZXN0RGVsdGEsXG4gICAgICAgICAgICByZXN0RGVsdGEgPSBfZiA9PT0gdm9pZCAwID8gMC41IDogX2YsXG4gICAgICAgICAgICBtb2RpZnlUYXJnZXQgPSBwcm9wcy5tb2RpZnlUYXJnZXQ7XG4gICAgICAgIHZhciBlbGFwc2VkID0gMDtcbiAgICAgICAgdmFyIGFtcGxpdHVkZSA9IHBvd2VyICogdmVsb2NpdHk7XG4gICAgICAgIHZhciBpZGVhbFRhcmdldCA9IE1hdGgucm91bmQoZnJvbSArIGFtcGxpdHVkZSk7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0eXBlb2YgbW9kaWZ5VGFyZ2V0ID09PSAndW5kZWZpbmVkJyA/IGlkZWFsVGFyZ2V0IDogbW9kaWZ5VGFyZ2V0KGlkZWFsVGFyZ2V0KTtcbiAgICAgICAgdmFyIHRpbWVyID0gZnJhbWUoKS5zdGFydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbGFwc2VkICs9IHRpbWVTaW5jZUxhc3RGcmFtZSgpO1xuICAgICAgICAgICAgdmFyIGRlbHRhID0gLWFtcGxpdHVkZSAqIE1hdGguZXhwKC1lbGFwc2VkIC8gdGltZUNvbnN0YW50KTtcbiAgICAgICAgICAgIHZhciBpc01vdmluZyA9IGRlbHRhID4gcmVzdERlbHRhIHx8IGRlbHRhIDwgLXJlc3REZWx0YTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gaXNNb3ZpbmcgPyB0YXJnZXQgKyBkZWx0YSA6IHRhcmdldDtcbiAgICAgICAgICAgIHVwZGF0ZShjdXJyZW50KTtcbiAgICAgICAgICAgIGlmICghaXNNb3ZpbmcpIHtcbiAgICAgICAgICAgICAgICB0aW1lci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVyLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KTtcbn07XG52YXIgaW5kZXggPSAvKiNfX1BVUkVfXyovdmVjdG9yQWN0aW9uKGRlY2F5LCB7XG4gICAgZnJvbTogbnVtYmVyLnRlc3QsXG4gICAgbW9kaWZ5VGFyZ2V0OiBmdW5jdGlvbiAoZnVuYykge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGZ1bmMgPT09ICdmdW5jdGlvbic7XG4gICAgfSxcbiAgICB2ZWxvY2l0eTogbnVtYmVyLnRlc3Rcbn0pO1xuXG52YXIgREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEggPSAxLjUyNTtcbnZhciBjcmVhdGVSZXZlcnNlZEVhc2luZyA9IGZ1bmN0aW9uIChlYXNpbmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICAgICAgcmV0dXJuIDEgLSBlYXNpbmcoMSAtIHApO1xuICAgIH07XG59O1xudmFyIGNyZWF0ZU1pcnJvcmVkRWFzaW5nID0gZnVuY3Rpb24gKGVhc2luZykge1xuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgICAgICByZXR1cm4gcCA8PSAwLjUgPyBlYXNpbmcoMiAqIHApIC8gMiA6ICgyIC0gZWFzaW5nKDIgKiAoMSAtIHApKSkgLyAyO1xuICAgIH07XG59O1xudmFyIGxpbmVhciA9IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHA7XG59O1xudmFyIGNyZWF0ZUV4cG9JbiA9IGZ1bmN0aW9uIChwb3dlcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3cocCwgcG93ZXIpO1xuICAgIH07XG59O1xudmFyIGVhc2VJbiA9IC8qI19fUFVSRV9fKi9jcmVhdGVFeHBvSW4oMik7XG52YXIgZWFzZU91dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVSZXZlcnNlZEVhc2luZyhlYXNlSW4pO1xudmFyIGVhc2VJbk91dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVNaXJyb3JlZEVhc2luZyhlYXNlSW4pO1xudmFyIGNpcmNJbiA9IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocCkpO1xufTtcbnZhciBjaXJjT3V0ID0gLyojX19QVVJFX18qL2NyZWF0ZVJldmVyc2VkRWFzaW5nKGNpcmNJbik7XG52YXIgY2lyY0luT3V0ID0gLyojX19QVVJFX18qL2NyZWF0ZU1pcnJvcmVkRWFzaW5nKGNpcmNPdXQpO1xudmFyIGNyZWF0ZUJhY2tJbiA9IGZ1bmN0aW9uIChwb3dlcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgICAgICByZXR1cm4gcCAqIHAgKiAoKHBvd2VyICsgMSkgKiBwIC0gcG93ZXIpO1xuICAgIH07XG59O1xudmFyIGJhY2tJbiA9IC8qI19fUFVSRV9fKi9jcmVhdGVCYWNrSW4oREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xudmFyIGJhY2tPdXQgPSAvKiNfX1BVUkVfXyovY3JlYXRlUmV2ZXJzZWRFYXNpbmcoYmFja0luKTtcbnZhciBiYWNrSW5PdXQgPSAvKiNfX1BVUkVfXyovY3JlYXRlTWlycm9yZWRFYXNpbmcoYmFja0luKTtcbnZhciBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gICAgdmFyIGJhY2tFYXNpbmcgPSBjcmVhdGVCYWNrSW4ocG93ZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgICAgICByZXR1cm4gKHAgKj0gMikgPCAxID8gMC41ICogYmFja0Vhc2luZyhwKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHAgLSAxKSkpO1xuICAgIH07XG59O1xudmFyIGFudGljaXBhdGUgPSAvKiNfX1BVUkVfXyovY3JlYXRlQW50aWNpcGF0ZUVhc2luZyhERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG52YXIgTkVXVE9OX0lURVJBVElPTlMgPSA4O1xudmFyIE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMTtcbnZhciBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDE7XG52YXIgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMDtcbnZhciBLX1NQTElORV9UQUJMRV9TSVpFID0gMTE7XG52YXIgS19TQU1QTEVfU1RFUF9TSVpFID0gMS4wIC8gKEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLjApO1xudmFyIEZMT0FUXzMyX1NVUFBPUlRFRCA9IHR5cGVvZiBGbG9hdDMyQXJyYXkgIT09ICd1bmRlZmluZWQnO1xudmFyIGEgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgcmV0dXJuIDEuMCAtIDMuMCAqIGEyICsgMy4wICogYTE7XG59O1xudmFyIGIgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgcmV0dXJuIDMuMCAqIGEyIC0gNi4wICogYTE7XG59O1xudmFyIGMgPSBmdW5jdGlvbiAoYTEpIHtcbiAgICByZXR1cm4gMy4wICogYTE7XG59O1xudmFyIGdldFNsb3BlID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgIHJldHVybiAzLjAgKiBhKGExLCBhMikgKiB0ICogdCArIDIuMCAqIGIoYTEsIGEyKSAqIHQgKyBjKGExKTtcbn07XG52YXIgY2FsY0JlemllciA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICByZXR1cm4gKChhKGExLCBhMikgKiB0ICsgYihhMSwgYTIpKSAqIHQgKyBjKGExKSkgKiB0O1xufTtcbmZ1bmN0aW9uIGN1YmljQmV6aWVyKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBGTE9BVF8zMl9TVVBQT1JURUQgPyBuZXcgRmxvYXQzMkFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpIDogbmV3IEFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpO1xuICAgIHZhciBfcHJlY29tcHV0ZWQgPSBmYWxzZTtcbiAgICB2YXIgYmluYXJ5U3ViZGl2aWRlID0gZnVuY3Rpb24gKGFYLCBhQSwgYUIpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY3VycmVudFg7XG4gICAgICAgIHZhciBjdXJyZW50VDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgICAgICAgICBhQiA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBTVUJESVZJU0lPTl9QUkVDSVNJT04gJiYgKytpIDwgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMpO1xuICAgICAgICByZXR1cm4gY3VycmVudFQ7XG4gICAgfTtcbiAgICB2YXIgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSBmdW5jdGlvbiAoYVgsIGFHdWVzc1QpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY3VycmVudFNsb3BlID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnRYO1xuICAgICAgICBmb3IgKDsgaSA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2kpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICB9O1xuICAgIHZhciBjYWxjU2FtcGxlVmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEtfU1BMSU5FX1RBQkxFX1NJWkU7ICsraSkge1xuICAgICAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBnZXRURm9yWCA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDAuMDtcbiAgICAgICAgdmFyIGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgICAgICB2YXIgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxO1xuICAgICAgICB2YXIgZGlzdCA9IDAuMDtcbiAgICAgICAgdmFyIGd1ZXNzRm9yVCA9IDAuMDtcbiAgICAgICAgdmFyIGluaXRpYWxTbG9wZSA9IDAuMDtcbiAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgIH1cbiAgICAgICAgLS1jdXJyZW50U2FtcGxlO1xuICAgICAgICBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgICAgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgICAgICBpZiAoaW5pdGlhbFNsb3BlID49IE5FV1RPTl9NSU5fU0xPUEUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBLX1NBTVBMRV9TVEVQX1NJWkUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgcHJlY29tcHV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3ByZWNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKG1YMSAhPSBtWTEgfHwgbVgyICE9IG1ZMikge1xuICAgICAgICAgICAgY2FsY1NhbXBsZVZhbHVlcygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgcmVzb2x2ZXIgPSBmdW5jdGlvbiAoYVgpIHtcbiAgICAgICAgdmFyIHJldHVyblZhbHVlO1xuICAgICAgICBpZiAoIV9wcmVjb21wdXRlZCkge1xuICAgICAgICAgICAgcHJlY29tcHV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBhWDtcbiAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGNhbGNCZXppZXIoZ2V0VEZvclgoYVgpLCBtWTEsIG1ZMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH07XG4gICAgcmV0dXJuIHJlc29sdmVyO1xufVxuXG52YXIgZWFzaW5nID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIGNyZWF0ZVJldmVyc2VkRWFzaW5nOiBjcmVhdGVSZXZlcnNlZEVhc2luZyxcbiAgICBjcmVhdGVNaXJyb3JlZEVhc2luZzogY3JlYXRlTWlycm9yZWRFYXNpbmcsXG4gICAgbGluZWFyOiBsaW5lYXIsXG4gICAgY3JlYXRlRXhwb0luOiBjcmVhdGVFeHBvSW4sXG4gICAgZWFzZUluOiBlYXNlSW4sXG4gICAgZWFzZU91dDogZWFzZU91dCxcbiAgICBlYXNlSW5PdXQ6IGVhc2VJbk91dCxcbiAgICBjaXJjSW46IGNpcmNJbixcbiAgICBjaXJjT3V0OiBjaXJjT3V0LFxuICAgIGNpcmNJbk91dDogY2lyY0luT3V0LFxuICAgIGNyZWF0ZUJhY2tJbjogY3JlYXRlQmFja0luLFxuICAgIGJhY2tJbjogYmFja0luLFxuICAgIGJhY2tPdXQ6IGJhY2tPdXQsXG4gICAgYmFja0luT3V0OiBiYWNrSW5PdXQsXG4gICAgY3JlYXRlQW50aWNpcGF0ZUVhc2luZzogY3JlYXRlQW50aWNpcGF0ZUVhc2luZyxcbiAgICBhbnRpY2lwYXRlOiBhbnRpY2lwYXRlLFxuICAgIGN1YmljQmV6aWVyOiBjdWJpY0JlemllclxufSk7XG5cbnZhciBzY3J1YmJlciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBfYiA9IF9hLmZyb20sXG4gICAgICAgIGZyb20gPSBfYiA9PT0gdm9pZCAwID8gMCA6IF9iLFxuICAgICAgICBfYyA9IF9hLnRvLFxuICAgICAgICB0byA9IF9jID09PSB2b2lkIDAgPyAxIDogX2MsXG4gICAgICAgIF9kID0gX2EuZWFzZSxcbiAgICAgICAgZWFzZSA9IF9kID09PSB2b2lkIDAgPyBsaW5lYXIgOiBfZDtcbiAgICByZXR1cm4gYWN0aW9uKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgdXBkYXRlID0gX2EudXBkYXRlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VlazogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZShwcm9ncmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSkucGlwZShlYXNlLCBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZnJvbSwgdG8sIHYpO1xuICAgIH0pO1xufTtcbnZhciBzY3J1YmJlciQxID0gLyojX19QVVJFX18qL3ZlY3RvckFjdGlvbihzY3J1YmJlciwge1xuICAgIGVhc2U6IGZ1bmN0aW9uIChmdW5jKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgZnVuYyA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9LFxuICAgIGZyb206IG51bWJlci50ZXN0LFxuICAgIHRvOiBudW1iZXIudGVzdFxufSk7XG5cbnZhciBjbGFtcFByb2dyZXNzID0gLyojX19QVVJFX18qL2NsYW1wKDAsIDEpO1xudmFyIHR3ZWVuID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgaWYgKHByb3BzID09PSB2b2lkIDApIHtcbiAgICAgICAgcHJvcHMgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIGFjdGlvbihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHVwZGF0ZSA9IF9hLnVwZGF0ZSxcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX2EuY29tcGxldGU7XG4gICAgICAgIHZhciBfYiA9IHByb3BzLmR1cmF0aW9uLFxuICAgICAgICAgICAgZHVyYXRpb24gPSBfYiA9PT0gdm9pZCAwID8gMzAwIDogX2IsXG4gICAgICAgICAgICBfYyA9IHByb3BzLmVhc2UsXG4gICAgICAgICAgICBlYXNlID0gX2MgPT09IHZvaWQgMCA/IGVhc2VPdXQgOiBfYyxcbiAgICAgICAgICAgIF9kID0gcHJvcHMuZmxpcCxcbiAgICAgICAgICAgIGZsaXAgPSBfZCA9PT0gdm9pZCAwID8gMCA6IF9kLFxuICAgICAgICAgICAgX2UgPSBwcm9wcy5sb29wLFxuICAgICAgICAgICAgbG9vcCA9IF9lID09PSB2b2lkIDAgPyAwIDogX2UsXG4gICAgICAgICAgICBfZiA9IHByb3BzLnlveW8sXG4gICAgICAgICAgICB5b3lvID0gX2YgPT09IHZvaWQgMCA/IDAgOiBfZjtcbiAgICAgICAgdmFyIF9nID0gcHJvcHMuZnJvbSxcbiAgICAgICAgICAgIGZyb20gPSBfZyA9PT0gdm9pZCAwID8gMCA6IF9nLFxuICAgICAgICAgICAgX2ggPSBwcm9wcy50byxcbiAgICAgICAgICAgIHRvID0gX2ggPT09IHZvaWQgMCA/IDEgOiBfaCxcbiAgICAgICAgICAgIF9qID0gcHJvcHMuZWxhcHNlZCxcbiAgICAgICAgICAgIGVsYXBzZWQgPSBfaiA9PT0gdm9pZCAwID8gMCA6IF9qLFxuICAgICAgICAgICAgX2sgPSBwcm9wcy5wbGF5RGlyZWN0aW9uLFxuICAgICAgICAgICAgcGxheURpcmVjdGlvbiA9IF9rID09PSB2b2lkIDAgPyAxIDogX2ssXG4gICAgICAgICAgICBfbCA9IHByb3BzLmZsaXBDb3VudCxcbiAgICAgICAgICAgIGZsaXBDb3VudCA9IF9sID09PSB2b2lkIDAgPyAwIDogX2wsXG4gICAgICAgICAgICBfbSA9IHByb3BzLnlveW9Db3VudCxcbiAgICAgICAgICAgIHlveW9Db3VudCA9IF9tID09PSB2b2lkIDAgPyAwIDogX20sXG4gICAgICAgICAgICBfbyA9IHByb3BzLmxvb3BDb3VudCxcbiAgICAgICAgICAgIGxvb3BDb3VudCA9IF9vID09PSB2b2lkIDAgPyAwIDogX287XG4gICAgICAgIHZhciBwbGF5aGVhZCA9IHNjcnViYmVyJDEoeyBmcm9tOiBmcm9tLCB0bzogdG8sIGVhc2U6IGVhc2UgfSkuc3RhcnQodXBkYXRlKTtcbiAgICAgICAgdmFyIHByb2dyZXNzID0gMDtcbiAgICAgICAgdmFyIHR3ZWVuVGltZXI7XG4gICAgICAgIHZhciBpc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgcmV2ZXJzZVR3ZWVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBpc1R3ZWVuQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaXNDb21wbGV0ZSA9IHBsYXlEaXJlY3Rpb24gPT09IDEgPyBpc0FjdGl2ZSAmJiBlbGFwc2VkID49IGR1cmF0aW9uIDogaXNBY3RpdmUgJiYgZWxhcHNlZCA8PSAwO1xuICAgICAgICAgICAgaWYgKCFpc0NvbXBsZXRlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAoaXNDb21wbGV0ZSAmJiAhbG9vcCAmJiAhZmxpcCAmJiAheW95bykgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB2YXIgaXNTdGVwVGFrZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChsb29wICYmIGxvb3BDb3VudCA8IGxvb3ApIHtcbiAgICAgICAgICAgICAgICBlbGFwc2VkID0gMDtcbiAgICAgICAgICAgICAgICBsb29wQ291bnQrKztcbiAgICAgICAgICAgICAgICBpc1N0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZsaXAgJiYgZmxpcENvdW50IDwgZmxpcCkge1xuICAgICAgICAgICAgICAgIGVsYXBzZWQgPSBkdXJhdGlvbiAtIGVsYXBzZWQ7XG4gICAgICAgICAgICAgICAgX2EgPSBbdG8sIGZyb21dLCBmcm9tID0gX2FbMF0sIHRvID0gX2FbMV07XG4gICAgICAgICAgICAgICAgcGxheWhlYWQgPSBzY3J1YmJlciQxKHsgZnJvbTogZnJvbSwgdG86IHRvLCBlYXNlOiBlYXNlIH0pLnN0YXJ0KHVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgZmxpcENvdW50Kys7XG4gICAgICAgICAgICAgICAgaXNTdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh5b3lvICYmIHlveW9Db3VudCA8IHlveW8pIHtcbiAgICAgICAgICAgICAgICByZXZlcnNlVHdlZW4oKTtcbiAgICAgICAgICAgICAgICB5b3lvQ291bnQrKztcbiAgICAgICAgICAgICAgICBpc1N0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gIWlzU3RlcFRha2VuO1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgdXBkYXRlVHdlZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcm9ncmVzcyA9IGNsYW1wUHJvZ3Jlc3MoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoMCwgZHVyYXRpb24sIGVsYXBzZWQpKTtcbiAgICAgICAgICAgIHBsYXloZWFkLnNlZWsocHJvZ3Jlc3MpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgc3RhcnRUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHR3ZWVuVGltZXIgPSBmcmFtZSgpLnN0YXJ0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBlbGFwc2VkICs9IHRpbWVTaW5jZUxhc3RGcmFtZSgpICogcGxheURpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICB1cGRhdGVUd2VlbigpO1xuICAgICAgICAgICAgICAgIGlmIChpc1R3ZWVuQ29tcGxldGUoKSAmJiBjb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0d2VlblRpbWVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgb25GcmFtZVVwZGF0ZShjb21wbGV0ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBzdG9wVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHR3ZWVuVGltZXIpIHR3ZWVuVGltZXIuc3RvcCgpO1xuICAgICAgICB9O1xuICAgICAgICBzdGFydFRpbWVyKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0FjdGl2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc0FjdGl2ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRFbGFwc2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYW1wKDAsIGR1cmF0aW9uKShlbGFwc2VkKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRQcm9ncmVzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9ncmVzcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN1bWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VlazogZnVuY3Rpb24gKG5ld1Byb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgZWxhcHNlZCA9IGdldFZhbHVlRnJvbVByb2dyZXNzKDAsIGR1cmF0aW9uLCBuZXdQcm9ncmVzcyk7XG4gICAgICAgICAgICAgICAgb25GcmFtZVVwZGF0ZSh1cGRhdGVUd2VlbiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmV2ZXJzZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldmVyc2VUd2VlbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0pO1xufTtcblxudmFyIGNsYW1wUHJvZ3Jlc3MkMSA9IC8qI19fUFVSRV9fKi9jbGFtcCgwLCAxKTtcbnZhciBkZWZhdWx0RWFzaW5ncyA9IGZ1bmN0aW9uICh2YWx1ZXMsIGVhc2luZykge1xuICAgIHJldHVybiB2YWx1ZXMubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGVhc2luZyB8fCBlYXNlT3V0O1xuICAgIH0pLnNwbGljZSgwLCB2YWx1ZXMubGVuZ3RoIC0gMSk7XG59O1xudmFyIGRlZmF1bHRUaW1pbmdzID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgIHZhciBudW1WYWx1ZXMgPSB2YWx1ZXMubGVuZ3RoO1xuICAgIHJldHVybiB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgICAgICByZXR1cm4gaSAhPT0gMCA/IGkgLyAobnVtVmFsdWVzIC0gMSkgOiAwO1xuICAgIH0pO1xufTtcbnZhciBpbnRlcnBvbGF0ZVNjcnViYmVycyA9IGZ1bmN0aW9uIChpbnB1dCwgc2NydWJiZXJzLCB1cGRhdGUpIHtcbiAgICB2YXIgcmFuZ2VMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gICAgdmFyIGZpbmFsSW5wdXRJbmRleCA9IHJhbmdlTGVuZ3RoIC0gMTtcbiAgICB2YXIgZmluYWxTY3J1YmJlckluZGV4ID0gZmluYWxJbnB1dEluZGV4IC0gMTtcbiAgICB2YXIgc3VicyA9IHNjcnViYmVycy5tYXAoZnVuY3Rpb24gKHNjcnViKSB7XG4gICAgICAgIHJldHVybiBzY3J1Yi5zdGFydCh1cGRhdGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBpZiAodiA8PSBpbnB1dFswXSkge1xuICAgICAgICAgICAgc3Vic1swXS5zZWVrKDApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2ID49IGlucHV0W2ZpbmFsSW5wdXRJbmRleF0pIHtcbiAgICAgICAgICAgIHN1YnNbZmluYWxTY3J1YmJlckluZGV4XS5zZWVrKDEpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gMTtcbiAgICAgICAgZm9yICg7IGkgPCByYW5nZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXRbaV0gPiB2IHx8IGkgPT09IGZpbmFsSW5wdXRJbmRleCkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb2dyZXNzSW5SYW5nZSA9IGdldFByb2dyZXNzRnJvbVZhbHVlKGlucHV0W2kgLSAxXSwgaW5wdXRbaV0sIHYpO1xuICAgICAgICBzdWJzW2kgLSAxXS5zZWVrKGNsYW1wUHJvZ3Jlc3MkMShwcm9ncmVzc0luUmFuZ2UpKTtcbiAgICB9O1xufTtcbnZhciBrZXlmcmFtZXMgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgZWFzaW5ncyA9IF9hLmVhc2luZ3MsXG4gICAgICAgIF9iID0gX2EuZWFzZSxcbiAgICAgICAgZWFzZSA9IF9iID09PSB2b2lkIDAgPyBsaW5lYXIgOiBfYixcbiAgICAgICAgdGltZXMgPSBfYS50aW1lcyxcbiAgICAgICAgdmFsdWVzID0gX2EudmFsdWVzLFxuICAgICAgICB0d2VlblByb3BzID0gX19yZXN0KF9hLCBbXCJlYXNpbmdzXCIsIFwiZWFzZVwiLCBcInRpbWVzXCIsIFwidmFsdWVzXCJdKTtcbiAgICBlYXNpbmdzID0gQXJyYXkuaXNBcnJheShlYXNpbmdzKSA/IGVhc2luZ3MgOiBkZWZhdWx0RWFzaW5ncyh2YWx1ZXMsIGVhc2luZ3MpO1xuICAgIHRpbWVzID0gdGltZXMgfHwgZGVmYXVsdFRpbWluZ3ModmFsdWVzKTtcbiAgICB2YXIgc2NydWJiZXJzID0gZWFzaW5ncy5tYXAoZnVuY3Rpb24gKGVhc2luZywgaSkge1xuICAgICAgICByZXR1cm4gc2NydWJiZXIkMSh7XG4gICAgICAgICAgICBmcm9tOiB2YWx1ZXNbaV0sXG4gICAgICAgICAgICB0bzogdmFsdWVzW2kgKyAxXSxcbiAgICAgICAgICAgIGVhc2U6IGVhc2luZ1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHdlZW4oX19hc3NpZ24oe30sIHR3ZWVuUHJvcHMsIHsgZWFzZTogZWFzZSB9KSkuYXBwbHlNaWRkbGV3YXJlKGZ1bmN0aW9uICh1cGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRlU2NydWJiZXJzKHRpbWVzLCBzY3J1YmJlcnMsIHVwZGF0ZSk7XG4gICAgfSk7XG59O1xuXG52YXIgcGh5c2ljcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHByb3BzID0ge307XG4gICAgfVxuICAgIHJldHVybiBhY3Rpb24oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBjb21wbGV0ZSA9IF9hLmNvbXBsZXRlLFxuICAgICAgICAgICAgdXBkYXRlID0gX2EudXBkYXRlO1xuICAgICAgICB2YXIgX2IgPSBwcm9wcy5hY2NlbGVyYXRpb24sXG4gICAgICAgICAgICBhY2NlbGVyYXRpb24gPSBfYiA9PT0gdm9pZCAwID8gMCA6IF9iLFxuICAgICAgICAgICAgX2MgPSBwcm9wcy5mcmljdGlvbixcbiAgICAgICAgICAgIGZyaWN0aW9uID0gX2MgPT09IHZvaWQgMCA/IDAgOiBfYyxcbiAgICAgICAgICAgIF9kID0gcHJvcHMudmVsb2NpdHksXG4gICAgICAgICAgICB2ZWxvY2l0eSA9IF9kID09PSB2b2lkIDAgPyAwIDogX2QsXG4gICAgICAgICAgICBzcHJpbmdTdHJlbmd0aCA9IHByb3BzLnNwcmluZ1N0cmVuZ3RoLFxuICAgICAgICAgICAgdG8gPSBwcm9wcy50bztcbiAgICAgICAgdmFyIF9lID0gcHJvcHMucmVzdFNwZWVkLFxuICAgICAgICAgICAgcmVzdFNwZWVkID0gX2UgPT09IHZvaWQgMCA/IDAuMDAxIDogX2UsXG4gICAgICAgICAgICBfZiA9IHByb3BzLmZyb20sXG4gICAgICAgICAgICBmcm9tID0gX2YgPT09IHZvaWQgMCA/IDAgOiBfZjtcbiAgICAgICAgdmFyIGN1cnJlbnQgPSBmcm9tO1xuICAgICAgICB2YXIgdGltZXIgPSBmcmFtZSgpLnN0YXJ0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbGFwc2VkID0gTWF0aC5tYXgodGltZVNpbmNlTGFzdEZyYW1lKCksIDE2KTtcbiAgICAgICAgICAgIGlmIChhY2NlbGVyYXRpb24pIHZlbG9jaXR5ICs9IHNwZWVkUGVyRnJhbWUoYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIGlmIChmcmljdGlvbikgdmVsb2NpdHkgKj0gTWF0aC5wb3coMSAtIGZyaWN0aW9uLCBlbGFwc2VkIC8gMTAwKTtcbiAgICAgICAgICAgIGlmIChzcHJpbmdTdHJlbmd0aCAhPT0gdW5kZWZpbmVkICYmIHRvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VUb1RhcmdldCA9IHRvIC0gY3VycmVudDtcbiAgICAgICAgICAgICAgICB2ZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogc3BlZWRQZXJGcmFtZShzcHJpbmdTdHJlbmd0aCwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50ICs9IHNwZWVkUGVyRnJhbWUodmVsb2NpdHksIGVsYXBzZWQpO1xuICAgICAgICAgICAgdXBkYXRlKGN1cnJlbnQpO1xuICAgICAgICAgICAgdmFyIGlzQ29tcGxldGUgPSByZXN0U3BlZWQgIT09IGZhbHNlICYmICghdmVsb2NpdHkgfHwgTWF0aC5hYnModmVsb2NpdHkpIDw9IHJlc3RTcGVlZCk7XG4gICAgICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHRpbWVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gdjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRBY2NlbGVyYXRpb246IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgYWNjZWxlcmF0aW9uID0gdjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRGcmljdGlvbjogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICBmcmljdGlvbiA9IHY7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0U3ByaW5nU3RyZW5ndGg6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgc3ByaW5nU3RyZW5ndGggPSB2O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFNwcmluZ1RhcmdldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICB0byA9IHY7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0VmVsb2NpdHk6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgdmVsb2NpdHkgPSB2O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGltZXIuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0pO1xufTtcbnZhciBpbmRleCQxID0gLyojX19QVVJFX18qL3ZlY3RvckFjdGlvbihwaHlzaWNzLCB7XG4gICAgYWNjZWxlcmF0aW9uOiBudW1iZXIudGVzdCxcbiAgICBmcmljdGlvbjogbnVtYmVyLnRlc3QsXG4gICAgdmVsb2NpdHk6IG51bWJlci50ZXN0LFxuICAgIGZyb206IG51bWJlci50ZXN0LFxuICAgIHRvOiBudW1iZXIudGVzdCxcbiAgICBzcHJpbmdTdHJlbmd0aDogbnVtYmVyLnRlc3Rcbn0pO1xuXG52YXIgc3ByaW5nID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgaWYgKHByb3BzID09PSB2b2lkIDApIHtcbiAgICAgICAgcHJvcHMgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIGFjdGlvbihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHVwZGF0ZSA9IF9hLnVwZGF0ZSxcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX2EuY29tcGxldGU7XG4gICAgICAgIHZhciBfYiA9IHByb3BzLnZlbG9jaXR5LFxuICAgICAgICAgICAgdmVsb2NpdHkgPSBfYiA9PT0gdm9pZCAwID8gMC4wIDogX2I7XG4gICAgICAgIHZhciBfYyA9IHByb3BzLmZyb20sXG4gICAgICAgICAgICBmcm9tID0gX2MgPT09IHZvaWQgMCA/IDAuMCA6IF9jLFxuICAgICAgICAgICAgX2QgPSBwcm9wcy50byxcbiAgICAgICAgICAgIHRvID0gX2QgPT09IHZvaWQgMCA/IDAuMCA6IF9kLFxuICAgICAgICAgICAgX2UgPSBwcm9wcy5zdGlmZm5lc3MsXG4gICAgICAgICAgICBzdGlmZm5lc3MgPSBfZSA9PT0gdm9pZCAwID8gMTAwIDogX2UsXG4gICAgICAgICAgICBfZiA9IHByb3BzLmRhbXBpbmcsXG4gICAgICAgICAgICBkYW1waW5nID0gX2YgPT09IHZvaWQgMCA/IDEwIDogX2YsXG4gICAgICAgICAgICBfZyA9IHByb3BzLm1hc3MsXG4gICAgICAgICAgICBtYXNzID0gX2cgPT09IHZvaWQgMCA/IDEuMCA6IF9nLFxuICAgICAgICAgICAgX2ggPSBwcm9wcy5yZXN0U3BlZWQsXG4gICAgICAgICAgICByZXN0U3BlZWQgPSBfaCA9PT0gdm9pZCAwID8gMC4wMSA6IF9oLFxuICAgICAgICAgICAgX2ogPSBwcm9wcy5yZXN0RGVsdGEsXG4gICAgICAgICAgICByZXN0RGVsdGEgPSBfaiA9PT0gdm9pZCAwID8gMC4wMSA6IF9qO1xuICAgICAgICB2YXIgaW5pdGlhbFZlbG9jaXR5ID0gdmVsb2NpdHkgPyAtKHZlbG9jaXR5IC8gMTAwMCkgOiAwLjA7XG4gICAgICAgIHZhciB0ID0gMDtcbiAgICAgICAgdmFyIGRlbHRhID0gdG8gLSBmcm9tO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBmcm9tO1xuICAgICAgICB2YXIgcHJldlBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHZhciBzcHJpbmdUaW1lciA9IGZyYW1lKCkuc3RhcnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRpbWVEZWx0YSA9IHRpbWVTaW5jZUxhc3RGcmFtZSgpO1xuICAgICAgICAgICAgdCArPSB0aW1lRGVsdGE7XG4gICAgICAgICAgICB2YXIgZGFtcGluZ1JhdGlvID0gZGFtcGluZyAvICgyICogTWF0aC5zcXJ0KHN0aWZmbmVzcyAqIG1hc3MpKTtcbiAgICAgICAgICAgIHZhciBhbmd1bGFyRnJlcSA9IE1hdGguc3FydChzdGlmZm5lc3MgLyBtYXNzKSAvIDEwMDA7XG4gICAgICAgICAgICBwcmV2UG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgICAgIGlmIChkYW1waW5nUmF0aW8gPCAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVudmVsb3BlID0gTWF0aC5leHAoLWRhbXBpbmdSYXRpbyAqIGFuZ3VsYXJGcmVxICogdCk7XG4gICAgICAgICAgICAgICAgdmFyIGV4cG9EZWNheSA9IGFuZ3VsYXJGcmVxICogTWF0aC5zcXJ0KDEuMCAtIGRhbXBpbmdSYXRpbyAqIGRhbXBpbmdSYXRpbyk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0byAtIGVudmVsb3BlICogKChpbml0aWFsVmVsb2NpdHkgKyBkYW1waW5nUmF0aW8gKiBhbmd1bGFyRnJlcSAqIGRlbHRhKSAvIGV4cG9EZWNheSAqIE1hdGguc2luKGV4cG9EZWNheSAqIHQpICsgZGVsdGEgKiBNYXRoLmNvcyhleHBvRGVjYXkgKiB0KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlbnZlbG9wZSA9IE1hdGguZXhwKC1hbmd1bGFyRnJlcSAqIHQpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG8gLSBlbnZlbG9wZSAqIChkZWx0YSArIChpbml0aWFsVmVsb2NpdHkgKyBhbmd1bGFyRnJlcSAqIGRlbHRhKSAqIHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmVsb2NpdHkgPSBzcGVlZFBlclNlY29uZChwb3NpdGlvbiAtIHByZXZQb3NpdGlvbiwgdGltZURlbHRhKTtcbiAgICAgICAgICAgIHZhciBpc0JlbG93VmVsb2NpdHlUaHJlc2hvbGQgPSBNYXRoLmFicyh2ZWxvY2l0eSkgPD0gcmVzdFNwZWVkO1xuICAgICAgICAgICAgdmFyIGlzQmVsb3dEaXNwbGFjZW1lbnRUaHJlc2hvbGQgPSBNYXRoLmFicyh0byAtIHBvc2l0aW9uKSA8PSByZXN0RGVsdGE7XG4gICAgICAgICAgICBpZiAoaXNCZWxvd1ZlbG9jaXR5VGhyZXNob2xkICYmIGlzQmVsb3dEaXNwbGFjZW1lbnRUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvO1xuICAgICAgICAgICAgICAgIHVwZGF0ZShwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgc3ByaW5nVGltZXIuc3RvcCgpO1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVwZGF0ZShwb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzcHJpbmdUaW1lci5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG59O1xudmFyIGluZGV4JDIgPSAvKiNfX1BVUkVfXyovdmVjdG9yQWN0aW9uKHNwcmluZywge1xuICAgIGZyb206IG51bWJlci50ZXN0LFxuICAgIHRvOiBudW1iZXIudGVzdCxcbiAgICBzdGlmZm5lc3M6IG51bWJlci50ZXN0LFxuICAgIGRhbXBpbmc6IG51bWJlci50ZXN0LFxuICAgIG1hc3M6IG51bWJlci50ZXN0LFxuICAgIHZlbG9jaXR5OiBudW1iZXIudGVzdFxufSk7XG5cbnZhciBERUZBVUxUX0RVUkFUSU9OID0gMzAwO1xudmFyIGZsYXR0ZW5UaW1pbmdzID0gZnVuY3Rpb24gKGluc3RydWN0aW9ucykge1xuICAgIHZhciBmbGF0SW5zdHJ1Y3Rpb25zID0gW107XG4gICAgdmFyIGxhc3RBcmcgPSBpbnN0cnVjdGlvbnNbaW5zdHJ1Y3Rpb25zLmxlbmd0aCAtIDFdO1xuICAgIHZhciBpc1N0YWdnZXJlZCA9IHR5cGVvZiBsYXN0QXJnID09PSAnbnVtYmVyJztcbiAgICB2YXIgc3RhZ2dlckRlbGF5ID0gaXNTdGFnZ2VyZWQgPyBsYXN0QXJnIDogMDtcbiAgICB2YXIgc2VnbWVudHMgPSBpc1N0YWdnZXJlZCA/IGluc3RydWN0aW9ucy5zbGljZSgwLCAtMSkgOiBpbnN0cnVjdGlvbnM7XG4gICAgdmFyIG51bVNlZ21lbnRzID0gc2VnbWVudHMubGVuZ3RoO1xuICAgIHZhciBvZmZzZXQgPSAwO1xuICAgIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgZmxhdEluc3RydWN0aW9ucy5wdXNoKGl0ZW0pO1xuICAgICAgICBpZiAoaSAhPT0gbnVtU2VnbWVudHMgLSAxKSB7XG4gICAgICAgICAgICB2YXIgZHVyYXRpb24gPSBpdGVtLmR1cmF0aW9uIHx8IERFRkFVTFRfRFVSQVRJT047XG4gICAgICAgICAgICBvZmZzZXQgKz0gc3RhZ2dlckRlbGF5O1xuICAgICAgICAgICAgZmxhdEluc3RydWN0aW9ucy5wdXNoKFwiLVwiICsgKGR1cmF0aW9uIC0gb2Zmc2V0KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmxhdEluc3RydWN0aW9ucztcbn07XG52YXIgZmxhdHRlbkFycmF5SW5zdHJ1Y3Rpb25zID0gZnVuY3Rpb24gKGluc3RydWN0aW9ucywgaW5zdHJ1Y3Rpb24pIHtcbiAgICBBcnJheS5pc0FycmF5KGluc3RydWN0aW9uKSA/IGluc3RydWN0aW9ucy5wdXNoLmFwcGx5KGluc3RydWN0aW9ucywgZmxhdHRlblRpbWluZ3MoaW5zdHJ1Y3Rpb24pKSA6IGluc3RydWN0aW9ucy5wdXNoKGluc3RydWN0aW9uKTtcbiAgICByZXR1cm4gaW5zdHJ1Y3Rpb25zO1xufTtcbnZhciBjb252ZXJ0RGVmVG9Qcm9wcyA9IGZ1bmN0aW9uIChwcm9wcywgZGVmLCBpKSB7XG4gICAgdmFyIGR1cmF0aW9uID0gcHJvcHMuZHVyYXRpb24sXG4gICAgICAgIGVhc2luZ3MgPSBwcm9wcy5lYXNpbmdzLFxuICAgICAgICB0aW1lcyA9IHByb3BzLnRpbWVzLFxuICAgICAgICB2YWx1ZXMgPSBwcm9wcy52YWx1ZXM7XG4gICAgdmFyIG51bVZhbHVlcyA9IHZhbHVlcy5sZW5ndGg7XG4gICAgdmFyIHByZXZUaW1lVG8gPSB0aW1lc1tudW1WYWx1ZXMgLSAxXTtcbiAgICB2YXIgdGltZUZyb20gPSBkZWYuYXQgPT09IDAgPyAwIDogZGVmLmF0IC8gZHVyYXRpb247XG4gICAgdmFyIHRpbWVUbyA9IChkZWYuYXQgKyBkZWYuZHVyYXRpb24pIC8gZHVyYXRpb247XG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgdmFsdWVzLnB1c2goZGVmLmZyb20pO1xuICAgICAgICB0aW1lcy5wdXNoKHRpbWVGcm9tKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocHJldlRpbWVUbyAhPT0gdGltZUZyb20pIHtcbiAgICAgICAgICAgIGlmIChkZWYuZnJvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWVzW251bVZhbHVlcyAtIDFdKTtcbiAgICAgICAgICAgICAgICB0aW1lcy5wdXNoKHRpbWVGcm9tKTtcbiAgICAgICAgICAgICAgICBlYXNpbmdzLnB1c2gobGluZWFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmcm9tID0gZGVmLmZyb20gIT09IHVuZGVmaW5lZCA/IGRlZi5mcm9tIDogdmFsdWVzW251bVZhbHVlcyAtIDFdO1xuICAgICAgICAgICAgdmFsdWVzLnB1c2goZnJvbSk7XG4gICAgICAgICAgICB0aW1lcy5wdXNoKHRpbWVGcm9tKTtcbiAgICAgICAgICAgIGVhc2luZ3MucHVzaChsaW5lYXIpO1xuICAgICAgICB9IGVsc2UgaWYgKGRlZi5mcm9tICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKGRlZi5mcm9tKTtcbiAgICAgICAgICAgIHRpbWVzLnB1c2godGltZUZyb20pO1xuICAgICAgICAgICAgZWFzaW5ncy5wdXNoKGxpbmVhcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFsdWVzLnB1c2goZGVmLnRvKTtcbiAgICB0aW1lcy5wdXNoKHRpbWVUbyk7XG4gICAgZWFzaW5ncy5wdXNoKGRlZi5lYXNlIHx8IGVhc2VJbk91dCk7XG4gICAgcmV0dXJuIHByb3BzO1xufTtcbnZhciB0aW1lbGluZSA9IGZ1bmN0aW9uIChpbnN0cnVjdGlvbnMsIF9hKSB7XG4gICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsXG4gICAgICAgIGR1cmF0aW9uID0gX2IuZHVyYXRpb24sXG4gICAgICAgIGVsYXBzZWQgPSBfYi5lbGFwc2VkLFxuICAgICAgICBlYXNlID0gX2IuZWFzZSxcbiAgICAgICAgbG9vcCA9IF9iLmxvb3AsXG4gICAgICAgIGZsaXAgPSBfYi5mbGlwLFxuICAgICAgICB5b3lvID0gX2IueW95bztcbiAgICB2YXIgcGxheWhlYWQgPSAwO1xuICAgIHZhciBjYWxjdWxhdGVkRHVyYXRpb24gPSAwO1xuICAgIHZhciBmbGF0SW5zdHJ1Y3Rpb25zID0gaW5zdHJ1Y3Rpb25zLnJlZHVjZShmbGF0dGVuQXJyYXlJbnN0cnVjdGlvbnMsIFtdKTtcbiAgICB2YXIgYW5pbWF0aW9uRGVmcyA9IFtdO1xuICAgIGZsYXRJbnN0cnVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoaW5zdHJ1Y3Rpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnN0cnVjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHBsYXloZWFkICs9IHBhcnNlRmxvYXQoaW5zdHJ1Y3Rpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbnN0cnVjdGlvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHBsYXloZWFkID0gaW5zdHJ1Y3Rpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgZGVmID0gX19hc3NpZ24oe30sIGluc3RydWN0aW9uLCB7IGF0OiBwbGF5aGVhZCB9KTtcbiAgICAgICAgICAgIGRlZi5kdXJhdGlvbiA9IGRlZi5kdXJhdGlvbiA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9EVVJBVElPTiA6IGRlZi5kdXJhdGlvbjtcbiAgICAgICAgICAgIGFuaW1hdGlvbkRlZnMucHVzaChkZWYpO1xuICAgICAgICAgICAgcGxheWhlYWQgKz0gZGVmLmR1cmF0aW9uO1xuICAgICAgICAgICAgY2FsY3VsYXRlZER1cmF0aW9uID0gTWF0aC5tYXgoY2FsY3VsYXRlZER1cmF0aW9uLCBkZWYuYXQgKyBkZWYuZHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdmFyIHRyYWNrcyA9IHt9O1xuICAgIHZhciBudW1EZWZzID0gYW5pbWF0aW9uRGVmcy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1EZWZzOyBpKyspIHtcbiAgICAgICAgdmFyIGRlZiA9IGFuaW1hdGlvbkRlZnNbaV07XG4gICAgICAgIHZhciB0cmFjayA9IGRlZi50cmFjaztcbiAgICAgICAgaWYgKHRyYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdHJhY2sgZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdHJhY2tzLmhhc093blByb3BlcnR5KHRyYWNrKSkgdHJhY2tzW3RyYWNrXSA9IFtdO1xuICAgICAgICB0cmFja3NbdHJhY2tdLnB1c2goZGVmKTtcbiAgICB9XG4gICAgdmFyIHRyYWNrS2V5ZnJhbWVzID0ge307XG4gICAgZm9yICh2YXIga2V5IGluIHRyYWNrcykge1xuICAgICAgICBpZiAodHJhY2tzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHZhciBrZXlmcmFtZVByb3BzID0gdHJhY2tzW2tleV0ucmVkdWNlKGNvbnZlcnREZWZUb1Byb3BzLCB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGNhbGN1bGF0ZWREdXJhdGlvbixcbiAgICAgICAgICAgICAgICBlYXNpbmdzOiBbXSxcbiAgICAgICAgICAgICAgICB0aW1lczogW10sXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0cmFja0tleWZyYW1lc1trZXldID0ga2V5ZnJhbWVzKF9fYXNzaWduKHt9LCBrZXlmcmFtZVByb3BzLCB7IGR1cmF0aW9uOiBkdXJhdGlvbiB8fCBjYWxjdWxhdGVkRHVyYXRpb24sIGVhc2U6IGVhc2UsXG4gICAgICAgICAgICAgICAgZWxhcHNlZDogZWxhcHNlZCxcbiAgICAgICAgICAgICAgICBsb29wOiBsb29wLFxuICAgICAgICAgICAgICAgIHlveW86IHlveW8sXG4gICAgICAgICAgICAgICAgZmxpcDogZmxpcCB9KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvc2l0ZSh0cmFja0tleWZyYW1lcyk7XG59O1xuXG52YXIgbGlzdGVuID0gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50cywgb3B0aW9ucykge1xuICAgIHJldHVybiBhY3Rpb24oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciB1cGRhdGUgPSBfYS51cGRhdGU7XG4gICAgICAgIHZhciBldmVudE5hbWVzID0gZXZlbnRzLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHVwZGF0ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gZXZlbnROYW1lO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHVwZGF0ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG59O1xuXG52YXIgZGVmYXVsdFBvaW50ZXJQb3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xpZW50WDogMCxcbiAgICAgICAgY2xpZW50WTogMCxcbiAgICAgICAgcGFnZVg6IDAsXG4gICAgICAgIHBhZ2VZOiAwLFxuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgfTtcbn07XG52YXIgZXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKGUsIHBvaW50KSB7XG4gICAgaWYgKHBvaW50ID09PSB2b2lkIDApIHtcbiAgICAgICAgcG9pbnQgPSBkZWZhdWx0UG9pbnRlclBvcygpO1xuICAgIH1cbiAgICBwb2ludC5jbGllbnRYID0gcG9pbnQueCA9IGUuY2xpZW50WDtcbiAgICBwb2ludC5jbGllbnRZID0gcG9pbnQueSA9IGUuY2xpZW50WTtcbiAgICBwb2ludC5wYWdlWCA9IGUucGFnZVg7XG4gICAgcG9pbnQucGFnZVkgPSBlLnBhZ2VZO1xuICAgIHJldHVybiBwb2ludDtcbn07XG5cbnZhciBwb2ludHMgPSBbLyojX19QVVJFX18qL2RlZmF1bHRQb2ludGVyUG9zKCldO1xudmFyIGlzVG91Y2hEZXZpY2UgPSBmYWxzZTtcbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIHVwZGF0ZVBvaW50c0xvY2F0aW9uID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciB0b3VjaGVzID0gX2EudG91Y2hlcztcbiAgICAgICAgaXNUb3VjaERldmljZSA9IHRydWU7XG4gICAgICAgIHZhciBudW1Ub3VjaGVzID0gdG91Y2hlcy5sZW5ndGg7XG4gICAgICAgIHBvaW50cy5sZW5ndGggPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRvdWNoZXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRoaXNUb3VjaCA9IHRvdWNoZXNbaV07XG4gICAgICAgICAgICBwb2ludHMucHVzaChldmVudFRvUG9pbnQodGhpc1RvdWNoKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGxpc3Rlbihkb2N1bWVudCwgJ3RvdWNoc3RhcnQgdG91Y2htb3ZlJywgdHJ1ZSkuc3RhcnQodXBkYXRlUG9pbnRzTG9jYXRpb24pO1xufVxudmFyIG11bHRpdG91Y2ggPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSxcbiAgICAgICAgX2MgPSBfYi5wcmV2ZW50RGVmYXVsdCxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLFxuICAgICAgICBfZCA9IF9iLnNjYWxlLFxuICAgICAgICBzY2FsZSA9IF9kID09PSB2b2lkIDAgPyAxLjAgOiBfZCxcbiAgICAgICAgX2UgPSBfYi5yb3RhdGUsXG4gICAgICAgIHJvdGF0ZSA9IF9lID09PSB2b2lkIDAgPyAwLjAgOiBfZTtcbiAgICByZXR1cm4gYWN0aW9uKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgdXBkYXRlID0gX2EudXBkYXRlO1xuICAgICAgICB2YXIgb3V0cHV0ID0ge1xuICAgICAgICAgICAgdG91Y2hlczogcG9pbnRzLFxuICAgICAgICAgICAgc2NhbGU6IHNjYWxlLFxuICAgICAgICAgICAgcm90YXRlOiByb3RhdGVcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGluaXRpYWxEaXN0YW5jZSA9IDAuMDtcbiAgICAgICAgdmFyIGluaXRpYWxSb3RhdGlvbiA9IDAuMDtcbiAgICAgICAgdmFyIGlzR2VzdHVyZSA9IHBvaW50cy5sZW5ndGggPiAxO1xuICAgICAgICBpZiAoaXNHZXN0dXJlKSB7XG4gICAgICAgICAgICB2YXIgZmlyc3RUb3VjaCA9IHBvaW50c1swXSxcbiAgICAgICAgICAgICAgICBzZWNvbmRUb3VjaCA9IHBvaW50c1sxXTtcbiAgICAgICAgICAgIGluaXRpYWxEaXN0YW5jZSA9IGRpc3RhbmNlKGZpcnN0VG91Y2gsIHNlY29uZFRvdWNoKTtcbiAgICAgICAgICAgIGluaXRpYWxSb3RhdGlvbiA9IGFuZ2xlKGZpcnN0VG91Y2gsIHNlY29uZFRvdWNoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXBkYXRlUG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaXNHZXN0dXJlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpcnN0VG91Y2ggPSBwb2ludHNbMF0sXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZFRvdWNoID0gcG9pbnRzWzFdO1xuICAgICAgICAgICAgICAgIHZhciBuZXdEaXN0YW5jZSA9IGRpc3RhbmNlKGZpcnN0VG91Y2gsIHNlY29uZFRvdWNoKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Um90YXRpb24gPSBhbmdsZShmaXJzdFRvdWNoLCBzZWNvbmRUb3VjaCk7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnNjYWxlID0gc2NhbGUgKiAobmV3RGlzdGFuY2UgLyBpbml0aWFsRGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIG91dHB1dC5yb3RhdGUgPSByb3RhdGUgKyAobmV3Um90YXRpb24gLSBpbml0aWFsUm90YXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlKG91dHB1dCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbk1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKHByZXZlbnREZWZhdWx0IHx8IGUudG91Y2hlcy5sZW5ndGggPiAxKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBvbkZyYW1lVXBkYXRlKHVwZGF0ZVBvaW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHVwZGF0ZU9uTW92ZSA9IGxpc3Rlbihkb2N1bWVudCwgJ3RvdWNobW92ZScsIHsgcGFzc2l2ZTogIXByZXZlbnREZWZhdWx0IH0pLnN0YXJ0KG9uTW92ZSk7XG4gICAgICAgIGlmIChpc1RvdWNoRGV2aWNlKSBvbkZyYW1lVXBkYXRlKHVwZGF0ZVBvaW50KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYW5jZWxPbkZyYW1lVXBkYXRlKHVwZGF0ZVBvaW50KTtcbiAgICAgICAgICAgICAgICB1cGRhdGVPbk1vdmUuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0pO1xufTtcbnZhciBnZXRJc1RvdWNoRGV2aWNlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBpc1RvdWNoRGV2aWNlO1xufTtcblxudmFyIHBvaW50ID0gLyojX19QVVJFX18qL2RlZmF1bHRQb2ludGVyUG9zKCk7XG52YXIgaXNNb3VzZURldmljZSA9IGZhbHNlO1xuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgdXBkYXRlUG9pbnRMb2NhdGlvbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlzTW91c2VEZXZpY2UgPSB0cnVlO1xuICAgICAgICBldmVudFRvUG9pbnQoZSwgcG9pbnQpO1xuICAgIH07XG4gICAgbGlzdGVuKGRvY3VtZW50LCAnbW91c2Vkb3duIG1vdXNlbW92ZScsIHRydWUpLnN0YXJ0KHVwZGF0ZVBvaW50TG9jYXRpb24pO1xufVxudmFyIG1vdXNlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIF9iID0gKF9hID09PSB2b2lkIDAgPyB7fSA6IF9hKS5wcmV2ZW50RGVmYXVsdCxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIHJldHVybiBhY3Rpb24oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciB1cGRhdGUgPSBfYS51cGRhdGU7XG4gICAgICAgIHZhciB1cGRhdGVQb2ludCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGUocG9pbnQpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25Nb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgb25GcmFtZVVwZGF0ZSh1cGRhdGVQb2ludCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB1cGRhdGVPbk1vdmUgPSBsaXN0ZW4oZG9jdW1lbnQsICdtb3VzZW1vdmUnKS5zdGFydChvbk1vdmUpO1xuICAgICAgICBpZiAoaXNNb3VzZURldmljZSkgb25GcmFtZVVwZGF0ZSh1cGRhdGVQb2ludCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2FuY2VsT25GcmFtZVVwZGF0ZSh1cGRhdGVQb2ludCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlT25Nb3ZlLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KTtcbn07XG5cbnZhciBnZXRGaXJzdFRvdWNoID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGZpcnN0VG91Y2ggPSBfYVswXTtcbiAgICByZXR1cm4gZmlyc3RUb3VjaDtcbn07XG52YXIgcG9pbnRlciA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHByb3BzID0ge307XG4gICAgfVxuICAgIHJldHVybiBnZXRJc1RvdWNoRGV2aWNlKCkgPyBtdWx0aXRvdWNoKHByb3BzKS5waXBlKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgdG91Y2hlcyA9IF9hLnRvdWNoZXM7XG4gICAgICAgIHJldHVybiB0b3VjaGVzO1xuICAgIH0sIGdldEZpcnN0VG91Y2gpIDogbW91c2UocHJvcHMpO1xufTtcbnZhciBpbmRleCQzID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgaWYgKF9hID09PSB2b2lkIDApIHtcbiAgICAgICAgX2EgPSB7fTtcbiAgICB9XG4gICAgdmFyIHggPSBfYS54LFxuICAgICAgICB5ID0gX2EueSxcbiAgICAgICAgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcInhcIiwgXCJ5XCJdKTtcbiAgICBpZiAoeCAhPT0gdW5kZWZpbmVkIHx8IHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgYXBwbHlYT2Zmc2V0XzEgPSBhcHBseU9mZnNldCh4IHx8IDApO1xuICAgICAgICB2YXIgYXBwbHlZT2Zmc2V0XzEgPSBhcHBseU9mZnNldCh5IHx8IDApO1xuICAgICAgICB2YXIgZGVsdGFfMSA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICByZXR1cm4gcG9pbnRlcihwcm9wcykucGlwZShmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgICAgIGRlbHRhXzEueCA9IGFwcGx5WE9mZnNldF8xKHBvaW50LngpO1xuICAgICAgICAgICAgZGVsdGFfMS55ID0gYXBwbHlZT2Zmc2V0XzEocG9pbnQueSk7XG4gICAgICAgICAgICByZXR1cm4gZGVsdGFfMTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBvaW50ZXIocHJvcHMpO1xuICAgIH1cbn07XG5cbnZhciBjaGFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYWN0aW9ucyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFjdGlvbnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIGFjdGlvbihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHVwZGF0ZSA9IF9hLnVwZGF0ZSxcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX2EuY29tcGxldGU7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnQ7XG4gICAgICAgIHZhciBwbGF5Q3VycmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBhY3Rpb25zW2ldLnN0YXJ0KHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgIGkgPj0gYWN0aW9ucy5sZW5ndGggPyBjb21wbGV0ZSgpIDogcGxheUN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVwZGF0ZTogdXBkYXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcGxheUN1cnJlbnQoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudCAmJiBjdXJyZW50LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KTtcbn07XG5cbnZhciBjcm9zc2ZhZGUgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhY3Rpb24oZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgIHZhciBiYWxhbmNlID0gMDtcbiAgICAgICAgdmFyIGZhZGFibGUgPSBwYXJhbGxlbCQxKGEsIGIpLnN0YXJ0KF9fYXNzaWduKHt9LCBvYnNlcnZlciwgeyB1cGRhdGU6IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHZhciB2YSA9IF9hWzBdLFxuICAgICAgICAgICAgICAgICAgICB2YiA9IF9hWzFdO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLnVwZGF0ZShnZXRWYWx1ZUZyb21Qcm9ncmVzcyh2YSwgdmIsIGJhbGFuY2UpKTtcbiAgICAgICAgICAgIH0gfSkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2V0QmFsYW5jZTogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFsYW5jZSA9IHY7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWRhYmxlLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KTtcbn07XG5cbnZhciBkZWxheSA9IGZ1bmN0aW9uICh0aW1lVG9EZWxheSkge1xuICAgIHJldHVybiBhY3Rpb24oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBjb21wbGV0ZSA9IF9hLmNvbXBsZXRlO1xuICAgICAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY29tcGxldGUsIHRpbWVUb0RlbGF5KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0pO1xufTtcblxudmFyIG1lcmdlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhY3Rpb25zID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYWN0aW9uc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gYWN0aW9uKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICB2YXIgc3VicyA9IGFjdGlvbnMubWFwKGZ1bmN0aW9uICh0aGlzQWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc0FjdGlvbi5zdGFydChvYnNlcnZlcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJzLmZvckVhY2goZnVuY3Rpb24gKHN1Yikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3ViLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KTtcbn07XG5cbnZhciBzY2hlZHVsZSA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIHNjaGVkdWxlZSkge1xuICAgIHJldHVybiBhY3Rpb24oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciB1cGRhdGUgPSBfYS51cGRhdGUsXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9hLmNvbXBsZXRlO1xuICAgICAgICB2YXIgbGF0ZXN0O1xuICAgICAgICB2YXIgc2NoZWR1bGVyU3ViID0gc2NoZWR1bGVyLnN0YXJ0KHtcbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsYXRlc3QgIT09IHVuZGVmaW5lZCAmJiB1cGRhdGUobGF0ZXN0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogY29tcGxldGVcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBzY2hlZHVsZWVTdWIgPSBzY2hlZHVsZWUuc3RhcnQoe1xuICAgICAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiBsYXRlc3QgPSB2O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzY2hlZHVsZXJTdWIuc3RvcCgpO1xuICAgICAgICAgICAgICAgIHNjaGVkdWxlZVN1Yi5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG59O1xuXG52YXIgc3RhZ2dlciA9IGZ1bmN0aW9uIChhY3Rpb25zLCBpbnRlcnZhbCkge1xuICAgIHZhciBpbnRlcnZhbElzTnVtYmVyID0gdHlwZW9mIGludGVydmFsID09PSAnbnVtYmVyJztcbiAgICB2YXIgYWN0aW9uc1dpdGhEZWxheSA9IGFjdGlvbnMubWFwKGZ1bmN0aW9uIChhLCBpKSB7XG4gICAgICAgIHZhciB0aW1lVG9EZWxheSA9IGludGVydmFsSXNOdW1iZXIgPyBpbnRlcnZhbCAqIGkgOiBpbnRlcnZhbChpKTtcbiAgICAgICAgcmV0dXJuIGNoYWluKGRlbGF5KHRpbWVUb0RlbGF5KSwgYSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcmFsbGVsJDEuYXBwbHkodm9pZCAwLCBhY3Rpb25zV2l0aERlbGF5KTtcbn07XG5cbnZhciBjc3MgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgICB3YXJuaW5nKGZhbHNlLCAnY3NzKCkgaXMgZGVwcmVjYXRlZCwgdXNlIHN0eWxlciBpbnN0ZWFkJyk7XG4gICAgcmV0dXJuIHN0eWxlcihlbGVtZW50LCBwcm9wcyk7XG59O1xudmFyIHN2ZyA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICAgIHdhcm5pbmcoZmFsc2UsICdzdmcoKSBpcyBkZXByZWNhdGVkLCB1c2Ugc3R5bGVyIGluc3RlYWQnKTtcbiAgICByZXR1cm4gc3R5bGVyKGVsZW1lbnQsIHByb3BzKTtcbn07XG5cbmV4cG9ydCB7IGFjdGlvbiwgbXVsdGljYXN0LCB2YWx1ZSwgaW5kZXggYXMgZGVjYXksIGtleWZyYW1lcywgZnJhbWUgYXMgZXZlcnlGcmFtZSwgaW5kZXgkMSBhcyBwaHlzaWNzLCBpbmRleCQyIGFzIHNwcmluZywgdGltZWxpbmUsIHR3ZWVuLCBsaXN0ZW4sIGluZGV4JDMgYXMgcG9pbnRlciwgbW91c2UsIG11bHRpdG91Y2gsIGNoYWluLCBjb21wb3NpdGUsIGNyb3NzZmFkZSwgZGVsYXksIG1lcmdlLCBwYXJhbGxlbCQxIGFzIHBhcmFsbGVsLCBzY2hlZHVsZSwgc3RhZ2dlciwgY2FsYywgZWFzaW5nLCB0cmFuc2Zvcm1lcnMgYXMgdHJhbnNmb3JtLCBjc3MsIHN2ZyB9O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS45LjFcbihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgZ2V0U2Nyb2xsYmFyV2lkdGgsIHNjcm9sbGJhcldpZHRoO1xuXG4gIHNjcm9sbGJhcldpZHRoID0gbnVsbDtcblxuICBnZXRTY3JvbGxiYXJXaWR0aCA9IGZ1bmN0aW9uKHJlY2FsY3VsYXRlKSB7XG4gICAgdmFyIGRpdjEsIGRpdjI7XG4gICAgaWYgKHJlY2FsY3VsYXRlID09IG51bGwpIHtcbiAgICAgIHJlY2FsY3VsYXRlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICgoc2Nyb2xsYmFyV2lkdGggIT0gbnVsbCkgJiYgIXJlY2FsY3VsYXRlKSB7XG4gICAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdjEuc3R5bGUud2lkdGggPSBkaXYyLnN0eWxlLndpZHRoID0gZGl2MS5zdHlsZS5oZWlnaHQgPSBkaXYyLnN0eWxlLmhlaWdodCA9ICcxMDBweCc7XG4gICAgZGl2MS5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgIGRpdjIuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdjEpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gICAgc2Nyb2xsYmFyV2lkdGggPSBNYXRoLmFicyhkaXYxLnNjcm9sbEhlaWdodCAtIGRpdjIuc2Nyb2xsSGVpZ2h0KTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdjEpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2Mik7XG4gICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xuICB9O1xuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGdldFNjcm9sbGJhcldpZHRoO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZ2V0U2Nyb2xsYmFyV2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5nZXRTY3JvbGxiYXJXaWR0aCA9IGdldFNjcm9sbGJhcldpZHRoO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxudmFyIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcblxudmFyIGNsYW1wID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4odiwgbWF4KSwgbWluKTsgfTsgfTtcclxudmFyIGNvbnRhaW5zID0gZnVuY3Rpb24gKHRlcm0pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiAodHlwZW9mIHYgPT09ICdzdHJpbmcnICYmIHYuaW5kZXhPZih0ZXJtKSAhPT0gLTEpOyB9OyB9O1xyXG52YXIgY3JlYXRlVW5pdFR5cGUgPSBmdW5jdGlvbiAodW5pdCkgeyByZXR1cm4gKHtcclxuICAgIHRlc3Q6IGNvbnRhaW5zKHVuaXQpLFxyXG4gICAgcGFyc2U6IHBhcnNlRmxvYXQsXHJcbiAgICB0cmFuc2Zvcm06IGZ1bmN0aW9uICh2KSB7IHJldHVybiBcIlwiICsgdiArIHVuaXQ7IH1cclxufSk7IH07XHJcbnZhciBpc0ZpcnN0Q2hhcnMgPSBmdW5jdGlvbiAodGVybSkgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuICh0eXBlb2YgdiA9PT0gJ3N0cmluZycgJiYgdi5pbmRleE9mKHRlcm0pID09PSAwKTsgfTsgfTtcclxudmFyIGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZignKCcpICsgMSwgdmFsdWUubGFzdEluZGV4T2YoJyknKSk7IH07XHJcbnZhciBzcGxpdENvbW1hRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdOyB9O1xyXG5mdW5jdGlvbiBzcGxpdENvbG9yVmFsdWVzKHRlcm1zKSB7XHJcbiAgICB2YXIgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgdmFsdWVzID0ge307XHJcbiAgICAgICAgdmFyIHZhbHVlc0FycmF5ID0gc3BsaXRDb21tYURlbGltaXRlZChnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2KSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UZXJtczsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhbHVlc1t0ZXJtc1tpXV0gPSAodmFsdWVzQXJyYXlbaV0gIT09IHVuZGVmaW5lZCkgPyBwYXJzZUZsb2F0KHZhbHVlc0FycmF5W2ldKSA6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgICB9O1xyXG59XHJcbnZhciBudW1iZXIgPSB7XHJcbiAgICB0ZXN0OiBmdW5jdGlvbiAodikgeyByZXR1cm4gdHlwZW9mIHYgPT09ICdudW1iZXInOyB9LFxyXG4gICAgcGFyc2U6IHBhcnNlRmxvYXQsXHJcbiAgICB0cmFuc2Zvcm06IGZ1bmN0aW9uICh2KSB7IHJldHVybiB2OyB9XHJcbn07XHJcbnZhciBhbHBoYSA9IF9fYXNzaWduKHt9LCBudW1iZXIsIHsgdHJhbnNmb3JtOiBjbGFtcCgwLCAxKSB9KTtcclxudmFyIGRlZ3JlZXMgPSBjcmVhdGVVbml0VHlwZSgnZGVnJyk7XHJcbnZhciBwZXJjZW50ID0gY3JlYXRlVW5pdFR5cGUoJyUnKTtcclxudmFyIHB4ID0gY3JlYXRlVW5pdFR5cGUoJ3B4Jyk7XHJcbnZhciBzY2FsZSA9IF9fYXNzaWduKHt9LCBudW1iZXIsIHsgZGVmYXVsdDogMSB9KTtcclxudmFyIEZMT0FUX1JFR0VYID0gLygtKT8oXFxkW1xcZFxcLl0qKS9nO1xyXG52YXIgZ2VuZXJhdGVUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikgeyByZXR1cm4gJyR7JyArIHRva2VuICsgJ30nOyB9O1xyXG52YXIgY29tcGxleCA9IHtcclxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB2Lm1hdGNoICYmIHYubWF0Y2goRkxPQVRfUkVHRVgpO1xyXG4gICAgICAgIHJldHVybiAobWF0Y2hlcyAhPT0gdW5kZWZpbmVkICYmIG1hdGNoZXMuY29uc3RydWN0b3IgPT09IEFycmF5ICYmIG1hdGNoZXMubGVuZ3RoID4gMSk7XHJcbiAgICB9LFxyXG4gICAgcGFyc2U6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIHBhcnNlZFZhbHVlID0ge307XHJcbiAgICAgICAgdi5tYXRjaChGTE9BVF9SRUdFWCkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGkpIHsgcmV0dXJuIHBhcnNlZFZhbHVlW2ldID0gcGFyc2VGbG9hdCh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIHJldHVybiBwYXJzZWRWYWx1ZTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVUcmFuc2Zvcm1lcjogZnVuY3Rpb24gKHByb3ApIHtcclxuICAgICAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gcHJvcC5yZXBsYWNlKEZMT0FUX1JFR0VYLCBmdW5jdGlvbiAoKSB7IHJldHVybiBnZW5lcmF0ZVRva2VuKFwiXCIgKyBjb3VudGVyKyspOyB9KTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgdmFyIG91dHB1dCA9IHRlbXBsYXRlO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHYuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5yZXBsYWNlKGdlbmVyYXRlVG9rZW4oa2V5KSwgdltrZXldLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufTtcclxudmFyIGNsYW1wUmdiVW5pdCA9IGNsYW1wKDAsIDI1NSk7XHJcbnZhciByZ2JVbml0ID0gX19hc3NpZ24oe30sIG51bWJlciwgeyB0cmFuc2Zvcm06IGZ1bmN0aW9uICh2KSB7IHJldHVybiBNYXRoLnJvdW5kKGNsYW1wUmdiVW5pdCh2KSk7IH0gfSk7XHJcbnZhciByZ2JhVGVtcGxhdGUgPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciByZWQgPSBfYS5yZWQsIGdyZWVuID0gX2EuZ3JlZW4sIGJsdWUgPSBfYS5ibHVlLCBfYiA9IF9hLmFscGhhLCBhbHBoYSA9IF9iID09PSB2b2lkIDAgPyAxIDogX2I7XHJcbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgcmVkICsgXCIsIFwiICsgZ3JlZW4gKyBcIiwgXCIgKyBibHVlICsgXCIsIFwiICsgYWxwaGEgKyBcIilcIjtcclxufTtcclxudmFyIHJnYmEgPSB7XHJcbiAgICB0ZXN0OiBpc0ZpcnN0Q2hhcnMoJ3JnYicpLFxyXG4gICAgcGFyc2U6IHNwbGl0Q29sb3JWYWx1ZXMoWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZScsICdhbHBoYSddKSxcclxuICAgIHRyYW5zZm9ybTogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIHJlZCA9IF9hLnJlZCwgZ3JlZW4gPSBfYS5ncmVlbiwgYmx1ZSA9IF9hLmJsdWUsIGFscGhhID0gX2EuYWxwaGE7XHJcbiAgICAgICAgcmV0dXJuIHJnYmFUZW1wbGF0ZSh7XHJcbiAgICAgICAgICAgIHJlZDogcmdiVW5pdC50cmFuc2Zvcm0ocmVkKSxcclxuICAgICAgICAgICAgZ3JlZW46IHJnYlVuaXQudHJhbnNmb3JtKGdyZWVuKSxcclxuICAgICAgICAgICAgYmx1ZTogcmdiVW5pdC50cmFuc2Zvcm0oYmx1ZSksXHJcbiAgICAgICAgICAgIGFscGhhOiBhbHBoYVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG52YXIgaHNsYVRlbXBsYXRlID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgaHVlID0gX2EuaHVlLCBzYXR1cmF0aW9uID0gX2Euc2F0dXJhdGlvbiwgbGlnaHRuZXNzID0gX2EubGlnaHRuZXNzLCBfYiA9IF9hLmFscGhhLCBhbHBoYSA9IF9iID09PSB2b2lkIDAgPyAxIDogX2I7XHJcbiAgICByZXR1cm4gXCJoc2xhKFwiICsgaHVlICsgXCIsIFwiICsgc2F0dXJhdGlvbiArIFwiLCBcIiArIGxpZ2h0bmVzcyArIFwiLCBcIiArIGFscGhhICsgXCIpXCI7XHJcbn07XHJcbnZhciBoc2xhID0ge1xyXG4gICAgdGVzdDogaXNGaXJzdENoYXJzKCdoc2wnKSxcclxuICAgIHBhcnNlOiBzcGxpdENvbG9yVmFsdWVzKFsnaHVlJywgJ3NhdHVyYXRpb24nLCAnbGlnaHRuZXNzJywgJ2FscGhhJ10pLFxyXG4gICAgdHJhbnNmb3JtOiBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgaHVlID0gX2EuaHVlLCBzYXR1cmF0aW9uID0gX2Euc2F0dXJhdGlvbiwgbGlnaHRuZXNzID0gX2EubGlnaHRuZXNzLCBhbHBoYSA9IF9hLmFscGhhO1xyXG4gICAgICAgIHJldHVybiBoc2xhVGVtcGxhdGUoe1xyXG4gICAgICAgICAgICBodWU6IE1hdGgucm91bmQoaHVlKSxcclxuICAgICAgICAgICAgc2F0dXJhdGlvbjogcGVyY2VudC50cmFuc2Zvcm0oc2F0dXJhdGlvbiksXHJcbiAgICAgICAgICAgIGxpZ2h0bmVzczogcGVyY2VudC50cmFuc2Zvcm0obGlnaHRuZXNzKSxcclxuICAgICAgICAgICAgYWxwaGE6IGFscGhhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcbnZhciBoZXggPSBfX2Fzc2lnbih7fSwgcmdiYSwgeyB0ZXN0OiBpc0ZpcnN0Q2hhcnMoJyMnKSwgcGFyc2U6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIHIsIGcsIGI7XHJcbiAgICAgICAgaWYgKHYubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICByID0gdi5zdWJzdHIoMSwgMik7XHJcbiAgICAgICAgICAgIGcgPSB2LnN1YnN0cigzLCAyKTtcclxuICAgICAgICAgICAgYiA9IHYuc3Vic3RyKDUsIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgciA9IHYuc3Vic3RyKDEsIDEpO1xyXG4gICAgICAgICAgICBnID0gdi5zdWJzdHIoMiwgMSk7XHJcbiAgICAgICAgICAgIGIgPSB2LnN1YnN0cigzLCAxKTtcclxuICAgICAgICAgICAgciArPSByO1xyXG4gICAgICAgICAgICBnICs9IGc7XHJcbiAgICAgICAgICAgIGIgKz0gYjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVkOiBwYXJzZUludChyLCAxNiksXHJcbiAgICAgICAgICAgIGdyZWVuOiBwYXJzZUludChnLCAxNiksXHJcbiAgICAgICAgICAgIGJsdWU6IHBhcnNlSW50KGIsIDE2KSxcclxuICAgICAgICAgICAgYWxwaGE6IDFcclxuICAgICAgICB9O1xyXG4gICAgfSB9KTtcclxudmFyIGlzUmdiYSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiB2LnJlZCAhPT0gdW5kZWZpbmVkOyB9O1xyXG52YXIgaXNIc2xhID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYuaHVlICE9PSB1bmRlZmluZWQ7IH07XHJcbnZhciBjb2xvciA9IHtcclxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2KSB7IHJldHVybiByZ2JhLnRlc3QodikgfHwgaHNsYS50ZXN0KHYpIHx8IGhleC50ZXN0KHYpOyB9LFxyXG4gICAgcGFyc2U6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgaWYgKHJnYmEudGVzdCh2KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmdiYS5wYXJzZSh2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaHNsYS50ZXN0KHYpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBoc2xhLnBhcnNlKHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChoZXgudGVzdCh2KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaGV4LnBhcnNlKHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdjtcclxuICAgIH0sXHJcbiAgICB0cmFuc2Zvcm06IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgaWYgKGlzUmdiYSh2KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmdiYS50cmFuc2Zvcm0odik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzSHNsYSh2KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaHNsYS50cmFuc2Zvcm0odik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgfSxcclxufTtcblxuZXhwb3J0IHsgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcsIHNwbGl0Q29tbWFEZWxpbWl0ZWQsIHNwbGl0Q29sb3JWYWx1ZXMsIG51bWJlciwgYWxwaGEsIGRlZ3JlZXMsIHBlcmNlbnQsIHB4LCBzY2FsZSwgY29tcGxleCwgcmdiVW5pdCwgcmdiYSwgaHNsYSwgaGV4LCBjb2xvciB9O1xuIiwiaW1wb3J0IHsgb25GcmFtZVJlbmRlciB9IGZyb20gJ2ZyYW1lc3luYyc7XG5pbXBvcnQgeyBhbHBoYSwgY29sb3IsIGRlZ3JlZXMsIHNjYWxlLCBweCwgcGVyY2VudCB9IGZyb20gJ3N0eWxlLXZhbHVlLXR5cGVzJztcbmltcG9ydCB7IGludmFyaWFudCB9IGZyb20gJ2hleS1saXN0ZW4nO1xuXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxudmFyIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcblxudmFyIGNyZWF0ZVN0eWxlciA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIG9uUmVhZCA9IF9hLm9uUmVhZCwgb25SZW5kZXIgPSBfYS5vblJlbmRlciwgX2IgPSBfYS5hbGlhc01hcCwgYWxpYXNNYXAgPSBfYiA9PT0gdm9pZCAwID8ge30gOiBfYiwgX2MgPSBfYS51c2VDYWNoZSwgdXNlQ2FjaGUgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgICAgIHZhciBzdGF0ZSA9IHt9O1xyXG4gICAgICAgIHZhciBjaGFuZ2VkVmFsdWVzID0gW107XHJcbiAgICAgICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICB2YXIgc2V0VmFsdWUgPSBmdW5jdGlvbiAodW5tYXBwZWRLZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBhbGlhc01hcFt1bm1hcHBlZEtleV0gfHwgdW5tYXBwZWRLZXk7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBzdGF0ZVtrZXldO1xyXG4gICAgICAgICAgICBzdGF0ZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZVtrZXldICE9PSBjdXJyZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VkVmFsdWVzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkVmFsdWVzLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghaGFzQ2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG9uRnJhbWVSZW5kZXIocmVuZGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKGZvcmNlUmVuZGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JjZVJlbmRlciA9PT0gdm9pZCAwKSB7IGZvcmNlUmVuZGVyID0gZmFsc2U7IH1cclxuICAgICAgICAgICAgaWYgKGZvcmNlUmVuZGVyIHx8IGhhc0NoYW5nZWQpIHtcclxuICAgICAgICAgICAgICAgIG9uUmVuZGVyKHN0YXRlLCBwcm9wcywgY2hhbmdlZFZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkVmFsdWVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKHVubWFwcGVkS2V5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gYWxpYXNNYXBbdW5tYXBwZWRLZXldIHx8IHVubWFwcGVkS2V5O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChrZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgPyAodXNlQ2FjaGUgJiYgc3RhdGVba2V5XSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHN0YXRlW2tleV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBvblJlYWQoa2V5LCBwcm9wcylcclxuICAgICAgICAgICAgICAgICAgICA6IHN0YXRlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZXMsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh2YWx1ZXMsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc2V0VmFsdWUodmFsdWVzLCB2KTsgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoa2V5LCB2YWx1ZXNba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVuZGVyOiByZW5kZXIsXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbn07XG5cbnZhciBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcclxudmFyIFJFUExBQ0VfVEVNUExBVEUgPSAnJDEtJDInO1xyXG52YXIgY2FtZWxUb0Rhc2ggPSBmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBzdHIucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCk7IH07XHJcbnZhciBzZXREb21BdHRycyA9IGZ1bmN0aW9uIChlbGVtZW50LCBhdHRycykge1xyXG4gICAgZm9yICh2YXIga2V5IGluIGF0dHJzKSB7XHJcbiAgICAgICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cbnZhciBjYW1lbENhY2hlID0gbmV3IE1hcCgpO1xyXG52YXIgZGFzaENhY2hlID0gbmV3IE1hcCgpO1xyXG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsICdtcycsICcnXTtcclxudmFyIG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xyXG52YXIgdGVzdEVsZW1lbnQ7XHJcbnZhciB0ZXN0UHJlZml4ID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgdGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xyXG4gICAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXTtcclxuICAgICAgICB2YXIgbm9QcmVmaXggPSAocHJlZml4ID09PSAnJyk7XHJcbiAgICAgICAgdmFyIHByZWZpeGVkUHJvcGVydHlOYW1lID0gbm9QcmVmaXggPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XHJcbiAgICAgICAgaWYgKHByZWZpeGVkUHJvcGVydHlOYW1lIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XHJcbiAgICAgICAgICAgIGNhbWVsQ2FjaGUuc2V0KGtleSwgcHJlZml4ZWRQcm9wZXJ0eU5hbWUpO1xyXG4gICAgICAgICAgICBkYXNoQ2FjaGUuc2V0KGtleSwgXCJcIiArIChub1ByZWZpeCA/ICcnIDogJy0nKSArIGNhbWVsVG9EYXNoKHByZWZpeGVkUHJvcGVydHlOYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG52YXIgcHJlZml4ZXIgPSAoZnVuY3Rpb24gKGtleSwgYXNEYXNoQ2FzZSkge1xyXG4gICAgaWYgKGFzRGFzaENhc2UgPT09IHZvaWQgMCkgeyBhc0Rhc2hDYXNlID0gZmFsc2U7IH1cclxuICAgIHZhciBjYWNoZSA9IGFzRGFzaENhc2UgPyBkYXNoQ2FjaGUgOiBjYW1lbENhY2hlO1xyXG4gICAgaWYgKCFjYWNoZS5oYXMoa2V5KSlcclxuICAgICAgICB0ZXN0UHJlZml4KGtleSk7XHJcbiAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSkgfHwga2V5O1xyXG59KTtcblxudmFyIGF4ZXMgPSBbJycsICdYJywgJ1knLCAnWiddO1xyXG52YXIgb3JkZXIgPSBbJ3RyYW5zbGF0ZScsICdzY2FsZScsICdyb3RhdGUnLCAnc2tldycsICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZSddO1xyXG52YXIgVFJBTlNGT1JNX09SSUdJTl9YID0gJ3RyYW5zZm9ybU9yaWdpblgnO1xyXG52YXIgVFJBTlNGT1JNX09SSUdJTl9ZID0gJ3RyYW5zZm9ybU9yaWdpblknO1xyXG52YXIgdHJhbnNmb3JtUHJvcHMgPSBvcmRlci5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XHJcbiAgICByZXR1cm4gYXhlcy5yZWR1Y2UoZnVuY3Rpb24gKGF4ZXNBY2MsIGF4ZXNLZXkpIHtcclxuICAgICAgICBheGVzQWNjLnB1c2goa2V5ICsgYXhlc0tleSk7XHJcbiAgICAgICAgcmV0dXJuIGF4ZXNBY2M7XHJcbiAgICB9LCBhY2MpO1xyXG59LCBbJ3gnLCAneScsICd6J10pO1xyXG52YXIgdHJhbnNmb3JtUHJvcERpY3Rpb25hcnkgPSB0cmFuc2Zvcm1Qcm9wcy5yZWR1Y2UoZnVuY3Rpb24gKGRpY3QsIGtleSkge1xyXG4gICAgZGljdFtrZXldID0gdHJ1ZTtcclxuICAgIHJldHVybiBkaWN0O1xyXG59LCB7fSk7XHJcbnZhciBpc1RyYW5zZm9ybVByb3AgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB0cmFuc2Zvcm1Qcm9wRGljdGlvbmFyeVtrZXldID09PSB0cnVlOyB9O1xyXG52YXIgc29ydFRyYW5zZm9ybVByb3BzID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIHRyYW5zZm9ybVByb3BzLmluZGV4T2YoYSkgLSB0cmFuc2Zvcm1Qcm9wcy5pbmRleE9mKGIpOyB9O1xyXG52YXIgaXNUcmFuc2Zvcm1PcmlnaW5Qcm9wID0gZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ID09PSBUUkFOU0ZPUk1fT1JJR0lOX1ggfHwga2V5ID09PSBUUkFOU0ZPUk1fT1JJR0lOX1k7IH07XG5cbnZhciB2YWx1ZVR5cGVzID0ge1xyXG4gICAgY29sb3I6IGNvbG9yLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcclxuICAgIG91dGxpbmVDb2xvcjogY29sb3IsXHJcbiAgICBmaWxsOiBjb2xvcixcclxuICAgIHN0cm9rZTogY29sb3IsXHJcbiAgICBib3JkZXJDb2xvcjogY29sb3IsXHJcbiAgICBib3JkZXJUb3BDb2xvcjogY29sb3IsXHJcbiAgICBib3JkZXJSaWdodENvbG9yOiBjb2xvcixcclxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiBjb2xvcixcclxuICAgIGJvcmRlckxlZnRDb2xvcjogY29sb3IsXHJcbiAgICBib3JkZXJSYWRpdXM6IHB4LFxyXG4gICAgd2lkdGg6IHB4LFxyXG4gICAgbWF4V2lkdGg6IHB4LFxyXG4gICAgaGVpZ2h0OiBweCxcclxuICAgIG1heEhlaWdodDogcHgsXHJcbiAgICB0b3A6IHB4LFxyXG4gICAgbGVmdDogcHgsXHJcbiAgICBib3R0b206IHB4LFxyXG4gICAgcmlnaHQ6IHB4LFxyXG4gICAgcm90YXRlOiBkZWdyZWVzLFxyXG4gICAgcm90YXRlWDogZGVncmVlcyxcclxuICAgIHJvdGF0ZVk6IGRlZ3JlZXMsXHJcbiAgICByb3RhdGVaOiBkZWdyZWVzLFxyXG4gICAgc2NhbGU6IHNjYWxlLFxyXG4gICAgc2NhbGVYOiBzY2FsZSxcclxuICAgIHNjYWxlWTogc2NhbGUsXHJcbiAgICBzY2FsZVo6IHNjYWxlLFxyXG4gICAgc2tld1g6IGRlZ3JlZXMsXHJcbiAgICBza2V3WTogZGVncmVlcyxcclxuICAgIGRpc3RhbmNlOiBweCxcclxuICAgIHRyYW5zbGF0ZVg6IHB4LFxyXG4gICAgdHJhbnNsYXRlWTogcHgsXHJcbiAgICB0cmFuc2xhdGVaOiBweCxcclxuICAgIHBlcnNwZWN0aXZlOiBweCxcclxuICAgIG9wYWNpdHk6IGFscGhhLFxyXG4gICAgdHJhbnNmb3JtT3JpZ2luWDogcGVyY2VudCxcclxuICAgIHRyYW5zZm9ybU9yaWdpblk6IHBlcmNlbnQsXHJcbiAgICB0cmFuc2Zvcm1PcmlnaW5aOiBweFxyXG59O1xyXG52YXIgZ2V0VmFsdWVUeXBlID0gKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHZhbHVlVHlwZXNba2V5XTsgfSk7XG5cbnZhciBhbGlhc01hcCA9IHtcclxuICAgIHg6ICd0cmFuc2xhdGVYJyxcclxuICAgIHk6ICd0cmFuc2xhdGVZJyxcclxuICAgIHo6ICd0cmFuc2xhdGVaJyxcclxuICAgIG9yaWdpblg6ICd0cmFuc2Zvcm1PcmlnaW5YJyxcclxuICAgIG9yaWdpblk6ICd0cmFuc2Zvcm1PcmlnaW5ZJyxcclxuICAgIG9yaWdpblo6ICd0cmFuc2Zvcm1PcmlnaW5aJ1xyXG59O1xyXG52YXIgTlVNQkVSID0gJ251bWJlcic7XHJcbnZhciBPQkpFQ1QgPSAnb2JqZWN0JztcclxudmFyIENPTE9OID0gJzonO1xyXG52YXIgU0VNSV9DT0xPTiA9ICc7JztcclxudmFyIFRSQU5TRk9STV9PUklHSU4gPSAndHJhbnNmb3JtLW9yaWdpbic7XHJcbnZhciBUUkFOU0ZPUk0gPSAndHJhbnNmb3JtJztcclxudmFyIFRSQU5TTEFURV9aID0gJ3RyYW5zbGF0ZVonO1xyXG52YXIgVFJBTlNGT1JNX05PTkUgPSAnO3RyYW5zZm9ybTogbm9uZSc7XHJcbnZhciBzdHlsZVJ1bGUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFwiXCIgKyBTRU1JX0NPTE9OICsga2V5ICsgQ09MT04gKyB2YWx1ZTtcclxufTtcclxuZnVuY3Rpb24gYnVpbGRTdHlsZVByb3BlcnR5U3RyaW5nKHN0YXRlLCBjaGFuZ2VkVmFsdWVzLCBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbiwgYmxhY2tsaXN0KSB7XHJcbiAgICBpZiAoY2hhbmdlZFZhbHVlcyA9PT0gdm9pZCAwKSB7IGNoYW5nZWRWYWx1ZXMgPSB0cnVlOyB9XHJcbiAgICBpZiAoZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24gPT09IHZvaWQgMCkgeyBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbiA9IHRydWU7IH1cclxuICAgIHZhciB2YWx1ZXNUb0NoYW5nZSA9IGNoYW5nZWRWYWx1ZXMgPT09IHRydWUgPyBPYmplY3Qua2V5cyhzdGF0ZSkgOiBjaGFuZ2VkVmFsdWVzO1xyXG4gICAgdmFyIHByb3BlcnR5U3RyaW5nID0gJyc7XHJcbiAgICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gJyc7XHJcbiAgICB2YXIgaGFzVHJhbnNmb3JtT3JpZ2luID0gZmFsc2U7XHJcbiAgICB2YXIgdHJhbnNmb3JtSXNEZWZhdWx0ID0gdHJ1ZTtcclxuICAgIHZhciBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcclxuICAgIHZhciB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XHJcbiAgICB2YXIgbnVtQ2hhbmdlZFZhbHVlcyA9IHZhbHVlc1RvQ2hhbmdlLmxlbmd0aDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ2hhbmdlZFZhbHVlczsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IHZhbHVlc1RvQ2hhbmdlW2ldO1xyXG4gICAgICAgIGlmIChpc1RyYW5zZm9ybVByb3Aoa2V5KSkge1xyXG4gICAgICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBzdGF0ZUtleSBpbiBzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVHJhbnNmb3JtUHJvcChzdGF0ZUtleSkgJiZcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNUb0NoYW5nZS5pbmRleE9mKHN0YXRlS2V5KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNUb0NoYW5nZS5wdXNoKHN0YXRlS2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YWx1ZXNUb0NoYW5nZS5zb3J0KHNvcnRUcmFuc2Zvcm1Qcm9wcyk7XHJcbiAgICB2YXIgdG90YWxOdW1DaGFuZ2VkVmFsdWVzID0gdmFsdWVzVG9DaGFuZ2UubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3RhbE51bUNoYW5nZWRWYWx1ZXM7IGkrKykge1xyXG4gICAgICAgIHZhciBrZXkgPSB2YWx1ZXNUb0NoYW5nZVtpXTtcclxuICAgICAgICBpZiAoYmxhY2tsaXN0LmhhcyhrZXkpKVxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB2YXIgaXNUcmFuc2Zvcm1LZXkgPSBpc1RyYW5zZm9ybVByb3Aoa2V5KTtcclxuICAgICAgICB2YXIgdmFsdWUgPSBzdGF0ZVtrZXldO1xyXG4gICAgICAgIHZhciB2YWx1ZVR5cGUgPSBnZXRWYWx1ZVR5cGUoa2V5KTtcclxuICAgICAgICBpZiAoaXNUcmFuc2Zvcm1LZXkpIHtcclxuICAgICAgICAgICAgaWYgKCh2YWx1ZVR5cGUuZGVmYXVsdCAmJiB2YWx1ZSAhPT0gdmFsdWVUeXBlLmRlZmF1bHQpIHx8XHJcbiAgICAgICAgICAgICAgICAoIXZhbHVlVHlwZS5kZWZhdWx0ICYmIHZhbHVlICE9PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtSXNEZWZhdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbHVlVHlwZSAmJlxyXG4gICAgICAgICAgICAodHlwZW9mIHZhbHVlID09PSBOVU1CRVIgfHwgdHlwZW9mIHZhbHVlID09PSBPQkpFQ1QpICYmXHJcbiAgICAgICAgICAgIHZhbHVlVHlwZS50cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVR5cGUudHJhbnNmb3JtKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzVHJhbnNmb3JtS2V5KSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBrZXkgKyAnKCcgKyB2YWx1ZSArICcpICc7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybUhhc1ogPSBrZXkgPT09IFRSQU5TTEFURV9aID8gdHJ1ZSA6IHRyYW5zZm9ybUhhc1o7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzVHJhbnNmb3JtT3JpZ2luUHJvcChrZXkpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgaGFzVHJhbnNmb3JtT3JpZ2luID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHByb3BlcnR5U3RyaW5nICs9IHN0eWxlUnVsZShwcmVmaXhlcihrZXksIHRydWUpLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGhhc1RyYW5zZm9ybU9yaWdpbikge1xyXG4gICAgICAgIHByb3BlcnR5U3RyaW5nICs9IHN0eWxlUnVsZShUUkFOU0ZPUk1fT1JJR0lOLCAoc3RhdGUudHJhbnNmb3JtT3JpZ2luWCB8fCAwKSArIFwiIFwiICsgKHN0YXRlLnRyYW5zZm9ybU9yaWdpblkgfHxcclxuICAgICAgICAgICAgMCkgKyBcIiBcIiArIChzdGF0ZS50cmFuc2Zvcm1PcmlnaW5aIHx8IDApKTtcclxuICAgIH1cclxuICAgIGlmIChoYXNUcmFuc2Zvcm0pIHtcclxuICAgICAgICBpZiAoIXRyYW5zZm9ybUhhc1ogJiYgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IFRSQU5TTEFURV9aICsgXCIoMClcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvcGVydHlTdHJpbmcgKz0gc3R5bGVSdWxlKFRSQU5TRk9STSwgdHJhbnNmb3JtSXNEZWZhdWx0ID8gVFJBTlNGT1JNX05PTkUgOiB0cmFuc2Zvcm1TdHJpbmcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xyXG59XG5cbnZhciBTQ1JPTExfTEVGVCA9ICdzY3JvbGxMZWZ0JztcclxudmFyIFNDUk9MTF9UT1AgPSAnc2Nyb2xsVG9wJztcclxudmFyIHNjcm9sbFZhbHVlcyA9IG5ldyBTZXQoW1NDUk9MTF9MRUZULCBTQ1JPTExfVE9QXSk7XHJcbnZhciBjc3NTdHlsZXIgPSBjcmVhdGVTdHlsZXIoe1xyXG4gICAgb25SZWFkOiBmdW5jdGlvbiAoa2V5LCBfYSkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gX2EuZWxlbWVudCwgcHJlcGFyc2VPdXRwdXQgPSBfYS5wcmVwYXJzZU91dHB1dDtcclxuICAgICAgICB2YXIgdmFsdWVUeXBlID0gZ2V0VmFsdWVUeXBlKGtleSk7XHJcbiAgICAgICAgaWYgKGlzVHJhbnNmb3JtUHJvcChrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVR5cGUgPyB2YWx1ZVR5cGUuZGVmYXVsdCB8fCAwIDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc2Nyb2xsVmFsdWVzLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50W2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgZG9tVmFsdWUgPSB3aW5kb3dcclxuICAgICAgICAgICAgICAgIC5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpXHJcbiAgICAgICAgICAgICAgICAuZ2V0UHJvcGVydHlWYWx1ZShwcmVmaXhlcihrZXksIHRydWUpKSB8fCAwO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJlcGFyc2VPdXRwdXQgJiYgdmFsdWVUeXBlICYmIHZhbHVlVHlwZS5wYXJzZVxyXG4gICAgICAgICAgICAgICAgPyB2YWx1ZVR5cGUucGFyc2UoZG9tVmFsdWUpXHJcbiAgICAgICAgICAgICAgICA6IGRvbVZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvblJlbmRlcjogZnVuY3Rpb24gKHN0YXRlLCBfYSwgY2hhbmdlZFZhbHVlcykge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gX2EuZWxlbWVudCwgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24gPSBfYS5lbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbjtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gYnVpbGRTdHlsZVByb3BlcnR5U3RyaW5nKHN0YXRlLCBjaGFuZ2VkVmFsdWVzLCBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbiwgc2Nyb2xsVmFsdWVzKTtcclxuICAgICAgICBpZiAoY2hhbmdlZFZhbHVlcy5pbmRleE9mKFNDUk9MTF9MRUZUKSAhPT0gLTEpXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IHN0YXRlLnNjcm9sbExlZnQ7XHJcbiAgICAgICAgaWYgKGNoYW5nZWRWYWx1ZXMuaW5kZXhPZihTQ1JPTExfVE9QKSAhPT0gLTEpXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gc3RhdGUuc2Nyb2xsVG9wO1xyXG4gICAgfSxcclxuICAgIGFsaWFzTWFwOiBhbGlhc01hcCxcclxuICAgIHVuY2FjaGVkVmFsdWVzOiBzY3JvbGxWYWx1ZXNcclxufSk7XHJcbnZhciBjc3MgPSAoZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XHJcbiAgICByZXR1cm4gY3NzU3R5bGVyKF9fYXNzaWduKHsgZWxlbWVudDogZWxlbWVudCwgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb246IHRydWUsIHByZXBhcnNlT3V0cHV0OiB0cnVlIH0sIHByb3BzKSk7XHJcbn0pO1xuXG52YXIgWkVST19OT1RfWkVSTyA9IDAuMDAwMDAwMTtcclxudmFyIHBlcmNlbnRUb1BpeGVscyA9IGZ1bmN0aW9uIChwZXJjZW50JCQxLCBsZW5ndGgpIHtcclxuICAgIHJldHVybiAocGVyY2VudCQkMSAvIDEwMCkgKiBsZW5ndGggKyAncHgnO1xyXG59O1xyXG52YXIgYnVpbGQgPSBmdW5jdGlvbiAoc3RhdGUsIGRpbWVuc2lvbnMsIGlzUGF0aCwgcGF0aExlbmd0aCkge1xyXG4gICAgdmFyIGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xyXG4gICAgdmFyIGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xyXG4gICAgdmFyIHByb3BzID0ge307XHJcbiAgICB2YXIgZGFzaEFycmF5U3R5bGVzID0gaXNQYXRoID8ge1xyXG4gICAgICAgIHBhdGhMZW5ndGg6ICcwJyxcclxuICAgICAgICBwYXRoU3BhY2luZzogXCJcIiArIHBhdGhMZW5ndGhcclxuICAgIH0gOiB1bmRlZmluZWQ7XHJcbiAgICB2YXIgc2NhbGUkJDEgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgWkVST19OT1RfWkVSTyA6IHN0YXRlLnNjYWxlWCB8fCAxO1xyXG4gICAgdmFyIHNjYWxlWSA9IHN0YXRlLnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGVZIHx8IFpFUk9fTk9UX1pFUk8gOiBzY2FsZSQkMSB8fCAxO1xyXG4gICAgdmFyIHRyYW5zZm9ybU9yaWdpblggPSBkaW1lbnNpb25zLndpZHRoICogKChzdGF0ZS5vcmlnaW5YIHx8IDUwKSAvIDEwMCkgKyBkaW1lbnNpb25zLng7XHJcbiAgICB2YXIgdHJhbnNmb3JtT3JpZ2luWSA9IGRpbWVuc2lvbnMuaGVpZ2h0ICogKChzdGF0ZS5vcmlnaW5ZIHx8IDUwKSAvIDEwMCkgKyBkaW1lbnNpb25zLnk7XHJcbiAgICB2YXIgc2NhbGVUcmFuc2Zvcm1YID0gLXRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUkJDEgKiAxKTtcclxuICAgIHZhciBzY2FsZVRyYW5zZm9ybVkgPSAtdHJhbnNmb3JtT3JpZ2luWSAqIChzY2FsZVkgKiAxKTtcclxuICAgIHZhciBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlJCQxO1xyXG4gICAgdmFyIHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZO1xyXG4gICAgdmFyIHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6IFwidHJhbnNsYXRlKFwiICsgc3RhdGUudHJhbnNsYXRlWCArIFwiLCBcIiArIHN0YXRlLnRyYW5zbGF0ZVkgKyBcIikgXCIsXHJcbiAgICAgICAgc2NhbGU6IFwidHJhbnNsYXRlKFwiICsgc2NhbGVUcmFuc2Zvcm1YICsgXCIsIFwiICsgc2NhbGVUcmFuc2Zvcm1ZICsgXCIpIHNjYWxlKFwiICsgc2NhbGUkJDEgKyBcIiwgXCIgKyBzY2FsZVkgKyBcIikgdHJhbnNsYXRlKFwiICsgc2NhbGVSZXBsYWNlWCArIFwiLCBcIiArIHNjYWxlUmVwbGFjZVkgKyBcIikgXCIsXHJcbiAgICAgICAgcm90YXRlOiBcInJvdGF0ZShcIiArIHN0YXRlLnJvdGF0ZSArIFwiLCBcIiArIHRyYW5zZm9ybU9yaWdpblggKyBcIiwgXCIgKyB0cmFuc2Zvcm1PcmlnaW5ZICsgXCIpIFwiLFxyXG4gICAgICAgIHNrZXdYOiBcInNrZXdYKFwiICsgc3RhdGUuc2tld1ggKyBcIikgXCIsXHJcbiAgICAgICAgc2tld1k6IFwic2tld1koXCIgKyBzdGF0ZS5za2V3WSArIFwiKSBcIlxyXG4gICAgfTtcclxuICAgIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xyXG4gICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN0YXRlW2tleV07XHJcbiAgICAgICAgICAgIGlmIChpc1RyYW5zZm9ybVByb3Aoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpc1BhdGggJiYgKGtleSA9PT0gJ3BhdGhMZW5ndGgnIHx8IGtleSA9PT0gJ3BhdGhTcGFjaW5nJykgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBwYXRoTGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpc1BhdGggJiYga2V5ID09PSAncGF0aE9mZnNldCcpIHtcclxuICAgICAgICAgICAgICAgIHByb3BzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgcGF0aExlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wc1tjYW1lbFRvRGFzaChrZXkpXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGhhc0Rhc2hBcnJheSkge1xyXG4gICAgICAgIHByb3BzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMucGF0aExlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5wYXRoU3BhY2luZztcclxuICAgIH1cclxuICAgIGlmIChoYXNUcmFuc2Zvcm0pIHtcclxuICAgICAgICBwcm9wcy50cmFuc2Zvcm0gPSAnJztcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IChrZXkgPT09ICdzY2FsZScpID8gJzEnIDogJzAnO1xyXG4gICAgICAgICAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHRyYW5zZm9ybVtrZXldLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb3BzO1xyXG59O1xuXG52YXIgdmFsdWVUeXBlcyQxID0ge1xyXG4gICAgZmlsbDogY29sb3IsXHJcbiAgICBzdHJva2U6IGNvbG9yLFxyXG4gICAgc2NhbGU6IHNjYWxlLFxyXG4gICAgc2NhbGVYOiBzY2FsZSxcclxuICAgIHNjYWxlWTogc2NhbGUsXHJcbiAgICBvcGFjaXR5OiBhbHBoYSxcclxuICAgIGZpbGxPcGFjaXR5OiBhbHBoYSxcclxuICAgIHN0cm9rZU9wYWNpdHk6IGFscGhhXHJcbn07XHJcbnZhciBnZXRWYWx1ZVR5cGUkMSA9IChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB2YWx1ZVR5cGVzJDFba2V5XTsgfSk7XG5cbnZhciBzdmdTdHlsZXIgPSBjcmVhdGVTdHlsZXIoe1xyXG4gICAgb25SZWFkOiBmdW5jdGlvbiAoa2V5LCBfYSkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gX2EuZWxlbWVudDtcclxuICAgICAgICBpZiAoIWlzVHJhbnNmb3JtUHJvcChrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlVHlwZSA9IGdldFZhbHVlVHlwZSQxKGtleSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVR5cGUgPyB2YWx1ZVR5cGUuZGVmYXVsdCA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uUmVuZGVyOiBmdW5jdGlvbiAoc3RhdGUsIF9hLCBjaGFuZ2VkVmFsdWVzKSB7XHJcbiAgICAgICAgdmFyIGRpbWVuc2lvbnMgPSBfYS5kaW1lbnNpb25zLCBlbGVtZW50ID0gX2EuZWxlbWVudCwgaXNQYXRoID0gX2EuaXNQYXRoLCBwYXRoTGVuZ3RoID0gX2EucGF0aExlbmd0aDtcclxuICAgICAgICBzZXREb21BdHRycyhlbGVtZW50LCBidWlsZChzdGF0ZSwgZGltZW5zaW9ucywgaXNQYXRoLCBwYXRoTGVuZ3RoKSk7XHJcbiAgICB9LFxyXG4gICAgYWxpYXNNYXA6IHtcclxuICAgICAgICB4OiAndHJhbnNsYXRlWCcsXHJcbiAgICAgICAgeTogJ3RyYW5zbGF0ZVknLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICdmaWxsJ1xyXG4gICAgfVxyXG59KTtcclxudmFyIHN2ZyA9IChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgdmFyIF9hID0gZWxlbWVudC5nZXRCQm94KCksIHggPSBfYS54LCB5ID0gX2EueSwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xyXG4gICAgdmFyIHByb3BzID0ge1xyXG4gICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgZGltZW5zaW9uczogeyB4OiB4LCB5OiB5LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0sXHJcbiAgICAgICAgaXNQYXRoOiBmYWxzZVxyXG4gICAgfTtcclxuICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdwYXRoJykge1xyXG4gICAgICAgIHByb3BzLmlzUGF0aCA9IHRydWU7XHJcbiAgICAgICAgcHJvcHMucGF0aExlbmd0aCA9IGVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdmdTdHlsZXIocHJvcHMpO1xyXG59KTtcblxudmFyIHZpZXdwb3J0ID0gY3JlYXRlU3R5bGVyKHtcclxuICAgIHVzZUNhY2hlOiBmYWxzZSxcclxuICAgIG9uUmVhZDogZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHJldHVybiBrZXkgPT09ICdzY3JvbGxUb3AnID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG4gICAgfSxcclxuICAgIG9uUmVuZGVyOiBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgX2IgPSBfYS5zY3JvbGxUb3AsIHNjcm9sbFRvcCA9IF9iID09PSB2b2lkIDAgPyAwIDogX2IsIF9jID0gX2Euc2Nyb2xsTGVmdCwgc2Nyb2xsTGVmdCA9IF9jID09PSB2b2lkIDAgPyAwIDogX2M7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxUbyhzY3JvbGxMZWZ0LCBzY3JvbGxUb3ApO1xyXG4gICAgfVxyXG59KTtcblxudmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcclxudmFyIGNyZWF0ZURPTVN0eWxlciA9IGZ1bmN0aW9uIChub2RlLCBwcm9wcykge1xyXG4gICAgdmFyIHN0eWxlcjtcclxuICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBzdHlsZXIgPSBjc3Mobm9kZSwgcHJvcHMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcclxuICAgICAgICBzdHlsZXIgPSBzdmcobm9kZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBub2RlID09PSB3aW5kb3cpIHtcclxuICAgICAgICBzdHlsZXIgPSB2aWV3cG9ydChub2RlKTtcclxuICAgIH1cclxuICAgIGludmFyaWFudChzdHlsZXIgIT09IHVuZGVmaW5lZCwgJ05vIHZhbGlkIG5vZGUgcHJvdmlkZWQuIE5vZGUgbXVzdCBiZSBIVE1MRWxlbWVudCwgU1ZHRWxlbWVudCBvciB3aW5kb3cuJyk7XHJcbiAgICBjYWNoZS5zZXQobm9kZSwgc3R5bGVyKTtcclxuICAgIHJldHVybiBzdHlsZXI7XHJcbn07XHJcbnZhciBnZXRTdHlsZXIgPSBmdW5jdGlvbiAobm9kZSwgcHJvcHMpIHtcclxuICAgIHJldHVybiBjYWNoZS5oYXMobm9kZSkgPyBjYWNoZS5nZXQobm9kZSkgOiBjcmVhdGVET01TdHlsZXIobm9kZSwgcHJvcHMpO1xyXG59O1xyXG5mdW5jdGlvbiBpbmRleCAobm9kZU9yU2VsZWN0b3IsIHByb3BzKSB7XHJcbiAgICB2YXIgbm9kZSA9IHR5cGVvZiBub2RlT3JTZWxlY3RvciA9PT0gJ3N0cmluZydcclxuICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iobm9kZU9yU2VsZWN0b3IpXHJcbiAgICAgICAgOiBub2RlT3JTZWxlY3RvcjtcclxuICAgIHJldHVybiBnZXRTdHlsZXIobm9kZSwgcHJvcHMpO1xyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuZXhwb3J0IHsgY3JlYXRlU3R5bGVyIGFzIGNyZWF0ZVN0eWxlckZhY3RvcnksIGJ1aWxkU3R5bGVQcm9wZXJ0eVN0cmluZyBhcyBidWlsZFN0eWxlcyB9O1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaCAoZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG4iLCJmdW5jdGlvbiB0cmltU2xhc2hlcyhzdHIpIHtcclxuXHRyZXR1cm4gc3RyLnJlcGxhY2UoL15cXC98XFwvJC9nLCAnJylcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRzV2l0aChhLCBiKSB7XHJcblx0cmV0dXJuIGEuc3Vic3RyKDAsIGIubGVuZ3RoKSA9PSBiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb24gPSBPYmplY3QuYXNzaWduKFxyXG5cdChkYXRhLCBjYiwgcmVwbGFjZSA9IGZhbHNlKSA9PiB7XHJcblx0XHRpZiAodHlwZW9mIGRhdGEgPT0gJ3N0cmluZycpIHJldHVybiBhY3Rpb24oe3VybDogZGF0YX0sIGNiLCByZXBsYWNlKVxyXG5cdFx0aWYgKCFkYXRhIHx8ICFkYXRhLnVybCkgcmV0dXJuIHt9XHJcblx0XHRjb25zdCB7dXJsLCB0YXJnZXR9ID0gZGF0YVxyXG5cdFx0aWYgKHVybC5pbmRleE9mKCdtYWlsdG86JykgPT09IDApIHJldHVybiB7aHJlZjogdXJsfVxyXG5cdFx0aWYgKHVybC5pbmRleE9mKCdAJykgPiAtMSkgcmV0dXJuIHtocmVmOiAnbWFpbHRvOicgKyB1cmx9XHJcblx0XHRpZiAodXJsLmluZGV4T2YoJy4nKSA+IC0xIHx8IHVybC5pbmRleE9mKCc6Ly8nKSA+IC0xKVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGhyZWY6IHVybCxcclxuXHRcdFx0XHR0YXJnZXQ6IHRhcmdldCB8fCAnX2JsYW5rJyxcclxuXHRcdFx0XHRyZWw6ICdleHRlcm5hbCBub29wZW5lcicsXHJcblx0XHRcdFx0b25jbGljazogY2JcclxuXHRcdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGhyZWY6IHVybCxcclxuXHRcdFx0XHR0YXJnZXQsXHJcblx0XHRcdFx0b25jbGljazogZSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoY2IpIGNiKClcclxuXHRcdFx0XHRcdGFjdGlvbi5hbmNob3JDbGljayhlLCB1cmwsIHJlcGxhY2UpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0fSxcclxuXHR7XHJcblx0XHRpc0FjdGl2ZShkYXRhLCBleGFjdCA9IGZhbHNlKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgZGF0YSA9PSAnc3RyaW5nJykgcmV0dXJuIGFjdGlvbi5pc0FjdGl2ZSh7dXJsOiBkYXRhfSwgZXhhY3QpXHJcblx0XHRcdGNvbnN0IHtwYXRobmFtZX0gPSB3aW5kb3cubG9jYXRpb25cclxuXHRcdFx0Y29uc3QgcGF0aCA9IHRyaW1TbGFzaGVzKHBhdGhuYW1lKVxyXG5cdFx0XHRjb25zdCB1cmwgPSB0cmltU2xhc2hlcyhkYXRhLnVybClcclxuXHRcdFx0aWYgKGV4YWN0KSByZXR1cm4gcGF0aCA9PSB1cmxcclxuXHRcdFx0cmV0dXJuIHN0YXJ0c1dpdGgocGF0aCwgdXJsKVxyXG5cdFx0fSxcclxuXHRcdGFuY2hvckNsaWNrKGUsIGhyZWYsIHJlcGxhY2UpIHtcclxuXHRcdFx0aWYgKGUud2hpY2ggPT0gMikgcmV0dXJuXHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHRhY3Rpb24ubmF2aWdhdGUoaHJlZiwgcmVwbGFjZSlcclxuXHRcdH0sXHJcblx0XHRuYXZpZ2F0ZSh1cmwsIHJlcGxhY2UpIHtcclxuXHRcdFx0aWYgKCF1cmwpIHJldHVyblxyXG5cdFx0XHRpZiAodHlwZW9mIHVybCAhPSAnc3RyaW5nJyAmJiAndXJsJyBpbiB1cmwpXHJcblx0XHRcdFx0cmV0dXJuIGFjdGlvbi5uYXZpZ2F0ZSh1cmwudXJsLCByZXBsYWNlKVxyXG5cdFx0XHRpZiAocmVwbGFjZSkgaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgbnVsbCwgdXJsKVxyXG5cdFx0XHRlbHNlIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIHVybClcclxuXHRcdFx0d2luZG93Lm9ucG9wc3RhdGUoe3N0YXRlOiBudWxsfSBhcyBhbnkpXHJcblx0XHR9XHJcblx0fVxyXG4pXHJcbiIsImltcG9ydCBtIGZyb20gJ21pdGhyaWwnXHJcbmltcG9ydCB7Rm9ybVN0YXR1cywgRm9ybVN0b3JlfSBmcm9tICcuL3N0b3JlL2Zvcm1zdG9yZSdcclxuaW1wb3J0IG9iamVjdFRvRm9ybURhdGEgZnJvbSAnb2JqZWN0LXRvLWZvcm1kYXRhJ1xyXG5pbXBvcnQge1xyXG5cdEZpZWxkcyxcclxuXHRJbnB1dCxcclxuXHRTZWxlY3QsXHJcblx0VGV4dGFyZWEsXHJcblx0UmFkaW9zLFxyXG5cdENoZWNrYm94LFxyXG5cdEJveGVzXHJcbn0gZnJvbSAnLi91aS9mb3JtL2ZpZWxkcydcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtQmFzZSB7XHJcblx0c3RvcmU6IEZvcm1TdG9yZVxyXG5cdGZpZWxkczogRmllbGRzXHJcblxyXG5cdGNvbnN0cnVjdG9yKHN0b3JlLCBmaWVsZHMpIHtcclxuXHRcdHRoaXMuc3RvcmUgPSBzdG9yZVxyXG5cdFx0dGhpcy5maWVsZHMgPSBmaWVsZHNcclxuXHR9XHJcblxyXG5cdHN0YXR1cygpIHtcclxuXHRcdHJldHVybiB0aGlzLnN0b3JlLnN0YXR1cy50eXBlXHJcblx0fVxyXG5cclxuXHRpc0NvbXBsZXRlZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLnN0YXR1cygpID09IEZvcm1TdGF0dXMuU3VjY2Vzc1xyXG5cdH1cclxuXHJcblx0Zm9ybVN1Ym1pdChlLCBvcHRpb25zID0ge30pIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0Y29uc3QgZm9ybSA9IGUudGFyZ2V0XHJcblx0XHRjb25zdCB7YWN0aW9uOiB1cmwsIG1ldGhvZH0gPSBmb3JtXHJcblx0XHRjb25zdCB0eXBlID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ2VuY3R5cGUnKSB8fCAnYXBwbGljYXRpb24vanNvbidcclxuXHRcdHJldHVybiB0aGlzLnN1Ym1pdCh0eXBlLCB7dXJsLCBtZXRob2QsIC4uLm9wdGlvbnN9KVxyXG5cdH1cclxuXHJcblx0c3VibWl0KHR5cGUsIHt1cmwsIG1ldGhvZCwgaGVhZGVycyA9IHt9LCAuLi5vcHRpb25zfSkge1xyXG5cdFx0c3dpdGNoICh0aGlzLnN0b3JlLnN0YXR1cy50eXBlKSB7XHJcblx0XHRcdGNhc2UgJ3NlbmRpbmcnOlxyXG5cdFx0XHRjYXNlICdzdWNjZXNzJzpcclxuXHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy50cmFuc2Zlcih7XHJcblx0XHRcdFx0XHR1cmwsXHJcblx0XHRcdFx0XHRtZXRob2QsXHJcblx0XHRcdFx0XHRkYXRhOiB0aGlzLmZvcm1hdERhdGEodHlwZSksXHJcblx0XHRcdFx0XHRoZWFkZXJzOlxyXG5cdFx0XHRcdFx0XHR0eXBlLmluZGV4T2YoJ211bHRpcGFydCcpID09PSAwXHJcblx0XHRcdFx0XHRcdFx0PyBoZWFkZXJzXHJcblx0XHRcdFx0XHRcdFx0OiB7J0NvbnRlbnQtVHlwZSc6IHR5cGUsIC4uLmhlYWRlcnN9LFxyXG5cdFx0XHRcdFx0c2VyaWFsaXplOiB2ID0+IHYsXHJcblx0XHRcdFx0XHQuLi5vcHRpb25zXHJcblx0XHRcdFx0fSkudGhlbihcclxuXHRcdFx0XHRcdHJlc3BvbnNlID0+IFByb21pc2UucmVzb2x2ZSh0aGlzLnN0b3JlLnN1Y2Nlc3MocmVzcG9uc2UpKSxcclxuXHRcdFx0XHRcdGVycm9ycyA9PiBQcm9taXNlLnJlamVjdCh0aGlzLnN0b3JlLmZhaWwoZXJyb3JzKSlcclxuXHRcdFx0XHQpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmb3JtYXREYXRhKHR5cGUpIHtcclxuXHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRjYXNlICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOlxyXG5cdFx0XHRcdHJldHVybiBtLmJ1aWxkUXVlcnlTdHJpbmcodGhpcy5zdG9yZS5kYXRhKVxyXG5cdFx0XHRjYXNlICdtdWx0aXBhcnQvZm9ybS1kYXRhJzpcclxuXHRcdFx0XHRyZXR1cm4gb2JqZWN0VG9Gb3JtRGF0YSh0aGlzLnN0b3JlLmRhdGEpXHJcblx0XHRcdGNhc2UgJ2FwcGxpY2F0aW9uL2pzb24nOlxyXG5cdFx0XHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3JlLmRhdGEpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0cmFuc2ZlcihyZXF1ZXN0KSB7XHJcblx0XHRyZXR1cm4gbS5yZXF1ZXN0KHtcclxuXHRcdFx0Li4ucmVxdWVzdCxcclxuXHRcdFx0Y29uZmlnOiB4aHIgPT4gdGhpcy5zdG9yZS5zZW5kKHhocilcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHR0ZXh0ID0gY29uZmlnID0+IHRoaXMuZmllbGRzLmFzRmllbGQoSW5wdXQsIHsuLi5jb25maWd9KVxyXG5cdGVtYWlsID0gY29uZmlnID0+IHRoaXMudGV4dCh7Li4uY29uZmlnLCB0eXBlOiAnZW1haWwnfSlcclxuXHRwYXNzd29yZCA9IGNvbmZpZyA9PiB0aGlzLnRleHQoey4uLmNvbmZpZywgdHlwZTogJ3Bhc3N3b3JkJ30pXHJcblx0dGV4dGFyZWEgPSBjb25maWcgPT4gdGhpcy5maWVsZHMuYXNGaWVsZChUZXh0YXJlYSwgey4uLmNvbmZpZ30pXHJcblx0c2VsZWN0ID0gY29uZmlnID0+IHRoaXMuZmllbGRzLmFzRmllbGQoU2VsZWN0LCBjb25maWcpXHJcblx0cmFkaW8gPSBjb25maWcgPT4gdGhpcy5maWVsZHMuYXNGaWVsZChSYWRpb3MsIGNvbmZpZylcclxuXHRjaGVja2JveCA9IGNvbmZpZyA9PiB0aGlzLmZpZWxkcy5hc0ZpZWxkKENoZWNrYm94LCBjb25maWcpXHJcblx0Ym94ZXMgPSBjb25maWcgPT4gdGhpcy5maWVsZHMuYXNGaWVsZChCb3hlcywgY29uZmlnKVxyXG59XHJcblxyXG4vKipcclxuICogQWxzIGluc3RhbmNlIGtsYXNzZSB2YW4gZGUgdmlldyB3YWFyIGplIGRlIGZvcm0gd2lsdCBnZWJydWlrZW4gbWFhayBqZSBlZW4gbmlldXcgRm9ybSBhYW4uXHJcbiAqIEhldCBvbnN1Ym1pdCBldmVudCB2YW4gamUgaHRtbCBmb3JtdWxpZXIga29wcGVsIGplIGRvb3IgYWFuIGRlIHN1Ym1pdCBtZXRob2RlIHZhbiBkaXQgZm9ybSBvYmplY3QuXHJcbiAqIFZlbGRlbiB0b2V2b2VnZW4gYWFuIGplIGh0bWwgZm9ybXVsaWVyIGlzIGdlbWFra2VsaWprIHZpYSBkZSBzaG9ydGN1cnRzIGRpZSBqZSB2aW5kIG9wIGRpdCBmb3JtIG9iamVjdC5cclxuICogV2FubmVlciBoZXQgb25zdWNjZXMgZXZlbnQgd29yZHQgYWFuZ2Vyb2VwZW4gd2VldCBqZSBkYXQgaGV0IGZvcm11bGllciBzdWNjZXN2b2wgdmVyd2Vya3QgaXMgZG9vciBkZSBzZXJ2ZXIuXHJcbiAqXHJcbiAqIEVpZ2VuIGN1c3RvbSB2ZWxkZW4gbWFrZW4gZW4gdG9ldm9lZ2VuIGthbiBkb29yIGRlIGF0dHJzIG1ldGhvZGUgdGUgZ2VicnVpa2VuICh6aWUgaW1wbGVtZW50YXRpZSBzaG9ydGN1dHMpLlxyXG4gKiBFZW4gZWlnZW4gdmVsZCBtb2V0IHRlbiBtaW5zdGUgZGUgYXR0cmlidXRlcyAndmFsdWUnIGVuICdvbmNoYW5nZScgb25kZXJzdGV1bmVuIG9tIHRlIGZ1bmN0aW9uZXJlbi5cclxuICpcclxuICogTGFuZ3MgZGUgc2VydmVya2FudCBtb2V0IGplIGVlbiByb3V0ZSB2b29yemllbiBkaWUgZGUgZGF0YSB2ZXJ3ZXJrdC5cclxuICogRGV6ZSBzdHV1cnQgZWVuIGpzb24gYmVyaWNodCB0ZXJ1ZyB2YW4gdm9sZ2VuZGUgdHlwZTpcclxuICoge1xyXG4gKiAgICAgIFwic3VjY2VzXCI6IHRydWUgfCBmYWxzZVxyXG4gKiAgICAgIFwiZXJyb3JzXCI6IHsgLi4uIH0gICAgICAgICAgIC8vIEFsbGVlbiBhbHMgc3VjY2VzIGZhbHNlIGlzXHJcbiAqICAgICAgXCJkYXRhXCI6IHsgLi4uIH0gICAgICAgICAgICAgLy8gQWxsZWVuIGFscyBzdWNjZXMgdHJ1ZSBpcyAod29yZHQgbWVlZ2VnZXZlbiBhbHMgYXJndW1lbnQgYWFuIGRlIG9uc3VjY2VzKVxyXG4gKiB9XHJcbiAqXHJcbiAqIFRPRE86XHJcbiAqIC0gR2VicnVpayBkZSBzZXRDdXN0b21WYWxpZGl0eSBtZXRob2RlIG9tIGRlIGluLWJyb3dzZXIgdmFsaWRhdGllIHRvZSB0ZSBwYXNzZW4gb3AgZWxlbWVudGVuIG1ldCBlZW4gZXJyb3JcclxuICogLSBTZWxlY3QgdmVydmFuZ2VuIGRvb3IgZ2VoZWVsIGVpZ2VuIGltcGxlbWVudGF0aWUgKGRpZSBtYWtrZWxpamtlciB0ZSBzdHlsZW4gaXMgYWxzIGRlIHN0YW5kYWFyZCBodG1sIHNlbGVjdClcclxuICogLSBFZW4gZmxleGliZWwgZW4gdmVpbGlnIHd5c2l3eWctZWRpdG9yIHZlbGQgdG9ldm9lZ2VuIChidi4gdGlueW1jZSlcclxuICogLSBCYXNpcyBzdHlsaW5nIHZhbiBiZXN0YWFuZGUgZWxlbWVudGVuIHJvYnV1c3RlciBlbiBmbGV4aWJlbGVyIG1ha2VuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRm9ybSBleHRlbmRzIEZvcm1CYXNlIHtcclxuXHRjb25zdHJ1Y3Rvcih7ZGF0YSA9IHt9LCAuLi5jb25maWd9ID0ge30pIHtcclxuXHRcdGNvbnN0IHN0b3JlID0gbmV3IEZvcm1TdG9yZShkYXRhKVxyXG5cdFx0Y29uc3QgZmllbGRzID0gbmV3IEZpZWxkcyhzdG9yZSwge1xyXG5cdFx0XHRkZWZhdWx0VW5zdHlsZWQ6IHRydWUsXHJcblx0XHRcdGxhYmVsSW5GaWVsZHM6IGZhbHNlLFxyXG5cdFx0XHRkZWZhdWx0UmVxdWlyZWQ6IGZhbHNlLFxyXG5cdFx0XHQuLi5jb25maWdcclxuXHRcdH0pXHJcblx0XHRzdXBlcihzdG9yZSwgZmllbGRzKVxyXG5cdH1cclxuXHJcblx0Zm9ybVN1Ym1pdChlLCBvcHRpb25zID0ge30pIHtcclxuXHRcdHJldHVybiBzdXBlci5mb3JtU3VibWl0KGUsIG9wdGlvbnMpLmNhdGNoKGVycm9ycyA9PiB7XHJcblx0XHRcdGNvbnN0IFtmaXJzdEtleV0gPSBPYmplY3Qua2V5cyhlcnJvcnMpXHJcblx0XHRcdGlmIChmaXJzdEtleSkgdGhpcy5maWVsZHMuZm9jdXNGaWVsZChmaXJzdEtleSlcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7QXR0cmlidXRlcywgQ29tcG9uZW50VHlwZXMsIExpZmVjeWNsZSwgQ2hpbGRyZW4sIFZub2RlfSBmcm9tICdtaXRocmlsJ1xyXG5pbXBvcnQgaHlwZXJzY3JpcHQgZnJvbSAnbWl0aHJpbC9oeXBlcnNjcmlwdCdcclxuXHJcbnR5cGUgRXh0ZW5kZWRIeXBlcnNjcmlwdCA9IHtcclxuXHQoc2VsZWN0b3I6IHN0cmluZywgLi4uY2hpbGRyZW46IENoaWxkcmVuW10pOiBWbm9kZTxhbnksIGFueT47XHJcblx0KHNlbGVjdG9yOiBzdHJpbmcsIGF0dHJpYnV0ZXM6IEF0dHJpYnV0ZXMsIC4uLmNoaWxkcmVuOiBDaGlsZHJlbltdKTogVm5vZGU8YW55LCBhbnk+O1xyXG5cdDxBdHRycywgU3RhdGU+KGNvbXBvbmVudDogQ29tcG9uZW50VHlwZXM8QXR0cnMsIFN0YXRlPiwgLi4uYXJnczogQ2hpbGRyZW5bXSk6IFZub2RlPEF0dHJzLCBTdGF0ZT47XHJcblx0PEF0dHJzLCBTdGF0ZT4oY29tcG9uZW50OiBDb21wb25lbnRUeXBlczxBdHRycywgU3RhdGU+LCBhdHRyaWJ1dGVzOiBBdHRycyAmIExpZmVjeWNsZTxBdHRycywgU3RhdGU+ICYgeyBrZXk/OiBzdHJpbmcgfCBudW1iZXIgfSwgLi4uYXJnczogQ2hpbGRyZW5bXSk6IFZub2RlPEF0dHJzLCBTdGF0ZT47XHJcblx0KGNvbXBvbmVudDogKGF0dHJzOiB7Y2hpbGRyZW4/OiBDaGlsZHJlbn0pID0+IENoaWxkcmVuLCAuLi5hcmdzOiBDaGlsZHJlbltdKTogVm5vZGU8e30+O1xyXG5cdDxBdHRycz4oY29tcG9uZW50OiAoYXR0cnM6IHtjaGlsZHJlbj86IENoaWxkcmVufSAmIEF0dHJzKSA9PiBDaGlsZHJlbiwgYXR0cmlidXRlczogQXR0cnMgJiB7IGtleT86IHN0cmluZyB8IG51bWJlciB9LCAuLi5hcmdzOiBDaGlsZHJlbltdKTogVm5vZGU8QXR0cnM+O1xyXG59XHJcblxyXG5jb25zdCBpc1BsYWluRnVuY3Rpb24gPSBpbnB1dCA9PlxyXG5cdHR5cGVvZiBpbnB1dCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgaW5wdXQucHJvdG90eXBlLnZpZXcgIT09IFwiZnVuY3Rpb25cIlxyXG5cclxuZXhwb3J0IGNvbnN0IG06IEV4dGVuZGVkSHlwZXJzY3JpcHQgPSAoc2VsZWN0b3IsIGF0dHJzLCAuLi5jaGlsZHJlbikgPT4ge1xyXG5cdGlmIChpc1BsYWluRnVuY3Rpb24oc2VsZWN0b3IpKSB7XHJcblx0XHRpZiAodHlwZW9mIGF0dHJzICE9PSBcIm9iamVjdFwiIHx8IGF0dHJzLnRhZyAhPSBudWxsIHx8IEFycmF5LmlzQXJyYXkoYXR0cnMpKVxyXG5cdFx0XHRyZXR1cm4gc2VsZWN0b3Ioe2NoaWxkcmVuOiBbLi4uYXR0cnMsIC4uLmNoaWxkcmVuXX0pXHJcblx0XHRyZXR1cm4gc2VsZWN0b3Ioey4uLmF0dHJzLCBjaGlsZHJlbn0pXHJcblx0fVxyXG5cdHJldHVybiBoeXBlcnNjcmlwdChzZWxlY3RvciwgYXR0cnMsIC4uLmNoaWxkcmVuKVxyXG59IiwiZGVjbGFyZSBnbG9iYWwge1xyXG5cdG5hbWVzcGFjZSBKU1gge1xyXG5cdFx0aW50ZXJmYWNlIEVsZW1lbnRBdHRyaWJ1dGVzUHJvcGVydHkge1xyXG5cdFx0XHRhdHRyc1xyXG5cdFx0fVxyXG5cdFx0aW50ZXJmYWNlIEVsZW1lbnRDaGlsZHJlbkF0dHJpYnV0ZSB7XHJcblx0XHRcdGNoaWxkcmVuOiB7fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9oeXBlcnNjcmlwdCdcclxuZXhwb3J0ICogZnJvbSAnLi91aS9jb21wb25lbnQnXHJcbmV4cG9ydCAqIGZyb20gJy4vdWkvY29udGV4dCdcclxuZXhwb3J0ICogZnJvbSAnLi91aS9wYWdlJ1xyXG5leHBvcnQgKiBmcm9tICcuL3VpL3BpY3R1cmUnXHJcbmV4cG9ydCAqIGZyb20gJy4vdWkvaW1hZ2UnXHJcbmV4cG9ydCAqIGZyb20gJy4vdWkvYmFja2dyb3VuZCdcclxuZXhwb3J0ICogZnJvbSAnLi91aS9pY29uJ1xyXG5leHBvcnQgKiBmcm9tICcuL3VpL3NsaWRlcidcclxuZXhwb3J0ICogZnJvbSAnLi91aS9tZWRpYXF1ZXJ5J1xyXG5leHBvcnQgKiBmcm9tICcuL3VpL21vZGFsJ1xyXG5leHBvcnQgKiBmcm9tICcuL3VpL3BvcnRhbCdcclxuZXhwb3J0ICogZnJvbSAnLi91aS9tYXNvbnJ5J1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9zdG9yZS9zbGlkZXJzdG9yZSdcclxuZXhwb3J0ICogZnJvbSAnLi9zdG9yZS9mb3Jtc3RvcmUnXHJcbmV4cG9ydCAqIGZyb20gJy4vc3RvcmUvbW9kYWxzdG9yZSdcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vcm91dGVyJ1xyXG5leHBvcnQgKiBmcm9tICcuL2FjdGlvbidcclxuZXhwb3J0ICogZnJvbSAnLi9mb3JtJ1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi91aS9mb3JtL2ZpZWxkcydcclxuZXhwb3J0ICogZnJvbSAnLi91aS9mb3JtL2ZpZWxkJ1xyXG5leHBvcnQgKiBmcm9tICcuL3VpL2Zvcm0vaW5wdXQnXHJcbmV4cG9ydCAqIGZyb20gJy4vdWkvZm9ybS90ZXh0YXJlYSdcclxuZXhwb3J0ICogZnJvbSAnLi91aS9mb3JtL3NlbGVjdCdcclxuZXhwb3J0ICogZnJvbSAnLi91aS9mb3JtL2NoZWNrYm94J1xyXG5leHBvcnQgKiBmcm9tICcuL3VpL2Zvcm0vcmFkaW9zJ1xyXG5leHBvcnQgKiBmcm9tICcuL3VpL2Zvcm0vcmFkaW8nXHJcbmV4cG9ydCAqIGZyb20gJy4vdWkvZm9ybS9ib3hlcydcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vdXRpbC9jbGFzc2VzJ1xyXG5leHBvcnQgKiBmcm9tICcuL3V0aWwvc3ViY29tcG9uZW50J1xyXG4iLCJpbXBvcnQgbSBmcm9tICdtaXRocmlsJ1xyXG5pbXBvcnQganVtcCBmcm9tICdqdW1wLmpzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFJvdXRlciB7XHJcblx0dHJhbnNwb3J0ID0gbnVsbFxyXG5cdGRhdGE6IGFueSA9IHt9XHJcblxyXG5cdGNvbnN0cnVjdG9yKGluaXRpYWxTdGF0ZSkge1xyXG5cdFx0dGhpcy5kYXRhID0gaW5pdGlhbFN0YXRlXHJcblx0fVxyXG5cclxuXHR1cmwoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5kYXRhLnVybFxyXG5cdH1cclxuXHJcblx0dmlldyh2bm9kZSkge1xyXG5cdFx0Y29uc3Qge2hyZWZ9ID0gd2luZG93LmxvY2F0aW9uXHJcblx0XHRjb25zdCBwYXJhbXMgPVxyXG5cdFx0XHRocmVmLmluZGV4T2YoJz8nKSA+IC0xID8gbS5wYXJzZVF1ZXJ5U3RyaW5nKGhyZWYuc3BsaXQoJz8nKVsxXSkgOiB7fVxyXG5cdFx0Y29uc3Qgcm91dGUgPSB7aHJlZiwgcGF0aDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCBwYXJhbXN9XHJcblx0XHRyZXR1cm4gdGhpcy5yZXNvbHZlKHRoaXMuZGF0YSwgcm91dGUpXHJcblx0fVxyXG5cclxuXHRtb3VudChlbGVtZW50KSB7XHJcblx0XHR3aW5kb3cub25wb3BzdGF0ZSA9IGUgPT4ge1xyXG5cdFx0XHRpZiAoZS5zdGF0ZSkge1xyXG5cdFx0XHRcdHRoaXMuc2V0RGF0YShlLnN0YXRlLmRhdGEpXHJcblx0XHRcdFx0bS5yZWRyYXcoKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMubmF2aWdhdGUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRtLm1vdW50KGVsZW1lbnQsIHRoaXMpXHJcblx0fVxyXG5cclxuXHRnZXRQYWdlVGl0bGUoZGF0YSkge1xyXG5cdFx0cmV0dXJuIGRhdGEudGl0bGVcclxuXHR9XHJcblxyXG5cdHNldERhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5kYXRhID0gZGF0YVxyXG5cdFx0Y29uc3Qge2hhc2gsIGhyZWZ9ID0gd2luZG93LmxvY2F0aW9uXHJcblx0XHRjb25zdCBxdWVyeUluZGV4ID0gaHJlZi5pbmRleE9mKCc/JylcclxuXHRcdGNvbnN0IHF1ZXJ5ID0gcXVlcnlJbmRleCA+IC0xID8gaHJlZi5zdWJzdHIocXVlcnlJbmRleCkgOiAnJ1xyXG5cdFx0d2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHtkYXRhfSwgdGhpcy5nZXRQYWdlVGl0bGUoZGF0YSkpXHJcblx0XHRkb2N1bWVudC50aXRsZSA9IHRoaXMuZ2V0UGFnZVRpdGxlKGRhdGEpXHJcblx0fVxyXG5cclxuXHRjbGVhcigpIHtcclxuXHRcdGlmICghdGhpcy50cmFuc3BvcnQpIHJldHVyblxyXG5cdFx0dGhpcy50cmFuc3BvcnQuYWJvcnQoKVxyXG5cdFx0dGhpcy50cmFuc3BvcnQgPSBudWxsXHJcblx0fVxyXG5cclxuXHRzY3JvbGwoaGFzaCkge1xyXG5cdFx0aWYgKGhhc2gpIGp1bXAoaGFzaClcclxuXHRcdGVsc2Ugd2luZG93LnNjcm9sbFRvKDAsIDApXHJcblx0fVxyXG5cclxuXHRmZXRjaChwYXRoKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoJ2ltcGxlbWVudCcpXHJcblx0fVxyXG5cclxuXHRyZXNvbHZlKGRhdGEsIHJvdXRlKSB7XHJcblx0XHR0aHJvdyAnaW1wbGVtZW50J1xyXG5cdH1cclxuXHJcblx0bmF2aWdhdGUocGF0aCkge1xyXG5cdFx0Y29uc3Qge2hhc2h9ID0gd2luZG93LmxvY2F0aW9uXHJcblx0XHRpZiAocGF0aCA9PSB0aGlzLnVybCgpKSB7XHJcblx0XHRcdGlmIChoYXNoKSB0aGlzLnNjcm9sbChoYXNoKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5jbGVhcigpXHJcblx0XHRcdHJldHVybiB0aGlzLmZldGNoKHBhdGgpLnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zZXREYXRhKGRhdGEpXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnNjcm9sbChoYXNoKSlcclxuXHRcdFx0XHRyZXR1cm4gZGF0YVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgbSBmcm9tICdtaXRocmlsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1TdGF0dXMgPSB7XHJcblx0UmVzZXQ6ICdyZXNldCcsXHJcblx0U2VuZGluZzogJ3NlbmRpbmcnLCAvLyB7eGhyfVxyXG5cdEZhaWx1cmU6ICdlcnJvcicsIC8vIHtlcnJvcnN9XHJcblx0U3VjY2VzczogJ3N1Y2Nlc3MnIC8vIHtyZXNwb25zZX1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRm9ybVN0YXRlID1cclxuXHR8IHt0eXBlOiAncmVzZXQnfVxyXG5cdHwge3R5cGU6ICdzZW5kaW5nJzsgeGhyOiBYTUxIdHRwUmVxdWVzdH1cclxuXHR8IHt0eXBlOiAnZXJyb3InOyBlcnJvcnM6IHt9fVxyXG5cdHwge3R5cGU6ICdzdWNjZXNzJzsgcmVzcG9uc2U6IHt9fVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1TdG9yZSB7XHJcblx0ZGF0YToge31cclxuXHRzdGF0dXM6IEZvcm1TdGF0ZVxyXG5cclxuXHRjb25zdHJ1Y3RvcihkYXRhID0ge30pIHtcclxuXHRcdHRoaXMuZGF0YSA9IGRhdGFcclxuXHRcdHRoaXMuc3RhdHVzID0ge3R5cGU6ICdyZXNldCd9XHJcblx0fVxyXG5cclxuXHRzZW5kKHhocikge1xyXG5cdFx0dGhpcy5zdGF0dXMgPSB7dHlwZTogJ3NlbmRpbmcnLCB4aHJ9XHJcblx0fVxyXG5cclxuXHRzdWNjZXNzKHJlc3BvbnNlKSB7XHJcblx0XHR0aGlzLnN0YXR1cyA9IHt0eXBlOiAnc3VjY2VzcycsIHJlc3BvbnNlfVxyXG5cdFx0cmV0dXJuIHJlc3BvbnNlXHJcblx0fVxyXG5cclxuXHRmYWlsKGVycm9ycykge1xyXG5cdFx0dGhpcy5zdGF0dXMgPSB7dHlwZTogJ2Vycm9yJywgZXJyb3JzfVxyXG5cdFx0cmV0dXJuIGVycm9yc1xyXG5cdH1cclxuXHJcblx0cmVzZXQoKSB7XHJcblx0XHRzd2l0Y2ggKHRoaXMuc3RhdHVzLnR5cGUpIHtcclxuXHRcdFx0Y2FzZSAnc2VuZGluZyc6XHJcblx0XHRcdFx0dGhpcy5zdGF0dXMueGhyLmFib3J0KClcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aGlzLnN0YXR1cyA9IHt0eXBlOiAncmVzZXQnfVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0RGF0YShrZXksIHZhbHVlKSB7XHJcblx0XHR0aGlzLmRhdGFba2V5XSA9IHZhbHVlXHJcblx0fVxyXG5cclxuXHR0b1N0cmluZygpIHtcclxuXHRcdHJldHVybiB0aGlzLnN0YXR1cy50eXBlXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCAqIGFzIHN0cmVhbSBmcm9tICdtaXRocmlsL3N0cmVhbSdcclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbFN0b3JlIHtcclxuICBpc09wZW4gPSBmYWxzZVxyXG5cclxuICBvcGVuID0gKCkgPT4gXHJcbiAgICB0aGlzLmlzT3BlbiA9IHRydWVcclxuXHJcbiAgY2xvc2UgPSAoKSA9PiBcclxuICAgIHRoaXMuaXNPcGVuID0gZmFsc2VcclxuXHJcbiAgdG9nZ2xlID0gKCkgPT4gXHJcbiAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlblxyXG59IiwiaW1wb3J0IHN0cmVhbSBmcm9tICdtaXRocmlsL3N0cmVhbSdcclxuXHJcbi8qKlxyXG4gKiBpbmRleDogU3RyZWFtPG51bWJlcj5cclxuICogdG90YWw6IFN0cmVhbTxudW1iZXI+XHJcbiAqID9hY3RpdmVzOiBTdHJlYW08QXJyYXk8bnVtYmVyID0+IGJvb2xlYW4+PlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNsaWRlclN0b3JlIHtcclxuXHRpbmRleCA9IHN0cmVhbSgwKVxyXG5cdHRvdGFsID0gc3RyZWFtKDApXHJcblx0YWN0aXZlcyA9IHN0cmVhbShbXSlcclxuXHJcblx0aGFzKGluZGV4KSB7XHJcblx0XHRyZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMudG90YWwoKVxyXG5cdH1cclxuXHJcblx0aGFzTmV4dCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmhhcyh0aGlzLmluZGV4KCkgKyAxKVxyXG5cdH1cclxuXHJcblx0aGFzUHJldmlvdXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5oYXModGhpcy5pbmRleCgpIC0gMSlcclxuXHR9XHJcblxyXG5cdGdvVG8oaW5kZXgpIHtcclxuXHRcdHJldHVybiB0aGlzLmhhcyhpbmRleCkgJiYgKHRoaXMuaW5kZXgoaW5kZXgpLCB0cnVlKVxyXG5cdH1cclxuXHJcblx0Z29OZXh0KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ29Ubyh0aGlzLmluZGV4KCkgKyAxKVxyXG5cdH1cclxuXHJcblx0Z29QcmV2aW91cygpIHtcclxuXHRcdHJldHVybiB0aGlzLmdvVG8odGhpcy5pbmRleCgpIC0gMSlcclxuXHR9XHJcblxyXG5cdGlzQWN0aXZlKGNoaWxkSW5kZXgpIHtcclxuXHRcdHJldHVybiB0aGlzLmFjdGl2ZXMoKVtjaGlsZEluZGV4XSAmJiB0aGlzLmFjdGl2ZXMoKVtjaGlsZEluZGV4XSgpXHJcblx0fVxyXG59XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IG0gZnJvbSAnbWl0aHJpbCdcclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50J1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQge2dldFJlc2l6ZWRVcmx9IGZyb20gJy4vcGljdHVyZSdcclxuXHJcbmltcG9ydCAnLi9iYWNrZ3JvdW5kLmxlc3MnXHJcblxyXG5leHBvcnQgdHlwZSBJbWcgPSB7XHJcblx0c3JjOiBzdHJpbmdcclxuXHRlbXB0eT86IGJvb2xlYW5cclxuXHRmb2N1cz86IHt4OiBudW1iZXI7IHk6IG51bWJlcn1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmQgZXh0ZW5kcyBDb21wb25lbnQ8XHJcblx0e1xyXG5cdFx0aW1nOiBzdHJpbmcgfCBJbWdcclxuXHR9LFxyXG5cdEhUTUxEaXZFbGVtZW50XHJcbj4ge1xyXG5cdHNob3dpbmcgPSBudWxsXHJcblxyXG5cdGltYWdlKCk6IEltZyB7XHJcblx0XHRjb25zdCB7aW1nfSA9IHRoaXMuYXR0cnNcclxuXHRcdHJldHVybiB0eXBlb2YgaW1nID09PSAnc3RyaW5nJyA/IHtzcmM6IGltZ30gOiBpbWdcclxuXHR9XHJcblxyXG5cdG9uQ3JlYXRlKCkge1xyXG5cdFx0Y29uc3QgaW1nID0gdGhpcy5pbWFnZSgpXHJcblx0XHRpZiAoIWltZy5zcmMgfHwgaW1nLmVtcHR5KSByZXR1cm5cclxuXHRcdHRoaXMuc2hvd2luZyA9IGltZy5zcmNcclxuXHRcdGNvbnN0IHtzdHlsZX0gPSB0aGlzLmRvbVxyXG5cdFx0Y29uc3QgdXJsID0gZ2V0UmVzaXplZFVybChcclxuXHRcdFx0aW1nLnNyYyxcclxuXHRcdFx0dGhpcy5kb20ub2Zmc2V0V2lkdGgsXHJcblx0XHRcdHRoaXMuZG9tLm9mZnNldEhlaWdodFxyXG5cdFx0KVxyXG5cdFx0c3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHt1cmx9JylgXHJcblx0XHRpZiAoaW1nLmZvY3VzKVxyXG5cdFx0XHRzdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBgJHtpbWcuZm9jdXMueCAqIDEwMH0lICR7aW1nLmZvY3VzLnkgKiAxMDB9JWBcclxuXHR9XHJcblxyXG5cdG9uVXBkYXRlKCkge1xyXG5cdFx0Y29uc3QgaW1nID0gdGhpcy5pbWFnZSgpXHJcblx0XHRpZiAodGhpcy5zaG93aW5nICE9PSBpbWcuc3JjKSB0aGlzLm9uQ3JlYXRlKClcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHtpbWcsIC4uLmF0dHJzfSA9IHRoaXMuYXR0cnNcclxuXHRcdHJldHVybiBtKCcuYmFja2dyb3VuZCcsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRrZXk6IHRoaXMuaW1hZ2UoKS5zcmMsXHJcblx0XHRcdFx0Li4uYXR0cnNcclxuXHRcdFx0fSxcclxuXHRcdFx0dGhpcy5jaGlsZHJlblxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge0NvbXBvbmVudCBhcyBNaXRocmlsQ29tcG9uZW50LCBDVm5vZGUsIENoaWxkcmVufSBmcm9tICdtaXRocmlsJ1xyXG5pbXBvcnQgbSBmcm9tICdtaXRocmlsJ1xyXG5pbXBvcnQgcmVkcmF3QXBpIGZyb20gJ21pdGhyaWwvcmVkcmF3J1xyXG5cclxuLy8gVHlwZSBzaWduYXR1cmUgaXMgaW5jb21wbGV0ZVxyXG5jb25zdCByZWRyYXcgPSByZWRyYXdBcGkgYXMgYW55XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50PEF0dHIgPSB7fSwgRG9tID0gRWxlbWVudD5cclxuXHRpbXBsZW1lbnRzIE1pdGhyaWxDb21wb25lbnQ8QXR0cj4ge1xyXG5cdGF0dHJzOiBSZWFkb25seTx7Y2hpbGRyZW4/OiBDaGlsZHJlbn0+ICYgUmVhZG9ubHk8QXR0cj5cclxuXHRwcml2YXRlIF9fcm9vdDogYW55ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXHJcblxyXG5cdGNvbnN0cnVjdG9yKHZub2RlOiBDVm5vZGU8QXR0cj4pIHtcclxuXHRcdHRoaXMuX191cGRhdGUodm5vZGUpXHJcblx0fVxyXG5cclxuXHRnZXQgZG9tKCk6IERvbSB7XHJcblx0XHRjb25zdCB2bm9kZXMgPSAodGhpcy5fX3Jvb3QgYXMgYW55KS52bm9kZXNcclxuXHRcdGlmICh2bm9kZXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxyXG5cdFx0aWYgKHZub2Rlcy5sZW5ndGggPT09IDEpIHJldHVybiB2bm9kZXNbMF0uZG9tXHJcblx0XHRyZXR1cm4gdm5vZGVzLm1hcCh2bm9kZSA9PiB2bm9kZS5kb20pXHJcblx0fVxyXG5cclxuXHRnZXQgY2hpbGRyZW4oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5hdHRycy5jaGlsZHJlblxyXG5cdH1cclxuXHJcblx0Ly8gUHVibGljIEFQSVxyXG5cclxuXHRvbkluaXQoKSB7fVxyXG5cdG9uQ3JlYXRlKCkge31cclxuXHRvblVwZGF0ZSgpIHt9XHJcblx0b25CZWZvcmVSZW1vdmUoKTogUHJvbWlzZUxpa2U8YW55PiB7XHJcblx0XHRyZXR1cm5cclxuXHR9XHJcblx0b25SZW1vdmUoKSB7fVxyXG5cdG9uQmVmb3JlVXBkYXRlKGF0dHJzOiBBdHRyKTogdm9pZCB8IGJvb2xlYW4ge31cclxuXHRyZW5kZXIoKTogQ2hpbGRyZW4ge1xyXG5cdFx0dGhyb3cgJ2ltcGxlbWVudCdcclxuXHR9XHJcblxyXG5cdHJlZHJhdygpIHtcclxuXHRcdHJlZHJhdy5yZW5kZXIodGhpcy5fX3Jvb3QsIHRoaXMucmVuZGVyKCkpXHJcblx0fVxyXG5cclxuXHQvLyBNaXRocmlsIGNvbm5lY3Rpb25cclxuXHQvKiBVbmNvbW1lbnQgdG8gdGVzdCBwZXJmb3JtYW5jZSB2cyBnbG9iYWwgcmVkcmF3c1xyXG5cdGRvbSA9IG51bGxcclxuXHRvbmluaXQgPSB2bm9kZSA9PiAodGhpcy5fX3VwZGF0ZSh2bm9kZSksIHRoaXMub25Jbml0KCkpXHJcblx0b25jcmVhdGUgPSB2bm9kZSA9PiAodGhpcy5fX3VwZGF0ZSh2bm9kZSksIHRoaXMub25DcmVhdGUoKSlcclxuXHRvbnVwZGF0ZSA9IHZub2RlID0+ICh0aGlzLl9fdXBkYXRlKHZub2RlKSwgdGhpcy5vblVwZGF0ZSgpKVxyXG5cdG9ucmVtb3ZlID0gdm5vZGUgPT4gdGhpcy5vblJlbW92ZSgpXHJcblx0b25iZWZvcmVyZW1vdmUgPSB2bm9kZSA9PiB0aGlzLm9uQmVmb3JlUmVtb3ZlKClcclxuXHRvbmJlZm9yZXVwZGF0ZSA9IChfLCB2bm9kZSkgPT4gdGhpcy5vbkJlZm9yZVVwZGF0ZSh2bm9kZSlcclxuXHR2aWV3KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucmVuZGVyKClcclxuXHR9Ki9cclxuXHJcblx0b25pbml0ID0gdm5vZGUgPT4gKHRoaXMuX191cGRhdGUodm5vZGUpLCB0aGlzLm9uSW5pdCgpKVxyXG5cdG9uY3JlYXRlID0gdm5vZGUgPT4ge1xyXG5cdFx0dGhpcy5fX3VwZGF0ZSh2bm9kZSlcclxuXHRcdHRoaXMucmVkcmF3KClcclxuXHRcdHJlZHJhdy5zdWJzY3JpYmUodGhpcy5fX3Jvb3QsIG0ucmVkcmF3KVxyXG5cdFx0dm5vZGUuZG9tLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHRoaXMuX19yb290LCB2bm9kZS5kb20pXHJcblx0XHR0aGlzLm9uQ3JlYXRlKClcclxuXHR9XHJcblx0b251cGRhdGUgPSB2bm9kZSA9PiB7XHJcblx0XHR0aGlzLl9fdXBkYXRlKHZub2RlKVxyXG5cdFx0dGhpcy5yZWRyYXcoKVxyXG5cdFx0dGhpcy5vblVwZGF0ZSgpXHJcblx0fVxyXG5cdG9uYmVmb3JlcmVtb3ZlID0gdm5vZGUgPT5cclxuXHRcdFByb21pc2UucmVzb2x2ZSh0aGlzLm9uQmVmb3JlUmVtb3ZlKCkpLnRoZW4odGhpcy5fX3JlbW92ZSwgdGhpcy5fX3JlbW92ZSlcclxuXHRvbnJlbW92ZSA9IHZub2RlID0+IHRoaXMub25SZW1vdmUoKVxyXG5cdG9uYmVmb3JldXBkYXRlID0gKF8sIHZub2RlKSA9PiB0aGlzLm9uQmVmb3JlVXBkYXRlKHZub2RlLmF0dHJzKVxyXG5cdHZpZXcoKSB7XHJcblx0XHRyZXR1cm4gJydcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX19yZW1vdmUgPSAoKSA9PiB7XHJcblx0XHR0aGlzLl9fcm9vdC52bm9kZXMuZm9yRWFjaCh2bm9kZSA9PiB2bm9kZS5kb20ucmVtb3ZlKCkpXHJcblx0XHRyZWRyYXcudW5zdWJzY3JpYmUodGhpcy5fX3Jvb3QsIG0ucmVkcmF3KVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfX3VwZGF0ZSh2bm9kZSkge1xyXG5cdFx0dGhpcy5hdHRycyA9IHtcclxuXHRcdFx0Li4udm5vZGUuYXR0cnMsXHJcblx0XHRcdGNoaWxkcmVuOlxyXG5cdFx0XHRcdHZub2RlLmNoaWxkcmVuICYmXHJcblx0XHRcdFx0dm5vZGUuY2hpbGRyZW5bMF0gJiZcclxuXHRcdFx0XHR0eXBlb2Ygdm5vZGUuY2hpbGRyZW5bMF0uY2hpbGRyZW4gPT0gJ2Z1bmN0aW9uJ1xyXG5cdFx0XHRcdFx0PyB2bm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblxyXG5cdFx0XHRcdFx0OiB2bm9kZS5jaGlsZHJlblxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge0NoaWxkcmVuLCBDVm5vZGV9IGZyb20gJ21pdGhyaWwnXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudCdcclxuXHJcbmV4cG9ydCB0eXBlIFByb3ZpZGVyQXR0cnM8VD4gPSB7dmFsdWU6IFR9XHJcbmV4cG9ydCB0eXBlIFByb3ZpZGVyPFQ+ID0ge1xyXG5cdG5ldyAodm5vZGU6IENWbm9kZTxQcm92aWRlckF0dHJzPFQ+Pik6IENvbXBvbmVudDxQcm92aWRlckF0dHJzPFQ+PlxyXG59XHJcbmV4cG9ydCB0eXBlIENvbnN1bWVyQXR0cnM8VD4gPSB7Y2hpbGRyZW46ICh2YWx1ZTogVCkgPT4gQ2hpbGRyZW59XHJcbmV4cG9ydCB0eXBlIENvbnN1bWVyPFQ+ID0ge1xyXG5cdG5ldyAodm5vZGU6IENWbm9kZTxDb25zdW1lckF0dHJzPFQ+Pik6IENvbXBvbmVudDxDb25zdW1lckF0dHJzPFQ+PlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlQ29udGV4dCA9IDxUPihcclxuXHRjb250ZXh0OiBUXHJcbik6IHtcclxuXHRQcm92aWRlcjogUHJvdmlkZXI8VD5cclxuXHRDb25zdW1lcjogQ29uc3VtZXI8VD5cclxufSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdFByb3ZpZGVyOiBjbGFzcyBQcm92aWRlciBleHRlbmRzIENvbXBvbmVudDx7dmFsdWU6IFR9PiB7XHJcblx0XHRcdHJlZHJhdygpIHtcclxuXHRcdFx0XHRjb25zdCBvbGQgPSBjb250ZXh0XHJcblx0XHRcdFx0Y29udGV4dCA9IHRoaXMuYXR0cnMudmFsdWVcclxuXHRcdFx0XHRzdXBlci5yZWRyYXcoKVxyXG5cdFx0XHRcdGNvbnRleHQgPSBvbGRcclxuXHRcdFx0fVxyXG5cdFx0XHRyZW5kZXIoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hpbGRyZW5cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdENvbnN1bWVyOiBjbGFzcyBDb25zdW1lciBleHRlbmRzIENvbXBvbmVudDxDb25zdW1lckF0dHJzPFQ+PiB7XHJcblx0XHRcdHJlbmRlcigpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5hdHRycy5jaGlsZHJlbihjb250ZXh0KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IG0gZnJvbSAnbWl0aHJpbCdcclxuaW1wb3J0IHtPcHRpb25zLCBjbGVhbnVwT3B0aW9uc30gZnJvbSAnLi4vLi4vdXRpbC9mb3JtdXRpbHMnXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICcuLy4uL2NvbXBvbmVudCdcclxuaW1wb3J0IHtDaGVja2JveH0gZnJvbSAnLi9jaGVja2JveCdcclxuaW1wb3J0ICcuL2JveGVzLmxlc3MnXHJcblxyXG5leHBvcnQgY2xhc3MgQm94ZXMgZXh0ZW5kcyBDb21wb25lbnQ8e1xyXG5cdG5hbWU6IHN0cmluZ1xyXG5cdHVuc3R5bGVkPzogYm9vbGVhblxyXG5cdGNsYXNzTmFtZT86IHN0cmluZ1xyXG5cdHZhbHVlOiBBcnJheTxzdHJpbmc+XHJcblx0bGFiZWw/OiBzdHJpbmdcclxuXHRtb2RpZmllcj86IGFueVxyXG5cdHJlcXVpcmVkPzogYm9vbGVhblxyXG5cdG9wdGlvbnM6IE9wdGlvbnNcclxuXHRvbmNoYW5nZT86ICh2OiBBcnJheTxzdHJpbmc+KSA9PiB2b2lkXHJcblx0b25mb2N1cz86IChlOiBFdmVudCkgPT4gdm9pZFxyXG59PiB7XHJcblx0Y2xhc3NOYW1lID0gdGhpcy5hdHRycy5jbGFzc05hbWUgfHxcclxuXHRcdCh0aGlzLmF0dHJzLnVuc3R5bGVkICYmICdib3hlcycpIHx8XHJcblx0XHQnYm94ZXMtZnJvbnQnXHJcblxyXG5cdHNldFZhbHVlKGtleSwgYWN0aXZlKSB7XHJcblx0XHRjb25zdCB7dmFsdWUgPSBbXSwgb25jaGFuZ2V9ID0gdGhpcy5hdHRyc1xyXG5cclxuXHRcdGlmIChhY3RpdmUpIHtcclxuXHRcdFx0aWYgKCF2YWx1ZS5maW5kKHYgPT4gdiA9PSBrZXkpKSBvbmNoYW5nZShbLi4udmFsdWUsIGtleV0pXHJcblx0XHRcdGVsc2Ugb25jaGFuZ2UodmFsdWUpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRvbmNoYW5nZSh2YWx1ZS5maWx0ZXIodiA9PiB2ICE9IGtleSkpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7dmFsdWUgPSBbXSwgb3B0aW9ucywgdW5zdHlsZWQsIHJlcXVpcmVkfSA9IHRoaXMuYXR0cnNcclxuXHRcdGNvbnN0IGNsZWFuT3B0aW9ucyA9IGNsZWFudXBPcHRpb25zKG9wdGlvbnMpXHJcblx0XHRjb25zdCBoYWxmID0gTWF0aC5jZWlsKGNsZWFuT3B0aW9ucy5sZW5ndGggLyAyKVxyXG5cclxuXHRcdHJldHVybiBtKGBkaXYuJHt0aGlzLmNsYXNzTmFtZX1gLCBbXHJcblx0XHRcdG0oYGRpdi4ke3RoaXMuY2xhc3NOYW1lfS1sZWZ0YCwgW1xyXG5cdFx0XHRcdGNsZWFuT3B0aW9ucy5zbGljZSgwLCBoYWxmKS5tYXAobyA9PlxyXG5cdFx0XHRcdFx0bShDaGVja2JveCwge1xyXG5cdFx0XHRcdFx0XHR1bnN0eWxlZCxcclxuXHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHJlcXVpcmVkICYmIHZhbHVlLmxlbmd0aCA9PSAwLFxyXG5cdFx0XHRcdFx0XHR2YWx1ZTogdmFsdWUuZmluZCh2ID0+IHYgPT0gby5rZXkpLFxyXG5cdFx0XHRcdFx0XHRvbmNoYW5nZTogZCA9PiB0aGlzLnNldFZhbHVlKG8ua2V5LCBkKSxcclxuXHRcdFx0XHRcdFx0bGFiZWw6IG8ubGFiZWxcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0KVxyXG5cdFx0XHRdKSxcclxuXHRcdFx0bShgLiR7dGhpcy5jbGFzc05hbWV9LXJpZ2h0YCwgW1xyXG5cdFx0XHRcdGNsZWFuT3B0aW9ucy5zbGljZShoYWxmKS5tYXAobyA9PlxyXG5cdFx0XHRcdFx0bShDaGVja2JveCwge1xyXG5cdFx0XHRcdFx0XHR1bnN0eWxlZCxcclxuXHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHJlcXVpcmVkICYmIHZhbHVlLmxlbmd0aCA9PSAwLFxyXG5cdFx0XHRcdFx0XHR2YWx1ZTogdmFsdWUuZmluZCh2ID0+IHYgPT0gby5rZXkpLFxyXG5cdFx0XHRcdFx0XHRvbmNoYW5nZTogZCA9PiB0aGlzLnNldFZhbHVlKG8ua2V5LCBkKSxcclxuXHRcdFx0XHRcdFx0bGFiZWw6IG8ubGFiZWxcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0KVxyXG5cdFx0XHRdKVxyXG5cdFx0XSlcclxuXHR9XHJcbn1cclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgbSBmcm9tICdtaXRocmlsJ1xyXG5pbXBvcnQge3JhbmRvbUtleX0gZnJvbSAnLi4vLi4vdXRpbC9mb3JtdXRpbHMnXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnQnXHJcblxyXG5pbXBvcnQgJy4vY2hlY2tib3gubGVzcydcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveCBleHRlbmRzIENvbXBvbmVudDx7XHJcblx0bmFtZT86IHN0cmluZ1xyXG5cdHVuc3R5bGVkPzogYm9vbGVhblxyXG5cdGNsYXNzTmFtZT86IHN0cmluZ1xyXG5cdHZhbHVlOiBzdHJpbmcgfCBib29sZWFuXHJcblx0bGFiZWw/OiBzdHJpbmdcclxuXHRyZXF1aXJlZD86IGJvb2xlYW5cclxuXHRvbmNoYW5nZT86ICh2OiBib29sZWFuKSA9PiB2b2lkXHJcbn0+IHtcclxuXHRjbGFzc05hbWUgPSB0aGlzLmF0dHJzLmNsYXNzTmFtZSB8fFxyXG5cdFx0KHRoaXMuYXR0cnMudW5zdHlsZWQgJiYgJ2NoZWNrYm94JykgfHxcclxuXHRcdCdjaGVja2JveC1mcm9udCdcclxuXHRpZCA9IHJhbmRvbUtleSgnY2hlY2tfJylcclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3Qge3ZhbHVlLCBvbmNoYW5nZSwgbGFiZWwsIG5hbWUgPSB0aGlzLmlkLCByZXF1aXJlZH0gPSB0aGlzLmF0dHJzXHJcblxyXG5cdFx0cmV0dXJuIG0oYGRpdi4ke3RoaXMuY2xhc3NOYW1lfWAsIFtcclxuXHRcdFx0bShgaW5wdXQuJHt0aGlzLmNsYXNzTmFtZX0taW5wdXRgLCB7XHJcblx0XHRcdFx0dHlwZTogJ2NoZWNrYm94JyxcclxuXHRcdFx0XHRuYW1lLFxyXG5cdFx0XHRcdGlkOiB0aGlzLmlkLFxyXG5cdFx0XHRcdGNoZWNrZWQ6IHZhbHVlID8gdHJ1ZSA6IGZhbHNlLFxyXG5cdFx0XHRcdG9uY2xpY2s6IG9uY2hhbmdlICYmICgoKSA9PiBvbmNoYW5nZSghdmFsdWUpKSxcclxuXHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHR9KSxcclxuXHRcdFx0bShgbGFiZWwuJHt0aGlzLmNsYXNzTmFtZX0tbGFiZWxgLFxyXG5cdFx0XHRcdHtmb3I6IHRoaXMuaWR9LFxyXG5cdFx0XHRcdG0oYHNwYW4uJHt0aGlzLmNsYXNzTmFtZX0tbGFiZWwtc3F1YXJlYCksXHJcblx0XHRcdFx0bShgc3Bhbi4ke3RoaXMuY2xhc3NOYW1lfS1sYWJlbC10ZXh0YCwgbGFiZWwpXHJcblx0XHRcdClcclxuXHRcdF0pXHJcblx0fVxyXG59XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IG0gZnJvbSAnbWl0aHJpbCdcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJy4uL2NvbXBvbmVudCdcclxuaW1wb3J0IHtnZXRFcnJvck1lc3NhZ2V9IGZyb20gJy4uLy4uL3V0aWwvZm9ybXV0aWxzJ1xyXG5cclxuaW1wb3J0ICcuL2ZpZWxkLmxlc3MnXHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGQgZXh0ZW5kcyBDb21wb25lbnQ8e1xyXG5cdHVuc3R5bGVkPzogYm9vbGVhblxyXG5cdGVycm9ycz86IHVuZGVmaW5lZCB8IHN0cmluZyB8IEFycmF5PHN0cmluZz5cclxuXHRsYWJlbD86IHN0cmluZ1xyXG5cdGlkPzogc3RyaW5nXHJcblx0cmVxdWlyZWQ/OiBib29sZWFuXHJcblx0d2lkdGg/OiBudW1iZXJcclxufT4ge1xyXG5cdGNsYXNzTmFtZSA9IHRoaXMuYXR0cnMudW5zdHlsZWQgPyAnZmllbGQnIDogJ2ZpZWxkLWZyb250J1xyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7ZXJyb3JzLCBpZCwgcmVxdWlyZWQsIHdpZHRoID0gMS4wfSA9IHRoaXMuYXR0cnNcclxuXHJcblx0XHRjb25zdCBzdHlsZSA9IHt3aWR0aDogYCR7d2lkdGggKiAxMDB9JWB9XHJcblx0XHRjb25zdCBoYXNFcnJvcnMgPSBlcnJvcnMgIT09IHVuZGVmaW5lZFxyXG5cdFx0Y29uc3QgY2xhc3NlcyA9IFtoYXNFcnJvcnMgJiYgJ2hhcy1lcnJvcicsIHJlcXVpcmVkICYmICdpcy1yZXF1aXJlZCddXHJcblxyXG5cdFx0cmV0dXJuIG0oYGRpdi4ke3RoaXMuY2xhc3NOYW1lfWAsIHtjbGFzczogY2xhc3NuYW1lcyhjbGFzc2VzKSwgc3R5bGUsIGlkfSwgW1xyXG5cdFx0XHR0aGlzLnZpZXdMYWJlbCgpLFxyXG5cdFx0XHR0aGlzLmNoaWxkcmVuLFxyXG5cdFx0XHR0aGlzLnZpZXdFcnJvcnMoKVxyXG5cdFx0XSlcclxuXHR9XHJcblxyXG5cdHZpZXdMYWJlbCgpIHtcclxuXHRcdGNvbnN0IHtsYWJlbH0gPSB0aGlzLmF0dHJzXHJcblx0XHRpZiAoIWxhYmVsKSByZXR1cm5cclxuXHJcblx0XHRyZXR1cm4gbShgZGl2LiR7dGhpcy5jbGFzc05hbWV9LWxhYmVsYCwgbGFiZWwpXHJcblx0fVxyXG5cclxuXHR2aWV3RXJyb3JzKCkge1xyXG5cdFx0Y29uc3Qge2Vycm9yc30gPSB0aGlzLmF0dHJzXHJcblx0XHRjb25zdCBoYXNFcnJvcnMgPSBlcnJvcnMgIT09IHVuZGVmaW5lZFxyXG5cclxuXHRcdGlmICghaGFzRXJyb3JzKSByZXR1cm5cclxuXHJcblx0XHRyZXR1cm4gbShgZGl2LiR7dGhpcy5jbGFzc05hbWV9LWVycm9ybXNnYCwgZ2V0RXJyb3JNZXNzYWdlKGVycm9ycykpXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBtIGZyb20gJ21pdGhyaWwnXHJcbmltcG9ydCB7Rm9ybVN0YXR1cywgRm9ybVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9mb3Jtc3RvcmUnXHJcbmltcG9ydCB7cmFuZG9tS2V5fSBmcm9tICcuLi8uLi91dGlsL2Zvcm11dGlscydcclxuaW1wb3J0IHtGaWVsZH0gZnJvbSAnLi9maWVsZCdcclxuaW1wb3J0IGp1bXAgZnJvbSAnanVtcC5qcydcclxuXHJcbmV4cG9ydCB7SW5wdXR9IGZyb20gJy4vaW5wdXQnXHJcbmV4cG9ydCB7U2VsZWN0fSBmcm9tICcuL3NlbGVjdCdcclxuZXhwb3J0IHtUZXh0YXJlYX0gZnJvbSAnLi90ZXh0YXJlYSdcclxuZXhwb3J0IHtSYWRpb30gZnJvbSAnLi9yYWRpbydcclxuZXhwb3J0IHtSYWRpb3N9IGZyb20gJy4vcmFkaW9zJ1xyXG5leHBvcnQge0NoZWNrYm94fSBmcm9tICcuL2NoZWNrYm94J1xyXG5leHBvcnQge0JveGVzfSBmcm9tICcuL2JveGVzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpZWxkcyB7XHJcblx0c3RvcmU6IEZvcm1TdG9yZVxyXG5cdGtleSA9IHJhbmRvbUtleSgpXHJcblx0Y29uZmlnID0ge1xyXG5cdFx0ZmllbGRDbGFzczogRmllbGQsXHJcblx0XHRkZWZhdWx0VW5zdHlsZWQ6IGZhbHNlLFxyXG5cdFx0ZGVmYXVsdFJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0bGFiZWxJbkZpZWxkczogZmFsc2VcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKHN0b3JlLCBjb25maWcpIHtcclxuXHRcdHRoaXMuc3RvcmUgPSBzdG9yZVxyXG5cdFx0dGhpcy5jb25maWcgPSB7Li4udGhpcy5jb25maWcsIC4uLmNvbmZpZ31cclxuXHR9XHJcblxyXG5cdGdldCBzdGF0dXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5zdGF0dXNcclxuXHR9XHJcblxyXG5cdGFzRmllbGQodmlld0NsYXNzLCBjb25maWcsIGNoaWxkcmVuPykge1xyXG5cdFx0cmV0dXJuIG0odGhpcy5jb25maWcuZmllbGRDbGFzcyxcclxuXHRcdFx0dGhpcy5maWVsZEF0dHJzKGNvbmZpZyksXHJcblx0XHRcdG0odmlld0NsYXNzLCB0aGlzLnZpZXdBdHRycyhjb25maWcpLCBjaGlsZHJlbilcclxuXHRcdClcclxuXHR9XHJcblxyXG5cdGRlZmF1bHRGaWVsZEF0dHJzKGtleSwgcmVzdCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cmVxdWlyZWQ6IHRoaXMuY29uZmlnLmRlZmF1bHRSZXF1aXJlZCxcclxuXHRcdFx0dW5zdHlsZWQ6IHRoaXMuY29uZmlnLmRlZmF1bHRVbnN0eWxlZCxcclxuXHRcdFx0bmFtZToga2V5LFxyXG5cdFx0XHQuLi5yZXN0LFxyXG5cdFx0XHRpZDogJ2ZpZWxkXycgKyBrZXkgKyAnXycgKyB0aGlzLmtleSxcclxuXHRcdFx0dmFsdWU6IHRoaXMuc3RvcmUuZGF0YVtrZXldLFxyXG5cdFx0XHRvbmNoYW5nZTogdmFsdWUgPT4gdGhpcy5zdG9yZS5zZXREYXRhKGtleSwgdmFsdWUpLFxyXG5cdFx0XHRsYWJlbDogdGhpcy5jb25maWcubGFiZWxJbkZpZWxkcyA/IHVuZGVmaW5lZCA6IHJlc3QubGFiZWxcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG4gICAqIENhbiBiZSB1c2VkIHRvIGluaXRpYWxpemUgY3VzdG9tIGZvcm1maWVsZHMgLSBhbHNvIHVzZWQgaW50ZXJuYWxseVxyXG4gICAqL1xyXG5cdGZpZWxkQXR0cnMoe2tleSwgLi4ucmVzdH0pIHtcclxuXHRcdGNvbnN0IGF0dHJzID0gdGhpcy5kZWZhdWx0RmllbGRBdHRycyhyZXN0Lm5hbWUgfHwga2V5LCByZXN0KVxyXG5cdFx0Y29uc3Qgc3RhdHVzID0gdGhpcy5zdGF0dXNcclxuXHRcdHN3aXRjaCAoc3RhdHVzLnR5cGUpIHtcclxuXHRcdFx0Y2FzZSAnZXJyb3InOlxyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHQuLi5hdHRycyxcclxuXHRcdFx0XHRcdGVycm9yczogc3RhdHVzLmVycm9yc1trZXldLFxyXG5cdFx0XHRcdFx0b25mb2N1czogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoc3RhdHVzLnR5cGUgPT0gJ2Vycm9yJykgZGVsZXRlIHN0YXR1cy5lcnJvcnNba2V5XVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gYXR0cnNcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZGVuIGFuZCB1c2VkIHRvIGZpbHRlciBjZXJ0YWluIGF0dHJpYnV0ZXMgZnJvbSBwYXNzaW5nIG9uIHRvIHRoZSBjaGlsZCBlbGVtZW50IGluc2lkZS5cclxuICAgKiBFeGFtcGxlOiBVc2UgdGhpcyB0byBmaWx0ZXIgb3V0IHRoZSBsYWJlbCBhdHRyaWJ1dGUuIEl0IGNhbiBub3cgYmUgZHJhd24gaW4gdGhlIGZpZWxkIHZpZXcgaXRzZWxmLlxyXG4gICAqL1xyXG5cdHZpZXdBdHRycyhhdHRycykge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Li4udGhpcy5maWVsZEF0dHJzKGF0dHJzKSxcclxuXHRcdFx0aWQ6IHVuZGVmaW5lZCxcclxuXHRcdFx0bGFiZWw6IHRoaXMuY29uZmlnLmxhYmVsSW5GaWVsZHMgPyBhdHRycy5sYWJlbCA6IHVuZGVmaW5lZFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Zm9jdXNGaWVsZChmaWVsZCkge1xyXG5cdFx0anVtcChgI2ZpZWxkXyR7ZmllbGR9XyR7dGhpcy5rZXl9YClcclxuXHR9XHJcbn1cclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgbSBmcm9tICdtaXRocmlsJ1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnLi4vY29tcG9uZW50J1xyXG5pbXBvcnQge2dldEVycm9yTWVzc2FnZX0gZnJvbSAnLi4vLi4vdXRpbC9mb3JtdXRpbHMnXHJcblxyXG5pbXBvcnQgJy4vaW5wdXQubGVzcydcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dCBleHRlbmRzIENvbXBvbmVudDx7XHJcblx0bmFtZTogc3RyaW5nXHJcblx0dHlwZT86IHN0cmluZ1xyXG5cdHVuc3R5bGVkPzogYm9vbGVhblxyXG5cdGNsYXNzTmFtZT86IHN0cmluZ1xyXG5cdHZhbHVlOiBzdHJpbmdcclxuXHRsYWJlbD86IHN0cmluZ1xyXG5cdG1vZGlmaWVyPzogYW55XHJcblx0cmVxdWlyZWQ/OiBib29sZWFuXHJcblx0b3B0aW9uczogQXJyYXk8e2tleTogc3RyaW5nOyBsYWJlbDogc3RyaW5nfT4gfCB7W2tleTogc3RyaW5nXTogc3RyaW5nfVxyXG5cdG9uY2hhbmdlPzogKHY6IHN0cmluZykgPT4gdm9pZFxyXG5cdG9uZm9jdXM/OiAoZTogRXZlbnQpID0+IHZvaWRcclxuXHRwbGFjZWhvbGRlcj86IHN0cmluZ1xyXG59PiB7XHJcbiAgY2xhc3NOYW1lID0gdGhpcy5hdHRycy5jbGFzc05hbWUgfHxcclxuICAgICh0aGlzLmF0dHJzLnVuc3R5bGVkICYmICdpbnB1dCcpIHx8XHJcbiAgICAnaW5wdXQtZnJvbnQnXHJcbiAgaW5wdXREb20gPSBudWxsXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdmFsdWUsXHJcbiAgICAgIG9uY2hhbmdlLFxyXG4gICAgICBsYWJlbCxcclxuICAgICAgbmFtZSxcclxuICAgICAgbW9kaWZpZXIsXHJcbiAgICAgIG9uZm9jdXMsXHJcbiAgICAgIHR5cGUgPSAndGV4dCcsXHJcbiAgICAgIHJlcXVpcmVkLFxyXG4gICAgICBwbGFjZWhvbGRlclxyXG4gICAgfSA9IHRoaXMuYXR0cnNcclxuXHJcbiAgICByZXR1cm4gbShgLiR7dGhpcy5jbGFzc05hbWV9YCxcclxuICAgICAge2NsYXNzOiBjbGFzc25hbWVzKFttb2RpZmllciwgdmFsdWUgJiYgJ2hhcy12YWx1ZSddKX0sXHJcbiAgICAgIFtcclxuICAgICAgICBtKGBpbnB1dC4ke3RoaXMuY2xhc3NOYW1lfS1pbnB1dGAsIHtcclxuICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICByZXF1aXJlZCxcclxuICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICB2YWx1ZSxcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyLFxyXG5cdFx0XHRcdFx0b25mb2N1cyxcclxuICAgICAgICAgIG9uY3JlYXRlOiB2bm9kZSA9PiAodGhpcy5pbnB1dERvbSA9IHZub2RlLmRvbSksXHJcbiAgICAgICAgICBvbmlucHV0OiBvbmNoYW5nZSAmJiAoZSA9PiBvbmNoYW5nZShlLnRhcmdldC52YWx1ZSkpLFxyXG4gICAgICAgICAgb25jaGFuZ2U6IG9uY2hhbmdlICYmIChlID0+IG9uY2hhbmdlKGUudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICB9KSxcclxuICAgICAgICBsYWJlbCAmJiBtKGBsYWJlbC4ke3RoaXMuY2xhc3NOYW1lfS1sYWJlbGAsIGxhYmVsKVxyXG4gICAgICBdXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IG0gZnJvbSAnbWl0aHJpbCdcclxuaW1wb3J0IHtyYW5kb21LZXl9IGZyb20gJy4uLy4uL3V0aWwvZm9ybXV0aWxzJ1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnLi4vY29tcG9uZW50J1xyXG5cclxuaW1wb3J0ICcuL3JhZGlvLmxlc3MnXHJcblxyXG5leHBvcnQgY2xhc3MgUmFkaW8gZXh0ZW5kcyBDb21wb25lbnQ8e1xyXG5cdG5hbWU6IHN0cmluZ1xyXG5cdHZhbHVlOiBib29sZWFuXHJcblx0b25jaGFuZ2U/OiAoY2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZFxyXG5cdG9wdGlvbjogc3RyaW5nIC8vIFJlYWxseSBsYWJlbD9cclxuXHRyZXF1aXJlZD86IGJvb2xlYW5cclxuXHR1bnN0eWxlZD86IGJvb2xlYW5cclxuXHRjbGFzc05hbWU/OiBzdHJpbmdcclxufT4ge1xyXG5cdGNsYXNzTmFtZSA9IHRoaXMuYXR0cnMuY2xhc3NOYW1lIHx8XHJcblx0XHQodGhpcy5hdHRycy51bnN0eWxlZCAmJiAncmFkaW8nKSB8fFxyXG5cdFx0J3JhZGlvLWZyb250J1xyXG5cdGlkID0gcmFuZG9tS2V5KCdyYWRpb18nKVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7XHJcblx0XHRcdHZhbHVlID0gZmFsc2UsXHJcblx0XHRcdG9uY2hhbmdlLFxyXG5cdFx0XHRvcHRpb24sXHJcblx0XHRcdG5hbWUgPSB0aGlzLmlkLFxyXG5cdFx0XHRyZXF1aXJlZFxyXG5cdFx0fSA9IHRoaXMuYXR0cnNcclxuXHJcblx0XHRyZXR1cm4gbShgZGl2LiR7dGhpcy5jbGFzc05hbWV9YCwgW1xyXG5cdFx0XHRtKGBpbnB1dC4ke3RoaXMuY2xhc3NOYW1lfS1pbnB1dGAsIHtcclxuXHRcdFx0XHR0eXBlOiAncmFkaW8nLFxyXG5cdFx0XHRcdGNoZWNrZWQ6IHZhbHVlID8gdHJ1ZSA6IGZhbHNlLFxyXG5cdFx0XHRcdHJlcXVpcmVkLFxyXG5cdFx0XHRcdG5hbWU6IG5hbWUsXHJcblx0XHRcdFx0b25jbGljazogb25jaGFuZ2UgJiYgKF8gPT4gb25jaGFuZ2UoIXZhbHVlKSksXHJcblx0XHRcdFx0aWQ6IHRoaXMuaWRcclxuXHRcdFx0fSksXHJcblx0XHRcdG0oYGxhYmVsLiR7dGhpcy5jbGFzc05hbWV9LWxhYmVsYCwge2ZvcjogdGhpcy5pZH0sIFtcclxuXHRcdFx0XHRtKGBzcGFuLiR7dGhpcy5jbGFzc05hbWV9LWxhYmVsLWJ1bGxldGApLFxyXG5cdFx0XHRcdG0oYHNwYW4uJHt0aGlzLmNsYXNzTmFtZX0tbGFiZWwtdGV4dGAsIG9wdGlvbilcclxuXHRcdFx0XSlcclxuXHRcdF0pXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBtIGZyb20gJ21pdGhyaWwnXHJcbmltcG9ydCB7Y2xlYW51cE9wdGlvbnMsIHJhbmRvbUtleX0gZnJvbSAnLi4vLi4vdXRpbC9mb3JtdXRpbHMnXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnQnXHJcbmltcG9ydCB7UmFkaW99IGZyb20gJy4vcmFkaW8nXHJcblxyXG5leHBvcnQgY2xhc3MgUmFkaW9zIGV4dGVuZHMgQ29tcG9uZW50PHtcclxuXHRuYW1lOiBzdHJpbmdcclxuXHR1bnN0eWxlZD86IGJvb2xlYW5cclxuXHRjbGFzc05hbWU/OiBzdHJpbmdcclxuXHR2YWx1ZTogc3RyaW5nXHJcblx0bGFiZWw/OiBzdHJpbmdcclxuXHRtb2RpZmllcj86IGFueVxyXG5cdHJlcXVpcmVkPzogYm9vbGVhblxyXG5cdG9wdGlvbnM6IEFycmF5PHtrZXk6IHN0cmluZzsgbGFiZWw6IHN0cmluZ30+IHwge1trZXk6IHN0cmluZ106IHN0cmluZ31cclxuXHRvbmNoYW5nZT86ICh2OiBzdHJpbmcpID0+IHZvaWRcclxuXHRvbmZvY3VzPzogKGU6IEV2ZW50KSA9PiB2b2lkXHJcbn0+IHtcclxuXHRjbGFzc05hbWUgPVxyXG5cdFx0dGhpcy5hdHRycy5jbGFzc05hbWUgfHwgKHRoaXMuYXR0cnMudW5zdHlsZWQgJiYgJ3JhZGlvcycpIHx8ICdyYWRpb3MtZnJvbnQnXHJcblx0ZGVmYXVsdEtleSA9IHJhbmRvbUtleSgncmFkaW9zXycpXHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0dmFsdWUsXHJcblx0XHRcdG9uY2hhbmdlLFxyXG5cdFx0XHRvcHRpb25zLFxyXG5cdFx0XHR1bnN0eWxlZCxcclxuXHRcdFx0bmFtZSA9IHRoaXMuZGVmYXVsdEtleSxcclxuXHRcdFx0cmVxdWlyZWRcclxuXHRcdH0gPSB0aGlzLmF0dHJzXHJcblxyXG5cdFx0Y29uc3QgY2xlYW5PcHRpb25zID0gY2xlYW51cE9wdGlvbnMob3B0aW9ucylcclxuXHJcblx0XHRyZXR1cm4gbShgZGl2LiR7dGhpcy5jbGFzc05hbWV9YCxcclxuXHRcdFx0Y2xlYW5PcHRpb25zLm1hcChvcHRpb24gPT5cclxuXHRcdFx0XHRtKFJhZGlvLCB7XHJcblx0XHRcdFx0XHRvcHRpb246IG9wdGlvbi5sYWJlbCxcclxuXHRcdFx0XHRcdG5hbWU6IG5hbWUsXHJcblx0XHRcdFx0XHR1bnN0eWxlZCxcclxuXHRcdFx0XHRcdHJlcXVpcmVkLFxyXG5cdFx0XHRcdFx0dmFsdWU6IHZhbHVlID09IG9wdGlvbi5rZXksXHJcblx0XHRcdFx0XHRvbmNoYW5nZTogb25jaGFuZ2UgJiYgKF8gPT4gb25jaGFuZ2Uob3B0aW9uLmtleSkpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCBtIGZyb20gJ21pdGhyaWwnXHJcbmltcG9ydCB7Y2xlYW51cE9wdGlvbnN9IGZyb20gJy4uLy4uL3V0aWwvZm9ybXV0aWxzJ1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnLi4vY29tcG9uZW50J1xyXG5cclxuaW1wb3J0ICcuL3NlbGVjdC5sZXNzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdCBleHRlbmRzIENvbXBvbmVudDx7XHJcblx0bmFtZTogc3RyaW5nXHJcblx0dW5zdHlsZWQ/OiBib29sZWFuXHJcblx0Y2xhc3NOYW1lPzogc3RyaW5nXHJcblx0dmFsdWU6IHN0cmluZ1xyXG5cdGxhYmVsPzogc3RyaW5nXHJcblx0bW9kaWZpZXI/OiBhbnlcclxuXHRyZXF1aXJlZD86IGJvb2xlYW5cclxuXHRvcHRpb25zOiBBcnJheTx7a2V5OiBzdHJpbmc7IGxhYmVsOiBzdHJpbmd9PiB8IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9XHJcblx0b25jaGFuZ2U/OiAodjogc3RyaW5nKSA9PiB2b2lkXHJcblx0b25mb2N1cz86IChlOiBFdmVudCkgPT4gdm9pZFxyXG59PiB7XHJcblx0Y2xhc3NOYW1lID1cclxuXHRcdHRoaXMuYXR0cnMuY2xhc3NOYW1lIHx8ICh0aGlzLmF0dHJzLnVuc3R5bGVkICYmICdzZWxlY3QnKSB8fCAnc2VsZWN0LWZyb250J1xyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7XHJcblx0XHRcdHZhbHVlLFxyXG5cdFx0XHRvbmNoYW5nZSxcclxuXHRcdFx0bGFiZWwsXHJcblx0XHRcdG5hbWUsXHJcblx0XHRcdG9wdGlvbnMsXHJcblx0XHRcdG1vZGlmaWVyLFxyXG5cdFx0XHRvbmZvY3VzLFxyXG5cdFx0XHRyZXF1aXJlZCA9IHRydWVcclxuXHRcdH0gPSB0aGlzLmF0dHJzXHJcblxyXG5cdFx0Y29uc3QgY2xlYW5PcHRpb25zID0gY2xlYW51cE9wdGlvbnMob3B0aW9ucylcclxuXHRcdGNvbnN0IGZ1bGxMYWJlbCA9IHJlcXVpcmVkID8gbGFiZWwgKyAnIConIDogbGFiZWxcclxuXHJcblx0XHRyZXR1cm4gbShgc2VsZWN0LiR7dGhpcy5jbGFzc05hbWV9YCxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNsYXNzOiBjbGFzc25hbWVzKFttb2RpZmllciwgdmFsdWUgJiYgJ2hhcy12YWx1ZSddKSxcclxuXHRcdFx0XHRuYW1lLFxyXG5cdFx0XHRcdHJlcXVpcmVkLFxyXG5cdFx0XHRcdG9uZm9jdXMsXHJcblx0XHRcdFx0b25jaGFuZ2U6IG9uY2hhbmdlICYmIChlID0+IG9uY2hhbmdlKGUudGFyZ2V0LnZhbHVlKSksXHJcblx0XHRcdFx0b25pbnB1dDogb25jaGFuZ2UgJiYgKGUgPT4gb25jaGFuZ2UoZS50YXJnZXQudmFsdWUpKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRbXHJcblx0XHRcdFx0bGFiZWwgJiYgbSgnb3B0aW9uW2Rpc2FibGVkXScsIHtzZWxlY3RlZDogIXZhbHVlfSwgZnVsbExhYmVsKSxcclxuXHRcdFx0XHRjbGVhbk9wdGlvbnMubWFwKG8gPT5cclxuXHRcdFx0XHRcdG0oJ29wdGlvbicsIHt2YWx1ZTogby5rZXksIHNlbGVjdGVkOiBvLmtleSA9PSB2YWx1ZX0sIG8ubGFiZWwpXHJcblx0XHRcdFx0KVxyXG5cdFx0XHRdXHJcblx0XHQpXHJcblx0fVxyXG59XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IG0gZnJvbSAnbWl0aHJpbCdcclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJy4uL2NvbXBvbmVudCdcclxuXHJcbmltcG9ydCAnLi90ZXh0YXJlYS5sZXNzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgQ29tcG9uZW50PHtcclxuXHRuYW1lOiBzdHJpbmdcclxuXHR1bnN0eWxlZD86IGJvb2xlYW5cclxuXHRjbGFzc05hbWU/OiBzdHJpbmdcclxuXHR2YWx1ZTogc3RyaW5nXHJcblx0bGFiZWw/OiBzdHJpbmdcclxuXHRtb2RpZmllcj86IGFueVxyXG5cdHJlcXVpcmVkPzogYm9vbGVhblxyXG5cdG9uY2hhbmdlPzogKHY6IHN0cmluZykgPT4gdm9pZFxyXG5cdG9uZm9jdXM/OiAoZTogRXZlbnQpID0+IHZvaWRcclxufT4ge1xyXG5cdGNsYXNzTmFtZSA9IHRoaXMuYXR0cnMuY2xhc3NOYW1lIHx8XHJcblx0XHQodGhpcy5hdHRycy51bnN0eWxlZCAmJiAndGV4dGFyZWEnKSB8fFxyXG5cdFx0J3RleHRhcmVhLWZyb250J1xyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7XHJcblx0XHRcdHZhbHVlLFxyXG5cdFx0XHRvbmNoYW5nZSxcclxuXHRcdFx0bGFiZWwsXHJcblx0XHRcdG1vZGlmaWVyLFxyXG5cdFx0XHRuYW1lLFxyXG5cdFx0XHRyZXF1aXJlZCxcclxuXHRcdFx0b25mb2N1c1xyXG5cdFx0fSA9IHRoaXMuYXR0cnNcclxuXHJcblx0XHRyZXR1cm4gbShgZGl2LiR7dGhpcy5jbGFzc05hbWV9YCxcclxuXHRcdFx0e2NsYXNzOiBjbGFzc25hbWVzKFttb2RpZmllciwgdmFsdWUgJiYgJ2hhcy12YWx1ZSddKX0sXHJcblx0XHRcdFtcclxuXHRcdFx0XHRtKGB0ZXh0YXJlYS4ke3RoaXMuY2xhc3NOYW1lfS10ZXh0YXJlYWAsIHtcclxuXHRcdFx0XHRcdHJlcXVpcmVkLFxyXG5cdFx0XHRcdFx0bmFtZSxcclxuXHRcdFx0XHRcdG9uZm9jdXMsXHJcblx0XHRcdFx0XHR2YWx1ZSxcclxuXHRcdFx0XHRcdG9uaW5wdXQ6IG9uY2hhbmdlICYmIChlID0+IG9uY2hhbmdlKGUudGFyZ2V0LnZhbHVlKSksXHJcblx0XHRcdFx0XHRvbmNoYW5nZTogb25jaGFuZ2UgJiYgKGUgPT4gb25jaGFuZ2UoZS50YXJnZXQudmFsdWUpKVxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdGxhYmVsICYmIG0oYGxhYmVsLiR7dGhpcy5jbGFzc05hbWV9LWxhYmVsYCwgbGFiZWwpXHJcblx0XHRcdF1cclxuXHRcdClcclxuXHR9XHJcbn1cclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgbSBmcm9tICdtaXRocmlsJ1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnQnXHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXHJcblxyXG5pbXBvcnQgJy4vaWNvbi5sZXNzJ1xyXG5leHBvcnQgY2xhc3MgSWNvbiBleHRlbmRzIENvbXBvbmVudDx7XHJcblx0aWNvbjogc3RyaW5nXHJcblx0Y2xhc3M/OiBhbnlcclxufT4ge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHtpY29uLCBjbGFzczogY2xhc3NOYW1lfSA9IHRoaXMuYXR0cnNcclxuXHRcdHJldHVybiBtKCdpLmljb24nLCB7Y2xhc3M6IGNsYXNzbmFtZXMoYGljb24tJHtpY29ufWAsIGNsYXNzTmFtZSl9KVxyXG5cdH1cclxufVxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCBtIGZyb20gJ21pdGhyaWwnXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudCdcclxuXHJcbmltcG9ydCAnLi9pbWFnZS5sZXNzJ1xyXG5leHBvcnQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIG0oJ2ltZy5pbWFnZScsIHRoaXMuYXR0cnMpXHJcblx0fVxyXG59XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IG0gZnJvbSAnbWl0aHJpbCdcclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50J1xyXG5cclxuaW1wb3J0ICcuL21hc29ucnkubGVzcydcclxuZXhwb3J0IGNsYXNzIE1hc29ucnkgZXh0ZW5kcyBDb21wb25lbnQ8e1xyXG5cdGNvbHM6IG51bWJlclxyXG5cdGFkZENsYXNzOiAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IHN0cmluZ1xyXG59PiB7XHJcblx0ZGl2aWRlKGl0ZW1zLCBjb2xzQ291bnQpIHtcclxuXHRcdGNvbnN0IGNvbHMgPSBBcnJheShjb2xzQ291bnQpXHJcblx0XHRcdC5maWxsKG51bGwpXHJcblx0XHRcdC5tYXAoXyA9PiBbXSlcclxuXHRcdGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuXHRcdFx0Y29uc3QgY29sID0gaSAlIGNvbHNDb3VudFxyXG5cdFx0XHRjb2xzW2NvbF0ucHVzaChpdGVtKVxyXG5cdFx0fSlcclxuXHRcdHJldHVybiBjb2xzXHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7Y29sczogY29sc0NvdW50LCBhZGRDbGFzc30gPSB0aGlzLmF0dHJzXHJcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMuY2hpbGRyZW5cclxuXHRcdGlmICghKGl0ZW1zIGluc3RhbmNlb2YgQXJyYXkpKSB0aHJvdyAnQXJyYXkgZXhwZWN0ZWQnXHJcblx0XHRjb25zdCBjb2xzID0gdGhpcy5kaXZpZGUoaXRlbXMsIGNvbHNDb3VudClcclxuXHRcdHJldHVybiBtKCcubWFzb25yeScsXHJcblx0XHRcdGNvbHMubWFwKChjaGlsZHJlbiwgaSkgPT5cclxuXHRcdFx0XHRtKCcubWFzb25yeS1jb2wnLFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRzdHlsZToge1xyXG5cdFx0XHRcdFx0XHRcdCdmbGV4LWJhc2lzJzogMTAwIC8gY29scy5sZW5ndGggKyAnJSdcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNoaWxkcmVuLm1hcCgoaXRlbSwgaikgPT5cclxuXHRcdFx0XHRcdFx0bSgnLm1hc29ucnktaXRlbScsXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M6IGFkZENsYXNzID8gYWRkQ2xhc3MoaSwgaikgOiAnJ1xyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0aXRlbVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdFx0KVxyXG5cdFx0XHQpXHJcblx0XHQpXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBtIGZyb20gJ21pdGhyaWwnXHJcbmltcG9ydCB7Vm5vZGV9IGZyb20gJ21pdGhyaWwnXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudCdcclxuaW1wb3J0IG1hdGNoTWVkaWEgZnJvbSAnbWF0Y2htZWRpYXF1ZXJ5J1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lZGlhUXVlcnkgZXh0ZW5kcyBDb21wb25lbnQ8e1xyXG5cdG1pbldpZHRoPzogbnVtYmVyXHJcblx0bWF4V2lkdGg/OiBudW1iZXJcclxuXHR2aWV3OiAoKSA9PiBWbm9kZVxyXG59PiB7XHJcblx0bWF0Y2hlciA9IHRoaXMuY3JlYXRlTWF0Y2hlcigpXHJcblxyXG5cdGNyZWF0ZU1hdGNoZXIoKSB7XHJcblx0XHRjb25zdCB7bWluV2lkdGgsIG1heFdpZHRofSA9IHRoaXMuYXR0cnNcclxuXHRcdGNvbnN0IHJ1bGVzID0gW11cclxuXHRcdGlmIChtaW5XaWR0aCkgcnVsZXMucHVzaChgKG1pbi13aWR0aDogJHttaW5XaWR0aH1weClgKVxyXG5cdFx0aWYgKG1heFdpZHRoKSBydWxlcy5wdXNoKGAobWF4LXdpZHRoOiAke21heFdpZHRofXB4KWApXHJcblx0XHRjb25zdCBxdWVyeSA9IHJ1bGVzLmpvaW4oJyBhbmQgJylcclxuXHRcdGNvbnN0IG1hdGNoZXIgPSBtYXRjaE1lZGlhKHF1ZXJ5KVxyXG5cdFx0bWF0Y2hlci5hZGRMaXN0ZW5lcihtLnJlZHJhdylcclxuXHRcdHJldHVybiBtYXRjaGVyXHJcblx0fVxyXG5cclxuXHRvblJlbW92ZSgpIHtcclxuXHRcdHRoaXMubWF0Y2hlci5yZW1vdmVMaXN0ZW5lcihtLnJlZHJhdylcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHt2aWV3fSA9IHRoaXMuYXR0cnNcclxuXHRcdHJldHVybiB0aGlzLm1hdGNoZXIubWF0Y2hlcyAmJiB2aWV3KClcclxuXHR9XHJcbn1cclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgbSBmcm9tICdtaXRocmlsJ1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnQnXHJcbmltcG9ydCB7c3ViQ29tcG9uZW50fSBmcm9tICcuLi91dGlsL3N1YmNvbXBvbmVudCdcclxuaW1wb3J0IGxvY2tTY3JvbGwgZnJvbSAnLi4vdXRpbC9sb2Nrc2Nyb2xsJ1xyXG5pbXBvcnQge2NsYXNzZXN9IGZyb20gJy4uL3V0aWwvY2xhc3NlcydcclxuXHJcbmV4cG9ydCBjb25zdCBNb2RhbE92ZXJsYXkgPSBzdWJDb21wb25lbnQoJy5tb2RhbC1vdmVybGF5JylcclxuXHJcbmltcG9ydCAnLi9tb2RhbC5sZXNzJ1xyXG5leHBvcnQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQ8e1xyXG5cdGlzT3BlbjogYm9vbGVhblxyXG5cdGNsb3NlOiAoKSA9PiB2b2lkXHJcblx0ekluZGV4PzogbnVtYmVyXHJcblx0bW9kPzogYW55XHJcbn0+IHtcclxuXHRvcGVuZWQgPSBmYWxzZVxyXG5cdG9uY3JlYXRlID0gdGhpcy5sb2NrXHJcblx0b251cGRhdGUgPSB0aGlzLmxvY2tcclxuXHJcblx0bG9jaygpIHtcclxuXHRcdGNvbnN0IHtpc09wZW4sIGNsb3NlfSA9IHRoaXMuYXR0cnNcclxuXHRcdGlmICh0aGlzLm9wZW5lZCA9PT0gaXNPcGVuKSByZXR1cm5cclxuXHRcdGlmIChpc09wZW4pIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5jbG9zZUJ5S2V5KVxyXG5cdFx0ZWxzZSB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuY2xvc2VCeUtleSlcclxuXHRcdHRoaXMub3BlbmVkID0gaXNPcGVuXHJcblx0fVxyXG5cclxuXHRvblJlbW92ZSgpIHtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5jbG9zZUJ5S2V5KVxyXG5cdH1cclxuXHJcblx0Y2xvc2VCeUtleSA9IGUgPT4ge1xyXG5cdFx0Y29uc3Qge2Nsb3NlfSA9IHRoaXMuYXR0cnNcclxuXHRcdGlmIChlLmtleUNvZGUgIT09IDI3KSByZXR1cm5cclxuXHRcdGNsb3NlKClcclxuXHRcdG0ucmVkcmF3KClcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHtpc09wZW4sIGNsb3NlLCB6SW5kZXggPSAxMDAwLCBtb2R9ID0gdGhpcy5hdHRyc1xyXG5cdFx0aWYgKCFpc09wZW4pIHJldHVybiBudWxsXHJcblx0XHRyZXR1cm4gbSgnLm1vZGFsJyxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG9uY3JlYXRlOiAoe2RvbX0pID0+XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0bG9ja1Njcm9sbCh0cnVlKVxyXG5cdFx0XHRcdFx0XHRkb20uY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpXHJcblx0XHRcdFx0XHR9LCAyNSksXHJcblx0XHRcdFx0b25iZWZvcmVyZW1vdmU6ICh7ZG9tfSkgPT5cclxuXHRcdFx0XHRcdG5ldyBQcm9taXNlKGRvbmUgPT4ge1xyXG5cdFx0XHRcdFx0XHQ7KGRvbSBhcyBhbnkpLmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdFx0XHRcdFx0J3RyYW5zaXRpb25lbmQnLFxyXG5cdFx0XHRcdFx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGxvY2tTY3JvbGwoZmFsc2UpXHJcblx0XHRcdFx0XHRcdFx0XHRkb25lKClcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdHtvbmNlOiB0cnVlfVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdGRvbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJylcclxuXHRcdFx0XHRcdH0pLFxyXG5cdFx0XHRcdC4uLmNsYXNzZXMoe21vZH0pLFxyXG5cdFx0XHRcdHN0eWxlOiB7ekluZGV4fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRtKCcubW9kYWwtY29udGFpbmVyJyxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRvbmNsaWNrOiAoe3RhcmdldH0pID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHRhcmdldCAmJiB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1jb250YWluZXInKSkgY2xvc2UoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bSgnLm1vZGFsLWNvbnRhaW5lci1jb250ZW50JywgdGhpcy5jaGlsZHJlbilcclxuXHRcdFx0KVxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgbSBmcm9tICdtaXRocmlsJ1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnQnXHJcblxyXG5leHBvcnQgY2xhc3MgUGFnZSBleHRlbmRzIENvbXBvbmVudDx7XHJcblx0cm91dGU6IHtcclxuXHRcdGhyZWY6IHN0cmluZ1xyXG5cdFx0cGF0aDogc3RyaW5nXHJcblx0XHRwYXJhbXM6IHt9XHJcblx0fVxyXG59PiB7XHJcblx0Y3VycmVudFJvdXRlID0gbnVsbFxyXG5cclxuXHRjb25zdHJ1Y3Rvcih2bm9kZSkge1xyXG5cdFx0c3VwZXIodm5vZGUpXHJcblx0XHR0aGlzLmN1cnJlbnRSb3V0ZSA9IHRoaXMuYXR0cnMucm91dGVcclxuXHR9XHJcblxyXG5cdG9uSW5pdCgpIHtcclxuXHRcdHRoaXMub25yb3V0ZWNoYW5nZSgpXHJcblx0fVxyXG5cclxuXHRvblVwZGF0ZSgpIHtcclxuXHRcdGNvbnN0IGxhc3QgPSB0aGlzLmN1cnJlbnRSb3V0ZS5ocmVmXHJcblx0XHR0aGlzLmN1cnJlbnRSb3V0ZSA9IHRoaXMuYXR0cnMucm91dGVcclxuXHRcdGlmIChsYXN0ICE9PSB0aGlzLmN1cnJlbnRSb3V0ZS5ocmVmKSB0aGlzLm9ucm91dGVjaGFuZ2UoKVxyXG5cdH1cclxuXHJcblx0b25yb3V0ZWNoYW5nZSgpIHt9XHJcblxyXG5cdHN0YXRpYyByZW5kZXIoYXR0cnMpIHtcclxuXHRcdHJldHVybiBtKHRoaXMsIGF0dHJzKVxyXG5cdH1cclxufVxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCBtIGZyb20gJ21pdGhyaWwnXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudCdcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcclxuXHJcbmNvbnN0IFdJRFRIUyA9IFsxMDAsIDIwMCwgNDAwLCA2MDAsIDgwMF1cclxuY29uc3QgSEVJR0hUUyA9IFsxMDAsIDIwMCwgNDAwLCA2MDAsIDgwMF1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsYXJnZUltYWdlKGltZykge1xyXG5cdHJldHVybiBnZXRSZXNpemVkVXJsKGltZy5zcmMsIDgwMCwgODAwKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzaXplZFVybCh1cmwsIHdpZHRoLCBoZWlnaHQpIHtcclxuXHRsZXQgdyA9IFdJRFRIUy5maW5kKHcgPT4gdyA+IHdpZHRoKVxyXG5cdGxldCBoID0gSEVJR0hUUy5maW5kKGggPT4gaCA+IGhlaWdodClcclxuXHRpZiAoIXcpIHcgPSBXSURUSFNbV0lEVEhTLmxlbmd0aCAtIDFdXHJcblx0aWYgKCFoKSBoID0gSEVJR0hUU1tIRUlHSFRTLmxlbmd0aCAtIDFdXHJcblx0cmV0dXJuIGAvY2FjaGUvJHt3fS8ke2h9JHt1cmx9YFxyXG59XHJcblxyXG5pbXBvcnQgJy4vcGljdHVyZS5sZXNzJ1xyXG5leHBvcnQgY2xhc3MgUGljdHVyZSBleHRlbmRzIENvbXBvbmVudDx7XHJcblx0ZW1wdHk/OiBib29sZWFuXHJcblx0d2lkdGg/OiBudW1iZXJcclxuXHRoZWlnaHQ/OiBudW1iZXJcclxuXHRzcmM/OiBzdHJpbmdcclxuXHRtb2Q/OiBhbnlcclxuXHRpbmxpbmU/OiBib29sZWFuXHJcblx0bWF4PzogbnVtYmVyXHJcbn0+IHtcclxuXHRzaXplZChwYXRoLCB3aWR0aCkge1xyXG5cdFx0aWYgKHBhdGguY2hhckF0KDApICE9ICcvJykgcGF0aCA9IGAvJHtwYXRofWBcclxuXHRcdHJldHVybiBgL2NhY2hlLyR7d2lkdGh9L2F1dG8ke3BhdGh9YFxyXG5cdH1cclxuXHJcblx0c3Jjc2V0KHBhdGgsIG1heCkge1xyXG5cdFx0cmV0dXJuIFdJRFRIUy5maWx0ZXIod2lkdGggPT4gd2lkdGggPD0gbWF4KS5tYXAod2lkdGggPT4ge1xyXG5cdFx0XHRjb25zdCBzcmMgPSB0aGlzLnNpemVkKHBhdGgsIHdpZHRoKVxyXG5cdFx0XHRyZXR1cm4gYCR7c3JjfSAke3dpZHRoICogMn13YFxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHtcclxuXHRcdFx0ZW1wdHksXHJcblx0XHRcdHdpZHRoLFxyXG5cdFx0XHRoZWlnaHQsXHJcblx0XHRcdHNyYyxcclxuXHRcdFx0bW9kLFxyXG5cdFx0XHRpbmxpbmUgPSBmYWxzZSxcclxuXHRcdFx0bWF4ID0gODAwLFxyXG5cdFx0XHQuLi5hdHRyc1xyXG5cdFx0fSA9IHRoaXMuYXR0cnNcclxuXHRcdGlmIChlbXB0eSB8fCAhc3JjKSByZXR1cm5cclxuXHRcdGNvbnN0IHNldCA9IHRoaXMuc3Jjc2V0KHNyYywgbWF4KVxyXG5cdFx0cmV0dXJuIG0oJy5waWN0dXJlJyxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNsYXNzOiBjbGFzc25hbWVzKFtcclxuXHRcdFx0XHRcdGBtb2QtJHttb2R9YCxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0J2lzLWlubGluZSc6IGlubGluZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF0pXHJcblx0XHRcdH0sXHJcblx0XHRcdG0oJ2ltZy5waWN0dXJlLWVsJywge1xyXG5cdFx0XHRcdHNyYzogdGhpcy5zaXplZChzcmMsIFdJRFRIU1tXSURUSFMubGVuZ3RoIC0gMV0pLFxyXG5cdFx0XHRcdHdpZHRoLFxyXG5cdFx0XHRcdGhlaWdodCxcclxuXHRcdFx0XHRzcmNzZXQ6IHNldC5qb2luKCcsICcpLFxyXG5cdFx0XHRcdGFsdDogJycsXHJcblx0XHRcdFx0Li4uYXR0cnNcclxuXHRcdFx0fSlcclxuXHRcdClcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IG0gZnJvbSAnbWl0aHJpbCdcclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50J1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcnRhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG5cdG9uQ3JlYXRlKCkge1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpXHJcblx0XHRtLm1vdW50KHRoaXMubm9kZSwge1xyXG5cdFx0XHR2aWV3OiAoKSA9PiB0aGlzLmNoaWxkcmVuXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0b25SZW1vdmUoKSB7XHJcblx0XHRtLm1vdW50KHRoaXMubm9kZSwgbnVsbClcclxuXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKVxyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIG51bGxcclxuXHR9XHJcbn1cclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgbSBmcm9tICdtaXRocmlsJ1xyXG5pbXBvcnQge1Zub2RlfSBmcm9tICdtaXRocmlsJ1xyXG5pbXBvcnQge1N0cmVhbX0gZnJvbSAnbWl0aHJpbC9zdHJlYW0nXHJcbmltcG9ydCB7c3R5bGVyLCBzcHJpbmcsIGxpc3RlbiwgcG9pbnRlciwgdmFsdWUsIHR3ZWVuLCBjYWxjfSBmcm9tICdwb3Btb3Rpb24nXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudCdcclxuXHJcbmltcG9ydCAnLi9zbGlkZXIubGVzcydcclxuZXhwb3J0IGNsYXNzIFNsaWRlciBleHRlbmRzIENvbXBvbmVudDxcclxuXHR7XHJcblx0XHRpbmRleDogU3RyZWFtPG51bWJlcj5cclxuXHRcdHRvdGFsOiBTdHJlYW08bnVtYmVyPlxyXG5cdFx0YWN0aXZlczogU3RyZWFtPEFycmF5PCgpID0+IHZvaWQ+PlxyXG5cdFx0dW5zdHlsZWQ/OiBib29sZWFuXHJcblx0fSxcclxuXHRIVE1MRGl2RWxlbWVudFxyXG4+IHtcclxuXHRjaGlsZHJlbjogKCkgPT4gVm5vZGVcclxuXHRzaXplID0gMFxyXG5cdHRvdGFsID0gMFxyXG5cdHBvcyA9IG51bGxcclxuXHQvLyBzY3JvbGwgPSBzY3JvbGwoKVxyXG5cdC8vIFRvZG86IGFkZCBwcm9wZXIgc2Nyb2xsIGRlY2F5IGFmdGVyXHJcblx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL1BvcG1vdGlvbi9zdHlsZWZpcmUvcHVsbC84IGlzIG1lcmdlZFxyXG5cdHNsaWRlcyA9IFtdXHJcblx0dHdlZW4gPSBudWxsXHJcblxyXG5cdG9uQ3JlYXRlKCkge1xyXG5cdFx0Y29uc3QgY29udGVudFN0eWxlciA9IChzdHlsZXIgYXMgYW55KSh0aGlzLmRvbS5maXJzdENoaWxkKVxyXG5cdFx0dGhpcy5wb3MgPSB2YWx1ZSgwLCBjb250ZW50U3R5bGVyLnNldCgneCcpKVxyXG5cdFx0Y29uc3QgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbigpXHJcblx0XHRjb25zdCBzaXplID0gKCkgPT4gdGhpcy5zZXRTaXplKHRydWUpXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2l6ZSlcclxuXHRcdHNpemUoKVxyXG5cdFx0Ly8gV2UgcmVkcmF3IGluIHRoZSBuZXh0IGZyYW1lIGhlcmUsIGJlY2F1c2VcclxuXHRcdC8vIGFjdGl2ZSBzdGF0ZSBpcyBvbmx5IG5vdyBhdmFpbGFibGVcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZWRyYXcoKSlcclxuXHRcdHRoaXNbJ29ucmVtb3ZlJ10gPSAoKSA9PiB7XHJcblx0XHRcdGxpc3RlbmVyLnN0b3AoKVxyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2l6ZSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFRvZG86IHJld3JpdGUgdGhpcyB0byBwcm9wZXJseSB0byB1c2UgcG9wbW90aW9uJ3MgYWN0aW9ucyBhbmQgcmVhY3Rpb25zXHJcblx0cHJpdmF0ZSBsaXN0ZW4oKSB7XHJcblx0XHRyZXR1cm4gbGlzdGVuKHRoaXMuZG9tLCAnbW91c2Vkb3duIHRvdWNoc3RhcnQnKS5zdGFydChlID0+IHtcclxuXHRcdFx0aWYgKHRoaXMudHdlZW4pIHRoaXMudHdlZW4uc3RvcCgpXHJcblx0XHRcdGxldCBzdGFydCxcclxuXHRcdFx0XHRpc0hvcml6b250YWwgPSBudWxsXHJcblx0XHRcdGNvbnN0IHRyYWNrID0gcG9pbnRlcih7XHJcblx0XHRcdFx0eDogdGhpcy5wb3MuZ2V0KCksXHJcblx0XHRcdFx0cHJldmVudERlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0pLnN0YXJ0KHAgPT4ge1xyXG5cdFx0XHRcdGlmICghc3RhcnQpIHJldHVybiAoc3RhcnQgPSB7eDogcC54LCB5OiBwLnl9KVxyXG5cdFx0XHRcdGlmIChpc0hvcml6b250YWwgPT09IG51bGwpIHtcclxuXHRcdFx0XHRcdGlzSG9yaXpvbnRhbCA9IE1hdGguYWJzKHN0YXJ0LnggLSBwLngpID4gTWF0aC5hYnMoc3RhcnQueSAtIHAueSlcclxuXHRcdFx0XHRcdHRoaXMuZG9tLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGlzSG9yaXpvbnRhbCkgdGhpcy5wb3MudXBkYXRlKHAueClcclxuXHRcdFx0fSlcclxuXHRcdFx0bGlzdGVuKGRvY3VtZW50LCAnbW91c2V1cCB0b3VjaGVuZCcsIHtvbmNlOiB0cnVlfSkuc3RhcnQoZSA9PiB7XHJcblx0XHRcdFx0Y29uc3Qge3RvdGFsLCBpbmRleH0gPSB0aGlzLmF0dHJzXHJcblx0XHRcdFx0Y29uc3QgdmVsb2NpdHkgPSB0aGlzLnBvcy5nZXRWZWxvY2l0eSgpXHJcblx0XHRcdFx0dHJhY2suc3RvcCgpXHJcblx0XHRcdFx0dGhpcy5kb20uc3R5bGUucG9pbnRlckV2ZW50cyA9ICcnXHJcblx0XHRcdFx0aWYgKCFpc0hvcml6b250YWwpIHJldHVyblxyXG5cdFx0XHRcdGlmIChNYXRoLmFicyh2ZWxvY2l0eSkgPiAwLjIgKiB0aGlzLnNpemUpIHtcclxuXHRcdFx0XHRcdGNvbnN0IG5leHQgPSB2ZWxvY2l0eSA+IDAgPyBpbmRleCgpIC0gMSA6IGluZGV4KCkgKyAxXHJcblx0XHRcdFx0XHRpZiAobmV4dCA+PSAwICYmIG5leHQgPCB0b3RhbCgpKSB7XHJcblx0XHRcdFx0XHRcdGluZGV4KG5leHQpXHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLm9uVXBkYXRlKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5ib3VuY2UoKVxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdC8vIEJvdW5jZSBiYWNrIHRvIGN1cnJlbnQgc2xpZGVcclxuXHRib3VuY2UoKSB7XHJcblx0XHRjb25zdCB7aW5kZXh9ID0gdGhpcy5hdHRyc1xyXG5cdFx0dGhpcy50d2VlbiA9IHNwcmluZyh7XHJcblx0XHRcdGZyb206IHRoaXMucG9zLmdldCgpLFxyXG5cdFx0XHR2ZWxvY2l0eTogdGhpcy5wb3MuZ2V0VmVsb2NpdHkoKSxcclxuXHRcdFx0dG86IHRoaXMuc2xpZGVzW2luZGV4KCldLFxyXG5cdFx0XHRzdGlmZm5lc3M6IDEwMCxcclxuXHRcdFx0ZGFtcGluZzogMjBcclxuXHRcdH0pLnN0YXJ0KHRoaXMucG9zKVxyXG5cdH1cclxuXHJcblx0c2V0U2l6ZShyZXNpemVkID0gZmFsc2UpIHtcclxuXHRcdGNvbnN0IHtpbmRleH0gPSB0aGlzLmF0dHJzXHJcblx0XHRjb25zdCBzaXplID0gdGhpcy5kb20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcclxuXHRcdHRoaXMuc2l6ZSA9IHNpemVcclxuXHRcdHRoaXMuY2FsY1NsaWRlcygpXHJcblx0XHRpZiAocmVzaXplZCkgdGhpcy5wb3MudXBkYXRlKHRoaXMuc2xpZGVzW2luZGV4KCldKVxyXG5cdH1cclxuXHJcblx0Y2FsY1NsaWRlcygpIHtcclxuXHRcdGNvbnN0IHtpbmRleCwgdG90YWwsIGFjdGl2ZXN9ID0gdGhpcy5hdHRyc1xyXG5cdFx0Y29uc3QgY29udGVudCA9IHRoaXMuZG9tLmZpcnN0Q2hpbGQgYXMgSFRNTEVsZW1lbnRcclxuXHRcdGNvbnN0IGNoaWxkcmVuID0gY29udGVudC5jaGlsZHJlblxyXG5cdFx0Y29uc3QgYWN0aXZlQ2hlY2tzID0gW11cclxuXHRcdHRoaXMuc2xpZGVzID0gWzBdXHJcblx0XHRsZXQgY3VyciA9IDAsXHJcblx0XHRcdHByZXYgPSAwLFxyXG5cdFx0XHRsYXN0ID0gMFxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBzbGlkZSA9IGNoaWxkcmVuW2ldXHJcblx0XHRcdGNvbnN0IHdpZHRoID0gc2xpZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcclxuXHRcdFx0Y3VyciArPSB3aWR0aFxyXG5cdFx0XHQvLyBXZSBhZGQgYSBwaXhlbCB0byB0aGUgd2lkdGggaGVyZSB0byBwcmV2ZW50IHJvdW5kaW5nIGVycm9yc1xyXG5cdFx0XHRpZiAoY3VyciAtIGxhc3QgPj0gdGhpcy5zaXplICsgMSkge1xyXG5cdFx0XHRcdGlmIChwcmV2ICE9PSAwKSB0aGlzLnNsaWRlcy5wdXNoKC1wcmV2KVxyXG5cdFx0XHRcdGxhc3QgPSBwcmV2XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3Qgc3RhcnQgPSBwcmV2LFxyXG5cdFx0XHRcdGVuZCA9IGN1cnJcclxuXHRcdFx0YWN0aXZlQ2hlY2tzLnB1c2goKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IG5vdyA9IHRoaXMuc2xpZGVzW2luZGV4KCldXHJcblx0XHRcdFx0cmV0dXJuIHN0YXJ0ID49IC1ub3cgLSAxICYmIGVuZCA8PSAtbm93ICsgdGhpcy5zaXplICsgMVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRwcmV2ID0gY3VyclxyXG5cdFx0fVxyXG5cdFx0aWYgKGN1cnIgPiBsYXN0ICYmIGxhc3QgIT09IDApIHtcclxuXHRcdFx0dGhpcy5zbGlkZXMucG9wKClcclxuXHRcdFx0dGhpcy5zbGlkZXMucHVzaCgtKGN1cnIgLSB0aGlzLnNpemUpKVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRvdGFsKCkgIT0gdGhpcy5zbGlkZXMubGVuZ3RoKSB7XHJcblx0XHRcdHRvdGFsKHRoaXMuc2xpZGVzLmxlbmd0aClcclxuXHRcdFx0aWYgKGluZGV4KCkgPiB0b3RhbCgpKSBpbmRleCh0b3RhbCgpIC0gMSlcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnJlZHJhdygpKVxyXG5cdFx0fVxyXG5cdFx0aWYgKGFjdGl2ZXMpIGFjdGl2ZXMoYWN0aXZlQ2hlY2tzKVxyXG5cdH1cclxuXHJcblx0b25VcGRhdGUoKSB7XHJcblx0XHRjb25zdCB7aW5kZXh9ID0gdGhpcy5hdHRyc1xyXG5cdFx0Y29uc3QgeCA9IHRoaXMucG9zLmdldCgpXHJcblx0XHR0aGlzLnNldFNpemUoKVxyXG5cdFx0aWYgKHggIT0gdGhpcy5zbGlkZXNbaW5kZXgoKV0pXHJcblx0XHRcdHRoaXMudHdlZW4gPSB0d2Vlbih7XHJcblx0XHRcdFx0ZnJvbTogdGhpcy5wb3MuZ2V0KCksXHJcblx0XHRcdFx0Ly92ZWxvY2l0eTogdGhpcy5wb3MuZ2V0VmVsb2NpdHkoKSxcclxuXHRcdFx0XHR0bzogdGhpcy5zbGlkZXNbaW5kZXgoKV1cclxuXHRcdFx0XHQvL3N0aWZmbmVzczogMjAwXHJcblx0XHRcdH0pLnN0YXJ0KHRoaXMucG9zKVxyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3Qge3Vuc3R5bGVkID0gZmFsc2V9ID0gdGhpcy5hdHRyc1xyXG5cdFx0Y29uc3Qgc3R5bGUgPSBzdHlsZXMgPT4gKHtzdHlsZTogdW5zdHlsZWQgfHwgc3R5bGVzfSlcclxuXHRcdHJldHVybiBtKCcuc2xpZGVyJyxcclxuXHRcdFx0c3R5bGUoe292ZXJmbG93OiAnaGlkZGVuJ30pLFxyXG5cdFx0XHRtKCcuc2xpZGVyLWNvbnRlbnQnLCB0aGlzLmNoaWxkcmVuKVxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuZnVuY3Rpb24gcHJlZml4Q2xhc3NOYW1lcyhwcmVmaXgsIGlucHV0KSB7XHJcblx0cmV0dXJuIGNsYXNzTmFtZXMoaW5wdXQpXHJcblx0XHQuc3BsaXQoJyAnKVxyXG5cdFx0LmZpbHRlcih2ID0+IHYpXHJcblx0XHQubWFwKG5hbWUgPT4gKHByZWZpeCA/IGAke3ByZWZpeH0tJHtuYW1lfWAgOiBuYW1lKSlcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlZml4KGtleSkge1xyXG5cdHN3aXRjaCAoa2V5KSB7XHJcblx0XHRjYXNlICdjbGFzcyc6XHJcblx0XHRjYXNlICdjbGFzc05hbWUnOlxyXG5cdFx0XHRyZXR1cm4gbnVsbFxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIGtleVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VDbGFzc2VzKGNsYXNzZXMpIHtcclxuXHRpZiAodHlwZW9mIGNsYXNzZXMgPT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheShjbGFzc2VzKSB8fCAhY2xhc3NlcylcclxuXHRcdHJldHVybiBjbGFzc2VzXHJcblx0cmV0dXJuIE9iamVjdC5rZXlzKGNsYXNzZXMpLm1hcChrZXkgPT4ge1xyXG5cdFx0cmV0dXJuIHByZWZpeENsYXNzTmFtZXMocHJlZml4KGtleSksIGNsYXNzZXNba2V5XSlcclxuXHR9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NlcyguLi5jbGFzc2VzKSB7XHJcblx0Y29uc3QgbmFtZXMgPSBjbGFzc05hbWVzKGNsYXNzZXMubWFwKHBhcnNlQ2xhc3NlcykpXHJcblx0cmV0dXJuIG5hbWVzID8ge2NsYXNzTmFtZTogbmFtZXN9IDoge31cclxufVxyXG4iLCJleHBvcnQgdHlwZSBPcHRpb24gPSB7a2V5OiBzdHJpbmc7IGxhYmVsOiBzdHJpbmd9XHJcblxyXG5leHBvcnQgdHlwZSBPcHRpb25zQXJyYXkgPSBBcnJheTxzdHJpbmcgfCBPcHRpb24+XHJcblxyXG5leHBvcnQgdHlwZSBPcHRpb25zID0gT3B0aW9uc0FycmF5IHwge1trZXk6IHN0cmluZ106IHN0cmluZ31cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhbnVwT3B0aW9ucyhvcHRpb25zOiBPcHRpb25zKTogQXJyYXk8T3B0aW9uPiB7XHJcblx0aWYgKCFvcHRpb25zKSByZXR1cm4gW11cclxuXHRpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSlcclxuXHRcdHJldHVybiBvcHRpb25zLm1hcChvID0+ICh0eXBlb2YgbyA9PT0gJ3N0cmluZycgPyB7a2V5OiBvLCBsYWJlbDogb30gOiBvKSlcclxuXHRyZXR1cm4gT2JqZWN0LmtleXMob3B0aW9ucykubWFwKGtleSA9PiAoe1xyXG5cdFx0a2V5OiBrZXksXHJcblx0XHRsYWJlbDogb3B0aW9uc1trZXldXHJcblx0fSkpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21LZXkocHJlZml4ID0gJycpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0cHJlZml4ICtcclxuXHRcdE1hdGgucmFuZG9tKClcclxuXHRcdFx0LnRvU3RyaW5nKDM2KVxyXG5cdFx0XHQuc3Vic3RyKDIsIDEwKVxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShlcnJvcnMpIHtcclxuXHRpZiAoZXJyb3JzID09PSB1bmRlZmluZWQpIHJldHVybiAnJ1xyXG5cdGNvbnN0IGVycm9yc0xpc3QgPSB0eXBlb2YgZXJyb3JzID09ICdzdHJpbmcnID8gW2Vycm9yc10gOiBlcnJvcnNcclxuXHJcblx0aWYgKGVycm9yc0xpc3QubGVuZ3RoKSByZXR1cm4gZXJyb3JzTGlzdFswXVxyXG5cdHJldHVybiAnVGhpcyB2YWx1ZSBpcyBub3QgdmFsaWQnXHJcbn1cclxuIiwiaW1wb3J0IHNjcm9sbGJhcldpZHRoIGZyb20gJ3Njcm9sbGJhci13aWR0aCdcclxuXHJcbmNvbnN0IHN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9jayA9PiB7XHJcblx0aWYgKGxvY2spIHtcclxuXHRcdHN0eWxlLnBhZGRpbmdSaWdodCA9IHNjcm9sbGJhcldpZHRoKCkgKyAncHgnXHJcblx0XHRzdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlLnBhZGRpbmdSaWdodCA9ICcnXHJcblx0XHRzdHlsZS5vdmVyZmxvdyA9ICcnXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBtIGZyb20gJ21pdGhyaWwnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3ViQ29tcG9uZW50KHNlbGVjdG9yKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHZpZXcodm5vZGUpIHtcclxuXHRcdFx0cmV0dXJuIG0oc2VsZWN0b3IsIHZub2RlLmF0dHJzLCB2bm9kZS5jaGlsZHJlbilcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgJy4vaW5kZXgubGVzcydcclxuaW1wb3J0IHttb3VudH0gZnJvbSAnbWl0aHJpbCdcclxuaW1wb3J0IHttLCBDb21wb25lbnQsIGNyZWF0ZUNvbnRleHR9IGZyb20gJy4uLy4uL3NyYydcclxuaW1wb3J0IHtTbGlkZXJFeGFtcGxlfSBmcm9tICcuL3NsaWRlcmV4YW1wbGUnXHJcblxyXG5jb25zdCBUaGVtZSA9IGNyZWF0ZUNvbnRleHQoMClcclxuXHJcbmNsYXNzIERvY3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvdW50ID0gMFxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJkb2NzXCI+XHJcblx0XHRcdFx0PGgxPkBjb2RldXJzL2Zyb250PC9oMT5cclxuXHRcdFx0XHQ8UmFuZ2UgdmFsdWU9e3RoaXMuY291bnR9IG9uQ2hhbmdlPXt2ID0+ICh0aGlzLmNvdW50ID0gdil9IC8+XHJcblx0XHRcdFx0PGgzPnt0aGlzLmNvdW50fTwvaDM+XHJcblx0XHRcdFx0PGgyPlNsaWRlcjwvaDI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImRvY3Mtc2xpZGVyXCI+XHJcblx0XHRcdFx0XHQ8U2xpZGVyRXhhbXBsZSBzbGlkZXM9e3RoaXMuY291bnR9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGgyPkNvbnRleHQ8L2gyPlxyXG5cdFx0XHRcdDxUaGVtZS5Db25zdW1lcj57dGhlbWUgPT4gdGhlbWV9PC9UaGVtZS5Db25zdW1lcj5cclxuXHRcdFx0XHQ8VGhlbWUuUHJvdmlkZXIgdmFsdWU9e3RoaXMuY291bnR9PlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0VGhlbWU6IDxUaGVtZS5Db25zdW1lcj57dGhlbWUgPT4gdGhlbWV9PC9UaGVtZS5Db25zdW1lcj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvVGhlbWUuUHJvdmlkZXI+XHJcblx0XHRcdFx0PFRoZW1lLkNvbnN1bWVyPnt0aGVtZSA9PiB0aGVtZX08L1RoZW1lLkNvbnN1bWVyPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFJhbmdlIGV4dGVuZHMgQ29tcG9uZW50PHt2YWx1ZTogbnVtYmVyOyBvbkNoYW5nZTogKHY6IG51bWJlcikgPT4gYW55fT4ge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHt2YWx1ZSwgb25DaGFuZ2V9ID0gdGhpcy5hdHRyc1xyXG5cdFx0cmV0dXJuIG0oJ2lucHV0W3R5cGU9cmFuZ2VdJywge1xyXG5cdFx0XHR2YWx1ZSxcclxuXHRcdFx0bWluOiAwLFxyXG5cdFx0XHRtYXg6IDUwLFxyXG5cdFx0XHRvbmlucHV0OiBlID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbm1vdW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JyksIERvY3MpXHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IG0gZnJvbSAnbWl0aHJpbCdcclxuaW1wb3J0IHtDb21wb25lbnQsIFNsaWRlciwgU2xpZGVyU3RvcmV9IGZyb20gJy4uLy4uL3NyYydcclxuXHJcbmltcG9ydCAnLi9zbGlkZXJleGFtcGxlLmxlc3MnXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXJFeGFtcGxlIGV4dGVuZHMgQ29tcG9uZW50PHtzbGlkZXM6IG51bWJlcn0+IHtcclxuXHRzbGlkZXIgPSBuZXcgU2xpZGVyU3RvcmUoKVxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHtzbGlkZXN9ID0gdGhpcy5hdHRyc1xyXG5cdFx0Y29uc3QgaXRlbXMgPSBbXVxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXM7IGkrKykgaXRlbXMucHVzaChpKVxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzcz1cInNsaWRlcmV4YW1wbGVcIj5cclxuXHRcdFx0XHQ8U2xpZGVyIHsuLi50aGlzLnNsaWRlcn0+XHJcblx0XHRcdFx0XHR7aXRlbXMubWFwKGkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2xpZGVyZXhhbXBsZS1zbGlkZVwiPntpfTwvZGl2PlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC9TbGlkZXI+XHJcblx0XHRcdFx0PGEgb25jbGljaz17ZSA9PiB0aGlzLnNsaWRlci5nb1ByZXZpb3VzKCl9PlByZXZpb3VzPC9hPlxyXG5cdFx0XHRcdDxhIG9uY2xpY2s9e2UgPT4gdGhpcy5zbGlkZXIuZ29OZXh0KCl9Pk5leHQ8L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9