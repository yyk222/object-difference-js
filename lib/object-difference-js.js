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

function _GetObjectDifference(parentName, propertyName, valueFrom, valueTo) {
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

    for (var _i4 = 0; _i4 < valueTo.length; _i4++) {
      diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), "[".concat(_i4, "]"), undefined, valueTo[_i4]));
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
    diff = diff.concat(_getArrayDiffence(parentName, propertyName, valueFrom, valueTo));
    return diff;
  } // case: From是Array，To是Object


  if (_isArray(valueFrom) && _isArray(valueTo)) {
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

    for (var _i5 = 0; _i5 < valueTo.length; _i5++) {
      diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), "[".concat(_i5, "]"), undefined, valueTo[_i5]));
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
  return _GetObjectDifference("", objectName, valueFrom, valueTo);
}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9PYmpEaWZmL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9PYmpEaWZmL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL09iakRpZmYvLi9zcmMvYW55VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vT2JqRGlmZi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9PYmpEaWZmLy4vc3JjL29iamVjdERpZmZlcmVuY2UuanMiXSwibmFtZXMiOlsiYW55VG9TdHJpbmciLCJ0IiwidG9TdHJpbmciLCJ1bmRlZmluZWQiLCJEYXRlIiwidG9VVENTdHJpbmciLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJ4Iiwiam9pbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJPYmplY3REaWZmZXJlbmNlIiwiVkFMVUVfQ1JFQVRFRCIsIlZBTFVFX1VQREFURUQiLCJWQUxVRV9ERUxFVEVEIiwiTk9UX0NPTVBBUkFCTEUiLCJfaXNCbGFuayIsImxlbmd0aCIsIl9pc1ZhbHVlIiwiX2lzRGF0ZSIsIl9pc0FycmF5IiwiX2lzRnVuY3Rpb24iLCJfaXNTeW1ib2wiLCJfaXNPYmplY3QiLCJfZ2V0RnVsbFByb3BOYW1lIiwicGFyZW50TmFtZSIsInByb3BlcnR5TmFtZSIsIl9nZXRBcnJheURpZmZlbmNlIiwiYTEiLCJhMiIsImRpZmYiLCJpIiwiY29uY2F0IiwiX0dldE9iamVjdERpZmZlcmVuY2UiLCJwdXNoIiwicHJvcGVydHkiLCJ0eXBlIiwiZnJvbSIsInRvIiwiY29tcGFyZXIiLCJvdGhlckFycmF5IiwiY3VycmVudCIsImZpbHRlciIsIm90aGVyIiwib25seUluQTEiLCJvbmx5SW5BMiIsInZhbHVlRnJvbSIsInZhbHVlVG8iLCJnZXRUaW1lIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvckVhY2giLCJ2YWwiLCJpZHgiLCJhcnJheSIsIkdldE9iamVjdERpZmZlcmVuY2UiLCJvYmplY3ROYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGZSxTQUFTQSxXQUFULENBQXFCQyxDQUFyQixFQUF3QjtBQUNyQyxNQUFJLE9BQU9BLENBQVAsS0FBYSxTQUFiLElBQTBCLE9BQU9BLENBQVAsS0FBYSxRQUF2QyxJQUFtRCxPQUFPQSxDQUFQLEtBQWEsUUFBcEUsRUFBOEU7QUFDNUUsV0FBT0EsQ0FBQyxDQUFDQyxRQUFGLEVBQVA7QUFDRCxHQUZELE1BRU8sSUFBSUQsQ0FBQyxLQUFLLElBQVYsRUFBZ0I7QUFDckIsV0FBTyxNQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLENBQUMsS0FBS0UsU0FBVixFQUFxQjtBQUMxQixXQUFPLFdBQVA7QUFDRDs7QUFDRCxNQUFJLFFBQU9GLENBQVAsTUFBYSxRQUFqQixFQUEyQjtBQUN6QixXQUFPLFFBQVA7QUFDRCxHQUZELE1BRU8sSUFBSUEsQ0FBQyxZQUFZRyxJQUFqQixFQUF1QjtBQUM1QixXQUFPSCxDQUFDLENBQUNJLFdBQUYsRUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQyxLQUFLLENBQUNDLE9BQU4sQ0FBY04sQ0FBZCxDQUFKLEVBQXNCO0FBQzNCLFdBQU9BLENBQUMsQ0FDTE8sR0FESSxDQUNBLFVBQUFDLENBQUMsRUFBSTtBQUNSLGFBQU9ULFdBQVcsQ0FBQ1MsQ0FBRCxDQUFsQjtBQUNELEtBSEksRUFJSkMsSUFKSSxDQUlDLElBSkQsQ0FBUDtBQUtELEdBTk0sTUFNQSxJQUFJLE9BQU9ULENBQVAsS0FBYSxVQUFqQixFQUE2QjtBQUNsQyxXQUFPLFVBQVA7QUFDRDs7QUFDRCxTQUFPVSxJQUFJLENBQUNDLFNBQUwsQ0FBZVgsQ0FBZixDQUFQO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCRDs7ZUFDZTtBQUFFWSxrQkFBZ0I7QUFBbEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRGY7Ozs7OztBQUVBLElBQU1DLGFBQWEsR0FBRyxTQUF0QjtBQUFBLElBQ0VDLGFBQWEsR0FBRyxTQURsQjtBQUFBLElBRUVDLGFBQWEsR0FBRyxTQUZsQjtBQUFBLElBR0VDLGNBQWMsR0FBRyxJQUhuQjs7QUFLQSxTQUFTQyxRQUFULENBQWtCakIsQ0FBbEIsRUFBcUI7QUFDbkIsU0FBT0EsQ0FBQyxLQUFLLEVBQU4sSUFBWUEsQ0FBQyxLQUFLLENBQWxCLElBQXVCQSxDQUFDLEtBQUtFLFNBQTdCLElBQTBDRixDQUFDLEtBQUssSUFBaEQsSUFBd0RBLENBQUMsS0FBSyxFQUE5RCxJQUFxRUssS0FBSyxDQUFDQyxPQUFOLENBQWNOLENBQWQsS0FBb0JBLENBQUMsQ0FBQ2tCLE1BQUYsR0FBVyxDQUEzRztBQUNEOztBQUNELFNBQVNDLFFBQVQsQ0FBa0JuQixDQUFsQixFQUFxQjtBQUNuQixTQUFPLENBQUNpQixRQUFRLENBQUNqQixDQUFELENBQVQsS0FBaUIsT0FBT0EsQ0FBUCxLQUFhLFNBQWIsSUFBMEIsT0FBT0EsQ0FBUCxLQUFhLFFBQXZDLElBQW1ELE9BQU9BLENBQVAsS0FBYSxRQUFqRixDQUFQO0FBQ0Q7O0FBQ0QsU0FBU29CLE9BQVQsQ0FBaUJwQixDQUFqQixFQUFvQjtBQUNsQixTQUFPLENBQUNpQixRQUFRLENBQUNqQixDQUFELENBQVQsSUFBZ0JBLENBQUMsWUFBWUcsSUFBcEM7QUFDRDs7QUFDRCxTQUFTa0IsUUFBVCxDQUFrQnJCLENBQWxCLEVBQXFCO0FBQ25CLFNBQU8sQ0FBQ2lCLFFBQVEsQ0FBQ2pCLENBQUQsQ0FBVCxJQUFnQkssS0FBSyxDQUFDQyxPQUFOLENBQWNOLENBQWQsQ0FBdkI7QUFDRDs7QUFDRCxTQUFTc0IsV0FBVCxDQUFxQnRCLENBQXJCLEVBQXdCO0FBQ3RCLFNBQU8sT0FBT0EsQ0FBUCxLQUFhLFVBQXBCO0FBQ0Q7O0FBQ0QsU0FBU3VCLFNBQVQsQ0FBbUJ2QixDQUFuQixFQUFzQjtBQUNwQixTQUFPLFFBQU9BLENBQVAsTUFBYSxRQUFwQjtBQUNEOztBQUNELFNBQVN3QixTQUFULENBQW1CeEIsQ0FBbkIsRUFBc0I7QUFDcEIsU0FBTyxDQUFDbUIsUUFBUSxDQUFDbkIsQ0FBRCxDQUFULElBQWdCLENBQUNpQixRQUFRLENBQUNqQixDQUFELENBQXpCLElBQWdDLENBQUNvQixPQUFPLENBQUNwQixDQUFELENBQXhDLElBQStDLENBQUNxQixRQUFRLENBQUNyQixDQUFELENBQXhELElBQStELENBQUNzQixXQUFXLENBQUN0QixDQUFELENBQTNFLElBQWtGLENBQUN1QixTQUFTLENBQUN2QixDQUFELENBQW5HO0FBQ0Q7O0FBRUQsU0FBU3lCLGdCQUFULENBQTBCQyxVQUExQixFQUFzQ0MsWUFBdEMsRUFBb0Q7QUFDbEQsU0FBT0QsVUFBVSxhQUFNQSxVQUFOLGNBQW9CQyxZQUFwQixJQUFxQ0EsWUFBdEQ7QUFDRDs7QUFFRCxTQUFTQyxpQkFBVCxDQUEyQkYsVUFBM0IsRUFBdUNDLFlBQXZDLEVBQXFERSxFQUFyRCxFQUF5REMsRUFBekQsRUFBNkQ7QUFDM0QsTUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBRUEsTUFBSUYsRUFBRSxDQUFDWCxNQUFILEtBQWNZLEVBQUUsQ0FBQ1osTUFBckIsRUFBNkI7QUFDM0IsU0FBSyxJQUFJYyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxFQUFFLENBQUNYLE1BQXZCLEVBQStCYyxDQUFDLEVBQWhDLEVBQW9DO0FBQ2xDLFVBQUl0QixJQUFJLENBQUNDLFNBQUwsQ0FBZWtCLEVBQUUsQ0FBQ0csQ0FBRCxDQUFqQixNQUEwQnRCLElBQUksQ0FBQ0MsU0FBTCxDQUFlbUIsRUFBRSxDQUFDRSxDQUFELENBQWpCLENBQTlCLEVBQXFEO0FBQ25EO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBSyxJQUFJQSxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHSCxFQUFFLENBQUNYLE1BQXZCLEVBQStCYyxFQUFDLEVBQWhDLEVBQW9DO0FBQ2xDRCxjQUFJLEdBQUdBLElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxvQkFBb0IsQ0FBQ1QsZ0JBQWdCLENBQUNDLFVBQUQsRUFBYUMsWUFBYixDQUFqQixhQUFpREssRUFBakQsUUFBdURILEVBQUUsQ0FBQ0csRUFBRCxDQUF6RCxFQUE4REYsRUFBRSxDQUFDRSxFQUFELENBQWhFLENBQWhDLENBQVAsQ0FEa0MsQ0FDNEU7QUFDL0c7QUFDRjtBQUNGOztBQUNELFdBQU9ELElBQVA7QUFDRDs7QUFFRCxNQUFJRixFQUFFLENBQUNYLE1BQUgsR0FBWSxFQUFaLElBQWtCWSxFQUFFLENBQUNaLE1BQUgsR0FBWSxFQUFsQyxFQUFzQztBQUNwQ2EsUUFBSSxDQUFDSSxJQUFMLENBQVU7QUFDUkMsY0FBUSxFQUFFWCxnQkFBZ0IsQ0FBQ0MsVUFBRCxFQUFhQyxZQUFiLENBRGxCO0FBRVJVLFVBQUksRUFBRXZCLGFBRkU7QUFHUndCLFVBQUksa0JBQVdULEVBQUUsQ0FBQ1gsTUFBZCxNQUhJO0FBSVJxQixRQUFFLGtCQUFXVCxFQUFFLENBQUNaLE1BQWQ7QUFKTSxLQUFWO0FBTUEsV0FBT2EsSUFBUDtBQUNEOztBQUVELFdBQVNTLFFBQVQsQ0FBa0JDLFVBQWxCLEVBQThCO0FBQzVCLFdBQU8sVUFBVUMsT0FBVixFQUFtQjtBQUN4QixhQUNFRCxVQUFVLENBQUNFLE1BQVgsQ0FBa0IsVUFBVUMsS0FBVixFQUFpQjtBQUNqQyxlQUFPbEMsSUFBSSxDQUFDQyxTQUFMLENBQWVpQyxLQUFmLE1BQTBCbEMsSUFBSSxDQUFDQyxTQUFMLENBQWUrQixPQUFmLENBQWpDO0FBQ0QsT0FGRCxFQUVHeEIsTUFGSCxLQUVjLENBSGhCO0FBS0QsS0FORDtBQU9EOztBQUVELE1BQUkyQixRQUFRLEdBQUdoQixFQUFFLENBQUNjLE1BQUgsQ0FBVUgsUUFBUSxDQUFDVixFQUFELENBQWxCLENBQWY7QUFFQSxNQUFJZ0IsUUFBUSxHQUFHaEIsRUFBRSxDQUFDYSxNQUFILENBQVVILFFBQVEsQ0FBQ1gsRUFBRCxDQUFsQixDQUFmOztBQUVBLE9BQUssSUFBSUcsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBR2EsUUFBUSxDQUFDM0IsTUFBN0IsRUFBcUNjLEdBQUMsRUFBdEMsRUFBMEM7QUFDeENELFFBQUksR0FBR0EsSUFBSSxDQUFDRSxNQUFMLENBQVlDLG9CQUFvQixDQUFDVCxnQkFBZ0IsQ0FBQ0MsVUFBRCxFQUFhQyxZQUFiLENBQWpCLGFBQWlESyxHQUFqRCxRQUF1RGEsUUFBUSxDQUFDYixHQUFELENBQS9ELEVBQW9FOUIsU0FBcEUsQ0FBaEMsQ0FBUCxDQUR3QyxDQUNnRjtBQUN6SDs7QUFFRCxPQUFLLElBQUk4QixHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHYyxRQUFRLENBQUM1QixNQUE3QixFQUFxQ2MsR0FBQyxFQUF0QyxFQUEwQztBQUN4Q0QsUUFBSSxHQUFHQSxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsb0JBQW9CLENBQUNULGdCQUFnQixDQUFDQyxVQUFELEVBQWFDLFlBQWIsQ0FBakIsYUFBaURLLEdBQWpELFFBQXVEOUIsU0FBdkQsRUFBa0U0QyxRQUFRLENBQUNkLEdBQUQsQ0FBMUUsQ0FBaEMsQ0FBUCxDQUR3QyxDQUNnRjtBQUN6SDs7QUFFRCxTQUFPRCxJQUFQO0FBQ0Q7O0FBRUQsU0FBU0csb0JBQVQsQ0FBOEJSLFVBQTlCLEVBQTBDQyxZQUExQyxFQUF3RG9CLFNBQXhELEVBQW1FQyxPQUFuRSxFQUE0RTtBQUMxRSxNQUFJakIsSUFBSSxHQUFHLEVBQVg7O0FBRUEsTUFBSUosWUFBWSxLQUFLLFFBQWpCLElBQTZCQSxZQUFZLEtBQUssV0FBbEQsRUFBK0Q7QUFDN0QsV0FBT0ksSUFBUDtBQUNELEdBTHlFLENBTTFFOzs7QUFDQSxNQUFJWixRQUFRLENBQUM0QixTQUFELENBQVIsSUFBdUI1QixRQUFRLENBQUM2QixPQUFELENBQW5DLEVBQThDO0FBQzVDLFFBQUlELFNBQVMsSUFBSUMsT0FBakIsRUFBMEI7QUFBRTtBQUMxQixhQUFPakIsSUFBUDtBQUNEOztBQUNEQSxRQUFJLENBQUNJLElBQUwsQ0FBVTtBQUNSQyxjQUFRLEVBQUVYLGdCQUFnQixDQUFDQyxVQUFELEVBQWFDLFlBQWIsQ0FEbEI7QUFFUlUsVUFBSSxFQUFFdkIsYUFGRTtBQUdSd0IsVUFBSSxFQUFFUyxTQUhFO0FBSVJSLFFBQUUsRUFBRVM7QUFKSSxLQUFWO0FBTUEsV0FBT2pCLElBQVA7QUFDRCxHQWxCeUUsQ0FvQjFFOzs7QUFDQSxNQUFJVCxXQUFXLENBQUN5QixTQUFELENBQVgsSUFBMEJ6QixXQUFXLENBQUMwQixPQUFELENBQXpDLEVBQW9EO0FBQ2xEakIsUUFBSSxDQUFDSSxJQUFMLENBQVU7QUFDUkMsY0FBUSxFQUFFWCxnQkFBZ0IsQ0FBQ0MsVUFBRCxFQUFhQyxZQUFiLENBRGxCO0FBRVJVLFVBQUksRUFBRXJCLGNBRkU7QUFHUnNCLFVBQUksRUFBRSwwQkFBWVMsU0FBWixDQUhFO0FBSVJSLFFBQUUsRUFBRSwwQkFBWVMsT0FBWjtBQUpJLEtBQVY7QUFNQSxXQUFPakIsSUFBUDtBQUNELEdBN0J5RSxDQStCMUU7OztBQUNBLE1BQUlSLFNBQVMsQ0FBQ3dCLFNBQUQsQ0FBVCxJQUF3QnhCLFNBQVMsQ0FBQ3lCLE9BQUQsQ0FBckMsRUFBZ0Q7QUFDOUNqQixRQUFJLENBQUNJLElBQUwsQ0FBVTtBQUNSQyxjQUFRLEVBQUVYLGdCQUFnQixDQUFDQyxVQUFELEVBQWFDLFlBQWIsQ0FEbEI7QUFFUlUsVUFBSSxFQUFFdkIsYUFGRTtBQUdSd0IsVUFBSSxFQUFFLDBCQUFZUyxTQUFaLENBSEU7QUFJUlIsUUFBRSxFQUFFLDBCQUFZUyxPQUFaO0FBSkksS0FBVjtBQU1BLFdBQU9qQixJQUFQO0FBQ0QsR0F4Q3lFLENBMEMxRTs7O0FBQ0EsTUFBSVgsT0FBTyxDQUFDMkIsU0FBRCxDQUFQLElBQXNCM0IsT0FBTyxDQUFDNEIsT0FBRCxDQUFqQyxFQUE0QztBQUMxQyxRQUFJRCxTQUFTLENBQUNFLE9BQVYsT0FBd0JELE9BQU8sQ0FBQ0MsT0FBUixFQUE1QixFQUErQztBQUM3QyxhQUFPbEIsSUFBUDtBQUNEOztBQUNEQSxRQUFJLENBQUNJLElBQUwsQ0FBVTtBQUNSQyxjQUFRLEVBQUVYLGdCQUFnQixDQUFDQyxVQUFELEVBQWFDLFlBQWIsQ0FEbEI7QUFFUlUsVUFBSSxFQUFFdkIsYUFGRTtBQUdSd0IsVUFBSSxFQUFFLDBCQUFZUyxTQUFaLENBSEU7QUFJUlIsUUFBRSxFQUFFLDBCQUFZUyxPQUFaO0FBSkksS0FBVjtBQU1BLFdBQU9qQixJQUFQO0FBQ0QsR0F0RHlFLENBd0QxRTs7O0FBQ0EsTUFBSVgsT0FBTyxDQUFDNEIsT0FBRCxDQUFQLElBQW9CN0IsUUFBUSxDQUFDNEIsU0FBRCxDQUFoQyxFQUE2QztBQUMzQyxRQUFJLElBQUk1QyxJQUFKLENBQVM0QyxTQUFULEVBQW9CRSxPQUFwQixPQUFrQ0QsT0FBTyxDQUFDQyxPQUFSLEVBQXRDLEVBQXlEO0FBQ3ZELGFBQU9sQixJQUFQO0FBQ0Q7O0FBQ0RBLFFBQUksQ0FBQ0ksSUFBTCxDQUFVO0FBQ1JDLGNBQVEsRUFBRVgsZ0JBQWdCLENBQUNDLFVBQUQsRUFBYUMsWUFBYixDQURsQjtBQUVSVSxVQUFJLEVBQUV2QixhQUZFO0FBR1J3QixVQUFJLEVBQUUsMEJBQVlTLFNBQVosQ0FIRTtBQUlSUixRQUFFLEVBQUUsMEJBQVlTLE9BQVo7QUFKSSxLQUFWO0FBTUEsV0FBT2pCLElBQVA7QUFDRDs7QUFDRCxNQUFJWCxPQUFPLENBQUMyQixTQUFELENBQVAsSUFBc0I1QixRQUFRLENBQUM2QixPQUFELENBQWxDLEVBQTZDO0FBQzNDLFFBQUksSUFBSTdDLElBQUosQ0FBUzZDLE9BQVQsRUFBa0JDLE9BQWxCLE9BQWdDRixTQUFTLENBQUNFLE9BQVYsRUFBcEMsRUFBeUQ7QUFDdkQsYUFBT2xCLElBQVA7QUFDRDs7QUFDREEsUUFBSSxDQUFDSSxJQUFMLENBQVU7QUFDUkMsY0FBUSxFQUFFWCxnQkFBZ0IsQ0FBQ0MsVUFBRCxFQUFhQyxZQUFiLENBRGxCO0FBRVJVLFVBQUksRUFBRXZCLGFBRkU7QUFHUndCLFVBQUksRUFBRSwwQkFBWVMsU0FBWixDQUhFO0FBSVJSLFFBQUUsRUFBRSwwQkFBWVMsT0FBWjtBQUpJLEtBQVY7QUFNQSxXQUFPakIsSUFBUDtBQUNELEdBaEZ5RSxDQWtGMUU7OztBQUNBLE1BQUlkLFFBQVEsQ0FBQzhCLFNBQUQsQ0FBUixJQUF1QjlCLFFBQVEsQ0FBQytCLE9BQUQsQ0FBbkMsRUFBOEM7QUFDNUMsV0FBT2pCLElBQVA7QUFDRCxHQXJGeUUsQ0FzRjFFOzs7QUFDQSxNQUFJZCxRQUFRLENBQUM4QixTQUFELENBQVIsSUFBdUI1QixRQUFRLENBQUM2QixPQUFELENBQW5DLEVBQThDO0FBQzVDakIsUUFBSSxDQUFDSSxJQUFMLENBQVU7QUFDUkMsY0FBUSxFQUFFWCxnQkFBZ0IsQ0FBQ0MsVUFBRCxFQUFhQyxZQUFiLENBRGxCO0FBRVJVLFVBQUksRUFBRXhCLGFBRkU7QUFHUnlCLFVBQUksRUFBRSxFQUhFO0FBSVJDLFFBQUUsRUFBRSwwQkFBWVMsT0FBWjtBQUpJLEtBQVY7QUFNQSxXQUFPakIsSUFBUDtBQUNEOztBQUNELE1BQUlkLFFBQVEsQ0FBQzhCLFNBQUQsQ0FBUixJQUF1QjNCLE9BQU8sQ0FBQzRCLE9BQUQsQ0FBbEMsRUFBNkM7QUFDM0NqQixRQUFJLENBQUNJLElBQUwsQ0FBVTtBQUNSQyxjQUFRLEVBQUVYLGdCQUFnQixDQUFDQyxVQUFELEVBQWFDLFlBQWIsQ0FEbEI7QUFFUlUsVUFBSSxFQUFFeEIsYUFGRTtBQUdSeUIsVUFBSSxFQUFFLEVBSEU7QUFJUkMsUUFBRSxFQUFFLDBCQUFZUyxPQUFaO0FBSkksS0FBVjtBQU1BLFdBQU9qQixJQUFQO0FBQ0Q7O0FBQ0QsTUFBSWQsUUFBUSxDQUFDOEIsU0FBRCxDQUFSLElBQXVCMUIsUUFBUSxDQUFDMkIsT0FBRCxDQUFuQyxFQUE4QztBQUM1QyxTQUFLLElBQUloQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHZ0IsT0FBTyxDQUFDOUIsTUFBNUIsRUFBb0NjLENBQUMsRUFBckMsRUFBeUM7QUFDdkNELFVBQUksR0FBR0EsSUFBSSxDQUFDRSxNQUFMLENBQVlDLG9CQUFvQixDQUFDVCxnQkFBZ0IsQ0FBQ0MsVUFBRCxFQUFhQyxZQUFiLENBQWpCLGFBQWlESyxDQUFqRCxRQUF1RDlCLFNBQXZELEVBQWtFOEMsT0FBTyxDQUFDaEIsQ0FBRCxDQUF6RSxDQUFoQyxDQUFQO0FBQ0Q7O0FBQ0QsV0FBT0QsSUFBUDtBQUNEOztBQUNELE1BQUlkLFFBQVEsQ0FBQzhCLFNBQUQsQ0FBUixJQUF1QnZCLFNBQVMsQ0FBQ3dCLE9BQUQsQ0FBcEMsRUFBK0M7QUFDN0NFLFVBQU0sQ0FBQ0MsbUJBQVAsQ0FBMkJILE9BQTNCLEVBQW9DSSxPQUFwQyxDQUE0QyxVQUFVQyxHQUFWLEVBQWVDLEdBQWYsRUFBb0JDLEtBQXBCLEVBQTJCO0FBQ3JFeEIsVUFBSSxHQUFHQSxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsb0JBQW9CLENBQUNULGdCQUFnQixDQUFDQyxVQUFELEVBQWFDLFlBQWIsQ0FBakIsRUFBNkMwQixHQUE3QyxFQUFrRG5ELFNBQWxELEVBQTZEOEMsT0FBTyxDQUFDSyxHQUFELENBQXBFLENBQWhDLENBQVA7QUFDRCxLQUZEO0FBR0EsV0FBT3RCLElBQVA7QUFDRCxHQXBIeUUsQ0FxSDFFOzs7QUFDQSxNQUFJLENBQUNaLFFBQVEsQ0FBQzRCLFNBQUQsQ0FBUixJQUF1QjNCLE9BQU8sQ0FBQzJCLFNBQUQsQ0FBOUIsSUFBNkMxQixRQUFRLENBQUMwQixTQUFELENBQXJELElBQW9FdkIsU0FBUyxDQUFDdUIsU0FBRCxDQUE5RSxLQUE4RjlCLFFBQVEsQ0FBQytCLE9BQUQsQ0FBMUcsRUFBcUg7QUFDbkhqQixRQUFJLENBQUNJLElBQUwsQ0FBVTtBQUNSQyxjQUFRLEVBQUVYLGdCQUFnQixDQUFDQyxVQUFELEVBQWFDLFlBQWIsQ0FEbEI7QUFFUlUsVUFBSSxFQUFFdEIsYUFGRTtBQUdSdUIsVUFBSSxFQUFFLEVBSEU7QUFJUkMsUUFBRSxFQUFFO0FBSkksS0FBVjtBQU1BLFdBQU9SLElBQVA7QUFDRCxHQTlIeUUsQ0FnSTFFOzs7QUFDQSxNQUFJLENBQUNaLFFBQVEsQ0FBQzRCLFNBQUQsQ0FBUixJQUF1QjNCLE9BQU8sQ0FBQzJCLFNBQUQsQ0FBL0IsS0FBK0MxQixRQUFRLENBQUMyQixPQUFELENBQTNELEVBQXNFO0FBQ3BFakIsUUFBSSxDQUFDSSxJQUFMLENBQVU7QUFDUkMsY0FBUSxFQUFFWCxnQkFBZ0IsQ0FBQ0MsVUFBRCxFQUFhQyxZQUFiLENBRGxCO0FBRVJVLFVBQUksRUFBRXRCLGFBRkU7QUFHUnVCLFVBQUksRUFBRSxFQUhFO0FBSVJDLFFBQUUsRUFBRTtBQUpJLEtBQVY7O0FBT0EsU0FBSyxJQUFJUCxHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHZ0IsT0FBTyxDQUFDOUIsTUFBNUIsRUFBb0NjLEdBQUMsRUFBckMsRUFBeUM7QUFDdkNELFVBQUksR0FBR0EsSUFBSSxDQUFDRSxNQUFMLENBQVlDLG9CQUFvQixDQUFDVCxnQkFBZ0IsQ0FBQ0MsVUFBRCxFQUFhQyxZQUFiLENBQWpCLGFBQWlESyxHQUFqRCxRQUF1RDlCLFNBQXZELEVBQWtFOEMsT0FBTyxDQUFDaEIsR0FBRCxDQUF6RSxDQUFoQyxDQUFQO0FBQ0Q7O0FBRUQsV0FBT0QsSUFBUDtBQUNELEdBOUl5RSxDQWdKMUU7OztBQUNBLE1BQUksQ0FBQ1osUUFBUSxDQUFDNEIsU0FBRCxDQUFSLElBQXVCM0IsT0FBTyxDQUFDMkIsU0FBRCxDQUEvQixLQUErQ3ZCLFNBQVMsQ0FBQ3dCLE9BQUQsQ0FBNUQsRUFBdUU7QUFDckVqQixRQUFJLENBQUNJLElBQUwsQ0FBVTtBQUNSQyxjQUFRLEVBQUVYLGdCQUFnQixDQUFDQyxVQUFELEVBQWFDLFlBQWIsQ0FEbEI7QUFFUlUsVUFBSSxFQUFFdEIsYUFGRTtBQUdSdUIsVUFBSSxFQUFFLEVBSEU7QUFJUkMsUUFBRSxFQUFFO0FBSkksS0FBVjtBQU9BVyxVQUFNLENBQUNDLG1CQUFQLENBQTJCSCxPQUEzQixFQUFvQ0ksT0FBcEMsQ0FBNEMsVUFBVUMsR0FBVixFQUFlQyxHQUFmLEVBQW9CQyxLQUFwQixFQUEyQjtBQUNyRXhCLFVBQUksR0FBR0EsSUFBSSxDQUFDRSxNQUFMLENBQVlDLG9CQUFvQixDQUFDVCxnQkFBZ0IsQ0FBQ0MsVUFBRCxFQUFhQyxZQUFiLENBQWpCLEVBQTZDMEIsR0FBN0MsRUFBa0RuRCxTQUFsRCxFQUE2RDhDLE9BQU8sQ0FBQ0ssR0FBRCxDQUFwRSxDQUFoQyxDQUFQO0FBQ0QsS0FGRDtBQUlBLFdBQU90QixJQUFQO0FBQ0QsR0E5SnlFLENBZ0sxRTs7O0FBQ0EsTUFBSVYsUUFBUSxDQUFDMEIsU0FBRCxDQUFSLEtBQXdCNUIsUUFBUSxDQUFDNkIsT0FBRCxDQUFSLElBQXFCNUIsT0FBTyxDQUFDNEIsT0FBRCxDQUFwRCxDQUFKLEVBQW9FO0FBQ2xFakIsUUFBSSxDQUFDSSxJQUFMLENBQVU7QUFDUkMsY0FBUSxFQUFFWCxnQkFBZ0IsQ0FBQ0MsVUFBRCxFQUFhQyxZQUFiLENBRGxCO0FBRVJVLFVBQUksRUFBRXZCLGFBRkU7QUFHUndCLFVBQUksa0JBQVdTLFNBQVMsQ0FBQzdCLE1BQXJCLE1BSEk7QUFJUnFCLFFBQUUsRUFBRSwwQkFBWVMsT0FBWjtBQUpJLEtBQVY7QUFNQSxXQUFPakIsSUFBUDtBQUNELEdBekt5RSxDQTJLMUU7OztBQUNBLE1BQUlWLFFBQVEsQ0FBQzBCLFNBQUQsQ0FBUixJQUF1QjFCLFFBQVEsQ0FBQzJCLE9BQUQsQ0FBbkMsRUFBOEM7QUFDNUNqQixRQUFJLEdBQUdBLElBQUksQ0FBQ0UsTUFBTCxDQUFZTCxpQkFBaUIsQ0FBQ0YsVUFBRCxFQUFhQyxZQUFiLEVBQTJCb0IsU0FBM0IsRUFBc0NDLE9BQXRDLENBQTdCLENBQVA7QUFDQSxXQUFPakIsSUFBUDtBQUNELEdBL0t5RSxDQWlMMUU7OztBQUNBLE1BQUlWLFFBQVEsQ0FBQzBCLFNBQUQsQ0FBUixJQUF1QjFCLFFBQVEsQ0FBQzJCLE9BQUQsQ0FBbkMsRUFBOEM7QUFDNUNqQixRQUFJLENBQUNJLElBQUwsQ0FBVTtBQUNSQyxjQUFRLEVBQUVYLGdCQUFnQixDQUFDQyxVQUFELEVBQWFDLFlBQWIsQ0FEbEI7QUFFUlUsVUFBSSxFQUFFdEIsYUFGRTtBQUdSdUIsVUFBSSxrQkFBV1MsU0FBUyxDQUFDN0IsTUFBckIsTUFISTtBQUlScUIsUUFBRSxFQUFFO0FBSkksS0FBVjtBQU9BVyxVQUFNLENBQUNDLG1CQUFQLENBQTJCSCxPQUEzQixFQUFvQ0ksT0FBcEMsQ0FBNEMsVUFBVUMsR0FBVixFQUFlQyxHQUFmLEVBQW9CQyxLQUFwQixFQUEyQjtBQUNyRXhCLFVBQUksR0FBR0EsSUFBSSxDQUFDRSxNQUFMLENBQVlDLG9CQUFvQixDQUFDVCxnQkFBZ0IsQ0FBQ0MsVUFBRCxFQUFhQyxZQUFiLENBQWpCLEVBQTZDMEIsR0FBN0MsRUFBa0RuRCxTQUFsRCxFQUE2RDhDLE9BQU8sQ0FBQ0ssR0FBRCxDQUFwRSxDQUFoQyxDQUFQO0FBQ0QsS0FGRDtBQUlBLFdBQU90QixJQUFQO0FBQ0QsR0EvTHlFLENBaU0xRTs7O0FBQ0EsTUFBSVAsU0FBUyxDQUFDdUIsU0FBRCxDQUFULEtBQXlCNUIsUUFBUSxDQUFDNkIsT0FBRCxDQUFSLElBQXFCNUIsT0FBTyxDQUFDNEIsT0FBRCxDQUFyRCxDQUFKLEVBQXFFO0FBQ25FakIsUUFBSSxDQUFDSSxJQUFMLENBQVU7QUFDUkMsY0FBUSxFQUFFWCxnQkFBZ0IsQ0FBQ0MsVUFBRCxFQUFhQyxZQUFiLENBRGxCO0FBRVJVLFVBQUksRUFBRXZCLGFBRkU7QUFHUndCLFVBQUksRUFBRSxJQUhFO0FBSVJDLFFBQUUsRUFBRSwwQkFBWVMsT0FBWjtBQUpJLEtBQVY7QUFPQSxXQUFPakIsSUFBUDtBQUNELEdBM015RSxDQTRNMUU7OztBQUNBLE1BQUlQLFNBQVMsQ0FBQ3VCLFNBQUQsQ0FBVCxJQUF3QjFCLFFBQVEsQ0FBQzJCLE9BQUQsQ0FBcEMsRUFBK0M7QUFDN0NqQixRQUFJLENBQUNJLElBQUwsQ0FBVTtBQUNSQyxjQUFRLEVBQUVYLGdCQUFnQixDQUFDQyxVQUFELEVBQWFDLFlBQWIsQ0FEbEI7QUFFUlUsVUFBSSxFQUFFdEIsYUFGRTtBQUdSdUIsVUFBSSxFQUFFLElBSEU7QUFJUkMsUUFBRSxFQUFFLDBCQUFZUyxPQUFaO0FBSkksS0FBVjs7QUFNQSxTQUFLLElBQUloQixHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHZ0IsT0FBTyxDQUFDOUIsTUFBNUIsRUFBb0NjLEdBQUMsRUFBckMsRUFBeUM7QUFDdkNELFVBQUksR0FBR0EsSUFBSSxDQUFDRSxNQUFMLENBQVlDLG9CQUFvQixDQUFDVCxnQkFBZ0IsQ0FBQ0MsVUFBRCxFQUFhQyxZQUFiLENBQWpCLGFBQWlESyxHQUFqRCxRQUF1RDlCLFNBQXZELEVBQWtFOEMsT0FBTyxDQUFDaEIsR0FBRCxDQUF6RSxDQUFoQyxDQUFQO0FBQ0Q7O0FBQ0QsV0FBT0QsSUFBUDtBQUNELEdBeE55RSxDQTBOMUU7OztBQUNBLE1BQUlQLFNBQVMsQ0FBQ3VCLFNBQUQsQ0FBVCxJQUF3QnZCLFNBQVMsQ0FBQ3dCLE9BQUQsQ0FBckMsRUFBZ0Q7QUFDOUNFLFVBQU0sQ0FBQ0MsbUJBQVAsQ0FBMkJKLFNBQTNCLEVBQXNDSyxPQUF0QyxDQUE4QyxVQUFVQyxHQUFWLEVBQWVDLEdBQWYsRUFBb0JDLEtBQXBCLEVBQTJCO0FBQ3ZFeEIsVUFBSSxHQUFHQSxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsb0JBQW9CLENBQUNULGdCQUFnQixDQUFDQyxVQUFELEVBQWFDLFlBQWIsQ0FBakIsRUFBNkMwQixHQUE3QyxFQUFrRE4sU0FBUyxDQUFDTSxHQUFELENBQTNELEVBQWtFTCxPQUFPLENBQUNLLEdBQUQsQ0FBekUsQ0FBaEMsQ0FBUDtBQUNELEtBRkQ7QUFHQUgsVUFBTSxDQUFDQyxtQkFBUCxDQUEyQkgsT0FBM0IsRUFBb0NJLE9BQXBDLENBQTRDLFVBQVVDLEdBQVYsRUFBZUMsR0FBZixFQUFvQkMsS0FBcEIsRUFBMkI7QUFDckUsVUFBSVIsU0FBUyxDQUFDTSxHQUFELENBQVQsS0FBbUJuRCxTQUF2QixFQUFrQztBQUNoQztBQUNEOztBQUNENkIsVUFBSSxHQUFHQSxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsb0JBQW9CLENBQUNULGdCQUFnQixDQUFDQyxVQUFELEVBQWFDLFlBQWIsQ0FBakIsRUFBNkMwQixHQUE3QyxFQUFrRG5ELFNBQWxELEVBQTZEOEMsT0FBTyxDQUFDSyxHQUFELENBQXBFLENBQWhDLENBQVA7QUFDRCxLQUxEO0FBTUQ7O0FBRUQsU0FBT3RCLElBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7OztBQVNPLFNBQVN5QixtQkFBVCxDQUE2QkMsVUFBN0IsRUFBeUNWLFNBQXpDLEVBQW9EQyxPQUFwRCxFQUE2RDtBQUNsRSxTQUFPZCxvQkFBb0IsQ0FBQyxFQUFELEVBQUt1QixVQUFMLEVBQWlCVixTQUFqQixFQUE0QkMsT0FBNUIsQ0FBM0I7QUFDRCxDIiwiZmlsZSI6Im9iamVjdC1kaWZmZXJlbmNlLWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJPYmpEaWZmXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk9iakRpZmZcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiT2JqRGlmZlwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFueVRvU3RyaW5nKHQpIHtcclxuICBpZiAodHlwZW9mIHQgPT09IFwiYm9vbGVhblwiIHx8IHR5cGVvZiB0ID09PSBcIm51bWJlclwiIHx8IHR5cGVvZiB0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICByZXR1cm4gdC50b1N0cmluZygpO1xyXG4gIH0gZWxzZSBpZiAodCA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIFwibnVsbFwiO1xyXG4gIH0gZWxzZSBpZiAodCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gXCJ1bmRlZmluZWRcIjtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiB0ID09PSBcInN5bWJvbFwiKSB7XHJcbiAgICByZXR1cm4gXCJzeW1ib2xcIjtcclxuICB9IGVsc2UgaWYgKHQgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICByZXR1cm4gdC50b1VUQ1N0cmluZygpO1xyXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0KSkge1xyXG4gICAgcmV0dXJuIHRcclxuICAgICAgLm1hcCh4ID0+IHtcclxuICAgICAgICByZXR1cm4gYW55VG9TdHJpbmcoeCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKFwiLCBcIik7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgdCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICByZXR1cm4gXCJmdW5jdGlvblwiO1xyXG4gIH1cclxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodCk7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEdldE9iamVjdERpZmZlcmVuY2UgYXMgT2JqZWN0RGlmZmVyZW5jZX0gZnJvbSBcIi4vb2JqZWN0RGlmZmVyZW5jZS5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCB7IE9iamVjdERpZmZlcmVuY2UgfTtcclxuIiwiaW1wb3J0IGFueVRvU3RyaW5nIGZyb20gXCIuL2FueVRvU3RyaW5nLmpzXCI7XHJcblxyXG5jb25zdCBWQUxVRV9DUkVBVEVEID0gXCJjcmVhdGVkXCIsXHJcbiAgVkFMVUVfVVBEQVRFRCA9IFwidXBkYXRlZFwiLFxyXG4gIFZBTFVFX0RFTEVURUQgPSBcImRlbGV0ZWRcIixcclxuICBOT1RfQ09NUEFSQUJMRSA9IFwiTkFcIjtcclxuXHJcbmZ1bmN0aW9uIF9pc0JsYW5rKHQpIHtcclxuICByZXR1cm4gdCA9PT0gXCJcIiB8fCB0ID09PSAwIHx8IHQgPT09IHVuZGVmaW5lZCB8fCB0ID09PSBudWxsIHx8IHQgPT09IHt9IHx8IChBcnJheS5pc0FycmF5KHQpICYmIHQubGVuZ3RoIDwgMSk7XHJcbn1cclxuZnVuY3Rpb24gX2lzVmFsdWUodCkge1xyXG4gIHJldHVybiAhX2lzQmxhbmsodCkgJiYgKHR5cGVvZiB0ID09PSBcImJvb2xlYW5cIiB8fCB0eXBlb2YgdCA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgdCA9PT0gXCJzdHJpbmdcIik7XHJcbn1cclxuZnVuY3Rpb24gX2lzRGF0ZSh0KSB7XHJcbiAgcmV0dXJuICFfaXNCbGFuayh0KSAmJiB0IGluc3RhbmNlb2YgRGF0ZTtcclxufVxyXG5mdW5jdGlvbiBfaXNBcnJheSh0KSB7XHJcbiAgcmV0dXJuICFfaXNCbGFuayh0KSAmJiBBcnJheS5pc0FycmF5KHQpO1xyXG59XHJcbmZ1bmN0aW9uIF9pc0Z1bmN0aW9uKHQpIHtcclxuICByZXR1cm4gdHlwZW9mIHQgPT09IFwiZnVuY3Rpb25cIjtcclxufVxyXG5mdW5jdGlvbiBfaXNTeW1ib2wodCkge1xyXG4gIHJldHVybiB0eXBlb2YgdCA9PT0gXCJzeW1ib2xcIjtcclxufVxyXG5mdW5jdGlvbiBfaXNPYmplY3QodCkge1xyXG4gIHJldHVybiAhX2lzVmFsdWUodCkgJiYgIV9pc0JsYW5rKHQpICYmICFfaXNEYXRlKHQpICYmICFfaXNBcnJheSh0KSAmJiAhX2lzRnVuY3Rpb24odCkgJiYgIV9pc1N5bWJvbCh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpIHtcclxuICByZXR1cm4gcGFyZW50TmFtZSA/IGAke3BhcmVudE5hbWV9LiR7cHJvcGVydHlOYW1lfWAgOiBwcm9wZXJ0eU5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9nZXRBcnJheURpZmZlbmNlKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSwgYTEsIGEyKSB7XHJcbiAgbGV0IGRpZmYgPSBbXTtcclxuXHJcbiAgaWYgKGExLmxlbmd0aCA9PT0gYTIubGVuZ3RoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGExLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChKU09OLnN0cmluZ2lmeShhMVtpXSkgPT09IEpTT04uc3RyaW5naWZ5KGEyW2ldKSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYTEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGRpZmYgPSBkaWZmLmNvbmNhdChfR2V0T2JqZWN0RGlmZmVyZW5jZShfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksIGBbJHtpfV1gLCBhMVtpXSwgYTJbaV0pKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICBpZiAoYTEubGVuZ3RoID4gMzAgfHwgYTIubGVuZ3RoID4gMzApIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX1VQREFURUQsXHJcbiAgICAgIGZyb206IGBBcnJheVske2ExLmxlbmd0aH1dYCxcclxuICAgICAgdG86IGBBcnJheVske2EyLmxlbmd0aH1dYFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNvbXBhcmVyKG90aGVyQXJyYXkpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoY3VycmVudCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIG90aGVyQXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG90aGVyKSA9PT0gSlNPTi5zdHJpbmdpZnkoY3VycmVudCk7XHJcbiAgICAgICAgfSkubGVuZ3RoID09PSAwXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbGV0IG9ubHlJbkExID0gYTEuZmlsdGVyKGNvbXBhcmVyKGEyKSk7XHJcblxyXG4gIGxldCBvbmx5SW5BMiA9IGEyLmZpbHRlcihjb21wYXJlcihhMSkpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9ubHlJbkExLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBkaWZmID0gZGlmZi5jb25jYXQoX0dldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCBgWyR7aX1dYCwgb25seUluQTFbaV0sIHVuZGVmaW5lZCkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9ubHlJbkEyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBkaWZmID0gZGlmZi5jb25jYXQoX0dldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCBgWyR7aX1dYCwgdW5kZWZpbmVkLCBvbmx5SW5BMltpXSkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGlmZjtcclxufVxyXG5cclxuZnVuY3Rpb24gX0dldE9iamVjdERpZmZlcmVuY2UocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lLCB2YWx1ZUZyb20sIHZhbHVlVG8pIHtcclxuICBsZXQgZGlmZiA9IFtdO1xyXG5cclxuICBpZiAocHJvcGVydHlOYW1lID09PSBcIl9fb2JfX1wiIHx8IHByb3BlcnR5TmFtZSA9PT0gXCJfX3Byb3RvX19cIikge1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG4gIC8vIGNhc2U6IOS4pOS4qumDveaYr+WfuuehgOexu+Wei1xyXG4gIGlmIChfaXNWYWx1ZSh2YWx1ZUZyb20pICYmIF9pc1ZhbHVlKHZhbHVlVG8pKSB7XHJcbiAgICBpZiAodmFsdWVGcm9tID09IHZhbHVlVG8pIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgICByZXR1cm4gZGlmZjtcclxuICAgIH1cclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX1VQREFURUQsXHJcbiAgICAgIGZyb206IHZhbHVlRnJvbSxcclxuICAgICAgdG86IHZhbHVlVG9cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiDmjpLpmaTmnIlmdW5jdGlvbueahOaDheWGtVxyXG4gIGlmIChfaXNGdW5jdGlvbih2YWx1ZUZyb20pIHx8IF9pc0Z1bmN0aW9uKHZhbHVlVG8pKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBOT1RfQ09NUEFSQUJMRSxcclxuICAgICAgZnJvbTogYW55VG9TdHJpbmcodmFsdWVGcm9tKSxcclxuICAgICAgdG86IGFueVRvU3RyaW5nKHZhbHVlVG8pXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTog5YW25Lit5LiA5Liq5pivc3ltYm9sXHJcbiAgaWYgKF9pc1N5bWJvbCh2YWx1ZUZyb20pIHx8IF9pc1N5bWJvbCh2YWx1ZVRvKSkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfVVBEQVRFRCxcclxuICAgICAgZnJvbTogYW55VG9TdHJpbmcodmFsdWVGcm9tKSxcclxuICAgICAgdG86IGFueVRvU3RyaW5nKHZhbHVlVG8pXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTog5Lik5Liq6YO95piv5pel5pyfXHJcbiAgaWYgKF9pc0RhdGUodmFsdWVGcm9tKSAmJiBfaXNEYXRlKHZhbHVlVG8pKSB7XHJcbiAgICBpZiAodmFsdWVGcm9tLmdldFRpbWUoKSA9PT0gdmFsdWVUby5nZXRUaW1lKCkpIHtcclxuICAgICAgcmV0dXJuIGRpZmY7XHJcbiAgICB9XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9VUERBVEVELFxyXG4gICAgICBmcm9tOiBhbnlUb1N0cmluZyh2YWx1ZUZyb20pLFxyXG4gICAgICB0bzogYW55VG9TdHJpbmcodmFsdWVUbylcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiDkuIDkuKrmmK/ml6XmnJ/vvIzlj6bkuIDkuKrmmK/lgLxcclxuICBpZiAoX2lzRGF0ZSh2YWx1ZVRvKSAmJiBfaXNWYWx1ZSh2YWx1ZUZyb20pKSB7XHJcbiAgICBpZiAobmV3IERhdGUodmFsdWVGcm9tKS5nZXRUaW1lKCkgPT09IHZhbHVlVG8uZ2V0VGltZSgpKSB7XHJcbiAgICAgIHJldHVybiBkaWZmO1xyXG4gICAgfVxyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfVVBEQVRFRCxcclxuICAgICAgZnJvbTogYW55VG9TdHJpbmcodmFsdWVGcm9tKSxcclxuICAgICAgdG86IGFueVRvU3RyaW5nKHZhbHVlVG8pXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuICBpZiAoX2lzRGF0ZSh2YWx1ZUZyb20pICYmIF9pc1ZhbHVlKHZhbHVlVG8pKSB7XHJcbiAgICBpZiAobmV3IERhdGUodmFsdWVUbykuZ2V0VGltZSgpID09PSB2YWx1ZUZyb20uZ2V0VGltZSgpKSB7XHJcbiAgICAgIHJldHVybiBkaWZmO1xyXG4gICAgfVxyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfVVBEQVRFRCxcclxuICAgICAgZnJvbTogYW55VG9TdHJpbmcodmFsdWVGcm9tKSxcclxuICAgICAgdG86IGFueVRvU3RyaW5nKHZhbHVlVG8pXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTog5Lik5Liq6YO95pivQmxhbmtcclxuICBpZiAoX2lzQmxhbmsodmFsdWVGcm9tKSAmJiBfaXNCbGFuayh2YWx1ZVRvKSkge1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG4gIC8vIGNhc2U6IEZyb23mmK9ibGFuaywgVG/kuI3mmK9cclxuICBpZiAoX2lzQmxhbmsodmFsdWVGcm9tKSAmJiBfaXNWYWx1ZSh2YWx1ZVRvKSkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfQ1JFQVRFRCxcclxuICAgICAgZnJvbTogXCJcIixcclxuICAgICAgdG86IGFueVRvU3RyaW5nKHZhbHVlVG8pXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuICBpZiAoX2lzQmxhbmsodmFsdWVGcm9tKSAmJiBfaXNEYXRlKHZhbHVlVG8pKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9DUkVBVEVELFxyXG4gICAgICBmcm9tOiBcIlwiLFxyXG4gICAgICB0bzogYW55VG9TdHJpbmcodmFsdWVUbylcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG4gIGlmIChfaXNCbGFuayh2YWx1ZUZyb20pICYmIF9pc0FycmF5KHZhbHVlVG8pKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlVG8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgYFske2l9XWAsIHVuZGVmaW5lZCwgdmFsdWVUb1tpXSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG4gIGlmIChfaXNCbGFuayh2YWx1ZUZyb20pICYmIF9pc09iamVjdCh2YWx1ZVRvKSkge1xyXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWVUbykuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpZHgsIGFycmF5KSB7XHJcbiAgICAgIGRpZmYgPSBkaWZmLmNvbmNhdChfR2V0T2JqZWN0RGlmZmVyZW5jZShfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksIHZhbCwgdW5kZWZpbmVkLCB2YWx1ZVRvW3ZhbF0pKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG4gIC8vIGNhc2U6IEZyb23kuI3mmK9ibGFuaywgVG/mmK9cclxuICBpZiAoKF9pc1ZhbHVlKHZhbHVlRnJvbSkgfHwgX2lzRGF0ZSh2YWx1ZUZyb20pIHx8IF9pc0FycmF5KHZhbHVlRnJvbSkgfHwgX2lzT2JqZWN0KHZhbHVlRnJvbSkpICYmIF9pc0JsYW5rKHZhbHVlVG8pKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9ERUxFVEVELFxyXG4gICAgICBmcm9tOiBcIlwiLFxyXG4gICAgICB0bzogXCJcIlxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IEZyb23mmK/lgLzmiJbml6XmnJ/vvIxUb+aYr0FycmF5XHJcbiAgaWYgKChfaXNWYWx1ZSh2YWx1ZUZyb20pIHx8IF9pc0RhdGUodmFsdWVGcm9tKSkgJiYgX2lzQXJyYXkodmFsdWVUbykpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX0RFTEVURUQsXHJcbiAgICAgIGZyb206IFwiXCIsXHJcbiAgICAgIHRvOiBcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlVG8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgYFske2l9XWAsIHVuZGVmaW5lZCwgdmFsdWVUb1tpXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTogRnJvbeaYr+WAvOaIluaXpeacn++8jFRv5pivT2JqZWN0XHJcbiAgaWYgKChfaXNWYWx1ZSh2YWx1ZUZyb20pIHx8IF9pc0RhdGUodmFsdWVGcm9tKSkgJiYgX2lzT2JqZWN0KHZhbHVlVG8pKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9ERUxFVEVELFxyXG4gICAgICBmcm9tOiBcIlwiLFxyXG4gICAgICB0bzogXCJcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWVUbykuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpZHgsIGFycmF5KSB7XHJcbiAgICAgIGRpZmYgPSBkaWZmLmNvbmNhdChfR2V0T2JqZWN0RGlmZmVyZW5jZShfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksIHZhbCwgdW5kZWZpbmVkLCB2YWx1ZVRvW3ZhbF0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTogRnJvbeaYr0FycmF577yMVG/mmK/lgLzmiJbml6XmnJ9cclxuICBpZiAoX2lzQXJyYXkodmFsdWVGcm9tKSAmJiAoX2lzVmFsdWUodmFsdWVUbykgfHwgX2lzRGF0ZSh2YWx1ZVRvKSkpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX1VQREFURUQsXHJcbiAgICAgIGZyb206IGBBcnJheVske3ZhbHVlRnJvbS5sZW5ndGh9XWAsXHJcbiAgICAgIHRvOiBhbnlUb1N0cmluZyh2YWx1ZVRvKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IEZyb23mmK9BcnJhee+8jFRv5pivQXJyYXlcclxuICBpZiAoX2lzQXJyYXkodmFsdWVGcm9tKSAmJiBfaXNBcnJheSh2YWx1ZVRvKSkge1xyXG4gICAgZGlmZiA9IGRpZmYuY29uY2F0KF9nZXRBcnJheURpZmZlbmNlKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSwgdmFsdWVGcm9tLCB2YWx1ZVRvKSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IEZyb23mmK9BcnJhee+8jFRv5pivT2JqZWN0XHJcbiAgaWYgKF9pc0FycmF5KHZhbHVlRnJvbSkgJiYgX2lzQXJyYXkodmFsdWVUbykpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX0RFTEVURUQsXHJcbiAgICAgIGZyb206IGBBcnJheVske3ZhbHVlRnJvbS5sZW5ndGh9XWAsXHJcbiAgICAgIHRvOiBcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZVRvKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGlkeCwgYXJyYXkpIHtcclxuICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgdmFsLCB1bmRlZmluZWQsIHZhbHVlVG9bdmFsXSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiBGcm9t5pivT2JqZWN077yMVG/mmK/lgLzmiJbml6XmnJ9cclxuICBpZiAoX2lzT2JqZWN0KHZhbHVlRnJvbSkgJiYgKF9pc1ZhbHVlKHZhbHVlVG8pIHx8IF9pc0RhdGUodmFsdWVUbykpKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9VUERBVEVELFxyXG4gICAgICBmcm9tOiBcInt9XCIsXHJcbiAgICAgIHRvOiBhbnlUb1N0cmluZyh2YWx1ZVRvKVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG4gIC8vIGNhc2U6IEZyb23mmK9PYmplY3TvvIxUb+aYr0FycmF5XHJcbiAgaWYgKF9pc09iamVjdCh2YWx1ZUZyb20pICYmIF9pc0FycmF5KHZhbHVlVG8pKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9ERUxFVEVELFxyXG4gICAgICBmcm9tOiBcInt9XCIsXHJcbiAgICAgIHRvOiBhbnlUb1N0cmluZyh2YWx1ZVRvKVxyXG4gICAgfSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlVG8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgYFske2l9XWAsIHVuZGVmaW5lZCwgdmFsdWVUb1tpXSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiBGcm9t5pivT2JqZWN077yMVG/mmK9PYmplY3RcclxuICBpZiAoX2lzT2JqZWN0KHZhbHVlRnJvbSkgJiYgX2lzT2JqZWN0KHZhbHVlVG8pKSB7XHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZUZyb20pLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaWR4LCBhcnJheSkge1xyXG4gICAgICBkaWZmID0gZGlmZi5jb25jYXQoX0dldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCB2YWwsIHZhbHVlRnJvbVt2YWxdLCB2YWx1ZVRvW3ZhbF0pKTtcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWVUbykuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpZHgsIGFycmF5KSB7XHJcbiAgICAgIGlmICh2YWx1ZUZyb21bdmFsXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGRpZmYgPSBkaWZmLmNvbmNhdChfR2V0T2JqZWN0RGlmZmVyZW5jZShfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksIHZhbCwgdW5kZWZpbmVkLCB2YWx1ZVRvW3ZhbF0pKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRpZmY7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgZGVlcCBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIG9iamVjdHMuIEFuIGVtcHR5IGFycmF5IHdpbGwgYmUgcmV0dXJuZWQgZm9yIHR3byBzYW1lIG9iamVjdHMgY29tcGFyaW5nLlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBwYXJhbSB7Kn0gcHJvcGVydHlOYW1lIG9iamVjdCBuYW1lLCBhcyB0aGUgcm9vdCBwcm9wZXJ0eSBuYW1lXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWVGcm9tIHZhbHVlIGNvbXBhcmluZyBvbiB0aGUgbGVmdFxyXG4gKiBAcGFyYW0geyp9IHZhbHVlVG8gdmFsdWUgY29tcGFyaW5nIG9uIHRoZSByaWdodFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEdldE9iamVjdERpZmZlcmVuY2Uob2JqZWN0TmFtZSwgdmFsdWVGcm9tLCB2YWx1ZVRvKSB7XHJcbiAgcmV0dXJuIF9HZXRPYmplY3REaWZmZXJlbmNlKFwiXCIsIG9iamVjdE5hbWUsIHZhbHVlRnJvbSwgdmFsdWVUbyk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==