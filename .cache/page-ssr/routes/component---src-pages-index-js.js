exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
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

/***/ "./src/components/Pages/Home/HomeAbout/AboutInfo/AboutInfo.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/Pages/Home/HomeAbout/AboutInfo/AboutInfo.jsx ***!
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
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var _Ui_SectionMarker_SectionMarker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Ui/SectionMarker/SectionMarker */ "./src/components/Ui/SectionMarker/SectionMarker.jsx");
/* harmony import */ var _Ui_ButtonsDefault_ButtonsDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Ui/ButtonsDefault/ButtonsDefault */ "./src/components/Ui/ButtonsDefault/ButtonsDefault.jsx");






const AboutInfo = ({
  about
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
    className: "home-about__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_SectionMarker_SectionMarker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    marker: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)('Про Доктора', 'About Doctor', 'Über Doktor', 'О Докторе')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "home-about__info--content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "home-about__info--title"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(about.title_ua, about.title_en, about.title_de, about.title_ru)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "home-about__info--descr"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(about.description_ua, about.description_en, about.description_de, about.description_ru)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "home-about__info-buuton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_ButtonsDefault_ButtonsDefault__WEBPACK_IMPORTED_MODULE_3__.DefaultButtonLinkInner, {
    title: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)('Докладніше...', 'More...', 'Mehr...', 'Подробнее...'),
    link: '/about-doctor/'
  }))));
};

AboutInfo.propTypes = {
  about: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutInfo);

/***/ }),

/***/ "./src/components/Pages/Home/HomeAbout/HomeAbout.jsx":
/*!***********************************************************!*\
  !*** ./src/components/Pages/Home/HomeAbout/HomeAbout.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2376130184_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../public/page-data/sq/d/2376130184.json */ "./public/page-data/sq/d/2376130184.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _AboutInfo_AboutInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AboutInfo/AboutInfo */ "./src/components/Pages/Home/HomeAbout/AboutInfo/AboutInfo.jsx");







const HomeAbout = ({
  about
}) => {
  const data = _public_page_data_sq_d_2376130184_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const image = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.getImage)(data.aboutImage.childImageSharp);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    className: "home-about"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_AboutInfo_AboutInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    about: about
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "home-about__image--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.GatsbyImage, {
    className: "home-about__image",
    image: image,
    alt: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_2__.useLanguage)(about.title_ua, about.title_en, about.title_de, about.title_ru),
    loading: "eager"
  })));
};

HomeAbout.propTypes = {
  about: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeAbout);

/***/ }),

/***/ "./src/components/Pages/Home/HomeMain/HomeMain.jsx":
/*!*********************************************************!*\
  !*** ./src/components/Pages/Home/HomeMain/HomeMain.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3718856346_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../public/page-data/sq/d/3718856346.json */ "./public/page-data/sq/d/3718856346.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Ui_CoverDefault_CoverDefault__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Ui/CoverDefault/CoverDefault */ "./src/components/Ui/CoverDefault/CoverDefault.jsx");
/* harmony import */ var _MainInfo_MainInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainInfo/MainInfo */ "./src/components/Pages/Home/HomeMain/MainInfo/MainInfo.jsx");






const HomeMain = ({
  main,
  whatsApp
}) => {
  const data = _public_page_data_sq_d_3718856346_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    className: "home-main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Ui_CoverDefault_CoverDefault__WEBPACK_IMPORTED_MODULE_2__["default"], {
    img: data.mainCover.childImageSharp
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MainInfo_MainInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    whatsApp: whatsApp,
    main: main
  }));
};

HomeMain.propTypes = {
  main: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  whatsApp: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeMain);

/***/ }),

/***/ "./src/components/Pages/Home/HomeMain/MainInfo/MainInfo.jsx":
/*!******************************************************************!*\
  !*** ./src/components/Pages/Home/HomeMain/MainInfo/MainInfo.jsx ***!
  \******************************************************************/
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
/* harmony import */ var _Ui_ButtonsDefault_ButtonsDefault__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Ui/ButtonsDefault/ButtonsDefault */ "./src/components/Ui/ButtonsDefault/ButtonsDefault.jsx");





const MainInfo = ({
  whatsApp,
  main
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "main-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "main-info__title"
  }, (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(main.title_ua, main.title_en, main.title_de, main.title_ru)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "main-info__button--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_ButtonsDefault_ButtonsDefault__WEBPACK_IMPORTED_MODULE_2__.DefaultButtonLink, {
    title: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)('Записатись на консультацію', 'Sign up for a consultation', 'Melden Sie sich für eine Beratung an', 'Записаться на консультацию'),
    link: whatsApp
  })));
};

MainInfo.propTypes = {
  whatsApp: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  main: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainInfo);

/***/ }),

/***/ "./src/components/Pages/Home/HomeServices/HomeServices.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/Pages/Home/HomeServices/HomeServices.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2415619322_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../public/page-data/sq/d/2415619322.json */ "./public/page-data/sq/d/2415619322.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Ui/InterfaceSystem/InterfaceSystem */ "./src/components/Ui/InterfaceSystem/InterfaceSystem.jsx");
/* harmony import */ var _Ui_CoverDefault_CoverDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Ui/CoverDefault/CoverDefault */ "./src/components/Ui/CoverDefault/CoverDefault.jsx");
/* harmony import */ var _HomeServicesList_HomeServicesList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HomeServicesList/HomeServicesList */ "./src/components/Pages/Home/HomeServices/HomeServicesList/HomeServicesList.jsx");







const HomeServices = ({
  services
}) => {
  const data = _public_page_data_sq_d_2415619322_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    classes: "home-services"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "home-services__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Ui_CoverDefault_CoverDefault__WEBPACK_IMPORTED_MODULE_3__["default"], {
    img: data.servicesMain.childImageSharp
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_2__.ContentWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_HomeServicesList_HomeServicesList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    services: services
  }))));
};

HomeServices.propTypes = {
  services: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeServices);

/***/ }),

/***/ "./src/components/Pages/Home/HomeServices/HomeServicesList/HomeServiceItem/HomeServiceItem.jsx":
/*!*****************************************************************************************************!*\
  !*** ./src/components/Pages/Home/HomeServices/HomeServicesList/HomeServiceItem/HomeServiceItem.jsx ***!
  \*****************************************************************************************************/
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
/* harmony import */ var _svg_mam_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../svg/mam.svg */ "./src/svg/mam.svg");
/* harmony import */ var _svg_mam_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_mam_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg_rin_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../svg/rin.svg */ "./src/svg/rin.svg");
/* harmony import */ var _svg_rin_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_svg_rin_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _svg_lip_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../svg/lip.svg */ "./src/svg/lip.svg");
/* harmony import */ var _svg_lip_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_svg_lip_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _svg_fac_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../svg/fac.svg */ "./src/svg/fac.svg");
/* harmony import */ var _svg_fac_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_svg_fac_svg__WEBPACK_IMPORTED_MODULE_5__);








const HomeServiceItem = ({
  link,
  title,
  icon
}) => {
  const iconComponent = icon === 'rhinoplasty' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_svg_rin_svg__WEBPACK_IMPORTED_MODULE_3___default()), {
    className: "home-services__item--icon"
  }) : icon === 'liposuction' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_svg_lip_svg__WEBPACK_IMPORTED_MODULE_4___default()), {
    className: "home-services__item--icon"
  }) : icon === 'facial' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_svg_fac_svg__WEBPACK_IMPORTED_MODULE_5___default()), {
    className: "home-services__item--icon"
  }) : icon === 'mammoplasty' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_svg_mam_svg__WEBPACK_IMPORTED_MODULE_2___default()), {
    className: "home-services__item--icon"
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "home-services__item--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: link,
    className: "home-services__item--link"
  }, iconComponent, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "home-services__item--title"
  }, title)));
};

HomeServiceItem.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeServiceItem);

/***/ }),

/***/ "./src/components/Pages/Home/HomeServices/HomeServicesList/HomeServicesList.jsx":
/*!**************************************************************************************!*\
  !*** ./src/components/Pages/Home/HomeServices/HomeServicesList/HomeServicesList.jsx ***!
  \**************************************************************************************/
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
/* harmony import */ var _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../hooks/useLanguage */ "./src/hooks/useLanguage.js");
/* harmony import */ var _Ui_SectionMarker_SectionMarker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Ui/SectionMarker/SectionMarker */ "./src/components/Ui/SectionMarker/SectionMarker.jsx");
/* harmony import */ var _Ui_ButtonsDefault_ButtonsDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Ui/ButtonsDefault/ButtonsDefault */ "./src/components/Ui/ButtonsDefault/ButtonsDefault.jsx");
/* harmony import */ var _HomeServiceItem_HomeServiceItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HomeServiceItem/HomeServiceItem */ "./src/components/Pages/Home/HomeServices/HomeServicesList/HomeServiceItem/HomeServiceItem.jsx");







const HomeServicesList = ({
  services
}) => {
  const langToggle = _hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "home-services__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_SectionMarker_SectionMarker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    marker: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)(services.title_ua, services.title_en, services.title_de, services.title_ru)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "home-services__items"
  }, services.items.map((item, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HomeServiceItem_HomeServiceItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      link: item.slug,
      icon: item.icon,
      title: langToggle(item.title_ua, item.title_en, item.title_de, item.title_ru)
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "home-services__button--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ui_ButtonsDefault_ButtonsDefault__WEBPACK_IMPORTED_MODULE_3__.DefaultButtonLinkInner, {
    title: (0,_hooks_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)('Докладніше...', 'More...', 'Mehr...', 'Подробнее...'),
    link: '/services/'
  })));
};

HomeServicesList.propTypes = {
  services: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeServicesList);

/***/ }),

/***/ "./src/components/Ui/ButtonsDefault/ButtonsDefault.jsx":
/*!*************************************************************!*\
  !*** ./src/components/Ui/ButtonsDefault/ButtonsDefault.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultButton": () => (/* binding */ DefaultButton),
/* harmony export */   "DefaultButtonLinkInner": () => (/* binding */ DefaultButtonLinkInner),
/* harmony export */   "DefaultButtonLink": () => (/* binding */ DefaultButtonLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-react-i18next */ "./node_modules/gatsby-plugin-react-i18next/index.js");
/* harmony import */ var gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__);

 // import PropTypes from 'prop-types';

const DefaultButton = ({
  hendler,
  title,
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "default-button",
    onClick: hendler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "default-button__title"
  }, title), children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "default-button__icon--wrapper"
  }, children));
};
const DefaultButtonLinkInner = ({
  link,
  title,
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_react_i18next__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: link,
    className: "default-button default-button__link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "default-button__title"
  }, title), children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "default-button__icon--wrapper"
  }, children));
};
const DefaultButtonLink = ({
  link,
  title,
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: link,
    target: "blank",
    className: "default-button default-button__link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "default-button__title"
  }, title), children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "default-button__icon--wrapper"
  }, children));
}; // ButtonsDefault.propTypes = {};

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

/***/ "./src/components/Ui/SectionMarker/SectionMarker.jsx":
/*!***********************************************************!*\
  !*** ./src/components/Ui/SectionMarker/SectionMarker.jsx ***!
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



const SectionMarker = ({
  marker
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-marker__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "section-marker"
  }, marker));
};

SectionMarker.propTypes = {
  marker: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionMarker);

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

/***/ "./src/db/homeData.js":
/*!****************************!*\
  !*** ./src/db/homeData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeData": () => (/* binding */ homeData)
/* harmony export */ });
const homeData = {
  main: {
    title_ua: 'Пластична хірургія як особливий \nвид сучасного мистецтва',
    title_en: 'Plastic surgery as a special \nkind of contemporary art',
    title_de: 'Plastische Chirurgie als besondere \nForm der modernen Kunst',
    title_ru: 'Пластическая хирургия, как особый \nвид современного искусства',
    image: 'image'
  },
  about: {
    title_ua: 'Матолинец Тарас Михайлович',
    title_en: 'Матолинец Тарас Михайлович',
    title_de: 'Матолинец Тарас Михайлович',
    title_ru: 'Матолинец Тарас Михайлович',
    description_ua: 'Кандидат медицинских наук, пластический хирург Высшей категории, член Всеукраинской Ассоциации Пластических, Реконструктивных и Эстетических Хирургов. НАПРАВЛЕНИЕ: пластическая хирургия. Медицинский стаж: 23 года. Стаж работы пластическим хирургом – 16 лет.',
    description_en: 'Candidate of Medical Sciences, plastic surgeon of the highest category, member of the All-Ukrainian Association of Plastic, Reconstructive and Aesthetic Surgeons. DIRECTION: plastic surgery. Medical experience: 23 years. Experience as a plastic surgeon - 16 years.',
    description_de: 'Kandidat der medizinischen Wissenschaften, plastischer Chirurg der höchsten Kategorie, Mitglied der Allukrainischen Vereinigung der plastischen, rekonstruktiven und ästhetischen Chirurgen. RICHTUNG: plastische Chirurgie. Ärztliche Erfahrung: 23 Jahre. Erfahrung als plastischer Chirurg - 16 Jahre.',
    description_ru: 'Кандидат медичних наук, пластичний хірург Вищої категорії, член Всеукраїнської Асоціації Пластичних, Реконструктивних та Естетичних Хірургів. НАПРЯМОК: пластична хірургія. Медичний стаж: 23 роки. Стаж роботи пластичним хірургом – 16 років.',
    image: '/image link/'
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

/***/ "./src/db/servicesData.js":
/*!********************************!*\
  !*** ./src/db/servicesData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "servicesData": () => (/* binding */ servicesData)
/* harmony export */ });
const servicesData = {
  title_ua: 'Послуги',
  title_en: 'Services',
  title_de: 'Dienstleistungen',
  title_ru: 'Услуги',
  slug: '/services/',
  items: [{
    slug: '/services-inner/',
    image: '../../../../../svg/mam.svg',
    icon: 'mammoplasty',
    title_ua: 'Мамопластика',
    title_en: 'Mammoplasty',
    title_de: 'Mammoplastik',
    title_ru: 'Маммопластика'
  }, {
    slug: '/services-inner/',
    image: '../../../../../svg/rin.svg',
    icon: 'rhinoplasty',
    title_ua: 'Ринопластика',
    title_en: 'Rhinoplasty',
    title_de: 'Nasenkorrektur',
    title_ru: 'Ринопластика'
  }, {
    slug: '/services-inner/',
    image: '../../../../../svg/lip.svg',
    icon: 'liposuction',
    title_ua: 'Ліпосакція',
    title_en: 'Liposuction',
    title_de: 'Fettabsaugung',
    title_ru: 'Липосакция'
  }, {
    slug: '/services/',
    image: '../../../../../svg/fac.svg',
    icon: 'facial',
    title_ua: 'Хірургія обличчя',
    title_en: 'Facial surgery',
    title_de: 'Gesichtschirurgie',
    title_ru: 'Хирургия лица',
    category: [{
      slug: '/services-inner/',
      title_ua: 'Комки Біша',
      title_en: 'Lumps of Bish',
      title_de: 'Klumpen von Bish',
      title_ru: 'Комки Биша'
    }, {
      slug: '/services-inner/',
      title_ua: 'Верхня Блефаропластика',
      title_en: 'Upper Blepharoplasty',
      title_de: 'Obere Blepharoplastik',
      title_ru: 'Верхняя Блефаропластика'
    }, {
      slug: '/services-inner/',
      title_ua: 'Нижня Блефаропластика',
      title_en: 'Lower Blepharoplasty',
      title_de: 'Untere Blepharoplastik',
      title_ru: 'Нижняя Блефаропластика'
    }, {
      slug: '/services-inner/',
      title_ua: 'Отопластика',
      title_en: 'Otoplasty',
      title_de: 'Otoplastik',
      title_ru: 'Отопластика'
    }, {
      slug: '/services-inner/',
      title_ua: 'Булхорн',
      title_en: 'Bulhorn',
      title_de: 'Bulhorn',
      title_ru: 'Булхорн'
    }]
  }]
};

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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
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
/* harmony import */ var _components_Layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/layout */ "./src/components/Layout/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var _components_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Ui/InterfaceSystem/InterfaceSystem */ "./src/components/Ui/InterfaceSystem/InterfaceSystem.jsx");
/* harmony import */ var _components_Pages_Home_HomeMain_HomeMain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Pages/Home/HomeMain/HomeMain */ "./src/components/Pages/Home/HomeMain/HomeMain.jsx");
/* harmony import */ var _components_Pages_Home_HomeAbout_HomeAbout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Pages/Home/HomeAbout/HomeAbout */ "./src/components/Pages/Home/HomeAbout/HomeAbout.jsx");
/* harmony import */ var _components_Pages_Home_HomeServices_HomeServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Pages/Home/HomeServices/HomeServices */ "./src/components/Pages/Home/HomeServices/HomeServices.jsx");
/* harmony import */ var _db_homeData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../db/homeData */ "./src/db/homeData.js");
/* harmony import */ var _db_contactsData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../db/contactsData */ "./src/db/contactsData.js");
/* harmony import */ var _db_servicesData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../db/servicesData */ "./src/db/servicesData.js");

