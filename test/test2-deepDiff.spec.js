/* global describe, it */
import { ObjectDifference } from "../lib/object-difference-js.min.js";
import mlog from "mocha-logger";
var expect = require("chai").expect;

describe("deep object difference comparison", () => {
  let left, right, result;

  it("difference between two simple value array", () => {
    left = { a: "abc", b: 123, array1: [1, 2, 3] };
    right = { a: "xyz", b: 123, array1: [1, 3, 4, 5, 6] };

    result = ObjectDifference("t1", left, right);

    for (let r of result) {
      mlog.log(JSON.stringify(r));
    }
  });

  it("difference between two arrays of object", () => {
    left = {
      id: 90123,
      array1: [{ x: 1, y: 2 }, { x: 3, y: 4 }],
      array2: [{ x: 1, y: 2 }, { time: { year: 1999, month: "Aug" }, income: 2000 }]
    };
    right = {
      id: 90123,
      array1: [{ x: 1, y: 2 }, { x: 3, y: 4 }],
      array2: [{ x: 1, y: 2 }, { time: { year: 1999, month: "Aug" }, income: 3000 }]
    };
    result = ObjectDifference("90123", left, right);
    for (let r of result) {
      mlog.log(JSON.stringify(r));
    }
  });

  it("difference between an empty object and a created object", () => {
    left = {};
    right = { id: 90123, array1: [{ x: 1, y: 2 }, { x: 3, y: 4 }], array2: [{ x: 1, y: 2 }, { time: { year: 1999, month: "Aug" }, income: 3000 }] };
    result = ObjectDifference("90123", left, right);
    for (let r of result) {
      mlog.log(JSON.stringify(r));
    }
  });
});
