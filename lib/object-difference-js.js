(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ObjDiff", [], factory);
	else if(typeof exports === 'object')
		exports["ObjDiff"] = factory();
	else
		root["ObjDiff"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/anyToString.js":
/*!****************************!*\
  !*** ./src/anyToString.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = anyToString;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function anyToString(t) {
  if (typeof t === "boolean" || typeof t === "number" || typeof t === "string") {
    return t.toString();
  } else if (t === null) {
    return "null";
  } else if (t === undefined) {
    return "undefined";
  }

  if (_typeof(t) === "symbol") {
    return "symbol";
  } else if (t instanceof Date) {
    return t.toUTCString();
  } else if (Array.isArray(t)) {
    return t.map(function (x) {
      return anyToString(x);
    }).join(", ");
  } else if (typeof t === "function") {
    return "function";
  }

  return JSON.stringify(t);
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectDifference = __webpack_require__(/*! ./objectDifference.js */ "./src/objectDifference.js");

var _default = {
  ObjectDifference: _objectDifference.GetObjectDifference
};
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/objectDifference.js":
/*!*********************************!*\
  !*** ./src/objectDifference.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetObjectDifference = GetObjectDifference;

var _anyToString = _interopRequireDefault(__webpack_require__(/*! ./anyToString.js */ "./src/anyToString.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var VALUE_CREATED = "created",
    VALUE_UPDATED = "updated",
    VALUE_DELETED = "deleted",
    NOT_COMPARABLE = "NA";

function _isBlank(t) {
  return t === "" || t === 0 || t === undefined || t === null || t === {} || Array.isArray(t) && t.length < 1;
}

function _isValue(t) {
  return !_isBlank(t) && (typeof t === "boolean" || typeof t === "number" || typeof t === "string");
}

function _isDate(t) {
  return !_isBlank(t) && t instanceof Date;
}

function _isArray(t) {
  return !_isBlank(t) && Array.isArray(t);
}

function _isFunction(t) {
  return typeof t === "function";
}

function _isSymbol(t) {
  return _typeof(t) === "symbol";
}

function _isObject(t) {
  return !_isValue(t) && !_isBlank(t) && !_isDate(t) && !_isArray(t) && !_isFunction(t) && !_isSymbol(t);
}

function _getFullPropName(parentName, propertyName) {
  return parentName ? "".concat(parentName, ".").concat(propertyName) : propertyName;
}

function _getArrayDiffence(parentName, propertyName, a1, a2) {
  var diff = [];

  if (a1.length === a2.length) {
    for (var i = 0; i < a1.length; i++) {
      if (JSON.stringify(a1[i]) === JSON.stringify(a2[i])) {
        continue;
      } else {
        for (var _i = 0; _i < a1.length; _i++) {
          diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), "[".concat(_i, "]"), a1[_i], a2[_i])); // eslint-disable-line no-use-before-define
        }
      }
    }

    return diff;
  }

  if (a1.length > 30 || a2.length > 30) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_UPDATED,
      from: "Array[".concat(a1.length, "]"),
      to: "Array[".concat(a2.length, "]")
    });
    return diff;
  }

  function comparer(otherArray) {
    return function (current) {
      return otherArray.filter(function (other) {
        return JSON.stringify(other) === JSON.stringify(current);
      }).length === 0;
    };
  }

  var onlyInA1 = a1.filter(comparer(a2));
  var onlyInA2 = a2.filter(comparer(a1));

  for (var _i2 = 0; _i2 < onlyInA1.length; _i2++) {
    diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), "[".concat(_i2, "]"), onlyInA1[_i2], undefined)); // eslint-disable-line no-use-before-define
  }

  for (var _i3 = 0; _i3 < onlyInA2.length; _i3++) {
    diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), "[".concat(_i3, "]"), undefined, onlyInA2[_i3])); // eslint-disable-line no-use-before-define
  }

  return diff;
}

function _getArrayDiffenceByKey(parentName, propertyName, a1, a2, keyProp) {
  var diff = [];

  function comparer(otherArray) {
    return function (current) {
      return otherArray.filter(function (other) {
        return other[keyProp] === current[keyProp];
      }).length === 0;
    };
  }

  var onlyInA1 = a1.filter(comparer(a2));
  var onlyInA2 = a2.filter(comparer(a1));

  for (var i = 0; i < onlyInA1.length; i++) {
    diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), "[".concat(keyProp, "=").concat(onlyInA1[i][keyProp], "]"), onlyInA1[i], undefined)); // eslint-disable-line no-use-before-define
  }

  for (var _i4 = 0; _i4 < onlyInA2.length; _i4++) {
    diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), "[".concat(keyProp, "=").concat(onlyInA2[_i4][keyProp], "]"), undefined, onlyInA2[_i4])); // eslint-disable-line no-use-before-define
  }

  var _loop = function _loop(_i5) {
    var a2Item = a2.find(function (x) {
      return x[keyProp] === a1[_i5][keyProp];
    });

    if (a2Item) {
      diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), "[".concat(keyProp, "=").concat(a1[_i5][keyProp], "]"), a1[_i5], a2Item)); // eslint-disable-line no-use-before-define
    }
  };

  for (var _i5 = 0; _i5 < a1.length; _i5++) {
    _loop(_i5);
  }

  return diff;
}