// import { useLanguage } from '../hooks/useLanguage';











const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: 'Dr.Matolinets',
    description: 'Dr.Matolinets'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Ui_InterfaceSystem_InterfaceSystem__WEBPACK_IMPORTED_MODULE_4__.PageWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Pages_Home_HomeMain_HomeMain__WEBPACK_IMPORTED_MODULE_5__["default"], {
    main: _db_homeData__WEBPACK_IMPORTED_MODULE_8__.homeData.main,
    whatsApp: _db_contactsData__WEBPACK_IMPORTED_MODULE_9__.contactsData.whatsapp
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Pages_Home_HomeAbout_HomeAbout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    about: _db_homeData__WEBPACK_IMPORTED_MODULE_8__.homeData.about
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Pages_Home_HomeServices_HomeServices__WEBPACK_IMPORTED_MODULE_7__["default"], {
    services: _db_servicesData__WEBPACK_IMPORTED_MODULE_10__.servicesData
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
const query = "2059891297";

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

/***/ "./src/svg/fac.svg":
/*!*************************!*\
  !*** ./src/svg/fac.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Fac (props) {
    return React.createElement("svg",props,[React.createElement("g",{"clipPath":"url(#clip0_225_57)","key":0},[React.createElement("path",{"d":"M16.261 37.7871C16.261 37.7871 23.989 35.5331 27.048 37.7871C28.7429 39.0676 30.5801 40.1481 32.523 41.0071C32.523 41.0071 29.623 48.8961 16.262 48.8961C2.901 48.8961 0 41.0071 0 41.0071C1.94254 40.148 3.77938 39.0675 5.474 37.7871C8.533 35.5331 16.261 37.7871 16.261 37.7871Z","fill":"#E8C981","key":0}),React.createElement("path",{"d":"M13.2033 70.229C13.058 70.2229 12.9207 70.1609 12.82 70.0559C12.7193 69.9509 12.6631 69.811 12.6631 69.6655C12.6631 69.5201 12.7193 69.3802 12.82 69.2752C12.9207 69.1702 13.058 69.1082 13.2033 69.102C21.0283 69.102 31.6703 66.445 38.0783 58.991C43.5843 52.583 50.3783 43.342 52.9223 36.579C55.2733 30.332 55.8523 0.852045 55.8523 0.547045C55.855 0.39984 55.9158 0.259663 56.0215 0.157161C56.1272 0.0546594 56.2691 -0.00182862 56.4163 4.51718e-05H56.4323C56.5069 0.000482851 56.5805 0.016035 56.6489 0.0457615C56.7172 0.0754879 56.7788 0.118771 56.83 0.17299C56.8811 0.22721 56.9207 0.291239 56.9464 0.361205C56.9721 0.431172 56.9833 0.50562 56.9793 0.580045C56.9633 1.80405 56.3993 30.559 53.9683 36.98C51.3763 43.871 44.4853 53.241 38.9303 59.73C35.7168 63.315 31.669 66.0524 27.1453 67.7C22.6886 69.377 17.9652 70.2338 13.2033 70.229Z","fill":"#E8C981","key":1}),React.createElement("path",{"d":"M44.4372 86.8101C44.3046 86.8128 44.1757 86.7667 44.0748 86.6806C43.974 86.5946 43.9083 86.4744 43.8902 86.3431C43.7612 85.6181 43.6002 84.7651 43.4392 83.8641C42.5052 78.8081 41.1042 71.1771 41.7972 66.9911C42.5862 62.2251 43.8742 51.9691 43.8902 51.8571C43.9094 51.7097 43.9864 51.5761 44.1041 51.4855C44.1625 51.4407 44.229 51.4077 44.3001 51.3886C44.3711 51.3695 44.4452 51.3646 44.5182 51.3741C44.5911 51.3836 44.6615 51.4074 44.7252 51.4441C44.789 51.4808 44.8449 51.5297 44.8897 51.5881C44.9346 51.6464 44.9675 51.7129 44.9866 51.784C45.0057 51.855 45.0107 51.9291 45.0012 52.0021C44.9852 52.1021 43.7012 62.3871 42.9082 67.1851C42.2482 71.1781 43.6322 78.6851 44.5502 83.6561C44.7112 84.5561 44.8722 85.4271 45.0012 86.1561C45.0143 86.2292 45.0125 86.3042 44.9959 86.3766C44.9793 86.449 44.9483 86.5173 44.9047 86.5774C44.8611 86.6376 44.8058 86.6883 44.7421 86.7265C44.6785 86.7648 44.6077 86.7898 44.5342 86.8001C44.5032 86.8114 44.4698 86.8148 44.4372 86.8101Z","fill":"#E8C981","key":2})]),React.createElement("defs",{"key":1},React.createElement("clipPath",{"id":"clip0_225_57"},React.createElement("rect",{"width":"56.98","height":"86.813","fill":"white"})))]);
}

Fac.defaultProps = {"width":"57","height":"87","viewBox":"0 0 57 87","fill":"none"};

module.exports = Fac;

Fac.default = Fac;


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

/***/ "./src/svg/lip.svg":
/*!*************************!*\
  !*** ./src/svg/lip.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Lip (props) {
    return React.createElement("svg",props,[React.createElement("g",{"clipPath":"url(#clip0_225_21)","key":0},[React.createElement("path",{"d":"M0.520608 81.2276H0.460917C0.325728 81.2135 0.201637 81.1464 0.115744 81.041C0.0298508 80.9357 -0.0108643 80.8006 0.00249109 80.6653C0.0168169 80.546 1.24645 68.406 3.25923 61.9666C4.47334 58.1022 7.95213 54.8156 10.7504 52.1772C12.497 50.5334 14.1552 48.979 14.1552 48.1803C14.4314 45.3671 14.9506 42.5831 15.7072 39.8594C12.43 36.9287 10.3801 32.8689 9.9673 28.4919C9.80751 26.7363 9.96276 24.9663 10.4257 23.2653C8.55637 21.227 7.25005 18.7369 6.63535 16.0404C5.69249 12.8025 5.30222 9.42884 5.48093 6.06122C5.49074 5.92571 5.55399 5.79964 5.65675 5.71076C5.75951 5.62188 5.89338 5.57746 6.02889 5.58728C6.1644 5.59709 6.29047 5.66034 6.37935 5.7631C6.46823 5.86587 6.51265 5.99973 6.50283 6.13524C6.05873 12.3825 8.36877 20.2892 11.3438 22.7019C11.4289 22.7683 11.4906 22.8601 11.5198 22.9641C11.549 23.0681 11.5442 23.1786 11.5061 23.2797C10.9923 24.9456 10.8161 26.6973 10.988 28.4322C11.4088 32.6385 13.4279 36.5228 16.6288 39.284C16.6956 39.3506 16.7443 39.4331 16.7702 39.5238C16.7961 39.6145 16.7984 39.7103 16.7768 39.8021C16.0219 42.5383 15.4893 45.3309 15.1843 48.1529C15.1843 49.3968 13.6144 50.8772 11.4536 52.9055C8.74363 55.4662 5.36513 58.6358 4.24294 62.2471C2.27433 68.6137 1.04469 80.6319 1.03037 80.7513C1.02359 80.8812 0.966672 81.0035 0.871601 81.0923C0.77653 81.1812 0.65071 81.2297 0.520608 81.2276V81.2276Z","fill":"#E8C981","key":0}),React.createElement("path",{"d":"M10.3213 7.55483C10.2581 7.5558 10.1963 7.53601 10.1454 7.49849C10.0945 7.46097 10.0574 7.40779 10.0396 7.3471C9.9059 6.903 9.80084 6.50307 9.71369 6.16283C9.69596 6.08621 9.70939 6.00568 9.75103 5.93897C9.79268 5.87225 9.85911 5.8248 9.93574 5.80707C10.0124 5.78934 10.0929 5.80278 10.1596 5.84442C10.2263 5.88606 10.2738 5.9525 10.2915 6.02912C10.3806 6.36976 10.4841 6.75457 10.6019 7.18355C10.6131 7.22148 10.6166 7.26128 10.6122 7.3006C10.6078 7.33991 10.5955 7.37795 10.5762 7.41245C10.5568 7.44695 10.5307 7.47722 10.4995 7.50147C10.4682 7.52571 10.4324 7.54345 10.3942 7.55363L10.3213 7.55483Z","fill":"#E8C981","key":1}),React.createElement("path",{"d":"M7.01972 77.5567H7.00539C6.92793 77.5501 6.85583 77.5144 6.80357 77.4568C6.75132 77.3993 6.72277 77.3241 6.72365 77.2463C6.73798 77.084 6.7535 76.9204 6.76782 76.7688C6.77174 76.7296 6.78334 76.6916 6.80196 76.6569C6.82058 76.6221 6.84586 76.5914 6.87634 76.5665C6.90683 76.5415 6.94193 76.5229 6.97964 76.5115C7.01735 76.5001 7.05693 76.4963 7.09612 76.5002C7.13532 76.5041 7.17336 76.5157 7.20807 76.5343C7.24278 76.5529 7.27348 76.5782 7.29842 76.6087C7.32336 76.6392 7.34206 76.6743 7.35344 76.712C7.36482 76.7497 7.36865 76.7893 7.36473 76.8285C7.35041 76.9765 7.33489 77.1389 7.32056 77.2869C7.31235 77.361 7.27713 77.4295 7.22163 77.4792C7.16614 77.529 7.09426 77.5566 7.01972 77.5567V77.5567ZM7.30146 75.2885H7.25729C7.21897 75.2824 7.18226 75.2687 7.14934 75.2482C7.11642 75.2277 7.08798 75.2008 7.06569 75.169C7.04341 75.1373 7.02775 75.1013 7.01965 75.0634C7.01154 75.0255 7.01116 74.9863 7.01853 74.9482C7.12239 74.3513 7.25729 73.7639 7.40294 73.1718C7.41064 73.1328 7.42626 73.0957 7.44884 73.063C7.47141 73.0302 7.50046 73.0024 7.53418 72.9813C7.5679 72.9602 7.60559 72.9463 7.64492 72.9403C7.68426 72.9343 7.7244 72.9364 7.76287 72.9466C7.80134 72.9567 7.83733 72.9746 7.86862 72.9992C7.89991 73.0237 7.92583 73.0545 7.94479 73.0894C7.96375 73.1244 7.97535 73.1629 7.97886 73.2025C7.98237 73.2422 7.97773 73.2821 7.96523 73.3198C7.81719 73.8977 7.68348 74.4898 7.59514 75.0664C7.57563 75.1298 7.53688 75.1856 7.48427 75.226C7.43165 75.2665 7.36777 75.2895 7.30146 75.292V75.2885ZM8.18966 71.7941C8.15949 71.7966 8.12918 71.7917 8.10132 71.7798C8.02854 71.7537 7.96831 71.7011 7.93268 71.6325C7.89704 71.5638 7.88862 71.4843 7.90911 71.4097C8.10132 70.8475 8.30904 70.2696 8.53109 69.6918C8.56333 69.6233 8.62059 69.5698 8.6911 69.5422C8.7616 69.5146 8.84 69.5151 8.91017 69.5435C8.98034 69.5719 9.03696 69.6262 9.06837 69.6951C9.09978 69.764 9.1036 69.8423 9.07906 69.9139C8.85701 70.4762 8.64928 71.0397 8.4726 71.5852C8.45443 71.6463 8.41713 71.6999 8.36619 71.7382C8.31525 71.7764 8.25337 71.7973 8.18966 71.7977V71.7941ZM9.52197 68.4515C9.48045 68.4505 9.43966 68.4403 9.40258 68.4216C9.33248 68.3854 9.27844 68.3243 9.25105 68.2503C9.22367 68.1763 9.22491 68.0948 9.25455 68.0217C9.50644 67.4892 9.77267 66.9413 10.0544 66.3933C10.07 66.3553 10.0933 66.321 10.1228 66.2924C10.1522 66.2639 10.1873 66.2417 10.2257 66.2273C10.2641 66.2129 10.3051 66.2066 10.3461 66.2087C10.3871 66.2109 10.4272 66.2215 10.4639 66.2398C10.5006 66.2582 10.5332 66.2839 10.5595 66.3154C10.5858 66.3469 10.6053 66.3835 10.6169 66.4229C10.6284 66.4623 10.6317 66.5036 10.6265 66.5443C10.6214 66.5851 10.6079 66.6243 10.5869 66.6595C10.3051 67.2075 10.0389 67.7399 9.80251 68.2581C9.7797 68.3141 9.741 68.3623 9.69115 68.3967C9.6413 68.4311 9.58249 68.4501 9.52197 68.4515V68.4515ZM11.1802 65.2532C11.1277 65.2524 11.0765 65.2371 11.0321 65.209C10.9976 65.1911 10.9672 65.166 10.9429 65.1356C10.9187 65.1051 10.901 65.0699 10.8913 65.0322C10.8815 64.9945 10.8797 64.9551 10.8861 64.9167C10.8925 64.8783 10.9068 64.8416 10.9283 64.8091C11.21 64.3053 11.5252 63.7872 11.8463 63.2571C11.8874 63.1941 11.9512 63.1493 12.0244 63.1321C12.0977 63.1149 12.1747 63.1265 12.2396 63.1647C12.3044 63.2028 12.3521 63.2644 12.3727 63.3368C12.3933 63.4092 12.3852 63.4867 12.3501 63.5532C12.0242 64.0857 11.7138 64.605 11.4321 65.0932C11.4101 65.1414 11.3746 65.1822 11.3299 65.2106C11.2852 65.239 11.2332 65.2538 11.1802 65.2532V65.2532ZM13.0604 62.1756C13.0035 62.1748 12.9476 62.1596 12.8981 62.1314C12.8325 62.0873 12.7865 62.0194 12.7701 61.9421C12.7536 61.8648 12.7678 61.7841 12.8097 61.7171C13.1058 61.2587 13.4317 60.7549 13.8018 60.2069C13.8232 60.1739 13.8509 60.1453 13.8833 60.123C13.9158 60.1006 13.9523 60.0848 13.9908 60.0766C14.0293 60.0683 14.0691 60.0677 14.1079 60.0748C14.1466 60.0819 14.1836 60.0966 14.2167 60.118C14.2497 60.1394 14.2783 60.1671 14.3006 60.1995C14.323 60.232 14.3388 60.2685 14.347 60.307C14.3553 60.3455 14.3559 60.3853 14.3488 60.4241C14.3417 60.4628 14.327 60.4998 14.3056 60.5329C13.9355 61.0808 13.6251 61.5846 13.3135 62.043C13.2827 62.0813 13.2443 62.1128 13.2008 62.1356C13.1572 62.1584 13.1095 62.172 13.0604 62.1756V62.1756ZM15.0446 59.1552C14.9873 59.1563 14.931 59.141 14.8822 59.111C14.8493 59.0894 14.8212 59.0612 14.7996 59.0284C14.7779 58.9955 14.7632 58.9585 14.7562 58.9198C14.7493 58.881 14.7503 58.8413 14.7593 58.8029C14.7682 58.7646 14.7849 58.7285 14.8082 58.6968L15.0899 58.2825C15.3418 57.9124 15.5782 57.5567 15.8158 57.2021C15.8381 57.17 15.8665 57.1427 15.8995 57.1216C15.9324 57.1006 15.9691 57.0862 16.0076 57.0793C16.046 57.0724 16.0855 57.0732 16.1237 57.0816C16.1618 57.0899 16.198 57.1058 16.23 57.1281C16.2621 57.1504 16.2894 57.1789 16.3105 57.2118C16.3316 57.2447 16.346 57.2814 16.3528 57.3199C16.3597 57.3584 16.3589 57.3978 16.3506 57.436C16.3422 57.4741 16.3264 57.5103 16.3041 57.5423C16.0653 57.9005 15.8158 58.2682 15.5782 58.6228L15.2965 59.037C15.2661 59.0744 15.2277 59.1043 15.184 59.1246C15.1404 59.1449 15.0927 59.1549 15.0446 59.154V59.1552ZM17.0585 56.1492C17.0013 56.1503 16.945 56.135 16.8962 56.105C16.8306 56.0609 16.7846 55.993 16.7682 55.9157C16.7517 55.8384 16.7659 55.7577 16.8078 55.6907C17.166 55.1428 17.4883 54.639 17.7701 54.1806C17.7901 54.1458 17.8168 54.1153 17.8487 54.091C17.8806 54.0667 17.917 54.049 17.9558 54.0389C17.9946 54.0288 18.0351 54.0265 18.0748 54.0322C18.1145 54.0379 18.1527 54.0514 18.1871 54.0721C18.2215 54.0927 18.2514 54.1199 18.2752 54.1523C18.299 54.1846 18.3161 54.2213 18.3255 54.2603C18.3349 54.2993 18.3364 54.3398 18.33 54.3794C18.3236 54.419 18.3094 54.4569 18.2882 54.4909C17.9921 54.9685 17.6817 55.4687 17.3104 56.0154C17.282 56.0563 17.2442 56.0896 17.2001 56.1127C17.1561 56.1358 17.1071 56.1479 17.0573 56.148L17.0585 56.1492ZM18.9388 53.0691C18.8863 53.0683 18.8351 53.053 18.7908 53.0249C18.7567 53.0065 18.7265 52.9816 18.702 52.9515C18.6775 52.9215 18.6592 52.8869 18.6482 52.8497C18.6371 52.8126 18.6334 52.7736 18.6374 52.735C18.6414 52.6965 18.6529 52.6591 18.6714 52.625C18.9818 52.0627 19.2492 51.5446 19.4999 51.0408C19.5155 51.0028 19.5388 50.9685 19.5682 50.9399C19.5977 50.9114 19.6328 50.8892 19.6712 50.8748C19.7096 50.8604 19.7506 50.8541 19.7916 50.8562C19.8326 50.8584 19.8727 50.869 19.9094 50.8873C19.9461 50.9057 19.9787 50.9314 20.005 50.9629C20.0313 50.9944 20.0508 51.031 20.0624 51.0704C20.0739 51.1098 20.0772 51.1511 20.072 51.1918C20.0669 51.2326 20.0534 51.2718 20.0323 51.307C19.7805 51.8251 19.5142 52.3588 19.1883 52.9211C19.166 52.9679 19.1303 53.007 19.0856 53.0334C19.0409 53.0598 18.9894 53.0722 18.9376 53.0691H18.9388ZM20.4788 49.8124C20.4436 49.8149 20.4082 49.8101 20.375 49.798C20.3008 49.7701 20.2406 49.7142 20.2074 49.6422C20.1741 49.5703 20.1704 49.4882 20.1971 49.4136C20.3996 48.8618 20.5679 48.2981 20.7009 47.7256C20.7186 47.649 20.7661 47.5825 20.8328 47.5409C20.8995 47.4992 20.98 47.4858 21.0566 47.5035C21.1333 47.5213 21.1997 47.5687 21.2413 47.6354C21.283 47.7021 21.2964 47.7827 21.2787 47.8593C21.1479 48.4582 20.9748 49.047 20.7606 49.6214C20.7396 49.6789 20.7009 49.7283 20.6501 49.7624C20.5992 49.7965 20.5388 49.8136 20.4776 49.8112L20.4788 49.8124ZM21.2333 46.3037C21.1534 46.3003 21.0779 46.2661 21.0227 46.2082C20.9675 46.1503 20.9369 46.0733 20.9373 45.9933C20.9516 45.8011 20.9516 45.5934 20.9516 45.3869C20.9516 45.0168 20.9373 44.6324 20.9074 44.2169C20.9035 44.1378 20.9311 44.0603 20.9843 44.0015C21.0374 43.9428 21.1118 43.9075 21.1909 43.9036C21.2701 43.8996 21.3476 43.9273 21.4064 43.9804C21.4651 44.0336 21.5004 44.1079 21.5043 44.1871C21.5338 44.6161 21.5485 45.014 21.5485 45.3809C21.5485 45.603 21.5485 45.8107 21.5342 46.0172C21.5337 46.0557 21.5255 46.0937 21.51 46.1288C21.4945 46.164 21.472 46.1957 21.4438 46.2219C21.4157 46.2482 21.3825 46.2684 21.3464 46.2814C21.3102 46.2945 21.2717 46.3 21.2333 46.2978V46.3037ZM21.0256 42.7056C20.9544 42.7054 20.8856 42.68 20.8314 42.6339C20.7772 42.5877 20.7411 42.5239 20.7295 42.4537C20.6555 41.8914 20.5672 41.2992 20.4478 40.6773C20.4367 40.6018 20.4553 40.525 20.4999 40.463C20.5444 40.4011 20.6113 40.3589 20.6864 40.3454C20.7615 40.3319 20.8389 40.3481 20.9022 40.3907C20.9655 40.4332 21.0098 40.4988 21.0256 40.5734C21.145 41.1954 21.2333 41.8018 21.3073 42.3641C21.3127 42.4021 21.3104 42.4408 21.3006 42.4779C21.2907 42.5151 21.2736 42.5498 21.2501 42.5802C21.2266 42.6105 21.1973 42.6359 21.1639 42.6548C21.1304 42.6736 21.0936 42.6856 21.0554 42.69C21.0495 42.7056 21.0399 42.7056 21.0256 42.7056V42.7056ZM20.3893 39.1528C20.3199 39.1534 20.2525 39.1299 20.1985 39.0864C20.1445 39.0428 20.1073 38.9819 20.0932 38.914C19.9738 38.3517 19.8413 37.7596 19.6933 37.1674C19.6756 37.0908 19.689 37.0103 19.7306 36.9436C19.7723 36.8769 19.8387 36.8294 19.9154 36.8117C19.992 36.7939 20.0725 36.8074 20.1392 36.849C20.2059 36.8907 20.2534 36.9571 20.2711 37.0337C20.4191 37.6402 20.5528 38.2276 20.671 38.7958C20.685 38.8724 20.6701 38.9515 20.629 39.0177C20.588 39.0838 20.5238 39.1324 20.449 39.154L20.3893 39.1528ZM19.5453 35.6441C19.479 35.646 19.4142 35.6247 19.3619 35.584C19.3096 35.5433 19.2731 35.4856 19.2587 35.4209C19.1107 34.8586 18.9484 34.2808 18.7812 33.6887C18.7594 33.6109 18.7693 33.5277 18.8088 33.4573C18.8483 33.3869 18.9142 33.335 18.9919 33.3132C19.0697 33.2914 19.1529 33.3013 19.2233 33.3408C19.2937 33.3803 19.3455 33.4462 19.3674 33.5239C19.5298 34.1208 19.6933 34.7082 19.8449 35.2705C19.8558 35.3076 19.8591 35.3466 19.8545 35.3851C19.8499 35.4235 19.8375 35.4607 19.818 35.4942C19.7986 35.5277 19.7725 35.5569 19.7414 35.58C19.7103 35.6031 19.6749 35.6196 19.6372 35.6286C19.6062 35.6306 19.5754 35.6354 19.5453 35.6429V35.6441ZM18.5675 32.1653C18.5043 32.1663 18.4425 32.1465 18.3916 32.109C18.3407 32.0715 18.3035 32.0183 18.2858 31.9576C18.1234 31.3953 17.9455 30.8175 17.7677 30.2254C17.756 30.1885 17.7517 30.1496 17.755 30.111C17.7584 30.0724 17.7693 30.0349 17.7871 30.0005C17.8232 29.9311 17.8853 29.8789 17.9599 29.8553C18.0344 29.8317 18.1153 29.8387 18.1847 29.8748C18.2541 29.9108 18.3064 29.9729 18.33 30.0475C18.5078 30.6444 18.6881 31.2175 18.8481 31.7797C18.8593 31.8177 18.8628 31.8575 18.8584 31.8968C18.854 31.9361 18.8417 31.9741 18.8224 32.0086C18.803 32.0431 18.7769 32.0734 18.7456 32.0977C18.7144 32.1219 18.6786 32.1396 18.6404 32.1498C18.6164 32.156 18.5921 32.1608 18.5675 32.1641V32.1653ZM17.5014 28.7033C17.4385 28.7029 17.3774 28.6826 17.3268 28.6453C17.2761 28.6079 17.2387 28.5555 17.2197 28.4955C17.0418 27.9177 16.8496 27.3554 16.6717 26.7776C16.6482 26.7031 16.6552 26.6222 16.6912 26.5528C16.7272 26.4834 16.7894 26.4311 16.864 26.4076C16.9385 26.384 17.0194 26.391 17.0888 26.427C17.1582 26.4631 17.2104 26.5252 17.234 26.5998C17.4262 27.1776 17.6041 27.7542 17.7963 28.3177C17.81 28.3631 17.8127 28.4111 17.8041 28.4577C17.7955 28.5044 17.776 28.5483 17.747 28.5859C17.7181 28.6235 17.6806 28.6536 17.6377 28.6738C17.5948 28.694 17.5477 28.7037 17.5003 28.7021L17.5014 28.7033ZM16.3912 25.2686C16.3283 25.2683 16.2671 25.248 16.2165 25.2107C16.1659 25.1733 16.1284 25.1209 16.1095 25.0609C15.9172 24.4831 15.725 23.9208 15.5316 23.3585C15.5062 23.2859 15.5106 23.2061 15.5439 23.1367C15.5773 23.0673 15.6369 23.0139 15.7095 22.9885C15.7822 22.963 15.862 22.9674 15.9314 23.0007C16.0008 23.0341 16.0541 23.0937 16.0796 23.1663C16.2718 23.7286 16.464 24.3064 16.6574 24.8842C16.6708 24.9211 16.6765 24.9603 16.6739 24.9994C16.6714 25.0386 16.6608 25.0767 16.6427 25.1115C16.6246 25.1463 16.5995 25.177 16.569 25.2016C16.5384 25.2262 16.5031 25.2441 16.4652 25.2543C16.4431 25.2654 16.4179 25.2688 16.3936 25.2639L16.3912 25.2686ZM15.2212 21.8484C15.1604 21.8483 15.101 21.8299 15.0508 21.7956C15.0006 21.7614 14.9618 21.7128 14.9395 21.6562C14.7473 21.0783 14.5396 20.5161 14.3426 19.9538C14.3171 19.8811 14.3215 19.8013 14.3549 19.7319C14.3883 19.6625 14.4478 19.6092 14.5205 19.5837C14.5931 19.5582 14.673 19.5626 14.7424 19.596C14.8118 19.6293 14.8651 19.6889 14.8906 19.7616C15.0828 20.3239 15.2905 20.9017 15.4875 21.464C15.5006 21.4999 15.5064 21.5381 15.5046 21.5763C15.5027 21.6146 15.4932 21.652 15.4767 21.6865C15.4601 21.721 15.4367 21.7519 15.408 21.7772C15.3794 21.8025 15.3459 21.8219 15.3096 21.834C15.2818 21.8445 15.2519 21.8482 15.2225 21.8448L15.2212 21.8484ZM14.037 18.4436C13.9762 18.4435 13.9168 18.4251 13.8665 18.3909C13.8163 18.3566 13.7775 18.308 13.7552 18.2514C13.5475 17.6736 13.3553 17.1113 13.1488 16.549C13.1212 16.4744 13.1244 16.392 13.1577 16.3198C13.1909 16.2476 13.2515 16.1915 13.3261 16.164C13.4006 16.1364 13.4831 16.1396 13.5553 16.1729C13.6275 16.2061 13.6835 16.2667 13.7111 16.3413C13.9033 16.9036 14.111 17.467 14.3175 18.0437C14.3307 18.0796 14.3365 18.1178 14.3346 18.1561C14.3328 18.1943 14.3233 18.2317 14.3067 18.2662C14.2901 18.3007 14.2668 18.3316 14.2381 18.3569C14.2094 18.3822 14.1759 18.4016 14.1397 18.4137C14.1093 18.4335 14.0731 18.4423 14.037 18.4388V18.4436ZM12.8432 15.0388C12.7823 15.0387 12.723 15.0204 12.6727 14.9861C12.6225 14.9518 12.5837 14.9032 12.5614 14.8466C12.3537 14.2688 12.1615 13.6922 11.9645 13.1442C11.939 13.0716 11.9435 12.9918 11.9768 12.9223C12.0102 12.8529 12.0697 12.7996 12.1424 12.7741C12.2151 12.7487 12.2949 12.7531 12.3643 12.7864C12.4337 12.8198 12.487 12.8794 12.5125 12.952C12.7047 13.5 12.8969 14.0778 13.1094 14.6544C13.1345 14.7291 13.1301 14.8105 13.097 14.882C13.0639 14.9535 13.0047 15.0097 12.9315 15.0388C12.8969 15.0197 12.8682 15.034 12.8384 15.034L12.8432 15.0388ZM11.6493 11.6185C11.5864 11.6182 11.5253 11.5979 11.4747 11.5605C11.424 11.5232 11.3866 11.4708 11.3676 11.4108C11.1599 10.8043 10.9677 10.2409 10.7898 9.6929C10.7781 9.65598 10.7738 9.61712 10.7772 9.57854C10.7805 9.53996 10.7914 9.50242 10.8093 9.46805C10.8271 9.43368 10.8515 9.40317 10.8812 9.37825C10.9108 9.35333 10.9451 9.3345 10.982 9.32282C11.0189 9.31114 11.0578 9.30684 11.0964 9.31018C11.1349 9.31352 11.1725 9.32442 11.2068 9.34227C11.2412 9.36012 11.2717 9.38456 11.2967 9.4142C11.3216 9.44384 11.3404 9.4781 11.3521 9.51502C11.53 10.0475 11.7222 10.6253 11.9299 11.2174C11.943 11.2533 11.9489 11.2916 11.947 11.3298C11.9452 11.368 11.9356 11.4055 11.9191 11.44C11.9025 11.4745 11.8792 11.5053 11.8505 11.5306C11.8218 11.556 11.7883 11.5753 11.752 11.5875C11.7369 11.6012 11.7186 11.6108 11.6987 11.6154C11.6789 11.62 11.6582 11.6194 11.6386 11.6138L11.6493 11.6185Z","fill":"#E8C981","key":2}),React.createElement("path",{"d":"M6.9897 79.9993C6.9516 80.0009 6.91356 79.9948 6.87786 79.9814C6.84216 79.968 6.80951 79.9476 6.78189 79.9213C6.75426 79.895 6.73221 79.8634 6.71705 79.8284C6.70188 79.7934 6.69392 79.7557 6.69363 79.7176C6.67931 79.3033 6.66379 78.8879 6.67931 78.4891C6.67931 78.41 6.71076 78.3341 6.76673 78.2781C6.8227 78.2221 6.89861 78.1907 6.97777 78.1907C7.05692 78.1907 7.13283 78.2221 7.18881 78.2781C7.24478 78.3341 7.27622 78.41 7.27622 78.4891C7.27622 78.8891 7.27622 79.289 7.29054 79.6829C7.28813 79.7621 7.25658 79.8376 7.20193 79.8948C7.14729 79.9521 7.07341 79.9872 6.99448 79.9934L6.9897 79.9993Z","fill":"#E8C981","key":3}),React.createElement("path",{"d":"M10.7671 56.7116C10.7369 56.714 10.7066 56.7091 10.6787 56.6973L10.2645 56.5636C9.99824 56.4752 9.76067 56.4012 9.52429 56.3248C9.48737 56.3131 9.45311 56.2943 9.42347 56.2694C9.39383 56.2444 9.36939 56.2139 9.35155 56.1796C9.3337 56.1452 9.3228 56.1076 9.31946 56.0691C9.31612 56.0305 9.32041 55.9916 9.33209 55.9547C9.34377 55.9178 9.3626 55.8835 9.38752 55.8539C9.41244 55.8243 9.44296 55.7998 9.47733 55.782C9.51169 55.7641 9.54923 55.7532 9.58781 55.7499C9.62639 55.7465 9.66525 55.7508 9.70217 55.7625C9.94093 55.8365 10.1797 55.9105 10.4423 56.0013L10.8566 56.135C10.8936 56.1465 10.928 56.1653 10.9577 56.1902C10.9874 56.215 11.0119 56.2456 11.0298 56.28C11.0477 56.3144 11.0585 56.352 11.0618 56.3906C11.0651 56.4292 11.0606 56.4681 11.0488 56.505C11.0333 56.5669 10.9967 56.6215 10.9452 56.6592C10.8938 56.6969 10.8307 56.7154 10.7671 56.7116V56.7116Z","fill":"#E8C981","key":4}),React.createElement("path",{"d":"M30.7386 76.3272C30.6734 76.328 30.6098 76.3064 30.5585 76.266C30.5072 76.2256 30.4714 76.1688 30.4569 76.1052C30.3089 75.5727 30.131 74.9949 29.9245 74.3873C29.9128 74.3504 29.9085 74.3115 29.9118 74.2729C29.9152 74.2343 29.9261 74.1968 29.9439 74.1624C29.9618 74.128 29.9862 74.0975 30.0158 74.0726C30.0455 74.0477 30.0797 74.0289 30.1167 74.0172C30.1536 74.0055 30.1924 74.0012 30.231 74.0046C30.2696 74.0079 30.3071 74.0188 30.3415 74.0366C30.3759 74.0545 30.4064 74.0789 30.4313 74.1086C30.4562 74.1382 30.4751 74.1725 30.4867 74.2094C30.6945 74.8158 30.8712 75.4032 31.0192 75.9559C31.0304 75.9939 31.0339 76.0337 31.0295 76.073C31.0251 76.1123 31.0128 76.1504 30.9935 76.1849C30.9741 76.2193 30.948 76.2496 30.9168 76.2739C30.8855 76.2981 30.8497 76.3158 30.8115 76.326L30.7386 76.3272ZM29.5842 72.8926C29.5234 72.8925 29.464 72.8742 29.4138 72.8399C29.3635 72.8056 29.3247 72.757 29.3025 72.7004C29.0948 72.1679 28.8584 71.6045 28.622 71.0422C28.5975 70.9706 28.6013 70.8923 28.6327 70.8234C28.6641 70.7545 28.7207 70.7002 28.7909 70.6718C28.8611 70.6433 28.9394 70.6429 29.01 70.6705C29.0805 70.6981 29.1377 70.7516 29.17 70.8201C29.4219 71.3979 29.6475 71.9602 29.866 72.5082C29.8939 72.5808 29.8925 72.6615 29.8623 72.7331C29.832 72.8048 29.7751 72.862 29.7036 72.8926H29.5842ZM28.1624 69.5762C28.1049 69.5787 28.0481 69.5627 28.0002 69.5308C27.9523 69.4988 27.9159 69.4524 27.8962 69.3983C27.7923 69.1906 27.704 68.9685 27.6001 68.7465C27.4521 68.4206 27.2897 68.0946 27.1118 67.7843C27.0745 67.7155 27.0659 67.6348 27.0881 67.5598C27.1103 67.4848 27.1613 67.4217 27.23 67.3843C27.2987 67.347 27.3795 67.3384 27.4545 67.3606C27.5295 67.3827 27.5926 67.4338 27.6299 67.5025C27.8078 67.8284 27.9881 68.1543 28.1337 68.4946C28.2376 68.7166 28.3415 68.9387 28.4298 69.1464C28.4627 69.2191 28.4657 69.3019 28.438 69.3768C28.4102 69.4517 28.3541 69.5126 28.2818 69.5463C28.2447 69.565 28.2039 69.5753 28.1624 69.5762V69.5762ZM26.4158 66.4221C26.3677 66.4234 26.3201 66.4116 26.278 66.3881C26.236 66.3646 26.2011 66.3301 26.1771 66.2884C25.8368 65.8109 25.4608 65.3405 25.0811 64.8821C25.0559 64.8529 25.0366 64.8191 25.0245 64.7825C25.0123 64.7459 25.0075 64.7072 25.0103 64.6688C25.013 64.6303 25.0234 64.5927 25.0406 64.5583C25.0579 64.5238 25.0818 64.493 25.111 64.4678C25.1401 64.4426 25.174 64.4233 25.2106 64.4112C25.2472 64.399 25.2858 64.3942 25.3243 64.3969C25.3628 64.3997 25.4003 64.4101 25.4348 64.4273C25.4693 64.4446 25.5 64.4685 25.5252 64.4977C25.9259 64.9609 26.3016 65.4451 26.651 65.9482C26.6947 66.0134 26.7114 66.093 26.6975 66.1702C26.6837 66.2475 26.6405 66.3164 26.577 66.3624C26.5301 66.3975 26.4742 66.4186 26.4158 66.4233V66.4221ZM24.0473 63.6835C24.0085 63.6833 23.9702 63.6753 23.9346 63.6602C23.8989 63.645 23.8666 63.6229 23.8396 63.5951C23.4107 63.1823 22.9608 62.7918 22.4917 62.4252C22.4348 62.3749 22.3995 62.3046 22.3931 62.229C22.3868 62.1533 22.4098 62.0781 22.4575 62.019C22.5052 61.9599 22.5739 61.9215 22.6492 61.9117C22.7245 61.902 22.8007 61.9217 22.8618 61.9668C23.3407 62.3482 23.8001 62.7534 24.2383 63.1809C24.2936 63.2348 24.326 63.308 24.3286 63.3851C24.3313 63.4623 24.3041 63.5376 24.2526 63.5951C24.2276 63.6251 24.1958 63.6487 24.1599 63.664C24.124 63.6793 24.085 63.686 24.0461 63.6835H24.0473ZM21.2346 61.4152C21.1774 61.4164 21.1211 61.401 21.0723 61.3711C20.5948 61.0451 20.0802 60.7192 19.5621 60.4088C19.4991 60.3678 19.4543 60.304 19.4371 60.2308C19.4198 60.1575 19.4315 60.0804 19.4696 60.0156C19.5077 59.9507 19.5694 59.903 19.6417 59.8825C19.7141 59.8619 19.7916 59.87 19.8582 59.905C20.3906 60.2154 20.9099 60.5414 21.3982 60.8828C21.4617 60.9288 21.505 60.9977 21.5188 61.075C21.5326 61.1522 21.5159 61.2318 21.4722 61.2971C21.4466 61.3365 21.411 61.3684 21.3691 61.3898C21.3272 61.4112 21.2804 61.4212 21.2335 61.4188L21.2346 61.4152ZM18.1307 59.5791C18.0848 59.5764 18.0397 59.5663 17.997 59.5493C17.4789 59.2831 16.9309 59.0312 16.383 58.7793C16.348 58.7636 16.3165 58.7412 16.2902 58.7133C16.2639 58.6855 16.2433 58.6527 16.2297 58.6169C16.216 58.5811 16.2096 58.543 16.2107 58.5047C16.2118 58.4664 16.2205 58.4286 16.2361 58.3937C16.2518 58.3587 16.2742 58.3272 16.3021 58.3009C16.3299 58.2746 16.3627 58.254 16.3985 58.2404C16.4343 58.2267 16.4725 58.2203 16.5108 58.2214C16.5491 58.2225 16.5868 58.2311 16.6217 58.2468C17.184 58.4987 17.7475 58.765 18.2656 59.0312C18.3007 59.0486 18.3321 59.0727 18.3578 59.1023C18.3836 59.1318 18.4032 59.1662 18.4157 59.2033C18.4281 59.2405 18.433 59.2798 18.4302 59.3188C18.4274 59.3579 18.4169 59.3961 18.3993 59.4311C18.3697 59.4771 18.3291 59.5151 18.2812 59.5415C18.2332 59.568 18.1795 59.5822 18.1247 59.5827L18.1307 59.5791ZM14.8143 58.1131C14.7791 58.1157 14.7437 58.1108 14.7104 58.0988C14.1772 57.8919 13.6145 57.6845 13.0224 57.4768C12.9864 57.4642 12.9532 57.4446 12.9248 57.4192C12.8964 57.3938 12.8733 57.363 12.8568 57.3286C12.8403 57.2942 12.8307 57.257 12.8286 57.2189C12.8265 57.1808 12.8319 57.1427 12.8445 57.1067C12.8571 57.0708 12.8767 57.0376 12.9021 57.0092C12.9276 56.9808 12.9583 56.9577 12.9927 56.9412C13.0271 56.9246 13.0643 56.915 13.1024 56.9129C13.1405 56.9108 13.1786 56.9162 13.2146 56.9288C13.821 57.1366 14.369 57.3431 14.917 57.5652C14.9885 57.5958 15.0453 57.653 15.0756 57.7246C15.1059 57.7963 15.1072 57.8769 15.0793 57.9496C15.0556 58.001 15.0173 58.0443 14.969 58.0741C14.9208 58.1038 14.8649 58.1186 14.8083 58.1167L14.8143 58.1131Z","fill":"#E8C981","key":5}),React.createElement("path",{"d":"M31.2426 79.9994C31.217 80.0017 31.1913 79.9968 31.1685 79.9851C31.0921 79.9661 31.0262 79.918 30.9847 79.8511C30.9433 79.7842 30.9295 79.7037 30.9465 79.6269C30.9962 79.2581 30.9914 78.884 30.9322 78.5166C30.9282 78.4774 30.9321 78.4379 30.9434 78.4002C30.9548 78.3625 30.9735 78.3274 30.9985 78.2969C31.0234 78.2664 31.0541 78.2411 31.0888 78.2225C31.1235 78.2039 31.1616 78.1923 31.2008 78.1884C31.24 78.1845 31.2795 78.1883 31.3172 78.1997C31.355 78.2111 31.3901 78.2297 31.4205 78.2547C31.451 78.2796 31.4763 78.3103 31.4949 78.345C31.5135 78.3797 31.5251 78.4178 31.5291 78.457C31.5975 78.8884 31.5975 79.328 31.5291 79.7594C31.5184 79.8273 31.4835 79.889 31.4308 79.9331C31.3781 79.9772 31.3113 80.0008 31.2426 79.9994V79.9994Z","fill":"#E8C981","key":6}),React.createElement("path",{"d":"M79.5518 81.229C79.421 81.23 79.2947 81.1812 79.1985 81.0925C79.1023 81.0039 79.0434 80.8819 79.0337 80.7515C79.0194 80.6321 77.8053 68.596 75.8211 62.2592C74.6954 58.6467 71.3204 55.464 68.6105 52.9176C66.4485 50.875 64.8798 49.409 64.8798 48.165C64.5728 45.3429 64.0382 42.5502 63.2813 39.8142C63.2597 39.7224 63.262 39.6266 63.2879 39.5359C63.3138 39.4452 63.3625 39.3627 63.4293 39.2961C66.6275 36.5329 68.6461 32.6496 69.0701 28.4443C69.2321 26.7047 69.0562 24.9502 68.552 23.2775C68.5139 23.1764 68.5091 23.0659 68.5383 22.9619C68.5675 22.858 68.6292 22.7661 68.7143 22.6997C71.6905 20.287 73.9994 12.3803 73.5553 6.13304C73.5504 6.06594 73.5588 5.99854 73.58 5.93469C73.6012 5.87084 73.6348 5.81178 73.6788 5.7609C73.7228 5.71002 73.7764 5.6683 73.8365 5.63814C73.8966 5.60797 73.9621 5.58994 74.0292 5.58508C74.0963 5.58022 74.1637 5.58862 74.2276 5.60981C74.2914 5.631 74.3505 5.66455 74.4014 5.70856C74.4522 5.75257 74.4939 5.80618 74.5241 5.86631C74.5543 5.92644 74.5723 5.99192 74.5772 6.05902C74.7493 9.42643 74.3591 12.799 73.4228 16.0382C72.8081 18.7348 71.5018 21.2248 69.6324 23.2631C70.1034 24.9574 70.2651 26.7226 70.1099 28.4742C69.6897 32.8508 67.6391 36.9093 64.3652 39.8441C65.1218 42.5677 65.641 45.3518 65.9172 48.165C65.9172 48.9649 67.5754 50.5192 69.322 52.1619C72.1203 54.7967 75.5991 58.0844 76.8132 61.9512C78.8272 68.3919 80.0556 80.5318 80.0699 80.65C80.0833 80.7853 80.0426 80.9203 79.9567 81.0257C79.8708 81.131 79.7467 81.1981 79.6115 81.2123C79.5942 81.2248 79.5731 81.2307 79.5518 81.229V81.229Z","fill":"#E8C981","key":7}),React.createElement("path",{"d":"M69.7516 7.55612C69.7214 7.55854 69.6911 7.55363 69.6633 7.54179C69.625 7.53161 69.5892 7.51387 69.558 7.48962C69.5267 7.46537 69.5006 7.4351 69.4812 7.4006C69.4619 7.36611 69.4496 7.32807 69.4452 7.28876C69.4408 7.24944 69.4443 7.20964 69.4555 7.1717C69.5884 6.74273 69.6919 6.35792 69.7659 6.01728C69.7837 5.94066 69.8311 5.87422 69.8978 5.83258C69.9308 5.81196 69.9676 5.79805 70.006 5.79164C70.0444 5.78523 70.0838 5.78645 70.1217 5.79523C70.1596 5.80401 70.1955 5.82018 70.2272 5.84281C70.2589 5.86544 70.2857 5.89409 70.3064 5.92712C70.327 5.96016 70.3409 5.99693 70.3473 6.03534C70.3537 6.07375 70.3525 6.11305 70.3437 6.15099C70.2554 6.49123 70.1515 6.89116 70.0178 7.33526C70.0043 7.39643 69.9708 7.45136 69.9226 7.49135C69.8744 7.53135 69.8142 7.55414 69.7516 7.55612V7.55612Z","fill":"#E8C981","key":8}),React.createElement("path",{"d":"M73.0523 77.5556C72.9768 77.5538 72.9047 77.5239 72.85 77.4718C72.7953 77.4198 72.7619 77.3492 72.7563 77.2739C72.7419 77.1115 72.7264 76.9635 72.7121 76.8155C72.7042 76.7363 72.728 76.6573 72.7784 76.5957C72.8288 76.5341 72.9016 76.4951 72.9807 76.4872C73.0599 76.4792 73.1389 76.5031 73.2005 76.5535C73.262 76.6038 73.3011 76.6766 73.309 76.7558C73.3233 76.9181 73.3388 77.0817 73.3532 77.2333C73.3576 77.2727 73.3536 77.3126 73.3414 77.3503C73.3292 77.3881 73.3091 77.4228 73.2824 77.4521C73.2558 77.4815 73.2231 77.5048 73.1868 77.5206C73.1504 77.5364 73.1111 77.5443 73.0714 77.5437C73.0712 77.5458 73.0705 77.5479 73.0693 77.5498C73.0682 77.5516 73.0666 77.5532 73.0648 77.5543C73.0629 77.5555 73.0609 77.5562 73.0587 77.5564C73.0566 77.5566 73.0544 77.5564 73.0523 77.5556V77.5556ZM72.7706 75.2874C72.6994 75.2872 72.6306 75.2618 72.5764 75.2157C72.5222 75.1695 72.4861 75.1057 72.4745 75.0355C72.3707 74.4577 72.2525 73.8811 72.1044 73.2889C72.0919 73.2512 72.0873 73.2112 72.0908 73.1716C72.0943 73.132 72.1059 73.0935 72.1249 73.0585C72.1438 73.0235 72.1698 72.9928 72.2011 72.9682C72.2323 72.9437 72.2683 72.9258 72.3068 72.9156C72.3453 72.9055 72.3854 72.9034 72.4248 72.9093C72.4641 72.9153 72.5017 72.9293 72.5355 72.9504C72.5692 72.9715 72.5983 72.9993 72.6208 73.0321C72.6434 73.0648 72.659 73.1019 72.6667 73.1409C72.8148 73.7378 72.9485 74.3347 73.0511 74.9173C73.0585 74.9554 73.0581 74.9945 73.05 75.0325C73.0419 75.0704 73.0262 75.1063 73.004 75.1381C72.9817 75.1698 72.9532 75.1968 72.9203 75.2173C72.8874 75.2378 72.8507 75.2515 72.8124 75.2575C72.8004 75.2898 72.7861 75.2898 72.7706 75.2898V75.2874ZM71.8824 71.7931C71.8195 71.7927 71.7583 71.7724 71.7077 71.7351C71.6571 71.6977 71.6196 71.6453 71.6006 71.5853C71.4228 71.0374 71.2162 70.4751 70.9942 69.914C70.9771 69.8776 70.9675 69.838 70.9662 69.7978C70.9648 69.7576 70.9717 69.7175 70.9864 69.68C71.001 69.6426 71.0232 69.6085 71.0515 69.5798C71.0798 69.5512 71.1136 69.5286 71.1509 69.5135C71.1882 69.4984 71.2282 69.4911 71.2684 69.4919C71.3087 69.4928 71.3483 69.5018 71.3849 69.5185C71.4215 69.5352 71.4543 69.5592 71.4814 69.589C71.5084 69.6189 71.5291 69.6539 71.5421 69.6919C71.7642 70.2697 71.9862 70.8464 72.1641 71.4099C72.176 71.4468 72.1804 71.4857 72.1771 71.5243C72.1739 71.5629 72.163 71.6005 72.1451 71.6349C72.1272 71.6693 72.1028 71.6999 72.073 71.7247C72.0433 71.7496 72.0089 71.7684 71.9719 71.7799C71.9439 71.7928 71.9131 71.7985 71.8824 71.7966V71.7931ZM70.5501 68.4504C70.4926 68.4528 70.4358 68.4369 70.3879 68.405C70.34 68.373 70.3036 68.3266 70.2839 68.2725C70.0451 67.7544 69.7801 67.2064 69.4995 66.674C69.4709 66.6043 69.4696 66.5263 69.4961 66.4558C69.5225 66.3852 69.5747 66.3273 69.6421 66.2936C69.7095 66.2599 69.7872 66.2529 69.8595 66.2741C69.9318 66.2953 69.9934 66.343 70.032 66.4077C70.3137 66.9557 70.5942 67.5037 70.8318 68.0361C70.8648 68.1088 70.8677 68.1916 70.84 68.2665C70.8123 68.3414 70.7561 68.4023 70.6838 68.436C70.6403 68.4481 70.5951 68.453 70.5501 68.4504V68.4504ZM68.8919 65.2521C68.8405 65.2523 68.7899 65.2387 68.7456 65.2126C68.7013 65.1866 68.6648 65.1491 68.64 65.1041C68.3582 64.6003 68.0431 64.0822 67.7219 63.5641C67.7004 63.5309 67.6857 63.4938 67.6789 63.4548C67.6721 63.4159 67.6732 63.3759 67.6823 63.3374C67.6913 63.2989 67.7081 63.2627 67.7316 63.2308C67.755 63.199 67.7847 63.1723 67.8188 63.1522C67.8529 63.1322 67.8907 63.1193 67.9299 63.1143C67.9691 63.1093 68.009 63.1122 68.047 63.1231C68.0851 63.1339 68.1205 63.1523 68.1512 63.1772C68.1819 63.2021 68.2073 63.233 68.2257 63.268C68.5516 63.8005 68.862 64.3198 69.1438 64.82C69.1811 64.8872 69.1911 64.9663 69.1718 65.0407C69.1524 65.1151 69.1052 65.1793 69.0399 65.2199C68.9924 65.2377 68.9425 65.2486 68.8919 65.2521V65.2521ZM67.0116 62.1721C66.9617 62.1733 66.9123 62.1616 66.8682 62.1382C66.8241 62.1147 66.7867 62.0804 66.7597 62.0384C66.4637 61.5799 66.1377 61.0762 65.7676 60.5282C65.7462 60.4951 65.7316 60.4581 65.7245 60.4194C65.7173 60.3806 65.7179 60.3409 65.7262 60.3023C65.7345 60.2638 65.7502 60.2273 65.7726 60.1949C65.795 60.1624 65.8235 60.1347 65.8566 60.1133C65.8897 60.0919 65.9266 60.0773 65.9654 60.0702C66.0041 60.063 66.0439 60.0636 66.0824 60.0719C66.121 60.0801 66.1575 60.0959 66.1899 60.1183C66.2223 60.1407 66.25 60.1692 66.2714 60.2023C66.6415 60.7502 66.9674 61.254 67.2635 61.7125C67.3049 61.7796 67.3187 61.8601 67.3023 61.9373C67.2858 62.0144 67.2403 62.0823 67.1752 62.1267C67.1263 62.1578 67.0695 62.1739 67.0116 62.1733V62.1721ZM65.0275 59.1517C64.9778 59.1513 64.929 59.1389 64.8852 59.1156C64.8414 59.0924 64.8037 59.0589 64.7756 59.018L64.4795 58.5882L63.7632 57.5222C63.7181 57.4574 63.7006 57.3774 63.7144 57.2997C63.7283 57.222 63.7725 57.153 63.8372 57.1079C63.902 57.0628 63.982 57.0452 64.0597 57.0591C64.1374 57.073 64.2064 57.1172 64.2515 57.1819L64.9678 58.248L65.2638 58.6778C65.3075 58.743 65.3242 58.8226 65.3104 58.8998C65.2966 58.9771 65.2534 59.046 65.1898 59.092C65.1437 59.1293 65.0867 59.1506 65.0275 59.1529V59.1517ZM63.0135 56.1457C62.9636 56.1469 62.9142 56.1352 62.8701 56.1118C62.826 56.0883 62.7886 56.054 62.7616 56.012C62.3915 55.4497 62.0811 54.9602 61.7839 54.4875C61.7444 54.4188 61.7334 54.3374 61.7534 54.2608C61.7733 54.1842 61.8225 54.1184 61.8905 54.0778C61.9584 54.0371 62.0395 54.0247 62.1165 54.0432C62.1935 54.0618 62.2601 54.1099 62.302 54.1771C62.5837 54.6546 62.9085 55.1393 63.2642 55.6873C63.3056 55.7544 63.3194 55.8349 63.303 55.9121C63.2865 55.9892 63.241 56.0571 63.1759 56.1015C63.1276 56.1317 63.0716 56.1474 63.0147 56.1469L63.0135 56.1457ZM61.1332 53.0656C61.0818 53.0658 61.0313 53.0522 60.987 53.0261C60.9427 53.0001 60.9062 52.9626 60.8813 52.9176C60.5554 52.3398 60.2844 51.8217 60.0373 51.3036C60.0163 51.2683 60.0028 51.2291 59.9976 51.1884C59.9925 51.1476 59.9958 51.1063 60.0073 51.0669C60.0188 51.0275 60.0384 50.9909 60.0647 50.9594C60.091 50.9279 60.1235 50.9022 60.1602 50.8838C60.197 50.8655 60.237 50.8549 60.278 50.8527C60.319 50.8506 60.36 50.8569 60.3985 50.8713C60.4369 50.8857 60.472 50.9079 60.5014 50.9365C60.5309 50.965 60.5541 50.9994 60.5697 51.0373C60.8085 51.5411 61.0879 52.0592 61.3983 52.6215C61.4172 52.6555 61.4292 52.6929 61.4334 52.7316C61.4376 52.7703 61.4341 52.8094 61.423 52.8467C61.4118 52.884 61.3933 52.9186 61.3686 52.9487C61.3438 52.9787 61.3134 53.0034 61.2789 53.0215C61.2382 53.0543 61.1867 53.0709 61.1344 53.068L61.1332 53.0656ZM59.5932 49.8089C59.5324 49.8088 59.473 49.7904 59.4228 49.7562C59.3725 49.7219 59.3337 49.6733 59.3115 49.6167C59.0973 49.0423 58.9241 48.4535 58.7934 47.8546C58.7756 47.778 58.7891 47.6975 58.8307 47.6307C58.8724 47.564 58.9388 47.5166 59.0154 47.4989C59.092 47.4811 59.1725 47.4946 59.2393 47.5362C59.306 47.5778 59.3534 47.6443 59.3711 47.7209C59.5042 48.2934 59.6724 48.8572 59.875 49.409C59.889 49.4458 59.8955 49.4852 59.8941 49.5246C59.8928 49.564 59.8835 49.6028 59.867 49.6386C59.8504 49.6744 59.8268 49.7066 59.7976 49.7331C59.7685 49.7597 59.7343 49.7802 59.6971 49.7934C59.6641 49.8051 59.6294 49.8108 59.5944 49.8101L59.5932 49.8089ZM58.8387 46.3026C58.7624 46.3033 58.6889 46.2743 58.6336 46.2217C58.5784 46.1691 58.5457 46.0971 58.5426 46.0209C58.5283 45.8132 58.5283 45.6066 58.5283 45.3846C58.5283 45.0145 58.5427 44.6003 58.5725 44.1908C58.5765 44.1116 58.6117 44.0373 58.6705 43.9841C58.7292 43.9309 58.8067 43.9033 58.8859 43.9073C58.965 43.9112 59.0394 43.9464 59.0925 44.0052C59.1457 44.064 59.1734 44.1415 59.1694 44.2206C59.1396 44.6349 59.1252 45.0205 59.1252 45.3906C59.1252 45.5983 59.1252 45.8048 59.1395 45.997C59.141 46.037 59.1344 46.0768 59.1202 46.1142C59.106 46.1515 59.0845 46.1857 59.0569 46.2146C59.0293 46.2435 58.9963 46.2666 58.9596 46.2826C58.923 46.2985 58.8835 46.307 58.8435 46.3074L58.8387 46.3026ZM59.0465 42.7045H59.0058C58.9676 42.7004 58.9305 42.6886 58.8969 42.6698C58.8634 42.6511 58.8339 42.6257 58.8104 42.5952C58.7868 42.5648 58.7697 42.5299 58.76 42.4927C58.7503 42.4554 58.7483 42.4166 58.7539 42.3786C58.828 41.8163 58.9319 41.2086 59.0357 40.5878C59.0415 40.5489 59.0549 40.5115 59.0754 40.4779C59.0959 40.4443 59.1229 40.4152 59.1548 40.3922C59.1868 40.3693 59.223 40.3529 59.2614 40.3443C59.2997 40.3356 59.3395 40.3347 59.3782 40.3416C59.4169 40.3486 59.4538 40.3633 59.4868 40.3848C59.5197 40.4063 59.548 40.4342 59.57 40.4668C59.5919 40.4995 59.6071 40.5362 59.6146 40.5748C59.622 40.6135 59.6217 40.6532 59.6135 40.6917C59.4941 41.3137 59.4058 41.9058 59.3318 42.4681C59.3242 42.5367 59.2902 42.5997 59.2369 42.6437C59.1836 42.6876 59.1153 42.709 59.0465 42.7033V42.7045ZM59.6828 39.1517H59.623C59.584 39.1445 59.5468 39.1293 59.514 39.107C59.4812 39.0846 59.4535 39.0556 59.4326 39.0219C59.4117 38.9881 59.398 38.9504 59.3926 38.911C59.3871 38.8717 59.39 38.8317 59.401 38.7935C59.5204 38.2312 59.6529 37.6391 59.8009 37.0314C59.8215 36.956 59.8699 36.8912 59.9363 36.85C60.0028 36.8088 60.0824 36.7943 60.1591 36.8094C60.2356 36.8281 60.3018 36.8761 60.3433 36.9431C60.3848 37.0101 60.3984 37.0907 60.3811 37.1675C60.2331 37.774 60.0994 38.3614 59.9812 38.9141C59.964 38.9807 59.9256 39.0398 59.8717 39.0824C59.8178 39.1251 59.7515 39.149 59.6828 39.1505V39.1517ZM60.5268 35.643C60.5013 35.6455 60.4755 35.6405 60.4528 35.6287C60.4152 35.6195 60.38 35.6027 60.3491 35.5795C60.3182 35.5563 60.2922 35.5272 60.2729 35.4937C60.2535 35.4603 60.241 35.4233 60.2362 35.385C60.2315 35.3466 60.2345 35.3077 60.2451 35.2706C60.3931 34.7083 60.5554 34.1161 60.7226 33.524C60.7441 33.4474 60.7952 33.3825 60.8646 33.3435C60.899 33.3242 60.9368 33.3119 60.9759 33.3072C61.0151 33.3025 61.0547 33.3056 61.0927 33.3163C61.1306 33.3269 61.1661 33.345 61.197 33.3693C61.228 33.3937 61.2539 33.4239 61.2731 33.4583C61.2924 33.4927 61.3048 33.5305 61.3095 33.5696C61.3141 33.6088 61.311 33.6484 61.3004 33.6864C61.138 34.2833 60.9745 34.8706 60.8228 35.4186C60.8034 35.4823 60.7643 35.5383 60.7111 35.5784C60.6579 35.6185 60.5934 35.6407 60.5268 35.6418V35.643ZM61.5033 32.1643C61.4731 32.1667 61.4428 32.1618 61.415 32.1499C61.3767 32.1397 61.3409 32.122 61.3097 32.0978C61.2784 32.0735 61.2524 32.0432 61.233 32.0087C61.2136 31.9742 61.2014 31.9362 61.197 31.8969C61.1925 31.8576 61.196 31.8178 61.2073 31.7798C61.3696 31.2176 61.5475 30.6397 61.7254 30.0476C61.7371 30.0107 61.7559 29.9764 61.7808 29.9468C61.8057 29.9172 61.8362 29.8927 61.8706 29.8749C61.905 29.857 61.9425 29.8461 61.9811 29.8428C62.0197 29.8394 62.0585 29.8437 62.0955 29.8554C62.1324 29.8671 62.1666 29.8859 62.1963 29.9108C62.2259 29.9358 62.2504 29.9663 62.2682 30.0006C62.2861 30.035 62.2969 30.0725 62.3003 30.1111C62.3036 30.1497 62.2994 30.1886 62.2877 30.2255C62.1098 30.8224 61.9295 31.3954 61.7695 31.9577C61.7566 32.0176 61.7229 32.0709 61.6744 32.1083C61.6259 32.1457 61.5657 32.1647 61.5045 32.1619L61.5033 32.1643ZM62.5694 28.7022C62.5392 28.7046 62.5089 28.6997 62.4811 28.6878C62.444 28.6763 62.4097 28.6576 62.38 28.6327C62.3502 28.6078 62.3257 28.5773 62.3079 28.5428C62.29 28.5084 62.2791 28.4708 62.2759 28.4322C62.2726 28.3936 62.277 28.3547 62.2888 28.3178C62.4667 27.74 62.6589 27.1633 62.8511 26.5999C62.8747 26.5253 62.927 26.4632 62.9964 26.4271C63.0658 26.3911 63.1467 26.3841 63.2212 26.4077C63.2958 26.4312 63.3579 26.4835 63.394 26.5529C63.43 26.6223 63.437 26.7032 63.4134 26.7777C63.2212 27.3555 63.0433 27.9178 62.8655 28.4956C62.8408 28.554 62.7999 28.604 62.7476 28.6398C62.6954 28.6755 62.6339 28.6955 62.5706 28.6974L62.5694 28.7022ZM63.6797 25.2676C63.6495 25.27 63.6192 25.2651 63.5913 25.2532C63.5195 25.2258 63.4603 25.1729 63.4249 25.1047C63.3895 25.0365 63.3803 24.9577 63.3991 24.8832C63.5913 24.3053 63.7835 23.7431 63.9769 23.1652C64.0026 23.0927 64.056 23.0333 64.1253 23C64.1946 22.9667 64.2743 22.9621 64.347 22.9874C64.4188 23.0148 64.478 23.0677 64.5134 23.1359C64.5488 23.2041 64.558 23.2829 64.5392 23.3575C64.347 23.9197 64.1548 24.4975 63.9614 25.0598C63.9454 25.121 63.9087 25.1746 63.8576 25.2117C63.8064 25.2487 63.7439 25.2668 63.6809 25.2628L63.6797 25.2676ZM64.8496 21.8473C64.8025 21.8493 64.7556 21.8398 64.7131 21.8194C64.6706 21.799 64.6338 21.7684 64.6059 21.7304C64.5781 21.6924 64.56 21.6481 64.5534 21.6014C64.5467 21.5547 64.5517 21.5071 64.5679 21.4629C64.7601 20.885 64.9678 20.3228 65.1648 19.7605C65.1903 19.6878 65.2436 19.6282 65.313 19.5949C65.3824 19.5615 65.4622 19.5571 65.5349 19.5826C65.6075 19.6081 65.6671 19.6614 65.7004 19.7308C65.7338 19.8002 65.7382 19.88 65.7127 19.9527C65.5205 20.515 65.3128 21.0784 65.1158 21.6551C65.0982 21.7102 65.0635 21.7582 65.0167 21.7921C64.9699 21.8261 64.9134 21.8441 64.8556 21.8437L64.8496 21.8473ZM66.0339 18.4425C65.9868 18.4446 65.9399 18.435 65.8974 18.4146C65.8549 18.3942 65.8181 18.3637 65.7902 18.3256C65.7624 18.2876 65.7443 18.2433 65.7376 18.1966C65.731 18.15 65.736 18.1024 65.7521 18.0581C65.9598 17.4803 66.152 16.918 66.349 16.3557C66.3766 16.2811 66.4326 16.2206 66.5048 16.1873C66.577 16.1541 66.6595 16.1509 66.734 16.1784C66.8086 16.206 66.8692 16.262 66.9024 16.3342C66.9357 16.4064 66.9389 16.4889 66.9113 16.5634C66.7191 17.1257 66.5114 17.6892 66.3144 18.2658C66.2897 18.3186 66.2501 18.363 66.2005 18.3936C66.1508 18.4241 66.0933 18.4395 66.035 18.4377L66.0339 18.4425ZM67.2277 15.0377C67.1925 15.0393 67.1573 15.0345 67.1238 15.0234C67.0497 14.9955 66.9895 14.9395 66.9562 14.8676C66.9229 14.7957 66.9192 14.7136 66.9459 14.639C67.1537 14.0612 67.3459 13.4846 67.5428 12.9366C67.5555 12.9006 67.575 12.8675 67.6005 12.8391C67.6259 12.8107 67.6567 12.7875 67.691 12.771C67.7254 12.7545 67.7627 12.7449 67.8008 12.7428C67.8389 12.7407 67.8769 12.7461 67.9129 12.7587C67.9489 12.7713 67.9821 12.7909 68.0105 12.8164C68.0389 12.8418 68.062 12.8726 68.0785 12.9069C68.095 12.9413 68.1046 12.9786 68.1067 13.0166C68.1088 13.0547 68.1034 13.0928 68.0908 13.1288C67.8986 13.6768 67.7064 14.2546 67.4939 14.8312C67.4811 14.89 67.448 14.9424 67.4004 14.9793C67.3528 15.0162 67.2938 15.0352 67.2336 15.033L67.2277 15.0377ZM68.4215 11.6174C68.3913 11.6199 68.361 11.615 68.3332 11.6031C68.2607 11.5774 68.2012 11.5241 68.1679 11.4547C68.1346 11.3854 68.13 11.3057 68.1553 11.233C68.363 10.6361 68.5552 10.0631 68.7331 9.53064C68.7567 9.45608 68.8089 9.39394 68.8783 9.3579C68.9477 9.32185 69.0286 9.31485 69.1032 9.33844C69.1777 9.36203 69.2399 9.41427 69.2759 9.48367C69.312 9.55308 69.319 9.63396 69.2954 9.70852C69.1175 10.2565 68.9253 10.8188 68.7176 11.4264C68.691 11.4791 68.6512 11.524 68.602 11.5567C68.5528 11.5893 68.4959 11.6086 68.437 11.6127L68.4215 11.6174Z","fill":"#E8C981","key":9}),React.createElement("path",{"d":"M73.0824 79.9995C73.0424 79.999 73.0029 79.9905 72.9663 79.9746C72.9296 79.9587 72.8965 79.9355 72.869 79.9066C72.8414 79.8777 72.8198 79.8436 72.8056 79.8062C72.7914 79.7688 72.7849 79.729 72.7863 79.6891C72.8007 79.2891 72.8162 78.8892 72.8006 78.4952C72.8006 78.4161 72.8321 78.3402 72.888 78.2842C72.944 78.2282 73.0199 78.1968 73.0991 78.1968C73.1783 78.1968 73.2541 78.2282 73.3101 78.2842C73.3661 78.3402 73.3976 78.4161 73.3976 78.4952C73.3976 78.9095 73.3976 79.3094 73.3832 79.7237C73.3783 79.7996 73.3443 79.8706 73.2882 79.922C73.2322 79.9734 73.1584 80.0012 73.0824 79.9995V79.9995Z","fill":"#E8C981","key":10}),React.createElement("path",{"d":"M69.3061 56.7116C69.2358 56.7109 69.1681 56.6853 69.1149 56.6393C69.0618 56.5932 69.0267 56.5298 69.0161 56.4603C69.0055 56.3907 69.0199 56.3197 69.0569 56.2599C69.0938 56.2001 69.1509 56.1553 69.2178 56.1337L69.6177 56C69.884 55.9117 70.1359 55.8377 70.3734 55.7613C70.4103 55.7496 70.4492 55.7453 70.4878 55.7487C70.5264 55.752 70.5639 55.7629 70.5983 55.7808C70.6327 55.7986 70.6631 55.823 70.6881 55.8527C70.713 55.8823 70.7318 55.9166 70.7435 55.9535C70.7552 55.9904 70.7595 56.0293 70.7562 56.0678C70.7528 56.1064 70.7419 56.144 70.7241 56.1783C70.7062 56.2127 70.6818 56.2432 70.6521 56.2681C70.6225 56.2931 70.5882 56.3119 70.5513 56.3236C70.3125 56.3976 70.063 56.4859 69.7968 56.5623L69.3969 56.696C69.3684 56.7087 69.3372 56.714 69.3061 56.7116V56.7116Z","fill":"#E8C981","key":11}),React.createElement("path",{"d":"M49.3339 76.3274C49.3083 76.3314 49.2822 76.3263 49.2599 76.3131C49.2217 76.3029 49.1859 76.2851 49.1546 76.2609C49.1234 76.2366 49.0973 76.2064 49.0779 76.1719C49.0586 76.1374 49.0463 76.0994 49.0419 76.06C49.0375 76.0207 49.041 75.9809 49.0522 75.943C49.2002 75.395 49.3781 74.8029 49.5847 74.1964C49.5963 74.1595 49.6152 74.1252 49.6401 74.0956C49.665 74.066 49.6955 74.0415 49.7299 74.0237C49.7642 74.0058 49.8018 73.9949 49.8404 73.9916C49.879 73.9883 49.9178 73.9926 49.9547 74.0042C49.9917 74.0159 50.0259 74.0347 50.0556 74.0596C50.0852 74.0846 50.1096 74.1151 50.1275 74.1495C50.1453 74.1838 50.1562 74.2214 50.1596 74.26C50.1629 74.2985 50.1586 74.3374 50.1469 74.3743C49.9392 74.9712 49.7625 75.5443 49.6145 76.0922C49.603 76.1582 49.5685 76.218 49.5172 76.261C49.4658 76.304 49.4009 76.3275 49.3339 76.3274V76.3274ZM50.4884 72.8928C50.4531 72.8954 50.4177 72.8904 50.3845 72.8784C50.3127 72.8478 50.2556 72.7905 50.2253 72.7185C50.195 72.6465 50.1939 72.5656 50.2222 72.4928C50.4299 71.9449 50.6662 71.3826 50.9181 70.8048C50.9312 70.7667 50.9519 70.7317 50.9789 70.7019C51.0059 70.6721 51.0387 70.6481 51.0754 70.6314C51.112 70.6147 51.1516 70.6057 51.1919 70.6048C51.2321 70.6039 51.2721 70.6113 51.3094 70.6264C51.3467 70.6415 51.3805 70.6641 51.4088 70.6927C51.4371 70.7213 51.4593 70.7554 51.4739 70.7929C51.4886 70.8304 51.4955 70.8705 51.4941 70.9107C51.4928 70.9509 51.4832 70.9904 51.4661 71.0268C51.2273 71.5891 50.9886 72.1526 50.7856 72.6851C50.7627 72.7453 50.7223 72.7973 50.6695 72.8344C50.6167 72.8714 50.554 72.8917 50.4896 72.8928H50.4884ZM51.9102 69.5763C51.8687 69.5754 51.8279 69.5652 51.7908 69.5465C51.7207 69.5103 51.6667 69.4492 51.6393 69.3752C51.6119 69.3012 51.6132 69.2197 51.6428 69.1466C51.7467 68.9389 51.835 68.7168 51.9389 68.4947C52.1012 68.1545 52.2648 67.8286 52.4426 67.5027C52.48 67.434 52.5431 67.3829 52.6181 67.3608C52.6931 67.3386 52.7739 67.3471 52.8426 67.3845C52.9113 67.4219 52.9623 67.485 52.9845 67.56C53.0067 67.635 52.9981 67.7157 52.9607 67.7844C52.7829 68.0948 52.6205 68.4207 52.4725 68.7466C52.3686 68.9687 52.2648 69.1764 52.1764 69.3985C52.1509 69.4484 52.1131 69.4909 52.0665 69.5221C52.0199 69.5532 51.9661 69.5719 51.9102 69.5763V69.5763ZM53.6568 66.4223C53.6271 66.4237 53.5974 66.4192 53.5695 66.4089C53.5416 66.3987 53.5161 66.3829 53.4944 66.3626C53.4309 66.3165 53.3876 66.2476 53.3738 66.1704C53.36 66.0931 53.3767 66.0135 53.4204 65.9483C53.7606 65.4601 54.1462 64.9718 54.5461 64.4978C54.5971 64.4389 54.6694 64.4027 54.7471 64.3971C54.8248 64.3915 54.9015 64.417 54.9604 64.468C55.0193 64.519 55.0555 64.5913 55.0611 64.669C55.0667 64.7467 55.0412 64.8233 54.9903 64.8822C54.6006 65.3315 54.2348 65.801 53.8943 66.2886C53.872 66.3316 53.8377 66.3673 53.7955 66.3912C53.7534 66.4152 53.7052 66.4264 53.6568 66.4235V66.4223ZM56.0253 63.6836C55.9869 63.6853 55.9486 63.6787 55.9129 63.6643C55.8773 63.6499 55.8452 63.628 55.8188 63.6001C55.7917 63.5724 55.7705 63.5395 55.7565 63.5033C55.7425 63.4672 55.736 63.4286 55.7373 63.3899C55.7386 63.3512 55.7478 63.3131 55.7643 63.278C55.7808 63.243 55.8041 63.2116 55.8331 63.1858C56.2629 62.7716 56.7356 62.3717 57.2096 61.9717C57.2394 61.9454 57.2743 61.9253 57.3121 61.9128C57.3499 61.9003 57.3898 61.8956 57.4295 61.8989C57.4692 61.9022 57.5078 61.9136 57.543 61.9322C57.5782 61.9509 57.6092 61.9765 57.6342 62.0075C57.6592 62.0385 57.6777 62.0742 57.6886 62.1125C57.6994 62.1509 57.7023 62.191 57.6972 62.2305C57.6921 62.27 57.6791 62.308 57.6589 62.3424C57.6387 62.3767 57.6117 62.4065 57.5797 62.4302C57.1021 62.8002 56.6616 63.2002 56.2318 63.6001C56.177 63.6538 56.1033 63.6838 56.0265 63.6836H56.0253ZM58.8379 61.4154C58.7883 61.415 58.7395 61.4026 58.6957 61.3793C58.6518 61.3561 58.6142 61.3226 58.586 61.2817C58.5424 61.2165 58.5257 61.1369 58.5395 61.0596C58.5533 60.9824 58.5965 60.9135 58.6601 60.8675C59.1483 60.5272 59.6665 60.2013 60.2001 59.8897C60.2666 59.8546 60.3441 59.8465 60.4165 59.8671C60.4889 59.8877 60.5505 59.9354 60.5886 60.0003C60.6268 60.0651 60.6384 60.1422 60.6212 60.2154C60.604 60.2887 60.5592 60.3524 60.4961 60.3935C59.978 60.7039 59.4599 61.0155 58.986 61.3557C58.9464 61.394 58.8942 61.4165 58.8391 61.419L58.8379 61.4154ZM61.9419 59.5793C61.8871 59.578 61.8337 59.5623 61.787 59.5338C61.7402 59.5053 61.7018 59.465 61.6756 59.417C61.658 59.382 61.6475 59.3438 61.6447 59.3047C61.6419 59.2656 61.6469 59.2263 61.6593 59.1892C61.6717 59.152 61.6914 59.1177 61.7171 59.0881C61.7429 59.0586 61.7742 59.0344 61.8094 59.017C62.3418 58.7508 62.8897 58.4846 63.4532 58.2327C63.5238 58.201 63.6041 58.1987 63.6764 58.2262C63.7488 58.2538 63.8072 58.3089 63.8388 58.3795C63.8705 58.4501 63.8728 58.5304 63.8453 58.6027C63.8177 58.6751 63.7626 58.7335 63.692 58.7651C63.1297 59.017 62.5817 59.2689 62.0636 59.5352C62.0517 59.5686 61.9932 59.5829 61.9478 59.5829L61.9419 59.5793ZM65.2583 58.1133C65.1975 58.1132 65.1381 58.0948 65.0878 58.0606C65.0376 58.0263 64.9988 57.9777 64.9765 57.9211C64.9486 57.8485 64.95 57.7678 64.9803 57.6962C65.0105 57.6245 65.0674 57.5673 65.1389 57.5367C65.6869 57.329 66.2492 57.1224 66.8413 56.9004C66.8773 56.8878 66.9154 56.8824 66.9535 56.8845C66.9915 56.8866 67.0288 56.8962 67.0632 56.9127C67.0975 56.9292 67.1283 56.9523 67.1537 56.9807C67.1792 57.0091 67.1988 57.0423 67.2114 57.0783C67.224 57.1142 67.2294 57.1524 67.2273 57.1904C67.2252 57.2285 67.2156 57.2658 67.1991 57.3001C67.1826 57.3345 67.1595 57.3653 67.131 57.3907C67.1026 57.4161 67.0695 57.4357 67.0335 57.4483C66.4414 57.6553 65.8787 57.8626 65.3455 58.0703C65.3364 58.0838 65.3244 58.0951 65.3103 58.1031C65.2962 58.1112 65.2805 58.1159 65.2642 58.1169L65.2583 58.1133Z","fill":"#E8C981","key":12}),React.createElement("path",{"d":"M48.83 79.9982C48.7647 79.999 48.7012 79.9774 48.6499 79.937C48.5986 79.8966 48.5628 79.8398 48.5483 79.7761C48.4813 79.3446 48.4813 78.9053 48.5483 78.4737C48.5562 78.3945 48.5953 78.3218 48.6568 78.2714C48.7184 78.221 48.7974 78.1972 48.8766 78.2051C48.9557 78.213 49.0285 78.252 49.0789 78.3136C49.1293 78.3752 49.1531 78.4543 49.1452 78.5334C49.086 78.9008 49.0812 79.2749 49.1309 79.6437C49.1482 79.7206 49.1346 79.8011 49.093 79.8681C49.0515 79.9351 48.9854 79.9831 48.9088 80.0018C48.8754 79.9839 48.8455 79.9982 48.83 79.9982Z","fill":"#E8C981","key":13}),React.createElement("path",{"d":"M39.3858 52.8173C40.0319 52.8173 40.5557 51.7301 40.5557 50.389C40.5557 49.048 40.0319 47.9608 39.3858 47.9608C38.7396 47.9608 38.2158 49.048 38.2158 50.389C38.2158 51.7301 38.7396 52.8173 39.3858 52.8173Z","fill":"#E8C981","key":14})]),React.createElement("defs",{"key":1},React.createElement("clipPath",{"id":"clip0_225_21"},React.createElement("rect",{"width":"80.073","height":"86.813","fill":"white"})))]);
}

Lip.defaultProps = {"width":"81","height":"87","viewBox":"0 0 81 87","fill":"none"};

module.exports = Lip;

Lip.default = Lip;


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

/***/ "./src/svg/mam.svg":
/*!*************************!*\
  !*** ./src/svg/mam.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Mam (props) {
    return React.createElement("svg",props,[React.createElement("g",{"clipPath":"url(#clip0_225_8)","key":0},[React.createElement("path",{"d":"M16.6479 49.7389C12.9145 49.2935 8.97637 48.2777 6.11993 45.6897C4.83914 44.4296 3.83799 42.9139 3.18161 41.2414C2.52522 39.5688 2.22831 37.7768 2.31018 35.9819L2.35993 34.3623C2.36803 33.9122 2.4629 33.387 2.50686 32.9034C3.70196 26.9013 8.32965 23.0834 11.6836 18.2845C11.9505 17.9245 12.1988 17.5511 12.4275 17.1658C14.6846 13.8026 14.9287 8.97245 13.7556 5.18237C14.0943 7.50706 13.9111 9.878 13.2193 12.1231C12.5275 14.3681 11.3445 16.431 9.75613 18.1619C5.83879 22.5721 1.51075 26.5068 0.269372 32.5251C0.203428 33.1116 0.0958346 33.6519 0.0715393 34.2824L0.000966071 35.9021C-0.127419 39.65 1.15627 43.3095 3.59784 46.1559C6.13392 48.6865 9.44198 50.2984 12.9978 50.7362C14.771 54.4709 16.1023 58.3998 16.9649 62.4431C17.1683 63.4181 17.3228 64.4027 17.4277 65.3932C17.5368 66.3762 17.587 67.3648 17.5781 68.3538C17.607 69.3337 17.489 70.2847 17.4312 71.2172C17.1928 73.1839 16.9834 75.16 16.7451 77.1302C16.7166 78.6609 16.454 80.1782 15.9665 81.6295C16.8852 80.4359 17.5338 79.0571 17.8673 77.5883C18.5082 75.609 19.0336 73.5941 19.4407 71.5538C19.5179 71.0448 19.5973 70.5284 19.6791 70.0047C19.7728 69.477 19.8173 68.9418 19.8121 68.4058C19.8517 67.3172 19.8231 66.2272 19.7265 65.1422C19.5837 64.0697 19.3868 63.0051 19.1365 61.9525C18.9229 60.9317 18.613 59.9334 18.2109 58.9711C17.1384 55.9844 15.531 53.2178 13.4675 50.8067C18.1203 51.4393 22.855 51.0549 27.3448 49.6799C23.791 50.1229 20.1972 50.1427 16.6387 49.7389C15.0699 49.5503 19.8121 50.0964 16.6479 49.7389Z","fill":"#E8C981","key":0}),React.createElement("path",{"d":"M8.42424 33.2134C3.51773 33.2134 3.51195 40.8306 8.42424 40.8306C13.3365 40.8306 13.3307 33.2134 8.42424 33.2134ZM8.42424 38.5167C8.03798 38.5015 7.67261 38.3374 7.4047 38.0587C7.13679 37.7801 6.98716 37.4085 6.98716 37.022C6.98716 36.6354 7.13679 36.2639 7.4047 35.9852C7.67261 35.7066 8.03798 35.5424 8.42424 35.5272C8.81049 35.5424 9.17587 35.7066 9.44377 35.9852C9.71168 36.2639 9.86131 36.6354 9.86131 37.022C9.86131 37.4085 9.71168 37.7801 9.44377 38.0587C9.17587 38.3374 8.81049 38.5015 8.42424 38.5167V38.5167Z","fill":"#E8C981","key":1}),React.createElement("path",{"d":"M73.4581 32.5309C72.2156 26.5149 67.8875 22.5813 63.9713 18.1677C62.384 16.4363 61.2015 14.3737 60.5096 12.129C59.8177 9.88434 59.6336 7.5139 59.9707 5.18933C59.3292 7.16563 59.1158 9.25585 59.3446 11.321C59.5734 13.3862 60.2392 15.379 61.2977 17.1669C61.5264 17.5523 61.7747 17.9257 62.0416 18.2857C65.3967 23.0858 70.0244 26.9024 71.2183 32.9046C71.2623 33.3881 71.3571 33.9134 71.3652 34.3634L71.415 35.9831C71.5185 38.9451 70.6417 41.8584 68.9207 44.2713C67.0876 46.476 64.6119 48.0534 61.8391 48.7833C56.7991 50.1389 51.5345 50.4456 46.3711 49.6845C50.8614 51.0566 55.5955 51.441 60.2484 50.8114C58.1852 53.2227 56.5779 55.9892 55.505 58.9758C55.1029 59.9381 54.793 60.9364 54.5795 61.9572C54.3292 63.0098 54.1323 64.0743 53.9894 65.1468C53.8928 66.2318 53.8642 67.3219 53.9038 68.4105C53.898 68.9464 53.9426 69.4817 54.0369 70.0094C54.114 70.5323 54.1934 71.0487 54.2752 71.5585C54.6829 73.5986 55.2082 75.6135 55.8486 77.593C56.1815 79.062 56.8301 80.441 57.7494 81.6341C57.2611 80.1831 56.9985 78.6656 56.9708 77.1348C56.7325 75.1681 56.5231 73.192 56.2848 71.2218C56.2281 70.2893 56.1089 69.3383 56.1378 68.3584C56.1289 67.3695 56.1791 66.3808 56.2882 65.3979C56.393 64.4074 56.5475 63.4227 56.751 62.4477C57.613 58.4043 58.9444 54.4753 60.7181 50.7408C64.2739 50.3031 67.582 48.6912 70.1181 46.1606C72.5597 43.3142 73.8434 39.6547 73.7149 35.9068L73.6444 34.2871C73.6212 33.6566 73.5136 33.1163 73.4477 32.5297C73.2233 31.3878 73.524 33.1093 73.4581 32.5309Z","fill":"#E8C981","key":2}),React.createElement("path",{"d":"M65.0926 40.8306C69.9991 40.8306 70.0049 33.2134 65.0926 33.2134C60.1803 33.2134 60.185 40.8306 65.0926 40.8306ZM65.0926 35.5272C65.4789 35.5424 65.8443 35.7066 66.1122 35.9852C66.3801 36.2639 66.5297 36.6354 66.5297 37.022C66.5297 37.4085 66.3801 37.7801 66.1122 38.0587C65.8443 38.3374 65.4789 38.5015 65.0926 38.5167C64.7064 38.5015 64.341 38.3374 64.0731 38.0587C63.8052 37.7801 63.6556 37.4085 63.6556 37.022C63.6556 36.6354 63.8052 36.2639 64.0731 35.9852C64.341 35.7066 64.7064 35.5424 65.0926 35.5272V35.5272Z","fill":"#E8C981","key":3})]),React.createElement("defs",{"key":1},React.createElement("clipPath",{"id":"clip0_225_8"},React.createElement("rect",{"width":"73.726","height":"86.813","fill":"white"})))]);
}

Mam.defaultProps = {"width":"74","height":"87","viewBox":"0 0 74 87","fill":"none"};

module.exports = Mam;

Mam.default = Mam;


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

/***/ "./src/svg/rin.svg":
/*!*************************!*\
  !*** ./src/svg/rin.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

function Rin (props) {
    return React.createElement("svg",props,[React.createElement("g",{"clipPath":"url(#clip0_225_16)","key":0},[React.createElement("path",{"d":"M5.40823 77.7326C5.26167 76.1114 5.46607 74.4777 6.00752 72.9425C6.22846 72.1301 6.49493 71.3307 6.80564 70.5482L7.30412 69.351L7.50435 68.7517V68.1524C7.50454 68.1393 7.50209 68.1263 7.49717 68.1141C7.49224 68.102 7.48492 68.091 7.47565 68.0817C7.46638 68.0724 7.45535 68.0651 7.4432 68.0602C7.43105 68.0552 7.41804 68.0528 7.40493 68.053C7.50435 68.053 7.50435 68.1524 7.40493 68.2532V68.3526C7.30552 68.4521 7.30552 68.5529 7.2047 68.6523L6.80564 69.1508C5.9783 70.1978 5.2736 71.3361 4.70533 72.5435C3.86946 74.2449 3.52377 76.1455 3.70698 78.0323C3.78545 78.9978 4.02197 79.9439 4.40708 80.8327C4.78677 81.6995 5.29103 82.5061 5.90391 83.2271C7.07168 84.6246 8.58581 85.6912 10.295 86.3201C9.05948 85.1462 7.95524 83.8415 7.00167 82.429C6.1041 81.0128 5.55779 79.4026 5.40823 77.7326Z","fill":"#E8C981","key":0}),React.createElement("path",{"d":"M47.812 73.1428C47.4713 71.1127 46.8674 69.1358 46.0155 67.2619C44.4193 63.4701 42.4226 59.9808 40.5267 56.4803L37.2334 50.1933C36.5333 48.6965 35.8332 47.2991 35.1331 45.8023C33.3902 42.2615 32.02 38.5492 31.0445 34.7252C30.1317 30.9045 29.7622 26.9742 29.9467 23.0503C30.5717 15.0853 32.5649 7.28777 35.8388 0C31.7975 7.04888 29.2817 14.8679 28.4541 22.9508C28.0694 27.0252 28.3389 31.135 29.2522 35.1243C30.2555 39.0706 31.6252 42.9145 33.3437 46.606C34.5408 49.4064 35.9382 52.0948 37.3357 54.7888L38.8325 57.4828C40.8278 60.9749 42.8245 64.3676 44.5201 67.9606C45.3757 69.7152 46.0445 71.5549 46.5154 73.4494C46.9642 75.3187 46.9642 77.2677 46.5154 79.1371C46.0584 81.0111 44.9652 82.6685 43.4224 83.8263C41.8127 85.0173 40.0716 86.0194 38.2332 86.813C40.1815 86.2721 42.0335 85.4303 43.722 84.3178C45.4809 83.1637 46.7857 81.4359 47.4144 79.4283C48.0911 77.4033 48.2282 75.2369 47.812 73.1428V73.1428Z","fill":"#E8C981","key":1}),React.createElement("path",{"d":"M39.1308 81.0246C38.8167 80.849 38.4811 80.7149 38.1325 80.6255C37.1458 80.4569 36.1355 80.4846 35.1595 80.7071C34.1835 80.9296 33.261 81.3425 32.4448 81.9221V81.9221L32.3454 82.0215C32.1452 82.1209 32.0458 82.3212 31.9464 82.4206C31.6725 82.7753 31.3724 83.109 31.0488 83.4189C30.5964 83.8734 30.0953 84.2767 29.5548 84.6217C28.5315 85.3279 27.3046 85.6786 26.0627 85.6201C24.7801 85.4748 23.5495 85.0307 22.4697 84.3235C21.4722 83.7132 20.5345 83.0099 19.6693 82.2232C18.7162 81.3862 17.5538 80.8236 16.3061 80.5952C15.0583 80.3669 13.772 80.4814 12.5843 80.9266C11.8712 81.2673 11.255 81.7815 10.792 82.422C11.6895 82.8011 12.6299 83.0691 13.5924 83.2201C16.187 83.6192 19.4733 83.4203 19.7785 82.7216C20.4072 83.5499 21.1458 84.2885 21.9741 84.9172C23.0855 85.8377 24.4343 86.4255 25.8652 86.6128H26.963C27.3185 86.4981 27.6876 86.4307 28.0608 86.4126C28.7556 86.168 29.3986 85.7956 29.9567 85.3148C30.5248 84.8811 31.0008 84.3384 31.3569 83.7186C31.5605 83.4418 31.728 83.1402 31.8553 82.8211C32.3538 83.5212 35.5477 83.7186 38.0415 83.3195C38.97 83.1701 39.8754 82.9018 40.7355 82.5214C40.4157 81.8327 39.8401 81.2957 39.1308 81.0246Z","fill":"#E8C981","key":2})]),React.createElement("defs",{"key":1},React.createElement("clipPath",{"id":"clip0_225_16"},React.createElement("rect",{"width":"51.702","height":"86.813","fill":"white"})))]);
}

Rin.defaultProps = {"width":"52","height":"87","viewBox":"0 0 52 87","fill":"none"};

module.exports = Rin;

Rin.default = Rin;


/***/ }),

