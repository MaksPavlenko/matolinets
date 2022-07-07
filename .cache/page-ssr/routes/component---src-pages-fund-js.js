exports.id = "component---src-pages-fund-js";
exports.ids = ["component---src-pages-fund-js"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


const preserveCamelCase = string => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
		}
	}

	return string;
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = Object.assign({
		pascalCase: false
	}, options);

	const postProcess = x => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	if (input.length === 1) {
		return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
	}

	const hasUpperCase = input !== input.toLowerCase();

	if (hasUpperCase) {
		input = preserveCamelCase(input);
	}

	input = input
		.replace(/^[_.\- ]+/, '')
		.toLowerCase()
		.replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase())
		.replace(/\d+(\w|$)/g, m => m.toUpperCase());

	return postProcess(input);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
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

/***/ "./node_modules/enquire.js/src/MediaQuery.js":
/*!***************************************************!*\
  !*** ./node_modules/enquire.js/src/MediaQuery.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var QueryHandler = __webpack_require__(/*! ./QueryHandler */ "./node_modules/enquire.js/src/QueryHandler.js");
var each = (__webpack_require__(/*! ./Util */ "./node_modules/enquire.js/src/Util.js").each);

/**
 * Represents a single media query, manages it's state and registered handlers for this query
 *
 * @constructor
 * @param {string} query the media query string
 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
 */
function MediaQuery(query, isUnconditional) {
    this.query = query;
    this.isUnconditional = isUnconditional;
    this.handlers = [];
    this.mql = window.matchMedia(query);

    var self = this;
    this.listener = function(mql) {
        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
        self.mql = mql.currentTarget || mql;
        self.assess();
    };
    this.mql.addListener(this.listener);
}

MediaQuery.prototype = {

    constuctor : MediaQuery,

    /**
     * add a handler for this query, triggering if already active
     *
     * @param {object} handler
     * @param {function} handler.match callback for when query is activated
     * @param {function} [handler.unmatch] callback for when query is deactivated
     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
     */
    addHandler : function(handler) {
        var qh = new QueryHandler(handler);
        this.handlers.push(qh);

        this.matches() && qh.on();
    },

    /**
     * removes the given handler from the collection, and calls it's destroy methods
     *
     * @param {object || function} handler the handler to remove
     */
    removeHandler : function(handler) {
        var handlers = this.handlers;
        each(handlers, function(h, i) {
            if(h.equals(handler)) {
                h.destroy();
                return !handlers.splice(i,1); //remove from array and exit each early
            }
        });
    },

    /**
     * Determine whether the media query should be considered a match
     *
     * @return {Boolean} true if media query can be considered a match, false otherwise
     */
    matches : function() {
        return this.mql.matches || this.isUnconditional;
    },

    /**
     * Clears all handlers and unbinds events
     */
    clear : function() {
        each(this.handlers, function(handler) {
            handler.destroy();
        });
        this.mql.removeListener(this.listener);
        this.handlers.length = 0; //clear array
    },

    /*
        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
        */
    assess : function() {
        var action = this.matches() ? 'on' : 'off';

        each(this.handlers, function(handler) {
            handler[action]();
        });
    }
};

module.exports = MediaQuery;


/***/ }),

/***/ "./node_modules/enquire.js/src/MediaQueryDispatch.js":
/*!***********************************************************!*\
  !*** ./node_modules/enquire.js/src/MediaQueryDispatch.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MediaQuery = __webpack_require__(/*! ./MediaQuery */ "./node_modules/enquire.js/src/MediaQuery.js");
var Util = __webpack_require__(/*! ./Util */ "./node_modules/enquire.js/src/Util.js");
var each = Util.each;
var isFunction = Util.isFunction;
var isArray = Util.isArray;

/**
 * Allows for registration of query handlers.
 * Manages the query handler's state and is responsible for wiring up browser events
 *
 * @constructor
 */
function MediaQueryDispatch () {
    if(!window.matchMedia) {
        throw new Error('matchMedia not present, legacy browsers require a polyfill');
    }

    this.queries = {};
    this.browserIsIncapable = !window.matchMedia('only all').matches;
}

MediaQueryDispatch.prototype = {

    constructor : MediaQueryDispatch,

    /**
     * Registers a handler for the given media query
     *
     * @param {string} q the media query
     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
     * @param {function} options.match fired when query matched
     * @param {function} [options.unmatch] fired when a query is no longer matched
     * @param {function} [options.setup] fired when handler first triggered
     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
     */
    register : function(q, options, shouldDegrade) {
        var queries         = this.queries,
            isUnconditional = shouldDegrade && this.browserIsIncapable;

        if(!queries[q]) {
            queries[q] = new MediaQuery(q, isUnconditional);
        }

        //normalise to object in an array
        if(isFunction(options)) {
            options = { match : options };
        }
        if(!isArray(options)) {
            options = [options];
        }
        each(options, function(handler) {
            if (isFunction(handler)) {
                handler = { match : handler };
            }
            queries[q].addHandler(handler);
        });

        return this;
    },

    /**
     * unregisters a query and all it's handlers, or a specific handler for a query
     *
     * @param {string} q the media query to target
     * @param {object || function} [handler] specific handler to unregister
     */
    unregister : function(q, handler) {
        var query = this.queries[q];

        if(query) {
            if(handler) {
                query.removeHandler(handler);
            }
            else {
                query.clear();
                delete this.queries[q];
            }
        }

        return this;
    }
};

module.exports = MediaQueryDispatch;


/***/ }),

/***/ "./node_modules/enquire.js/src/QueryHandler.js":
/*!*****************************************************!*\
  !*** ./node_modules/enquire.js/src/QueryHandler.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */
function QueryHandler(options) {
    this.options = options;
    !options.deferSetup && this.setup();
}

QueryHandler.prototype = {

    constructor : QueryHandler,

    /**
     * coordinates setup of the handler
     *
     * @function
     */
    setup : function() {
        if(this.options.setup) {
            this.options.setup();
        }
        this.initialised = true;
    },

    /**
     * coordinates setup and triggering of the handler
     *
     * @function
     */
    on : function() {
        !this.initialised && this.setup();
        this.options.match && this.options.match();
    },

    /**
     * coordinates the unmatch event for the handler
     *
     * @function
     */
    off : function() {
        this.options.unmatch && this.options.unmatch();
    },

    /**
     * called when a handler is to be destroyed.
     * delegates to the destroy or unmatch callbacks, depending on availability.
     *
     * @function
     */
    destroy : function() {
        this.options.destroy ? this.options.destroy() : this.off();
    },

    /**
     * determines equality by reference.
     * if object is supplied compare options, if function, compare match callback
     *
     * @function
     * @param {object || function} [target] the target for comparison
     */
    equals : function(target) {
        return this.options === target || this.options.match === target;
    }

};

module.exports = QueryHandler;


/***/ }),

/***/ "./node_modules/enquire.js/src/Util.js":
/*!*********************************************!*\
  !*** ./node_modules/enquire.js/src/Util.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */
function each(collection, fn) {
    var i      = 0,
        length = collection.length,
        cont;

    for(i; i < length; i++) {
        cont = fn(collection[i], i);
        if(cont === false) {
            break; //allow early exit
        }
    }
}

/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */
function isArray(target) {
    return Object.prototype.toString.apply(target) === '[object Array]';
}

/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */
function isFunction(target) {
    return typeof target === 'function';
}

module.exports = {
    isFunction : isFunction,
    isArray : isArray,
    each : each
};


/***/ }),

/***/ "./node_modules/enquire.js/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/enquire.js/src/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MediaQueryDispatch = __webpack_require__(/*! ./MediaQueryDispatch */ "./node_modules/enquire.js/src/MediaQueryDispatch.js");
module.exports = new MediaQueryDispatch();


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GatsbyImage": () => (/* binding */ Y),
/* harmony export */   "MainImage": () => (/* binding */ q),
/* harmony export */   "Placeholder": () => (/* binding */ C),
/* harmony export */   "StaticImage": () => (/* binding */ J),
/* harmony export */   "generateImageData": () => (/* binding */ y),
/* harmony export */   "getImage": () => (/* binding */ R),
/* harmony export */   "getImageData": () => (/* binding */ W),
/* harmony export */   "getLowResolutionImageURL": () => (/* binding */ w),
/* harmony export */   "getSrc": () => (/* binding */ x),
/* harmony export */   "getSrcSet": () => (/* binding */ I),
/* harmony export */   "withArtDirection": () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common-tags */ "./node_modules/common-tags/es/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);






function s() {
  return s = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];

      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }

    return e;
  }, s.apply(this, arguments);
}

function l(e, t) {
  if (null == e) return {};
  var a,
      i,
      r = {},
      n = Object.keys(e);

  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);

  return r;
}

var d,
    u = [.25, .5, 1, 2],
    c = [750, 1080, 1366, 1920],
    h = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
    g = function (e) {
  return console.warn(e);
},
    p = function (e, t) {
  return e - t;
},
    m = function (e) {
  return e.map(function (e) {
    return e.src + " " + e.width + "w";
  }).join(",\n");
};

function f(e) {
  var t = e.lastIndexOf(".");

  if (-1 !== t) {
    var a = e.substr(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}

function v(e) {
  var t = e.layout,
      a = void 0 === t ? "constrained" : t,
      i = e.width,
      n = e.height,
      o = e.sourceMetadata,
      l = e.breakpoints,
      d = e.aspectRatio,
      u = e.formats,
      c = void 0 === u ? ["auto", "webp"] : u;
  return c = c.map(function (e) {
    return e.toLowerCase();
  }), a = camelcase__WEBPACK_IMPORTED_MODULE_2___default()(a), i && n ? s({}, e, {
    formats: c,
    layout: a,
    aspectRatio: i / n
  }) : (o.width && o.height && !d && (d = o.width / o.height), "fullWidth" === a ? (i = i || o.width || l[l.length - 1], n = n || Math.round(i / (d || 1.3333333333333333))) : (i || (i = n && d ? n * d : o.width ? o.width : n ? Math.round(n / 1.3333333333333333) : 800), d && !n ? n = Math.round(i / d) : d || (d = i / n)), s({}, e, {
    width: i,
    height: n,
    aspectRatio: d,
    layout: a,
    formats: c
  }));
}

function w(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = v(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}

function y(e) {
  var t,
      a = (e = v(e)).pluginName,
      r = e.sourceMetadata,
      n = e.generateImageSource,
      o = e.layout,
      l = e.fit,
      h = e.options,
      p = e.width,
      w = e.height,
      y = e.filename,
      M = e.reporter,
      S = void 0 === M ? {
    warn: g
  } : M,
      N = e.backgroundColor,
      R = e.placeholderURL;
  if (a || S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof n) throw new Error("generateImageSource must be a function");
  r && (r.width || r.height) ? r.format || (r.format = f(y)) : r = {
    width: p,
    height: w,
    format: (null == (t = r) ? void 0 : t.format) || f(y) || "auto"
  };
  var x = new Set(e.formats);
  (0 === x.size || x.has("auto") || x.has("")) && (x.delete("auto"), x.delete(""), x.add(r.format)), x.has("jpg") && x.has("png") && (S.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), x.delete("jpg" === r.format ? "png" : "jpg"));

  var I = function (e) {
    var t = e.filename,
        a = e.layout,
        r = void 0 === a ? "constrained" : a,
        n = e.sourceMetadata,
        o = e.reporter,
        l = void 0 === o ? {
      warn: g
    } : o,
        h = e.breakpoints,
        p = void 0 === h ? c : h,
        m = Object.entries({
      width: e.width,
      height: e.height
    }).filter(function (e) {
      var t = e[1];
      return "number" == typeof t && t < 1;
    });
    if (m.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + m.map(function (e) {
      return e.join(": ");
    }).join(", "));
    return "fixed" === r ? function (e) {
      var t = e.filename,
          a = e.sourceMetadata,
          r = e.width,
          n = e.height,
          o = e.fit,
          s = void 0 === o ? "cover" : o,
          l = e.outputPixelDensities,
          c = e.reporter,
          h = void 0 === c ? {
        warn: g
      } : c,
          p = a.width / a.height,
          m = b(void 0 === l ? u : l);

      if (r && n) {
        var f = k(a, {
          width: r,
          height: n,
          fit: s
        });
        r = f.width, n = f.height, p = f.aspectRatio;
      }

      r ? n || (n = Math.round(r / p)) : r = n ? Math.round(n * p) : 800;
      var v,
          w,
          y = r;

      if (a.width < r || a.height < n) {
        var E = a.width < r ? "width" : "height";
        h.warn((0,common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndent)(d || (v = ["\n    The requested ", ' "', 'px" for the image ', " was larger than the actual image ", " of ", "px. If possible, replace the current image with a larger one."], w || (w = v.slice(0)), v.raw = w, d = v), E, "width" === E ? r : n, t, E, a[E])), "width" === E ? (r = a.width, n = Math.round(r / p)) : r = (n = a.height) * p;
      }

      return {
        sizes: m.filter(function (e) {
          return e >= 1;
        }).map(function (e) {
          return Math.round(e * r);
        }).filter(function (e) {
          return e <= a.width;
        }),
        aspectRatio: p,
        presentationWidth: y,
        presentationHeight: Math.round(y / p),
        unscaledWidth: r
      };
    }(e) : "constrained" === r ? E(e) : "fullWidth" === r ? E(s({
      breakpoints: p
    }, e)) : (l.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + r), {
      sizes: [n.width],
      presentationWidth: n.width,
      presentationHeight: n.height,
      aspectRatio: n.width / n.height,
      unscaledWidth: n.width
    });
  }(s({}, e, {
    sourceMetadata: r
  })),
      W = {
    sources: []
  },
      j = e.sizes;

  j || (j = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";

      case "fixed":
        return e + "px";

      case "fullWidth":
        return "100vw";

      default:
        return;
    }
  }(I.presentationWidth, o)), x.forEach(function (e) {
    var t = I.sizes.map(function (t) {
      var i = n(y, t, Math.round(t / I.aspectRatio), e, l, h);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      S.warn("[" + a + "] The resolver for image " + y + " returned an invalid value.");
    }).filter(Boolean);

    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === I.unscaledWidth;
      }) || t[0];
      i && (W.fallback = {
        src: i.src,
        srcSet: m(t),
        sizes: j
      });
    } else {
      var r;
      null == (r = W.sources) || r.push({
        srcSet: m(t),
        sizes: j,
        type: "image/" + e
      });
    }
  });
  var _ = {
    images: W,
    layout: o,
    backgroundColor: N
  };

  switch (R && (_.placeholder = {
    fallback: R
  }), o) {
    case "fixed":
      _.width = I.presentationWidth, _.height = I.presentationHeight;
      break;

    case "fullWidth":
      _.width = 1, _.height = 1 / I.aspectRatio;
      break;

    case "constrained":
      _.width = e.width || I.presentationWidth || 1, _.height = (_.width || 1) / I.aspectRatio;
  }

  return _;
}

var b = function (e) {
  return Array.from(new Set([1].concat(e))).sort(p);
};

function E(e) {
  var t,
      a = e.sourceMetadata,
      i = e.width,
      r = e.height,
      n = e.fit,
      o = void 0 === n ? "cover" : n,
      s = e.outputPixelDensities,
      l = e.breakpoints,
      d = e.layout,
      c = a.width / a.height,
      h = b(void 0 === s ? u : s);

  if (i && r) {
    var g = k(a, {
      width: i,
      height: r,
      fit: o
    });
    i = g.width, r = g.height, c = g.aspectRatio;
  }

  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(800, a.width)) / c), i || (i = r * c);
  var m = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == l ? void 0 : l.length) > 0 ? (t = l.filter(function (e) {
    return e <= a.width;
  })).length < l.length && !t.includes(a.width) && t.push(a.width) : t = (t = h.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== d || t.includes(i) || t.push(i), {
    sizes: t = t.sort(p),
    aspectRatio: c,
    presentationWidth: m,
    presentationHeight: Math.round(m / c),
    unscaledWidth: i
  };
}

function k(e, t) {
  var a = e.width / e.height,
      i = t.width,
      r = t.height;

  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;

    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
          o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;

    case "outside":
      var s = t.width ? t.width : 0,
          l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;

    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }

  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}

var M = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
    S = ["images", "placeholder"];

function N() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}

new Set();

var R = function (e) {
  var t;
  return function (e) {
    var t, a;
    return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
  }(e) ? e : function (e) {
    return Boolean(null == e ? void 0 : e.gatsbyImageData);
  }(e) ? e.gatsbyImageData : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
},
    x = function (e) {
  var t, a, i;
  return null == (t = R(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
},
    I = function (e) {
  var t, a, i;
  return null == (t = R(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
};

function W(e) {
  var t,
      a = e.baseUrl,
      i = e.urlBuilder,
      r = e.sourceWidth,
      n = e.sourceHeight,
      o = e.pluginName,
      d = void 0 === o ? "getImageData" : o,
      u = e.formats,
      c = void 0 === u ? ["auto"] : u,
      g = e.breakpoints,
      p = e.options,
      m = l(e, M);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = h), y(s({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: c,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: n,
      format: "auto"
    }
  }));
}

function j(e, t) {
  var a,
      i,
      r,
      n = e.images,
      o = e.placeholder,
      d = s({}, l(e, S), {
    images: s({}, n, {
      sources: []
    }),
    placeholder: o && s({}, o, {
      sources: []
    })
  });
  return t.forEach(function (t) {
    var a,
        i = t.media,
        r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = d.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return s({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), d.placeholder && d.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = d.images.sources).push.apply(a, n.sources), null != o && o.sources && (null == (i = d.placeholder) || (r = i.sources).push.apply(r, o.sources)), d;
}

var _,
    T = ["src", "srcSet", "loading", "alt", "shouldLoad", "innerRef"],
    A = ["fallback", "sources", "shouldLoad"],
    O = function (t) {
  var a = t.src,
      i = t.srcSet,
      r = t.loading,
      n = t.alt,
      o = void 0 === n ? "" : n,
      d = t.shouldLoad,
      u = t.innerRef,
      c = l(t, T);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", s({}, c, {
    decoding: "async",
    loading: r,
    src: d ? a : void 0,
    "data-src": d ? void 0 : a,
    srcSet: d ? i : void 0,
    "data-srcset": d ? void 0 : i,
    alt: o,
    ref: u
  }));
},
    z = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (t, a) {
  var i = t.fallback,
      r = t.sources,
      n = void 0 === r ? [] : r,
      o = t.shouldLoad,
      d = void 0 === o || o,
      u = l(t, A),
      c = u.sizes || (null == i ? void 0 : i.sizes),
      h = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(O, s({}, u, i, {
    sizes: c,
    shouldLoad: d,
    innerRef: a
  }));
  return n.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, n.map(function (t) {
    var a = t.media,
        i = t.srcSet,
        r = t.type;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
      key: a + "-" + r + "-" + i,
      type: r,
      media: a,
      srcSet: d ? i : void 0,
      "data-srcset": d ? void 0 : i,
      sizes: c
    });
  }), h) : h;
});

O.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool
}, z.displayName = "Picture", z.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_3__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired
  })]))
};

var L = ["fallback"],
    C = function (t) {
  var a = t.fallback,
      i = l(t, L);
  return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({}, i, {
    fallback: {
      src: a
    },
    "aria-hidden": !0,
    alt: ""
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", s({}, i));
};

C.displayName = "Placeholder", C.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  sources: null == (_ = z.propTypes) ? void 0 : _.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var q = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (t, a) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({
    ref: a
  }, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({}, t, {
    shouldLoad: !0
  }))));
});
q.displayName = "MainImage", q.propTypes = z.propTypes;

var D = ["children"],
    P = function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    type: "module",
    dangerouslySetInnerHTML: {
      __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1)}}'
    }
  });
},
    H = function (t) {
  var a = t.layout,
      i = t.width,
      r = t.height;
  return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "aria-hidden": !0,
    style: {
      paddingTop: r / i * 100 + "%"
    }
  }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxWidth: i,
      display: "block"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "",
    role: "presentation",
    "aria-hidden": "true",
    src: "data:image/svg+xml;charset=utf-8,%3Csvg height='" + r + "' width='" + i + "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",
    style: {
      maxWidth: "100%",
      display: "block",
      position: "static"
    }
  })) : null;
},
    F = function (t) {
  var i = t.children,
      r = l(t, D);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H, s({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(P, null));
},
    B = ["as", "children"],
    G = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
    V = ["style", "className"],
    U = function (e) {
  return e.replace(/\n/g, "");
},
    X = function (t) {
  var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.children,
      n = l(t, B);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, s({}, n), r);
},
    Y = function (t) {
  var a = t.as,
      i = t.className,
      r = t.class,
      n = t.style,
      o = t.image,
      d = t.loading,
      u = void 0 === d ? "lazy" : d,
      c = t.imgClassName,
      h = t.imgStyle,
      g = t.backgroundColor,
      p = t.objectFit,
      m = t.objectPosition,
      f = l(t, G);
  if (!o) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
  r && (i = r), h = s({
    objectFit: p,
    objectPosition: m,
    backgroundColor: g
  }, h);

  var v = o.width,
      w = o.height,
      y = o.layout,
      b = o.images,
      E = o.placeholder,
      k = o.backgroundColor,
      M = function (e, t, a) {
    var i = {},
        r = "gatsby-image-wrapper";
    return N() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (N() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
      className: r,
      "data-gatsby-image-wrapper": "",
      style: i
    };
  }(v, w, y),
      S = M.style,
      R = M.className,
      x = l(M, V),
      I = {
    fallback: void 0,
    sources: []
  };

  return b.fallback && (I.fallback = s({}, b.fallback, {
    srcSet: b.fallback.srcSet ? U(b.fallback.srcSet) : void 0
  })), b.sources && (I.sources = b.sources.map(function (e) {
    return s({}, e, {
      srcSet: U(e.srcSet)
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(X, s({}, x, {
    as: a,
    style: s({}, S, n, {
      backgroundColor: g
    }),
    className: R + (i ? " " + i : "")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F, {
    layout: y,
    width: v,
    height: w
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, s({}, function (e, t, a, i, r, n, o, l) {
    var d = {};
    n && (d.backgroundColor = n, "fixed" === a ? (d.width = i, d.height = r, d.backgroundColor = n, d.position = "relative") : ("constrained" === a || "fullWidth" === a) && (d.position = "absolute", d.top = 0, d.left = 0, d.bottom = 0, d.right = 0)), o && (d.objectFit = o), l && (d.objectPosition = l);
    var u = s({}, e, {
      "aria-hidden": !0,
      "data-placeholder-image": "",
      style: s({
        opacity: 1,
        transition: "opacity 500ms linear"
      }, d)
    });
    return N() || (u.style = {
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      width: "100%"
    }), u;
  }(E, 0, y, v, w, k, p, m))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(q, s({
    "data-gatsby-image-ssr": "",
    className: c
  }, f, function (e, t, a, i, r, n, o, l) {
    return void 0 === l && (l = {}), N() || (l = s({
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      transform: "translateZ(0)",
      transition: "opacity 250ms linear",
      width: "100%",
      willChange: "opacity"
    }, l)), s({}, a, {
      loading: i,
      shouldLoad: e,
      "data-main-image": "",
      style: s({}, l, {
        opacity: 0
      }),
      onLoad: function (e) {
        var t = e.currentTarget,
            a = new Image();
        a.src = t.currentSrc, a.decode ? a.decode().catch(function () {}).then(function () {
          r(!0);
        }) : r(!0);
      },
      ref: void 0
    });
  }("eager" === u, 0, I, u, void 0, 0, 0, h)))));
},
    Z = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions"],
    J = function (t) {
  return function (a) {
    var i = a.src,
        r = a.__imageData,
        n = a.__error,
        o = l(a, Z);
    return n && console.warn(n), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, s({
      image: r
    }, o)) : (console.warn("Image not loaded", i), n || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
  };
}(Y),
    K = function (e, t) {
  return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_3___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
},
    Q = new Set(["fixed", "fullWidth", "constrained"]),
    $ = {
  src: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  alt: function (e, t, a) {
    return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_3___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
  },
  width: K,
  height: K,
  sizes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  layout: function (e) {
    if (void 0 !== e.layout && !Q.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
  }
};

J.displayName = "StaticImage", J.propTypes = $;


/***/ }),

/***/ "./node_modules/gatsby-plugin-react-i18next/dist/Helmet.js":
/*!*****************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-i18next/dist/Helmet.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Helmet = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactHelmet = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");

var _useI18next2 = __webpack_require__(/*! ./useI18next */ "./node_modules/gatsby-plugin-react-i18next/dist/useI18next.js");

var _excluded = ["children"];

var Helmet = function Helmet(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useI18next = (0, _useI18next2.useI18next)(),
      languages = _useI18next.languages,
      language = _useI18next.language,
      originalPath = _useI18next.originalPath,
      defaultLanguage = _useI18next.defaultLanguage,
      _useI18next$siteUrl = _useI18next.siteUrl,
      siteUrl = _useI18next$siteUrl === void 0 ? '' : _useI18next$siteUrl;

  var createUrlWithLang = function createUrlWithLang(lng) {
    var url = "" + siteUrl + (lng === defaultLanguage ? '' : "/" + lng) + originalPath;
    return url.endsWith('/') ? url : url + "/";
  };

  return /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, props, /*#__PURE__*/_react.default.createElement("html", {
    lang: language
  }), /*#__PURE__*/_react.default.createElement("link", {
    rel: "canonical",
    href: createUrlWithLang(language)
  }), languages.map(function (lng) {
    return /*#__PURE__*/_react.default.createElement("link", {
      rel: "alternate",
      key: lng,
      href: createUrlWithLang(lng),
      hrefLang: lng
    });
  }), /*#__PURE__*/_react.default.createElement("link", {
    rel: "alternate",
    href: createUrlWithLang(defaultLanguage),
    hrefLang: "x-default"
  }), children);
};

exports.Helmet = Helmet;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-i18next/dist/Link.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-i18next/dist/Link.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.Link = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _i18nextContext = __webpack_require__(/*! ./i18nextContext */ "./node_modules/gatsby-plugin-react-i18next/dist/i18nextContext.js");

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

var _types = __webpack_require__(/*! ./types */ "./node_modules/gatsby-plugin-react-i18next/dist/types.js");

var _excluded = ["language", "to", "onClick"];

var Link = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var language = _ref.language,
      to = _ref.to,
      _onClick = _ref.onClick,
      rest = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var context = (0, _react.useContext)(_i18nextContext.I18nextContext);
  var urlLanguage = language || context.language;

  var getLanguagePath = function getLanguagePath(language) {
    return context.generateDefaultLanguagePage || language !== context.defaultLanguage ? "/" + language : '';
  };

  var link = "" + getLanguagePath(urlLanguage) + to;
  return (
    /*#__PURE__*/
    // @ts-ignore
    _react.default.createElement(_gatsby.Link, (0, _extends2.default)({}, rest, {
      to: link,
      innerRef: ref,
      hrefLang: urlLanguage,
      onClick: function onClick(e) {
        if (language) {
          localStorage.setItem(_types.LANGUAGE_KEY, language);
        }

        if (_onClick) {
          _onClick(e);
        }
      }
    }))
  );
});

exports.Link = Link;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-i18next/dist/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-i18next/dist/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;

var _reactI18next = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");

Object.keys(_reactI18next).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _reactI18next[key]) return;
  exports[key] = _reactI18next[key];
});

var _i18nextContext = __webpack_require__(/*! ./i18nextContext */ "./node_modules/gatsby-plugin-react-i18next/dist/i18nextContext.js");

Object.keys(_i18nextContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _i18nextContext[key]) return;
  exports[key] = _i18nextContext[key];
});

var _useI18next = __webpack_require__(/*! ./useI18next */ "./node_modules/gatsby-plugin-react-i18next/dist/useI18next.js");

Object.keys(_useI18next).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useI18next[key]) return;
  exports[key] = _useI18next[key];
});

var _Link = __webpack_require__(/*! ./Link */ "./node_modules/gatsby-plugin-react-i18next/dist/Link.js");

Object.keys(_Link).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Link[key]) return;
  exports[key] = _Link[key];
});

var _Helmet = __webpack_require__(/*! ./Helmet */ "./node_modules/gatsby-plugin-react-i18next/dist/Helmet.js");

Object.keys(_Helmet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Helmet[key]) return;
  exports[key] = _Helmet[key];
});

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-i18next/dist/useI18next.js":
/*!*********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-i18next/dist/useI18next.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useI18next = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _reactI18next = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");

var _react = __webpack_require__(/*! react */ "react");

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

var _i18nextContext = __webpack_require__(/*! ./i18nextContext */ "./node_modules/gatsby-plugin-react-i18next/dist/i18nextContext.js");

var _types = __webpack_require__(/*! ./types */ "./node_modules/gatsby-plugin-react-i18next/dist/types.js");

var useI18next = function useI18next(ns, options) {
  var _useTranslation = (0, _reactI18next.useTranslation)(ns, options),
      i18n = _useTranslation.i18n,
      t = _useTranslation.t,
      ready = _useTranslation.ready;

  var context = (0, _react.useContext)(_i18nextContext.I18nextContext);
  var routed = context.routed,
      defaultLanguage = context.defaultLanguage,
      generateDefaultLanguagePage = context.generateDefaultLanguagePage;

  var getLanguagePath = function getLanguagePath(language) {
    return generateDefaultLanguagePage || language !== defaultLanguage ? "/" + language : '';
  };

  var removePrefix = function removePrefix(pathname) {
    var base =  true ? "" : 0;

    if (base && pathname.indexOf(base) === 0) {
      pathname = pathname.slice(base.length);
    }

    return pathname;
  };

  var removeLocalePart = function removeLocalePart(pathname) {
    if (!routed) return pathname;
    var i = pathname.indexOf("/", 1);
    return pathname.substring(i);
  };

  var navigate = function navigate(to, options) {
    var languagePath = getLanguagePath(context.language);
    var link = routed ? "" + languagePath + to : "" + to;
    return (0, _gatsby.navigate)(link, options);
  };

  var changeLanguage = function changeLanguage(language, to, options) {
    var languagePath = getLanguagePath(language);
    var pathname = to || removeLocalePart(removePrefix(window.location.pathname));
    var link = "" + languagePath + pathname + window.location.search;
    localStorage.setItem(_types.LANGUAGE_KEY, language);
    return (0, _gatsby.navigate)(link, options);
  };

  return (0, _extends2.default)({}, context, {
    i18n: i18n,
    t: t,
    ready: ready,
    navigate: navigate,
    changeLanguage: changeLanguage
  });
};

exports.useI18next = useI18next;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-i18next/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-i18next/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist */ "./node_modules/gatsby-plugin-react-i18next/dist/index.js");

/***/ }),

/***/ "./src/components/Layout/Footer/Footer.jsx":
/*!*************************************************!*\
  !*** ./src/components/Layout/Footer/Footer.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Ui/InterfaceSystem/InterfaceSystem */ "./src/components/Ui/InterfaceSystem/InterfaceSystem.jsx");
/* harmony import */ var _FooterBottom_FooterBottom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterBottom/FooterBottom */ "./src/components/Layout/Footer/FooterBottom/FooterBottom.jsx");
/* harmony import */ var _FooterContent_FooterContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FooterContent/FooterContent */ "./src/components/Layout/Footer/FooterContent/FooterContent.jsx");






const Footer = ({
  menu,
  services,
  contacts
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "footer",
    id: "contacts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_1__.ContentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterContent_FooterContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    menu: menu,
    services: services,
    contacts: contacts
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterBottom_FooterBottom__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};

Footer.propTypes = {
  menu: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array),
  services: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array),
  contacts: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Layout/Footer/FooterBottom/FooterBottom.jsx":
/*!********************************************************************!*\
  !*** ./src/components/Layout/Footer/FooterBottom/FooterBottom.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg_nunox_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../svg/nunox.svg */ "./src/svg/nunox.svg");
/* harmony import */ var _svg_nunox_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_nunox_svg__WEBPACK_IMPORTED_MODULE_1__);



const FooterBottom = () => {
  function getYear() {
    return new Date().getFullYear();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "footer-bottom__copy"
  }, "\xA9 ", getYear()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.nunox.co/",
    terget: "blank",
    className: "footer-bottom__create"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_svg_nunox_svg__WEBPACK_IMPORTED_MODULE_1___default()), {
    className: "footer-bottom__create--logo"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterBottom);

/***/ }),

/***/ "./src/components/Layout/Footer/FooterContent/FooterCharity/FooterCharity.jsx":
/*!************************************************************************************!*\
  !*** ./src/components/Layout/Footer/FooterContent/FooterCharity/FooterCharity.jsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-react-i18next */ "./node_modules/gatsby-plugin-react-i18next/index.js");
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var _svg_logo_big_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../svg/logo-big.svg */ "./src/svg/logo-big.svg");
/* harmony import */ var _svg_logo_big_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_svg_logo_big_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _svg_heart_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../svg/heart.svg */ "./src/svg/heart.svg");
/* harmony import */ var _svg_heart_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_svg_heart_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FooterNavSystem_FooterNavSystem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FooterNavSystem/FooterNavSystem */ "./src/components/Layout/Footer/FooterContent/FooterNavSystem/FooterNavSystem.jsx");
 // import PropTypes from 'prop-types';







const FooterCharity = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterNavSystem_FooterNavSystem__WEBPACK_IMPORTED_MODULE_5__.FooterNavWrapper, {
    cls: 'footer-nav__wrapper--charity'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterNavSystem_FooterNavSystem__WEBPACK_IMPORTED_MODULE_5__.FooterNavMarker, {
    title: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__.useLanguage)('Благодійність:', 'Charity:', 'Wohltätigkeit:', 'Благотворительность:')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/fund/",
    className: "footer-charity__link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "footer-charity__logo--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_svg_logo_big_svg__WEBPACK_IMPORTED_MODULE_3___default()), {
    className: "footer-charity__logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "footer-charity__button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "footer-charity__button--title"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__.useLanguage)('Долучитись', 'Join', 'Verbinden', 'Присоединиться')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_svg_heart_svg__WEBPACK_IMPORTED_MODULE_4___default()), {
    className: "footer-charity__button--icon"
  }))));
}; // FooterCharity.propTypes = {};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterCharity);

/***/ }),

/***/ "./src/components/Layout/Footer/FooterContent/FooterContacts/ContactsSystem/ContactsSystem.jsx":
/*!*****************************************************************************************************!*\
  !*** ./src/components/Layout/Footer/FooterContent/FooterContacts/ContactsSystem/ContactsSystem.jsx ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsList": () => (/* binding */ ContactsList),
/* harmony export */   "ContactsItem": () => (/* binding */ ContactsItem),
/* harmony export */   "ContactsLink": () => (/* binding */ ContactsLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const ContactsList = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "contacts-list"
  }, children);
};
const ContactsItem = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "contacts-list__item"
  }, children);
};
const ContactsLink = ({
  link,
  title,
  blank
}) => {
  if (blank === true) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: link,
      target: "blank",
      className: "contacts-list__item--link"
    }, title);
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: link,
      className: "contacts-list__item--link"
    }, title);
  }
};
ContactsLink.propTypes = {
  link: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/***/ }),

/***/ "./src/components/Layout/Footer/FooterContent/FooterContacts/FooterContacts.jsx":
/*!**************************************************************************************!*\
  !*** ./src/components/Layout/Footer/FooterContent/FooterContacts/FooterContacts.jsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var _FooterNavSystem_FooterNavSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FooterNavSystem/FooterNavSystem */ "./src/components/Layout/Footer/FooterContent/FooterNavSystem/FooterNavSystem.jsx");
/* harmony import */ var _ContactsSystem_ContactsSystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContactsSystem/ContactsSystem */ "./src/components/Layout/Footer/FooterContent/FooterContacts/ContactsSystem/ContactsSystem.jsx");






const FooterContacts = ({
  contacts
}) => {
  const phone = `tel:` + contacts.phone.toString().replace(/[- )(]/g, '');
  const viber = `viber://chat?number=` + contacts.phone.toString().replace(/[- )(]/g, '');
  const whatsupp = `https://wa.me/` + contacts.phone.toString().replace(/[- )(]/g, '');
  const mail = 'mailto:' + contacts.mail;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterNavSystem_FooterNavSystem__WEBPACK_IMPORTED_MODULE_2__.FooterNavWrapper, {
    cls: 'footer-nav__wrapper--contacts'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterNavSystem_FooterNavSystem__WEBPACK_IMPORTED_MODULE_2__.FooterNavMarker, {
    title: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)('Контакти:', 'Contacts:', 'Kontakte:', 'Контакты:')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactsSystem_ContactsSystem__WEBPACK_IMPORTED_MODULE_3__.ContactsList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactsSystem_ContactsSystem__WEBPACK_IMPORTED_MODULE_3__.ContactsItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactsSystem_ContactsSystem__WEBPACK_IMPORTED_MODULE_3__.ContactsLink, {
    link: phone,
    title: contacts.phone,
    blank: false
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactsSystem_ContactsSystem__WEBPACK_IMPORTED_MODULE_3__.ContactsItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactsSystem_ContactsSystem__WEBPACK_IMPORTED_MODULE_3__.ContactsLink, {
    link: whatsupp,
    title: 'WhatsApp',
    blank: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactsSystem_ContactsSystem__WEBPACK_IMPORTED_MODULE_3__.ContactsItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactsSystem_ContactsSystem__WEBPACK_IMPORTED_MODULE_3__.ContactsLink, {
    link: viber,
    title: 'Viber',
    blank: false
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactsSystem_ContactsSystem__WEBPACK_IMPORTED_MODULE_3__.ContactsItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactsSystem_ContactsSystem__WEBPACK_IMPORTED_MODULE_3__.ContactsLink, {
    link: mail,
    title: contacts.mail,
    blank: false
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactsSystem_ContactsSystem__WEBPACK_IMPORTED_MODULE_3__.ContactsItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactsSystem_ContactsSystem__WEBPACK_IMPORTED_MODULE_3__.ContactsLink, {
    link: contacts.address_link,
    title: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(contacts.address_ua, contacts.address_en, contacts.address_de, contacts.address_ru),
    blank: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactsSystem_ContactsSystem__WEBPACK_IMPORTED_MODULE_3__.ContactsItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactsSystem_ContactsSystem__WEBPACK_IMPORTED_MODULE_3__.ContactsLink, {
    link: contacts.instagram,
    title: 'Instagram',
    blank: true
  }))));
};

FooterContacts.propTypes = {
  contacts: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterContacts);

/***/ }),

/***/ "./src/components/Layout/Footer/FooterContent/FooterContent.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/Layout/Footer/FooterContent/FooterContent.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FooterContacts_FooterContacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterContacts/FooterContacts */ "./src/components/Layout/Footer/FooterContent/FooterContacts/FooterContacts.jsx");
/* harmony import */ var _FooterMenu_FooterMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterMenu/FooterMenu */ "./src/components/Layout/Footer/FooterContent/FooterMenu/FooterMenu.jsx");
/* harmony import */ var _FooterServices_FooterServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FooterServices/FooterServices */ "./src/components/Layout/Footer/FooterContent/FooterServices/FooterServices.jsx");
/* harmony import */ var _FooterCharity_FooterCharity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FooterCharity/FooterCharity */ "./src/components/Layout/Footer/FooterContent/FooterCharity/FooterCharity.jsx");







const FooterContent = ({
  menu,
  services,
  contacts
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "footer-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterCharity_FooterCharity__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterMenu_FooterMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    menu: menu
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterServices_FooterServices__WEBPACK_IMPORTED_MODULE_3__["default"], {
    services: services
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterContacts_FooterContacts__WEBPACK_IMPORTED_MODULE_1__["default"], {
    contacts: contacts
  }));
};

FooterContent.propTypes = {
  menu: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array),
  services: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array),
  contacts: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterContent);

/***/ }),

/***/ "./src/components/Layout/Footer/FooterContent/FooterMenu/FooterMenu.jsx":
/*!******************************************************************************!*\
  !*** ./src/components/Layout/Footer/FooterContent/FooterMenu/FooterMenu.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var _FooterNavSystem_FooterNavSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FooterNavSystem/FooterNavSystem */ "./src/components/Layout/Footer/FooterContent/FooterNavSystem/FooterNavSystem.jsx");





const FooterMenu = ({
  menu
}) => {
  const langToggle = _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterNavSystem_FooterNavSystem__WEBPACK_IMPORTED_MODULE_2__.FooterNavWrapper, {
    cls: 'footer-nav__wrapper--menu'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterNavSystem_FooterNavSystem__WEBPACK_IMPORTED_MODULE_2__.FooterNavMarker, {
    title: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)('Навігація:', 'Navigation:', 'Navigation:', 'Навигация')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterNavSystem_FooterNavSystem__WEBPACK_IMPORTED_MODULE_2__.FooterNav, null, menu.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterNavSystem_FooterNavSystem__WEBPACK_IMPORTED_MODULE_2__.FooterNavItem, {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterNavSystem_FooterNavSystem__WEBPACK_IMPORTED_MODULE_2__.FooterNavLink, {
      link: item.link,
      title: langToggle(item.title_ua, item.title_en, item.title_de, item.title_ru)
    }));
  })));
};

FooterMenu.propTypes = {
  menu: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterMenu);

/***/ }),

/***/ "./src/components/Layout/Footer/FooterContent/FooterNavSystem/FooterNavSystem.jsx":
/*!****************************************************************************************!*\
  !*** ./src/components/Layout/Footer/FooterContent/FooterNavSystem/FooterNavSystem.jsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterNavWrapper": () => (/* binding */ FooterNavWrapper),
/* harmony export */   "FooterNavMarker": () => (/* binding */ FooterNavMarker),
/* harmony export */   "FooterNav": () => (/* binding */ FooterNav),
/* harmony export */   "FooterNavItem": () => (/* binding */ FooterNavItem),
/* harmony export */   "FooterNavLink": () => (/* binding */ FooterNavLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-react-i18next */ "./node_modules/gatsby-plugin-react-i18next/index.js");
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__);


const FooterNavWrapper = ({
  children,
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: `footer-nav__wrapper ${cls}`
  }, children);
};
const FooterNavMarker = ({
  title
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "footer-nav__marker"
  }, title);
};
const FooterNav = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "footer-nav"
  }, children);
};
const FooterNavItem = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "footer-nav__item"
  }, children);
};
const FooterNavLink = ({
  link,
  title
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: link,
    className: "footer-nav__link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "footer-nav__link--title"
  }, title));
};

/***/ }),

/***/ "./src/components/Layout/Footer/FooterContent/FooterServices/FooterServices.jsx":
/*!**************************************************************************************!*\
  !*** ./src/components/Layout/Footer/FooterContent/FooterServices/FooterServices.jsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var _FooterNavSystem_FooterNavSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FooterNavSystem/FooterNavSystem */ "./src/components/Layout/Footer/FooterContent/FooterNavSystem/FooterNavSystem.jsx");





const FooterServices = ({
  services
}) => {
  const langToggle = _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterNavSystem_FooterNavSystem__WEBPACK_IMPORTED_MODULE_2__.FooterNavWrapper, {
    cls: 'footer-nav__wrapper--services'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterNavSystem_FooterNavSystem__WEBPACK_IMPORTED_MODULE_2__.FooterNavMarker, {
    title: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)('Послуги:', 'Services:', 'Dienstleistungen:', 'Услуги:')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterNavSystem_FooterNavSystem__WEBPACK_IMPORTED_MODULE_2__.FooterNav, null, services.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterNavSystem_FooterNavSystem__WEBPACK_IMPORTED_MODULE_2__.FooterNavItem, {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FooterNavSystem_FooterNavSystem__WEBPACK_IMPORTED_MODULE_2__.FooterNavLink, {
      link: item.link,
      title: langToggle(item.title_ua, item.title_en, item.title_de, item.title_ru)
    }));
  })));
};

FooterServices.propTypes = {
  services: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterServices);

/***/ }),

/***/ "./src/components/Layout/Header/Burger/Burger.jsx":
/*!********************************************************!*\
  !*** ./src/components/Layout/Header/Burger/Burger.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



const Burger = ({
  openMenu,
  open
}) => {
  console.log(open);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "burger",
    onClick: openMenu,
    "aria-label": "open menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: open ? 'burger-wrapper is-open' : 'burger-wrapper'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "burger-line burger-line__1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "burger-line burger-line__2"
  })));
};

Burger.propTypes = {
  openMenu: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  open: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Burger);

/***/ }),

/***/ "./src/components/Layout/Header/Header.jsx":
/*!*************************************************!*\
  !*** ./src/components/Layout/Header/Header.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks_useScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useScroll */ "./src/hooks/useScroll.js");
/* harmony import */ var _Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Ui/InterfaceSystem/InterfaceSystem */ "./src/components/Ui/InterfaceSystem/InterfaceSystem.jsx");
/* harmony import */ var _HeaderLogo_HeaderLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderLogo/HeaderLogo */ "./src/components/Layout/Header/HeaderLogo/HeaderLogo.jsx");
/* harmony import */ var _Navigation_NavigationLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navigation/NavigationLeft */ "./src/components/Layout/Header/Navigation/NavigationLeft.jsx");
/* harmony import */ var _Navigation_NavigationRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navigation/NavigationRight */ "./src/components/Layout/Header/Navigation/NavigationRight.jsx");
/* harmony import */ var _Burger_Burger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Burger/Burger */ "./src/components/Layout/Header/Burger/Burger.jsx");
/* harmony import */ var _NavigationMobile_NavigationMobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavigationMobile/NavigationMobile */ "./src/components/Layout/Header/NavigationMobile/NavigationMobile.jsx");











const Header = ({
  cls,
  menu
}) => {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [activeHeader, setActiveHeader] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const changePosition = 60;
  let scroll = (0,_hooks_useScroll__WEBPACK_IMPORTED_MODULE_1__["default"])();

  if (scroll > changePosition && !activeHeader) {
    setActiveHeader(true);
  }

  if (scroll <= changePosition && activeHeader) {
    setActiveHeader(false);
  }

  function openMenu() {
    setOpen(!open);
  }

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
  }, [open]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: cls === 'fund' ? `header header-fund ${activeHeader ? 'is-active' : ''}` : 'header'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_2__.ContentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_responsive__WEBPACK_IMPORTED_MODULE_8___default()), {
    minWidth: 992
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navigation_NavigationLeft__WEBPACK_IMPORTED_MODULE_4__["default"], {
    menu: menu
  })), cls === 'fund' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderLogo_HeaderLogo__WEBPACK_IMPORTED_MODULE_3__.HeaderLogoFund, {
    open: open,
    activeHeader: activeHeader
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderLogo_HeaderLogo__WEBPACK_IMPORTED_MODULE_3__.HeaderLogo, {
    open: open
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_responsive__WEBPACK_IMPORTED_MODULE_8___default()), {
    minWidth: 992
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navigation_NavigationRight__WEBPACK_IMPORTED_MODULE_5__["default"], {
    menu: menu
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_responsive__WEBPACK_IMPORTED_MODULE_8___default()), {
    maxWidth: 991
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Burger_Burger__WEBPACK_IMPORTED_MODULE_6__["default"], {
    openMenu: openMenu,
    open: open
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_responsive__WEBPACK_IMPORTED_MODULE_8___default()), {
    maxWidth: 991
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavigationMobile_NavigationMobile__WEBPACK_IMPORTED_MODULE_7__["default"], {
    menu: menu,
    open: open
  })));
};

Header.propTypes = {
  menu: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/Layout/Header/HeaderLogo/HeaderLogo.jsx":
/*!****************************************************************!*\
  !*** ./src/components/Layout/Header/HeaderLogo/HeaderLogo.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderLogo": () => (/* binding */ HeaderLogo),
/* harmony export */   "HeaderLogoFund": () => (/* binding */ HeaderLogoFund)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-react-i18next */ "./node_modules/gatsby-plugin-react-i18next/index.js");
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_logo_main_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../svg/logo_main.svg */ "./src/svg/logo_main.svg");
/* harmony import */ var _svg_logo_main_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_logo_main_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg_logo_big_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../svg/logo-big.svg */ "./src/svg/logo-big.svg");
/* harmony import */ var _svg_logo_big_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_svg_logo_big_svg__WEBPACK_IMPORTED_MODULE_3__);




const HeaderLogo = ({
  open
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "/",
  className: open ? 'logo-link is-hide' : 'logo-link'
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_svg_logo_main_svg__WEBPACK_IMPORTED_MODULE_2___default()), {
  className: "logo logo-main"
}));
const HeaderLogoFund = ({
  open,
  activeHeader
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "/",
  className: open ? 'logo-link logo-link__fund is-hide' : 'logo-link__fund logo-link'
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_svg_logo_big_svg__WEBPACK_IMPORTED_MODULE_3___default()), {
  className: activeHeader ? 'logo logo-fund is-active' : 'logo logo-fund'
})); // export default HeaderLogo;

/***/ }),

/***/ "./src/components/Layout/Header/Navigation/NavigationLeft.jsx":
/*!********************************************************************!*\
  !*** ./src/components/Layout/Header/Navigation/NavigationLeft.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var _NavigationSystem_NavigationSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationSystem/NavigationSystem */ "./src/components/Layout/Header/Navigation/NavigationSystem/NavigationSystem.jsx");





const NavigationLeft = ({
  menu
}) => {
  const langToggle = _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "navigation navigation-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavigationSystem_NavigationSystem__WEBPACK_IMPORTED_MODULE_2__.NavList, null, menu.map((item, index) => {
    if (index <= 3) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavigationSystem_NavigationSystem__WEBPACK_IMPORTED_MODULE_2__.NavItem, {
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavigationSystem_NavigationSystem__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
        link: item.link,
        title: langToggle(item.title_ua, item.title_en, item.title_de, item.title_ru)
      }));
    } else {
      return null;
    }
  })));
};

NavigationLeft.propTypes = {
  menu: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationLeft);

/***/ }),

/***/ "./src/components/Layout/Header/Navigation/NavigationRight.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/Layout/Header/Navigation/NavigationRight.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var _NavigationSystem_NavigationSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationSystem/NavigationSystem */ "./src/components/Layout/Header/Navigation/NavigationSystem/NavigationSystem.jsx");
/* harmony import */ var _Ui_Language_Language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Ui/Language/Language */ "./src/components/Ui/Language/Language.jsx");






const NavigationRight = ({
  menu
}) => {
  const langToggle = _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "navigation navigation-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavigationSystem_NavigationSystem__WEBPACK_IMPORTED_MODULE_2__.NavList, null, menu.map((item, index) => {
    if (index > 3) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavigationSystem_NavigationSystem__WEBPACK_IMPORTED_MODULE_2__.NavItem, {
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavigationSystem_NavigationSystem__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
        link: item.link,
        title: langToggle(item.title_ua, item.title_en, item.title_de, item.title_ru)
      }));
    } else {
      return null;
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_Language_Language__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

NavigationRight.propTypes = {
  menu: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationRight);

/***/ }),

/***/ "./src/components/Layout/Header/Navigation/NavigationSystem/NavigationSystem.jsx":
/*!***************************************************************************************!*\
  !*** ./src/components/Layout/Header/Navigation/NavigationSystem/NavigationSystem.jsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavList": () => (/* binding */ NavList),
/* harmony export */   "NavItem": () => (/* binding */ NavItem),
/* harmony export */   "NavLink": () => (/* binding */ NavLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-react-i18next */ "./node_modules/gatsby-plugin-react-i18next/index.js");
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__);



const NavList = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "menu"
  }, children);
};
const NavItem = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "menu-item"
  }, children);
};
const NavLink = ({
  link,
  title
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: link,
    className: "menu-item__link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "menu-item__title"
  }, title));
};
NavLink.propTypes = {
  link: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};

/***/ }),

/***/ "./src/components/Layout/Header/NavigationMobile/NavigationMobile.jsx":
/*!****************************************************************************!*\
  !*** ./src/components/Layout/Header/NavigationMobile/NavigationMobile.jsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var _Ui_Language_Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Ui/Language/Language */ "./src/components/Ui/Language/Language.jsx");
/* harmony import */ var _NavigationMobileSystem_NavigationMobileSystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigationMobileSystem/NavigationMobileSystem */ "./src/components/Layout/Header/NavigationMobile/NavigationMobileSystem/NavigationMobileSystem.jsx");






const NavigationMobile = ({
  menu,
  open
}) => {
  const langToggle = _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: open ? 'mobile-menu__wrapper is-open' : 'mobile-menu__wrapper'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mobile-menu__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavigationMobileSystem_NavigationMobileSystem__WEBPACK_IMPORTED_MODULE_3__.NavListMobile, null, menu.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavigationMobileSystem_NavigationMobileSystem__WEBPACK_IMPORTED_MODULE_3__.NavItemMobile, {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavigationMobileSystem_NavigationMobileSystem__WEBPACK_IMPORTED_MODULE_3__.NavLinkMobile, {
      link: item.link,
      title: langToggle(item.title_ua, item.title_en, item.title_de, item.title_ru)
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_Language_Language__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};

NavigationMobile.propTypes = {
  menu: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array),
  open: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationMobile);

/***/ }),

/***/ "./src/components/Layout/Header/NavigationMobile/NavigationMobileSystem/NavigationMobileSystem.jsx":
/*!*********************************************************************************************************!*\
  !*** ./src/components/Layout/Header/NavigationMobile/NavigationMobileSystem/NavigationMobileSystem.jsx ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavListMobile": () => (/* binding */ NavListMobile),
/* harmony export */   "NavItemMobile": () => (/* binding */ NavItemMobile),
/* harmony export */   "NavLinkMobile": () => (/* binding */ NavLinkMobile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-react-i18next */ "./node_modules/gatsby-plugin-react-i18next/index.js");
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__);



const NavListMobile = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "mobile-menu"
  }, children);
};
const NavItemMobile = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "mobile-menu__item"
  }, children);
};
const NavLinkMobile = ({
  link,
  title
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: link,
    className: "mobile-menu__item--link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "mobile-menu__item--title"
  }, title));
};
NavLinkMobile.propTypes = {
  link: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};

/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* reexport safe */ _Header_Header__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Footer": () => (/* reexport safe */ _Footer_Footer__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header/Header */ "./src/components/Layout/Header/Header.jsx");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer/Footer */ "./src/components/Layout/Footer/Footer.jsx");



/***/ }),

/***/ "./src/components/Layout/layout.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/layout.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/components/Layout/index.js");
/* harmony import */ var _db_menuData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../db/menuData */ "./src/db/menuData.js");
/* harmony import */ var _db_contactsData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../db/contactsData */ "./src/db/contactsData.js");

 // import { StaticQuery, graphql } from 'gatsby';





const Layout = ({
  children,
  cls
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "app-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.Header, {
    cls: cls,
    menu: _db_menuData__WEBPACK_IMPORTED_MODULE_2__.menuData
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.Footer, {
    menu: _db_menuData__WEBPACK_IMPORTED_MODULE_2__.menuData,
    services: _db_menuData__WEBPACK_IMPORTED_MODULE_2__.servicesFooterData,
    contacts: _db_contactsData__WEBPACK_IMPORTED_MODULE_3__.contactsData
  }));
};

Layout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/Pages/Fund/FundAbout/AboutItemsList/AboutItem/AboutItem.jsx":
/*!************************************************************************************!*\
  !*** ./src/components/Pages/Fund/FundAbout/AboutItemsList/AboutItem/AboutItem.jsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




const AboutItem = ({
  item
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "fund-about__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "fund-about__item--title"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(item.title_ua, item.title_en, item.title_de, item.title_ru)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "fund-about__item--descr"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(item.description_ua, item.description_en, item.description_de, item.description_ru)));
};

AboutItem.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutItem);

/***/ }),

/***/ "./src/components/Pages/Fund/FundAbout/AboutItemsList/AboutItemsList.jsx":
/*!*******************************************************************************!*\
  !*** ./src/components/Pages/Fund/FundAbout/AboutItemsList/AboutItemsList.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AboutItem_AboutItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutItem/AboutItem */ "./src/components/Pages/Fund/FundAbout/AboutItemsList/AboutItem/AboutItem.jsx");




const AboutItemsList = ({
  items
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fund-about__items"
  }, items.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AboutItem_AboutItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item,
      key: index
    });
  }));
};

AboutItemsList.propTypes = {
  items: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutItemsList);

/***/ }),

/***/ "./src/components/Pages/Fund/FundAbout/FundAbout.jsx":
/*!***********************************************************!*\
  !*** ./src/components/Pages/Fund/FundAbout/FundAbout.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var _Ui_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Ui/SectionHeader/SectionHeader */ "./src/components/Ui/SectionHeader/SectionHeader.jsx");
/* harmony import */ var _Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Ui/InterfaceSystem/InterfaceSystem */ "./src/components/Ui/InterfaceSystem/InterfaceSystem.jsx");
/* harmony import */ var _AboutItemsList_AboutItemsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AboutItemsList/AboutItemsList */ "./src/components/Pages/Fund/FundAbout/AboutItemsList/AboutItemsList.jsx");







const FundAbout = ({
  about
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_3__.SectionDefault, {
    classes: 'fund-about'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_3__.ContentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(about.title_ua, about.title_en, about.title_de, about.title_ru)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AboutItemsList_AboutItemsList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    items: about.items
  })));
};

FundAbout.propTypes = {
  about: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FundAbout);

/***/ }),

/***/ "./src/components/Pages/Fund/FundCases/CasessSlider/CasesItem/CasesItem.jsx":
/*!**********************************************************************************!*\
  !*** ./src/components/Pages/Fund/FundCases/CasessSlider/CasesItem/CasesItem.jsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-react-i18next */ "./node_modules/gatsby-plugin-react-i18next/index.js");
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





const CasesItem = ({
  title,
  description,
  img,
  slug
}) => {
  const image = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.getImage)(img);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "case-item__slide"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "case-item__link",
    to: slug
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "case-item__image-wrapper"
  }, img && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.GatsbyImage, {
    className: "team-item__image",
    image: image,
    alt: title,
    loading: "eager"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "case-item__info--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "h3 case-item__info--title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "case-item__info--descr"
  }, description))));
};

CasesItem.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  slug: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  img: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CasesItem);

/***/ }),

/***/ "./src/components/Pages/Fund/FundCases/CasessSlider/CasessSlider.jsx":
/*!***************************************************************************!*\
  !*** ./src/components/Pages/Fund/FundCases/CasessSlider/CasessSlider.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2741187235_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../public/page-data/sq/d/2741187235.json */ "./public/page-data/sq/d/2741187235.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var _Ui_DefaultSlider_DefaultSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Ui/DefaultSlider/DefaultSlider */ "./src/components/Ui/DefaultSlider/DefaultSlider.jsx");
/* harmony import */ var _CasesItem_CasesItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CasesItem/CasesItem */ "./src/components/Pages/Fund/FundCases/CasessSlider/CasesItem/CasesItem.jsx");







const CasessSlider = ({
  items
}) => {
  const data = _public_page_data_sq_d_2741187235_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const langToggle = _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__.useLanguage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "cases-slider__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Ui_DefaultSlider_DefaultSlider__WEBPACK_IMPORTED_MODULE_3__["default"], null, items.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_CasesItem_CasesItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      title: langToggle(item.title_ua, item.title_en, item.title_de, item.title_ru),
      description: langToggle(item.description_ua, item.description_en, item.description_de, item.description_ru),
      slug: item.slug,
      img: data.fundCaseItem.childImageSharp
    });
  })));
};

CasessSlider.propTypes = {
  items: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CasessSlider);

/***/ }),

/***/ "./src/components/Pages/Fund/FundCases/FundCases.jsx":
/*!***********************************************************!*\
  !*** ./src/components/Pages/Fund/FundCases/FundCases.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var _Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Ui/InterfaceSystem/InterfaceSystem */ "./src/components/Ui/InterfaceSystem/InterfaceSystem.jsx");
/* harmony import */ var _Ui_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Ui/SectionHeader/SectionHeader */ "./src/components/Ui/SectionHeader/SectionHeader.jsx");
/* harmony import */ var _CasessSlider_CasessSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CasessSlider/CasessSlider */ "./src/components/Pages/Fund/FundCases/CasessSlider/CasessSlider.jsx");







const FundCases = ({
  cases,
  items
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_2__.SectionDefault, {
    classes: 'fund-cases'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_2__.ContentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(cases.title_ua, cases.title_en, cases.title_de, cases.title_ru)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CasessSlider_CasessSlider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    items: items
  })));
};

FundCases.propTypes = {
  cases: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  items: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FundCases);

/***/ }),

/***/ "./src/components/Pages/Fund/FundDocs/DocsItemsList/DocsItem/DocsItem.jsx":
/*!********************************************************************************!*\
  !*** ./src/components/Pages/Fund/FundDocs/DocsItemsList/DocsItem/DocsItem.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




const DocsItem = ({
  item,
  index,
  handleClick
}) => {
  const image = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.getImage)(item);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "fund-docs__item",
    role: "presentation",
    onClick: e => handleClick(e, index)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "docs-item__image--wrapper"
  }, item && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.GatsbyImage, {
    className: "docs-item__image",
    image: image,
    alt: "Document",
    loading: "eager"
  })));
};

DocsItem.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocsItem);

/***/ }),

/***/ "./src/components/Pages/Fund/FundDocs/DocsItemsList/DocsItemsList.jsx":
/*!****************************************************************************!*\
  !*** ./src/components/Pages/Fund/FundDocs/DocsItemsList/DocsItemsList.jsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DocsItem_DocsItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocsItem/DocsItem */ "./src/components/Pages/Fund/FundDocs/DocsItemsList/DocsItem/DocsItem.jsx");




const DocsItemsList = ({
  items,
  handleClick
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fund-docs__list"
  }, items.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DocsItem_DocsItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      item: item.childImageSharp,
      index: index,
      handleClick: handleClick
    });
  }));
};

DocsItemsList.propTypes = {
  items: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocsItemsList);

/***/ }),

/***/ "./src/components/Pages/Fund/FundDocs/FundDocs.jsx":
/*!*********************************************************!*\
  !*** ./src/components/Pages/Fund/FundDocs/FundDocs.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_175761340_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../public/page-data/sq/d/175761340.json */ "./public/page-data/sq/d/175761340.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var _Ui_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Ui/SectionHeader/SectionHeader */ "./src/components/Ui/SectionHeader/SectionHeader.jsx");
/* harmony import */ var _Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Ui/InterfaceSystem/InterfaceSystem */ "./src/components/Ui/InterfaceSystem/InterfaceSystem.jsx");
/* harmony import */ var _DocsItemsList_DocsItemsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DocsItemsList/DocsItemsList */ "./src/components/Pages/Fund/FundDocs/DocsItemsList/DocsItemsList.jsx");
/* harmony import */ var _Ui_LightBox_LightBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Ui/LightBox/LightBox */ "./src/components/Ui/LightBox/LightBox.jsx");









const FundDocs = ({
  docs
}) => {
  const gallery = _public_page_data_sq_d_175761340_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const items = gallery.source.nodes;
  const [showLightbox, setShowLightbox] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [selectedImage, setSelectedImage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);

  function handleClick(e, index) {
    e.preventDefault();
    setShowLightbox(!showLightbox);
    setSelectedImage(index);
  }

  function closeModal() {
    setShowLightbox(false);
    setSelectedImage(0);
  }

  function goBack() {
    setSelectedImage(selectedImage - 1);
  }

  function goForward() {
    setSelectedImage(selectedImage + 1);
  }

  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);
    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
    };
  });

  function handleKeyUp(e) {
    e.preventDefault();
    const {
      keyCode
    } = e;

    if (showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (selectedImage > 0) {
          setSelectedImage(selectedImage - 1);
        }
      }

      if (keyCode === 39) {
        // Right Arrow Key
        if (selectedImage < items.length - 1) {
          setSelectedImage(selectedImage + 1);
        }
      }

      if (keyCode === 27) {
        // Escape key
        setShowLightbox(false);
      }
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_4__.SectionDefault, {
    classes: 'fund-docs'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_4__.ContentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Ui_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__.useLanguage)(docs.title_ua, docs.title_en, docs.title_de, docs.title_ru)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_DocsItemsList_DocsItemsList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    items: items,
    handleClick: handleClick
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Ui_LightBox_LightBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    dinamicImage: items[selectedImage].childImageSharp,
    closeModal: closeModal,
    goBack: goBack,
    goForward: goForward,
    selectedImage: selectedImage,
    images: items,
    showLightbox: showLightbox
  }));
};

FundDocs.propTypes = {
  docs: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FundDocs);

/***/ }),

/***/ "./src/components/Pages/Fund/FundDonate/FundDonate.jsx":
/*!*************************************************************!*\
  !*** ./src/components/Pages/Fund/FundDonate/FundDonate.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var _Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Ui/InterfaceSystem/InterfaceSystem */ "./src/components/Ui/InterfaceSystem/InterfaceSystem.jsx");
/* harmony import */ var _Ui_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Ui/SectionHeader/SectionHeader */ "./src/components/Ui/SectionHeader/SectionHeader.jsx");






const FundDonate = ({
  donate
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_2__.SectionDefault, {
    classes: 'fund-donate'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_2__.ContentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(donate.title_ua, donate.title_en, donate.title_de, donate.title_ru)
  })));
};

FundDonate.propTypes = {
  donate: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FundDonate);

/***/ }),

/***/ "./src/components/Pages/Fund/FundFacts/FactsItemsList/FactItem/FactItem.jsx":
/*!**********************************************************************************!*\
  !*** ./src/components/Pages/Fund/FundFacts/FactsItemsList/FactItem/FactItem.jsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




const FactItem = ({
  item
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "fund-facts__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "fund-facts__item--marker"
  }, item.marker), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "fund-facts__item--title"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(item.title_ua, item.title_en, item.title_de, item.title_ru)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "fund-facts__item--descr"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(item.description_ua, item.description_en, item.description_de, item.description_ru)));
};

FactItem.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FactItem);

/***/ }),

/***/ "./src/components/Pages/Fund/FundFacts/FactsItemsList/FactsItemsList.jsx":
/*!*******************************************************************************!*\
  !*** ./src/components/Pages/Fund/FundFacts/FactsItemsList/FactsItemsList.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FactItem_FactItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FactItem/FactItem */ "./src/components/Pages/Fund/FundFacts/FactsItemsList/FactItem/FactItem.jsx");




const FactsItemsList = ({
  items
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fund-facts__list"
  }, items.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FactItem_FactItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item,
      key: index
    });
  }));
};

FactsItemsList.propTypes = {
  items: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FactsItemsList);

/***/ }),

/***/ "./src/components/Pages/Fund/FundFacts/FundFacts.jsx":
/*!***********************************************************!*\
  !*** ./src/components/Pages/Fund/FundFacts/FundFacts.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_4032356251_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../public/page-data/sq/d/4032356251.json */ "./public/page-data/sq/d/4032356251.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Ui/InterfaceSystem/InterfaceSystem */ "./src/components/Ui/InterfaceSystem/InterfaceSystem.jsx");
/* harmony import */ var _Ui_CoverDefault_CoverDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Ui/CoverDefault/CoverDefault */ "./src/components/Ui/CoverDefault/CoverDefault.jsx");
/* harmony import */ var _FactsItemsList_FactsItemsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FactsItemsList/FactsItemsList */ "./src/components/Pages/Fund/FundFacts/FactsItemsList/FactsItemsList.jsx");







const FundFacts = ({
  facts
}) => {
  const data = _public_page_data_sq_d_4032356251_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_2__.SectionDefault, {
    classes: 'fund-facts'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "fund-facts__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Ui_CoverDefault_CoverDefault__WEBPACK_IMPORTED_MODULE_3__["default"], {
    img: data.fundFactCover.childImageSharp
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_2__.ContentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_FactsItemsList_FactsItemsList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    items: facts.items
  }))));
};

FundFacts.propTypes = {
  facts: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FundFacts);

/***/ }),

/***/ "./src/components/Pages/Fund/FundMain/FundMain.jsx":
/*!*********************************************************!*\
  !*** ./src/components/Pages/Fund/FundMain/FundMain.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3130138437_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../public/page-data/sq/d/3130138437.json */ "./public/page-data/sq/d/3130138437.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Ui_CoverDefault_CoverDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Ui/CoverDefault/CoverDefault */ "./src/components/Ui/CoverDefault/CoverDefault.jsx");
/* harmony import */ var _FundMainContent_FundMainContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FundMainContent/FundMainContent */ "./src/components/Pages/Fund/FundMain/FundMainContent/FundMainContent.jsx");







const FundMain = ({
  main
}) => {
  const data = _public_page_data_sq_d_3130138437_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    className: "fund-main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Ui_CoverDefault_CoverDefault__WEBPACK_IMPORTED_MODULE_3__["default"], {
    img: data.fundCoverDesctop.childImageSharp
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_FundMainContent_FundMainContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__.useLanguage)(main.title_ua, main.title_en, main.title_de, main.title_ru),
    description: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__.useLanguage)(main.description_ua, main.description_en, main.description_de, main.description_ru)
  }));
};

FundMain.propTypes = {
  main: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FundMain);

/***/ }),

/***/ "./src/components/Pages/Fund/FundMain/FundMainContent/FundMainContent.jsx":
/*!********************************************************************************!*\
  !*** ./src/components/Pages/Fund/FundMain/FundMainContent/FundMainContent.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Ui/InterfaceSystem/InterfaceSystem */ "./src/components/Ui/InterfaceSystem/InterfaceSystem.jsx");




const FundMainContent = ({
  title,
  description
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_1__.ContentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "main-content__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "main-content__descr"
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "h1 main-content__title"
  }, title)));
};

FundMainContent.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FundMainContent);

/***/ }),

/***/ "./src/components/Pages/Fund/FundPhone/FundPhone.jsx":
/*!***********************************************************!*\
  !*** ./src/components/Pages/Fund/FundPhone/FundPhone.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_552293447_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../public/page-data/sq/d/552293447.json */ "./public/page-data/sq/d/552293447.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Ui/InterfaceSystem/InterfaceSystem */ "./src/components/Ui/InterfaceSystem/InterfaceSystem.jsx");
/* harmony import */ var _Ui_CoverDefault_CoverDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Ui/CoverDefault/CoverDefault */ "./src/components/Ui/CoverDefault/CoverDefault.jsx");
/* harmony import */ var _PhoneInfo_PhoneInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhoneInfo/PhoneInfo */ "./src/components/Pages/Fund/FundPhone/PhoneInfo/PhoneInfo.jsx");







const FundPhone = ({
  phone
}) => {
  const data = _public_page_data_sq_d_552293447_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_2__.SectionDefault, {
    classes: 'fund-phone'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "fund-phone__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Ui_CoverDefault_CoverDefault__WEBPACK_IMPORTED_MODULE_3__["default"], {
    img: data.fundPhoneCover.childImageSharp
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_2__.ContentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_PhoneInfo_PhoneInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    info: phone
  }))));
};

FundPhone.propTypes = {
  phone: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FundPhone);

/***/ }),

/***/ "./src/components/Pages/Fund/FundPhone/PhoneInfo/PhoneInfo.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/Pages/Fund/FundPhone/PhoneInfo/PhoneInfo.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");




const PhoneInfo = ({
  info
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fund-phone__info--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fund-phone__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "h3 fund-phone__info--title"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(info.title_ua, info.title_en, info.title_de, info.title_ru)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: `tel:+30` + info.phone.toString().replace(/[- )(]/g, ''),
    className: "fund-phone__info--link"
  }, info.phone), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "fund-phone__info--descr"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(info.description_ua, info.description_en, info.description_de, info.description_ru))));
};

PhoneInfo.propTypes = {
  info: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhoneInfo);

/***/ }),

/***/ "./src/components/Pages/Fund/FundTeam/FundTeam.jsx":
/*!*********************************************************!*\
  !*** ./src/components/Pages/Fund/FundTeam/FundTeam.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var _Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Ui/InterfaceSystem/InterfaceSystem */ "./src/components/Ui/InterfaceSystem/InterfaceSystem.jsx");
/* harmony import */ var _TeamItemsList_TeamItemsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TeamItemsList/TeamItemsList */ "./src/components/Pages/Fund/FundTeam/TeamItemsList/TeamItemsList.jsx");
/* harmony import */ var _Ui_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Ui/SectionHeader/SectionHeader */ "./src/components/Ui/SectionHeader/SectionHeader.jsx");







const FundTeam = ({
  team
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_2__.SectionDefault, {
    classes: 'fund-facts'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_2__.ContentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(team.title_ua, team.title_en, team.title_de, team.title_ru)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TeamItemsList_TeamItemsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: team.items
  })));
};

FundTeam.propTypes = {
  team: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FundTeam);

/***/ }),

/***/ "./src/components/Pages/Fund/FundTeam/TeamItemsList/TeamItem/TeamItem.jsx":
/*!********************************************************************************!*\
  !*** ./src/components/Pages/Fund/FundTeam/TeamItemsList/TeamItem/TeamItem.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_4045881802_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../public/page-data/sq/d/4045881802.json */ "./public/page-data/sq/d/4045881802.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");






const TeamItem = ({
  item
}) => {
  const data = _public_page_data_sq_d_4045881802_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const image = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.getImage)(data.fundTemItem.childImageSharp);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("article", {
    className: "fund-team__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "team-item__image--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.GatsbyImage, {
    className: "team-item__image",
    image: image,
    alt: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__.useLanguage)(item.title_ua, item.title_en, item.title_de, item.title_ru),
    loading: "eager"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "team-item__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", {
    className: "team-item__info--title"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__.useLanguage)(item.title_ua, item.title_en, item.title_de, item.title_ru)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "team-item__info--descr"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__.useLanguage)(item.description_ua, item.description_en, item.description_de, item.description_ru))));
};

TeamItem.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamItem);

/***/ }),

/***/ "./src/components/Pages/Fund/FundTeam/TeamItemsList/TeamItemsList.jsx":
/*!****************************************************************************!*\
  !*** ./src/components/Pages/Fund/FundTeam/TeamItemsList/TeamItemsList.jsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TeamItem_TeamItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamItem/TeamItem */ "./src/components/Pages/Fund/FundTeam/TeamItemsList/TeamItem/TeamItem.jsx");
/* harmony import */ var _Ui_DefaultSlider_DefaultSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Ui/DefaultSlider/DefaultSlider */ "./src/components/Ui/DefaultSlider/DefaultSlider.jsx");





const TeamItemsList = ({
  items
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fund-team__list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_DefaultSlider_DefaultSlider__WEBPACK_IMPORTED_MODULE_2__["default"], null, items.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TeamItem_TeamItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      item: item,
      key: index
    });
  })));
};

TeamItemsList.propTypes = {
  items: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamItemsList);

/***/ }),

/***/ "./src/components/Pages/Fund/index.js":
/*!********************************************!*\
  !*** ./src/components/Pages/Fund/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundMain": () => (/* reexport safe */ _FundMain_FundMain__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "FundAbout": () => (/* reexport safe */ _FundAbout_FundAbout__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "FundFacts": () => (/* reexport safe */ _FundFacts_FundFacts__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "FundTeam": () => (/* reexport safe */ _FundTeam_FundTeam__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "FundPhone": () => (/* reexport safe */ _FundPhone_FundPhone__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "FundCases": () => (/* reexport safe */ _FundCases_FundCases__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "FundDocs": () => (/* reexport safe */ _FundDocs_FundDocs__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "FundDonate": () => (/* reexport safe */ _FundDonate_FundDonate__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var _FundMain_FundMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FundMain/FundMain */ "./src/components/Pages/Fund/FundMain/FundMain.jsx");
/* harmony import */ var _FundAbout_FundAbout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FundAbout/FundAbout */ "./src/components/Pages/Fund/FundAbout/FundAbout.jsx");
/* harmony import */ var _FundFacts_FundFacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FundFacts/FundFacts */ "./src/components/Pages/Fund/FundFacts/FundFacts.jsx");
/* harmony import */ var _FundTeam_FundTeam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FundTeam/FundTeam */ "./src/components/Pages/Fund/FundTeam/FundTeam.jsx");
/* harmony import */ var _FundPhone_FundPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FundPhone/FundPhone */ "./src/components/Pages/Fund/FundPhone/FundPhone.jsx");
/* harmony import */ var _FundCases_FundCases__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FundCases/FundCases */ "./src/components/Pages/Fund/FundCases/FundCases.jsx");
/* harmony import */ var _FundDocs_FundDocs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FundDocs/FundDocs */ "./src/components/Pages/Fund/FundDocs/FundDocs.jsx");
/* harmony import */ var _FundDonate_FundDonate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FundDonate/FundDonate */ "./src/components/Pages/Fund/FundDonate/FundDonate.jsx");









/***/ }),

/***/ "./src/components/Ui/CoverDefault/CoverDefault.jsx":
/*!*********************************************************!*\
  !*** ./src/components/Ui/CoverDefault/CoverDefault.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);





const CoverDefault = ({
  img
}) => {
  const image = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.getImage)(img);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cover-default"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.GatsbyImage, {
    className: "cover-default__image",
    image: image,
    alt: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)('Обкладинка секції', 'Section cover', 'Abschnitt tsover', 'Обложка секции'),
    loading: "eager"
  }));
};

CoverDefault.propTypes = {
  img: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoverDefault);

/***/ }),

/***/ "./src/components/Ui/DefaultSlider/DefaultSlider.jsx":
/*!***********************************************************!*\
  !*** ./src/components/Ui/DefaultSlider/DefaultSlider.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var slick_carousel_slick_slick_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick.scss */ "./node_modules/slick-carousel/slick/slick.scss");
/* harmony import */ var slick_carousel_slick_slick_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InterfaceSystem/InterfaceSystem */ "./src/components/Ui/InterfaceSystem/InterfaceSystem.jsx");





const DefaultSlider = ({
  children
}) => {
  const slider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef(); // function handleAfterChange(index) {
  //   setCurrentSlide(index);
  // }

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // afterChange: handleAfterChange,
    responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }]
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "default-slider__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_slick__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({
    ref: slider
  }, settings, {
    className: 'default-slider'
  }), children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "default-slider__navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "default-slider__navigation--buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_3__.ButtonPrev, {
    hendler: () => slider.current.slickPrev()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_3__.ButtonNext, {
    hendler: () => slider.current.slickNext()
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultSlider);

/***/ }),

/***/ "./src/components/Ui/InterfaceSystem/InterfaceSystem.jsx":
/*!***************************************************************!*\
  !*** ./src/components/Ui/InterfaceSystem/InterfaceSystem.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonNext": () => (/* binding */ ButtonNext),
/* harmony export */   "ButtonPrev": () => (/* binding */ ButtonPrev),
/* harmony export */   "PageWrapper": () => (/* binding */ PageWrapper),
/* harmony export */   "ContentWrapper": () => (/* binding */ ContentWrapper),
/* harmony export */   "SectionDefault": () => (/* binding */ SectionDefault),
/* harmony export */   "StikyGrid": () => (/* binding */ StikyGrid),
/* harmony export */   "StikyGridColumn": () => (/* binding */ StikyGridColumn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg_arrow_right_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../svg/arrow_right.svg */ "./src/svg/arrow_right.svg");
/* harmony import */ var _svg_arrow_right_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_arrow_right_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_arrow_left_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../svg/arrow_left.svg */ "./src/svg/arrow_left.svg");
/* harmony import */ var _svg_arrow_left_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_arrow_left_svg__WEBPACK_IMPORTED_MODULE_2__);
 // import PropTypes from 'prop-types';



const ButtonNext = ({
  hendler
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "slider-button slider-button__next",
    onClick: hendler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_svg_arrow_right_svg__WEBPACK_IMPORTED_MODULE_1___default()), {
    className: "slider-button__icon"
  }));
};
const ButtonPrev = ({
  hendler
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "slider-button slider-button__prev",
    onClick: hendler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_svg_arrow_left_svg__WEBPACK_IMPORTED_MODULE_2___default()), {
    className: "slider-button__icon"
  }));
};
const PageWrapper = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page-wrapper"
  }, children);
};
const ContentWrapper = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content-wrapper"
  }, children);
};
const SectionDefault = ({
  children,
  classes
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: `section ${classes && classes}`
  }, children);
};
const StikyGrid = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "stiky-grid"
  }, children);
};
const StikyGridColumn = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "stiky-grid__column"
  }, children);
}; // InterfaceSystem.propTypes = {};

/***/ }),

/***/ "./src/components/Ui/Language/Language.jsx":
/*!*************************************************!*\
  !*** ./src/components/Ui/Language/Language.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-react-i18next */ "./node_modules/gatsby-plugin-react-i18next/index.js");
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__);



const Language = () => {
  const {
    languages,
    originalPath
  } = (0,gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__.useI18next)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "language"
  }, languages.map(lng => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: lng,
    className: "language-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "language-item__link",
    to: originalPath,
    language: lng
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "language-item__title"
  }, lng)))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Language);

/***/ }),

/***/ "./src/components/Ui/LightBox/LightBox.jsx":
/*!*************************************************!*\
  !*** ./src/components/Ui/LightBox/LightBox.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _svg_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../svg/close.svg */ "./src/svg/close.svg");
/* harmony import */ var _svg_close_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_close_svg__WEBPACK_IMPORTED_MODULE_1__);





const LightBox = ({
  img,
  closeModal,
  goBack,
  goForward,
  selectedImage,
  images,
  showLightbox,
  dinamicImage
}) => {
  const image = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.getImage)(dinamicImage);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: showLightbox ? 'lightbox is-show' : 'lightbox'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "lightbox-overlay",
    "aria-hidden": "true",
    onClick: closeModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "lightbox-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "lightbox-image__wrapper"
  }, dinamicImage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.GatsbyImage, {
    image: image,
    className: "lightBox-image",
    alt: "best foto",
    loading: "lazy"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "article-gallery__image article-gallery__image--cover",
    src: `http://207.154.244.102:1337${img}`,
    alt: 'img',
    loading: "lazy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "light-box-close",
    "aria-label": "Close",
    onClick: closeModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "popup-close__button-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_svg_close_svg__WEBPACK_IMPORTED_MODULE_1___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "light-box__arrow light-box__prev",
    "aria-label": "Prev",
    onClick: goBack,
    disabled: selectedImage === 0
  }, "Prev"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "light-box__arrow light-box__next",
    "aria-label": "Next",
    onClick: goForward,
    disabled: selectedImage === images.length - 1
  }, "Next")));
};

LightBox.propTypes = {
  closeModal: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  goBack: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  goForward: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  selectedImage: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  images: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array),
  showLightbox: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LightBox);

/***/ }),

/***/ "./src/components/Ui/SectionHeader/SectionHeader.jsx":
/*!***********************************************************!*\
  !*** ./src/components/Ui/SectionHeader/SectionHeader.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



const SectionHeader = ({
  title
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "section-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "h2 section-title"
  }, title));
};

SectionHeader.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionHeader);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/63159454.json */ "./public/page-data/sq/d/63159454.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-react-i18next */ "./node_modules/gatsby-plugin-react-i18next/index.js");
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_2__);


/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */




function Seo({
  description,
  meta,
  title
}) {
  const {
    site
  } = _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
    title: title,
    titleTemplate: `%s | ${site.siteMetadata.title}`,
    meta: [{
      name: `description`,
      content: metaDescription
    }, {
      property: `og:title`,
      content: title
    }, {
      property: `og:description`,
      content: metaDescription
    }, {
      property: `og:type`,
      content: `website`
    }, {
      name: `twitter:card`,
      content: `summary`
    }, {
      name: `twitter:creator`,
      content: site.siteMetadata.author
    }, {
      name: `twitter:title`,
      content: title
    }, {
      name: `twitter:description`,
      content: metaDescription
    }].concat(meta)
  });
}

Seo.defaultProps = {
  meta: [],
  description: ``
};
Seo.propTypes = {
  description: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  lang: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  meta: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/db/casesData.js":
/*!*****************************!*\
  !*** ./src/db/casesData.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "casesData": () => (/* binding */ casesData)
/* harmony export */ });
const casesData = [{
  cover: '/image path/',
  title_ua: 'Юлія',
  title_en: 'Julia',
  title_de: 'Julia',
  title_ru: 'Юлия',
  description_ua: '24 роки',
  description_en: '24 years old',
  description_de: '24 Jahre alt',
  description_ru: '24 года',
  slug: '/case-template/'
}, {
  cover: '/image path/',
  title_ua: 'Юлія',
  title_en: 'Julia',
  title_de: 'Julia',
  title_ru: 'Юлия',
  description_ua: '24 роки',
  description_en: '24 years old',
  description_de: '24 Jahre alt',
  description_ru: '24 года',
  slug: '/case-template/'
}, {
  cover: '/image path/',
  title_ua: 'Юлія',
  title_en: 'Julia',
  title_de: 'Julia',
  title_ru: 'Юлия',
  description_ua: '24 роки',
  description_en: '24 years old',
  description_de: '24 Jahre alt',
  description_ru: '24 года',
  slug: '/case-template/'
}, {
  cover: '/image path/',
  title_ua: 'Юлія',
  title_en: 'Julia',
  title_de: 'Julia',
  title_ru: 'Юлия',
  description_ua: '24 роки',
  description_en: '24 years old',
  description_de: '24 Jahre alt',
  description_ru: '24 года',
  slug: '/case-template/'
}, {
  cover: '/image path/',
  title_ua: 'Юлія',
  title_en: 'Julia',
  title_de: 'Julia',
  title_ru: 'Юлия',
  description_ua: '24 роки',
  description_en: '24 years old',
  description_de: '24 Jahre alt',
  description_ru: '24 года',
  slug: '/case-template/'
}, {
  cover: '/image path/',
  title_ua: 'Юлія',
  title_en: 'Julia',
  title_de: 'Julia',
  title_ru: 'Юлия',
  description_ua: '24 роки',
  description_en: '24 years old',
  description_de: '24 Jahre alt',
  description_ru: '24 года',
  slug: '/case-template/'
}];

/***/ }),

/***/ "./src/db/contactsData.js":
/*!********************************!*\
  !*** ./src/db/contactsData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactsData": () => (/* binding */ contactsData)
/* harmony export */ });
const contactsData = {
  phone: '+38 (098) 121-11-11',
  whatsapp: 'https://wa.me/+380981211111',
  viber: 'viber://chat?number=+380981211111',
  mail: 'matolinets.tm@gmail.com',
  address_ua: 'Україна, Київ, Вул. Мічуріна 52 Печерськ',
  address_en: 'Ukraine, Kyiv, St. Michurina 52 Pechersk',
  address_de: 'Ukraine, Kiew, St. Michurina 52 Petschersk',
  address_ru: 'Украина, Киев, Ул. Мичурина 52 Печерск',
  address_link: 'https://goo.gl/maps/J6xUp7cCG6o9KPHLA',
  instagram: 'https://www.instagram.com/dr.matolinets/'
};

/***/ }),

/***/ "./src/db/fundData.js":
/*!****************************!*\
  !*** ./src/db/fundData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fundData": () => (/* binding */ fundData)
/* harmony export */ });
const fundData = {
  main: {
    cover: '/image path/',
    description_ua: 'Фонд Тараса Матолінця “Повернемо Красу”',
    description_en: `Taras Matolinets Foundation "Let's Bring Back Beauty"`,
    description_de: `Taras Matolinets Stiftung „Let’s Bring Back Beauty“`,
    description_ru: 'Фонд Тараса Матолинца "Вернем Красоту',
    title_ua: 'Допомагаємо повернути \nвтрачену красу внаслідок \nвоєнних дій',
    title_en: 'We help to restore \nlost beauty as a result of \nmilitary operations',
    title_de: 'Wir helfen bei der Rückkehr \nverlorene Schönheit dadurch \nmilitärische aktionen',
    title_ru: 'Помогаем вернуть \nутраченную красоту в результате \nвоенных действий'
  },
  about: {
    title_ua: 'Про фонд',
    title_en: 'About the fund',
    title_de: 'Über den Fonds',
    title_ru: 'О фонде',
    items: [{
      title_ua: 'Кому допомагаємо?',
      title_en: 'Who do we help?',
      title_de: 'Wem helfen wir?',
      title_ru: 'Кому помогаем?',
      description_ua: 'Допомагаємо повернути втрачену красу пацієнтам постраждалим внаслідок військових дій та збройної агресії РФ проти України. \n\nА також людям із вродженими чи набутими естетичними недосконалостями.',
      description_en: 'We help restore lost beauty to patients affected by military operations and armed aggression of the Russian Federation against Ukraine. \n\nAnd also to people with congenital or acquired aesthetic imperfections.',
      description_de: 'Wir helfen Patienten, die von Militäroperationen und bewaffneten Aggressionen der Russischen Föderation gegen die Ukraine betroffen sind, verlorene Schönheit wiederherzustellen. \n\nUnd auch für Menschen mit angeborenen oder erworbenen Schönheitsfehlern.',
      description_ru: 'Помогаем вернуть утраченную красоту пациентам пострадавшим в результате военных действий и вооруженной агрессии РФ против Украины. \n\nА также людям с врожденными или приобретенными эстетическими несовершенствами.'
    }, {
      title_ua: 'Чим допомогаємо?',
      title_en: 'How do we help?',
      title_de: 'Wie helfen wir?',
      title_ru: 'Чем помогаем?',
      description_ua: 'Проводимо естетичні,пластичні, косметологічні оперативні втручання та безопераційні  косметологічні послуги. Підтримуємо психологічно.',
      description_en: 'We perform aesthetic, plastic, cosmetology surgical interventions and non-surgical cosmetology services. We support psychologically.',
      description_de: 'Wir führen ästhetische, plastische, kosmetische chirurgische Eingriffe und nicht-chirurgische kosmetische Dienstleistungen durch. Wir unterstützen psychologisch.',
      description_ru: 'Проводим эстетические, пластические, косметологические оперативные вмешательства и безоперационные косметологические услуги. Поддерживаем психологически.'
    }, {
      title_ua: 'Хто ми?',
      title_en: 'Who are we?',
      title_de: 'Wer sind wir?',
      title_ru: 'Кто мы?',
      description_ua: 'Команда фахівців: відомі пластичні, реконструктивні, естетичні хірурги України, реабілітологи, косметологи, фізіотерапевти, психологи тощо',
      description_en: 'A team of specialists: well-known plastic, reconstructive, aesthetic surgeons of Ukraine, rehabilitation specialists, cosmetologists, physiotherapists, psychologists, etc.',
      description_de: 'Ein Team von Spezialisten: bekannte plastische, rekonstruktive, ästhetische Chirurgen der Ukraine, Rehabilitationsspezialisten, Kosmetiker, Physiotherapeuten, Psychologen usw.',
      description_ru: 'Команда специалистов: известные пластические, реконструктивные, эстетические хирурги Украины, реабилитологи, косметологи, физиотерапевты, психологи и т.д.'
    }, {
      title_ua: 'Як Ви можете допомогти нам?',
      title_en: 'How can you help us?',
      title_de: 'Wie können Sie uns helfen?',
      title_ru: 'Как вы можете помочь нам?',
      description_ua: 'Ми збираємо кошти на медичні витрати, що підуть на операції по відновленню краси, зору, емоційного стану пацієнтів, а також життєво важливі програми для людей в України, які постраждали від війни.',
      description_en: 'We collect funds for medical expenses, which will go to operations to restore the beauty, vision, emotional state of patients, as well as vital programs for people in Ukraine who have suffered from the war.',
      description_de: 'Wir sammeln Mittel für medizinische Ausgaben, die für Operationen zur Wiederherstellung der Schönheit, des Sehvermögens und des emotionalen Zustands der Patienten sowie für lebenswichtige Programme für Menschen in der Ukraine verwendet werden, die unter dem Krieg gelitten haben.',
      description_ru: 'Мы собираем средства на медицинские расходы, которые пойдут на операции по восстановлению красоты, зрения, эмоционального состояния пациентов, а также жизненно важные программы для пострадавших от войны людей в Украине.'
    }]
  },
  facts: {
    cover: '/image path/',
    items: [{
      marker: '26',
      title_ua: 'Фахівців',
      title_en: 'Specialists',
      title_de: 'Spezialisten',
      title_ru: 'Специалистов',
      description_ua: 'Працюють над поверненням краси в нашому фонді',
      description_en: 'They are working on the return of beauty in our fund',
      description_de: 'Sie arbeiten an der Rückkehr der Schönheit in unsere Stiftung',
      description_ru: 'Работают над возвращением красоты в нашем фонде'
    }, {
      marker: '8',
      title_ua: 'Закладів',
      title_en: 'Institutions',
      title_de: 'Institutionen',
      title_ru: 'Заведений',
      description_ua: 'Приймають участь в проведенні процедур та операцій',
      description_en: 'Participate in procedures and operations',
      description_de: 'Beteiligen Sie sich an Verfahren und Operationen',
      description_ru: 'Принимают участие в проведении процедур и операций'
    }, {
      marker: '5k+',
      title_ua: 'Постраждалих',
      title_en: 'Victims',
      title_de: 'Die Opfer',
      title_ru: 'Пострадавших',
      description_ua: 'Потребують нашої з Вами допомоги',
      description_en: 'They need your help',
      description_de: 'Wir brauchen deine Hilfe',
      description_ru: 'Нуждаются в нашей с Вами помощи'
    }, {
      marker: '18+',
      title_ua: 'Мільйонів грн',
      title_en: 'Millions of UAH',
      title_de: 'Millionen UAH',
      title_ru: 'Миллионов грн',
      description_ua: 'Приблизна сума потрібна на медичні витрати',
      description_en: 'An approximate amount is needed for medical expenses',
      description_de: 'Für Krankheitskosten wird ein ungefährer Betrag benötigt',
      description_ru: 'Приблизительная сумма необходима на медицинские расходы'
    }]
  },
  team: {
    title_ua: 'Команда фонду',
    title_en: 'Foundation team',
    title_de: 'Stiftungsteam',
    title_ru: 'Команда фонда',
    items: [{
      cover: '/image path/',
      title_ua: 'Матолінець Тарас Михайлович',
      title_en: 'Taras Mykhailovych Matolinets',
      title_de: 'Taras Mykhailovych Matolinets',
      title_ru: 'Матолинец Тарас Михайлович',
      description_ua: 'Кандидат медичних наук, пластичний хірург Вищої категорії, член Всеукраїнської Асоціації Пластичних, Реконструктивних та Естетичних Хірургів.',
      description_en: 'Candidate of Medical Sciences, plastic surgeon of the highest category, member of the All-Ukrainian Association of Plastic, Reconstructive and Aesthetic Surgeons.',
      description_de: 'Kandidat der medizinischen Wissenschaften, plastischer Chirurg der höchsten Kategorie, Mitglied der Allukrainischen Vereinigung der plastischen, rekonstruktiven und ästhetischen Chirurgen.',
      description_ru: 'Кандидат медицинских наук, пластический хирург Высшей категории, член Всеукраинской Ассоциации Пластических, Реконструктивных и Эстетических Хирургов.'
    }, {
      cover: '/image path/',
      title_ua: 'Матолінець Тарас Михайлович',
      title_en: 'Taras Mykhailovych Matolinets',
      title_de: 'Taras Mykhailovych Matolinets',
      title_ru: 'Матолинец Тарас Михайлович',
      description_ua: 'Кандидат медичних наук, пластичний хірург Вищої категорії, член Всеукраїнської Асоціації Пластичних, Реконструктивних та Естетичних Хірургів.',
      description_en: 'Candidate of Medical Sciences, plastic surgeon of the highest category, member of the All-Ukrainian Association of Plastic, Reconstructive and Aesthetic Surgeons.',
      description_de: 'Kandidat der medizinischen Wissenschaften, plastischer Chirurg der höchsten Kategorie, Mitglied der Allukrainischen Vereinigung der plastischen, rekonstruktiven und ästhetischen Chirurgen.',
      description_ru: 'Кандидат медицинских наук, пластический хирург Высшей категории, член Всеукраинской Ассоциации Пластических, Реконструктивных и Эстетических Хирургов.'
    }, {
      cover: '/image path/',
      title_ua: 'Матолінець Тарас Михайлович',
      title_en: 'Taras Mykhailovych Matolinets',
      title_de: 'Taras Mykhailovych Matolinets',
      title_ru: 'Матолинец Тарас Михайлович',
      description_ua: 'Кандидат медичних наук, пластичний хірург Вищої категорії, член Всеукраїнської Асоціації Пластичних, Реконструктивних та Естетичних Хірургів.',
      description_en: 'Candidate of Medical Sciences, plastic surgeon of the highest category, member of the All-Ukrainian Association of Plastic, Reconstructive and Aesthetic Surgeons.',
      description_de: 'Kandidat der medizinischen Wissenschaften, plastischer Chirurg der höchsten Kategorie, Mitglied der Allukrainischen Vereinigung der plastischen, rekonstruktiven und ästhetischen Chirurgen.',
      description_ru: 'Кандидат медицинских наук, пластический хирург Высшей категории, член Всеукраинской Ассоциации Пластических, Реконструктивных и Эстетических Хирургов.'
    }, {
      cover: '/image path/',
      title_ua: 'Матолінець Тарас Михайлович',
      title_en: 'Taras Mykhailovych Matolinets',
      title_de: 'Taras Mykhailovych Matolinets',
      title_ru: 'Матолинец Тарас Михайлович',
      description_ua: 'Кандидат медичних наук, пластичний хірург Вищої категорії, член Всеукраїнської Асоціації Пластичних, Реконструктивних та Естетичних Хірургів.',
      description_en: 'Candidate of Medical Sciences, plastic surgeon of the highest category, member of the All-Ukrainian Association of Plastic, Reconstructive and Aesthetic Surgeons.',
      description_de: 'Kandidat der medizinischen Wissenschaften, plastischer Chirurg der höchsten Kategorie, Mitglied der Allukrainischen Vereinigung der plastischen, rekonstruktiven und ästhetischen Chirurgen.',
      description_ru: 'Кандидат медицинских наук, пластический хирург Высшей категории, член Всеукраинской Ассоциации Пластических, Реконструктивных и Эстетических Хирургов.'
    }, {
      cover: '/image path/',
      title_ua: 'Матолінець Тарас Михайлович',
      title_en: 'Taras Mykhailovych Matolinets',
      title_de: 'Taras Mykhailovych Matolinets',
      title_ru: 'Матолинец Тарас Михайлович',
      description_ua: 'Кандидат медичних наук, пластичний хірург Вищої категорії, член Всеукраїнської Асоціації Пластичних, Реконструктивних та Естетичних Хірургів.',
      description_en: 'Candidate of Medical Sciences, plastic surgeon of the highest category, member of the All-Ukrainian Association of Plastic, Reconstructive and Aesthetic Surgeons.',
      description_de: 'Kandidat der medizinischen Wissenschaften, plastischer Chirurg der höchsten Kategorie, Mitglied der Allukrainischen Vereinigung der plastischen, rekonstruktiven und ästhetischen Chirurgen.',
      description_ru: 'Кандидат медицинских наук, пластический хирург Высшей категории, член Всеукраинской Ассоциации Пластических, Реконструктивных и Эстетических Хирургов.'
    }, {
      cover: '/image path/',
      title_ua: 'Матолінець Тарас Михайлович',
      title_en: 'Taras Mykhailovych Matolinets',
      title_de: 'Taras Mykhailovych Matolinets',
      title_ru: 'Матолинец Тарас Михайлович',
      description_ua: 'Кандидат медичних наук, пластичний хірург Вищої категорії, член Всеукраїнської Асоціації Пластичних, Реконструктивних та Естетичних Хірургів.',
      description_en: 'Candidate of Medical Sciences, plastic surgeon of the highest category, member of the All-Ukrainian Association of Plastic, Reconstructive and Aesthetic Surgeons.',
      description_de: 'Kandidat der medizinischen Wissenschaften, plastischer Chirurg der höchsten Kategorie, Mitglied der Allukrainischen Vereinigung der plastischen, rekonstruktiven und ästhetischen Chirurgen.',
      description_ru: 'Кандидат медицинских наук, пластический хирург Высшей категории, член Всеукраинской Ассоциации Пластических, Реконструктивных и Эстетических Хирургов.'
    }]
  },
  tell_line: {
    title_ua: 'Безкоштовна телефонна лінія',
    title_en: 'Free phone line',
    title_de: 'Kostenlose Telefonleitung',
    title_ru: 'Бесплатная телефонная линия',
    phone: '0-800-507-309',
    description_ua: 'Консультуємо у питаннях щодо відновлення зовнішності постраждалим внаслідок військових дій РФ проти України, а також надання психологічної допомоги.',
    description_en: 'We advise on issues related to restoring the appearance of victims of the military operations of the Russian Federation against Ukraine, as well as providing psychological assistance.',
    description_de: 'Wir beraten in Fragen im Zusammenhang mit der Wiederherstellung des Aussehens von Opfern der Militäroperationen der Russischen Föderation gegen die Ukraine sowie bei der Bereitstellung psychologischer Hilfe.',
    description_ru: 'Консультируем в вопросах восстановления внешности пострадавшим в результате военных действий РФ против Украины, а также оказания психологической помощи.'
  },
  cases: {
    title_ua: 'Ми вже допомагаємо',
    title_en: 'We are already helping',
    title_de: 'Wir helfen schon',
    title_ru: 'Мы уже помогаем'
  },
  documents: {
    title_ua: 'Документи Фонду',
    title_en: 'Fund documents',
    title_de: 'Fondsdokumente',
    title_ru: 'Документы Фонда',
    items: [{
      img: '/image path/'
    }, {
      img: '/image path/'
    }, {
      img: '/image path/'
    }, {
      img: '/image path/'
    }, {
      img: '/image path/'
    }, {
      img: '/image path/'
    }, {
      img: '/image path/'
    }]
  },
  donate: {
    title_ua: 'Публічний збір \nблагодійних пожертв',
    title_en: 'Public collection \nof charitable donations',
    title_de: 'Öffentliche Sammlung \nvon Spenden für wohltätige Zwecke',
    title_ru: 'Публичный сбор \nблаготворительных пожертвований',
    qr_code: '/image path/',
    items: [{
      id: 'tm0987612',
      marker_ua: 'IBAN:',
      marker_en: 'IBAN:',
      marker_de: 'IBAN:',
      marker_ru: 'IBAN:',
      value_ua: 'UA843000010000000047330992708',
      value_en: 'UA843000010000000047330992708',
      value_de: 'UA843000010000000047330992708',
      value_ru: 'UA843000010000000047330992708'
    }, {
      id: 'tm09885676',
      marker_ua: 'ЄДРПОУ:',
      marker_en: 'USREOU:',
      marker_de: 'USREOU:',
      marker_ru: 'USREOU:',
      value_ua: '44818121',
      value_en: '44818121',
      value_de: '44818121',
      value_ru: '44818121'
    }, {
      id: 'tm09883455',
      marker_ua: 'Отримувач:',
      marker_en: 'Recipient:',
      marker_de: 'Empfänger:',
      marker_ru: 'Получатель:',
      value_ua: 'Благодійна Організація «Фонд Тараса Матолінця «Повернемо Красу»',
      value_en: `Charitable Organization "Taras Matolinets Foundation "Let's Bring Back Beauty"`,
      value_de: `Wohltätigkeitsorganisation "Taras Matolinets Foundation "Let's Bring Back Beauty"`,
      value_ru: 'Благотворительная Организация «Фонд Тараса Матолинца «Вернем Красоту»'
    }]
  }
};

/***/ }),

/***/ "./src/db/menuData.js":
/*!****************************!*\
  !*** ./src/db/menuData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuData": () => (/* binding */ menuData),
/* harmony export */   "servicesFooterData": () => (/* binding */ servicesFooterData)
/* harmony export */ });
const menuData = [{
  link: '/',
  title_ua: 'Головна',
  title_en: 'Home',
  title_de: 'Startseite',
  title_ru: 'Главная'
}, {
  link: '/about-doctor/',
  title_ua: 'Про Доктора',
  title_en: 'About Doctor',
  title_de: 'Über Doktor',
  title_ru: 'О Докторе'
}, {
  link: '/services/',
  title_ua: 'Послуги',
  title_en: 'Services',
  title_de: 'Dienstleistungen',
  title_ru: 'Услуги'
}, {
  link: '/works/',
  title_ua: 'Роботи',
  title_en: 'Works',
  title_de: 'Arbeit',
  title_ru: 'Работы'
}, {
  link: '/price/',
  title_ua: 'Прайс',
  title_en: 'Price',
  title_de: 'Preis',
  title_ru: 'Прайс'
}, {
  link: '/fund/',
  title_ua: 'Фонд',
  title_en: 'Fund',
  title_de: 'Stiftung',
  title_ru: 'Фонд'
}, {
  link: '/contacts/',
  title_ua: 'Контакти',
  title_en: 'Contacts',
  title_de: 'Kontakte',
  title_ru: 'Контакты'
}];
const servicesFooterData = [{
  link: '/services/',
  title_ua: 'Усі послуги',
  title_en: 'All services',
  title_de: 'Alle Dienstleistungen',
  title_ru: 'Все услуги'
}, {
  link: '/mammoplasty/',
  title_ua: 'Мамопластика',
  title_en: 'Mammoplasty',
  title_de: 'Mammoplastik',
  title_ru: 'Маммопластика'
}, {
  link: '/rhinoplasty/',
  title_ua: 'Ринопластика',
  title_en: 'Rhinoplasty',
  title_de: 'Nasenkorrektur',
  title_ru: 'Ринопластика'
}, {
  link: '/liposuction/',
  title_ua: 'Ліпосакція',
  title_en: 'Liposuction',
  title_de: 'Fettabsaugung',
  title_ru: 'Липосакция'
}, {
  link: '/services/',
  title_ua: 'Хірургія обличчя',
  title_en: 'Facial surgery',
  title_de: 'Gesichtschirurgie',
  title_ru: 'Хирургия лица'
}];

/***/ }),

/***/ "./src/hooks/useLanguage.js":
/*!**********************************!*\
  !*** ./src/hooks/useLanguage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useLanguage": () => (/* binding */ useLanguage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-react-i18next */ "./node_modules/gatsby-plugin-react-i18next/index.js");
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__);


const useLanguage = (ukr, eng, de, rus) => {
  const {
    i18n: {
      language
    }
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__.I18nContext);

  if (language === 'ua') {
    return ukr;
  } else if (language === 'ru') {
    return rus;
  } else if (language === 'de') {
    return de;
  } else {
    return eng;
  }
};

/***/ }),

/***/ "./src/hooks/useScroll.js":
/*!********************************!*\
  !*** ./src/hooks/useScroll.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useScroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useScroll() {
  const {
    0: scrollY,
    1: setScrollY
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function watchScroll() {
      window.addEventListener('scroll', logit);
    }

    watchScroll();
    return () => {
      window.removeEventListener('scroll', logit);
    };
  });
  return scrollY;
}

/***/ }),

/***/ "./src/pages/fund.js":
/*!***************************!*\
  !*** ./src/pages/fund.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_styles_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.sass */ "./src/styles/styles.sass");
/* harmony import */ var _styles_styles_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _db_fundData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/fundData */ "./src/db/fundData.js");
/* harmony import */ var _db_casesData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../db/casesData */ "./src/db/casesData.js");
/* harmony import */ var _components_Layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout/layout */ "./src/components/Layout/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var _components_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Ui/InterfaceSystem/InterfaceSystem */ "./src/components/Ui/InterfaceSystem/InterfaceSystem.jsx");
/* harmony import */ var _components_Pages_Fund__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Pages/Fund */ "./src/components/Pages/Fund/index.js");

// import { useLanguage } from '../hooks/useLanguage';








const FundPage = () => {
  const {
    main,
    about,
    facts,
    team,
    tell_line: tell,
    cases,
    documents,
    donate
  } = _db_fundData__WEBPACK_IMPORTED_MODULE_2__.fundData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cls: 'fund'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_seo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: 'Dr.Matolinets',
    description: 'Dr.Matolinets'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_6__.PageWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Pages_Fund__WEBPACK_IMPORTED_MODULE_7__.FundMain, {
    main: main
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Pages_Fund__WEBPACK_IMPORTED_MODULE_7__.FundAbout, {
    about: about
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Pages_Fund__WEBPACK_IMPORTED_MODULE_7__.FundFacts, {
    facts: facts
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Pages_Fund__WEBPACK_IMPORTED_MODULE_7__.FundTeam, {
    team: team
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Pages_Fund__WEBPACK_IMPORTED_MODULE_7__.FundPhone, {
    phone: tell
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Pages_Fund__WEBPACK_IMPORTED_MODULE_7__.FundCases, {
    cases: cases,
    items: _db_casesData__WEBPACK_IMPORTED_MODULE_3__.casesData
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Pages_Fund__WEBPACK_IMPORTED_MODULE_7__.FundDocs, {
    docs: documents
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Pages_Fund__WEBPACK_IMPORTED_MODULE_7__.FundDonate, {
    donate: donate
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FundPage);
const query = "2059891297";

/***/ }),

/***/ "./node_modules/json2mq/index.js":
/*!***************************************!*\
  !*** ./node_modules/json2mq/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var camel2hyphen = __webpack_require__(/*! string-convert/camel2hyphen */ "./node_modules/string-convert/camel2hyphen.js");

var isDimension = function (feature) {
  var re = /[height|width]$/;
  return re.test(feature);
};

var obj2mq = function (obj) {
  var mq = '';
  var features = Object.keys(obj);
  features.forEach(function (feature, index) {
    var value = obj[feature];
    feature = camel2hyphen(feature);
    // Add px to dimension features
    if (isDimension(feature) && typeof value === 'number') {
      value = value + 'px';
    }
    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += 'not ' + feature;
    } else {
      mq += '(' + feature + ': ' + value + ')';
    }
    if (index < features.length-1) {
      mq += ' and '
    }
  });
  return mq;
};

var json2mq = function (query) {
  var mq = '';
  if (typeof query === 'string') {
    return query;
  }
  // Handling array of media queries
  if (query instanceof Array) {
    query.forEach(function (q, index) {
      mq += obj2mq(q);
      if (index < query.length-1) {
        mq += ', '
      }
    });
    return mq;
  }
  // Handling single media query
  return obj2mq(query);
};

module.exports = json2mq;

/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.scss":
/*!******************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.scss ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/styles.sass":
/*!********************************!*\
  !*** ./src/styles/styles.sass ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-responsive/dist/react-responsive.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-responsive/dist/react-responsive.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! react */ "react"));
	else {}
})(this, (__WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
  !*** ./node_modules/css-mediaquery/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

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

/***/ "./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_6053__) => {

"use strict";
__nested_webpack_require_6053__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_6053__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hyphenateStyleName);


/***/ }),

/***/ "./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
  !*** ./node_modules/matchmediaquery/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_7064__) => {

"use strict";


var staticMatch = (__nested_webpack_require_7064__(/*! css-mediaquery */ "./node_modules/css-mediaquery/index.js").match);
var dynamicMatch = typeof window !== 'undefined' ? window.matchMedia : null;

// our fake MediaQueryList
function Mql(query, values, forceStatic){
  var self = this;
  if(dynamicMatch && !forceStatic){
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

function matchMedia(query, values, forceStatic){
  return new Mql(query, values, forceStatic);
}

module.exports = matchMedia;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_10944__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __nested_webpack_require_10944__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __nested_webpack_require_10944__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_15184__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __nested_webpack_require_15184__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __nested_webpack_require_15184__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __nested_webpack_require_15184__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __nested_webpack_require_15184__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __nested_webpack_require_15184__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (  true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
        true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_38303__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __nested_webpack_require_38303__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __nested_webpack_require_38303__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_47361__) => {

"use strict";


if (false) {} else {
  module.exports = __nested_webpack_require_47361__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __nested_webpack_require_47861__) => {

"use strict";
__nested_webpack_require_47861__.r(__webpack_exports__);
/* harmony export */ __nested_webpack_require_47861__.d(__webpack_exports__, {
/* harmony export */   "shallowEqualArrays": () => (/* binding */ shallowEqualArrays),
/* harmony export */   "shallowEqualObjects": () => (/* binding */ shallowEqualObjects)
/* harmony export */ });
function shallowEqualObjects(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (!objA || !objB) {
    return false;
  }

  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);
  var len = aKeys.length;

  if (bKeys.length !== len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    var key = aKeys[i];

    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
      return false;
    }
  }

  return true;
}

function shallowEqualArrays(arrA, arrB) {
  if (arrA === arrB) {
    return true;
  }

  if (!arrA || !arrB) {
    return false;
  }

  var len = arrA.length;

  if (arrB.length !== len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }

  return true;
}




/***/ }),

/***/ "./src/Component.ts":
/*!**************************!*\
  !*** ./src/Component.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_49201__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var useMediaQuery_1 = __importDefault(__nested_webpack_require_49201__(/*! ./useMediaQuery */ "./src/useMediaQuery.ts"));
var MediaQuery = function (_a) {
    var children = _a.children, device = _a.device, onChange = _a.onChange, settings = __rest(_a, ["children", "device", "onChange"]);
    var matches = (0, useMediaQuery_1.default)(settings, device, onChange);
    if (typeof children === 'function') {
        return children(matches);
    }
    return matches ? children : null;
};
exports["default"] = MediaQuery;


/***/ }),

/***/ "./src/Context.ts":
/*!************************!*\
  !*** ./src/Context.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_50614__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __nested_webpack_require_50614__(/*! react */ "react");
var Context = (0, react_1.createContext)(undefined);
exports["default"] = Context;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_51031__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Context = exports.toQuery = exports.useMediaQuery = exports["default"] = void 0;
var useMediaQuery_1 = __importDefault(__nested_webpack_require_51031__(/*! ./useMediaQuery */ "./src/useMediaQuery.ts"));
exports.useMediaQuery = useMediaQuery_1.default;
var Component_1 = __importDefault(__nested_webpack_require_51031__(/*! ./Component */ "./src/Component.ts"));
exports["default"] = Component_1.default;
var toQuery_1 = __importDefault(__nested_webpack_require_51031__(/*! ./toQuery */ "./src/toQuery.ts"));
exports.toQuery = toQuery_1.default;
var Context_1 = __importDefault(__nested_webpack_require_51031__(/*! ./Context */ "./src/Context.ts"));
exports.Context = Context_1.default;


/***/ }),

/***/ "./src/mediaQuery.ts":
/*!***************************!*\
  !*** ./src/mediaQuery.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_52106__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var prop_types_1 = __importDefault(__nested_webpack_require_52106__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var stringOrNumber = prop_types_1.default.oneOfType([
    prop_types_1.default.string,
    prop_types_1.default.number
]);
// media types
var types = {
    all: prop_types_1.default.bool,
    grid: prop_types_1.default.bool,
    aural: prop_types_1.default.bool,
    braille: prop_types_1.default.bool,
    handheld: prop_types_1.default.bool,
    print: prop_types_1.default.bool,
    projection: prop_types_1.default.bool,
    screen: prop_types_1.default.bool,
    tty: prop_types_1.default.bool,
    tv: prop_types_1.default.bool,
    embossed: prop_types_1.default.bool
};
// properties that match media queries
var matchers = {
    orientation: prop_types_1.default.oneOf([
        'portrait',
        'landscape'
    ]),
    scan: prop_types_1.default.oneOf([
        'progressive',
        'interlace'
    ]),
    aspectRatio: prop_types_1.default.string,
    deviceAspectRatio: prop_types_1.default.string,
    height: stringOrNumber,
    deviceHeight: stringOrNumber,
    width: stringOrNumber,
    deviceWidth: stringOrNumber,
    color: prop_types_1.default.bool,
    colorIndex: prop_types_1.default.bool,
    monochrome: prop_types_1.default.bool,
    resolution: stringOrNumber,
    type: Object.keys(types)
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var type = matchers.type, featureMatchers = __rest(matchers
// media features
, ["type"]);
// media features
var features = __assign({ minAspectRatio: prop_types_1.default.string, maxAspectRatio: prop_types_1.default.string, minDeviceAspectRatio: prop_types_1.default.string, maxDeviceAspectRatio: prop_types_1.default.string, minHeight: stringOrNumber, maxHeight: stringOrNumber, minDeviceHeight: stringOrNumber, maxDeviceHeight: stringOrNumber, minWidth: stringOrNumber, maxWidth: stringOrNumber, minDeviceWidth: stringOrNumber, maxDeviceWidth: stringOrNumber, minColor: prop_types_1.default.number, maxColor: prop_types_1.default.number, minColorIndex: prop_types_1.default.number, maxColorIndex: prop_types_1.default.number, minMonochrome: prop_types_1.default.number, maxMonochrome: prop_types_1.default.number, minResolution: stringOrNumber, maxResolution: stringOrNumber }, featureMatchers);
var all = __assign(__assign({}, types), features);
exports["default"] = {
    all: all,
    types: types,
    matchers: matchers,
    features: features
};


/***/ }),

/***/ "./src/toQuery.ts":
/*!************************!*\
  !*** ./src/toQuery.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_55857__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var hyphenate_style_name_1 = __importDefault(__nested_webpack_require_55857__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js"));
var mediaQuery_1 = __importDefault(__nested_webpack_require_55857__(/*! ./mediaQuery */ "./src/mediaQuery.ts"));
var negate = function (cond) { return "not ".concat(cond); };
var keyVal = function (k, v) {
    var realKey = (0, hyphenate_style_name_1.default)(k);
    // px shorthand
    if (typeof v === 'number') {
        v = "".concat(v, "px");
    }
    if (v === true) {
        return realKey;
    }
    if (v === false) {
        return negate(realKey);
    }
    return "(".concat(realKey, ": ").concat(v, ")");
};
var join = function (conds) { return conds.join(' and '); };
var toQuery = function (obj) {
    var rules = [];
    Object.keys(mediaQuery_1.default.all).forEach(function (k) {
        var v = obj[k];
        if (v != null) {
            rules.push(keyVal(k, v));
        }
    });
    return join(rules);
};
exports["default"] = toQuery;


/***/ }),

/***/ "./src/useMediaQuery.ts":
/*!******************************!*\
  !*** ./src/useMediaQuery.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_57295__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __nested_webpack_require_57295__(/*! react */ "react");
var matchmediaquery_1 = __importDefault(__nested_webpack_require_57295__(/*! matchmediaquery */ "./node_modules/matchmediaquery/index.js"));
var hyphenate_style_name_1 = __importDefault(__nested_webpack_require_57295__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js"));
var shallow_equal_1 = __nested_webpack_require_57295__(/*! shallow-equal */ "./node_modules/shallow-equal/dist/index.esm.js");
var toQuery_1 = __importDefault(__nested_webpack_require_57295__(/*! ./toQuery */ "./src/toQuery.ts"));
var Context_1 = __importDefault(__nested_webpack_require_57295__(/*! ./Context */ "./src/Context.ts"));
var makeQuery = function (settings) { return settings.query || (0, toQuery_1.default)(settings); };
var hyphenateKeys = function (obj) {
    if (!obj)
        return undefined;
    var keys = Object.keys(obj);
    return keys.reduce(function (result, key) {
        result[(0, hyphenate_style_name_1.default)(key)] = obj[key];
        return result;
    }, {});
};
var useIsUpdate = function () {
    var ref = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(function () {
        ref.current = true;
    }, []);
    return ref.current;
};
var useDevice = function (deviceFromProps) {
    var deviceFromContext = (0, react_1.useContext)(Context_1.default);
    var getDevice = function () {
        return hyphenateKeys(deviceFromProps) || hyphenateKeys(deviceFromContext);
    };
    var _a = (0, react_1.useState)(getDevice), device = _a[0], setDevice = _a[1];
    (0, react_1.useEffect)(function () {
        var newDevice = getDevice();
        if (!(0, shallow_equal_1.shallowEqualObjects)(device, newDevice)) {
            setDevice(newDevice);
        }
    }, [deviceFromProps, deviceFromContext]);
    return device;
};
var useQuery = function (settings) {
    var getQuery = function () { return makeQuery(settings); };
    var _a = (0, react_1.useState)(getQuery), query = _a[0], setQuery = _a[1];
    (0, react_1.useEffect)(function () {
        var newQuery = getQuery();
        if (query !== newQuery) {
            setQuery(newQuery);
        }
    }, [settings]);
    return query;
};
var useMatchMedia = function (query, device) {
    var getMatchMedia = function () { return (0, matchmediaquery_1.default)(query, device || {}, !!device); };
    var _a = (0, react_1.useState)(getMatchMedia), mq = _a[0], setMq = _a[1];
    var isUpdate = useIsUpdate();
    (0, react_1.useEffect)(function () {
        if (isUpdate) {
            // skip on mounting, it has already been set
            var newMq_1 = getMatchMedia();
            setMq(newMq_1);
            return function () {
                if (newMq_1) {
                    newMq_1.dispose();
                }
            };
        }
    }, [query, device]);
    return mq;
};
var useMatches = function (mediaQuery) {
    var _a = (0, react_1.useState)(mediaQuery.matches), matches = _a[0], setMatches = _a[1];
    (0, react_1.useEffect)(function () {
        var updateMatches = function (ev) {
            setMatches(ev.matches);
        };
        mediaQuery.addListener(updateMatches);
        setMatches(mediaQuery.matches);
        return function () {
            mediaQuery.removeListener(updateMatches);
        };
    }, [mediaQuery]);
    return matches;
};
var useMediaQuery = function (settings, device, onChange) {
    var deviceSettings = useDevice(device);
    var query = useQuery(settings);
    if (!query)
        throw new Error('Invalid or missing MediaQuery!');
    var mq = useMatchMedia(query, deviceSettings);
    var matches = useMatches(mq);
    var isUpdate = useIsUpdate();
    (0, react_1.useEffect)(function () {
        if (isUpdate && onChange) {
            onChange(matches);
        }
    }, [matches]);
    (0, react_1.useEffect)(function () { return function () {
        if (mq) {
            mq.dispose();
        }
    }; }, []);
    return matches;
};
exports["default"] = useMediaQuery;


/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_62097__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_62097__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_62097__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_62097__.o(definition, key) && !__nested_webpack_require_62097__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_62097__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_62097__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nested_webpack_require_62097__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=react-responsive.js.map

/***/ }),

/***/ "./node_modules/react-slick/lib/arrows.js":
/*!************************************************!*\
  !*** ./node_modules/react-slick/lib/arrows.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NextArrow = exports.PrevArrow = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _innerSliderUtils = __webpack_require__(/*! ./utils/innerSliderUtils */ "./node_modules/react-slick/lib/utils/innerSliderUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PrevArrow = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(PrevArrow, _React$PureComponent);

  var _super = _createSuper(PrevArrow);

  function PrevArrow() {
    _classCallCheck(this, PrevArrow);

    return _super.apply(this, arguments);
  }

  _createClass(PrevArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }

      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var prevClasses = {
        "slick-arrow": true,
        "slick-prev": true
      };
      var prevHandler = this.clickHandler.bind(this, {
        message: "previous"
      });

      if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
        prevClasses["slick-disabled"] = true;
        prevHandler = null;
      }

      var prevArrowProps = {
        key: "0",
        "data-role": "none",
        className: (0, _classnames["default"])(prevClasses),
        style: {
          display: "block"
        },
        onClick: prevHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var prevArrow;

      if (this.props.prevArrow) {
        prevArrow = /*#__PURE__*/_react["default"].cloneElement(this.props.prevArrow, _objectSpread(_objectSpread({}, prevArrowProps), customProps));
      } else {
        prevArrow = /*#__PURE__*/_react["default"].createElement("button", _extends({
          key: "0",
          type: "button"
        }, prevArrowProps), " ", "Previous");
      }

      return prevArrow;
    }
  }]);

  return PrevArrow;
}(_react["default"].PureComponent);

exports.PrevArrow = PrevArrow;

var NextArrow = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(NextArrow, _React$PureComponent2);

  var _super2 = _createSuper(NextArrow);

  function NextArrow() {
    _classCallCheck(this, NextArrow);

    return _super2.apply(this, arguments);
  }

  _createClass(NextArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }

      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var nextClasses = {
        "slick-arrow": true,
        "slick-next": true
      };
      var nextHandler = this.clickHandler.bind(this, {
        message: "next"
      });

      if (!(0, _innerSliderUtils.canGoNext)(this.props)) {
        nextClasses["slick-disabled"] = true;
        nextHandler = null;
      }

      var nextArrowProps = {
        key: "1",
        "data-role": "none",
        className: (0, _classnames["default"])(nextClasses),
        style: {
          display: "block"
        },
        onClick: nextHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var nextArrow;

      if (this.props.nextArrow) {
        nextArrow = /*#__PURE__*/_react["default"].cloneElement(this.props.nextArrow, _objectSpread(_objectSpread({}, nextArrowProps), customProps));
      } else {
        nextArrow = /*#__PURE__*/_react["default"].createElement("button", _extends({
          key: "1",
          type: "button"
        }, nextArrowProps), " ", "Next");
      }

      return nextArrow;
    }
  }]);

  return NextArrow;
}(_react["default"].PureComponent);

exports.NextArrow = NextArrow;

/***/ }),

/***/ "./node_modules/react-slick/lib/default-props.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-slick/lib/default-props.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultProps = {
  accessibility: true,
  adaptiveHeight: false,
  afterChange: null,
  appendDots: function appendDots(dots) {
    return /*#__PURE__*/_react["default"].createElement("ul", {
      style: {
        display: "block"
      }
    }, dots);
  },
  arrows: true,
  autoplay: false,
  autoplaySpeed: 3000,
  beforeChange: null,
  centerMode: false,
  centerPadding: "50px",
  className: "",
  cssEase: "ease",
  customPaging: function customPaging(i) {
    return /*#__PURE__*/_react["default"].createElement("button", null, i + 1);
  },
  dots: false,
  dotsClass: "slick-dots",
  draggable: true,
  easing: "linear",
  edgeFriction: 0.35,
  fade: false,
  focusOnSelect: false,
  infinite: true,
  initialSlide: 0,
  lazyLoad: null,
  nextArrow: null,
  onEdge: null,
  onInit: null,
  onLazyLoadError: null,
  onReInit: null,
  pauseOnDotsHover: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  prevArrow: null,
  responsive: null,
  rows: 1,
  rtl: false,
  slide: "div",
  slidesPerRow: 1,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
  swipe: true,
  swipeEvent: null,
  swipeToSlide: false,
  touchMove: true,
  touchThreshold: 5,
  useCSS: true,
  useTransform: true,
  variableWidth: false,
  vertical: false,
  waitForAnimate: true
};
var _default = defaultProps;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-slick/lib/dots.js":
/*!**********************************************!*\
  !*** ./node_modules/react-slick/lib/dots.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Dots = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _innerSliderUtils = __webpack_require__(/*! ./utils/innerSliderUtils */ "./node_modules/react-slick/lib/utils/innerSliderUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var getDotCount = function getDotCount(spec) {
  var dots;

  if (spec.infinite) {
    dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  } else {
    dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
  }

  return dots;
};

var Dots = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Dots, _React$PureComponent);

  var _super = _createSuper(Dots);

  function Dots() {
    _classCallCheck(this, Dots);

    return _super.apply(this, arguments);
  }

  _createClass(Dots, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      // In Autoplay the focus stays on clicked button even after transition
      // to next slide. That only goes away by click somewhere outside
      e.preventDefault();
      this.props.clickHandler(options);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseOver = _this$props.onMouseOver,
          onMouseLeave = _this$props.onMouseLeave,
          infinite = _this$props.infinite,
          slidesToScroll = _this$props.slidesToScroll,
          slidesToShow = _this$props.slidesToShow,
          slideCount = _this$props.slideCount,
          currentSlide = _this$props.currentSlide;
      var dotCount = getDotCount({
        slideCount: slideCount,
        slidesToScroll: slidesToScroll,
        slidesToShow: slidesToShow,
        infinite: infinite
      });
      var mouseEvents = {
        onMouseEnter: onMouseEnter,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave
      };
      var dots = [];

      for (var i = 0; i < dotCount; i++) {
        var _rightBound = (i + 1) * slidesToScroll - 1;

        var rightBound = infinite ? _rightBound : (0, _innerSliderUtils.clamp)(_rightBound, 0, slideCount - 1);

        var _leftBound = rightBound - (slidesToScroll - 1);

        var leftBound = infinite ? _leftBound : (0, _innerSliderUtils.clamp)(_leftBound, 0, slideCount - 1);
        var className = (0, _classnames["default"])({
          "slick-active": infinite ? currentSlide >= leftBound && currentSlide <= rightBound : currentSlide === leftBound
        });
        var dotOptions = {
          message: "dots",
          index: i,
          slidesToScroll: slidesToScroll,
          currentSlide: currentSlide
        };
        var onClick = this.clickHandler.bind(this, dotOptions);
        dots = dots.concat( /*#__PURE__*/_react["default"].createElement("li", {
          key: i,
          className: className
        }, /*#__PURE__*/_react["default"].cloneElement(this.props.customPaging(i), {
          onClick: onClick
        })));
      }

      return /*#__PURE__*/_react["default"].cloneElement(this.props.appendDots(dots), _objectSpread({
        className: this.props.dotsClass
      }, mouseEvents));
    }
  }]);

  return Dots;
}(_react["default"].PureComponent);

exports.Dots = Dots;

/***/ }),

/***/ "./node_modules/react-slick/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-slick/lib/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _slider = _interopRequireDefault(__webpack_require__(/*! ./slider */ "./node_modules/react-slick/lib/slider.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _slider["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-slick/lib/initial-state.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-slick/lib/initial-state.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var initialState = {
  animating: false,
  autoplaying: null,
  currentDirection: 0,
  currentLeft: null,
  currentSlide: 0,
  direction: 1,
  dragging: false,
  edgeDragged: false,
  initialized: false,
  lazyLoadedList: [],
  listHeight: null,
  listWidth: null,
  scrolling: false,
  slideCount: null,
  slideHeight: null,
  slideWidth: null,
  swipeLeft: null,
  swiped: false,
  // used by swipeEvent. differentites between touch and swipe.
  swiping: false,
  touchObject: {
    startX: 0,
    startY: 0,
    curX: 0,
    curY: 0
  },
  trackStyle: {},
  trackWidth: 0,
  targetSlide: 0
};
var _default = initialState;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-slick/lib/inner-slider.js":
/*!******************************************************!*\
  !*** ./node_modules/react-slick/lib/inner-slider.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.InnerSlider = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _initialState = _interopRequireDefault(__webpack_require__(/*! ./initial-state */ "./node_modules/react-slick/lib/initial-state.js"));

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _innerSliderUtils = __webpack_require__(/*! ./utils/innerSliderUtils */ "./node_modules/react-slick/lib/utils/innerSliderUtils.js");

var _track = __webpack_require__(/*! ./track */ "./node_modules/react-slick/lib/track.js");

var _dots = __webpack_require__(/*! ./dots */ "./node_modules/react-slick/lib/dots.js");

var _arrows = __webpack_require__(/*! ./arrows */ "./node_modules/react-slick/lib/arrows.js");

var _resizeObserverPolyfill = _interopRequireDefault(__webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InnerSlider = /*#__PURE__*/function (_React$Component) {
  _inherits(InnerSlider, _React$Component);

  var _super = _createSuper(InnerSlider);

  function InnerSlider(props) {
    var _this;

    _classCallCheck(this, InnerSlider);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "listRefHandler", function (ref) {
      return _this.list = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "trackRefHandler", function (ref) {
      return _this.track = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "adaptHeight", function () {
      if (_this.props.adaptiveHeight && _this.list) {
        var elem = _this.list.querySelector("[data-index=\"".concat(_this.state.currentSlide, "\"]"));

        _this.list.style.height = (0, _innerSliderUtils.getHeight)(elem) + "px";
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.props.onInit && _this.props.onInit();

      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));

        if (slidesToLoad.length > 0) {
          _this.setState(function (prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });

          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      }

      var spec = _objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props);

      _this.updateState(spec, true, function () {
        _this.adaptHeight();

        _this.props.autoplay && _this.autoPlay("update");
      });

      if (_this.props.lazyLoad === "progressive") {
        _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1000);
      }

      _this.ro = new _resizeObserverPolyfill["default"](function () {
        if (_this.state.animating) {
          _this.onWindowResized(false); // don't set trackStyle hence don't break animation


          _this.callbackTimers.push(setTimeout(function () {
            return _this.onWindowResized();
          }, _this.props.speed));
        } else {
          _this.onWindowResized();
        }
      });

      _this.ro.observe(_this.list);

      document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function (slide) {
        slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
        slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
      });

      if (window.addEventListener) {
        window.addEventListener("resize", _this.onWindowResized);
      } else {
        window.attachEvent("onresize", _this.onWindowResized);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      if (_this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
      }

      if (_this.lazyLoadTimer) {
        clearInterval(_this.lazyLoadTimer);
      }

      if (_this.callbackTimers.length) {
        _this.callbackTimers.forEach(function (timer) {
          return clearTimeout(timer);
        });

        _this.callbackTimers = [];
      }

      if (window.addEventListener) {
        window.removeEventListener("resize", _this.onWindowResized);
      } else {
        window.detachEvent("onresize", _this.onWindowResized);
      }

      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }

      _this.ro.disconnect();
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps) {
      _this.checkImagesLoad();

      _this.props.onReInit && _this.props.onReInit();

      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));

        if (slidesToLoad.length > 0) {
          _this.setState(function (prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });

          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      } // if (this.props.onLazyLoad) {
      //   this.props.onLazyLoad([leftMostSlide])
      // }


      _this.adaptHeight();

      var spec = _objectSpread(_objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props), _this.state);

      var setTrackStyle = _this.didPropsChange(prevProps);

      setTrackStyle && _this.updateState(spec, setTrackStyle, function () {
        if (_this.state.currentSlide >= _react["default"].Children.count(_this.props.children)) {
          _this.changeSlide({
            message: "index",
            index: _react["default"].Children.count(_this.props.children) - _this.props.slidesToShow,
            currentSlide: _this.state.currentSlide
          });
        }

        if (_this.props.autoplay) {
          _this.autoPlay("update");
        } else {
          _this.pause("paused");
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onWindowResized", function (setTrackStyle) {
      if (_this.debouncedResize) _this.debouncedResize.cancel();
      _this.debouncedResize = (0, _lodash["default"])(function () {
        return _this.resizeWindow(setTrackStyle);
      }, 50);

      _this.debouncedResize();
    });

    _defineProperty(_assertThisInitialized(_this), "resizeWindow", function () {
      var setTrackStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var isTrackMounted = Boolean(_this.track && _this.track.node); // prevent warning: setting state on unmounted component (server side rendering)

      if (!isTrackMounted) return;

      var spec = _objectSpread(_objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props), _this.state);

      _this.updateState(spec, setTrackStyle, function () {
        if (_this.props.autoplay) _this.autoPlay("update");else _this.pause("paused");
      }); // animating state should be cleared while resizing, otherwise autoplay stops working


      _this.setState({
        animating: false
      });

      clearTimeout(_this.animationEndCallback);
      delete _this.animationEndCallback;
    });

    _defineProperty(_assertThisInitialized(_this), "updateState", function (spec, setTrackStyle, callback) {
      var updatedState = (0, _innerSliderUtils.initializedState)(spec);
      spec = _objectSpread(_objectSpread(_objectSpread({}, spec), updatedState), {}, {
        slideIndex: updatedState.currentSlide
      });
      var targetLeft = (0, _innerSliderUtils.getTrackLeft)(spec);
      spec = _objectSpread(_objectSpread({}, spec), {}, {
        left: targetLeft
      });
      var trackStyle = (0, _innerSliderUtils.getTrackCSS)(spec);

      if (setTrackStyle || _react["default"].Children.count(_this.props.children) !== _react["default"].Children.count(spec.children)) {
        updatedState["trackStyle"] = trackStyle;
      }

      _this.setState(updatedState, callback);
    });

    _defineProperty(_assertThisInitialized(_this), "ssrInit", function () {
      if (_this.props.variableWidth) {
        var _trackWidth = 0,
            _trackLeft = 0;
        var childrenWidths = [];
        var preClones = (0, _innerSliderUtils.getPreClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
          slideCount: _this.props.children.length
        }));
        var postClones = (0, _innerSliderUtils.getPostClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
          slideCount: _this.props.children.length
        }));

        _this.props.children.forEach(function (child) {
          childrenWidths.push(child.props.style.width);
          _trackWidth += child.props.style.width;
        });

        for (var i = 0; i < preClones; i++) {
          _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
          _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
        }

        for (var _i = 0; _i < postClones; _i++) {
          _trackWidth += childrenWidths[_i];
        }

        for (var _i2 = 0; _i2 < _this.state.currentSlide; _i2++) {
          _trackLeft += childrenWidths[_i2];
        }

        var _trackStyle = {
          width: _trackWidth + "px",
          left: -_trackLeft + "px"
        };

        if (_this.props.centerMode) {
          var currentWidth = "".concat(childrenWidths[_this.state.currentSlide], "px");
          _trackStyle.left = "calc(".concat(_trackStyle.left, " + (100% - ").concat(currentWidth, ") / 2 ) ");
        }

        return {
          trackStyle: _trackStyle
        };
      }

      var childrenCount = _react["default"].Children.count(_this.props.children);

      var spec = _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        slideCount: childrenCount
      });

      var slideCount = (0, _innerSliderUtils.getPreClones)(spec) + (0, _innerSliderUtils.getPostClones)(spec) + childrenCount;
      var trackWidth = 100 / _this.props.slidesToShow * slideCount;
      var slideWidth = 100 / slideCount;
      var trackLeft = -slideWidth * ((0, _innerSliderUtils.getPreClones)(spec) + _this.state.currentSlide) * trackWidth / 100;

      if (_this.props.centerMode) {
        trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
      }

      var trackStyle = {
        width: trackWidth + "%",
        left: trackLeft + "%"
      };
      return {
        slideWidth: slideWidth + "%",
        trackStyle: trackStyle
      };
    });

    _defineProperty(_assertThisInitialized(_this), "checkImagesLoad", function () {
      var images = _this.list && _this.list.querySelectorAll && _this.list.querySelectorAll(".slick-slide img") || [];
      var imagesCount = images.length,
          loadedCount = 0;
      Array.prototype.forEach.call(images, function (image) {
        var handler = function handler() {
          return ++loadedCount && loadedCount >= imagesCount && _this.onWindowResized();
        };

        if (!image.onclick) {
          image.onclick = function () {
            return image.parentNode.focus();
          };
        } else {
          var prevClickHandler = image.onclick;

          image.onclick = function () {
            prevClickHandler();
            image.parentNode.focus();
          };
        }

        if (!image.onload) {
          if (_this.props.lazyLoad) {
            image.onload = function () {
              _this.adaptHeight();

              _this.callbackTimers.push(setTimeout(_this.onWindowResized, _this.props.speed));
            };
          } else {
            image.onload = handler;

            image.onerror = function () {
              handler();
              _this.props.onLazyLoadError && _this.props.onLazyLoadError();
            };
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "progressiveLazyLoad", function () {
      var slidesToLoad = [];

      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);

      for (var index = _this.state.currentSlide; index < _this.state.slideCount + (0, _innerSliderUtils.getPostClones)(spec); index++) {
        if (_this.state.lazyLoadedList.indexOf(index) < 0) {
          slidesToLoad.push(index);
          break;
        }
      }

      for (var _index = _this.state.currentSlide - 1; _index >= -(0, _innerSliderUtils.getPreClones)(spec); _index--) {
        if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
          slidesToLoad.push(_index);
          break;
        }
      }

      if (slidesToLoad.length > 0) {
        _this.setState(function (state) {
          return {
            lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
          };
        });

        if (_this.props.onLazyLoad) {
          _this.props.onLazyLoad(slidesToLoad);
        }
      } else {
        if (_this.lazyLoadTimer) {
          clearInterval(_this.lazyLoadTimer);
          delete _this.lazyLoadTimer;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "slideHandler", function (index) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$props = _this.props,
          asNavFor = _this$props.asNavFor,
          beforeChange = _this$props.beforeChange,
          onLazyLoad = _this$props.onLazyLoad,
          speed = _this$props.speed,
          afterChange = _this$props.afterChange; // capture currentslide before state is updated

      var currentSlide = _this.state.currentSlide;

      var _slideHandler = (0, _innerSliderUtils.slideHandler)(_objectSpread(_objectSpread(_objectSpread({
        index: index
      }, _this.props), _this.state), {}, {
        trackRef: _this.track,
        useCSS: _this.props.useCSS && !dontAnimate
      })),
          state = _slideHandler.state,
          nextState = _slideHandler.nextState;

      if (!state) return;
      beforeChange && beforeChange(currentSlide, state.currentSlide);
      var slidesToLoad = state.lazyLoadedList.filter(function (value) {
        return _this.state.lazyLoadedList.indexOf(value) < 0;
      });
      onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);

      if (!_this.props.waitForAnimate && _this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
        afterChange && afterChange(currentSlide);
        delete _this.animationEndCallback;
      }

      _this.setState(state, function () {
        // asNavForIndex check is to avoid recursive calls of slideHandler in waitForAnimate=false mode
        if (asNavFor && _this.asNavForIndex !== index) {
          _this.asNavForIndex = index;
          asNavFor.innerSlider.slideHandler(index);
        }

        if (!nextState) return;
        _this.animationEndCallback = setTimeout(function () {
          var animating = nextState.animating,
              firstBatch = _objectWithoutProperties(nextState, ["animating"]);

          _this.setState(firstBatch, function () {
            _this.callbackTimers.push(setTimeout(function () {
              return _this.setState({
                animating: animating
              });
            }, 10));

            afterChange && afterChange(state.currentSlide);
            delete _this.animationEndCallback;
          });
        }, speed);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeSlide", function (options) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);

      var targetSlide = (0, _innerSliderUtils.changeSlide)(spec, options);
      if (targetSlide !== 0 && !targetSlide) return;

      if (dontAnimate === true) {
        _this.slideHandler(targetSlide, dontAnimate);
      } else {
        _this.slideHandler(targetSlide);
      }

      _this.props.autoplay && _this.autoPlay("update");

      if (_this.props.focusOnSelect) {
        var nodes = _this.list.querySelectorAll(".slick-current");

        nodes[0] && nodes[0].focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "clickHandler", function (e) {
      if (_this.clickable === false) {
        e.stopPropagation();
        e.preventDefault();
      }

      _this.clickable = true;
    });

    _defineProperty(_assertThisInitialized(_this), "keyHandler", function (e) {
      var dir = (0, _innerSliderUtils.keyHandler)(e, _this.props.accessibility, _this.props.rtl);
      dir !== "" && _this.changeSlide({
        message: dir
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectHandler", function (options) {
      _this.changeSlide(options);
    });

    _defineProperty(_assertThisInitialized(_this), "disableBodyScroll", function () {
      var preventDefault = function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
      };

      window.ontouchmove = preventDefault;
    });

    _defineProperty(_assertThisInitialized(_this), "enableBodyScroll", function () {
      window.ontouchmove = null;
    });

    _defineProperty(_assertThisInitialized(_this), "swipeStart", function (e) {
      if (_this.props.verticalSwiping) {
        _this.disableBodyScroll();
      }

      var state = (0, _innerSliderUtils.swipeStart)(e, _this.props.swipe, _this.props.draggable);
      state !== "" && _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_this), "swipeMove", function (e) {
      var state = (0, _innerSliderUtils.swipeMove)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;

      if (state["swiping"]) {
        _this.clickable = false;
      }

      _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_this), "swipeEnd", function (e) {
      var state = (0, _innerSliderUtils.swipeEnd)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;
      var triggerSlideHandler = state["triggerSlideHandler"];
      delete state["triggerSlideHandler"];

      _this.setState(state);

      if (triggerSlideHandler === undefined) return;

      _this.slideHandler(triggerSlideHandler);

      if (_this.props.verticalSwiping) {
        _this.enableBodyScroll();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "touchEnd", function (e) {
      _this.swipeEnd(e);

      _this.clickable = true;
    });

    _defineProperty(_assertThisInitialized(_this), "slickPrev", function () {
      // this and fellow methods are wrapped in setTimeout
      // to make sure initialize setState has happened before
      // any of such methods are called
      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "previous"
        });
      }, 0));
    });

    _defineProperty(_assertThisInitialized(_this), "slickNext", function () {
      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "next"
        });
      }, 0));
    });

    _defineProperty(_assertThisInitialized(_this), "slickGoTo", function (slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      slide = Number(slide);
      if (isNaN(slide)) return "";

      _this.callbackTimers.push(setTimeout(function () {
        return _this.changeSlide({
          message: "index",
          index: slide,
          currentSlide: _this.state.currentSlide
        }, dontAnimate);
      }, 0));
    });

    _defineProperty(_assertThisInitialized(_this), "play", function () {
      var nextIndex;

      if (_this.props.rtl) {
        nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
      } else {
        if ((0, _innerSliderUtils.canGoNext)(_objectSpread(_objectSpread({}, _this.props), _this.state))) {
          nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
        } else {
          return false;
        }
      }

      _this.slideHandler(nextIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "autoPlay", function (playType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }

      var autoplaying = _this.state.autoplaying;

      if (playType === "update") {
        if (autoplaying === "hovered" || autoplaying === "focused" || autoplaying === "paused") {
          return;
        }
      } else if (playType === "leave") {
        if (autoplaying === "paused" || autoplaying === "focused") {
          return;
        }
      } else if (playType === "blur") {
        if (autoplaying === "paused" || autoplaying === "hovered") {
          return;
        }
      }

      _this.autoplayTimer = setInterval(_this.play, _this.props.autoplaySpeed + 50);

      _this.setState({
        autoplaying: "playing"
      });
    });

    _defineProperty(_assertThisInitialized(_this), "pause", function (pauseType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
        _this.autoplayTimer = null;
      }

      var autoplaying = _this.state.autoplaying;

      if (pauseType === "paused") {
        _this.setState({
          autoplaying: "paused"
        });
      } else if (pauseType === "focused") {
        if (autoplaying === "hovered" || autoplaying === "playing") {
          _this.setState({
            autoplaying: "focused"
          });
        }
      } else {
        // pauseType  is 'hovered'
        if (autoplaying === "playing") {
          _this.setState({
            autoplaying: "hovered"
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDotsOver", function () {
      return _this.props.autoplay && _this.pause("hovered");
    });

    _defineProperty(_assertThisInitialized(_this), "onDotsLeave", function () {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });

    _defineProperty(_assertThisInitialized(_this), "onTrackOver", function () {
      return _this.props.autoplay && _this.pause("hovered");
    });

    _defineProperty(_assertThisInitialized(_this), "onTrackLeave", function () {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });

    _defineProperty(_assertThisInitialized(_this), "onSlideFocus", function () {
      return _this.props.autoplay && _this.pause("focused");
    });

    _defineProperty(_assertThisInitialized(_this), "onSlideBlur", function () {
      return _this.props.autoplay && _this.state.autoplaying === "focused" && _this.autoPlay("blur");
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var className = (0, _classnames["default"])("slick-slider", _this.props.className, {
        "slick-vertical": _this.props.vertical,
        "slick-initialized": true
      });

      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);

      var trackProps = (0, _innerSliderUtils.extractObject)(spec, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]);
      var pauseOnHover = _this.props.pauseOnHover;
      trackProps = _objectSpread(_objectSpread({}, trackProps), {}, {
        onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
        onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
        onMouseOver: pauseOnHover ? _this.onTrackOver : null,
        focusOnSelect: _this.props.focusOnSelect && _this.clickable ? _this.selectHandler : null
      });
      var dots;

      if (_this.props.dots === true && _this.state.slideCount >= _this.props.slidesToShow) {
        var dotProps = (0, _innerSliderUtils.extractObject)(spec, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]);
        var pauseOnDotsHover = _this.props.pauseOnDotsHover;
        dotProps = _objectSpread(_objectSpread({}, dotProps), {}, {
          clickHandler: _this.changeSlide,
          onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
          onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
          onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
        });
        dots = /*#__PURE__*/_react["default"].createElement(_dots.Dots, dotProps);
      }

      var prevArrow, nextArrow;
      var arrowProps = (0, _innerSliderUtils.extractObject)(spec, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
      arrowProps.clickHandler = _this.changeSlide;

      if (_this.props.arrows) {
        prevArrow = /*#__PURE__*/_react["default"].createElement(_arrows.PrevArrow, arrowProps);
        nextArrow = /*#__PURE__*/_react["default"].createElement(_arrows.NextArrow, arrowProps);
      }

      var verticalHeightStyle = null;

      if (_this.props.vertical) {
        verticalHeightStyle = {
          height: _this.state.listHeight
        };
      }

      var centerPaddingStyle = null;

      if (_this.props.vertical === false) {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: "0px " + _this.props.centerPadding
          };
        }
      } else {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: _this.props.centerPadding + " 0px"
          };
        }
      }

      var listStyle = _objectSpread(_objectSpread({}, verticalHeightStyle), centerPaddingStyle);

      var touchMove = _this.props.touchMove;
      var listProps = {
        className: "slick-list",
        style: listStyle,
        onClick: _this.clickHandler,
        onMouseDown: touchMove ? _this.swipeStart : null,
        onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onMouseUp: touchMove ? _this.swipeEnd : null,
        onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onTouchStart: touchMove ? _this.swipeStart : null,
        onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onTouchEnd: touchMove ? _this.touchEnd : null,
        onTouchCancel: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onKeyDown: _this.props.accessibility ? _this.keyHandler : null
      };
      var innerSliderProps = {
        className: className,
        dir: "ltr",
        style: _this.props.style
      };

      if (_this.props.unslick) {
        listProps = {
          className: "slick-list"
        };
        innerSliderProps = {
          className: className
        };
      }

      return /*#__PURE__*/_react["default"].createElement("div", innerSliderProps, !_this.props.unslick ? prevArrow : "", /*#__PURE__*/_react["default"].createElement("div", _extends({
        ref: _this.listRefHandler
      }, listProps), /*#__PURE__*/_react["default"].createElement(_track.Track, _extends({
        ref: _this.trackRefHandler
      }, trackProps), _this.props.children)), !_this.props.unslick ? nextArrow : "", !_this.props.unslick ? dots : "");
    });

    _this.list = null;
    _this.track = null;
    _this.state = _objectSpread(_objectSpread({}, _initialState["default"]), {}, {
      currentSlide: _this.props.initialSlide,
      slideCount: _react["default"].Children.count(_this.props.children)
    });
    _this.callbackTimers = [];
    _this.clickable = true;
    _this.debouncedResize = null;

    var ssrState = _this.ssrInit();

    _this.state = _objectSpread(_objectSpread({}, _this.state), ssrState);
    return _this;
  }

  _createClass(InnerSlider, [{
    key: "didPropsChange",
    value: function didPropsChange(prevProps) {
      var setTrackStyle = false;

      for (var _i3 = 0, _Object$keys = Object.keys(this.props); _i3 < _Object$keys.length; _i3++) {
        var key = _Object$keys[_i3];

        if (!prevProps.hasOwnProperty(key)) {
          setTrackStyle = true;
          break;
        }

        if (_typeof(prevProps[key]) === "object" || typeof prevProps[key] === "function") {
          continue;
        }

        if (prevProps[key] !== this.props[key]) {
          setTrackStyle = true;
          break;
        }
      }

      return setTrackStyle || _react["default"].Children.count(this.props.children) !== _react["default"].Children.count(prevProps.children);
    }
  }]);

  return InnerSlider;
}(_react["default"].Component);

exports.InnerSlider = InnerSlider;

/***/ }),

/***/ "./node_modules/react-slick/lib/slider.js":
/*!************************************************!*\
  !*** ./node_modules/react-slick/lib/slider.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _innerSlider = __webpack_require__(/*! ./inner-slider */ "./node_modules/react-slick/lib/inner-slider.js");

var _json2mq = _interopRequireDefault(__webpack_require__(/*! json2mq */ "./node_modules/json2mq/index.js"));

var _defaultProps = _interopRequireDefault(__webpack_require__(/*! ./default-props */ "./node_modules/react-slick/lib/default-props.js"));

var _innerSliderUtils = __webpack_require__(/*! ./utils/innerSliderUtils */ "./node_modules/react-slick/lib/utils/innerSliderUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var enquire = (0, _innerSliderUtils.canUseDOM)() && __webpack_require__(/*! enquire.js */ "./node_modules/enquire.js/src/index.js");

var Slider = /*#__PURE__*/function (_React$Component) {
  _inherits(Slider, _React$Component);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "innerSliderRefHandler", function (ref) {
      return _this.innerSlider = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "slickPrev", function () {
      return _this.innerSlider.slickPrev();
    });

    _defineProperty(_assertThisInitialized(_this), "slickNext", function () {
      return _this.innerSlider.slickNext();
    });

    _defineProperty(_assertThisInitialized(_this), "slickGoTo", function (slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return _this.innerSlider.slickGoTo(slide, dontAnimate);
    });

    _defineProperty(_assertThisInitialized(_this), "slickPause", function () {
      return _this.innerSlider.pause("paused");
    });

    _defineProperty(_assertThisInitialized(_this), "slickPlay", function () {
      return _this.innerSlider.autoPlay("play");
    });

    _this.state = {
      breakpoint: null
    };
    _this._responsiveMediaHandlers = [];
    return _this;
  }

  _createClass(Slider, [{
    key: "media",
    value: function media(query, handler) {
      // javascript handler for  css media query
      enquire.register(query, handler);

      this._responsiveMediaHandlers.push({
        query: query,
        handler: handler
      });
    } // handles responsive breakpoints

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // performance monitoring
      //if (process.env.NODE_ENV !== 'production') {
      //const { whyDidYouUpdate } = require('why-did-you-update')
      //whyDidYouUpdate(React)
      //}
      if (this.props.responsive) {
        var breakpoints = this.props.responsive.map(function (breakpt) {
          return breakpt.breakpoint;
        }); // sort them in increasing order of their numerical value

        breakpoints.sort(function (x, y) {
          return x - y;
        });
        breakpoints.forEach(function (breakpoint, index) {
          // media query for each breakpoint
          var bQuery;

          if (index === 0) {
            bQuery = (0, _json2mq["default"])({
              minWidth: 0,
              maxWidth: breakpoint
            });
          } else {
            bQuery = (0, _json2mq["default"])({
              minWidth: breakpoints[index - 1] + 1,
              maxWidth: breakpoint
            });
          } // when not using server side rendering


          (0, _innerSliderUtils.canUseDOM)() && _this2.media(bQuery, function () {
            _this2.setState({
              breakpoint: breakpoint
            });
          });
        }); // Register media query for full screen. Need to support resize from small to large
        // convert javascript object to media query string

        var query = (0, _json2mq["default"])({
          minWidth: breakpoints.slice(-1)[0]
        });
        (0, _innerSliderUtils.canUseDOM)() && this.media(query, function () {
          _this2.setState({
            breakpoint: null
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._responsiveMediaHandlers.forEach(function (obj) {
        enquire.unregister(obj.query, obj.handler);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var settings;
      var newProps;

      if (this.state.breakpoint) {
        newProps = this.props.responsive.filter(function (resp) {
          return resp.breakpoint === _this3.state.breakpoint;
        });
        settings = newProps[0].settings === "unslick" ? "unslick" : _objectSpread(_objectSpread(_objectSpread({}, _defaultProps["default"]), this.props), newProps[0].settings);
      } else {
        settings = _objectSpread(_objectSpread({}, _defaultProps["default"]), this.props);
      } // force scrolling by one if centerMode is on


      if (settings.centerMode) {
        if (settings.slidesToScroll > 1 && "development" !== "production") {
          console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(settings.slidesToScroll));
        }

        settings.slidesToScroll = 1;
      } // force showing one slide and scrolling by one if the fade mode is on


      if (settings.fade) {
        if (settings.slidesToShow > 1 && "development" !== "production") {
          console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
        }

        if (settings.slidesToScroll > 1 && "development" !== "production") {
          console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(settings.slidesToScroll));
        }

        settings.slidesToShow = 1;
        settings.slidesToScroll = 1;
      } // makes sure that children is an array, even when there is only 1 child


      var children = _react["default"].Children.toArray(this.props.children); // Children may contain false or null, so we should filter them
      // children may also contain string filled with spaces (in certain cases where we use jsx strings)


      children = children.filter(function (child) {
        if (typeof child === "string") {
          return !!child.trim();
        }

        return !!child;
      }); // rows and slidesPerRow logic is handled here

      if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
        console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
        settings.variableWidth = false;
      }

      var newChildren = [];
      var currentWidth = null;

      for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
        var newSlide = [];

        for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
          var row = [];

          for (var k = j; k < j + settings.slidesPerRow; k += 1) {
            if (settings.variableWidth && children[k].props.style) {
              currentWidth = children[k].props.style.width;
            }

            if (k >= children.length) break;
            row.push( /*#__PURE__*/_react["default"].cloneElement(children[k], {
              key: 100 * i + 10 * j + k,
              tabIndex: -1,
              style: {
                width: "".concat(100 / settings.slidesPerRow, "%"),
                display: "inline-block"
              }
            }));
          }

          newSlide.push( /*#__PURE__*/_react["default"].createElement("div", {
            key: 10 * i + j
          }, row));
        }

        if (settings.variableWidth) {
          newChildren.push( /*#__PURE__*/_react["default"].createElement("div", {
            key: i,
            style: {
              width: currentWidth
            }
          }, newSlide));
        } else {
          newChildren.push( /*#__PURE__*/_react["default"].createElement("div", {
            key: i
          }, newSlide));
        }
      }

      if (settings === "unslick") {
        var className = "regular slider " + (this.props.className || "");
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: className
        }, children);
      } else if (newChildren.length <= settings.slidesToShow) {
        settings.unslick = true;
      }

      return /*#__PURE__*/_react["default"].createElement(_innerSlider.InnerSlider, _extends({
        style: this.props.style,
        ref: this.innerSliderRefHandler
      }, settings), newChildren);
    }
  }]);

  return Slider;
}(_react["default"].Component);

exports["default"] = Slider;

/***/ }),

/***/ "./node_modules/react-slick/lib/track.js":
/*!***********************************************!*\
  !*** ./node_modules/react-slick/lib/track.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Track = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _innerSliderUtils = __webpack_require__(/*! ./utils/innerSliderUtils */ "./node_modules/react-slick/lib/utils/innerSliderUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// given specifications/props for a slide, fetch all the classes that need to be applied to the slide
var getSlideClasses = function getSlideClasses(spec) {
  var slickActive, slickCenter, slickCloned;
  var centerOffset, index;

  if (spec.rtl) {
    index = spec.slideCount - 1 - spec.index;
  } else {
    index = spec.index;
  }

  slickCloned = index < 0 || index >= spec.slideCount;

  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;

    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
      slickActive = true;
    }
  } else {
    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
  }

  var focusedSlide;

  if (spec.targetSlide < 0) {
    focusedSlide = spec.targetSlide + spec.slideCount;
  } else if (spec.targetSlide >= spec.slideCount) {
    focusedSlide = spec.targetSlide - spec.slideCount;
  } else {
    focusedSlide = spec.targetSlide;
  }

  var slickCurrent = index === focusedSlide;
  return {
    "slick-slide": true,
    "slick-active": slickActive,
    "slick-center": slickCenter,
    "slick-cloned": slickCloned,
    "slick-current": slickCurrent // dubious in case of RTL

  };
};

var getSlideStyle = function getSlideStyle(spec) {
  var style = {};

  if (spec.variableWidth === undefined || spec.variableWidth === false) {
    style.width = spec.slideWidth;
  }

  if (spec.fade) {
    style.position = "relative";

    if (spec.vertical) {
      style.top = -spec.index * parseInt(spec.slideHeight);
    } else {
      style.left = -spec.index * parseInt(spec.slideWidth);
    }

    style.opacity = spec.currentSlide === spec.index ? 1 : 0;

    if (spec.useCSS) {
      style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", " + "visibility " + spec.speed + "ms " + spec.cssEase;
    }
  }

  return style;
};

var getKey = function getKey(child, fallbackKey) {
  return child.key || fallbackKey;
};

var renderSlides = function renderSlides(spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];

  var childrenCount = _react["default"].Children.count(spec.children);

  var startIndex = (0, _innerSliderUtils.lazyStartIndex)(spec);
  var endIndex = (0, _innerSliderUtils.lazyEndIndex)(spec);

  _react["default"].Children.forEach(spec.children, function (elem, index) {
    var child;
    var childOnClickOptions = {
      message: "children",
      index: index,
      slidesToScroll: spec.slidesToScroll,
      currentSlide: spec.currentSlide
    }; // in case of lazyLoad, whether or not we want to fetch the slide

    if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) {
      child = elem;
    } else {
      child = /*#__PURE__*/_react["default"].createElement("div", null);
    }

    var childStyle = getSlideStyle(_objectSpread(_objectSpread({}, spec), {}, {
      index: index
    }));
    var slideClass = child.props.className || "";
    var slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
      index: index
    })); // push a cloned element of the desired slide

    slides.push( /*#__PURE__*/_react["default"].cloneElement(child, {
      key: "original" + getKey(child, index),
      "data-index": index,
      className: (0, _classnames["default"])(slideClasses, slideClass),
      tabIndex: "-1",
      "aria-hidden": !slideClasses["slick-active"],
      style: _objectSpread(_objectSpread({
        outline: "none"
      }, child.props.style || {}), childStyle),
      onClick: function onClick(e) {
        child.props && child.props.onClick && child.props.onClick(e);

        if (spec.focusOnSelect) {
          spec.focusOnSelect(childOnClickOptions);
        }
      }
    })); // if slide needs to be precloned or postcloned

    if (spec.infinite && spec.fade === false) {
      var preCloneNo = childrenCount - index;

      if (preCloneNo <= (0, _innerSliderUtils.getPreClones)(spec) && childrenCount !== spec.slidesToShow) {
        key = -preCloneNo;

        if (key >= startIndex) {
          child = elem;
        }

        slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
          index: key
        }));
        preCloneSlides.push( /*#__PURE__*/_react["default"].cloneElement(child, {
          key: "precloned" + getKey(child, key),
          "data-index": key,
          tabIndex: "-1",
          className: (0, _classnames["default"])(slideClasses, slideClass),
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle),
          onClick: function onClick(e) {
            child.props && child.props.onClick && child.props.onClick(e);

            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }

      if (childrenCount !== spec.slidesToShow) {
        key = childrenCount + index;

        if (key < endIndex) {
          child = elem;
        }

        slideClasses = getSlideClasses(_objectSpread(_objectSpread({}, spec), {}, {
          index: key
        }));
        postCloneSlides.push( /*#__PURE__*/_react["default"].cloneElement(child, {
          key: "postcloned" + getKey(child, key),
          "data-index": key,
          tabIndex: "-1",
          className: (0, _classnames["default"])(slideClasses, slideClass),
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle),
          onClick: function onClick(e) {
            child.props && child.props.onClick && child.props.onClick(e);

            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }
    }
  });

  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};

var Track = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Track, _React$PureComponent);

  var _super = _createSuper(Track);

  function Track() {
    var _this;

    _classCallCheck(this, Track);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "node", null);

    _defineProperty(_assertThisInitialized(_this), "handleRef", function (ref) {
      _this.node = ref;
    });

    return _this;
  }

  _createClass(Track, [{
    key: "render",
    value: function render() {
      var slides = renderSlides(this.props);
      var _this$props = this.props,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseOver = _this$props.onMouseOver,
          onMouseLeave = _this$props.onMouseLeave;
      var mouseEvents = {
        onMouseEnter: onMouseEnter,
        onMouseOver: onMouseOver,
        onMouseLeave: onMouseLeave
      };
      return /*#__PURE__*/_react["default"].createElement("div", _extends({
        ref: this.handleRef,
        className: "slick-track",
        style: this.props.trackStyle
      }, mouseEvents), slides);
    }
  }]);

  return Track;
}(_react["default"].PureComponent);

exports.Track = Track;

/***/ }),

/***/ "./node_modules/react-slick/lib/utils/innerSliderUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-slick/lib/utils/innerSliderUtils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.clamp = clamp;
exports.canUseDOM = exports.slidesOnLeft = exports.slidesOnRight = exports.siblingDirection = exports.getTotalSlides = exports.getPostClones = exports.getPreClones = exports.getTrackLeft = exports.getTrackAnimateCSS = exports.getTrackCSS = exports.checkSpecKeys = exports.getSlideCount = exports.checkNavigable = exports.getNavigableIndexes = exports.swipeEnd = exports.swipeMove = exports.swipeStart = exports.keyHandler = exports.changeSlide = exports.slideHandler = exports.initializedState = exports.extractObject = exports.canGoNext = exports.getSwipeDirection = exports.getHeight = exports.getWidth = exports.lazySlidesOnRight = exports.lazySlidesOnLeft = exports.lazyEndIndex = exports.lazyStartIndex = exports.getRequiredLazySlides = exports.getOnDemandLazySlides = exports.safePreventDefault = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function clamp(number, lowerBound, upperBound) {
  return Math.max(lowerBound, Math.min(number, upperBound));
}

var safePreventDefault = function safePreventDefault(event) {
  var passiveEvents = ["onTouchStart", "onTouchMove", "onWheel"];

  if (!passiveEvents.includes(event._reactName)) {
    event.preventDefault();
  }
};

exports.safePreventDefault = safePreventDefault;

var getOnDemandLazySlides = function getOnDemandLazySlides(spec) {
  var onDemandSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);

  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
      onDemandSlides.push(slideIndex);
    }
  }

  return onDemandSlides;
}; // return list of slides that need to be present


exports.getOnDemandLazySlides = getOnDemandLazySlides;

var getRequiredLazySlides = function getRequiredLazySlides(spec) {
  var requiredSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);

  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    requiredSlides.push(slideIndex);
  }

  return requiredSlides;
}; // startIndex that needs to be present


exports.getRequiredLazySlides = getRequiredLazySlides;

var lazyStartIndex = function lazyStartIndex(spec) {
  return spec.currentSlide - lazySlidesOnLeft(spec);
};

exports.lazyStartIndex = lazyStartIndex;

var lazyEndIndex = function lazyEndIndex(spec) {
  return spec.currentSlide + lazySlidesOnRight(spec);
};

exports.lazyEndIndex = lazyEndIndex;

var lazySlidesOnLeft = function lazySlidesOnLeft(spec) {
  return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
};

exports.lazySlidesOnLeft = lazySlidesOnLeft;

var lazySlidesOnRight = function lazySlidesOnRight(spec) {
  return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
}; // get width of an element


exports.lazySlidesOnRight = lazySlidesOnRight;

var getWidth = function getWidth(elem) {
  return elem && elem.offsetWidth || 0;
};

exports.getWidth = getWidth;

var getHeight = function getHeight(elem) {
  return elem && elem.offsetHeight || 0;
};

exports.getHeight = getHeight;

var getSwipeDirection = function getSwipeDirection(touchObject) {
  var verticalSwiping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var xDist, yDist, r, swipeAngle;
  xDist = touchObject.startX - touchObject.curX;
  yDist = touchObject.startY - touchObject.curY;
  r = Math.atan2(yDist, xDist);
  swipeAngle = Math.round(r * 180 / Math.PI);

  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle);
  }

  if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
    return "left";
  }

  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return "right";
  }

  if (verticalSwiping === true) {
    if (swipeAngle >= 35 && swipeAngle <= 135) {
      return "up";
    } else {
      return "down";
    }
  }

  return "vertical";
}; // whether or not we can go next


exports.getSwipeDirection = getSwipeDirection;

var canGoNext = function canGoNext(spec) {
  var canGo = true;

  if (!spec.infinite) {
    if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
      canGo = false;
    } else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
      canGo = false;
    }
  }

  return canGo;
}; // given an object and a list of keys, return new object with given keys


exports.canGoNext = canGoNext;

var extractObject = function extractObject(spec, keys) {
  var newObject = {};
  keys.forEach(function (key) {
    return newObject[key] = spec[key];
  });
  return newObject;
}; // get initialized state


exports.extractObject = extractObject;

var initializedState = function initializedState(spec) {
  // spec also contains listRef, trackRef
  var slideCount = _react["default"].Children.count(spec.children);

  var listNode = spec.listRef;
  var listWidth = Math.ceil(getWidth(listNode));
  var trackNode = spec.trackRef && spec.trackRef.node;
  var trackWidth = Math.ceil(getWidth(trackNode));
  var slideWidth;

  if (!spec.vertical) {
    var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;

    if (typeof spec.centerPadding === "string" && spec.centerPadding.slice(-1) === "%") {
      centerPaddingAdj *= listWidth / 100;
    }

    slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
  } else {
    slideWidth = listWidth;
  }

  var slideHeight = listNode && getHeight(listNode.querySelector('[data-index="0"]'));
  var listHeight = slideHeight * spec.slidesToShow;
  var currentSlide = spec.currentSlide === undefined ? spec.initialSlide : spec.currentSlide;

  if (spec.rtl && spec.currentSlide === undefined) {
    currentSlide = slideCount - 1 - spec.initialSlide;
  }

  var lazyLoadedList = spec.lazyLoadedList || [];
  var slidesToLoad = getOnDemandLazySlides(_objectSpread(_objectSpread({}, spec), {}, {
    currentSlide: currentSlide,
    lazyLoadedList: lazyLoadedList
  }));
  lazyLoadedList = lazyLoadedList.concat(slidesToLoad);
  var state = {
    slideCount: slideCount,
    slideWidth: slideWidth,
    listWidth: listWidth,
    trackWidth: trackWidth,
    currentSlide: currentSlide,
    slideHeight: slideHeight,
    listHeight: listHeight,
    lazyLoadedList: lazyLoadedList
  };

  if (spec.autoplaying === null && spec.autoplay) {
    state["autoplaying"] = "playing";
  }

  return state;
};

exports.initializedState = initializedState;

var slideHandler = function slideHandler(spec) {
  var waitForAnimate = spec.waitForAnimate,
      animating = spec.animating,
      fade = spec.fade,
      infinite = spec.infinite,
      index = spec.index,
      slideCount = spec.slideCount,
      lazyLoad = spec.lazyLoad,
      currentSlide = spec.currentSlide,
      centerMode = spec.centerMode,
      slidesToScroll = spec.slidesToScroll,
      slidesToShow = spec.slidesToShow,
      useCSS = spec.useCSS;
  var lazyLoadedList = spec.lazyLoadedList;
  if (waitForAnimate && animating) return {};
  var animationSlide = index,
      finalSlide,
      animationLeft,
      finalLeft;
  var state = {},
      nextState = {};
  var targetSlide = infinite ? index : clamp(index, 0, slideCount - 1);

  if (fade) {
    if (!infinite && (index < 0 || index >= slideCount)) return {};

    if (index < 0) {
      animationSlide = index + slideCount;
    } else if (index >= slideCount) {
      animationSlide = index - slideCount;
    }

    if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) {
      lazyLoadedList = lazyLoadedList.concat(animationSlide);
    }

    state = {
      animating: true,
      currentSlide: animationSlide,
      lazyLoadedList: lazyLoadedList,
      targetSlide: animationSlide
    };
    nextState = {
      animating: false,
      targetSlide: animationSlide
    };
  } else {
    finalSlide = animationSlide;

    if (animationSlide < 0) {
      finalSlide = animationSlide + slideCount;
      if (!infinite) finalSlide = 0;else if (slideCount % slidesToScroll !== 0) finalSlide = slideCount - slideCount % slidesToScroll;
    } else if (!canGoNext(spec) && animationSlide > currentSlide) {
      animationSlide = finalSlide = currentSlide;
    } else if (centerMode && animationSlide >= slideCount) {
      animationSlide = infinite ? slideCount : slideCount - 1;
      finalSlide = infinite ? 0 : slideCount - 1;
    } else if (animationSlide >= slideCount) {
      finalSlide = animationSlide - slideCount;
      if (!infinite) finalSlide = slideCount - slidesToShow;else if (slideCount % slidesToScroll !== 0) finalSlide = 0;
    }

    if (!infinite && animationSlide + slidesToShow >= slideCount) {
      finalSlide = slideCount - slidesToShow;
    }

    animationLeft = getTrackLeft(_objectSpread(_objectSpread({}, spec), {}, {
      slideIndex: animationSlide
    }));
    finalLeft = getTrackLeft(_objectSpread(_objectSpread({}, spec), {}, {
      slideIndex: finalSlide
    }));

    if (!infinite) {
      if (animationLeft === finalLeft) animationSlide = finalSlide;
      animationLeft = finalLeft;
    }

    if (lazyLoad) {
      lazyLoadedList = lazyLoadedList.concat(getOnDemandLazySlides(_objectSpread(_objectSpread({}, spec), {}, {
        currentSlide: animationSlide
      })));
    }

    if (!useCSS) {
      state = {
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
          left: finalLeft
        })),
        lazyLoadedList: lazyLoadedList,
        targetSlide: targetSlide
      };
    } else {
      state = {
        animating: true,
        currentSlide: finalSlide,
        trackStyle: getTrackAnimateCSS(_objectSpread(_objectSpread({}, spec), {}, {
          left: animationLeft
        })),
        lazyLoadedList: lazyLoadedList,
        targetSlide: targetSlide
      };
      nextState = {
        animating: false,
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
          left: finalLeft
        })),
        swipeLeft: null,
        targetSlide: targetSlide
      };
    }
  }

  return {
    state: state,
    nextState: nextState
  };
};

exports.slideHandler = slideHandler;

var changeSlide = function changeSlide(spec, options) {
  var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
  var slidesToScroll = spec.slidesToScroll,
      slidesToShow = spec.slidesToShow,
      slideCount = spec.slideCount,
      currentSlide = spec.currentSlide,
      previousTargetSlide = spec.targetSlide,
      lazyLoad = spec.lazyLoad,
      infinite = spec.infinite;
  unevenOffset = slideCount % slidesToScroll !== 0;
  indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;

  if (options.message === "previous") {
    slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
    targetSlide = currentSlide - slideOffset;

    if (lazyLoad && !infinite) {
      previousInt = currentSlide - slideOffset;
      targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
    }

    if (!infinite) {
      targetSlide = previousTargetSlide - slidesToScroll;
    }
  } else if (options.message === "next") {
    slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
    targetSlide = currentSlide + slideOffset;

    if (lazyLoad && !infinite) {
      targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
    }

    if (!infinite) {
      targetSlide = previousTargetSlide + slidesToScroll;
    }
  } else if (options.message === "dots") {
    // Click on dots
    targetSlide = options.index * options.slidesToScroll;
  } else if (options.message === "children") {
    // Click on the slides
    targetSlide = options.index;

    if (infinite) {
      var direction = siblingDirection(_objectSpread(_objectSpread({}, spec), {}, {
        targetSlide: targetSlide
      }));

      if (targetSlide > options.currentSlide && direction === "left") {
        targetSlide = targetSlide - slideCount;
      } else if (targetSlide < options.currentSlide && direction === "right") {
        targetSlide = targetSlide + slideCount;
      }
    }
  } else if (options.message === "index") {
    targetSlide = Number(options.index);
  }

  return targetSlide;
};

exports.changeSlide = changeSlide;

var keyHandler = function keyHandler(e, accessibility, rtl) {
  if (e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility) return "";
  if (e.keyCode === 37) return rtl ? "next" : "previous";
  if (e.keyCode === 39) return rtl ? "previous" : "next";
  return "";
};

exports.keyHandler = keyHandler;

var swipeStart = function swipeStart(e, swipe, draggable) {
  e.target.tagName === "IMG" && safePreventDefault(e);
  if (!swipe || !draggable && e.type.indexOf("mouse") !== -1) return "";
  return {
    dragging: true,
    touchObject: {
      startX: e.touches ? e.touches[0].pageX : e.clientX,
      startY: e.touches ? e.touches[0].pageY : e.clientY,
      curX: e.touches ? e.touches[0].pageX : e.clientX,
      curY: e.touches ? e.touches[0].pageY : e.clientY
    }
  };
};

exports.swipeStart = swipeStart;

var swipeMove = function swipeMove(e, spec) {
  // spec also contains, trackRef and slideIndex
  var scrolling = spec.scrolling,
      animating = spec.animating,
      vertical = spec.vertical,
      swipeToSlide = spec.swipeToSlide,
      verticalSwiping = spec.verticalSwiping,
      rtl = spec.rtl,
      currentSlide = spec.currentSlide,
      edgeFriction = spec.edgeFriction,
      edgeDragged = spec.edgeDragged,
      onEdge = spec.onEdge,
      swiped = spec.swiped,
      swiping = spec.swiping,
      slideCount = spec.slideCount,
      slidesToScroll = spec.slidesToScroll,
      infinite = spec.infinite,
      touchObject = spec.touchObject,
      swipeEvent = spec.swipeEvent,
      listHeight = spec.listHeight,
      listWidth = spec.listWidth;
  if (scrolling) return;
  if (animating) return safePreventDefault(e);
  if (vertical && swipeToSlide && verticalSwiping) safePreventDefault(e);
  var swipeLeft,
      state = {};
  var curLeft = getTrackLeft(spec);
  touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
  touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
  touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
  var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));

  if (!verticalSwiping && !swiping && verticalSwipeLength > 10) {
    return {
      scrolling: true
    };
  }

  if (verticalSwiping) touchObject.swipeLength = verticalSwipeLength;
  var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
  if (verticalSwiping) positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
  var dotCount = Math.ceil(slideCount / slidesToScroll);
  var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
  var touchSwipeLength = touchObject.swipeLength;

  if (!infinite) {
    if (currentSlide === 0 && (swipeDirection === "right" || swipeDirection === "down") || currentSlide + 1 >= dotCount && (swipeDirection === "left" || swipeDirection === "up") || !canGoNext(spec) && (swipeDirection === "left" || swipeDirection === "up")) {
      touchSwipeLength = touchObject.swipeLength * edgeFriction;

      if (edgeDragged === false && onEdge) {
        onEdge(swipeDirection);
        state["edgeDragged"] = true;
      }
    }
  }

  if (!swiped && swipeEvent) {
    swipeEvent(swipeDirection);
    state["swiped"] = true;
  }

  if (!vertical) {
    if (!rtl) {
      swipeLeft = curLeft + touchSwipeLength * positionOffset;
    } else {
      swipeLeft = curLeft - touchSwipeLength * positionOffset;
    }
  } else {
    swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
  }

  if (verticalSwiping) {
    swipeLeft = curLeft + touchSwipeLength * positionOffset;
  }

  state = _objectSpread(_objectSpread({}, state), {}, {
    touchObject: touchObject,
    swipeLeft: swipeLeft,
    trackStyle: getTrackCSS(_objectSpread(_objectSpread({}, spec), {}, {
      left: swipeLeft
    }))
  });

  if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
    return state;
  }

  if (touchObject.swipeLength > 10) {
    state["swiping"] = true;
    safePreventDefault(e);
  }

  return state;
};

exports.swipeMove = swipeMove;

var swipeEnd = function swipeEnd(e, spec) {
  var dragging = spec.dragging,
      swipe = spec.swipe,
      touchObject = spec.touchObject,
      listWidth = spec.listWidth,
      touchThreshold = spec.touchThreshold,
      verticalSwiping = spec.verticalSwiping,
      listHeight = spec.listHeight,
      swipeToSlide = spec.swipeToSlide,
      scrolling = spec.scrolling,
      onSwipe = spec.onSwipe,
      targetSlide = spec.targetSlide,
      currentSlide = spec.currentSlide,
      infinite = spec.infinite;

  if (!dragging) {
    if (swipe) safePreventDefault(e);
    return {};
  }

  var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
  var swipeDirection = getSwipeDirection(touchObject, verticalSwiping); // reset the state of touch related state variables.

  var state = {
    dragging: false,
    edgeDragged: false,
    scrolling: false,
    swiping: false,
    swiped: false,
    swipeLeft: null,
    touchObject: {}
  };

  if (scrolling) {
    return state;
  }

  if (!touchObject.swipeLength) {
    return state;
  }

  if (touchObject.swipeLength > minSwipe) {
    safePreventDefault(e);

    if (onSwipe) {
      onSwipe(swipeDirection);
    }

    var slideCount, newSlide;
    var activeSlide = infinite ? currentSlide : targetSlide;

    switch (swipeDirection) {
      case "left":
      case "up":
        newSlide = activeSlide + getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 0;
        break;

      case "right":
      case "down":
        newSlide = activeSlide - getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 1;
        break;

      default:
        slideCount = activeSlide;
    }

    state["triggerSlideHandler"] = slideCount;
  } else {
    // Adjust the track back to it's original position.
    var currentLeft = getTrackLeft(spec);
    state["trackStyle"] = getTrackAnimateCSS(_objectSpread(_objectSpread({}, spec), {}, {
      left: currentLeft
    }));
  }

  return state;
};

exports.swipeEnd = swipeEnd;

var getNavigableIndexes = function getNavigableIndexes(spec) {
  var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
  var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
  var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
  var indexes = [];

  while (breakpoint < max) {
    indexes.push(breakpoint);
    breakpoint = counter + spec.slidesToScroll;
    counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
  }

  return indexes;
};

exports.getNavigableIndexes = getNavigableIndexes;

var checkNavigable = function checkNavigable(spec, index) {
  var navigables = getNavigableIndexes(spec);
  var prevNavigable = 0;

  if (index > navigables[navigables.length - 1]) {
    index = navigables[navigables.length - 1];
  } else {
    for (var n in navigables) {
      if (index < navigables[n]) {
        index = prevNavigable;
        break;
      }

      prevNavigable = navigables[n];
    }
  }

  return index;
};

exports.checkNavigable = checkNavigable;

var getSlideCount = function getSlideCount(spec) {
  var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;

  if (spec.swipeToSlide) {
    var swipedSlide;
    var slickList = spec.listRef;
    var slides = slickList.querySelectorAll && slickList.querySelectorAll(".slick-slide") || [];
    Array.from(slides).every(function (slide) {
      if (!spec.vertical) {
        if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      } else {
        if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      }

      return true;
    });

    if (!swipedSlide) {
      return 0;
    }

    var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
    var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
    return slidesTraversed;
  } else {
    return spec.slidesToScroll;
  }
};

exports.getSlideCount = getSlideCount;

var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
  return keysArray.reduce(function (value, key) {
    return value && spec.hasOwnProperty(key);
  }, true) ? null : console.error("Keys Missing:", spec);
};

exports.checkSpecKeys = checkSpecKeys;

var getTrackCSS = function getTrackCSS(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
  var trackWidth, trackHeight;
  var trackChildren = spec.slideCount + 2 * spec.slidesToShow;

  if (!spec.vertical) {
    trackWidth = getTotalSlides(spec) * spec.slideWidth;
  } else {
    trackHeight = trackChildren * spec.slideHeight;
  }

  var style = {
    opacity: 1,
    transition: "",
    WebkitTransition: ""
  };

  if (spec.useTransform) {
    var WebkitTransform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var transform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var msTransform = !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)";
    style = _objectSpread(_objectSpread({}, style), {}, {
      WebkitTransform: WebkitTransform,
      transform: transform,
      msTransform: msTransform
    });
  } else {
    if (spec.vertical) {
      style["top"] = spec.left;
    } else {
      style["left"] = spec.left;
    }
  }

  if (spec.fade) style = {
    opacity: 1
  };
  if (trackWidth) style.width = trackWidth;
  if (trackHeight) style.height = trackHeight; // Fallback for IE8

  if (window && !window.addEventListener && window.attachEvent) {
    if (!spec.vertical) {
      style.marginLeft = spec.left + "px";
    } else {
      style.marginTop = spec.left + "px";
    }
  }

  return style;
};

exports.getTrackCSS = getTrackCSS;

var getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
  var style = getTrackCSS(spec); // useCSS is true by default so it can be undefined

  if (spec.useTransform) {
    style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
    style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
  } else {
    if (spec.vertical) {
      style.transition = "top " + spec.speed + "ms " + spec.cssEase;
    } else {
      style.transition = "left " + spec.speed + "ms " + spec.cssEase;
    }
  }

  return style;
};

exports.getTrackAnimateCSS = getTrackAnimateCSS;

var getTrackLeft = function getTrackLeft(spec) {
  if (spec.unslick) {
    return 0;
  }

  checkSpecKeys(spec, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
  var slideIndex = spec.slideIndex,
      trackRef = spec.trackRef,
      infinite = spec.infinite,
      centerMode = spec.centerMode,
      slideCount = spec.slideCount,
      slidesToShow = spec.slidesToShow,
      slidesToScroll = spec.slidesToScroll,
      slideWidth = spec.slideWidth,
      listWidth = spec.listWidth,
      variableWidth = spec.variableWidth,
      slideHeight = spec.slideHeight,
      fade = spec.fade,
      vertical = spec.vertical;
  var slideOffset = 0;
  var targetLeft;
  var targetSlide;
  var verticalOffset = 0;

  if (fade || spec.slideCount === 1) {
    return 0;
  }

  var slidesToOffset = 0;

  if (infinite) {
    slidesToOffset = -getPreClones(spec); // bring active slide to the beginning of visual area
    // if next scroll doesn't have enough children, just reach till the end of original slides instead of shifting slidesToScroll children

    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
    } // shift current slide to center of the frame


    if (centerMode) {
      slidesToOffset += parseInt(slidesToShow / 2);
    }
  } else {
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = slidesToShow - slideCount % slidesToScroll;
    }

    if (centerMode) {
      slidesToOffset = parseInt(slidesToShow / 2);
    }
  }

  slideOffset = slidesToOffset * slideWidth;
  verticalOffset = slidesToOffset * slideHeight;

  if (!vertical) {
    targetLeft = slideIndex * slideWidth * -1 + slideOffset;
  } else {
    targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
  }

  if (variableWidth === true) {
    var targetSlideIndex;
    var trackElem = trackRef && trackRef.node;
    targetSlideIndex = slideIndex + getPreClones(spec);
    targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;

    if (centerMode === true) {
      targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
      targetSlide = trackElem && trackElem.children[targetSlideIndex];
      targetLeft = 0;

      for (var slide = 0; slide < targetSlideIndex; slide++) {
        targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
      }

      targetLeft -= parseInt(spec.centerPadding);
      targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
    }
  }

  return targetLeft;
};

exports.getTrackLeft = getTrackLeft;

var getPreClones = function getPreClones(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }

  if (spec.variableWidth) {
    return spec.slideCount;
  }

  return spec.slidesToShow + (spec.centerMode ? 1 : 0);
};

exports.getPreClones = getPreClones;

var getPostClones = function getPostClones(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }

  return spec.slideCount;
};

exports.getPostClones = getPostClones;

var getTotalSlides = function getTotalSlides(spec) {
  return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
};

exports.getTotalSlides = getTotalSlides;

var siblingDirection = function siblingDirection(spec) {
  if (spec.targetSlide > spec.currentSlide) {
    if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) {
      return "left";
    }

    return "right";
  } else {
    if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) {
      return "right";
    }

    return "left";
  }
};

exports.siblingDirection = siblingDirection;

var slidesOnRight = function slidesOnRight(_ref) {
  var slidesToShow = _ref.slidesToShow,
      centerMode = _ref.centerMode,
      rtl = _ref.rtl,
      centerPadding = _ref.centerPadding;

  // returns no of slides on the right of active slide
  if (centerMode) {
    var right = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) right += 1;
    if (rtl && slidesToShow % 2 === 0) right += 1;
    return right;
  }

  if (rtl) {
    return 0;
  }

  return slidesToShow - 1;
};

exports.slidesOnRight = slidesOnRight;

var slidesOnLeft = function slidesOnLeft(_ref2) {
  var slidesToShow = _ref2.slidesToShow,
      centerMode = _ref2.centerMode,
      rtl = _ref2.rtl,
      centerPadding = _ref2.centerPadding;

  // returns no of slides on the left of active slide
  if (centerMode) {
    var left = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) left += 1;
    if (!rtl && slidesToShow % 2 === 0) left += 1;
    return left;
  }

  if (rtl) {
    return slidesToShow - 1;
  }

  return 0;
};

exports.slidesOnLeft = slidesOnLeft;

var canUseDOM = function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
};

exports.canUseDOM = canUseDOM;

/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./node_modules/string-convert/camel2hyphen.js":
/*!*****************************************************!*\
  !*** ./node_modules/string-convert/camel2hyphen.js ***!
  \*****************************************************/
/***/ ((module) => {

var camel2hyphen = function (str) {
  return str
          .replace(/[A-Z]/g, function (match) {
            return '-' + match.toLowerCase();
          })
          .toLowerCase();
};

module.exports = camel2hyphen;

/***/ }),

/***/ "./src/svg/arrow_left.svg":
/*!********************************!*\
  !*** ./src/svg/arrow_left.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function ArrowLeft (props) {
    return React.createElement("svg",props,React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M0.353341 11.954L11.3994 23L12.1065 22.2929L1.91386 12.1003L100.121 12.1003L100.121 11.1003L1.91415 11.1003L12.1065 0.907953L11.3994 0.200845L0.353341 11.2469L-0.000212677 11.6004L0.353341 11.954Z","fill":"#AF8B5F"}));
}

ArrowLeft.defaultProps = {"width":"101","height":"23","viewBox":"0 0 101 23","fill":"none"};

module.exports = ArrowLeft;

ArrowLeft.default = ArrowLeft;


/***/ }),

/***/ "./src/svg/arrow_right.svg":
/*!*********************************!*\
  !*** ./src/svg/arrow_right.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function ArrowRight (props) {
    return React.createElement("svg",props,React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M99.7678 11.046L88.7217 -3.14974e-06L88.0146 0.707104L98.2072 10.8997L4.86183e-07 10.8997L5.30788e-07 11.8997L98.207 11.8997L88.0146 22.092L88.7217 22.7991L99.7678 11.7531L100.121 11.3996L99.7678 11.046Z","fill":"#AF8B5F"}));
}

ArrowRight.defaultProps = {"width":"101","height":"23","viewBox":"0 0 101 23","fill":"none"};

module.exports = ArrowRight;

ArrowRight.default = ArrowRight;


/***/ }),

/***/ "./src/svg/close.svg":
/*!***************************!*\
  !*** ./src/svg/close.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Close (props) {
    return React.createElement("svg",props,React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M3.06069 0.93934C2.4749 0.353553 1.52516 0.353553 0.93937 0.93934C0.353584 1.52513 0.353584 2.47487 0.93937 3.06066L7.87871 10L0.93937 16.9393C0.353584 17.5251 0.353584 18.4749 0.93937 19.0607C1.52516 19.6464 2.4749 19.6464 3.06069 19.0607L10 12.1213L16.9394 19.0607C17.5252 19.6464 18.4749 19.6464 19.0607 19.0607C19.6465 18.4749 19.6465 17.5251 19.0607 16.9393L12.1214 10L19.0607 3.06066C19.6465 2.47487 19.6465 1.52513 19.0607 0.93934C18.4749 0.353553 17.5252 0.353553 16.9394 0.93934L10 7.87868L3.06069 0.93934Z","fill":"white"}));
}

Close.defaultProps = {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"none"};

module.exports = Close;

Close.default = Close;


/***/ }),

/***/ "./src/svg/heart.svg":
/*!***************************!*\
  !*** ./src/svg/heart.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Heart (props) {
    return React.createElement("svg",props,React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M5.04616 10.7344L5.04617 10.7344C3.13343 9.57586 1.97987 8.36188 1.31053 7.21782C0.636055 6.06497 0.5 5.0627 0.5 4.41119C0.5 2.49951 2.08065 1 3.96739 1C4.81511 1 5.5173 1.35335 6 1.68769C6.4827 1.35335 7.18489 1 8.03261 1C9.91935 1 11.5 2.49951 11.5 4.41119C11.5 5.0627 11.3639 6.06497 10.6895 7.21782C10.0201 8.36188 8.86657 9.57586 6.95383 10.7344L6.94823 10.7378L6.94822 10.7378C6.66141 10.9097 6.33343 11 6 11C5.66657 11 5.33859 10.9097 5.05178 10.7378L5.04616 10.7344ZM7.08627 2.69482C6.4404 3.04878 6 3.63016 6 3.63016C6 3.63016 5.5596 3.04878 4.91373 2.69482C4.63107 2.53992 4.30907 2.42857 3.96739 2.42857C2.84498 2.42857 1.93478 3.31615 1.93478 4.41119C1.93478 5.29516 2.29049 7.39314 5.79186 9.51394C5.85458 9.55154 5.92658 9.57143 6 9.57143C6.07342 9.57143 6.14542 9.55154 6.20814 9.51394C9.70951 7.39314 10.0652 5.29516 10.0652 4.41119C10.0652 3.31615 9.15502 2.42857 8.03261 2.42857C7.69093 2.42857 7.36893 2.53992 7.08627 2.69482Z","fill":"#403935"}));
}

Heart.defaultProps = {"width":"12","height":"12","viewBox":"0 0 12 12","fill":"none"};

module.exports = Heart;

Heart.default = Heart;


/***/ }),

/***/ "./src/svg/logo-big.svg":
/*!******************************!*\
  !*** ./src/svg/logo-big.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function LogoBig (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M78.0471 140.911V139.623L78.3393 139.875H77.9807C77.0777 139.875 76.303 139.712 75.6567 139.384C75.0104 139.056 74.5146 138.596 74.1693 138.003C73.824 137.401 73.6514 136.688 73.6514 135.865C73.6514 134.608 74.0276 133.629 74.7802 132.93C75.5416 132.222 76.6084 131.867 77.9807 131.867H78.3393L78.0471 132.106V130.898H79.1361V132.106L78.8439 131.867H79.2025C80.5836 131.867 81.6505 132.222 82.403 132.93C83.1556 133.629 83.5319 134.608 83.5319 135.865C83.5319 136.688 83.3592 137.401 83.0139 138.003C82.6686 138.596 82.1728 139.056 81.5265 139.384C80.8802 139.712 80.1056 139.875 79.2025 139.875H78.8439L79.1361 139.623V140.911H78.0471ZM78.0471 139.225V132.505L78.3127 132.744H77.8214C76.8829 132.744 76.1392 133.014 75.5903 133.554C75.0502 134.085 74.7802 134.855 74.7802 135.865C74.7802 136.511 74.9041 137.069 75.152 137.538C75.4088 138.007 75.7629 138.37 76.2145 138.627C76.6748 138.875 77.2105 138.999 77.8214 138.999H78.3127L78.0471 139.225ZM79.1361 139.225L78.8705 138.999H79.3619C79.9728 138.999 80.5084 138.875 80.9688 138.627C81.4292 138.37 81.7833 138.007 82.0312 137.538C82.2791 137.069 82.403 136.511 82.403 135.865C82.403 134.855 82.1286 134.085 81.5797 133.554C81.0396 133.014 80.3003 132.744 79.3619 132.744H78.8705L79.1361 132.505V139.225Z","fill":"#D2B67E","key":0}),React.createElement("path",{"d":"M86.2432 135.931C86.2432 134.94 86.4114 134.09 86.7478 133.381C87.0931 132.664 87.5845 132.111 88.222 131.721C88.8683 131.332 89.6429 131.137 90.546 131.137C91.4225 131.137 92.1839 131.332 92.8302 131.721C93.4765 132.111 93.9723 132.664 94.3176 133.381C94.6717 134.09 94.8488 134.935 94.8488 135.918C94.8488 136.909 94.6717 137.764 94.3176 138.481C93.9634 139.198 93.4632 139.756 92.8169 140.154C92.1795 140.544 91.4225 140.739 90.546 140.739C89.6429 140.739 88.8727 140.544 88.2352 140.154C87.5978 139.756 87.1064 139.198 86.7611 138.481C86.4158 137.764 86.2432 136.914 86.2432 135.931ZM87.3986 135.931C87.3986 137.135 87.6642 138.078 88.1954 138.76C88.7266 139.433 89.5101 139.769 90.546 139.769C91.5376 139.769 92.3078 139.433 92.8567 138.76C93.4145 138.078 93.6934 137.135 93.6934 135.931C93.6934 134.718 93.4189 133.78 92.87 133.116C92.3211 132.443 91.5464 132.106 90.546 132.106C89.5101 132.106 88.7266 132.443 88.1954 133.116C87.6642 133.78 87.3986 134.718 87.3986 135.931Z","fill":"#D2B67E","key":1}),React.createElement("path",{"d":"M97.9094 140.619V131.257H99.0116V135.4H104.656V131.257H105.745V140.619H104.656V136.343H99.0116V140.619H97.9094Z","fill":"#D2B67E","key":2}),React.createElement("path",{"d":"M108.197 142.704V139.716H109.153C109.631 139.132 109.985 138.348 110.215 137.365C110.445 136.374 110.56 135.143 110.56 133.674V131.257H116.948V139.716H118.316V142.704H117.333V140.619H109.179V142.704H108.197ZM110.282 139.716H115.846V132.16H111.583V133.753C111.583 135.179 111.477 136.374 111.264 137.339C111.052 138.295 110.724 139.087 110.282 139.716Z","fill":"#D2B67E","key":3}),React.createElement("path",{"d":"M127.645 140.619V132.186H124.339V131.257H132.041V132.186H128.748V140.619H127.645Z","fill":"#D2B67E","key":4}),React.createElement("path",{"d":"M132.433 140.619L136.563 131.257H137.519L141.716 140.619H140.574L139.405 137.95L139.896 138.229H134.172L134.704 137.95L133.562 140.619H132.433ZM137.028 132.518L134.876 137.565L134.558 137.326H139.498L139.259 137.565L137.054 132.518H137.028Z","fill":"#D2B67E","key":5}),React.createElement("path",{"d":"M144.19 140.619V131.257H148.002C148.985 131.257 149.742 131.496 150.273 131.974C150.804 132.443 151.07 133.098 151.07 133.939C151.07 134.762 150.804 135.418 150.273 135.905C149.742 136.383 148.985 136.622 148.002 136.622H145.293V140.619H144.19ZM145.293 135.705H147.896C148.577 135.705 149.091 135.55 149.436 135.241C149.79 134.931 149.967 134.497 149.967 133.939C149.967 133.372 149.79 132.934 149.436 132.624C149.091 132.315 148.577 132.16 147.896 132.16H145.293V135.705Z","fill":"#D2B67E","key":6}),React.createElement("path",{"d":"M151.975 140.619L156.105 131.257H157.061L161.258 140.619H160.116L158.947 137.95L159.438 138.229H153.715L154.246 137.95L153.104 140.619H151.975ZM156.57 132.518L154.418 137.565L154.1 137.326H159.04L158.801 137.565L156.596 132.518H156.57Z","fill":"#D2B67E","key":7}),React.createElement("path",{"d":"M167.485 140.739C166.547 140.739 165.75 140.544 165.095 140.154C164.44 139.765 163.935 139.211 163.581 138.494C163.236 137.777 163.063 136.923 163.063 135.931C163.063 134.94 163.236 134.09 163.581 133.381C163.935 132.664 164.44 132.111 165.095 131.721C165.75 131.332 166.547 131.137 167.485 131.137C168.149 131.137 168.743 131.239 169.265 131.442C169.787 131.646 170.243 131.943 170.633 132.332L170.221 133.209C169.796 132.837 169.376 132.567 168.959 132.399C168.543 132.222 168.056 132.133 167.499 132.133C166.427 132.133 165.613 132.465 165.055 133.129C164.497 133.793 164.218 134.727 164.218 135.931C164.218 137.135 164.497 138.074 165.055 138.747C165.613 139.411 166.427 139.743 167.499 139.743C168.056 139.743 168.543 139.658 168.959 139.49C169.376 139.313 169.796 139.034 170.221 138.654L170.633 139.543C170.243 139.924 169.787 140.221 169.265 140.433C168.743 140.637 168.149 140.739 167.485 140.739Z","fill":"#D2B67E","key":8}),React.createElement("path",{"d":"M172.386 140.619L176.516 131.257H177.472L181.669 140.619H180.527L179.358 137.95L179.849 138.229H174.126L174.657 137.95L173.515 140.619H172.386ZM176.981 132.518L174.83 137.565L174.511 137.326H179.451L179.212 137.565L177.008 132.518H176.981Z","fill":"#D2B67E","key":9}),React.createElement("path",{"d":"M188.682 140.619V131.257H189.638L193.397 139.743H193.011L196.77 131.257H197.726V140.619H196.717V132.677H197.115L193.569 140.619H192.839L189.28 132.677H189.678V140.619H188.682Z","fill":"#D2B67E","key":10}),React.createElement("path",{"d":"M200.201 140.619L204.331 131.257H205.288L209.484 140.619H208.342L207.173 137.95L207.665 138.229H201.941L202.472 137.95L201.33 140.619H200.201ZM204.796 132.518L202.645 137.565L202.326 137.326H207.266L207.027 137.565L204.823 132.518H204.796Z","fill":"#D2B67E","key":11}),React.createElement("path",{"d":"M213.14 140.619V132.186H209.834V131.257H217.536V132.186H214.243V140.619H213.14Z","fill":"#D2B67E","key":12}),React.createElement("path",{"d":"M219.044 135.931C219.044 134.94 219.212 134.09 219.549 133.381C219.894 132.664 220.385 132.111 221.023 131.721C221.669 131.332 222.444 131.137 223.347 131.137C224.223 131.137 224.985 131.332 225.631 131.721C226.277 132.111 226.773 132.664 227.118 133.381C227.472 134.09 227.649 134.935 227.649 135.918C227.649 136.909 227.472 137.764 227.118 138.481C226.764 139.198 226.264 139.756 225.618 140.154C224.98 140.544 224.223 140.739 223.347 140.739C222.444 140.739 221.673 140.544 221.036 140.154C220.398 139.756 219.907 139.198 219.562 138.481C219.217 137.764 219.044 136.914 219.044 135.931ZM220.199 135.931C220.199 137.135 220.465 138.078 220.996 138.76C221.527 139.433 222.311 139.769 223.347 139.769C224.338 139.769 225.108 139.433 225.657 138.76C226.215 138.078 226.494 137.135 226.494 135.931C226.494 134.718 226.22 133.78 225.671 133.116C225.122 132.443 224.347 132.106 223.347 132.106C222.311 132.106 221.527 132.443 220.996 133.116C220.465 133.78 220.199 134.718 220.199 135.931Z","fill":"#D2B67E","key":13}),React.createElement("path",{"d":"M230.285 140.818L229.767 139.955C230.139 139.76 230.471 139.53 230.763 139.264C231.055 138.99 231.299 138.636 231.494 138.202C231.697 137.768 231.848 137.219 231.945 136.555C232.051 135.882 232.104 135.055 232.104 134.072V131.257H238.492V140.619H237.403V132.186H233.127V134.351C233.127 135.316 233.065 136.157 232.941 136.874C232.817 137.582 232.631 138.193 232.383 138.707C232.144 139.211 231.848 139.636 231.494 139.982C231.148 140.318 230.745 140.597 230.285 140.818Z","fill":"#D2B67E","key":14}),React.createElement("path",{"d":"M241.888 140.619V131.257H242.99V140.619H241.888Z","fill":"#D2B67E","key":15}),React.createElement("path",{"d":"M246.387 140.619V131.257H247.49V135.4H253.134V131.257H254.223V140.619H253.134V136.343H247.49V140.619H246.387Z","fill":"#D2B67E","key":16}),React.createElement("path",{"d":"M265.825 142.704V140.619H257.618V131.257H258.693V139.689H264.351V131.257H265.453V139.689H266.821V142.704H265.825Z","fill":"#D2B67E","key":17}),React.createElement("path",{"d":"M268.689 140.619L270.416 137.565C270.637 137.175 270.881 136.892 271.146 136.715C271.412 136.538 271.726 136.449 272.089 136.449H272.421L272.355 136.622C271.337 136.622 270.544 136.387 269.978 135.918C269.411 135.449 269.128 134.793 269.128 133.952C269.128 133.085 269.402 132.421 269.951 131.96C270.509 131.491 271.301 131.257 272.328 131.257H276.153V140.619H275.064V136.662H273.377C272.926 136.662 272.567 136.728 272.302 136.861C272.036 136.985 271.797 137.241 271.584 137.631L269.911 140.619H268.689ZM272.488 135.798H275.064V132.146H272.488C270.965 132.146 270.203 132.753 270.203 133.966C270.203 135.187 270.965 135.798 272.488 135.798Z","fill":"#D2B67E","key":18}),React.createElement("path",{"d":"M44.045 119.341C44.0883 119.341 44.1099 119.406 44.1099 119.536C44.1099 119.666 44.0883 119.731 44.045 119.731C43.3307 119.731 42.7679 119.72 42.3567 119.698L40.1165 119.666L37.6815 119.698C37.2702 119.72 36.7075 119.731 35.9932 119.731C35.9499 119.731 35.9283 119.666 35.9283 119.536C35.9283 119.406 35.9499 119.341 35.9932 119.341C36.794 119.341 37.3785 119.287 37.7464 119.179C38.136 119.071 38.3957 118.865 38.5256 118.562C38.6555 118.237 38.7204 117.75 38.7204 117.101V102.296C38.7204 101.56 38.6771 101.073 38.5905 100.835C38.5256 100.597 38.3633 100.446 38.1035 100.381C37.8438 100.316 37.3027 100.283 36.4802 100.283H29.8245C28.9587 100.283 28.3743 100.316 28.0713 100.381C27.7899 100.446 27.6059 100.597 27.5194 100.835C27.4544 101.073 27.422 101.56 27.422 102.296V117.101C27.422 117.772 27.4869 118.259 27.6168 118.562C27.7466 118.865 27.9955 119.071 28.3635 119.179C28.7315 119.287 29.3159 119.341 30.1167 119.341C30.1816 119.341 30.2141 119.406 30.2141 119.536C30.2141 119.666 30.1816 119.731 30.1167 119.731C29.4241 119.731 28.8721 119.72 28.4609 119.698L26.0259 119.666L23.7532 119.698C23.342 119.72 22.7792 119.731 22.0649 119.731C22.0216 119.731 22 119.666 22 119.536C22 119.406 22.0216 119.341 22.0649 119.341C22.8658 119.341 23.4502 119.287 23.8181 119.179C24.2077 119.071 24.4675 118.865 24.5973 118.562C24.7489 118.237 24.8246 117.75 24.8246 117.101V102.459C24.8246 101.788 24.7597 101.268 24.6298 100.9C24.4999 100.532 24.2402 100.262 23.8506 100.089C23.461 99.9153 22.8874 99.8288 22.1299 99.8288C22.0649 99.8288 22.0325 99.7638 22.0325 99.634C22.0325 99.5041 22.0649 99.4392 22.1299 99.4392C22.8441 99.4392 23.5368 99.45 24.2077 99.4716C27.1081 99.5149 30.1059 99.5366 33.2011 99.5366C35.9716 99.5366 39.2074 99.5041 42.9086 99.4392H44.045C44.0883 99.4392 44.1099 99.5041 44.1099 99.634C44.1099 99.7638 44.0883 99.8288 44.045 99.8288C43.2658 99.8288 42.6814 99.9153 42.2918 100.089C41.9022 100.262 41.6316 100.532 41.4801 100.9C41.3502 101.268 41.2853 101.788 41.2853 102.459V117.101C41.2853 117.75 41.3502 118.237 41.4801 118.562C41.6316 118.865 41.8913 119.071 42.2593 119.179C42.6489 119.287 43.2441 119.341 44.045 119.341Z","fill":"#D2B67E","key":19}),React.createElement("path",{"d":"M57.0363 120.121C55.0233 120.121 53.2268 119.655 51.6468 118.724C50.0884 117.772 48.8763 116.495 48.0105 114.893C47.1664 113.27 46.7443 111.506 46.7443 109.601C46.7443 107.372 47.307 105.467 48.4326 103.887C49.5581 102.285 50.9974 101.084 52.7506 100.283C54.5255 99.4825 56.3328 99.082 58.1726 99.082C60.2288 99.082 62.0362 99.569 63.5946 100.543C65.153 101.495 66.3434 102.762 67.1659 104.342C68.01 105.922 68.4321 107.599 68.4321 109.374C68.4321 111.344 67.9126 113.151 66.8737 114.796C65.8348 116.441 64.4387 117.74 62.6855 118.692C60.9539 119.644 59.0709 120.121 57.0363 120.121ZM58.1726 119.406C59.5579 119.406 60.8024 119.049 61.9063 118.335C63.0102 117.621 63.8759 116.582 64.5036 115.218C65.153 113.833 65.4776 112.188 65.4776 110.283C65.4776 108.27 65.1205 106.474 64.4062 104.894C63.7136 103.314 62.7071 102.08 61.3868 101.192C60.0881 100.305 58.573 99.8612 56.8415 99.8612C54.5904 99.8612 52.8372 100.63 51.5818 102.166C50.3265 103.681 49.6988 105.781 49.6988 108.465C49.6988 110.521 50.0559 112.383 50.7702 114.049C51.4844 115.716 52.4801 117.025 53.7571 117.978C55.0558 118.93 56.5276 119.406 58.1726 119.406Z","fill":"#D2B67E","key":20}),React.createElement("path",{"d":"M81.082 108.303C82.8136 108.454 84.2096 109.039 85.2702 110.056C86.3308 111.073 86.8611 112.318 86.8611 113.789C86.8611 114.937 86.5581 115.976 85.952 116.906C85.3676 117.815 84.556 118.54 83.517 119.082C82.4997 119.601 81.3526 119.861 80.0755 119.861C79.3829 119.861 78.6253 119.828 77.8029 119.763C77.4998 119.742 77.1427 119.72 76.7315 119.698C76.3202 119.677 75.8548 119.666 75.3354 119.666L73.0627 119.698C72.6515 119.72 72.0995 119.731 71.4069 119.731C71.342 119.731 71.3095 119.666 71.3095 119.536C71.3095 119.406 71.342 119.341 71.4069 119.341C72.1644 119.341 72.7164 119.287 73.0627 119.179C73.4307 119.049 73.6904 118.833 73.8419 118.53C73.9934 118.227 74.0692 117.75 74.0692 117.101V102.069C74.0692 101.42 73.9934 100.943 73.8419 100.64C73.712 100.337 73.4631 100.132 73.0952 100.024C72.7489 99.8937 72.1969 99.8288 71.4394 99.8288C71.3961 99.8288 71.3744 99.7638 71.3744 99.634C71.3744 99.5041 71.3961 99.4392 71.4394 99.4392L73.0627 99.4716C74.0151 99.5149 74.7726 99.5366 75.3354 99.5366C75.9198 99.5366 76.5583 99.5041 77.2509 99.4392C77.489 99.4175 77.7704 99.3959 78.0951 99.3742C78.4414 99.3526 78.8093 99.3418 79.1989 99.3418C81.0604 99.3418 82.4781 99.7314 83.4521 100.511C84.4261 101.268 84.9131 102.296 84.9131 103.595C84.9131 104.634 84.5776 105.575 83.9066 106.42C83.2356 107.242 82.2941 107.87 81.082 108.303ZM78.5821 99.8937C78.0626 99.8937 77.6622 99.9478 77.3808 100.056C77.121 100.164 76.9262 100.381 76.7964 100.705C76.6882 101.008 76.634 101.485 76.634 102.134V108.303L78.0626 108.335C79.4911 108.335 80.5625 107.924 81.2768 107.101C81.9911 106.279 82.3482 105.197 82.3482 103.855C82.3482 102.621 82.0344 101.658 81.4067 100.965C80.8006 100.251 79.8591 99.8937 78.5821 99.8937ZM79.5561 119.211C81.0928 119.211 82.2292 118.811 82.9651 118.01C83.7226 117.209 84.1014 116.062 84.1014 114.569C84.1014 112.924 83.6469 111.603 82.7378 110.608C81.8287 109.612 80.5409 109.103 78.8743 109.082C78.2899 109.06 77.5431 109.082 76.634 109.147V117.101C76.634 117.642 76.7098 118.064 76.8613 118.367C77.0128 118.649 77.2942 118.865 77.7055 119.017C78.1167 119.147 78.7336 119.211 79.5561 119.211Z","fill":"#D2B67E","key":21}),React.createElement("path",{"d":"M104.176 114.796C104.176 114.753 104.219 114.731 104.306 114.731C104.371 114.731 104.425 114.753 104.468 114.796C104.533 114.818 104.566 114.839 104.566 114.861C104.349 116.419 104.241 117.88 104.241 119.244C104.241 119.417 104.209 119.547 104.144 119.634C104.079 119.698 103.949 119.731 103.754 119.731H89.9231C89.8582 119.731 89.8257 119.666 89.8257 119.536C89.8257 119.406 89.8582 119.341 89.9231 119.341C90.7023 119.341 91.2651 119.287 91.6114 119.179C91.9577 119.071 92.1958 118.865 92.3257 118.562C92.4555 118.237 92.5205 117.75 92.5205 117.101V102.069C92.5205 101.42 92.4555 100.943 92.3257 100.64C92.1958 100.337 91.9469 100.132 91.5789 100.024C91.2326 99.8937 90.6807 99.8288 89.9231 99.8288C89.8582 99.8288 89.8257 99.7638 89.8257 99.634C89.8257 99.5041 89.8582 99.4392 89.9231 99.4392H103.17C103.386 99.4392 103.494 99.5366 103.494 99.7314L103.559 103.822C103.559 103.887 103.494 103.93 103.364 103.952C103.256 103.952 103.191 103.92 103.17 103.855C103.018 102.664 102.596 101.766 101.903 101.16C101.211 100.532 100.302 100.218 99.1762 100.218H97.5204C96.568 100.218 95.9295 100.359 95.6048 100.64C95.2802 100.9 95.1178 101.42 95.1178 102.199V108.79H98.6892C99.793 108.79 100.605 108.606 101.124 108.238C101.644 107.848 101.903 107.253 101.903 106.452C101.903 106.409 101.957 106.387 102.066 106.387C102.196 106.387 102.261 106.409 102.261 106.452L102.228 109.179L102.261 110.64C102.304 111.333 102.325 111.874 102.325 112.264C102.325 112.307 102.261 112.328 102.131 112.328C102.001 112.328 101.936 112.307 101.936 112.264C101.936 111.333 101.665 110.651 101.124 110.218C100.605 109.764 99.7606 109.536 98.5918 109.536H95.1178V116.971C95.1178 117.75 95.2585 118.281 95.5399 118.562C95.8429 118.844 96.4381 118.984 97.3256 118.984H99.4359C100.67 118.984 101.687 118.627 102.488 117.913C103.31 117.177 103.873 116.138 104.176 114.796Z","fill":"#D2B67E","key":22}),React.createElement("path",{"d":"M112.617 116.971C112.617 117.664 112.704 118.173 112.877 118.497C113.05 118.8 113.375 119.017 113.851 119.147C114.349 119.276 115.139 119.341 116.221 119.341C116.286 119.341 116.318 119.406 116.318 119.536C116.318 119.666 116.286 119.731 116.221 119.731C115.334 119.731 114.641 119.72 114.143 119.698L111.319 119.666L109.078 119.698C108.667 119.72 108.104 119.731 107.39 119.731C107.347 119.731 107.325 119.666 107.325 119.536C107.325 119.406 107.347 119.341 107.39 119.341C108.169 119.341 108.732 119.287 109.078 119.179C109.446 119.071 109.695 118.865 109.825 118.562C109.955 118.237 110.02 117.75 110.02 117.101V102.069C110.02 101.42 109.955 100.943 109.825 100.64C109.695 100.337 109.446 100.132 109.078 100.024C108.732 99.8937 108.169 99.8288 107.39 99.8288C107.347 99.8288 107.325 99.7638 107.325 99.634C107.325 99.5041 107.347 99.4392 107.39 99.4392L109.078 99.4716C109.987 99.5149 110.723 99.5366 111.286 99.5366C111.806 99.5366 112.422 99.5041 113.137 99.4392C113.396 99.4392 113.797 99.4283 114.338 99.4067C114.901 99.3634 115.388 99.3418 115.799 99.3418C117.834 99.3418 119.468 99.7963 120.701 100.705C121.935 101.593 122.552 102.946 122.552 104.764C122.552 106.171 122.195 107.361 121.481 108.335C120.788 109.309 119.89 110.034 118.786 110.51C117.704 110.987 116.578 111.225 115.409 111.225C114.782 111.225 114.262 111.171 113.851 111.062C113.786 111.062 113.754 111.008 113.754 110.9C113.754 110.835 113.764 110.77 113.786 110.705C113.829 110.64 113.873 110.619 113.916 110.64C114.262 110.727 114.652 110.77 115.085 110.77C116.362 110.77 117.444 110.305 118.331 109.374C119.219 108.443 119.662 107.101 119.662 105.348C119.662 103.638 119.23 102.307 118.364 101.355C117.498 100.381 116.351 99.8937 114.922 99.8937C114.273 99.8937 113.786 99.9478 113.461 100.056C113.158 100.143 112.942 100.348 112.812 100.673C112.682 100.976 112.617 101.463 112.617 102.134V116.971Z","fill":"#D2B67E","key":23}),React.createElement("path",{"d":"M147.386 119.341C147.451 119.341 147.483 119.406 147.483 119.536C147.483 119.666 147.451 119.731 147.386 119.731C146.693 119.731 146.141 119.72 145.73 119.698L143.392 119.666L140.828 119.698C140.46 119.72 139.951 119.731 139.302 119.731C139.237 119.731 139.204 119.666 139.204 119.536C139.204 119.406 139.237 119.341 139.302 119.341C140.124 119.341 140.73 119.287 141.12 119.179C141.509 119.071 141.769 118.865 141.899 118.562C142.029 118.237 142.094 117.75 142.094 117.101V109.536H130.276V117.101C130.276 117.75 130.341 118.237 130.471 118.562C130.6 118.865 130.86 119.071 131.25 119.179C131.639 119.287 132.245 119.341 133.068 119.341C133.111 119.341 133.133 119.406 133.133 119.536C133.133 119.666 133.111 119.731 133.068 119.731C132.375 119.731 131.823 119.72 131.412 119.698L128.912 119.666L126.607 119.698C126.196 119.72 125.633 119.731 124.919 119.731C124.876 119.731 124.854 119.666 124.854 119.536C124.854 119.406 124.876 119.341 124.919 119.341C125.72 119.341 126.304 119.287 126.672 119.179C127.062 119.071 127.321 118.865 127.451 118.562C127.603 118.237 127.678 117.75 127.678 117.101V102.069C127.678 101.42 127.614 100.943 127.484 100.64C127.354 100.337 127.105 100.132 126.737 100.024C126.369 99.8937 125.785 99.8288 124.984 99.8288C124.919 99.8288 124.886 99.7638 124.886 99.634C124.886 99.5041 124.919 99.4392 124.984 99.4392L126.64 99.4716C127.549 99.5149 128.306 99.5366 128.912 99.5366C129.605 99.5366 130.449 99.5149 131.445 99.4716L133.068 99.4392C133.111 99.4392 133.133 99.5041 133.133 99.634C133.133 99.7638 133.111 99.8288 133.068 99.8288C132.267 99.8288 131.672 99.8937 131.282 100.024C130.893 100.153 130.622 100.381 130.471 100.705C130.341 101.008 130.276 101.485 130.276 102.134V108.79H142.094V102.134C142.094 101.485 142.018 101.008 141.866 100.705C141.737 100.381 141.477 100.153 141.087 100.024C140.719 99.8937 140.124 99.8288 139.302 99.8288C139.237 99.8288 139.204 99.7638 139.204 99.634C139.204 99.5041 139.237 99.4392 139.302 99.4392L140.828 99.4716C141.823 99.5149 142.678 99.5366 143.392 99.5366C143.998 99.5366 144.778 99.5149 145.73 99.4716L147.386 99.4392C147.451 99.4392 147.483 99.5041 147.483 99.634C147.483 99.7638 147.451 99.8288 147.386 99.8288C146.585 99.8288 146.001 99.8937 145.633 100.024C145.265 100.132 145.005 100.337 144.853 100.64C144.724 100.943 144.659 101.42 144.659 102.069V117.101C144.659 117.75 144.724 118.237 144.853 118.562C145.005 118.865 145.265 119.071 145.633 119.179C146.001 119.287 146.585 119.341 147.386 119.341Z","fill":"#D2B67E","key":24}),React.createElement("path",{"d":"M164.195 114.796C164.195 114.753 164.239 114.731 164.325 114.731C164.39 114.731 164.444 114.753 164.487 114.796C164.552 114.818 164.585 114.839 164.585 114.861C164.368 116.419 164.26 117.88 164.26 119.244C164.26 119.417 164.228 119.547 164.163 119.634C164.098 119.698 163.968 119.731 163.773 119.731H149.942C149.877 119.731 149.845 119.666 149.845 119.536C149.845 119.406 149.877 119.341 149.942 119.341C150.722 119.341 151.284 119.287 151.631 119.179C151.977 119.071 152.215 118.865 152.345 118.562C152.475 118.237 152.54 117.75 152.54 117.101V102.069C152.54 101.42 152.475 100.943 152.345 100.64C152.215 100.337 151.966 100.132 151.598 100.024C151.252 99.8937 150.7 99.8288 149.942 99.8288C149.877 99.8288 149.845 99.7638 149.845 99.634C149.845 99.5041 149.877 99.4392 149.942 99.4392H163.189C163.405 99.4392 163.513 99.5366 163.513 99.7314L163.578 103.822C163.578 103.887 163.513 103.93 163.384 103.952C163.275 103.952 163.21 103.92 163.189 103.855C163.037 102.664 162.615 101.766 161.923 101.16C161.23 100.532 160.321 100.218 159.195 100.218H157.54C156.587 100.218 155.949 100.359 155.624 100.64C155.299 100.9 155.137 101.42 155.137 102.199V108.79H158.708C159.812 108.79 160.624 108.606 161.143 108.238C161.663 107.848 161.923 107.253 161.923 106.452C161.923 106.409 161.977 106.387 162.085 106.387C162.215 106.387 162.28 106.409 162.28 106.452L162.247 109.179L162.28 110.64C162.323 111.333 162.345 111.874 162.345 112.264C162.345 112.307 162.28 112.328 162.15 112.328C162.02 112.328 161.955 112.307 161.955 112.264C161.955 111.333 161.685 110.651 161.143 110.218C160.624 109.764 159.78 109.536 158.611 109.536H155.137V116.971C155.137 117.75 155.278 118.281 155.559 118.562C155.862 118.844 156.457 118.984 157.345 118.984H159.455C160.689 118.984 161.706 118.627 162.507 117.913C163.33 117.177 163.892 116.138 164.195 114.796Z","fill":"#D2B67E","key":25}),React.createElement("path",{"d":"M192.733 119.341C192.777 119.341 192.798 119.406 192.798 119.536C192.798 119.666 192.777 119.731 192.733 119.731C192.041 119.731 191.489 119.72 191.078 119.698L188.772 119.666L186.597 119.698C186.229 119.72 185.721 119.731 185.071 119.731C185.006 119.731 184.974 119.666 184.974 119.536C184.974 119.406 185.006 119.341 185.071 119.341C186.024 119.341 186.662 119.233 186.987 119.017C187.333 118.8 187.506 118.346 187.506 117.653L187.474 117.101L186.857 102.816L179.682 119.504C179.638 119.59 179.552 119.634 179.422 119.634C179.292 119.634 179.206 119.59 179.162 119.504L171.078 102.946L170.818 115.997C170.797 117.144 171.002 117.989 171.435 118.53C171.868 119.071 172.571 119.341 173.545 119.341C173.61 119.341 173.643 119.406 173.643 119.536C173.643 119.666 173.61 119.731 173.545 119.731C172.961 119.731 172.507 119.72 172.182 119.698L170.396 119.666L168.611 119.698C168.307 119.72 167.864 119.731 167.279 119.731C167.236 119.731 167.214 119.666 167.214 119.536C167.214 119.406 167.236 119.341 167.279 119.341C169.076 119.341 169.985 118.227 170.007 115.997L170.299 101.452C169.606 100.37 168.675 99.8288 167.507 99.8288C167.463 99.8288 167.442 99.7638 167.442 99.634C167.442 99.5041 167.463 99.4392 167.507 99.4392L168.805 99.4716C169.065 99.4933 169.401 99.5041 169.812 99.5041C170.288 99.5041 170.678 99.4933 170.981 99.4716C171.284 99.45 171.522 99.4392 171.695 99.4392C171.976 99.4392 172.204 99.5366 172.377 99.7314C172.55 99.9262 172.82 100.392 173.188 101.127L180.396 115.77L187.182 100.251C187.398 99.7097 187.723 99.4392 188.156 99.4392C188.285 99.4392 188.459 99.45 188.675 99.4716C188.891 99.4933 189.173 99.5041 189.519 99.5041L191.175 99.4716C191.435 99.45 191.813 99.4392 192.311 99.4392C192.376 99.4392 192.409 99.5041 192.409 99.634C192.409 99.7638 192.376 99.8288 192.311 99.8288C191.251 99.8288 190.482 100.002 190.006 100.348C189.552 100.695 189.335 101.301 189.357 102.166L190.071 117.101C190.114 117.772 190.201 118.259 190.331 118.562C190.461 118.865 190.699 119.071 191.045 119.179C191.391 119.287 191.954 119.341 192.733 119.341Z","fill":"#D2B67E","key":26}),React.createElement("path",{"d":"M205.356 120.121C203.343 120.121 201.547 119.655 199.967 118.724C198.408 117.772 197.196 116.495 196.331 114.893C195.486 113.27 195.064 111.506 195.064 109.601C195.064 107.372 195.627 105.467 196.753 103.887C197.878 102.285 199.318 101.084 201.071 100.283C202.846 99.4825 204.653 99.082 206.493 99.082C208.549 99.082 210.356 99.569 211.915 100.543C213.473 101.495 214.664 102.762 215.486 104.342C216.33 105.922 216.752 107.599 216.752 109.374C216.752 111.344 216.233 113.151 215.194 114.796C214.155 116.441 212.759 117.74 211.006 118.692C209.274 119.644 207.391 120.121 205.356 120.121ZM206.493 119.406C207.878 119.406 209.123 119.049 210.226 118.335C211.33 117.621 212.196 116.582 212.824 115.218C213.473 113.833 213.798 112.188 213.798 110.283C213.798 108.27 213.441 106.474 212.726 104.894C212.034 103.314 211.027 102.08 209.707 101.192C208.408 100.305 206.893 99.8612 205.162 99.8612C202.911 99.8612 201.157 100.63 199.902 102.166C198.647 103.681 198.019 105.781 198.019 108.465C198.019 110.521 198.376 112.383 199.09 114.049C199.805 115.716 200.8 117.025 202.077 117.978C203.376 118.93 204.848 119.406 206.493 119.406Z","fill":"#D2B67E","key":27}),React.createElement("path",{"d":"M247.271 119.341C247.314 119.341 247.336 119.406 247.336 119.536C247.336 119.666 247.314 119.731 247.271 119.731H242.888C242.585 119.731 242.325 119.655 242.109 119.504C241.892 119.331 241.514 118.887 240.972 118.173C240.431 117.458 239.501 116.16 238.18 114.277L237.791 113.725C236.86 112.404 236.178 111.484 235.745 110.965C235.312 110.424 234.858 110.045 234.382 109.829C233.927 109.612 233.321 109.504 232.564 109.504H232.271V117.101C232.271 117.75 232.336 118.237 232.466 118.562C232.596 118.865 232.845 119.071 233.213 119.179C233.602 119.287 234.198 119.341 234.999 119.341C235.042 119.341 235.064 119.406 235.064 119.536C235.064 119.666 235.042 119.731 234.999 119.731C234.284 119.731 233.722 119.72 233.31 119.698L230.875 119.666L228.603 119.698C228.213 119.72 227.661 119.731 226.947 119.731C226.904 119.731 226.882 119.666 226.882 119.536C226.882 119.406 226.904 119.341 226.947 119.341C227.748 119.341 228.332 119.287 228.7 119.179C229.068 119.071 229.317 118.865 229.447 118.562C229.598 118.237 229.674 117.75 229.674 117.101V102.069C229.674 101.42 229.609 100.943 229.479 100.64C229.349 100.337 229.1 100.132 228.732 100.024C228.365 99.8937 227.78 99.8288 226.979 99.8288C226.936 99.8288 226.914 99.7638 226.914 99.634C226.914 99.5041 226.936 99.4392 226.979 99.4392L228.635 99.4716C229.544 99.5149 230.291 99.5366 230.875 99.5366C231.525 99.5366 232.347 99.5149 233.343 99.4716L234.999 99.4392C235.042 99.4392 235.064 99.5041 235.064 99.634C235.064 99.7638 235.042 99.8288 234.999 99.8288C234.219 99.8288 233.635 99.8937 233.245 100.024C232.877 100.153 232.618 100.381 232.466 100.705C232.336 101.008 232.271 101.485 232.271 102.134V108.984C233.44 108.941 234.165 108.919 234.447 108.919H234.869L238.635 103.692C239.566 102.415 240.031 101.452 240.031 100.803C240.031 100.153 239.522 99.8288 238.505 99.8288C238.462 99.8288 238.44 99.7638 238.44 99.634C238.44 99.5041 238.462 99.4392 238.505 99.4392L239.934 99.4716C240.799 99.5149 241.589 99.5366 242.304 99.5366C243.083 99.5366 243.884 99.5149 244.706 99.4716L245.94 99.4392C246.005 99.4392 246.037 99.5041 246.037 99.634C246.037 99.7638 246.005 99.8288 245.94 99.8288C244.879 99.8288 243.862 100.132 242.888 100.738C241.914 101.344 240.951 102.253 239.998 103.465L235.648 108.984C236.297 109.049 236.838 109.233 237.271 109.536C237.726 109.818 238.169 110.229 238.602 110.77C239.035 111.29 239.75 112.242 240.745 113.627C241.784 115.099 242.607 116.203 243.213 116.939C243.819 117.675 244.446 118.259 245.096 118.692C245.745 119.103 246.47 119.32 247.271 119.341Z","fill":"#D2B67E","key":28}),React.createElement("path",{"d":"M253.867 116.971C253.867 117.664 253.953 118.173 254.127 118.497C254.3 118.8 254.624 119.017 255.101 119.147C255.598 119.276 256.388 119.341 257.471 119.341C257.536 119.341 257.568 119.406 257.568 119.536C257.568 119.666 257.536 119.731 257.471 119.731C256.583 119.731 255.891 119.72 255.393 119.698L252.568 119.666L250.328 119.698C249.917 119.72 249.354 119.731 248.64 119.731C248.596 119.731 248.575 119.666 248.575 119.536C248.575 119.406 248.596 119.341 248.64 119.341C249.419 119.341 249.982 119.287 250.328 119.179C250.696 119.071 250.945 118.865 251.075 118.562C251.205 118.237 251.27 117.75 251.27 117.101V102.069C251.27 101.42 251.205 100.943 251.075 100.64C250.945 100.337 250.696 100.132 250.328 100.024C249.982 99.8937 249.419 99.8288 248.64 99.8288C248.596 99.8288 248.575 99.7638 248.575 99.634C248.575 99.5041 248.596 99.4392 248.64 99.4392L250.328 99.4716C251.237 99.5149 251.973 99.5366 252.536 99.5366C253.055 99.5366 253.672 99.5041 254.386 99.4392C254.646 99.4392 255.046 99.4283 255.588 99.4067C256.15 99.3634 256.637 99.3418 257.049 99.3418C259.083 99.3418 260.717 99.7963 261.951 100.705C263.185 101.593 263.802 102.946 263.802 104.764C263.802 106.171 263.445 107.361 262.73 108.335C262.038 109.309 261.139 110.034 260.036 110.51C258.953 110.987 257.828 111.225 256.659 111.225C256.031 111.225 255.512 111.171 255.101 111.062C255.036 111.062 255.003 111.008 255.003 110.9C255.003 110.835 255.014 110.77 255.036 110.705C255.079 110.64 255.122 110.619 255.166 110.64C255.512 110.727 255.901 110.77 256.334 110.77C257.611 110.77 258.694 110.305 259.581 109.374C260.468 108.443 260.912 107.101 260.912 105.348C260.912 103.638 260.479 102.307 259.613 101.355C258.748 100.381 257.601 99.8937 256.172 99.8937C255.523 99.8937 255.036 99.9478 254.711 100.056C254.408 100.143 254.192 100.348 254.062 100.673C253.932 100.976 253.867 101.463 253.867 102.134V116.971Z","fill":"#D2B67E","key":29}),React.createElement("path",{"d":"M286.401 119.341C286.487 119.341 286.531 119.406 286.531 119.536C286.531 119.666 286.487 119.731 286.401 119.731C285.99 119.731 285.329 119.709 284.42 119.666C283.555 119.623 282.916 119.601 282.505 119.601C282.007 119.601 281.39 119.623 280.654 119.666C279.918 119.709 279.366 119.731 278.998 119.731C278.912 119.731 278.869 119.666 278.869 119.536C278.869 119.406 278.912 119.341 278.998 119.341C279.734 119.341 280.265 119.276 280.589 119.147C280.914 118.995 281.076 118.735 281.076 118.367C281.076 117.999 280.914 117.491 280.589 116.841L276.953 109.309H270.979L268.317 115.445C268.014 116.16 267.862 116.755 267.862 117.231C267.862 118.638 268.912 119.341 271.012 119.341C271.12 119.341 271.174 119.406 271.174 119.536C271.174 119.666 271.12 119.731 271.012 119.731C270.622 119.731 270.059 119.709 269.323 119.666C268.501 119.623 267.787 119.601 267.181 119.601C266.618 119.601 265.947 119.623 265.168 119.666C264.475 119.709 263.912 119.731 263.479 119.731C263.393 119.731 263.349 119.666 263.349 119.536C263.349 119.406 263.393 119.341 263.479 119.341C264.085 119.341 264.594 119.222 265.005 118.984C265.438 118.746 265.849 118.335 266.239 117.75C266.629 117.166 267.072 116.3 267.57 115.153L274.486 99.2119C274.507 99.147 274.583 99.1145 274.713 99.1145C274.843 99.0929 274.918 99.1253 274.94 99.2119L282.765 115.283C283.501 116.863 284.128 117.934 284.648 118.497C285.167 119.06 285.752 119.341 286.401 119.341ZM271.271 108.562H276.596L273.804 102.718L271.271 108.562Z","fill":"#D2B67E","key":30}),React.createElement("path",{"d":"M299.593 99.082C300.589 99.082 301.617 99.1794 302.678 99.3742C303.738 99.5474 304.582 99.7963 305.21 100.121C305.383 100.208 305.491 100.305 305.535 100.413C305.6 100.5 305.654 100.662 305.697 100.9L306.054 104.829C306.054 104.894 306 104.937 305.892 104.959C305.784 104.959 305.719 104.926 305.697 104.861C305.134 103.173 304.214 101.917 302.937 101.095C301.66 100.251 300.124 99.8288 298.327 99.8288C296.747 99.8288 295.373 100.197 294.204 100.933C293.035 101.647 292.137 102.664 291.509 103.985C290.903 105.305 290.6 106.831 290.6 108.562C290.6 110.575 290.99 112.426 291.769 114.114C292.548 115.802 293.598 117.144 294.918 118.14C296.26 119.114 297.721 119.601 299.301 119.601C302.418 119.601 304.647 117.815 305.989 114.244C305.989 114.179 306.033 114.147 306.119 114.147C306.184 114.147 306.238 114.157 306.281 114.179C306.346 114.201 306.379 114.233 306.379 114.277L305.924 118.205C305.881 118.465 305.827 118.638 305.762 118.724C305.719 118.789 305.6 118.865 305.405 118.952C303.414 119.731 301.379 120.121 299.301 120.121C296.682 120.121 294.496 119.601 292.743 118.562C290.99 117.502 289.702 116.16 288.879 114.536C288.057 112.913 287.646 111.214 287.646 109.439C287.646 107.426 288.197 105.64 289.301 104.082C290.427 102.502 291.899 101.279 293.717 100.413C295.557 99.5257 297.515 99.082 299.593 99.082Z","fill":"#D2B67E","key":31}),React.createElement("path",{"d":"M327.903 99.4392C327.968 99.4392 328 99.5041 328 99.634C328 99.7638 327.968 99.8288 327.903 99.8288C327.318 99.8288 326.745 100.067 326.182 100.543C325.619 100.998 325.154 101.625 324.786 102.426L317.903 117.653C317.513 118.519 317.07 119.147 316.572 119.536C316.096 119.926 315.479 120.121 314.721 120.121C314.007 120.121 313.412 119.958 312.935 119.634C312.459 119.309 312.221 118.876 312.221 118.335C312.221 117.945 312.351 117.61 312.611 117.328C312.87 117.025 313.228 116.874 313.682 116.874C314.093 116.874 314.396 116.982 314.591 117.199C314.808 117.415 315.002 117.718 315.176 118.108C315.284 118.367 315.392 118.573 315.5 118.724C315.609 118.854 315.749 118.919 315.922 118.919C316.139 118.919 316.344 118.811 316.539 118.595C316.734 118.378 316.94 118.021 317.156 117.523L318.065 115.51L310.955 102.134C310.479 101.268 310.046 100.673 309.656 100.348C309.288 100.002 308.79 99.8288 308.163 99.8288C308.12 99.8288 308.098 99.7638 308.098 99.634C308.098 99.5041 308.12 99.4392 308.163 99.4392L309.332 99.4716C309.981 99.5149 310.641 99.5366 311.312 99.5366C312.329 99.5366 313.314 99.5149 314.267 99.4716C314.591 99.45 314.992 99.4392 315.468 99.4392C315.533 99.4392 315.565 99.5041 315.565 99.634C315.565 99.7638 315.533 99.8288 315.468 99.8288C314.061 99.8288 313.357 100.186 313.357 100.9C313.357 101.138 313.455 101.441 313.65 101.809L319.364 112.588L323.974 102.329C324.147 101.982 324.234 101.625 324.234 101.257C324.234 100.305 323.422 99.8288 321.799 99.8288C321.734 99.8288 321.701 99.7638 321.701 99.634C321.701 99.5041 321.734 99.4392 321.799 99.4392L323.162 99.4716C323.942 99.5149 324.634 99.5366 325.24 99.5366C325.63 99.5366 326.106 99.5149 326.669 99.4716L327.903 99.4392Z","fill":"#D2B67E","key":32}),React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M156.177 29.6076L153.359 19.043C162.94 27.4947 171.91 17.3997 175.197 12C178.485 17.3997 187.455 27.4947 197.035 19.043L194.217 29.6076C190.93 27.7294 182.524 24.114 175.197 24.6775C167.871 24.114 159.465 27.7294 156.177 29.6076ZM158.318 38.9565C160.132 37.1424 162.646 36.2353 165.859 36.2353C167.777 36.2353 169.151 36.339 169.98 36.5463C170.809 36.7537 171.379 37.1942 171.69 37.868C172.001 38.49 172.157 39.5267 172.157 40.978V59.4345C169.823 61.8871 165.695 67.6555 166.373 72.7898C167.229 79.2734 168.686 80.9585 171.332 83.4285C170.943 83.9175 170.362 84.2634 169.591 84.4664C168.606 84.7255 167.051 84.8551 164.926 84.8551C164.771 84.8551 164.693 85.0106 164.693 85.3216C164.693 85.6326 164.771 85.7881 164.926 85.7881C166.792 85.7881 168.243 85.7622 169.28 85.7103L175.267 85.6326L181.409 85.7103C182.445 85.7622 183.871 85.7881 185.685 85.7881C185.789 85.7881 185.84 85.6326 185.84 85.3216C185.84 85.0106 185.789 84.8551 185.685 84.8551C183.508 84.8551 181.927 84.7255 180.942 84.4664C179.957 84.2072 179.284 83.7148 178.921 82.9892C178.61 82.2635 178.454 81.0973 178.454 79.4905V75.9301C179.764 75.8498 182.227 75.7267 184.117 75.7267C186.221 75.7267 186.823 74.6596 186.861 74.126V70.353C187.433 69.9719 188.256 69.141 187.89 68.8666C187.524 68.5922 186.899 67.9138 186.632 67.6089C187.318 67.3421 188.53 66.74 187.89 66.4656C187.25 66.1912 186.785 65.3603 186.632 64.9792C188.7 63.6354 188.524 63.2262 188.387 62.9065L188.387 62.9064C188.372 62.8726 188.358 62.8397 188.347 62.8069C188.256 62.5325 186.785 61.3967 186.061 60.8632C185.337 60.1009 184.048 58.4164 184.689 57.7761C185.329 57.1359 185.26 55.8324 185.146 55.2608C184.872 52.8826 181.754 49.1629 180.23 47.6003C179.772 52.2652 178.82 55.1083 178.4 55.9468C177.486 57.9667 174.97 62.9669 172.226 66.8086C169.537 70.573 171.02 76.1087 172.157 78.553V79.4905C172.157 80.5222 172.077 81.3827 171.917 82.0722C170.983 81.4431 169.3 78.9235 168.743 72.7898C168.4 69.0236 170.117 65.5884 172.157 63.1068V63.1686C174.726 59.5158 177.316 55.3098 178.454 50.4682V41.1334C178.454 39.6303 178.61 38.5678 178.921 37.9458C179.232 37.272 179.802 36.8314 180.631 36.6241C181.461 36.3649 182.834 36.2353 184.752 36.2353C188.121 36.2353 190.661 37.1165 192.371 38.8788C194.082 40.641 195.118 43.5177 195.481 47.5088C195.481 47.6124 195.611 47.6643 195.87 47.6643C196.181 47.6643 196.336 47.6124 196.336 47.5088C196.336 45.5392 196.414 42.9476 196.57 39.734C196.777 36.5204 196.958 34.188 197.114 32.7367C197.114 32.5294 196.958 32.4257 196.647 32.4257C196.388 32.4257 196.233 32.5294 196.181 32.7367C195.922 33.5142 195.351 34.0325 194.47 34.2916C193.589 34.5508 192.19 34.6804 190.272 34.6804L184.985 34.7581C181.564 34.8618 178.325 34.9136 175.267 34.9136C169.254 34.9136 164.045 34.8359 159.639 34.6804C156.789 34.6804 155.363 34.1102 155.363 32.9699C155.363 32.7108 155.208 32.5812 154.897 32.5812C154.586 32.5812 154.43 32.7108 154.43 32.9699C154.43 34.6286 154.301 37.0906 154.042 40.356C153.782 43.6214 153.549 46.0056 153.342 47.5088C153.342 47.6124 153.471 47.6643 153.731 47.6643C154.042 47.6643 154.223 47.6124 154.275 47.5088C155.156 43.5695 156.504 40.7188 158.318 38.9565Z","fill":"#D2B67E","key":33})]);
}

LogoBig.defaultProps = {"width":"349","height":"154","viewBox":"0 0 349 154","fill":"none"};

module.exports = LogoBig;

LogoBig.default = LogoBig;


/***/ }),

/***/ "./src/svg/logo_main.svg":
/*!*******************************!*\
  !*** ./src/svg/logo_main.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function LogoMain (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M66.1 20.15C64.7 20.15 63.6333 20.3167 62.9 20.65C62.2 20.95 61.6833 21.5167 61.35 22.35C61.0167 23.15 60.75 24.3667 60.55 26C60.55 26.0667 60.45 26.1 60.25 26.1C60.0833 26.1 60 26.0667 60 26C60.1 25.2667 60.2 24.0667 60.3 22.4C60.4333 20.7 60.5 19.4 60.5 18.5C60.5 18.3334 60.6 18.25 60.8 18.25C61 18.25 61.1 18.3334 61.1 18.5C61.1 18.9334 61.35 19.2167 61.85 19.35C62.35 19.45 62.9667 19.5 63.7 19.5C66.6333 19.5667 69.15 19.6 71.25 19.6L75.6 19.55C76.2 19.5167 76.9833 19.5 77.95 19.5C79.15 19.5 80.0167 19.4334 80.55 19.3C81.1167 19.1334 81.4833 18.8 81.65 18.3C81.7167 18.2 81.8333 18.15 82 18.15C82.1667 18.15 82.25 18.2 82.25 18.3C82.05 21.9 81.95 24.4667 81.95 26C81.95 26.0667 81.85 26.1 81.65 26.1C81.4833 26.1 81.4 26.0667 81.4 26C81.4 24.3334 81.2667 23.1 81 22.3C80.7667 21.5 80.3 20.95 79.6 20.65C78.9333 20.3167 77.8833 20.15 76.45 20.15C75.35 20.15 74.5167 20.25 73.95 20.45C73.3833 20.65 72.9833 21 72.75 21.5C72.55 21.9667 72.45 22.6834 72.45 23.65V39.95C72.45 40.9834 72.55 41.7334 72.75 42.2C72.95 42.6667 73.35 42.9834 73.95 43.15C74.5833 43.3167 75.5667 43.4 76.9 43.4C76.9667 43.4 77 43.5 77 43.7C77 43.9 76.9667 44 76.9 44C75.8667 44 75.0667 43.9834 74.5 43.95L71.1 43.9L67.85 43.95C67.25 43.9834 66.4167 44 65.35 44C65.2833 44 65.25 43.9 65.25 43.7C65.25 43.5 65.2833 43.4 65.35 43.4C66.65 43.4 67.6 43.3167 68.2 43.15C68.8333 42.9834 69.2667 42.6667 69.5 42.2C69.7333 41.7 69.85 40.95 69.85 39.95V23.55C69.85 22.55 69.7667 21.8167 69.6 21.35C69.4333 20.8834 69.0833 20.5667 68.55 20.4C68.05 20.2334 67.2333 20.15 66.1 20.15Z","fill":"#D2B67E","key":0}),React.createElement("path",{"d":"M5.859 61.084C5.439 61.084 4.956 61.063 4.41 61.021C4.2 61.007 3.941 60.993 3.633 60.979C3.325 60.965 2.982 60.958 2.604 60.958L1.134 60.979C0.868 60.993 0.504 61 0.042 61C0.014 61 0 60.958 0 60.874C0 60.79 0.014 60.748 0.042 60.748C0.546 60.748 0.917 60.713 1.155 60.643C1.393 60.573 1.554 60.44 1.638 60.244C1.722 60.034 1.764 59.719 1.764 59.299V49.576C1.764 49.156 1.722 48.848 1.638 48.652C1.554 48.456 1.393 48.323 1.155 48.253C0.931 48.169 0.574 48.127 0.084 48.127C0.042 48.127 0.021 48.085 0.021 48.001C0.021 47.917 0.042 47.875 0.084 47.875L1.134 47.896C1.75 47.924 2.24 47.938 2.604 47.938C3.136 47.938 3.675 47.917 4.221 47.875C4.893 47.847 5.341 47.833 5.565 47.833C7.007 47.833 8.288 48.113 9.408 48.673C10.528 49.233 11.396 49.996 12.012 50.962C12.628 51.928 12.936 53.013 12.936 54.217C12.936 55.575 12.614 56.779 11.97 57.829C11.34 58.865 10.486 59.67 9.408 60.244C8.33 60.804 7.147 61.084 5.859 61.084ZM5.649 60.706C6.699 60.706 7.623 60.475 8.421 60.013C9.233 59.537 9.863 58.851 10.311 57.955C10.773 57.045 11.004 55.953 11.004 54.679C11.004 53.461 10.787 52.362 10.353 51.382C9.933 50.388 9.324 49.611 8.526 49.051C7.742 48.477 6.825 48.19 5.775 48.19C5.173 48.19 4.711 48.225 4.389 48.295C4.067 48.365 3.829 48.505 3.675 48.715C3.521 48.911 3.444 49.212 3.444 49.618V59.068C3.444 59.67 3.591 60.097 3.885 60.349C4.193 60.587 4.781 60.706 5.649 60.706Z","fill":"#D2B67E","key":1}),React.createElement("path",{"d":"M25.5211 60.748C25.5631 60.748 25.5841 60.79 25.5841 60.874C25.5841 60.958 25.5631 61 25.5211 61H22.7491C22.5251 61 22.1051 60.58 21.4891 59.74C20.8731 58.9 20.1451 57.745 19.3051 56.275C19.0111 56.317 18.7171 56.338 18.4231 56.338C18.1291 56.338 17.9051 56.331 17.7511 56.317V59.299C17.7511 59.733 17.7861 60.048 17.8561 60.244C17.9261 60.44 18.0591 60.573 18.2551 60.643C18.4511 60.713 18.7731 60.748 19.2211 60.748C19.2631 60.748 19.2841 60.79 19.2841 60.874C19.2841 60.958 19.2631 61 19.2211 61C18.8291 61 18.5211 60.993 18.2971 60.979L16.9531 60.958L15.6511 60.979C15.4131 60.993 15.0841 61 14.6641 61C14.6361 61 14.6221 60.958 14.6221 60.874C14.6221 60.79 14.6361 60.748 14.6641 60.748C15.1121 60.748 15.4341 60.713 15.6301 60.643C15.8401 60.573 15.9801 60.44 16.0501 60.244C16.1341 60.034 16.1761 59.719 16.1761 59.299V52.873C16.1761 52.453 16.1341 52.145 16.0501 51.949C15.9801 51.753 15.8401 51.62 15.6301 51.55C15.4341 51.466 15.1261 51.424 14.7061 51.424C14.6641 51.424 14.6431 51.382 14.6431 51.298C14.6431 51.214 14.6641 51.172 14.7061 51.172L15.6721 51.193C16.2041 51.221 16.6311 51.235 16.9531 51.235C17.2191 51.235 17.4571 51.228 17.6671 51.214C17.8911 51.2 18.0801 51.186 18.2341 51.172C18.6681 51.13 19.0811 51.109 19.4731 51.109C20.4391 51.109 21.1741 51.284 21.6781 51.634C22.1961 51.984 22.4551 52.488 22.4551 53.146C22.4551 53.706 22.2871 54.224 21.9511 54.7C21.6291 55.162 21.1811 55.54 20.6071 55.834C21.3771 57.108 22.0281 58.095 22.5601 58.795C23.1061 59.495 23.6101 59.999 24.0721 60.307C24.5341 60.601 25.0171 60.748 25.5211 60.748ZM17.7511 55.918C18.0591 55.946 18.3321 55.96 18.5701 55.96C19.4101 55.96 19.9911 55.771 20.3131 55.393C20.6491 55.015 20.8171 54.455 20.8171 53.713C20.8171 52.201 20.1941 51.445 18.9481 51.445C18.4581 51.445 18.1361 51.55 17.9821 51.76C17.8281 51.97 17.7511 52.355 17.7511 52.915V55.918Z","fill":"#D2B67E","key":2}),React.createElement("path",{"d":"M27.3919 61.231C27.0839 61.231 26.8319 61.14 26.6359 60.958C26.4539 60.762 26.3629 60.51 26.3629 60.202C26.3629 59.894 26.4539 59.656 26.6359 59.488C26.8179 59.306 27.0699 59.215 27.3919 59.215C27.7139 59.215 27.9589 59.306 28.1269 59.488C28.3089 59.656 28.3999 59.894 28.3999 60.202C28.3999 60.524 28.3089 60.776 28.1269 60.958C27.9589 61.14 27.7139 61.231 27.3919 61.231Z","fill":"#D2B67E","key":3}),React.createElement("path",{"d":"M51.5959 60.748C51.6239 60.748 51.6379 60.79 51.6379 60.874C51.6379 60.958 51.6239 61 51.5959 61C51.1479 61 50.7908 60.993 50.5248 60.979L49.0339 60.958L47.6269 60.979C47.3888 60.993 47.0599 61 46.6399 61C46.5979 61 46.5769 60.958 46.5769 60.874C46.5769 60.79 46.5979 60.748 46.6399 60.748C47.2559 60.748 47.6689 60.678 47.8789 60.538C48.1029 60.398 48.2149 60.104 48.2149 59.656L48.1939 59.299L47.7948 50.059L43.1539 60.853C43.1259 60.909 43.0699 60.937 42.9859 60.937C42.9019 60.937 42.8459 60.909 42.8179 60.853L37.5889 50.143L37.4209 58.585C37.4069 59.327 37.5399 59.873 37.8199 60.223C38.0999 60.573 38.5549 60.748 39.1849 60.748C39.2269 60.748 39.2479 60.79 39.2479 60.874C39.2479 60.958 39.2269 61 39.1849 61C38.8069 61 38.5128 60.993 38.3028 60.979L37.1479 60.958L35.9929 60.979C35.7969 60.993 35.5099 61 35.1319 61C35.1039 61 35.0899 60.958 35.0899 60.874C35.0899 60.79 35.1039 60.748 35.1319 60.748C36.2939 60.748 36.8819 60.027 36.8959 58.585L37.0849 49.177C36.6369 48.477 36.0349 48.127 35.2789 48.127C35.2509 48.127 35.2369 48.085 35.2369 48.001C35.2369 47.917 35.2509 47.875 35.2789 47.875L36.1189 47.896C36.2869 47.91 36.5039 47.917 36.7699 47.917C37.0779 47.917 37.3299 47.91 37.5259 47.896C37.7219 47.882 37.8759 47.875 37.9879 47.875C38.1699 47.875 38.3169 47.938 38.4289 48.064C38.5409 48.19 38.7158 48.491 38.9538 48.967L43.6159 58.438L48.0049 48.4C48.1449 48.05 48.3548 47.875 48.6348 47.875C48.7188 47.875 48.8309 47.882 48.9709 47.896C49.1109 47.91 49.2928 47.917 49.5168 47.917L50.5879 47.896C50.7559 47.882 51.0009 47.875 51.3229 47.875C51.3649 47.875 51.3858 47.917 51.3858 48.001C51.3858 48.085 51.3649 48.127 51.3229 48.127C50.6369 48.127 50.1399 48.239 49.8319 48.463C49.5379 48.687 49.3979 49.079 49.4118 49.639L49.8739 59.299C49.9019 59.733 49.9579 60.048 50.0419 60.244C50.1259 60.44 50.2799 60.573 50.5039 60.643C50.7279 60.713 51.0919 60.748 51.5959 60.748Z","fill":"#D2B67E","key":4}),React.createElement("path",{"d":"M63.7506 60.748C63.8206 60.748 63.8556 60.79 63.8556 60.874C63.8556 60.958 63.8206 61 63.7506 61C63.4846 61 63.0716 60.986 62.5116 60.958C61.9236 60.93 61.5036 60.916 61.2516 60.916C61.0416 60.916 60.7266 60.93 60.3066 60.958C59.9146 60.986 59.6136 61 59.4036 61C59.3476 61 59.3196 60.958 59.3196 60.874C59.3196 60.79 59.3476 60.748 59.4036 60.748C59.7536 60.748 60.0056 60.706 60.1596 60.622C60.3276 60.524 60.4116 60.377 60.4116 60.181C60.4116 59.929 60.3206 59.614 60.1386 59.236L58.7736 56.296H55.9806L55.1196 58.417C54.8816 59.005 54.7626 59.453 54.7626 59.761C54.7626 60.111 54.8816 60.363 55.1196 60.517C55.3716 60.671 55.7566 60.748 56.2746 60.748C56.3446 60.748 56.3796 60.79 56.3796 60.874C56.3796 60.958 56.3446 61 56.2746 61C56.0646 61 55.7776 60.986 55.4136 60.958C55.0216 60.93 54.6576 60.916 54.3216 60.916C53.9716 60.916 53.5586 60.93 53.0826 60.958C52.6626 60.986 52.3266 61 52.0746 61C52.0046 61 51.9696 60.958 51.9696 60.874C51.9696 60.79 52.0046 60.748 52.0746 60.748C52.5086 60.748 52.8516 60.685 53.1036 60.559C53.3696 60.433 53.6076 60.202 53.8176 59.866C54.0416 59.516 54.3076 58.97 54.6156 58.228L57.6816 50.857C57.7096 50.801 57.7516 50.773 57.8076 50.773C57.8636 50.773 57.9056 50.801 57.9336 50.857L61.2936 58.123C61.6576 58.893 61.9516 59.46 62.1756 59.824C62.3996 60.174 62.6236 60.419 62.8476 60.559C63.0856 60.685 63.3866 60.748 63.7506 60.748ZM56.1696 55.855H58.5636L57.2826 53.104L56.1696 55.855Z","fill":"#D2B67E","key":5}),React.createElement("path",{"d":"M66.2803 51.487C65.5803 51.487 65.0413 51.683 64.6633 52.075C64.2853 52.453 63.9983 53.083 63.8023 53.965C63.8023 53.993 63.7603 54.007 63.6763 54.007C63.6063 54.007 63.5713 53.993 63.5713 53.965C63.6273 53.531 63.6833 52.971 63.7393 52.285C63.7953 51.599 63.8233 51.074 63.8233 50.71C63.8233 50.64 63.8583 50.605 63.9283 50.605C64.0123 50.605 64.0543 50.64 64.0543 50.71C64.0543 50.892 64.1593 51.011 64.3693 51.067C64.5793 51.109 64.8453 51.13 65.1673 51.13C66.3713 51.158 67.4283 51.172 68.3383 51.172L70.1653 51.151C70.4033 51.137 70.7253 51.13 71.1313 51.13C71.6633 51.13 72.0483 51.102 72.2863 51.046C72.5383 50.976 72.6993 50.836 72.7693 50.626C72.7973 50.584 72.8463 50.563 72.9163 50.563C72.9863 50.563 73.0213 50.584 73.0213 50.626C72.9233 52.432 72.8743 53.545 72.8743 53.965C72.8743 53.993 72.8323 54.007 72.7483 54.007C72.6783 54.007 72.6433 53.993 72.6433 53.965C72.5873 53.111 72.3773 52.488 72.0133 52.096C71.6493 51.69 71.1103 51.487 70.3963 51.487C69.8783 51.487 69.5353 51.585 69.3673 51.781C69.1993 51.963 69.1153 52.327 69.1153 52.873V59.299C69.1153 59.733 69.1503 60.048 69.2203 60.244C69.3043 60.44 69.4653 60.573 69.7033 60.643C69.9413 60.713 70.3193 60.748 70.8373 60.748C70.8653 60.748 70.8793 60.79 70.8793 60.874C70.8793 60.958 70.8653 61 70.8373 61C70.3753 61 70.0183 60.993 69.7663 60.979L68.2963 60.958L66.8473 60.979C66.5813 60.993 66.2173 61 65.7553 61C65.7273 61 65.7133 60.958 65.7133 60.874C65.7133 60.79 65.7273 60.748 65.7553 60.748C66.2733 60.748 66.6513 60.713 66.8893 60.643C67.1273 60.573 67.2883 60.44 67.3723 60.244C67.4703 60.034 67.5193 59.719 67.5193 59.299V52.831C67.5193 52.439 67.4913 52.152 67.4353 51.97C67.3793 51.788 67.2673 51.662 67.0993 51.592C66.9313 51.522 66.6583 51.487 66.2803 51.487Z","fill":"#D2B67E","key":6}),React.createElement("path",{"d":"M79.2803 61.252C78.3003 61.252 77.4253 61.021 76.6553 60.559C75.8853 60.097 75.2833 59.474 74.8493 58.69C74.4293 57.906 74.2192 57.052 74.2192 56.128C74.2192 55.05 74.4992 54.119 75.0592 53.335C75.6192 52.537 76.3332 51.935 77.2012 51.529C78.0832 51.123 78.9793 50.92 79.8893 50.92C80.8693 50.92 81.7372 51.165 82.4932 51.655C83.2492 52.131 83.8303 52.754 84.2363 53.524C84.6423 54.294 84.8453 55.099 84.8453 55.939C84.8453 56.877 84.5932 57.759 84.0892 58.585C83.5852 59.397 82.9062 60.048 82.0522 60.538C81.2122 61.014 80.2883 61.252 79.2803 61.252ZM79.8053 60.811C80.7993 60.811 81.5903 60.426 82.1783 59.656C82.7803 58.886 83.0813 57.815 83.0813 56.443C83.0813 55.519 82.9272 54.672 82.6192 53.902C82.3112 53.132 81.8632 52.523 81.2752 52.075C80.6872 51.613 79.9872 51.382 79.1752 51.382C78.1532 51.382 77.3622 51.746 76.8022 52.474C76.2422 53.202 75.9622 54.231 75.9622 55.561C75.9622 56.541 76.1233 57.43 76.4453 58.228C76.7673 59.026 77.2152 59.656 77.7892 60.118C78.3772 60.58 79.0493 60.811 79.8053 60.811Z","fill":"#D2B67E","key":7}),React.createElement("path",{"d":"M89.2598 59.215C89.2598 59.607 89.2948 59.901 89.3648 60.097C89.4488 60.293 89.5958 60.433 89.8058 60.517C90.0158 60.587 90.3378 60.622 90.7718 60.622H91.7798C92.5358 60.622 93.1658 60.384 93.6698 59.908C94.1878 59.418 94.5518 58.76 94.7618 57.934C94.7618 57.906 94.7898 57.892 94.8458 57.892C94.8878 57.892 94.9228 57.899 94.9508 57.913C94.9928 57.927 95.0138 57.948 95.0138 57.976C94.9158 58.648 94.8668 59.551 94.8668 60.685C94.8668 60.797 94.8388 60.881 94.7828 60.937C94.7408 60.979 94.6568 61 94.5308 61H86.2568C86.2288 61 86.2148 60.958 86.2148 60.874C86.2148 60.79 86.2288 60.748 86.2568 60.748C86.6908 60.748 87.0058 60.713 87.2018 60.643C87.3978 60.573 87.5308 60.44 87.6008 60.244C87.6708 60.034 87.7058 59.719 87.7058 59.299V52.873C87.7058 52.453 87.6708 52.145 87.6008 51.949C87.5308 51.753 87.3908 51.62 87.1808 51.55C86.9848 51.466 86.6768 51.424 86.2568 51.424C86.2288 51.424 86.2148 51.382 86.2148 51.298C86.2148 51.214 86.2288 51.172 86.2568 51.172L87.2228 51.193C87.7828 51.221 88.2168 51.235 88.5248 51.235C88.8608 51.235 89.3088 51.221 89.8688 51.193L90.7928 51.172C90.8208 51.172 90.8348 51.214 90.8348 51.298C90.8348 51.382 90.8208 51.424 90.7928 51.424C90.3448 51.424 90.0158 51.466 89.8058 51.55C89.5958 51.62 89.4488 51.76 89.3648 51.97C89.2948 52.166 89.2598 52.474 89.2598 52.894V59.215Z","fill":"#D2B67E","key":8}),React.createElement("path",{"d":"M99.2316 59.299C99.2316 59.719 99.2666 60.034 99.3366 60.244C99.4066 60.44 99.5396 60.573 99.7356 60.643C99.9456 60.713 100.275 60.748 100.723 60.748C100.765 60.748 100.786 60.79 100.786 60.874C100.786 60.958 100.765 61 100.723 61C100.317 61 100.002 60.993 99.7776 60.979L98.4336 60.958L97.1316 60.979C96.8936 60.993 96.5646 61 96.1446 61C96.1166 61 96.1026 60.958 96.1026 60.874C96.1026 60.79 96.1166 60.748 96.1446 60.748C96.5926 60.748 96.9216 60.713 97.1316 60.643C97.3416 60.573 97.4816 60.44 97.5516 60.244C97.6356 60.034 97.6776 59.719 97.6776 59.299V52.873C97.6776 52.453 97.6356 52.145 97.5516 51.949C97.4816 51.753 97.3416 51.62 97.1316 51.55C96.9216 51.466 96.5926 51.424 96.1446 51.424C96.1166 51.424 96.1026 51.382 96.1026 51.298C96.1026 51.214 96.1166 51.172 96.1446 51.172L97.1316 51.193C97.6636 51.221 98.0976 51.235 98.4336 51.235C98.7836 51.235 99.2386 51.221 99.7986 51.193L100.723 51.172C100.765 51.172 100.786 51.214 100.786 51.298C100.786 51.382 100.765 51.424 100.723 51.424C100.289 51.424 99.9666 51.466 99.7566 51.55C99.5606 51.634 99.4206 51.781 99.3366 51.991C99.2666 52.187 99.2316 52.495 99.2316 52.915V59.299Z","fill":"#D2B67E","key":9}),React.createElement("path",{"d":"M112.984 51.172C113.012 51.172 113.026 51.214 113.026 51.298C113.026 51.382 113.012 51.424 112.984 51.424C112.452 51.424 112.067 51.592 111.829 51.928C111.591 52.264 111.472 52.817 111.472 53.587V61.231C111.472 61.259 111.437 61.28 111.367 61.294C111.297 61.308 111.248 61.301 111.22 61.273L104.143 52.894L103.975 52.705V58.585C103.975 59.355 104.087 59.908 104.311 60.244C104.535 60.58 104.913 60.748 105.445 60.748C105.487 60.748 105.508 60.79 105.508 60.874C105.508 60.958 105.487 61 105.445 61C105.137 61 104.899 60.993 104.731 60.979L103.786 60.958L102.862 60.979C102.68 60.993 102.421 61 102.085 61C102.043 61 102.022 60.958 102.022 60.874C102.022 60.79 102.043 60.748 102.085 60.748C102.617 60.748 102.995 60.58 103.219 60.244C103.457 59.908 103.576 59.355 103.576 58.585V52.264C103.282 51.97 103.009 51.76 102.757 51.634C102.519 51.494 102.274 51.424 102.022 51.424C101.994 51.424 101.98 51.382 101.98 51.298C101.98 51.214 101.994 51.172 102.022 51.172L103.198 51.193C103.338 51.193 103.499 51.193 103.681 51.193C103.863 51.179 104.164 51.172 104.584 51.172C104.696 51.172 104.78 51.207 104.836 51.277C104.906 51.333 105.004 51.452 105.13 51.634C105.256 51.83 105.41 52.04 105.592 52.264L111.052 58.795V53.587C111.052 52.803 110.94 52.25 110.716 51.928C110.492 51.592 110.114 51.424 109.582 51.424C109.554 51.424 109.54 51.382 109.54 51.298C109.54 51.214 109.554 51.172 109.582 51.172L110.317 51.193C110.709 51.221 111.017 51.235 111.241 51.235C111.479 51.235 111.794 51.221 112.186 51.193L112.984 51.172Z","fill":"#D2B67E","key":10}),React.createElement("path",{"d":"M122.148 58.207C122.162 58.165 122.204 58.144 122.274 58.144C122.358 58.144 122.4 58.165 122.4 58.207C122.302 59.215 122.253 60.041 122.253 60.685C122.253 60.797 122.232 60.881 122.19 60.937C122.148 60.979 122.064 61 121.938 61H114.168C114.14 61 114.126 60.958 114.126 60.874C114.126 60.79 114.14 60.748 114.168 60.748C114.616 60.748 114.938 60.713 115.134 60.643C115.344 60.573 115.484 60.44 115.554 60.244C115.638 60.034 115.68 59.719 115.68 59.299V52.873C115.68 52.453 115.638 52.145 115.554 51.949C115.484 51.753 115.344 51.62 115.134 51.55C114.924 51.466 114.602 51.424 114.168 51.424C114.14 51.424 114.126 51.382 114.126 51.298C114.126 51.214 114.14 51.172 114.168 51.172H121.56C121.7 51.172 121.77 51.228 121.77 51.34L121.791 52.642C121.805 52.908 121.812 53.244 121.812 53.65C121.812 53.692 121.77 53.713 121.686 53.713C121.602 53.713 121.56 53.692 121.56 53.65C121.434 53.006 121.14 52.481 120.678 52.075C120.23 51.655 119.712 51.445 119.124 51.445H118.662C118.242 51.445 117.927 51.487 117.717 51.571C117.521 51.641 117.388 51.774 117.318 51.97C117.248 52.166 117.213 52.474 117.213 52.894V55.75C118.473 55.736 119.348 55.701 119.838 55.645C120.342 55.575 120.629 55.54 120.699 55.54C120.783 55.54 120.825 55.694 120.825 56.002C120.825 56.324 120.783 56.485 120.699 56.485C120.643 56.485 120.363 56.45 119.859 56.38C119.355 56.31 118.473 56.261 117.213 56.233V59.215C117.213 59.621 117.248 59.929 117.318 60.139C117.388 60.335 117.521 60.475 117.717 60.559C117.927 60.629 118.242 60.664 118.662 60.664H119.439C120.041 60.664 120.594 60.433 121.098 59.971C121.602 59.509 121.952 58.921 122.148 58.207Z","fill":"#D2B67E","key":11}),React.createElement("path",{"d":"M126.45 51.487C125.75 51.487 125.211 51.683 124.833 52.075C124.455 52.453 124.168 53.083 123.972 53.965C123.972 53.993 123.93 54.007 123.846 54.007C123.776 54.007 123.741 53.993 123.741 53.965C123.797 53.531 123.853 52.971 123.909 52.285C123.965 51.599 123.993 51.074 123.993 50.71C123.993 50.64 124.028 50.605 124.098 50.605C124.182 50.605 124.224 50.64 124.224 50.71C124.224 50.892 124.329 51.011 124.539 51.067C124.749 51.109 125.015 51.13 125.337 51.13C126.541 51.158 127.598 51.172 128.508 51.172L130.335 51.151C130.573 51.137 130.895 51.13 131.301 51.13C131.833 51.13 132.218 51.102 132.456 51.046C132.708 50.976 132.869 50.836 132.939 50.626C132.967 50.584 133.016 50.563 133.086 50.563C133.156 50.563 133.191 50.584 133.191 50.626C133.093 52.432 133.044 53.545 133.044 53.965C133.044 53.993 133.002 54.007 132.918 54.007C132.848 54.007 132.813 53.993 132.813 53.965C132.757 53.111 132.547 52.488 132.183 52.096C131.819 51.69 131.28 51.487 130.566 51.487C130.048 51.487 129.705 51.585 129.537 51.781C129.369 51.963 129.285 52.327 129.285 52.873V59.299C129.285 59.733 129.32 60.048 129.39 60.244C129.474 60.44 129.635 60.573 129.873 60.643C130.111 60.713 130.489 60.748 131.007 60.748C131.035 60.748 131.049 60.79 131.049 60.874C131.049 60.958 131.035 61 131.007 61C130.545 61 130.188 60.993 129.936 60.979L128.466 60.958L127.017 60.979C126.751 60.993 126.387 61 125.925 61C125.897 61 125.883 60.958 125.883 60.874C125.883 60.79 125.897 60.748 125.925 60.748C126.443 60.748 126.821 60.713 127.059 60.643C127.297 60.573 127.458 60.44 127.542 60.244C127.64 60.034 127.689 59.719 127.689 59.299V52.831C127.689 52.439 127.661 52.152 127.605 51.97C127.549 51.788 127.437 51.662 127.269 51.592C127.101 51.522 126.828 51.487 126.45 51.487Z","fill":"#D2B67E","key":12}),React.createElement("path",{"d":"M136.321 52.831C136.321 53.237 136.426 53.594 136.636 53.902C136.86 54.21 137.126 54.469 137.434 54.679C137.742 54.875 138.176 55.12 138.736 55.414C139.31 55.708 139.772 55.974 140.122 56.212C140.486 56.45 140.787 56.751 141.025 57.115C141.277 57.465 141.403 57.885 141.403 58.375C141.403 58.907 141.249 59.397 140.941 59.845C140.647 60.279 140.227 60.622 139.681 60.874C139.135 61.126 138.505 61.252 137.791 61.252C137.259 61.252 136.748 61.182 136.258 61.042C135.782 60.916 135.383 60.741 135.061 60.517C134.949 60.447 134.893 60.307 134.893 60.097L134.704 57.913C134.704 57.857 134.739 57.822 134.809 57.808C134.879 57.794 134.928 57.815 134.956 57.871C135.236 58.683 135.663 59.39 136.237 59.992C136.825 60.58 137.476 60.874 138.19 60.874C138.652 60.874 139.051 60.741 139.387 60.475C139.723 60.195 139.891 59.768 139.891 59.194C139.891 58.746 139.779 58.354 139.555 58.018C139.331 57.668 139.051 57.381 138.715 57.157C138.379 56.919 137.945 56.653 137.413 56.359C136.867 56.065 136.426 55.806 136.09 55.582C135.754 55.344 135.467 55.057 135.229 54.721C135.005 54.371 134.893 53.965 134.893 53.503C134.893 52.705 135.215 52.075 135.859 51.613C136.517 51.151 137.308 50.92 138.232 50.92C139.016 50.92 139.765 51.081 140.479 51.403C140.605 51.459 140.682 51.515 140.71 51.571C140.752 51.613 140.78 51.683 140.794 51.781L140.878 53.65C140.878 53.706 140.843 53.741 140.773 53.755C140.703 53.769 140.654 53.755 140.626 53.713C140.556 53.405 140.395 53.062 140.143 52.684C139.905 52.306 139.583 51.984 139.177 51.718C138.785 51.438 138.344 51.298 137.854 51.298C137.35 51.298 136.965 51.438 136.699 51.718C136.447 51.998 136.321 52.369 136.321 52.831Z","fill":"#D2B67E","key":13}),React.createElement("path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M55 4.77246L56.9094 11.9312C59.137 10.6585 65.8333 8.20864 70.7977 8.59043C75.7621 8.20864 82.4585 10.6585 84.6861 11.9312L86.5955 4.77246C80.1036 10.4994 73.0253 3.65889 70.7977 0C68.5701 3.65889 61.4919 10.4994 55 4.77246Z","fill":"#D2B67E","key":14})]);
}

LogoMain.defaultProps = {"width":"142","height":"62","viewBox":"0 0 142 62","fill":"none"};

module.exports = LogoMain;

LogoMain.default = LogoMain;


/***/ }),

/***/ "./src/svg/nunox.svg":
/*!***************************!*\
  !*** ./src/svg/nunox.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Nunox (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"M58.2458 9.25652L52.554 1.81514C51.8558 0.90437 50.8026 0.372661 49.6861 0.372661H44.055V7.36883C44.055 9.60505 42.5445 11.4698 40.4696 11.4698C38.3729 11.4698 36.8623 9.60505 36.8623 7.36883V0.372661H31.2483C30.2656 0.372661 29.4677 1.20711 29.4677 2.23491V9.25397L23.3356 1.23764C22.9172 0.690669 22.2823 0.370117 21.611 0.370117C20.3899 0.370117 19.4023 1.40555 19.4023 2.68012V12.9149C19.4023 13.8587 20.1345 14.6245 21.0369 14.6245C21.9394 14.6245 22.6715 13.8587 22.6715 12.9149V6.0968L28.9764 14.0139C29.2877 14.4031 29.7475 14.6296 30.234 14.6296H31.1023C32.0048 14.6296 32.7369 13.8638 32.7369 12.92V3.79442H33.5275V7.36883C33.5275 11.9532 36.5899 15.001 40.4696 15.001C44.3275 15.001 47.3899 11.9532 47.3899 7.36883V3.79442H48.1804V12.9174C48.1804 13.8613 48.9126 14.627 49.815 14.627C50.7175 14.627 51.4496 13.8613 51.4496 12.9174V6.0968L57.7545 14.0139C58.0658 14.4031 58.5256 14.6296 59.0121 14.6296H59.8804C60.7829 14.6296 61.515 13.8638 61.515 12.92V2.08227C61.515 1.13842 60.7829 0.372661 59.8804 0.372661C58.978 0.372661 58.2458 1.13842 58.2458 2.08227V9.25652Z","fill":"#303030","key":0}),React.createElement("path",{"d":"M69.7806 0.010515C65.6187 -0.215906 62.2012 3.24401 62.2012 7.52312C62.2012 11.6674 65.4095 15.023 69.3939 15.023C73.5339 15.023 76.8517 11.3596 76.5476 6.96088C76.2874 3.22366 73.3587 0.203863 69.7806 0.010515ZM69.5155 11.731C67.2144 11.8022 65.3463 9.8891 65.3463 7.52058C65.3463 5.19531 67.1487 3.28726 69.3939 3.28726C71.712 3.28726 73.5752 5.36321 73.4098 7.82332C73.2663 9.95779 71.5587 11.6699 69.5155 11.731Z","fill":"#303030","key":1}),React.createElement("path",{"d":"M89.3276 0.950698L89.3252 0.948154C88.5954 0.184936 87.4108 0.190024 86.686 0.95833L83.1541 4.70319L79.5127 0.960874C78.7854 0.21292 77.6154 0.218009 76.893 0.973595L76.8881 0.978683C76.1584 1.7419 76.1633 2.98086 76.8979 3.73899L80.5003 7.45586L76.8736 11.2643C76.1511 12.025 76.1511 13.2538 76.876 14.0119L76.8906 14.0272C77.613 14.7828 78.7854 14.7878 79.5127 14.0373L83.1541 10.2798L86.686 14.0246C87.4108 14.7929 88.5954 14.798 89.3252 14.0348C90.05 13.2767 90.0525 12.0504 89.33 11.2898L85.7422 7.5042L89.3349 3.69574C90.0549 2.93252 90.05 1.70628 89.3276 0.950698Z","fill":"#303030","key":2}),React.createElement("path",{"d":"M5.50703 10.9269C5.50703 11.9674 5.27838 12.8019 4.82108 13.4328C4.36379 14.0637 3.75081 14.3792 2.98216 14.3792C2.16 14.3792 1.52513 14.0764 1.07513 13.4684L1.02162 14.2545H0V4.59473H1.11162V8.19712C1.56162 7.61453 2.17946 7.32196 2.97 7.32196C3.76054 7.32196 4.38081 7.63488 4.83081 8.25817C5.28081 8.88401 5.50703 9.73882 5.50703 10.8251V10.9269ZM4.39298 10.7946C4.39298 10.0034 4.24703 9.39028 3.95514 8.95779C3.66325 8.5253 3.24243 8.30906 2.6927 8.30906C1.95811 8.30906 1.4327 8.66522 1.11162 9.37756V12.321C1.45216 13.0334 1.98243 13.3895 2.70487 13.3895C3.23757 13.3895 3.65352 13.1733 3.95027 12.7408C4.2446 12.3134 4.39298 11.6647 4.39298 10.7946Z","fill":"#303030","key":3}),React.createElement("path",{"d":"M8.96951 12.5506L10.4849 7.44981H11.6744L9.05951 15.3033C8.65572 16.4354 8.01113 17.0002 7.13059 17.0002L6.91897 16.9824L6.50302 16.901V15.9571L6.80464 15.9826C7.18167 15.9826 7.476 15.9037 7.68518 15.7434C7.89437 15.5832 8.06951 15.2931 8.20573 14.8683L8.4514 14.1763L6.13086 7.44727H7.34464L8.96951 12.5506Z","fill":"#303030","key":4})]);
}

Nunox.defaultProps = {"width":"90","height":"17","viewBox":"0 0 90 17","fill":"none"};

module.exports = Nunox;

Nunox.default = Nunox;


/***/ }),

/***/ "./public/page-data/sq/d/175761340.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/175761340.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"source":{"nodes":[{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAAaABQDASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAAQDBgIFCf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAe3OjUaLeSBT2rHGPGQf/8QAHRAAAgICAwEAAAAAAAAAAAAAAwQBAgAREyIyQf/aAAgBAQABBQJk/FAGW7Erjx5ozVmdA7Ua1LFF9QDx9wPn/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAMBAAAQIDBAUNAQAAAAAAAAAAAQIRAAMhBBIxcSJBQlHBEBMUM0NhcoGRoaKxwuP/2gAIAQEABj8CVcCZi36u8bzE4skKP0O+GmWZbTZl8KVzyUykEDQSTZ7rBnDrDqUasRBz4CJiEliye0s4+K7RKmezHUYBVMGGHSbGnOhX6aRbfF7exxCtlO0CysxSFPQOKkjRpjVQh3K3qFN/bW8ef5TBz48h8XAR/8QAHxABAAIDAAIDAQAAAAAAAAAAAREhADFBYXEQgaGx/9oACAEBAAE/IZCNnMJeA18V00hhkMDN4kQXwtYJkwChyMdxNdJN9GDzpqpmgVAndMJfeROBqc6hequRWxTCQzlzANF95c+5KDQGnJsZdBSPC3DgtX8fQV+vt+He5+3j/9oADAMBAAIAAwAAABBTCTD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAgEAEBAQABAgcAAAAAAAAAAAABESEAEDFBUWGBkaGx/9oACAEBAAE/EGNFJLAFezTkXPANeUgAiuKMCiOKDGAqKu9cfPgjTJ0rQFIIYDMExg4gIAQTwIAROKolICqQACgHrWCkfkQGkTEXM0AXgk0e0UEIqhkUEIAQGISQiAlEbcAO3iP7H3vft+XgHYMGemnbpm//2Q=="},"backgroundColor":"transparent","images":{"fallback":{"src":"/static/9b5f0b5be7ee42dc36a86b2432941531/441ac/01.jpg","srcSet":"/static/9b5f0b5be7ee42dc36a86b2432941531/e88a5/01.jpg 576w,\\n/static/9b5f0b5be7ee42dc36a86b2432941531/4913c/01.jpg 768w,\\n/static/9b5f0b5be7ee42dc36a86b2432941531/441ac/01.jpg 845w","sizes":"100vw"},"sources":[{"srcSet":"/static/9b5f0b5be7ee42dc36a86b2432941531/dfc33/01.avif 576w,\\n/static/9b5f0b5be7ee42dc36a86b2432941531/1d726/01.avif 768w,\\n/static/9b5f0b5be7ee42dc36a86b2432941531/79581/01.avif 845w","type":"image/avif","sizes":"100vw"},{"srcSet":"/static/9b5f0b5be7ee42dc36a86b2432941531/13a82/01.webp 576w,\\n/static/9b5f0b5be7ee42dc36a86b2432941531/62399/01.webp 768w,\\n/static/9b5f0b5be7ee42dc36a86b2432941531/66b8a/01.webp 845w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":1.2781065088757395}}},{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAAaABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMCBAUJ/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAHtZpLhc3h5NRW9RfGB/8QAHBAAAgEFAQAAAAAAAAAAAAAAAgMBAAQQETIi/9oACAEBAAEFAntILgNlWqeiHRbqlCVj5nCecI5//8QAGxEBAAICAwAAAAAAAAAAAAAAERIxASAhQWH/2gAIAQMBAT8BcyI8DJwLRb3R7p//xAAbEQEAAQUBAAAAAAAAAAAAAAARIQEgMTJxof/aAAgBAgEBPwEoLLrL1x62f//EACgQAAECBAUCBwAAAAAAAAAAAAECEQASITEDIkFxwRCBQlFygqGx8P/aAAgBAQAGPwJguUZaMpVydBSHnnGmST5cvH7yELExQpTgLTpdspodjeE4ZxDiFPiLB3vQUHbtGp3qbC5g7n76HfgR7jz0Pq4Ef//EACAQAQACAQQCAwAAAAAAAAAAAAEAESExQVFxYbGh0fD/2gAIAQEAAT8hYYKmgSzvXGmrg3KQKOHDBwlIpxg5gW+4V9EgLd2bI6lW6DmZKrStFVzmgBeAQsLodXZ0FvmavD2I9wXZPu/jMfZ7nyk//9oADAMBAAIAAwAAABB7wAD/xAAXEQEBAQEAAAAAAAAAAAAAAAABIREg/9oACAEDAQE/EHEUtqQAFrChIFDOP//EABsRAAMAAgMAAAAAAAAAAAAAAAERIQAxEJHw/9oACAECAQE/EBooUAjAnqUAxGlSue65/8QAIBABAAIDAAEFAQAAAAAAAAAAAREhADFBUWFxkaHB8P/aAAgBAQABPxBrQBjLsBQBkS2CmEISTcSlEoUCoWTWMuZAAy6kLud78ZTJXkCjHtQVBUxV8BjISAW06kkQJIE1deHVFLAxMWyFqZkLq/D91k4vZag773Xns3hqszJq+uv3ENe5PWZp+DOn8UwCyC9Lx//Z"},"backgroundColor":"transparent","images":{"fallback":{"src":"/static/7f6b41861f5870bc703f1a28690d46e7/441ac/02.jpg","srcSet":"/static/7f6b41861f5870bc703f1a28690d46e7/e88a5/02.jpg 576w,\\n/static/7f6b41861f5870bc703f1a28690d46e7/4913c/02.jpg 768w,\\n/static/7f6b41861f5870bc703f1a28690d46e7/441ac/02.jpg 845w","sizes":"100vw"},"sources":[{"srcSet":"/static/7f6b41861f5870bc703f1a28690d46e7/dfc33/02.avif 576w,\\n/static/7f6b41861f5870bc703f1a28690d46e7/1d726/02.avif 768w,\\n/static/7f6b41861f5870bc703f1a28690d46e7/79581/02.avif 845w","type":"image/avif","sizes":"100vw"},{"srcSet":"/static/7f6b41861f5870bc703f1a28690d46e7/13a82/02.webp 576w,\\n/static/7f6b41861f5870bc703f1a28690d46e7/62399/02.webp 768w,\\n/static/7f6b41861f5870bc703f1a28690d46e7/66b8a/02.webp 845w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":1.2781065088757395}}},{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAAaABQDASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAAUBAwQHCf/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAAB7Wq7FLnZJAaWWZtUMAJ//8QAHhAAAgIBBQEAAAAAAAAAAAAAAgMBBDIAEBESEyH/2gAIAQEAAQUCt2YTIXrRSr6N/wAyaVhNZlU4apiu5wHGk47Jx//EABsRAQACAgMAAAAAAAAAAAAAAAECERIxICFB/9oACAEDAQE/AZSxLb80K9taOH//xAAZEQEAAgMAAAAAAAAAAAAAAAABERIgIYH/2gAIAQIBAT8BCzGusYf/xAAqEAABAgQDCAIDAAAAAAAAAAABAhEAAyExEiJRExQyQUJhccEQgSNyof/aAAgBAQAGPwLKpJmcWyUqaHGLi/GlQbsRmisqVgKqqG8nAmlgJAx0rdzaH9N0jkajwawhM6bs0pBUMK5iZjqNbSVJagbNXSJW6mbMx5ZiwmYWHcFFu6Q8bQWUdD2HUAf54jE4HLkep6BaFpHkMdYGdfNzkdT6sig0CWi71v8AQ0j7Pv4P7ehH/8QAHxABAAICAwADAQAAAAAAAAAAAREhADFBUWGBkaGx/9oACAEBAAE/IdzzA3KODCVSwqAwC6Y67BKxpQz4zfXKMiDKydh0NN5t8ekSU5uLwRNK+KpUhojUEXlLZBwlsKSLRYSVeOyQtYQXXWJSs/gSgh6phUB6ECDoTVmTHKW6iXnYB9AeY85u/nP0s//aAAwDAQACAAMAAAAQb8FM/8QAHBEBAQACAgMAAAAAAAAAAAAAAREh8ABBEJHR/9oACAEDAQE/EAQmCJjQMCyor0VcDy7He9jyb6+bXx//xAAcEQEAAgIDAQAAAAAAAAAAAAABESEQMVGB0fD/2gAIAQIBAT8QcAhRZAUKyqGiuWsT7o+61j//xAAdEAEBAAIDAAMAAAAAAAAAAAABEQAhMUFREHGx/9oACAEBAAE/EJ9WEGd7KjYgJisSbNSiomKcbAeGkH22ixJ2Ej0nGACUnDprZa1SMjI1f0fc42/eBwqUDZN7kQqw+cNNBBsUr2grLkEC4NqN+hW44SEhWwSGWYEuBANZwd0MBdT6z3Dpnz8vxL//2Q=="},"backgroundColor":"transparent","images":{"fallback":{"src":"/static/0ba29034e7735e424cade9885f8a06e3/441ac/03.jpg","srcSet":"/static/0ba29034e7735e424cade9885f8a06e3/e88a5/03.jpg 576w,\\n/static/0ba29034e7735e424cade9885f8a06e3/4913c/03.jpg 768w,\\n/static/0ba29034e7735e424cade9885f8a06e3/441ac/03.jpg 845w","sizes":"100vw"},"sources":[{"srcSet":"/static/0ba29034e7735e424cade9885f8a06e3/dfc33/03.avif 576w,\\n/static/0ba29034e7735e424cade9885f8a06e3/1d726/03.avif 768w,\\n/static/0ba29034e7735e424cade9885f8a06e3/79581/03.avif 845w","type":"image/avif","sizes":"100vw"},{"srcSet":"/static/0ba29034e7735e424cade9885f8a06e3/13a82/03.webp 576w,\\n/static/0ba29034e7735e424cade9885f8a06e3/62399/03.webp 768w,\\n/static/0ba29034e7735e424cade9885f8a06e3/66b8a/03.webp 845w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":1.2781065088757395}}},{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAAaABQDASIAAhEBAxEB/8QAHAAAAQMFAAAAAAAAAAAAAAAAAAEFBgIDBAcJ/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB7RsWXFjb4gRhun9sCsP/xAAdEAEAAgMAAwEAAAAAAAAAAAADAgQAAQUSEzNB/9oACAEBAAEFArl2BpWc6uVk0w9bwglaYe2r8egLukeWo4GtxP8Acjn/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAuEAACAQIDBQUJAAAAAAAAAAABAhEDIQAEEhMiMVGBMkFCUmEFEBRTYnGRobL/2gAIAQEABj8CfLsM0tlfbZbZzvE2lmBQjzfvuwx+I9p19RMLm62XemJM/OLD0vwAAAHFaosHv3chyLD8E4WodgN069plaNeo2/CwakboB83S+NCOmtj22y+VUAXsNReJvZePK2FnTP0qFXoosOmNKbcU7b1EwZ1GZJrIOXgJvxwrjNV3eV3Cu0vyLGv2RNzPqL4AY6iPFET01N/Rwfu3v//EACAQAQEAAwABBAMAAAAAAAAAAAERACExQVFhcfCBwdH/2gAIAQEAAT8h1q2cG0qoDBvhFSI1itmmnY2CiAuCAQBGk+gC98WiC+CTThCzVwPIGRZJ71A7iewH8o8WOUOeAGREA0276jErg0QJhIwbz9khDUwEZIyqXIpPja1Na2urfAh9Lrnr8/3OH5/Rn//aAAwDAQACAAMAAAAQk8YM/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFxEBAAMAAAAAAAAAAAAAAAAAEGGh8P/aAAgBAgEBPxAvQf/EABwQAQEBAAMAAwAAAAAAAAAAAAERACExQRBxkf/aAAgBAQABPxALHYWwBO7I4oFrCfNGkYqomEfcipEqEIrvIxiSVQ5tVIOF5+wD6BaBw4fnLmSAPKQOkIyA6BM6IUuagVysIcMRTaJhJXFAL/wql0kwUb3WYgXsQjYhCnILjqJ9B5L88z8Af//Z"},"backgroundColor":"transparent","images":{"fallback":{"src":"/static/f62f9c4697235a44501454db4b5226c7/441ac/04.jpg","srcSet":"/static/f62f9c4697235a44501454db4b5226c7/e88a5/04.jpg 576w,\\n/static/f62f9c4697235a44501454db4b5226c7/4913c/04.jpg 768w,\\n/static/f62f9c4697235a44501454db4b5226c7/441ac/04.jpg 845w","sizes":"100vw"},"sources":[{"srcSet":"/static/f62f9c4697235a44501454db4b5226c7/dfc33/04.avif 576w,\\n/static/f62f9c4697235a44501454db4b5226c7/1d726/04.avif 768w,\\n/static/f62f9c4697235a44501454db4b5226c7/79581/04.avif 845w","type":"image/avif","sizes":"100vw"},{"srcSet":"/static/f62f9c4697235a44501454db4b5226c7/13a82/04.webp 576w,\\n/static/f62f9c4697235a44501454db4b5226c7/62399/04.webp 768w,\\n/static/f62f9c4697235a44501454db4b5226c7/66b8a/04.webp 845w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":1.2781065088757395}}}]}}}');

/***/ }),

/***/ "./public/page-data/sq/d/2741187235.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2741187235.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"fundCaseItem":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAAZABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAkGBwgF/8QAFgEBAQEAAAAAAAAAAAAAAAAABgcI/9oADAMBAAIQAxAAAAHCVzyHdjEQsIrMow12kgpHq5V0WnwaoVKe/wD/xAAfEAABBAICAwAAAAAAAAAAAAAFAgMEBgEHFBYzNTb/2gAIAQEAAQUCF9b4sHrT8OWofl/QNBi3wgrTwJty1KghrPqmyVbBk+aItmDNNv0wtp33Nw+nT4v/xAAkEQACAgEEAgEFAAAAAAAAAAACAwEEEQUSEyEABiMVIjEyUf/aAAgBAwEBPwH1n09N8E2NRSAFNkklXWrawqQU7G22TJZOGfUArqOOPtJsbiMCXlvSeC1YQ0NjUvatgBmQEwORIQ7/AFiYwOe8RGe8+VFpHUXyYukatS7Y+KwddjCpodZD5AiYiC4hWQkDF7czszjDtHRYc2wxh8j2G05+3s2FvKfx/Znz/8QAJBEAAwEAAAUDBQAAAAAAAAAAAQIDBAUGERITISIxABQVI0H/2gAIAQIBAT8B5s5j08MvrzcO4txRAJJoFBpgyR22253OJJNjLfbLhpZpHzEzokodSPYcPHEpix0mz2SmXO6Wsqm1UaU2WlSqqpo4Ianaqr3E9AB6Cem34XAw8JbRbFD9sEuiJrpFG9tOpLJ5WKOGSgPT3fPdn5p0whGCZc3ZGSSQDy+izUIo9aH4AH9P1//EACkQAAICAQMEAQIHAAAAAAAAAAIDAQQFERITAAYUISIjtBYxQXN0dbH/2gAIAQEABj8CXN12YXdjmlvjppMqT7nxxDlYLY+MRyl8tZKYAI26lct1fxHdTj6RXLx1qWPOKNcDFbLLt1pX01HO0g280/OYV9MumeGxh1tY4ieIC6Y0jXeKpIIndrptmfWn69ZHK5J9ypR7f8FtKVKHgvZZhNchTWNAxYiuFbyHoVG9wTAcqon33Rk8tmslXs5nCnTztKixc41JZIK9m5YWRLSyRCKzjpsfBGqHtJkHMbJ7gxOIc5+Lx2WtVKLXzq4q6yjbDS2jvIJkl79oycDBTETPWT7Xw6ctyEtGUHK2VF4mW2VXQ5ipnSK41wNPCogSRg4diFwqY67ix0PqlUdTqQytaUBQptjciShkEB7GVksGFnJjyxv/ACkonJ329qZgiyOQuX9a9Xy1bbdljRgXVSaktBKI+J+tOm/1s/ZL67v/AJeF+zd0n9uP9Lr/xAAbEAEAAwADAQAAAAAAAAAAAAABABEhEDFBYf/aAAgBAQABPyE023ziQOhxCQYAsaYwAoxEqaFBG9MfOZKIFs6SMmPLY/M8fco4nCmBBHDDGKAbdVmTsNRZVJOtwCA8AiAGIY42NWb8wrAwEjTZpikd+qKegZfJEkK//9oADAMBAAIAAwAAABAoKjz/xAAZEQEBAQEBAQAAAAAAAAAAAAABEQAhcZH/2gAIAQMBAT8QfDfCGMsE5oUCWqEs8ilfoegrF9cg6wsO7Wh313ELAEPQZ85zf//EABgRAQADAQAAAAAAAAAAAAAAAAEAITER/9oACAECAQE/EL7sXTby1CK1mxFjEo7XJBrxDLc65IXkn5Z8wHGrBBgEgMClaz//xAAZEAEBAQADAAAAAAAAAAAAAAABABEgITH/2gAIAQEAAT8QZ7ywgVjKf1hdDXzi6Ss5Qcp4V2a+zUOIYWARxZOjDst3XULYTjCFuT64N6V/P29SqQjJ1OULXLIX5a0kYbKB4zygCA9Qlw3b07L0mAJXB4wXv//Z"},"backgroundColor":"transparent","images":{"fallback":{"src":"/static/fef3514b1ac06b3a207795f1cf247cc9/74e10/case_cover_01.jpg","srcSet":"/static/fef3514b1ac06b3a207795f1cf247cc9/ddaae/case_cover_01.jpg 576w,\\n/static/fef3514b1ac06b3a207795f1cf247cc9/75589/case_cover_01.jpg 768w,\\n/static/fef3514b1ac06b3a207795f1cf247cc9/74e10/case_cover_01.jpg 960w","sizes":"100vw"},"sources":[{"srcSet":"/static/fef3514b1ac06b3a207795f1cf247cc9/8e6de/case_cover_01.avif 576w,\\n/static/fef3514b1ac06b3a207795f1cf247cc9/74370/case_cover_01.avif 768w,\\n/static/fef3514b1ac06b3a207795f1cf247cc9/d8d9c/case_cover_01.avif 960w","type":"image/avif","sizes":"100vw"},{"srcSet":"/static/fef3514b1ac06b3a207795f1cf247cc9/ee0dd/case_cover_01.webp 576w,\\n/static/fef3514b1ac06b3a207795f1cf247cc9/d9bf2/case_cover_01.webp 768w,\\n/static/fef3514b1ac06b3a207795f1cf247cc9/219c2/case_cover_01.webp 960w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":1.2520833333333334}}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/3130138437.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3130138437.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"fundCoverDesctop":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAAbABQDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAkGCAIDBQf/xAAWAQEBAQAAAAAAAAAAAAAAAAAFBgT/2gAMAwEAAhADEAAAAVT78We0kosw7wyfbu4aoJrge8ZIyLh//8QAHRAAAgMBAAMBAAAAAAAAAAAABAUCAwYBBxMUFv/aAAgBAQABBQLNJVjVZzNR6yIUFwnjgTyTxVorqvQsb4tPDI65PN8d86pwzfsT8uNT+gm1Y8yF193t/8QAJhEAAgIABAQHAAAAAAAAAAAAAgMBBAUREhMAISIxFCMyQWFicf/aAAgBAwEBPwHFMRbRmb77cDT2zq06a68+biDC1TYuXDLSpVWsKyWivMlZNjpbtLEJbGPYllGR6vtoR1dufpjv+ZcWLza2GUJoprpO21niHNALD93ahYvSbVECnQozXLFqWe2RLCQEp4IXTOZmBl7mSw1F8z0zz4//xAAkEQACAgEEAQQDAAAAAAAAAAACAwEEBRESEyEABhQiMVFhcf/aAAgBAgEBPwGjifctmgNaJfBLs2rR2A0VQGNoop1IHkcVl/IJWHDtRADAch74XHprGTETxDGsa6cr+v12cz1/fKWLTlM7lU5e1bsqx1Oo2rWTJ1akoNkOZUsLRYU1yJcCW8bXsCXLFzBZMQPm1S/gpIrWHQAJEIiMfUQMdREfjz//xAArEAACAgECBAUDBQAAAAAAAAABAgMEEgURABMhIgYUMTJBI1GBFTNCYbH/2gAIAQEABj8Cu37mqtX1Dza0NL0qKhO8l6zMoYH9Q3NWvHGvMYiZcQE72AYA3KiWlsVqyZeYUE5yczGOLaM4sxPYcGOEnRh6gAKwXtH8d+vUfDf1t+OOTpcE1jUYjzqFaLmhblp0aFqcRj/au2oHk8rOXQRNGzN2+lnUn8PN4blqwtp4pSiNXFis7JbNpVEaLbjlVo3XFWAzfd+YW4nSCOXBOz6asyZKzBsWA2YfP52PUcahquoaxFBG1aJ4qcN2GGV2haTJ5M8pFiO+MTKE7y2MhwK8XtT8PioNS1bGeezdvTGKKU1xVS08Pl5Vs2YlVHZVNaGSUc6XPHHie5qGs0mtTsXk5cKBEOTdgSOMJHsd9kA6Aj78avFjtHy2GKs6jZHXDbFhtjm232340WMXJsWEobu9wE7jYn3H2j1P+nd/quOvwxHwPtx//8QAGxABAQADAQEBAAAAAAAAAAAAAREAITFRQYH/2gAIAQEAAT8hsncovKSa6i4rtLGwMgRe/VBmUSEul6OLKAfWLilFKaiAlyv3yGEwwqbTLEKLPGnIOrchNjZ1Ip2Tt/wAtaCkIJQaDiYTwgv+6Mt7uixuV7ADQxleMKIagOSkMPmHAlRsLRwlRLta5hw0j0FRXSqvfzgZ/9oADAMBAAIAAwAAABAo2cL/xAAYEQEBAQEBAAAAAAAAAAAAAAABESEAQf/aAAgBAwEBPxAHiwXEd8pxoW5wMAWAgyPhoFaUqr6Rz+UXHYqUqUKLBEIqyiXXb49//8QAGREBAQEBAQEAAAAAAAAAAAAAAREhADFB/9oACAECAQE/EDW1hIIOwEnIPE0jCptg5AokUk9wh+kV9wcocCkVesBbGfGJgMDN2//EABgQAQEBAQEAAAAAAAAAAAAAAAERACEQ/9oACAEBAAE/EMQZ82BovmDZoQyS1FVaZiKYXTEc6iIRgKdJqJmw3vfREzHdSMALWcBiQ9Zaw6NjOaIDX5KvAoTRl+raf1Yykxw7V3UaSnOMKixJUnmiz1KBM4K/8TASSQgCQDVpMuGYEy0MGDFoSOxBAqFkqA//2Q=="},"backgroundColor":"transparent","images":{"fallback":{"src":"/static/df5273cf156dce671ab2be65e973d6f2/aac09/fnd_cover.jpg","srcSet":"/static/df5273cf156dce671ab2be65e973d6f2/24fdc/fnd_cover.jpg 576w,\\n/static/df5273cf156dce671ab2be65e973d6f2/7511c/fnd_cover.jpg 768w,\\n/static/df5273cf156dce671ab2be65e973d6f2/aac09/fnd_cover.jpg 960w","sizes":"100vw"},"sources":[{"srcSet":"/static/df5273cf156dce671ab2be65e973d6f2/98582/fnd_cover.avif 576w,\\n/static/df5273cf156dce671ab2be65e973d6f2/92ec5/fnd_cover.avif 768w,\\n/static/df5273cf156dce671ab2be65e973d6f2/a09cc/fnd_cover.avif 960w","type":"image/avif","sizes":"100vw"},{"srcSet":"/static/df5273cf156dce671ab2be65e973d6f2/540d8/fnd_cover.webp 576w,\\n/static/df5273cf156dce671ab2be65e973d6f2/3f179/fnd_cover.webp 768w,\\n/static/df5273cf156dce671ab2be65e973d6f2/fb9f7/fnd_cover.webp 960w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":1.3333333333333333}}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/4032356251.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/4032356251.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"fundFactCover":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAAeABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAkGBwj/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/aAAwDAQACEAMQAAABmzMUkPHPVyqaIBJX9b0Nr49Bl4vopyf/xAAdEAADAAICAwAAAAAAAAAAAAAEBQYDBwABAhMV/9oACAEBAAEFAtGuPpjTM7miQhAXF1zTMtdKaUGtAL6bFRhZsHF23vU+K9izKmJZtlK2YUwLhnNI+rK53Tyb3//EACYRAAMAAQQBAgcBAAAAAAAAAAECAwQFERITABQxBhUhIiMyQUL/2gAIAQMBAT8BxsLXcfR7PPTb1xci6o6iR7+qIFVq89xdYCgI5hevkGDHfyHzhJIvpchdt/tmh4LudwF5V3AAI+h9vb+eaXlZGjY3odQyq4sc+WTTEpisWycOqgGsywnRUlmLxUtLsadjOw4Mjv4PhzJsBWWfHrr+ROxspacW2Yc1WVFDbfsA7jf/AEfP/8QAJREAAgIBAwMEAwAAAAAAAAAAAQIDBBEFEiEAEyIGFSMxMjNS/9oACAECAQE/AdXn0i16ghK6rXVq9cyHEqGIWJnaJ07gRou4YMNgvv8ArC4HlPJo8krMtuDBx+xI2fhQDuYABiTnywN35YHPWpxxatK13Ta8c01CWsloWF2wWoGLLEQvcjd3rNvYLNtV0Vo+QyDr3+vH8clGYPH4OIzA0YZcKdjM8bFP5yinGOB1/8QAJxAAAgICAQMEAQUAAAAAAAAAAgMBBAUSExEUIwAGISIVJDIzQkP/2gAIAQEABj8CpY6k+nUK574VbtUWFB9qNf2dlH8qUzrJV7eZqpsK4pjjZEoLp9Ns5bfM5ezbY25DqVVkNZqJGNbtt2M2JpT9gMwnr869Pmxmcoiyuwu02gMHzY6eCtqS/wBP0GP9pjkEYg5if7bTOMzq68YzH8MusDcmsbbIScqTSZRlnMhtsvMLThRoT5Q8hAMxWZkK1e9vCG0ZLdinr13FFj+GQMIItHeZJ+MupfWDbcq3XviNDOnbsVl/El+9SL1YYb8/aZXvMa7FPq7mslXd7erxjrfY1rLD/KXcjIi6nE0FqsENYpEwZymFuOSCUuDDpOPblcZ+NBLWL9weTs5fmAeIxWuUVDLBtCrkvWXQKYsLggJrjHkLvHYyiREIiLEm1IsWMeM5iu9KzLWYjk6FJRA+QoiPVC1h+6x6ggiYl/C3uGpE+QHxEyJ1O3KBCuPHu8jcZwQBM3bmXHF16tptickvHttuK8KXGpYSm0oFpnhhdaGgzqtCwmAJ0cnq1isTmrScZIouUUi7WUotpBkJZ4TiWLLYZMZ6MiIZMchH6//EABgQAQEBAQEAAAAAAAAAAAAAAAERACEx/9oACAEBAAE/IVWHVdse9S6eM2lH0U6Wp5Yt3g1RHzQ00CvJNOAf2PFDXQASVNRGMFiJO+5G2Gxg9NEgXTopa7XBF+CSRx7cJm+Ax3VnP+4EV5SnM7ISpaTBmqCRp0GlhPcXmf5llcMFNHVs5Sfi+jzWWHhKy//aAAwDAQACAAMAAAAQmwbP/8QAGBEBAQEBAQAAAAAAAAAAAAAAAREAIUH/2gAIAQMBAT8QXaD4qYB5ExNBm/cIhyhiUjywoFMHHnER8sVrw0aQrK5bPoMbA7v/xAAXEQEBAQEAAAAAAAAAAAAAAAABEQAh/9oACAECAQE/EC+SIzeQxMKoxcG8aToTHGJPRSIA8+LZApOI7zdDkhSWMLBIp0LE3//EABcQAQEBAQAAAAAAAAAAAAAAAAEAERD/2gAIAQEAAT8Q2iEttGw6UKbhZOyhpxposry1Ok9kbvkIuHnxlO/Z8kOzcnpBhOcyKG1aHskpfdTUHQW9nO9I4hlHJVGsy0uFqcxG0E20lBh62dbZ4jhCgIx1UN092IkBt15loWw7nMHZR6CDxq6X/9k="},"backgroundColor":"transparent","images":{"fallback":{"src":"/static/c18714b28c4863e3ea9749683ce2ceff/351a1/utp_cover.jpg","srcSet":"/static/c18714b28c4863e3ea9749683ce2ceff/9778c/utp_cover.jpg 576w,\\n/static/c18714b28c4863e3ea9749683ce2ceff/9a199/utp_cover.jpg 768w,\\n/static/c18714b28c4863e3ea9749683ce2ceff/0259e/utp_cover.jpg 992w,\\n/static/c18714b28c4863e3ea9749683ce2ceff/a5f8e/utp_cover.jpg 1200w,\\n/static/c18714b28c4863e3ea9749683ce2ceff/351a1/utp_cover.jpg 1920w","sizes":"100vw"},"sources":[{"srcSet":"/static/c18714b28c4863e3ea9749683ce2ceff/3955e/utp_cover.avif 576w,\\n/static/c18714b28c4863e3ea9749683ce2ceff/65435/utp_cover.avif 768w,\\n/static/c18714b28c4863e3ea9749683ce2ceff/1f1bd/utp_cover.avif 992w,\\n/static/c18714b28c4863e3ea9749683ce2ceff/7c7c9/utp_cover.avif 1200w,\\n/static/c18714b28c4863e3ea9749683ce2ceff/88362/utp_cover.avif 1920w","type":"image/avif","sizes":"100vw"},{"srcSet":"/static/c18714b28c4863e3ea9749683ce2ceff/5c41a/utp_cover.webp 576w,\\n/static/c18714b28c4863e3ea9749683ce2ceff/ab8ab/utp_cover.webp 768w,\\n/static/c18714b28c4863e3ea9749683ce2ceff/319dd/utp_cover.webp 992w,\\n/static/c18714b28c4863e3ea9749683ce2ceff/f583d/utp_cover.webp 1200w,\\n/static/c18714b28c4863e3ea9749683ce2ceff/fb9e0/utp_cover.webp 1920w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":1.4906249999999999}}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/4045881802.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/4045881802.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"fundTemItem":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAAaABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAcEBQYJ/8QAFgEBAQEAAAAAAAAAAAAAAAAABAYF/9oADAMBAAIQAxAAAAHjk45kjEscaL4afaJlj6eonkWUo/O//8QAHRAAAgMAAwEBAAAAAAAAAAAAAwQBBQYAAhUSE//aAAgBAQABBQKnU6OvXeZeoTLrSMdNlA+dp7UJ6702h8tNf+ufnszJPgg+aYAR7TLqKMWR5mSf/8QAJREAAgECBQMFAAAAAAAAAAAAAQIDBBEABRITISIxYSNRZKGx/9oACAEDAQE/AXqaHLqeVatZDWNHDPTpC3OxvRxy73JjCvuCwcM+tWMZUrqKZ7lekelOvgL27fLH4MVFRJWs807apCgVTwFSGFSREFAHBIU3v3F7dRwAff6HjH//xAAmEQACAQMCBAcAAAAAAAAAAAABAgMEERIABRQhIpEGEzEyQVHw/9oACAECAQE/AaLZd03h1nphHHt6zyU81VUY4cQIJZ41iFxMzIIwGMYVMJEEtw2AfwZvQdh51K/P3ZXv6fPC/u+qWNdvkgoaa6U8UqqwB65KiZjlUsxv1dTKEtySy5cgdS1YhlkiCORG7KDxEovY/QsO2v/EACYQAAMAAQMDAwUBAAAAAAAAAAECAwQREhMABSEUIjEyM1FSgZH/2gAIAQEABj8CwsR+NFzNsmpfkljTZjtW2QyLRhGZ8kwG9vCqNT1DFQp3DFytwwcn0uRgZmNkq32YRpQ3tCyhuCr8iMEdyPztS+MjBmF53wzyTuDtdSWrqfgMfj3FvA6n33uHcM/G4BC9VxMcIy61VcRFpa0dzK5mymI49zbhUgM3WNiLU5GcLQyGza1Tkx8eQzEMZrNSyUtkFb2sbO9BxQVVjP3bU9PUftXGnV9dfI3kan8+dT5+erdoxcH0Ms68ch0a6WASTO8kxU41bDx9zLtmXYsiISfAJ87m0CaM3gaEe1xrqdrDyP8AOir0CHcToy+fP8677CcZThPOsJxSarKY9n0TACr/AADp/UYuPfR87TmjOmnH2bMrPTep+3VVon60UONGAPRJJPx1/8QAHBABAQEBAAMBAQAAAAAAAAAAAREhADFBUWGR/9oACAEBAAE/IZ2StgUG5bkROaCOGgVYMlBIDygzT1czydTOCOHcGcBAYwQB4MFRpatUCvLH3so57jlKxVPPR/gaQ9n+98QiEDucDaKqLaAfTO+3C2aliP6Stx373q4CowDeuG1+9uxHTmWCwr1KB6AiVVVSqr5X33//2gAMAwEAAgADAAAAEIcT/wD/xAAdEQEBAAIBBQAAAAAAAAAAAAABEQAhMVFhgZHw/9oACAEDAQE/EHQNVCkjb6WAfwUqyFbNuMGaug6AEH9CDAJsUF0PRwQDBZ9PHrvn/8QAGREBAQEBAQEAAAAAAAAAAAAAAREhADFh/9oACAECAQE/EHFwREpRDAVleMwRkgGwiSkYVXwVabWZBx70AJIWrqwOiMClVBdYAL83/8QAGBABAQEBAQAAAAAAAAAAAAAAAREAITH/2gAIAQEAAT8QTlKNxvvhm4iyPV1ci3Tp9vNbJNB0XL8JiAEsaUWemmUA6Svb5CyDKTmowAO1bMS66CEBRMMABrPk3FZK2KyoIV1Gxyd0FptrHBMFWNAqAbA6saY1H3zv1DSqiQJ0UOh2XhZcxYCc8wAqFUqqqtd//9k="},"backgroundColor":"transparent","images":{"fallback":{"src":"/static/3fca7fe18e3cddbb585c58395aff090e/5108e/team_01.jpg","srcSet":"/static/3fca7fe18e3cddbb585c58395aff090e/85953/team_01.jpg 576w,\\n/static/3fca7fe18e3cddbb585c58395aff090e/4913c/team_01.jpg 768w,\\n/static/3fca7fe18e3cddbb585c58395aff090e/5108e/team_01.jpg 960w","sizes":"100vw"},"sources":[{"srcSet":"/static/3fca7fe18e3cddbb585c58395aff090e/af964/team_01.avif 576w,\\n/static/3fca7fe18e3cddbb585c58395aff090e/1d726/team_01.avif 768w,\\n/static/3fca7fe18e3cddbb585c58395aff090e/c878d/team_01.avif 960w","type":"image/avif","sizes":"100vw"},{"srcSet":"/static/3fca7fe18e3cddbb585c58395aff090e/8d05a/team_01.webp 576w,\\n/static/3fca7fe18e3cddbb585c58395aff090e/62399/team_01.webp 768w,\\n/static/3fca7fe18e3cddbb585c58395aff090e/093ab/team_01.webp 960w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":1.2791666666666666}}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/552293447.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/552293447.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"fundPhoneCover":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAYIBQf/xAAWAQEBAQAAAAAAAAAAAAAAAAADAgT/2gAMAwEAAhADEAAAAa1Zl/l0rkkKiYf/xAAbEAACAgMBAAAAAAAAAAAAAAAFBgMEAQIHJP/aAAgBAQABBQLD2mQiCLHCvCx/SbG0IwjLsOd2HI+3d9lv/8QAIBEAAwABBAIDAAAAAAAAAAAAAQIDBBESEyIAIQUyUf/aAAgBAwEBPwG8vi2kwnhqtbGz1ymJtRChQShCZ4UmjMOWtG5qaPtV9A83bCw2Ys2P2J1OmxBr6+qKNqL+KvVR1Hoef//EAB8RAQACAQQDAQAAAAAAAAAAAAECEQMAEiExBCJhcf/aAAgBAgEBPwGPgyhsM1TljlgiXtgZYULKbjFs9ohQb/faBHTg8YUo4a6yPX1lb+vL286//8QAIRAAAgICAQUBAQAAAAAAAAAAAgMBBAUREgAGExQiITL/2gAIAQEABj8CwVoqWScOGq00JiogjHMZXJYq0FHBYre7du/qKwvcVcKi12BKWlPWR7zyvb9yPLXwJD22uzBXMXHr3ZfGWeITxFb5gJLwxME9NaAE9z0VpnZ1+yy847bDRbFC4kuKoXC3LA44gkN73qfySkoLrs+gYg30LGAx7WOiGRcX6Tb9NxhMcl2KJqGFMFs/X3EB/HV2hfooytUaSTnlwpWysm0fI6LtdPmAGjACxAzxLTJkts+XMxxNxVMfGtVOWlekOKVyZTadwYyTOSL6HcRMRJHOzL//xAAYEAEBAQEBAAAAAAAAAAAAAAABEQAhMf/aAAgBAQABPyFBF+YCjNPAKINxDZuS8HUexUvHpLlgswGjv0hai4JTfT3FFrg1xYCMgwBArjs0Krkc8rpjOH//2gAMAwEAAgADAAAAEBcf/8QAFxEBAQEBAAAAAAAAAAAAAAAAAREAIf/aAAgBAwEBPxANIc6uFHKqAMcvyqelTCsOYjGG/8QAFxEBAQEBAAAAAAAAAAAAAAAAAREhAP/aAAgBAgEBPxAVkbqSLCG61Cjs2qCpiAt/Dd/h/8QAFxABAQEBAAAAAAAAAAAAAAAAAQAQEf/aAAgBAQABPxBWsN/xweFqF/5lOlwgbni/YrmHrU5YZiygXkmh1Gjc80qXeeSjaBfEcXDDncIYrPJwB9//2Q=="},"backgroundColor":"transparent","images":{"fallback":{"src":"/static/121d1a59e4276256810c3b95f70b77b8/c4d2b/ph_line_cover.jpg","srcSet":"/static/121d1a59e4276256810c3b95f70b77b8/d9d96/ph_line_cover.jpg 576w,\\n/static/121d1a59e4276256810c3b95f70b77b8/56c8c/ph_line_cover.jpg 768w,\\n/static/121d1a59e4276256810c3b95f70b77b8/81220/ph_line_cover.jpg 992w,\\n/static/121d1a59e4276256810c3b95f70b77b8/3c333/ph_line_cover.jpg 1200w,\\n/static/121d1a59e4276256810c3b95f70b77b8/c4d2b/ph_line_cover.jpg 1920w","sizes":"100vw"},"sources":[{"srcSet":"/static/121d1a59e4276256810c3b95f70b77b8/9d132/ph_line_cover.avif 576w,\\n/static/121d1a59e4276256810c3b95f70b77b8/a2e56/ph_line_cover.avif 768w,\\n/static/121d1a59e4276256810c3b95f70b77b8/c8a0b/ph_line_cover.avif 992w,\\n/static/121d1a59e4276256810c3b95f70b77b8/5fe8d/ph_line_cover.avif 1200w,\\n/static/121d1a59e4276256810c3b95f70b77b8/6acd2/ph_line_cover.avif 1920w","type":"image/avif","sizes":"100vw"},{"srcSet":"/static/121d1a59e4276256810c3b95f70b77b8/9f93b/ph_line_cover.webp 576w,\\n/static/121d1a59e4276256810c3b95f70b77b8/d2749/ph_line_cover.webp 768w,\\n/static/121d1a59e4276256810c3b95f70b77b8/3a6ed/ph_line_cover.webp 992w,\\n/static/121d1a59e4276256810c3b95f70b77b8/fa036/ph_line_cover.webp 1200w,\\n/static/121d1a59e4276256810c3b95f70b77b8/5ec80/ph_line_cover.webp 1920w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.6635416666666666}}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/63159454.json":
/*!*********************************************!*\
  !*** ./public/page-data/sq/d/63159454.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Nunox","description":"Створюємо та розвиваємо бренди. Володіючи власними бізнесами ми пропонуємо підприємцям наш досвід.","author":"@nunox"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-fund-js.js.map