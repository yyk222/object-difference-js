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

function _isObject(t) {
  return !_isValue(t) && !_isBlank(t) && !_isDate(t) && !_isArray(t) && !_isFunction(t);
}

function _getFullPropName(parentName, propertyName) {
  return parentName ? "".concat(parentName, ".").concat(propertyName) : propertyName;
}

function _getArrayDiffence(parentName, propertyName, a1, a2) {
  var diff = [];

  if (a1.length === a2.length) {
    for (var i = 0; i < a1.length; i++) {
      if (JSON.stringify(a1) === JSON.stringify(a2)) {
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


  if (_isDate(valueFrom) && _isValue(valueTo) || _isDate(valueTo) && _isValue(valueFrom)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9PYmpEaWZmL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9PYmpEaWZmL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL09iakRpZmYvLi9zcmMvYW55VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vT2JqRGlmZi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9PYmpEaWZmLy4vc3JjL29iamVjdERpZmZlcmVuY2UuanMiXSwibmFtZXMiOlsiYW55VG9TdHJpbmciLCJ0IiwidG9TdHJpbmciLCJ1bmRlZmluZWQiLCJEYXRlIiwidG9VVENTdHJpbmciLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJ4Iiwiam9pbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJPYmplY3REaWZmZXJlbmNlIiwiVkFMVUVfQ1JFQVRFRCIsIlZBTFVFX1VQREFURUQiLCJWQUxVRV9ERUxFVEVEIiwiTk9UX0NPTVBBUkFCTEUiLCJfaXNCbGFuayIsImxlbmd0aCIsIl9pc1ZhbHVlIiwiX2lzRGF0ZSIsIl9pc0FycmF5IiwiX2lzRnVuY3Rpb24iLCJfaXNPYmplY3QiLCJfZ2V0RnVsbFByb3BOYW1lIiwicGFyZW50TmFtZSIsInByb3BlcnR5TmFtZSIsIl9nZXRBcnJheURpZmZlbmNlIiwiYTEiLCJhMiIsImRpZmYiLCJpIiwiY29uY2F0IiwiX0dldE9iamVjdERpZmZlcmVuY2UiLCJwdXNoIiwicHJvcGVydHkiLCJ0eXBlIiwiZnJvbSIsInRvIiwiY29tcGFyZXIiLCJvdGhlckFycmF5IiwiY3VycmVudCIsImZpbHRlciIsIm90aGVyIiwib25seUluQTEiLCJvbmx5SW5BMiIsInZhbHVlRnJvbSIsInZhbHVlVG8iLCJnZXRUaW1lIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvckVhY2giLCJ2YWwiLCJpZHgiLCJhcnJheSIsIkdldE9iamVjdERpZmZlcmVuY2UiLCJvYmplY3ROYW1lIl0sIm1hcHBpbmdzIjoiQUFB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RUFBZUMsR0FBZixFQUFvQkMsS0FBcEIsRUFBMkI7QUFDdkV4QixVQUFJLEdBQUdBLElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxvQkFBb0IsQ0FBQ1QsZ0JBQWdCLENBQUNDLFVBQUQsRUFBYUMsWUFBYixDQUFqQixFQUE2QzBCLEdBQTdDLEVBQWtETixTQUFTLENBQUNNLEdBQUQsQ0FBM0QsRUFBa0VMLE9BQU8sQ0FBQ0ssR0FBRCxDQUF6RSxDQUFoQyxDQUFQO0FBQ0QsS0FGRDtBQUdBSCxVQUFNLENBQUNDLG1CQUFQLENBQTJCSCxPQUEzQixFQUFvQ0ksT0FBcEMsQ0FBNEMsVUFBVUMsR0FBVixFQUFlQyxHQUFmLEVBQW9CQyxLQUFwQixFQUEyQjtBQUNyRSxVQUFJUixTQUFTLENBQUNNLEdBQUQsQ0FBVCxLQUFtQmxELFNBQXZCLEVBQWtDO0FBQ2hDO0FBQ0Q7O0FBQ0Q0QixVQUFJLEdBQUdBLElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxvQkFBb0IsQ0FBQ1QsZ0JBQWdCLENBQUNDLFVBQUQsRUFBYUMsWUFBYixDQUFqQixFQUE2QzBCLEdBQTdDLEVBQWtEbEQsU0FBbEQsRUFBNkQ2QyxPQUFPLENBQUNLLEdBQUQsQ0FBcEUsQ0FBaEMsQ0FBUDtBQUNELEtBTEQ7QUFNRDs7QUFFRCxTQUFPdEIsSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU08sU0FBU3lCLG1CQUFULENBQTZCQyxVQUE3QixFQUF5Q1YsU0FBekMsRUFBb0RDLE9BQXBELEVBQTZEO0FBQ2xFLFNBQU9kLG9CQUFvQixDQUFDLEVBQUQsRUFBS3VCLFVBQUwsRUFBaUJWLFNBQWpCLEVBQTRCQyxPQUE1QixDQUEzQjtBQUNELEMiLCJmaWxlIjoib2JqZWN0LWRpZmZlcmVuY2UtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIk9iakRpZmZcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiT2JqRGlmZlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJPYmpEaWZmXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW55VG9TdHJpbmcodCkge1xyXG4gIGlmICh0eXBlb2YgdCA9PT0gXCJib29sZWFuXCIgfHwgdHlwZW9mIHQgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgIHJldHVybiB0LnRvU3RyaW5nKCk7XHJcbiAgfSBlbHNlIGlmICh0ID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gXCJudWxsXCI7XHJcbiAgfSBlbHNlIGlmICh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBcInVuZGVmaW5lZFwiO1xyXG4gIH1cclxuICBpZiAodHlwZW9mIHQgPT09IFwic3ltYm9sXCIpIHtcclxuICAgIHJldHVybiBcInN5bWJvbFwiO1xyXG4gIH0gZWxzZSBpZiAodCBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgIHJldHVybiB0LnRvVVRDU3RyaW5nKCk7XHJcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHQpKSB7XHJcbiAgICByZXR1cm4gdFxyXG4gICAgICAubWFwKHggPT4ge1xyXG4gICAgICAgIHJldHVybiBhbnlUb1N0cmluZyh4KTtcclxuICAgICAgfSlcclxuICAgICAgLmpvaW4oXCIsIFwiKTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiB0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHJldHVybiBcImZ1bmN0aW9uXCI7XHJcbiAgfVxyXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh0KTtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgR2V0T2JqZWN0RGlmZmVyZW5jZSBhcyBPYmplY3REaWZmZXJlbmNlfSBmcm9tIFwiLi9vYmplY3REaWZmZXJlbmNlLmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHsgT2JqZWN0RGlmZmVyZW5jZSB9O1xyXG4iLCJpbXBvcnQgYW55VG9TdHJpbmcgZnJvbSBcIi4vYW55VG9TdHJpbmcuanNcIjtcclxuXHJcbmNvbnN0IFZBTFVFX0NSRUFURUQgPSBcImNyZWF0ZWRcIixcclxuICBWQUxVRV9VUERBVEVEID0gXCJ1cGRhdGVkXCIsXHJcbiAgVkFMVUVfREVMRVRFRCA9IFwiZGVsZXRlZFwiLFxyXG4gIE5PVF9DT01QQVJBQkxFID0gXCJOQVwiO1xyXG5cclxuZnVuY3Rpb24gX2lzQmxhbmsodCkge1xyXG4gIHJldHVybiB0ID09PSBcIlwiIHx8IHQgPT09IDAgfHwgdCA9PT0gdW5kZWZpbmVkIHx8IHQgPT09IG51bGwgfHwgdCA9PT0ge30gfHwgKEFycmF5LmlzQXJyYXkodCkgJiYgdC5sZW5ndGggPCAxKTtcclxufVxyXG5mdW5jdGlvbiBfaXNWYWx1ZSh0KSB7XHJcbiAgcmV0dXJuICFfaXNCbGFuayh0KSAmJiAodHlwZW9mIHQgPT09IFwiYm9vbGVhblwiIHx8IHR5cGVvZiB0ID09PSBcIm51bWJlclwiIHx8IHR5cGVvZiB0ID09PSBcInN0cmluZ1wiKTtcclxufVxyXG5mdW5jdGlvbiBfaXNEYXRlKHQpIHtcclxuICByZXR1cm4gIV9pc0JsYW5rKHQpICYmIHQgaW5zdGFuY2VvZiBEYXRlO1xyXG59XHJcbmZ1bmN0aW9uIF9pc0FycmF5KHQpIHtcclxuICByZXR1cm4gIV9pc0JsYW5rKHQpICYmIEFycmF5LmlzQXJyYXkodCk7XHJcbn1cclxuZnVuY3Rpb24gX2lzRnVuY3Rpb24odCkge1xyXG4gIHJldHVybiB0eXBlb2YgdCA9PT0gXCJmdW5jdGlvblwiO1xyXG59XHJcbmZ1bmN0aW9uIF9pc09iamVjdCh0KSB7XHJcbiAgcmV0dXJuICFfaXNWYWx1ZSh0KSAmJiAhX2lzQmxhbmsodCkgJiYgIV9pc0RhdGUodCkgJiYgIV9pc0FycmF5KHQpICYmICFfaXNGdW5jdGlvbih0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpIHtcclxuICByZXR1cm4gcGFyZW50TmFtZSA/IGAke3BhcmVudE5hbWV9LiR7cHJvcGVydHlOYW1lfWAgOiBwcm9wZXJ0eU5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9nZXRBcnJheURpZmZlbmNlKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSwgYTEsIGEyKSB7XHJcbiAgbGV0IGRpZmYgPSBbXTtcclxuXHJcbiAgaWYgKGExLmxlbmd0aCA9PT0gYTIubGVuZ3RoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGExLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChKU09OLnN0cmluZ2lmeShhMSkgPT09IEpTT04uc3RyaW5naWZ5KGEyKSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYTEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGRpZmYgPSBkaWZmLmNvbmNhdChfR2V0T2JqZWN0RGlmZmVyZW5jZShfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksIGBbJHtpfV1gLCBhMVtpXSwgYTJbaV0pKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICBpZiAoYTEubGVuZ3RoID4gMzAgfHwgYTIubGVuZ3RoID4gMzApIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX1VQREFURUQsXHJcbiAgICAgIGZyb206IGBBcnJheVske2ExLmxlbmd0aH1dYCxcclxuICAgICAgdG86IGBBcnJheVske2EyLmxlbmd0aH1dYFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNvbXBhcmVyKG90aGVyQXJyYXkpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoY3VycmVudCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIG90aGVyQXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG90aGVyKSA9PT0gSlNPTi5zdHJpbmdpZnkoY3VycmVudCk7XHJcbiAgICAgICAgfSkubGVuZ3RoID09PSAwXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbGV0IG9ubHlJbkExID0gYTEuZmlsdGVyKGNvbXBhcmVyKGEyKSk7XHJcblxyXG4gIGxldCBvbmx5SW5BMiA9IGEyLmZpbHRlcihjb21wYXJlcihhMSkpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9ubHlJbkExLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBkaWZmID0gZGlmZi5jb25jYXQoX0dldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCBgWyR7aX1dYCwgb25seUluQTFbaV0sIHVuZGVmaW5lZCkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9ubHlJbkEyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBkaWZmID0gZGlmZi5jb25jYXQoX0dldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCBgWyR7aX1dYCwgdW5kZWZpbmVkLCBvbmx5SW5BMltpXSkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGlmZjtcclxufVxyXG5cclxuZnVuY3Rpb24gX0dldE9iamVjdERpZmZlcmVuY2UocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lLCB2YWx1ZUZyb20sIHZhbHVlVG8pIHtcclxuICBsZXQgZGlmZiA9IFtdO1xyXG5cclxuICBpZiAocHJvcGVydHlOYW1lID09PSBcIl9fb2JfX1wiIHx8IHByb3BlcnR5TmFtZSA9PT0gXCJfX3Byb3RvX19cIikge1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG4gIC8vIGNhc2U6IOS4pOS4qumDveaYr+WfuuehgOexu+Wei1xyXG4gIGlmIChfaXNWYWx1ZSh2YWx1ZUZyb20pICYmIF9pc1ZhbHVlKHZhbHVlVG8pKSB7XHJcbiAgICBpZiAodmFsdWVGcm9tID09IHZhbHVlVG8pIHsgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAgICAgcmV0dXJuIGRpZmY7XHJcbiAgICB9XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9VUERBVEVELFxyXG4gICAgICBmcm9tOiB2YWx1ZUZyb20sXHJcbiAgICAgIHRvOiB2YWx1ZVRvXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTog5o6S6Zmk5pyJZnVuY3Rpb27nmoTmg4XlhrVcclxuICBpZiAoX2lzRnVuY3Rpb24odmFsdWVGcm9tKSB8fCBfaXNGdW5jdGlvbih2YWx1ZVRvKSkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogTk9UX0NPTVBBUkFCTEUsXHJcbiAgICAgIGZyb206IGFueVRvU3RyaW5nKHZhbHVlRnJvbSksXHJcbiAgICAgIHRvOiBhbnlUb1N0cmluZyh2YWx1ZVRvKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IOS4pOS4qumDveaYr+aXpeacn1xyXG4gIGlmIChfaXNEYXRlKHZhbHVlRnJvbSkgJiYgX2lzRGF0ZSh2YWx1ZVRvKSkge1xyXG4gICAgaWYgKHZhbHVlRnJvbS5nZXRUaW1lKCkgPT09IHZhbHVlVG8uZ2V0VGltZSgpKSB7XHJcbiAgICAgIHJldHVybiBkaWZmO1xyXG4gICAgfVxyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfVVBEQVRFRCxcclxuICAgICAgZnJvbTogYW55VG9TdHJpbmcodmFsdWVGcm9tKSxcclxuICAgICAgdG86IGFueVRvU3RyaW5nKHZhbHVlVG8pXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTog5LiA5Liq5piv5pel5pyf77yM5Y+m5LiA5Liq5piv5YC8XHJcbiAgaWYgKChfaXNEYXRlKHZhbHVlRnJvbSkgJiYgX2lzVmFsdWUodmFsdWVUbykpIHx8IChfaXNEYXRlKHZhbHVlVG8pICYmIF9pc1ZhbHVlKHZhbHVlRnJvbSkpKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9VUERBVEVELFxyXG4gICAgICBmcm9tOiBhbnlUb1N0cmluZyh2YWx1ZUZyb20pLFxyXG4gICAgICB0bzogYW55VG9TdHJpbmcodmFsdWVUbylcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiDkuKTkuKrpg73mmK9CbGFua1xyXG4gIGlmIChfaXNCbGFuayh2YWx1ZUZyb20pICYmIF9pc0JsYW5rKHZhbHVlVG8pKSB7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcbiAgLy8gY2FzZTogRnJvbeaYr2JsYW5rLCBUb+S4jeaYr1xyXG4gIGlmIChfaXNCbGFuayh2YWx1ZUZyb20pICYmIF9pc1ZhbHVlKHZhbHVlVG8pKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9DUkVBVEVELFxyXG4gICAgICBmcm9tOiBcIlwiLFxyXG4gICAgICB0bzogYW55VG9TdHJpbmcodmFsdWVUbylcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG4gIGlmIChfaXNCbGFuayh2YWx1ZUZyb20pICYmIF9pc0RhdGUodmFsdWVUbykpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX0NSRUFURUQsXHJcbiAgICAgIGZyb206IFwiXCIsXHJcbiAgICAgIHRvOiBhbnlUb1N0cmluZyh2YWx1ZVRvKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcbiAgaWYgKF9pc0JsYW5rKHZhbHVlRnJvbSkgJiYgX2lzQXJyYXkodmFsdWVUbykpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVUby5sZW5ndGg7IGkrKykge1xyXG4gICAgICBkaWZmID0gZGlmZi5jb25jYXQoX0dldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCBgWyR7aX1dYCwgdW5kZWZpbmVkLCB2YWx1ZVRvW2ldKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcbiAgaWYgKF9pc0JsYW5rKHZhbHVlRnJvbSkgJiYgX2lzT2JqZWN0KHZhbHVlVG8pKSB7XHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZVRvKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGlkeCwgYXJyYXkpIHtcclxuICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgdmFsLCB1bmRlZmluZWQsIHZhbHVlVG9bdmFsXSkpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcbiAgLy8gY2FzZTogRnJvbeS4jeaYr2JsYW5rLCBUb+aYr1xyXG4gIGlmICgoX2lzVmFsdWUodmFsdWVGcm9tKSB8fCBfaXNEYXRlKHZhbHVlRnJvbSkgfHwgX2lzQXJyYXkodmFsdWVGcm9tKSB8fCBfaXNPYmplY3QodmFsdWVGcm9tKSkgJiYgX2lzQmxhbmsodmFsdWVUbykpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX0RFTEVURUQsXHJcbiAgICAgIGZyb206IFwiXCIsXHJcbiAgICAgIHRvOiBcIlwiXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTogRnJvbeaYr+WAvOaIluaXpeacn++8jFRv5pivQXJyYXlcclxuICBpZiAoKF9pc1ZhbHVlKHZhbHVlRnJvbSkgfHwgX2lzRGF0ZSh2YWx1ZUZyb20pKSAmJiBfaXNBcnJheSh2YWx1ZVRvKSkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfREVMRVRFRCxcclxuICAgICAgZnJvbTogXCJcIixcclxuICAgICAgdG86IFwiXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVUby5sZW5ndGg7IGkrKykge1xyXG4gICAgICBkaWZmID0gZGlmZi5jb25jYXQoX0dldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCBgWyR7aX1dYCwgdW5kZWZpbmVkLCB2YWx1ZVRvW2ldKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiBGcm9t5piv5YC85oiW5pel5pyf77yMVG/mmK9PYmplY3RcclxuICBpZiAoKF9pc1ZhbHVlKHZhbHVlRnJvbSkgfHwgX2lzRGF0ZSh2YWx1ZUZyb20pKSAmJiBfaXNPYmplY3QodmFsdWVUbykpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX0RFTEVURUQsXHJcbiAgICAgIGZyb206IFwiXCIsXHJcbiAgICAgIHRvOiBcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZVRvKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGlkeCwgYXJyYXkpIHtcclxuICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgdmFsLCB1bmRlZmluZWQsIHZhbHVlVG9bdmFsXSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiBGcm9t5pivQXJyYXnvvIxUb+aYr+WAvOaIluaXpeacn1xyXG4gIGlmIChfaXNBcnJheSh2YWx1ZUZyb20pICYmIChfaXNWYWx1ZSh2YWx1ZVRvKSB8fCBfaXNEYXRlKHZhbHVlVG8pKSkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfVVBEQVRFRCxcclxuICAgICAgZnJvbTogYEFycmF5WyR7dmFsdWVGcm9tLmxlbmd0aH1dYCxcclxuICAgICAgdG86IGFueVRvU3RyaW5nKHZhbHVlVG8pXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTogRnJvbeaYr0FycmF577yMVG/mmK9BcnJheVxyXG4gIGlmIChfaXNBcnJheSh2YWx1ZUZyb20pICYmIF9pc0FycmF5KHZhbHVlVG8pKSB7XHJcbiAgICBkaWZmID0gZGlmZi5jb25jYXQoX2dldEFycmF5RGlmZmVuY2UocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lLCB2YWx1ZUZyb20sIHZhbHVlVG8pKTtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTogRnJvbeaYr0FycmF577yMVG/mmK9PYmplY3RcclxuICBpZiAoX2lzQXJyYXkodmFsdWVGcm9tKSAmJiBfaXNBcnJheSh2YWx1ZVRvKSkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfREVMRVRFRCxcclxuICAgICAgZnJvbTogYEFycmF5WyR7dmFsdWVGcm9tLmxlbmd0aH1dYCxcclxuICAgICAgdG86IFwiXCJcclxuICAgIH0pO1xyXG5cclxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlVG8pLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaWR4LCBhcnJheSkge1xyXG4gICAgICBkaWZmID0gZGlmZi5jb25jYXQoX0dldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCB2YWwsIHVuZGVmaW5lZCwgdmFsdWVUb1t2YWxdKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IEZyb23mmK9PYmplY3TvvIxUb+aYr+WAvOaIluaXpeacn1xyXG4gIGlmIChfaXNPYmplY3QodmFsdWVGcm9tKSAmJiAoX2lzVmFsdWUodmFsdWVUbykgfHwgX2lzRGF0ZSh2YWx1ZVRvKSkpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX1VQREFURUQsXHJcbiAgICAgIGZyb206IFwie31cIixcclxuICAgICAgdG86IGFueVRvU3RyaW5nKHZhbHVlVG8pXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcbiAgLy8gY2FzZTogRnJvbeaYr09iamVjdO+8jFRv5pivQXJyYXlcclxuICBpZiAoX2lzT2JqZWN0KHZhbHVlRnJvbSkgJiYgX2lzQXJyYXkodmFsdWVUbykpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX0RFTEVURUQsXHJcbiAgICAgIGZyb206IFwie31cIixcclxuICAgICAgdG86IGFueVRvU3RyaW5nKHZhbHVlVG8pXHJcbiAgICB9KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVUby5sZW5ndGg7IGkrKykge1xyXG4gICAgICBkaWZmID0gZGlmZi5jb25jYXQoX0dldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCBgWyR7aX1dYCwgdW5kZWZpbmVkLCB2YWx1ZVRvW2ldKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IEZyb23mmK9PYmplY3TvvIxUb+aYr09iamVjdFxyXG4gIGlmIChfaXNPYmplY3QodmFsdWVGcm9tKSAmJiBfaXNPYmplY3QodmFsdWVUbykpIHtcclxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlRnJvbSkuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpZHgsIGFycmF5KSB7XHJcbiAgICAgIGRpZmYgPSBkaWZmLmNvbmNhdChfR2V0T2JqZWN0RGlmZmVyZW5jZShfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksIHZhbCwgdmFsdWVGcm9tW3ZhbF0sIHZhbHVlVG9bdmFsXSkpO1xyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZVRvKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGlkeCwgYXJyYXkpIHtcclxuICAgICAgaWYgKHZhbHVlRnJvbVt2YWxdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgdmFsLCB1bmRlZmluZWQsIHZhbHVlVG9bdmFsXSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGlmZjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBkZWVwIGRpZmZlcmVuY2UgYmV0d2VlbiB0d28gb2JqZWN0cy4gQW4gZW1wdHkgYXJyYXkgd2lsbCBiZSByZXR1cm5lZCBmb3IgdHdvIHNhbWUgb2JqZWN0cyBjb21wYXJpbmcuXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQHBhcmFtIHsqfSBwcm9wZXJ0eU5hbWUgb2JqZWN0IG5hbWUsIGFzIHRoZSByb290IHByb3BlcnR5IG5hbWVcclxuICogQHBhcmFtIHsqfSB2YWx1ZUZyb20gdmFsdWUgY29tcGFyaW5nIG9uIHRoZSBsZWZ0XHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWVUbyB2YWx1ZSBjb21wYXJpbmcgb24gdGhlIHJpZ2h0XHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gR2V0T2JqZWN0RGlmZmVyZW5jZShvYmplY3ROYW1lLCB2YWx1ZUZyb20sIHZhbHVlVG8pIHtcclxuICByZXR1cm4gX0dldE9iamVjdERpZmZlcmVuY2UoXCJcIiwgb2JqZWN0TmFtZSwgdmFsdWVGcm9tLCB2YWx1ZVRvKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9