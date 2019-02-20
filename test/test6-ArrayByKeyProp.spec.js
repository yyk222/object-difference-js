/* global describe, it */
import { ObjectDifference } from "../lib/object-difference-js.min.js";
import mlog from "mocha-logger";
var expect = require("chai").expect;

describe("checking between two array with Key prop", () => {
  it("should be same", () => {
    let left = [{ id: 101, desc: "101-desc" }, { id: 102, desc: "102-desc" }],
      right = [{ id: 101, desc: "101-desc" }, { id: 102, desc: "102-desc" }];
    let result = ObjectDifference("", left, right, { ArrayKeyProperty: "id" });
    for (let v of result) {
      mlog.log(JSON.stringify(v));
    }
    expect(result)
      .to.be.an("array")
      .that.have.lengthOf(0);
  });

  it("should have 1 diff", () => {
    let left = [{ id: 101, desc: "101-desc" }, { id: 102, desc: "102-desc" }],
      right = [{ id: 101, desc: "101-desc" }, { id: 102, desc: "102-desc-xxx" }];
    let result = ObjectDifference("", left, right, { ArrayKeyProperty: "id" });
    for (let v of result) {
      mlog.log(JSON.stringify(v));
    }
    expect(result)
      .to.be.an("array")
      .that.have.lengthOf(1);
  });

  it("should have more diff", () => {
    let left = [{ id: 101, desc: "101-desc" }, { id: 102, desc: "102-desc" }],
      right = [{ id: 101, desc: "101-desc" }, { id: 102, desc: "102-desc-xxx" }, { id: 103, desc: "103-desc" }];
    let result = ObjectDifference("", left, right, { ArrayKeyProperty: "id" });
    for (let v of result) {
      mlog.log(JSON.stringify(v));
    }
    expect(result).to.be.an("array");
  });

  it("should have more diff", () => {
    let left = [{ id: 101, desc: "101-desc" }, { id: 102, desc: "102-desc" },{ id: 104, desc: "104-desc" }],
      right = [{ id: 101, desc: "101-desc" }, { id: 102, desc: "102-desc-xxx" }, { id: 103, desc: {x:"abc",y:"def"} }];
    let result = ObjectDifference("", left, right, { ArrayKeyProperty: "id" });
    for (let v of result) {
      mlog.log(JSON.stringify(v));
    }
    expect(result).to.be.an("array");
  });
});
