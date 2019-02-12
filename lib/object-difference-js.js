(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("object-difference-js", [], factory);
	else if(typeof exports === 'object')
		exports["object-difference-js"] = factory();
	else
		root["object-difference-js"] = factory();
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
  if (typeof t === 'boolean' || typeof t === 'number' || typeof t === 'string') {
    return t.toString();
  } else if (t === null) {
    return 'null';
  } else if (t === undefined) {
    return 'undefined';
  }

  if (_typeof(t) === 'symbol') {
    return 'symbol';
  } else if (t instanceof Date) {
    return t.toUTCString();
  } else if (Array.isArray(t)) {
    return t.map(function (x) {
      return anyToString(x);
    }).join(', ');
  } else if (typeof t === 'function') {
    return 'function';
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

var VALUE_CREATED = 'created',
    VALUE_UPDATED = 'updated',
    VALUE_DELETED = 'deleted',
    NOT_COMPARABLE = 'NA';

function _isBlank(t) {
  return t === '' || t === 0 || t === undefined || t === null || t === {} || Array.isArray(t) && t.length < 1;
}

function _isValue(t) {
  return !_isBlank(t) && (typeof t === 'boolean' || typeof t === 'number' || typeof t === 'string');
}

function _isDate(t) {
  return !_isBlank(t) && t instanceof Date;
}

function _isArray(t) {
  return !_isBlank(t) && Array.isArray(t);
}

function _isFunction(t) {
  return typeof t === 'function';
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
          diff = diff.concat(GetObjectDifference(_getFullPropName(parentName, propertyName), "[".concat(_i, "]"), a1[_i], a2[_i])); // eslint-disable-line no-use-before-define
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
    diff = diff.concat(GetObjectDifference(_getFullPropName(parentName, propertyName), "[".concat(_i2, "]"), onlyInA1[_i2], undefined)); // eslint-disable-line no-use-before-define
  }

  for (var _i3 = 0; _i3 < onlyInA2.length; _i3++) {
    diff = diff.concat(GetObjectDifference(_getFullPropName(parentName, propertyName), "[".concat(_i3, "]"), undefined, onlyInA2[_i3])); // eslint-disable-line no-use-before-define
  }

  return diff;
}
/**
 * Get deep object difference
 *
 * @export
 * @param {*} parentName
 * @param {*} propertyName
 * @param {*} valueFrom
 * @param {*} valueTo
 * @returns
 */


function GetObjectDifference(parentName, propertyName, valueFrom, valueTo) {
  var diff = [];

  if (propertyName === '__ob__' || propertyName === '__proto__') {
    return diff;
  } // case: 两个都是基础类型


  if (_isValue(valueFrom) && _isValue(valueTo)) {
    if (valueFrom === valueTo) {
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
      from: '',
      to: (0, _anyToString.default)(valueTo)
    });
    return diff;
  }

  if (_isBlank(valueFrom) && _isDate(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_CREATED,
      from: '',
      to: (0, _anyToString.default)(valueTo)
    });
    return diff;
  }

  if (_isBlank(valueFrom) && _isArray(valueTo)) {
    for (var i = 0; i < valueTo.length; i++) {
      diff = diff.concat(GetObjectDifference(_getFullPropName(parentName, propertyName), "[".concat(i, "]"), undefined, valueTo[i]));
    }

    return diff;
  }

  if (_isBlank(valueFrom) && _isObject(valueTo)) {
    Object.getOwnPropertyNames(valueTo).forEach(function (val, idx, array) {
      diff = diff.concat(GetObjectDifference(_getFullPropName(parentName, propertyName), val, undefined, valueTo[val]));
    });
    return diff;
  } // case: From不是blank, To是


  if ((_isValue(valueFrom) || _isDate(valueFrom) || _isArray(valueFrom) || _isObject(valueFrom)) && _isBlank(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_DELETED,
      from: '',
      to: ''
    });
    return diff;
  } // case: From是值或日期，To是Array


  if ((_isValue(valueFrom) || _isDate(valueFrom)) && _isArray(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_DELETED,
      from: '',
      to: ''
    });

    for (var _i4 = 0; _i4 < valueTo.length; _i4++) {
      diff = diff.concat(GetObjectDifference(_getFullPropName(parentName, propertyName), "[".concat(_i4, "]"), undefined, valueTo[_i4]));
    }

    return diff;
  } // case: From是值或日期，To是Object


  if ((_isValue(valueFrom) || _isDate(valueFrom)) && _isObject(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_DELETED,
      from: '',
      to: ''
    });
    Object.getOwnPropertyNames(valueTo).forEach(function (val, idx, array) {
      diff = diff.concat(GetObjectDifference(_getFullPropName(parentName, propertyName), val, undefined, valueTo[val]));
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
      to: ''
    });
    Object.getOwnPropertyNames(valueTo).forEach(function (val, idx, array) {
      diff = diff.concat(GetObjectDifference(_getFullPropName(parentName, propertyName), val, undefined, valueTo[val]));
    });
    return diff;
  } // case: From是Object，To是值或日期


  if (_isObject(valueFrom) && (_isValue(valueTo) || _isDate(valueTo))) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_UPDATED,
      from: '{}',
      to: (0, _anyToString.default)(valueTo)
    });
    return diff;
  } // case: From是Object，To是Array


  if (_isObject(valueFrom) && _isArray(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_DELETED,
      from: '{}',
      to: (0, _anyToString.default)(valueTo)
    });

    for (var _i5 = 0; _i5 < valueTo.length; _i5++) {
      diff = diff.concat(GetObjectDifference(_getFullPropName(parentName, propertyName), "[".concat(_i5, "]"), undefined, valueTo[_i5]));
    }

    return diff;
  } // case: From是Object，To是Object


  if (_isObject(valueFrom) && _isObject(valueTo)) {
    Object.getOwnPropertyNames(valueFrom).forEach(function (val, idx, array) {
      diff = diff.concat(GetObjectDifference(_getFullPropName(parentName, propertyName), val, valueFrom[val], valueTo[val]));
    });
    Object.getOwnPropertyNames(valueTo).forEach(function (val, idx, array) {
      if (valueFrom[val] !== undefined) {
        return;
      }

      diff = diff.concat(GetObjectDifference(_getFullPropName(parentName, propertyName), val, undefined, valueTo[val]));
    });
  }

  return diff;
}

