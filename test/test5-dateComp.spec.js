/* global describe, it */
import { ObjectDifference } from "../lib/object-difference-js.min.js";
import mlog from "mocha-logger";
var expect = require("chai").expect;

describe("checking between a date and a value", () => {
  it("should be same", () => {
    let left = new Date("1979-08-22 22:00:00"),
      right = "1979-08-22 22:00:00";
    let result = ObjectDifference("", left, right);
    expect(result)
      .to.be.an("array")
      .that.have.lengthOf(0);
  });

  it("should be different", () => {
    let left = new Date("1979-08-22 22:00:00"),
      right = "1979-08-22 21:00:00";
    let result = ObjectDifference("", left, right);
    expect(result)
      .to.be.an("array")
      .that.have.lengthOf(1);
  });

  it("should be different for invalid date string", () => {
    let left = new Date("1979-08-22 22:00:00"),
      right = "abc";
    let result = ObjectDifference("", left, right);
    expect(result)
      .to.be.an("array")
      .that.have.lengthOf(1);
  });

  it("should be different for empty date string", () => {
    let left = new Date("1979-08-22 22:00:00"),
      right = "";
    let result = ObjectDifference("", left, right);
    expect(result)
      .to.be.an("array")
      .that.have.lengthOf(1);
  });
});
