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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9PYmpEaWZmL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9PYmpEaWZmL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL09iakRpZmYvLi9zcmMvYW55VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vT2JqRGlmZi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9PYmpEaWZmLy4vc3JjL29iamVjdERpZmZlcmVuY2UuanMiXSwibmFtZXMiOlsiYW55VG9TdHJpbmciLCJ0IiwidG9TdHJpbmciLCJ1bmRlZmluZWQiLCJEYXRlIiwidG9VVENTdHJpbmciLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJ4Iiwiam9pbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJPYmplY3REaWZmZXJlbmNlIiwiVkFMVUVfQ1JFQVRFRCIsIlZBTFVFX1VQREFURUQiLCJWQUxVRV9ERUxFVEVEIiwiTk9UX0NPTVBBUkFCTEUiLCJfaXNCbGFuayIsImxlbmd0aCIsIl9pc1ZhbHVlIiwiX2lzRGF0ZSIsIl9pc0FycmF5IiwiX2lzRnVuY3Rpb24iLCJfaXNTeW1ib2wiLCJfaXNPYmplY3QiLCJfZ2V0RnVsbFByb3BOYW1lIiwicGFyZW50TmFtZSIsInByb3BlcnR5TmFtZSIsIl9nZXRBcnJheURpZmZlbmNlIiwiYTEiLCJhMiIsImRpZmYiLCJpIiwiY29uY2F0IiwiX0dldE9iamVjdERpZmZlcmVuY2UiLCJwdXNoIiwicHJvcGVydHkiLCJ0eXBlIiwiZnJvbSIsInRvIiwiY29tcGFyZXIiLCJvdGhlckFycmF5IiwiY3VycmVudCIsImZpbHRlciIsIm90aGVyIiwib25seUluQTEiLCJvbmx5SW5BMiIsInZhbHVlRnJvbSIsInZhbHVlVG8iLCJnZXRUaW1lIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvckVhY2giLCJ2YWwiLCJpZHgiLCJhcnJheSIsIkdldE9iamVjdERpZmZlcmVuY2UiLCJvYmplY3ROYW1lIl0sIm1h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QUE2RDhDLE9BQU8sQ0FBQ0ssR0FBRCxDQUFwRSxDQUFoQyxDQUFQO0FBQ0QsS0FMRDtBQU1EOztBQUVELFNBQU90QixJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7QUFTTyxTQUFTeUIsbUJBQVQsQ0FBNkJDLFVBQTdCLEVBQXlDVixTQUF6QyxFQUFvREMsT0FBcEQsRUFBNkQ7QUFDbEUsU0FBT2Qsb0JBQW9CLENBQUMsRUFBRCxFQUFLdUIsVUFBTCxFQUFpQlYsU0FBakIsRUFBNEJDLE9BQTVCLENBQTNCO0FBQ0QsQyIsImZpbGUiOiJvYmplY3QtZGlmZmVyZW5jZS1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiT2JqRGlmZlwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJPYmpEaWZmXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk9iakRpZmZcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbnlUb1N0cmluZyh0KSB7XHJcbiAgaWYgKHR5cGVvZiB0ID09PSBcImJvb2xlYW5cIiB8fCB0eXBlb2YgdCA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgdCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgcmV0dXJuIHQudG9TdHJpbmcoKTtcclxuICB9IGVsc2UgaWYgKHQgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBcIm51bGxcIjtcclxuICB9IGVsc2UgaWYgKHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIFwidW5kZWZpbmVkXCI7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgdCA9PT0gXCJzeW1ib2xcIikge1xyXG4gICAgcmV0dXJuIFwic3ltYm9sXCI7XHJcbiAgfSBlbHNlIGlmICh0IGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgcmV0dXJuIHQudG9VVENTdHJpbmcoKTtcclxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodCkpIHtcclxuICAgIHJldHVybiB0XHJcbiAgICAgIC5tYXAoeCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGFueVRvU3RyaW5nKHgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuam9pbihcIiwgXCIpO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIHQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgcmV0dXJuIFwiZnVuY3Rpb25cIjtcclxuICB9XHJcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHQpO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBHZXRPYmplY3REaWZmZXJlbmNlIGFzIE9iamVjdERpZmZlcmVuY2V9IGZyb20gXCIuL29iamVjdERpZmZlcmVuY2UuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgeyBPYmplY3REaWZmZXJlbmNlIH07XHJcbiIsImltcG9ydCBhbnlUb1N0cmluZyBmcm9tIFwiLi9hbnlUb1N0cmluZy5qc1wiO1xyXG5cclxuY29uc3QgVkFMVUVfQ1JFQVRFRCA9IFwiY3JlYXRlZFwiLFxyXG4gIFZBTFVFX1VQREFURUQgPSBcInVwZGF0ZWRcIixcclxuICBWQUxVRV9ERUxFVEVEID0gXCJkZWxldGVkXCIsXHJcbiAgTk9UX0NPTVBBUkFCTEUgPSBcIk5BXCI7XHJcblxyXG5mdW5jdGlvbiBfaXNCbGFuayh0KSB7XHJcbiAgcmV0dXJuIHQgPT09IFwiXCIgfHwgdCA9PT0gMCB8fCB0ID09PSB1bmRlZmluZWQgfHwgdCA9PT0gbnVsbCB8fCB0ID09PSB7fSB8fCAoQXJyYXkuaXNBcnJheSh0KSAmJiB0Lmxlbmd0aCA8IDEpO1xyXG59XHJcbmZ1bmN0aW9uIF9pc1ZhbHVlKHQpIHtcclxuICByZXR1cm4gIV9pc0JsYW5rKHQpICYmICh0eXBlb2YgdCA9PT0gXCJib29sZWFuXCIgfHwgdHlwZW9mIHQgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIHQgPT09IFwic3RyaW5nXCIpO1xyXG59XHJcbmZ1bmN0aW9uIF9pc0RhdGUodCkge1xyXG4gIHJldHVybiAhX2lzQmxhbmsodCkgJiYgdCBpbnN0YW5jZW9mIERhdGU7XHJcbn1cclxuZnVuY3Rpb24gX2lzQXJyYXkodCkge1xyXG4gIHJldHVybiAhX2lzQmxhbmsodCkgJiYgQXJyYXkuaXNBcnJheSh0KTtcclxufVxyXG5mdW5jdGlvbiBfaXNGdW5jdGlvbih0KSB7XHJcbiAgcmV0dXJuIHR5cGVvZiB0ID09PSBcImZ1bmN0aW9uXCI7XHJcbn1cclxuZnVuY3Rpb24gX2lzU3ltYm9sKHQpIHtcclxuICByZXR1cm4gdHlwZW9mIHQgPT09IFwic3ltYm9sXCI7XHJcbn1cclxuZnVuY3Rpb24gX2lzT2JqZWN0KHQpIHtcclxuICByZXR1cm4gIV9pc1ZhbHVlKHQpICYmICFfaXNCbGFuayh0KSAmJiAhX2lzRGF0ZSh0KSAmJiAhX2lzQXJyYXkodCkgJiYgIV9pc0Z1bmN0aW9uKHQpICYmICFfaXNTeW1ib2wodCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSB7XHJcbiAgcmV0dXJuIHBhcmVudE5hbWUgPyBgJHtwYXJlbnROYW1lfS4ke3Byb3BlcnR5TmFtZX1gIDogcHJvcGVydHlOYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZ2V0QXJyYXlEaWZmZW5jZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUsIGExLCBhMikge1xyXG4gIGxldCBkaWZmID0gW107XHJcblxyXG4gIGlmIChhMS5sZW5ndGggPT09IGEyLmxlbmd0aCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhMS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoYTEpID09PSBKU09OLnN0cmluZ2lmeShhMikpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGExLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBkaWZmID0gZGlmZi5jb25jYXQoX0dldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCBgWyR7aX1dYCwgYTFbaV0sIGEyW2ldKSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgaWYgKGExLmxlbmd0aCA+IDMwIHx8IGEyLmxlbmd0aCA+IDMwKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9VUERBVEVELFxyXG4gICAgICBmcm9tOiBgQXJyYXlbJHthMS5sZW5ndGh9XWAsXHJcbiAgICAgIHRvOiBgQXJyYXlbJHthMi5sZW5ndGh9XWBcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjb21wYXJlcihvdGhlckFycmF5KSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGN1cnJlbnQpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBvdGhlckFycmF5LmZpbHRlcihmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvdGhlcikgPT09IEpTT04uc3RyaW5naWZ5KGN1cnJlbnQpO1xyXG4gICAgICAgIH0pLmxlbmd0aCA9PT0gMFxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGxldCBvbmx5SW5BMSA9IGExLmZpbHRlcihjb21wYXJlcihhMikpO1xyXG5cclxuICBsZXQgb25seUluQTIgPSBhMi5maWx0ZXIoY29tcGFyZXIoYTEpKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbmx5SW5BMS5sZW5ndGg7IGkrKykge1xyXG4gICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgYFske2l9XWAsIG9ubHlJbkExW2ldLCB1bmRlZmluZWQpKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbmx5SW5BMi5sZW5ndGg7IGkrKykge1xyXG4gICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgYFske2l9XWAsIHVuZGVmaW5lZCwgb25seUluQTJbaV0pKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRpZmY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9HZXRPYmplY3REaWZmZXJlbmNlKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSwgdmFsdWVGcm9tLCB2YWx1ZVRvKSB7XHJcbiAgbGV0IGRpZmYgPSBbXTtcclxuXHJcbiAgaWYgKHByb3BlcnR5TmFtZSA9PT0gXCJfX29iX19cIiB8fCBwcm9wZXJ0eU5hbWUgPT09IFwiX19wcm90b19fXCIpIHtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuICAvLyBjYXNlOiDkuKTkuKrpg73mmK/ln7rnoYDnsbvlnotcclxuICBpZiAoX2lzVmFsdWUodmFsdWVGcm9tKSAmJiBfaXNWYWx1ZSh2YWx1ZVRvKSkge1xyXG4gICAgaWYgKHZhbHVlRnJvbSA9PSB2YWx1ZVRvKSB7ICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICAgIHJldHVybiBkaWZmO1xyXG4gICAgfVxyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfVVBEQVRFRCxcclxuICAgICAgZnJvbTogdmFsdWVGcm9tLFxyXG4gICAgICB0bzogdmFsdWVUb1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IOaOkumZpOaciWZ1bmN0aW9u55qE5oOF5Ya1XHJcbiAgaWYgKF9pc0Z1bmN0aW9uKHZhbHVlRnJvbSkgfHwgX2lzRnVuY3Rpb24odmFsdWVUbykpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IE5PVF9DT01QQVJBQkxFLFxyXG4gICAgICBmcm9tOiBhbnlUb1N0cmluZyh2YWx1ZUZyb20pLFxyXG4gICAgICB0bzogYW55VG9TdHJpbmcodmFsdWVUbylcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiDlhbbkuK3kuIDkuKrmmK9zeW1ib2xcclxuICBpZiAoX2lzU3ltYm9sKHZhbHVlRnJvbSkgfHwgX2lzU3ltYm9sKHZhbHVlVG8pKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9VUERBVEVELFxyXG4gICAgICBmcm9tOiBhbnlUb1N0cmluZyh2YWx1ZUZyb20pLFxyXG4gICAgICB0bzogYW55VG9TdHJpbmcodmFsdWVUbylcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiDkuKTkuKrpg73mmK/ml6XmnJ9cclxuICBpZiAoX2lzRGF0ZSh2YWx1ZUZyb20pICYmIF9pc0RhdGUodmFsdWVUbykpIHtcclxuICAgIGlmICh2YWx1ZUZyb20uZ2V0VGltZSgpID09PSB2YWx1ZVRvLmdldFRpbWUoKSkge1xyXG4gICAgICByZXR1cm4gZGlmZjtcclxuICAgIH1cclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX1VQREFURUQsXHJcbiAgICAgIGZyb206IGFueVRvU3RyaW5nKHZhbHVlRnJvbSksXHJcbiAgICAgIHRvOiBhbnlUb1N0cmluZyh2YWx1ZVRvKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IOS4gOS4quaYr+aXpeacn++8jOWPpuS4gOS4quaYr+WAvFxyXG4gIGlmICgoX2lzRGF0ZSh2YWx1ZUZyb20pICYmIF9pc1ZhbHVlKHZhbHVlVG8pKSB8fCAoX2lzRGF0ZSh2YWx1ZVRvKSAmJiBfaXNWYWx1ZSh2YWx1ZUZyb20pKSkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfVVBEQVRFRCxcclxuICAgICAgZnJvbTogYW55VG9TdHJpbmcodmFsdWVGcm9tKSxcclxuICAgICAgdG86IGFueVRvU3RyaW5nKHZhbHVlVG8pXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTog5Lik5Liq6YO95pivQmxhbmtcclxuICBpZiAoX2lzQmxhbmsodmFsdWVGcm9tKSAmJiBfaXNCbGFuayh2YWx1ZVRvKSkge1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG4gIC8vIGNhc2U6IEZyb23mmK9ibGFuaywgVG/kuI3mmK9cclxuICBpZiAoX2lzQmxhbmsodmFsdWVGcm9tKSAmJiBfaXNWYWx1ZSh2YWx1ZVRvKSkge1xyXG4gICAgZGlmZi5wdXNoKHtcclxuICAgICAgcHJvcGVydHk6IF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSxcclxuICAgICAgdHlwZTogVkFMVUVfQ1JFQVRFRCxcclxuICAgICAgZnJvbTogXCJcIixcclxuICAgICAgdG86IGFueVRvU3RyaW5nKHZhbHVlVG8pXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuICBpZiAoX2lzQmxhbmsodmFsdWVGcm9tKSAmJiBfaXNEYXRlKHZhbHVlVG8pKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9DUkVBVEVELFxyXG4gICAgICBmcm9tOiBcIlwiLFxyXG4gICAgICB0bzogYW55VG9TdHJpbmcodmFsdWVUbylcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG4gIGlmIChfaXNCbGFuayh2YWx1ZUZyb20pICYmIF9pc0FycmF5KHZhbHVlVG8pKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlVG8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgYFske2l9XWAsIHVuZGVmaW5lZCwgdmFsdWVUb1tpXSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG4gIGlmIChfaXNCbGFuayh2YWx1ZUZyb20pICYmIF9pc09iamVjdCh2YWx1ZVRvKSkge1xyXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWVUbykuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpZHgsIGFycmF5KSB7XHJcbiAgICAgIGRpZmYgPSBkaWZmLmNvbmNhdChfR2V0T2JqZWN0RGlmZmVyZW5jZShfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksIHZhbCwgdW5kZWZpbmVkLCB2YWx1ZVRvW3ZhbF0pKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG4gIC8vIGNhc2U6IEZyb23kuI3mmK9ibGFuaywgVG/mmK9cclxuICBpZiAoKF9pc1ZhbHVlKHZhbHVlRnJvbSkgfHwgX2lzRGF0ZSh2YWx1ZUZyb20pIHx8IF9pc0FycmF5KHZhbHVlRnJvbSkgfHwgX2lzT2JqZWN0KHZhbHVlRnJvbSkpICYmIF9pc0JsYW5rKHZhbHVlVG8pKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9ERUxFVEVELFxyXG4gICAgICBmcm9tOiBcIlwiLFxyXG4gICAgICB0bzogXCJcIlxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IEZyb23mmK/lgLzmiJbml6XmnJ/vvIxUb+aYr0FycmF5XHJcbiAgaWYgKChfaXNWYWx1ZSh2YWx1ZUZyb20pIHx8IF9pc0RhdGUodmFsdWVGcm9tKSkgJiYgX2lzQXJyYXkodmFsdWVUbykpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX0RFTEVURUQsXHJcbiAgICAgIGZyb206IFwiXCIsXHJcbiAgICAgIHRvOiBcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlVG8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgYFske2l9XWAsIHVuZGVmaW5lZCwgdmFsdWVUb1tpXSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTogRnJvbeaYr+WAvOaIluaXpeacn++8jFRv5pivT2JqZWN0XHJcbiAgaWYgKChfaXNWYWx1ZSh2YWx1ZUZyb20pIHx8IF9pc0RhdGUodmFsdWVGcm9tKSkgJiYgX2lzT2JqZWN0KHZhbHVlVG8pKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9ERUxFVEVELFxyXG4gICAgICBmcm9tOiBcIlwiLFxyXG4gICAgICB0bzogXCJcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWVUbykuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpZHgsIGFycmF5KSB7XHJcbiAgICAgIGRpZmYgPSBkaWZmLmNvbmNhdChfR2V0T2JqZWN0RGlmZmVyZW5jZShfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksIHZhbCwgdW5kZWZpbmVkLCB2YWx1ZVRvW3ZhbF0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkaWZmO1xyXG4gIH1cclxuXHJcbiAgLy8gY2FzZTogRnJvbeaYr0FycmF577yMVG/mmK/lgLzmiJbml6XmnJ9cclxuICBpZiAoX2lzQXJyYXkodmFsdWVGcm9tKSAmJiAoX2lzVmFsdWUodmFsdWVUbykgfHwgX2lzRGF0ZSh2YWx1ZVRvKSkpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX1VQREFURUQsXHJcbiAgICAgIGZyb206IGBBcnJheVske3ZhbHVlRnJvbS5sZW5ndGh9XWAsXHJcbiAgICAgIHRvOiBhbnlUb1N0cmluZyh2YWx1ZVRvKVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IEZyb23mmK9BcnJhee+8jFRv5pivQXJyYXlcclxuICBpZiAoX2lzQXJyYXkodmFsdWVGcm9tKSAmJiBfaXNBcnJheSh2YWx1ZVRvKSkge1xyXG4gICAgZGlmZiA9IGRpZmYuY29uY2F0KF9nZXRBcnJheURpZmZlbmNlKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSwgdmFsdWVGcm9tLCB2YWx1ZVRvKSk7XHJcbiAgICByZXR1cm4gZGlmZjtcclxuICB9XHJcblxyXG4gIC8vIGNhc2U6IEZyb23mmK9BcnJhee+8jFRv5pivT2JqZWN0XHJcbiAgaWYgKF9pc0FycmF5KHZhbHVlRnJvbSkgJiYgX2lzQXJyYXkodmFsdWVUbykpIHtcclxuICAgIGRpZmYucHVzaCh7XHJcbiAgICAgIHByb3BlcnR5OiBfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksXHJcbiAgICAgIHR5cGU6IFZBTFVFX0RFTEVURUQsXHJcbiAgICAgIGZyb206IGBBcnJheVske3ZhbHVlRnJvbS5sZW5ndGh9XWAsXHJcbiAgICAgIHRvOiBcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZVRvKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGlkeCwgYXJyYXkpIHtcclxuICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgdmFsLCB1bmRlZmluZWQsIHZhbHVlVG9bdmFsXSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiBGcm9t5pivT2JqZWN077yMVG/mmK/lgLzmiJbml6XmnJ9cclxuICBpZiAoX2lzT2JqZWN0KHZhbHVlRnJvbSkgJiYgKF9pc1ZhbHVlKHZhbHVlVG8pIHx8IF9pc0RhdGUodmFsdWVUbykpKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9VUERBVEVELFxyXG4gICAgICBmcm9tOiBcInt9XCIsXHJcbiAgICAgIHRvOiBhbnlUb1N0cmluZyh2YWx1ZVRvKVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG4gIC8vIGNhc2U6IEZyb23mmK9PYmplY3TvvIxUb+aYr0FycmF5XHJcbiAgaWYgKF9pc09iamVjdCh2YWx1ZUZyb20pICYmIF9pc0FycmF5KHZhbHVlVG8pKSB7XHJcbiAgICBkaWZmLnB1c2goe1xyXG4gICAgICBwcm9wZXJ0eTogX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLFxyXG4gICAgICB0eXBlOiBWQUxVRV9ERUxFVEVELFxyXG4gICAgICBmcm9tOiBcInt9XCIsXHJcbiAgICAgIHRvOiBhbnlUb1N0cmluZyh2YWx1ZVRvKVxyXG4gICAgfSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlVG8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZGlmZiA9IGRpZmYuY29uY2F0KF9HZXRPYmplY3REaWZmZXJlbmNlKF9nZXRGdWxsUHJvcE5hbWUocGFyZW50TmFtZSwgcHJvcGVydHlOYW1lKSwgYFske2l9XWAsIHVuZGVmaW5lZCwgdmFsdWVUb1tpXSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpZmY7XHJcbiAgfVxyXG5cclxuICAvLyBjYXNlOiBGcm9t5pivT2JqZWN077yMVG/mmK9PYmplY3RcclxuICBpZiAoX2lzT2JqZWN0KHZhbHVlRnJvbSkgJiYgX2lzT2JqZWN0KHZhbHVlVG8pKSB7XHJcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZUZyb20pLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaWR4LCBhcnJheSkge1xyXG4gICAgICBkaWZmID0gZGlmZi5jb25jYXQoX0dldE9iamVjdERpZmZlcmVuY2UoX2dldEZ1bGxQcm9wTmFtZShwYXJlbnROYW1lLCBwcm9wZXJ0eU5hbWUpLCB2YWwsIHZhbHVlRnJvbVt2YWxdLCB2YWx1ZVRvW3ZhbF0pKTtcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWVUbykuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpZHgsIGFycmF5KSB7XHJcbiAgICAgIGlmICh2YWx1ZUZyb21bdmFsXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGRpZmYgPSBkaWZmLmNvbmNhdChfR2V0T2JqZWN0RGlmZmVyZW5jZShfZ2V0RnVsbFByb3BOYW1lKHBhcmVudE5hbWUsIHByb3BlcnR5TmFtZSksIHZhbCwgdW5kZWZpbmVkLCB2YWx1ZVRvW3ZhbF0pKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRpZmY7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgZGVlcCBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIG9iamVjdHMuIEFuIGVtcHR5IGFycmF5IHdpbGwgYmUgcmV0dXJuZWQgZm9yIHR3byBzYW1lIG9iamVjdHMgY29tcGFyaW5nLlxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBwYXJhbSB7Kn0gcHJvcGVydHlOYW1lIG9iamVjdCBuYW1lLCBhcyB0aGUgcm9vdCBwcm9wZXJ0eSBuYW1lXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWVGcm9tIHZhbHVlIGNvbXBhcmluZyBvbiB0aGUgbGVmdFxyXG4gKiBAcGFyYW0geyp9IHZhbHVlVG8gdmFsdWUgY29tcGFyaW5nIG9uIHRoZSByaWdodFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEdldE9iamVjdERpZmZlcmVuY2Uob2JqZWN0TmFtZSwgdmFsdWVGcm9tLCB2YWx1ZVRvKSB7XHJcbiAgcmV0dXJuIF9HZXRPYmplY3REaWZmZXJlbmNlKFwiXCIsIG9iamVjdE5hbWUsIHZhbHVlRnJvbSwgdmFsdWVUbyk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==