function _GetObjectDifference(parentName, propertyName, valueFrom, valueTo) {
  var config = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var diff = [];

  if (propertyName === "__ob__" || propertyName === "__proto__") {
    return diff;
  } // case: 两个都是基础类型


  if (_isValue(valueFrom) && _isValue(valueTo)) {
    if (valueFrom == valueTo) {
      // eslint-disable-line
      return diff;
    }

    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_UPDATED,
      from: valueFrom,
      to: valueTo
    });
    return diff;
  } // case: 排除有function的情况


  if (_isFunction(valueFrom) || _isFunction(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: NOT_COMPARABLE,
      from: (0, _anyToString.default)(valueFrom),
      to: (0, _anyToString.default)(valueTo)
    });
    return diff;
  } // case: 其中一个是symbol


  if (_isSymbol(valueFrom) || _isSymbol(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_UPDATED,
      from: (0, _anyToString.default)(valueFrom),
      to: (0, _anyToString.default)(valueTo)
    });
    return diff;
  } // case: 两个都是日期


  if (_isDate(valueFrom) && _isDate(valueTo)) {
    if (valueFrom.getTime() === valueTo.getTime()) {
      return diff;
    }

    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_UPDATED,
      from: (0, _anyToString.default)(valueFrom),
      to: (0, _anyToString.default)(valueTo)
    });
    return diff;
  } // case: 一个是日期，另一个是值


  if (_isDate(valueTo) && _isValue(valueFrom)) {
    if (new Date(valueFrom).getTime() === valueTo.getTime()) {
      return diff;
    }

    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_UPDATED,
      from: (0, _anyToString.default)(valueFrom),
      to: (0, _anyToString.default)(valueTo)
    });
    return diff;
  }

  if (_isDate(valueFrom) && _isValue(valueTo)) {
    if (new Date(valueTo).getTime() === valueFrom.getTime()) {
      return diff;
    }

    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_UPDATED,
      from: (0, _anyToString.default)(valueFrom),
      to: (0, _anyToString.default)(valueTo)
    });
    return diff;
  } // case: 两个都是Blank


  if (_isBlank(valueFrom) && _isBlank(valueTo)) {
    return diff;
  } // case: From是blank, To不是


  if (_isBlank(valueFrom) && _isValue(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_CREATED,
      from: "",
      to: (0, _anyToString.default)(valueTo)
    });
    return diff;
  }

  if (_isBlank(valueFrom) && _isDate(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_CREATED,
      from: "",
      to: (0, _anyToString.default)(valueTo)
    });
    return diff;
  }

  if (_isBlank(valueFrom) && _isArray(valueTo)) {
    for (var i = 0; i < valueTo.length; i++) {
      diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), "[".concat(i, "]"), undefined, valueTo[i]));
    }

    return diff;
  }

  if (_isBlank(valueFrom) && _isObject(valueTo)) {
    Object.getOwnPropertyNames(valueTo).forEach(function (val, idx, array) {
      diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), val, undefined, valueTo[val]));
    });
    return diff;
  } // case: From不是blank, To是


  if ((_isValue(valueFrom) || _isDate(valueFrom) || _isArray(valueFrom) || _isObject(valueFrom)) && _isBlank(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_DELETED,
      from: "",
      to: ""
    });
    return diff;
  } // case: From是值或日期，To是Array


  if ((_isValue(valueFrom) || _isDate(valueFrom)) && _isArray(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_DELETED,
      from: "",
      to: ""
    });

    for (var _i6 = 0; _i6 < valueTo.length; _i6++) {
      diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), "[".concat(_i6, "]"), undefined, valueTo[_i6]));
    }

    return diff;
  } // case: From是值或日期，To是Object


  if ((_isValue(valueFrom) || _isDate(valueFrom)) && _isObject(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_DELETED,
      from: "",
      to: ""
    });
    Object.getOwnPropertyNames(valueTo).forEach(function (val, idx, array) {
      diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), val, undefined, valueTo[val]));
    });
    return diff;
  } // case: From是Array，To是值或日期


  if (_isArray(valueFrom) && (_isValue(valueTo) || _isDate(valueTo))) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_UPDATED,
      from: "Array[".concat(valueFrom.length, "]"),
      to: (0, _anyToString.default)(valueTo)
    });
    return diff;
  } // case: From是Array，To是Array


  if (_isArray(valueFrom) && _isArray(valueTo)) {
    if (config.ArrayKeyProperty) {
      // check whether Array element has the key
      var missKeyProp = false;

      for (var _i7 = 0; _i7 < valueFrom.length; _i7++) {
        if (valueFrom[_i7][config.ArrayKeyProperty] === undefined) {
          missKeyProp = true;
        }
      }

      for (var _i8 = 0; _i8 < valueTo.length; _i8++) {
        if (valueTo[_i8][config.ArrayKeyProperty] === undefined) {
          missKeyProp = true;
        }
      }

      if (!missKeyProp) {
        diff = diff.concat(_getArrayDiffenceByKey(parentName, propertyName, valueFrom, valueTo, config.ArrayKeyProperty));
      } else {
        diff = diff.concat(_getArrayDiffence(parentName, propertyName, valueFrom, valueTo));
      }
    } else {
      diff = diff.concat(_getArrayDiffence(parentName, propertyName, valueFrom, valueTo));
    }

    return diff;
  } // case: From是Array，To是Object


  if (_isArray(valueFrom) && _isObject(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_DELETED,
      from: "Array[".concat(valueFrom.length, "]"),
      to: ""
    });
    Object.getOwnPropertyNames(valueTo).forEach(function (val, idx, array) {
      diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), val, undefined, valueTo[val]));
    });
    return diff;
  } // case: From是Object，To是值或日期


  if (_isObject(valueFrom) && (_isValue(valueTo) || _isDate(valueTo))) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_UPDATED,
      from: "{}",
      to: (0, _anyToString.default)(valueTo)
    });
    return diff;
  } // case: From是Object，To是Array


  if (_isObject(valueFrom) && _isArray(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_DELETED,
      from: "{}",
      to: (0, _anyToString.default)(valueTo)
    });

    for (var _i9 = 0; _i9 < valueTo.length; _i9++) {
      diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), "[".concat(_i9, "]"), undefined, valueTo[_i9]));
    }

    return diff;
  } // case: From是Object，To是Object


  if (_isObject(valueFrom) && _isObject(valueTo)) {
    Object.getOwnPropertyNames(valueFrom).forEach(function (val, idx, array) {
      diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), val, valueFrom[val], valueTo[val]));
    });
    Object.getOwnPropertyNames(valueTo).forEach(function (val, idx, array) {
      if (valueFrom[val] !== undefined) {
        return;
      }

      diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), val, undefined, valueTo[val]));
    });
  }

  return diff;
}
/**
 * Get deep difference between two objects. An empty array will be returned for two same objects comparing.
 *
 * @export
 * @param {*} propertyName object name, as the root property name
 * @param {*} valueFrom value comparing on the left
 * @param {*} valueTo value comparing on the right
 * @returns
 */


