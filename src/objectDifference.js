import anyToString from "./anyToString.js";

const VALUE_CREATED = "created",
  VALUE_UPDATED = "updated",
  VALUE_DELETED = "deleted",
  NOT_COMPARABLE = "NA";

function _isBlank(t) {
  return t === "" || t === 0 || t === undefined || t === null || t === {} || (Array.isArray(t) && t.length < 1);
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
  return typeof t === "symbol";
}
function _isObject(t) {
  return !_isValue(t) && !_isBlank(t) && !_isDate(t) && !_isArray(t) && !_isFunction(t) && !_isSymbol(t);
}

function _getFullPropName(parentName, propertyName) {
  return parentName ? `${parentName}.${propertyName}` : propertyName;
}

function _getArrayDiffence(parentName, propertyName, a1, a2) {
  let diff = [];

  if (a1.length === a2.length) {
    for (let i = 0; i < a1.length; i++) {
      if (JSON.stringify(a1[i]) === JSON.stringify(a2[i])) {
        continue;
      } else {
        for (let i = 0; i < a1.length; i++) {
          diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), `[${i}]`, a1[i], a2[i])); // eslint-disable-line no-use-before-define
        }
      }
    }
    return diff;
  }

  if (a1.length > 30 || a2.length > 30) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_UPDATED,
      from: `Array[${a1.length}]`,
      to: `Array[${a2.length}]`
    });
    return diff;
  }

  function comparer(otherArray) {
    return function (current) {
      return (
        otherArray.filter(function (other) {
          return JSON.stringify(other) === JSON.stringify(current);
        }).length === 0
      );
    };
  }

  let onlyInA1 = a1.filter(comparer(a2));

  let onlyInA2 = a2.filter(comparer(a1));

  for (let i = 0; i < onlyInA1.length; i++) {
    diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), `[${i}]`, onlyInA1[i], undefined)); // eslint-disable-line no-use-before-define
  }

  for (let i = 0; i < onlyInA2.length; i++) {
    diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), `[${i}]`, undefined, onlyInA2[i])); // eslint-disable-line no-use-before-define
  }

  return diff;
}

function _GetObjectDifference(parentName, propertyName, valueFrom, valueTo) {
  let diff = [];

  if (propertyName === "__ob__" || propertyName === "__proto__") {
    return diff;
  }
  // case: 两个都是基础类型
  if (_isValue(valueFrom) && _isValue(valueTo)) {
    if (valueFrom == valueTo) { // eslint-disable-line
      return diff;
    }
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_UPDATED,
      from: valueFrom,
      to: valueTo
    });
    return diff;
  }

  // case: 排除有function的情况
  if (_isFunction(valueFrom) || _isFunction(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: NOT_COMPARABLE,
      from: anyToString(valueFrom),
      to: anyToString(valueTo)
    });
    return diff;
  }

  // case: 其中一个是symbol
  if (_isSymbol(valueFrom) || _isSymbol(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_UPDATED,
      from: anyToString(valueFrom),
      to: anyToString(valueTo)
    });
    return diff;
  }

  // case: 两个都是日期
  if (_isDate(valueFrom) && _isDate(valueTo)) {
    if (valueFrom.getTime() === valueTo.getTime()) {
      return diff;
    }
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_UPDATED,
      from: anyToString(valueFrom),
      to: anyToString(valueTo)
    });
    return diff;
  }

  // case: 一个是日期，另一个是值
  if (_isDate(valueTo) && _isValue(valueFrom)) {
    if (new Date(valueFrom).getTime() === valueTo.getTime()) {
      return diff;
    }
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_UPDATED,
      from: anyToString(valueFrom),
      to: anyToString(valueTo)
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
      from: anyToString(valueFrom),
      to: anyToString(valueTo)
    });
    return diff;
  }

  // case: 两个都是Blank
  if (_isBlank(valueFrom) && _isBlank(valueTo)) {
    return diff;
  }
  // case: From是blank, To不是
  if (_isBlank(valueFrom) && _isValue(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_CREATED,
      from: "",
      to: anyToString(valueTo)
    });
    return diff;
  }
  if (_isBlank(valueFrom) && _isDate(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_CREATED,
      from: "",
      to: anyToString(valueTo)
    });
    return diff;
  }
  if (_isBlank(valueFrom) && _isArray(valueTo)) {
    for (let i = 0; i < valueTo.length; i++) {
      diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), `[${i}]`, undefined, valueTo[i]));
    }
    return diff;
  }
  if (_isBlank(valueFrom) && _isObject(valueTo)) {
    Object.getOwnPropertyNames(valueTo).forEach(function (val, idx, array) {
      diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), val, undefined, valueTo[val]));
    });
    return diff;
  }
  // case: From不是blank, To是
  if ((_isValue(valueFrom) || _isDate(valueFrom) || _isArray(valueFrom) || _isObject(valueFrom)) && _isBlank(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_DELETED,
      from: "",
      to: ""
    });
    return diff;
  }

  // case: From是值或日期，To是Array
  if ((_isValue(valueFrom) || _isDate(valueFrom)) && _isArray(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_DELETED,
      from: "",
      to: ""
    });

    for (let i = 0; i < valueTo.length; i++) {
      diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), `[${i}]`, undefined, valueTo[i]));
    }

    return diff;
  }

  // case: From是值或日期，To是Object
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
  }

  // case: From是Array，To是值或日期
  if (_isArray(valueFrom) && (_isValue(valueTo) || _isDate(valueTo))) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_UPDATED,
      from: `Array[${valueFrom.length}]`,
      to: anyToString(valueTo)
    });
    return diff;
  }

  // case: From是Array，To是Array
  if (_isArray(valueFrom) && _isArray(valueTo)) {
    diff = diff.concat(_getArrayDiffence(parentName, propertyName, valueFrom, valueTo));
    return diff;
  }

  // case: From是Array，To是Object
  if (_isArray(valueFrom) && _isArray(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_DELETED,
      from: `Array[${valueFrom.length}]`,
      to: ""
    });

    Object.getOwnPropertyNames(valueTo).forEach(function (val, idx, array) {
      diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), val, undefined, valueTo[val]));
    });

    return diff;
  }

  // case: From是Object，To是值或日期
  if (_isObject(valueFrom) && (_isValue(valueTo) || _isDate(valueTo))) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_UPDATED,
      from: "{}",
      to: anyToString(valueTo)
    });

    return diff;
  }
  // case: From是Object，To是Array
  if (_isObject(valueFrom) && _isArray(valueTo)) {
    diff.push({
      property: _getFullPropName(parentName, propertyName),
      type: VALUE_DELETED,
      from: "{}",
      to: anyToString(valueTo)
    });
    for (let i = 0; i < valueTo.length; i++) {
      diff = diff.concat(_GetObjectDifference(_getFullPropName(parentName, propertyName), `[${i}]`, undefined, valueTo[i]));
    }
    return diff;
  }

  // case: From是Object，To是Object
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
export function GetObjectDifference(objectName, valueFrom, valueTo) {
  return _GetObjectDifference("", objectName, valueFrom, valueTo);
}
