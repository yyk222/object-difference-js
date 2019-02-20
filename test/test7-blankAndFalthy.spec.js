/* global describe, it */
import { ObjectDifference } from "../lib/object-difference-js.min.js";
import mlog from "mocha-logger";
var expect = require("chai").expect;

describe("checking between two array with Key prop", () => {
  it("should be same", () => {
    let left = undefined,
      right = false;
    let result = ObjectDifference("", left, right);
    for (let v of result) {
      mlog.log(JSON.stringify(v));
    }
    expect(result)
      .to.be.an("array")
      .that.have.lengthOf(0);
  });
  it("should be different", () => {
    let left = undefined,
      right = true;
    let result = ObjectDifference("", left, right);
    for (let v of result) {
      mlog.log(JSON.stringify(v));
    }
    expect(result)
      .to.be.an("array")
      .that.have.lengthOf(1);
  });
  it("should be same", () => {
    let left = "",
      right = false;
    let result = ObjectDifference("", left, right);
    for (let v of result) {
      mlog.log(JSON.stringify(v));
    }
    expect(result)
      .to.be.an("array")
      .that.have.lengthOf(0);
  });
  it("should be same", () => {
    let left =false,
      right = "";
    let result = ObjectDifference("", left, right);
    for (let v of result) {
      mlog.log(JSON.stringify(v));
    }
    expect(result)
      .to.be.an("array")
      .that.have.lengthOf(0);
  });
  it("should be same", () => {
    let left =false,
      right = undefined;
    let result = ObjectDifference("", left, right);
    for (let v of result) {
      mlog.log(JSON.stringify(v));
    }
    expect(result)
      .to.be.an("array")
      .that.have.lengthOf(0);
  });
  it("should be same", () => {
    let left =false,
      right = false;
    let result = ObjectDifference("", left, right);
    for (let v of result) {
      mlog.log(JSON.stringify(v));
    }
    expect(result)
      .to.be.an("array")
      .that.have.lengthOf(0);
  });
  it("should be same", () => {
    let left =false,
      right = null;
    let result = ObjectDifference("", left, right);
    for (let v of result) {
      mlog.log(JSON.stringify(v));
    }
    expect(result)
      .to.be.an("array")
      .that.have.lengthOf(0);
  });
});