/***/ "./public/page-data/sq/d/2376130184.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2376130184.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"aboutImage":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAAaABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAcEBQYJ/8QAFgEBAQEAAAAAAAAAAAAAAAAABAYF/9oADAMBAAIQAxAAAAHjk45kjEscaL4afaJlj6eonkWUo/O//8QAHRAAAgMAAwEBAAAAAAAAAAAAAwQBBQYAAhUSE//aAAgBAQABBQKnU6OvXeZeoTLrSMdNlA+dp7UJ6702h8tNf+ufnszJPgg+aYAR7TLqKMWR5mSf/8QAJREAAgECBQMFAAAAAAAAAAAAAQIDBBEABRITISIxYSNRZKGx/9oACAEDAQE/AXqaHLqeVatZDWNHDPTpC3OxvRxy73JjCvuCwcM+tWMZUrqKZ7lekelOvgL27fLH4MVFRJWs807apCgVTwFSGFSREFAHBIU3v3F7dRwAff6HjH//xAAmEQACAQMCBAcAAAAAAAAAAAABAgMEERIABRQhIpEGEzEyQVHw/9oACAECAQE/AaLZd03h1nphHHt6zyU81VUY4cQIJZ41iFxMzIIwGMYVMJEEtw2AfwZvQdh51K/P3ZXv6fPC/u+qWNdvkgoaa6U8UqqwB65KiZjlUsxv1dTKEtySy5cgdS1YhlkiCORG7KDxEovY/QsO2v/EACYQAAMAAQMDAwUBAAAAAAAAAAECAwQREhMABSEUIjEyM1FSgZH/2gAIAQEABj8CwsR+NFzNsmpfkljTZjtW2QyLRhGZ8kwG9vCqNT1DFQp3DFytwwcn0uRgZmNkq32YRpQ3tCyhuCr8iMEdyPztS+MjBmF53wzyTuDtdSWrqfgMfj3FvA6n33uHcM/G4BC9VxMcIy61VcRFpa0dzK5mymI49zbhUgM3WNiLU5GcLQyGza1Tkx8eQzEMZrNSyUtkFb2sbO9BxQVVjP3bU9PUftXGnV9dfI3kan8+dT5+erdoxcH0Ms68ch0a6WASTO8kxU41bDx9zLtmXYsiISfAJ87m0CaM3gaEe1xrqdrDyP8AOir0CHcToy+fP8677CcZThPOsJxSarKY9n0TACr/AADp/UYuPfR87TmjOmnH2bMrPTep+3VVon60UONGAPRJJPx1/8QAHBABAQEBAAMBAQAAAAAAAAAAAREhADFBUWGR/9oACAEBAAE/IZ2StgUG5bkROaCOGgVYMlBIDygzT1czydTOCOHcGcBAYwQB4MFRpatUCvLH3so57jlKxVPPR/gaQ9n+98QiEDucDaKqLaAfTO+3C2aliP6Stx373q4CowDeuG1+9uxHTmWCwr1KB6AiVVVSqr5X33//2gAMAwEAAgADAAAAEIcT/wD/xAAdEQEBAAIBBQAAAAAAAAAAAAABEQAhMVFhgZHw/9oACAEDAQE/EHQNVCkjb6WAfwUqyFbNuMGaug6AEH9CDAJsUF0PRwQDBZ9PHrvn/8QAGREBAQEBAQEAAAAAAAAAAAAAAREhADFh/9oACAECAQE/EHFwREpRDAVleMwRkgGwiSkYVXwVabWZBx70AJIWrqwOiMClVBdYAL83/8QAGBABAQEBAQAAAAAAAAAAAAAAAREAITH/2gAIAQEAAT8QTlKNxvvhm4iyPV1ci3Tp9vNbJNB0XL8JiAEsaUWemmUA6Svb5CyDKTmowAO1bMS66CEBRMMABrPk3FZK2KyoIV1Gxyd0FptrHBMFWNAqAbA6saY1H3zv1DSqiQJ0UOh2XhZcxYCc8wAqFUqqqtd//9k="},"backgroundColor":"transparent","images":{"fallback":{"src":"/static/3fca7fe18e3cddbb585c58395aff090e/5108e/team_01.jpg","srcSet":"/static/3fca7fe18e3cddbb585c58395aff090e/85953/team_01.jpg 576w,\\n/static/3fca7fe18e3cddbb585c58395aff090e/4913c/team_01.jpg 768w,\\n/static/3fca7fe18e3cddbb585c58395aff090e/5108e/team_01.jpg 960w","sizes":"100vw"},"sources":[{"srcSet":"/static/3fca7fe18e3cddbb585c58395aff090e/af964/team_01.avif 576w,\\n/static/3fca7fe18e3cddbb585c58395aff090e/1d726/team_01.avif 768w,\\n/static/3fca7fe18e3cddbb585c58395aff090e/c878d/team_01.avif 960w","type":"image/avif","sizes":"100vw"},{"srcSet":"/static/3fca7fe18e3cddbb585c58395aff090e/8d05a/team_01.webp 576w,\\n/static/3fca7fe18e3cddbb585c58395aff090e/62399/team_01.webp 768w,\\n/static/3fca7fe18e3cddbb585c58395aff090e/093ab/team_01.webp 960w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":1.2791666666666666}}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/2415619322.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2415619322.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"servicesMain":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAAbABQDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAkGCAIDBQf/xAAWAQEBAQAAAAAAAAAAAAAAAAAFBgT/2gAMAwEAAhADEAAAAVT78We0kosw7wyfbu4aoJrge8ZIyLh//8QAHRAAAgMBAAMBAAAAAAAAAAAABAUCAwYBBxMUFv/aAAgBAQABBQLNJVjVZzNR6yIUFwnjgTyTxVorqvQsb4tPDI65PN8d86pwzfsT8uNT+gm1Y8yF193t/8QAJhEAAgIABAQHAAAAAAAAAAAAAgMBBAUREhMAISIxFCMyQWFicf/aAAgBAwEBPwHFMRbRmb77cDT2zq06a68+biDC1TYuXDLSpVWsKyWivMlZNjpbtLEJbGPYllGR6vtoR1dufpjv+ZcWLza2GUJoprpO21niHNALD93ahYvSbVECnQozXLFqWe2RLCQEp4IXTOZmBl7mSw1F8z0zz4//xAAkEQACAgEEAQQDAAAAAAAAAAACAwEEBRESEyEABhQiMVFhcf/aAAgBAgEBPwGjifctmgNaJfBLs2rR2A0VQGNoop1IHkcVl/IJWHDtRADAch74XHprGTETxDGsa6cr+v12cz1/fKWLTlM7lU5e1bsqx1Oo2rWTJ1akoNkOZUsLRYU1yJcCW8bXsCXLFzBZMQPm1S/gpIrWHQAJEIiMfUQMdREfjz//xAArEAACAgECBAUDBQAAAAAAAAABAgMEEgURABMhIgYUMTJBI1GBFTNCYbH/2gAIAQEABj8Cu37mqtX1Dza0NL0qKhO8l6zMoYH9Q3NWvHGvMYiZcQE72AYA3KiWlsVqyZeYUE5yczGOLaM4sxPYcGOEnRh6gAKwXtH8d+vUfDf1t+OOTpcE1jUYjzqFaLmhblp0aFqcRj/au2oHk8rOXQRNGzN2+lnUn8PN4blqwtp4pSiNXFis7JbNpVEaLbjlVo3XFWAzfd+YW4nSCOXBOz6asyZKzBsWA2YfP52PUcahquoaxFBG1aJ4qcN2GGV2haTJ5M8pFiO+MTKE7y2MhwK8XtT8PioNS1bGeezdvTGKKU1xVS08Pl5Vs2YlVHZVNaGSUc6XPHHie5qGs0mtTsXk5cKBEOTdgSOMJHsd9kA6Aj78avFjtHy2GKs6jZHXDbFhtjm232340WMXJsWEobu9wE7jYn3H2j1P+nd/quOvwxHwPtx//8QAGxABAQADAQEBAAAAAAAAAAAAAREAITFRQYH/2gAIAQEAAT8hsncovKSa6i4rtLGwMgRe/VBmUSEul6OLKAfWLilFKaiAlyv3yGEwwqbTLEKLPGnIOrchNjZ1Ip2Tt/wAtaCkIJQaDiYTwgv+6Mt7uixuV7ADQxleMKIagOSkMPmHAlRsLRwlRLta5hw0j0FRXSqvfzgZ/9oADAMBAAIAAwAAABAo2cL/xAAYEQEBAQEBAAAAAAAAAAAAAAABESEAQf/aAAgBAwEBPxAHiwXEd8pxoW5wMAWAgyPhoFaUqr6Rz+UXHYqUqUKLBEIqyiXXb49//8QAGREBAQEBAQEAAAAAAAAAAAAAAREhADFB/9oACAECAQE/EDW1hIIOwEnIPE0jCptg5AokUk9wh+kV9wcocCkVesBbGfGJgMDN2//EABgQAQEBAQEAAAAAAAAAAAAAAAERACEQ/9oACAEBAAE/EMQZ82BovmDZoQyS1FVaZiKYXTEc6iIRgKdJqJmw3vfREzHdSMALWcBiQ9Zaw6NjOaIDX5KvAoTRl+raf1Yykxw7V3UaSnOMKixJUnmiz1KBM4K/8TASSQgCQDVpMuGYEy0MGDFoSOxBAqFkqA//2Q=="},"backgroundColor":"transparent","images":{"fallback":{"src":"/static/df5273cf156dce671ab2be65e973d6f2/aac09/fnd_cover.jpg","srcSet":"/static/df5273cf156dce671ab2be65e973d6f2/24fdc/fnd_cover.jpg 576w,\\n/static/df5273cf156dce671ab2be65e973d6f2/7511c/fnd_cover.jpg 768w,\\n/static/df5273cf156dce671ab2be65e973d6f2/aac09/fnd_cover.jpg 960w","sizes":"100vw"},"sources":[{"srcSet":"/static/df5273cf156dce671ab2be65e973d6f2/98582/fnd_cover.avif 576w,\\n/static/df5273cf156dce671ab2be65e973d6f2/92ec5/fnd_cover.avif 768w,\\n/static/df5273cf156dce671ab2be65e973d6f2/a09cc/fnd_cover.avif 960w","type":"image/avif","sizes":"100vw"},{"srcSet":"/static/df5273cf156dce671ab2be65e973d6f2/540d8/fnd_cover.webp 576w,\\n/static/df5273cf156dce671ab2be65e973d6f2/3f179/fnd_cover.webp 768w,\\n/static/df5273cf156dce671ab2be65e973d6f2/fb9f7/fnd_cover.webp 960w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":1.3333333333333333}}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/3718856346.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3718856346.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"mainCover":{"childImageSharp":{"gatsbyImageData":{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAYHBAj/xAAXAQADAQAAAAAAAAAAAAAAAAACAwQG/9oADAMBAAIQAxAAAAHt6mbWfO1TQfhY/wD/xAAaEAEBAAIDAAAAAAAAAAAAAAAFBAMGAhES/9oACAEBAAEFAotzOsnlZIsjw7ADVwH8WRogGK4spBnf/8QAIhEAAgAEBgMAAAAAAAAAAAAAAQIDBBExABITISJBJDKU/9oACAEDAQE/ARGk4qIywWSGdwUcsSlONdUe1abjIL8BbGeS7l5ivfkJf58f/8QAIhEAAgEDAgcAAAAAAAAAAAAAAQIRAxIhAAQkMTNBYWKT/9oACAECAQE/AQlZCwasrsAMNTtAac9OMeDcfbvpl3VxjcUInHDPy++v/8QAKBAAAgIBAwMBCQAAAAAAAAAAAQIDBBEABRMSISIjFBUkMUFRUlNx/9oACAEBAAY/Ar+41Ytwn2vbO0m5pVkercaMDn93tGsjXFgz60sa8X63chlFbcYdwi9luQCeB5SYAYzkDPMECkFTlSRjBPy1zV932+xGSQJEtQ9Jx9izLn+gYP0OqrLEkCNHAOFAvEqkDwRAqKkf4pjAHbUMF+rFYr15TLHWZfhurBHqQKRHKmCfTdTGcnKnOgG26g3SoRc0avii+Koo4uyqBhVHYDsNf//EABkQAQEBAQEBAAAAAAAAAAAAAAERIQAxQf/aAAgBAQABPyGnt4kg1tsFE459gebDiDSmckLwpJDv3Us5s+wcnYnaZkcGgKYeVjI2WnLoYnRKHF858NNRMwEwAd//2gAMAwEAAgADAAAAEKwv/8QAGREBAQEBAQEAAAAAAAAAAAAAARExIVFh/9oACAEDAQE/EHT7R1sBrpKCsDOUAK3AV4DqXPnt/8QAGREBAQADAQAAAAAAAAAAAAAAAREAIUEx/9oACAECAQE/ECIkooIl4ViEgXXDHpJqppK7KHeyzwf/xAAYEAEBAQEBAAAAAAAAAAAAAAABEQAhMf/aAAgBAQABPxCU7pxAhYmlc4/WwbdyBHlkgXpWWRgDnUESJ1zeEROvzNXOjBr4q2J71yc/XCTetCwCtBMdG//Z"},"backgroundColor":"transparent","images":{"fallback":{"src":"/static/f0f65b83413e189655d91b7837b1a537/7d7e9/main_cover.jpg","srcSet":"/static/f0f65b83413e189655d91b7837b1a537/d9d96/main_cover.jpg 576w,\\n/static/f0f65b83413e189655d91b7837b1a537/56c8c/main_cover.jpg 768w,\\n/static/f0f65b83413e189655d91b7837b1a537/81220/main_cover.jpg 992w,\\n/static/f0f65b83413e189655d91b7837b1a537/6a95f/main_cover.jpg 1200w,\\n/static/f0f65b83413e189655d91b7837b1a537/7d7e9/main_cover.jpg 1600w","sizes":"100vw"},"sources":[{"srcSet":"/static/f0f65b83413e189655d91b7837b1a537/9d132/main_cover.avif 576w,\\n/static/f0f65b83413e189655d91b7837b1a537/a2e56/main_cover.avif 768w,\\n/static/f0f65b83413e189655d91b7837b1a537/c8a0b/main_cover.avif 992w,\\n/static/f0f65b83413e189655d91b7837b1a537/afa65/main_cover.avif 1200w,\\n/static/f0f65b83413e189655d91b7837b1a537/d8e50/main_cover.avif 1600w","type":"image/avif","sizes":"100vw"},{"srcSet":"/static/f0f65b83413e189655d91b7837b1a537/9f93b/main_cover.webp 576w,\\n/static/f0f65b83413e189655d91b7837b1a537/d2749/main_cover.webp 768w,\\n/static/f0f65b83413e189655d91b7837b1a537/3a6ed/main_cover.webp 992w,\\n/static/f0f65b83413e189655d91b7837b1a537/794c6/main_cover.webp 1200w,\\n/static/f0f65b83413e189655d91b7837b1a537/b3a0b/main_cover.webp 1600w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.6637500000000001}}}}}');

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
//# sourceMappingURL=component---src-pages-index-js.js.map