;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vYmplY3QtZGlmZmVyZW5jZS1qcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vb2JqZWN0LWRpZmZlcmVuY2UtanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2JqZWN0LWRpZmZlcmVuY2UtanMvLi9zcmMvYW55VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vb2JqZWN0LWRpZmZlcmVuY2UtanMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2JqZWN0LWRpZmZlcmVuY2UtanMvLi9zcmMvb2JqZWN0RGlmZmVyZW5jZS5qcyJdLCJuYW1lcyI6WyJhbnlUb1N0cmluZyIsInQiLCJ0b1N0cmluZyIsInVuZGVmaW5lZCIsIkRhdGUiLCJ0b1VUQ1N0cmluZyIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsIngiLCJqb2luIiwiSlNPTiIsInN0cmluZ2lmeSIsIk9iamVjdERpZmZlcmVuY2UiLCJWQUxVRV9DUkVBVEVEIiwiVkFMVUVfVVBEQVRFRCIsIlZBTFVFX0RFTEVURUQiLCJOT1RfQ09NUEFSQUJMRSIsIl9pc0JsYW5rIiwibGVuZ3RoIiwiX2lzVmFsdWUiLCJfaXNEYXRlIiwiX2lzQXJyYXkiLCJfaXNGdW5jdGlvbiIsIl9pc09iamVjdCIsIl9nZXRGdWxsUHJvcE5hbWUiLCJwYXJlbnROYW1lIiwicHJvcGVydHlOYW1lIiwiX2dldEFycmF5RGlmZmVuY2UiLCJhMSIsImEyIiwiZGlmZiIsImkiLCJjb25jYXQiLCJHZXRPYmplY3REaWZmZXJlbmNlIiwicHVzaCIsInByb3BlcnR5IiwidHlwZSIsImZyb20iLCJ0byIsImNvbXBhcmVyIiwib3RoZXJBcnJheSIsImN1cnJlbnQiLCJmaWx0ZXIiLCJvdGhlciIsIm9ubHlJbkExIiwib25seUluQTIiLCJ2YWx1ZUZyb20iLCJ2YWx1ZVRvIiwiZ2V0VGltZSIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JFYWNoIiwidmFsIiwi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QkosU0FBM0IsRUFBc0NLLE9BQXRDLENBQThDLFVBQVVDLEdBQVYsRUFBZUMsR0FBZixFQUFvQkMsS0FBcEIsRUFBMkI7QUFDdkV4QixVQUFJLEdBQUdBLElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxtQkFBbUIsQ0FBQ1QsZ0JBQWdCLENBQUNDLFVBQUQsRUFBYUMsWUFBYixDQUFqQixFQUE2QzBCLEdBQTdDLEVBQWtETixTQUFTLENBQUNNLEdBQUQsQ0FBM0QsRUFBa0VMLE9BQU8sQ0FBQ0ssR0FBRCxDQUF6RSxDQUEvQixDQUFQO0FBQ0QsS0FGRDtBQUdBSCxVQUFNLENBQUNDLG1CQUFQLENBQTJCSCxPQUEzQixFQUFvQ0ksT0FBcEMsQ0FBNEMsVUFBVUMsR0FBVixFQUFlQyxHQUFmLEVBQW9CQyxLQUFwQixFQUEyQjtBQUNyRSxVQUFJUixTQUFTLENBQUNNLEdBQUQsQ0FBVCxLQUFtQmxELFNBQXZCLEVBQWtDO0FBQ2hDO0FBQ0Q7O0FBQ0Q0QixVQUFJLEdBQUdBLElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxtQkFBbUIsQ0FBQ1QsZ0JBQWdCLENBQUNDLFVBQUQsRUFBYUMsWUFBYixDQUFqQixFQUE2QzBCLEdBQTdDLEVBQWtEbEQsU0FBbEQsRUFBNkQ2QyxPQUFPLENBQUNLLEdBQUQsQ0FBcEUsQ0FBL0IsQ0FBUDtBQUVELEtBTkQ7QUFPRDs7QUFFRCxTQUFPdEIsSUFBUDtBQUNEOztBQUFBLEMiLCJmaWxlIjoib2JqZWN0LWRpZmZlcmVuY2UtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm9iamVjdC1kaWZmZXJlbmNlLWpzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm9iamVjdC1kaWZmZXJlbmNlLWpzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm9iamVjdC1kaWZmZXJlbmNlLWpzXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYW55VG9TdHJpbmcodCkge1xyXG4gIGlmICh0eXBlb2YgdCA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiB0ID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdCA9PT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiB0LnRvU3RyaW5nKCk7XHJcbiAgfSBlbHNlIGlmICh0ID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gJ251bGwnO1xyXG4gIH0gZWxzZSBpZiAodCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgdCA9PT0gJ3N5bWJvbCcpIHtcclxuICAgIHJldHVybiAnc3ltYm9sJztcclxuICB9IGVsc2UgaWYgKHQgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICByZXR1cm4gdC50b1VUQ1N0cmluZygpO1xyXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0KSkge1xyXG4gICAgcmV0dXJuIHRcclxuICAgICAgLm1hcCh4ID0+IHtcclxuICAgICAgICByZXR1cm4gYW55VG9TdHJpbmcoeCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKCcsICcpO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIHQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJldHVybiAnZnVuY3Rpb24nO1xyXG4gIH1cclxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodCk7XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEdldE9iamVjdERpZmZlcmVuY2UgYXMgT2JqZWN0RGlmZmVyZW5jZX0gZnJvbSAnLi9vYmplY3REaWZmZXJlbmNlLmpzJztcclxuZXhwb3J0IGRlZmF1bHQgeyBPYmplY3REaWZmZXJlbmNlIH07XHJcbiIsImltcG9ydCBhbnlUb1N0cmluZyBmcm9tICcuL2FueVRvU3RyaW5nLmpzJztcclxuXHJcbmNvbnN0IFZBTFVFX0NSRUFURUQgPSAnY3JlYXRlZCcsXHJcbiAgVkFMVUVfVVBEQVRFRCA9ICd1cGRhdGVkJyxcclxuICBWQUxVRV9ERUxFVEVEID0gJ2RlbGV0ZWQnLFxyXG4gIE5PVF9DT01QQVJBQkxFID0gJ05BJztcclxuXHJcbmZ1bmN0aW9uIF9pc0JsYW5rKHQpIHtcclxuICByZXR1cm4gdCA9PT0gJycgfHwgdCA9PT0gMCB8fCB0ID09PSB1bmRlZmluZWQgfHwgdCA9PT0gbnVsbCB8fCB0ID09PSB7fSB8fCAoQXJyYXkuaXNBcnJheSh0KSAmJiB0Lmxlbmd0aCA8IDEpO1xyXG59XHJcbmZ1bmN0aW9uIF9pc1ZhbHVlKHQpIHtcclxuICByZXR1cm4gIV9pc0JsYW5rKHQpICYmICh0eXBlb2YgdCA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiB0ID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdCA9PT0gJ3N0cmluZycpO1xyXG59XHJcbmZ1bmN0aW9uIF9pc0RhdGUodCkge1xyXG4gIHJldHVybiAhX2lzQmxhbmsodCkgJiYgdCBpbnN0YW5jZW9mIERhdGU7XHJcbn1cclxuZnVuY3Rpb24gX2lzQXJyYXkodCkge1xyXG4gIHJldHVybiAhX2lzQmxhbmsodCkgJiYgQXJyYXkuaXNBcnJheSh0KTtcclxufVxyXG5mdW5jdGlvbiBfaXNGdW5jdGlvbih0KSB7XHJcbiAgcmV0dXJuIHR5cGVvZiB0ID09PSAnZnVuY3Rpb24nO1xyXG59XHJcbmZ1bmN0aW9uIF9pc09iamVjdCh0KSB7XHJcbiAgcmV0dXJuICFfaXNWYWx1ZSh0KSAmJiAhX2lzQmxhbmsodCkgJiYgIV9pc0RhdGUodCkgJiYgIV9pc0FycmF5KHQpICYmICFfaXNGdW5jdGlvbih0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpIHtcclxuICByZXR1cm4gcGFyZW50TmFtZSA/IGAke3BhcmVudE5hbWV9LiR7cHJvcGVydHlOYW1lfWAgOiBwcm9wZXJ0eU5hbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9nZXRBcnJheURpZmZlbmNlKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSwgYTEsIGEyKSB7XHJcbiAgbGV0IGRpZmYgPSBbXTtcclxuXHJcbiAgaWYgKGExLmxlbmd0aCA9PT0gYTIubGVuZ3RoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGExLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChKU09OLnN0cmluZ2lmeShhMSkgPT09IEpTT04uc3RyaW5naWZ5KGEyKSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYTEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGRpZmYgPSBkaWZmLmNvbmNhdChHZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgYFske2l9XWAsIGExW2ldLCBhMltpXSkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIGlmIChhMS5sZW5ndGggPiAzMCB8fCBhMi5sZW5ndGggPiAzMCkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfVVBEQVRFRCxcclxuICAgICAgZnJvbTogYEFycmF5WyR7YTEubGVuZ3RofV1gLFxyXG4gICAgICB0bzogYEFycmF5WyR7YTIubGVuZ3RofV1gXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY29tcGFyZXIob3RoZXJBcnJheSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjdXJyZW50KSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgb3RoZXJBcnJheS5maWx0ZXIoZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob3RoZXIpID09PSBKU09OLnN0cmluZ2lmeShjdXJyZW50KTtcclxuICAgICAgICB9KS5sZW5ndGggPT09IDBcclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBsZXQgb25seUluQTEgPSBhMS5maWx0ZXIoY29tcGFyZXIoYTIpKTtcclxuICBsZXQgb25seUluQTIgPSBhMi5maWx0ZXIoY29tcGFyZXIoYTEpKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbmx5SW5BMS5sZW5ndGg7IGkrKykge1xyXG4gICAgZGlmZiA9IGRpZmYuY29uY2F0KEdldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCBgWyR7aX1dYCwgb25seUluQTFbaV0sIHVuZGVmaW5lZCkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9ubHlJbkEyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBkaWZmID0gZGlmZi5jb25jYXQoR2V0T2JqZWN0RGlmZmVyZW5jZShfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksIGBbJHtpfV1gLCB1bmRlZmluZWQsIG9ubHlJbkEyW2ldKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcclxuICB9XHJcblxyXG4gIHJldHVybiBkaWZmO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IGRlZXAgb2JqZWN0IGRpZmZlcmVuY2VcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAcGFyYW0geyp9IHBhcmVudE5hbWVcclxuICogQHBhcmFtIHsqfSBwcm9wZXJ0eU5hbWVcclxuICogQHBhcmFtIHsqfSB2YWx1ZUZyb21cclxuICogQHBhcmFtIHsqfSB2YWx1ZVRvXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gR2V0T2JqZWN0RGlmZmVyZW5jZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUsIHZhbHVlRnJvbSwgdmFsdWVUbykge1xyXG4gIGxldCBkaWZmID0gW107XHJcblxyXG4gIGlmIChwcm9wZXJ0eU5hbWUgPT09ICdfX29iX18nIHx8IHByb3BlcnR5TmFtZSA9PT0gJ19fcHJvdG9fXycpIHtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuICAvLyBjYXNlOiDkuKTkuKrpg73mmK/ln7rnoYDnsbvlnotcclxuICBpZiAoX2lzVmFsdWUodmFsdWVGcm9tKSAmJiBfaXNWYWx1ZSh2YWx1ZVRvKSkge1xyXG4gICAgaWYgKHZhbHVlRnJvbSA9PT0gdmFsdWVUbykge1xyXG4gICAgICByZXR1cm4gZGlmZjtcclxuICAgIH1cclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX1VQREFURUQsXHJcbiAgICAgIGZyb206IHZhbHVlRnJvbSxcclxuICAgICAgdG86IHZhbHVlVG9cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTog5o6S6Zmk5pyJZnVuY3Rpb27nmoTmg4XlhrVcclxuICBpZiAoX2lzRnVuY3Rpb24odmFsdWVGcm9tKSB8fCBfaXNGdW5jdGlvbih2YWx1ZVRvKSkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogTk9UX0NPTVBBUkFCTEUsXHJcbiAgICAgIGZyb206IGFueVRvU3RyaW5nKHZhbHVlRnJvbSksXHJcbiAgICAgIHRvOiBhbnlUb1N0cmluZyh2YWx1ZVRvKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IOS4pOS4qumDveaYr+aXpeacn1xyXG4gIGlmIChfaXNEYXRlKHZhbHVlRnJvbSkgJiYgX2lzRGF0ZSh2YWx1ZVRvKSkge1xyXG4gICAgaWYgKHZhbHVlRnJvbS5nZXRUaW1lKCkgPT09IHZhbHVlVG8uZ2V0VGltZSgpKSB7XHJcbiAgICAgIHJldHVybiBkaWZmO1xyXG4gICAgfVxyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfVVBEQVRFRCxcclxuICAgICAgZnJvbTogYW55VG9TdHJpbmcodmFsdWVGcm9tKSxcclxuICAgICAgdG86IGFueVRvU3RyaW5nKHZhbHVlVG8pXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaWZmO1xyXG5cclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IOS4gOS4quaYr+aXpeacn++8jOWPpuS4gOS4quaYr+WAvFxyXG4gIGlmICgoX2lzRGF0ZSh2YWx1ZUZyb20pICYmIF9pc1ZhbHVlKHZhbHVlVG8pKSB8fCAoX2lzRGF0ZSh2YWx1ZVRvKSAmJiBfaXNWYWx1ZSh2YWx1ZUZyb20pKSkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfVVBEQVRFRCxcclxuICAgICAgZnJvbTogYW55VG9TdHJpbmcodmFsdWVGcm9tKSxcclxuICAgICAgdG86IGFueVRvU3RyaW5nKHZhbHVlVG8pXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTog5Lik5Liq6YO95pivQmxhbmtcclxuICBpZiAoX2lzQmxhbmsodmFsdWVGcm9tKSAmJiBfaXNCbGFuayh2YWx1ZVRvKSkge1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG4gIC8vIGNhc2U6IEZyb23mmK9ibGFuaywgVG/kuI3mmK9cclxuICBpZiAoX2lzQmxhbmsodmFsdWVGcm9tKSAmJiBfaXNWYWx1ZSh2YWx1ZVRvKSkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfQ1JFQVRFRCxcclxuICAgICAgZnJvbTogJycsXHJcbiAgICAgIHRvOiBhbnlUb1N0cmluZyh2YWx1ZVRvKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcbiAgaWYgKF9pc0JsYW5rKHZhbHVlRnJvbSkgJiYgX2lzRGF0ZSh2YWx1ZVRvKSkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfQ1JFQVRFRCxcclxuICAgICAgZnJvbTogJycsXHJcbiAgICAgIHRvOiBhbnlUb1N0cmluZyh2YWx1ZVRvKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcbiAgaWYgKF9pc0JsYW5rKHZhbHVlRnJvbSkgJiYgX2lzQXJyYXkodmFsdWVUbykpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVUby5sZW5ndGg7IGkrKykge1xyXG4gICAgICBkaWZmID0gZGlmZi5jb25jYXQoR2V0T2JqZWN0RGlmZmVyZW5jZShfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksIGBbJHtpfV1gLCB1bmRlZmluZWQsIHZhbHVlVG9baV0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuICBpZiAoX2lzQmxhbmsodmFsdWVGcm9tKSAmJiBfaXNPYmplY3QodmFsdWVUbykpIHtcclxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlVG8pLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaWR4LCBhcnJheSkge1xyXG4gICAgICBkaWZmID0gZGlmZi5jb25jYXQoR2V0T2JqZWN0RGlmZmVyZW5jZShfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksIHZhbCwgdW5kZWZpbmVkLCB2YWx1ZVRvW3ZhbF0pKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG4gIC8vIGNhc2U6IEZyb23kuI3mmK9ibGFuaywgVG/mmK9cclxuICBpZiAoKF9pc1ZhbHVlKHZhbHVlRnJvbSkgfHwgX2lzRGF0ZSh2YWx1ZUZyb20pIHx8IF9pc0FycmF5KHZhbHVlRnJvbSkgfHwgX2lzT2JqZWN0KHZhbHVlRnJvbSkpICYmIF9pc0JsYW5rKHZhbHVlVG8pKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9ERUxFVEVELFxyXG4gICAgICBmcm9tOiAnJyxcclxuICAgICAgdG86ICcnXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTogRnJvbeaYr+WAvOaIluaXpeacn++8jFRv5pivQXJyYXlcclxuICBpZiAoKF9pc1ZhbHVlKHZhbHVlRnJvbSkgfHwgX2lzRGF0ZSh2YWx1ZUZyb20pKSAmJiBfaXNBcnJheSh2YWx1ZVRvKSkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfREVMRVRFRCxcclxuICAgICAgZnJvbTogJycsXHJcbiAgICAgIHRvOiAnJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZVRvLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGRpZmYgPSBkaWZmLmNvbmNhdChHZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgYFske2l9XWAsIHVuZGVmaW5lZCwgdmFsdWVUb1tpXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTogRnJvbeaYr+WAvOaIluaXpeacn++8jFRv5pivT2JqZWN0XHJcbiAgaWYgKChfaXNWYWx1ZSh2YWx1ZUZyb20pIHx8IF9pc0RhdGUodmFsdWVGcm9tKSkgJiYgX2lzT2JqZWN0KHZhbHVlVG8pKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9ERUxFVEVELFxyXG4gICAgICBmcm9tOiAnJyxcclxuICAgICAgdG86ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZVRvKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGlkeCwgYXJyYXkpIHtcclxuICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KEdldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCB2YWwsIHVuZGVmaW5lZCwgdmFsdWVUb1t2YWxdKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IEZyb23mmK9BcnJhee+8jFRv5piv5YC85oiW5pel5pyfXHJcbiAgaWYgKF9pc0FycmF5KHZhbHVlRnJvbSkgJiYgKF9pc1ZhbHVlKHZhbHVlVG8pIHx8IF9pc0RhdGUodmFsdWVUbykpKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9VUERBVEVELFxyXG4gICAgICBmcm9tOiBgQXJyYXlbJHt2YWx1ZUZyb20ubGVuZ3RofV1gLFxyXG4gICAgICB0bzogYW55VG9TdHJpbmcodmFsdWVUbylcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiBGcm9t5pivQXJyYXnvvIxUb+aYr0FycmF5XHJcbiAgaWYgKF9pc0FycmF5KHZhbHVlRnJvbSkgJiYgX2lzQXJyYXkodmFsdWVUbykpIHtcclxuICAgIGRpZmYgPSBkaWZmLmNvbmNhdChfZ2V0QXJyYXlEaWZmZW5jZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUsIHZhbHVlRnJvbSwgdmFsdWVUbykpO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiBGcm9t5pivQXJyYXnvvIxUb+aYr09iamVjdFxyXG4gIGlmIChfaXNBcnJheSh2YWx1ZUZyb20pICYmIF9pc0FycmF5KHZhbHVlVG8pKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9ERUxFVEVELFxyXG4gICAgICBmcm9tOiBgQXJyYXlbJHt2YWx1ZUZyb20ubGVuZ3RofV1gLFxyXG4gICAgICB0bzogJydcclxuICAgIH0pO1xyXG5cclxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlVG8pLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaWR4LCBhcnJheSkge1xyXG4gICAgICBkaWZmID0gZGlmZi5jb25jYXQoR2V0T2JqZWN0RGlmZmVyZW5jZShfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksIHZhbCwgdW5kZWZpbmVkLCB2YWx1ZVRvW3ZhbF0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTogRnJvbeaYr09iamVjdO+8jFRv5piv5YC85oiW5pel5pyfXHJcbiAgaWYgKF9pc09iamVjdCh2YWx1ZUZyb20pICYmIChfaXNWYWx1ZSh2YWx1ZVRvKSB8fCBfaXNEYXRlKHZhbHVlVG8pKSkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfVVBEQVRFRCxcclxuICAgICAgZnJvbTogJ3t9JyxcclxuICAgICAgdG86IGFueVRvU3RyaW5nKHZhbHVlVG8pXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcbiAgLy8gY2FzZTogRnJvbeaYr09iamVjdO+8jFRv5pivQXJyYXlcclxuICBpZiAoX2lzT2JqZWN0KHZhbHVlRnJvbSkgJiYgX2lzQXJyYXkodmFsdWVUbykpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX0RFTEVURUQsXHJcbiAgICAgIGZyb206ICd7fScsXHJcbiAgICAgIHRvOiBhbnlUb1N0cmluZyh2YWx1ZVRvKVxyXG4gICAgfSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlVG8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KEdldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCBgWyR7aX1dYCwgdW5kZWZpbmVkLCB2YWx1ZVRvW2ldKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IEZyb23mmK9PYmplY3TvvIxUb+aYr09iamVjdFxyXG4gIGlmIChfaXNPYmplY3QodmFsdWVGcm9tKSAmJiBfaXNPYmplY3QodmFsdWVUbykpIHtcclxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlRnJvbSkuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpZHgsIGFycmF5KSB7XHJcbiAgICAgIGRpZmYgPSBkaWZmLmNvbmNhdChHZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgdmFsLCB2YWx1ZUZyb21bdmFsXSwgdmFsdWVUb1t2YWxdKSk7XHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlVG8pLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaWR4LCBhcnJheSkge1xyXG4gICAgICBpZiAodmFsdWVGcm9tW3ZhbF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBkaWZmID0gZGlmZi5jb25jYXQoR2V0T2JqZWN0RGlmZmVyZW5jZShfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksIHZhbCwgdW5kZWZpbmVkLCB2YWx1ZVRvW3ZhbF0pKTtcclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkaWZmO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9