/* global describe, it */
import { ObjectDifference } from "../lib/object-difference-js.min.js";
import mlog from "mocha-logger";
var expect = require("chai").expect;

describe("basic values comparison", () => {
  let left = { a: "abc", b: 123, c: new Date(), d: true, e: "only in left" },
    right = { a: "xyz", b: 123, c: new Date(2001, 1, 1), d: undefined, f: "only in right" };

  it("should have comparison results list", () => {
    let result = ObjectDifference("t1", left, right);
    for (let r of result) {
      mlog.log(JSON.stringify(r));
    }
    expect(result).to.have.lengthOf(5, "length of comparison results");
  });
});

describe("same object comparison", () => {
  let left = { a: "abc", b: 123, c: new Date(), d: true, e: "only in left", x: [{ x1: 123, x2: 456 }, { x1: "abc", x2: "def" }] },
    right = { a: "abc", b: 123, c: new Date(), d: true, e: "only in left", x: [{ x1: 123, x2: 456 }, { x1: "abc", x2: "def" }] };

  it("should have empty array as results", () => {
    let result = ObjectDifference("t2", left, right);
    expect(result).to.be.empty;
  });

  it("should have no difference event property order changes", () => {
    left = { a: "abc", b: 123, c: new Date(), d: true, e: "only in left", x: [{ x1: 123, x2: 456 }, { x1: "abc", x2: "def" }] };
    right = { x: [{ x1: 123, x2: 456 }, { x1: "abc", x2: "def" }], e: "only in left", a: "abc", b: 123, c: new Date(), d: true };
    let result = ObjectDifference("t2", left, right);
    expect(result).to.be.empty;
  });
});
