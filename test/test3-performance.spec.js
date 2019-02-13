/* global describe, it */
import { ObjectDifference } from "../lib/object-difference-js.min.js";
import mlog from "mocha-logger";
var expect = require("chai").expect;
const { performance } = require("perf_hooks");

describe("performance of 10000 times of comparison", () => {
  let left, right, result;
  const loopTimes = 10000;
  before(() => {
    performance.mark("before");
  });

  it("loops 10000 times", function(done){
    left = { id: 90123, array1: [{ x: 1, y: 2 }, { x: 3, y: 4 }], array2: [{ x: 1, y: 2 }, { time: { year: 1999, month: "Aug" }, income: 2000 }] };
    right = { id: 90123, array1: [{ x: 1, y: 2 }, { x: 3, y: 4 }], array2: [{ x: 1, y: 2 }, { time: { year: 1999, month: "Aug" }, income: 3000 }] };

    result = new Array();
    for (let i = 0; i < loopTimes; i++) {
      let r = ObjectDifference("90123", left, right);
      result.push(r);
    }
    expect(result).to.have.lengthOf(10000, "length of comparison results after 1000 loops");
    done();
  });

  after(() => {
    // performance.mark("after");
    // performance.measure("10000 times comparison", "before", "after");
    // var p = performance.getEntriesByType("measure");
    // console.log("performance measure: ", p);
    // mlog.log(p[0].name, p[0].duration);
  });
});
