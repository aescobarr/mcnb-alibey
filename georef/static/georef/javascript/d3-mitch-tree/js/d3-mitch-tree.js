(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("mitchTree", [], factory);
	else if(typeof exports === 'object')
		exports["mitchTree"] = factory();
	else
		root["d3"] = root["d3"] || {}, root["d3"]["mitchTree"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "./dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/d3-array/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/array.js ***!
  \********************************************/
/*! exports provided: slice, map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),

/***/ "./node_modules/d3-array/src/ascending.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/ascending.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-array/src/bisect.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/bisect.js ***!
  \*********************************************/
/*! exports provided: bisectRight, bisectLeft, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return bisectRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return bisectLeft; });
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _bisector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisector */ "./node_modules/d3-array/src/bisector.js");



var ascendingBisect = Object(_bisector__WEBPACK_IMPORTED_MODULE_1__["default"])(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["default"] = (bisectRight);


/***/ }),

/***/ "./node_modules/d3-array/src/bisector.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/bisector.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return Object(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"])(f(d), x);
  };
}


/***/ }),

/***/ "./node_modules/d3-array/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-array/src/cross.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/cross.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pairs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pairs */ "./node_modules/d3-array/src/pairs.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = _pairs__WEBPACK_IMPORTED_MODULE_0__["pair"];

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});


/***/ }),

/***/ "./node_modules/d3-array/src/descending.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-array/src/descending.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-array/src/deviation.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/deviation.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variance */ "./node_modules/d3-array/src/variance.js");


/* harmony default export */ __webpack_exports__["default"] = (function(array, f) {
  var v = Object(_variance__WEBPACK_IMPORTED_MODULE_0__["default"])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),

/***/ "./node_modules/d3-array/src/extent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/extent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});


/***/ }),

/***/ "./node_modules/d3-array/src/histogram.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/histogram.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/d3-array/src/array.js");
/* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisect */ "./node_modules/d3-array/src/bisect.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-array/src/constant.js");
/* harmony import */ var _extent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extent */ "./node_modules/d3-array/src/extent.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identity */ "./node_modules/d3-array/src/identity.js");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./range */ "./node_modules/d3-array/src/range.js");
/* harmony import */ var _ticks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticks */ "./node_modules/d3-array/src/ticks.js");
/* harmony import */ var _threshold_sturges__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./threshold/sturges */ "./node_modules/d3-array/src/threshold/sturges.js");









/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = _identity__WEBPACK_IMPORTED_MODULE_4__["default"],
      domain = _extent__WEBPACK_IMPORTED_MODULE_3__["default"],
      threshold = _threshold_sturges__WEBPACK_IMPORTED_MODULE_7__["default"];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = Object(_ticks__WEBPACK_IMPORTED_MODULE_6__["tickStep"])(x0, x1, tz);
      tz = Object(_range__WEBPACK_IMPORTED_MODULE_5__["default"])(Math.ceil(x0 / tz) * tz, x1, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(_bisect__WEBPACK_IMPORTED_MODULE_1__["default"])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)) : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),

/***/ "./node_modules/d3-array/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-array/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/index.js ***!
  \********************************************/
/*! exports provided: bisect, bisectRight, bisectLeft, ascending, bisector, cross, descending, deviation, extent, histogram, thresholdFreedmanDiaconis, thresholdScott, thresholdSturges, max, mean, median, merge, min, pairs, permute, quantile, range, scan, shuffle, sum, ticks, tickIncrement, tickStep, transpose, variance, zip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bisect */ "./node_modules/d3-array/src/bisect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return _bisect__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return _bisect__WEBPACK_IMPORTED_MODULE_0__["bisectRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return _bisect__WEBPACK_IMPORTED_MODULE_0__["bisectLeft"]; });

/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ascending", function() { return _ascending__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bisector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bisector */ "./node_modules/d3-array/src/bisector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return _bisector__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _cross__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cross */ "./node_modules/d3-array/src/cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return _cross__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _descending__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./descending */ "./node_modules/d3-array/src/descending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "descending", function() { return _descending__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _deviation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deviation */ "./node_modules/d3-array/src/deviation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return _deviation__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _extent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extent */ "./node_modules/d3-array/src/extent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extent", function() { return _extent__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _histogram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./histogram */ "./node_modules/d3-array/src/histogram.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return _histogram__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _threshold_freedmanDiaconis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./threshold/freedmanDiaconis */ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return _threshold_freedmanDiaconis__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _threshold_scott__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./threshold/scott */ "./node_modules/d3-array/src/threshold/scott.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return _threshold_scott__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _threshold_sturges__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./threshold/sturges */ "./node_modules/d3-array/src/threshold/sturges.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return _threshold_sturges__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./max */ "./node_modules/d3-array/src/max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _max__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _mean__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mean */ "./node_modules/d3-array/src/mean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return _mean__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _median__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./median */ "./node_modules/d3-array/src/median.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "median", function() { return _median__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./merge */ "./node_modules/d3-array/src/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _merge__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./min */ "./node_modules/d3-array/src/min.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _pairs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pairs */ "./node_modules/d3-array/src/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _pairs__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _permute__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./permute */ "./node_modules/d3-array/src/permute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return _permute__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./quantile */ "./node_modules/d3-array/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return _quantile__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./range */ "./node_modules/d3-array/src/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _range__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _scan__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./scan */ "./node_modules/d3-array/src/scan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return _scan__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _shuffle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shuffle */ "./node_modules/d3-array/src/shuffle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _shuffle__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sum */ "./node_modules/d3-array/src/sum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return _sum__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _ticks__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ticks */ "./node_modules/d3-array/src/ticks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticks", function() { return _ticks__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return _ticks__WEBPACK_IMPORTED_MODULE_23__["tickIncrement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return _ticks__WEBPACK_IMPORTED_MODULE_23__["tickStep"]; });

/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./transpose */ "./node_modules/d3-array/src/transpose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return _transpose__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _variance__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./variance */ "./node_modules/d3-array/src/variance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return _variance__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _zip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./zip */ "./node_modules/d3-array/src/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _zip__WEBPACK_IMPORTED_MODULE_26__["default"]; });






























/***/ }),

/***/ "./node_modules/d3-array/src/max.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/max.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});


/***/ }),

/***/ "./node_modules/d3-array/src/mean.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/mean.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});


/***/ }),

/***/ "./node_modules/d3-array/src/median.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/median.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quantile */ "./node_modules/d3-array/src/quantile.js");




/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_1__["default"])(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_1__["default"])(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return Object(_quantile__WEBPACK_IMPORTED_MODULE_2__["default"])(numbers.sort(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"]), 0.5);
});


/***/ }),

/***/ "./node_modules/d3-array/src/merge.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/merge.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});


/***/ }),

/***/ "./node_modules/d3-array/src/min.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/min.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});


/***/ }),

/***/ "./node_modules/d3-array/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/number.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),

/***/ "./node_modules/d3-array/src/pairs.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/pairs.js ***!
  \********************************************/
/*! exports provided: default, pair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pair", function() { return pair; });
/* harmony default export */ __webpack_exports__["default"] = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}


/***/ }),

/***/ "./node_modules/d3-array/src/permute.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/permute.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),

/***/ "./node_modules/d3-array/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/quantile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, p, valueof) {
  if (valueof == null) valueof = _number__WEBPACK_IMPORTED_MODULE_0__["default"];
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});


/***/ }),

/***/ "./node_modules/d3-array/src/range.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/range.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),

/***/ "./node_modules/d3-array/src/scan.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/scan.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = _ascending__WEBPACK_IMPORTED_MODULE_0__["default"];

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});


/***/ }),

/***/ "./node_modules/d3-array/src/shuffle.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/shuffle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});


/***/ }),

/***/ "./node_modules/d3-array/src/sum.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/sum.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/freedmanDiaconis.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array */ "./node_modules/d3-array/src/array.js");
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../number */ "./node_modules/d3-array/src/number.js");
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quantile */ "./node_modules/d3-array/src/quantile.js");





/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  values = _array__WEBPACK_IMPORTED_MODULE_0__["map"].call(values, _number__WEBPACK_IMPORTED_MODULE_2__["default"]).sort(_ascending__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return Math.ceil((max - min) / (2 * (Object(_quantile__WEBPACK_IMPORTED_MODULE_3__["default"])(values, 0.75) - Object(_quantile__WEBPACK_IMPORTED_MODULE_3__["default"])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/scott.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/scott.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deviation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deviation */ "./node_modules/d3-array/src/deviation.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(_deviation__WEBPACK_IMPORTED_MODULE_0__["default"])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/sturges.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/sturges.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),

/***/ "./node_modules/d3-array/src/ticks.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/ticks.js ***!
  \********************************************/
/*! exports provided: default, tickIncrement, tickStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return tickIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return tickStep; });
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),

/***/ "./node_modules/d3-array/src/transpose.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/transpose.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./min */ "./node_modules/d3-array/src/min.js");


/* harmony default export */ __webpack_exports__["default"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(_min__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),

/***/ "./node_modules/d3-array/src/variance.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/variance.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});


/***/ }),

/***/ "./node_modules/d3-array/src/zip.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/zip.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transpose */ "./node_modules/d3-array/src/transpose.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_transpose__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments);
});


/***/ }),

/***/ "./node_modules/d3-collection/src/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-collection/src/entries.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
});


/***/ }),

/***/ "./node_modules/d3-collection/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-collection/src/index.js ***!
  \*************************************************/
/*! exports provided: nest, set, map, keys, values, entries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nest */ "./node_modules/d3-collection/src/nest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nest", function() { return _nest__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set */ "./node_modules/d3-collection/src/set.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "set", function() { return _set__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ "./node_modules/d3-collection/src/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _map__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keys */ "./node_modules/d3-collection/src/keys.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return _keys__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./values */ "./node_modules/d3-collection/src/values.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _values__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _entries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entries */ "./node_modules/d3-collection/src/entries.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return _entries__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./node_modules/d3-collection/src/keys.js":
/*!************************************************!*\
  !*** ./node_modules/d3-collection/src/keys.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(map) {
  var keys = [];
  for (var key in map) keys.push(key);
  return keys;
});


/***/ }),

/***/ "./node_modules/d3-collection/src/map.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-collection/src/map.js ***!
  \***********************************************/
/*! exports provided: prefix, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
var prefix = "$";

function Map() {}

Map.prototype = map.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

/* harmony default export */ __webpack_exports__["default"] = (map);


/***/ }),

/***/ "./node_modules/d3-collection/src/nest.js":
/*!************************************************!*\
  !*** ./node_modules/d3-collection/src/nest.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./node_modules/d3-collection/src/map.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var keys = [],
      sortKeys = [],
      sortValues,
      rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (sortValues != null) array.sort(sortValues);
      return rollup != null ? rollup(array) : array;
    }

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = Object(_map__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function(values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });

    return result;
  }

  function entries(map, depth) {
    if (++depth > keys.length) return map;
    var array, sortKey = sortKeys[depth - 1];
    if (rollup != null && depth >= keys.length) array = map.entries();
    else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
    return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
  }

  return nest = {
    object: function(array) { return apply(array, 0, createObject, setObject); },
    map: function(array) { return apply(array, 0, createMap, setMap); },
    entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
    key: function(d) { keys.push(d); return nest; },
    sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
    sortValues: function(order) { sortValues = order; return nest; },
    rollup: function(f) { rollup = f; return nest; }
  };
});

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return Object(_map__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

function setMap(map, key, value) {
  map.set(key, value);
}


/***/ }),

/***/ "./node_modules/d3-collection/src/set.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-collection/src/set.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./node_modules/d3-collection/src/map.js");


function Set() {}

var proto = _map__WEBPACK_IMPORTED_MODULE_0__["default"].prototype;

Set.prototype = set.prototype = {
  constructor: Set,
  has: proto.has,
  add: function(value) {
    value += "";
    this[_map__WEBPACK_IMPORTED_MODULE_0__["prefix"] + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set(object, f) {
  var set = new Set;

  // Copy constructor.
  if (object instanceof Set) object.each(function(value) { set.add(value); });

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set.add(object[i]);
    else while (++i < n) set.add(f(object[i], i, object));
  }

  return set;
}

/* harmony default export */ __webpack_exports__["default"] = (set);


/***/ }),

/***/ "./node_modules/d3-collection/src/values.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-collection/src/values.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(map) {
  var values = [];
  for (var key in map) values.push(map[key]);
  return values;
});


/***/ }),

/***/ "./node_modules/d3-color/src/color.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/color.js ***!
  \********************************************/
/*! exports provided: Color, darker, brighter, default, rgbConvert, rgb, Rgb, hslConvert, hsl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darker", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brighter", function() { return brighter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbConvert", function() { return rgbConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rgb", function() { return Rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslConvert", function() { return hslConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return hsl; });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/d3-color/src/define.js");


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Rgb, rgb, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(")
      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.b) || 0))
      + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Hsl, hsl, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(")
        + (this.h || 0) + ", "
        + (this.s || 0) * 100 + "%, "
        + (this.l || 0) * 100 + "%"
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ "./node_modules/d3-color/src/cubehelix.js":
/*!************************************************!*\
  !*** ./node_modules/d3-color/src/cubehelix.js ***!
  \************************************************/
/*! exports provided: default, Cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cubehelix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cubehelix", function() { return Cubehelix; });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/d3-color/src/define.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.js */ "./node_modules/d3-color/src/math.js");




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof _color_js__WEBPACK_IMPORTED_MODULE_1__["Rgb"])) o = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * _math_js__WEBPACK_IMPORTED_MODULE_2__["rad2deg"] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Cubehelix, cubehelix, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color_js__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    k = k == null ? _color_js__WEBPACK_IMPORTED_MODULE_1__["brighter"] : Math.pow(_color_js__WEBPACK_IMPORTED_MODULE_1__["brighter"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? _color_js__WEBPACK_IMPORTED_MODULE_1__["darker"] : Math.pow(_color_js__WEBPACK_IMPORTED_MODULE_1__["darker"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * _math_js__WEBPACK_IMPORTED_MODULE_2__["deg2rad"],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new _color_js__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),

/***/ "./node_modules/d3-color/src/define.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-color/src/define.js ***!
  \*********************************************/
/*! exports provided: default, extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony default export */ __webpack_exports__["default"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ "./node_modules/d3-color/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/index.js ***!
  \********************************************/
/*! exports provided: color, rgb, hsl, lab, hcl, lch, gray, cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-color/src/color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _color_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return _color_js__WEBPACK_IMPORTED_MODULE_0__["rgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return _color_js__WEBPACK_IMPORTED_MODULE_0__["hsl"]; });

/* harmony import */ var _lab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lab.js */ "./node_modules/d3-color/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lab", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__["hcl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__["lch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__["gray"]; });

/* harmony import */ var _cubehelix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubehelix.js */ "./node_modules/d3-color/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubehelix", function() { return _cubehelix_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./node_modules/d3-color/src/lab.js":
/*!******************************************!*\
  !*** ./node_modules/d3-color/src/lab.js ***!
  \******************************************/
/*! exports provided: gray, default, Lab, lch, hcl, Hcl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return gray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lab", function() { return Lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return lch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return hcl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hcl", function() { return Hcl; });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/d3-color/src/define.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.js */ "./node_modules/d3-color/src/math.js");




// https://observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) return hcl2lab(o);
  if (!(o instanceof _color_js__WEBPACK_IMPORTED_MODULE_1__["Rgb"])) o = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Lab, lab, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color_js__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new _color_js__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * _math_js__WEBPACK_IMPORTED_MODULE_2__["rad2deg"];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

function hcl2lab(o) {
  if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
  var h = o.h * _math_js__WEBPACK_IMPORTED_MODULE_2__["deg2rad"];
  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Hcl, hcl, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color_js__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return hcl2lab(this).rgb();
  }
}));


/***/ }),

/***/ "./node_modules/d3-color/src/math.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-color/src/math.js ***!
  \*******************************************/
/*! exports provided: deg2rad, rad2deg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deg2rad", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rad2deg", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),

/***/ "./node_modules/d3-dispatch/src/dispatch.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-dispatch/src/dispatch.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var noop = {value: function() {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ __webpack_exports__["default"] = (dispatch);


/***/ }),

/***/ "./node_modules/d3-dispatch/src/index.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-dispatch/src/index.js ***!
  \***********************************************/
/*! exports provided: dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dispatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatch.js */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return _dispatch_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/d3-drag/src/constant.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-drag/src/constant.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-drag/src/drag.js":
/*!******************************************!*\
  !*** ./node_modules/d3-drag/src/drag.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _nodrag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nodrag.js */ "./node_modules/d3-drag/src/nodrag.js");
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./noevent.js */ "./node_modules/d3-drag/src/noevent.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-drag/src/constant.js");
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event.js */ "./node_modules/d3-drag/src/event.js");







// Ignore right-click, since that should open the context menu.
function defaultFilter() {
  return !d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].ctrlKey && !d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].button;
}

function defaultContainer() {
  return this.parentNode;
}

function defaultSubject(d) {
  return d == null ? {x: d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].x, y: d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].y} : d;
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var filter = defaultFilter,
      container = defaultContainer,
      subject = defaultSubject,
      touchable = defaultTouchable,
      gestures = {},
      listeners = Object(d3_dispatch__WEBPACK_IMPORTED_MODULE_0__["dispatch"])("start", "drag", "end"),
      active = 0,
      mousedownx,
      mousedowny,
      mousemoving,
      touchending,
      clickDistance2 = 0;

  function drag(selection) {
    selection
        .on("mousedown.drag", mousedowned)
      .filter(touchable)
        .on("touchstart.drag", touchstarted)
        .on("touchmove.drag", touchmoved)
        .on("touchend.drag touchcancel.drag", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  function mousedowned() {
    if (touchending || !filter.apply(this, arguments)) return;
    var gesture = beforestart("mouse", container.apply(this, arguments), d3_selection__WEBPACK_IMPORTED_MODULE_1__["mouse"], this, arguments);
    if (!gesture) return;
    Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"])(d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
    Object(_nodrag_js__WEBPACK_IMPORTED_MODULE_2__["default"])(d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].view);
    Object(_noevent_js__WEBPACK_IMPORTED_MODULE_3__["nopropagation"])();
    mousemoving = false;
    mousedownx = d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].clientX;
    mousedowny = d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].clientY;
    gesture("start");
  }

  function mousemoved() {
    Object(_noevent_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    if (!mousemoving) {
      var dx = d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].clientX - mousedownx, dy = d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag");
  }

  function mouseupped() {
    Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"])(d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].view).on("mousemove.drag mouseup.drag", null);
    Object(_nodrag_js__WEBPACK_IMPORTED_MODULE_2__["yesdrag"])(d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].view, mousemoving);
    Object(_noevent_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    gestures.mouse("end");
  }

  function touchstarted() {
    if (!filter.apply(this, arguments)) return;
    var touches = d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].changedTouches,
        c = container.apply(this, arguments),
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(touches[i].identifier, c, d3_selection__WEBPACK_IMPORTED_MODULE_1__["touch"], this, arguments)) {
        Object(_noevent_js__WEBPACK_IMPORTED_MODULE_3__["nopropagation"])();
        gesture("start");
      }
    }
  }

  function touchmoved() {
    var touches = d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].changedTouches,
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        Object(_noevent_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
        gesture("drag");
      }
    }
  }

  function touchended() {
    var touches = d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].changedTouches,
        n = touches.length, i, gesture;

    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        Object(_noevent_js__WEBPACK_IMPORTED_MODULE_3__["nopropagation"])();
        gesture("end");
      }
    }
  }

  function beforestart(id, container, point, that, args) {
    var p = point(container, id), s, dx, dy,
        sublisteners = listeners.copy();

    if (!Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["customEvent"])(new _event_js__WEBPACK_IMPORTED_MODULE_5__["default"](drag, "beforestart", s, id, active, p[0], p[1], 0, 0, sublisteners), function() {
      if ((d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].subject = s = subject.apply(that, args)) == null) return false;
      dx = s.x - p[0] || 0;
      dy = s.y - p[1] || 0;
      return true;
    })) return;

    return function gesture(type) {
      var p0 = p, n;
      switch (type) {
        case "start": gestures[id] = gesture, n = active++; break;
        case "end": delete gestures[id], --active; // nobreak
        case "drag": p = point(container, id), n = active; break;
      }
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["customEvent"])(new _event_js__WEBPACK_IMPORTED_MODULE_5__["default"](drag, type, s, id, n, p[0] + dx, p[1] + dy, p[0] - p0[0], p[1] - p0[1], sublisteners), sublisteners.apply, sublisteners, [type, that, args]);
    };
  }

  drag.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_4__["default"])(!!_), drag) : filter;
  };

  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_), drag) : container;
  };

  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_), drag) : subject;
  };

  drag.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_4__["default"])(!!_), drag) : touchable;
  };

  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };

  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };

  return drag;
});


/***/ }),

/***/ "./node_modules/d3-drag/src/event.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-drag/src/event.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragEvent; });
function DragEvent(target, type, subject, id, active, x, y, dx, dy, dispatch) {
  this.target = target;
  this.type = type;
  this.subject = subject;
  this.identifier = id;
  this.active = active;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this._ = dispatch;
}

DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};


/***/ }),

/***/ "./node_modules/d3-drag/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-drag/src/index.js ***!
  \*******************************************/
/*! exports provided: drag, dragDisable, dragEnable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag.js */ "./node_modules/d3-drag/src/drag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drag", function() { return _drag_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _nodrag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodrag.js */ "./node_modules/d3-drag/src/nodrag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dragDisable", function() { return _nodrag_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dragEnable", function() { return _nodrag_js__WEBPACK_IMPORTED_MODULE_1__["yesdrag"]; });





/***/ }),

/***/ "./node_modules/d3-drag/src/nodrag.js":
/*!********************************************!*\
  !*** ./node_modules/d3-drag/src/nodrag.js ***!
  \********************************************/
/*! exports provided: default, yesdrag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yesdrag", function() { return yesdrag; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noevent.js */ "./node_modules/d3-drag/src/noevent.js");



/* harmony default export */ __webpack_exports__["default"] = (function(view) {
  var root = view.document.documentElement,
      selection = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(view).on("dragstart.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"], true);
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"], true);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
});

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"], true);
    setTimeout(function() { selection.on("click.drag", null); }, 0);
  }
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}


/***/ }),

/***/ "./node_modules/d3-drag/src/noevent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-drag/src/noevent.js ***!
  \*********************************************/
/*! exports provided: nopropagation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nopropagation", function() { return nopropagation; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");


function nopropagation() {
  d3_selection__WEBPACK_IMPORTED_MODULE_0__["event"].stopImmediatePropagation();
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  d3_selection__WEBPACK_IMPORTED_MODULE_0__["event"].preventDefault();
  d3_selection__WEBPACK_IMPORTED_MODULE_0__["event"].stopImmediatePropagation();
});


/***/ }),

/***/ "./node_modules/d3-ease/src/back.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/back.js ***!
  \******************************************/
/*! exports provided: backIn, backOut, backInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return (t = +t) * t * (s * (t - 1) + t);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((t + 1) * s + t) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);


/***/ }),

/***/ "./node_modules/d3-ease/src/bounce.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/bounce.js ***!
  \********************************************/
/*! exports provided: bounceIn, bounceOut, bounceInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInOut", function() { return bounceInOut; });
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/circle.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/circle.js ***!
  \********************************************/
/*! exports provided: circleIn, circleOut, circleInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleIn", function() { return circleIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleOut", function() { return circleOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleInOut", function() { return circleInOut; });
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/cubic.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/cubic.js ***!
  \*******************************************/
/*! exports provided: cubicIn, cubicOut, cubicInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicIn", function() { return cubicIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicOut", function() { return cubicOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicInOut", function() { return cubicInOut; });
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/elastic.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-ease/src/elastic.js ***!
  \*********************************************/
/*! exports provided: elasticIn, elasticOut, elasticInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticIn", function() { return elasticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticOut", function() { return elasticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticInOut", function() { return elasticInOut; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "./node_modules/d3-ease/src/math.js");


var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["tpmt"])(-(--t)) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["tpmt"])(t = +t) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["tpmt"])(-t) * Math.sin((s - t) / p)
        : 2 - a * Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["tpmt"])(t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);


/***/ }),

/***/ "./node_modules/d3-ease/src/exp.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/exp.js ***!
  \*****************************************/
/*! exports provided: expIn, expOut, expInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expIn", function() { return expIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expOut", function() { return expOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expInOut", function() { return expInOut; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ "./node_modules/d3-ease/src/math.js");


function expIn(t) {
  return Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["tpmt"])(1 - +t);
}

function expOut(t) {
  return 1 - Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["tpmt"])(t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["tpmt"])(1 - t) : 2 - Object(_math_js__WEBPACK_IMPORTED_MODULE_0__["tpmt"])(t - 1)) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/index.js ***!
  \*******************************************/
/*! exports provided: easeLinear, easeQuad, easeQuadIn, easeQuadOut, easeQuadInOut, easeCubic, easeCubicIn, easeCubicOut, easeCubicInOut, easePoly, easePolyIn, easePolyOut, easePolyInOut, easeSin, easeSinIn, easeSinOut, easeSinInOut, easeExp, easeExpIn, easeExpOut, easeExpInOut, easeCircle, easeCircleIn, easeCircleOut, easeCircleInOut, easeBounce, easeBounceIn, easeBounceOut, easeBounceInOut, easeBack, easeBackIn, easeBackOut, easeBackInOut, easeElastic, easeElasticIn, easeElasticOut, easeElasticInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-ease/src/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeLinear", function() { return _linear_js__WEBPACK_IMPORTED_MODULE_0__["linear"]; });

/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quad.js */ "./node_modules/d3-ease/src/quad.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuad", function() { return _quad_js__WEBPACK_IMPORTED_MODULE_1__["quadInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadIn", function() { return _quad_js__WEBPACK_IMPORTED_MODULE_1__["quadIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadOut", function() { return _quad_js__WEBPACK_IMPORTED_MODULE_1__["quadOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadInOut", function() { return _quad_js__WEBPACK_IMPORTED_MODULE_1__["quadInOut"]; });

/* harmony import */ var _cubic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubic.js */ "./node_modules/d3-ease/src/cubic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubic", function() { return _cubic_js__WEBPACK_IMPORTED_MODULE_2__["cubicInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicIn", function() { return _cubic_js__WEBPACK_IMPORTED_MODULE_2__["cubicIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicOut", function() { return _cubic_js__WEBPACK_IMPORTED_MODULE_2__["cubicOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicInOut", function() { return _cubic_js__WEBPACK_IMPORTED_MODULE_2__["cubicInOut"]; });

/* harmony import */ var _poly_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poly.js */ "./node_modules/d3-ease/src/poly.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePoly", function() { return _poly_js__WEBPACK_IMPORTED_MODULE_3__["polyInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyIn", function() { return _poly_js__WEBPACK_IMPORTED_MODULE_3__["polyIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyOut", function() { return _poly_js__WEBPACK_IMPORTED_MODULE_3__["polyOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyInOut", function() { return _poly_js__WEBPACK_IMPORTED_MODULE_3__["polyInOut"]; });

/* harmony import */ var _sin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sin.js */ "./node_modules/d3-ease/src/sin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSin", function() { return _sin_js__WEBPACK_IMPORTED_MODULE_4__["sinInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinIn", function() { return _sin_js__WEBPACK_IMPORTED_MODULE_4__["sinIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinOut", function() { return _sin_js__WEBPACK_IMPORTED_MODULE_4__["sinOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinInOut", function() { return _sin_js__WEBPACK_IMPORTED_MODULE_4__["sinInOut"]; });

/* harmony import */ var _exp_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exp.js */ "./node_modules/d3-ease/src/exp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExp", function() { return _exp_js__WEBPACK_IMPORTED_MODULE_5__["expInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpIn", function() { return _exp_js__WEBPACK_IMPORTED_MODULE_5__["expIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpOut", function() { return _exp_js__WEBPACK_IMPORTED_MODULE_5__["expOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpInOut", function() { return _exp_js__WEBPACK_IMPORTED_MODULE_5__["expInOut"]; });

/* harmony import */ var _circle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./circle.js */ "./node_modules/d3-ease/src/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircle", function() { return _circle_js__WEBPACK_IMPORTED_MODULE_6__["circleInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleIn", function() { return _circle_js__WEBPACK_IMPORTED_MODULE_6__["circleIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleOut", function() { return _circle_js__WEBPACK_IMPORTED_MODULE_6__["circleOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleInOut", function() { return _circle_js__WEBPACK_IMPORTED_MODULE_6__["circleInOut"]; });

/* harmony import */ var _bounce_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bounce.js */ "./node_modules/d3-ease/src/bounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounce", function() { return _bounce_js__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceIn", function() { return _bounce_js__WEBPACK_IMPORTED_MODULE_7__["bounceIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceOut", function() { return _bounce_js__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceInOut", function() { return _bounce_js__WEBPACK_IMPORTED_MODULE_7__["bounceInOut"]; });

/* harmony import */ var _back_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./back.js */ "./node_modules/d3-ease/src/back.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBack", function() { return _back_js__WEBPACK_IMPORTED_MODULE_8__["backInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackIn", function() { return _back_js__WEBPACK_IMPORTED_MODULE_8__["backIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackOut", function() { return _back_js__WEBPACK_IMPORTED_MODULE_8__["backOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackInOut", function() { return _back_js__WEBPACK_IMPORTED_MODULE_8__["backInOut"]; });

/* harmony import */ var _elastic_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elastic.js */ "./node_modules/d3-ease/src/elastic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElastic", function() { return _elastic_js__WEBPACK_IMPORTED_MODULE_9__["elasticOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticIn", function() { return _elastic_js__WEBPACK_IMPORTED_MODULE_9__["elasticIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticOut", function() { return _elastic_js__WEBPACK_IMPORTED_MODULE_9__["elasticOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticInOut", function() { return _elastic_js__WEBPACK_IMPORTED_MODULE_9__["elasticInOut"]; });






















/***/ }),

/***/ "./node_modules/d3-ease/src/linear.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/linear.js ***!
  \********************************************/
/*! exports provided: linear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
function linear(t) {
  return +t;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/math.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/math.js ***!
  \******************************************/
/*! exports provided: tpmt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tpmt", function() { return tpmt; });
// tpmt is two power minus ten times t scaled to [0,1]
function tpmt(x) {
  return (Math.pow(2, -10 * x) - 0.0009765625) * 1.0009775171065494;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/poly.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/poly.js ***!
  \******************************************/
/*! exports provided: polyIn, polyOut, polyInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyIn", function() { return polyIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyOut", function() { return polyOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyInOut", function() { return polyInOut; });
var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);


/***/ }),

/***/ "./node_modules/d3-ease/src/quad.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/quad.js ***!
  \******************************************/
/*! exports provided: quadIn, quadOut, quadInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadIn", function() { return quadIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadOut", function() { return quadOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadInOut", function() { return quadInOut; });
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/sin.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/sin.js ***!
  \*****************************************/
/*! exports provided: sinIn, sinOut, sinInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinIn", function() { return sinIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinOut", function() { return sinOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinInOut", function() { return sinInOut; });
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return (+t === 1) ? 1 : 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/accessors.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/accessors.js ***!
  \****************************************************/
/*! exports provided: optional, required */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optional", function() { return optional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
function optional(f) {
  return f == null ? null : required(f);
}

function required(f) {
  if (typeof f !== "function") throw new Error;
  return f;
}


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/array.js":
/*!************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/array.js ***!
  \************************************************/
/*! exports provided: slice, shuffle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
var slice = Array.prototype.slice;

function shuffle(array) {
  var m = array.length,
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/cluster.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/cluster.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

function meanX(children) {
  return children.reduce(meanXReduce, 0) / children.length;
}

function meanXReduce(x, c) {
  return x + c.x;
}

function maxY(children) {
  return 1 + children.reduce(maxYReduce, 0);
}

function maxYReduce(y, c) {
  return Math.max(y, c.y);
}

function leafLeft(node) {
  var children;
  while (children = node.children) node = children[0];
  return node;
}

function leafRight(node) {
  var children;
  while (children = node.children) node = children[children.length - 1];
  return node;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var separation = defaultSeparation,
      dx = 1,
      dy = 1,
      nodeSize = false;

  function cluster(root) {
    var previousNode,
        x = 0;

    // First walk, computing the initial x & y values.
    root.eachAfter(function(node) {
      var children = node.children;
      if (children) {
        node.x = meanX(children);
        node.y = maxY(children);
      } else {
        node.x = previousNode ? x += separation(node, previousNode) : 0;
        node.y = 0;
        previousNode = node;
      }
    });

    var left = leafLeft(root),
        right = leafRight(root),
        x0 = left.x - separation(left, right) / 2,
        x1 = right.x + separation(right, left) / 2;

    // Second walk, normalizing x & y to the desired size.
    return root.eachAfter(nodeSize ? function(node) {
      node.x = (node.x - root.x) * dx;
      node.y = (root.y - node.y) * dy;
    } : function(node) {
      node.x = (node.x - x0) / (x1 - x0) * dx;
      node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;
    });
  }

  cluster.separation = function(x) {
    return arguments.length ? (separation = x, cluster) : separation;
  };

  cluster.size = function(x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? null : [dx, dy]);
  };

  cluster.nodeSize = function(x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? [dx, dy] : null);
  };

  return cluster;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/constant.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/constant.js ***!
  \***************************************************/
/*! exports provided: constantZero, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constantZero", function() { return constantZero; });
function constantZero() {
  return 0;
}

/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/ancestors.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/ancestors.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/count.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/count.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function count(node) {
  var sum = 0,
      children = node.children,
      i = children && children.length;
  if (!i) sum = 1;
  else while (--i >= 0) sum += children[i].value;
  node.value = sum;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.eachAfter(count);
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/descendants.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/descendants.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var nodes = [];
  this.each(function(node) {
    nodes.push(node);
  });
  return nodes;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/each.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/each.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {
  var node = this, current, next = [node], children, i, n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      callback(node), children = node.children;
      if (children) for (i = 0, n = children.length; i < n; ++i) {
        next.push(children[i]);
      }
    }
  } while (next.length);
  return this;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {
  var node = this, nodes = [node], next = [], children, i, n;
  while (node = nodes.pop()) {
    next.push(node), children = node.children;
    if (children) for (i = 0, n = children.length; i < n; ++i) {
      nodes.push(children[i]);
    }
  }
  while (node = next.pop()) {
    callback(node);
  }
  return this;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {
  var node = this, nodes = [node], children, i;
  while (node = nodes.pop()) {
    callback(node), children = node.children;
    if (children) for (i = children.length - 1; i >= 0; --i) {
      nodes.push(children[i]);
    }
  }
  return this;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/index.js ***!
  \**********************************************************/
/*! exports provided: default, computeHeight, Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hierarchy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeHeight", function() { return computeHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./count.js */ "./node_modules/d3-hierarchy/src/hierarchy/count.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ "./node_modules/d3-hierarchy/src/hierarchy/each.js");
/* harmony import */ var _eachBefore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eachBefore.js */ "./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js");
/* harmony import */ var _eachAfter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eachAfter.js */ "./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js");
/* harmony import */ var _sum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sum.js */ "./node_modules/d3-hierarchy/src/hierarchy/sum.js");
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sort.js */ "./node_modules/d3-hierarchy/src/hierarchy/sort.js");
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./path.js */ "./node_modules/d3-hierarchy/src/hierarchy/path.js");
/* harmony import */ var _ancestors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ancestors.js */ "./node_modules/d3-hierarchy/src/hierarchy/ancestors.js");
/* harmony import */ var _descendants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./descendants.js */ "./node_modules/d3-hierarchy/src/hierarchy/descendants.js");
/* harmony import */ var _leaves_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./leaves.js */ "./node_modules/d3-hierarchy/src/hierarchy/leaves.js");
/* harmony import */ var _links_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./links.js */ "./node_modules/d3-hierarchy/src/hierarchy/links.js");












function hierarchy(data, children) {
  var root = new Node(data),
      valued = +data.value && (root.value = data.value),
      node,
      nodes = [root],
      child,
      childs,
      i,
      n;

  if (children == null) children = defaultChildren;

  while (node = nodes.pop()) {
    if (valued) node.value = +node.data.value;
    if ((childs = children(node.data)) && (n = childs.length)) {
      node.children = new Array(n);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }

  return root.eachBefore(computeHeight);
}

function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}

function defaultChildren(d) {
  return d.children;
}

function copyData(node) {
  node.data = node.data.data;
}

function computeHeight(node) {
  var height = 0;
  do node.height = height;
  while ((node = node.parent) && (node.height < ++height));
}

function Node(data) {
  this.data = data;
  this.depth =
  this.height = 0;
  this.parent = null;
}

Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: _count_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  each: _each_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  eachAfter: _eachAfter_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  eachBefore: _eachBefore_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  sum: _sum_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  sort: _sort_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  path: _path_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  ancestors: _ancestors_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  descendants: _descendants_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  leaves: _leaves_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  links: _links_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  copy: node_copy
};


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/leaves.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/leaves.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/links.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/links.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var root = this, links = [];
  root.each(function(node) {
    if (node !== root) { // Don’t include the root’s parent, if any.
      links.push({source: node.parent, target: node});
    }
  });
  return links;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/path.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/path.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(end) {
  var start = this,
      ancestor = leastCommonAncestor(start, end),
      nodes = [start];
  while (start !== ancestor) {
    start = start.parent;
    nodes.push(start);
  }
  var k = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }
  return nodes;
});

function leastCommonAncestor(a, b) {
  if (a === b) return a;
  var aNodes = a.ancestors(),
      bNodes = b.ancestors(),
      c = null;
  a = aNodes.pop();
  b = bNodes.pop();
  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/sort.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/sort.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/sum.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/sum.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return this.eachAfter(function(node) {
    var sum = +value(node.data) || 0,
        children = node.children,
        i = children && children.length;
    while (--i >= 0) sum += children[i].value;
    node.value = sum;
  });
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/index.js ***!
  \************************************************/
/*! exports provided: cluster, hierarchy, pack, packSiblings, packEnclose, partition, stratify, tree, treemap, treemapBinary, treemapDice, treemapSlice, treemapSliceDice, treemapSquarify, treemapResquarify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cluster_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cluster.js */ "./node_modules/d3-hierarchy/src/cluster.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cluster", function() { return _cluster_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _hierarchy_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hierarchy/index.js */ "./node_modules/d3-hierarchy/src/hierarchy/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hierarchy", function() { return _hierarchy_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _pack_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pack/index.js */ "./node_modules/d3-hierarchy/src/pack/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pack", function() { return _pack_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _pack_siblings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pack/siblings.js */ "./node_modules/d3-hierarchy/src/pack/siblings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "packSiblings", function() { return _pack_siblings_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _pack_enclose_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pack/enclose.js */ "./node_modules/d3-hierarchy/src/pack/enclose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "packEnclose", function() { return _pack_enclose_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _partition_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partition.js */ "./node_modules/d3-hierarchy/src/partition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _partition_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _stratify_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stratify.js */ "./node_modules/d3-hierarchy/src/stratify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stratify", function() { return _stratify_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _tree_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tree.js */ "./node_modules/d3-hierarchy/src/tree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree", function() { return _tree_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _treemap_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./treemap/index.js */ "./node_modules/d3-hierarchy/src/treemap/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemap", function() { return _treemap_index_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _treemap_binary_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./treemap/binary.js */ "./node_modules/d3-hierarchy/src/treemap/binary.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapBinary", function() { return _treemap_binary_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _treemap_dice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./treemap/dice.js */ "./node_modules/d3-hierarchy/src/treemap/dice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapDice", function() { return _treemap_dice_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _treemap_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./treemap/slice.js */ "./node_modules/d3-hierarchy/src/treemap/slice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapSlice", function() { return _treemap_slice_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _treemap_sliceDice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./treemap/sliceDice.js */ "./node_modules/d3-hierarchy/src/treemap/sliceDice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapSliceDice", function() { return _treemap_sliceDice_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _treemap_squarify_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./treemap/squarify.js */ "./node_modules/d3-hierarchy/src/treemap/squarify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapSquarify", function() { return _treemap_squarify_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _treemap_resquarify_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./treemap/resquarify.js */ "./node_modules/d3-hierarchy/src/treemap/resquarify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapResquarify", function() { return _treemap_resquarify_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });


















/***/ }),

/***/ "./node_modules/d3-hierarchy/src/pack/enclose.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/pack/enclose.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array.js */ "./node_modules/d3-hierarchy/src/array.js");


/* harmony default export */ __webpack_exports__["default"] = (function(circles) {
  var i = 0, n = (circles = Object(_array_js__WEBPACK_IMPORTED_MODULE_0__["shuffle"])(_array_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(circles))).length, B = [], p, e;

  while (i < n) {
    p = circles[i];
    if (e && enclosesWeak(e, p)) ++i;
    else e = encloseBasis(B = extendBasis(B, p)), i = 0;
  }

  return e;
});

function extendBasis(B, p) {
  var i, j;

  if (enclosesWeakAll(p, B)) return [p];

  // If we get here then B must have at least one element.
  for (i = 0; i < B.length; ++i) {
    if (enclosesNot(p, B[i])
        && enclosesWeakAll(encloseBasis2(B[i], p), B)) {
      return [B[i], p];
    }
  }

  // If we get here then B must have at least two elements.
  for (i = 0; i < B.length - 1; ++i) {
    for (j = i + 1; j < B.length; ++j) {
      if (enclosesNot(encloseBasis2(B[i], B[j]), p)
          && enclosesNot(encloseBasis2(B[i], p), B[j])
          && enclosesNot(encloseBasis2(B[j], p), B[i])
          && enclosesWeakAll(encloseBasis3(B[i], B[j], p), B)) {
        return [B[i], B[j], p];
      }
    }
  }

  // If we get here then something is very wrong.
  throw new Error;
}

function enclosesNot(a, b) {
  var dr = a.r - b.r, dx = b.x - a.x, dy = b.y - a.y;
  return dr < 0 || dr * dr < dx * dx + dy * dy;
}

function enclosesWeak(a, b) {
  var dr = a.r - b.r + 1e-6, dx = b.x - a.x, dy = b.y - a.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}

function enclosesWeakAll(a, B) {
  for (var i = 0; i < B.length; ++i) {
    if (!enclosesWeak(a, B[i])) {
      return false;
    }
  }
  return true;
}

function encloseBasis(B) {
  switch (B.length) {
    case 1: return encloseBasis1(B[0]);
    case 2: return encloseBasis2(B[0], B[1]);
    case 3: return encloseBasis3(B[0], B[1], B[2]);
  }
}

function encloseBasis1(a) {
  return {
    x: a.x,
    y: a.y,
    r: a.r
  };
}

function encloseBasis2(a, b) {
  var x1 = a.x, y1 = a.y, r1 = a.r,
      x2 = b.x, y2 = b.y, r2 = b.r,
      x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1,
      l = Math.sqrt(x21 * x21 + y21 * y21);
  return {
    x: (x1 + x2 + x21 / l * r21) / 2,
    y: (y1 + y2 + y21 / l * r21) / 2,
    r: (l + r1 + r2) / 2
  };
}

function encloseBasis3(a, b, c) {
  var x1 = a.x, y1 = a.y, r1 = a.r,
      x2 = b.x, y2 = b.y, r2 = b.r,
      x3 = c.x, y3 = c.y, r3 = c.r,
      a2 = x1 - x2,
      a3 = x1 - x3,
      b2 = y1 - y2,
      b3 = y1 - y3,
      c2 = r2 - r1,
      c3 = r3 - r1,
      d1 = x1 * x1 + y1 * y1 - r1 * r1,
      d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2,
      d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3,
      ab = a3 * b2 - a2 * b3,
      xa = (b2 * d3 - b3 * d2) / (ab * 2) - x1,
      xb = (b3 * c2 - b2 * c3) / ab,
      ya = (a3 * d2 - a2 * d3) / (ab * 2) - y1,
      yb = (a2 * c3 - a3 * c2) / ab,
      A = xb * xb + yb * yb - 1,
      B = 2 * (r1 + xa * xb + ya * yb),
      C = xa * xa + ya * ya - r1 * r1,
      r = -(A ? (B + Math.sqrt(B * B - 4 * A * C)) / (2 * A) : C / B);
  return {
    x: x1 + xa + xb * r,
    y: y1 + ya + yb * r,
    r: r
  };
}


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/pack/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/pack/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _siblings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./siblings.js */ "./node_modules/d3-hierarchy/src/pack/siblings.js");
/* harmony import */ var _accessors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessors.js */ "./node_modules/d3-hierarchy/src/accessors.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant.js */ "./node_modules/d3-hierarchy/src/constant.js");




function defaultRadius(d) {
  return Math.sqrt(d.value);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var radius = null,
      dx = 1,
      dy = 1,
      padding = _constant_js__WEBPACK_IMPORTED_MODULE_2__["constantZero"];

  function pack(root) {
    root.x = dx / 2, root.y = dy / 2;
    if (radius) {
      root.eachBefore(radiusLeaf(radius))
          .eachAfter(packChildren(padding, 0.5))
          .eachBefore(translateChild(1));
    } else {
      root.eachBefore(radiusLeaf(defaultRadius))
          .eachAfter(packChildren(_constant_js__WEBPACK_IMPORTED_MODULE_2__["constantZero"], 1))
          .eachAfter(packChildren(padding, root.r / Math.min(dx, dy)))
          .eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));
    }
    return root;
  }

  pack.radius = function(x) {
    return arguments.length ? (radius = Object(_accessors_js__WEBPACK_IMPORTED_MODULE_1__["optional"])(x), pack) : radius;
  };

  pack.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [dx, dy];
  };

  pack.padding = function(x) {
    return arguments.length ? (padding = typeof x === "function" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+x), pack) : padding;
  };

  return pack;
});

function radiusLeaf(radius) {
  return function(node) {
    if (!node.children) {
      node.r = Math.max(0, +radius(node) || 0);
    }
  };
}

function packChildren(padding, k) {
  return function(node) {
    if (children = node.children) {
      var children,
          i,
          n = children.length,
          r = padding(node) * k || 0,
          e;

      if (r) for (i = 0; i < n; ++i) children[i].r += r;
      e = Object(_siblings_js__WEBPACK_IMPORTED_MODULE_0__["packEnclose"])(children);
      if (r) for (i = 0; i < n; ++i) children[i].r -= r;
      node.r = e + r;
    }
  };
}

function translateChild(k) {
  return function(node) {
    var parent = node.parent;
    node.r *= k;
    if (parent) {
      node.x = parent.x + k * node.x;
      node.y = parent.y + k * node.y;
    }
  };
}


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/pack/siblings.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/pack/siblings.js ***!
  \********************************************************/
/*! exports provided: packEnclose, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packEnclose", function() { return packEnclose; });
/* harmony import */ var _enclose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enclose.js */ "./node_modules/d3-hierarchy/src/pack/enclose.js");


function place(b, a, c) {
  var dx = b.x - a.x, x, a2,
      dy = b.y - a.y, y, b2,
      d2 = dx * dx + dy * dy;
  if (d2) {
    a2 = a.r + c.r, a2 *= a2;
    b2 = b.r + c.r, b2 *= b2;
    if (a2 > b2) {
      x = (d2 + b2 - a2) / (2 * d2);
      y = Math.sqrt(Math.max(0, b2 / d2 - x * x));
      c.x = b.x - x * dx - y * dy;
      c.y = b.y - x * dy + y * dx;
    } else {
      x = (d2 + a2 - b2) / (2 * d2);
      y = Math.sqrt(Math.max(0, a2 / d2 - x * x));
      c.x = a.x + x * dx - y * dy;
      c.y = a.y + x * dy + y * dx;
    }
  } else {
    c.x = a.x + c.r;
    c.y = a.y;
  }
}

function intersects(a, b) {
  var dr = a.r + b.r - 1e-6, dx = b.x - a.x, dy = b.y - a.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}

function score(node) {
  var a = node._,
      b = node.next._,
      ab = a.r + b.r,
      dx = (a.x * b.r + b.x * a.r) / ab,
      dy = (a.y * b.r + b.y * a.r) / ab;
  return dx * dx + dy * dy;
}

function Node(circle) {
  this._ = circle;
  this.next = null;
  this.previous = null;
}

function packEnclose(circles) {
  if (!(n = circles.length)) return 0;

  var a, b, c, n, aa, ca, i, j, k, sj, sk;

  // Place the first circle.
  a = circles[0], a.x = 0, a.y = 0;
  if (!(n > 1)) return a.r;

  // Place the second circle.
  b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;
  if (!(n > 2)) return a.r + b.r;

  // Place the third circle.
  place(b, a, c = circles[2]);

  // Initialize the front-chain using the first three circles a, b and c.
  a = new Node(a), b = new Node(b), c = new Node(c);
  a.next = c.previous = b;
  b.next = a.previous = c;
  c.next = b.previous = a;

  // Attempt to place each remaining circle…
  pack: for (i = 3; i < n; ++i) {
    place(a._, b._, c = circles[i]), c = new Node(c);

    // Find the closest intersecting circle on the front-chain, if any.
    // “Closeness” is determined by linear distance along the front-chain.
    // “Ahead” or “behind” is likewise determined by linear distance.
    j = b.next, k = a.previous, sj = b._.r, sk = a._.r;
    do {
      if (sj <= sk) {
        if (intersects(j._, c._)) {
          b = j, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sj += j._.r, j = j.next;
      } else {
        if (intersects(k._, c._)) {
          a = k, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sk += k._.r, k = k.previous;
      }
    } while (j !== k.next);

    // Success! Insert the new circle c between a and b.
    c.previous = a, c.next = b, a.next = b.previous = b = c;

    // Compute the new closest circle pair to the centroid.
    aa = score(a);
    while ((c = c.next) !== b) {
      if ((ca = score(c)) < aa) {
        a = c, aa = ca;
      }
    }
    b = a.next;
  }

  // Compute the enclosing circle of the front chain.
  a = [b._], c = b; while ((c = c.next) !== b) a.push(c._); c = Object(_enclose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a);

  // Translate the circles to put the enclosing circle around the origin.
  for (i = 0; i < n; ++i) a = circles[i], a.x -= c.x, a.y -= c.y;

  return c.r;
}

/* harmony default export */ __webpack_exports__["default"] = (function(circles) {
  packEnclose(circles);
  return circles;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/partition.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/partition.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _treemap_round_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treemap/round.js */ "./node_modules/d3-hierarchy/src/treemap/round.js");
/* harmony import */ var _treemap_dice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./treemap/dice.js */ "./node_modules/d3-hierarchy/src/treemap/dice.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  var dx = 1,
      dy = 1,
      padding = 0,
      round = false;

  function partition(root) {
    var n = root.height + 1;
    root.x0 =
    root.y0 = padding;
    root.x1 = dx;
    root.y1 = dy / n;
    root.eachBefore(positionNode(dy, n));
    if (round) root.eachBefore(_treemap_round_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    return root;
  }

  function positionNode(dy, n) {
    return function(node) {
      if (node.children) {
        Object(_treemap_dice_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
      }
      var x0 = node.x0,
          y0 = node.y0,
          x1 = node.x1 - padding,
          y1 = node.y1 - padding;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      node.x0 = x0;
      node.y0 = y0;
      node.x1 = x1;
      node.y1 = y1;
    };
  }

  partition.round = function(x) {
    return arguments.length ? (round = !!x, partition) : round;
  };

  partition.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [dx, dy];
  };

  partition.padding = function(x) {
    return arguments.length ? (padding = +x, partition) : padding;
  };

  return partition;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/stratify.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/stratify.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accessors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessors.js */ "./node_modules/d3-hierarchy/src/accessors.js");
/* harmony import */ var _hierarchy_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hierarchy/index.js */ "./node_modules/d3-hierarchy/src/hierarchy/index.js");



var keyPrefix = "$", // Protect against keys like “__proto__”.
    preroot = {depth: -1},
    ambiguous = {};

function defaultId(d) {
  return d.id;
}

function defaultParentId(d) {
  return d.parentId;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var id = defaultId,
      parentId = defaultParentId;

  function stratify(data) {
    var d,
        i,
        n = data.length,
        root,
        parent,
        node,
        nodes = new Array(n),
        nodeId,
        nodeKey,
        nodeByKey = {};

    for (i = 0; i < n; ++i) {
      d = data[i], node = nodes[i] = new _hierarchy_index_js__WEBPACK_IMPORTED_MODULE_1__["Node"](d);
      if ((nodeId = id(d, i, data)) != null && (nodeId += "")) {
        nodeKey = keyPrefix + (node.id = nodeId);
        nodeByKey[nodeKey] = nodeKey in nodeByKey ? ambiguous : node;
      }
    }

    for (i = 0; i < n; ++i) {
      node = nodes[i], nodeId = parentId(data[i], i, data);
      if (nodeId == null || !(nodeId += "")) {
        if (root) throw new Error("multiple roots");
        root = node;
      } else {
        parent = nodeByKey[keyPrefix + nodeId];
        if (!parent) throw new Error("missing: " + nodeId);
        if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
        if (parent.children) parent.children.push(node);
        else parent.children = [node];
        node.parent = parent;
      }
    }

    if (!root) throw new Error("no root");
    root.parent = preroot;
    root.eachBefore(function(node) { node.depth = node.parent.depth + 1; --n; }).eachBefore(_hierarchy_index_js__WEBPACK_IMPORTED_MODULE_1__["computeHeight"]);
    root.parent = null;
    if (n > 0) throw new Error("cycle");

    return root;
  }

  stratify.id = function(x) {
    return arguments.length ? (id = Object(_accessors_js__WEBPACK_IMPORTED_MODULE_0__["required"])(x), stratify) : id;
  };

  stratify.parentId = function(x) {
    return arguments.length ? (parentId = Object(_accessors_js__WEBPACK_IMPORTED_MODULE_0__["required"])(x), stratify) : parentId;
  };

  return stratify;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/tree.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-hierarchy/src/tree.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hierarchy_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hierarchy/index.js */ "./node_modules/d3-hierarchy/src/hierarchy/index.js");


function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

// function radialSeparation(a, b) {
//   return (a.parent === b.parent ? 1 : 2) / a.depth;
// }

// This function is used to traverse the left contour of a subtree (or
// subforest). It returns the successor of v on this contour. This successor is
// either given by the leftmost child of v or by the thread of v. The function
// returns null if and only if v is on the highest level of its subtree.
function nextLeft(v) {
  var children = v.children;
  return children ? children[0] : v.t;
}

// This function works analogously to nextLeft.
function nextRight(v) {
  var children = v.children;
  return children ? children[children.length - 1] : v.t;
}

// Shifts the current subtree rooted at w+. This is done by increasing
// prelim(w+) and mod(w+) by shift.
function moveSubtree(wm, wp, shift) {
  var change = shift / (wp.i - wm.i);
  wp.c -= change;
  wp.s += shift;
  wm.c += change;
  wp.z += shift;
  wp.m += shift;
}

// All other shifts, applied to the smaller subtrees between w- and w+, are
// performed by this function. To prepare the shifts, we have to adjust
// change(w+), shift(w+), and change(w-).
function executeShifts(v) {
  var shift = 0,
      change = 0,
      children = v.children,
      i = children.length,
      w;
  while (--i >= 0) {
    w = children[i];
    w.z += shift;
    w.m += shift;
    shift += w.s + (change += w.c);
  }
}

// If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
// returns the specified (default) ancestor.
function nextAncestor(vim, v, ancestor) {
  return vim.a.parent === v.parent ? vim.a : ancestor;
}

function TreeNode(node, i) {
  this._ = node;
  this.parent = null;
  this.children = null;
  this.A = null; // default ancestor
  this.a = this; // ancestor
  this.z = 0; // prelim
  this.m = 0; // mod
  this.c = 0; // change
  this.s = 0; // shift
  this.t = null; // thread
  this.i = i; // number
}

TreeNode.prototype = Object.create(_hierarchy_index_js__WEBPACK_IMPORTED_MODULE_0__["Node"].prototype);

function treeRoot(root) {
  var tree = new TreeNode(root, 0),
      node,
      nodes = [tree],
      child,
      children,
      i,
      n;

  while (node = nodes.pop()) {
    if (children = node._.children) {
      node.children = new Array(n = children.length);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new TreeNode(children[i], i));
        child.parent = node;
      }
    }
  }

  (tree.parent = new TreeNode(null, 0)).children = [tree];
  return tree;
}

// Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var separation = defaultSeparation,
      dx = 1,
      dy = 1,
      nodeSize = null;

  function tree(root) {
    var t = treeRoot(root);

    // Compute the layout using Buchheim et al.’s algorithm.
    t.eachAfter(firstWalk), t.parent.m = -t.z;
    t.eachBefore(secondWalk);

    // If a fixed node size is specified, scale x and y.
    if (nodeSize) root.eachBefore(sizeNode);

    // If a fixed tree size is specified, scale x and y based on the extent.
    // Compute the left-most, right-most, and depth-most nodes for extents.
    else {
      var left = root,
          right = root,
          bottom = root;
      root.eachBefore(function(node) {
        if (node.x < left.x) left = node;
        if (node.x > right.x) right = node;
        if (node.depth > bottom.depth) bottom = node;
      });
      var s = left === right ? 1 : separation(left, right) / 2,
          tx = s - left.x,
          kx = dx / (right.x + s + tx),
          ky = dy / (bottom.depth || 1);
      root.eachBefore(function(node) {
        node.x = (node.x + tx) * kx;
        node.y = node.depth * ky;
      });
    }

    return root;
  }

  // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
  // applied recursively to the children of v, as well as the function
  // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
  // node v is placed to the midpoint of its outermost children.
  function firstWalk(v) {
    var children = v.children,
        siblings = v.parent.children,
        w = v.i ? siblings[v.i - 1] : null;
    if (children) {
      executeShifts(v);
      var midpoint = (children[0].z + children[children.length - 1].z) / 2;
      if (w) {
        v.z = w.z + separation(v._, w._);
        v.m = v.z - midpoint;
      } else {
        v.z = midpoint;
      }
    } else if (w) {
      v.z = w.z + separation(v._, w._);
    }
    v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
  }

  // Computes all real x-coordinates by summing up the modifiers recursively.
  function secondWalk(v) {
    v._.x = v.z + v.parent.m;
    v.m += v.parent.m;
  }

  // The core of the algorithm. Here, a new subtree is combined with the
  // previous subtrees. Threads are used to traverse the inside and outside
  // contours of the left and right subtree up to the highest common level. The
  // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
  // superscript o means outside and i means inside, the subscript - means left
  // subtree and + means right subtree. For summing up the modifiers along the
  // contour, we use respective variables si+, si-, so-, and so+. Whenever two
  // nodes of the inside contours conflict, we compute the left one of the
  // greatest uncommon ancestors using the function ANCESTOR and call MOVE
  // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
  // Finally, we add a new thread (if necessary).
  function apportion(v, w, ancestor) {
    if (w) {
      var vip = v,
          vop = v,
          vim = w,
          vom = vip.parent.children[0],
          sip = vip.m,
          sop = vop.m,
          sim = vim.m,
          som = vom.m,
          shift;
      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
        vom = nextLeft(vom);
        vop = nextRight(vop);
        vop.a = v;
        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
        if (shift > 0) {
          moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
          sip += shift;
          sop += shift;
        }
        sim += vim.m;
        sip += vip.m;
        som += vom.m;
        sop += vop.m;
      }
      if (vim && !nextRight(vop)) {
        vop.t = vim;
        vop.m += sim - sop;
      }
      if (vip && !nextLeft(vom)) {
        vom.t = vip;
        vom.m += sip - som;
        ancestor = v;
      }
    }
    return ancestor;
  }

  function sizeNode(node) {
    node.x *= dx;
    node.y = node.depth * dy;
  }

  tree.separation = function(x) {
    return arguments.length ? (separation = x, tree) : separation;
  };

  tree.size = function(x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : (nodeSize ? null : [dx, dy]);
  };

  tree.nodeSize = function(x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : (nodeSize ? [dx, dy] : null);
  };

  return tree;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/binary.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/binary.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      i, n = nodes.length,
      sum, sums = new Array(n + 1);

  for (sums[0] = sum = i = 0; i < n; ++i) {
    sums[i + 1] = sum += nodes[i].value;
  }

  partition(0, n, parent.value, x0, y0, x1, y1);

  function partition(i, j, value, x0, y0, x1, y1) {
    if (i >= j - 1) {
      var node = nodes[i];
      node.x0 = x0, node.y0 = y0;
      node.x1 = x1, node.y1 = y1;
      return;
    }

    var valueOffset = sums[i],
        valueTarget = (value / 2) + valueOffset,
        k = i + 1,
        hi = j - 1;

    while (k < hi) {
      var mid = k + hi >>> 1;
      if (sums[mid] < valueTarget) k = mid + 1;
      else hi = mid;
    }

    if ((valueTarget - sums[k - 1]) < (sums[k] - valueTarget) && i + 1 < k) --k;

    var valueLeft = sums[k] - valueOffset,
        valueRight = value - valueLeft;

    if ((x1 - x0) > (y1 - y0)) {
      var xk = (x0 * valueRight + x1 * valueLeft) / value;
      partition(i, k, valueLeft, x0, y0, xk, y1);
      partition(k, j, valueRight, xk, y0, x1, y1);
    } else {
      var yk = (y0 * valueRight + y1 * valueLeft) / value;
      partition(i, k, valueLeft, x0, y0, x1, yk);
      partition(k, j, valueRight, x0, yk, x1, y1);
    }
  }
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/dice.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/dice.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (x1 - x0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.y0 = y0, node.y1 = y1;
    node.x0 = x0, node.x1 = x0 += node.value * k;
  }
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/index.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _round_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round.js */ "./node_modules/d3-hierarchy/src/treemap/round.js");
/* harmony import */ var _squarify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./squarify.js */ "./node_modules/d3-hierarchy/src/treemap/squarify.js");
/* harmony import */ var _accessors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessors.js */ "./node_modules/d3-hierarchy/src/accessors.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant.js */ "./node_modules/d3-hierarchy/src/constant.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var tile = _squarify_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      round = false,
      dx = 1,
      dy = 1,
      paddingStack = [0],
      paddingInner = _constant_js__WEBPACK_IMPORTED_MODULE_3__["constantZero"],
      paddingTop = _constant_js__WEBPACK_IMPORTED_MODULE_3__["constantZero"],
      paddingRight = _constant_js__WEBPACK_IMPORTED_MODULE_3__["constantZero"],
      paddingBottom = _constant_js__WEBPACK_IMPORTED_MODULE_3__["constantZero"],
      paddingLeft = _constant_js__WEBPACK_IMPORTED_MODULE_3__["constantZero"];

  function treemap(root) {
    root.x0 =
    root.y0 = 0;
    root.x1 = dx;
    root.y1 = dy;
    root.eachBefore(positionNode);
    paddingStack = [0];
    if (round) root.eachBefore(_round_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    return root;
  }

  function positionNode(node) {
    var p = paddingStack[node.depth],
        x0 = node.x0 + p,
        y0 = node.y0 + p,
        x1 = node.x1 - p,
        y1 = node.y1 - p;
    if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
    if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
    node.x0 = x0;
    node.y0 = y0;
    node.x1 = x1;
    node.y1 = y1;
    if (node.children) {
      p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
      x0 += paddingLeft(node) - p;
      y0 += paddingTop(node) - p;
      x1 -= paddingRight(node) - p;
      y1 -= paddingBottom(node) - p;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      tile(node, x0, y0, x1, y1);
    }
  }

  treemap.round = function(x) {
    return arguments.length ? (round = !!x, treemap) : round;
  };

  treemap.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
  };

  treemap.tile = function(x) {
    return arguments.length ? (tile = Object(_accessors_js__WEBPACK_IMPORTED_MODULE_2__["required"])(x), treemap) : tile;
  };

  treemap.padding = function(x) {
    return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
  };

  treemap.paddingInner = function(x) {
    return arguments.length ? (paddingInner = typeof x === "function" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingInner;
  };

  treemap.paddingOuter = function(x) {
    return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
  };

  treemap.paddingTop = function(x) {
    return arguments.length ? (paddingTop = typeof x === "function" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingTop;
  };

  treemap.paddingRight = function(x) {
    return arguments.length ? (paddingRight = typeof x === "function" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingRight;
  };

  treemap.paddingBottom = function(x) {
    return arguments.length ? (paddingBottom = typeof x === "function" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingBottom;
  };

  treemap.paddingLeft = function(x) {
    return arguments.length ? (paddingLeft = typeof x === "function" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingLeft;
  };

  return treemap;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/resquarify.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/resquarify.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice.js */ "./node_modules/d3-hierarchy/src/treemap/dice.js");
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice.js */ "./node_modules/d3-hierarchy/src/treemap/slice.js");
/* harmony import */ var _squarify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./squarify.js */ "./node_modules/d3-hierarchy/src/treemap/squarify.js");




/* harmony default export */ __webpack_exports__["default"] = ((function custom(ratio) {

  function resquarify(parent, x0, y0, x1, y1) {
    if ((rows = parent._squarify) && (rows.ratio === ratio)) {
      var rows,
          row,
          nodes,
          i,
          j = -1,
          n,
          m = rows.length,
          value = parent.value;

      while (++j < m) {
        row = rows[j], nodes = row.children;
        for (i = row.value = 0, n = nodes.length; i < n; ++i) row.value += nodes[i].value;
        if (row.dice) Object(_dice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(row, x0, y0, x1, y0 += (y1 - y0) * row.value / value);
        else Object(_slice_js__WEBPACK_IMPORTED_MODULE_1__["default"])(row, x0, y0, x0 += (x1 - x0) * row.value / value, y1);
        value -= row.value;
      }
    } else {
      parent._squarify = rows = Object(_squarify_js__WEBPACK_IMPORTED_MODULE_2__["squarifyRatio"])(ratio, parent, x0, y0, x1, y1);
      rows.ratio = ratio;
    }
  }

  resquarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return resquarify;
})(_squarify_js__WEBPACK_IMPORTED_MODULE_2__["phi"]));


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/round.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/round.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(node) {
  node.x0 = Math.round(node.x0);
  node.y0 = Math.round(node.y0);
  node.x1 = Math.round(node.x1);
  node.y1 = Math.round(node.y1);
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/slice.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/slice.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (y1 - y0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.x0 = x0, node.x1 = x1;
    node.y0 = y0, node.y1 = y0 += node.value * k;
  }
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/sliceDice.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/sliceDice.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice.js */ "./node_modules/d3-hierarchy/src/treemap/dice.js");
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice.js */ "./node_modules/d3-hierarchy/src/treemap/slice.js");



/* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
  (parent.depth & 1 ? _slice_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _dice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(parent, x0, y0, x1, y1);
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/squarify.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/squarify.js ***!
  \***********************************************************/
/*! exports provided: phi, squarifyRatio, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phi", function() { return phi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squarifyRatio", function() { return squarifyRatio; });
/* harmony import */ var _dice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice.js */ "./node_modules/d3-hierarchy/src/treemap/dice.js");
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice.js */ "./node_modules/d3-hierarchy/src/treemap/slice.js");



var phi = (1 + Math.sqrt(5)) / 2;

function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
  var rows = [],
      nodes = parent.children,
      row,
      nodeValue,
      i0 = 0,
      i1 = 0,
      n = nodes.length,
      dx, dy,
      value = parent.value,
      sumValue,
      minValue,
      maxValue,
      newRatio,
      minRatio,
      alpha,
      beta;

  while (i0 < n) {
    dx = x1 - x0, dy = y1 - y0;

    // Find the next non-empty node.
    do sumValue = nodes[i1++].value; while (!sumValue && i1 < n);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);

    // Keep adding nodes while the aspect ratio maintains or improves.
    for (; i1 < n; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue) minValue = nodeValue;
      if (nodeValue > maxValue) maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) { sumValue -= nodeValue; break; }
      minRatio = newRatio;
    }

    // Position and record the row orientation.
    rows.push(row = {value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1)});
    if (row.dice) Object(_dice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
    else Object(_slice_js__WEBPACK_IMPORTED_MODULE_1__["default"])(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
    value -= sumValue, i0 = i1;
  }

  return rows;
}

/* harmony default export */ __webpack_exports__["default"] = ((function custom(ratio) {

  function squarify(parent, x0, y0, x1, y1) {
    squarifyRatio(ratio, parent, x0, y0, x1, y1);
  }

  squarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return squarify;
})(phi));


/***/ }),

/***/ "./node_modules/d3-interpolate/src/array.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/array.js ***!
  \**************************************************/
/*! exports provided: default, genericArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genericArray", function() { return genericArray; });
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ "./node_modules/d3-interpolate/src/value.js");
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numberArray.js */ "./node_modules/d3-interpolate/src/numberArray.js");



/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return (Object(_numberArray_js__WEBPACK_IMPORTED_MODULE_1__["isNumberArray"])(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_1__["default"] : genericArray)(a, b);
});

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(_value_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basis.js ***!
  \**************************************************/
/*! exports provided: basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basis", function() { return basis; });
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basisClosed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(_basis_js__WEBPACK_IMPORTED_MODULE_0__["basis"])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/color.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/color.js ***!
  \**************************************************/
/*! exports provided: hue, gamma, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hue", function() { return hue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamma", function() { return gamma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nogamma; });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-interpolate/src/constant.js");


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/constant.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/cubehelix.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/cubehelix.js ***!
  \******************************************************/
/*! exports provided: default, cubehelixLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubehelixLong", function() { return cubehelixLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(end)).h),
          s = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
          l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
          opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* harmony default export */ __webpack_exports__["default"] = (cubehelix(_color_js__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var cubehelixLong = cubehelix(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/date.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/date.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/discrete.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/discrete.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hcl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hcl.js ***!
  \************************************************/
/*! exports provided: default, hclLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hclLong", function() { return hclLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(end)).h),
        c = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.c, end.c),
        l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hcl(_color_js__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hclLong = hcl(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hsl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hsl.js ***!
  \************************************************/
/*! exports provided: default, hslLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslLong", function() { return hslLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(end)).h),
        s = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
        l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hsl(_color_js__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hslLong = hsl(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hue.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hue.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var i = Object(_color_js__WEBPACK_IMPORTED_MODULE_0__["hue"])(+a, +b);
  return function(t) {
    var x = i(t);
    return x - 360 * Math.floor(x / 360);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/index.js ***!
  \**************************************************/
/*! exports provided: interpolate, interpolateArray, interpolateBasis, interpolateBasisClosed, interpolateDate, interpolateDiscrete, interpolateHue, interpolateNumber, interpolateNumberArray, interpolateObject, interpolateRound, interpolateString, interpolateTransformCss, interpolateTransformSvg, interpolateZoom, interpolateRgb, interpolateRgbBasis, interpolateRgbBasisClosed, interpolateHsl, interpolateHslLong, interpolateLab, interpolateHcl, interpolateHclLong, interpolateCubehelix, interpolateCubehelixLong, piecewise, quantize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ "./node_modules/d3-interpolate/src/value.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return _value_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array.js */ "./node_modules/d3-interpolate/src/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateArray", function() { return _array_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasis", function() { return _basis_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basisClosed.js */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasisClosed", function() { return _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date.js */ "./node_modules/d3-interpolate/src/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateDate", function() { return _date_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _discrete_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discrete.js */ "./node_modules/d3-interpolate/src/discrete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateDiscrete", function() { return _discrete_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _hue_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hue.js */ "./node_modules/d3-interpolate/src/hue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHue", function() { return _hue_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-interpolate/src/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateNumber", function() { return _number_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./numberArray.js */ "./node_modules/d3-interpolate/src/numberArray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateNumberArray", function() { return _numberArray_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./object.js */ "./node_modules/d3-interpolate/src/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateObject", function() { return _object_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _round_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./round.js */ "./node_modules/d3-interpolate/src/round.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRound", function() { return _round_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./string.js */ "./node_modules/d3-interpolate/src/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _transform_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transform/index.js */ "./node_modules/d3-interpolate/src/transform/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return _transform_index_js__WEBPACK_IMPORTED_MODULE_12__["interpolateTransformCss"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return _transform_index_js__WEBPACK_IMPORTED_MODULE_12__["interpolateTransformSvg"]; });

/* harmony import */ var _zoom_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./zoom.js */ "./node_modules/d3-interpolate/src/zoom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateZoom", function() { return _zoom_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rgb.js */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgb", function() { return _rgb_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasis", function() { return _rgb_js__WEBPACK_IMPORTED_MODULE_14__["rgbBasis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasisClosed", function() { return _rgb_js__WEBPACK_IMPORTED_MODULE_14__["rgbBasisClosed"]; });

/* harmony import */ var _hsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hsl.js */ "./node_modules/d3-interpolate/src/hsl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHsl", function() { return _hsl_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHslLong", function() { return _hsl_js__WEBPACK_IMPORTED_MODULE_15__["hslLong"]; });

/* harmony import */ var _lab_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lab.js */ "./node_modules/d3-interpolate/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateLab", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _hcl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hcl.js */ "./node_modules/d3-interpolate/src/hcl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHcl", function() { return _hcl_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHclLong", function() { return _hcl_js__WEBPACK_IMPORTED_MODULE_17__["hclLong"]; });

/* harmony import */ var _cubehelix_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cubehelix.js */ "./node_modules/d3-interpolate/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelix", function() { return _cubehelix_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixLong", function() { return _cubehelix_js__WEBPACK_IMPORTED_MODULE_18__["cubehelixLong"]; });

/* harmony import */ var _piecewise_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./piecewise.js */ "./node_modules/d3-interpolate/src/piecewise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "piecewise", function() { return _piecewise_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _quantize_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./quantize.js */ "./node_modules/d3-interpolate/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return _quantize_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });
























/***/ }),

/***/ "./node_modules/d3-interpolate/src/lab.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/lab.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lab; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");



function lab(start, end) {
  var l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(start)).l, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(end)).l),
      a = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.a, end.a),
      b = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.b, end.b),
      opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/number.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/number.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/numberArray.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/numberArray.js ***!
  \********************************************************/
/*! exports provided: default, isNumberArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberArray", function() { return isNumberArray; });
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
});

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/object.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/object.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ "./node_modules/d3-interpolate/src/value.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(_value_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/piecewise.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/piecewise.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return piecewise; });
function piecewise(interpolate, values) {
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/quantize.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/quantize.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/rgb.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/rgb.js ***!
  \************************************************/
/*! exports provided: default, rgbBasis, rgbBasisClosed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasis", function() { return rgbBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasisClosed", function() { return rgbBasisClosed; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basisClosed.js */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");





/* harmony default export */ __webpack_exports__["default"] = ((function rgbGamma(y) {
  var color = Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["gamma"])(y);

  function rgb(start, end) {
    var r = color((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(start)).r, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(_basis_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
var rgbBasisClosed = rgbSpline(_basisClosed_js__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/round.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/round.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/string.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/string.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-interpolate/src/number.js");


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/decompose.js ***!
  \****************************************************************/
/*! exports provided: identity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["default"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/index.js ***!
  \************************************************************/
/*! exports provided: interpolateTransformCss, interpolateTransformSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return interpolateTransformCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return interpolateTransformSvg; });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../number.js */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ "./node_modules/d3-interpolate/src/transform/parse.js");



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__["parseCss"], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__["parseSvg"], ", ", ")", ")");


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/parse.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/parse.js ***!
  \************************************************************/
/*! exports provided: parseCss, parseSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCss", function() { return parseCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSvg", function() { return parseSvg; });
/* harmony import */ var _decompose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decompose.js */ "./node_modules/d3-interpolate/src/transform/decompose.js");


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return _decompose_js__WEBPACK_IMPORTED_MODULE_0__["identity"];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return Object(_decompose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__["identity"];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__["identity"];
  value = value.matrix;
  return Object(_decompose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/value.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/value.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgb.js */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array.js */ "./node_modules/d3-interpolate/src/array.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date.js */ "./node_modules/d3-interpolate/src/date.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object.js */ "./node_modules/d3-interpolate/src/object.js");
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./string.js */ "./node_modules/d3-interpolate/src/string.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-interpolate/src/constant.js");
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./numberArray.js */ "./node_modules/d3-interpolate/src/numberArray.js");










/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? Object(_constant_js__WEBPACK_IMPORTED_MODULE_7__["default"])(b)
      : (t === "number" ? _number_js__WEBPACK_IMPORTED_MODULE_4__["default"]
      : t === "string" ? ((c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["color"])(b)) ? (b = c, _rgb_js__WEBPACK_IMPORTED_MODULE_1__["default"]) : _string_js__WEBPACK_IMPORTED_MODULE_6__["default"])
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__["color"] ? _rgb_js__WEBPACK_IMPORTED_MODULE_1__["default"]
      : b instanceof Date ? _date_js__WEBPACK_IMPORTED_MODULE_3__["default"]
      : Object(_numberArray_js__WEBPACK_IMPORTED_MODULE_8__["isNumberArray"])(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_8__["default"]
      : Array.isArray(b) ? _array_js__WEBPACK_IMPORTED_MODULE_2__["genericArray"]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _object_js__WEBPACK_IMPORTED_MODULE_5__["default"]
      : _number_js__WEBPACK_IMPORTED_MODULE_4__["default"])(a, b);
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/zoom.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/zoom.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* harmony default export */ __webpack_exports__["default"] = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),

/***/ "./node_modules/d3-path/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-path/src/index.js ***!
  \*******************************************/
/*! exports provided: path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path.js */ "./node_modules/d3-path/src/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "path", function() { return _path_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/d3-path/src/path.js":
/*!******************************************!*\
  !*** ./node_modules/d3-path/src/path.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (path);


/***/ }),

/***/ "./node_modules/d3-selection/src/constant.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/constant.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-selection/src/create.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/create.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creator */ "./node_modules/d3-selection/src/creator.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select */ "./node_modules/d3-selection/src/select.js");



/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  return Object(_select__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_creator__WEBPACK_IMPORTED_MODULE_0__["default"])(name).call(document.documentElement));
});


/***/ }),

/***/ "./node_modules/d3-selection/src/creator.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/creator.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespace */ "./node_modules/d3-selection/src/namespace.js");
/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./namespaces */ "./node_modules/d3-selection/src/namespaces.js");



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === _namespaces__WEBPACK_IMPORTED_MODULE_1__["xhtml"] && document.documentElement.namespaceURI === _namespaces__WEBPACK_IMPORTED_MODULE_1__["xhtml"]
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var fullname = Object(_namespace__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/index.js ***!
  \************************************************/
/*! exports provided: create, creator, local, matcher, mouse, namespace, namespaces, clientPoint, select, selectAll, selection, selector, selectorAll, style, touch, touches, window, event, customEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/d3-selection/src/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _create__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creator */ "./node_modules/d3-selection/src/creator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "creator", function() { return _creator__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local */ "./node_modules/d3-selection/src/local.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "local", function() { return _local__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matcher */ "./node_modules/d3-selection/src/matcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return _matcher__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _mouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mouse */ "./node_modules/d3-selection/src/mouse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return _mouse__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./namespace */ "./node_modules/d3-selection/src/namespace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return _namespace__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./namespaces */ "./node_modules/d3-selection/src/namespaces.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespaces", function() { return _namespaces__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clientPoint", function() { return _point__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select */ "./node_modules/d3-selection/src/select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _select__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _selectAll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selectAll */ "./node_modules/d3-selection/src/selectAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _selectAll__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selection/index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selection", function() { return _selection_index__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selector */ "./node_modules/d3-selection/src/selector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return _selector__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _selectorAll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selectorAll */ "./node_modules/d3-selection/src/selectorAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectorAll", function() { return _selectorAll__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _selection_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./selection/style */ "./node_modules/d3-selection/src/selection/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style", function() { return _selection_style__WEBPACK_IMPORTED_MODULE_13__["styleValue"]; });

/* harmony import */ var _touch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./touch */ "./node_modules/d3-selection/src/touch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "touch", function() { return _touch__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _touches__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./touches */ "./node_modules/d3-selection/src/touches.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "touches", function() { return _touches__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./window */ "./node_modules/d3-selection/src/window.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _window__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _selection_on__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./selection/on */ "./node_modules/d3-selection/src/selection/on.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "event", function() { return _selection_on__WEBPACK_IMPORTED_MODULE_17__["event"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return _selection_on__WEBPACK_IMPORTED_MODULE_17__["customEvent"]; });





















/***/ }),

/***/ "./node_modules/d3-selection/src/local.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/local.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return local; });
var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};


/***/ }),

/***/ "./node_modules/d3-selection/src/matcher.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/matcher.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return function() {
    return this.matches(selector);
  };
});


/***/ }),

/***/ "./node_modules/d3-selection/src/mouse.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/mouse.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent */ "./node_modules/d3-selection/src/sourceEvent.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");



/* harmony default export */ __webpack_exports__["default"] = (function(node) {
  var event = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (event.changedTouches) event = event.changedTouches[0];
  return Object(_point__WEBPACK_IMPORTED_MODULE_1__["default"])(node, event);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/namespace.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespace.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _namespaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespaces */ "./node_modules/d3-selection/src/namespaces.js");


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProperty(prefix) ? {space: _namespaces__WEBPACK_IMPORTED_MODULE_0__["default"][prefix], local: name} : name;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/namespaces.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-selection/src/namespaces.js ***!
  \*****************************************************/
/*! exports provided: xhtml, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xhtml", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ __webpack_exports__["default"] = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),

/***/ "./node_modules/d3-selection/src/point.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/point.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
});


/***/ }),

/***/ "./node_modules/d3-selection/src/select.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/select.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return typeof selector === "string"
      ? new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([[document.querySelector(selector)]], [document.documentElement])
      : new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([[selector]], _selection_index__WEBPACK_IMPORTED_MODULE_0__["root"]);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selectAll.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/selectAll.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return typeof selector === "string"
      ? new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([document.querySelectorAll(selector)], [document.documentElement])
      : new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([selector == null ? [] : selector], _selection_index__WEBPACK_IMPORTED_MODULE_0__["root"]);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/append.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/append.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator */ "./node_modules/d3-selection/src/creator.js");


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var create = typeof name === "function" ? name : Object(_creator__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/attr.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/attr.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../namespace */ "./node_modules/d3-selection/src/namespace.js");


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var fullname = Object(_namespace__WEBPACK_IMPORTED_MODULE_0__["default"])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/call.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/call.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/classed.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/classed.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/clone.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/clone.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/* harmony default export */ __webpack_exports__["default"] = (function(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/data.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/data.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _enter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enter */ "./node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./node_modules/d3-selection/src/constant.js");




var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new _enter__WEBPACK_IMPORTED_MODULE_1__["EnterNode"](parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new _enter__WEBPACK_IMPORTED_MODULE_1__["EnterNode"](parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/datum.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/datum.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/dispatch.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/dispatch.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window */ "./node_modules/d3-selection/src/window.js");


function dispatchEvent(node, type, params) {
  var window = Object(_window__WEBPACK_IMPORTED_MODULE_0__["default"])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/each.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/each.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/empty.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/empty.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  return !this.node();
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/enter.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/enter.js ***!
  \**********************************************************/
/*! exports provided: default, EnterNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterNode", function() { return EnterNode; });
/* harmony import */ var _sparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sparse */ "./node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new _index__WEBPACK_IMPORTED_MODULE_1__["Selection"](this._enter || this._groups.map(_sparse__WEBPACK_IMPORTED_MODULE_0__["default"]), this._parents);
});

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/exit.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/exit.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sparse */ "./node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new _index__WEBPACK_IMPORTED_MODULE_1__["Selection"](this._exit || this._groups.map(_sparse__WEBPACK_IMPORTED_MODULE_0__["default"]), this._parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/filter.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/filter.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _matcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../matcher */ "./node_modules/d3-selection/src/matcher.js");



/* harmony default export */ __webpack_exports__["default"] = (function(match) {
  if (typeof match !== "function") match = Object(_matcher__WEBPACK_IMPORTED_MODULE_1__["default"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, this._parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/html.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/html.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/index.js ***!
  \**********************************************************/
/*! exports provided: root, Selection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select */ "./node_modules/d3-selection/src/selection/select.js");
/* harmony import */ var _selectAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectAll */ "./node_modules/d3-selection/src/selection/selectAll.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ "./node_modules/d3-selection/src/selection/filter.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./node_modules/d3-selection/src/selection/data.js");
/* harmony import */ var _enter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enter */ "./node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _exit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exit */ "./node_modules/d3-selection/src/selection/exit.js");
/* harmony import */ var _join__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./join */ "./node_modules/d3-selection/src/selection/join.js");
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./merge */ "./node_modules/d3-selection/src/selection/merge.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order */ "./node_modules/d3-selection/src/selection/order.js");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sort */ "./node_modules/d3-selection/src/selection/sort.js");
/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./call */ "./node_modules/d3-selection/src/selection/call.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nodes */ "./node_modules/d3-selection/src/selection/nodes.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node */ "./node_modules/d3-selection/src/selection/node.js");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./size */ "./node_modules/d3-selection/src/selection/size.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./empty */ "./node_modules/d3-selection/src/selection/empty.js");
/* harmony import */ var _each__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./each */ "./node_modules/d3-selection/src/selection/each.js");
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./attr */ "./node_modules/d3-selection/src/selection/attr.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./style */ "./node_modules/d3-selection/src/selection/style.js");
/* harmony import */ var _property__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./property */ "./node_modules/d3-selection/src/selection/property.js");
/* harmony import */ var _classed__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./classed */ "./node_modules/d3-selection/src/selection/classed.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./text */ "./node_modules/d3-selection/src/selection/text.js");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./html */ "./node_modules/d3-selection/src/selection/html.js");
/* harmony import */ var _raise__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./raise */ "./node_modules/d3-selection/src/selection/raise.js");
/* harmony import */ var _lower__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lower */ "./node_modules/d3-selection/src/selection/lower.js");
/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./append */ "./node_modules/d3-selection/src/selection/append.js");
/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./insert */ "./node_modules/d3-selection/src/selection/insert.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./remove */ "./node_modules/d3-selection/src/selection/remove.js");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./clone */ "./node_modules/d3-selection/src/selection/clone.js");
/* harmony import */ var _datum__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./datum */ "./node_modules/d3-selection/src/selection/datum.js");
/* harmony import */ var _on__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./on */ "./node_modules/d3-selection/src/selection/on.js");
/* harmony import */ var _dispatch__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dispatch */ "./node_modules/d3-selection/src/selection/dispatch.js");
































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: _select__WEBPACK_IMPORTED_MODULE_0__["default"],
  selectAll: _selectAll__WEBPACK_IMPORTED_MODULE_1__["default"],
  filter: _filter__WEBPACK_IMPORTED_MODULE_2__["default"],
  data: _data__WEBPACK_IMPORTED_MODULE_3__["default"],
  enter: _enter__WEBPACK_IMPORTED_MODULE_4__["default"],
  exit: _exit__WEBPACK_IMPORTED_MODULE_5__["default"],
  join: _join__WEBPACK_IMPORTED_MODULE_6__["default"],
  merge: _merge__WEBPACK_IMPORTED_MODULE_7__["default"],
  order: _order__WEBPACK_IMPORTED_MODULE_8__["default"],
  sort: _sort__WEBPACK_IMPORTED_MODULE_9__["default"],
  call: _call__WEBPACK_IMPORTED_MODULE_10__["default"],
  nodes: _nodes__WEBPACK_IMPORTED_MODULE_11__["default"],
  node: _node__WEBPACK_IMPORTED_MODULE_12__["default"],
  size: _size__WEBPACK_IMPORTED_MODULE_13__["default"],
  empty: _empty__WEBPACK_IMPORTED_MODULE_14__["default"],
  each: _each__WEBPACK_IMPORTED_MODULE_15__["default"],
  attr: _attr__WEBPACK_IMPORTED_MODULE_16__["default"],
  style: _style__WEBPACK_IMPORTED_MODULE_17__["default"],
  property: _property__WEBPACK_IMPORTED_MODULE_18__["default"],
  classed: _classed__WEBPACK_IMPORTED_MODULE_19__["default"],
  text: _text__WEBPACK_IMPORTED_MODULE_20__["default"],
  html: _html__WEBPACK_IMPORTED_MODULE_21__["default"],
  raise: _raise__WEBPACK_IMPORTED_MODULE_22__["default"],
  lower: _lower__WEBPACK_IMPORTED_MODULE_23__["default"],
  append: _append__WEBPACK_IMPORTED_MODULE_24__["default"],
  insert: _insert__WEBPACK_IMPORTED_MODULE_25__["default"],
  remove: _remove__WEBPACK_IMPORTED_MODULE_26__["default"],
  clone: _clone__WEBPACK_IMPORTED_MODULE_27__["default"],
  datum: _datum__WEBPACK_IMPORTED_MODULE_28__["default"],
  on: _on__WEBPACK_IMPORTED_MODULE_29__["default"],
  dispatch: _dispatch__WEBPACK_IMPORTED_MODULE_30__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = (selection);


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/insert.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/insert.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator */ "./node_modules/d3-selection/src/creator.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector */ "./node_modules/d3-selection/src/selector.js");



function constantNull() {
  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, before) {
  var create = typeof name === "function" ? name : Object(_creator__WEBPACK_IMPORTED_MODULE_0__["default"])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : Object(_selector__WEBPACK_IMPORTED_MODULE_1__["default"])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/join.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/join.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/lower.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/lower.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(lower);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/merge.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/merge.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](merges, this._parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/node.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/node.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/nodes.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/nodes.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/on.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/on.js ***!
  \*******************************************************/
/*! exports provided: event, default, customEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return customEvent; });
var filterEvents = {};

var event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
});

function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    event = event0;
  }
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/order.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/order.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/property.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/property.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/raise.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/raise.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(raise);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/remove.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/remove.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(remove);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/select.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/select.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector */ "./node_modules/d3-selection/src/selector.js");



/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  if (typeof select !== "function") select = Object(_selector__WEBPACK_IMPORTED_MODULE_1__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, this._parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/selectAll.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/selectAll.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _selectorAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectorAll */ "./node_modules/d3-selection/src/selectorAll.js");



/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  if (typeof select !== "function") select = Object(_selectorAll__WEBPACK_IMPORTED_MODULE_1__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, parents);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/size.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/size.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sort.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sort.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new _index__WEBPACK_IMPORTED_MODULE_0__["Selection"](sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/sparse.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/sparse.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(update) {
  return new Array(update.length);
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/style.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/style.js ***!
  \**********************************************************/
/*! exports provided: default, styleValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleValue", function() { return styleValue; });
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window */ "./node_modules/d3-selection/src/window.js");


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
});

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || Object(_window__WEBPACK_IMPORTED_MODULE_0__["default"])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),

/***/ "./node_modules/d3-selection/src/selection/text.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-selection/src/selection/text.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selector.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-selection/src/selector.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function none() {}

/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
});


/***/ }),

/***/ "./node_modules/d3-selection/src/selectorAll.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/selectorAll.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function empty() {
  return [];
}

/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
});


/***/ }),

/***/ "./node_modules/d3-selection/src/sourceEvent.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-selection/src/sourceEvent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_on__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/on */ "./node_modules/d3-selection/src/selection/on.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var current = _selection_on__WEBPACK_IMPORTED_MODULE_0__["event"], source;
  while (source = current.sourceEvent) current = source;
  return current;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/touch.js":
/*!************************************************!*\
  !*** ./node_modules/d3-selection/src/touch.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent */ "./node_modules/d3-selection/src/sourceEvent.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");



/* harmony default export */ __webpack_exports__["default"] = (function(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__["default"])().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return Object(_point__WEBPACK_IMPORTED_MODULE_1__["default"])(node, touch);
    }
  }

  return null;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/touches.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-selection/src/touches.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sourceEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent */ "./node_modules/d3-selection/src/sourceEvent.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./node_modules/d3-selection/src/point.js");



/* harmony default export */ __webpack_exports__["default"] = (function(node, touches) {
  if (touches == null) touches = Object(_sourceEvent__WEBPACK_IMPORTED_MODULE_0__["default"])().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = Object(_point__WEBPACK_IMPORTED_MODULE_1__["default"])(node, touches[i]);
  }

  return points;
});


/***/ }),

/***/ "./node_modules/d3-selection/src/window.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-selection/src/window.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
});


/***/ }),

/***/ "./node_modules/d3-shape/src/arc.js":
/*!******************************************!*\
  !*** ./node_modules/d3-shape/src/arc.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.js */ "./node_modules/d3-shape/src/math.js");




function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = y32 * x10 - x32 * y10;
  if (t * t < _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) return;
  t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["max"])(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - _math_js__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
        a1 = endAngle.apply(this, arguments) - _math_js__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
        da = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["abs"])(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > _math_js__WEBPACK_IMPORTED_MODULE_2__["tau"] - _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
      context.moveTo(r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a0), r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        context.moveTo(r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a1), r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) && (padRadius ? +padRadius.apply(this, arguments) : Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(r0 * r0 + r1 * r1)),
          rc = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["min"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["abs"])(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        var p0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["asin"])(rp / r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap)),
            p1 = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["asin"])(rp / r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap));
        if ((da0 -= p0 * 2) > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a01),
          y01 = r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a01),
          x10 = r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a10),
          y10 = r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a10);

      // Apply rounded corners?
      if (rc > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        var x11 = r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a11),
            y11 = r1 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a11),
            x00 = r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a00),
            y00 = r0 * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a00),
            oc;

        // Restrict the corner radius according to the sector angle.
        if (da < _math_js__WEBPACK_IMPORTED_MODULE_2__["pi"] && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
          var ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["acos"])((ax * bx + ay * by) / (Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(ax * ax + ay * ay) * Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(bx * bx + by * by))) / 2),
              lc = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["min"])(rc, (r0 - lc) / (kc - 1));
          rc1 = Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["min"])(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y11, t1.x11), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) || !(da0 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > _math_js__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y11, t1.x11), Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - _math_js__WEBPACK_IMPORTED_MODULE_2__["pi"] / 2;
    return [Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["cos"])(a) * r, Object(_math_js__WEBPACK_IMPORTED_MODULE_2__["sin"])(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/area.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/area.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _curve_linear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curve/linear.js */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony import */ var _line_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line.js */ "./node_modules/d3-shape/src/line.js");
/* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point.js */ "./node_modules/d3-shape/src/point.js");






/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x0 = _point_js__WEBPACK_IMPORTED_MODULE_4__["x"],
      x1 = null,
      y0 = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
      y1 = _point_js__WEBPACK_IMPORTED_MODULE_4__["y"],
      defined = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(true),
      context = null,
      curve = _curve_linear_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return Object(_line_js__WEBPACK_IMPORTED_MODULE_3__["default"])().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/areaRadial.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/areaRadial.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curve_radial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve/radial.js */ "./node_modules/d3-shape/src/curve/radial.js");
/* harmony import */ var _area_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area.js */ "./node_modules/d3-shape/src/area.js");
/* harmony import */ var _lineRadial_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lineRadial.js */ "./node_modules/d3-shape/src/lineRadial.js");




/* harmony default export */ __webpack_exports__["default"] = (function() {
  var a = Object(_area_js__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial_js__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function() { return Object(_lineRadial_js__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(x0()); }, delete a.lineX0;
  a.lineEndAngle = function() { return Object(_lineRadial_js__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(x1()); }, delete a.lineX1;
  a.lineInnerRadius = function() { return Object(_lineRadial_js__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(y0()); }, delete a.lineY0;
  a.lineOuterRadius = function() { return Object(_lineRadial_js__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(y1()); }, delete a.lineY1;

  a.curve = function(_) {
    return arguments.length ? c(Object(_curve_radial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
  };

  return a;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/array.js ***!
  \********************************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),

/***/ "./node_modules/d3-shape/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-shape/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function constant() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basis.js ***!
  \**************************************************/
/*! exports provided: point, Basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basis", function() { return Basis; });
function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Basis(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basisClosed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop.js */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-shape/src/curve/basis.js");



function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: Object(_basis_js__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new BasisClosed(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisOpen.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basisOpen.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-shape/src/curve/basis.js");


function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: Object(_basis_js__WEBPACK_IMPORTED_MODULE_0__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new BasisOpen(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/bundle.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/bundle.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-shape/src/curve/basis.js");


function Bundle(context, beta) {
  this._basis = new _basis_js__WEBPACK_IMPORTED_MODULE_0__["Basis"](context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new _basis_js__WEBPACK_IMPORTED_MODULE_0__["Basis"](context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinal.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinal.js ***!
  \*****************************************************/
/*! exports provided: point, Cardinal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cardinal", function() { return Cardinal; });
function point(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalClosed.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinalClosed.js ***!
  \***********************************************************/
/*! exports provided: CardinalClosed, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardinalClosed", function() { return CardinalClosed; });
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop.js */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _cardinal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardinal.js */ "./node_modules/d3-shape/src/curve/cardinal.js");



function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(_cardinal_js__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalOpen.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinalOpen.js ***!
  \*********************************************************/
/*! exports provided: CardinalOpen, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardinalOpen", function() { return CardinalOpen; });
/* harmony import */ var _cardinal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinal.js */ "./node_modules/d3-shape/src/curve/cardinal.js");


function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(_cardinal_js__WEBPACK_IMPORTED_MODULE_0__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRom.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRom.js ***!
  \*******************************************************/
/*! exports provided: point, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ "./node_modules/d3-shape/src/math.js");
/* harmony import */ var _cardinal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardinal.js */ "./node_modules/d3-shape/src/curve/cardinal.js");



function point(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > _math_js__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new _cardinal_js__WEBPACK_IMPORTED_MODULE_1__["Cardinal"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomClosed.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRomClosed.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardinalClosed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinalClosed.js */ "./node_modules/d3-shape/src/curve/cardinalClosed.js");
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../noop.js */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _catmullRom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catmullRom.js */ "./node_modules/d3-shape/src/curve/catmullRom.js");




function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  areaEnd: _noop_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(_catmullRom_js__WEBPACK_IMPORTED_MODULE_2__["point"])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new _cardinalClosed_js__WEBPACK_IMPORTED_MODULE_0__["CardinalClosed"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomOpen.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRomOpen.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardinalOpen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinalOpen.js */ "./node_modules/d3-shape/src/curve/cardinalOpen.js");
/* harmony import */ var _catmullRom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catmullRom.js */ "./node_modules/d3-shape/src/curve/catmullRom.js");



function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(_catmullRom_js__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new _cardinalOpen_js__WEBPACK_IMPORTED_MODULE_0__["CardinalOpen"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linear.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/linear.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Linear(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linearClosed.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/linearClosed.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop.js */ "./node_modules/d3-shape/src/noop.js");


function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new LinearClosed(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/monotone.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/monotone.js ***!
  \*****************************************************/
/*! exports provided: monotoneX, monotoneY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monotoneX", function() { return monotoneX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monotoneY", function() { return monotoneY; });
function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
}

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/natural.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/natural.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Natural(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/radial.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/radial.js ***!
  \***************************************************/
/*! exports provided: curveRadialLinear, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curveRadialLinear", function() { return curveRadialLinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return curveRadial; });
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-shape/src/curve/linear.js");


var curveRadialLinear = curveRadial(_linear_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/step.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/step.js ***!
  \*************************************************/
/*! exports provided: default, stepBefore, stepAfter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepBefore", function() { return stepBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepAfter", function() { return stepAfter; });
function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Step(context, 0.5);
});

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/descending.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/descending.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-shape/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(d) {
  return d;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/index.js ***!
  \********************************************/
/*! exports provided: arc, area, line, pie, areaRadial, radialArea, lineRadial, radialLine, pointRadial, linkHorizontal, linkVertical, linkRadial, symbol, symbols, symbolCircle, symbolCross, symbolDiamond, symbolSquare, symbolStar, symbolTriangle, symbolWye, curveBasisClosed, curveBasisOpen, curveBasis, curveBundle, curveCardinalClosed, curveCardinalOpen, curveCardinal, curveCatmullRomClosed, curveCatmullRomOpen, curveCatmullRom, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore, stack, stackOffsetExpand, stackOffsetDiverging, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle, stackOrderAppearance, stackOrderAscending, stackOrderDescending, stackOrderInsideOut, stackOrderNone, stackOrderReverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arc.js */ "./node_modules/d3-shape/src/arc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arc", function() { return _arc_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _area_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area.js */ "./node_modules/d3-shape/src/area.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "area", function() { return _area_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _line_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line.js */ "./node_modules/d3-shape/src/line.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "line", function() { return _line_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _pie_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pie.js */ "./node_modules/d3-shape/src/pie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pie", function() { return _pie_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _areaRadial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./areaRadial.js */ "./node_modules/d3-shape/src/areaRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "areaRadial", function() { return _areaRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radialArea", function() { return _areaRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _lineRadial_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lineRadial.js */ "./node_modules/d3-shape/src/lineRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return _lineRadial_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radialLine", function() { return _lineRadial_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _pointRadial_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pointRadial.js */ "./node_modules/d3-shape/src/pointRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pointRadial", function() { return _pointRadial_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _link_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./link/index.js */ "./node_modules/d3-shape/src/link/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return _link_index_js__WEBPACK_IMPORTED_MODULE_7__["linkHorizontal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return _link_index_js__WEBPACK_IMPORTED_MODULE_7__["linkVertical"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return _link_index_js__WEBPACK_IMPORTED_MODULE_7__["linkRadial"]; });

/* harmony import */ var _symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./symbol.js */ "./node_modules/d3-shape/src/symbol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return _symbol_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return _symbol_js__WEBPACK_IMPORTED_MODULE_8__["symbols"]; });

/* harmony import */ var _symbol_circle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./symbol/circle.js */ "./node_modules/d3-shape/src/symbol/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolCircle", function() { return _symbol_circle_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _symbol_cross_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./symbol/cross.js */ "./node_modules/d3-shape/src/symbol/cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolCross", function() { return _symbol_cross_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _symbol_diamond_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./symbol/diamond.js */ "./node_modules/d3-shape/src/symbol/diamond.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolDiamond", function() { return _symbol_diamond_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _symbol_square_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./symbol/square.js */ "./node_modules/d3-shape/src/symbol/square.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolSquare", function() { return _symbol_square_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _symbol_star_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./symbol/star.js */ "./node_modules/d3-shape/src/symbol/star.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolStar", function() { return _symbol_star_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _symbol_triangle_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./symbol/triangle.js */ "./node_modules/d3-shape/src/symbol/triangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolTriangle", function() { return _symbol_triangle_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _symbol_wye_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./symbol/wye.js */ "./node_modules/d3-shape/src/symbol/wye.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolWye", function() { return _symbol_wye_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _curve_basisClosed_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./curve/basisClosed.js */ "./node_modules/d3-shape/src/curve/basisClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasisClosed", function() { return _curve_basisClosed_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _curve_basisOpen_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./curve/basisOpen.js */ "./node_modules/d3-shape/src/curve/basisOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasisOpen", function() { return _curve_basisOpen_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _curve_basis_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./curve/basis.js */ "./node_modules/d3-shape/src/curve/basis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasis", function() { return _curve_basis_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _curve_bundle_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./curve/bundle.js */ "./node_modules/d3-shape/src/curve/bundle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBundle", function() { return _curve_bundle_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _curve_cardinalClosed_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./curve/cardinalClosed.js */ "./node_modules/d3-shape/src/curve/cardinalClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinalClosed", function() { return _curve_cardinalClosed_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _curve_cardinalOpen_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./curve/cardinalOpen.js */ "./node_modules/d3-shape/src/curve/cardinalOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinalOpen", function() { return _curve_cardinalOpen_js__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _curve_cardinal_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./curve/cardinal.js */ "./node_modules/d3-shape/src/curve/cardinal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinal", function() { return _curve_cardinal_js__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _curve_catmullRomClosed_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./curve/catmullRomClosed.js */ "./node_modules/d3-shape/src/curve/catmullRomClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomClosed", function() { return _curve_catmullRomClosed_js__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _curve_catmullRomOpen_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./curve/catmullRomOpen.js */ "./node_modules/d3-shape/src/curve/catmullRomOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomOpen", function() { return _curve_catmullRomOpen_js__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _curve_catmullRom_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./curve/catmullRom.js */ "./node_modules/d3-shape/src/curve/catmullRom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRom", function() { return _curve_catmullRom_js__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _curve_linearClosed_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./curve/linearClosed.js */ "./node_modules/d3-shape/src/curve/linearClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveLinearClosed", function() { return _curve_linearClosed_js__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _curve_linear_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./curve/linear.js */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveLinear", function() { return _curve_linear_js__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _curve_monotone_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./curve/monotone.js */ "./node_modules/d3-shape/src/curve/monotone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneX", function() { return _curve_monotone_js__WEBPACK_IMPORTED_MODULE_28__["monotoneX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneY", function() { return _curve_monotone_js__WEBPACK_IMPORTED_MODULE_28__["monotoneY"]; });

/* harmony import */ var _curve_natural_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./curve/natural.js */ "./node_modules/d3-shape/src/curve/natural.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveNatural", function() { return _curve_natural_js__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _curve_step_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./curve/step.js */ "./node_modules/d3-shape/src/curve/step.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStep", function() { return _curve_step_js__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStepAfter", function() { return _curve_step_js__WEBPACK_IMPORTED_MODULE_30__["stepAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStepBefore", function() { return _curve_step_js__WEBPACK_IMPORTED_MODULE_30__["stepBefore"]; });

/* harmony import */ var _stack_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./stack.js */ "./node_modules/d3-shape/src/stack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return _stack_js__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _offset_expand_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./offset/expand.js */ "./node_modules/d3-shape/src/offset/expand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetExpand", function() { return _offset_expand_js__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _offset_diverging_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./offset/diverging.js */ "./node_modules/d3-shape/src/offset/diverging.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetDiverging", function() { return _offset_diverging_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _offset_none_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./offset/none.js */ "./node_modules/d3-shape/src/offset/none.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetNone", function() { return _offset_none_js__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _offset_silhouette_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./offset/silhouette.js */ "./node_modules/d3-shape/src/offset/silhouette.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetSilhouette", function() { return _offset_silhouette_js__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _offset_wiggle_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./offset/wiggle.js */ "./node_modules/d3-shape/src/offset/wiggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetWiggle", function() { return _offset_wiggle_js__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _order_appearance_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./order/appearance.js */ "./node_modules/d3-shape/src/order/appearance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderAppearance", function() { return _order_appearance_js__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _order_ascending_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./order/ascending.js */ "./node_modules/d3-shape/src/order/ascending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderAscending", function() { return _order_ascending_js__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _order_descending_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./order/descending.js */ "./node_modules/d3-shape/src/order/descending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderDescending", function() { return _order_descending_js__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _order_insideOut_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./order/insideOut.js */ "./node_modules/d3-shape/src/order/insideOut.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderInsideOut", function() { return _order_insideOut_js__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _order_none_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./order/none.js */ "./node_modules/d3-shape/src/order/none.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderNone", function() { return _order_none_js__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _order_reverse_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./order/reverse.js */ "./node_modules/d3-shape/src/order/reverse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderReverse", function() { return _order_reverse_js__WEBPACK_IMPORTED_MODULE_42__["default"]; });





 // Note: radialArea is deprecated!
 // Note: radialLine is deprecated!










































/***/ }),

/***/ "./node_modules/d3-shape/src/line.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/line.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _curve_linear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curve/linear.js */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point.js */ "./node_modules/d3-shape/src/point.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x = _point_js__WEBPACK_IMPORTED_MODULE_3__["x"],
      y = _point_js__WEBPACK_IMPORTED_MODULE_3__["y"],
      defined = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(true),
      context = null,
      curve = _curve_linear_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/lineRadial.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/lineRadial.js ***!
  \*************************************************/
/*! exports provided: lineRadial, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return lineRadial; });
/* harmony import */ var _curve_radial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve/radial.js */ "./node_modules/d3-shape/src/curve/radial.js");
/* harmony import */ var _line_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line.js */ "./node_modules/d3-shape/src/line.js");



function lineRadial(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c(Object(_curve_radial_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
  };

  return l;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return lineRadial(Object(_line_js__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial_js__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]));
});


/***/ }),

/***/ "./node_modules/d3-shape/src/link/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/link/index.js ***!
  \*************************************************/
/*! exports provided: linkHorizontal, linkVertical, linkRadial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return linkHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return linkVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return linkRadial; });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../array.js */ "./node_modules/d3-shape/src/array.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant.js */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../point.js */ "./node_modules/d3-shape/src/point.js");
/* harmony import */ var _pointRadial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pointRadial.js */ "./node_modules/d3-shape/src/pointRadial.js");






function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  var source = linkSource,
      target = linkTarget,
      x = _point_js__WEBPACK_IMPORTED_MODULE_3__["x"],
      y = _point_js__WEBPACK_IMPORTED_MODULE_3__["y"],
      context = null;

  function link() {
    var buffer, argv = _array_js__WEBPACK_IMPORTED_MODULE_1__["slice"].call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
    curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function(_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function(_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : x;
  };

  link.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : y;
  };

  link.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function curveVertical(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}

function curveRadial(context, x0, y0, x1, y1) {
  var p0 = Object(_pointRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0),
      p1 = Object(_pointRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0 = (y0 + y1) / 2),
      p2 = Object(_pointRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y0),
      p3 = Object(_pointRadial_js__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y1);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function linkHorizontal() {
  return link(curveHorizontal);
}

function linkVertical() {
  return link(curveVertical);
}

function linkRadial() {
  var l = link(curveRadial);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/math.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/math.js ***!
  \*******************************************/
/*! exports provided: abs, atan2, cos, max, min, sin, sqrt, epsilon, pi, halfPi, tau, acos, asin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan2", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pi", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "halfPi", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tau", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acos", function() { return acos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asin", function() { return asin; });
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;

var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/noop.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/noop.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/diverging.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/diverging.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) > 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = 0, d[1] = dy;
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/expand.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/expand.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/none.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/none.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/silhouette.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/silhouette.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/wiggle.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/wiggle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/appearance.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/appearance.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var peaks = series.map(peak);
  return Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function(a, b) { return peaks[a] - peaks[b]; });
});

function peak(series) {
  var i = -1, j = 0, n = series.length, vi, vj = -Infinity;
  while (++i < n) if ((vi = +series[i][1]) > vj) vj = vi, j = i;
  return j;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/order/ascending.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/ascending.js ***!
  \******************************************************/
/*! exports provided: default, sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var sums = series.map(sum);
  return Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function(a, b) { return sums[a] - sums[b]; });
});

function sum(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/order/descending.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/descending.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-shape/src/order/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  return Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/insideOut.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/insideOut.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appearance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appearance.js */ "./node_modules/d3-shape/src/order/appearance.js");
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-shape/src/order/ascending.js");



/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var n = series.length,
      i,
      j,
      sums = series.map(_ascending_js__WEBPACK_IMPORTED_MODULE_1__["sum"]),
      order = Object(_appearance_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/none.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/order/none.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/reverse.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/order/reverse.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none.js */ "./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  return Object(_none_js__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
});


/***/ }),

/***/ "./node_modules/d3-shape/src/pie.js":
/*!******************************************!*\
  !*** ./node_modules/d3-shape/src/pie.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _descending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descending.js */ "./node_modules/d3-shape/src/descending.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity.js */ "./node_modules/d3-shape/src/identity.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math.js */ "./node_modules/d3-shape/src/math.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = _identity_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      sortValues = _descending_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      sort = null,
      startAngle = Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0),
      endAngle = Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_math_js__WEBPACK_IMPORTED_MODULE_3__["tau"]),
      padAngle = Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0);

  function pie(data) {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(_math_js__WEBPACK_IMPORTED_MODULE_3__["tau"], Math.max(-_math_js__WEBPACK_IMPORTED_MODULE_3__["tau"], endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : value;
  };

  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : startAngle;
  };

  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : endAngle;
  };

  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : padAngle;
  };

  return pie;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/point.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/point.js ***!
  \********************************************/
/*! exports provided: x, y */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return y; });
function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}


/***/ }),

/***/ "./node_modules/d3-shape/src/pointRadial.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/pointRadial.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
});


/***/ }),

/***/ "./node_modules/d3-shape/src/stack.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/stack.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./node_modules/d3-shape/src/array.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _offset_none_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offset/none.js */ "./node_modules/d3-shape/src/offset/none.js");
/* harmony import */ var _order_none_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order/none.js */ "./node_modules/d3-shape/src/order/none.js");





function stackValue(d, key) {
  return d[key];
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var keys = Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])([]),
      order = _order_none_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      offset = _offset_none_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_array_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? _order_none_js__WEBPACK_IMPORTED_MODULE_3__["default"] : typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_array_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? _offset_none_js__WEBPACK_IMPORTED_MODULE_2__["default"] : _, stack) : offset;
  };

  return stack;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-shape/src/symbol.js ***!
  \*********************************************/
/*! exports provided: symbols, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return symbols; });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _symbol_circle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbol/circle.js */ "./node_modules/d3-shape/src/symbol/circle.js");
/* harmony import */ var _symbol_cross_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/cross.js */ "./node_modules/d3-shape/src/symbol/cross.js");
/* harmony import */ var _symbol_diamond_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./symbol/diamond.js */ "./node_modules/d3-shape/src/symbol/diamond.js");
/* harmony import */ var _symbol_star_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symbol/star.js */ "./node_modules/d3-shape/src/symbol/star.js");
/* harmony import */ var _symbol_square_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./symbol/square.js */ "./node_modules/d3-shape/src/symbol/square.js");
/* harmony import */ var _symbol_triangle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./symbol/triangle.js */ "./node_modules/d3-shape/src/symbol/triangle.js");
/* harmony import */ var _symbol_wye_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./symbol/wye.js */ "./node_modules/d3-shape/src/symbol/wye.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-shape/src/constant.js");










var symbols = [
  _symbol_circle_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _symbol_cross_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  _symbol_diamond_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  _symbol_square_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  _symbol_star_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  _symbol_triangle_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  _symbol_wye_js__WEBPACK_IMPORTED_MODULE_7__["default"]
];

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var type = Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_symbol_circle_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
      size = Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__["default"])(64),
      context = null;

  function symbol() {
    var buffer;
    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_8__["default"])(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/circle.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/circle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ "./node_modules/d3-shape/src/math.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / _math_js__WEBPACK_IMPORTED_MODULE_0__["pi"]);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, _math_js__WEBPACK_IMPORTED_MODULE_0__["tau"]);
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/cross.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/cross.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/diamond.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/diamond.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/square.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/square.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/star.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/star.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math.js */ "./node_modules/d3-shape/src/math.js");


var ka = 0.89081309152928522810,
    kr = Math.sin(_math_js__WEBPACK_IMPORTED_MODULE_0__["pi"] / 10) / Math.sin(7 * _math_js__WEBPACK_IMPORTED_MODULE_0__["pi"] / 10),
    kx = Math.sin(_math_js__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr,
    ky = -Math.cos(_math_js__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = _math_js__WEBPACK_IMPORTED_MODULE_0__["tau"] * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/triangle.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/triangle.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sqrt3 = Math.sqrt(3);

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/wye.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/wye.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-timer/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/index.js ***!
  \********************************************/
/*! exports provided: now, timer, timerFlush, timeout, interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _timer_js__WEBPACK_IMPORTED_MODULE_0__["now"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return _timer_js__WEBPACK_IMPORTED_MODULE_0__["timer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return _timer_js__WEBPACK_IMPORTED_MODULE_0__["timerFlush"]; });

/* harmony import */ var _timeout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeout.js */ "./node_modules/d3-timer/src/timeout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return _timeout_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-timer/src/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return _interval_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });








/***/ }),

/***/ "./node_modules/d3-timer/src/interval.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-timer/src/interval.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__["Timer"], total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? Object(_timer_js__WEBPACK_IMPORTED_MODULE_0__["now"])() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
});


/***/ }),

/***/ "./node_modules/d3-timer/src/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-timer/src/timeout.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__["Timer"];
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});


/***/ }),

/***/ "./node_modules/d3-timer/src/timer.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
/*! exports provided: now, Timer, timer, timerFlush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return timerFlush; });
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),

/***/ "./node_modules/d3-transition/src/active.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-transition/src/active.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");



var root = [null];

/* harmony default export */ __webpack_exports__["default"] = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > _transition_schedule_js__WEBPACK_IMPORTED_MODULE_1__["SCHEDULED"] && schedule.name === name) {
        return new _transition_index_js__WEBPACK_IMPORTED_MODULE_0__["Transition"]([[node]], root, name, +i);
      }
    }
  }

  return null;
});


/***/ }),

/***/ "./node_modules/d3-transition/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-transition/src/index.js ***!
  \*************************************************/
/*! exports provided: transition, active, interrupt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index.js */ "./node_modules/d3-transition/src/selection/index.js");
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return _transition_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _active_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./active.js */ "./node_modules/d3-transition/src/active.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "active", function() { return _active_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interrupt.js */ "./node_modules/d3-transition/src/interrupt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interrupt", function() { return _interrupt_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./node_modules/d3-transition/src/interrupt.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-transition/src/interrupt.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


/* harmony default export */ __webpack_exports__["default"] = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__["STARTING"] && schedule.state < _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__["ENDING"];
    schedule.state = _transition_schedule_js__WEBPACK_IMPORTED_MODULE_0__["ENDED"];
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
});


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/index.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interrupt.js */ "./node_modules/d3-transition/src/selection/interrupt.js");
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transition.js */ "./node_modules/d3-transition/src/selection/transition.js");




d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.interrupt = _interrupt_js__WEBPACK_IMPORTED_MODULE_1__["default"];
d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.transition = _transition_js__WEBPACK_IMPORTED_MODULE_2__["default"];


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/interrupt.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/interrupt.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interrupt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interrupt.js */ "./node_modules/d3-transition/src/interrupt.js");


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  return this.each(function() {
    Object(_interrupt_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, name);
  });
});


/***/ }),

/***/ "./node_modules/d3-transition/src/selection/transition.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/selection/transition.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transition/index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _transition_schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transition/schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/index.js");





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: d3_ease__WEBPACK_IMPORTED_MODULE_2__["easeCubicInOut"]
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = Object(d3_timer__WEBPACK_IMPORTED_MODULE_3__["now"])(), defaultTiming;
    }
  }
  return timing;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var id,
      timing;

  if (name instanceof _transition_index_js__WEBPACK_IMPORTED_MODULE_0__["Transition"]) {
    id = name._id, name = name._name;
  } else {
    id = Object(_transition_index_js__WEBPACK_IMPORTED_MODULE_0__["newId"])(), (timing = defaultTiming).time = Object(d3_timer__WEBPACK_IMPORTED_MODULE_3__["now"])(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        Object(_transition_schedule_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new _transition_index_js__WEBPACK_IMPORTED_MODULE_0__["Transition"](groups, this._parents, name, id);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attr.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attr.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interpolate.js */ "./node_modules/d3-transition/src/transition/interpolate.js");





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var fullname = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["namespace"])(name), i = fullname === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolateTransformSvg"] : _interpolate_js__WEBPACK_IMPORTED_MODULE_3__["default"];
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, Object(_tween_js__WEBPACK_IMPORTED_MODULE_2__["tweenValue"])(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/attrTween.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/attrTween.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");


function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["namespace"])(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/delay.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/delay.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function delayFunction(id, value) {
  return function() {
    Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["init"])(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["init"])(this, id).delay = value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).delay;
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/duration.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/duration.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function durationFunction(id, value) {
  return function() {
    Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id).duration = value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).duration;
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/ease.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/ease.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id).ease = value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).ease;
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/end.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/end.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });
  });
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/filter.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/filter.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(match) {
  if (typeof match !== "function") match = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["matcher"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__["Transition"](subgroups, this._parents, this._name, this._id);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/index.js ***!
  \************************************************************/
/*! exports provided: Transition, default, newId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return Transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newId", function() { return newId; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attr.js */ "./node_modules/d3-transition/src/transition/attr.js");
/* harmony import */ var _attrTween_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attrTween.js */ "./node_modules/d3-transition/src/transition/attrTween.js");
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delay.js */ "./node_modules/d3-transition/src/transition/delay.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-transition/src/transition/duration.js");
/* harmony import */ var _ease_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ease.js */ "./node_modules/d3-transition/src/transition/ease.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter.js */ "./node_modules/d3-transition/src/transition/filter.js");
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./merge.js */ "./node_modules/d3-transition/src/transition/merge.js");
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./on.js */ "./node_modules/d3-transition/src/transition/on.js");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./remove.js */ "./node_modules/d3-transition/src/transition/remove.js");
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./select.js */ "./node_modules/d3-transition/src/transition/select.js");
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selectAll.js */ "./node_modules/d3-transition/src/transition/selectAll.js");
/* harmony import */ var _selection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selection.js */ "./node_modules/d3-transition/src/transition/selection.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style.js */ "./node_modules/d3-transition/src/transition/style.js");
/* harmony import */ var _styleTween_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styleTween.js */ "./node_modules/d3-transition/src/transition/styleTween.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./text.js */ "./node_modules/d3-transition/src/transition/text.js");
/* harmony import */ var _textTween_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./textTween.js */ "./node_modules/d3-transition/src/transition/textTween.js");
/* harmony import */ var _transition_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./transition.js */ "./node_modules/d3-transition/src/transition/transition.js");
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _end_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./end.js */ "./node_modules/d3-transition/src/transition/end.js");





















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"])().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: _select_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  filter: _filter_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  merge: _merge_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  selection: _selection_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  transition: _transition_js__WEBPACK_IMPORTED_MODULE_17__["default"],
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: _on_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  attr: _attr_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  attrTween: _attrTween_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  style: _style_js__WEBPACK_IMPORTED_MODULE_13__["default"],
  styleTween: _styleTween_js__WEBPACK_IMPORTED_MODULE_14__["default"],
  text: _text_js__WEBPACK_IMPORTED_MODULE_15__["default"],
  textTween: _textTween_js__WEBPACK_IMPORTED_MODULE_16__["default"],
  remove: _remove_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  tween: _tween_js__WEBPACK_IMPORTED_MODULE_18__["default"],
  delay: _delay_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  duration: _duration_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  ease: _ease_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  end: _end_js__WEBPACK_IMPORTED_MODULE_19__["default"]
};


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/interpolate.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/interpolate.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var c;
  return (typeof b === "number" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"]
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__["color"] ? d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateRgb"]
      : (c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["color"])(b)) ? (b = c, d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateRgb"])
      : d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateString"])(a, b);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/merge.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/merge.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__["Transition"](merges, this._parents, this._name, this._id);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/on.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/on.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? _schedule_js__WEBPACK_IMPORTED_MODULE_0__["init"] : _schedule_js__WEBPACK_IMPORTED_MODULE_0__["set"];
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/remove.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/remove.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.on("end.remove", removeFunction(this._id));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/schedule.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/schedule.js ***!
  \***************************************************************/
/*! exports provided: CREATED, SCHEDULED, STARTING, STARTED, RUNNING, ENDING, ENDED, default, init, set, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATED", function() { return CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEDULED", function() { return SCHEDULED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STARTING", function() { return STARTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STARTED", function() { return STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RUNNING", function() { return RUNNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDING", function() { return ENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENDED", function() { return ENDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/index.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/index.js");



var emptyOn = Object(d3_dispatch__WEBPACK_IMPORTED_MODULE_0__["dispatch"])("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ __webpack_exports__["default"] = (function(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
});

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__["timer"])(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__["timeout"])(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__["timeout"])(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/select.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/select.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");




/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selector"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        Object(_schedule_js__WEBPACK_IMPORTED_MODULE_2__["default"])(subgroup[i], name, id, i, subgroup, Object(_schedule_js__WEBPACK_IMPORTED_MODULE_2__["get"])(node, id));
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__["Transition"](subgroups, this._parents, name, id);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selectAll.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selectAll.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");




/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectorAll"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_2__["get"])(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            Object(_schedule_js__WEBPACK_IMPORTED_MODULE_2__["default"])(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_1__["Transition"](subgroups, parents, name, id);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/selection.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/selection.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");


var Selection = d3_selection__WEBPACK_IMPORTED_MODULE_0__["selection"].prototype.constructor;

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new Selection(this._groups, this._parents);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/style.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/style.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");
/* harmony import */ var _interpolate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interpolate.js */ "./node_modules/d3-transition/src/transition/interpolate.js");






function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name),
        string1 = (this.style.removeProperty(name), Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["style"])(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_2__["set"])(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value, priority) {
  var i = (name += "") === "transform" ? d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolateTransformCss"] : _interpolate_js__WEBPACK_IMPORTED_MODULE_4__["default"];
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction(name, i, Object(_tween_js__WEBPACK_IMPORTED_MODULE_3__["tweenValue"])(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/styleTween.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/styleTween.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/text.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/text.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tween_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tween.js */ "./node_modules/d3-transition/src/transition/tween.js");


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction(Object(_tween_js__WEBPACK_IMPORTED_MODULE_0__["tweenValue"])(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/textTween.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/textTween.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, textTween(value));
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/transition.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/transition.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-transition/src/transition/index.js");
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  var name = this._name,
      id0 = this._id,
      id1 = Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["newId"])();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_1__["get"])(node, id0);
        Object(_schedule_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__["Transition"](groups, this._parents, name, id1);
});


/***/ }),

/***/ "./node_modules/d3-transition/src/transition/tween.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-transition/src/transition/tween.js ***!
  \************************************************************/
/*! exports provided: default, tweenValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tweenValue", function() { return tweenValue; });
/* harmony import */ var _schedule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.js */ "./node_modules/d3-transition/src/transition/schedule.js");


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["get"])(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
});

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["set"])(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return Object(_schedule_js__WEBPACK_IMPORTED_MODULE_0__["get"])(node, id).value[name];
  };
}


/***/ }),

/***/ "./node_modules/d3-zoom/src/constant.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-zoom/src/constant.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-zoom/src/event.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-zoom/src/event.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZoomEvent; });
function ZoomEvent(target, type, transform) {
  this.target = target;
  this.type = type;
  this.transform = transform;
}


/***/ }),

/***/ "./node_modules/d3-zoom/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-zoom/src/index.js ***!
  \*******************************************/
/*! exports provided: zoom, zoomTransform, zoomIdentity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zoom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zoom.js */ "./node_modules/d3-zoom/src/zoom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoom", function() { return _zoom_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform.js */ "./node_modules/d3-zoom/src/transform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomTransform", function() { return _transform_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomIdentity", function() { return _transform_js__WEBPACK_IMPORTED_MODULE_1__["identity"]; });





/***/ }),

/***/ "./node_modules/d3-zoom/src/noevent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-zoom/src/noevent.js ***!
  \*********************************************/
/*! exports provided: nopropagation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nopropagation", function() { return nopropagation; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");


function nopropagation() {
  d3_selection__WEBPACK_IMPORTED_MODULE_0__["event"].stopImmediatePropagation();
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  d3_selection__WEBPACK_IMPORTED_MODULE_0__["event"].preventDefault();
  d3_selection__WEBPACK_IMPORTED_MODULE_0__["event"].stopImmediatePropagation();
});


/***/ }),

/***/ "./node_modules/d3-zoom/src/transform.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-zoom/src/transform.js ***!
  \***********************************************/
/*! exports provided: Transform, identity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transform", function() { return Transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transform; });
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var identity = new Transform(1, 0, 0);

transform.prototype = Transform.prototype;

function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity;
  return node.__zoom;
}


/***/ }),

/***/ "./node_modules/d3-zoom/src/zoom.js":
/*!******************************************!*\
  !*** ./node_modules/d3-zoom/src/zoom.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/index.js");
/* harmony import */ var d3_drag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-drag */ "./node_modules/d3-drag/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-zoom/src/constant.js");
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event.js */ "./node_modules/d3-zoom/src/event.js");
/* harmony import */ var _transform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transform.js */ "./node_modules/d3-zoom/src/transform.js");
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./noevent.js */ "./node_modules/d3-zoom/src/noevent.js");










// Ignore right-click, since that should open the context menu.
function defaultFilter() {
  return !d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"].ctrlKey && !d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"].button;
}

function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}

function defaultTransform() {
  return this.__zoom || _transform_js__WEBPACK_IMPORTED_MODULE_7__["identity"];
}

function defaultWheelDelta() {
  return -d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"].deltaY * (d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"].deltaMode === 1 ? 0.05 : d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"].deltaMode ? 1 : 0.002);
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var filter = defaultFilter,
      extent = defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["interpolateZoom"],
      listeners = Object(d3_dispatch__WEBPACK_IMPORTED_MODULE_0__["dispatch"])("start", "zoom", "end"),
      touchstarting,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0;

  function zoom(selection) {
    selection
        .property("__zoom", defaultTransform)
        .on("wheel.zoom", wheeled)
        .on("mousedown.zoom", mousedowned)
        .on("dblclick.zoom", dblclicked)
      .filter(touchable)
        .on("touchstart.zoom", touchstarted)
        .on("touchmove.zoom", touchmoved)
        .on("touchend.zoom touchcancel.zoom", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function(collection, transform, point) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform, point);
    } else {
      selection.interrupt().each(function() {
        gesture(this, arguments)
            .start()
            .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
            .end();
      });
    }
  };

  zoom.scaleBy = function(selection, k, p) {
    zoom.scaleTo(selection, function() {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p);
  };

  zoom.scaleTo = function(selection, k, p) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p);
  };

  zoom.translateBy = function(selection, x, y) {
    zoom.transform(selection, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    });
  };

  zoom.translateTo = function(selection, x, y, p) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(_transform_js__WEBPACK_IMPORTED_MODULE_7__["identity"].translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p);
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new _transform_js__WEBPACK_IMPORTED_MODULE_7__["Transform"](k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new _transform_js__WEBPACK_IMPORTED_MODULE_7__["Transform"](transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, point) {
    transition
        .on("start.zoom", function() { gesture(this, arguments).start(); })
        .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).end(); })
        .tween("zoom", function() {
          var that = this,
              args = arguments,
              g = gesture(that, args),
              e = extent.apply(that, args),
              p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
              a = that.__zoom,
              b = typeof transform === "function" ? transform.apply(that, args) : transform,
              i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
          return function(t) {
            if (t === 1) t = b; // Avoid rounding error on end.
            else { var l = i(t), k = w / l[2]; t = new _transform_js__WEBPACK_IMPORTED_MODULE_7__["Transform"](k, p[0] - l[0] * k, p[1] - l[1] * k); }
            g.zoom(null, t);
          };
        });
  }

  function gesture(that, args, clean) {
    return (!clean && that.__zooming) || new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }

  Gesture.prototype = {
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["customEvent"])(new _event_js__WEBPACK_IMPORTED_MODULE_6__["default"](zoom, type, this.that.__zoom), listeners.apply, listeners, [type, this.that, this.args]);
    }
  };

  function wheeled() {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, arguments),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["mouse"])(this);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

    // Otherwise, capture the mouse point and location at the start.
    else {
      g.mouse = [p, t.invert(p)];
      Object(d3_transition__WEBPACK_IMPORTED_MODULE_4__["interrupt"])(this);
      g.start();
    }

    Object(_noevent_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned() {
    if (touchending || !filter.apply(this, arguments)) return;
    var g = gesture(this, arguments, true),
        v = Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"])(d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"].view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["mouse"])(this),
        x0 = d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"].clientX,
        y0 = d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"].clientY;

    Object(d3_drag__WEBPACK_IMPORTED_MODULE_1__["dragDisable"])(d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"].view);
    Object(_noevent_js__WEBPACK_IMPORTED_MODULE_8__["nopropagation"])();
    g.mouse = [p, this.__zoom.invert(p)];
    Object(d3_transition__WEBPACK_IMPORTED_MODULE_4__["interrupt"])(this);
    g.start();

    function mousemoved() {
      Object(_noevent_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
      if (!g.moved) {
        var dx = d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"].clientX - x0, dy = d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"].clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["mouse"])(g.that), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped() {
      v.on("mousemove.zoom mouseup.zoom", null);
      Object(d3_drag__WEBPACK_IMPORTED_MODULE_1__["dragEnable"])(d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"].view, g.moved);
      Object(_noevent_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
      g.end();
    }
  }

  function dblclicked() {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["mouse"])(this),
        p1 = t0.invert(p0),
        k1 = t0.k * (d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"].shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, arguments), translateExtent);

    Object(_noevent_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
    if (duration > 0) Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"])(this).transition().duration(duration).call(schedule, t1, p0);
    else Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"])(this).call(zoom.transform, t1);
  }

  function touchstarted() {
    if (!filter.apply(this, arguments)) return;
    var touches = d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"].touches,
        n = touches.length,
        g = gesture(this, arguments, d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"].changedTouches.length === n),
        started, i, t, p;

    Object(_noevent_js__WEBPACK_IMPORTED_MODULE_8__["nopropagation"])();
    for (i = 0; i < n; ++i) {
      t = touches[i], p = Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["touch"])(this, touches, t.identifier);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }

    if (touchstarting) touchstarting = clearTimeout(touchstarting);

    if (started) {
      if (g.taps < 2) touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
      Object(d3_transition__WEBPACK_IMPORTED_MODULE_4__["interrupt"])(this);
      g.start();
    }
  }

  function touchmoved() {
    if (!this.__zooming) return;
    var g = gesture(this, arguments),
        touches = d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"].changedTouches,
        n = touches.length, i, t, p, l;

    Object(_noevent_js__WEBPACK_IMPORTED_MODULE_8__["default"])();
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    g.taps = 0;
    for (i = 0; i < n; ++i) {
      t = touches[i], p = Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["touch"])(this, touches, t.identifier);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1],
          p1 = g.touch1[0], l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    }
    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended() {
    if (!this.__zooming) return;
    var g = gesture(this, arguments),
        touches = d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"].changedTouches,
        n = touches.length, i, t;

    Object(_noevent_js__WEBPACK_IMPORTED_MODULE_8__["nopropagation"])();
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
      if (g.taps === 2) {
        var p = Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"])(this).on("dblclick.zoom");
        if (p) p.apply(this, arguments);
      }
    }
  }

  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_5__["default"])(+_), zoom) : wheelDelta;
  };

  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_5__["default"])(!!_), zoom) : filter;
  };

  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_5__["default"])(!!_), zoom) : touchable;
  };

  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_5__["default"])([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  return zoom;
});


/***/ }),

/***/ "./node_modules/d3plus-common/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/d3plus-common/es/index.js ***!
  \************************************************/
/*! exports provided: accessor, assign, attrize, BaseClass, closest, configPrep, constant, elem, findLocale, isObject, merge, parseSides, prefix, RESET, stylize, unique, uuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_accessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/accessor */ "./node_modules/d3plus-common/es/src/accessor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accessor", function() { return _src_accessor__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/assign */ "./node_modules/d3plus-common/es/src/assign.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _src_assign__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_attrize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/attrize */ "./node_modules/d3plus-common/es/src/attrize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attrize", function() { return _src_attrize__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_BaseClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/BaseClass */ "./node_modules/d3plus-common/es/src/BaseClass.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseClass", function() { return _src_BaseClass__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_closest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/closest */ "./node_modules/d3plus-common/es/src/closest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return _src_closest__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_configPrep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/configPrep */ "./node_modules/d3plus-common/es/src/configPrep.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configPrep", function() { return _src_configPrep__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/constant */ "./node_modules/d3plus-common/es/src/constant.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "constant", function() { return _src_constant__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_elem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/elem */ "./node_modules/d3plus-common/es/src/elem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elem", function() { return _src_elem__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_findLocale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/findLocale */ "./node_modules/d3plus-common/es/src/findLocale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findLocale", function() { return _src_findLocale__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _src_isObject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/isObject */ "./node_modules/d3plus-common/es/src/isObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _src_isObject__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _src_merge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/merge */ "./node_modules/d3plus-common/es/src/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _src_merge__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _src_parseSides__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/parseSides */ "./node_modules/d3plus-common/es/src/parseSides.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseSides", function() { return _src_parseSides__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _src_prefix__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/prefix */ "./node_modules/d3plus-common/es/src/prefix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return _src_prefix__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _src_RESET__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/RESET */ "./node_modules/d3plus-common/es/src/RESET.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RESET", function() { return _src_RESET__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _src_stylize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/stylize */ "./node_modules/d3plus-common/es/src/stylize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stylize", function() { return _src_stylize__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _src_unique__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/unique */ "./node_modules/d3plus-common/es/src/unique.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return _src_unique__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _src_uuid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/uuid */ "./node_modules/d3plus-common/es/src/uuid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return _src_uuid__WEBPACK_IMPORTED_MODULE_16__["default"]; });



















/***/ }),

/***/ "./node_modules/d3plus-common/es/src/BaseClass.js":
/*!********************************************************!*\
  !*** ./node_modules/d3plus-common/es/src/BaseClass.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseClass; });
/* harmony import */ var _assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assign */ "./node_modules/d3plus-common/es/src/assign.js");
/* harmony import */ var _findLocale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findLocale */ "./node_modules/d3plus-common/es/src/findLocale.js");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObject */ "./node_modules/d3plus-common/es/src/isObject.js");
/* harmony import */ var _uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uuid */ "./node_modules/d3plus-common/es/src/uuid.js");
/* harmony import */ var _RESET__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RESET */ "./node_modules/d3plus-common/es/src/RESET.js");
/* harmony import */ var _locales_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locales/index */ "./node_modules/d3plus-common/es/src/locales/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







/**
    @desc Recursive function that resets nested Object configs.
    @param {Object} obj
    @param {Object} defaults
    @private
*/

function nestedReset(obj, defaults) {
  if (Object(_isObject__WEBPACK_IMPORTED_MODULE_2__["default"])(obj)) {
    for (var nestedKey in obj) {
      if ({}.hasOwnProperty.call(obj, nestedKey) && !nestedKey.startsWith("_")) {
        var defaultValue = defaults && Object(_isObject__WEBPACK_IMPORTED_MODULE_2__["default"])(defaults) ? defaults[nestedKey] : undefined;

        if (obj[nestedKey] === _RESET__WEBPACK_IMPORTED_MODULE_4__["default"]) {
          if (defaultValue) obj[nestedKey] = defaultValue;else delete obj[nestedKey];
        } else if (Object(_isObject__WEBPACK_IMPORTED_MODULE_2__["default"])(obj[nestedKey])) {
          nestedReset(obj[nestedKey], defaultValue);
        }
      }
    }
  }
}
/**
 * @desc finds all prototype methods of a class and it's parent classes
 * @param {*} obj
 * @private
 */


function getAllMethods(obj) {
  var props = [];

  do {
    props = props.concat(Object.getOwnPropertyNames(obj));
    obj = Object.getPrototypeOf(obj);
  } while (obj && obj !== Object.prototype);

  return props.filter(function (e) {
    return e.indexOf("_") !== 0 && !["config", "constructor", "parent", "render"].includes(e);
  });
}
/**
    @class BaseClass
    @summary An abstract class that contains some global methods and functionality.
*/


var BaseClass = /*#__PURE__*/function () {
  /**
      @memberof BaseClass
      @desc Invoked when creating a new class instance, and sets any default parameters.
      @private
  */
  function BaseClass() {
    var _this = this;

    _classCallCheck(this, BaseClass);

    this._locale = "en-US";
    this._on = {};
    this._parent = {};

    this._translate = function (d) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this._locale;
      var dictionary = _locales_index__WEBPACK_IMPORTED_MODULE_5__["default"][locale];
      return dictionary && dictionary[d] ? dictionary[d] : d;
    };

    this._uuid = Object(_uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }
  /**
      @memberof BaseClass
      @desc If *value* is specified, sets the methods that correspond to the key/value pairs and returns this class. If *value* is not specified, returns the current configuration.
      @param {Object} [*value*]
      @chainable
  */


  _createClass(BaseClass, [{
    key: "config",
    value: function config(_) {
      var _this2 = this;

      if (!this._configDefault) {
        var config = {};
        getAllMethods(this.__proto__).forEach(function (k) {
          var v = _this2[k]();

          if (v !== _this2) config[k] = Object(_isObject__WEBPACK_IMPORTED_MODULE_2__["default"])(v) ? Object(_assign__WEBPACK_IMPORTED_MODULE_0__["default"])({}, v) : v;
        });
        this._configDefault = config;
      }

      if (arguments.length) {
        for (var k in _) {
          if ({}.hasOwnProperty.call(_, k) && k in this) {
            var v = _[k];

            if (v === _RESET__WEBPACK_IMPORTED_MODULE_4__["default"]) {
              if (k === "on") this._on = this._configDefault[k];else this[k](this._configDefault[k]);
            } else {
              nestedReset(v, this._configDefault[k]);
              this[k](v);
            }
          }
        }

        return this;
      } else {
        var _config = {};
        getAllMethods(this.__proto__).forEach(function (k) {
          _config[k] = _this2[k]();
        });
        return _config;
      }
    }
    /**
        @memberof BaseClass
        @desc Sets the locale used for all text and number formatting. This method supports the locales defined in [d3plus-format](https://github.com/d3plus/d3plus-format/blob/master/src/locale.js). The locale can be defined as a complex Object (like in d3plus-format), a locale code (like "en-US"), or a 2-digit language code (like "en"). If a 2-digit code is provided, the "findLocale" function is used to identify the most approximate locale from d3plus-format.
        @param {Object|String} [*value* = "en-US"]
        @chainable
        @example
        {
          separator: "",
          suffixes: ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "B", "t", "q", "Q", "Z", "Y"],
          grouping: [3],
          delimiters: {
            thousands: ",",
            decimal: "."
          },
          currency: ["$", ""]
        }
    */

  }, {
    key: "locale",
    value: function locale(_) {
      return arguments.length ? (this._locale = Object(_findLocale__WEBPACK_IMPORTED_MODULE_1__["default"])(_), this) : this._locale;
    }
    /**
        @memberof BaseClass
        @desc Adds or removes a *listener* to each object for the specified event *typenames*. If a *listener* is not specified, returns the currently assigned listener for the specified event *typename*. Mirrors the core [d3-selection](https://github.com/d3/d3-selection#selection_on) behavior.
        @param {String} [*typenames*]
        @param {Function} [*listener*]
        @chainable
        @example <caption>By default, listeners apply globally to all objects, however, passing a namespace with the class name gives control over specific elements:</caption>
    new Plot
    .on("click.Shape", function(d) {
      console.log("data for shape clicked:", d);
    })
    .on("click.Legend", function(d) {
      console.log("data for legend clicked:", d);
    })
    */

  }, {
    key: "on",
    value: function on(_, f) {
      return arguments.length === 2 ? (this._on[_] = f, this) : arguments.length ? typeof _ === "string" ? this._on[_] : (this._on = Object.assign({}, this._on, _), this) : this._on;
    }
    /**
        @memberof Viz
        @desc If *value* is specified, sets the parent config used by the wrapper and returns the current class instance.
        @param {Object} [*value*]
        @chainable
    */

  }, {
    key: "parent",
    value: function parent(_) {
      return arguments.length ? (this._parent = _, this) : this._parent;
    }
    /**
        @memberof BaseClass
        @desc Defines how informational text strings should be displayed. By default, this function will try to find the string in question (which is the first argument provided to this function) inside of an internally managed translation Object. If you'd like to override to use custom text, simply pass this method your own custom formatting function.
        @param {Function} [*value*]
        @chainable
        @example <caption>For example, if we wanted to only change the string "Back" and allow all other string to return in English:</caption>
    .translate(function(d) {
    return d === "Back" ? "Get outta here" : d;
    })
    */

  }, {
    key: "translate",
    value: function translate(_) {
      return arguments.length ? (this._translate = _, this) : this._translate;
    }
    /**
        @memberof Viz
        @desc If *value* is specified, sets the config method for each shape and returns the current class instance.
        @param {Object} [*value*]
        @chainable
    */

  }, {
    key: "shapeConfig",
    value: function shapeConfig(_) {
      return arguments.length ? (this._shapeConfig = Object(_assign__WEBPACK_IMPORTED_MODULE_0__["default"])(this._shapeConfig, _), this) : this._shapeConfig;
    }
  }]);

  return BaseClass;
}();



/***/ }),

/***/ "./node_modules/d3plus-common/es/src/RESET.js":
/*!****************************************************!*\
  !*** ./node_modules/d3plus-common/es/src/RESET.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
    @constant RESET
    @desc String constant used to reset an individual config property.
*/
/* harmony default export */ __webpack_exports__["default"] = ("D3PLUS-COMMON-RESET");

/***/ }),

/***/ "./node_modules/d3plus-common/es/src/accessor.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3plus-common/es/src/accessor.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
    @function accessor
    @desc Wraps an object key in a simple accessor function.
    @param {String} key The key to be returned from each Object passed to the function.
    @param {*} [def] A default value to be returned if the key is not present.
    @example <caption>this</caption>
accessor("id");
    @example <caption>returns this</caption>
function(d) {
  return d["id"];
}
*/
/* harmony default export */ __webpack_exports__["default"] = (function (key, def) {
  if (def === void 0) return function (d) {
    return d[key];
  };
  return function (d) {
    return d[key] === void 0 ? def : d[key];
  };
});

/***/ }),

/***/ "./node_modules/d3plus-common/es/src/assign.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3plus-common/es/src/assign.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject */ "./node_modules/d3plus-common/es/src/isObject.js");

/**
    @function validObject
    @desc Determines if the object passed is the document or window.
    @param {Object} obj
    @private
*/

function validObject(obj) {
  if (typeof window === "undefined") return true;else return obj !== window && obj !== document;
}
/**
    @function assign
    @desc A deeply recursive version of `Object.assign`.
    @param {...Object} objects
    @example <caption>this</caption>
assign({id: "foo", deep: {group: "A"}}, {id: "bar", deep: {value: 20}}));
    @example <caption>returns this</caption>
{id: "bar", deep: {group: "A", value: 20}}
*/


function assign() {
  var _arguments = arguments;
  var target = arguments.length <= 0 ? undefined : arguments[0];

  var _loop = function _loop(i) {
    var source = i < 0 || _arguments.length <= i ? undefined : _arguments[i];
    Object.keys(source).forEach(function (prop) {
      var value = source[prop];

      if (Object(_isObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && validObject(value)) {
        if (target.hasOwnProperty(prop) && Object(_isObject__WEBPACK_IMPORTED_MODULE_0__["default"])(target[prop])) target[prop] = assign({}, target[prop], value);else target[prop] = assign({}, value);
      } else if (Array.isArray(value)) target[prop] = value.slice();else target[prop] = value;
    });
  };

  for (var i = 1; i < arguments.length; i++) {
    _loop(i);
  }

  return target;
}

/* harmony default export */ __webpack_exports__["default"] = (assign);

/***/ }),

/***/ "./node_modules/d3plus-common/es/src/attrize.js":
/*!******************************************************!*\
  !*** ./node_modules/d3plus-common/es/src/attrize.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
    @function attrize
    @desc Applies each key/value in an object as an attr.
    @param {D3selection} elem The D3 element to apply the styles to.
    @param {Object} attrs An object of key/value attr pairs.
*/
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var k in a) {
    if ({}.hasOwnProperty.call(a, k)) e.attr(k, a[k]);
  }
});

/***/ }),

/***/ "./node_modules/d3plus-common/es/src/closest.js":
/*!******************************************************!*\
  !*** ./node_modules/d3plus-common/es/src/closest.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
    @function closest
    @desc Finds the closest numeric value in an array.
    @param {Number} n The number value to use when searching the array.
    @param {Array} arr The array of values to test against.
*/
/* harmony default export */ __webpack_exports__["default"] = (function (n) {
  var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (!arr || !(arr instanceof Array) || !arr.length) return undefined;
  return arr.reduce(function (prev, curr) {
    return Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev;
  });
});

/***/ }),

/***/ "./node_modules/d3plus-common/es/src/configPrep.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3plus-common/es/src/configPrep.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configPrep; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
    @function configPrep
    @desc Preps a config object for d3plus data, and optionally bubbles up a specific nested type. When using this function, you must bind a d3plus class' `this` context.
    @param {Object} [config = this._shapeConfig] The configuration object to parse.
    @param {String} [type = "shape"] The event classifier to user for "on" events. For example, the default event type of "shape" will apply all events in the "on" config object with that key, like "click.shape" and "mouseleave.shape", in addition to any gloval events like "click" and "mouseleave".
    @param {String} [nest] An optional nested key to bubble up to the parent config level.
*/
function configPrep() {
  var _this = this;

  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._shapeConfig;
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "shape";
  var nest = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var newConfig = {
    duration: this._duration,
    on: {}
  };

  var wrapFunction = function wrapFunction(func) {
    return function (d, i, s) {
      var parent;

      while (d.__d3plus__) {
        if (parent) d.__d3plusParent__ = parent;
        parent = d;
        i = d.i;
        d = d.data || d.feature;
      }

      return func.bind(_this)(d, i, s || parent);
    };
  };

  var parseEvents = function parseEvents(newObj, on) {
    for (var event in on) {
      if ({}.hasOwnProperty.call(on, event) && !event.includes(".") || event.includes(".".concat(type))) {
        newObj.on[event] = wrapFunction(on[event]);
      }
    }
  };

  var arrayEval = function arrayEval(arr) {
    return arr.map(function (d) {
      if (d instanceof Array) return arrayEval(d);else if (_typeof(d) === "object") return keyEval({}, d);else if (typeof d === "function") return wrapFunction(d);else return d;
    });
  };

  var keyEval = function keyEval(newObj, obj) {
    for (var key in obj) {
      if ({}.hasOwnProperty.call(obj, key)) {
        if (key === "on") parseEvents(newObj, obj[key]);else if (typeof obj[key] === "function") {
          newObj[key] = wrapFunction(obj[key]);
        } else if (obj[key] instanceof Array) {
          newObj[key] = arrayEval(obj[key]);
        } else if (_typeof(obj[key]) === "object") {
          newObj[key] = {
            on: {}
          };
          keyEval(newObj[key], obj[key]);
        } else newObj[key] = obj[key];
      }
    }
  };

  keyEval(newConfig, config);
  if (this._on) parseEvents(newConfig, this._on);

  if (nest && config[nest]) {
    keyEval(newConfig, config[nest]);
    if (config[nest].on) parseEvents(newConfig, config[nest].on);
  }

  return newConfig;
}

/***/ }),

/***/ "./node_modules/d3plus-common/es/src/constant.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3plus-common/es/src/constant.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
    @function constant
    @desc Wraps non-function variables in a simple return function.
    @param {Array|Number|Object|String} value The value to be returned from the function.
    @example <caption>this</caption>
constant(42);
    @example <caption>returns this</caption>
function() {
  return 42;
}
*/
/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  return function constant() {
    return value;
  };
});

/***/ }),

/***/ "./node_modules/d3plus-common/es/src/elem.js":
/*!***************************************************!*\
  !*** ./node_modules/d3plus-common/es/src/elem.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
/* harmony import */ var _attrize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attrize */ "./node_modules/d3plus-common/es/src/attrize.js");



/**
    @function elem
    @desc Manages the enter/update/exit pattern for a single DOM element.
    @param {String} selector A D3 selector, which must include the tagname and a class and/or ID.
    @param {Object} params Additional parameters.
    @param {Boolean} [params.condition = true] Whether or not the element should be rendered (or removed).
    @param {Object} [params.enter = {}] A collection of key/value pairs that map to attributes to be given on enter.
    @param {Object} [params.exit = {}] A collection of key/value pairs that map to attributes to be given on exit.
    @param {D3Selection} [params.parent = d3.select("body")] The parent element for this new element to be appended to.
    @param {D3Transition} [params.transition = d3.transition().duration(0)] The transition to use when animated the different life cycle stages.
    @param {Object} [params.update = {}] A collection of key/value pairs that map to attributes to be given on update.
*/

/* harmony default export */ __webpack_exports__["default"] = (function (selector, p) {
  // overrides default params
  p = Object.assign({}, {
    condition: true,
    enter: {},
    exit: {},
    parent: Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])("body"),
    transition: Object(d3_transition__WEBPACK_IMPORTED_MODULE_1__["transition"])().duration(0),
    update: {}
  }, p);
  var className = /\.([^#]+)/g.exec(selector),
      id = /#([^\.]+)/g.exec(selector),
      tag = /^([^.^#]+)/g.exec(selector)[1];
  var elem = p.parent.selectAll(selector.includes(":") ? selector.split(":")[1] : selector).data(p.condition ? [null] : []);
  var enter = elem.enter().append(tag).call(_attrize__WEBPACK_IMPORTED_MODULE_2__["default"], p.enter);
  if (id) enter.attr("id", id[1]);
  if (className) enter.attr("class", className[1]);
  elem.exit().transition(p.transition).call(_attrize__WEBPACK_IMPORTED_MODULE_2__["default"], p.exit).remove();
  var update = enter.merge(elem);
  update.transition(p.transition).call(_attrize__WEBPACK_IMPORTED_MODULE_2__["default"], p.update);
  return update;
});

/***/ }),

/***/ "./node_modules/d3plus-common/es/src/findLocale.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3plus-common/es/src/findLocale.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var windows_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! windows-locale */ "./node_modules/windows-locale/index.json");
var windows_locale__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! windows-locale */ "./node_modules/windows-locale/index.json", 1);
/* harmony import */ var iso639_codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! iso639-codes */ "./node_modules/iso639-codes/index.json");
var iso639_codes__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! iso639-codes */ "./node_modules/iso639-codes/index.json", 1);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var locales = [];
var isoKeys = Object.keys(iso639_codes__WEBPACK_IMPORTED_MODULE_1__);
Object.keys(windows_locale__WEBPACK_IMPORTED_MODULE_0__).map(function (id) {
  var locale = windows_locale__WEBPACK_IMPORTED_MODULE_0__[id];
  var isoLanguage = isoKeys.find(function (name) {
    return name.toLowerCase() === locale.language.toLowerCase();
  });

  if (locale.location && isoLanguage) {
    var _locales$push;

    locales.push((_locales$push = {}, _defineProperty(_locales$push, "name", locale.language), _defineProperty(_locales$push, "location", locale.location), _defineProperty(_locales$push, "tag", locale.tag), _defineProperty(_locales$push, "lcid", locale.id), _defineProperty(_locales$push, "iso639-2", iso639_codes__WEBPACK_IMPORTED_MODULE_1__[isoLanguage]["iso639-2"]), _defineProperty(_locales$push, "iso639-1", iso639_codes__WEBPACK_IMPORTED_MODULE_1__[isoLanguage]["iso639-1"]), _locales$push));
  }
});
var defaultLocales = {
  ar: "ar-SA",
  ca: "ca-ES",
  da: "da-DK",
  en: "en-US",
  ko: "ko-KR",
  pa: "pa-IN",
  pt: "pt-BR",
  sv: "sv-SE"
};
/**
 * Converts a 2-digit language into a full language-LOCATION locale.
 * @param {String} locale
 */

/* harmony default export */ __webpack_exports__["default"] = (function (locale) {
  if (typeof locale !== "string" || locale.length === 5) return locale;
  if (defaultLocales[locale]) return defaultLocales[locale];
  var list = locales.filter(function (d) {
    return d["iso639-1"] === locale;
  });
  if (!list.length) return locale;else if (list.length === 1) return list[0].tag;else if (list.find(function (d) {
    return d.tag === "".concat(locale, "-").concat(locale.toUpperCase());
  })) return "".concat(locale, "-").concat(locale.toUpperCase());else return list[0].tag;
});

/***/ }),

/***/ "./node_modules/d3plus-common/es/src/isObject.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3plus-common/es/src/isObject.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
    @function isObject
    @desc Detects if a variable is a javascript Object.
    @param {*} item
*/
/* harmony default export */ __webpack_exports__["default"] = (function (item) {
  return item && _typeof(item) === "object" && (typeof window === "undefined" || item !== window && item !== window.document && !(item instanceof Element)) && !Array.isArray(item) ? true : false;
});

/***/ }),

/***/ "./node_modules/d3plus-common/es/src/locales/es-ES.js":
/*!************************************************************!*\
  !*** ./node_modules/d3plus-common/es/src/locales/es-ES.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "and": "y",
  "Back": "Atrás",
  "Click to Expand": "Clic para Ampliar",
  "Click to Hide": "Clic para Ocultar",
  "Click to Highlight": "Clic para Resaltar",
  "Click to Reset": "Clic para Restablecer",
  "Download": "Descargar",
  "Loading Visualization": "Cargando Visualización",
  "No Data Available": "Datos No Disponibles",
  "Powered by D3plus": "Funciona con D3plus",
  "Share": "Porcentaje",
  "Shift+Click to Hide": "Mayús+Clic para Ocultar",
  "Total": "Total",
  "Values": "Valores"
});

/***/ }),

/***/ "./node_modules/d3plus-common/es/src/locales/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3plus-common/es/src/locales/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _es_ES__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./es-ES */ "./node_modules/d3plus-common/es/src/locales/es-ES.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "es-ES": _es_ES__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./node_modules/d3plus-common/es/src/merge.js":
/*!****************************************************!*\
  !*** ./node_modules/d3plus-common/es/src/merge.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-collection */ "./node_modules/d3-collection/src/index.js");
/* harmony import */ var _unique__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unique */ "./node_modules/d3plus-common/es/src/unique.js");



/**
    @function merge
    @desc Combines an Array of Objects together and returns a new Object.
    @param {Array} objects The Array of objects to be merged together.
    @param {Object} aggs An object containing specific aggregation methods (functions) for each key type. By default, numbers are summed and strings are returned as an array of unique values.
    @example <caption>this</caption>
merge([
  {id: "foo", group: "A", value: 10, links: [1, 2]},
  {id: "bar", group: "A", value: 20, links: [1, 3]}
]);
    @example <caption>returns this</caption>
{id: ["bar", "foo"], group: "A", value: 30, links: [1, 2, 3]}
*/

function objectMerge(objects) {
  var aggs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var availableKeys = Object(_unique__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["merge"])(objects.map(function (o) {
    return Object(d3_collection__WEBPACK_IMPORTED_MODULE_1__["keys"])(o);
  }))),
      newObject = {};
  availableKeys.forEach(function (k) {
    var values = objects.map(function (o) {
      return o[k];
    });
    var value;
    if (aggs[k]) value = aggs[k](values);else {
      var types = values.map(function (v) {
        return v || v === false ? v.constructor : v;
      }).filter(function (v) {
        return v !== void 0;
      });
      if (!types.length) value = undefined;else if (types.indexOf(Array) >= 0) {
        value = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["merge"])(values.map(function (v) {
          return v instanceof Array ? v : [v];
        }));
        value = Object(_unique__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
        if (value.length === 1) value = value[0];
      } else if (types.indexOf(String) >= 0) {
        value = Object(_unique__WEBPACK_IMPORTED_MODULE_2__["default"])(values);
        if (value.length === 1) value = value[0];
      } else if (types.indexOf(Number) >= 0) value = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["sum"])(values);else if (types.indexOf(Object) >= 0) {
        value = Object(_unique__WEBPACK_IMPORTED_MODULE_2__["default"])(values.filter(function (v) {
          return v;
        }));
        if (value.length === 1) value = value[0];else value = objectMerge(value);
      } else {
        value = Object(_unique__WEBPACK_IMPORTED_MODULE_2__["default"])(values.filter(function (v) {
          return v !== void 0;
        }));
        if (value.length === 1) value = value[0];
      }
    }
    newObject[k] = value;
  });
  return newObject;
}

/* harmony default export */ __webpack_exports__["default"] = (objectMerge);

/***/ }),

/***/ "./node_modules/d3plus-common/es/src/parseSides.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3plus-common/es/src/parseSides.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 @function parseSides
 @desc Converts a string of directional CSS shorthand values into an object with the values expanded.
 @param {String|Number} sides The CSS shorthand string to expand.
 */
/* harmony default export */ __webpack_exports__["default"] = (function (sides) {
  var values;
  if (typeof sides === "number") values = [sides];else values = sides.split(/\s+/);
  if (values.length === 1) values = [values[0], values[0], values[0], values[0]];else if (values.length === 2) values = values.concat(values);else if (values.length === 3) values.push(values[1]);
  return ["top", "right", "bottom", "left"].reduce(function (acc, direction, i) {
    var value = parseFloat(values[i]);
    acc[direction] = value || 0;
    return acc;
  }, {});
});

/***/ }),

/***/ "./node_modules/d3plus-common/es/src/prefix.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3plus-common/es/src/prefix.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
    @function prefix
    @desc Returns the appropriate CSS vendor prefix, given the current browser.
*/
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if ("-webkit-transform" in document.body.style) return "-webkit-";else if ("-moz-transform" in document.body.style) return "-moz-";else if ("-ms-transform" in document.body.style) return "-ms-";else if ("-o-transform" in document.body.style) return "-o-";else return "";
});

/***/ }),

/***/ "./node_modules/d3plus-common/es/src/stylize.js":
/*!******************************************************!*\
  !*** ./node_modules/d3plus-common/es/src/stylize.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
    @function stylize
    @desc Applies each key/value in an object as a style.
    @param {D3selection} elem The D3 element to apply the styles to.
    @param {Object} styles An object of key/value style pairs.
*/
/* harmony default export */ __webpack_exports__["default"] = (function (e) {
  var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var k in s) {
    if ({}.hasOwnProperty.call(s, k)) e.style(k, s[k]);
  }
});

/***/ }),

/***/ "./node_modules/d3plus-common/es/src/unique.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3plus-common/es/src/unique.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
    @function unique
    @desc ES5 implementation to reduce an Array of values to unique instances.
    @param {Array} objects The Array of objects to be filtered.
    @example <caption>this</caption>
unique(["apple", "banana", "apple"]);
    @example <caption>returns this</caption>
["apple", "banana"]
*/
/* harmony default export */ __webpack_exports__["default"] = (function (arr) {
  return arr.filter(function (k, i, a) {
    return a.indexOf(k) === i;
  });
});

/***/ }),

/***/ "./node_modules/d3plus-common/es/src/uuid.js":
/*!***************************************************!*\
  !*** ./node_modules/d3plus-common/es/src/uuid.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
    @function s
    @desc Returns 4 random characters, used for constructing unique identifiers.
    @private
*/
function s() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
/**
    @function uuid
    @summary Returns a unique identifier.
*/


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return "".concat(s()).concat(s(), "-").concat(s(), "-").concat(s(), "-").concat(s(), "-").concat(s()).concat(s()).concat(s());
});

/***/ }),

/***/ "./node_modules/d3plus-text/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/d3plus-text/es/index.js ***!
  \**********************************************/
/*! exports provided: fontExists, rtl, stringify, strip, TextBox, textSplit, textWidth, textWrap, titleCase, trim, trimLeft, trimRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_fontExists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/fontExists */ "./node_modules/d3plus-text/es/src/fontExists.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontExists", function() { return _src_fontExists__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_rtl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/rtl */ "./node_modules/d3plus-text/es/src/rtl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rtl", function() { return _src_rtl__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/stringify */ "./node_modules/d3plus-text/es/src/stringify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _src_stringify__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_strip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/strip */ "./node_modules/d3plus-text/es/src/strip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strip", function() { return _src_strip__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_TextBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/TextBox */ "./node_modules/d3plus-text/es/src/TextBox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextBox", function() { return _src_TextBox__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_textSplit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/textSplit */ "./node_modules/d3plus-text/es/src/textSplit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textSplit", function() { return _src_textSplit__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_textWidth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/textWidth */ "./node_modules/d3plus-text/es/src/textWidth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textWidth", function() { return _src_textWidth__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_textWrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/textWrap */ "./node_modules/d3plus-text/es/src/textWrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textWrap", function() { return _src_textWrap__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_titleCase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/titleCase */ "./node_modules/d3plus-text/es/src/titleCase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "titleCase", function() { return _src_titleCase__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _src_trim__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/trim */ "./node_modules/d3plus-text/es/src/trim.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return _src_trim__WEBPACK_IMPORTED_MODULE_9__["trim"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trimLeft", function() { return _src_trim__WEBPACK_IMPORTED_MODULE_9__["trimLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trimRight", function() { return _src_trim__WEBPACK_IMPORTED_MODULE_9__["trimRight"]; });












/***/ }),

/***/ "./node_modules/d3plus-text/es/src/TextBox.js":
/*!****************************************************!*\
  !*** ./node_modules/d3plus-text/es/src/TextBox.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextBox; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-transition */ "./node_modules/d3-transition/src/index.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3plus_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3plus-common */ "./node_modules/d3plus-common/es/index.js");
/* harmony import */ var _fontExists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fontExists */ "./node_modules/d3plus-text/es/src/fontExists.js");
/* harmony import */ var _rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rtl */ "./node_modules/d3plus-text/es/src/rtl.js");
/* harmony import */ var _strip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./strip */ "./node_modules/d3plus-text/es/src/strip.js");
/* harmony import */ var _textSplit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./textSplit */ "./node_modules/d3plus-text/es/src/textSplit.js");
/* harmony import */ var _textWidth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./textWidth */ "./node_modules/d3plus-text/es/src/textWidth.js");
/* harmony import */ var _textWrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./textWrap */ "./node_modules/d3plus-text/es/src/textWrap.js");
/* harmony import */ var _trim__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trim */ "./node_modules/d3plus-text/es/src/trim.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/**
    @external BaseClass
    @see https://github.com/d3plus/d3plus-common#BaseClass
*/











var defaultHtmlLookup = {
  i: "font-style: italic;",
  em: "font-style: italic;",
  b: "font-weight: bold;",
  strong: "font-weight: bold;"
};
/**
    @class TextBox
    @extends external:BaseClass
    @desc Creates a wrapped text box for each point in an array of data. See [this example](https://d3plus.org/examples/d3plus-text/getting-started/) for help getting started using the TextBox class.
*/

var TextBox = /*#__PURE__*/function (_BaseClass) {
  _inherits(TextBox, _BaseClass);

  var _super = _createSuper(TextBox);

  /**
      @memberof TextBox
      @desc Invoked when creating a new class instance, and sets any default parameters.
      @private
  */
  function TextBox() {
    var _this;

    _classCallCheck(this, TextBox);

    _this = _super.call(this);
    _this._ariaHidden = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])("false");
    _this._delay = 0;
    _this._duration = 0;

    _this._ellipsis = function (text, line) {
      return line ? "".concat(text.replace(/\.|,$/g, ""), "...") : "";
    };

    _this._fontColor = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])("black");
    _this._fontFamily = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(["Roboto", "Helvetica Neue", "HelveticaNeue", "Helvetica", "Arial", "sans-serif"]);
    _this._fontMax = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(50);
    _this._fontMin = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(8);
    _this._fontOpacity = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(1);
    _this._fontResize = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(false);
    _this._fontSize = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(10);
    _this._fontStroke = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])("transparent");
    _this._fontStrokeWidth = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(0);
    _this._fontWeight = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(400);
    _this._height = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["accessor"])("height", 200);
    _this._html = defaultHtmlLookup;

    _this._id = function (d, i) {
      return d.id || "".concat(i);
    };

    _this._lineHeight = function (d, i) {
      return _this._fontSize(d, i) * 1.2;
    };

    _this._maxLines = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(null);
    _this._on = {};
    _this._overflow = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(false);
    _this._padding = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(0);
    _this._pointerEvents = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])("auto");
    _this._rotate = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(0);

    _this._rotateAnchor = function (d) {
      return [d.w / 2, d.h / 2];
    };

    _this._split = _textSplit__WEBPACK_IMPORTED_MODULE_7__["default"];
    _this._text = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["accessor"])("text");
    _this._textAnchor = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])("start");
    _this._verticalAlign = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])("top");
    _this._width = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["accessor"])("width", 200);
    _this._x = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["accessor"])("x", 0);
    _this._y = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["accessor"])("y", 0);
    return _this;
  }
  /**
      @memberof TextBox
      @desc Renders the text boxes. If a *callback* is specified, it will be called once the shapes are done drawing.
      @param {Function} [*callback* = undefined]
  */


  _createClass(TextBox, [{
    key: "render",
    value: function render(callback) {
      var _this2 = this;

      if (this._select === void 0) this.select(Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])("body").append("svg").style("width", "".concat(window.innerWidth, "px")).style("height", "".concat(window.innerHeight, "px")).node());
      var that = this;

      var boxes = this._select.selectAll(".d3plus-textBox").data(this._data.reduce(function (arr, d, i) {
        var t = _this2._text(d, i);

        if (t === void 0) return arr;
        t = Object(_trim__WEBPACK_IMPORTED_MODULE_10__["trim"])(t);

        var resize = _this2._fontResize(d, i);

        var lHRatio = _this2._lineHeight(d, i) / _this2._fontSize(d, i);

        var fS = resize ? _this2._fontMax(d, i) : _this2._fontSize(d, i),
            lH = resize ? fS * lHRatio : _this2._lineHeight(d, i),
            line = 1,
            lineData = [],
            sizes,
            wrapResults;
        var style = {
          "font-family": Object(_fontExists__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2._fontFamily(d, i)),
          "font-size": fS,
          "font-weight": _this2._fontWeight(d, i),
          "line-height": lH
        };
        var padding = Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["parseSides"])(_this2._padding(d, i));
        var h = _this2._height(d, i) - (padding.top + padding.bottom),
            w = _this2._width(d, i) - (padding.left + padding.right);
        var wrapper = Object(_textWrap__WEBPACK_IMPORTED_MODULE_9__["default"])().fontFamily(style["font-family"]).fontSize(fS).fontWeight(style["font-weight"]).lineHeight(lH).maxLines(_this2._maxLines(d, i)).height(h).overflow(_this2._overflow(d, i)).width(w).split(_this2._split);

        var fMax = _this2._fontMax(d, i),
            fMin = _this2._fontMin(d, i),
            vA = _this2._verticalAlign(d, i),
            words = _this2._split(t, i);
        /**
            Figures out the lineData to be used for wrapping.
            @private
        */


        function checkSize() {
          var truncate = function truncate() {
            if (line < 1) lineData = [that._ellipsis("", line)];else lineData[line - 1] = that._ellipsis(lineData[line - 1], line);
          }; // Constraint the font size


          fS = Object(d3_array__WEBPACK_IMPORTED_MODULE_2__["max"])([fS, fMin]);
          fS = Object(d3_array__WEBPACK_IMPORTED_MODULE_2__["min"])([fS, fMax]);

          if (resize) {
            lH = fS * lHRatio;
            wrapper.fontSize(fS).lineHeight(lH);
            style["font-size"] = fS;
            style["line-height"] = lH;
          }

          wrapResults = wrapper(t);
          lineData = wrapResults.lines.filter(function (l) {
            return l !== "";
          });
          line = lineData.length;

          if (wrapResults.truncated) {
            if (resize) {
              fS--;

              if (fS < fMin) {
                fS = fMin;
                truncate();
                return;
              } else checkSize();
            } else truncate();
          }
        }

        if (w > fMin && (h > lH || resize && h > fMin * lHRatio)) {
          if (resize) {
            sizes = Object(_textWidth__WEBPACK_IMPORTED_MODULE_8__["default"])(words, style);
            var areaMod = 1.165 + w / h * 0.1,
                boxArea = w * h,
                maxWidth = Object(d3_array__WEBPACK_IMPORTED_MODULE_2__["max"])(sizes),
                textArea = Object(d3_array__WEBPACK_IMPORTED_MODULE_2__["sum"])(sizes, function (d) {
              return d * lH;
            }) * areaMod;

            if (maxWidth > w || textArea > boxArea) {
              var areaRatio = Math.sqrt(boxArea / textArea),
                  widthRatio = w / maxWidth;
              var sizeRatio = Object(d3_array__WEBPACK_IMPORTED_MODULE_2__["min"])([areaRatio, widthRatio]);
              fS = Math.floor(fS * sizeRatio);
            }

            var heightMax = Math.floor(h * 0.8);
            if (fS > heightMax) fS = heightMax;
          }

          checkSize();
        }

        if (lineData.length) {
          var tH = line * lH;

          var r = _this2._rotate(d, i);

          var yP = r === 0 ? vA === "top" ? 0 : vA === "middle" ? h / 2 - tH / 2 : h - tH : 0;
          yP -= lH * 0.1;
          arr.push({
            aH: _this2._ariaHidden(d, i),
            data: d,
            i: i,
            lines: lineData,
            fC: _this2._fontColor(d, i),
            fStroke: _this2._fontStroke(d, i),
            fSW: _this2._fontStrokeWidth(d, i),
            fF: style["font-family"],
            fO: _this2._fontOpacity(d, i),
            fW: style["font-weight"],
            id: _this2._id(d, i),
            tA: _this2._textAnchor(d, i),
            vA: _this2._verticalAlign(d, i),
            widths: wrapResults.widths,
            fS: fS,
            lH: lH,
            w: w,
            h: h,
            r: r,
            x: _this2._x(d, i) + padding.left,
            y: _this2._y(d, i) + yP + padding.top
          });
        }

        return arr;
      }, []), function (d) {
        return _this2._id(d.data, d.i);
      });

      var t = Object(d3_transition__WEBPACK_IMPORTED_MODULE_1__["transition"])().duration(this._duration);

      if (this._duration === 0) {
        boxes.exit().remove();
      } else {
        boxes.exit().transition().delay(this._duration).remove();
        boxes.exit().selectAll("text").transition(t).attr("opacity", 0).style("opacity", 0);
      }
      /**
       * Applies translate and rotate to a text element.
       * @param {D3Selection} text
       * @private
       */


      function rotate(text) {
        text.attr("transform", function (d, i) {
          var rotateAnchor = that._rotateAnchor(d, i);

          return "translate(".concat(d.x, ", ").concat(d.y, ") rotate(").concat(d.r, ", ").concat(rotateAnchor[0], ", ").concat(rotateAnchor[1], ")");
        });
      }

      var update = boxes.enter().append("g").attr("class", "d3plus-textBox").attr("id", function (d) {
        return "d3plus-textBox-".concat(Object(_strip__WEBPACK_IMPORTED_MODULE_6__["default"])(d.id));
      }).call(rotate).merge(boxes);
      var rtl = Object(_rtl__WEBPACK_IMPORTED_MODULE_5__["default"])();
      update.style("pointer-events", function (d) {
        return _this2._pointerEvents(d.data, d.i);
      }).each(function (d) {
        /**
            Sets the inner text content of each <text> element.
            @private
        */
        function textContent(text) {
          text[that._html ? "html" : "text"](function (t) {
            return Object(_trim__WEBPACK_IMPORTED_MODULE_10__["trimRight"])(t).replace(/&([^\;&]*)/g, function (str, a) {
              return a === "amp" ? str : "&amp;".concat(a);
            }) // replaces all non-HTML ampersands with escaped entity
            .replace(/<([^A-z^/]+)/g, function (str, a) {
              return "&lt;".concat(a);
            }).replace(/<$/g, "&lt;") // replaces all non-HTML left angle brackets with escaped entity
            .replace(/(<[^>^\/]+>)([^<^>]+)$/g, function (str, a, b) {
              return "".concat(a).concat(b).concat(a.replace("<", "</"));
            }) // ands end tag to lines before mid-HTML break
            .replace(/^([^<^>]+)(<\/[^>]+>)/g, function (str, a, b) {
              return "".concat(b.replace("</", "<")).concat(a).concat(b);
            }) // ands start tag to lines after mid-HTML break
            .replace(/<([A-z]+)[^>]*>([^<^>]+)<\/[^>]+>/g, function (str, a, b) {
              var tag = that._html[a] ? "<tspan style=\"".concat(that._html[a], "\">") : "";
              return "".concat(tag.length ? tag : "").concat(b).concat(tag.length ? "</tspan>" : "");
            });
          });
        }
        /**
            Styles to apply to each <text> element.
            @private
        */


        function textStyle(text) {
          text.attr("aria-hidden", d.aH).attr("dir", rtl ? "rtl" : "ltr").attr("fill", d.fC).attr("stroke", d.fStroke).attr("stroke-width", d.fSW).attr("text-anchor", d.tA).attr("font-family", d.fF).style("font-family", d.fF).attr("font-size", "".concat(d.fS, "px")).style("font-size", "".concat(d.fS, "px")).attr("font-weight", d.fW).style("font-weight", d.fW).attr("x", "".concat(d.tA === "middle" ? d.w / 2 : rtl ? d.tA === "start" ? d.w : 0 : d.tA === "end" ? d.w : 2 * Math.sin(Math.PI * d.r / 180), "px")).attr("y", function (t, i) {
            return d.r === 0 || d.vA === "top" ? "".concat((i + 1) * d.lH - (d.lH - d.fS), "px") : d.vA === "middle" ? "".concat((d.h + d.fS) / 2 - (d.lH - d.fS) + (i - d.lines.length / 2 + 0.5) * d.lH, "px") : "".concat(d.h - 2 * (d.lH - d.fS) - (d.lines.length - (i + 1)) * d.lH + 2 * Math.cos(Math.PI * d.r / 180), "px");
          });
        }

        var texts = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(this).selectAll("text").data(d.lines);

        if (that._duration === 0) {
          texts.call(textContent).call(textStyle);
          texts.exit().remove();
          texts.enter().append("text").attr("dominant-baseline", "alphabetic").style("baseline-shift", "0%").attr("unicode-bidi", "bidi-override").call(textContent).call(textStyle).attr("opacity", d.fO).style("opacity", d.fO);
        } else {
          texts.call(textContent).transition(t).call(textStyle);
          texts.exit().transition(t).attr("opacity", 0).remove();
          texts.enter().append("text").attr("dominant-baseline", "alphabetic").style("baseline-shift", "0%").attr("opacity", 0).style("opacity", 0).call(textContent).call(textStyle).merge(texts).transition(t).delay(that._delay).call(textStyle).attr("opacity", d.fO).style("opacity", d.fO);
        }
      }).transition(t).call(rotate);
      var events = Object.keys(this._on),
          on = events.reduce(function (obj, e) {
        obj[e] = function (d, i) {
          return _this2._on[e](d.data, i);
        };

        return obj;
      }, {});

      for (var e = 0; e < events.length; e++) {
        update.on(events[e], on[events[e]]);
      }

      if (callback) setTimeout(callback, this._duration + 100);
      return this;
    }
    /**
        @memberof TextBox
        @desc If *value* is specified, sets the aria-hidden attribute to the specified function or string and returns the current class instance.
        @param {Function|String} *value*
        @chainable
    */

  }, {
    key: "ariaHidden",
    value: function ariaHidden(_) {
      return _ !== undefined ? (this._ariaHidden = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._ariaHidden;
    }
    /**
        @memberof TextBox
        @desc Sets the data array to the specified array. A text box will be drawn for each object in the array.
        @param {Array} [*data* = []]
        @chainable
    */

  }, {
    key: "data",
    value: function data(_) {
      return arguments.length ? (this._data = _, this) : this._data;
    }
    /**
        @memberof TextBox
        @desc Sets the animation delay to the specified number in milliseconds.
        @param {Number} [*value* = 0]
        @chainable
    */

  }, {
    key: "delay",
    value: function delay(_) {
      return arguments.length ? (this._delay = _, this) : this._delay;
    }
    /**
        @memberof TextBox
        @desc Sets the animation duration to the specified number in milliseconds.
        @param {Number} [*value* = 0]
        @chainable
    */

  }, {
    key: "duration",
    value: function duration(_) {
      return arguments.length ? (this._duration = _, this) : this._duration;
    }
    /**
        @memberof TextBox
        @desc Sets the function that handles what to do when a line is truncated. It should return the new value for the line, and is passed 2 arguments: the String of text for the line in question, and the number of the line. By default, an ellipsis is added to the end of any line except if it is the first word that cannot fit (in that case, an empty string is returned).
        @param {Function|String} [*value*]
        @chainable
        @example <caption>default accessor</caption>
    function(text, line) {
    return line ? text.replace(/\.|,$/g, "") + "..." : "";
    }
    */

  }, {
    key: "ellipsis",
    value: function ellipsis(_) {
      return arguments.length ? (this._ellipsis = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._ellipsis;
    }
    /**
        @memberof TextBox
        @desc Sets the font color to the specified accessor function or static string, which is inferred from the [DOM selection](#textBox.select) by default.
        @param {Function|String} [*value* = "black"]
        @chainable
    */

  }, {
    key: "fontColor",
    value: function fontColor(_) {
      return arguments.length ? (this._fontColor = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._fontColor;
    }
    /**
        @memberof TextBox
        @desc Defines the font-family to be used. The value passed can be either a *String* name of a font, a comma-separated list of font-family fallbacks, an *Array* of fallbacks, or a *Function* that returns either a *String* or an *Array*. If supplying multiple fallback fonts, the [fontExists](#fontExists) function will be used to determine the first available font on the client's machine.
        @param {Array|Function|String} [*value* = ["Roboto", "Helvetica Neue", "HelveticaNeue", "Helvetica", "Arial", "sans-serif"]]
        @chainable
    */

  }, {
    key: "fontFamily",
    value: function fontFamily(_) {
      return arguments.length ? (this._fontFamily = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._fontFamily;
    }
    /**
        @memberof TextBox
        @desc Sets the maximum font size to the specified accessor function or static number (which corresponds to pixel units), which is used when [dynamically resizing fonts](#textBox.fontResize).
        @param {Function|Number} [*value* = 50]
        @chainable
    */

  }, {
    key: "fontMax",
    value: function fontMax(_) {
      return arguments.length ? (this._fontMax = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._fontMax;
    }
    /**
        @memberof TextBox
        @desc Sets the minimum font size to the specified accessor function or static number (which corresponds to pixel units), which is used when [dynamically resizing fonts](#textBox.fontResize).
        @param {Function|Number} [*value* = 8]
        @chainable
    */

  }, {
    key: "fontMin",
    value: function fontMin(_) {
      return arguments.length ? (this._fontMin = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._fontMin;
    }
    /**
        @memberof TextBox
        @desc Sets the font opacity to the specified accessor function or static number between 0 and 1.
        @param {Function|Number} [*value* = 1]
        @chainable
     */

  }, {
    key: "fontOpacity",
    value: function fontOpacity(_) {
      return arguments.length ? (this._fontOpacity = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._fontOpacity;
    }
    /**
        @memberof TextBox
        @desc Toggles font resizing, which can either be defined as a static boolean for all data points, or an accessor function that returns a boolean. See [this example](http://d3plus.org/examples/d3plus-text/resizing-text/) for a side-by-side comparison.
        @param {Function|Boolean} [*value* = false]
        @chainable
    */

  }, {
    key: "fontResize",
    value: function fontResize(_) {
      return arguments.length ? (this._fontResize = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._fontResize;
    }
    /**
        @memberof TextBox
        @desc Sets the font size to the specified accessor function or static number (which corresponds to pixel units), which is inferred from the [DOM selection](#textBox.select) by default.
        @param {Function|Number} [*value* = 10]
        @chainable
    */

  }, {
    key: "fontSize",
    value: function fontSize(_) {
      return arguments.length ? (this._fontSize = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._fontSize;
    }
    /**
        @memberof TextBox
        @desc Sets the font stroke color for the rendered text.
        @param {Function|String} [*value* = "transparent"]
        @chainable
    */

  }, {
    key: "fontStroke",
    value: function fontStroke(_) {
      return arguments.length ? (this._fontStroke = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._fontStroke;
    }
    /**
        @memberof TextBox
        @desc Sets the font stroke width for the rendered text.
        @param {Function|Number} [*value* = 0]
        @chainable
    */

  }, {
    key: "fontStrokeWidth",
    value: function fontStrokeWidth(_) {
      return arguments.length ? (this._fontStrokeWidth = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._fontStrokeWidth;
    }
    /**
        @memberof TextBox
        @desc Sets the font weight to the specified accessor function or static number, which is inferred from the [DOM selection](#textBox.select) by default.
        @param {Function|Number|String} [*value* = 400]
        @chainable
    */

  }, {
    key: "fontWeight",
    value: function fontWeight(_) {
      return arguments.length ? (this._fontWeight = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._fontWeight;
    }
    /**
        @memberof TextBox
        @desc Sets the height for each box to the specified accessor function or static number.
        @param {Function|Number} [*value*]
        @chainable
        @example <caption>default accessor</caption>
    function(d) {
    return d.height || 200;
    }
    */

  }, {
    key: "height",
    value: function height(_) {
      return arguments.length ? (this._height = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._height;
    }
    /**
        @memberof TextBox
        @desc Configures the ability to render simple HTML tags. Defaults to supporting `<b>`, `<strong>`, `<i>`, and `<em>`, set to false to disable or provide a mapping of tags to svg styles
        @param {Object|Boolean} [*value* = {
                  i: 'font-style: italic;',
                  em: 'font-style: italic;',
                  b: 'font-weight: bold;',
                  strong: 'font-weight: bold;'
              }]
        @chainable
    */

  }, {
    key: "html",
    value: function html(_) {
      return arguments.length ? (this._html = typeof _ === "boolean" ? _ ? defaultHtmlLookup : false : _, this) : this._html;
    }
    /**
        @memberof TextBox
        @desc Defines the unique id for each box to the specified accessor function or static number.
        @param {Function|Number} [*value*]
        @chainable
        @example <caption>default accessor</caption>
    function(d, i) {
    return d.id || i + "";
    }
    */

  }, {
    key: "id",
    value: function id(_) {
      return arguments.length ? (this._id = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._id;
    }
    /**
        @memberof TextBox
        @desc Sets the line height to the specified accessor function or static number, which is 1.2 times the [font size](#textBox.fontSize) by default.
        @param {Function|Number} [*value*]
        @chainable
    */

  }, {
    key: "lineHeight",
    value: function lineHeight(_) {
      return arguments.length ? (this._lineHeight = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._lineHeight;
    }
    /**
        @memberof TextBox
        @desc Restricts the maximum number of lines to wrap onto, which is null (unlimited) by default.
        @param {Function|Number} [*value*]
        @chainable
    */

  }, {
    key: "maxLines",
    value: function maxLines(_) {
      return arguments.length ? (this._maxLines = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._maxLines;
    }
    /**
        @memberof TextBox
        @desc Sets the text overflow to the specified accessor function or static boolean.
        @param {Function|Boolean} [*value* = false]
        @chainable
    */

  }, {
    key: "overflow",
    value: function overflow(_) {
      return arguments.length ? (this._overflow = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._overflow;
    }
    /**
        @memberof TextBox
        @desc Sets the padding to the specified accessor function, CSS shorthand string, or static number, which is 0 by default.
        @param {Function|Number|String} [*value*]
        @chainable
    */

  }, {
    key: "padding",
    value: function padding(_) {
      return arguments.length ? (this._padding = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._padding;
    }
    /**
        @memberof TextBox
        @desc Sets the pointer-events to the specified accessor function or static string.
        @param {Function|String} [*value* = "auto"]
        @chainable
    */

  }, {
    key: "pointerEvents",
    value: function pointerEvents(_) {
      return arguments.length ? (this._pointerEvents = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._pointerEvents;
    }
    /**
        @memberof TextBox
        @desc Sets the rotate percentage for each box to the specified accessor function or static string.
        @param {Function|Number} [*value* = 0]
        @chainable
    */

  }, {
    key: "rotate",
    value: function rotate(_) {
      return arguments.length ? (this._rotate = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._rotate;
    }
    /**
        @memberof TextBox
        @desc Sets the anchor point around which to rotate the text box.
        @param {Function|Number[]}
        @chainable
     */

  }, {
    key: "rotateAnchor",
    value: function rotateAnchor(_) {
      return arguments.length ? (this._rotateAnchor = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._rotateAnchor;
    }
    /**
        @memberof TextBox
        @desc Sets the SVG container element to the specified d3 selector or DOM element. If not explicitly specified, an SVG element will be added to the page for use.
        @param {String|HTMLElement} [*selector*]
        @chainable
    */

  }, {
    key: "select",
    value: function select(_) {
      return arguments.length ? (this._select = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(_), this) : this._select;
    }
    /**
        @memberof TextBox
        @desc Sets the word split behavior to the specified function, which when passed a string is expected to return that string split into an array of words.
        @param {Function} [*value*]
        @chainable
    */

  }, {
    key: "split",
    value: function split(_) {
      return arguments.length ? (this._split = _, this) : this._split;
    }
    /**
        @memberof TextBox
        @desc Sets the text for each box to the specified accessor function or static string.
        @param {Function|String} [*value*]
        @chainable
        @example <caption>default accessor</caption>
    function(d) {
    return d.text;
    }
    */

  }, {
    key: "text",
    value: function text(_) {
      return arguments.length ? (this._text = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._text;
    }
    /**
        @memberof TextBox
        @desc Sets the horizontal text anchor to the specified accessor function or static string, whose values are analagous to the SVG [text-anchor](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor) property.
        @param {Function|String} [*value* = "start"]
        @chainable
    */

  }, {
    key: "textAnchor",
    value: function textAnchor(_) {
      return arguments.length ? (this._textAnchor = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._textAnchor;
    }
    /**
        @memberof TextBox
        @desc Sets the vertical alignment to the specified accessor function or static string. Accepts `"top"`, `"middle"`, and `"bottom"`.
        @param {Function|String} [*value* = "top"]
        @chainable
    */

  }, {
    key: "verticalAlign",
    value: function verticalAlign(_) {
      return arguments.length ? (this._verticalAlign = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._verticalAlign;
    }
    /**
        @memberof TextBox
        @desc Sets the width for each box to the specified accessor function or static number.
        @param {Function|Number} [*value*]
        @chainable
        @example <caption>default accessor</caption>
    function(d) {
    return d.width || 200;
    }
    */

  }, {
    key: "width",
    value: function width(_) {
      return arguments.length ? (this._width = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._width;
    }
    /**
        @memberof TextBox
        @desc Sets the x position for each box to the specified accessor function or static number. The number given should correspond to the left side of the textBox.
        @param {Function|Number} [*value*]
        @chainable
        @example <caption>default accessor</caption>
    function(d) {
    return d.x || 0;
    }
    */

  }, {
    key: "x",
    value: function x(_) {
      return arguments.length ? (this._x = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._x;
    }
    /**
        @memberof TextBox
        @desc Sets the y position for each box to the specified accessor function or static number. The number given should correspond to the top side of the textBox.
        @param {Function|Number} [*value*]
        @chainable
        @example <caption>default accessor</caption>
    function(d) {
    return d.y || 0;
    }
    */

  }, {
    key: "y",
    value: function y(_) {
      return arguments.length ? (this._y = typeof _ === "function" ? _ : Object(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["constant"])(_), this) : this._y;
    }
  }]);

  return TextBox;
}(d3plus_common__WEBPACK_IMPORTED_MODULE_3__["BaseClass"]);



/***/ }),

/***/ "./node_modules/d3plus-text/es/src/combiningMarks.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3plus-text/es/src/combiningMarks.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// scraped from http://www.fileformat.info/info/unicode/category/Mc/list.htm
// and http://www.fileformat.info/info/unicode/category/Mn/list.htm
// JSON.stringify([].slice.call(document.getElementsByClassName("table-list")[0].getElementsByTagName("tr")).filter(function(d){ return d.getElementsByTagName("a").length && d.getElementsByTagName("a")[0].innerHTML.length === 6; }).map(function(d){ return d.getElementsByTagName("a")[0].innerHTML.replace("U", "u").replace("+", ""); }).sort());
// The following unicode characters combine to form new characters and should never be split from surrounding characters.
var a = ["u0903", "u093B", "u093E", "u093F", "u0940", "u0949", "u094A", "u094B", "u094C", "u094E", "u094F", "u0982", "u0983", "u09BE", "u09BF", "u09C0", "u09C7", "u09C8", "u09CB", "u09CC", "u09D7", "u0A03", "u0A3E", "u0A3F", "u0A40", "u0A83", "u0ABE", "u0ABF", "u0AC0", "u0AC9", "u0ACB", "u0ACC", "u0B02", "u0B03", "u0B3E", "u0B40", "u0B47", "u0B48", "u0B4B", "u0B4C", "u0B57", "u0BBE", "u0BBF", "u0BC1", "u0BC2", "u0BC6", "u0BC7", "u0BC8", "u0BCA", "u0BCB", "u0BCC", "u0BD7", "u0C01", "u0C02", "u0C03", "u0C41", "u0C42", "u0C43", "u0C44", "u0C82", "u0C83", "u0CBE", "u0CC0", "u0CC1", "u0CC2", "u0CC3", "u0CC4", "u0CC7", "u0CC8", "u0CCA", "u0CCB", "u0CD5", "u0CD6", "u0D02", "u0D03", "u0D3E", "u0D3F", "u0D40", "u0D46", "u0D47", "u0D48", "u0D4A", "u0D4B", "u0D4C", "u0D57", "u0D82", "u0D83", "u0DCF", "u0DD0", "u0DD1", "u0DD8", "u0DD9", "u0DDA", "u0DDB", "u0DDC", "u0DDD", "u0DDE", "u0DDF", "u0DF2", "u0DF3", "u0F3E", "u0F3F", "u0F7F", "u102B", "u102C", "u1031", "u1038", "u103B", "u103C", "u1056", "u1057", "u1062", "u1063", "u1064", "u1067", "u1068", "u1069", "u106A", "u106B", "u106C", "u106D", "u1083", "u1084", "u1087", "u1088", "u1089", "u108A", "u108B", "u108C", "u108F", "u109A", "u109B", "u109C", "u17B6", "u17BE", "u17BF", "u17C0", "u17C1", "u17C2", "u17C3", "u17C4", "u17C5", "u17C7", "u17C8", "u1923", "u1924", "u1925", "u1926", "u1929", "u192A", "u192B", "u1930", "u1931", "u1933", "u1934", "u1935", "u1936", "u1937", "u1938", "u1A19", "u1A1A", "u1A55", "u1A57", "u1A61", "u1A63", "u1A64", "u1A6D", "u1A6E", "u1A6F", "u1A70", "u1A71", "u1A72", "u1B04", "u1B35", "u1B3B", "u1B3D", "u1B3E", "u1B3F", "u1B40", "u1B41", "u1B43", "u1B44", "u1B82", "u1BA1", "u1BA6", "u1BA7", "u1BAA", "u1BE7", "u1BEA", "u1BEB", "u1BEC", "u1BEE", "u1BF2", "u1BF3", "u1C24", "u1C25", "u1C26", "u1C27", "u1C28", "u1C29", "u1C2A", "u1C2B", "u1C34", "u1C35", "u1CE1", "u1CF2", "u1CF3", "u302E", "u302F", "uA823", "uA824", "uA827", "uA880", "uA881", "uA8B4", "uA8B5", "uA8B6", "uA8B7", "uA8B8", "uA8B9", "uA8BA", "uA8BB", "uA8BC", "uA8BD", "uA8BE", "uA8BF", "uA8C0", "uA8C1", "uA8C2", "uA8C3", "uA952", "uA953", "uA983", "uA9B4", "uA9B5", "uA9BA", "uA9BB", "uA9BD", "uA9BE", "uA9BF", "uA9C0", "uAA2F", "uAA30", "uAA33", "uAA34", "uAA4D", "uAA7B", "uAA7D", "uAAEB", "uAAEE", "uAAEF", "uAAF5", "uABE3", "uABE4", "uABE6", "uABE7", "uABE9", "uABEA", "uABEC"];
var b = ["u0300", "u0301", "u0302", "u0303", "u0304", "u0305", "u0306", "u0307", "u0308", "u0309", "u030A", "u030B", "u030C", "u030D", "u030E", "u030F", "u0310", "u0311", "u0312", "u0313", "u0314", "u0315", "u0316", "u0317", "u0318", "u0319", "u031A", "u031B", "u031C", "u031D", "u031E", "u031F", "u0320", "u0321", "u0322", "u0323", "u0324", "u0325", "u0326", "u0327", "u0328", "u0329", "u032A", "u032B", "u032C", "u032D", "u032E", "u032F", "u0330", "u0331", "u0332", "u0333", "u0334", "u0335", "u0336", "u0337", "u0338", "u0339", "u033A", "u033B", "u033C", "u033D", "u033E", "u033F", "u0340", "u0341", "u0342", "u0343", "u0344", "u0345", "u0346", "u0347", "u0348", "u0349", "u034A", "u034B", "u034C", "u034D", "u034E", "u034F", "u0350", "u0351", "u0352", "u0353", "u0354", "u0355", "u0356", "u0357", "u0358", "u0359", "u035A", "u035B", "u035C", "u035D", "u035E", "u035F", "u0360", "u0361", "u0362", "u0363", "u0364", "u0365", "u0366", "u0367", "u0368", "u0369", "u036A", "u036B", "u036C", "u036D", "u036E", "u036F", "u0483", "u0484", "u0485", "u0486", "u0487", "u0591", "u0592", "u0593", "u0594", "u0595", "u0596", "u0597", "u0598", "u0599", "u059A", "u059B", "u059C", "u059D", "u059E", "u059F", "u05A0", "u05A1", "u05A2", "u05A3", "u05A4", "u05A5", "u05A6", "u05A7", "u05A8", "u05A9", "u05AA", "u05AB", "u05AC", "u05AD", "u05AE", "u05AF", "u05B0", "u05B1", "u05B2", "u05B3", "u05B4", "u05B5", "u05B6", "u05B7", "u05B8", "u05B9", "u05BA", "u05BB", "u05BC", "u05BD", "u05BF", "u05C1", "u05C2", "u05C4", "u05C5", "u05C7", "u0610", "u0611", "u0612", "u0613", "u0614", "u0615", "u0616", "u0617", "u0618", "u0619", "u061A", "u064B", "u064C", "u064D", "u064E", "u064F", "u0650", "u0651", "u0652", "u0653", "u0654", "u0655", "u0656", "u0657", "u0658", "u0659", "u065A", "u065B", "u065C", "u065D", "u065E", "u065F", "u0670", "u06D6", "u06D7", "u06D8", "u06D9", "u06DA", "u06DB", "u06DC", "u06DF", "u06E0", "u06E1", "u06E2", "u06E3", "u06E4", "u06E7", "u06E8", "u06EA", "u06EB", "u06EC", "u06ED", "u0711", "u0730", "u0731", "u0732", "u0733", "u0734", "u0735", "u0736", "u0737", "u0738", "u0739", "u073A", "u073B", "u073C", "u073D", "u073E", "u073F", "u0740", "u0741", "u0742", "u0743", "u0744", "u0745", "u0746", "u0747", "u0748", "u0749", "u074A", "u07A6", "u07A7", "u07A8", "u07A9", "u07AA", "u07AB", "u07AC", "u07AD", "u07AE", "u07AF", "u07B0", "u07EB", "u07EC", "u07ED", "u07EE", "u07EF", "u07F0", "u07F1", "u07F2", "u07F3", "u0816", "u0817", "u0818", "u0819", "u081B", "u081C", "u081D", "u081E", "u081F", "u0820", "u0821", "u0822", "u0823", "u0825", "u0826", "u0827", "u0829", "u082A", "u082B", "u082C", "u082D", "u0859", "u085A", "u085B", "u08E3", "u08E4", "u08E5", "u08E6", "u08E7", "u08E8", "u08E9", "u08EA", "u08EB", "u08EC", "u08ED", "u08EE", "u08EF", "u08F0", "u08F1", "u08F2", "u08F3", "u08F4", "u08F5", "u08F6", "u08F7", "u08F8", "u08F9", "u08FA", "u08FB", "u08FC", "u08FD", "u08FE", "u08FF", "u0900", "u0901", "u0902", "u093A", "u093C", "u0941", "u0942", "u0943", "u0944", "u0945", "u0946", "u0947", "u0948", "u094D", "u0951", "u0952", "u0953", "u0954", "u0955", "u0956", "u0957", "u0962", "u0963", "u0981", "u09BC", "u09C1", "u09C2", "u09C3", "u09C4", "u09CD", "u09E2", "u09E3", "u0A01", "u0A02", "u0A3C", "u0A41", "u0A42", "u0A47", "u0A48", "u0A4B", "u0A4C", "u0A4D", "u0A51", "u0A70", "u0A71", "u0A75", "u0A81", "u0A82", "u0ABC", "u0AC1", "u0AC2", "u0AC3", "u0AC4", "u0AC5", "u0AC7", "u0AC8", "u0ACD", "u0AE2", "u0AE3", "u0B01", "u0B3C", "u0B3F", "u0B41", "u0B42", "u0B43", "u0B44", "u0B4D", "u0B56", "u0B62", "u0B63", "u0B82", "u0BC0", "u0BCD", "u0C00", "u0C3E", "u0C3F", "u0C40", "u0C46", "u0C47", "u0C48", "u0C4A", "u0C4B", "u0C4C", "u0C4D", "u0C55", "u0C56", "u0C62", "u0C63", "u0C81", "u0CBC", "u0CBF", "u0CC6", "u0CCC", "u0CCD", "u0CE2", "u0CE3", "u0D01", "u0D41", "u0D42", "u0D43", "u0D44", "u0D4D", "u0D62", "u0D63", "u0DCA", "u0DD2", "u0DD3", "u0DD4", "u0DD6", "u0E31", "u0E34", "u0E35", "u0E36", "u0E37", "u0E38", "u0E39", "u0E3A", "u0E47", "u0E48", "u0E49", "u0E4A", "u0E4B", "u0E4C", "u0E4D", "u0E4E", "u0EB1", "u0EB4", "u0EB5", "u0EB6", "u0EB7", "u0EB8", "u0EB9", "u0EBB", "u0EBC", "u0EC8", "u0EC9", "u0ECA", "u0ECB", "u0ECC", "u0ECD", "u0F18", "u0F19", "u0F35", "u0F37", "u0F39", "u0F71", "u0F72", "u0F73", "u0F74", "u0F75", "u0F76", "u0F77", "u0F78", "u0F79", "u0F7A", "u0F7B", "u0F7C", "u0F7D", "u0F7E", "u0F80", "u0F81", "u0F82", "u0F83", "u0F84", "u0F86", "u0F87", "u0F8D", "u0F8E", "u0F8F", "u0F90", "u0F91", "u0F92", "u0F93", "u0F94", "u0F95", "u0F96", "u0F97", "u0F99", "u0F9A", "u0F9B", "u0F9C", "u0F9D", "u0F9E", "u0F9F", "u0FA0", "u0FA1", "u0FA2", "u0FA3", "u0FA4", "u0FA5", "u0FA6", "u0FA7", "u0FA8", "u0FA9", "u0FAA", "u0FAB", "u0FAC", "u0FAD", "u0FAE", "u0FAF", "u0FB0", "u0FB1", "u0FB2", "u0FB3", "u0FB4", "u0FB5", "u0FB6", "u0FB7", "u0FB8", "u0FB9", "u0FBA", "u0FBB", "u0FBC", "u0FC6", "u102D", "u102E", "u102F", "u1030", "u1032", "u1033", "u1034", "u1035", "u1036", "u1037", "u1039", "u103A", "u103D", "u103E", "u1058", "u1059", "u105E", "u105F", "u1060", "u1071", "u1072", "u1073", "u1074", "u1082", "u1085", "u1086", "u108D", "u109D", "u135D", "u135E", "u135F", "u1712", "u1713", "u1714", "u1732", "u1733", "u1734", "u1752", "u1753", "u1772", "u1773", "u17B4", "u17B5", "u17B7", "u17B8", "u17B9", "u17BA", "u17BB", "u17BC", "u17BD", "u17C6", "u17C9", "u17CA", "u17CB", "u17CC", "u17CD", "u17CE", "u17CF", "u17D0", "u17D1", "u17D2", "u17D3", "u17DD", "u180B", "u180C", "u180D", "u18A9", "u1920", "u1921", "u1922", "u1927", "u1928", "u1932", "u1939", "u193A", "u193B", "u1A17", "u1A18", "u1A1B", "u1A56", "u1A58", "u1A59", "u1A5A", "u1A5B", "u1A5C", "u1A5D", "u1A5E", "u1A60", "u1A62", "u1A65", "u1A66", "u1A67", "u1A68", "u1A69", "u1A6A", "u1A6B", "u1A6C", "u1A73", "u1A74", "u1A75", "u1A76", "u1A77", "u1A78", "u1A79", "u1A7A", "u1A7B", "u1A7C", "u1A7F", "u1AB0", "u1AB1", "u1AB2", "u1AB3", "u1AB4", "u1AB5", "u1AB6", "u1AB7", "u1AB8", "u1AB9", "u1ABA", "u1ABB", "u1ABC", "u1ABD", "u1B00", "u1B01", "u1B02", "u1B03", "u1B34", "u1B36", "u1B37", "u1B38", "u1B39", "u1B3A", "u1B3C", "u1B42", "u1B6B", "u1B6C", "u1B6D", "u1B6E", "u1B6F", "u1B70", "u1B71", "u1B72", "u1B73", "u1B80", "u1B81", "u1BA2", "u1BA3", "u1BA4", "u1BA5", "u1BA8", "u1BA9", "u1BAB", "u1BAC", "u1BAD", "u1BE6", "u1BE8", "u1BE9", "u1BED", "u1BEF", "u1BF0", "u1BF1", "u1C2C", "u1C2D", "u1C2E", "u1C2F", "u1C30", "u1C31", "u1C32", "u1C33", "u1C36", "u1C37", "u1CD0", "u1CD1", "u1CD2", "u1CD4", "u1CD5", "u1CD6", "u1CD7", "u1CD8", "u1CD9", "u1CDA", "u1CDB", "u1CDC", "u1CDD", "u1CDE", "u1CDF", "u1CE0", "u1CE2", "u1CE3", "u1CE4", "u1CE5", "u1CE6", "u1CE7", "u1CE8", "u1CED", "u1CF4", "u1CF8", "u1CF9", "u1DC0", "u1DC1", "u1DC2", "u1DC3", "u1DC4", "u1DC5", "u1DC6", "u1DC7", "u1DC8", "u1DC9", "u1DCA", "u1DCB", "u1DCC", "u1DCD", "u1DCE", "u1DCF", "u1DD0", "u1DD1", "u1DD2", "u1DD3", "u1DD4", "u1DD5", "u1DD6", "u1DD7", "u1DD8", "u1DD9", "u1DDA", "u1DDB", "u1DDC", "u1DDD", "u1DDE", "u1DDF", "u1DE0", "u1DE1", "u1DE2", "u1DE3", "u1DE4", "u1DE5", "u1DE6", "u1DE7", "u1DE8", "u1DE9", "u1DEA", "u1DEB", "u1DEC", "u1DED", "u1DEE", "u1DEF", "u1DF0", "u1DF1", "u1DF2", "u1DF3", "u1DF4", "u1DF5", "u1DFC", "u1DFD", "u1DFE", "u1DFF", "u20D0", "u20D1", "u20D2", "u20D3", "u20D4", "u20D5", "u20D6", "u20D7", "u20D8", "u20D9", "u20DA", "u20DB", "u20DC", "u20E1", "u20E5", "u20E6", "u20E7", "u20E8", "u20E9", "u20EA", "u20EB", "u20EC", "u20ED", "u20EE", "u20EF", "u20F0", "u2CEF", "u2CF0", "u2CF1", "u2D7F", "u2DE0", "u2DE1", "u2DE2", "u2DE3", "u2DE4", "u2DE5", "u2DE6", "u2DE7", "u2DE8", "u2DE9", "u2DEA", "u2DEB", "u2DEC", "u2DED", "u2DEE", "u2DEF", "u2DF0", "u2DF1", "u2DF2", "u2DF3", "u2DF4", "u2DF5", "u2DF6", "u2DF7", "u2DF8", "u2DF9", "u2DFA", "u2DFB", "u2DFC", "u2DFD", "u2DFE", "u2DFF", "u302A", "u302B", "u302C", "u302D", "u3099", "u309A", "uA66F", "uA674", "uA675", "uA676", "uA677", "uA678", "uA679", "uA67A", "uA67B", "uA67C", "uA67D", "uA69E", "uA69F", "uA6F0", "uA6F1", "uA802", "uA806", "uA80B", "uA825", "uA826", "uA8C4", "uA8E0", "uA8E1", "uA8E2", "uA8E3", "uA8E4", "uA8E5", "uA8E6", "uA8E7", "uA8E8", "uA8E9", "uA8EA", "uA8EB", "uA8EC", "uA8ED", "uA8EE", "uA8EF", "uA8F0", "uA8F1", "uA926", "uA927", "uA928", "uA929", "uA92A", "uA92B", "uA92C", "uA92D", "uA947", "uA948", "uA949", "uA94A", "uA94B", "uA94C", "uA94D", "uA94E", "uA94F", "uA950", "uA951", "uA980", "uA981", "uA982", "uA9B3", "uA9B6", "uA9B7", "uA9B8", "uA9B9", "uA9BC", "uA9E5", "uAA29", "uAA2A", "uAA2B", "uAA2C", "uAA2D", "uAA2E", "uAA31", "uAA32", "uAA35", "uAA36", "uAA43", "uAA4C", "uAA7C", "uAAB0", "uAAB2", "uAAB3", "uAAB4", "uAAB7", "uAAB8", "uAABE", "uAABF", "uAAC1", "uAAEC", "uAAED", "uAAF6", "uABE5", "uABE8", "uABED", "uFB1E", "uFE00", "uFE01", "uFE02", "uFE03", "uFE04", "uFE05", "uFE06", "uFE07", "uFE08", "uFE09", "uFE0A", "uFE0B", "uFE0C", "uFE0D", "uFE0E", "uFE0F", "uFE20", "uFE21", "uFE22", "uFE23", "uFE24", "uFE25", "uFE26", "uFE27", "uFE28", "uFE29", "uFE2A", "uFE2B", "uFE2C", "uFE2D", "uFE2E", "uFE2F"];
/* harmony default export */ __webpack_exports__["default"] = (a.concat(b));

/***/ }),

/***/ "./node_modules/d3plus-text/es/src/fontExists.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3plus-text/es/src/fontExists.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _textWidth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textWidth */ "./node_modules/d3plus-text/es/src/textWidth.js");
/* harmony import */ var _trim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trim */ "./node_modules/d3plus-text/es/src/trim.js");


var alpha = "abcdefghiABCDEFGHI_!@#$%^&*()_+1234567890",
    checked = {},
    height = 32;
var dejavu, macos, monospace, proportional;
/**
    @function fontExists
    @desc Given either a single font-family or a list of fonts, returns the name of the first font that can be rendered, or `false` if none are installed on the user's machine.
    @param {String|Array} font Can be either a valid CSS font-family string (single or comma-separated names) or an Array of string names.
*/

var fontExists = function fontExists(font) {
  if (!dejavu) {
    dejavu = Object(_textWidth__WEBPACK_IMPORTED_MODULE_0__["default"])(alpha, {
      "font-family": "DejaVuSans",
      "font-size": height
    });
    macos = Object(_textWidth__WEBPACK_IMPORTED_MODULE_0__["default"])(alpha, {
      "font-family": "-apple-system",
      "font-size": height
    });
    monospace = Object(_textWidth__WEBPACK_IMPORTED_MODULE_0__["default"])(alpha, {
      "font-family": "monospace",
      "font-size": height
    });
    proportional = Object(_textWidth__WEBPACK_IMPORTED_MODULE_0__["default"])(alpha, {
      "font-family": "sans-serif",
      "font-size": height
    });
  }

  if (!(font instanceof Array)) font = font.split(",");
  font = font.map(function (f) {
    return Object(_trim__WEBPACK_IMPORTED_MODULE_1__["trim"])(f);
  });

  for (var i = 0; i < font.length; i++) {
    var fam = font[i];
    if (checked[fam] || ["-apple-system", "monospace", "sans-serif", "DejaVuSans"].includes(fam)) return fam;else if (checked[fam] === false) continue;
    var width = Object(_textWidth__WEBPACK_IMPORTED_MODULE_0__["default"])(alpha, {
      "font-family": fam,
      "font-size": height
    });
    checked[fam] = width !== monospace;
    if (checked[fam]) checked[fam] = width !== proportional;
    if (macos && checked[fam]) checked[fam] = width !== macos;
    if (dejavu && checked[fam]) checked[fam] = width !== dejavu;
    if (checked[fam]) return fam;
  }

  return false;
};

/* harmony default export */ __webpack_exports__["default"] = (fontExists);

/***/ }),

/***/ "./node_modules/d3plus-text/es/src/rtl.js":
/*!************************************************!*\
  !*** ./node_modules/d3plus-text/es/src/rtl.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");

/**
    @function rtl
    @desc Returns `true` if the HTML or body element has either the "dir" HTML attribute or the "direction" CSS property set to "rtl".
*/

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])("html").attr("dir") === "rtl" || Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])("body").attr("dir") === "rtl" || Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])("html").style("direction") === "rtl" || Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])("body").style("direction") === "rtl";
});

/***/ }),

/***/ "./node_modules/d3plus-text/es/src/stringify.js":
/*!******************************************************!*\
  !*** ./node_modules/d3plus-text/es/src/stringify.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
    @function stringify
    @desc Coerces value into a String.
    @param {String} value
*/
/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  if (value === void 0) value = "undefined";else if (!(typeof value === "string" || value instanceof String)) value = JSON.stringify(value);
  return value;
});

/***/ }),

/***/ "./node_modules/d3plus-text/es/src/strip.js":
/*!**************************************************!*\
  !*** ./node_modules/d3plus-text/es/src/strip.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// great unicode list: http://asecuritysite.com/coding/asc2
var diacritics = [[/[\300-\305]/g, "A"], [/[\340-\345]/g, "a"], [/[\306]/g, "AE"], [/[\346]/g, "ae"], [/[\337]/g, "B"], [/[\307]/g, "C"], [/[\347]/g, "c"], [/[\320\336\376]/g, "D"], [/[\360]/g, "d"], [/[\310-\313]/g, "E"], [/[\350-\353]/g, "e"], [/[\314-\317]/g, "I"], [/[\354-\357]/g, "i"], [/[\321]/g, "N"], [/[\361]/g, "n"], [/[\u014c\322-\326\330]/g, "O"], [/[\u014d\362-\366\370]/g, "o"], [/[\u016a\331-\334]/g, "U"], [/[\u016b\371-\374]/g, "u"], [/[\327]/g, "x"], [/[\335]/g, "Y"], [/[\375\377]/g, "y"]];
/**
    @function strip
    @desc Removes all non ASCII characters from a string.
    @param {String} value
*/

/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  return "".concat(value).replace(/[^A-Za-z0-9\-_]/g, function (_char) {
    if (_char === " ") return "-";
    var ret = false;

    for (var d = 0; d < diacritics.length; d++) {
      if (new RegExp(diacritics[d][0]).test(_char)) {
        ret = diacritics[d][1];
        break;
      }
    }

    return ret || "";
  });
});

/***/ }),

/***/ "./node_modules/d3plus-text/es/src/textSplit.js":
/*!******************************************************!*\
  !*** ./node_modules/d3plus-text/es/src/textSplit.js ***!
  \******************************************************/
/*! exports provided: default, prefixChars, splitChars, splitWords, suffixChars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixChars", function() { return prefixChars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitChars", function() { return splitChars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitWords", function() { return splitWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suffixChars", function() { return suffixChars; });
/* harmony import */ var _stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringify */ "./node_modules/d3plus-text/es/src/stringify.js");
/* harmony import */ var _combiningMarks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combiningMarks */ "./node_modules/d3plus-text/es/src/combiningMarks.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");



var splitChars = ["-", ";", ":", "&", "|", "u0E2F", // thai character pairannoi
"u0EAF", // lao ellipsis
"u0EC6", // lao ko la (word repetition)
"u0ECC", // lao cancellation mark
"u104A", // myanmar sign little section
"u104B", // myanmar sign section
"u104C", // myanmar symbol locative
"u104D", // myanmar symbol completed
"u104E", // myanmar symbol aforementioned
"u104F", // myanmar symbol genitive
"u2013", // en dash
"u2014", // em dash
"u2027", // simplified chinese hyphenation point
"u3000", // simplified chinese ideographic space
"u3001", // simplified chinese ideographic comma
"u3002", // simplified chinese ideographic full stop
"uFF0C", // full-width comma
"uFF5E" // wave dash
];
var prefixChars = ["'", "<", "(", "{", "[", "u00AB", // left-pointing double angle quotation mark
"u300A", // left double angle bracket
"u3008" // left angle bracket
];
var suffixChars = ["'", ">", ")", "}", "]", ".", "!", "?", "/", "u00BB", // right-pointing double angle quotation mark
"u300B", // right double angle bracket
"u3009" // right angle bracket
].concat(splitChars);
var burmeseRange = "\u1000-\u102A\u103F-\u1049\u1050-\u1055";
var japaneseRange = "\u3040-\u309F\u30A0-\u30FF\uFF00-\uFF0B\uFF0D-\uFF5D\uFF5F-\uFF9F\u3400-\u4DBF";
var chineseRange = "\u3400-\u9FBF";
var laoRange = "\u0E81-\u0EAE\u0EB0-\u0EC4\u0EC8-\u0ECB\u0ECD-\u0EDD";
var noSpaceRange = burmeseRange + chineseRange + japaneseRange + laoRange;
var splitWords = new RegExp("(\\".concat(splitChars.join("|\\"), ")*[^\\s|\\").concat(splitChars.join("|\\"), "]*(\\").concat(splitChars.join("|\\"), ")*"), "g");
var noSpaceLanguage = new RegExp("[".concat(noSpaceRange, "]"));
var splitAllChars = new RegExp("(\\".concat(prefixChars.join("|\\"), ")*[").concat(noSpaceRange, "](\\").concat(suffixChars.join("|\\"), "|\\").concat(_combiningMarks__WEBPACK_IMPORTED_MODULE_1__["default"].join("|\\"), ")*|[a-z0-9]+"), "gi");
/**
    @function textSplit
    @desc Splits a given sentence into an array of words.
    @param {String} sentence
*/

/* harmony default export */ __webpack_exports__["default"] = (function (sentence) {
  if (!noSpaceLanguage.test(sentence)) return Object(_stringify__WEBPACK_IMPORTED_MODULE_0__["default"])(sentence).match(splitWords).filter(function (w) {
    return w.length;
  });
  return Object(d3_array__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(_stringify__WEBPACK_IMPORTED_MODULE_0__["default"])(sentence).match(splitWords).map(function (d) {
    if (noSpaceLanguage.test(d)) return d.match(splitAllChars);
    return [d];
  }));
});


/***/ }),

/***/ "./node_modules/d3plus-text/es/src/textWidth.js":
/*!******************************************************!*\
  !*** ./node_modules/d3plus-text/es/src/textWidth.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Strips HTML and "un-escapes" escape characters.
 * @param {String} input
 */
function htmlDecode(input) {
  if (input.replace(/\s+/g, "") === "") return input;
  var doc = new DOMParser().parseFromString(input.replace(/<[^>]+>/g, ""), "text/html");
  return doc.documentElement ? doc.documentElement.textContent : input;
}
/**
    @function textWidth
    @desc Given a text string, returns the predicted pixel width of the string when placed into DOM.
    @param {String|Array} text Can be either a single string or an array of strings to analyze.
    @param {Object} [style] An object of CSS font styles to apply. Accepts any of the valid [CSS font property](http://www.w3schools.com/cssref/pr_font_font.asp) values.
*/


/* harmony default export */ __webpack_exports__["default"] = (function (text, style) {
  style = Object.assign({
    "font-size": 10,
    "font-family": "sans-serif",
    "font-style": "normal",
    "font-weight": 400,
    "font-variant": "normal"
  }, style);
  var context = document.createElement("canvas").getContext("2d");
  var font = [];
  font.push(style["font-style"]);
  font.push(style["font-variant"]);
  font.push(style["font-weight"]);
  font.push(typeof style["font-size"] === "string" ? style["font-size"] : "".concat(style["font-size"], "px"));
  font.push(style["font-family"]);
  context.font = font.join(" ");
  if (text instanceof Array) return text.map(function (t) {
    return context.measureText(htmlDecode(t)).width;
  });
  return context.measureText(htmlDecode(text)).width;
});

/***/ }),

/***/ "./node_modules/d3plus-text/es/src/textWrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3plus-text/es/src/textWrap.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _textWidth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textWidth */ "./node_modules/d3plus-text/es/src/textWidth.js");
/* harmony import */ var _textSplit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textSplit */ "./node_modules/d3plus-text/es/src/textSplit.js");
/* harmony import */ var _stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify */ "./node_modules/d3plus-text/es/src/stringify.js");
/* harmony import */ var _trim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trim */ "./node_modules/d3plus-text/es/src/trim.js");




/**
    @function textWrap
    @desc Based on the defined styles and dimensions, breaks a string into an array of strings for each line of text.
*/

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var fontFamily = "sans-serif",
      fontSize = 10,
      fontWeight = 400,
      height = 200,
      lineHeight,
      maxLines = null,
      overflow = false,
      split = _textSplit__WEBPACK_IMPORTED_MODULE_1__["default"],
      width = 200;
  /**
      The inner return object and wraps the text and returns the line data array.
      @private
  */

  function textWrap(sentence) {
    sentence = Object(_stringify__WEBPACK_IMPORTED_MODULE_2__["default"])(sentence);
    if (lineHeight === void 0) lineHeight = Math.ceil(fontSize * 1.4);
    var words = split(sentence);
    var style = {
      "font-family": fontFamily,
      "font-size": fontSize,
      "font-weight": fontWeight,
      "line-height": lineHeight
    };
    var line = 1,
        textProg = "",
        truncated = false,
        widthProg = 0;
    var lineData = [],
        sizes = Object(_textWidth__WEBPACK_IMPORTED_MODULE_0__["default"])(words, style),
        space = Object(_textWidth__WEBPACK_IMPORTED_MODULE_0__["default"])(" ", style);

    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var wordWidth = sizes[words.indexOf(word)];
      word += sentence.slice(textProg.length + word.length).match("^( |\n)*", "g")[0];

      if (textProg.slice(-1) === "\n" || widthProg + wordWidth > width) {
        if (!i && !overflow) {
          truncated = true;
          break;
        }

        if (lineData.length >= line) lineData[line - 1] = Object(_trim__WEBPACK_IMPORTED_MODULE_3__["trimRight"])(lineData[line - 1]);
        line++;

        if (lineHeight * line > height || wordWidth > width && !overflow || maxLines && line > maxLines) {
          truncated = true;
          break;
        }

        widthProg = 0;
        lineData.push(word);
      } else if (!i) lineData[0] = word;else lineData[line - 1] += word;

      textProg += word;
      widthProg += wordWidth;
      widthProg += word.match(/[\s]*$/g)[0].length * space;
    }

    return {
      lines: lineData,
      sentence: sentence,
      truncated: truncated,
      widths: Object(_textWidth__WEBPACK_IMPORTED_MODULE_0__["default"])(lineData, style),
      words: words
    };
  }
  /**
      @memberof textWrap
      @desc If *value* is specified, sets the font family accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current font family.
      @param {Function|String} [*value* = "sans-serif"]
  */


  textWrap.fontFamily = function (_) {
    return arguments.length ? (fontFamily = _, textWrap) : fontFamily;
  };
  /**
      @memberof textWrap
      @desc If *value* is specified, sets the font size accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current font size.
      @param {Function|Number} [*value* = 10]
  */


  textWrap.fontSize = function (_) {
    return arguments.length ? (fontSize = _, textWrap) : fontSize;
  };
  /**
      @memberof textWrap
      @desc If *value* is specified, sets the font weight accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current font weight.
      @param {Function|Number|String} [*value* = 400]
  */


  textWrap.fontWeight = function (_) {
    return arguments.length ? (fontWeight = _, textWrap) : fontWeight;
  };
  /**
      @memberof textWrap
      @desc If *value* is specified, sets height limit to the specified value and returns this generator. If *value* is not specified, returns the current value.
      @param {Number} [*value* = 200]
  */


  textWrap.height = function (_) {
    return arguments.length ? (height = _, textWrap) : height;
  };
  /**
      @memberof textWrap
      @desc If *value* is specified, sets the line height accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current line height accessor, which is 1.1 times the [font size](#textWrap.fontSize) by default.
      @param {Function|Number} [*value*]
  */


  textWrap.lineHeight = function (_) {
    return arguments.length ? (lineHeight = _, textWrap) : lineHeight;
  };
  /**
      @memberof textWrap
      @desc If *value* is specified, sets the maximum number of lines allowed when wrapping.
      @param {Function|Number} [*value*]
  */


  textWrap.maxLines = function (_) {
    return arguments.length ? (maxLines = _, textWrap) : maxLines;
  };
  /**
      @memberof textWrap
      @desc If *value* is specified, sets the overflow to the specified boolean and returns this generator. If *value* is not specified, returns the current overflow value.
      @param {Boolean} [*value* = false]
  */


  textWrap.overflow = function (_) {
    return arguments.length ? (overflow = _, textWrap) : overflow;
  };
  /**
      @memberof textWrap
      @desc If *value* is specified, sets the word split function to the specified function and returns this generator. If *value* is not specified, returns the current word split function.
      @param {Function} [*value*] A function that, when passed a string, is expected to return that string split into an array of words to textWrap. The default split function splits strings on the following characters: `-`, `/`, `;`, `:`, `&`
  */


  textWrap.split = function (_) {
    return arguments.length ? (split = _, textWrap) : split;
  };
  /**
      @memberof textWrap
      @desc If *value* is specified, sets width limit to the specified value and returns this generator. If *value* is not specified, returns the current value.
      @param {Number} [*value* = 200]
  */


  textWrap.width = function (_) {
    return arguments.length ? (width = _, textWrap) : width;
  };

  return textWrap;
});

/***/ }),

/***/ "./node_modules/d3plus-text/es/src/titleCase.js":
/*!******************************************************!*\
  !*** ./node_modules/d3plus-text/es/src/titleCase.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _textSplit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textSplit */ "./node_modules/d3plus-text/es/src/textSplit.js");

var lowercase = ["a", "an", "and", "as", "at", "but", "by", "for", "from", "if", "in", "into", "near", "nor", "of", "on", "onto", "or", "per", "that", "the", "to", "with", "via", "vs", "vs."];
var uppercase = ["CEO", "CFO", "CNC", "COO", "CPU", "GDP", "HVAC", "ID", "IT", "R&D", "TV", "UI"];
/**
    @function titleCase
    @desc Capitalizes the first letter of each word in a phrase/sentence.
    @param {String} str The string to apply the title case logic.
*/

/* harmony default export */ __webpack_exports__["default"] = (function (str) {
  if (str === void 0) return "";
  var smalls = lowercase.map(function (s) {
    return s.toLowerCase();
  });
  var bigs = uppercase.slice();
  bigs = bigs.concat(bigs.map(function (b) {
    return "".concat(b, "s");
  }));
  var biglow = bigs.map(function (b) {
    return b.toLowerCase();
  });
  var split = Object(_textSplit__WEBPACK_IMPORTED_MODULE_0__["default"])(str);
  return split.map(function (s, i) {
    if (s) {
      var lower = s.toLowerCase();
      var stripped = _textSplit__WEBPACK_IMPORTED_MODULE_0__["suffixChars"].includes(lower.charAt(lower.length - 1)) ? lower.slice(0, -1) : lower;
      var bigindex = biglow.indexOf(stripped);
      if (bigindex >= 0) return bigs[bigindex];else if (smalls.includes(stripped) && i !== 0 && i !== split.length - 1) return lower;else return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase();
    } else return "";
  }).reduce(function (ret, s, i) {
    if (i && str.charAt(ret.length) === " ") ret += " ";
    ret += s;
    return ret;
  }, "");
});

/***/ }),

/***/ "./node_modules/d3plus-text/es/src/trim.js":
/*!*************************************************!*\
  !*** ./node_modules/d3plus-text/es/src/trim.js ***!
  \*************************************************/
/*! exports provided: trim, trimLeft, trimRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimLeft", function() { return trimLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimRight", function() { return trimRight; });
/**
    @function trim
    @desc Cross-browser implementation of [trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim).
    @param {String} str
*/
function trim(str) {
  return str.toString().replace(/^\s+|\s+$/g, "");
}
/**
    @function trimLeft
    @desc Cross-browser implementation of [trimLeft](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/TrimLeft).
    @param {String} str
*/


function trimLeft(str) {
  return str.toString().replace(/^\s+/, "");
}
/**
    @function trimRight
    @desc Cross-browser implementation of [trimRight](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/TrimRight).
    @param {String} str
*/


function trimRight(str) {
  return str.toString().replace(/\s+$/, "");
}



/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "./node_modules/iso639-codes/index.json":
/*!**********************************************!*\
  !*** ./node_modules/iso639-codes/index.json ***!
  \**********************************************/
/*! exports provided: Abkhazian, Achinese, Acoli, Adangme, Adygei, Adyghe, Afar, Afrihili, Afrikaans, Afro-Asiatic languages, Ainu, Akan, Akkadian, Albanian, Alemannic, Aleut, Algonquian languages, Alsatian, Altaic languages, Amharic, Angika, Apache languages, Arabic, Aragonese, Arapaho, Arawak, Armenian, Aromanian, Artificial languages, Arumanian, Assamese, Asturian, Asturleonese, Athapascan languages, Australian languages, Austronesian languages, Avaric, Avestan, Awadhi, Aymara, Azerbaijani, Bable, Balinese, Baltic languages, Baluchi, Bambara, Bamileke languages, Banda languages, Bantu languages, Basa, Bashkir, Basque, Batak languages, Bedawiyet, Beja, Belarusian, Bemba, Bengali, Berber languages, Bhojpuri, Bihari languages, Bikol, Bilin, Bini, Bislama, Blin, Bliss, Blissymbolics, Blissymbols, Bokmål, Norwegian, Bosnian, Braj, Breton, Buginese, Bulgarian, Buriat, Burmese, Caddo, Castilian, Catalan, Caucasian languages, Cebuano, Celtic languages, Central American Indian languages, Central Khmer, Chagatai, Chamic languages, Chamorro, Chechen, Cherokee, Chewa, Cheyenne, Chibcha, Chichewa, Chinese, Chinook jargon, Chipewyan, Choctaw, Chuang, Church Slavic, Church Slavonic, Chuukese, Chuvash, Classical Nepal Bhasa, Classical Newari, Classical Syriac, Cook Islands Maori, Coptic, Cornish, Corsican, Cree, Creek, Creoles and pidgins, Creoles and pidgins, English based, Creoles and pidgins, French-based, Creoles and pidgins, Portuguese-based, Crimean Tatar, Crimean Turkish, Croatian, Cushitic languages, Czech, Dakota, Danish, Dargwa, Delaware, Dene Suline, Dhivehi, Dimili, Dimli, Dinka, Divehi, Dogri, Dogrib, Dravidian languages, Duala, Dutch, Dutch, Middle (ca.1050-1350), Dyula, Dzongkha, Eastern Frisian, Edo, Efik, Egyptian (Ancient), Ekajuk, Elamite, English, English, Middle (1100-1500), English, Old (ca.450-1100), Erzya, Esperanto, Estonian, Ewe, Ewondo, Fang, Fanti, Faroese, Fijian, Filipino, Finnish, Finno-Ugrian languages, Flemish, Fon, French, French, Middle (ca.1400-1600), French, Old (842-ca.1400), Friulian, Fulah, Ga, Gaelic, Galibi Carib, Galician, Ganda, Gayo, Gbaya, Geez, Georgian, German, German, Low, German, Middle High (ca.1050-1500), German, Old High (ca.750-1050), Germanic languages, Gikuyu, Gilbertese, Gondi, Gorontalo, Gothic, Grebo, Greek, Ancient (to 1453), Greek, Modern (1453-), Greenlandic, Guarani, Gujarati, Gwich'in, Haida, Haitian, Haitian Creole, Hausa, Hawaiian, Hebrew, Herero, Hiligaynon, Himachali languages, Hindi, Hiri Motu, Hittite, Hmong, Hungarian, Hupa, Iban, Icelandic, Ido, Igbo, Ijo languages, Iloko, Imperial Aramaic (700-300 BCE), Inari Sami, Indic languages, Indo-European languages, Indonesian, Ingush, Interlingua (International Auxiliary Language Association), Interlingue, Inuktitut, Inupiaq, Iranian languages, Irish, Irish, Middle (900-1200), Irish, Old (to 900), Iroquoian languages, Italian, Japanese, Javanese, Jingpho, Judeo-Arabic, Judeo-Persian, Kabardian, Kabyle, Kachin, Kalaallisut, Kalmyk, Kamba, Kannada, Kanuri, Kapampangan, Kara-Kalpak, Karachay-Balkar, Karelian, Karen languages, Kashmiri, Kashubian, Kawi, Kazakh, Khasi, Khoisan languages, Khotanese, Kikuyu, Kimbundu, Kinyarwanda, Kirdki, Kirghiz, Kirmanjki, Klingon, Komi, Kongo, Konkani, Korean, Kosraean, Kpelle, Kru languages, Kuanyama, Kumyk, Kurdish, Kurukh, Kutenai, Kwanyama, Kyrgyz, Ladino, Lahnda, Lamba, Land Dayak languages, Lao, Latin, Latvian, Leonese, Letzeburgesch, Lezghian, Limburgan, Limburger, Limburgish, Lingala, Lithuanian, Lojban, Low German, Low Saxon, Lower Sorbian, Lozi, Luba-Katanga, Luba-Lulua, Luiseno, Lule Sami, Lunda, Luo (Kenya and Tanzania), Lushai, Luxembourgish, Macedo-Romanian, Macedonian, Madurese, Magahi, Maithili, Makasar, Malagasy, Malay, Malayalam, Maldivian, Maltese, Manchu, Mandar, Mandingo, Manipuri, Manobo languages, Manx, Maori, Mapuche, Mapudungun, Marathi, Mari, Marshallese, Marwari, Masai, Mayan languages, Mende, Mi'kmaq, Micmac, Minangkabau, Mirandese, Mohawk, Moksha, Moldavian, Moldovan, Mon-Khmer languages, Mong, Mongo, Mongolian, Montenegrin, Mossi, Multiple languages, Munda languages, N'Ko, Nahuatl languages, Nauru, Navaho, Navajo, Ndebele, North, Ndebele, South, Ndonga, Neapolitan, Nepal Bhasa, Nepali, Newari, Nias, Niger-Kordofanian languages, Nilo-Saharan languages, Niuean, No linguistic content, Nogai, Norse, Old, North American Indian languages, North Ndebele, Northern Frisian, Northern Sami, Northern Sotho, Norwegian, Norwegian Bokmål, Norwegian Nynorsk, Not applicable, Nubian languages, Nuosu, Nyamwezi, Nyanja, Nyankole, Nynorsk, Norwegian, Nyoro, Nzima, Occidental, Occitan (post 1500), Occitan, Old (to 1500), Official Aramaic (700-300 BCE), Oirat, Ojibwa, Old Bulgarian, Old Church Slavonic, Old Newari, Old Slavonic, Oriya, Oromo, Osage, Ossetian, Ossetic, Otomian languages, Pahlavi, Palauan, Pali, Pampanga, Pangasinan, Panjabi, Papiamento, Papuan languages, Pashto, Pedi, Persian, Persian, Old (ca.600-400 B.C.), Philippine languages, Phoenician, Pilipino, Pohnpeian, Polish, Portuguese, Prakrit languages, Provençal, Old (to 1500), Punjabi, Pushto, Quechua, Rajasthani, Rapanui, Rarotongan, Reserved for local use, Romance languages, Romanian, Romansh, Romany, Rundi, Russian, Sakan, Salishan languages, Samaritan Aramaic, Sami languages, Samoan, Sandawe, Sango, Sanskrit, Santali, Sardinian, Sasak, Saxon, Low, Scots, Scottish Gaelic, Selkup, Semitic languages, Sepedi, Serbian, Serer, Shan, Shona, Sichuan Yi, Sicilian, Sidamo, Sign Languages, Siksika, Sindhi, Sinhala, Sinhalese, Sino-Tibetan languages, Siouan languages, Skolt Sami, Slave (Athapascan), Slavic languages, Slovak, Slovenian, Sogdian, Somali, Songhai languages, Soninke, Sorbian languages, Sotho, Northern, Sotho, Southern, South American Indian languages, South Ndebele, Southern Altai, Southern Sami, Spanish, Sranan Tongo, Standard Moroccan Tamazight, Sukuma, Sumerian, Sundanese, Susu, Swahili, Swati, Swedish, Swiss German, Syriac, Tagalog, Tahitian, Tai languages, Tajik, Tamashek, Tamil, Tatar, Telugu, Tereno, Tetum, Thai, Tibetan, Tigre, Tigrinya, Timne, Tiv, tlhIngan-Hol, Tlingit, Tok Pisin, Tokelau, Tonga (Nyasa), Tonga (Tonga Islands), Tsimshian, Tsonga, Tswana, Tumbuka, Tupi languages, Turkish, Turkish, Ottoman (1500-1928), Turkmen, Tuvalu, Tuvinian, Twi, Udmurt, Ugaritic, Uighur, Ukrainian, Umbundu, Uncoded languages, Undetermined, Upper Sorbian, Urdu, Uyghur, Uzbek, Vai, Valencian, Venda, Vietnamese, Volapük, Votic, Wakashan languages, Walloon, Waray, Washo, Welsh, Western Frisian, Western Pahari languages, Wolaitta, Wolaytta, Wolof, Xhosa, Yakut, Yao, Yapese, Yiddish, Yoruba, Yupik languages, Zande languages, Zapotec, Zaza, Zazaki, Zenaga, Zhuang, Zulu, Zuni, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Abkhazian\":{\"name\":\"Abkhazian\",\"names\":[\"Abkhazian\"],\"iso639-2\":\"abk\",\"iso639-1\":\"ab\"},\"Achinese\":{\"name\":\"Achinese\",\"names\":[\"Achinese\"],\"iso639-2\":\"ace\",\"iso639-1\":null},\"Acoli\":{\"name\":\"Acoli\",\"names\":[\"Acoli\"],\"iso639-2\":\"ach\",\"iso639-1\":null},\"Adangme\":{\"name\":\"Adangme\",\"names\":[\"Adangme\"],\"iso639-2\":\"ada\",\"iso639-1\":null},\"Adygei\":{\"name\":\"Adygei\",\"names\":[\"Adyghe\",\"Adygei\"],\"iso639-2\":\"ady\",\"iso639-1\":null},\"Adyghe\":{\"name\":\"Adyghe\",\"names\":[\"Adyghe\",\"Adygei\"],\"iso639-2\":\"ady\",\"iso639-1\":null},\"Afar\":{\"name\":\"Afar\",\"names\":[\"Afar\"],\"iso639-2\":\"aar\",\"iso639-1\":\"aa\"},\"Afrihili\":{\"name\":\"Afrihili\",\"names\":[\"Afrihili\"],\"iso639-2\":\"afh\",\"iso639-1\":null},\"Afrikaans\":{\"name\":\"Afrikaans\",\"names\":[\"Afrikaans\"],\"iso639-2\":\"afr\",\"iso639-1\":\"af\"},\"Afro-Asiatic languages\":{\"name\":\"Afro-Asiatic languages\",\"names\":[\"Afro-Asiatic languages\"],\"iso639-2\":\"afa\",\"iso639-1\":null},\"Ainu\":{\"name\":\"Ainu\",\"names\":[\"Ainu\"],\"iso639-2\":\"ain\",\"iso639-1\":null},\"Akan\":{\"name\":\"Akan\",\"names\":[\"Akan\"],\"iso639-2\":\"aka\",\"iso639-1\":\"ak\"},\"Akkadian\":{\"name\":\"Akkadian\",\"names\":[\"Akkadian\"],\"iso639-2\":\"akk\",\"iso639-1\":null},\"Albanian\":{\"name\":\"Albanian\",\"names\":[\"Albanian\"],\"iso639-2\":\"alb/sqi\",\"iso639-1\":\"sq\"},\"Alemannic\":{\"name\":\"Alemannic\",\"names\":[\"Swiss German\",\"Alemannic\",\"Alsatian\"],\"iso639-2\":\"gsw\",\"iso639-1\":null},\"Aleut\":{\"name\":\"Aleut\",\"names\":[\"Aleut\"],\"iso639-2\":\"ale\",\"iso639-1\":null},\"Algonquian languages\":{\"name\":\"Algonquian languages\",\"names\":[\"Algonquian languages\"],\"iso639-2\":\"alg\",\"iso639-1\":null},\"Alsatian\":{\"name\":\"Alsatian\",\"names\":[\"Swiss German\",\"Alemannic\",\"Alsatian\"],\"iso639-2\":\"gsw\",\"iso639-1\":null},\"Altaic languages\":{\"name\":\"Altaic languages\",\"names\":[\"Altaic languages\"],\"iso639-2\":\"tut\",\"iso639-1\":null},\"Amharic\":{\"name\":\"Amharic\",\"names\":[\"Amharic\"],\"iso639-2\":\"amh\",\"iso639-1\":\"am\"},\"Angika\":{\"name\":\"Angika\",\"names\":[\"Angika\"],\"iso639-2\":\"anp\",\"iso639-1\":null},\"Apache languages\":{\"name\":\"Apache languages\",\"names\":[\"Apache languages\"],\"iso639-2\":\"apa\",\"iso639-1\":null},\"Arabic\":{\"name\":\"Arabic\",\"names\":[\"Arabic\"],\"iso639-2\":\"ara\",\"iso639-1\":\"ar\"},\"Aragonese\":{\"name\":\"Aragonese\",\"names\":[\"Aragonese\"],\"iso639-2\":\"arg\",\"iso639-1\":\"an\"},\"Arapaho\":{\"name\":\"Arapaho\",\"names\":[\"Arapaho\"],\"iso639-2\":\"arp\",\"iso639-1\":null},\"Arawak\":{\"name\":\"Arawak\",\"names\":[\"Arawak\"],\"iso639-2\":\"arw\",\"iso639-1\":null},\"Armenian\":{\"name\":\"Armenian\",\"names\":[\"Armenian\"],\"iso639-2\":\"arm/hye\",\"iso639-1\":\"hy\"},\"Aromanian\":{\"name\":\"Aromanian\",\"names\":[\"Aromanian\",\"Arumanian\",\"Macedo-Romanian\"],\"iso639-2\":\"rup\",\"iso639-1\":null},\"Artificial languages\":{\"name\":\"Artificial languages\",\"names\":[\"Artificial languages\"],\"iso639-2\":\"art\",\"iso639-1\":null},\"Arumanian\":{\"name\":\"Arumanian\",\"names\":[\"Aromanian\",\"Arumanian\",\"Macedo-Romanian\"],\"iso639-2\":\"rup\",\"iso639-1\":null},\"Assamese\":{\"name\":\"Assamese\",\"names\":[\"Assamese\"],\"iso639-2\":\"asm\",\"iso639-1\":\"as\"},\"Asturian\":{\"name\":\"Asturian\",\"names\":[\"Asturian\",\"Bable\",\"Leonese\",\"Asturleonese\"],\"iso639-2\":\"ast\",\"iso639-1\":null},\"Asturleonese\":{\"name\":\"Asturleonese\",\"names\":[\"Asturian\",\"Bable\",\"Leonese\",\"Asturleonese\"],\"iso639-2\":\"ast\",\"iso639-1\":null},\"Athapascan languages\":{\"name\":\"Athapascan languages\",\"names\":[\"Athapascan languages\"],\"iso639-2\":\"ath\",\"iso639-1\":null},\"Australian languages\":{\"name\":\"Australian languages\",\"names\":[\"Australian languages\"],\"iso639-2\":\"aus\",\"iso639-1\":null},\"Austronesian languages\":{\"name\":\"Austronesian languages\",\"names\":[\"Austronesian languages\"],\"iso639-2\":\"map\",\"iso639-1\":null},\"Avaric\":{\"name\":\"Avaric\",\"names\":[\"Avaric\"],\"iso639-2\":\"ava\",\"iso639-1\":\"av\"},\"Avestan\":{\"name\":\"Avestan\",\"names\":[\"Avestan\"],\"iso639-2\":\"ave\",\"iso639-1\":\"ae\"},\"Awadhi\":{\"name\":\"Awadhi\",\"names\":[\"Awadhi\"],\"iso639-2\":\"awa\",\"iso639-1\":null},\"Aymara\":{\"name\":\"Aymara\",\"names\":[\"Aymara\"],\"iso639-2\":\"aym\",\"iso639-1\":\"ay\"},\"Azerbaijani\":{\"name\":\"Azerbaijani\",\"names\":[\"Azerbaijani\"],\"iso639-2\":\"aze\",\"iso639-1\":\"az\"},\"Bable\":{\"name\":\"Bable\",\"names\":[\"Asturian\",\"Bable\",\"Leonese\",\"Asturleonese\"],\"iso639-2\":\"ast\",\"iso639-1\":null},\"Balinese\":{\"name\":\"Balinese\",\"names\":[\"Balinese\"],\"iso639-2\":\"ban\",\"iso639-1\":null},\"Baltic languages\":{\"name\":\"Baltic languages\",\"names\":[\"Baltic languages\"],\"iso639-2\":\"bat\",\"iso639-1\":null},\"Baluchi\":{\"name\":\"Baluchi\",\"names\":[\"Baluchi\"],\"iso639-2\":\"bal\",\"iso639-1\":null},\"Bambara\":{\"name\":\"Bambara\",\"names\":[\"Bambara\"],\"iso639-2\":\"bam\",\"iso639-1\":\"bm\"},\"Bamileke languages\":{\"name\":\"Bamileke languages\",\"names\":[\"Bamileke languages\"],\"iso639-2\":\"bai\",\"iso639-1\":null},\"Banda languages\":{\"name\":\"Banda languages\",\"names\":[\"Banda languages\"],\"iso639-2\":\"bad\",\"iso639-1\":null},\"Bantu languages\":{\"name\":\"Bantu languages\",\"names\":[\"Bantu languages\"],\"iso639-2\":\"bnt\",\"iso639-1\":null},\"Basa\":{\"name\":\"Basa\",\"names\":[\"Basa\"],\"iso639-2\":\"bas\",\"iso639-1\":null},\"Bashkir\":{\"name\":\"Bashkir\",\"names\":[\"Bashkir\"],\"iso639-2\":\"bak\",\"iso639-1\":\"ba\"},\"Basque\":{\"name\":\"Basque\",\"names\":[\"Basque\"],\"iso639-2\":\"baq/eus\",\"iso639-1\":\"eu\"},\"Batak languages\":{\"name\":\"Batak languages\",\"names\":[\"Batak languages\"],\"iso639-2\":\"btk\",\"iso639-1\":null},\"Bedawiyet\":{\"name\":\"Bedawiyet\",\"names\":[\"Beja\",\"Bedawiyet\"],\"iso639-2\":\"bej\",\"iso639-1\":null},\"Beja\":{\"name\":\"Beja\",\"names\":[\"Beja\",\"Bedawiyet\"],\"iso639-2\":\"bej\",\"iso639-1\":null},\"Belarusian\":{\"name\":\"Belarusian\",\"names\":[\"Belarusian\"],\"iso639-2\":\"bel\",\"iso639-1\":\"be\"},\"Bemba\":{\"name\":\"Bemba\",\"names\":[\"Bemba\"],\"iso639-2\":\"bem\",\"iso639-1\":null},\"Bengali\":{\"name\":\"Bengali\",\"names\":[\"Bengali\"],\"iso639-2\":\"ben\",\"iso639-1\":\"bn\"},\"Berber languages\":{\"name\":\"Berber languages\",\"names\":[\"Berber languages\"],\"iso639-2\":\"ber\",\"iso639-1\":null},\"Bhojpuri\":{\"name\":\"Bhojpuri\",\"names\":[\"Bhojpuri\"],\"iso639-2\":\"bho\",\"iso639-1\":null},\"Bihari languages\":{\"name\":\"Bihari languages\",\"names\":[\"Bihari languages\"],\"iso639-2\":\"bih\",\"iso639-1\":\"bh\"},\"Bikol\":{\"name\":\"Bikol\",\"names\":[\"Bikol\"],\"iso639-2\":\"bik\",\"iso639-1\":null},\"Bilin\":{\"name\":\"Bilin\",\"names\":[\"Blin\",\"Bilin\"],\"iso639-2\":\"byn\",\"iso639-1\":null},\"Bini\":{\"name\":\"Bini\",\"names\":[\"Bini\",\"Edo\"],\"iso639-2\":\"bin\",\"iso639-1\":null},\"Bislama\":{\"name\":\"Bislama\",\"names\":[\"Bislama\"],\"iso639-2\":\"bis\",\"iso639-1\":\"bi\"},\"Blin\":{\"name\":\"Blin\",\"names\":[\"Blin\",\"Bilin\"],\"iso639-2\":\"byn\",\"iso639-1\":null},\"Bliss\":{\"name\":\"Bliss\",\"names\":[\"Blissymbols\",\"Blissymbolics\",\"Bliss\"],\"iso639-2\":\"zbl\",\"iso639-1\":null},\"Blissymbolics\":{\"name\":\"Blissymbolics\",\"names\":[\"Blissymbols\",\"Blissymbolics\",\"Bliss\"],\"iso639-2\":\"zbl\",\"iso639-1\":null},\"Blissymbols\":{\"name\":\"Blissymbols\",\"names\":[\"Blissymbols\",\"Blissymbolics\",\"Bliss\"],\"iso639-2\":\"zbl\",\"iso639-1\":null},\"Bokmål, Norwegian\":{\"name\":\"Bokmål, Norwegian\",\"names\":[\"Bokmål, Norwegian\",\"Norwegian Bokmål\"],\"iso639-2\":\"nob\",\"iso639-1\":\"nb\"},\"Bosnian\":{\"name\":\"Bosnian\",\"names\":[\"Bosnian\"],\"iso639-2\":\"bos\",\"iso639-1\":\"bs\"},\"Braj\":{\"name\":\"Braj\",\"names\":[\"Braj\"],\"iso639-2\":\"bra\",\"iso639-1\":null},\"Breton\":{\"name\":\"Breton\",\"names\":[\"Breton\"],\"iso639-2\":\"bre\",\"iso639-1\":\"br\"},\"Buginese\":{\"name\":\"Buginese\",\"names\":[\"Buginese\"],\"iso639-2\":\"bug\",\"iso639-1\":null},\"Bulgarian\":{\"name\":\"Bulgarian\",\"names\":[\"Bulgarian\"],\"iso639-2\":\"bul\",\"iso639-1\":\"bg\"},\"Buriat\":{\"name\":\"Buriat\",\"names\":[\"Buriat\"],\"iso639-2\":\"bua\",\"iso639-1\":null},\"Burmese\":{\"name\":\"Burmese\",\"names\":[\"Burmese\"],\"iso639-2\":\"bur/mya\",\"iso639-1\":\"my\"},\"Caddo\":{\"name\":\"Caddo\",\"names\":[\"Caddo\"],\"iso639-2\":\"cad\",\"iso639-1\":null},\"Castilian\":{\"name\":\"Castilian\",\"names\":[\"Spanish\",\"Castilian\"],\"iso639-2\":\"spa\",\"iso639-1\":\"es\"},\"Catalan\":{\"name\":\"Catalan\",\"names\":[\"Catalan\",\"Valencian\"],\"iso639-2\":\"cat\",\"iso639-1\":\"ca\"},\"Caucasian languages\":{\"name\":\"Caucasian languages\",\"names\":[\"Caucasian languages\"],\"iso639-2\":\"cau\",\"iso639-1\":null},\"Cebuano\":{\"name\":\"Cebuano\",\"names\":[\"Cebuano\"],\"iso639-2\":\"ceb\",\"iso639-1\":null},\"Celtic languages\":{\"name\":\"Celtic languages\",\"names\":[\"Celtic languages\"],\"iso639-2\":\"cel\",\"iso639-1\":null},\"Central American Indian languages\":{\"name\":\"Central American Indian languages\",\"names\":[\"Central American Indian languages\"],\"iso639-2\":\"cai\",\"iso639-1\":null},\"Central Khmer\":{\"name\":\"Central Khmer\",\"names\":[\"Central Khmer\"],\"iso639-2\":\"khm\",\"iso639-1\":\"km\"},\"Chagatai\":{\"name\":\"Chagatai\",\"names\":[\"Chagatai\"],\"iso639-2\":\"chg\",\"iso639-1\":null},\"Chamic languages\":{\"name\":\"Chamic languages\",\"names\":[\"Chamic languages\"],\"iso639-2\":\"cmc\",\"iso639-1\":null},\"Chamorro\":{\"name\":\"Chamorro\",\"names\":[\"Chamorro\"],\"iso639-2\":\"cha\",\"iso639-1\":\"ch\"},\"Chechen\":{\"name\":\"Chechen\",\"names\":[\"Chechen\"],\"iso639-2\":\"che\",\"iso639-1\":\"ce\"},\"Cherokee\":{\"name\":\"Cherokee\",\"names\":[\"Cherokee\"],\"iso639-2\":\"chr\",\"iso639-1\":null},\"Chewa\":{\"name\":\"Chewa\",\"names\":[\"Chichewa\",\"Chewa\",\"Nyanja\"],\"iso639-2\":\"nya\",\"iso639-1\":\"ny\"},\"Cheyenne\":{\"name\":\"Cheyenne\",\"names\":[\"Cheyenne\"],\"iso639-2\":\"chy\",\"iso639-1\":null},\"Chibcha\":{\"name\":\"Chibcha\",\"names\":[\"Chibcha\"],\"iso639-2\":\"chb\",\"iso639-1\":null},\"Chichewa\":{\"name\":\"Chichewa\",\"names\":[\"Chichewa\",\"Chewa\",\"Nyanja\"],\"iso639-2\":\"nya\",\"iso639-1\":\"ny\"},\"Chinese\":{\"name\":\"Chinese\",\"names\":[\"Chinese\"],\"iso639-2\":\"chi/zho\",\"iso639-1\":\"zh\"},\"Chinook jargon\":{\"name\":\"Chinook jargon\",\"names\":[\"Chinook jargon\"],\"iso639-2\":\"chn\",\"iso639-1\":null},\"Chipewyan\":{\"name\":\"Chipewyan\",\"names\":[\"Chipewyan\",\"Dene Suline\"],\"iso639-2\":\"chp\",\"iso639-1\":null},\"Choctaw\":{\"name\":\"Choctaw\",\"names\":[\"Choctaw\"],\"iso639-2\":\"cho\",\"iso639-1\":null},\"Chuang\":{\"name\":\"Chuang\",\"names\":[\"Zhuang\",\"Chuang\"],\"iso639-2\":\"zha\",\"iso639-1\":\"za\"},\"Church Slavic\":{\"name\":\"Church Slavic\",\"names\":[\"Church Slavic\",\"Old Slavonic\",\"Church Slavonic\",\"Old Bulgarian\",\"Old Church Slavonic\"],\"iso639-2\":\"chu\",\"iso639-1\":\"cu\"},\"Church Slavonic\":{\"name\":\"Church Slavonic\",\"names\":[\"Church Slavic\",\"Old Slavonic\",\"Church Slavonic\",\"Old Bulgarian\",\"Old Church Slavonic\"],\"iso639-2\":\"chu\",\"iso639-1\":\"cu\"},\"Chuukese\":{\"name\":\"Chuukese\",\"names\":[\"Chuukese\"],\"iso639-2\":\"chk\",\"iso639-1\":null},\"Chuvash\":{\"name\":\"Chuvash\",\"names\":[\"Chuvash\"],\"iso639-2\":\"chv\",\"iso639-1\":\"cv\"},\"Classical Nepal Bhasa\":{\"name\":\"Classical Nepal Bhasa\",\"names\":[\"Classical Newari\",\"Old Newari\",\"Classical Nepal Bhasa\"],\"iso639-2\":\"nwc\",\"iso639-1\":null},\"Classical Newari\":{\"name\":\"Classical Newari\",\"names\":[\"Classical Newari\",\"Old Newari\",\"Classical Nepal Bhasa\"],\"iso639-2\":\"nwc\",\"iso639-1\":null},\"Classical Syriac\":{\"name\":\"Classical Syriac\",\"names\":[\"Classical Syriac\"],\"iso639-2\":\"syc\",\"iso639-1\":null},\"Cook Islands Maori\":{\"name\":\"Cook Islands Maori\",\"names\":[\"Rarotongan\",\"Cook Islands Maori\"],\"iso639-2\":\"rar\",\"iso639-1\":null},\"Coptic\":{\"name\":\"Coptic\",\"names\":[\"Coptic\"],\"iso639-2\":\"cop\",\"iso639-1\":null},\"Cornish\":{\"name\":\"Cornish\",\"names\":[\"Cornish\"],\"iso639-2\":\"cor\",\"iso639-1\":\"kw\"},\"Corsican\":{\"name\":\"Corsican\",\"names\":[\"Corsican\"],\"iso639-2\":\"cos\",\"iso639-1\":\"co\"},\"Cree\":{\"name\":\"Cree\",\"names\":[\"Cree\"],\"iso639-2\":\"cre\",\"iso639-1\":\"cr\"},\"Creek\":{\"name\":\"Creek\",\"names\":[\"Creek\"],\"iso639-2\":\"mus\",\"iso639-1\":null},\"Creoles and pidgins\":{\"name\":\"Creoles and pidgins\",\"names\":[\"Creoles and pidgins\"],\"iso639-2\":\"crp\",\"iso639-1\":null},\"Creoles and pidgins, English based\":{\"name\":\"Creoles and pidgins, English based\",\"names\":[\"Creoles and pidgins, English based\"],\"iso639-2\":\"cpe\",\"iso639-1\":null},\"Creoles and pidgins, French-based\":{\"name\":\"Creoles and pidgins, French-based\",\"names\":[\"Creoles and pidgins, French-based\"],\"iso639-2\":\"cpf\",\"iso639-1\":null},\"Creoles and pidgins, Portuguese-based\":{\"name\":\"Creoles and pidgins, Portuguese-based\",\"names\":[\"Creoles and pidgins, Portuguese-based\"],\"iso639-2\":\"cpp\",\"iso639-1\":null},\"Crimean Tatar\":{\"name\":\"Crimean Tatar\",\"names\":[\"Crimean Tatar\",\"Crimean Turkish\"],\"iso639-2\":\"crh\",\"iso639-1\":null},\"Crimean Turkish\":{\"name\":\"Crimean Turkish\",\"names\":[\"Crimean Tatar\",\"Crimean Turkish\"],\"iso639-2\":\"crh\",\"iso639-1\":null},\"Croatian\":{\"name\":\"Croatian\",\"names\":[\"Croatian\"],\"iso639-2\":\"hrv\",\"iso639-1\":\"hr\"},\"Cushitic languages\":{\"name\":\"Cushitic languages\",\"names\":[\"Cushitic languages\"],\"iso639-2\":\"cus\",\"iso639-1\":null},\"Czech\":{\"name\":\"Czech\",\"names\":[\"Czech\"],\"iso639-2\":\"cze/ces\",\"iso639-1\":\"cs\"},\"Dakota\":{\"name\":\"Dakota\",\"names\":[\"Dakota\"],\"iso639-2\":\"dak\",\"iso639-1\":null},\"Danish\":{\"name\":\"Danish\",\"names\":[\"Danish\"],\"iso639-2\":\"dan\",\"iso639-1\":\"da\"},\"Dargwa\":{\"name\":\"Dargwa\",\"names\":[\"Dargwa\"],\"iso639-2\":\"dar\",\"iso639-1\":null},\"Delaware\":{\"name\":\"Delaware\",\"names\":[\"Delaware\"],\"iso639-2\":\"del\",\"iso639-1\":null},\"Dene Suline\":{\"name\":\"Dene Suline\",\"names\":[\"Chipewyan\",\"Dene Suline\"],\"iso639-2\":\"chp\",\"iso639-1\":null},\"Dhivehi\":{\"name\":\"Dhivehi\",\"names\":[\"Divehi\",\"Dhivehi\",\"Maldivian\"],\"iso639-2\":\"div\",\"iso639-1\":\"dv\"},\"Dimili\":{\"name\":\"Dimili\",\"names\":[\"Zaza\",\"Dimili\",\"Dimli\",\"Kirdki\",\"Kirmanjki\",\"Zazaki\"],\"iso639-2\":\"zza\",\"iso639-1\":null},\"Dimli\":{\"name\":\"Dimli\",\"names\":[\"Zaza\",\"Dimili\",\"Dimli\",\"Kirdki\",\"Kirmanjki\",\"Zazaki\"],\"iso639-2\":\"zza\",\"iso639-1\":null},\"Dinka\":{\"name\":\"Dinka\",\"names\":[\"Dinka\"],\"iso639-2\":\"din\",\"iso639-1\":null},\"Divehi\":{\"name\":\"Divehi\",\"names\":[\"Divehi\",\"Dhivehi\",\"Maldivian\"],\"iso639-2\":\"div\",\"iso639-1\":\"dv\"},\"Dogri\":{\"name\":\"Dogri\",\"names\":[\"Dogri\"],\"iso639-2\":\"doi\",\"iso639-1\":null},\"Dogrib\":{\"name\":\"Dogrib\",\"names\":[\"Dogrib\"],\"iso639-2\":\"dgr\",\"iso639-1\":null},\"Dravidian languages\":{\"name\":\"Dravidian languages\",\"names\":[\"Dravidian languages\"],\"iso639-2\":\"dra\",\"iso639-1\":null},\"Duala\":{\"name\":\"Duala\",\"names\":[\"Duala\"],\"iso639-2\":\"dua\",\"iso639-1\":null},\"Dutch\":{\"name\":\"Dutch\",\"names\":[\"Dutch\",\"Flemish\"],\"iso639-2\":\"dut/nld\",\"iso639-1\":\"nl\"},\"Dutch, Middle (ca.1050-1350)\":{\"name\":\"Dutch, Middle (ca.1050-1350)\",\"names\":[\"Dutch, Middle (ca.1050-1350)\"],\"iso639-2\":\"dum\",\"iso639-1\":null},\"Dyula\":{\"name\":\"Dyula\",\"names\":[\"Dyula\"],\"iso639-2\":\"dyu\",\"iso639-1\":null},\"Dzongkha\":{\"name\":\"Dzongkha\",\"names\":[\"Dzongkha\"],\"iso639-2\":\"dzo\",\"iso639-1\":\"dz\"},\"Eastern Frisian\":{\"name\":\"Eastern Frisian\",\"names\":[\"Eastern Frisian\"],\"iso639-2\":\"frs\",\"iso639-1\":null},\"Edo\":{\"name\":\"Edo\",\"names\":[\"Bini\",\"Edo\"],\"iso639-2\":\"bin\",\"iso639-1\":null},\"Efik\":{\"name\":\"Efik\",\"names\":[\"Efik\"],\"iso639-2\":\"efi\",\"iso639-1\":null},\"Egyptian (Ancient)\":{\"name\":\"Egyptian (Ancient)\",\"names\":[\"Egyptian (Ancient)\"],\"iso639-2\":\"egy\",\"iso639-1\":null},\"Ekajuk\":{\"name\":\"Ekajuk\",\"names\":[\"Ekajuk\"],\"iso639-2\":\"eka\",\"iso639-1\":null},\"Elamite\":{\"name\":\"Elamite\",\"names\":[\"Elamite\"],\"iso639-2\":\"elx\",\"iso639-1\":null},\"English\":{\"name\":\"English\",\"names\":[\"English\"],\"iso639-2\":\"eng\",\"iso639-1\":\"en\"},\"English, Middle (1100-1500)\":{\"name\":\"English, Middle (1100-1500)\",\"names\":[\"English, Middle (1100-1500)\"],\"iso639-2\":\"enm\",\"iso639-1\":null},\"English, Old (ca.450-1100)\":{\"name\":\"English, Old (ca.450-1100)\",\"names\":[\"English, Old (ca.450-1100)\"],\"iso639-2\":\"ang\",\"iso639-1\":null},\"Erzya\":{\"name\":\"Erzya\",\"names\":[\"Erzya\"],\"iso639-2\":\"myv\",\"iso639-1\":null},\"Esperanto\":{\"name\":\"Esperanto\",\"names\":[\"Esperanto\"],\"iso639-2\":\"epo\",\"iso639-1\":\"eo\"},\"Estonian\":{\"name\":\"Estonian\",\"names\":[\"Estonian\"],\"iso639-2\":\"est\",\"iso639-1\":\"et\"},\"Ewe\":{\"name\":\"Ewe\",\"names\":[\"Ewe\"],\"iso639-2\":\"ewe\",\"iso639-1\":\"ee\"},\"Ewondo\":{\"name\":\"Ewondo\",\"names\":[\"Ewondo\"],\"iso639-2\":\"ewo\",\"iso639-1\":null},\"Fang\":{\"name\":\"Fang\",\"names\":[\"Fang\"],\"iso639-2\":\"fan\",\"iso639-1\":null},\"Fanti\":{\"name\":\"Fanti\",\"names\":[\"Fanti\"],\"iso639-2\":\"fat\",\"iso639-1\":null},\"Faroese\":{\"name\":\"Faroese\",\"names\":[\"Faroese\"],\"iso639-2\":\"fao\",\"iso639-1\":\"fo\"},\"Fijian\":{\"name\":\"Fijian\",\"names\":[\"Fijian\"],\"iso639-2\":\"fij\",\"iso639-1\":\"fj\"},\"Filipino\":{\"name\":\"Filipino\",\"names\":[\"Filipino\",\"Pilipino\"],\"iso639-2\":\"fil\",\"iso639-1\":null},\"Finnish\":{\"name\":\"Finnish\",\"names\":[\"Finnish\"],\"iso639-2\":\"fin\",\"iso639-1\":\"fi\"},\"Finno-Ugrian languages\":{\"name\":\"Finno-Ugrian languages\",\"names\":[\"Finno-Ugrian languages\"],\"iso639-2\":\"fiu\",\"iso639-1\":null},\"Flemish\":{\"name\":\"Flemish\",\"names\":[\"Dutch\",\"Flemish\"],\"iso639-2\":\"dut/nld\",\"iso639-1\":\"nl\"},\"Fon\":{\"name\":\"Fon\",\"names\":[\"Fon\"],\"iso639-2\":\"fon\",\"iso639-1\":null},\"French\":{\"name\":\"French\",\"names\":[\"French\"],\"iso639-2\":\"fre/fra\",\"iso639-1\":\"fr\"},\"French, Middle (ca.1400-1600)\":{\"name\":\"French, Middle (ca.1400-1600)\",\"names\":[\"French, Middle (ca.1400-1600)\"],\"iso639-2\":\"frm\",\"iso639-1\":null},\"French, Old (842-ca.1400)\":{\"name\":\"French, Old (842-ca.1400)\",\"names\":[\"French, Old (842-ca.1400)\"],\"iso639-2\":\"fro\",\"iso639-1\":null},\"Friulian\":{\"name\":\"Friulian\",\"names\":[\"Friulian\"],\"iso639-2\":\"fur\",\"iso639-1\":null},\"Fulah\":{\"name\":\"Fulah\",\"names\":[\"Fulah\"],\"iso639-2\":\"ful\",\"iso639-1\":\"ff\"},\"Ga\":{\"name\":\"Ga\",\"names\":[\"Ga\"],\"iso639-2\":\"gaa\",\"iso639-1\":null},\"Gaelic\":{\"name\":\"Gaelic\",\"names\":[\"Gaelic\",\"Scottish Gaelic\"],\"iso639-2\":\"gla\",\"iso639-1\":\"gd\"},\"Galibi Carib\":{\"name\":\"Galibi Carib\",\"names\":[\"Galibi Carib\"],\"iso639-2\":\"car\",\"iso639-1\":null},\"Galician\":{\"name\":\"Galician\",\"names\":[\"Galician\"],\"iso639-2\":\"glg\",\"iso639-1\":\"gl\"},\"Ganda\":{\"name\":\"Ganda\",\"names\":[\"Ganda\"],\"iso639-2\":\"lug\",\"iso639-1\":\"lg\"},\"Gayo\":{\"name\":\"Gayo\",\"names\":[\"Gayo\"],\"iso639-2\":\"gay\",\"iso639-1\":null},\"Gbaya\":{\"name\":\"Gbaya\",\"names\":[\"Gbaya\"],\"iso639-2\":\"gba\",\"iso639-1\":null},\"Geez\":{\"name\":\"Geez\",\"names\":[\"Geez\"],\"iso639-2\":\"gez\",\"iso639-1\":null},\"Georgian\":{\"name\":\"Georgian\",\"names\":[\"Georgian\"],\"iso639-2\":\"geo/kat\",\"iso639-1\":\"ka\"},\"German\":{\"name\":\"German\",\"names\":[\"German\"],\"iso639-2\":\"ger/deu\",\"iso639-1\":\"de\"},\"German, Low\":{\"name\":\"German, Low\",\"names\":[\"Low German\",\"Low Saxon\",\"German, Low\",\"Saxon, Low\"],\"iso639-2\":\"nds\",\"iso639-1\":null},\"German, Middle High (ca.1050-1500)\":{\"name\":\"German, Middle High (ca.1050-1500)\",\"names\":[\"German, Middle High (ca.1050-1500)\"],\"iso639-2\":\"gmh\",\"iso639-1\":null},\"German, Old High (ca.750-1050)\":{\"name\":\"German, Old High (ca.750-1050)\",\"names\":[\"German, Old High (ca.750-1050)\"],\"iso639-2\":\"goh\",\"iso639-1\":null},\"Germanic languages\":{\"name\":\"Germanic languages\",\"names\":[\"Germanic languages\"],\"iso639-2\":\"gem\",\"iso639-1\":null},\"Gikuyu\":{\"name\":\"Gikuyu\",\"names\":[\"Kikuyu\",\"Gikuyu\"],\"iso639-2\":\"kik\",\"iso639-1\":\"ki\"},\"Gilbertese\":{\"name\":\"Gilbertese\",\"names\":[\"Gilbertese\"],\"iso639-2\":\"gil\",\"iso639-1\":null},\"Gondi\":{\"name\":\"Gondi\",\"names\":[\"Gondi\"],\"iso639-2\":\"gon\",\"iso639-1\":null},\"Gorontalo\":{\"name\":\"Gorontalo\",\"names\":[\"Gorontalo\"],\"iso639-2\":\"gor\",\"iso639-1\":null},\"Gothic\":{\"name\":\"Gothic\",\"names\":[\"Gothic\"],\"iso639-2\":\"got\",\"iso639-1\":null},\"Grebo\":{\"name\":\"Grebo\",\"names\":[\"Grebo\"],\"iso639-2\":\"grb\",\"iso639-1\":null},\"Greek, Ancient (to 1453)\":{\"name\":\"Greek, Ancient (to 1453)\",\"names\":[\"Greek, Ancient (to 1453)\"],\"iso639-2\":\"grc\",\"iso639-1\":null},\"Greek, Modern (1453-)\":{\"name\":\"Greek, Modern (1453-)\",\"names\":[\"Greek, Modern (1453-)\"],\"iso639-2\":\"gre/ell\",\"iso639-1\":\"el\"},\"Greenlandic\":{\"name\":\"Greenlandic\",\"names\":[\"Kalaallisut\",\"Greenlandic\"],\"iso639-2\":\"kal\",\"iso639-1\":\"kl\"},\"Guarani\":{\"name\":\"Guarani\",\"names\":[\"Guarani\"],\"iso639-2\":\"grn\",\"iso639-1\":\"gn\"},\"Gujarati\":{\"name\":\"Gujarati\",\"names\":[\"Gujarati\"],\"iso639-2\":\"guj\",\"iso639-1\":\"gu\"},\"Gwich'in\":{\"name\":\"Gwich'in\",\"names\":[\"Gwich'in\"],\"iso639-2\":\"gwi\",\"iso639-1\":null},\"Haida\":{\"name\":\"Haida\",\"names\":[\"Haida\"],\"iso639-2\":\"hai\",\"iso639-1\":null},\"Haitian\":{\"name\":\"Haitian\",\"names\":[\"Haitian\",\"Haitian Creole\"],\"iso639-2\":\"hat\",\"iso639-1\":\"ht\"},\"Haitian Creole\":{\"name\":\"Haitian Creole\",\"names\":[\"Haitian\",\"Haitian Creole\"],\"iso639-2\":\"hat\",\"iso639-1\":\"ht\"},\"Hausa\":{\"name\":\"Hausa\",\"names\":[\"Hausa\"],\"iso639-2\":\"hau\",\"iso639-1\":\"ha\"},\"Hawaiian\":{\"name\":\"Hawaiian\",\"names\":[\"Hawaiian\"],\"iso639-2\":\"haw\",\"iso639-1\":null},\"Hebrew\":{\"name\":\"Hebrew\",\"names\":[\"Hebrew\"],\"iso639-2\":\"heb\",\"iso639-1\":\"he\"},\"Herero\":{\"name\":\"Herero\",\"names\":[\"Herero\"],\"iso639-2\":\"her\",\"iso639-1\":\"hz\"},\"Hiligaynon\":{\"name\":\"Hiligaynon\",\"names\":[\"Hiligaynon\"],\"iso639-2\":\"hil\",\"iso639-1\":null},\"Himachali languages\":{\"name\":\"Himachali languages\",\"names\":[\"Himachali languages\",\"Western Pahari languages\"],\"iso639-2\":\"him\",\"iso639-1\":null},\"Hindi\":{\"name\":\"Hindi\",\"names\":[\"Hindi\"],\"iso639-2\":\"hin\",\"iso639-1\":\"hi\"},\"Hiri Motu\":{\"name\":\"Hiri Motu\",\"names\":[\"Hiri Motu\"],\"iso639-2\":\"hmo\",\"iso639-1\":\"ho\"},\"Hittite\":{\"name\":\"Hittite\",\"names\":[\"Hittite\"],\"iso639-2\":\"hit\",\"iso639-1\":null},\"Hmong\":{\"name\":\"Hmong\",\"names\":[\"Hmong\",\"Mong\"],\"iso639-2\":\"hmn\",\"iso639-1\":null},\"Hungarian\":{\"name\":\"Hungarian\",\"names\":[\"Hungarian\"],\"iso639-2\":\"hun\",\"iso639-1\":\"hu\"},\"Hupa\":{\"name\":\"Hupa\",\"names\":[\"Hupa\"],\"iso639-2\":\"hup\",\"iso639-1\":null},\"Iban\":{\"name\":\"Iban\",\"names\":[\"Iban\"],\"iso639-2\":\"iba\",\"iso639-1\":null},\"Icelandic\":{\"name\":\"Icelandic\",\"names\":[\"Icelandic\"],\"iso639-2\":\"ice/isl\",\"iso639-1\":\"is\"},\"Ido\":{\"name\":\"Ido\",\"names\":[\"Ido\"],\"iso639-2\":\"ido\",\"iso639-1\":\"io\"},\"Igbo\":{\"name\":\"Igbo\",\"names\":[\"Igbo\"],\"iso639-2\":\"ibo\",\"iso639-1\":\"ig\"},\"Ijo languages\":{\"name\":\"Ijo languages\",\"names\":[\"Ijo languages\"],\"iso639-2\":\"ijo\",\"iso639-1\":null},\"Iloko\":{\"name\":\"Iloko\",\"names\":[\"Iloko\"],\"iso639-2\":\"ilo\",\"iso639-1\":null},\"Imperial Aramaic (700-300 BCE)\":{\"name\":\"Imperial Aramaic (700-300 BCE)\",\"names\":[\"Official Aramaic (700-300 BCE)\",\"Imperial Aramaic (700-300 BCE)\"],\"iso639-2\":\"arc\",\"iso639-1\":null},\"Inari Sami\":{\"name\":\"Inari Sami\",\"names\":[\"Inari Sami\"],\"iso639-2\":\"smn\",\"iso639-1\":null},\"Indic languages\":{\"name\":\"Indic languages\",\"names\":[\"Indic languages\"],\"iso639-2\":\"inc\",\"iso639-1\":null},\"Indo-European languages\":{\"name\":\"Indo-European languages\",\"names\":[\"Indo-European languages\"],\"iso639-2\":\"ine\",\"iso639-1\":null},\"Indonesian\":{\"name\":\"Indonesian\",\"names\":[\"Indonesian\"],\"iso639-2\":\"ind\",\"iso639-1\":\"id\"},\"Ingush\":{\"name\":\"Ingush\",\"names\":[\"Ingush\"],\"iso639-2\":\"inh\",\"iso639-1\":null},\"Interlingua (International Auxiliary Language Association)\":{\"name\":\"Interlingua (International Auxiliary Language Association)\",\"names\":[\"Interlingua (International Auxiliary Language Association)\"],\"iso639-2\":\"ina\",\"iso639-1\":\"ia\"},\"Interlingue\":{\"name\":\"Interlingue\",\"names\":[\"Interlingue\",\"Occidental\"],\"iso639-2\":\"ile\",\"iso639-1\":\"ie\"},\"Inuktitut\":{\"name\":\"Inuktitut\",\"names\":[\"Inuktitut\"],\"iso639-2\":\"iku\",\"iso639-1\":\"iu\"},\"Inupiaq\":{\"name\":\"Inupiaq\",\"names\":[\"Inupiaq\"],\"iso639-2\":\"ipk\",\"iso639-1\":\"ik\"},\"Iranian languages\":{\"name\":\"Iranian languages\",\"names\":[\"Iranian languages\"],\"iso639-2\":\"ira\",\"iso639-1\":null},\"Irish\":{\"name\":\"Irish\",\"names\":[\"Irish\"],\"iso639-2\":\"gle\",\"iso639-1\":\"ga\"},\"Irish, Middle (900-1200)\":{\"name\":\"Irish, Middle (900-1200)\",\"names\":[\"Irish, Middle (900-1200)\"],\"iso639-2\":\"mga\",\"iso639-1\":null},\"Irish, Old (to 900)\":{\"name\":\"Irish, Old (to 900)\",\"names\":[\"Irish, Old (to 900)\"],\"iso639-2\":\"sga\",\"iso639-1\":null},\"Iroquoian languages\":{\"name\":\"Iroquoian languages\",\"names\":[\"Iroquoian languages\"],\"iso639-2\":\"iro\",\"iso639-1\":null},\"Italian\":{\"name\":\"Italian\",\"names\":[\"Italian\"],\"iso639-2\":\"ita\",\"iso639-1\":\"it\"},\"Japanese\":{\"name\":\"Japanese\",\"names\":[\"Japanese\"],\"iso639-2\":\"jpn\",\"iso639-1\":\"ja\"},\"Javanese\":{\"name\":\"Javanese\",\"names\":[\"Javanese\"],\"iso639-2\":\"jav\",\"iso639-1\":\"jv\"},\"Jingpho\":{\"name\":\"Jingpho\",\"names\":[\"Kachin\",\"Jingpho\"],\"iso639-2\":\"kac\",\"iso639-1\":null},\"Judeo-Arabic\":{\"name\":\"Judeo-Arabic\",\"names\":[\"Judeo-Arabic\"],\"iso639-2\":\"jrb\",\"iso639-1\":null},\"Judeo-Persian\":{\"name\":\"Judeo-Persian\",\"names\":[\"Judeo-Persian\"],\"iso639-2\":\"jpr\",\"iso639-1\":null},\"Kabardian\":{\"name\":\"Kabardian\",\"names\":[\"Kabardian\"],\"iso639-2\":\"kbd\",\"iso639-1\":null},\"Kabyle\":{\"name\":\"Kabyle\",\"names\":[\"Kabyle\"],\"iso639-2\":\"kab\",\"iso639-1\":null},\"Kachin\":{\"name\":\"Kachin\",\"names\":[\"Kachin\",\"Jingpho\"],\"iso639-2\":\"kac\",\"iso639-1\":null},\"Kalaallisut\":{\"name\":\"Kalaallisut\",\"names\":[\"Kalaallisut\",\"Greenlandic\"],\"iso639-2\":\"kal\",\"iso639-1\":\"kl\"},\"Kalmyk\":{\"name\":\"Kalmyk\",\"names\":[\"Kalmyk\",\"Oirat\"],\"iso639-2\":\"xal\",\"iso639-1\":null},\"Kamba\":{\"name\":\"Kamba\",\"names\":[\"Kamba\"],\"iso639-2\":\"kam\",\"iso639-1\":null},\"Kannada\":{\"name\":\"Kannada\",\"names\":[\"Kannada\"],\"iso639-2\":\"kan\",\"iso639-1\":\"kn\"},\"Kanuri\":{\"name\":\"Kanuri\",\"names\":[\"Kanuri\"],\"iso639-2\":\"kau\",\"iso639-1\":\"kr\"},\"Kapampangan\":{\"name\":\"Kapampangan\",\"names\":[\"Pampanga\",\"Kapampangan\"],\"iso639-2\":\"pam\",\"iso639-1\":null},\"Kara-Kalpak\":{\"name\":\"Kara-Kalpak\",\"names\":[\"Kara-Kalpak\"],\"iso639-2\":\"kaa\",\"iso639-1\":null},\"Karachay-Balkar\":{\"name\":\"Karachay-Balkar\",\"names\":[\"Karachay-Balkar\"],\"iso639-2\":\"krc\",\"iso639-1\":null},\"Karelian\":{\"name\":\"Karelian\",\"names\":[\"Karelian\"],\"iso639-2\":\"krl\",\"iso639-1\":null},\"Karen languages\":{\"name\":\"Karen languages\",\"names\":[\"Karen languages\"],\"iso639-2\":\"kar\",\"iso639-1\":null},\"Kashmiri\":{\"name\":\"Kashmiri\",\"names\":[\"Kashmiri\"],\"iso639-2\":\"kas\",\"iso639-1\":\"ks\"},\"Kashubian\":{\"name\":\"Kashubian\",\"names\":[\"Kashubian\"],\"iso639-2\":\"csb\",\"iso639-1\":null},\"Kawi\":{\"name\":\"Kawi\",\"names\":[\"Kawi\"],\"iso639-2\":\"kaw\",\"iso639-1\":null},\"Kazakh\":{\"name\":\"Kazakh\",\"names\":[\"Kazakh\"],\"iso639-2\":\"kaz\",\"iso639-1\":\"kk\"},\"Khasi\":{\"name\":\"Khasi\",\"names\":[\"Khasi\"],\"iso639-2\":\"kha\",\"iso639-1\":null},\"Khoisan languages\":{\"name\":\"Khoisan languages\",\"names\":[\"Khoisan languages\"],\"iso639-2\":\"khi\",\"iso639-1\":null},\"Khotanese\":{\"name\":\"Khotanese\",\"names\":[\"Khotanese\",\"Sakan\"],\"iso639-2\":\"kho\",\"iso639-1\":null},\"Kikuyu\":{\"name\":\"Kikuyu\",\"names\":[\"Kikuyu\",\"Gikuyu\"],\"iso639-2\":\"kik\",\"iso639-1\":\"ki\"},\"Kimbundu\":{\"name\":\"Kimbundu\",\"names\":[\"Kimbundu\"],\"iso639-2\":\"kmb\",\"iso639-1\":null},\"Kinyarwanda\":{\"name\":\"Kinyarwanda\",\"names\":[\"Kinyarwanda\"],\"iso639-2\":\"kin\",\"iso639-1\":\"rw\"},\"Kirdki\":{\"name\":\"Kirdki\",\"names\":[\"Zaza\",\"Dimili\",\"Dimli\",\"Kirdki\",\"Kirmanjki\",\"Zazaki\"],\"iso639-2\":\"zza\",\"iso639-1\":null},\"Kirghiz\":{\"name\":\"Kirghiz\",\"names\":[\"Kirghiz\",\"Kyrgyz\"],\"iso639-2\":\"kir\",\"iso639-1\":\"ky\"},\"Kirmanjki\":{\"name\":\"Kirmanjki\",\"names\":[\"Zaza\",\"Dimili\",\"Dimli\",\"Kirdki\",\"Kirmanjki\",\"Zazaki\"],\"iso639-2\":\"zza\",\"iso639-1\":null},\"Klingon\":{\"name\":\"Klingon\",\"names\":[\"Klingon\",\"tlhIngan-Hol\"],\"iso639-2\":\"tlh\",\"iso639-1\":null},\"Komi\":{\"name\":\"Komi\",\"names\":[\"Komi\"],\"iso639-2\":\"kom\",\"iso639-1\":\"kv\"},\"Kongo\":{\"name\":\"Kongo\",\"names\":[\"Kongo\"],\"iso639-2\":\"kon\",\"iso639-1\":\"kg\"},\"Konkani\":{\"name\":\"Konkani\",\"names\":[\"Konkani\"],\"iso639-2\":\"kok\",\"iso639-1\":null},\"Korean\":{\"name\":\"Korean\",\"names\":[\"Korean\"],\"iso639-2\":\"kor\",\"iso639-1\":\"ko\"},\"Kosraean\":{\"name\":\"Kosraean\",\"names\":[\"Kosraean\"],\"iso639-2\":\"kos\",\"iso639-1\":null},\"Kpelle\":{\"name\":\"Kpelle\",\"names\":[\"Kpelle\"],\"iso639-2\":\"kpe\",\"iso639-1\":null},\"Kru languages\":{\"name\":\"Kru languages\",\"names\":[\"Kru languages\"],\"iso639-2\":\"kro\",\"iso639-1\":null},\"Kuanyama\":{\"name\":\"Kuanyama\",\"names\":[\"Kuanyama\",\"Kwanyama\"],\"iso639-2\":\"kua\",\"iso639-1\":\"kj\"},\"Kumyk\":{\"name\":\"Kumyk\",\"names\":[\"Kumyk\"],\"iso639-2\":\"kum\",\"iso639-1\":null},\"Kurdish\":{\"name\":\"Kurdish\",\"names\":[\"Kurdish\"],\"iso639-2\":\"kur\",\"iso639-1\":\"ku\"},\"Kurukh\":{\"name\":\"Kurukh\",\"names\":[\"Kurukh\"],\"iso639-2\":\"kru\",\"iso639-1\":null},\"Kutenai\":{\"name\":\"Kutenai\",\"names\":[\"Kutenai\"],\"iso639-2\":\"kut\",\"iso639-1\":null},\"Kwanyama\":{\"name\":\"Kwanyama\",\"names\":[\"Kuanyama\",\"Kwanyama\"],\"iso639-2\":\"kua\",\"iso639-1\":\"kj\"},\"Kyrgyz\":{\"name\":\"Kyrgyz\",\"names\":[\"Kirghiz\",\"Kyrgyz\"],\"iso639-2\":\"kir\",\"iso639-1\":\"ky\"},\"Ladino\":{\"name\":\"Ladino\",\"names\":[\"Ladino\"],\"iso639-2\":\"lad\",\"iso639-1\":null},\"Lahnda\":{\"name\":\"Lahnda\",\"names\":[\"Lahnda\"],\"iso639-2\":\"lah\",\"iso639-1\":null},\"Lamba\":{\"name\":\"Lamba\",\"names\":[\"Lamba\"],\"iso639-2\":\"lam\",\"iso639-1\":null},\"Land Dayak languages\":{\"name\":\"Land Dayak languages\",\"names\":[\"Land Dayak languages\"],\"iso639-2\":\"day\",\"iso639-1\":null},\"Lao\":{\"name\":\"Lao\",\"names\":[\"Lao\"],\"iso639-2\":\"lao\",\"iso639-1\":\"lo\"},\"Latin\":{\"name\":\"Latin\",\"names\":[\"Latin\"],\"iso639-2\":\"lat\",\"iso639-1\":\"la\"},\"Latvian\":{\"name\":\"Latvian\",\"names\":[\"Latvian\"],\"iso639-2\":\"lav\",\"iso639-1\":\"lv\"},\"Leonese\":{\"name\":\"Leonese\",\"names\":[\"Asturian\",\"Bable\",\"Leonese\",\"Asturleonese\"],\"iso639-2\":\"ast\",\"iso639-1\":null},\"Letzeburgesch\":{\"name\":\"Letzeburgesch\",\"names\":[\"Luxembourgish\",\"Letzeburgesch\"],\"iso639-2\":\"ltz\",\"iso639-1\":\"lb\"},\"Lezghian\":{\"name\":\"Lezghian\",\"names\":[\"Lezghian\"],\"iso639-2\":\"lez\",\"iso639-1\":null},\"Limburgan\":{\"name\":\"Limburgan\",\"names\":[\"Limburgan\",\"Limburger\",\"Limburgish\"],\"iso639-2\":\"lim\",\"iso639-1\":\"li\"},\"Limburger\":{\"name\":\"Limburger\",\"names\":[\"Limburgan\",\"Limburger\",\"Limburgish\"],\"iso639-2\":\"lim\",\"iso639-1\":\"li\"},\"Limburgish\":{\"name\":\"Limburgish\",\"names\":[\"Limburgan\",\"Limburger\",\"Limburgish\"],\"iso639-2\":\"lim\",\"iso639-1\":\"li\"},\"Lingala\":{\"name\":\"Lingala\",\"names\":[\"Lingala\"],\"iso639-2\":\"lin\",\"iso639-1\":\"ln\"},\"Lithuanian\":{\"name\":\"Lithuanian\",\"names\":[\"Lithuanian\"],\"iso639-2\":\"lit\",\"iso639-1\":\"lt\"},\"Lojban\":{\"name\":\"Lojban\",\"names\":[\"Lojban\"],\"iso639-2\":\"jbo\",\"iso639-1\":null},\"Low German\":{\"name\":\"Low German\",\"names\":[\"Low German\",\"Low Saxon\",\"German, Low\",\"Saxon, Low\"],\"iso639-2\":\"nds\",\"iso639-1\":null},\"Low Saxon\":{\"name\":\"Low Saxon\",\"names\":[\"Low German\",\"Low Saxon\",\"German, Low\",\"Saxon, Low\"],\"iso639-2\":\"nds\",\"iso639-1\":null},\"Lower Sorbian\":{\"name\":\"Lower Sorbian\",\"names\":[\"Lower Sorbian\"],\"iso639-2\":\"dsb\",\"iso639-1\":null},\"Lozi\":{\"name\":\"Lozi\",\"names\":[\"Lozi\"],\"iso639-2\":\"loz\",\"iso639-1\":null},\"Luba-Katanga\":{\"name\":\"Luba-Katanga\",\"names\":[\"Luba-Katanga\"],\"iso639-2\":\"lub\",\"iso639-1\":\"lu\"},\"Luba-Lulua\":{\"name\":\"Luba-Lulua\",\"names\":[\"Luba-Lulua\"],\"iso639-2\":\"lua\",\"iso639-1\":null},\"Luiseno\":{\"name\":\"Luiseno\",\"names\":[\"Luiseno\"],\"iso639-2\":\"lui\",\"iso639-1\":null},\"Lule Sami\":{\"name\":\"Lule Sami\",\"names\":[\"Lule Sami\"],\"iso639-2\":\"smj\",\"iso639-1\":null},\"Lunda\":{\"name\":\"Lunda\",\"names\":[\"Lunda\"],\"iso639-2\":\"lun\",\"iso639-1\":null},\"Luo (Kenya and Tanzania)\":{\"name\":\"Luo (Kenya and Tanzania)\",\"names\":[\"Luo (Kenya and Tanzania)\"],\"iso639-2\":\"luo\",\"iso639-1\":null},\"Lushai\":{\"name\":\"Lushai\",\"names\":[\"Lushai\"],\"iso639-2\":\"lus\",\"iso639-1\":null},\"Luxembourgish\":{\"name\":\"Luxembourgish\",\"names\":[\"Luxembourgish\",\"Letzeburgesch\"],\"iso639-2\":\"ltz\",\"iso639-1\":\"lb\"},\"Macedo-Romanian\":{\"name\":\"Macedo-Romanian\",\"names\":[\"Aromanian\",\"Arumanian\",\"Macedo-Romanian\"],\"iso639-2\":\"rup\",\"iso639-1\":null},\"Macedonian\":{\"name\":\"Macedonian\",\"names\":[\"Macedonian\"],\"iso639-2\":\"mac/mkd\",\"iso639-1\":\"mk\"},\"Madurese\":{\"name\":\"Madurese\",\"names\":[\"Madurese\"],\"iso639-2\":\"mad\",\"iso639-1\":null},\"Magahi\":{\"name\":\"Magahi\",\"names\":[\"Magahi\"],\"iso639-2\":\"mag\",\"iso639-1\":null},\"Maithili\":{\"name\":\"Maithili\",\"names\":[\"Maithili\"],\"iso639-2\":\"mai\",\"iso639-1\":null},\"Makasar\":{\"name\":\"Makasar\",\"names\":[\"Makasar\"],\"iso639-2\":\"mak\",\"iso639-1\":null},\"Malagasy\":{\"name\":\"Malagasy\",\"names\":[\"Malagasy\"],\"iso639-2\":\"mlg\",\"iso639-1\":\"mg\"},\"Malay\":{\"name\":\"Malay\",\"names\":[\"Malay\"],\"iso639-2\":\"may/msa\",\"iso639-1\":\"ms\"},\"Malayalam\":{\"name\":\"Malayalam\",\"names\":[\"Malayalam\"],\"iso639-2\":\"mal\",\"iso639-1\":\"ml\"},\"Maldivian\":{\"name\":\"Maldivian\",\"names\":[\"Divehi\",\"Dhivehi\",\"Maldivian\"],\"iso639-2\":\"div\",\"iso639-1\":\"dv\"},\"Maltese\":{\"name\":\"Maltese\",\"names\":[\"Maltese\"],\"iso639-2\":\"mlt\",\"iso639-1\":\"mt\"},\"Manchu\":{\"name\":\"Manchu\",\"names\":[\"Manchu\"],\"iso639-2\":\"mnc\",\"iso639-1\":null},\"Mandar\":{\"name\":\"Mandar\",\"names\":[\"Mandar\"],\"iso639-2\":\"mdr\",\"iso639-1\":null},\"Mandingo\":{\"name\":\"Mandingo\",\"names\":[\"Mandingo\"],\"iso639-2\":\"man\",\"iso639-1\":null},\"Manipuri\":{\"name\":\"Manipuri\",\"names\":[\"Manipuri\"],\"iso639-2\":\"mni\",\"iso639-1\":null},\"Manobo languages\":{\"name\":\"Manobo languages\",\"names\":[\"Manobo languages\"],\"iso639-2\":\"mno\",\"iso639-1\":null},\"Manx\":{\"name\":\"Manx\",\"names\":[\"Manx\"],\"iso639-2\":\"glv\",\"iso639-1\":\"gv\"},\"Maori\":{\"name\":\"Maori\",\"names\":[\"Maori\"],\"iso639-2\":\"mao/mri\",\"iso639-1\":\"mi\"},\"Mapuche\":{\"name\":\"Mapuche\",\"names\":[\"Mapudungun\",\"Mapuche\"],\"iso639-2\":\"arn\",\"iso639-1\":null},\"Mapudungun\":{\"name\":\"Mapudungun\",\"names\":[\"Mapudungun\",\"Mapuche\"],\"iso639-2\":\"arn\",\"iso639-1\":null},\"Marathi\":{\"name\":\"Marathi\",\"names\":[\"Marathi\"],\"iso639-2\":\"mar\",\"iso639-1\":\"mr\"},\"Mari\":{\"name\":\"Mari\",\"names\":[\"Mari\"],\"iso639-2\":\"chm\",\"iso639-1\":null},\"Marshallese\":{\"name\":\"Marshallese\",\"names\":[\"Marshallese\"],\"iso639-2\":\"mah\",\"iso639-1\":\"mh\"},\"Marwari\":{\"name\":\"Marwari\",\"names\":[\"Marwari\"],\"iso639-2\":\"mwr\",\"iso639-1\":null},\"Masai\":{\"name\":\"Masai\",\"names\":[\"Masai\"],\"iso639-2\":\"mas\",\"iso639-1\":null},\"Mayan languages\":{\"name\":\"Mayan languages\",\"names\":[\"Mayan languages\"],\"iso639-2\":\"myn\",\"iso639-1\":null},\"Mende\":{\"name\":\"Mende\",\"names\":[\"Mende\"],\"iso639-2\":\"men\",\"iso639-1\":null},\"Mi'kmaq\":{\"name\":\"Mi'kmaq\",\"names\":[\"Mi'kmaq\",\"Micmac\"],\"iso639-2\":\"mic\",\"iso639-1\":null},\"Micmac\":{\"name\":\"Micmac\",\"names\":[\"Mi'kmaq\",\"Micmac\"],\"iso639-2\":\"mic\",\"iso639-1\":null},\"Minangkabau\":{\"name\":\"Minangkabau\",\"names\":[\"Minangkabau\"],\"iso639-2\":\"min\",\"iso639-1\":null},\"Mirandese\":{\"name\":\"Mirandese\",\"names\":[\"Mirandese\"],\"iso639-2\":\"mwl\",\"iso639-1\":null},\"Mohawk\":{\"name\":\"Mohawk\",\"names\":[\"Mohawk\"],\"iso639-2\":\"moh\",\"iso639-1\":null},\"Moksha\":{\"name\":\"Moksha\",\"names\":[\"Moksha\"],\"iso639-2\":\"mdf\",\"iso639-1\":null},\"Moldavian\":{\"name\":\"Moldavian\",\"names\":[\"Romanian\",\"Moldavian\",\"Moldovan\"],\"iso639-2\":\"rum/ron\",\"iso639-1\":\"ro\"},\"Moldovan\":{\"name\":\"Moldovan\",\"names\":[\"Romanian\",\"Moldavian\",\"Moldovan\"],\"iso639-2\":\"rum/ron\",\"iso639-1\":\"ro\"},\"Mon-Khmer languages\":{\"name\":\"Mon-Khmer languages\",\"names\":[\"Mon-Khmer languages\"],\"iso639-2\":\"mkh\",\"iso639-1\":null},\"Mong\":{\"name\":\"Mong\",\"names\":[\"Hmong\",\"Mong\"],\"iso639-2\":\"hmn\",\"iso639-1\":null},\"Mongo\":{\"name\":\"Mongo\",\"names\":[\"Mongo\"],\"iso639-2\":\"lol\",\"iso639-1\":null},\"Mongolian\":{\"name\":\"Mongolian\",\"names\":[\"Mongolian\"],\"iso639-2\":\"mon\",\"iso639-1\":\"mn\"},\"Montenegrin\":{\"name\":\"Montenegrin\",\"names\":[\"Montenegrin\"],\"iso639-2\":\"cnr\",\"iso639-1\":null},\"Mossi\":{\"name\":\"Mossi\",\"names\":[\"Mossi\"],\"iso639-2\":\"mos\",\"iso639-1\":null},\"Multiple languages\":{\"name\":\"Multiple languages\",\"names\":[\"Multiple languages\"],\"iso639-2\":\"mul\",\"iso639-1\":null},\"Munda languages\":{\"name\":\"Munda languages\",\"names\":[\"Munda languages\"],\"iso639-2\":\"mun\",\"iso639-1\":null},\"N'Ko\":{\"name\":\"N'Ko\",\"names\":[\"N'Ko\"],\"iso639-2\":\"nqo\",\"iso639-1\":null},\"Nahuatl languages\":{\"name\":\"Nahuatl languages\",\"names\":[\"Nahuatl languages\"],\"iso639-2\":\"nah\",\"iso639-1\":null},\"Nauru\":{\"name\":\"Nauru\",\"names\":[\"Nauru\"],\"iso639-2\":\"nau\",\"iso639-1\":\"na\"},\"Navaho\":{\"name\":\"Navaho\",\"names\":[\"Navajo\",\"Navaho\"],\"iso639-2\":\"nav\",\"iso639-1\":\"nv\"},\"Navajo\":{\"name\":\"Navajo\",\"names\":[\"Navajo\",\"Navaho\"],\"iso639-2\":\"nav\",\"iso639-1\":\"nv\"},\"Ndebele, North\":{\"name\":\"Ndebele, North\",\"names\":[\"Ndebele, North\",\"North Ndebele\"],\"iso639-2\":\"nde\",\"iso639-1\":\"nd\"},\"Ndebele, South\":{\"name\":\"Ndebele, South\",\"names\":[\"Ndebele, South\",\"South Ndebele\"],\"iso639-2\":\"nbl\",\"iso639-1\":\"nr\"},\"Ndonga\":{\"name\":\"Ndonga\",\"names\":[\"Ndonga\"],\"iso639-2\":\"ndo\",\"iso639-1\":\"ng\"},\"Neapolitan\":{\"name\":\"Neapolitan\",\"names\":[\"Neapolitan\"],\"iso639-2\":\"nap\",\"iso639-1\":null},\"Nepal Bhasa\":{\"name\":\"Nepal Bhasa\",\"names\":[\"Nepal Bhasa\",\"Newari\"],\"iso639-2\":\"new\",\"iso639-1\":null},\"Nepali\":{\"name\":\"Nepali\",\"names\":[\"Nepali\"],\"iso639-2\":\"nep\",\"iso639-1\":\"ne\"},\"Newari\":{\"name\":\"Newari\",\"names\":[\"Nepal Bhasa\",\"Newari\"],\"iso639-2\":\"new\",\"iso639-1\":null},\"Nias\":{\"name\":\"Nias\",\"names\":[\"Nias\"],\"iso639-2\":\"nia\",\"iso639-1\":null},\"Niger-Kordofanian languages\":{\"name\":\"Niger-Kordofanian languages\",\"names\":[\"Niger-Kordofanian languages\"],\"iso639-2\":\"nic\",\"iso639-1\":null},\"Nilo-Saharan languages\":{\"name\":\"Nilo-Saharan languages\",\"names\":[\"Nilo-Saharan languages\"],\"iso639-2\":\"ssa\",\"iso639-1\":null},\"Niuean\":{\"name\":\"Niuean\",\"names\":[\"Niuean\"],\"iso639-2\":\"niu\",\"iso639-1\":null},\"No linguistic content\":{\"name\":\"No linguistic content\",\"names\":[\"No linguistic content\",\"Not applicable\"],\"iso639-2\":\"zxx\",\"iso639-1\":null},\"Nogai\":{\"name\":\"Nogai\",\"names\":[\"Nogai\"],\"iso639-2\":\"nog\",\"iso639-1\":null},\"Norse, Old\":{\"name\":\"Norse, Old\",\"names\":[\"Norse, Old\"],\"iso639-2\":\"non\",\"iso639-1\":null},\"North American Indian languages\":{\"name\":\"North American Indian languages\",\"names\":[\"North American Indian languages\"],\"iso639-2\":\"nai\",\"iso639-1\":null},\"North Ndebele\":{\"name\":\"North Ndebele\",\"names\":[\"Ndebele, North\",\"North Ndebele\"],\"iso639-2\":\"nde\",\"iso639-1\":\"nd\"},\"Northern Frisian\":{\"name\":\"Northern Frisian\",\"names\":[\"Northern Frisian\"],\"iso639-2\":\"frr\",\"iso639-1\":null},\"Northern Sami\":{\"name\":\"Northern Sami\",\"names\":[\"Northern Sami\"],\"iso639-2\":\"sme\",\"iso639-1\":\"se\"},\"Northern Sotho\":{\"name\":\"Northern Sotho\",\"names\":[\"Pedi\",\"Sepedi\",\"Northern Sotho\"],\"iso639-2\":\"nso\",\"iso639-1\":null},\"Norwegian\":{\"name\":\"Norwegian\",\"names\":[\"Norwegian\"],\"iso639-2\":\"nor\",\"iso639-1\":\"no\"},\"Norwegian Bokmål\":{\"name\":\"Norwegian Bokmål\",\"names\":[\"Bokmål, Norwegian\",\"Norwegian Bokmål\"],\"iso639-2\":\"nob\",\"iso639-1\":\"nb\"},\"Norwegian Nynorsk\":{\"name\":\"Norwegian Nynorsk\",\"names\":[\"Norwegian Nynorsk\",\"Nynorsk, Norwegian\"],\"iso639-2\":\"nno\",\"iso639-1\":\"nn\"},\"Not applicable\":{\"name\":\"Not applicable\",\"names\":[\"No linguistic content\",\"Not applicable\"],\"iso639-2\":\"zxx\",\"iso639-1\":null},\"Nubian languages\":{\"name\":\"Nubian languages\",\"names\":[\"Nubian languages\"],\"iso639-2\":\"nub\",\"iso639-1\":null},\"Nuosu\":{\"name\":\"Nuosu\",\"names\":[\"Sichuan Yi\",\"Nuosu\"],\"iso639-2\":\"iii\",\"iso639-1\":\"ii\"},\"Nyamwezi\":{\"name\":\"Nyamwezi\",\"names\":[\"Nyamwezi\"],\"iso639-2\":\"nym\",\"iso639-1\":null},\"Nyanja\":{\"name\":\"Nyanja\",\"names\":[\"Chichewa\",\"Chewa\",\"Nyanja\"],\"iso639-2\":\"nya\",\"iso639-1\":\"ny\"},\"Nyankole\":{\"name\":\"Nyankole\",\"names\":[\"Nyankole\"],\"iso639-2\":\"nyn\",\"iso639-1\":null},\"Nynorsk, Norwegian\":{\"name\":\"Nynorsk, Norwegian\",\"names\":[\"Norwegian Nynorsk\",\"Nynorsk, Norwegian\"],\"iso639-2\":\"nno\",\"iso639-1\":\"nn\"},\"Nyoro\":{\"name\":\"Nyoro\",\"names\":[\"Nyoro\"],\"iso639-2\":\"nyo\",\"iso639-1\":null},\"Nzima\":{\"name\":\"Nzima\",\"names\":[\"Nzima\"],\"iso639-2\":\"nzi\",\"iso639-1\":null},\"Occidental\":{\"name\":\"Occidental\",\"names\":[\"Interlingue\",\"Occidental\"],\"iso639-2\":\"ile\",\"iso639-1\":\"ie\"},\"Occitan (post 1500)\":{\"name\":\"Occitan (post 1500)\",\"names\":[\"Occitan (post 1500)\"],\"iso639-2\":\"oci\",\"iso639-1\":\"oc\"},\"Occitan, Old (to 1500)\":{\"name\":\"Occitan, Old (to 1500)\",\"names\":[\"Provençal, Old (to 1500)\",\"Occitan, Old (to 1500)\"],\"iso639-2\":\"pro\",\"iso639-1\":null},\"Official Aramaic (700-300 BCE)\":{\"name\":\"Official Aramaic (700-300 BCE)\",\"names\":[\"Official Aramaic (700-300 BCE)\",\"Imperial Aramaic (700-300 BCE)\"],\"iso639-2\":\"arc\",\"iso639-1\":null},\"Oirat\":{\"name\":\"Oirat\",\"names\":[\"Kalmyk\",\"Oirat\"],\"iso639-2\":\"xal\",\"iso639-1\":null},\"Ojibwa\":{\"name\":\"Ojibwa\",\"names\":[\"Ojibwa\"],\"iso639-2\":\"oji\",\"iso639-1\":\"oj\"},\"Old Bulgarian\":{\"name\":\"Old Bulgarian\",\"names\":[\"Church Slavic\",\"Old Slavonic\",\"Church Slavonic\",\"Old Bulgarian\",\"Old Church Slavonic\"],\"iso639-2\":\"chu\",\"iso639-1\":\"cu\"},\"Old Church Slavonic\":{\"name\":\"Old Church Slavonic\",\"names\":[\"Church Slavic\",\"Old Slavonic\",\"Church Slavonic\",\"Old Bulgarian\",\"Old Church Slavonic\"],\"iso639-2\":\"chu\",\"iso639-1\":\"cu\"},\"Old Newari\":{\"name\":\"Old Newari\",\"names\":[\"Classical Newari\",\"Old Newari\",\"Classical Nepal Bhasa\"],\"iso639-2\":\"nwc\",\"iso639-1\":null},\"Old Slavonic\":{\"name\":\"Old Slavonic\",\"names\":[\"Church Slavic\",\"Old Slavonic\",\"Church Slavonic\",\"Old Bulgarian\",\"Old Church Slavonic\"],\"iso639-2\":\"chu\",\"iso639-1\":\"cu\"},\"Oriya\":{\"name\":\"Oriya\",\"names\":[\"Oriya\"],\"iso639-2\":\"ori\",\"iso639-1\":\"or\"},\"Oromo\":{\"name\":\"Oromo\",\"names\":[\"Oromo\"],\"iso639-2\":\"orm\",\"iso639-1\":\"om\"},\"Osage\":{\"name\":\"Osage\",\"names\":[\"Osage\"],\"iso639-2\":\"osa\",\"iso639-1\":null},\"Ossetian\":{\"name\":\"Ossetian\",\"names\":[\"Ossetian\",\"Ossetic\"],\"iso639-2\":\"oss\",\"iso639-1\":\"os\"},\"Ossetic\":{\"name\":\"Ossetic\",\"names\":[\"Ossetian\",\"Ossetic\"],\"iso639-2\":\"oss\",\"iso639-1\":\"os\"},\"Otomian languages\":{\"name\":\"Otomian languages\",\"names\":[\"Otomian languages\"],\"iso639-2\":\"oto\",\"iso639-1\":null},\"Pahlavi\":{\"name\":\"Pahlavi\",\"names\":[\"Pahlavi\"],\"iso639-2\":\"pal\",\"iso639-1\":null},\"Palauan\":{\"name\":\"Palauan\",\"names\":[\"Palauan\"],\"iso639-2\":\"pau\",\"iso639-1\":null},\"Pali\":{\"name\":\"Pali\",\"names\":[\"Pali\"],\"iso639-2\":\"pli\",\"iso639-1\":\"pi\"},\"Pampanga\":{\"name\":\"Pampanga\",\"names\":[\"Pampanga\",\"Kapampangan\"],\"iso639-2\":\"pam\",\"iso639-1\":null},\"Pangasinan\":{\"name\":\"Pangasinan\",\"names\":[\"Pangasinan\"],\"iso639-2\":\"pag\",\"iso639-1\":null},\"Panjabi\":{\"name\":\"Panjabi\",\"names\":[\"Panjabi\",\"Punjabi\"],\"iso639-2\":\"pan\",\"iso639-1\":\"pa\"},\"Papiamento\":{\"name\":\"Papiamento\",\"names\":[\"Papiamento\"],\"iso639-2\":\"pap\",\"iso639-1\":null},\"Papuan languages\":{\"name\":\"Papuan languages\",\"names\":[\"Papuan languages\"],\"iso639-2\":\"paa\",\"iso639-1\":null},\"Pashto\":{\"name\":\"Pashto\",\"names\":[\"Pushto\",\"Pashto\"],\"iso639-2\":\"pus\",\"iso639-1\":\"ps\"},\"Pedi\":{\"name\":\"Pedi\",\"names\":[\"Pedi\",\"Sepedi\",\"Northern Sotho\"],\"iso639-2\":\"nso\",\"iso639-1\":null},\"Persian\":{\"name\":\"Persian\",\"names\":[\"Persian\"],\"iso639-2\":\"per/fas\",\"iso639-1\":\"fa\"},\"Persian, Old (ca.600-400 B.C.)\":{\"name\":\"Persian, Old (ca.600-400 B.C.)\",\"names\":[\"Persian, Old (ca.600-400 B.C.)\"],\"iso639-2\":\"peo\",\"iso639-1\":null},\"Philippine languages\":{\"name\":\"Philippine languages\",\"names\":[\"Philippine languages\"],\"iso639-2\":\"phi\",\"iso639-1\":null},\"Phoenician\":{\"name\":\"Phoenician\",\"names\":[\"Phoenician\"],\"iso639-2\":\"phn\",\"iso639-1\":null},\"Pilipino\":{\"name\":\"Pilipino\",\"names\":[\"Filipino\",\"Pilipino\"],\"iso639-2\":\"fil\",\"iso639-1\":null},\"Pohnpeian\":{\"name\":\"Pohnpeian\",\"names\":[\"Pohnpeian\"],\"iso639-2\":\"pon\",\"iso639-1\":null},\"Polish\":{\"name\":\"Polish\",\"names\":[\"Polish\"],\"iso639-2\":\"pol\",\"iso639-1\":\"pl\"},\"Portuguese\":{\"name\":\"Portuguese\",\"names\":[\"Portuguese\"],\"iso639-2\":\"por\",\"iso639-1\":\"pt\"},\"Prakrit languages\":{\"name\":\"Prakrit languages\",\"names\":[\"Prakrit languages\"],\"iso639-2\":\"pra\",\"iso639-1\":null},\"Provençal, Old (to 1500)\":{\"name\":\"Provençal, Old (to 1500)\",\"names\":[\"Provençal, Old (to 1500)\",\"Occitan, Old (to 1500)\"],\"iso639-2\":\"pro\",\"iso639-1\":null},\"Punjabi\":{\"name\":\"Punjabi\",\"names\":[\"Panjabi\",\"Punjabi\"],\"iso639-2\":\"pan\",\"iso639-1\":\"pa\"},\"Pushto\":{\"name\":\"Pushto\",\"names\":[\"Pushto\",\"Pashto\"],\"iso639-2\":\"pus\",\"iso639-1\":\"ps\"},\"Quechua\":{\"name\":\"Quechua\",\"names\":[\"Quechua\"],\"iso639-2\":\"que\",\"iso639-1\":\"qu\"},\"Rajasthani\":{\"name\":\"Rajasthani\",\"names\":[\"Rajasthani\"],\"iso639-2\":\"raj\",\"iso639-1\":null},\"Rapanui\":{\"name\":\"Rapanui\",\"names\":[\"Rapanui\"],\"iso639-2\":\"rap\",\"iso639-1\":null},\"Rarotongan\":{\"name\":\"Rarotongan\",\"names\":[\"Rarotongan\",\"Cook Islands Maori\"],\"iso639-2\":\"rar\",\"iso639-1\":null},\"Reserved for local use\":{\"name\":\"Reserved for local use\",\"names\":[\"Reserved for local use\"],\"iso639-2\":\"qaa-qtz\",\"iso639-1\":null},\"Romance languages\":{\"name\":\"Romance languages\",\"names\":[\"Romance languages\"],\"iso639-2\":\"roa\",\"iso639-1\":null},\"Romanian\":{\"name\":\"Romanian\",\"names\":[\"Romanian\",\"Moldavian\",\"Moldovan\"],\"iso639-2\":\"rum/ron\",\"iso639-1\":\"ro\"},\"Romansh\":{\"name\":\"Romansh\",\"names\":[\"Romansh\"],\"iso639-2\":\"roh\",\"iso639-1\":\"rm\"},\"Romany\":{\"name\":\"Romany\",\"names\":[\"Romany\"],\"iso639-2\":\"rom\",\"iso639-1\":null},\"Rundi\":{\"name\":\"Rundi\",\"names\":[\"Rundi\"],\"iso639-2\":\"run\",\"iso639-1\":\"rn\"},\"Russian\":{\"name\":\"Russian\",\"names\":[\"Russian\"],\"iso639-2\":\"rus\",\"iso639-1\":\"ru\"},\"Sakan\":{\"name\":\"Sakan\",\"names\":[\"Khotanese\",\"Sakan\"],\"iso639-2\":\"kho\",\"iso639-1\":null},\"Salishan languages\":{\"name\":\"Salishan languages\",\"names\":[\"Salishan languages\"],\"iso639-2\":\"sal\",\"iso639-1\":null},\"Samaritan Aramaic\":{\"name\":\"Samaritan Aramaic\",\"names\":[\"Samaritan Aramaic\"],\"iso639-2\":\"sam\",\"iso639-1\":null},\"Sami languages\":{\"name\":\"Sami languages\",\"names\":[\"Sami languages\"],\"iso639-2\":\"smi\",\"iso639-1\":null},\"Samoan\":{\"name\":\"Samoan\",\"names\":[\"Samoan\"],\"iso639-2\":\"smo\",\"iso639-1\":\"sm\"},\"Sandawe\":{\"name\":\"Sandawe\",\"names\":[\"Sandawe\"],\"iso639-2\":\"sad\",\"iso639-1\":null},\"Sango\":{\"name\":\"Sango\",\"names\":[\"Sango\"],\"iso639-2\":\"sag\",\"iso639-1\":\"sg\"},\"Sanskrit\":{\"name\":\"Sanskrit\",\"names\":[\"Sanskrit\"],\"iso639-2\":\"san\",\"iso639-1\":\"sa\"},\"Santali\":{\"name\":\"Santali\",\"names\":[\"Santali\"],\"iso639-2\":\"sat\",\"iso639-1\":null},\"Sardinian\":{\"name\":\"Sardinian\",\"names\":[\"Sardinian\"],\"iso639-2\":\"srd\",\"iso639-1\":\"sc\"},\"Sasak\":{\"name\":\"Sasak\",\"names\":[\"Sasak\"],\"iso639-2\":\"sas\",\"iso639-1\":null},\"Saxon, Low\":{\"name\":\"Saxon, Low\",\"names\":[\"Low German\",\"Low Saxon\",\"German, Low\",\"Saxon, Low\"],\"iso639-2\":\"nds\",\"iso639-1\":null},\"Scots\":{\"name\":\"Scots\",\"names\":[\"Scots\"],\"iso639-2\":\"sco\",\"iso639-1\":null},\"Scottish Gaelic\":{\"name\":\"Scottish Gaelic\",\"names\":[\"Gaelic\",\"Scottish Gaelic\"],\"iso639-2\":\"gla\",\"iso639-1\":\"gd\"},\"Selkup\":{\"name\":\"Selkup\",\"names\":[\"Selkup\"],\"iso639-2\":\"sel\",\"iso639-1\":null},\"Semitic languages\":{\"name\":\"Semitic languages\",\"names\":[\"Semitic languages\"],\"iso639-2\":\"sem\",\"iso639-1\":null},\"Sepedi\":{\"name\":\"Sepedi\",\"names\":[\"Pedi\",\"Sepedi\",\"Northern Sotho\"],\"iso639-2\":\"nso\",\"iso639-1\":null},\"Serbian\":{\"name\":\"Serbian\",\"names\":[\"Serbian\"],\"iso639-2\":\"srp\",\"iso639-1\":\"sr\"},\"Serer\":{\"name\":\"Serer\",\"names\":[\"Serer\"],\"iso639-2\":\"srr\",\"iso639-1\":null},\"Shan\":{\"name\":\"Shan\",\"names\":[\"Shan\"],\"iso639-2\":\"shn\",\"iso639-1\":null},\"Shona\":{\"name\":\"Shona\",\"names\":[\"Shona\"],\"iso639-2\":\"sna\",\"iso639-1\":\"sn\"},\"Sichuan Yi\":{\"name\":\"Sichuan Yi\",\"names\":[\"Sichuan Yi\",\"Nuosu\"],\"iso639-2\":\"iii\",\"iso639-1\":\"ii\"},\"Sicilian\":{\"name\":\"Sicilian\",\"names\":[\"Sicilian\"],\"iso639-2\":\"scn\",\"iso639-1\":null},\"Sidamo\":{\"name\":\"Sidamo\",\"names\":[\"Sidamo\"],\"iso639-2\":\"sid\",\"iso639-1\":null},\"Sign Languages\":{\"name\":\"Sign Languages\",\"names\":[\"Sign Languages\"],\"iso639-2\":\"sgn\",\"iso639-1\":null},\"Siksika\":{\"name\":\"Siksika\",\"names\":[\"Siksika\"],\"iso639-2\":\"bla\",\"iso639-1\":null},\"Sindhi\":{\"name\":\"Sindhi\",\"names\":[\"Sindhi\"],\"iso639-2\":\"snd\",\"iso639-1\":\"sd\"},\"Sinhala\":{\"name\":\"Sinhala\",\"names\":[\"Sinhala\",\"Sinhalese\"],\"iso639-2\":\"sin\",\"iso639-1\":\"si\"},\"Sinhalese\":{\"name\":\"Sinhalese\",\"names\":[\"Sinhala\",\"Sinhalese\"],\"iso639-2\":\"sin\",\"iso639-1\":\"si\"},\"Sino-Tibetan languages\":{\"name\":\"Sino-Tibetan languages\",\"names\":[\"Sino-Tibetan languages\"],\"iso639-2\":\"sit\",\"iso639-1\":null},\"Siouan languages\":{\"name\":\"Siouan languages\",\"names\":[\"Siouan languages\"],\"iso639-2\":\"sio\",\"iso639-1\":null},\"Skolt Sami\":{\"name\":\"Skolt Sami\",\"names\":[\"Skolt Sami\"],\"iso639-2\":\"sms\",\"iso639-1\":null},\"Slave (Athapascan)\":{\"name\":\"Slave (Athapascan)\",\"names\":[\"Slave (Athapascan)\"],\"iso639-2\":\"den\",\"iso639-1\":null},\"Slavic languages\":{\"name\":\"Slavic languages\",\"names\":[\"Slavic languages\"],\"iso639-2\":\"sla\",\"iso639-1\":null},\"Slovak\":{\"name\":\"Slovak\",\"names\":[\"Slovak\"],\"iso639-2\":\"slo/slk\",\"iso639-1\":\"sk\"},\"Slovenian\":{\"name\":\"Slovenian\",\"names\":[\"Slovenian\"],\"iso639-2\":\"slv\",\"iso639-1\":\"sl\"},\"Sogdian\":{\"name\":\"Sogdian\",\"names\":[\"Sogdian\"],\"iso639-2\":\"sog\",\"iso639-1\":null},\"Somali\":{\"name\":\"Somali\",\"names\":[\"Somali\"],\"iso639-2\":\"som\",\"iso639-1\":\"so\"},\"Songhai languages\":{\"name\":\"Songhai languages\",\"names\":[\"Songhai languages\"],\"iso639-2\":\"son\",\"iso639-1\":null},\"Soninke\":{\"name\":\"Soninke\",\"names\":[\"Soninke\"],\"iso639-2\":\"snk\",\"iso639-1\":null},\"Sorbian languages\":{\"name\":\"Sorbian languages\",\"names\":[\"Sorbian languages\"],\"iso639-2\":\"wen\",\"iso639-1\":null},\"Sotho, Northern\":{\"name\":\"Sotho, Northern\",\"names\":[\"Pedi\",\"Sepedi\",\"Northern Sotho\"],\"iso639-2\":\"nso\",\"iso639-1\":null},\"Sotho, Southern\":{\"name\":\"Sotho, Southern\",\"names\":[\"Sotho, Southern\"],\"iso639-2\":\"sot\",\"iso639-1\":\"st\"},\"South American Indian languages\":{\"name\":\"South American Indian languages\",\"names\":[\"South American Indian languages\"],\"iso639-2\":\"sai\",\"iso639-1\":null},\"South Ndebele\":{\"name\":\"South Ndebele\",\"names\":[\"Ndebele, South\",\"South Ndebele\"],\"iso639-2\":\"nbl\",\"iso639-1\":\"nr\"},\"Southern Altai\":{\"name\":\"Southern Altai\",\"names\":[\"Southern Altai\"],\"iso639-2\":\"alt\",\"iso639-1\":null},\"Southern Sami\":{\"name\":\"Southern Sami\",\"names\":[\"Southern Sami\"],\"iso639-2\":\"sma\",\"iso639-1\":null},\"Spanish\":{\"name\":\"Spanish\",\"names\":[\"Spanish\",\"Castilian\"],\"iso639-2\":\"spa\",\"iso639-1\":\"es\"},\"Sranan Tongo\":{\"name\":\"Sranan Tongo\",\"names\":[\"Sranan Tongo\"],\"iso639-2\":\"srn\",\"iso639-1\":null},\"Standard Moroccan Tamazight\":{\"name\":\"Standard Moroccan Tamazight\",\"names\":[\"Standard Moroccan Tamazight\"],\"iso639-2\":\"zgh\",\"iso639-1\":null},\"Sukuma\":{\"name\":\"Sukuma\",\"names\":[\"Sukuma\"],\"iso639-2\":\"suk\",\"iso639-1\":null},\"Sumerian\":{\"name\":\"Sumerian\",\"names\":[\"Sumerian\"],\"iso639-2\":\"sux\",\"iso639-1\":null},\"Sundanese\":{\"name\":\"Sundanese\",\"names\":[\"Sundanese\"],\"iso639-2\":\"sun\",\"iso639-1\":\"su\"},\"Susu\":{\"name\":\"Susu\",\"names\":[\"Susu\"],\"iso639-2\":\"sus\",\"iso639-1\":null},\"Swahili\":{\"name\":\"Swahili\",\"names\":[\"Swahili\"],\"iso639-2\":\"swa\",\"iso639-1\":\"sw\"},\"Swati\":{\"name\":\"Swati\",\"names\":[\"Swati\"],\"iso639-2\":\"ssw\",\"iso639-1\":\"ss\"},\"Swedish\":{\"name\":\"Swedish\",\"names\":[\"Swedish\"],\"iso639-2\":\"swe\",\"iso639-1\":\"sv\"},\"Swiss German\":{\"name\":\"Swiss German\",\"names\":[\"Swiss German\",\"Alemannic\",\"Alsatian\"],\"iso639-2\":\"gsw\",\"iso639-1\":null},\"Syriac\":{\"name\":\"Syriac\",\"names\":[\"Syriac\"],\"iso639-2\":\"syr\",\"iso639-1\":null},\"Tagalog\":{\"name\":\"Tagalog\",\"names\":[\"Tagalog\"],\"iso639-2\":\"tgl\",\"iso639-1\":\"tl\"},\"Tahitian\":{\"name\":\"Tahitian\",\"names\":[\"Tahitian\"],\"iso639-2\":\"tah\",\"iso639-1\":\"ty\"},\"Tai languages\":{\"name\":\"Tai languages\",\"names\":[\"Tai languages\"],\"iso639-2\":\"tai\",\"iso639-1\":null},\"Tajik\":{\"name\":\"Tajik\",\"names\":[\"Tajik\"],\"iso639-2\":\"tgk\",\"iso639-1\":\"tg\"},\"Tamashek\":{\"name\":\"Tamashek\",\"names\":[\"Tamashek\"],\"iso639-2\":\"tmh\",\"iso639-1\":null},\"Tamil\":{\"name\":\"Tamil\",\"names\":[\"Tamil\"],\"iso639-2\":\"tam\",\"iso639-1\":\"ta\"},\"Tatar\":{\"name\":\"Tatar\",\"names\":[\"Tatar\"],\"iso639-2\":\"tat\",\"iso639-1\":\"tt\"},\"Telugu\":{\"name\":\"Telugu\",\"names\":[\"Telugu\"],\"iso639-2\":\"tel\",\"iso639-1\":\"te\"},\"Tereno\":{\"name\":\"Tereno\",\"names\":[\"Tereno\"],\"iso639-2\":\"ter\",\"iso639-1\":null},\"Tetum\":{\"name\":\"Tetum\",\"names\":[\"Tetum\"],\"iso639-2\":\"tet\",\"iso639-1\":null},\"Thai\":{\"name\":\"Thai\",\"names\":[\"Thai\"],\"iso639-2\":\"tha\",\"iso639-1\":\"th\"},\"Tibetan\":{\"name\":\"Tibetan\",\"names\":[\"Tibetan\"],\"iso639-2\":\"tib/bod\",\"iso639-1\":\"bo\"},\"Tigre\":{\"name\":\"Tigre\",\"names\":[\"Tigre\"],\"iso639-2\":\"tig\",\"iso639-1\":null},\"Tigrinya\":{\"name\":\"Tigrinya\",\"names\":[\"Tigrinya\"],\"iso639-2\":\"tir\",\"iso639-1\":\"ti\"},\"Timne\":{\"name\":\"Timne\",\"names\":[\"Timne\"],\"iso639-2\":\"tem\",\"iso639-1\":null},\"Tiv\":{\"name\":\"Tiv\",\"names\":[\"Tiv\"],\"iso639-2\":\"tiv\",\"iso639-1\":null},\"tlhIngan-Hol\":{\"name\":\"tlhIngan-Hol\",\"names\":[\"Klingon\",\"tlhIngan-Hol\"],\"iso639-2\":\"tlh\",\"iso639-1\":null},\"Tlingit\":{\"name\":\"Tlingit\",\"names\":[\"Tlingit\"],\"iso639-2\":\"tli\",\"iso639-1\":null},\"Tok Pisin\":{\"name\":\"Tok Pisin\",\"names\":[\"Tok Pisin\"],\"iso639-2\":\"tpi\",\"iso639-1\":null},\"Tokelau\":{\"name\":\"Tokelau\",\"names\":[\"Tokelau\"],\"iso639-2\":\"tkl\",\"iso639-1\":null},\"Tonga (Nyasa)\":{\"name\":\"Tonga (Nyasa)\",\"names\":[\"Tonga (Nyasa)\"],\"iso639-2\":\"tog\",\"iso639-1\":null},\"Tonga (Tonga Islands)\":{\"name\":\"Tonga (Tonga Islands)\",\"names\":[\"Tonga (Tonga Islands)\"],\"iso639-2\":\"ton\",\"iso639-1\":\"to\"},\"Tsimshian\":{\"name\":\"Tsimshian\",\"names\":[\"Tsimshian\"],\"iso639-2\":\"tsi\",\"iso639-1\":null},\"Tsonga\":{\"name\":\"Tsonga\",\"names\":[\"Tsonga\"],\"iso639-2\":\"tso\",\"iso639-1\":\"ts\"},\"Tswana\":{\"name\":\"Tswana\",\"names\":[\"Tswana\"],\"iso639-2\":\"tsn\",\"iso639-1\":\"tn\"},\"Tumbuka\":{\"name\":\"Tumbuka\",\"names\":[\"Tumbuka\"],\"iso639-2\":\"tum\",\"iso639-1\":null},\"Tupi languages\":{\"name\":\"Tupi languages\",\"names\":[\"Tupi languages\"],\"iso639-2\":\"tup\",\"iso639-1\":null},\"Turkish\":{\"name\":\"Turkish\",\"names\":[\"Turkish\"],\"iso639-2\":\"tur\",\"iso639-1\":\"tr\"},\"Turkish, Ottoman (1500-1928)\":{\"name\":\"Turkish, Ottoman (1500-1928)\",\"names\":[\"Turkish, Ottoman (1500-1928)\"],\"iso639-2\":\"ota\",\"iso639-1\":null},\"Turkmen\":{\"name\":\"Turkmen\",\"names\":[\"Turkmen\"],\"iso639-2\":\"tuk\",\"iso639-1\":\"tk\"},\"Tuvalu\":{\"name\":\"Tuvalu\",\"names\":[\"Tuvalu\"],\"iso639-2\":\"tvl\",\"iso639-1\":null},\"Tuvinian\":{\"name\":\"Tuvinian\",\"names\":[\"Tuvinian\"],\"iso639-2\":\"tyv\",\"iso639-1\":null},\"Twi\":{\"name\":\"Twi\",\"names\":[\"Twi\"],\"iso639-2\":\"twi\",\"iso639-1\":\"tw\"},\"Udmurt\":{\"name\":\"Udmurt\",\"names\":[\"Udmurt\"],\"iso639-2\":\"udm\",\"iso639-1\":null},\"Ugaritic\":{\"name\":\"Ugaritic\",\"names\":[\"Ugaritic\"],\"iso639-2\":\"uga\",\"iso639-1\":null},\"Uighur\":{\"name\":\"Uighur\",\"names\":[\"Uighur\",\"Uyghur\"],\"iso639-2\":\"uig\",\"iso639-1\":\"ug\"},\"Ukrainian\":{\"name\":\"Ukrainian\",\"names\":[\"Ukrainian\"],\"iso639-2\":\"ukr\",\"iso639-1\":\"uk\"},\"Umbundu\":{\"name\":\"Umbundu\",\"names\":[\"Umbundu\"],\"iso639-2\":\"umb\",\"iso639-1\":null},\"Uncoded languages\":{\"name\":\"Uncoded languages\",\"names\":[\"Uncoded languages\"],\"iso639-2\":\"mis\",\"iso639-1\":null},\"Undetermined\":{\"name\":\"Undetermined\",\"names\":[\"Undetermined\"],\"iso639-2\":\"und\",\"iso639-1\":null},\"Upper Sorbian\":{\"name\":\"Upper Sorbian\",\"names\":[\"Upper Sorbian\"],\"iso639-2\":\"hsb\",\"iso639-1\":null},\"Urdu\":{\"name\":\"Urdu\",\"names\":[\"Urdu\"],\"iso639-2\":\"urd\",\"iso639-1\":\"ur\"},\"Uyghur\":{\"name\":\"Uyghur\",\"names\":[\"Uighur\",\"Uyghur\"],\"iso639-2\":\"uig\",\"iso639-1\":\"ug\"},\"Uzbek\":{\"name\":\"Uzbek\",\"names\":[\"Uzbek\"],\"iso639-2\":\"uzb\",\"iso639-1\":\"uz\"},\"Vai\":{\"name\":\"Vai\",\"names\":[\"Vai\"],\"iso639-2\":\"vai\",\"iso639-1\":null},\"Valencian\":{\"name\":\"Valencian\",\"names\":[\"Catalan\",\"Valencian\"],\"iso639-2\":\"cat\",\"iso639-1\":\"ca\"},\"Venda\":{\"name\":\"Venda\",\"names\":[\"Venda\"],\"iso639-2\":\"ven\",\"iso639-1\":\"ve\"},\"Vietnamese\":{\"name\":\"Vietnamese\",\"names\":[\"Vietnamese\"],\"iso639-2\":\"vie\",\"iso639-1\":\"vi\"},\"Volapük\":{\"name\":\"Volapük\",\"names\":[\"Volapük\"],\"iso639-2\":\"vol\",\"iso639-1\":\"vo\"},\"Votic\":{\"name\":\"Votic\",\"names\":[\"Votic\"],\"iso639-2\":\"vot\",\"iso639-1\":null},\"Wakashan languages\":{\"name\":\"Wakashan languages\",\"names\":[\"Wakashan languages\"],\"iso639-2\":\"wak\",\"iso639-1\":null},\"Walloon\":{\"name\":\"Walloon\",\"names\":[\"Walloon\"],\"iso639-2\":\"wln\",\"iso639-1\":\"wa\"},\"Waray\":{\"name\":\"Waray\",\"names\":[\"Waray\"],\"iso639-2\":\"war\",\"iso639-1\":null},\"Washo\":{\"name\":\"Washo\",\"names\":[\"Washo\"],\"iso639-2\":\"was\",\"iso639-1\":null},\"Welsh\":{\"name\":\"Welsh\",\"names\":[\"Welsh\"],\"iso639-2\":\"wel/cym\",\"iso639-1\":\"cy\"},\"Western Frisian\":{\"name\":\"Western Frisian\",\"names\":[\"Western Frisian\"],\"iso639-2\":\"fry\",\"iso639-1\":\"fy\"},\"Western Pahari languages\":{\"name\":\"Western Pahari languages\",\"names\":[\"Himachali languages\",\"Western Pahari languages\"],\"iso639-2\":\"him\",\"iso639-1\":null},\"Wolaitta\":{\"name\":\"Wolaitta\",\"names\":[\"Wolaitta\",\"Wolaytta\"],\"iso639-2\":\"wal\",\"iso639-1\":null},\"Wolaytta\":{\"name\":\"Wolaytta\",\"names\":[\"Wolaitta\",\"Wolaytta\"],\"iso639-2\":\"wal\",\"iso639-1\":null},\"Wolof\":{\"name\":\"Wolof\",\"names\":[\"Wolof\"],\"iso639-2\":\"wol\",\"iso639-1\":\"wo\"},\"Xhosa\":{\"name\":\"Xhosa\",\"names\":[\"Xhosa\"],\"iso639-2\":\"xho\",\"iso639-1\":\"xh\"},\"Yakut\":{\"name\":\"Yakut\",\"names\":[\"Yakut\"],\"iso639-2\":\"sah\",\"iso639-1\":null},\"Yao\":{\"name\":\"Yao\",\"names\":[\"Yao\"],\"iso639-2\":\"yao\",\"iso639-1\":null},\"Yapese\":{\"name\":\"Yapese\",\"names\":[\"Yapese\"],\"iso639-2\":\"yap\",\"iso639-1\":null},\"Yiddish\":{\"name\":\"Yiddish\",\"names\":[\"Yiddish\"],\"iso639-2\":\"yid\",\"iso639-1\":\"yi\"},\"Yoruba\":{\"name\":\"Yoruba\",\"names\":[\"Yoruba\"],\"iso639-2\":\"yor\",\"iso639-1\":\"yo\"},\"Yupik languages\":{\"name\":\"Yupik languages\",\"names\":[\"Yupik languages\"],\"iso639-2\":\"ypk\",\"iso639-1\":null},\"Zande languages\":{\"name\":\"Zande languages\",\"names\":[\"Zande languages\"],\"iso639-2\":\"znd\",\"iso639-1\":null},\"Zapotec\":{\"name\":\"Zapotec\",\"names\":[\"Zapotec\"],\"iso639-2\":\"zap\",\"iso639-1\":null},\"Zaza\":{\"name\":\"Zaza\",\"names\":[\"Zaza\",\"Dimili\",\"Dimli\",\"Kirdki\",\"Kirmanjki\",\"Zazaki\"],\"iso639-2\":\"zza\",\"iso639-1\":null},\"Zazaki\":{\"name\":\"Zazaki\",\"names\":[\"Zaza\",\"Dimili\",\"Dimli\",\"Kirdki\",\"Kirmanjki\",\"Zazaki\"],\"iso639-2\":\"zza\",\"iso639-1\":null},\"Zenaga\":{\"name\":\"Zenaga\",\"names\":[\"Zenaga\"],\"iso639-2\":\"zen\",\"iso639-1\":null},\"Zhuang\":{\"name\":\"Zhuang\",\"names\":[\"Zhuang\",\"Chuang\"],\"iso639-2\":\"zha\",\"iso639-1\":\"za\"},\"Zulu\":{\"name\":\"Zulu\",\"names\":[\"Zulu\"],\"iso639-2\":\"zul\",\"iso639-1\":\"zu\"},\"Zuni\":{\"name\":\"Zuni\",\"names\":[\"Zuni\"],\"iso639-2\":\"zun\",\"iso639-1\":null}}");

/***/ }),

/***/ "./node_modules/windows-locale/index.json":
/*!************************************************!*\
  !*** ./node_modules/windows-locale/index.json ***!
  \************************************************/
/*! exports provided: aa, aa-dj, aa-er, aa-et, af, af-na, af-za, agq, agq-cm, ak, ak-gh, sq, sq-al, sq-mk, gsw, gsw-fr, gsw-li, gsw-ch, am, am-et, ar, ar-dz, ar-bh, ar-td, ar-km, ar-dj, ar-eg, ar-er, ar-iq, ar-il, ar-jo, ar-kw, ar-lb, ar-ly, ar-mr, ar-ma, ar-om, ar-ps, ar-qa, ar-sa, ar-so, ar-ss, ar-sd, ar-sy, ar-tn, ar-ae, ar-001, ar-ye, hy, hy-am, as, as-in, ast, ast-es, asa, asa-tz, az-cyrl, az-cyrl-az, az, az-latn, az-latn-az, ksf, ksf-cm, bm, bm-latn-ml, bn, bn-bd, bn-in, bas, bas-cm, ba, ba-ru, eu, eu-es, be, be-by, bem, bem-zm, bez, bez-tz, byn, byn-er, brx, brx-in, bs-cyrl, bs-cyrl-ba, bs-latn, bs, bs-latn-ba, br, br-fr, bg, bg-bg, my, my-mm, ca, ca-ad, ca-fr, ca-it, ca-es, ceb, ceb-latn, ceb-latn-ph, tzm-latn-, ku, ku-arab, ku-arab-iq, ccp, ccp-cakm, ccp-cakm-, cd-ru, chr, chr-cher, chr-cher-us, cgg, cgg-ug, zh-hans, zh, zh-cn, zh-sg, zh-hant, zh-hk, zh-mo, zh-tw, cu-ru, swc, swc-cd, kw, kw-gb, co, co-fr, hr, hr-hr, hr-ba, cs, cs-cz, da, da-dk, da-gl, prs, prs-af, dv, dv-mv, dua, dua-cm, nl, nl-aw, nl-be, nl-bq, nl-cw, nl-nl, nl-sx, nl-sr, dz, dz-bt, ebu, ebu-ke, en, en-as, en-ai, en-ag, en-au, en-at, en-bs, en-bb, en-be, en-bz, en-bm, en-bw, en-io, en-vg, en-bi, en-cm, en-ca, en-029, en-ky, en-cx, en-cc, en-ck, en-cy, en-dk, en-dm, en-er, en-150, en-fk, en-fi, en-fj, en-gm, en-de, en-gh, en-gi, en-gd, en-gu, en-gg, en-gy, en-hk, en-in, en-ie, en-im, en-il, en-jm, en-je, en-ke, en-ki, en-ls, en-lr, en-mo, en-mg, en-mw, en-my, en-mt, en-mh, en-mu, en-fm, en-ms, en-na, en-nr, en-nl, en-nz, en-ng, en-nu, en-nf, en-mp, en-pk, en-pw, en-pg, en-pn, en-pr, en-ph, en-rw, en-kn, en-lc, en-vc, en-ws, en-sc, en-sl, en-sg, en-sx, en-si, en-sb, en-za, en-ss, en-sh, en-sd, en-sz, en-se, en-ch, en-tz, en-tk, en-to, en-tt, en-tc, en-tv, en-ug, en-ae, en-gb, en-us, en-um, en-vi, en-vu, en-001, en-zm, en-zw, eo, eo-001, et, et-ee, ee, ee-gh, ee-tg, ewo, ewo-cm, fo, fo-dk, fo-fo, fil, fil-ph, fi, fi-fi, fr, fr-dz, fr-be, fr-bj, fr-bf, fr-bi, fr-cm, fr-ca, fr-cf, fr-td, fr-km, fr-cg, fr-cd, fr-ci, fr-dj, fr-gq, fr-fr, fr-gf, fr-pf, fr-ga, fr-gp, fr-gn, fr-ht, fr-lu, fr-mg, fr-ml, fr-mq, fr-mr, fr-mu, fr-yt, fr-ma, fr-nc, fr-ne, fr-mc, fr-re, fr-rw, fr-bl, fr-mf, fr-pm, fr-sn, fr-sc, fr-ch, fr-sy, fr-tg, fr-tn, fr-vu, fr-wf, fy, fy-nl, fur, fur-it, ff, ff-latn, ff-latn-bf, ff-cm, ff-latn-cm, ff-latn-gm, ff-latn-gh, ff-gn, ff-latn-gn, ff-latn-gw, ff-latn-lr, ff-mr, ff-latn-mr, ff-latn-ne, ff-ng, ff-latn-ng, ff-latn-sn, ff-latn-sl, gl, gl-es, lg, lg-ug, ka, ka-ge, de, de-at, de-be, de-de, de-it, de-li, de-lu, de-ch, el, el-cy, el-gr, kl, kl-gl, gn, gn-py, gu, gu-in, guz, guz-ke, ha, ha-latn, ha-latn-gh, ha-latn-ne, ha-latn-ng, haw, haw-us, he, he-il, hi, hi-in, hu, hu-hu, is, is-is, ig, ig-ng, id, id-id, ia, ia-fr, ia-001, iu, iu-latn, iu-latn-ca, iu-cans, iu-cans-ca, ga, ga-ie, it, it-it, it-sm, it-ch, it-va, ja, ja-jp, jv, jv-latn, jv-latn-id, dyo, dyo-sn, kea, kea-cv, kab, kab-dz, kkj, kkj-cm, kln, kln-ke, kam, kam-ke, kn, kn-in, ks, ks-arab, ks-arab-in, kk, kk-kz, km, km-kh, quc, quc-latn-gt, ki, ki-ke, rw, rw-rw, sw, sw-ke, sw-tz, sw-ug, kok, kok-in, ko, ko-kr, ko-kp, khq, khq-ml, ses, ses-ml, nmg, nmg-cm, ky, ky-kg, ku-arab-ir, lkt, lkt-us, lag, lag-tz, lo, lo-la, lv, lv-lv, ln, ln-ao, ln-cf, ln-cg, ln-cd, lt, lt-lt, nds, nds-de, nds-nl, dsb, dsb-de, lu, lu-cd, luo, luo-ke, lb, lb-lu, luy, luy-ke, mk, mk-mk, jmc, jmc-tz, mgh, mgh-mz, kde, kde-tz, mg, mg-mg, ms, ms-bn, ms-my, ml, ml-in, mt, mt-mt, gv, gv-im, mi, mi-nz, arn, arn-cl, mr, mr-in, mas, mas-ke, mas-tz, mzn-ir, mer, mer-ke, mgo, mgo-cm, moh, moh-ca, mn, mn-cyrl, mn-mn, mn-mong, mn-mong-cn, mn-mong-mn, mfe, mfe-mu, mua, mua-cm, nqo, nqo-gn, naq, naq-na, ne, ne-in, ne-np, nnh, nnh-cm, jgo, jgo-cm, lrc-iq, lrc-ir, nd, nd-zw, no, nb, nb-no, nn, nn-no, nb-sj, nus, nus-sd, nus-ss, nyn, nyn-ug, oc, oc-fr, or, or-in, om, om-et, om-ke, os, os-ge, os-ru, ps, ps-af, ps-pk, fa, fa-af, fa-ir, pl, pl-pl, pt, pt-ao, pt-br, pt-cv, pt-gq, pt-gw, pt-lu, pt-mo, pt-mz, pt-pt, pt-st, pt-ch, pt-tl, prg-001, qps-ploca, qps-ploc, qps-plocm, pa, pa-arab, pa-in, pa-arab-pk, quz, quz-bo, quz-ec, quz-pe, ksh, ksh-de, ro, ro-md, ro-ro, rm, rm-ch, rof, rof-tz, rn, rn-bi, ru, ru-by, ru-kz, ru-kg, ru-md, ru-ru, ru-ua, rwk, rwk-tz, ssy, ssy-er, sah, sah-ru, saq, saq-ke, smn, smn-fi, smj, smj-no, smj-se, se, se-fi, se-no, se-se, sms, sms-fi, sma, sma-no, sma-se, sg, sg-cf, sbp, sbp-tz, sa, sa-in, gd, gd-gb, seh, seh-mz, sr-cyrl, sr-cyrl-ba, sr-cyrl-me, sr-cyrl-rs, sr-cyrl-cs, sr-latn, sr, sr-latn-ba, sr-latn-me, sr-latn-rs, sr-latn-cs, nso, nso-za, tn, tn-bw, tn-za, ksb, ksb-tz, sn, sn-latn, sn-latn-zw, sd, sd-arab, sd-arab-pk, si, si-lk, sk, sk-sk, sl, sl-si, xog, xog-ug, so, so-dj, so-et, so-ke, so-so, st, st-za, nr, nr-za, st-ls, es, es-ar, es-bz, es-ve, es-bo, es-br, es-cl, es-co, es-cr, es-cu, es-do, es-ec, es-sv, es-gq, es-gt, es-hn, es-419, es-mx, es-ni, es-pa, es-py, es-pe, es-ph, es-pr, es-es_tradnl, es-es, es-us, es-uy, zgh, zgh-tfng-ma, zgh-tfng, ss, ss-za, ss-sz, sv, sv-ax, sv-fi, sv-se, syr, syr-sy, shi, shi-tfng, shi-tfng-ma, shi-latn, shi-latn-ma, dav, dav-ke, tg, tg-cyrl, tg-cyrl-tj, tzm, tzm-latn, tzm-latn-dz, ta, ta-in, ta-my, ta-sg, ta-lk, twq, twq-ne, tt, tt-ru, te, te-in, teo, teo-ke, teo-ug, th, th-th, bo, bo-in, bo-cn, tig, tig-er, ti, ti-er, ti-et, to, to-to, ts, ts-za, tr, tr-cy, tr-tr, tk, tk-tm, uk, uk-ua, hsb, hsb-de, ur, ur-in, ur-pk, ug, ug-cn, uz-arab, uz-arab-af, uz-cyrl, uz-cyrl-uz, uz, uz-latn, uz-latn-uz, vai, vai-vaii, vai-vaii-lr, vai-latn-lr, vai-latn, ca-es-, ve, ve-za, vi, vi-vn, vo, vo-001, vun, vun-tz, wae, wae-ch, cy, cy-gb, wal, wal-et, wo, wo-sn, xh, xh-za, yav, yav-cm, ii, ii-cn, yo, yo-bj, yo-ng, dje, dje-ne, zu, zu-za, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"aa\":{\"language\":\"Afar\",\"location\":null,\"id\":4096,\"tag\":\"aa\",\"version\":\"Release 10\"},\"aa-dj\":{\"language\":\"Afar\",\"location\":\"Djibouti\",\"id\":4096,\"tag\":\"aa-DJ\",\"version\":\"Release 10\"},\"aa-er\":{\"language\":\"Afar\",\"location\":\"Eritrea\",\"id\":4096,\"tag\":\"aa-ER\",\"version\":\"Release 10\"},\"aa-et\":{\"language\":\"Afar\",\"location\":\"Ethiopia\",\"id\":4096,\"tag\":\"aa-ET\",\"version\":\"Release 10\"},\"af\":{\"language\":\"Afrikaans\",\"location\":null,\"id\":54,\"tag\":\"af\",\"version\":\"Release 7\"},\"af-na\":{\"language\":\"Afrikaans\",\"location\":\"Namibia\",\"id\":4096,\"tag\":\"af-NA\",\"version\":\"Release 10\"},\"af-za\":{\"language\":\"Afrikaans\",\"location\":\"South Africa\",\"id\":1078,\"tag\":\"af-ZA\",\"version\":\"Release B\"},\"agq\":{\"language\":\"Aghem\",\"location\":null,\"id\":4096,\"tag\":\"agq\",\"version\":\"Release 10\"},\"agq-cm\":{\"language\":\"Aghem\",\"location\":\"Cameroon\",\"id\":4096,\"tag\":\"agq-CM\",\"version\":\"Release 10\"},\"ak\":{\"language\":\"Akan\",\"location\":null,\"id\":4096,\"tag\":\"ak\",\"version\":\"Release 10\"},\"ak-gh\":{\"language\":\"Akan\",\"location\":\"Ghana\",\"id\":4096,\"tag\":\"ak-GH\",\"version\":\"Release 10\"},\"sq\":{\"language\":\"Albanian\",\"location\":null,\"id\":28,\"tag\":\"sq\",\"version\":\"Release 7\"},\"sq-al\":{\"language\":\"Albanian\",\"location\":\"Albania\",\"id\":1052,\"tag\":\"sq-AL\",\"version\":\"Release B\"},\"sq-mk\":{\"language\":\"Albanian\",\"location\":\"North Macedonia\",\"id\":4096,\"tag\":\"sq-MK\",\"version\":\"Release 10\"},\"gsw\":{\"language\":\"Alsatian\",\"location\":null,\"id\":132,\"tag\":\"gsw\",\"version\":\"Release 7\"},\"gsw-fr\":{\"language\":\"Alsatian\",\"location\":\"France\",\"id\":1156,\"tag\":\"gsw-FR\",\"version\":\"Release V\"},\"gsw-li\":{\"language\":\"Alsatian\",\"location\":\"Liechtenstein\",\"id\":4096,\"tag\":\"gsw-LI\",\"version\":\"Release 10\"},\"gsw-ch\":{\"language\":\"Alsatian\",\"location\":\"Switzerland\",\"id\":4096,\"tag\":\"gsw-CH\",\"version\":\"Release 10\"},\"am\":{\"language\":\"Amharic\",\"location\":null,\"id\":94,\"tag\":\"am\",\"version\":\"Release 7\"},\"am-et\":{\"language\":\"Amharic\",\"location\":\"Ethiopia\",\"id\":1118,\"tag\":\"am-ET\",\"version\":\"Release V\"},\"ar\":{\"language\":\"Arabic\",\"location\":null,\"id\":1,\"tag\":\"ar\",\"version\":\"Release 7\"},\"ar-dz\":{\"language\":\"Arabic\",\"location\":\"Algeria\",\"id\":5121,\"tag\":\"ar-DZ\",\"version\":\"Release B\"},\"ar-bh\":{\"language\":\"Arabic\",\"location\":\"Bahrain\",\"id\":15361,\"tag\":\"ar-BH\",\"version\":\"Release B\"},\"ar-td\":{\"language\":\"Arabic\",\"location\":\"Chad\",\"id\":4096,\"tag\":\"ar-TD\",\"version\":\"Release 10\"},\"ar-km\":{\"language\":\"Arabic\",\"location\":\"Comoros\",\"id\":4096,\"tag\":\"ar-KM\",\"version\":\"Release 10\"},\"ar-dj\":{\"language\":\"Arabic\",\"location\":\"Djibouti\",\"id\":4096,\"tag\":\"ar-DJ\",\"version\":\"Release 10\"},\"ar-eg\":{\"language\":\"Arabic\",\"location\":\"Egypt\",\"id\":3073,\"tag\":\"ar-EG\",\"version\":\"Release B\"},\"ar-er\":{\"language\":\"Arabic\",\"location\":\"Eritrea\",\"id\":4096,\"tag\":\"ar-ER\",\"version\":\"Release 10\"},\"ar-iq\":{\"language\":\"Arabic\",\"location\":\"Iraq\",\"id\":2049,\"tag\":\"ar-IQ\",\"version\":\"Release B\"},\"ar-il\":{\"language\":\"Arabic\",\"location\":\"Israel\",\"id\":4096,\"tag\":\"ar-IL\",\"version\":\"Release 10\"},\"ar-jo\":{\"language\":\"Arabic\",\"location\":\"Jordan\",\"id\":11265,\"tag\":\"ar-JO\",\"version\":\"Release B\"},\"ar-kw\":{\"language\":\"Arabic\",\"location\":\"Kuwait\",\"id\":13313,\"tag\":\"ar-KW\",\"version\":\"Release B\"},\"ar-lb\":{\"language\":\"Arabic\",\"location\":\"Lebanon\",\"id\":12289,\"tag\":\"ar-LB\",\"version\":\"Release B\"},\"ar-ly\":{\"language\":\"Arabic\",\"location\":\"Libya\",\"id\":4097,\"tag\":\"ar-LY\",\"version\":\"Release B\"},\"ar-mr\":{\"language\":\"Arabic\",\"location\":\"Mauritania\",\"id\":4096,\"tag\":\"ar-MR\",\"version\":\"Release 10\"},\"ar-ma\":{\"language\":\"Arabic\",\"location\":\"Morocco\",\"id\":6145,\"tag\":\"ar-MA\",\"version\":\"Release B\"},\"ar-om\":{\"language\":\"Arabic\",\"location\":\"Oman\",\"id\":8193,\"tag\":\"ar-OM\",\"version\":\"Release B\"},\"ar-ps\":{\"language\":\"Arabic\",\"location\":\"Palestinian Authority\",\"id\":4096,\"tag\":\"ar-PS\",\"version\":\"Release 10\"},\"ar-qa\":{\"language\":\"Arabic\",\"location\":\"Qatar\",\"id\":16385,\"tag\":\"ar-QA\",\"version\":\"Release B\"},\"ar-sa\":{\"language\":\"Arabic\",\"location\":\"Saudi Arabia\",\"id\":1025,\"tag\":\"ar-SA\",\"version\":\"Release B\"},\"ar-so\":{\"language\":\"Arabic\",\"location\":\"Somalia\",\"id\":4096,\"tag\":\"ar-SO\",\"version\":\"Release 10\"},\"ar-ss\":{\"language\":\"Arabic\",\"location\":\"South Sudan\",\"id\":4096,\"tag\":\"ar-SS\",\"version\":\"Release 10\"},\"ar-sd\":{\"language\":\"Arabic\",\"location\":\"Sudan\",\"id\":4096,\"tag\":\"ar-SD\",\"version\":\"Release 10\"},\"ar-sy\":{\"language\":\"Arabic\",\"location\":\"Syria\",\"id\":10241,\"tag\":\"ar-SY\",\"version\":\"Release B\"},\"ar-tn\":{\"language\":\"Arabic\",\"location\":\"Tunisia\",\"id\":7169,\"tag\":\"ar-TN\",\"version\":\"Release B\"},\"ar-ae\":{\"language\":\"Arabic\",\"location\":\"U.A.E.\",\"id\":14337,\"tag\":\"ar-AE\",\"version\":\"Release B\"},\"ar-001\":{\"language\":\"Arabic\",\"location\":\"World\",\"id\":4096,\"tag\":\"ar-001\",\"version\":\"Release 10\"},\"ar-ye\":{\"language\":\"Arabic\",\"location\":\"Yemen\",\"id\":9217,\"tag\":\"ar-YE\",\"version\":\"Release B\"},\"hy\":{\"language\":\"Armenian\",\"location\":null,\"id\":43,\"tag\":\"hy\",\"version\":\"Release 7\"},\"hy-am\":{\"language\":\"Armenian\",\"location\":\"Armenia\",\"id\":1067,\"tag\":\"hy-AM\",\"version\":\"Release C\"},\"as\":{\"language\":\"Assamese\",\"location\":null,\"id\":77,\"tag\":\"as\",\"version\":\"Release 7\"},\"as-in\":{\"language\":\"Assamese\",\"location\":\"India\",\"id\":1101,\"tag\":\"as-IN\",\"version\":\"Release V\"},\"ast\":{\"language\":\"Asturian\",\"location\":null,\"id\":4096,\"tag\":\"ast\",\"version\":\"Release 10\"},\"ast-es\":{\"language\":\"Asturian\",\"location\":\"Spain\",\"id\":4096,\"tag\":\"ast-ES\",\"version\":\"Release 10\"},\"asa\":{\"language\":\"Asu\",\"location\":null,\"id\":4096,\"tag\":\"asa\",\"version\":\"Release 10\"},\"asa-tz\":{\"language\":\"Asu\",\"location\":\"Tanzania\",\"id\":4096,\"tag\":\"asa-TZ\",\"version\":\"Release 10\"},\"az-cyrl\":{\"language\":\"Azerbaijani (Cyrillic)\",\"location\":null,\"id\":29740,\"tag\":\"az-Cyrl\",\"version\":\"Windows 7\"},\"az-cyrl-az\":{\"language\":\"Azerbaijani (Cyrillic)\",\"location\":\"Azerbaijan\",\"id\":2092,\"tag\":\"az-Cyrl-AZ\",\"version\":\"Release C\"},\"az\":{\"language\":\"Azerbaijani (Latin)\",\"location\":null,\"id\":44,\"tag\":\"az\",\"version\":\"Release 7\"},\"az-latn\":{\"language\":\"Azerbaijani (Latin)\",\"location\":null,\"id\":30764,\"tag\":\"az-Latn\",\"version\":\"Windows 7\"},\"az-latn-az\":{\"language\":\"Azerbaijani (Latin)\",\"location\":\"Azerbaijan\",\"id\":1068,\"tag\":\"az-Latn-AZ\",\"version\":\"Release C\"},\"ksf\":{\"language\":\"Bafia\",\"location\":null,\"id\":4096,\"tag\":\"ksf\",\"version\":\"Release 10\"},\"ksf-cm\":{\"language\":\"Bafia\",\"location\":\"Cameroon\",\"id\":4096,\"tag\":\"ksf-CM\",\"version\":\"Release 10\"},\"bm\":{\"language\":\"Bamanankan\",\"location\":null,\"id\":4096,\"tag\":\"bm\",\"version\":\"Release 10\"},\"bm-latn-ml\":{\"language\":\"Bamanankan (Latin)\",\"location\":\"Mali\",\"id\":4096,\"tag\":\"bm-Latn-ML\",\"version\":\"Release 10\"},\"bn\":{\"language\":\"Bangla\",\"location\":null,\"id\":69,\"tag\":\"bn\",\"version\":\"Release 7\"},\"bn-bd\":{\"language\":\"Bangla\",\"location\":\"Bangladesh\",\"id\":2117,\"tag\":\"bn-BD\",\"version\":\"Release V\"},\"bn-in\":{\"language\":\"Bangla\",\"location\":\"India\",\"id\":1093,\"tag\":\"bn-IN\",\"version\":\"Release E1\"},\"bas\":{\"language\":\"Basaa\",\"location\":null,\"id\":4096,\"tag\":\"bas\",\"version\":\"Release 10\"},\"bas-cm\":{\"language\":\"Basaa\",\"location\":\"Cameroon\",\"id\":4096,\"tag\":\"bas-CM\",\"version\":\"Release 10\"},\"ba\":{\"language\":\"Bashkir\",\"location\":null,\"id\":109,\"tag\":\"ba\",\"version\":\"Release 7\"},\"ba-ru\":{\"language\":\"Bashkir\",\"location\":\"Russia\",\"id\":1133,\"tag\":\"ba-RU\",\"version\":\"Release V\"},\"eu\":{\"language\":\"Basque\",\"location\":null,\"id\":45,\"tag\":\"eu\",\"version\":\"Release 7\"},\"eu-es\":{\"language\":\"Basque\",\"location\":\"Spain\",\"id\":1069,\"tag\":\"eu-ES\",\"version\":\"Release B\"},\"be\":{\"language\":\"Belarusian\",\"location\":null,\"id\":35,\"tag\":\"be\",\"version\":\"Release 7\"},\"be-by\":{\"language\":\"Belarusian\",\"location\":\"Belarus\",\"id\":1059,\"tag\":\"be-BY\",\"version\":\"Release B\"},\"bem\":{\"language\":\"Bemba\",\"location\":null,\"id\":4096,\"tag\":\"bem\",\"version\":\"Release 10\"},\"bem-zm\":{\"language\":\"Bemba\",\"location\":\"Zambia\",\"id\":4096,\"tag\":\"bem-ZM\",\"version\":\"Release 10\"},\"bez\":{\"language\":\"Bena\",\"location\":null,\"id\":4096,\"tag\":\"bez\",\"version\":\"Release 10\"},\"bez-tz\":{\"language\":\"Bena\",\"location\":\"Tanzania\",\"id\":4096,\"tag\":\"bez-TZ\",\"version\":\"Release 10\"},\"byn\":{\"language\":\"Blin\",\"location\":null,\"id\":4096,\"tag\":\"byn\",\"version\":\"Release 10\"},\"byn-er\":{\"language\":\"Blin\",\"location\":\"Eritrea\",\"id\":4096,\"tag\":\"byn-ER\",\"version\":\"Release 10\"},\"brx\":{\"language\":\"Bodo\",\"location\":null,\"id\":4096,\"tag\":\"brx\",\"version\":\"Release 10\"},\"brx-in\":{\"language\":\"Bodo\",\"location\":\"India\",\"id\":4096,\"tag\":\"brx-IN\",\"version\":\"Release 10\"},\"bs-cyrl\":{\"language\":\"Bosnian (Cyrillic)\",\"location\":null,\"id\":25626,\"tag\":\"bs-Cyrl\",\"version\":\"Windows 7\"},\"bs-cyrl-ba\":{\"language\":\"Bosnian (Cyrillic)\",\"location\":\"Bosnia and Herzegovina\",\"id\":8218,\"tag\":\"bs-Cyrl-BA\",\"version\":\"Release E1\"},\"bs-latn\":{\"language\":\"Bosnian (Latin)\",\"location\":null,\"id\":26650,\"tag\":\"bs-Latn\",\"version\":\"Windows 7\"},\"bs\":{\"language\":\"Bosnian (Latin)\",\"location\":null,\"id\":30746,\"tag\":\"bs\",\"version\":\"Release 7\"},\"bs-latn-ba\":{\"language\":\"Bosnian (Latin)\",\"location\":\"Bosnia and Herzegovina\",\"id\":5146,\"tag\":\"bs-Latn-BA\",\"version\":\"Release E1\"},\"br\":{\"language\":\"Breton\",\"location\":null,\"id\":126,\"tag\":\"br\",\"version\":\"Release 7\"},\"br-fr\":{\"language\":\"Breton\",\"location\":\"France\",\"id\":1150,\"tag\":\"br-FR\",\"version\":\"Release V\"},\"bg\":{\"language\":\"Bulgarian\",\"location\":null,\"id\":2,\"tag\":\"bg\",\"version\":\"Release 7\"},\"bg-bg\":{\"language\":\"Bulgarian\",\"location\":\"Bulgaria\",\"id\":1026,\"tag\":\"bg-BG\",\"version\":\"Release B\"},\"my\":{\"language\":\"Burmese\",\"location\":null,\"id\":85,\"tag\":\"my\",\"version\":\"Release 8.1\"},\"my-mm\":{\"language\":\"Burmese\",\"location\":\"Myanmar\",\"id\":1109,\"tag\":\"my-MM\",\"version\":\"Release 8.1\"},\"ca\":{\"language\":\"Catalan\",\"location\":null,\"id\":3,\"tag\":\"ca\",\"version\":\"Release 7\"},\"ca-ad\":{\"language\":\"Catalan\",\"location\":\"Andorra\",\"id\":4096,\"tag\":\"ca-AD\",\"version\":\"Release 10\"},\"ca-fr\":{\"language\":\"Catalan\",\"location\":\"France\",\"id\":4096,\"tag\":\"ca-FR\",\"version\":\"Release 10\"},\"ca-it\":{\"language\":\"Catalan\",\"location\":\"Italy\",\"id\":4096,\"tag\":\"ca-IT\",\"version\":\"Release 10\"},\"ca-es\":{\"language\":\"Catalan\",\"location\":\"Spain\",\"id\":1027,\"tag\":\"ca-ES\",\"version\":\"Release B\"},\"ceb\":{\"language\":\"Cebuano\",\"location\":null,\"id\":4096,\"tag\":\"ceb\",\"version\":\"Release 10.5\"},\"ceb-latn\":{\"language\":\"Cebuan (Latin)\",\"location\":null,\"id\":4096,\"tag\":\"ceb-Latn\",\"version\":\"Release 10.5\"},\"ceb-latn-ph\":{\"language\":\"Cebuan (Latin)\",\"location\":\"Philippines\",\"id\":4096,\"tag\":\"ceb-Latn-PH\",\"version\":\"Release 10.5\"},\"tzm-latn-\":{\"language\":\"Central Atlas Tamazight (Latin)\",\"location\":\"Morocco\",\"id\":4096,\"tag\":\"tzm-Latn-\",\"version\":\"Release 10\"},\"ku\":{\"language\":\"Central Kurdish\",\"location\":null,\"id\":146,\"tag\":\"ku\",\"version\":\"Release 8\"},\"ku-arab\":{\"language\":\"Central Kurdish\",\"location\":null,\"id\":31890,\"tag\":\"ku-Arab\",\"version\":\"Release 8\"},\"ku-arab-iq\":{\"language\":\"Central Kurdish\",\"location\":\"Iraq\",\"id\":1170,\"tag\":\"ku-Arab-IQ\",\"version\":\"Release 8\"},\"ccp\":{\"language\":\"Chakma\",\"location\":null,\"id\":4096,\"tag\":\"ccp\",\"version\":\"Release 10.5\"},\"ccp-cakm\":{\"language\":\"Chakma\",\"location\":\"Chakma\",\"id\":4096,\"tag\":\"ccp-Cakm\",\"version\":\"Release 10.5\"},\"ccp-cakm-\":{\"language\":\"Chakma\",\"location\":\"India\",\"id\":4096,\"tag\":\"ccp-Cakm-\",\"version\":\"Release 10.5\"},\"cd-ru\":{\"language\":\"Chechen\",\"location\":\"Russia\",\"id\":4096,\"tag\":\"cd-RU\",\"version\":\"Release 10.1\"},\"chr\":{\"language\":\"Cherokee\",\"location\":null,\"id\":92,\"tag\":\"chr\",\"version\":\"Release 8\"},\"chr-cher\":{\"language\":\"Cherokee\",\"location\":null,\"id\":31836,\"tag\":\"chr-Cher\",\"version\":\"Release 8\"},\"chr-cher-us\":{\"language\":\"Cherokee\",\"location\":\"United States\",\"id\":1116,\"tag\":\"chr-Cher-US\",\"version\":\"Release 8\"},\"cgg\":{\"language\":\"Chiga\",\"location\":null,\"id\":4096,\"tag\":\"cgg\",\"version\":\"Release 10\"},\"cgg-ug\":{\"language\":\"Chiga\",\"location\":\"Uganda\",\"id\":4096,\"tag\":\"cgg-UG\",\"version\":\"Release 10\"},\"zh-hans\":{\"language\":\"Chinese (Simplified)\",\"location\":null,\"id\":4,\"tag\":\"zh-Hans\",\"version\":\"Release A\"},\"zh\":{\"language\":\"Chinese (Simplified)\",\"location\":null,\"id\":30724,\"tag\":\"zh\",\"version\":\"Windows 7\"},\"zh-cn\":{\"language\":\"Chinese (Simplified)\",\"location\":\"People's Republic of China\",\"id\":2052,\"tag\":\"zh-CN\",\"version\":\"Release A\"},\"zh-sg\":{\"language\":\"Chinese (Simplified)\",\"location\":\"Singapore\",\"id\":4100,\"tag\":\"zh-SG\",\"version\":\"Release A\"},\"zh-hant\":{\"language\":\"Chinese (Traditional)\",\"location\":null,\"id\":31748,\"tag\":\"zh-Hant\",\"version\":\"Release A\"},\"zh-hk\":{\"language\":\"Chinese (Traditional)\",\"location\":\"Hong Kong S.A.R.\",\"id\":3076,\"tag\":\"zh-HK\",\"version\":\"Release A\"},\"zh-mo\":{\"language\":\"Chinese (Traditional)\",\"location\":\"Macao S.A.R.\",\"id\":5124,\"tag\":\"zh-MO\",\"version\":\"Release D\"},\"zh-tw\":{\"language\":\"Chinese (Traditional)\",\"location\":\"Taiwan\",\"id\":1028,\"tag\":\"zh-TW\",\"version\":\"Release A\"},\"cu-ru\":{\"language\":\"Church Slavic\",\"location\":\"Russia\",\"id\":4096,\"tag\":\"cu-RU\",\"version\":\"Release 10.1\"},\"swc\":{\"language\":\"Congo Swahili\",\"location\":null,\"id\":4096,\"tag\":\"swc\",\"version\":\"Release 10\"},\"swc-cd\":{\"language\":\"Congo Swahili\",\"location\":\"Congo DRC\",\"id\":4096,\"tag\":\"swc-CD\",\"version\":\"Release 10\"},\"kw\":{\"language\":\"Cornish\",\"location\":null,\"id\":4096,\"tag\":\"kw\",\"version\":\"Release 10\"},\"kw-gb\":{\"language\":\"Cornish\",\"location\":\"United Kingdom\",\"id\":4096,\"tag\":\"kw-GB\",\"version\":\"Release 10\"},\"co\":{\"language\":\"Corsican\",\"location\":null,\"id\":131,\"tag\":\"co\",\"version\":\"Release 7\"},\"co-fr\":{\"language\":\"Corsican\",\"location\":\"France\",\"id\":1155,\"tag\":\"co-FR\",\"version\":\"Release V\"},\"hr\":{\"language\":\"Croatian\",\"location\":null,\"id\":26,\"tag\":\"hr\",\"version\":\"Release 7\"},\"hr-hr\":{\"language\":\"Croatian\",\"location\":\"Croatia\",\"id\":1050,\"tag\":\"hr-HR\",\"version\":\"Release A\"},\"hr-ba\":{\"language\":\"Croatian (Latin)\",\"location\":\"Bosnia and Herzegovina\",\"id\":4122,\"tag\":\"hr-BA\",\"version\":\"Release E1\"},\"cs\":{\"language\":\"Czech\",\"location\":null,\"id\":5,\"tag\":\"cs\",\"version\":\"Release 7\"},\"cs-cz\":{\"language\":\"Czech\",\"location\":\"Czech Republic\",\"id\":1029,\"tag\":\"cs-CZ\",\"version\":\"Release A\"},\"da\":{\"language\":\"Danish\",\"location\":null,\"id\":6,\"tag\":\"da\",\"version\":\"Release 7\"},\"da-dk\":{\"language\":\"Danish\",\"location\":\"Denmark\",\"id\":1030,\"tag\":\"da-DK\",\"version\":\"Release A\"},\"da-gl\":{\"language\":\"Danish\",\"location\":\"Greenland\",\"id\":4096,\"tag\":\"da-GL\",\"version\":\"Release 10\"},\"prs\":{\"language\":\"Dari\",\"location\":null,\"id\":140,\"tag\":\"prs\",\"version\":\"Release 7\"},\"prs-af\":{\"language\":\"Dari\",\"location\":\"Afghanistan\",\"id\":1164,\"tag\":\"prs-AF\",\"version\":\"Release V\"},\"dv\":{\"language\":\"Divehi\",\"location\":null,\"id\":101,\"tag\":\"dv\",\"version\":\"Release 7\"},\"dv-mv\":{\"language\":\"Divehi\",\"location\":\"Maldives\",\"id\":1125,\"tag\":\"dv-MV\",\"version\":\"Release D\"},\"dua\":{\"language\":\"Duala\",\"location\":null,\"id\":4096,\"tag\":\"dua\",\"version\":\"Release 10\"},\"dua-cm\":{\"language\":\"Duala\",\"location\":\"Cameroon\",\"id\":4096,\"tag\":\"dua-CM\",\"version\":\"Release 10\"},\"nl\":{\"language\":\"Dutch\",\"location\":null,\"id\":19,\"tag\":\"nl\",\"version\":\"Release 7\"},\"nl-aw\":{\"language\":\"Dutch\",\"location\":\"Aruba\",\"id\":4096,\"tag\":\"nl-AW\",\"version\":\"Release 10\"},\"nl-be\":{\"language\":\"Dutch\",\"location\":\"Belgium\",\"id\":2067,\"tag\":\"nl-BE\",\"version\":\"Release A\"},\"nl-bq\":{\"language\":\"Dutch\",\"location\":\"Bonaire, Sint Eustatius and Saba\",\"id\":4096,\"tag\":\"nl-BQ\",\"version\":\"Release 10\"},\"nl-cw\":{\"language\":\"Dutch\",\"location\":\"Curaçao\",\"id\":4096,\"tag\":\"nl-CW\",\"version\":\"Release 10\"},\"nl-nl\":{\"language\":\"Dutch\",\"location\":\"Netherlands\",\"id\":1043,\"tag\":\"nl-NL\",\"version\":\"Release A\"},\"nl-sx\":{\"language\":\"Dutch\",\"location\":\"Sint Maarten\",\"id\":4096,\"tag\":\"nl-SX\",\"version\":\"Release 10\"},\"nl-sr\":{\"language\":\"Dutch\",\"location\":\"Suriname\",\"id\":4096,\"tag\":\"nl-SR\",\"version\":\"Release 10\"},\"dz\":{\"language\":\"Dzongkha\",\"location\":null,\"id\":4096,\"tag\":\"dz\",\"version\":\"Release 10\"},\"dz-bt\":{\"language\":\"Dzongkha\",\"location\":\"Bhutan\",\"id\":3153,\"tag\":\"dz-BT\",\"version\":\"Release 10\"},\"ebu\":{\"language\":\"Embu\",\"location\":null,\"id\":4096,\"tag\":\"ebu\",\"version\":\"Release 10\"},\"ebu-ke\":{\"language\":\"Embu\",\"location\":\"Kenya\",\"id\":4096,\"tag\":\"ebu-KE\",\"version\":\"Release 10\"},\"en\":{\"language\":\"English\",\"location\":null,\"id\":9,\"tag\":\"en\",\"version\":\"Release 7\"},\"en-as\":{\"language\":\"English\",\"location\":\"American Samoa\",\"id\":4096,\"tag\":\"en-AS\",\"version\":\"Release 10\"},\"en-ai\":{\"language\":\"English\",\"location\":\"Anguilla\",\"id\":4096,\"tag\":\"en-AI\",\"version\":\"Release 10\"},\"en-ag\":{\"language\":\"English\",\"location\":\"Antigua and Barbuda\",\"id\":4096,\"tag\":\"en-AG\",\"version\":\"Release 10\"},\"en-au\":{\"language\":\"English\",\"location\":\"Australia\",\"id\":3081,\"tag\":\"en-AU\",\"version\":\"Release A\"},\"en-at\":{\"language\":\"English\",\"location\":\"Austria\",\"id\":4096,\"tag\":\"en-AT\",\"version\":\"Release 10.1\"},\"en-bs\":{\"language\":\"English\",\"location\":\"Bahamas\",\"id\":4096,\"tag\":\"en-BS\",\"version\":\"Release 10\"},\"en-bb\":{\"language\":\"English\",\"location\":\"Barbados\",\"id\":4096,\"tag\":\"en-BB\",\"version\":\"Release 10\"},\"en-be\":{\"language\":\"English\",\"location\":\"Belgium\",\"id\":4096,\"tag\":\"en-BE\",\"version\":\"Release 10\"},\"en-bz\":{\"language\":\"English\",\"location\":\"Belize\",\"id\":10249,\"tag\":\"en-BZ\",\"version\":\"Release B\"},\"en-bm\":{\"language\":\"English\",\"location\":\"Bermuda\",\"id\":4096,\"tag\":\"en-BM\",\"version\":\"Release 10\"},\"en-bw\":{\"language\":\"English\",\"location\":\"Botswana\",\"id\":4096,\"tag\":\"en-BW\",\"version\":\"Release 10\"},\"en-io\":{\"language\":\"English\",\"location\":\"British Indian Ocean Territory\",\"id\":4096,\"tag\":\"en-IO\",\"version\":\"Release 10\"},\"en-vg\":{\"language\":\"English\",\"location\":\"British Virgin Islands\",\"id\":4096,\"tag\":\"en-VG\",\"version\":\"Release 10\"},\"en-bi\":{\"language\":\"English\",\"location\":\"Burundi\",\"id\":4096,\"tag\":\"en-BI\",\"version\":\"Release 10.1\"},\"en-cm\":{\"language\":\"English\",\"location\":\"Cameroon\",\"id\":4096,\"tag\":\"en-CM\",\"version\":\"Release 10\"},\"en-ca\":{\"language\":\"English\",\"location\":\"Canada\",\"id\":4105,\"tag\":\"en-CA\",\"version\":\"Release A\"},\"en-029\":{\"language\":\"English\",\"location\":\"Caribbean\",\"id\":9225,\"tag\":\"en-029\",\"version\":\"Release B\"},\"en-ky\":{\"language\":\"English\",\"location\":\"Cayman Islands\",\"id\":4096,\"tag\":\"en-KY\",\"version\":\"Release 10\"},\"en-cx\":{\"language\":\"English\",\"location\":\"Christmas Island\",\"id\":4096,\"tag\":\"en-CX\",\"version\":\"Release 10\"},\"en-cc\":{\"language\":\"English\",\"location\":\"Cocos [Keeling] Islands\",\"id\":4096,\"tag\":\"en-CC\",\"version\":\"Release 10\"},\"en-ck\":{\"language\":\"English\",\"location\":\"Cook Islands\",\"id\":4096,\"tag\":\"en-CK\",\"version\":\"Release 10\"},\"en-cy\":{\"language\":\"English\",\"location\":\"Cyprus\",\"id\":4096,\"tag\":\"en-CY\",\"version\":\"Release 10.1\"},\"en-dk\":{\"language\":\"English\",\"location\":\"Denmark\",\"id\":4096,\"tag\":\"en-DK\",\"version\":\"Release 10.1\"},\"en-dm\":{\"language\":\"English\",\"location\":\"Dominica\",\"id\":4096,\"tag\":\"en-DM\",\"version\":\"Release 10\"},\"en-er\":{\"language\":\"English\",\"location\":\"Eritrea\",\"id\":4096,\"tag\":\"en-ER\",\"version\":\"Release 10\"},\"en-150\":{\"language\":\"English\",\"location\":\"Europe\",\"id\":4096,\"tag\":\"en-150\",\"version\":\"Release 10\"},\"en-fk\":{\"language\":\"English\",\"location\":\"Falkland Islands\",\"id\":4096,\"tag\":\"en-FK\",\"version\":\"Release 10\"},\"en-fi\":{\"language\":\"English\",\"location\":\"Finland\",\"id\":4096,\"tag\":\"en-FI\",\"version\":\"Release 10.1\"},\"en-fj\":{\"language\":\"English\",\"location\":\"Fiji\",\"id\":4096,\"tag\":\"en-FJ\",\"version\":\"Release 10\"},\"en-gm\":{\"language\":\"English\",\"location\":\"Gambia\",\"id\":4096,\"tag\":\"en-GM\",\"version\":\"Release 10\"},\"en-de\":{\"language\":\"English\",\"location\":\"Germany\",\"id\":4096,\"tag\":\"en-DE\",\"version\":\"Release 10.1\"},\"en-gh\":{\"language\":\"English\",\"location\":\"Ghana\",\"id\":4096,\"tag\":\"en-GH\",\"version\":\"Release 10\"},\"en-gi\":{\"language\":\"English\",\"location\":\"Gibraltar\",\"id\":4096,\"tag\":\"en-GI\",\"version\":\"Release 10\"},\"en-gd\":{\"language\":\"English\",\"location\":\"Grenada\",\"id\":4096,\"tag\":\"en-GD\",\"version\":\"Release 10\"},\"en-gu\":{\"language\":\"English\",\"location\":\"Guam\",\"id\":4096,\"tag\":\"en-GU\",\"version\":\"Release 10\"},\"en-gg\":{\"language\":\"English\",\"location\":\"Guernsey\",\"id\":4096,\"tag\":\"en-GG\",\"version\":\"Release 10\"},\"en-gy\":{\"language\":\"English\",\"location\":\"Guyana\",\"id\":4096,\"tag\":\"en-GY\",\"version\":\"Release 10\"},\"en-hk\":{\"language\":\"English\",\"location\":\"Hong Kong\",\"id\":15369,\"tag\":\"en-HK\",\"version\":\"Release 8.1\"},\"en-in\":{\"language\":\"English\",\"location\":\"India\",\"id\":16393,\"tag\":\"en-IN\",\"version\":\"Release V\"},\"en-ie\":{\"language\":\"English\",\"location\":\"Ireland\",\"id\":6153,\"tag\":\"en-IE\",\"version\":\"Release A\"},\"en-im\":{\"language\":\"English\",\"location\":\"Isle of Man\",\"id\":4096,\"tag\":\"en-IM\",\"version\":\"Release 10\"},\"en-il\":{\"language\":\"English\",\"location\":\"Israel\",\"id\":4096,\"tag\":\"en-IL\",\"version\":\"Release 10.1\"},\"en-jm\":{\"language\":\"English\",\"location\":\"Jamaica\",\"id\":8201,\"tag\":\"en-JM\",\"version\":\"Release B\"},\"en-je\":{\"language\":\"English\",\"location\":\"Jersey\",\"id\":4096,\"tag\":\"en-JE\",\"version\":\"Release 10\"},\"en-ke\":{\"language\":\"English\",\"location\":\"Kenya\",\"id\":4096,\"tag\":\"en-KE\",\"version\":\"Release 10\"},\"en-ki\":{\"language\":\"English\",\"location\":\"Kiribati\",\"id\":4096,\"tag\":\"en-KI\",\"version\":\"Release 10\"},\"en-ls\":{\"language\":\"English\",\"location\":\"Lesotho\",\"id\":4096,\"tag\":\"en-LS\",\"version\":\"Release 10\"},\"en-lr\":{\"language\":\"English\",\"location\":\"Liberia\",\"id\":4096,\"tag\":\"en-LR\",\"version\":\"Release 10\"},\"en-mo\":{\"language\":\"English\",\"location\":\"Macao SAR\",\"id\":4096,\"tag\":\"en-MO\",\"version\":\"Release 10\"},\"en-mg\":{\"language\":\"English\",\"location\":\"Madagascar\",\"id\":4096,\"tag\":\"en-MG\",\"version\":\"Release 10\"},\"en-mw\":{\"language\":\"English\",\"location\":\"Malawi\",\"id\":4096,\"tag\":\"en-MW\",\"version\":\"Release 10\"},\"en-my\":{\"language\":\"English\",\"location\":\"Malaysia\",\"id\":17417,\"tag\":\"en-MY\",\"version\":\"Release V\"},\"en-mt\":{\"language\":\"English\",\"location\":\"Malta\",\"id\":4096,\"tag\":\"en-MT\",\"version\":\"Release 10\"},\"en-mh\":{\"language\":\"English\",\"location\":\"Marshall Islands\",\"id\":4096,\"tag\":\"en-MH\",\"version\":\"Release 10\"},\"en-mu\":{\"language\":\"English\",\"location\":\"Mauritius\",\"id\":4096,\"tag\":\"en-MU\",\"version\":\"Release 10\"},\"en-fm\":{\"language\":\"English\",\"location\":\"Micronesia\",\"id\":4096,\"tag\":\"en-FM\",\"version\":\"Release 10\"},\"en-ms\":{\"language\":\"English\",\"location\":\"Montserrat\",\"id\":4096,\"tag\":\"en-MS\",\"version\":\"Release 10\"},\"en-na\":{\"language\":\"English\",\"location\":\"Namibia\",\"id\":4096,\"tag\":\"en-NA\",\"version\":\"Release 10\"},\"en-nr\":{\"language\":\"English\",\"location\":\"Nauru\",\"id\":4096,\"tag\":\"en-NR\",\"version\":\"Release 10\"},\"en-nl\":{\"language\":\"English\",\"location\":\"Netherlands\",\"id\":4096,\"tag\":\"en-NL\",\"version\":\"Release 10.1\"},\"en-nz\":{\"language\":\"English\",\"location\":\"New Zealand\",\"id\":5129,\"tag\":\"en-NZ\",\"version\":\"Release A\"},\"en-ng\":{\"language\":\"English\",\"location\":\"Nigeria\",\"id\":4096,\"tag\":\"en-NG\",\"version\":\"Release 10\"},\"en-nu\":{\"language\":\"English\",\"location\":\"Niue\",\"id\":4096,\"tag\":\"en-NU\",\"version\":\"Release 10\"},\"en-nf\":{\"language\":\"English\",\"location\":\"Norfolk Island\",\"id\":4096,\"tag\":\"en-NF\",\"version\":\"Release 10\"},\"en-mp\":{\"language\":\"English\",\"location\":\"Northern Mariana Islands\",\"id\":4096,\"tag\":\"en-MP\",\"version\":\"Release 10\"},\"en-pk\":{\"language\":\"English\",\"location\":\"Pakistan\",\"id\":4096,\"tag\":\"en-PK\",\"version\":\"Release 10\"},\"en-pw\":{\"language\":\"English\",\"location\":\"Palau\",\"id\":4096,\"tag\":\"en-PW\",\"version\":\"Release 10\"},\"en-pg\":{\"language\":\"English\",\"location\":\"Papua New Guinea\",\"id\":4096,\"tag\":\"en-PG\",\"version\":\"Release 10\"},\"en-pn\":{\"language\":\"English\",\"location\":\"Pitcairn Islands\",\"id\":4096,\"tag\":\"en-PN\",\"version\":\"Release 10\"},\"en-pr\":{\"language\":\"English\",\"location\":\"Puerto Rico\",\"id\":4096,\"tag\":\"en-PR\",\"version\":\"Release 10\"},\"en-ph\":{\"language\":\"English\",\"location\":\"Republic of the Philippines\",\"id\":13321,\"tag\":\"en-PH\",\"version\":\"Release C\"},\"en-rw\":{\"language\":\"English\",\"location\":\"Rwanda\",\"id\":4096,\"tag\":\"en-RW\",\"version\":\"Release 10\"},\"en-kn\":{\"language\":\"English\",\"location\":\"Saint Kitts and Nevis\",\"id\":4096,\"tag\":\"en-KN\",\"version\":\"Release 10\"},\"en-lc\":{\"language\":\"English\",\"location\":\"Saint Lucia\",\"id\":4096,\"tag\":\"en-LC\",\"version\":\"Release 10\"},\"en-vc\":{\"language\":\"English\",\"location\":\"Saint Vincent and the Grenadines\",\"id\":4096,\"tag\":\"en-VC\",\"version\":\"Release 10\"},\"en-ws\":{\"language\":\"English\",\"location\":\"Samoa\",\"id\":4096,\"tag\":\"en-WS\",\"version\":\"Release 10\"},\"en-sc\":{\"language\":\"English\",\"location\":\"Seychelles\",\"id\":4096,\"tag\":\"en-SC\",\"version\":\"Release 10\"},\"en-sl\":{\"language\":\"English\",\"location\":\"Sierra Leone\",\"id\":4096,\"tag\":\"en-SL\",\"version\":\"Release 10\"},\"en-sg\":{\"language\":\"English\",\"location\":\"Singapore\",\"id\":18441,\"tag\":\"en-SG\",\"version\":\"Release V\"},\"en-sx\":{\"language\":\"English\",\"location\":\"Sint Maarten\",\"id\":4096,\"tag\":\"en-SX\",\"version\":\"Release 10\"},\"en-si\":{\"language\":\"English\",\"location\":\"Slovenia\",\"id\":4096,\"tag\":\"en-SI\",\"version\":\"Release 10.1\"},\"en-sb\":{\"language\":\"English\",\"location\":\"Solomon Islands\",\"id\":4096,\"tag\":\"en-SB\",\"version\":\"Release 10\"},\"en-za\":{\"language\":\"English\",\"location\":\"South Africa\",\"id\":7177,\"tag\":\"en-ZA\",\"version\":\"Release B\"},\"en-ss\":{\"language\":\"English\",\"location\":\"South Sudan\",\"id\":4096,\"tag\":\"en-SS\",\"version\":\"Release 10\"},\"en-sh\":{\"language\":\"English\",\"location\":\"St Helena, Ascension,  Tristan da Cunha\",\"id\":4096,\"tag\":\"en-SH\",\"version\":\"Release 10\"},\"en-sd\":{\"language\":\"English\",\"location\":\"Sudan\",\"id\":4096,\"tag\":\"en-SD\",\"version\":\"Release 10\"},\"en-sz\":{\"language\":\"English\",\"location\":\"Swaziland\",\"id\":4096,\"tag\":\"en-SZ\",\"version\":\"Release 10\"},\"en-se\":{\"language\":\"English\",\"location\":\"Sweden\",\"id\":4096,\"tag\":\"en-SE\",\"version\":\"Release 10.1\"},\"en-ch\":{\"language\":\"English\",\"location\":\"Switzerland\",\"id\":4096,\"tag\":\"en-CH\",\"version\":\"Release 10.1\"},\"en-tz\":{\"language\":\"English\",\"location\":\"Tanzania\",\"id\":4096,\"tag\":\"en-TZ\",\"version\":\"Release 10\"},\"en-tk\":{\"language\":\"English\",\"location\":\"Tokelau\",\"id\":4096,\"tag\":\"en-TK\",\"version\":\"Release 10\"},\"en-to\":{\"language\":\"English\",\"location\":\"Tonga\",\"id\":4096,\"tag\":\"en-TO\",\"version\":\"Release 10\"},\"en-tt\":{\"language\":\"English\",\"location\":\"Trinidad and Tobago\",\"id\":11273,\"tag\":\"en-TT\",\"version\":\"Release B\"},\"en-tc\":{\"language\":\"English\",\"location\":\"Turks and Caicos Islands\",\"id\":4096,\"tag\":\"en-TC\",\"version\":\"Release 10\"},\"en-tv\":{\"language\":\"English\",\"location\":\"Tuvalu\",\"id\":4096,\"tag\":\"en-TV\",\"version\":\"Release 10\"},\"en-ug\":{\"language\":\"English\",\"location\":\"Uganda\",\"id\":4096,\"tag\":\"en-UG\",\"version\":\"Release 10\"},\"en-ae\":{\"language\":\"English\",\"location\":\"United Arab Emirates\",\"id\":19465,\"tag\":\"en-AE\",\"version\":\"Release 10.5\"},\"en-gb\":{\"language\":\"English\",\"location\":\"United Kingdom\",\"id\":2057,\"tag\":\"en-GB\",\"version\":\"Release A\"},\"en-us\":{\"language\":\"English\",\"location\":\"United States\",\"id\":1033,\"tag\":\"en-US\",\"version\":\"Release A\"},\"en-um\":{\"language\":\"English\",\"location\":\"US Minor Outlying Islands\",\"id\":4096,\"tag\":\"en-UM\",\"version\":\"Release 10\"},\"en-vi\":{\"language\":\"English\",\"location\":\"US Virgin Islands\",\"id\":4096,\"tag\":\"en-VI\",\"version\":\"Release 10\"},\"en-vu\":{\"language\":\"English\",\"location\":\"Vanuatu\",\"id\":4096,\"tag\":\"en-VU\",\"version\":\"Release 10\"},\"en-001\":{\"language\":\"English\",\"location\":\"World\",\"id\":4096,\"tag\":\"en-001\",\"version\":\"Release 10\"},\"en-zm\":{\"language\":\"English\",\"location\":\"Zambia\",\"id\":4096,\"tag\":\"en-ZM\",\"version\":\"Release 10\"},\"en-zw\":{\"language\":\"English\",\"location\":\"Zimbabwe\",\"id\":12297,\"tag\":\"en-ZW\",\"version\":\"Release C\"},\"eo\":{\"language\":\"Esperanto\",\"location\":null,\"id\":4096,\"tag\":\"eo\",\"version\":\"Release 10\"},\"eo-001\":{\"language\":\"Esperanto\",\"location\":\"World\",\"id\":4096,\"tag\":\"eo-001\",\"version\":\"Release 10\"},\"et\":{\"language\":\"Estonian\",\"location\":null,\"id\":37,\"tag\":\"et\",\"version\":\"Release 7\"},\"et-ee\":{\"language\":\"Estonian\",\"location\":\"Estonia\",\"id\":1061,\"tag\":\"et-EE\",\"version\":\"Release B\"},\"ee\":{\"language\":\"Ewe\",\"location\":null,\"id\":4096,\"tag\":\"ee\",\"version\":\"Release 10\"},\"ee-gh\":{\"language\":\"Ewe\",\"location\":\"Ghana\",\"id\":4096,\"tag\":\"ee-GH\",\"version\":\"Release 10\"},\"ee-tg\":{\"language\":\"Ewe\",\"location\":\"Togo\",\"id\":4096,\"tag\":\"ee-TG\",\"version\":\"Release 10\"},\"ewo\":{\"language\":\"Ewondo\",\"location\":null,\"id\":4096,\"tag\":\"ewo\",\"version\":\"Release 10\"},\"ewo-cm\":{\"language\":\"Ewondo\",\"location\":\"Cameroon\",\"id\":4096,\"tag\":\"ewo-CM\",\"version\":\"Release 10\"},\"fo\":{\"language\":\"Faroese\",\"location\":null,\"id\":56,\"tag\":\"fo\",\"version\":\"Release 7\"},\"fo-dk\":{\"language\":\"Faroese\",\"location\":\"Denmark\",\"id\":4096,\"tag\":\"fo-DK\",\"version\":\"Release 10.1\"},\"fo-fo\":{\"language\":\"Faroese\",\"location\":\"Faroe Islands\",\"id\":1080,\"tag\":\"fo-FO\",\"version\":\"Release B\"},\"fil\":{\"language\":\"Filipino\",\"location\":null,\"id\":100,\"tag\":\"fil\",\"version\":\"Release 7\"},\"fil-ph\":{\"language\":\"Filipino\",\"location\":\"Philippines\",\"id\":1124,\"tag\":\"fil-PH\",\"version\":\"Release E2\"},\"fi\":{\"language\":\"Finnish\",\"location\":null,\"id\":11,\"tag\":\"fi\",\"version\":\"Release 7\"},\"fi-fi\":{\"language\":\"Finnish\",\"location\":\"Finland\",\"id\":1035,\"tag\":\"fi-FI\",\"version\":\"Release A\"},\"fr\":{\"language\":\"French\",\"location\":null,\"id\":12,\"tag\":\"fr\",\"version\":\"Release 7\"},\"fr-dz\":{\"language\":\"French\",\"location\":\"Algeria\",\"id\":4096,\"tag\":\"fr-DZ\",\"version\":\"Release 10\"},\"fr-be\":{\"language\":\"French\",\"location\":\"Belgium\",\"id\":2060,\"tag\":\"fr-BE\",\"version\":\"Release A\"},\"fr-bj\":{\"language\":\"French\",\"location\":\"Benin\",\"id\":4096,\"tag\":\"fr-BJ\",\"version\":\"Release 10\"},\"fr-bf\":{\"language\":\"French\",\"location\":\"Burkina Faso\",\"id\":4096,\"tag\":\"fr-BF\",\"version\":\"Release 10\"},\"fr-bi\":{\"language\":\"French\",\"location\":\"Burundi\",\"id\":4096,\"tag\":\"fr-BI\",\"version\":\"Release 10\"},\"fr-cm\":{\"language\":\"French\",\"location\":\"Cameroon\",\"id\":11276,\"tag\":\"fr-CM\",\"version\":\"Release 8.1\"},\"fr-ca\":{\"language\":\"French\",\"location\":\"Canada\",\"id\":3084,\"tag\":\"fr-CA\",\"version\":\"Release A\"},\"fr-cf\":{\"language\":\"French\",\"location\":\"Central African Republic\",\"id\":4096,\"tag\":\"fr-CF\",\"version\":\"Release10\"},\"fr-td\":{\"language\":\"French\",\"location\":\"Chad\",\"id\":4096,\"tag\":\"fr-TD\",\"version\":\"Release 10\"},\"fr-km\":{\"language\":\"French\",\"location\":\"Comoros\",\"id\":4096,\"tag\":\"fr-KM\",\"version\":\"Release 10\"},\"fr-cg\":{\"language\":\"French\",\"location\":\"Congo\",\"id\":4096,\"tag\":\"fr-CG\",\"version\":\"Release 10\"},\"fr-cd\":{\"language\":\"French\",\"location\":\"Congo, DRC\",\"id\":9228,\"tag\":\"fr-CD\",\"version\":\"Release 8.1\"},\"fr-ci\":{\"language\":\"French\",\"location\":\"Côte d'Ivoire\",\"id\":12300,\"tag\":\"fr-CI\",\"version\":\"Release 8.1\"},\"fr-dj\":{\"language\":\"French\",\"location\":\"Djibouti\",\"id\":4096,\"tag\":\"fr-DJ\",\"version\":\"Release 10\"},\"fr-gq\":{\"language\":\"French\",\"location\":\"Equatorial Guinea\",\"id\":4096,\"tag\":\"fr-GQ\",\"version\":\"Release 10\"},\"fr-fr\":{\"language\":\"French\",\"location\":\"France\",\"id\":1036,\"tag\":\"fr-FR\",\"version\":\"Release A\"},\"fr-gf\":{\"language\":\"French\",\"location\":\"French Guiana\",\"id\":4096,\"tag\":\"fr-GF\",\"version\":\"Release 10\"},\"fr-pf\":{\"language\":\"French\",\"location\":\"French Polynesia\",\"id\":4096,\"tag\":\"fr-PF\",\"version\":\"Release 10\"},\"fr-ga\":{\"language\":\"French\",\"location\":\"Gabon\",\"id\":4096,\"tag\":\"fr-GA\",\"version\":\"Release 10\"},\"fr-gp\":{\"language\":\"French\",\"location\":\"Guadeloupe\",\"id\":4096,\"tag\":\"fr-GP\",\"version\":\"Release 10\"},\"fr-gn\":{\"language\":\"French\",\"location\":\"Guinea\",\"id\":4096,\"tag\":\"fr-GN\",\"version\":\"Release 10\"},\"fr-ht\":{\"language\":\"French\",\"location\":\"Haiti\",\"id\":15372,\"tag\":\"fr-HT\",\"version\":\"Release 8.1\"},\"fr-lu\":{\"language\":\"French\",\"location\":\"Luxembourg\",\"id\":5132,\"tag\":\"fr-LU\",\"version\":\"Release A\"},\"fr-mg\":{\"language\":\"French\",\"location\":\"Madagascar\",\"id\":4096,\"tag\":\"fr-MG\",\"version\":\"Release 10\"},\"fr-ml\":{\"language\":\"French\",\"location\":\"Mali\",\"id\":13324,\"tag\":\"fr-ML\",\"version\":\"Release 8.1\"},\"fr-mq\":{\"language\":\"French\",\"location\":\"Martinique\",\"id\":4096,\"tag\":\"fr-MQ\",\"version\":\"Release 10\"},\"fr-mr\":{\"language\":\"French\",\"location\":\"Mauritania\",\"id\":4096,\"tag\":\"fr-MR\",\"version\":\"Release 10\"},\"fr-mu\":{\"language\":\"French\",\"location\":\"Mauritius\",\"id\":4096,\"tag\":\"fr-MU\",\"version\":\"Release 10\"},\"fr-yt\":{\"language\":\"French\",\"location\":\"Mayotte\",\"id\":4096,\"tag\":\"fr-YT\",\"version\":\"Release 10\"},\"fr-ma\":{\"language\":\"French\",\"location\":\"Morocco\",\"id\":14348,\"tag\":\"fr-MA\",\"version\":\"Release 8.1\"},\"fr-nc\":{\"language\":\"French\",\"location\":\"New Caledonia\",\"id\":4096,\"tag\":\"fr-NC\",\"version\":\"Release 10\"},\"fr-ne\":{\"language\":\"French\",\"location\":\"Niger\",\"id\":4096,\"tag\":\"fr-NE\",\"version\":\"Release 10\"},\"fr-mc\":{\"language\":\"French\",\"location\":\"Principality of Monaco\",\"id\":6156,\"tag\":\"fr-MC\",\"version\":\"Release A\"},\"fr-re\":{\"language\":\"French\",\"location\":\"Reunion\",\"id\":8204,\"tag\":\"fr-RE\",\"version\":\"Release 8.1\"},\"fr-rw\":{\"language\":\"French\",\"location\":\"Rwanda\",\"id\":4096,\"tag\":\"fr-RW\",\"version\":\"Release 10\"},\"fr-bl\":{\"language\":\"French\",\"location\":\"Saint Barthélemy\",\"id\":4096,\"tag\":\"fr-BL\",\"version\":\"Release 10\"},\"fr-mf\":{\"language\":\"French\",\"location\":\"Saint Martin\",\"id\":4096,\"tag\":\"fr-MF\",\"version\":\"Release 10\"},\"fr-pm\":{\"language\":\"French\",\"location\":\"Saint Pierre and Miquelon\",\"id\":4096,\"tag\":\"fr-PM\",\"version\":\"Release 10\"},\"fr-sn\":{\"language\":\"French\",\"location\":\"Senegal\",\"id\":10252,\"tag\":\"fr-SN\",\"version\":\"Release 8.1\"},\"fr-sc\":{\"language\":\"French\",\"location\":\"Seychelles\",\"id\":4096,\"tag\":\"fr-SC\",\"version\":\"Release 10\"},\"fr-ch\":{\"language\":\"French\",\"location\":\"Switzerland\",\"id\":4108,\"tag\":\"fr-CH\",\"version\":\"Release A\"},\"fr-sy\":{\"language\":\"French\",\"location\":\"Syria\",\"id\":4096,\"tag\":\"fr-SY\",\"version\":\"Release 10\"},\"fr-tg\":{\"language\":\"French\",\"location\":\"Togo\",\"id\":4096,\"tag\":\"fr-TG\",\"version\":\"Release 10\"},\"fr-tn\":{\"language\":\"French\",\"location\":\"Tunisia\",\"id\":4096,\"tag\":\"fr-TN\",\"version\":\"Release 10\"},\"fr-vu\":{\"language\":\"French\",\"location\":\"Vanuatu\",\"id\":4096,\"tag\":\"fr-VU\",\"version\":\"Release 10\"},\"fr-wf\":{\"language\":\"French\",\"location\":\"Wallis and Futuna\",\"id\":4096,\"tag\":\"fr-WF\",\"version\":\"Release 10\"},\"fy\":{\"language\":\"Frisian\",\"location\":null,\"id\":98,\"tag\":\"fy\",\"version\":\"Release 7\"},\"fy-nl\":{\"language\":\"Frisian\",\"location\":\"Netherlands\",\"id\":1122,\"tag\":\"fy-NL\",\"version\":\"Release E2\"},\"fur\":{\"language\":\"Friulian\",\"location\":null,\"id\":4096,\"tag\":\"fur\",\"version\":\"Release 10\"},\"fur-it\":{\"language\":\"Friulian\",\"location\":\"Italy\",\"id\":4096,\"tag\":\"fur-IT\",\"version\":\"Release 10\"},\"ff\":{\"language\":\"Fulah\",\"location\":null,\"id\":103,\"tag\":\"ff\",\"version\":\"Release 8\"},\"ff-latn\":{\"language\":\"Fulah (Latin)\",\"location\":null,\"id\":31847,\"tag\":\"ff-Latn\",\"version\":\"Release 8\"},\"ff-latn-bf\":{\"language\":\"Fulah (Latin)\",\"location\":\"Burkina Faso\",\"id\":4096,\"tag\":\"ff-Latn-BF\",\"version\":\"Release 10.4\"},\"ff-cm\":{\"language\":\"Fulah\",\"location\":\"Cameroon\",\"id\":4096,\"tag\":\"ff-CM\",\"version\":\"Release 10\"},\"ff-latn-cm\":{\"language\":\"Fulah (Latin)\",\"location\":\"Cameroon\",\"id\":4096,\"tag\":\"ff-Latn-CM\",\"version\":\"Release 10.4\"},\"ff-latn-gm\":{\"language\":\"Fulah (Latin)\",\"location\":\"Gambia\",\"id\":4096,\"tag\":\"ff-Latn-GM\",\"version\":\"Release 10.4\"},\"ff-latn-gh\":{\"language\":\"Fulah (Latin)\",\"location\":\"Ghana\",\"id\":4096,\"tag\":\"ff-Latn-GH\",\"version\":\"Release 10.4\"},\"ff-gn\":{\"language\":\"Fulah\",\"location\":\"Guinea\",\"id\":4096,\"tag\":\"ff-GN\",\"version\":\"Release 10\"},\"ff-latn-gn\":{\"language\":\"Fulah (Latin)\",\"location\":\"Guinea\",\"id\":4096,\"tag\":\"ff-Latn-GN\",\"version\":\"Release 10.4\"},\"ff-latn-gw\":{\"language\":\"Fulah (Latin)\",\"location\":\"Guinea-Bissau\",\"id\":4096,\"tag\":\"ff-Latn-GW\",\"version\":\"Release 10.4\"},\"ff-latn-lr\":{\"language\":\"Fulah (Latin)\",\"location\":\"Liberia\",\"id\":4096,\"tag\":\"ff-Latn-LR\",\"version\":\"Release 10.4\"},\"ff-mr\":{\"language\":\"Fulah\",\"location\":\"Mauritania\",\"id\":4096,\"tag\":\"ff-MR\",\"version\":\"Release 10\"},\"ff-latn-mr\":{\"language\":\"Fulah (Latin)\",\"location\":\"Mauritania\",\"id\":4096,\"tag\":\"ff-Latn-MR\",\"version\":\"Release 10.4\"},\"ff-latn-ne\":{\"language\":\"Fulah (Latin)\",\"location\":\"Niger\",\"id\":4096,\"tag\":\"ff-Latn-NE\",\"version\":\"Release 10.4\"},\"ff-ng\":{\"language\":\"Fulah\",\"location\":\"Nigeria\",\"id\":4096,\"tag\":\"ff-NG\",\"version\":\"Release 10\"},\"ff-latn-ng\":{\"language\":\"Fulah (Latin)\",\"location\":\"Nigeria\",\"id\":4096,\"tag\":\"ff-Latn-NG\",\"version\":\"Release 10.4\"},\"ff-latn-sn\":{\"language\":\"Fulah\",\"location\":\"Senegal\",\"id\":2151,\"tag\":\"ff-Latn-SN\",\"version\":\"Release 8\"},\"ff-latn-sl\":{\"language\":\"Fulah (Latin)\",\"location\":\"Sierra Leone\",\"id\":4096,\"tag\":\"ff-Latn-SL\",\"version\":\"Release 10.4\"},\"gl\":{\"language\":\"Galician\",\"location\":null,\"id\":86,\"tag\":\"gl\",\"version\":\"Release 7\"},\"gl-es\":{\"language\":\"Galician\",\"location\":\"Spain\",\"id\":1110,\"tag\":\"gl-ES\",\"version\":\"Release D\"},\"lg\":{\"language\":\"Ganda\",\"location\":null,\"id\":4096,\"tag\":\"lg\",\"version\":\"Release 10\"},\"lg-ug\":{\"language\":\"Ganda\",\"location\":\"Uganda\",\"id\":4096,\"tag\":\"lg-UG\",\"version\":\"Release 10\"},\"ka\":{\"language\":\"Georgian\",\"location\":null,\"id\":55,\"tag\":\"ka\",\"version\":\"Release 7\"},\"ka-ge\":{\"language\":\"Georgian\",\"location\":\"Georgia\",\"id\":1079,\"tag\":\"ka-GE\",\"version\":\"Release C\"},\"de\":{\"language\":\"German\",\"location\":null,\"id\":7,\"tag\":\"de\",\"version\":\"Release 7\"},\"de-at\":{\"language\":\"German\",\"location\":\"Austria\",\"id\":3079,\"tag\":\"de-AT\",\"version\":\"Release A\"},\"de-be\":{\"language\":\"German\",\"location\":\"Belgium\",\"id\":4096,\"tag\":\"de-BE\",\"version\":\"Release 10\"},\"de-de\":{\"language\":\"German\",\"location\":\"Germany\",\"id\":1031,\"tag\":\"de-DE\",\"version\":\"Release A\"},\"de-it\":{\"language\":\"German\",\"location\":\"Italy\",\"id\":4096,\"tag\":\"de-IT\",\"version\":\"Release 10.2\"},\"de-li\":{\"language\":\"German\",\"location\":\"Liechtenstein\",\"id\":5127,\"tag\":\"de-LI\",\"version\":\"Release B\"},\"de-lu\":{\"language\":\"German\",\"location\":\"Luxembourg\",\"id\":4103,\"tag\":\"de-LU\",\"version\":\"Release B\"},\"de-ch\":{\"language\":\"German\",\"location\":\"Switzerland\",\"id\":2055,\"tag\":\"de-CH\",\"version\":\"Release A\"},\"el\":{\"language\":\"Greek\",\"location\":null,\"id\":8,\"tag\":\"el\",\"version\":\"Release 7\"},\"el-cy\":{\"language\":\"Greek\",\"location\":\"Cyprus\",\"id\":4096,\"tag\":\"el-CY\",\"version\":\"Release 10\"},\"el-gr\":{\"language\":\"Greek\",\"location\":\"Greece\",\"id\":1032,\"tag\":\"el-GR\",\"version\":\"Release A\"},\"kl\":{\"language\":\"Greenlandic\",\"location\":null,\"id\":111,\"tag\":\"kl\",\"version\":\"Release 7\"},\"kl-gl\":{\"language\":\"Greenlandic\",\"location\":\"Greenland\",\"id\":1135,\"tag\":\"kl-GL\",\"version\":\"Release V\"},\"gn\":{\"language\":\"Guarani\",\"location\":null,\"id\":116,\"tag\":\"gn\",\"version\":\"Release 8.1\"},\"gn-py\":{\"language\":\"Guarani\",\"location\":\"Paraguay\",\"id\":1140,\"tag\":\"gn-PY\",\"version\":\"Release 8.1\"},\"gu\":{\"language\":\"Gujarati\",\"location\":null,\"id\":71,\"tag\":\"gu\",\"version\":\"Release 7\"},\"gu-in\":{\"language\":\"Gujarati\",\"location\":\"India\",\"id\":1095,\"tag\":\"gu-IN\",\"version\":\"Release D\"},\"guz\":{\"language\":\"Gusii\",\"location\":null,\"id\":4096,\"tag\":\"guz\",\"version\":\"Release 10\"},\"guz-ke\":{\"language\":\"Gusii\",\"location\":\"Kenya\",\"id\":4096,\"tag\":\"guz-KE\",\"version\":\"Release 10\"},\"ha\":{\"language\":\"Hausa (Latin)\",\"location\":null,\"id\":104,\"tag\":\"ha\",\"version\":\"Release 7\"},\"ha-latn\":{\"language\":\"Hausa (Latin)\",\"location\":null,\"id\":31848,\"tag\":\"ha-Latn\",\"version\":\"Windows 7\"},\"ha-latn-gh\":{\"language\":\"Hausa (Latin)\",\"location\":\"Ghana\",\"id\":4096,\"tag\":\"ha-Latn-GH\",\"version\":\"Release 10\"},\"ha-latn-ne\":{\"language\":\"Hausa (Latin)\",\"location\":\"Niger\",\"id\":4096,\"tag\":\"ha-Latn-NE\",\"version\":\"Release 10\"},\"ha-latn-ng\":{\"language\":\"Hausa (Latin)\",\"location\":\"Nigeria\",\"id\":1128,\"tag\":\"ha-Latn-NG\",\"version\":\"Release V\"},\"haw\":{\"language\":\"Hawaiian\",\"location\":null,\"id\":117,\"tag\":\"haw\",\"version\":\"Release 8\"},\"haw-us\":{\"language\":\"Hawaiian\",\"location\":\"United States\",\"id\":1141,\"tag\":\"haw-US\",\"version\":\"Release 8\"},\"he\":{\"language\":\"Hebrew\",\"location\":null,\"id\":13,\"tag\":\"he\",\"version\":\"Release 7\"},\"he-il\":{\"language\":\"Hebrew\",\"location\":\"Israel\",\"id\":1037,\"tag\":\"he-IL\",\"version\":\"Release B\"},\"hi\":{\"language\":\"Hindi\",\"location\":null,\"id\":57,\"tag\":\"hi\",\"version\":\"Release 7\"},\"hi-in\":{\"language\":\"Hindi\",\"location\":\"India\",\"id\":1081,\"tag\":\"hi-IN\",\"version\":\"Release C\"},\"hu\":{\"language\":\"Hungarian\",\"location\":null,\"id\":14,\"tag\":\"hu\",\"version\":\"Release 7\"},\"hu-hu\":{\"language\":\"Hungarian\",\"location\":\"Hungary\",\"id\":1038,\"tag\":\"hu-HU\",\"version\":\"Release A\"},\"is\":{\"language\":\"Icelandic\",\"location\":null,\"id\":15,\"tag\":\"is\",\"version\":\"Release 7\"},\"is-is\":{\"language\":\"Icelandic\",\"location\":\"Iceland\",\"id\":1039,\"tag\":\"is-IS\",\"version\":\"Release A\"},\"ig\":{\"language\":\"Igbo\",\"location\":null,\"id\":112,\"tag\":\"ig\",\"version\":\"Release 7\"},\"ig-ng\":{\"language\":\"Igbo\",\"location\":\"Nigeria\",\"id\":1136,\"tag\":\"ig-NG\",\"version\":\"Release V\"},\"id\":{\"language\":\"Indonesian\",\"location\":null,\"id\":33,\"tag\":\"id\",\"version\":\"Release 7\"},\"id-id\":{\"language\":\"Indonesian\",\"location\":\"Indonesia\",\"id\":1057,\"tag\":\"id-ID\",\"version\":\"Release B\"},\"ia\":{\"language\":\"Interlingua\",\"location\":null,\"id\":4096,\"tag\":\"ia\",\"version\":\"Release 10\"},\"ia-fr\":{\"language\":\"Interlingua\",\"location\":\"France\",\"id\":4096,\"tag\":\"ia-FR\",\"version\":\"Release 10\"},\"ia-001\":{\"language\":\"Interlingua\",\"location\":\"World\",\"id\":4096,\"tag\":\"ia-001\",\"version\":\"Release 10\"},\"iu\":{\"language\":\"Inuktitut (Latin)\",\"location\":null,\"id\":93,\"tag\":\"iu\",\"version\":\"Release 7\"},\"iu-latn\":{\"language\":\"Inuktitut (Latin)\",\"location\":null,\"id\":31837,\"tag\":\"iu-Latn\",\"version\":\"Windows 7\"},\"iu-latn-ca\":{\"language\":\"Inuktitut (Latin)\",\"location\":\"Canada\",\"id\":2141,\"tag\":\"iu-Latn-CA\",\"version\":\"Release E2\"},\"iu-cans\":{\"language\":\"Inuktitut (Syllabics)\",\"location\":null,\"id\":30813,\"tag\":\"iu-Cans\",\"version\":\"Windows 7\"},\"iu-cans-ca\":{\"language\":\"Inuktitut (Syllabics)\",\"location\":\"Canada\",\"id\":1117,\"tag\":\"iu-Cans-CA\",\"version\":\"Release V\"},\"ga\":{\"language\":\"Irish\",\"location\":null,\"id\":60,\"tag\":\"ga\",\"version\":\"Windows 7\"},\"ga-ie\":{\"language\":\"Irish\",\"location\":\"Ireland\",\"id\":2108,\"tag\":\"ga-IE\",\"version\":\"Release E2\"},\"it\":{\"language\":\"Italian\",\"location\":null,\"id\":16,\"tag\":\"it\",\"version\":\"Release 7\"},\"it-it\":{\"language\":\"Italian\",\"location\":\"Italy\",\"id\":1040,\"tag\":\"it-IT\",\"version\":\"Release A\"},\"it-sm\":{\"language\":\"Italian\",\"location\":\"San Marino\",\"id\":4096,\"tag\":\"it-SM\",\"version\":\"Release 10\"},\"it-ch\":{\"language\":\"Italian\",\"location\":\"Switzerland\",\"id\":2064,\"tag\":\"it-CH\",\"version\":\"Release A\"},\"it-va\":{\"language\":\"Italian\",\"location\":\"Vatican City\",\"id\":4096,\"tag\":\"it-VA\",\"version\":\"Release 10.3\"},\"ja\":{\"language\":\"Japanese\",\"location\":null,\"id\":17,\"tag\":\"ja\",\"version\":\"Release 7\"},\"ja-jp\":{\"language\":\"Japanese\",\"location\":\"Japan\",\"id\":1041,\"tag\":\"ja-JP\",\"version\":\"Release A\"},\"jv\":{\"language\":\"Javanese\",\"location\":null,\"id\":4096,\"tag\":\"jv\",\"version\":\"Release 8.1\"},\"jv-latn\":{\"language\":\"Javanese\",\"location\":\"Latin\",\"id\":4096,\"tag\":\"jv-Latn\",\"version\":\"Release 8.1\"},\"jv-latn-id\":{\"language\":\"Javanese\",\"location\":\"Latin, Indonesia\",\"id\":4096,\"tag\":\"jv-Latn-ID\",\"version\":\"Release 8.1\"},\"dyo\":{\"language\":\"Jola-Fonyi\",\"location\":null,\"id\":4096,\"tag\":\"dyo\",\"version\":\"Release 10\"},\"dyo-sn\":{\"language\":\"Jola-Fonyi\",\"location\":\"Senegal\",\"id\":4096,\"tag\":\"dyo-SN\",\"version\":\"Release 10\"},\"kea\":{\"language\":\"Kabuverdianu\",\"location\":null,\"id\":4096,\"tag\":\"kea\",\"version\":\"Release 10\"},\"kea-cv\":{\"language\":\"Kabuverdianu\",\"location\":\"Cabo Verde\",\"id\":4096,\"tag\":\"kea-CV\",\"version\":\"Release 10\"},\"kab\":{\"language\":\"Kabyle\",\"location\":null,\"id\":4096,\"tag\":\"kab\",\"version\":\"Release 10\"},\"kab-dz\":{\"language\":\"Kabyle\",\"location\":\"Algeria\",\"id\":4096,\"tag\":\"kab-DZ\",\"version\":\"Release 10\"},\"kkj\":{\"language\":\"Kako\",\"location\":null,\"id\":4096,\"tag\":\"kkj\",\"version\":\"Release 10\"},\"kkj-cm\":{\"language\":\"Kako\",\"location\":\"Cameroon\",\"id\":4096,\"tag\":\"kkj-CM\",\"version\":\"Release 10\"},\"kln\":{\"language\":\"Kalenjin\",\"location\":null,\"id\":4096,\"tag\":\"kln\",\"version\":\"Release 10\"},\"kln-ke\":{\"language\":\"Kalenjin\",\"location\":\"Kenya\",\"id\":4096,\"tag\":\"kln-KE\",\"version\":\"Release 10\"},\"kam\":{\"language\":\"Kamba\",\"location\":null,\"id\":4096,\"tag\":\"kam\",\"version\":\"Release 10\"},\"kam-ke\":{\"language\":\"Kamba\",\"location\":\"Kenya\",\"id\":4096,\"tag\":\"kam-KE\",\"version\":\"Release 10\"},\"kn\":{\"language\":\"Kannada\",\"location\":null,\"id\":75,\"tag\":\"kn\",\"version\":\"Release 7\"},\"kn-in\":{\"language\":\"Kannada\",\"location\":\"India\",\"id\":1099,\"tag\":\"kn-IN\",\"version\":\"Release D\"},\"ks\":{\"language\":\"Kashmiri\",\"location\":null,\"id\":96,\"tag\":\"ks\",\"version\":\"Release 10\"},\"ks-arab\":{\"language\":\"Kashmiri\",\"location\":\"Perso-Arabic\",\"id\":1120,\"tag\":\"ks-Arab\",\"version\":\"Release 10\"},\"ks-arab-in\":{\"language\":\"Kashmiri\",\"location\":\"Perso-Arabic\",\"id\":4096,\"tag\":\"ks-Arab-IN\",\"version\":\"Release 10\"},\"kk\":{\"language\":\"Kazakh\",\"location\":null,\"id\":63,\"tag\":\"kk\",\"version\":\"Release 7\"},\"kk-kz\":{\"language\":\"Kazakh\",\"location\":\"Kazakhstan\",\"id\":1087,\"tag\":\"kk-KZ\",\"version\":\"Release C\"},\"km\":{\"language\":\"Khmer\",\"location\":null,\"id\":83,\"tag\":\"km\",\"version\":\"Release 7\"},\"km-kh\":{\"language\":\"Khmer\",\"location\":\"Cambodia\",\"id\":1107,\"tag\":\"km-KH\",\"version\":\"Release V\"},\"quc\":{\"language\":\"K'iche\",\"location\":null,\"id\":134,\"tag\":\"quc\",\"version\":\"Release 10\"},\"quc-latn-gt\":{\"language\":\"K'iche\",\"location\":\"Guatemala\",\"id\":1158,\"tag\":\"quc-Latn-GT\",\"version\":\"Release 10\"},\"ki\":{\"language\":\"Kikuyu\",\"location\":null,\"id\":4096,\"tag\":\"ki\",\"version\":\"Release 10\"},\"ki-ke\":{\"language\":\"Kikuyu\",\"location\":\"Kenya\",\"id\":4096,\"tag\":\"ki-KE\",\"version\":\"Release 10\"},\"rw\":{\"language\":\"Kinyarwanda\",\"location\":null,\"id\":135,\"tag\":\"rw\",\"version\":\"Release 7\"},\"rw-rw\":{\"language\":\"Kinyarwanda\",\"location\":\"Rwanda\",\"id\":1159,\"tag\":\"rw-RW\",\"version\":\"Release V\"},\"sw\":{\"language\":\"Kiswahili\",\"location\":null,\"id\":65,\"tag\":\"sw\",\"version\":\"Release 7\"},\"sw-ke\":{\"language\":\"Kiswahili\",\"location\":\"Kenya\",\"id\":1089,\"tag\":\"sw-KE\",\"version\":\"Release C\"},\"sw-tz\":{\"language\":\"Kiswahili\",\"location\":\"Tanzania\",\"id\":4096,\"tag\":\"sw-TZ\",\"version\":\"Release 10\"},\"sw-ug\":{\"language\":\"Kiswahili\",\"location\":\"Uganda\",\"id\":4096,\"tag\":\"sw-UG\",\"version\":\"Release 10\"},\"kok\":{\"language\":\"Konkani\",\"location\":null,\"id\":87,\"tag\":\"kok\",\"version\":\"Release 7\"},\"kok-in\":{\"language\":\"Konkani\",\"location\":\"India\",\"id\":1111,\"tag\":\"kok-IN\",\"version\":\"Release C\"},\"ko\":{\"language\":\"Korean\",\"location\":null,\"id\":18,\"tag\":\"ko\",\"version\":\"Release 7\"},\"ko-kr\":{\"language\":\"Korean\",\"location\":\"Korea\",\"id\":1042,\"tag\":\"ko-KR\",\"version\":\"Release A\"},\"ko-kp\":{\"language\":\"Korean\",\"location\":\"North Korea\",\"id\":4096,\"tag\":\"ko-KP\",\"version\":\"Release 10.1\"},\"khq\":{\"language\":\"Koyra Chiini\",\"location\":null,\"id\":4096,\"tag\":\"khq\",\"version\":\"Release 10\"},\"khq-ml\":{\"language\":\"Koyra Chiini\",\"location\":\"Mali\",\"id\":4096,\"tag\":\"khq-ML\",\"version\":\"Release 10\"},\"ses\":{\"language\":\"Koyraboro Senni\",\"location\":null,\"id\":4096,\"tag\":\"ses\",\"version\":\"Release 10\"},\"ses-ml\":{\"language\":\"Koyraboro Senni\",\"location\":\"Mali\",\"id\":4096,\"tag\":\"ses-ML\",\"version\":\"Release 10\"},\"nmg\":{\"language\":\"Kwasio\",\"location\":null,\"id\":4096,\"tag\":\"nmg\",\"version\":\"Release 10\"},\"nmg-cm\":{\"language\":\"Kwasio\",\"location\":\"Cameroon\",\"id\":4096,\"tag\":\"nmg-CM\",\"version\":\"Release 10\"},\"ky\":{\"language\":\"Kyrgyz\",\"location\":null,\"id\":64,\"tag\":\"ky\",\"version\":\"Release 7\"},\"ky-kg\":{\"language\":\"Kyrgyz\",\"location\":\"Kyrgyzstan\",\"id\":1088,\"tag\":\"ky-KG\",\"version\":\"Release D\"},\"ku-arab-ir\":{\"language\":\"Kurdish\",\"location\":\"Perso-Arabic, Iran\",\"id\":4096,\"tag\":\"ku-Arab-IR\",\"version\":\"Release 10.1\"},\"lkt\":{\"language\":\"Lakota\",\"location\":null,\"id\":4096,\"tag\":\"lkt\",\"version\":\"Release 10\"},\"lkt-us\":{\"language\":\"Lakota\",\"location\":\"United States\",\"id\":4096,\"tag\":\"lkt-US\",\"version\":\"Release 10\"},\"lag\":{\"language\":\"Langi\",\"location\":null,\"id\":4096,\"tag\":\"lag\",\"version\":\"Release 10\"},\"lag-tz\":{\"language\":\"Langi\",\"location\":\"Tanzania\",\"id\":4096,\"tag\":\"lag-TZ\",\"version\":\"Release 10\"},\"lo\":{\"language\":\"Lao\",\"location\":null,\"id\":84,\"tag\":\"lo\",\"version\":\"Release 7\"},\"lo-la\":{\"language\":\"Lao\",\"location\":\"Lao P.D.R.\",\"id\":1108,\"tag\":\"lo-LA\",\"version\":\"Release V\"},\"lv\":{\"language\":\"Latvian\",\"location\":null,\"id\":38,\"tag\":\"lv\",\"version\":\"Release 7\"},\"lv-lv\":{\"language\":\"Latvian\",\"location\":\"Latvia\",\"id\":1062,\"tag\":\"lv-LV\",\"version\":\"Release B\"},\"ln\":{\"language\":\"Lingala\",\"location\":null,\"id\":4096,\"tag\":\"ln\",\"version\":\"Release 10\"},\"ln-ao\":{\"language\":\"Lingala\",\"location\":\"Angola\",\"id\":4096,\"tag\":\"ln-AO\",\"version\":\"Release 10\"},\"ln-cf\":{\"language\":\"Lingala\",\"location\":\"Central African Republic\",\"id\":4096,\"tag\":\"ln-CF\",\"version\":\"Release 10\"},\"ln-cg\":{\"language\":\"Lingala\",\"location\":\"Congo\",\"id\":4096,\"tag\":\"ln-CG\",\"version\":\"Release 10\"},\"ln-cd\":{\"language\":\"Lingala\",\"location\":\"Congo DRC\",\"id\":4096,\"tag\":\"ln-CD\",\"version\":\"Release 10\"},\"lt\":{\"language\":\"Lithuanian\",\"location\":null,\"id\":39,\"tag\":\"lt\",\"version\":\"Release 7\"},\"lt-lt\":{\"language\":\"Lithuanian\",\"location\":\"Lithuania\",\"id\":1063,\"tag\":\"lt-LT\",\"version\":\"Release B\"},\"nds\":{\"language\":\"Low German\",\"location\":null,\"id\":4096,\"tag\":\"nds\",\"version\":\"Release 10.2\"},\"nds-de\":{\"language\":\"Low German\",\"location\":\"Germany\",\"id\":4096,\"tag\":\"nds-DE\",\"version\":\"Release 10.2\"},\"nds-nl\":{\"language\":\"Low German\",\"location\":\"Netherlands\",\"id\":4096,\"tag\":\"nds-NL\",\"version\":\"Release 10.2\"},\"dsb\":{\"language\":\"Lower Sorbian\",\"location\":null,\"id\":31790,\"tag\":\"dsb\",\"version\":\"Windows 7\"},\"dsb-de\":{\"language\":\"Lower Sorbian\",\"location\":\"Germany\",\"id\":2094,\"tag\":\"dsb-DE\",\"version\":\"Release V\"},\"lu\":{\"language\":\"Luba-Katanga\",\"location\":null,\"id\":4096,\"tag\":\"lu\",\"version\":\"Release 10\"},\"lu-cd\":{\"language\":\"Luba-Katanga\",\"location\":\"Congo DRC\",\"id\":4096,\"tag\":\"lu-CD\",\"version\":\"Release 10\"},\"luo\":{\"language\":\"Luo\",\"location\":null,\"id\":4096,\"tag\":\"luo\",\"version\":\"Release 10\"},\"luo-ke\":{\"language\":\"Luo\",\"location\":\"Kenya\",\"id\":4096,\"tag\":\"luo-KE\",\"version\":\"Release 10\"},\"lb\":{\"language\":\"Luxembourgish\",\"location\":null,\"id\":110,\"tag\":\"lb\",\"version\":\"Release 7\"},\"lb-lu\":{\"language\":\"Luxembourgish\",\"location\":\"Luxembourg\",\"id\":1134,\"tag\":\"lb-LU\",\"version\":\"Release E2\"},\"luy\":{\"language\":\"Luyia\",\"location\":null,\"id\":4096,\"tag\":\"luy\",\"version\":\"Release 10\"},\"luy-ke\":{\"language\":\"Luyia\",\"location\":\"Kenya\",\"id\":4096,\"tag\":\"luy-KE\",\"version\":\"Release 10\"},\"mk\":{\"language\":\"Macedonian\",\"location\":null,\"id\":47,\"tag\":\"mk\",\"version\":\"Release 7\"},\"mk-mk\":{\"language\":\"Macedonian\",\"location\":\"North Macedonia\",\"id\":1071,\"tag\":\"mk-MK\",\"version\":\"Release C\"},\"jmc\":{\"language\":\"Machame\",\"location\":null,\"id\":4096,\"tag\":\"jmc\",\"version\":\"Release 10\"},\"jmc-tz\":{\"language\":\"Machame\",\"location\":\"Tanzania\",\"id\":4096,\"tag\":\"jmc-TZ\",\"version\":\"Release 10\"},\"mgh\":{\"language\":\"Makhuwa-Meetto\",\"location\":null,\"id\":4096,\"tag\":\"mgh\",\"version\":\"Release 10\"},\"mgh-mz\":{\"language\":\"Makhuwa-Meetto\",\"location\":\"Mozambique\",\"id\":4096,\"tag\":\"mgh-MZ\",\"version\":\"Release 10\"},\"kde\":{\"language\":\"Makonde\",\"location\":null,\"id\":4096,\"tag\":\"kde\",\"version\":\"Release 10\"},\"kde-tz\":{\"language\":\"Makonde\",\"location\":\"Tanzania\",\"id\":4096,\"tag\":\"kde-TZ\",\"version\":\"Release 10\"},\"mg\":{\"language\":\"Malagasy\",\"location\":null,\"id\":4096,\"tag\":\"mg\",\"version\":\"Release 8.1\"},\"mg-mg\":{\"language\":\"Malagasy\",\"location\":\"Madagascar\",\"id\":4096,\"tag\":\"mg-MG\",\"version\":\"Release 8.1\"},\"ms\":{\"language\":\"Malay\",\"location\":null,\"id\":62,\"tag\":\"ms\",\"version\":\"Release 7\"},\"ms-bn\":{\"language\":\"Malay\",\"location\":\"Brunei Darussalam\",\"id\":2110,\"tag\":\"ms-BN\",\"version\":\"Release C\"},\"ms-my\":{\"language\":\"Malay\",\"location\":\"Malaysia\",\"id\":1086,\"tag\":\"ms-MY\",\"version\":\"Release C\"},\"ml\":{\"language\":\"Malayalam\",\"location\":null,\"id\":76,\"tag\":\"ml\",\"version\":\"Release 7\"},\"ml-in\":{\"language\":\"Malayalam\",\"location\":\"India\",\"id\":1100,\"tag\":\"ml-IN\",\"version\":\"Release E1\"},\"mt\":{\"language\":\"Maltese\",\"location\":null,\"id\":58,\"tag\":\"mt\",\"version\":\"Release 7\"},\"mt-mt\":{\"language\":\"Maltese\",\"location\":\"Malta\",\"id\":1082,\"tag\":\"mt-MT\",\"version\":\"Release E1\"},\"gv\":{\"language\":\"Manx\",\"location\":null,\"id\":4096,\"tag\":\"gv\",\"version\":\"Release 10\"},\"gv-im\":{\"language\":\"Manx\",\"location\":\"Isle of Man\",\"id\":4096,\"tag\":\"gv-IM\",\"version\":\"Release 10\"},\"mi\":{\"language\":\"Maori\",\"location\":null,\"id\":129,\"tag\":\"mi\",\"version\":\"Release 7\"},\"mi-nz\":{\"language\":\"Maori\",\"location\":\"New Zealand\",\"id\":1153,\"tag\":\"mi-NZ\",\"version\":\"Release E1\"},\"arn\":{\"language\":\"Mapudungun\",\"location\":null,\"id\":122,\"tag\":\"arn\",\"version\":\"Release 7\"},\"arn-cl\":{\"language\":\"Mapudungun\",\"location\":\"Chile\",\"id\":1146,\"tag\":\"arn-CL\",\"version\":\"Release E2\"},\"mr\":{\"language\":\"Marathi\",\"location\":null,\"id\":78,\"tag\":\"mr\",\"version\":\"Release 7\"},\"mr-in\":{\"language\":\"Marathi\",\"location\":\"India\",\"id\":1102,\"tag\":\"mr-IN\",\"version\":\"Release C\"},\"mas\":{\"language\":\"Masai\",\"location\":null,\"id\":4096,\"tag\":\"mas\",\"version\":\"Release 10\"},\"mas-ke\":{\"language\":\"Masai\",\"location\":\"Kenya\",\"id\":4096,\"tag\":\"mas-KE\",\"version\":\"Release 10\"},\"mas-tz\":{\"language\":\"Masai\",\"location\":\"Tanzania\",\"id\":4096,\"tag\":\"mas-TZ\",\"version\":\"Release 10\"},\"mzn-ir\":{\"language\":\"Mazanderani\",\"location\":\"Iran\",\"id\":4096,\"tag\":\"mzn-IR\",\"version\":\"Release 10.1\"},\"mer\":{\"language\":\"Meru\",\"location\":null,\"id\":4096,\"tag\":\"mer\",\"version\":\"Release 10\"},\"mer-ke\":{\"language\":\"Meru\",\"location\":\"Kenya\",\"id\":4096,\"tag\":\"mer-KE\",\"version\":\"Release 10\"},\"mgo\":{\"language\":\"Meta'\",\"location\":null,\"id\":4096,\"tag\":\"mgo\",\"version\":\"Release 10\"},\"mgo-cm\":{\"language\":\"Meta'\",\"location\":\"Cameroon\",\"id\":4096,\"tag\":\"mgo-CM\",\"version\":\"Release 10\"},\"moh\":{\"language\":\"Mohawk\",\"location\":null,\"id\":124,\"tag\":\"moh\",\"version\":\"Release 7\"},\"moh-ca\":{\"language\":\"Mohawk\",\"location\":\"Canada\",\"id\":1148,\"tag\":\"moh-CA\",\"version\":\"Release E2\"},\"mn\":{\"language\":\"Mongolian (Cyrillic)\",\"location\":null,\"id\":80,\"tag\":\"mn\",\"version\":\"Release 7\"},\"mn-cyrl\":{\"language\":\"Mongolian (Cyrillic)\",\"location\":null,\"id\":30800,\"tag\":\"mn-Cyrl\",\"version\":\"Windows 7\"},\"mn-mn\":{\"language\":\"Mongolian (Cyrillic)\",\"location\":\"Mongolia\",\"id\":1104,\"tag\":\"mn-MN\",\"version\":\"Release D\"},\"mn-mong\":{\"language\":\"Mongolian (Traditional Mongolian)\",\"location\":null,\"id\":31824,\"tag\":\"mn-Mong\",\"version\":\"Windows 7\"},\"mn-mong-cn\":{\"language\":\"Mongolian (Traditional Mongolian)\",\"location\":\"People's Republic of China\",\"id\":2128,\"tag\":\"mn-Mong-CN\",\"version\":\"Windows V\"},\"mn-mong-mn\":{\"language\":\"Mongolian (Traditional Mongolian)\",\"location\":\"Mongolia\",\"id\":3152,\"tag\":\"mn-Mong-MN\",\"version\":\"Windows 7\"},\"mfe\":{\"language\":\"Morisyen\",\"location\":null,\"id\":4096,\"tag\":\"mfe\",\"version\":\"Release 10\"},\"mfe-mu\":{\"language\":\"Morisyen\",\"location\":\"Mauritius\",\"id\":4096,\"tag\":\"mfe-MU\",\"version\":\"Release 10\"},\"mua\":{\"language\":\"Mundang\",\"location\":null,\"id\":4096,\"tag\":\"mua\",\"version\":\"Release 10\"},\"mua-cm\":{\"language\":\"Mundang\",\"location\":\"Cameroon\",\"id\":4096,\"tag\":\"mua-CM\",\"version\":\"Release 10\"},\"nqo\":{\"language\":\"N'ko\",\"location\":null,\"id\":4096,\"tag\":\"nqo\",\"version\":\"Release 8.1\"},\"nqo-gn\":{\"language\":\"N'ko\",\"location\":\"Guinea\",\"id\":4096,\"tag\":\"nqo-GN\",\"version\":\"Release 8.1\"},\"naq\":{\"language\":\"Nama\",\"location\":null,\"id\":4096,\"tag\":\"naq\",\"version\":\"Release 10\"},\"naq-na\":{\"language\":\"Nama\",\"location\":\"Namibia\",\"id\":4096,\"tag\":\"naq-NA\",\"version\":\"Release 10\"},\"ne\":{\"language\":\"Nepali\",\"location\":null,\"id\":97,\"tag\":\"ne\",\"version\":\"Release 7\"},\"ne-in\":{\"language\":\"Nepali\",\"location\":\"India\",\"id\":2145,\"tag\":\"ne-IN\",\"version\":\"Release 8.1\"},\"ne-np\":{\"language\":\"Nepali\",\"location\":\"Nepal\",\"id\":1121,\"tag\":\"ne-NP\",\"version\":\"Release E2\"},\"nnh\":{\"language\":\"Ngiemboon\",\"location\":null,\"id\":4096,\"tag\":\"nnh\",\"version\":\"Release 10\"},\"nnh-cm\":{\"language\":\"Ngiemboon\",\"location\":\"Cameroon\",\"id\":4096,\"tag\":\"nnh-CM\",\"version\":\"Release 10\"},\"jgo\":{\"language\":\"Ngomba\",\"location\":null,\"id\":4096,\"tag\":\"jgo\",\"version\":\"Release 10\"},\"jgo-cm\":{\"language\":\"Ngomba\",\"location\":\"Cameroon\",\"id\":4096,\"tag\":\"jgo-CM\",\"version\":\"Release 10\"},\"lrc-iq\":{\"language\":\"Northern Luri\",\"location\":\"Iraq\",\"id\":4096,\"tag\":\"lrc-IQ\",\"version\":\"Release 10.1\"},\"lrc-ir\":{\"language\":\"Northern Luri\",\"location\":\"Iran\",\"id\":4096,\"tag\":\"lrc-IR\",\"version\":\"Release 10.1\"},\"nd\":{\"language\":\"North Ndebele\",\"location\":null,\"id\":4096,\"tag\":\"nd\",\"version\":\"Release 10\"},\"nd-zw\":{\"language\":\"North Ndebele\",\"location\":\"Zimbabwe\",\"id\":4096,\"tag\":\"nd-ZW\",\"version\":\"Release 10\"},\"no\":{\"language\":\"Norwegian (Bokmal)\",\"location\":null,\"id\":20,\"tag\":\"no\",\"version\":\"Release 7\"},\"nb\":{\"language\":\"Norwegian (Bokmal)\",\"location\":null,\"id\":31764,\"tag\":\"nb\",\"version\":\"Release 7\"},\"nb-no\":{\"language\":\"Norwegian (Bokmal)\",\"location\":\"Norway\",\"id\":1044,\"tag\":\"nb-NO\",\"version\":\"Release A\"},\"nn\":{\"language\":\"Norwegian (Nynorsk)\",\"location\":null,\"id\":30740,\"tag\":\"nn\",\"version\":\"Release 7\"},\"nn-no\":{\"language\":\"Norwegian (Nynorsk)\",\"location\":\"Norway\",\"id\":2068,\"tag\":\"nn-NO\",\"version\":\"Release A\"},\"nb-sj\":{\"language\":\"Norwegian Bokmål\",\"location\":\"Svalbard and Jan Mayen\",\"id\":4096,\"tag\":\"nb-SJ\",\"version\":\"Release 10\"},\"nus\":{\"language\":\"Nuer\",\"location\":null,\"id\":4096,\"tag\":\"nus\",\"version\":\"Release 10\"},\"nus-sd\":{\"language\":\"Nuer\",\"location\":\"Sudan\",\"id\":4096,\"tag\":\"nus-SD\",\"version\":\"Release 10\"},\"nus-ss\":{\"language\":\"Nuer\",\"location\":\"South Sudan\",\"id\":4096,\"tag\":\"nus-SS\",\"version\":\"Release 10.1\"},\"nyn\":{\"language\":\"Nyankole\",\"location\":null,\"id\":4096,\"tag\":\"nyn\",\"version\":\"Release 10\"},\"nyn-ug\":{\"language\":\"Nyankole\",\"location\":\"Uganda\",\"id\":4096,\"tag\":\"nyn-UG\",\"version\":\"Release 10\"},\"oc\":{\"language\":\"Occitan\",\"location\":null,\"id\":130,\"tag\":\"oc\",\"version\":\"Release 7\"},\"oc-fr\":{\"language\":\"Occitan\",\"location\":\"France\",\"id\":1154,\"tag\":\"oc-FR\",\"version\":\"Release V\"},\"or\":{\"language\":\"Odia\",\"location\":null,\"id\":72,\"tag\":\"or\",\"version\":\"Release 7\"},\"or-in\":{\"language\":\"Odia\",\"location\":\"India\",\"id\":1096,\"tag\":\"or-IN\",\"version\":\"Release V\"},\"om\":{\"language\":\"Oromo\",\"location\":null,\"id\":114,\"tag\":\"om\",\"version\":\"Release 8.1\"},\"om-et\":{\"language\":\"Oromo\",\"location\":\"Ethiopia\",\"id\":1138,\"tag\":\"om-ET\",\"version\":\"Release 8.1\"},\"om-ke\":{\"language\":\"Oromo\",\"location\":\"Kenya\",\"id\":4096,\"tag\":\"om-KE\",\"version\":\"Release 10\"},\"os\":{\"language\":\"Ossetian\",\"location\":null,\"id\":4096,\"tag\":\"os\",\"version\":\"Release 10\"},\"os-ge\":{\"language\":\"Ossetian\",\"location\":\"Cyrillic, Georgia\",\"id\":4096,\"tag\":\"os-GE\",\"version\":\"Release 10\"},\"os-ru\":{\"language\":\"Ossetian\",\"location\":\"Cyrillic, Russia\",\"id\":4096,\"tag\":\"os-RU\",\"version\":\"Release 10\"},\"ps\":{\"language\":\"Pashto\",\"location\":null,\"id\":99,\"tag\":\"ps\",\"version\":\"Release 7\"},\"ps-af\":{\"language\":\"Pashto\",\"location\":\"Afghanistan\",\"id\":1123,\"tag\":\"ps-AF\",\"version\":\"Release E2\"},\"ps-pk\":{\"language\":\"Pashto\",\"location\":\"Pakistan\",\"id\":4096,\"tag\":\"ps-PK\",\"version\":\"Release 10.5\"},\"fa\":{\"language\":\"Persian\",\"location\":null,\"id\":41,\"tag\":\"fa\",\"version\":\"Release 7\"},\"fa-af\":{\"language\":\"Persian\",\"location\":\"Afghanistan\",\"id\":4096,\"tag\":\"fa-AF\",\"version\":\"Release 10\"},\"fa-ir\":{\"language\":\"Persian\",\"location\":\"Iran\",\"id\":1065,\"tag\":\"fa-IR\",\"version\":\"Release B\"},\"pl\":{\"language\":\"Polish\",\"location\":null,\"id\":21,\"tag\":\"pl\",\"version\":\"Release 7\"},\"pl-pl\":{\"language\":\"Polish\",\"location\":\"Poland\",\"id\":1045,\"tag\":\"pl-PL\",\"version\":\"Release A\"},\"pt\":{\"language\":\"Portuguese\",\"location\":null,\"id\":22,\"tag\":\"pt\",\"version\":\"Release 7\"},\"pt-ao\":{\"language\":\"Portuguese\",\"location\":\"Angola\",\"id\":4096,\"tag\":\"pt-AO\",\"version\":\"Release 8.1\"},\"pt-br\":{\"language\":\"Portuguese\",\"location\":\"Brazil\",\"id\":1046,\"tag\":\"pt-BR\",\"version\":\"Release A\"},\"pt-cv\":{\"language\":\"Portuguese\",\"location\":\"Cabo Verde\",\"id\":4096,\"tag\":\"pt-CV\",\"version\":\"Release 10\"},\"pt-gq\":{\"language\":\"Portuguese\",\"location\":\"Equatorial Guinea\",\"id\":4096,\"tag\":\"pt-GQ\",\"version\":\"Release 10.2\"},\"pt-gw\":{\"language\":\"Portuguese\",\"location\":\"Guinea-Bissau\",\"id\":4096,\"tag\":\"pt-GW\",\"version\":\"Release 10\"},\"pt-lu\":{\"language\":\"Portuguese\",\"location\":\"Luxembourg\",\"id\":4096,\"tag\":\"pt-LU\",\"version\":\"Release 10.2\"},\"pt-mo\":{\"language\":\"Portuguese\",\"location\":\"Macao SAR\",\"id\":4096,\"tag\":\"pt-MO\",\"version\":\"Release 10\"},\"pt-mz\":{\"language\":\"Portuguese\",\"location\":\"Mozambique\",\"id\":4096,\"tag\":\"pt-MZ\",\"version\":\"Release 10\"},\"pt-pt\":{\"language\":\"Portuguese\",\"location\":\"Portugal\",\"id\":2070,\"tag\":\"pt-PT\",\"version\":\"Release A\"},\"pt-st\":{\"language\":\"Portuguese\",\"location\":\"São Tomé and Príncipe\",\"id\":4096,\"tag\":\"pt-ST\",\"version\":\"Release 10\"},\"pt-ch\":{\"language\":\"Portuguese\",\"location\":\"Switzerland\",\"id\":4096,\"tag\":\"pt-CH\",\"version\":\"Release 10.2\"},\"pt-tl\":{\"language\":\"Portuguese\",\"location\":\"Timor-Leste\",\"id\":4096,\"tag\":\"pt-TL\",\"version\":\"Release 10\"},\"prg-001\":{\"language\":\"Prussian\",\"location\":null,\"id\":4096,\"tag\":\"prg-001\",\"version\":\"Release 10.1\"},\"qps-ploca\":{\"language\":\"Pseudo Language\",\"location\":\"Pseudo locale for east Asian/complex script localization testing\",\"id\":1534,\"tag\":\"qps-ploca\",\"version\":\"Release 7\"},\"qps-ploc\":{\"language\":\"Pseudo Language\",\"location\":\"Pseudo locale used for localization testing\",\"id\":1281,\"tag\":\"qps-ploc\",\"version\":\"Release 7\"},\"qps-plocm\":{\"language\":\"Pseudo Language\",\"location\":\"Pseudo locale used for localization testing of mirrored locales\",\"id\":2559,\"tag\":\"qps-plocm\",\"version\":\"Release 7\"},\"pa\":{\"language\":\"Punjabi\",\"location\":null,\"id\":70,\"tag\":\"pa\",\"version\":\"Release 7\"},\"pa-arab\":{\"language\":\"Punjabi\",\"location\":null,\"id\":31814,\"tag\":\"pa-Arab\",\"version\":\"Release 8\"},\"pa-in\":{\"language\":\"Punjabi\",\"location\":\"India\",\"id\":1094,\"tag\":\"pa-IN\",\"version\":\"Release D\"},\"pa-arab-pk\":{\"language\":\"Punjabi\",\"location\":\"Islamic Republic of Pakistan\",\"id\":2118,\"tag\":\"pa-Arab-PK\",\"version\":\"Release 8\"},\"quz\":{\"language\":\"Quechua\",\"location\":null,\"id\":107,\"tag\":\"quz\",\"version\":\"Release 7\"},\"quz-bo\":{\"language\":\"Quechua\",\"location\":\"Bolivia\",\"id\":1131,\"tag\":\"quz-BO\",\"version\":\"Release E1\"},\"quz-ec\":{\"language\":\"Quechua\",\"location\":\"Ecuador\",\"id\":2155,\"tag\":\"quz-EC\",\"version\":\"Release E1\"},\"quz-pe\":{\"language\":\"Quechua\",\"location\":\"Peru\",\"id\":3179,\"tag\":\"quz-PE\",\"version\":\"Release E1\"},\"ksh\":{\"language\":\"Ripuarian\",\"location\":null,\"id\":4096,\"tag\":\"ksh\",\"version\":\"Release 10\"},\"ksh-de\":{\"language\":\"Ripuarian\",\"location\":\"Germany\",\"id\":4096,\"tag\":\"ksh-DE\",\"version\":\"Release 10\"},\"ro\":{\"language\":\"Romanian\",\"location\":null,\"id\":24,\"tag\":\"ro\",\"version\":\"Release 7\"},\"ro-md\":{\"language\":\"Romanian\",\"location\":\"Moldova\",\"id\":2072,\"tag\":\"ro-MD\",\"version\":\"Release 8.1\"},\"ro-ro\":{\"language\":\"Romanian\",\"location\":\"Romania\",\"id\":1048,\"tag\":\"ro-RO\",\"version\":\"Release A\"},\"rm\":{\"language\":\"Romansh\",\"location\":null,\"id\":23,\"tag\":\"rm\",\"version\":\"Release 7\"},\"rm-ch\":{\"language\":\"Romansh\",\"location\":\"Switzerland\",\"id\":1047,\"tag\":\"rm-CH\",\"version\":\"Release E2\"},\"rof\":{\"language\":\"Rombo\",\"location\":null,\"id\":4096,\"tag\":\"rof\",\"version\":\"Release 10\"},\"rof-tz\":{\"language\":\"Rombo\",\"location\":\"Tanzania\",\"id\":4096,\"tag\":\"rof-TZ\",\"version\":\"Release 10\"},\"rn\":{\"language\":\"Rundi\",\"location\":null,\"id\":4096,\"tag\":\"rn\",\"version\":\"Release 10\"},\"rn-bi\":{\"language\":\"Rundi\",\"location\":\"Burundi\",\"id\":4096,\"tag\":\"rn-BI\",\"version\":\"Release 10\"},\"ru\":{\"language\":\"Russian\",\"location\":null,\"id\":25,\"tag\":\"ru\",\"version\":\"Release 7\"},\"ru-by\":{\"language\":\"Russian\",\"location\":\"Belarus\",\"id\":4096,\"tag\":\"ru-BY\",\"version\":\"Release 10\"},\"ru-kz\":{\"language\":\"Russian\",\"location\":\"Kazakhstan\",\"id\":4096,\"tag\":\"ru-KZ\",\"version\":\"Release 10\"},\"ru-kg\":{\"language\":\"Russian\",\"location\":\"Kyrgyzstan\",\"id\":4096,\"tag\":\"ru-KG\",\"version\":\"Release 10\"},\"ru-md\":{\"language\":\"Russian\",\"location\":\"Moldova\",\"id\":2073,\"tag\":\"ru-MD\",\"version\":\"Release 10\"},\"ru-ru\":{\"language\":\"Russian\",\"location\":\"Russia\",\"id\":1049,\"tag\":\"ru-RU\",\"version\":\"Release A\"},\"ru-ua\":{\"language\":\"Russian\",\"location\":\"Ukraine\",\"id\":4096,\"tag\":\"ru-UA\",\"version\":\"Release 10\"},\"rwk\":{\"language\":\"Rwa\",\"location\":null,\"id\":4096,\"tag\":\"rwk\",\"version\":\"Release 10\"},\"rwk-tz\":{\"language\":\"Rwa\",\"location\":\"Tanzania\",\"id\":4096,\"tag\":\"rwk-TZ\",\"version\":\"Release 10\"},\"ssy\":{\"language\":\"Saho\",\"location\":null,\"id\":4096,\"tag\":\"ssy\",\"version\":\"Release 10\"},\"ssy-er\":{\"language\":\"Saho\",\"location\":\"Eritrea\",\"id\":4096,\"tag\":\"ssy-ER\",\"version\":\"Release 10\"},\"sah\":{\"language\":\"Sakha\",\"location\":null,\"id\":133,\"tag\":\"sah\",\"version\":\"Release 7\"},\"sah-ru\":{\"language\":\"Sakha\",\"location\":\"Russia\",\"id\":1157,\"tag\":\"sah-RU\",\"version\":\"Release V\"},\"saq\":{\"language\":\"Samburu\",\"location\":null,\"id\":4096,\"tag\":\"saq\",\"version\":\"Release 10\"},\"saq-ke\":{\"language\":\"Samburu\",\"location\":\"Kenya\",\"id\":4096,\"tag\":\"saq-KE\",\"version\":\"Release 10\"},\"smn\":{\"language\":\"Sami (Inari)\",\"location\":null,\"id\":28731,\"tag\":\"smn\",\"version\":\"Windows 7\"},\"smn-fi\":{\"language\":\"Sami (Inari)\",\"location\":\"Finland\",\"id\":9275,\"tag\":\"smn-FI\",\"version\":\"Release E1\"},\"smj\":{\"language\":\"Sami (Lule)\",\"location\":null,\"id\":31803,\"tag\":\"smj\",\"version\":\"Windows 7\"},\"smj-no\":{\"language\":\"Sami (Lule)\",\"location\":\"Norway\",\"id\":4155,\"tag\":\"smj-NO\",\"version\":\"Release E1\"},\"smj-se\":{\"language\":\"Sami (Lule)\",\"location\":\"Sweden\",\"id\":5179,\"tag\":\"smj-SE\",\"version\":\"Release E1\"},\"se\":{\"language\":\"Sami (Northern)\",\"location\":null,\"id\":59,\"tag\":\"se\",\"version\":\"Release 7\"},\"se-fi\":{\"language\":\"Sami (Northern)\",\"location\":\"Finland\",\"id\":3131,\"tag\":\"se-FI\",\"version\":\"Release E1\"},\"se-no\":{\"language\":\"Sami (Northern)\",\"location\":\"Norway\",\"id\":1083,\"tag\":\"se-NO\",\"version\":\"Release E1\"},\"se-se\":{\"language\":\"Sami (Northern)\",\"location\":\"Sweden\",\"id\":2107,\"tag\":\"se-SE\",\"version\":\"Release E1\"},\"sms\":{\"language\":\"Sami (Skolt)\",\"location\":null,\"id\":29755,\"tag\":\"sms\",\"version\":\"Windows 7\"},\"sms-fi\":{\"language\":\"Sami (Skolt)\",\"location\":\"Finland\",\"id\":8251,\"tag\":\"sms-FI\",\"version\":\"Release E1\"},\"sma\":{\"language\":\"Sami (Southern)\",\"location\":null,\"id\":30779,\"tag\":\"sma\",\"version\":\"Windows 7\"},\"sma-no\":{\"language\":\"Sami (Southern)\",\"location\":\"Norway\",\"id\":6203,\"tag\":\"sma-NO\",\"version\":\"Release E1\"},\"sma-se\":{\"language\":\"Sami (Southern)\",\"location\":\"Sweden\",\"id\":7227,\"tag\":\"sma-SE\",\"version\":\"Release E1\"},\"sg\":{\"language\":\"Sango\",\"location\":null,\"id\":4096,\"tag\":\"sg\",\"version\":\"Release 10\"},\"sg-cf\":{\"language\":\"Sango\",\"location\":\"Central African Republic\",\"id\":4096,\"tag\":\"sg-CF\",\"version\":\"Release 10\"},\"sbp\":{\"language\":\"Sangu\",\"location\":null,\"id\":4096,\"tag\":\"sbp\",\"version\":\"Release 10\"},\"sbp-tz\":{\"language\":\"Sangu\",\"location\":\"Tanzania\",\"id\":4096,\"tag\":\"sbp-TZ\",\"version\":\"Release 10\"},\"sa\":{\"language\":\"Sanskrit\",\"location\":null,\"id\":79,\"tag\":\"sa\",\"version\":\"Release 7\"},\"sa-in\":{\"language\":\"Sanskrit\",\"location\":\"India\",\"id\":1103,\"tag\":\"sa-IN\",\"version\":\"Release C\"},\"gd\":{\"language\":\"Scottish Gaelic\",\"location\":null,\"id\":145,\"tag\":\"gd\",\"version\":\"Windows 7\"},\"gd-gb\":{\"language\":\"Scottish Gaelic\",\"location\":\"United Kingdom\",\"id\":1169,\"tag\":\"gd-GB\",\"version\":\"Release 7\"},\"seh\":{\"language\":\"Sena\",\"location\":null,\"id\":4096,\"tag\":\"seh\",\"version\":\"Release 10\"},\"seh-mz\":{\"language\":\"Sena\",\"location\":\"Mozambique\",\"id\":4096,\"tag\":\"seh-MZ\",\"version\":\"Release 10\"},\"sr-cyrl\":{\"language\":\"Serbian (Cyrillic)\",\"location\":null,\"id\":27674,\"tag\":\"sr-Cyrl\",\"version\":\"Windows 7\"},\"sr-cyrl-ba\":{\"language\":\"Serbian (Cyrillic)\",\"location\":\"Bosnia and Herzegovina\",\"id\":7194,\"tag\":\"sr-Cyrl-BA\",\"version\":\"Release E1\"},\"sr-cyrl-me\":{\"language\":\"Serbian (Cyrillic)\",\"location\":\"Montenegro\",\"id\":12314,\"tag\":\"sr-Cyrl-ME\",\"version\":\"Release 7\"},\"sr-cyrl-rs\":{\"language\":\"Serbian (Cyrillic)\",\"location\":\"Serbia\",\"id\":10266,\"tag\":\"sr-Cyrl-RS\",\"version\":\"Release 7\"},\"sr-cyrl-cs\":{\"language\":\"Serbian (Cyrillic)\",\"location\":\"Serbia and Montenegro (Former)\",\"id\":3098,\"tag\":\"sr-Cyrl-CS\",\"version\":\"Release B\"},\"sr-latn\":{\"language\":\"Serbian (Latin)\",\"location\":null,\"id\":28698,\"tag\":\"sr-Latn\",\"version\":\"Windows 7\"},\"sr\":{\"language\":\"Serbian (Latin)\",\"location\":null,\"id\":31770,\"tag\":\"sr\",\"version\":\"Release 7\"},\"sr-latn-ba\":{\"language\":\"Serbian (Latin)\",\"location\":\"Bosnia and Herzegovina\",\"id\":6170,\"tag\":\"sr-Latn-BA\",\"version\":\"Release E1\"},\"sr-latn-me\":{\"language\":\"Serbian (Latin)\",\"location\":\"Montenegro\",\"id\":11290,\"tag\":\"sr-Latn-ME\",\"version\":\"Release 7\"},\"sr-latn-rs\":{\"language\":\"Serbian (Latin)\",\"location\":\"Serbia\",\"id\":9242,\"tag\":\"sr-Latn-RS\",\"version\":\"Release 7\"},\"sr-latn-cs\":{\"language\":\"Serbian (Latin)\",\"location\":\"Serbia and Montenegro (Former)\",\"id\":2074,\"tag\":\"sr-Latn-CS\",\"version\":\"Release B\"},\"nso\":{\"language\":\"Sesotho sa Leboa\",\"location\":null,\"id\":108,\"tag\":\"nso\",\"version\":\"Release 7\"},\"nso-za\":{\"language\":\"Sesotho sa Leboa\",\"location\":\"South Africa\",\"id\":1132,\"tag\":\"nso-ZA\",\"version\":\"Release E1\"},\"tn\":{\"language\":\"Setswana\",\"location\":null,\"id\":50,\"tag\":\"tn\",\"version\":\"Release 7\"},\"tn-bw\":{\"language\":\"Setswana\",\"location\":\"Botswana\",\"id\":2098,\"tag\":\"tn-BW\",\"version\":\"Release 8\"},\"tn-za\":{\"language\":\"Setswana\",\"location\":\"South Africa\",\"id\":1074,\"tag\":\"tn-ZA\",\"version\":\"Release E1\"},\"ksb\":{\"language\":\"Shambala\",\"location\":null,\"id\":4096,\"tag\":\"ksb\",\"version\":\"Release 10\"},\"ksb-tz\":{\"language\":\"Shambala\",\"location\":\"Tanzania\",\"id\":4096,\"tag\":\"ksb-TZ\",\"version\":\"Release 10\"},\"sn\":{\"language\":\"Shona\",\"location\":null,\"id\":4096,\"tag\":\"sn\",\"version\":\"Release 8.1\"},\"sn-latn\":{\"language\":\"Shona\",\"location\":\"Latin\",\"id\":4096,\"tag\":\"sn-Latn\",\"version\":\"Release 8.1\"},\"sn-latn-zw\":{\"language\":\"Shona\",\"location\":\"Zimbabwe\",\"id\":4096,\"tag\":\"sn-Latn-ZW\",\"version\":\"Release 8.1\"},\"sd\":{\"language\":\"Sindhi\",\"location\":null,\"id\":89,\"tag\":\"sd\",\"version\":\"Release 8\"},\"sd-arab\":{\"language\":\"Sindhi\",\"location\":null,\"id\":31833,\"tag\":\"sd-Arab\",\"version\":\"Release 8\"},\"sd-arab-pk\":{\"language\":\"Sindhi\",\"location\":\"Islamic Republic of Pakistan\",\"id\":2137,\"tag\":\"sd-Arab-PK\",\"version\":\"Release 8\"},\"si\":{\"language\":\"Sinhala\",\"location\":null,\"id\":91,\"tag\":\"si\",\"version\":\"Release 7\"},\"si-lk\":{\"language\":\"Sinhala\",\"location\":\"Sri Lanka\",\"id\":1115,\"tag\":\"si-LK\",\"version\":\"Release V\"},\"sk\":{\"language\":\"Slovak\",\"location\":null,\"id\":27,\"tag\":\"sk\",\"version\":\"Release 7\"},\"sk-sk\":{\"language\":\"Slovak\",\"location\":\"Slovakia\",\"id\":1051,\"tag\":\"sk-SK\",\"version\":\"Release A\"},\"sl\":{\"language\":\"Slovenian\",\"location\":null,\"id\":36,\"tag\":\"sl\",\"version\":\"Release 7\"},\"sl-si\":{\"language\":\"Slovenian\",\"location\":\"Slovenia\",\"id\":1060,\"tag\":\"sl-SI\",\"version\":\"Release A\"},\"xog\":{\"language\":\"Soga\",\"location\":null,\"id\":4096,\"tag\":\"xog\",\"version\":\"Release 10\"},\"xog-ug\":{\"language\":\"Soga\",\"location\":\"Uganda\",\"id\":4096,\"tag\":\"xog-UG\",\"version\":\"Release 10\"},\"so\":{\"language\":\"Somali\",\"location\":null,\"id\":119,\"tag\":\"so\",\"version\":\"Release 8.1\"},\"so-dj\":{\"language\":\"Somali\",\"location\":\"Djibouti\",\"id\":4096,\"tag\":\"so-DJ\",\"version\":\"Release 10\"},\"so-et\":{\"language\":\"Somali\",\"location\":\"Ethiopia\",\"id\":4096,\"tag\":\"so-ET\",\"version\":\"Release 10\"},\"so-ke\":{\"language\":\"Somali\",\"location\":\"Kenya\",\"id\":4096,\"tag\":\"so-KE\",\"version\":\"Release 10\"},\"so-so\":{\"language\":\"Somali\",\"location\":\"Somalia\",\"id\":1143,\"tag\":\"so-SO\",\"version\":\"Release 8.1\"},\"st\":{\"language\":\"Sotho\",\"location\":null,\"id\":48,\"tag\":\"st\",\"version\":\"Release 8.1\"},\"st-za\":{\"language\":\"Sotho\",\"location\":\"South Africa\",\"id\":1072,\"tag\":\"st-ZA\",\"version\":\"Release 8.1\"},\"nr\":{\"language\":\"South Ndebele\",\"location\":null,\"id\":4096,\"tag\":\"nr\",\"version\":\"Release 10\"},\"nr-za\":{\"language\":\"South Ndebele\",\"location\":\"South Africa\",\"id\":4096,\"tag\":\"nr-ZA\",\"version\":\"Release 10\"},\"st-ls\":{\"language\":\"Southern Sotho\",\"location\":\"Lesotho\",\"id\":4096,\"tag\":\"st-LS\",\"version\":\"Release 10\"},\"es\":{\"language\":\"Spanish\",\"location\":null,\"id\":10,\"tag\":\"es\",\"version\":\"Release 7\"},\"es-ar\":{\"language\":\"Spanish\",\"location\":\"Argentina\",\"id\":11274,\"tag\":\"es-AR\",\"version\":\"Release B\"},\"es-bz\":{\"language\":\"Spanish\",\"location\":\"Belize\",\"id\":4096,\"tag\":\"es-BZ\",\"version\":\"Release 10.3\"},\"es-ve\":{\"language\":\"Spanish\",\"location\":\"Bolivarian Republic of Venezuela\",\"id\":8202,\"tag\":\"es-VE\",\"version\":\"Release B\"},\"es-bo\":{\"language\":\"Spanish\",\"location\":\"Bolivia\",\"id\":16394,\"tag\":\"es-BO\",\"version\":\"Release B\"},\"es-br\":{\"language\":\"Spanish\",\"location\":\"Brazil\",\"id\":4096,\"tag\":\"es-BR\",\"version\":\"Release 10.2\"},\"es-cl\":{\"language\":\"Spanish\",\"location\":\"Chile\",\"id\":13322,\"tag\":\"es-CL\",\"version\":\"Release B\"},\"es-co\":{\"language\":\"Spanish\",\"location\":\"Colombia\",\"id\":9226,\"tag\":\"es-CO\",\"version\":\"Release B\"},\"es-cr\":{\"language\":\"Spanish\",\"location\":\"Costa Rica\",\"id\":5130,\"tag\":\"es-CR\",\"version\":\"Release B\"},\"es-cu\":{\"language\":\"Spanish\",\"location\":\"Cuba\",\"id\":23562,\"tag\":\"es-CU\",\"version\":\"Release 10\"},\"es-do\":{\"language\":\"Spanish\",\"location\":\"Dominican Republic\",\"id\":7178,\"tag\":\"es-DO\",\"version\":\"Release B\"},\"es-ec\":{\"language\":\"Spanish\",\"location\":\"Ecuador\",\"id\":12298,\"tag\":\"es-EC\",\"version\":\"Release B\"},\"es-sv\":{\"language\":\"Spanish\",\"location\":\"El Salvador\",\"id\":17418,\"tag\":\"es-SV\",\"version\":\"Release B\"},\"es-gq\":{\"language\":\"Spanish\",\"location\":\"Equatorial Guinea\",\"id\":4096,\"tag\":\"es-GQ\",\"version\":\"Release 10\"},\"es-gt\":{\"language\":\"Spanish\",\"location\":\"Guatemala\",\"id\":4106,\"tag\":\"es-GT\",\"version\":\"Release B\"},\"es-hn\":{\"language\":\"Spanish\",\"location\":\"Honduras\",\"id\":18442,\"tag\":\"es-HN\",\"version\":\"Release B\"},\"es-419\":{\"language\":\"Spanish\",\"location\":\"Latin America\",\"id\":22538,\"tag\":\"es-419\",\"version\":\"Release 8.1\"},\"es-mx\":{\"language\":\"Spanish\",\"location\":\"Mexico\",\"id\":2058,\"tag\":\"es-MX\",\"version\":\"Release A\"},\"es-ni\":{\"language\":\"Spanish\",\"location\":\"Nicaragua\",\"id\":19466,\"tag\":\"es-NI\",\"version\":\"Release B\"},\"es-pa\":{\"language\":\"Spanish\",\"location\":\"Panama\",\"id\":6154,\"tag\":\"es-PA\",\"version\":\"Release B\"},\"es-py\":{\"language\":\"Spanish\",\"location\":\"Paraguay\",\"id\":15370,\"tag\":\"es-PY\",\"version\":\"Release B\"},\"es-pe\":{\"language\":\"Spanish\",\"location\":\"Peru\",\"id\":10250,\"tag\":\"es-PE\",\"version\":\"Release B\"},\"es-ph\":{\"language\":\"Spanish\",\"location\":\"Philippines\",\"id\":4096,\"tag\":\"es-PH\",\"version\":\"Release 10\"},\"es-pr\":{\"language\":\"Spanish\",\"location\":\"Puerto Rico\",\"id\":20490,\"tag\":\"es-PR\",\"version\":\"Release B\"},\"es-es_tradnl\":{\"language\":\"Spanish\",\"location\":\"Spain\",\"id\":1034,\"tag\":\"es-ES_tradnl\",\"version\":\"Release A\"},\"es-es\":{\"language\":\"Spanish\",\"location\":\"Spain\",\"id\":3082,\"tag\":\"es-ES\",\"version\":\"Release A\"},\"es-us\":{\"language\":\"Spanish\",\"location\":\"UnitedStates\",\"id\":21514,\"tag\":\"es-US\",\"version\":\"Release V\"},\"es-uy\":{\"language\":\"Spanish\",\"location\":\"Uruguay\",\"id\":14346,\"tag\":\"es-UY\",\"version\":\"Release B\"},\"zgh\":{\"language\":\"Standard Moroccan Tamazight\",\"location\":null,\"id\":4096,\"tag\":\"zgh\",\"version\":\"Release 8.1\"},\"zgh-tfng-ma\":{\"language\":\"Standard Moroccan Tamazight\",\"location\":\"Morocco\",\"id\":4096,\"tag\":\"zgh-Tfng-MA\",\"version\":\"Release 8.1\"},\"zgh-tfng\":{\"language\":\"Standard Moroccan Tamazight\",\"location\":\"Tifinagh\",\"id\":4096,\"tag\":\"zgh-Tfng\",\"version\":\"Release 8.1\"},\"ss\":{\"language\":\"Swati\",\"location\":null,\"id\":4096,\"tag\":\"ss\",\"version\":\"Release 10\"},\"ss-za\":{\"language\":\"Swati\",\"location\":\"South Africa\",\"id\":4096,\"tag\":\"ss-ZA\",\"version\":\"Release 10\"},\"ss-sz\":{\"language\":\"Swati\",\"location\":\"Swaziland\",\"id\":4096,\"tag\":\"ss-SZ\",\"version\":\"Release 10\"},\"sv\":{\"language\":\"Swedish\",\"location\":null,\"id\":29,\"tag\":\"sv\",\"version\":\"Release 7\"},\"sv-ax\":{\"language\":\"Swedish\",\"location\":\"Åland Islands\",\"id\":4096,\"tag\":\"sv-AX\",\"version\":\"Release 10\"},\"sv-fi\":{\"language\":\"Swedish\",\"location\":\"Finland\",\"id\":2077,\"tag\":\"sv-FI\",\"version\":\"Release B\"},\"sv-se\":{\"language\":\"Swedish\",\"location\":\"Sweden\",\"id\":1053,\"tag\":\"sv-SE\",\"version\":\"Release A\"},\"syr\":{\"language\":\"Syriac\",\"location\":null,\"id\":90,\"tag\":\"syr\",\"version\":\"Release 7\"},\"syr-sy\":{\"language\":\"Syriac\",\"location\":\"Syria\",\"id\":1114,\"tag\":\"syr-SY\",\"version\":\"Release D\"},\"shi\":{\"language\":\"Tachelhit\",\"location\":null,\"id\":4096,\"tag\":\"shi\",\"version\":\"Release 10\"},\"shi-tfng\":{\"language\":\"Tachelhit\",\"location\":\"Tifinagh\",\"id\":4096,\"tag\":\"shi-Tfng\",\"version\":\"Release 10\"},\"shi-tfng-ma\":{\"language\":\"Tachelhit\",\"location\":\"Tifinagh, Morocco\",\"id\":4096,\"tag\":\"shi-Tfng-MA\",\"version\":\"Release 10\"},\"shi-latn\":{\"language\":\"Tachelhit (Latin)\",\"location\":null,\"id\":4096,\"tag\":\"shi-Latn\",\"version\":\"Release 10\"},\"shi-latn-ma\":{\"language\":\"Tachelhit (Latin)\",\"location\":\"Morocco\",\"id\":4096,\"tag\":\"shi-Latn-MA\",\"version\":\"Release 10\"},\"dav\":{\"language\":\"Taita\",\"location\":null,\"id\":4096,\"tag\":\"dav\",\"version\":\"Release 10\"},\"dav-ke\":{\"language\":\"Taita\",\"location\":\"Kenya\",\"id\":4096,\"tag\":\"dav-KE\",\"version\":\"Release 10\"},\"tg\":{\"language\":\"Tajik (Cyrillic)\",\"location\":null,\"id\":40,\"tag\":\"tg\",\"version\":\"Release 7\"},\"tg-cyrl\":{\"language\":\"Tajik (Cyrillic)\",\"location\":null,\"id\":31784,\"tag\":\"tg-Cyrl\",\"version\":\"Windows 7\"},\"tg-cyrl-tj\":{\"language\":\"Tajik (Cyrillic)\",\"location\":\"Tajikistan\",\"id\":1064,\"tag\":\"tg-Cyrl-TJ\",\"version\":\"Release V\"},\"tzm\":{\"language\":\"Tamazight (Latin)\",\"location\":null,\"id\":95,\"tag\":\"tzm\",\"version\":\"Release 7\"},\"tzm-latn\":{\"language\":\"Tamazight (Latin)\",\"location\":null,\"id\":31839,\"tag\":\"tzm-Latn\",\"version\":\"Windows 7\"},\"tzm-latn-dz\":{\"language\":\"Tamazight (Latin)\",\"location\":\"Algeria\",\"id\":2143,\"tag\":\"tzm-Latn-DZ\",\"version\":\"Release V\"},\"ta\":{\"language\":\"Tamil\",\"location\":null,\"id\":73,\"tag\":\"ta\",\"version\":\"Release 7\"},\"ta-in\":{\"language\":\"Tamil\",\"location\":\"India\",\"id\":1097,\"tag\":\"ta-IN\",\"version\":\"Release C\"},\"ta-my\":{\"language\":\"Tamil\",\"location\":\"Malaysia\",\"id\":4096,\"tag\":\"ta-MY\",\"version\":\"Release 10\"},\"ta-sg\":{\"language\":\"Tamil\",\"location\":\"Singapore\",\"id\":4096,\"tag\":\"ta-SG\",\"version\":\"Release 10\"},\"ta-lk\":{\"language\":\"Tamil\",\"location\":\"Sri Lanka\",\"id\":2121,\"tag\":\"ta-LK\",\"version\":\"Release 8\"},\"twq\":{\"language\":\"Tasawaq\",\"location\":null,\"id\":4096,\"tag\":\"twq\",\"version\":\"Release 10\"},\"twq-ne\":{\"language\":\"Tasawaq\",\"location\":\"Niger\",\"id\":4096,\"tag\":\"twq-NE\",\"version\":\"Release 10\"},\"tt\":{\"language\":\"Tatar\",\"location\":null,\"id\":68,\"tag\":\"tt\",\"version\":\"Release 7\"},\"tt-ru\":{\"language\":\"Tatar\",\"location\":\"Russia\",\"id\":1092,\"tag\":\"tt-RU\",\"version\":\"Release D\"},\"te\":{\"language\":\"Telugu\",\"location\":null,\"id\":74,\"tag\":\"te\",\"version\":\"Release 7\"},\"te-in\":{\"language\":\"Telugu\",\"location\":\"India\",\"id\":1098,\"tag\":\"te-IN\",\"version\":\"Release D\"},\"teo\":{\"language\":\"Teso\",\"location\":null,\"id\":4096,\"tag\":\"teo\",\"version\":\"Release 10\"},\"teo-ke\":{\"language\":\"Teso\",\"location\":\"Kenya\",\"id\":4096,\"tag\":\"teo-KE\",\"version\":\"Release 10\"},\"teo-ug\":{\"language\":\"Teso\",\"location\":\"Uganda\",\"id\":4096,\"tag\":\"teo-UG\",\"version\":\"Release 10\"},\"th\":{\"language\":\"Thai\",\"location\":null,\"id\":30,\"tag\":\"th\",\"version\":\"Release 7\"},\"th-th\":{\"language\":\"Thai\",\"location\":\"Thailand\",\"id\":1054,\"tag\":\"th-TH\",\"version\":\"Release B\"},\"bo\":{\"language\":\"Tibetan\",\"location\":null,\"id\":81,\"tag\":\"bo\",\"version\":\"Release 7\"},\"bo-in\":{\"language\":\"Tibetan\",\"location\":\"India\",\"id\":4096,\"tag\":\"bo-IN\",\"version\":\"Release 10\"},\"bo-cn\":{\"language\":\"Tibetan\",\"location\":\"People's Republic of China\",\"id\":1105,\"tag\":\"bo-CN\",\"version\":\"Release V\"},\"tig\":{\"language\":\"Tigre\",\"location\":null,\"id\":4096,\"tag\":\"tig\",\"version\":\"Release 10\"},\"tig-er\":{\"language\":\"Tigre\",\"location\":\"Eritrea\",\"id\":4096,\"tag\":\"tig-ER\",\"version\":\"Release 10\"},\"ti\":{\"language\":\"Tigrinya\",\"location\":null,\"id\":115,\"tag\":\"ti\",\"version\":\"Release 8\"},\"ti-er\":{\"language\":\"Tigrinya\",\"location\":\"Eritrea\",\"id\":2163,\"tag\":\"ti-ER\",\"version\":\"Release 8\"},\"ti-et\":{\"language\":\"Tigrinya\",\"location\":\"Ethiopia\",\"id\":1139,\"tag\":\"ti-ET\",\"version\":\"Release 8\"},\"to\":{\"language\":\"Tongan\",\"location\":null,\"id\":4096,\"tag\":\"to\",\"version\":\"Release 10\"},\"to-to\":{\"language\":\"Tongan\",\"location\":\"Tonga\",\"id\":4096,\"tag\":\"to-TO\",\"version\":\"Release 10\"},\"ts\":{\"language\":\"Tsonga\",\"location\":null,\"id\":49,\"tag\":\"ts\",\"version\":\"Release 8.1\"},\"ts-za\":{\"language\":\"Tsonga\",\"location\":\"South Africa\",\"id\":1073,\"tag\":\"ts-ZA\",\"version\":\"Release 8.1\"},\"tr\":{\"language\":\"Turkish\",\"location\":null,\"id\":31,\"tag\":\"tr\",\"version\":\"Release 7\"},\"tr-cy\":{\"language\":\"Turkish\",\"location\":\"Cyprus\",\"id\":4096,\"tag\":\"tr-CY\",\"version\":\"Release 10\"},\"tr-tr\":{\"language\":\"Turkish\",\"location\":\"Turkey\",\"id\":1055,\"tag\":\"tr-TR\",\"version\":\"Release A\"},\"tk\":{\"language\":\"Turkmen\",\"location\":null,\"id\":66,\"tag\":\"tk\",\"version\":\"Release 7\"},\"tk-tm\":{\"language\":\"Turkmen\",\"location\":\"Turkmenistan\",\"id\":1090,\"tag\":\"tk-TM\",\"version\":\"Release V\"},\"uk\":{\"language\":\"Ukrainian\",\"location\":null,\"id\":34,\"tag\":\"uk\",\"version\":\"Release 7\"},\"uk-ua\":{\"language\":\"Ukrainian\",\"location\":\"Ukraine\",\"id\":1058,\"tag\":\"uk-UA\",\"version\":\"Release B\"},\"hsb\":{\"language\":\"Upper Sorbian\",\"location\":null,\"id\":46,\"tag\":\"hsb\",\"version\":\"Release 7\"},\"hsb-de\":{\"language\":\"Upper Sorbian\",\"location\":\"Germany\",\"id\":1070,\"tag\":\"hsb-DE\",\"version\":\"Release V\"},\"ur\":{\"language\":\"Urdu\",\"location\":null,\"id\":32,\"tag\":\"ur\",\"version\":\"Release 7\"},\"ur-in\":{\"language\":\"Urdu\",\"location\":\"India\",\"id\":2080,\"tag\":\"ur-IN\",\"version\":\"Release 8.1\"},\"ur-pk\":{\"language\":\"Urdu\",\"location\":\"Islamic Republic of Pakistan\",\"id\":1056,\"tag\":\"ur-PK\",\"version\":\"Release C\"},\"ug\":{\"language\":\"Uyghur\",\"location\":null,\"id\":128,\"tag\":\"ug\",\"version\":\"Release 7\"},\"ug-cn\":{\"language\":\"Uyghur\",\"location\":\"People's Republic of China\",\"id\":1152,\"tag\":\"ug-CN\",\"version\":\"Release V\"},\"uz-arab\":{\"language\":\"Uzbek\",\"location\":\"Perso-Arabic\",\"id\":4096,\"tag\":\"uz-Arab\",\"version\":\"Release 10\"},\"uz-arab-af\":{\"language\":\"Uzbek\",\"location\":\"Perso-Arabic, Afghanistan\",\"id\":4096,\"tag\":\"uz-Arab-AF\",\"version\":\"Release 10\"},\"uz-cyrl\":{\"language\":\"Uzbek (Cyrillic)\",\"location\":null,\"id\":30787,\"tag\":\"uz-Cyrl\",\"version\":\"Windows 7\"},\"uz-cyrl-uz\":{\"language\":\"Uzbek (Cyrillic)\",\"location\":\"Uzbekistan\",\"id\":2115,\"tag\":\"uz-Cyrl-UZ\",\"version\":\"Release C\"},\"uz\":{\"language\":\"Uzbek (Latin)\",\"location\":null,\"id\":67,\"tag\":\"uz\",\"version\":\"Release 7\"},\"uz-latn\":{\"language\":\"Uzbek (Latin)\",\"location\":null,\"id\":31811,\"tag\":\"uz-Latn\",\"version\":\"Windows7\"},\"uz-latn-uz\":{\"language\":\"Uzbek (Latin)\",\"location\":\"Uzbekistan\",\"id\":1091,\"tag\":\"uz-Latn-UZ\",\"version\":\"Release C\"},\"vai\":{\"language\":\"Vai\",\"location\":null,\"id\":4096,\"tag\":\"vai\",\"version\":\"Release 10\"},\"vai-vaii\":{\"language\":\"Vai\",\"location\":null,\"id\":4096,\"tag\":\"vai-Vaii\",\"version\":\"Release 10\"},\"vai-vaii-lr\":{\"language\":\"Vai\",\"location\":\"Liberia\",\"id\":4096,\"tag\":\"vai-Vaii-LR\",\"version\":\"Release 10\"},\"vai-latn-lr\":{\"language\":\"Vai (Latin)\",\"location\":\"Liberia\",\"id\":4096,\"tag\":\"vai-Latn-LR\",\"version\":\"Release 10\"},\"vai-latn\":{\"language\":\"Vai (Latin)\",\"location\":null,\"id\":4096,\"tag\":\"vai-Latn\",\"version\":\"Release 10\"},\"ca-es-\":{\"language\":\"Valencian\",\"location\":\"Spain\",\"id\":2051,\"tag\":\"ca-ES-\",\"version\":\"Release 8\"},\"ve\":{\"language\":\"Venda\",\"location\":null,\"id\":51,\"tag\":\"ve\",\"version\":\"Release 10\"},\"ve-za\":{\"language\":\"Venda\",\"location\":\"South Africa\",\"id\":1075,\"tag\":\"ve-ZA\",\"version\":\"Release 10\"},\"vi\":{\"language\":\"Vietnamese\",\"location\":null,\"id\":42,\"tag\":\"vi\",\"version\":\"Release 7\"},\"vi-vn\":{\"language\":\"Vietnamese\",\"location\":\"Vietnam\",\"id\":1066,\"tag\":\"vi-VN\",\"version\":\"Release B\"},\"vo\":{\"language\":\"Volapük\",\"location\":null,\"id\":4096,\"tag\":\"vo\",\"version\":\"Release 10\"},\"vo-001\":{\"language\":\"Volapük\",\"location\":\"World\",\"id\":4096,\"tag\":\"vo-001\",\"version\":\"Release 10\"},\"vun\":{\"language\":\"Vunjo\",\"location\":null,\"id\":4096,\"tag\":\"vun\",\"version\":\"Release 10\"},\"vun-tz\":{\"language\":\"Vunjo\",\"location\":\"Tanzania\",\"id\":4096,\"tag\":\"vun-TZ\",\"version\":\"Release 10\"},\"wae\":{\"language\":\"Walser\",\"location\":null,\"id\":4096,\"tag\":\"wae\",\"version\":\"Release 10\"},\"wae-ch\":{\"language\":\"Walser\",\"location\":\"Switzerland\",\"id\":4096,\"tag\":\"wae-CH\",\"version\":\"Release 10\"},\"cy\":{\"language\":\"Welsh\",\"location\":null,\"id\":82,\"tag\":\"cy\",\"version\":\"Release 7\"},\"cy-gb\":{\"language\":\"Welsh\",\"location\":\"United Kingdom\",\"id\":1106,\"tag\":\"cy-GB\",\"version\":\"ReleaseE1\"},\"wal\":{\"language\":\"Wolaytta\",\"location\":null,\"id\":4096,\"tag\":\"wal\",\"version\":\"Release 10\"},\"wal-et\":{\"language\":\"Wolaytta\",\"location\":\"Ethiopia\",\"id\":4096,\"tag\":\"wal-ET\",\"version\":\"Release 10\"},\"wo\":{\"language\":\"Wolof\",\"location\":null,\"id\":136,\"tag\":\"wo\",\"version\":\"Release 7\"},\"wo-sn\":{\"language\":\"Wolof\",\"location\":\"Senegal\",\"id\":1160,\"tag\":\"wo-SN\",\"version\":\"Release V\"},\"xh\":{\"language\":\"Xhosa\",\"location\":null,\"id\":52,\"tag\":\"xh\",\"version\":\"Release 7\"},\"xh-za\":{\"language\":\"Xhosa\",\"location\":\"South Africa\",\"id\":1076,\"tag\":\"xh-ZA\",\"version\":\"Release E1\"},\"yav\":{\"language\":\"Yangben\",\"location\":null,\"id\":4096,\"tag\":\"yav\",\"version\":\"Release 10\"},\"yav-cm\":{\"language\":\"Yangben\",\"location\":\"Cameroon\",\"id\":4096,\"tag\":\"yav-CM\",\"version\":\"Release 10\"},\"ii\":{\"language\":\"Yi\",\"location\":null,\"id\":120,\"tag\":\"ii\",\"version\":\"Release 7\"},\"ii-cn\":{\"language\":\"Yi\",\"location\":\"People's Republic of China\",\"id\":1144,\"tag\":\"ii-CN\",\"version\":\"Release V\"},\"yo\":{\"language\":\"Yoruba\",\"location\":null,\"id\":106,\"tag\":\"yo\",\"version\":\"Release 7\"},\"yo-bj\":{\"language\":\"Yoruba\",\"location\":\"Benin\",\"id\":4096,\"tag\":\"yo-BJ\",\"version\":\"Release 10\"},\"yo-ng\":{\"language\":\"Yoruba\",\"location\":\"Nigeria\",\"id\":1130,\"tag\":\"yo-NG\",\"version\":\"Release V\"},\"dje\":{\"language\":\"Zarma\",\"location\":null,\"id\":4096,\"tag\":\"dje\",\"version\":\"Release 10\"},\"dje-ne\":{\"language\":\"Zarma\",\"location\":\"Niger\",\"id\":4096,\"tag\":\"dje-NE\",\"version\":\"Release 10\"},\"zu\":{\"language\":\"Zulu\",\"location\":null,\"id\":53,\"tag\":\"zu\",\"version\":\"Release 7\"},\"zu-za\":{\"language\":\"Zulu\",\"location\":\"South Africa\",\"id\":1077,\"tag\":\"zu-ZA\",\"version\":\"Release E1\"}}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_BoxedTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/BoxedTree */ "./src/js/BoxedTree.js");
/* harmony import */ var _js_CircleTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/CircleTree */ "./src/js/CircleTree.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  boxedTree: _js_BoxedTree__WEBPACK_IMPORTED_MODULE_0__["default"],
  circleTree: _js_CircleTree__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/js/BaseTree.js":
/*!****************************!*\
  !*** ./src/js/BaseTree.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomD3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomD3 */ "./src/js/CustomD3.js");
/* harmony import */ var _NodeSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeSettings */ "./src/js/NodeSettings.js");
/* harmony import */ var _LoadOnDemandSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadOnDemandSettings */ "./src/js/LoadOnDemandSettings.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





/**
 * Recursively find a particular object within a hierarchical dataset.
 * 
 * @param {object} hierarchicalObject The initial hierarchical object to start the recursive find.
 * @param {function} getChildren The callback function that gets the children items of the hierarchical object.
 * @param {function} findCondition The callback function that defines whether the object matches the condition to be returned or not.
 * @returns {object|null} The first object matching the conditions.
 */

function recursiveFind(hierarchicalObject, getChildren, findCondition) {
  if (findCondition(hierarchicalObject)) return hierarchicalObject;
  var children = getChildren(hierarchicalObject);
  var foundNode = children.find(findCondition);

  if (!foundNode) {
    var _iterator = _createForOfIteratorHelper(children),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var child = _step.value;
        foundNode = recursiveFind(child, getChildren, findCondition);
        if (foundNode) break;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return foundNode;
}
/**
 * Recursively gets a set of objects within a hierarchical dataset.
 * 
 * @param {object} hierarchicalObject The initial hierarchical object to start the recursive get.
 * @param {function} getChildren The callback function that gets the children items of the hierarchical object.
 */


function recursiveGet(hierarchicalObject, getChildren) {
  var allItems = [];
  var children = getChildren(hierarchicalObject);

  if (children) {
    var _iterator2 = _createForOfIteratorHelper(children),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var child = _step2.value;
        allItems.push(child);
        var descendants = recursiveGet(child, getChildren);
        if (descendants) allItems = [].concat(_toConsumableArray(allItems), _toConsumableArray(descendants));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return allItems;
}

var BaseTree = /*#__PURE__*/function (_EventEmitter) {
  _inherits(BaseTree, _EventEmitter);

  var _super = _createSuper(BaseTree);

  /**
   * @param {object} options The options object.
   * @param {string} [options.theme=default] The theme of the tree.
   * @param {string} [options.orientation=leftToRight] The orientation of the tree.
   * @param {boolean} [options.allowPan=true] Enables/disables the mouse drag to pan feature.
   * @param {boolean} [options.allowZoom=true] Enables/disables the mouse wheel to zoom feature.
   * @param {boolean} [options.allowFocus=true] If true, clicking on a node would focus to the node, hiding all irrelevant nodes that's not a parent, ancestor, or sibling.
   * @param {boolean} [options.allowNodeCentering=true] If true, clicking on a node would pan to the node.
   * @param {number} [options.minScale=1] Minimum zoom scaling.
   * @param {number} [options.maxScale=2] Maximum zoom scaling.
   * @param {number} [options.nodeDepthMultiplier=300] The distance between the parent and child nodes.
   * @param {boolean} [options.isFlatData=false] Indicates whether the passed data was a flat array of objects. If true, you must specify the `getParentId` option.
   * @param {getIdCallBack} options.getId
   * @param {getParentIdCallBack} [options.getParentId]
   * @param {getChildrenCallBack} [options.getChildren]
   * @param {number} [options.widthWithoutMargins=960] The width of the tree, not including the margins.
   * @param {number} [options.heightWithoutMargins=800] The height of the tree, not including the margins.
   * @param {object} [options.margins] Object specifying the margins of the tree diagram.
   * @param {number} [options.margins.top] The top margin for the tree diagram.
   * @param {number} [options.margins.right] The right margin for the tree diagram.
   * @param {number} [options.margins.bottom] The bottom margin for the tree diagram.
   * @param {number} [options.margins.left] The left margin for the tree diagram.
   * @param {number} [options.duration] Integer in milliseconds determining the duration of the animations for the tree.
   * @param {LoadOnDemandSettings} [options.loadOnDemandSettings] Object specifying the load-on-demand settings.
   * @param {NodeSettings} [options.nodeSettings] Object specifying the node settings for the tree.
   */
  function BaseTree(options) {
    var _this;

    _classCallCheck(this, BaseTree);

    _this = _super.call(this);
    options = options || {}; // Defaults options to an empty object

    var mergedOptions = _objectSpread(_objectSpread({}, BaseTree.defaults), options); // We define our prototype properties which would be set later


    _this._root = null;
    _this._svg = null;
    _this._panningContainer = null, _this._view = null;
    _this._treeGenerator = null;
    _this._linkPathGenerator = null;
    _this._visibleNodes = null;
    _this._links = null;
    _this._zoomListener = null, // Assign/Set prototype properties, using values passed from the options object
    _this.setTheme(mergedOptions.theme);

    _this.setOrientation(mergedOptions.orientation);

    _this.setData(mergedOptions.data);

    _this.setElement(mergedOptions.element);

    _this.setWidthWithoutMargins(mergedOptions.widthWithoutMargins);

    _this.setHeightWithoutMargins(mergedOptions.heightWithoutMargins);

    _this.setMargins(mergedOptions.margins);

    _this.setDuration(mergedOptions.duration);

    _this.setAllowPan(mergedOptions.allowPan);

    _this.setAllowZoom(mergedOptions.allowZoom);

    _this.setAllowFocus(mergedOptions.allowFocus);

    _this.setAllowNodeCentering(mergedOptions.allowNodeCentering);

    _this.setMinScale(mergedOptions.minScale);

    _this.setMaxScale(mergedOptions.maxScale);

    _this.setIsFlatData(mergedOptions.isFlatData);

    _this.setNodeDepthMultiplier(mergedOptions.nodeDepthMultiplier); // We define our sub-prototype (AKA sub-class) properties


    _this.loadOnDemandSettings = new _LoadOnDemandSettings__WEBPACK_IMPORTED_MODULE_2__["default"](_assertThisInitialized(_this), mergedOptions.loadOnDemandSettings);
    _this.nodeSettings = new _NodeSettings__WEBPACK_IMPORTED_MODULE_1__["default"](_assertThisInitialized(_this), mergedOptions.nodeSettings); // We define our methods, which derives from our options

    _this._getId = mergedOptions.getId;
    _this._getChildren = mergedOptions.getChildren;
    _this._getParentId = mergedOptions.getParentId;
    return _this;
  }
  /**
   * Defines how to create the nodes for newly
   * added data objects.
   *
   * @param {*} nodeEnter The D3 Enter selection of nodes.
   * @param {*} nodes
   * @returns {object} The tree object.
   */


  _createClass(BaseTree, [{
    key: "_nodeEnter",
    value: function _nodeEnter(nodeEnter, nodes) {
      throw 'The function _nodeEnter must be implemented';
    }
    /**
     * Defines how to update the nodes for the
     * data objects.
     *
     * @param {*} nodeUpdate The D3 Update selection of nodes.
     * @param {*} nodeUpdateTransition The D3 transition object for the D3 Update selection of nodes.
     * @param {*} nodes
     * @returns {object} The tree object.
     */

  }, {
    key: "_nodeUpdate",
    value: function _nodeUpdate(nodeUpdate, nodeUpdateTransition, nodes) {
      throw 'The function _nodeUpdate must be implemented';
    }
    /**
     * Defines how to remove the nodes for the
     * removed data objects.
     *
     * @param {*} nodeExit The D3 Exit selection of nodes.
     * @param {*} nodeExitTransition The D3 transition object for the D3 Exit selection of nodes.
     * @param {*} nodes
     * @returns {object} The tree object.
     */

  }, {
    key: "_nodeExit",
    value: function _nodeExit(nodeExit, nodeExitTransition, nodes) {
      throw 'The function _nodeExit must be implemented';
    }
    /**
     * Gets the path generator used to render
     * the links between the nodes.
     *
     * @returns {function} The callback function that generates the SVG path coordinates for the links, given a coordinates object.
     */

  }, {
    key: "_getLinkPathGenerator",
    value: function _getLinkPathGenerator() {
      throw 'The function _getLinkPathGenerator must be implemented';
    }
    /**
     * Defines how to create the links for newly
     * added data objects.
     *
     * @param {*} source The original data object that the links are being drawn for.
     * @param {*} linkEnter The D3 Enter selection of links.
     * @param {*} links
     * @param {*} linkPathGenerator
     * @returns {object} The tree object.
     */

  }, {
    key: "_linkEnter",
    value: function _linkEnter(source, linkEnter, links, linkPathGenerator) {
      throw 'The function _linkEnter must be implemented';
    }
    /**
     * Defines how to update the links for the
     * data objects.
     *
     * @param {*} source The original data object that the links are being drawn for.
     * @param {*} linkUpdate The D3 Update selection of links.
     * @param {*} linkUpdateTransition The D3 transition object for the D3 Update selection of links.
     * @param {*} links
     * @param {*} linkPathGenerator The link path generator function.
     * @returns {object} The tree object.
     */

  }, {
    key: "_linkUpdate",
    value: function _linkUpdate(source, linkUpdate, linkUpdateTransition, links, linkPathGenerator) {
      throw 'The function _linkUpdate must be implemented';
    }
    /**
     * Defines how to remove the links for the
     * removed data objects.
     *
     * @param {object} source The original data object that the links are being drawn for.
     * @param {*} linkExit The D3 Exit selection of links.
     * @param {*} linkExitTransition The D3 transition object for the D3 Update selection of links.
     * @param {*} links
     * @param {*} linkPathGenerator The link path generator function.
     * @returns {object} The tree object.
     */

  }, {
    key: "_linkExit",
    value: function _linkExit(source, linkExit, linkExitTransition, links, linkPathGenerator) {
      throw 'The function _linkExit must be implemented';
    }
    /**
     * Called when updating dimensions when
     * node settings is configured to be
     * 'nodesize'.
     * 
     * @returns {number[]} An array with two values, representing the height and width of the node respectively.
     */

  }, {
    key: "_getNodeSize",
    value: function _getNodeSize() {
      throw 'The function _getNodeSize must be implemented';
    }
    /**
     * Focuses and expands all the way through to a node.
     * 
     * @param {*} idOrNodeDataItem The id of the node to focus, or the node data item object.
     * @returns {object} The tree object.
     */

  }, {
    key: "focusToNode",
    value: function focusToNode(idOrNodeDataItem) {
      this.removeSelection(this.getRoot());
      var nodeDataItem = idOrNodeDataItem;
      if (_typeof(nodeDataItem) !== 'object' && nodeDataItem !== null) nodeDataItem = this.getNode(nodeDataItem);
      var parentNode = null; // Expand every parent/ancestor node

      parentNode = nodeDataItem.parent;

      while (parentNode) {
        if (parentNode._children) this.expand(parentNode);
        parentNode = parentNode.parent;
      }

      if (this.getAllowFocus()) {
        // Hide the parent/ancestor node siblings
        parentNode = nodeDataItem.parent;

        while (parentNode) {
          this.hideSiblings(parentNode);
          parentNode = parentNode.parent;
        }

        this.updateTreeWithFocusOnNode(nodeDataItem);
        nodeDataItem.selected = true;
      }

      this.update(this.getRoot());
      this.centerNode(nodeDataItem);
      return this;
    }
    /**
     * Returns a boolean whether the
     * tree is using flat data or not.
     * 
     * @returns {boolean} Whether the tree is using flat data or not.
     */

  }, {
    key: "getIsFlatData",
    value: function getIsFlatData() {
      return this._isFlatData;
    }
    /**
     * Sets the is flat data flag.
     * If set to true, you must specify
     * the `getParentId` option.
     * 
     * @param {boolean} newIsFlatData Whether the tree is using flat data or not.
     */

  }, {
    key: "setIsFlatData",
    value: function setIsFlatData(newIsFlatData) {
      this._isFlatData = newIsFlatData;
      return this;
    }
    /**
     * Regenerates the node data.
     * 
     * @returns {object} The tree object.
     */

  }, {
    key: "regenerateNodeData",
    value: function regenerateNodeData() {
      var _this2 = this;

      // Assigns parent, children, height, depth
      if (!this.getIsFlatData()) {
        if (!this._getChildren) throw "If you are providing hierarchical structured data, then you must set the getChildren accessor property."; // Specify your children property here,
        // so that D3's resulting root object
        // has a mapping from its "children" property
        // to your specified children property

        this._root = _CustomD3__WEBPACK_IMPORTED_MODULE_0__["default"].hierarchy(this.getData(), function (data) {
          return _this2.getChildren.call(_this2, data);
        });
      } else {
        if (!this._getParentId) throw "If you are providing flat structured data, then you must set the getParentId accessor property."; // stratifier is a function that would convert the flat
        // dataset into hierarchically structured data
        // to be used with D3 trees.
        // It accepts the dataset as its parameter,
        // and returns the converted data.
        // Note that this is used instead of the d3.hierarchy()
        // method as d3.hierarchy() should only be used if the
        // data is already in heirarchical structure, and
        // needs to be converted to D3 hierarchical nodes

        var stratifier = _CustomD3__WEBPACK_IMPORTED_MODULE_0__["default"].stratify().id(function (data, index, arr) {
          return _this2.getId.call(_this2, data);
        }).parentId(function (data, index, arr) {
          return _this2.getParentId.call(_this2, data);
        });
        this._root = stratifier(this.getData());
      }

      return this;
    }
    /**
     * Gets the tree theme.
     * 
     * @returns {string} The theme the tree is using.
     */

  }, {
    key: "getTheme",
    value: function getTheme() {
      return this._theme;
    }
    /**
     * Sets the tree theme.
     * 
     * @param {string} theme The theme to set the tree to.
     * @returns {object} The tree object.
     */

  }, {
    key: "setTheme",
    value: function setTheme(theme) {
      this._theme = theme;
      return this;
    }
    /**
     * Gets the tree orientation.
     * 
     * @returns {string} The orientation the tree is using.
     */

  }, {
    key: "getOrientation",
    value: function getOrientation() {
      return this._orientation;
    }
    /**
     * Sets the tree orientation.
     * 
     * @param {string} orientation The orientation to set the tree to.
     * @returns {object} The tree object.
     */

  }, {
    key: "setOrientation",
    value: function setOrientation(orientation) {
      this._orientation = orientation;
      return this;
    }
    /**
     * Gets the data items used to render
     * the nodes.
     * 
     * @returns {object[]} The array of data items the tree uses.
     */

  }, {
    key: "getData",
    value: function getData() {
      return this._data;
    }
    /**
     * Sets the data items the tree should
     * use to render the nodes.
     * 
     * @param {object[]} newData The new set of data items.
     * @returns {object} The tree object.
     */

  }, {
    key: "setData",
    value: function setData(newData) {
      this._data = newData;
      return this;
    }
    /**
     * Gets the node depth multiplier that
     * affects the distance between the
     * parent node and the child node.
     * 
     * @returns {number} The node depth multiplier value
     */

  }, {
    key: "getNodeDepthMultiplier",
    value: function getNodeDepthMultiplier() {
      return this._nodeDepthMultiplier;
    }
    /**
     * Sets the node depth multiplier value.
     * 
     * @param {number} newNodeDepthMultiplier The value that affects the distance between the parent node and the child node.
     * @returns {object} The tree object.
     */

  }, {
    key: "setNodeDepthMultiplier",
    value: function setNodeDepthMultiplier(newNodeDepthMultiplier) {
      this._nodeDepthMultiplier = newNodeDepthMultiplier;
      return this;
    }
    /**
     * Gets the duration of animations
     * for the tree.
     * 
     * @returns {number} The animation duration in milliseconds.
     */

  }, {
    key: "getDuration",
    value: function getDuration() {
      return this._duration;
    }
    /**
     * Sets the duration of animations
     * for the tree.
     * 
     * @param {*} newDuration The animation duration in milliseconds.
     * @returns {object} The tree object.
     */

  }, {
    key: "setDuration",
    value: function setDuration(newDuration) {
      this._duration = newDuration;
      return this;
    }
    /**
     * Gets the boolean value indicating
     * whether the drag-to-pan pan feature
     * is enabled or not.
     * 
     * @returns {boolean} Whether panning is enabled or not.
     */

  }, {
    key: "getAllowPan",
    value: function getAllowPan() {
      return this._allowPan;
    }
    /**
     * Sets the boolean value indicating
     * whether the drag-to-pan pan feature
     * is enabled or not.
     * 
     * @param {*} newAllowPan Whether panning is enabled or not.
     * @returns {object} The tree object.
     */

  }, {
    key: "setAllowPan",
    value: function setAllowPan(newAllowPan) {
      this._allowPan = newAllowPan;
      return this;
    }
    /**
     * Gets the boolean value indicating
     * whether the mouse wheel to zoom in/out
     * feature is enabled or not.
     * 
     * @returns {boolean} Whether zooming is enabled or not.
     */

  }, {
    key: "getAllowZoom",
    value: function getAllowZoom() {
      return this._allowZoom;
    }
    /**
     * Sets the boolean value indicating
     * whether the mouse wheel to zoom in/out
     * feature is enabled or not.
     * 
     * @param {boolean} newAllowZoom Whether zooming is enabled or not.
     * @returns {object} The tree object.
     */

  }, {
    key: "setAllowZoom",
    value: function setAllowZoom(newAllowZoom) {
      this._allowZoom = newAllowZoom;
      return this;
    }
    /**
     * Gets the boolean value indicating
     * whether to focus to the clicked node
     * or not. Focusing on a node would hide
     * all irrelevant nodes that's not a 
     * parent, sibling or ancestor of the
     * clicked node.
     * 
     * @returns {boolean} Whether to focus to the clicked node.
     */

  }, {
    key: "getAllowFocus",
    value: function getAllowFocus() {
      return this._allowFocus;
    }
    /**
     * Sets the boolean value indicating
     * whether to focus to the clicked node
     * or not. Focusing on a node would hide
     * all irrelevant nodes that's not a 
     * parent, sibling or ancestor of the
     * clicked node.
     * 
     * @param {boolean} newAllowFocus Whether to pan to the clicked node.
     * @returns {object} The tree object.
     */

  }, {
    key: "setAllowFocus",
    value: function setAllowFocus(newAllowFocus) {
      this._allowFocus = newAllowFocus;
      return this;
    }
    /**
     * Gets the boolean value indicating
     * whether to pan to a clicked node.
     * 
     * @returns {boolean} Whether to pan to the clicked node.
     */

  }, {
    key: "getAllowNodeCentering",
    value: function getAllowNodeCentering() {
      return this._allowNodeCentering;
    }
    /**
     * Whether to pan to a clicked node.
     * 
     * @param {boolean} newAllowNodeCentering Whether to pan to the clicked node.
     * @returns {object} The tree object.
     */

  }, {
    key: "setAllowNodeCentering",
    value: function setAllowNodeCentering(newAllowNodeCentering) {
      this._allowNodeCentering = newAllowNodeCentering;
      return this;
    }
    /**
     * Gets the minimum zoom scaling.
     * 
     * @returns {number} The minimum zoom scale value.
     */

  }, {
    key: "getMinScale",
    value: function getMinScale() {
      return this._minScale;
    }
    /**
     * Sets the minimum zoom scaling.
     * 
     * @param {*} newMinScale The minimum zoom scale value.
     * @returns {object} The tree object.
     */

  }, {
    key: "setMinScale",
    value: function setMinScale(newMinScale) {
      this._minScale = newMinScale;
      return this;
    }
    /**
     * Gets the maximum zoom scaling.
     * 
     * @returns {number} Maximum zoom scale value.
     */

  }, {
    key: "getMaxScale",
    value: function getMaxScale() {
      return this._maxScale;
    }
    /**
     * Sets the maximum zoom scaling.
     * 
     * @param {*} newMaxScale The maximum zoom scale value.
     * @returns {object} The tree object.
     */

  }, {
    key: "setMaxScale",
    value: function setMaxScale(newMaxScale) {
      this._maxScale = newMaxScale;
      return this;
    }
    /**
     * Gets the load on demand settings object.
     * 
     * @returns {LoadOnDemandSettings} The load on demand settings.
     */

  }, {
    key: "getLoadOnDemandSettings",
    value: function getLoadOnDemandSettings() {
      return this.loadOnDemandSettings;
    }
    /**
     * Gets the node settings object.
     * 
     * @returns {NodeSettings} The node settings.
     */

  }, {
    key: "getNodeSettings",
    value: function getNodeSettings() {
      return this.nodeSettings;
    }
    /**
     * Gets the container DOM element.
     * 
     * @returns {object} The container DOM element.
     */

  }, {
    key: "getElement",
    value: function getElement() {
      return this._element;
    }
    /**
     * Sets the container DOM element
     * 
     * @param {object} newElement The container DOM element.
     * @returns {object} The tree object.
     */

  }, {
    key: "setElement",
    value: function setElement(newElement) {
      this._element = newElement;
      return this;
    }
    /**
     * Gets the root node object.
     * 
     * @return {object} The root D3 tree node object.
     */

  }, {
    key: "getRoot",
    value: function getRoot() {
      return this._root;
    }
    /**
     * Gets the D3 selection object for the SVG element.
     * 
     * @return {object} Returns the D3 selection object.
     */

  }, {
    key: "getSvg",
    value: function getSvg() {
      return this._svg;
    }
    /**
     * Gets the D3 selection object for the view element.
     * 
     * @returns {object} D3 selection object for the view element.
     */

  }, {
    key: "getView",
    value: function getView() {
      return this._view;
    }
    /**
     * Gets the D3 selection object for the
     * panning container element.
     * 
     * @returns {object} D3 selection object for the panning container element.
     */

  }, {
    key: "getPanningContainer",
    value: function getPanningContainer() {
      return this._panningContainer;
    }
    /**
     * Gets the D3 generator object used to
     * generate the tree nodes coordinates.
     * 
     * @returns {function} D3 tree generator object.
     */

  }, {
    key: "getTreeGenerator",
    value: function getTreeGenerator() {
      return this._treeGenerator;
    }
    /**
     * Get a single node given an id or a data item.
     * 
     * @param {*|object} idOrDataItem The ID or data item to retrieve the D3 tree node data item with.
     * @returns {object} D3 tree node data item.
     */

  }, {
    key: "getNode",
    value: function getNode(idOrDataItem) {
      var _this3 = this;

      var id = idOrDataItem;
      if (_typeof(id) === 'object' && id !== null) id = this.getId(id);
      var rootNode = this.getRoot();

      var getNodeChildren = function getNodeChildren(node) {
        if (node._children) return node._children;
        return [];
      };

      var node = recursiveFind(rootNode, getNodeChildren, function (x) {
        return _this3.getId(x.data) == id;
      });
      return node;
    }
    /**
     * Get a single data item given an id.
     * 
     * @param {*} id The ID to retrieve the data item with.
     * @returns {object} The data item with the given ID.
     */

  }, {
    key: "getDataItem",
    value: function getDataItem(id) {
      var node = this.getNode(id);
      return node.data;
    }
    /**
     * Get the array of D3 node data items
     * the D3 tree has generated.
     * 
     * @returns {object[]} Array of D3 node data items.
     */

  }, {
    key: "getNodes",
    value: function getNodes() {
      return this._nodes;
    }
    /**
     * Get the array of visible D3 node
     * data items the D3 tree has generated.
     * 
     * @returns {object[]} Array of D3 node data items.
     */

  }, {
    key: "getVisibleNodes",
    value: function getVisibleNodes() {
      return this._visibleNodes;
    }
    /**
     * Get the array of D3 link data items
     * the D3 tree has generated.
     * 
     * @returns {object[]} Array of D3 link data items.
     */

  }, {
    key: "getLinks",
    value: function getLinks() {
      return this._links;
    }
    /**
     * Gets the D3 zoom listener used for
     * the panning, zooming and focus features.
     * 
     * @returns {function} The D3 zoom listener
     */

  }, {
    key: "getZoomListener",
    value: function getZoomListener() {
      return this._zoomListener;
    }
    /**
     * Gets the ID for a given data item.
     * 
     * @param {object} dataItem The data item to get the ID from.
     * @returns {*} The ID for the given data item.
     */

  }, {
    key: "getId",
    value: function getId(dataItem) {
      return this._getId(dataItem);
    }
    /**
     * Gets the children data items for a given data item.
     * 
     * @param {object} dataItem The data item to get the children data items from.
     * @returns {object[]} The array of child data items.
     */

  }, {
    key: "getChildren",
    value: function getChildren(dataItem) {
      return this._getChildren(dataItem);
    }
    /**
     * Gets the parent ID for a given data item.
     * 
     * @param {object} dataItem The data item to get the parent ID from.
     * @returns {*} The parent ID for the given data item.
     */

  }, {
    key: "getParentId",
    value: function getParentId(dataItem) {
      return this._getParentId(dataItem);
    }
    /**
     * Sets the ID accessor callback function,
     * defining how to get a unique ID from a
     * given data item.
     * 
     * @param {getIdCallBack} newIdAccessor Callback function to get the ID for a given data item.
     * @returns {object} The tree object.
     */

  }, {
    key: "setIdAccessor",
    value: function setIdAccessor(newIdAccessor) {
      this._getId = newIdAccessor;
      return this;
    }
    /**
     * Sets the children accessor callback function,
     * defining how to get the children data items
     * from a given data item.
     * 
     * @param {getChildrenCallBack} newChildrenAccessor Callback function to get the children for a given data item.
     * @returns {object} The tree object.
     */

  }, {
    key: "setChildrenAccessor",
    value: function setChildrenAccessor(newChildrenAccessor) {
      this._getChildren = newChildrenAccessor;
      return this;
    }
    /**
     * Sets the parent ID accessor callback function,
     * defining how to get the parent ID from a
     * given data item.
     * 
     * @param {getParentIdCallBack} newParentIdAccessor Callback function to get the parent id for a given data item.
     * @returns {object} The tree object.
     */

  }, {
    key: "setParentIdAccessor",
    value: function setParentIdAccessor(newParentIdAccessor) {
      this._getParentId = newParentIdAccessor;
      return this;
    }
    /**
     * Gets the width of SVG, including the margins.
     * 
     * @returns {number} The width of the SVG.
     */

  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.getWidthWithoutMargins() - this.getMargins().left - this.getMargins().right;
    }
    /**
     * Gets the height of SVG, including the margins.
     * 
     * @returns {number} The height of the SVG.
     */

  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.getHeightWithoutMargins() - this.getMargins().top - this.getMargins().bottom;
    }
    /**
     * Sets the margins for the tree diagram.
     * 
     * @param {object} newMargins The margin object.
     * @param {number} newMargins.top The margin top for the tree diagram.
     * @param {number} newMargins.right The margin right for the tree diagram.
     * @param {number} newMargins.bottom The margin bottom for the tree diagram.
     * @param {number} newMargins.left The margin left for the tree diagram.
     * @returns {object} The tree object.
     */

  }, {
    key: "setMargins",
    value: function setMargins(newMargins) {
      this._margins = newMargins;
      return this;
    }
    /**
     * Gets the margins for the tree diagram.
     * 
     * @returns {object} The margins object.
     */

  }, {
    key: "getMargins",
    value: function getMargins() {
      return this._margins;
    }
    /**
     * Sets the width of the SVG for the tree diagram.
     * 
     * @param {*} newWidthWithoutMargin The width of SVG for the tree diagram.
     * @returns {object} The tree object.
     */

  }, {
    key: "setWidthWithoutMargins",
    value: function setWidthWithoutMargins(newWidthWithoutMargin) {
      this._widthWithoutMargin = newWidthWithoutMargin;
      return this;
    }
    /**
     * Gets the width of the SVG for the tree diagram.
     * Does not include the margins.
     * 
     * @returns {number} The width (not including the margins) of the SVG for the tree diagram.
     */

  }, {
    key: "getWidthWithoutMargins",
    value: function getWidthWithoutMargins() {
      return this._widthWithoutMargin;
    }
    /**
     * Sets the height of the SVG for the tree diagram.
     * 
     * @param {*} newHeightWithoutMargin The height of SVG for the tree diagram.
     * @returns {object} The tree object.
     */

  }, {
    key: "setHeightWithoutMargins",
    value: function setHeightWithoutMargins(newHeightWithoutMargin) {
      this._heightWithoutMargin = newHeightWithoutMargin;
      return this;
    }
    /**
     * Gets the height of the SVG for the tree diagram.
     * Does not include the margins.
     * 
     * @returns {number} The height (not including the margins) of the SVG for the tree diagram.
     */

  }, {
    key: "getHeightWithoutMargins",
    value: function getHeightWithoutMargins() {
      return this._heightWithoutMargin;
    }
    /**
     * Updates the dimensions of the SVG.
     * 
     * @returns {object} The tree object.
     */

  }, {
    key: "updateDimensions",
    value: function updateDimensions() {
      // Update SVG with new width and height
      this.getSvg() // Use viewBox to set SVG width and height
      // so it is responsive, and can be resized
      // based on the parent element
      .attr("viewBox", "0 0 " + this.getWidthWithoutMargins() + " " + this.getHeightWithoutMargins());
      var margins = this.getMargins();
      var needToCenterView = false; // update the tree generator with the new width and height

      var sizingMode = this.nodeSettings.getSizingMode();
      if (typeof sizingMode === 'string') sizingMode = sizingMode.trim().toLowerCase();

      if (sizingMode === "nodesize") {
        this.getTreeGenerator().nodeSize(this._getNodeSize()); // Only perform centering if node centering is turned off,
        // as that would center to the root node anyway. Node
        // centering is turned on when allow focus is turned on.

        if (this.getAllowFocus() === false) needToCenterView = true;
      } else {
        this.getTreeGenerator().size([this.getHeight(), this.getWidth()]);
      }

      if (needToCenterView === false) {
        // Update the view with the new margins
        this.getView().attr("transform", "translate(" + margins.left + "," + margins.top + ")");
      } else {
        // Move the view downwards as to center the root node
        // This is due to when you use node-size, it sets the
        // node origin at 0, 0 instead of automatically
        // centering it as it does with size()
        this.getView().attr("transform", "translate(" + margins.left + ", " + (this.getHeight() / 2 + margins.top) + ")");
      } // If we need to center the tree by adjusting the view and the node position


      var x0, y0;

      if (this.getOrientation() === 'topToBottom') {
        if (needToCenterView === false) {
          x0 = this.getWidth() / 2;
        } else {
          x0 = 0;
        }

        y0 = this.getHeight() / 4;
      } else {
        if (needToCenterView === false) {
          x0 = this.getHeight() / 2;
        } else {
          x0 = 0;
        }

        y0 = 0;
      }

      this.getRoot().x0 = x0;
      this.getRoot().y0 = y0;

      if (this.getZoomListener()) {
        this.getZoomListener().extent([[0, 0], [this.getWidthWithoutMargins(), this.getHeightWithoutMargins()]]);
      }

      return this;
    }
    /**
     * Validates the settings to ensure the
     * tree diagram is ready to be generated.
     * 
     * @returns {object} The tree object.
     */

  }, {
    key: "validateSettings",
    value: function validateSettings() {
      // Check to make sure compulsory options are provided
      if (!this.getElement()) throw "Need to pass in an element as part of the options";
      if (!this.getData()) throw "Need to pass in data as part of the options"; // Checks if mandatory methods to specify exists

      if (!this._getId) throw "Need to define the getId function as part of the options";
      this.loadOnDemandSettings.validateSettings();
      return this;
    }
    /**
     * Creates and set up the the tree diagram.
     * 
     * @returns {object} The tree object.
     */

  }, {
    key: "initialize",
    value: function initialize() {
      var _this4 = this;

      this.validateSettings();
      this.regenerateNodeData();

      while (this.getElement().firstChild) {
        this.getElement().removeChild(this.getElement().firstChild);
      }

      ; // Create the svg, and set its dimensions

      this._svg = _CustomD3__WEBPACK_IMPORTED_MODULE_0__["default"].select(this.getElement()).append("svg").classed('mitch-d3-tree', true).classed(this.getTheme(), true).attr("preserveAspectRatio", "xMidYMid meet").style("width", "100%").style("height", "100%"); // Create the view with margins

      this._view = this.getSvg().append("g").classed("view", true); // Create tree generator to position the nodes

      this._treeGenerator = _CustomD3__WEBPACK_IMPORTED_MODULE_0__["default"].tree(); // Create the panning container which panning should act upon

      this._panningContainer = this.getView().append("g").classed("panningContainer", true);
      this._zoomListener = _CustomD3__WEBPACK_IMPORTED_MODULE_0__["default"].zoom() // Limit zoom level
      .scaleExtent([this.getMinScale(), this.getMaxScale()]) // Zoom in D3 translates to the native HTML/JS events of:
      // - Double Clicking (i.e. to zoom in)
      // - Dragging (i.e. panning or moving around)
      // - Wheel (i.e. zoom in/out)
      .on("zoom", function () {
        // The "zoom" event populates d3.event with an object that has
        // a "transform" property (an object with three properties
        // of x, y, and k), where x and y is for translation purposes,
        // and k is the scaling factor
        var transform = _CustomD3__WEBPACK_IMPORTED_MODULE_0__["default"].event.transform;

        _this4.getPanningContainer().attr("transform", transform);
      });
      this.getSvg().call(this.getZoomListener());

      if (this.getAllowPan() === false) {
        this.getSvg().on("mousedown.zoom", null).on("touchstart.zoom", null).on("touchmove.zoom", null).on("touchend.zoom", null);
      }

      if (this.getAllowZoom() === false) {
        this.getSvg().on("dblclick.zoom", null).on("wheel.zoom", null);
      }

      this.updateDimensions();

      this._populateUnderlyingChildren(this.getRoot());

      if (this.getRoot().children) this.getRoot().children.forEach(this.collapseRecursively);
      this.removeSelection(this.getRoot()); // Call the first update, which renders
      // the initial tree

      this.update(this.getRoot()); // Centers the root node

      this.centerNode(this.getRoot());
      return this;
    }
    /**
     * Expands the given node data item.
     * 
     * @param {object} nodeDataItem The D3 node data item to expand.
     * @returns {object} The tree object.
     */

  }, {
    key: "expand",
    value: function expand(nodeDataItem) {
      nodeDataItem.children = nodeDataItem._children;
      return this;
    }
    /**
     * Expands the given node data item,
     * and its children and descendants.
     * 
     * @param {object} nodeDataItem The D3 node data item to expand.
     * @returns {object} The tree object.
     */

  }, {
    key: "expandRecursively",
    value: function expandRecursively(nodeDataItem) {
      var rec = function recursive(directNodeDataItem) {
        if (directNodeDataItem.children) {
          directNodeDataItem.children.forEach(recursive);
          directNodeDataItem.children = directNodeDataItem._children;
        }
      };

      rec(nodeDataItem);
      return this;
    }
    /**
     * Collapses the given node data item.
     * 
     * @param {object} nodeDataItem The D3 node data item to collapse.
     * @returns {object} The tree object.
     */

  }, {
    key: "collapse",
    value: function collapse(nodeDataItem) {
      nodeDataItem.children = null;
      return this;
    }
    /**
     * Collapses the given node data item,
     * and its children and descendants.
     * 
     * @param {object} nodeDataItem The D3 node data item to collapse.
     * @returns {object} The tree object.
     */

  }, {
    key: "collapseRecursively",
    value: function collapseRecursively(nodeDataItem) {
      var rec = function recursive(directNodeDataItem) {
        if (directNodeDataItem.children) {
          directNodeDataItem.children.forEach(recursive);
          directNodeDataItem.children = null;
        }
      };

      rec(nodeDataItem);
      return this;
    }
    /**
     * Populates the node's children to a hidden property.
     * 
     * @param {object} nodeDataItem The D3 node data item to collapse.
     * @returns {object} The tree object.
     */

  }, {
    key: "_populateUnderlyingChildren",
    value: function _populateUnderlyingChildren(nodeDataItem) {
      var rec = function recursive(directNodeDataItem) {
        if (directNodeDataItem.children) {
          directNodeDataItem._children = directNodeDataItem.children;

          directNodeDataItem._children.forEach(recursive);
        }
      };

      rec(nodeDataItem);
      return this;
    }
    /**
     * Remove node selections for a given node and it's children.
     * 
     * @param {object} nodeDataItem The D3 node data item to remove selection from.
     * @returns {object} The tree object.
     */

  }, {
    key: "removeSelection",
    value: function removeSelection(nodeDataItem) {
      var rec = function recursive(directNodeDataItem) {
        directNodeDataItem.selected = false;

        if (directNodeDataItem.children) {
          directNodeDataItem.children.forEach(recursive);
        }
      };

      rec(nodeDataItem);
      return this;
    }
    /**
     * Center the view to a D3 tree node.
     * 
     * @param {*} nodeDataItem The D3 node data item to focus on.
     * @returns {object} The tree object.
     */

  }, {
    key: "centerNode",
    value: function centerNode(nodeDataItem) {
      var transform = _CustomD3__WEBPACK_IMPORTED_MODULE_0__["default"].zoomTransform(this.getSvg().node());
      var scale = transform.k;
      var x, y, translateX, translateY;

      if (this.getOrientation().toLowerCase() === 'toptobottom') {
        x = -nodeDataItem.x0;
        y = -nodeDataItem.y0;
        translateX = x * scale + this.getWidth() / 2;
        translateY = y * scale + this.getHeight() / 2;
      } else {
        x = -nodeDataItem.y0;
        y = -nodeDataItem.x0;
        translateX = x * scale + this.getWidth() / 4;
        translateY = y * scale + this.getHeight() / 2;
      }

      this.getSvg().transition().duration(this.getDuration()).call(this.getZoomListener().transform, _CustomD3__WEBPACK_IMPORTED_MODULE_0__["default"].zoomIdentity.translate(translateX, translateY).scale(scale));
      return this;
    }
    /**
     * Triggers the nodeClick event when a
     * D3 node is clicked on, and proceeds
     * to focus/expand/collapse the node.
     * 
     * @param {object} nodeDataItem The D3 node data item that was clicked.
     * @param {number} index The index of the D3 node being clicked in the array of siblings.
     * @param {object[]} arr Array of siblings D3 node, inclusive of the clicked node data item itself.
     * @emits {nodeClick} Emit node click event.
     * @returns {boolean} True meaning it successfully focused/expanded/collapsed a node. False otherwise.
     */

  }, {
    key: "_onNodeClick",
    value: function _onNodeClick(nodeDataItem, index, arr) {
      var eventType = null;
      if (this.getAllowFocus()) eventType = 'focus';else if (nodeDataItem.children) eventType = 'collapse';else eventType = 'expand';
      var event = {
        type: eventType,
        "continue": true,
        nodeDataItem: nodeDataItem,
        nodeDataItemIndex: index,
        nodeDataItems: arr,
        preventDefault: function preventDefault() {
          event["continue"] = false;
        }
      };
      this.emit('nodeClick', event);
      if (event["continue"] === false) return false;
      if (this.getAllowFocus()) this.nodeFocus.call(this, nodeDataItem);else this.nodeToggle.call(this, nodeDataItem);
      return true;
    }
    /**
     * Creates a child D3 tree node.
     * 
     * @param {object} parentNodeDataItem The parent D3 tree node data item.
     * @param {object} dataItem The data item.
     * @returns {object} The newly created D3 node;
     */

  }, {
    key: "_createNode",
    value: function _createNode(parentNodeDataItem, dataItem) {
      // Create a D3 node object from resulting data items using d3.hierarchy()
      var newNode = _CustomD3__WEBPACK_IMPORTED_MODULE_0__["default"].hierarchy(dataItem); // Now add missing properties to Node like child, parent, depth

      newNode.depth = parentNodeDataItem.depth + 1;
      newNode.height = parentNodeDataItem.height - 1;
      newNode.parent = parentNodeDataItem;
      newNode.id = this.getId.call(this, dataItem);
      return newNode;
    }
    /**
     * Creates and adds a child D3 tree
     * node to a given parent D3 tree node.
     * 
     * @param {object} parentNodeDataItem The parent D3 tree node data item.
     * @param {object} dataItem The data item.
     * @returns {object} The newly created and added D3 node;
     */

  }, {
    key: "_addUnderlyingChildNode",
    value: function _addUnderlyingChildNode(parentNodeDataItem, dataItem) {
      var newNode = this._createNode(parentNodeDataItem, dataItem);

      parentNodeDataItem._children.push(newNode);

      return newNode;
    }
    /**
     * Process the loaded data from AJAX
     * resulting from a node expand.
     * 
     * @param {object} nodeDataItem The D3 node data item being expanded.
     * @param {object[]} result The children data items to process.
     * @returns {object} The tree object.
     */

  }, {
    key: "_processLoadedDataForNodeFocus",
    value: function _processLoadedDataForNodeFocus(nodeDataItem, result) {
      var _this5 = this;

      nodeDataItem._children = [];
      result.forEach(function (currentItem) {
        return _this5._addUnderlyingChildNode(nodeDataItem, currentItem);
      });

      this._populateUnderlyingChildren(nodeDataItem);

      this.updateTreeWithFocusOnNode(nodeDataItem);
      var wasSelected = nodeDataItem.selected;
      this.removeSelection(this.getRoot());
      nodeDataItem.selected = true;
      this.update(nodeDataItem);
      if (this.getAllowNodeCentering() === true && (wasSelected === false || typeof wasSelected === 'undefined')) this.centerNode(nodeDataItem);
      return this;
    }
    /**
     * Focuses to a node, given a node data item.
     * 
     * @param {object} nodeDataItem The node being focused on.
     * @returns {object} The tree object.
     */

  }, {
    key: "nodeFocus",
    value: function nodeFocus(nodeDataItem) {
      var _this6 = this;

      if (!nodeDataItem.children && !nodeDataItem._children && this.loadOnDemandSettings.isEnabled() && this.loadOnDemandSettings.hasChildren(nodeDataItem.data)) {
        var processData = function processData(result) {
          return _this6._processLoadedDataForNodeFocus(nodeDataItem, result);
        };

        this.loadOnDemandSettings.loadChildren(nodeDataItem.data, processData);
      } else {
        this.updateTreeWithFocusOnNode(nodeDataItem);
        var wasSelected = nodeDataItem.selected;
        this.removeSelection(this.getRoot());
        nodeDataItem.selected = true;
        this.update(nodeDataItem);
        if (this.getAllowNodeCentering() === true && (wasSelected === false || typeof wasSelected === 'undefined')) this.centerNode(nodeDataItem);
      }

      return this;
    }
    /**
     * Process the loaded data from AJAX
     * resulting from a node toggle.
     * 
     * @param {object} nodeDataItem The D3 node data item.
     * @param {object[]} result Array of sibling node data items, inclusive the node being toggled.
     * @returns {object} The tree object.
     */

  }, {
    key: "_processLoadedDataForNodeToggle",
    value: function _processLoadedDataForNodeToggle(nodeDataItem, result) {
      var _this7 = this;

      nodeDataItem._children = [];
      result.forEach(function (currentItem) {
        return _this7._addUnderlyingChildNode(nodeDataItem, currentItem);
      });
      this.expand(nodeDataItem);
      this.update(nodeDataItem);
      return this;
    }
    /**
     * Toggles the children visibility for a given node data item.
     * 
     * @param {*} nodeDataItem D3 Node data item.
     * @returns {object} The tree object.
     */

  }, {
    key: "nodeToggle",
    value: function nodeToggle(nodeDataItem) {
      var _this8 = this;

      // Clear all selections, and select current node
      this.removeSelection(this.getRoot());
      nodeDataItem.selected = true; // If it hasn't been loaded, and it's specified to have children,
      // then perform load-on-demand to load new items from server
      // and add them as child nodes

      if (!nodeDataItem.children && !nodeDataItem._children && this.loadOnDemandSettings.isEnabled() && this.loadOnDemandSettings.hasChildren(nodeDataItem.data)) {
        var processData = function processData(result) {
          _this8._processLoadedDataForNodeToggle(nodeDataItem, result);

          if (_this8.getAllowNodeCentering() === true) _this8.centerNode(nodeDataItem);
        };

        this.loadOnDemandSettings.loadChildren(nodeDataItem.data, processData);
      } else {
        if (nodeDataItem.children) this.collapse(nodeDataItem);else this.expand(nodeDataItem);
        this.update(nodeDataItem);
        if (this.getAllowNodeCentering() === true) this.centerNode(nodeDataItem);
      }

      return this;
    }
    /**
     * Hide the siblings nodes
     * for a given node.
     * 
     * @param {object} nodeDataItem The D3 node to hide siblings for.
     * @returns {object} The tree object.
     */

  }, {
    key: "hideSiblings",
    value: function hideSiblings(nodeDataItem) {
      var _this9 = this;

      var parentNode = nodeDataItem.parent;

      if (parentNode) {
        var nodeId = this.getId(nodeDataItem.data);
        parentNode.children.filter(function (x) {
          return _this9.getId(x.data) != nodeId;
        }).forEach(this.collapseRecursively);
        parentNode.children = [];
        parentNode.children.push(nodeDataItem);
      }

      return this;
    }
    /**
     * Updates the tree diagram so only the relevant
     * focused node and direct parent hierarchies are
     * shown.
     * 
     * @param {object} nodeDataItem D3 Node data item.
     * @returns {object} The tree object.
     */

  }, {
    key: "updateTreeWithFocusOnNode",
    value: function updateTreeWithFocusOnNode(nodeDataItem) {
      if (!nodeDataItem.children && nodeDataItem._children) {
        // If there's no children nodes, but there a some children items to expand
        this.hideSiblings(nodeDataItem);
        this.expand(nodeDataItem); // Collapse the current focused node's children, so only direct childrens are shown

        nodeDataItem.children.forEach(this.collapseRecursively);
      } else if (nodeDataItem.children) {
        // If there are rendered children nodes
        // Checks if its children has any rendered children
        var hasNestedChildren = nodeDataItem.children.some(function (currentItem, index, arr) {
          return currentItem.children;
        });
        var isPreviouslyExpandedNode = !hasNestedChildren; // If it is a parent node with children, and
        // is not the previous expanded node,
        // then we'll focus on it, expanding it
        // and showing all of its children

        if (isPreviouslyExpandedNode === false) {
          this.collapseRecursively(nodeDataItem);
          this.expand(nodeDataItem);
        }
      }

      return this;
    }
    /**
     * Updates the tree nodes given
     * a D3 tree node.
     * 
     * @param {object} nodeDataItem The D3 node data item to update.
     * @param {object[]} nodes Array of D3 node data items.
     * @returns {object} The tree object.
     */

  }, {
    key: "_updateNodes",
    value: function _updateNodes(nodeDataItem, nodes) {
      var _this10 = this;

      // Normalize for fixed-depth.
      // You can increase the depth multiplication to get more depth,
      // i.e. increasing the distance between the parent node and child node
      nodes.forEach(function (data) {
        return data.y = data.depth * _this10.getNodeDepthMultiplier();
      }); // ****************** Nodes section ***************************
      // Update the nodes...

      var nodes = this.getPanningContainer().selectAll("g.node") // The second parameter of data() takes in a 
      // function, determining the key of the data
      // items, which is useful to retrieve items,
      // and databind them
      .data(nodes, function (data) {
        return _this10.getId.call(_this10, data.data);
      }); // Enter any new nodes at the parent's previous position.

      var nodeEnter = nodes.enter().append("g").classed("node", true).attr("transform", function (data, index, arr) {
        if (_this10.getOrientation().toLowerCase() === 'toptobottom') return "translate(" + nodeDataItem.x0 + "," + nodeDataItem.y0 + ")";else return "translate(" + nodeDataItem.y0 + "," + nodeDataItem.x0 + ")";
      }).on("click", function (data, index, arr) {
        return _this10._onNodeClick.call(_this10, data, index, arr);
      });

      this._nodeEnter(nodeEnter, nodes); // UPDATE


      var nodeUpdate = nodeEnter.merge(nodes);
      var nodeUpdateTransition = nodeUpdate.transition().duration(this.getDuration());
      nodeUpdate.classed("collapsed", function (data, index, arr) {
        if (!data.children && data._children) return true;else if (_this10.loadOnDemandSettings.isEnabled() && _this10.loadOnDemandSettings.hasChildren(data.data) && !data.children && !data._children) // If it does have children to load via AJAX
          return true;
        return false;
      }).classed("expanded", function (data, index, arr) {
        return data.children;
      }).classed("childless", function (data, index, arr) {
        return !data.children && !data._children;
      }).classed("selected", function (data, index, arr) {
        return data.selected;
      });

      this._nodeUpdate(nodeUpdate, nodeUpdateTransition, nodes); // Remove any exiting nodes


      var nodeExit = nodes.exit();
      var nodeExitTransition = nodeExit.transition().duration(this.getDuration());

      this._nodeExit(nodeExit, nodeExitTransition, nodes);

      return this;
    }
    /**
     * Updates the tree node links given
     * a D3 tree node.
     * 
     * @param {object} nodeDataItem The D3 node data item. 
     * @param {object[]} links Array of D3 link data items.
     * @returns {object} The tree object.
     */

  }, {
    key: "_updateLinks",
    value: function _updateLinks(nodeDataItem, links) {
      var _this11 = this;

      var linkPathGenerator = this._getLinkPathGenerator(); // Update the links...


      var link = this.getPanningContainer().selectAll("path.link").data(links, function (data) {
        return _this11.getId.call(_this11, data.data);
      }); // Enter any new links at the parent's previous position.

      var linkEnter = link.enter().insert("path", "g").classed("link", true);

      this._linkEnter(nodeDataItem, linkEnter, link, linkPathGenerator); // UPDATE


      var linkUpdate = linkEnter.merge(link);
      var linkUpdateTransition = linkUpdate.transition().duration(this.getDuration()); // Transition back to the parent element position

      this._linkUpdate(nodeDataItem, linkUpdate, linkUpdateTransition, link, linkPathGenerator); // Remove any exiting links


      var linkExit = link.exit();
      var linkExitTransition = linkExit.transition().duration(this.getDuration());

      this._linkExit(nodeDataItem, linkExit, linkExitTransition, link, linkPathGenerator); // Store the old positions for transition.


      this.getVisibleNodes().forEach(function (data) {
        data.x0 = data.x;
        data.y0 = data.y;
      });
      return this;
    }
    /**
     * Updates the tree given a D3 tree node.
     * 
     * @param {object} nodeDataItem The D3 node data item.
     * @returns {object} The tree object.
     */

  }, {
    key: "update",
    value: function update(nodeDataItem) {
      var treeGenerator = this.getTreeGenerator(); // Assigns the x and y position for the nodes

      var treeData = treeGenerator(this.getRoot());
      this._visibleNodes = treeData.descendants();
      this._nodes = [this.getRoot()].concat(_toConsumableArray(recursiveGet(this.getRoot(), function (node) {
        return node._children;
      })));
      this._links = treeData.descendants().slice(1);

      this._updateNodes(nodeDataItem, this.getVisibleNodes())._updateLinks(nodeDataItem, this.getLinks());

      return this;
    }
    /**
     * Gets the unique ID for a given data item.
     * @callback getIdCallBack
     * @param {object} data Represents the single data item to extract the ID from.
     * @returns {*} The unique ID from the given data item.
     */

    /**
     * Gets the parent ID for a given data item.
     * @callback getParentIdCallBack
     * @param {object} data Represents the single data item to extract the parent ID from.
     * @returns {*} The parent ID from the given data item.
     */

    /**
     * Gets the children items for a given
     * data item.
     * @callback getChildrenCallBack
     * @param {object} data Represents the single data item to extract the children data items from.
     * @returns {object[]} The array of data items representing the children of the given data item.
     */

    /**
     * Node click event, triggered when a
     * user clicks on a tree node.
     * 
     * @typedef {object} nodeClick
     * @property {object} event Object containing various event parameters.
     * @property {string} event.type The type of the operation the click will trigger, whether it's 'focus', 'expand', or 'collapse'.
     * @property {boolean} event.continue Whether to continue the node focusing/expanding/collapsing.
     * @property {function} event.preventDefault Call this function to prevent the default behavior of node focusing/expanding/collapsing.
     * @property {object} event.nodeDataItem Node data item representing the clicked node.
     * @property {object} event.nodeDataItem.data The data item of the clicked node.
     * @property {number} event.nodeDataItemIndex Index of the clicked item in the array of siblings.
     * @property {object[]} event.nodeDataItems The array of sibling rendered SVG elements, inclusive of the node itself.
     */

  }]);

  return BaseTree;
}(events__WEBPACK_IMPORTED_MODULE_3___default.a); // Define option defaults using a class static property


BaseTree.defaults = {
  theme: 'default',
  orientation: 'leftToRight',
  // topToBottom, rightToLeft, bottomToTop
  allowPan: true,
  allowZoom: true,
  allowFocus: true,
  allowNodeCentering: true,
  minScale: 1,
  // Minimum zoom scaling
  maxScale: 2,
  // Maximum zoom scaling
  // You can increase the depth multiplication to get more depth,
  // i.e. increasing the distance between the parent node and child node
  nodeDepthMultiplier: 300,
  isFlatData: false,
  getId: null,
  getParentId: null,
  getChildren: null,
  widthWithoutMargins: 960,
  heightWithoutMargins: 800,
  margins: {
    top: 40,
    right: 20,
    bottom: 40,
    left: 100
  },
  duration: 750,
  loadOnDemandSettings: {// Defaults are defined in the load-on-demand settings prototype
  },
  nodeSettings: {// Defaults are defined in the node settings prototype
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BaseTree);

/***/ }),

/***/ "./src/js/BoxedNodeSettings.js":
/*!*************************************!*\
  !*** ./src/js/BoxedNodeSettings.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NodeSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeSettings */ "./src/js/NodeSettings.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var BoxedNodeSettings = /*#__PURE__*/function (_NodeSettings) {
  _inherits(BoxedNodeSettings, _NodeSettings);

  var _super = _createSuper(BoxedNodeSettings);

  /**
   * @param {object} ownerObject The owner object.
   * @param {object} options The options object.
   * @param {number} [options.bodyBoxWidth=200] Body box width.
   * @param {number} [options.bodyBoxHeight=75] Body box height.
   * @param {object} [options.bodyBoxPadding] Body box padding object.
   * @param {number} [options.bodyBoxPadding.top=5] Body box padding top.
   * @param {number} [options.bodyBoxPadding.right=10] Body box padding right.
   * @param {number} [options.bodyBoxPadding.bottom=5] Body box padding bottom.
   * @param {number} [options.bodyBoxPadding.left=10] Body box padding left.
   * @param {number} [options.titleBoxWidth] Title box width.
   * @param {number} [options.titleBoxHeight=40] Title box height.
   * @param {object} [options.titleBoxPadding] Title box padding object.
   * @param {number} [options.titleBoxPadding.top=2] Title box padding top.
   * @param {number} [options.titleBoxPadding.right=5] Title box padding right.
   * @param {number} [options.titleBoxPadding.bottom=2] Title box padding bottom.
   * @param {number} [options.titleBoxPadding.left=5] Title box padding left.
   */
  function BoxedNodeSettings(ownerObject, options) {
    var _this;

    _classCallCheck(this, BoxedNodeSettings);

    _this = _super.call(this, ownerObject, options);

    var mergedOptions = _objectSpread(_objectSpread({}, BoxedNodeSettings.defaults), options);

    _this._bodyBoxWidth = mergedOptions.bodyBoxWidth;
    _this._bodyBoxHeight = mergedOptions.bodyBoxHeight;
    _this._bodyBoxPadding = mergedOptions.bodyBoxPadding;
    _this._titleBoxWidth = mergedOptions.titleBoxWidth;
    _this._titleBoxHeight = mergedOptions.titleBoxHeight;
    _this._titleBoxPadding = mergedOptions.titleBoxPadding;
    return _this;
  }
  /**
   * Gets the body box width value.
   * 
   * @returns {number} The body box width value.
   */


  _createClass(BoxedNodeSettings, [{
    key: "getBodyBoxWidth",
    value: function getBodyBoxWidth() {
      return this._bodyBoxWidth;
    }
    /**
     * Sets the body box width value.
     * 
     * @param {number} width The body box width value.
     * @returns {object} The node settings object.
     */

  }, {
    key: "setBodyBoxWidth",
    value: function setBodyBoxWidth(width) {
      this._bodyBoxWidth = width;
      return this;
    }
    /**
     * Gets the body box height value.
     * 
     * @returns {number} The body box height value.
     */

  }, {
    key: "getBodyBoxHeight",
    value: function getBodyBoxHeight() {
      return this._bodyBoxHeight;
    }
    /**
     * Sets the body box height value.
     * 
     * @param {number} height The body box height value.
     * @returns {object} The node settings object.
     */

  }, {
    key: "setBodyBoxHeight",
    value: function setBodyBoxHeight(height) {
      this._bodyBoxHeight = height;
      return this;
    }
    /**
     * Sets the body box padding values.
     * 
     * @param {object} newPadding The body box padding object value.
     * @param {number} newPadding.top The body box padding top value.
     * @param {number} newPadding.right The body box padding right value.
     * @param {number} newPadding.bottom The body box padding bottom value.
     * @param {number} newPadding.left The body box padding left value.
     * @returns {object} The node settings object.
     */

  }, {
    key: "setBodyBoxPadding",
    value: function setBodyBoxPadding(newPadding) {
      this._bodyBoxPadding = newPadding;
      return this;
    }
    /**
     * Gets the body box padding values.
     * 
     * @returns {object} The body box padding object.
     */

  }, {
    key: "getBodyBoxPadding",
    value: function getBodyBoxPadding() {
      return this._bodyBoxPadding;
    }
    /**
     * Gets the title box width value.
     * 
     * @returns {number} The title box width value.
     */

  }, {
    key: "getTitleBoxWidth",
    value: function getTitleBoxWidth() {
      if (this._titleBoxWidth) return this._titleBoxWidth;else return this.getBodyBoxWidth() / 2;
    }
    /**
     * Sets the title box width value.
     * 
     * @param {number} width The title box width value.
     * @returns {object} The node settings object.
     */

  }, {
    key: "setTitleBoxWidth",
    value: function setTitleBoxWidth(width) {
      this._titleBoxWidth = width;
      return this;
    }
    /**
     * Gets the title box height value.
     * 
     * @returns {number} The title box height value.
     */

  }, {
    key: "getTitleBoxHeight",
    value: function getTitleBoxHeight() {
      return this._titleBoxHeight;
    }
    /**
     * Sets the title box height value.
     * 
     * @param {number} height The title box height value.
     * @returns {object} The node settings object.
     */

  }, {
    key: "setTitleBoxHeight",
    value: function setTitleBoxHeight(height) {
      this._titleBoxHeight = height;
      return this;
    }
    /**
     * Gets the title box padding values.
     * 
     * @returns {object} The title box padding object.
     */

  }, {
    key: "getTitleBoxPadding",
    value: function getTitleBoxPadding() {
      return this._titleBoxPadding;
    }
    /**
     * Sets the title box padding values.
     * 
     * @param {object} newPadding The body box padding object value.
     * @param {number} newPadding.top The body box padding top value.
     * @param {number} newPadding.right The body box padding right value.
     * @param {number} newPadding.bottom The body box padding bottom value.
     * @param {number} newPadding.left The body box padding left value.
     * @returns {object} The node settings object.
     */

  }, {
    key: "setTitleBoxPadding",
    value: function setTitleBoxPadding(newPadding) {
      this._titleBoxPadding = newPadding;
      return this;
    }
  }]);

  return BoxedNodeSettings;
}(_NodeSettings__WEBPACK_IMPORTED_MODULE_0__["default"]);

BoxedNodeSettings.defaults = {
  bodyBoxWidth: 200,
  bodyBoxHeight: 75,
  bodyBoxPadding: {
    top: 5,
    right: 10,
    bottom: 5,
    left: 10
  },
  titleBoxWidth: null,
  titleBoxHeight: 40,
  titleBoxPadding: {
    top: 2,
    right: 5,
    bottom: 2,
    left: 5
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BoxedNodeSettings);

/***/ }),

/***/ "./src/js/BoxedTree.js":
/*!*****************************!*\
  !*** ./src/js/BoxedTree.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomD3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomD3 */ "./src/js/CustomD3.js");
/* harmony import */ var d3plus_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3plus-text */ "./node_modules/d3plus-text/es/index.js");
/* harmony import */ var _BaseTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseTree */ "./src/js/BaseTree.js");
/* harmony import */ var _BoxedNodeSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoxedNodeSettings */ "./src/js/BoxedNodeSettings.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var BoxedTree = /*#__PURE__*/function (_BaseTree) {
  _inherits(BoxedTree, _BaseTree);

  var _super = _createSuper(BoxedTree);

  /** 
   * @param {object} options The options object.
   * @param {bodyDisplayTextAccessorCallBack} options.getBodyDisplayText Determines how to obtain the body text to display for a node corresponding to a data item.
   * @param {titleDisplayTextAccessorCallBack} options.getTitleDisplayText Determines how to obtain the title text to display for a node corresponding to a data item.
  */
  function BoxedTree(options) {
    var _this;

    _classCallCheck(this, BoxedTree);

    _this = _super.call(this, options);

    var mergedOptions = _objectSpread(_objectSpread(_objectSpread({}, _BaseTree__WEBPACK_IMPORTED_MODULE_2__["default"].defaults), BoxedTree.defaults), options);

    _this._getBodyDisplayText = mergedOptions.getBodyDisplayText;
    _this._getTitleDisplayText = mergedOptions.getTitleDisplayText;
    _this.nodeSettings = new _BoxedNodeSettings__WEBPACK_IMPORTED_MODULE_3__["default"](_assertThisInitialized(_this), mergedOptions.nodeSettings);
    return _this;
  }
  /** @inheritdoc */


  _createClass(BoxedTree, [{
    key: "initialize",
    value: function initialize() {
      _get(_getPrototypeOf(BoxedTree.prototype), "initialize", this).call(this); // Create the svg, and set its dimensions


      this.getSvg().classed('boxed-tree', true);
      return this;
    }
    /** @inheritdoc */

  }, {
    key: "_nodeEnter",
    value: function _nodeEnter(nodeEnter, nodes) {
      var self = this; // Declare box dimensions

      var nodeBodyBoxWidth = self.nodeSettings.getBodyBoxWidth();
      var nodeBodyBoxHeight = self.nodeSettings.getBodyBoxHeight();
      var nodeBodyBoxPadding = self.nodeSettings.getBodyBoxPadding();
      var nodeTitleBoxWidth = self.nodeSettings.getTitleBoxWidth();
      var nodeTitleBoxHeight = self.nodeSettings.getTitleBoxHeight();
      var nodeTitleBoxPadding = self.nodeSettings.getTitleBoxPadding();
      /* Add Body Rectangle and Text for Node */

      var bodyGroups = nodeEnter.append("g").classed("body-group", true);
      bodyGroups.append("rect").classed("body-box", true).attr("width", 0.000001).attr("height", 0.000001);
      bodyGroups.each(function (data, index, arr) {
        var element = this;
        var selection = _CustomD3__WEBPACK_IMPORTED_MODULE_0__["default"].select(element);
        var singledOutData = [];
        singledOutData.push(data);
        var recalculatedPaddingTop = nodeBodyBoxPadding.top;

        if (self.getTitleDisplayText.call(self, data)) {
          recalculatedPaddingTop += nodeTitleBoxHeight / 2;
        } // D3Plus Textbox with resizing capability


        var d3PlusBodyTextBox = new d3plus_text__WEBPACK_IMPORTED_MODULE_1__["TextBox"]().select(element) // Sets the D3Plus code to append to the specified DOM element.
        .data(singledOutData).text(function (data, index, arr) {
          return self.getBodyDisplayText.call(self, data);
        }).textAnchor("middle").verticalAlign("middle").fontSize(13) // in pixels
        .x(nodeBodyBoxPadding.left).y(recalculatedPaddingTop - nodeBodyBoxHeight / 2).width(nodeBodyBoxWidth - nodeBodyBoxPadding.left - nodeBodyBoxPadding.right).height(nodeBodyBoxHeight - recalculatedPaddingTop - nodeBodyBoxPadding.bottom).ellipsis(function (text, line) {
          // If text was cut-off, add tooltip
          selection.append("title").text(self.getBodyDisplayText(data));
          return text.replace(/\.|,$/g, "") + "...";
        }).render();
      });
      /* Add Title Rectangle and Text for Node */

      var titleGroups = nodeEnter.append("g").classed("title-group", true).attr("transform", "translate(" + -nodeTitleBoxWidth / 3 + ", " + (-nodeTitleBoxHeight / 2 - nodeBodyBoxHeight / 2) + ")");
      titleGroups.each(function (data, index, arr) {
        if (!self.getTitleDisplayText.call(self, data)) return;
        var element = this;
        var selection = _CustomD3__WEBPACK_IMPORTED_MODULE_0__["default"].select(element);
        var singledOutData = [];
        singledOutData.push(data);
        selection.append("rect").classed("title-box", true).attr("width", nodeTitleBoxWidth).attr("height", nodeTitleBoxHeight); // D3Plus Textbox with resizing capability

        var d3PlusTitleTextBox = new d3plus_text__WEBPACK_IMPORTED_MODULE_1__["TextBox"]().select(element) // Sets the D3Plus code to append to the DOM element.
        .data(singledOutData).text(function (data, index, arr) {
          return self.getTitleDisplayText.call(self, data);
        }).textAnchor("middle").verticalAlign("middle").x(nodeTitleBoxPadding.left).y(nodeTitleBoxPadding.top).fontWeight(700).fontMin(6).fontMax(16).fontResize(true) // Resizes the text to fit the content
        .width(nodeTitleBoxWidth - nodeTitleBoxPadding.left - nodeTitleBoxPadding.right).height(nodeTitleBoxHeight - nodeTitleBoxPadding.top - nodeTitleBoxPadding.bottom).render();
      });
      return self;
    }
    /** @inheritdoc */

  }, {
    key: "_nodeUpdate",
    value: function _nodeUpdate(nodeUpdate, nodeUpdateTransition, nodes) {
      // Transition to the proper position for the node
      // Translating while inverting X/Y to
      // make tree direction from left to right,
      // instead of the typical top-to-down tree
      if (this.getOrientation().toLowerCase() === 'toptobottom') {
        nodeUpdateTransition.attr("transform", function (data, index, arr) {
          return "translate(" + data.x + "," + data.y + ")";
        });
      } else {
        nodeUpdateTransition.attr("transform", function (data, index, arr) {
          return "translate(" + data.y + "," + data.x + ")";
        });
      }

      var nodeBodyBoxWidth = this.nodeSettings.getBodyBoxWidth();
      var nodeBodyBoxHeight = this.nodeSettings.getBodyBoxHeight(); // Update the node attributes and style

      nodeUpdate.select(".node .body-group .body-box").attr("y", -(nodeBodyBoxHeight / 2)).attr("width", nodeBodyBoxWidth).attr("height", nodeBodyBoxHeight);
      nodeUpdate.select(".d3plus-textBox").style("fill-opacity", 1);
      return this;
    }
    /** @inheritdoc */

  }, {
    key: "_nodeExit",
    value: function _nodeExit(nodeExit, nodeExitTransition, nodes) {
      var _this2 = this;

      var nodeBodyBoxWidth = this.nodeSettings.getBodyBoxWidth();
      var nodeBodyBoxHeight = this.nodeSettings.getBodyBoxHeight();
      nodeExitTransition.attr("transform", function (data, index, arr) {
        var highestCollapsingParent = data.parent;

        while (highestCollapsingParent.parent && !highestCollapsingParent.parent.children) {
          highestCollapsingParent = highestCollapsingParent.parent;
        }

        if (_this2.getOrientation().toLowerCase() === 'toptobottom') {
          return "translate(" + (highestCollapsingParent.x + nodeBodyBoxWidth / 2) + "," + (highestCollapsingParent.y + nodeBodyBoxHeight) + ")";
        } else {
          // Translating while inverting X/Y to
          // make tree direction from left to right,
          // instead of the typical top-to-down tree
          return "translate(" + (highestCollapsingParent.y + nodeBodyBoxWidth) + "," + (highestCollapsingParent.x + nodeBodyBoxHeight / 2) + ")";
        }
      }).remove(); // On exit animate out

      nodeExitTransition.select(".node .body-group rect").attr("width", 0.000001).attr("height", 0.000001);
      nodeExitTransition.select(".node .body-group .d3plus-textBox").style("fill-opacity", 0.000001).attr("transform", function (data, index, arr) {
        return "translate(0," + -nodeBodyBoxHeight / 2 + ")";
      }).selectAll("text").style("font-size", 0).attr("y", "0px").attr("x", "0px");
      nodeExitTransition.select(".node .title-group").attr("transform", "translate(0, " + -nodeBodyBoxHeight / 2 + ")");
      nodeExitTransition.select(".node .title-group rect").attr("width", 0.000001).attr("height", 0.000001);
      nodeExitTransition.select(".node .title-group .d3plus-textBox").style("fill-opacity", 0.000001).attr("transform", "translate(0,0)").selectAll("text").style("font-size", 0).attr("y", "0px").attr("x", "0px"); // On exit reduce the opacity of text labels

      nodeExitTransition.select(".d3plus-textBox").style("fill-opacity", 0.000001);
      return this;
    }
    /** @inheritdoc */

  }, {
    key: "_getNodeSize",
    value: function _getNodeSize() {
      if (this.getOrientation().toLowerCase() === 'toptobottom') {
        return [this.nodeSettings.getBodyBoxWidth() + this.nodeSettings.getHorizontalSpacing(), this.nodeSettings.getBodyBoxHeight() + this.nodeSettings.getVerticalSpacing()];
      } else {
        return [this.nodeSettings.getBodyBoxHeight() + this.nodeSettings.getVerticalSpacing(), this.nodeSettings.getBodyBoxWidth() + this.nodeSettings.getHorizontalSpacing()];
      }
    }
    /** @inheritdoc */

  }, {
    key: "_linkEnter",
    value: function _linkEnter(source, linkEnter, links, linkPathGenerator) {
      linkEnter.attr("d", function (data, index, arr) {
        var sourceCoordinate = {
          x: source.x0,
          y: source.y0
        };
        var coordinatesObject = {
          source: sourceCoordinate,
          target: sourceCoordinate
        };
        return linkPathGenerator(coordinatesObject);
      });
      return this;
    }
    /** @inheritdoc */

  }, {
    key: "_linkUpdate",
    value: function _linkUpdate(source, linkUpdate, linkUpdateTransition, links, linkPathGenerator) {
      linkUpdateTransition.attr("d", function (data, index, arr) {
        var sourceCoordinate = data;
        var targetCoordinate = data.parent;
        var coordinatesObject = {
          source: sourceCoordinate,
          target: targetCoordinate
        };
        return linkPathGenerator(coordinatesObject);
      });
      return this;
    }
    /** @inheritdoc */

  }, {
    key: "_linkExit",
    value: function _linkExit(source, linkExit, linkExitTransition, links, linkPathGenerator) {
      var _this3 = this;

      linkExitTransition.attr("d", function (data, index, arr) {
        var highestCollapsingParent = data.parent;

        while (highestCollapsingParent.parent && !highestCollapsingParent.parent.children) {
          highestCollapsingParent = highestCollapsingParent.parent;
        }

        var sourceCoordinate = null;

        if (_this3.getOrientation().toLowerCase() === 'toptobottom') {
          var nodeBodyBoxHeight = _this3.nodeSettings.getBodyBoxHeight();

          sourceCoordinate = {
            x: highestCollapsingParent.x,
            y: highestCollapsingParent.y + nodeBodyBoxHeight
          };
        } else {
          var nodeBodyBoxWidth = _this3.nodeSettings.getBodyBoxWidth();

          sourceCoordinate = {
            x: highestCollapsingParent.x,
            y: highestCollapsingParent.y + nodeBodyBoxWidth
          };
        }

        var targetCoordinate = {
          x: highestCollapsingParent.x,
          y: highestCollapsingParent.y
        };
        var coordinatesObject = {
          source: sourceCoordinate,
          target: targetCoordinate
        };
        return linkPathGenerator(coordinatesObject);
      });
      return this;
    }
    /** @inheritdoc */

  }, {
    key: "_getLinkPathGenerator",
    value: function _getLinkPathGenerator() {
      // Declare box dimensions
      var nodeBodyBoxWidth = this.nodeSettings.getBodyBoxWidth();
      var nodeBodyBoxHeight = this.nodeSettings.getBodyBoxHeight(); // We specify arrow functions that returns
      // an array specifying how to get the
      // the x/y cordinates from the object,
      // in the format of [x, y], the default
      // format for the link generator to
      // generate the path

      if (this.getOrientation().toLowerCase() === 'toptobottom') {
        return _CustomD3__WEBPACK_IMPORTED_MODULE_0__["default"].linkVertical().source(function (data) {
          return [data.source.x + nodeBodyBoxWidth / 2, data.source.y - nodeBodyBoxHeight / 2];
        }).target(function (data) {
          return [data.target.x + nodeBodyBoxWidth / 2, data.target.y + nodeBodyBoxHeight / 2];
        });
      } else {
        return _CustomD3__WEBPACK_IMPORTED_MODULE_0__["default"].linkHorizontal() // Inverts the X/Y coordinates to draw links for a
        // tree starting from left to right,
        // instead of the typical top-to-down tree
        .source(function (data) {
          return [data.source.y, data.source.x];
        }).target(function (data) {
          return [data.target.y + nodeBodyBoxWidth, data.target.x];
        });
      }
    }
    /** @inheritdoc */

  }, {
    key: "validateSettings",
    value: function validateSettings() {
      _get(_getPrototypeOf(BoxedTree.prototype), "validateSettings", this).call(this);

      if (!this._getBodyDisplayText) throw "Need to define the getBodyDisplayText function as part of the options";
      return this;
    }
    /**
     * Sets the body display text accessor,
     * used to get the body display text
     * for the nodes.
     * 
     * @param {bodyDisplayTextAccessorCallBack} newBodyDisplayTextAccessor 
     */

  }, {
    key: "setBodyDisplayTextAccessor",
    value: function setBodyDisplayTextAccessor(newBodyDisplayTextAccessor) {
      this._getBodyDisplayText = newBodyDisplayTextAccessor;
      return this;
    }
    /**
     * Gets the body display text for a given data item.
     * 
     * @param {object} nodeDataItem The data item to get the body display text from.
     * @returns {string} The body display text to render for the node.
     */

  }, {
    key: "getBodyDisplayText",
    value: function getBodyDisplayText(nodeDataItem) {
      // Note that data in this context refers to D3 Tree data, not the original item data
      // To Access the original item data, use the ".data" property
      return this._getBodyDisplayText(nodeDataItem.data);
    }
    /**
     * Sets the title display text accessor,
     * used to get the title display text
     * for the nodes.
     * 
     * @param {titleDisplayTextAccessorCallBack} newTitleDisplayTextAccessor 
     */

  }, {
    key: "setTitleDisplayTextAccessor",
    value: function setTitleDisplayTextAccessor(newTitleDisplayTextAccessor) {
      this._getTitleDisplayText = newTitleDisplayTextAccessor;
      return this;
    }
    /**
     * Gets the title display text for a given data item.
     * 
     * @param {object} nodeDataItem The D3 node data item to get the title display text from.
     * @returns {string} The title display text to render for the node.
     */

  }, {
    key: "getTitleDisplayText",
    value: function getTitleDisplayText(nodeDataItem) {
      // Note that data in this context refers to D3 Tree data, not the original item data
      // To Access the original item data, use the ".data" property
      return this._getTitleDisplayText(nodeDataItem.data);
    }
    /** @inheritdoc */

  }, {
    key: "centerNode",
    value: function centerNode(nodeDataItem) {
      var nodeBodyBoxWidth = this.nodeSettings.getBodyBoxWidth();
      var nodeBodyBoxHeight = this.nodeSettings.getBodyBoxHeight();

      if (this.getOrientation().toLowerCase() === 'toptobottom') {
        nodeDataItem.x0 = nodeDataItem.x0;
        nodeDataItem.y0 = nodeDataItem.y0 + nodeBodyBoxHeight / 2;
      } else {
        nodeDataItem.y0 = nodeDataItem.y0 + nodeBodyBoxWidth / 2;
        nodeDataItem.x0 = nodeDataItem.x0;
      }

      return _get(_getPrototypeOf(BoxedTree.prototype), "centerNode", this).call(this, nodeDataItem);
    }
    /**
     * Determines how to obtain the body text
     * to display for a node corresponding
     * to a data item.
     * 
     * @callback bodyDisplayTextAccessorCallBack
     * @param {object} data The data item to get the body display text from.
     * @returns {string} The body display text to render for the node.
     */

    /**
     * Determines how to obtain the title text
     * to display for a node corresponding
     * to a data item.
     * 
     * @callback titleDisplayTextAccessorCallBack
     * @param {object} data The data item to get the title display text from.
     * @returns {string} The title display text to render for the node.
     */

  }]);

  return BoxedTree;
}(_BaseTree__WEBPACK_IMPORTED_MODULE_2__["default"]);

BoxedTree.defaults = {
  getBodyDisplayText: null,
  getTitleDisplayText: function getTitleDisplayText(dataItem) {
    return null;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BoxedTree);

/***/ }),

/***/ "./src/js/CircleNodeSettings.js":
/*!**************************************!*\
  !*** ./src/js/CircleNodeSettings.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NodeSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeSettings */ "./src/js/NodeSettings.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CircleNodeSettings = /*#__PURE__*/function (_NodeSettings) {
  _inherits(CircleNodeSettings, _NodeSettings);

  var _super = _createSuper(CircleNodeSettings);

  function CircleNodeSettings() {
    _classCallCheck(this, CircleNodeSettings);

    return _super.apply(this, arguments);
  }

  return _createClass(CircleNodeSettings);
}(_NodeSettings__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (CircleNodeSettings);

/***/ }),

/***/ "./src/js/CircleTree.js":
/*!******************************!*\
  !*** ./src/js/CircleTree.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomD3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomD3 */ "./src/js/CustomD3.js");
/* harmony import */ var _BaseTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseTree */ "./src/js/BaseTree.js");
/* harmony import */ var _CircleNodeSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CircleNodeSettings */ "./src/js/CircleNodeSettings.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var CircleTree = /*#__PURE__*/function (_BaseTree) {
  _inherits(CircleTree, _BaseTree);

  var _super = _createSuper(CircleTree);

  /**
   * @param {object} [options] The options object.
   * @param {displayTextAccessorCallBack} [options.getDisplayText] Determines how to obtain the text to display for a node corresponding to a data item.
   */
  function CircleTree(options) {
    var _this;

    _classCallCheck(this, CircleTree);

    _this = _super.call(this, options);

    var mergedOptions = _objectSpread(_objectSpread(_objectSpread({}, _BaseTree__WEBPACK_IMPORTED_MODULE_1__["default"].defaults), CircleTree.defaults), options);

    _this._getDisplayText = mergedOptions.getDisplayText;
    _this.nodeSettings = new _CircleNodeSettings__WEBPACK_IMPORTED_MODULE_2__["default"](_assertThisInitialized(_this), mergedOptions.nodeSettings);
    return _this;
  }
  /** @inheritdoc */


  _createClass(CircleTree, [{
    key: "initialize",
    value: function initialize() {
      // Create the svg, and set its dimensions
      _get(_getPrototypeOf(CircleTree.prototype), "initialize", this).call(this);

      this.getSvg().classed('circle-tree', true);
      return this;
    }
    /** @inheritdoc */

  }, {
    key: "_nodeEnter",
    value: function _nodeEnter(nodeEnter, nodes) {
      var _this2 = this;

      // Add Circle for the nodes
      nodeEnter.append("circle").attr("r", "0.5em"); // Add labels for the nodes

      nodeEnter.append("text").text(function (data, index, arr) {
        return _this2.getDisplayText.call(_this2, data);
      });
      return this;
    }
    /** @inheritdoc */

  }, {
    key: "_nodeUpdate",
    value: function _nodeUpdate(nodeUpdate, nodeUpdateTransition, nodes) {
      nodeUpdate.classed('middle', function (data, index, arr) {
        var isMiddleChild = false;

        if (data.parent && data.parent.children.length % 2 !== 0) {
          var siblings = data.parent.children;
          var indexOfSiblings = siblings.indexOf(data);
          if (indexOfSiblings === Math.floor(siblings.length / 2)) isMiddleChild = true;
        }

        return isMiddleChild;
      }); // Transition to the proper position for the node
      // Translating while inverting X/Y to
      // make tree direction from left to right,
      // instead of the typical top-to-down tree

      if (this.getOrientation().toLowerCase() === 'toptobottom') {
        nodeUpdateTransition.attr("transform", function (data, index, arr) {
          return "translate(" + data.x + "," + data.y + ")";
        });
      } else {
        nodeUpdateTransition.attr("transform", function (data, index, arr) {
          return "translate(" + data.y + "," + data.x + ")";
        });
      }

      nodeUpdate.select("text").style("fill-opacity", 1);
      return this;
    }
    /** @inheritdoc */

  }, {
    key: "_nodeExit",
    value: function _nodeExit(nodeExit, nodeExitTransition, nodes) {
      var _this3 = this;

      // Remove any exiting nodes
      nodeExitTransition.attr("transform", function (data, index, arr) {
        var highestCollapsingParent = data.parent;

        while (highestCollapsingParent.parent && !highestCollapsingParent.parent.children) {
          highestCollapsingParent = highestCollapsingParent.parent;
        } // Translating while inverting X/Y to
        // make tree direction from left to right,
        // instead of the typical top-to-down tree


        if (_this3.getOrientation().toLowerCase() === 'toptobottom') {
          return "translate(" + highestCollapsingParent.x + "," + highestCollapsingParent.y + ")";
        } else {
          return "translate(" + highestCollapsingParent.y + "," + highestCollapsingParent.x + ")";
        }
      }).remove(); // On exit reduce the node circles size to 0

      nodeExitTransition.select("circle").attr("r", "0.000001em"); // On exit reduce the opacity of text labels

      nodeExitTransition.select("text").style("fill-opacity", 0.000001);
      return this;
    }
    /** @inheritdoc */

  }, {
    key: "_getNodeSize",
    value: function _getNodeSize() {
      return [this.nodeSettings.getVerticalSpacing(), this.nodeSettings.getHorizontalSpacing()];
    }
    /** @inheritdoc */

  }, {
    key: "_linkEnter",
    value: function _linkEnter(source, linkEnter, links, linkPathGenerator) {
      linkEnter.attr("d", function (data, index, arr) {
        var sourceCoordinate = {
          x: source.x0,
          y: source.y0
        };
        var coordinatesObject = {
          source: sourceCoordinate,
          target: sourceCoordinate
        };
        return linkPathGenerator(coordinatesObject);
      });
      return this;
    }
    /** @inheritdoc */

  }, {
    key: "_linkUpdate",
    value: function _linkUpdate(source, linkUpdate, linkUpdateTransition, links, linkPathGenerator) {
      linkUpdateTransition.attr("d", function (data, index, arr) {
        var sourceCoordinate = data;
        var targetCoordinate = data.parent;
        var coordinatesObject = {
          source: sourceCoordinate,
          target: targetCoordinate
        };
        return linkPathGenerator(coordinatesObject);
      });
      return this;
    }
    /** @inheritdoc */

  }, {
    key: "_linkExit",
    value: function _linkExit(source, linkExit, linkExitTransition, links, linkPathGenerator) {
      linkExitTransition.attr("d", function (data, index, arr) {
        var highestCollapsingParent = data.parent;

        while (highestCollapsingParent.parent && !highestCollapsingParent.parent.children) {
          highestCollapsingParent = highestCollapsingParent.parent;
        }

        var sourceCoordinate = {
          x: highestCollapsingParent.x,
          y: highestCollapsingParent.y
        };
        var targetCoordinate = {
          x: highestCollapsingParent.x,
          y: highestCollapsingParent.y
        };
        var coordinatesObject = {
          source: sourceCoordinate,
          target: targetCoordinate
        };
        return linkPathGenerator(coordinatesObject);
      });
      return this;
    }
    /** @inheritdoc */

  }, {
    key: "_getLinkPathGenerator",
    value: function _getLinkPathGenerator() {
      // We specify arrow functions that returns
      // an array specifying how to get the
      // the x/y cordinates from the object,
      // in the format of [x, y], the default
      // format for the link generator to
      // generate the path
      if (this.getOrientation().toLowerCase() === 'toptobottom') {
        return _CustomD3__WEBPACK_IMPORTED_MODULE_0__["default"].linkVertical().source(function (data) {
          return [data.source.x, data.source.y];
        }).target(function (data) {
          return [data.target.x, data.target.y];
        });
      } else {
        return _CustomD3__WEBPACK_IMPORTED_MODULE_0__["default"].linkHorizontal() // Inverts the X/Y coordinates to draw links for a
        // tree starting from left to right,
        // instead of the typical top-to-down tree
        .source(function (data) {
          return [data.source.y, data.source.x];
        }).target(function (data) {
          return [data.target.y, data.target.x];
        });
      }
    }
    /** @inheritdoc */

  }, {
    key: "validateSettings",
    value: function validateSettings() {
      _get(_getPrototypeOf(CircleTree.prototype), "validateSettings", this).call(this);

      if (!this.getDisplayText) throw "Need to define the getDisplayText function as part of the options";
      return this;
    }
    /**
     * Sets the display text accessor,
     * used to get the display text
     * for the nodes.
     * 
     * @param {displayTextAccessorCallBack} newDisplayTextAccessor 
     */

  }, {
    key: "setDisplayTextAccessor",
    value: function setDisplayTextAccessor(newDisplayTextAccessor) {
      this._getDisplayText = newDisplayTextAccessor;
      return this;
    }
    /**
     * Gets the display text for a given data item.
     * 
     * @param {object} nodeDataItem The data item to get the display text from.
     * @returns {string} The display text to render for the node.
     */

  }, {
    key: "getDisplayText",
    value: function getDisplayText(nodeDataItem) {
      // Note that data in this context refers to D3 Tree data, not the original item data
      // To Access the original item data, use the ".data" property
      return this._getDisplayText(nodeDataItem.data);
    }
    /**
     * Determines how to obtain the text
     * to display for a node corresponding
     * to a data item.
     * 
     * @callback displayTextAccessorCallBack
     * @param {object} data The data item to get the display text from.
     * @returns {string} The display text to render for the node.
     */

  }]);

  return CircleTree;
}(_BaseTree__WEBPACK_IMPORTED_MODULE_1__["default"]);

CircleTree.defaults = {
  getDisplayText: function getDisplayText(nodeDataItem) {
    return null;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CircleTree);

/***/ }),

/***/ "./src/js/CustomD3.js":
/*!****************************!*\
  !*** ./src/js/CustomD3.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-hierarchy */ "./node_modules/d3-hierarchy/src/index.js");
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-zoom */ "./node_modules/d3-zoom/src/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * We only import the necessary modules
 * from D3, to keep resulting bundded
 * JS files minimal in size.
 */



 // create a Object with only the subset of functions/submodules/plugins that we need

var d3 = _objectSpread(_objectSpread({
  select: d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"],
  selectAll: d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"],

  // For more information on live bindings, refer to:
  //   https://stackoverflow.com/questions/40012016/importing-d3-event-into-a-custom-build-using-rollup
  get event() {
    return d3_selection__WEBPACK_IMPORTED_MODULE_0__["event"];
  },

  linkHorizontal: d3_shape__WEBPACK_IMPORTED_MODULE_3__["linkHorizontal"],
  linkVertical: d3_shape__WEBPACK_IMPORTED_MODULE_3__["linkVertical"]
}, d3_hierarchy__WEBPACK_IMPORTED_MODULE_1__), d3_zoom__WEBPACK_IMPORTED_MODULE_2__);

/* harmony default export */ __webpack_exports__["default"] = (d3);

/***/ }),

/***/ "./src/js/LoadOnDemandSettings.js":
/*!****************************************!*\
  !*** ./src/js/LoadOnDemandSettings.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var LoadOnDemandSettings = /*#__PURE__*/function () {
  /**
   * 
   * @param {object} ownerObject The owner object.
   * @param {object} options The options object.
   * @param {hasChildrenCallBack} options.hasChildren Sets the hasChildren callback function, used to determine whether a node or data item has children or not.
   * @param {loadChildrenCallBack} options.loadChildren the loadChildren callback function, used to load children data items for a node.
   */
  function LoadOnDemandSettings(ownerObject, options) {
    _classCallCheck(this, LoadOnDemandSettings);

    // Define option defaults
    var mergedOptions = _objectSpread(_objectSpread({}, LoadOnDemandSettings.defaults), options);

    this._ownerObject = ownerObject;
    this._hasChildren = mergedOptions.hasChildren;
    this._loadChildren = mergedOptions.loadChildren;
  }
  /**
   * Gets the owner object.
   * 
   * @returns {object} The owner object.
   */


  _createClass(LoadOnDemandSettings, [{
    key: "back",
    value: function back() {
      return this._ownerObject;
    }
    /**
     * Validates whether the provided
     * settings are correct or not.
     * 
     * @returns {object} The tree object.
     */

  }, {
    key: "validateSettings",
    value: function validateSettings() {
      if (!this.hasChildren && this.loadChildren) throw "With load on demand enabled, you need to define hasChildren as part of the options";
      if (!this.loadChildren && this.hasChildren) throw "With load on demand enabled, you need to define loadChildren as part of the options";
      return this;
    }
    /**
     * Load the children for a given data object.
     * 
     * @param {*} data The data item, which should be used to load the children of the data item via AJAX.
     * @param {*} processData Callback function to process the children data items.
     * @returns {*}
     */

  }, {
    key: "loadChildren",
    value: function loadChildren(data, processData) {
      return this._loadChildren.call(this._ownerObject, data, processData);
    }
    /**
     * Returns a boolean indicating whether
     * the passed data item has children.
     * 
     * @param {object} dataItem The data item to check if it has children or not.
     * @returns {boolean} Whether the data item has children or not.
     */

  }, {
    key: "hasChildren",
    value: function hasChildren(dataItem) {
      return this._hasChildren.call(this._ownerObject, dataItem);
    }
    /**
     * Sets the loadChildren callback function,
     * used to load children data items for
     * a node.
     * 
     * @param {loadChildrenCallBack} newLoadChildrenMethod
     * @returns {object} The tree object.
     */

  }, {
    key: "setLoadChildrenMethod",
    value: function setLoadChildrenMethod(newLoadChildrenMethod) {
      this._loadChildren = newLoadChildrenMethod;
      return this;
    }
    /**
     * Sets the hasChildren callback function,
     * used to determine whether a node
     * or data item has children or not.
     * 
     * @param {hasChildrenCallBack} newHasChildrenMethod
     * @returns {object} The tree object.
     */

  }, {
    key: "setHasChildrenMethod",
    value: function setHasChildrenMethod(newHasChildrenMethod) {
      this._hasChildren = newHasChildrenMethod;
      return this;
    }
    /**
     * Returns a boolean indicating whether
     * load-on-demand is enabled or not.
     * 
     * @returns {boolean} Whether load-on-demand is enabled or not.
     */

  }, {
    key: "isEnabled",
    value: function isEnabled() {
      return this._hasChildren || this._loadChildren;
    }
    /**
     * Determines whether a node data item
     * has children or not.
     * 
     * @callback hasChildrenCallBack
     * @param {object} dataItem Can be used to to load the childrens from the server via AJAX.
     * @returns {boolean} True if the node or data item has children to load via AJAX, false otherwise.
     */

    /**
     * Load the children items for a given
     * node data item.
     * @callback loadChildrenCallBack
     * @param {object} nodeDataItem Node data item, which can be used to to load the childrens from the server via AJAX.
     * @param {object} nodeDataItem.data The data item, which can be used to to load the childrens from the server via AJAX.
     * @param {childrenDataProcessorCallBack} processData Data processor callback function which you should use to call, passing in the children data that's been loaded via AJAX.
     * @returns {undefined}
     */

    /**
     * Processes the children items.
     * @callback childrenDataProcessorCallBack
     * @param {object[]} childrenDataItems The array of children data for the node being processed.
     * @returns {undefined}
     */

  }]);

  return LoadOnDemandSettings;
}();

LoadOnDemandSettings.defaults = {
  // Takes in a function that accepts a parameter:
  // - The node and data item which can be used
  //   to load the childrens from server
  // Returns true or false
  hasChildren: null,
  // Takes in a function that accepts two parameters:
  // - The node and data item which can be used
  //   to load the childrens from server
  // - the data processor function, which
  //   you should call, passing in the
  //   children data you loaded with
  //   your server AJAX request
  loadChildren: null
};
/* harmony default export */ __webpack_exports__["default"] = (LoadOnDemandSettings);

/***/ }),

/***/ "./src/js/NodeSettings.js":
/*!********************************!*\
  !*** ./src/js/NodeSettings.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var NodeSettings = /*#__PURE__*/function () {
  /**
   * @param {object} ownerObject The owner object
   * @param {object} options The options for the node settings.
   * @param {('nodeSize'|'size')} [options.sizingMode=size] The sizing mode. Should be either 'nodeSize' to automatically size the SVG based on the nodes, or 'size' to use the configured width and height.
   * @param {number} [options.horizontalSpacing=25] The horizontal spacing value.
   * @param {number} [options.verticalSpacing=25] The vertical spacing value.
   */
  function NodeSettings(ownerObject, options) {
    _classCallCheck(this, NodeSettings);

    var mergedOptions = _objectSpread(_objectSpread({}, NodeSettings.defaults), options);

    this._ownerObject = ownerObject;
    this._sizingMode = mergedOptions.sizingMode;
    this._horizontalSpacing = mergedOptions.horizontalSpacing;
    this._verticalSpacing = mergedOptions.verticalSpacing;
  }
  /**
   * Gets the owner object.
   * 
   * @returns {object} The owner object.
   */


  _createClass(NodeSettings, [{
    key: "back",
    value: function back() {
      return this._ownerObject;
    }
    /**
     * Gets the horizontal spacing value.
     * 
     * @returns {number} The horizontal spacing value.
     */

  }, {
    key: "getHorizontalSpacing",
    value: function getHorizontalSpacing() {
      return this._horizontalSpacing;
    }
    /**
     * Sets the horizontal spacing value.
     * 
     * @param {number} newHorizontalSpacing The new horizontal spacing value.
     * @returns {object} The node settings object.
     */

  }, {
    key: "setHorizontalSpacing",
    value: function setHorizontalSpacing(newHorizontalSpacing) {
      this._horizontalSpacing = newHorizontalSpacing;
      return this;
    }
    /**
     * Gets the vertical spacing value.
     * 
     * @returns {number} The vertical spacing value.
     */

  }, {
    key: "getVerticalSpacing",
    value: function getVerticalSpacing() {
      return this._verticalSpacing;
    }
    /**
     * Sets the vertical spacing value.
     * 
     * @param {number} newVerticalSpacing The new vertical spacing value.
     * @returns {object} The node settings object.
     */

  }, {
    key: "setVerticalSpacing",
    value: function setVerticalSpacing(newVerticalSpacing) {
      this._verticalSpacing = newVerticalSpacing;
      return this;
    }
    /**
     * Gets the sizing mode.
     * 
     * @returns {string} The configured node sizing mode.
     */

  }, {
    key: "getSizingMode",
    value: function getSizingMode() {
      return this._sizingMode;
    }
    /**
     * Sets the sizing mode.
     * 
     * @param {('nodeSize'|'size')} newSizingMode The sizing mode. Should be either 'nodeSize' to automatically size the SVG based on the nodes, or 'size' to use the configured width and height.
     * @returns {object} The node settings object.
     */

  }, {
    key: "setSizingMode",
    value: function setSizingMode(newSizingMode) {
      this._sizingMode = newSizingMode;
      return this;
    }
  }]);

  return NodeSettings;
}();

NodeSettings.defaults = {
  sizingMode: "size",
  // set to 'nodeSize' for the tree size to automatically be based on the node dimensions itself.
  horizontalSpacing: 25,
  verticalSpacing: 25
};
/* harmony default export */ __webpack_exports__["default"] = (NodeSettings);

/***/ })

/******/ })["default"];
});