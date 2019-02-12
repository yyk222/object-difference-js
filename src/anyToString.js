export default function anyToString(t) {
  if (typeof t === 'boolean' || typeof t === 'number' || typeof t === 'string') {
    return t.toString();
  } else if (t === null) {
    return 'null';
  } else if (t === undefined) {
    return 'undefined';
  }
  if (typeof t === 'symbol') {
    return 'symbol';
  } else if (t instanceof Date) {
    return t.toUTCString();
  } else if (Array.isArray(t)) {
    return t
      .map(x => {
        return anyToString(x);
      })
      .join(', ');
  } else if (typeof t === 'function') {
    return 'function';
  }
  return JSON.stringify(t);

}
