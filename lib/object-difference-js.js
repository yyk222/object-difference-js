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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9PYmpEaWZmL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9PYmpEaWZmL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL09iakRpZmYvLi9zcmMvYW55VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vT2JqRGlmZi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9PYmpEaWZmLy4vc3JjL29iamVjdERpZmZlcmVuY2UuanMiXSwibmFtZXMiOlsiYW55VG9TdHJpbmciLCJ0IiwidG9TdHJpbmciLCJ1bmRlZmluZWQiLCJEYXRlIiwidG9VVENTdHJpbmciLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJ4Iiwiam9pbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJPYmplY3REaWZmZXJlbmNlIiwiVkFMVUVfQ1JFQVRFRCIsIlZBTFVFX1VQREFURUQiLCJWQUxVRV9ERUxFVEVEIiwiTk9UX0NPTVBBUkFCTEUiLCJfaXNCbGFuayIsImxlbmd0aCIsIl9pc1ZhbHVlIiwiX2lzRGF0ZSIsIl9pc0FycmF5IiwiX2lzRnVuY3Rpb24iLCJfaXNTeW1ib2wiLCJfaXNPYmplY3QiLCJfZ2V0RnVsbFByb3BOYW1lIiwicGFyZW50TmFtZSIsInByb3BlcnR5TmFtZSIsIl9nZXRBcnJheURpZmZlbmNlIiwiYTEiLCJhMiIsImRpZmYiLCJpIiwiY29uY2F0IiwiX0dldE9iamVjdERpZmZlcmVuY2UiLCJwdXNoIiwicHJvcGVydHkiLCJ0eXBlIiwiZnJvbSIsInRvIiwiY29tcGFyZXIiLCJvdGhlckFycmF5IiwiY3VycmVudCIsImZpbHRlciIsIm90aGVyIiwib25seUluQTEiLCJvbmx5SW5BMiIsInZhbHVlRnJvbSIsInZhbHVlVG8iLCJnZXRUaW1lIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvckVhY2giLCJ2YWwiLCJpZHgiLCJhcnJheSIsIkdldE9iamVjdERpZmZlcmVuY2UiLCJvYmplY3ROYW1lIl0sIm1h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QkFBb0IsQ0FBQ1QsZ0JBQWdCLENBQUNDLFVBQUQsRUFBYUMsWUFBYixDQUFqQixFQUE2QzBCLEdBQTdDLEVBQWtETixTQUFTLENBQUNNLEdBQUQsQ0FBM0QsRUFBa0VMLE9BQU8sQ0FBQ0ssR0FBRCxDQUF6RSxDQUFoQyxDQUFQO0FBQ0QsS0FGRDtBQUdBSCxVQUFNLENBQUNDLG1CQUFQLENBQTJCSCxPQUEzQixFQUFvQ0ksT0FBcEMsQ0FBNEMsVUFBVUMsR0FBVixFQUFlQyxHQUFmLEVBQW9CQyxLQUFwQixFQUEyQjtBQUNyRSxVQUFJUixTQUFTLENBQUNNLEdBQUQsQ0FBVCxLQUFtQm5ELFNBQXZCLEVBQWtDO0FBQ2hDO0FBQ0Q7O0FBQ0Q2QixVQUFJLEdBQUdBLElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxvQkFBb0IsQ0FBQ1QsZ0JBQWdCLENBQUNDLFVBQUQsRUFBYUMsWUFBYixDQUFqQixFQUE2QzBCLEdBQTdDLEVBQWtEbkQsU0FBbEQsRUFBNkQ4QyxPQUFPLENBQUNLLEdBQUQsQ0FBcEUsQ0FBaEMsQ0FBUDtBQUNELEtBTEQ7QUFNRDs7QUFFRCxTQUFPdEIsSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU08sU0FBU3lCLG1CQUFULENBQTZCQyxVQUE3QixFQUF5Q1YsU0FBekMsRUFBb0RDLE9BQXBELEVBQTZEO0FBQ2xFLFNBQU9kLG9CQUFvQixDQUFDLEVBQUQsRUFBS3VCLFVBQUwsRUFBaUJWLFNBQWpCLEVBQTRCQyxPQUE1QixDQUEzQjtBQUNELEMiLCJmaWxlIjoib2JqZWN0LWRpZmZlcmVuY2UtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIk9iakRpZmZcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiT2JqRGlmZlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJPYmpEaWZmXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW55VG9TdHJpbmcodCkge1xyXG4gIGlmICh0eXBlb2YgdCA9PT0gXCJib29sZWFuXCIgfHwgdHlwZW9mIHQgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgIHJldHVybiB0LnRvU3RyaW5nKCk7XHJcbiAgfSBlbHNlIGlmICh0ID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gXCJudWxsXCI7XHJcbiAgfSBlbHNlIGlmICh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBcInVuZGVmaW5lZFwiO1xyXG4gIH1cclxuICBpZiAodHlwZW9mIHQgPT09IFwic3ltYm9sXCIpIHtcclxuICAgIHJldHVybiBcInN5bWJvbFwiO1xyXG4gIH0gZWxzZSBpZiAodCBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgIHJldHVybiB0LnRvVVRDU3RyaW5nKCk7XHJcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHQpKSB7XHJcbiAgICByZXR1cm4gdFxyXG4gICAgICAubWFwKHggPT4ge1xyXG4gICAgICAgIHJldHVybiBhbnlUb1N0cmluZyh4KTtcclxuICAgICAgfSlcclxuICAgICAgLmpvaW4oXCIsIFwiKTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiB0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHJldHVybiBcImZ1bmN0aW9uXCI7XHJcbiAgfVxyXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh0KTtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgR2V0T2JqZWN0RGlmZmVyZW5jZSBhcyBPYmplY3REaWZmZXJlbmNlfSBmcm9tIFwiLi9vYmplY3REaWZmZXJlbmNlLmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHsgT2JqZWN0RGlmZmVyZW5jZSB9O1xyXG4iLCJpbXBvcnQgYW55VG9TdHJpbmcgZnJvbSBcIi4vYW55VG9TdHJpbmcuanNcIjtcclxuXHJcbmNvbnN0IFZBTFVFX0NSRUFURUQgPSBcImNyZWF0ZWRcIixcclxuICBWQUxVRV9VUERBVEVEID0gXCJ1cGRhdGVkXCIsXHJcbiAgVkFMVUVfREVMRVRFRCA9IFwiZGVsZXRlZFwiLFxyXG4gIE5PVF9DT01QQVJBQkxFID0gXCJOQVwiO1xyXG5cclxuZnVuY3Rpb24gX2lzQmxhbmsodCkge1xyXG4gIHJldHVybiB0ID09PSBcIlwiIHx8IHQgPT09IDAgfHwgdCA9PT0gdW5kZWZpbmVkIHx8IHQgPT09IG51bGwgfHwgdCA9PT0ge30gfHwgKEFycmF5LmlzQXJyYXkodCkgJiYgdC5sZW5ndGggPCAxKTtcclxufVxyXG5mdW5jdGlvbiBfaXNWYWx1ZSh0KSB7XHJcbiAgcmV0dXJuICFfaXNCbGFuayh0KSAmJiAodHlwZW9mIHQgPT09IFwiYm9vbGVhblwiIHx8IHR5cGVvZiB0ID09PSBcIm51bWJlclwiIHx8IHR5cGVvZiB0ID09PSBcInN0cmluZ1wiKTtcclxufVxyXG5mdW5jdGlvbiBfaXNEYXRlKHQpIHtcclxuICByZXR1cm4gIV9pc0JsYW5rKHQpICYmIHQgaW5zdGFuY2VvZiBEYXRlO1xyXG59XHJcbmZ1bmN0aW9uIF9pc0FycmF5KHQpIHtcclxuICByZXR1cm4gIV9pc0JsYW5rKHQpICYmIEFycmF5LmlzQXJyYXkodCk7XHJcbn1cclxuZnVuY3Rpb24gX2lzRnVuY3Rpb24odCkge1xyXG4gIHJldHVybiB0eXBlb2YgdCA9PT0gXCJmdW5jdGlvblwiO1xyXG59XHJcbmZ1bmN0aW9uIF9pc1N5bWJvbCh0KSB7XHJcbiAgcmV0dXJuIHR5cGVvZiB0ID09PSBcInN5bWJvbFwiO1xyXG59XHJcbmZ1bmN0aW9uIF9pc09iamVjdCh0KSB7XHJcbiAgcmV0dXJuICFfaXNWYWx1ZSh0KSAmJiAhX2lzQmxhbmsodCkgJiYgIV9pc0RhdGUodCkgJiYgIV9pc0FycmF5KHQpICYmICFfaXNGdW5jdGlvbih0KSAmJiAhX2lzU3ltYm9sKHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSkge1xyXG4gIHJldHVybiBwYXJlbnROYW1lID8gYCR7cGFyZW50TmFtZX0uJHtwcm9wZXJ0eU5hbWV9YCA6IHByb3BlcnR5TmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2dldEFycmF5RGlmZmVuY2UocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lLCBhMSwgYTIpIHtcclxuICBsZXQgZGlmZiA9IFtdO1xyXG5cclxuICBpZiAoYTEubGVuZ3RoID09PSBhMi5sZW5ndGgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYTEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGExKSA9PT0gSlNPTi5zdHJpbmdpZnkoYTIpKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhMS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgYFske2l9XWAsIGExW2ldLCBhMltpXSkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIGlmIChhMS5sZW5ndGggPiAzMCB8fCBhMi5sZW5ndGggPiAzMCkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfVVBEQVRFRCxcclxuICAgICAgZnJvbTogYEFycmF5WyR7YTEubGVuZ3RofV1gLFxyXG4gICAgICB0bzogYEFycmF5WyR7YTIubGVuZ3RofV1gXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY29tcGFyZXIob3RoZXJBcnJheSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjdXJyZW50KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgb3RoZXJBcnJheS5maWx0ZXIoZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob3RoZXIpID09PSBKU09OLnN0cmluZ2lmeShjdXJyZW50KTtcclxuICAgICAgICB9KS5sZW5ndGggPT09IDBcclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBsZXQgb25seUluQTEgPSBhMS5maWx0ZXIoY29tcGFyZXIoYTIpKTtcclxuXHJcbiAgbGV0IG9ubHlJbkEyID0gYTIuZmlsdGVyKGNvbXBhcmVyKGExKSk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb25seUluQTEubGVuZ3RoOyBpKyspIHtcclxuICAgIGRpZmYgPSBkaWZmLmNvbmNhdChfR2V0T2JqZWN0RGlmZmVyZW5jZShfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksIGBbJHtpfV1gLCBvbmx5SW5BMVtpXSwgdW5kZWZpbmVkKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcclxuICB9XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb25seUluQTIubGVuZ3RoOyBpKyspIHtcclxuICAgIGRpZmYgPSBkaWZmLmNvbmNhdChfR2V0T2JqZWN0RGlmZmVyZW5jZShfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksIGBbJHtpfV1gLCB1bmRlZmluZWQsIG9ubHlJbkEyW2ldKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcclxuICB9XHJcblxyXG4gIHJldHVybiBkaWZmO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfR2V0T2JqZWN0RGlmZmVyZW5jZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUsIHZhbHVlRnJvbSwgdmFsdWVUbykge1xyXG4gIGxldCBkaWZmID0gW107XHJcblxyXG4gIGlmIChwcm9wZXJ0eU5hbWUgPT09IFwiX19vYl9fXCIgfHwgcHJvcGVydHlOYW1lID09PSBcIl9fcHJvdG9fX1wiKSB7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcbiAgLy8gY2FzZTog5Lik5Liq6YO95piv5Z+656GA57G75Z6LXHJcbiAgaWYgKF9pc1ZhbHVlKHZhbHVlRnJvbSkgJiYgX2lzVmFsdWUodmFsdWVUbykpIHtcclxuICAgIGlmICh2YWx1ZUZyb20gPT0gdmFsdWVUbykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICAgIHJldHVybiBkaWZmO1xyXG4gICAgfVxyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfVVBEQVRFRCxcclxuICAgICAgZnJvbTogdmFsdWVGcm9tLFxyXG4gICAgICB0bzogdmFsdWVUb1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IOaOkumZpOaciWZ1bmN0aW9u55qE5oOF5Ya1XHJcbiAgaWYgKF9pc0Z1bmN0aW9uKHZhbHVlRnJvbSkgfHwgX2lzRnVuY3Rpb24odmFsdWVUbykpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IE5PVF9DT01QQVJBQkxFLFxyXG4gICAgICBmcm9tOiBhbnlUb1N0cmluZyh2YWx1ZUZyb20pLFxyXG4gICAgICB0bzogYW55VG9TdHJpbmcodmFsdWVUbylcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiDlhbbkuK3kuIDkuKrmmK9zeW1ib2xcclxuICBpZiAoX2lzU3ltYm9sKHZhbHVlRnJvbSkgfHwgX2lzU3ltYm9sKHZhbHVlVG8pKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9VUERBVEVELFxyXG4gICAgICBmcm9tOiBhbnlUb1N0cmluZyh2YWx1ZUZyb20pLFxyXG4gICAgICB0bzogYW55VG9TdHJpbmcodmFsdWVUbylcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiDkuKTkuKrpg73mmK/ml6XmnJ9cclxuICBpZiAoX2lzRGF0ZSh2YWx1ZUZyb20pICYmIF9pc0RhdGUodmFsdWVUbykpIHtcclxuICAgIGlmICh2YWx1ZUZyb20uZ2V0VGltZSgpID09PSB2YWx1ZVRvLmdldFRpbWUoKSkge1xyXG4gICAgICByZXR1cm4gZGlmZjtcclxuICAgIH1cclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX1VQREFURUQsXHJcbiAgICAgIGZyb206IGFueVRvU3RyaW5nKHZhbHVlRnJvbSksXHJcbiAgICAgIHRvOiBhbnlUb1N0cmluZyh2YWx1ZVRvKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IOS4gOS4quaYr+aXpeacn++8jOWPpuS4gOS4quaYr+WAvFxyXG4gIGlmIChfaXNEYXRlKHZhbHVlVG8pICYmIF9pc1ZhbHVlKHZhbHVlRnJvbSkpIHtcclxuICAgIGlmIChuZXcgRGF0ZSh2YWx1ZUZyb20pLmdldFRpbWUoKSA9PT0gdmFsdWVUby5nZXRUaW1lKCkpIHtcclxuICAgICAgcmV0dXJuIGRpZmY7XHJcbiAgICB9XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9VUERBVEVELFxyXG4gICAgICBmcm9tOiBhbnlUb1N0cmluZyh2YWx1ZUZyb20pLFxyXG4gICAgICB0bzogYW55VG9TdHJpbmcodmFsdWVUbylcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG4gIGlmIChfaXNEYXRlKHZhbHVlRnJvbSkgJiYgX2lzVmFsdWUodmFsdWVUbykpIHtcclxuICAgIGlmIChuZXcgRGF0ZSh2YWx1ZVRvKS5nZXRUaW1lKCkgPT09IHZhbHVlRnJvbS5nZXRUaW1lKCkpIHtcclxuICAgICAgcmV0dXJuIGRpZmY7XHJcbiAgICB9XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9VUERBVEVELFxyXG4gICAgICBmcm9tOiBhbnlUb1N0cmluZyh2YWx1ZUZyb20pLFxyXG4gICAgICB0bzogYW55VG9TdHJpbmcodmFsdWVUbylcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiDkuKTkuKrpg73mmK9CbGFua1xyXG4gIGlmIChfaXNCbGFuayh2YWx1ZUZyb20pICYmIF9pc0JsYW5rKHZhbHVlVG8pKSB7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcbiAgLy8gY2FzZTogRnJvbeaYr2JsYW5rLCBUb+S4jeaYr1xyXG4gIGlmIChfaXNCbGFuayh2YWx1ZUZyb20pICYmIF9pc1ZhbHVlKHZhbHVlVG8pKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9DUkVBVEVELFxyXG4gICAgICBmcm9tOiBcIlwiLFxyXG4gICAgICB0bzogYW55VG9TdHJpbmcodmFsdWVUbylcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG4gIGlmIChfaXNCbGFuayh2YWx1ZUZyb20pICYmIF9pc0RhdGUodmFsdWVUbykpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX0NSRUFURUQsXHJcbiAgICAgIGZyb206IFwiXCIsXHJcbiAgICAgIHRvOiBhbnlUb1N0cmluZyh2YWx1ZVRvKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcbiAgaWYgKF9pc0JsYW5rKHZhbHVlRnJvbSkgJiYgX2lzQXJyYXkodmFsdWVUbykpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVUby5sZW5ndGg7IGkrKykge1xyXG4gICAgICBkaWZmID0gZGlmZi5jb25jYXQoX0dldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCBgWyR7aX1dYCwgdW5kZWZpbmVkLCB2YWx1ZVRvW2ldKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcbiAgaWYgKF9pc0JsYW5rKHZhbHVlRnJvbSkgJiYgX2lzT2JqZWN0KHZhbHVlVG8pKSB7XHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZVRvKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGlkeCwgYXJyYXkpIHtcclxuICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgdmFsLCB1bmRlZmluZWQsIHZhbHVlVG9bdmFsXSkpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcbiAgLy8gY2FzZTogRnJvbeS4jeaYr2JsYW5rLCBUb+aYr1xyXG4gIGlmICgoX2lzVmFsdWUodmFsdWVGcm9tKSB8fCBfaXNEYXRlKHZhbHVlRnJvbSkgfHwgX2lzQXJyYXkodmFsdWVGcm9tKSB8fCBfaXNPYmplY3QodmFsdWVGcm9tKSkgJiYgX2lzQmxhbmsodmFsdWVUbykpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX0RFTEVURUQsXHJcbiAgICAgIGZyb206IFwiXCIsXHJcbiAgICAgIHRvOiBcIlwiXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTogRnJvbeaYr+WAvOaIluaXpeacn++8jFRv5pivQXJyYXlcclxuICBpZiAoKF9pc1ZhbHVlKHZhbHVlRnJvbSkgfHwgX2lzRGF0ZSh2YWx1ZUZyb20pKSAmJiBfaXNBcnJheSh2YWx1ZVRvKSkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfREVMRVRFRCxcclxuICAgICAgZnJvbTogXCJcIixcclxuICAgICAgdG86IFwiXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVUby5sZW5ndGg7IGkrKykge1xyXG4gICAgICBkaWZmID0gZGlmZi5jb25jYXQoX0dldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCBgWyR7aX1dYCwgdW5kZWZpbmVkLCB2YWx1ZVRvW2ldKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiBGcm9t5piv5YC85oiW5pel5pyf77yMVG/mmK9PYmplY3RcclxuICBpZiAoKF9pc1ZhbHVlKHZhbHVlRnJvbSkgfHwgX2lzRGF0ZSh2YWx1ZUZyb20pKSAmJiBfaXNPYmplY3QodmFsdWVUbykpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX0RFTEVURUQsXHJcbiAgICAgIGZyb206IFwiXCIsXHJcbiAgICAgIHRvOiBcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZVRvKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGlkeCwgYXJyYXkpIHtcclxuICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgdmFsLCB1bmRlZmluZWQsIHZhbHVlVG9bdmFsXSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiBGcm9t5pivQXJyYXnvvIxUb+aYr+WAvOaIluaXpeacn1xyXG4gIGlmIChfaXNBcnJheSh2YWx1ZUZyb20pICYmIChfaXNWYWx1ZSh2YWx1ZVRvKSB8fCBfaXNEYXRlKHZhbHVlVG8pKSkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfVVBEQVRFRCxcclxuICAgICAgZnJvbTogYEFycmF5WyR7dmFsdWVGcm9tLmxlbmd0aH1dYCxcclxuICAgICAgdG86IGFueVRvU3RyaW5nKHZhbHVlVG8pXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTogRnJvbeaYr0FycmF577yMVG/mmK9BcnJheVxyXG4gIGlmIChfaXNBcnJheSh2YWx1ZUZyb20pICYmIF9pc0FycmF5KHZhbHVlVG8pKSB7XHJcbiAgICBkaWZmID0gZGlmZi5jb25jYXQoX2dldEFycmF5RGlmZmVuY2UocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lLCB2YWx1ZUZyb20sIHZhbHVlVG8pKTtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTogRnJvbeaYr0FycmF577yMVG/mmK9PYmplY3RcclxuICBpZiAoX2lzQXJyYXkodmFsdWVGcm9tKSAmJiBfaXNBcnJheSh2YWx1ZVRvKSkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfREVMRVRFRCxcclxuICAgICAgZnJvbTogYEFycmF5WyR7dmFsdWVGcm9tLmxlbmd0aH1dYCxcclxuICAgICAgdG86IFwiXCJcclxuICAgIH0pO1xyXG5cclxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlVG8pLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaWR4LCBhcnJheSkge1xyXG4gICAgICBkaWZmID0gZGlmZi5jb25jYXQoX0dldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCB2YWwsIHVuZGVmaW5lZCwgdmFsdWVUb1t2YWxdKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IEZyb23mmK9PYmplY3TvvIxUb+aYr+WAvOaIluaXpeacn1xyXG4gIGlmIChfaXNPYmplY3QodmFsdWVGcm9tKSAmJiAoX2lzVmFsdWUodmFsdWVUbykgfHwgX2lzRGF0ZSh2YWx1ZVRvKSkpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX1VQREFURUQsXHJcbiAgICAgIGZyb206IFwie31cIixcclxuICAgICAgdG86IGFueVRvU3RyaW5nKHZhbHVlVG8pXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcbiAgLy8gY2FzZTogRnJvbeaYr09iamVjdO+8jFRv5pivQXJyYXlcclxuICBpZiAoX2lzT2JqZWN0KHZhbHVlRnJvbSkgJiYgX2lzQXJyYXkodmFsdWVUbykpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX0RFTEVURUQsXHJcbiAgICAgIGZyb206IFwie31cIixcclxuICAgICAgdG86IGFueVRvU3RyaW5nKHZhbHVlVG8pXHJcbiAgICB9KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVUby5sZW5ndGg7IGkrKykge1xyXG4gICAgICBkaWZmID0gZGlmZi5jb25jYXQoX0dldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCBgWyR7aX1dYCwgdW5kZWZpbmVkLCB2YWx1ZVRvW2ldKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IEZyb23mmK9PYmplY3TvvIxUb+aYr09iamVjdFxyXG4gIGlmIChfaXNPYmplY3QodmFsdWVGcm9tKSAmJiBfaXNPYmplY3QodmFsdWVUbykpIHtcclxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlRnJvbSkuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpZHgsIGFycmF5KSB7XHJcbiAgICAgIGRpZmYgPSBkaWZmLmNvbmNhdChfR2V0T2JqZWN0RGlmZmVyZW5jZShfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksIHZhbCwgdmFsdWVGcm9tW3ZhbF0sIHZhbHVlVG9bdmFsXSkpO1xyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZVRvKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGlkeCwgYXJyYXkpIHtcclxuICAgICAgaWYgKHZhbHVlRnJvbVt2YWxdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgdmFsLCB1bmRlZmluZWQsIHZhbHVlVG9bdmFsXSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGlmZjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBkZWVwIGRpZmZlcmVuY2UgYmV0d2VlbiB0d28gb2JqZWN0cy4gQW4gZW1wdHkgYXJyYXkgd2lsbCBiZSByZXR1cm5lZCBmb3IgdHdvIHNhbWUgb2JqZWN0cyBjb21wYXJpbmcuXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQHBhcmFtIHsqfSBwcm9wZXJ0eU5hbWUgb2JqZWN0IG5hbWUsIGFzIHRoZSByb290IHByb3BlcnR5IG5hbWVcclxuICogQHBhcmFtIHsqfSB2YWx1ZUZyb20gdmFsdWUgY29tcGFyaW5nIG9uIHRoZSBsZWZ0XHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWVUbyB2YWx1ZSBjb21wYXJpbmcgb24gdGhlIHJpZ2h0XHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gR2V0T2JqZWN0RGlmZmVyZW5jZShvYmplY3ROYW1lLCB2YWx1ZUZyb20sIHZhbHVlVG8pIHtcclxuICByZXR1cm4gX0dldE9iamVjdERpZmZlcmVuY2UoXCJcIiwgb2JqZWN0TmFtZSwgdmFsdWVGcm9tLCB2YWx1ZVRvKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9