function GetObjectDifference(objectName, valueFrom, valueTo) {
  var config = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return _GetObjectDifference("", objectName, valueFrom, valueTo, config);
}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9PYmpEaWZmL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9PYmpEaWZmL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL09iakRpZmYvLi9zcmMvYW55VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vT2JqRGlmZi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9PYmpEaWZmLy4vc3JjL29iamVjdERpZmZlcmVuY2UuanMiXSwibmFtZXMiOlsiYW55VG9TdHJpbmciLCJ0IiwidG9TdHJpbmciLCJ1bmRlZmluZWQiLCJEYXRlIiwidG9VVENTdHJpbmciLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJ4Iiwiam9pbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJPYmplY3REaWZmZXJlbmNlIiwiVkFMVUVfQ1JFQVRFRCIsIlZBTFVFX1VQREFURUQiLCJWQUxVRV9ERUxFVEVEIiwiTk9UX0NPTVBBUkFCTEUiLCJfaXNCbGFuayIsImxlbmd0aCIsIl9pc1ZhbHVlIiwiX2lzRGF0ZSIsIl9pc0FycmF5IiwiX2lzRnVuY3Rpb24iLCJfaXNTeW1ib2wiLCJfaXNPYmplY3QiLCJfZ2V0RnVsbFByb3BOYW1lIiwicGFyZW50TmFtZSIsInByb3BlcnR5TmFtZSIsIl9nZXRBcnJheURpZmZlbmNlIiwiYTEiLCJhMiIsImRpZmYiLCJpIiwiY29uY2F0IiwiX0dldE9iamVjdERpZmZlcmVuY2UiLCJwdXNoIiwicHJvcGVydHkiLCJ0eXBlIiwiZnJvbSIsInRvIiwiY29tcGFyZXIiLCJvdGhlckFycmF5IiwiY3VycmVudCIsImZpbHRlciIsIm90aGVyIiwib25seUluQTEiLCJvbmx5SW5BMiIsIl9nZXRBcnJheURpZmZlbmNlQnlLZXkiLCJrZXlQcm9wIiwiYTJJdGVtIiwiZmluZCIsInZhbHVlRnJvbSIsInZhbHVlVG8iLCJjb25maWciLCJnZXRUaW1lIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvckVhY2giLCJ2YWwiLCJpZHgiLCJhcnJheSIsIkFycmF5S2V5UHJvcGVydHkiLCJtaXNzS2V5UHJvcCIsIkdldE9iamVjdERpZmZlcmVuY2UiLCJvYmplY3ROYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGZSxTQUFTQSxXQUFULENBQXFCQyxDQUFyQixFQUF3QjtBQUNyQyxNQUFJLE9BQU9BLENBQVAsS0FBYSxTQUFiLElBQTBCLE9BQU9BLENBQVAsS0FBYSxRQUF2QyxJQUFtRCxPQUFPQSxDQUFQLEtBQWEsUUFBcEUsRUFBOEU7QUFDNUUsV0FBT0EsQ0FBQyxDQUFDQyxRQUFGLEVBQVA7QUFDRCxHQUZELE1BRU8sSUFBSUQsQ0FBQyxLQUFLLElBQVYsRUFBZ0I7QUFDckIsV0FBTyxNQUFQO0FBQ0QsR0FGTSxNQUVBLElB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QTdDLEVBQWtEUCxTQUFTLENBQUNPLEdBQUQsQ0FBM0QsRUFBa0VOLE9BQU8sQ0FBQ00sR0FBRCxDQUF6RSxDQUFoQyxDQUFQO0FBQ0QsS0FGRDtBQUdBSCxVQUFNLENBQUNDLG1CQUFQLENBQTJCSixPQUEzQixFQUFvQ0ssT0FBcEMsQ0FBNEMsVUFBVUMsR0FBVixFQUFlQyxHQUFmLEVBQW9CQyxLQUFwQixFQUEyQjtBQUNyRSxVQUFJVCxTQUFTLENBQUNPLEdBQUQsQ0FBVCxLQUFtQnhELFNBQXZCLEVBQWtDO0FBQ2hDO0FBQ0Q7O0FBQ0Q2QixVQUFJLEdBQUdBLElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxvQkFBb0IsQ0FBQ1QsZ0JBQWdCLENBQUNDLFVBQUQsRUFBYUMsWUFBYixDQUFqQixFQUE2QytCLEdBQTdDLEVBQWtEeEQsU0FBbEQsRUFBNkRrRCxPQUFPLENBQUNNLEdBQUQsQ0FBcEUsQ0FBaEMsQ0FBUDtBQUNELEtBTEQ7QUFNRDs7QUFFRCxTQUFPM0IsSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU08sU0FBU2dDLG1CQUFULENBQTZCQyxVQUE3QixFQUF5Q2IsU0FBekMsRUFBb0RDLE9BQXBELEVBQTBFO0FBQUEsTUFBYkMsTUFBYSx1RUFBSixFQUFJO0FBQy9FLFNBQU9uQixvQkFBb0IsQ0FBQyxFQUFELEVBQUs4QixVQUFMLEVBQWlCYixTQUFqQixFQUE0QkMsT0FBNUIsRUFBcUNDLE1BQXJDLENBQTNCO0FBQ0QsQyIsImZpbGUiOiJvYmplY3QtZGlmZmVyZW5jZS1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiT2JqRGlmZlwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJPYmpEaWZmXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk9iakRpZmZcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbnlUb1N0cmluZyh0KSB7XHJcbiAgaWYgKHR5cGVvZiB0ID09PSBcImJvb2xlYW5cIiB8fCB0eXBlb2YgdCA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgdCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgcmV0dXJuIHQudG9TdHJpbmcoKTtcclxuICB9IGVsc2UgaWYgKHQgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBcIm51bGxcIjtcclxuICB9IGVsc2UgaWYgKHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIFwidW5kZWZpbmVkXCI7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgdCA9PT0gXCJzeW1ib2xcIikge1xyXG4gICAgcmV0dXJuIFwic3ltYm9sXCI7XHJcbiAgfSBlbHNlIGlmICh0IGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgcmV0dXJuIHQudG9VVENTdHJpbmcoKTtcclxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodCkpIHtcclxuICAgIHJldHVybiB0XHJcbiAgICAgIC5tYXAoeCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGFueVRvU3RyaW5nKHgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuam9pbihcIiwgXCIpO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIHQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgcmV0dXJuIFwiZnVuY3Rpb25cIjtcclxuICB9XHJcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHQpO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBHZXRPYmplY3REaWZmZXJlbmNlIGFzIE9iamVjdERpZmZlcmVuY2V9IGZyb20gXCIuL29iamVjdERpZmZlcmVuY2UuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgeyBPYmplY3REaWZmZXJlbmNlIH07XHJcbiIsImltcG9ydCBhbnlUb1N0cmluZyBmcm9tIFwiLi9hbnlUb1N0cmluZy5qc1wiO1xyXG5cclxuY29uc3QgVkFMVUVfQ1JFQVRFRCA9IFwiY3JlYXRlZFwiLFxyXG4gIFZBTFVFX1VQREFURUQgPSBcInVwZGF0ZWRcIixcclxuICBWQUxVRV9ERUxFVEVEID0gXCJkZWxldGVkXCIsXHJcbiAgTk9UX0NPTVBBUkFCTEUgPSBcIk5BXCI7XHJcblxyXG5mdW5jdGlvbiBfaXNCbGFuayh0KSB7XHJcbiAgcmV0dXJuIHQgPT09IFwiXCIgfHwgdCA9PT0gMCB8fCB0ID09PSB1bmRlZmluZWQgfHwgdCA9PT0gbnVsbCB8fCB0ID09PSB7fSB8fCAoQXJyYXkuaXNBcnJheSh0KSAmJiB0Lmxlbmd0aCA8IDEpO1xyXG59XHJcbmZ1bmN0aW9uIF9pc1ZhbHVlKHQpIHtcclxuICByZXR1cm4gIV9pc0JsYW5rKHQpICYmICh0eXBlb2YgdCA9PT0gXCJib29sZWFuXCIgfHwgdHlwZW9mIHQgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIHQgPT09IFwic3RyaW5nXCIpO1xyXG59XHJcbmZ1bmN0aW9uIF9pc0RhdGUodCkge1xyXG4gIHJldHVybiAhX2lzQmxhbmsodCkgJiYgdCBpbnN0YW5jZW9mIERhdGU7XHJcbn1cclxuZnVuY3Rpb24gX2lzQXJyYXkodCkge1xyXG4gIHJldHVybiAhX2lzQmxhbmsodCkgJiYgQXJyYXkuaXNBcnJheSh0KTtcclxufVxyXG5mdW5jdGlvbiBfaXNGdW5jdGlvbih0KSB7XHJcbiAgcmV0dXJuIHR5cGVvZiB0ID09PSBcImZ1bmN0aW9uXCI7XHJcbn1cclxuZnVuY3Rpb24gX2lzU3ltYm9sKHQpIHtcclxuICByZXR1cm4gdHlwZW9mIHQgPT09IFwic3ltYm9sXCI7XHJcbn1cclxuZnVuY3Rpb24gX2lzT2JqZWN0KHQpIHtcclxuICByZXR1cm4gIV9pc1ZhbHVlKHQpICYmICFfaXNCbGFuayh0KSAmJiAhX2lzRGF0ZSh0KSAmJiAhX2lzQXJyYXkodCkgJiYgIV9pc0Z1bmN0aW9uKHQpICYmICFfaXNTeW1ib2wodCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSB7XHJcbiAgcmV0dXJuIHBhcmVudE5hbWUgPyBgJHtwYXJlbnROYW1lfS4ke3Byb3BlcnR5TmFtZX1gIDogcHJvcGVydHlOYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZ2V0QXJyYXlEaWZmZW5jZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUsIGExLCBhMikge1xyXG4gIGxldCBkaWZmID0gW107XHJcblxyXG4gIGlmIChhMS5sZW5ndGggPT09IGEyLmxlbmd0aCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhMS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoYTFbaV0pID09PSBKU09OLnN0cmluZ2lmeShhMltpXSkpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGExLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBkaWZmID0gZGlmZi5jb25jYXQoX0dldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCBgWyR7aX1dYCwgYTFbaV0sIGEyW2ldKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgaWYgKGExLmxlbmd0aCA+IDMwIHx8IGEyLmxlbmd0aCA+IDMwKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9VUERBVEVELFxyXG4gICAgICBmcm9tOiBgQXJyYXlbJHthMS5sZW5ndGh9XWAsXHJcbiAgICAgIHRvOiBgQXJyYXlbJHthMi5sZW5ndGh9XWBcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjb21wYXJlcihvdGhlckFycmF5KSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGN1cnJlbnQpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBvdGhlckFycmF5LmZpbHRlcihmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvdGhlcikgPT09IEpTT04uc3RyaW5naWZ5KGN1cnJlbnQpO1xyXG4gICAgICAgIH0pLmxlbmd0aCA9PT0gMFxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGxldCBvbmx5SW5BMSA9IGExLmZpbHRlcihjb21wYXJlcihhMikpO1xyXG5cclxuICBsZXQgb25seUluQTIgPSBhMi5maWx0ZXIoY29tcGFyZXIoYTEpKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbmx5SW5BMS5sZW5ndGg7IGkrKykge1xyXG4gICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgYFske2l9XWAsIG9ubHlJbkExW2ldLCB1bmRlZmluZWQpKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbmx5SW5BMi5sZW5ndGg7IGkrKykge1xyXG4gICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgYFske2l9XWAsIHVuZGVmaW5lZCwgb25seUluQTJbaV0pKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRpZmY7XHJcbn1cclxuZnVuY3Rpb24gX2dldEFycmF5RGlmZmVuY2VCeUtleShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUsIGExLCBhMiwga2V5UHJvcCkge1xyXG4gIGxldCBkaWZmID0gW107XHJcblxyXG4gIGZ1bmN0aW9uIGNvbXBhcmVyKG90aGVyQXJyYXkpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoY3VycmVudCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIG90aGVyQXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgICAgcmV0dXJuIG90aGVyW2tleVByb3BdID09PSBjdXJyZW50W2tleVByb3BdO1xyXG4gICAgICAgIH0pLmxlbmd0aCA9PT0gMFxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGxldCBvbmx5SW5BMSA9IGExLmZpbHRlcihjb21wYXJlcihhMikpO1xyXG5cclxuICBsZXQgb25seUluQTIgPSBhMi5maWx0ZXIoY29tcGFyZXIoYTEpKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbmx5SW5BMS5sZW5ndGg7IGkrKykge1xyXG4gICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgYFske2tleVByb3B9PSR7b25seUluQTFbaV1ba2V5UHJvcF19XWAsIG9ubHlJbkExW2ldLCB1bmRlZmluZWQpKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbmx5SW5BMi5sZW5ndGg7IGkrKykge1xyXG4gICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgYFske2tleVByb3B9PSR7b25seUluQTJbaV1ba2V5UHJvcF19XWAsIHVuZGVmaW5lZCwgb25seUluQTJbaV0pKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhMS5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGEySXRlbSA9IGEyLmZpbmQoeCA9PiB7XHJcbiAgICAgIHJldHVybiB4W2tleVByb3BdID09PSBhMVtpXVtrZXlQcm9wXTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChhMkl0ZW0pIHtcclxuICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgYFske2tleVByb3B9PSR7YTFbaV1ba2V5UHJvcF19XWAsIGExW2ldLCBhMkl0ZW0pKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRpZmY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9HZXRPYmplY3REaWZmZXJlbmNlKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSwgdmFsdWVGcm9tLCB2YWx1ZVRvLCBjb25maWcgPSB7fSkge1xyXG4gIGxldCBkaWZmID0gW107XHJcblxyXG4gIGlmIChwcm9wZXJ0eU5hbWUgPT09IFwiX19vYl9fXCIgfHwgcHJvcGVydHlOYW1lID09PSBcIl9fcHJvdG9fX1wiKSB7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcbiAgLy8gY2FzZTog5Lik5Liq6YO95piv5Z+656GA57G75Z6LXHJcbiAgaWYgKF9pc1ZhbHVlKHZhbHVlRnJvbSkgJiYgX2lzVmFsdWUodmFsdWVUbykpIHtcclxuICAgIGlmICh2YWx1ZUZyb20gPT0gdmFsdWVUbykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICAgIHJldHVybiBkaWZmO1xyXG4gICAgfVxyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfVVBEQVRFRCxcclxuICAgICAgZnJvbTogdmFsdWVGcm9tLFxyXG4gICAgICB0bzogdmFsdWVUb1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IOaOkumZpOaciWZ1bmN0aW9u55qE5oOF5Ya1XHJcbiAgaWYgKF9pc0Z1bmN0aW9uKHZhbHVlRnJvbSkgfHwgX2lzRnVuY3Rpb24odmFsdWVUbykpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IE5PVF9DT01QQVJBQkxFLFxyXG4gICAgICBmcm9tOiBhbnlUb1N0cmluZyh2YWx1ZUZyb20pLFxyXG4gICAgICB0bzogYW55VG9TdHJpbmcodmFsdWVUbylcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiDlhbbkuK3kuIDkuKrmmK9zeW1ib2xcclxuICBpZiAoX2lzU3ltYm9sKHZhbHVlRnJvbSkgfHwgX2lzU3ltYm9sKHZhbHVlVG8pKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9VUERBVEVELFxyXG4gICAgICBmcm9tOiBhbnlUb1N0cmluZyh2YWx1ZUZyb20pLFxyXG4gICAgICB0bzogYW55VG9TdHJpbmcodmFsdWVUbylcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiDkuKTkuKrpg73mmK/ml6XmnJ9cclxuICBpZiAoX2lzRGF0ZSh2YWx1ZUZyb20pICYmIF9pc0RhdGUodmFsdWVUbykpIHtcclxuICAgIGlmICh2YWx1ZUZyb20uZ2V0VGltZSgpID09PSB2YWx1ZVRvLmdldFRpbWUoKSkge1xyXG4gICAgICByZXR1cm4gZGlmZjtcclxuICAgIH1cclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX1VQREFURUQsXHJcbiAgICAgIGZyb206IGFueVRvU3RyaW5nKHZhbHVlRnJvbSksXHJcbiAgICAgIHRvOiBhbnlUb1N0cmluZyh2YWx1ZVRvKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IOS4gOS4quaYr+aXpeacn++8jOWPpuS4gOS4quaYr+WAvFxyXG4gIGlmIChfaXNEYXRlKHZhbHVlVG8pICYmIF9pc1ZhbHVlKHZhbHVlRnJvbSkpIHtcclxuICAgIGlmIChuZXcgRGF0ZSh2YWx1ZUZyb20pLmdldFRpbWUoKSA9PT0gdmFsdWVUby5nZXRUaW1lKCkpIHtcclxuICAgICAgcmV0dXJuIGRpZmY7XHJcbiAgICB9XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9VUERBVEVELFxyXG4gICAgICBmcm9tOiBhbnlUb1N0cmluZyh2YWx1ZUZyb20pLFxyXG4gICAgICB0bzogYW55VG9TdHJpbmcodmFsdWVUbylcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG4gIGlmIChfaXNEYXRlKHZhbHVlRnJvbSkgJiYgX2lzVmFsdWUodmFsdWVUbykpIHtcclxuICAgIGlmIChuZXcgRGF0ZSh2YWx1ZVRvKS5nZXRUaW1lKCkgPT09IHZhbHVlRnJvbS5nZXRUaW1lKCkpIHtcclxuICAgICAgcmV0dXJuIGRpZmY7XHJcbiAgICB9XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9VUERBVEVELFxyXG4gICAgICBmcm9tOiBhbnlUb1N0cmluZyh2YWx1ZUZyb20pLFxyXG4gICAgICB0bzogYW55VG9TdHJpbmcodmFsdWVUbylcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiDkuKTkuKrpg73mmK9CbGFua1xyXG4gIGlmIChfaXNCbGFuayh2YWx1ZUZyb20pICYmIF9pc0JsYW5rKHZhbHVlVG8pKSB7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcbiAgLy8gY2FzZTogRnJvbeaYr2JsYW5rLCBUb+S4jeaYr1xyXG4gIGlmIChfaXNCbGFuayh2YWx1ZUZyb20pICYmIF9pc1ZhbHVlKHZhbHVlVG8pKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9DUkVBVEVELFxyXG4gICAgICBmcm9tOiBcIlwiLFxyXG4gICAgICB0bzogYW55VG9TdHJpbmcodmFsdWVUbylcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG4gIGlmIChfaXNCbGFuayh2YWx1ZUZyb20pICYmIF9pc0RhdGUodmFsdWVUbykpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX0NSRUFURUQsXHJcbiAgICAgIGZyb206IFwiXCIsXHJcbiAgICAgIHRvOiBhbnlUb1N0cmluZyh2YWx1ZVRvKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcbiAgaWYgKF9pc0JsYW5rKHZhbHVlRnJvbSkgJiYgX2lzQXJyYXkodmFsdWVUbykpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVUby5sZW5ndGg7IGkrKykge1xyXG4gICAgICBkaWZmID0gZGlmZi5jb25jYXQoX0dldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCBgWyR7aX1dYCwgdW5kZWZpbmVkLCB2YWx1ZVRvW2ldKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcbiAgaWYgKF9pc0JsYW5rKHZhbHVlRnJvbSkgJiYgX2lzT2JqZWN0KHZhbHVlVG8pKSB7XHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZVRvKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGlkeCwgYXJyYXkpIHtcclxuICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgdmFsLCB1bmRlZmluZWQsIHZhbHVlVG9bdmFsXSkpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcbiAgLy8gY2FzZTogRnJvbeS4jeaYr2JsYW5rLCBUb+aYr1xyXG4gIGlmICgoX2lzVmFsdWUodmFsdWVGcm9tKSB8fCBfaXNEYXRlKHZhbHVlRnJvbSkgfHwgX2lzQXJyYXkodmFsdWVGcm9tKSB8fCBfaXNPYmplY3QodmFsdWVGcm9tKSkgJiYgX2lzQmxhbmsodmFsdWVUbykpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX0RFTEVURUQsXHJcbiAgICAgIGZyb206IFwiXCIsXHJcbiAgICAgIHRvOiBcIlwiXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTogRnJvbeaYr+WAvOaIluaXpeacn++8jFRv5pivQXJyYXlcclxuICBpZiAoKF9pc1ZhbHVlKHZhbHVlRnJvbSkgfHwgX2lzRGF0ZSh2YWx1ZUZyb20pKSAmJiBfaXNBcnJheSh2YWx1ZVRvKSkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfREVMRVRFRCxcclxuICAgICAgZnJvbTogXCJcIixcclxuICAgICAgdG86IFwiXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVUby5sZW5ndGg7IGkrKykge1xyXG4gICAgICBkaWZmID0gZGlmZi5jb25jYXQoX0dldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCBgWyR7aX1dYCwgdW5kZWZpbmVkLCB2YWx1ZVRvW2ldKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiBGcm9t5piv5YC85oiW5pel5pyf77yMVG/mmK9PYmplY3RcclxuICBpZiAoKF9pc1ZhbHVlKHZhbHVlRnJvbSkgfHwgX2lzRGF0ZSh2YWx1ZUZyb20pKSAmJiBfaXNPYmplY3QodmFsdWVUbykpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX0RFTEVURUQsXHJcbiAgICAgIGZyb206IFwiXCIsXHJcbiAgICAgIHRvOiBcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZVRvKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGlkeCwgYXJyYXkpIHtcclxuICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgdmFsLCB1bmRlZmluZWQsIHZhbHVlVG9bdmFsXSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiBGcm9t5pivQXJyYXnvvIxUb+aYr+WAvOaIluaXpeacn1xyXG4gIGlmIChfaXNBcnJheSh2YWx1ZUZyb20pICYmIChfaXNWYWx1ZSh2YWx1ZVRvKSB8fCBfaXNEYXRlKHZhbHVlVG8pKSkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfVVBEQVRFRCxcclxuICAgICAgZnJvbTogYEFycmF5WyR7dmFsdWVGcm9tLmxlbmd0aH1dYCxcclxuICAgICAgdG86IGFueVRvU3RyaW5nKHZhbHVlVG8pXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTogRnJvbeaYr0FycmF577yMVG/mmK9BcnJheVxyXG4gIGlmIChfaXNBcnJheSh2YWx1ZUZyb20pICYmIF9pc0FycmF5KHZhbHVlVG8pKSB7XHJcbiAgICBpZiAoY29uZmlnLkFycmF5S2V5UHJvcGVydHkpIHtcclxuICAgICAgLy8gY2hlY2sgd2hldGhlciBBcnJheSBlbGVtZW50IGhhcyB0aGUga2V5XHJcbiAgICAgIGxldCBtaXNzS2V5UHJvcCA9IGZhbHNlO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZUZyb20ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodmFsdWVGcm9tW2ldW2NvbmZpZy5BcnJheUtleVByb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBtaXNzS2V5UHJvcCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVUby5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh2YWx1ZVRvW2ldW2NvbmZpZy5BcnJheUtleVByb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBtaXNzS2V5UHJvcCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIW1pc3NLZXlQcm9wKSB7XHJcbiAgICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KF9nZXRBcnJheURpZmZlbmNlQnlLZXkocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lLCB2YWx1ZUZyb20sIHZhbHVlVG8sIGNvbmZpZy5BcnJheUtleVByb3BlcnR5KSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KF9nZXRBcnJheURpZmZlbmNlKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSwgdmFsdWVGcm9tLCB2YWx1ZVRvKSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpZmYgPSBkaWZmLmNvbmNhdChfZ2V0QXJyYXlEaWZmZW5jZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUsIHZhbHVlRnJvbSwgdmFsdWVUbykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiBGcm9t5pivQXJyYXnvvIxUb+aYr09iamVjdFxyXG4gIGlmIChfaXNBcnJheSh2YWx1ZUZyb20pICYmIF9pc09iamVjdCh2YWx1ZVRvKSkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfREVMRVRFRCxcclxuICAgICAgZnJvbTogYEFycmF5WyR7dmFsdWVGcm9tLmxlbmd0aH1dYCxcclxuICAgICAgdG86IFwiXCJcclxuICAgIH0pO1xyXG5cclxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlVG8pLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaWR4LCBhcnJheSkge1xyXG4gICAgICBkaWZmID0gZGlmZi5jb25jYXQoX0dldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCB2YWwsIHVuZGVmaW5lZCwgdmFsdWVUb1t2YWxdKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IEZyb23mmK9PYmplY3TvvIxUb+aYr+WAvOaIluaXpeacn1xyXG4gIGlmIChfaXNPYmplY3QodmFsdWVGcm9tKSAmJiAoX2lzVmFsdWUodmFsdWVUbykgfHwgX2lzRGF0ZSh2YWx1ZVRvKSkpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX1VQREFURUQsXHJcbiAgICAgIGZyb206IFwie31cIixcclxuICAgICAgdG86IGFueVRvU3RyaW5nKHZhbHVlVG8pXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcbiAgLy8gY2FzZTogRnJvbeaYr09iamVjdO+8jFRv5pivQXJyYXlcclxuICBpZiAoX2lzT2JqZWN0KHZhbHVlRnJvbSkgJiYgX2lzQXJyYXkodmFsdWVUbykpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX0RFTEVURUQsXHJcbiAgICAgIGZyb206IFwie31cIixcclxuICAgICAgdG86IGFueVRvU3RyaW5nKHZhbHVlVG8pXHJcbiAgICB9KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVUby5sZW5ndGg7IGkrKykge1xyXG4gICAgICBkaWZmID0gZGlmZi5jb25jYXQoX0dldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCBgWyR7aX1dYCwgdW5kZWZpbmVkLCB2YWx1ZVRvW2ldKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IEZyb23mmK9PYmplY3TvvIxUb+aYr09iamVjdFxyXG4gIGlmIChfaXNPYmplY3QodmFsdWVGcm9tKSAmJiBfaXNPYmplY3QodmFsdWVUbykpIHtcclxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlRnJvbSkuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpZHgsIGFycmF5KSB7XHJcbiAgICAgIGRpZmYgPSBkaWZmLmNvbmNhdChfR2V0T2JqZWN0RGlmZmVyZW5jZShfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksIHZhbCwgdmFsdWVGcm9tW3ZhbF0sIHZhbHVlVG9bdmFsXSkpO1xyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZVRvKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGlkeCwgYXJyYXkpIHtcclxuICAgICAgaWYgKHZhbHVlRnJvbVt2YWxdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgdmFsLCB1bmRlZmluZWQsIHZhbHVlVG9bdmFsXSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGlmZjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBkZWVwIGRpZmZlcmVuY2UgYmV0d2VlbiB0d28gb2JqZWN0cy4gQW4gZW1wdHkgYXJyYXkgd2lsbCBiZSByZXR1cm5lZCBmb3IgdHdvIHNhbWUgb2JqZWN0cyBjb21wYXJpbmcuXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQHBhcmFtIHsqfSBwcm9wZXJ0eU5hbWUgb2JqZWN0IG5hbWUsIGFzIHRoZSByb290IHByb3BlcnR5IG5hbWVcclxuICogQHBhcmFtIHsqfSB2YWx1ZUZyb20gdmFsdWUgY29tcGFyaW5nIG9uIHRoZSBsZWZ0XHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWVUbyB2YWx1ZSBjb21wYXJpbmcgb24gdGhlIHJpZ2h0XHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gR2V0T2JqZWN0RGlmZmVyZW5jZShvYmplY3ROYW1lLCB2YWx1ZUZyb20sIHZhbHVlVG8sIGNvbmZpZyA9IHt9KSB7XHJcbiAgcmV0dXJuIF9HZXRPYmplY3REaWZmZXJlbmNlKFwiXCIsIG9iamVjdE5hbWUsIHZhbHVlRnJvbSwgdmFsdWVUbywgY29uZmlnKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9