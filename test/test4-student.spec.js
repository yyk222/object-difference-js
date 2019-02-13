/* global describe, it */
import { ObjectDifference } from "../lib/object-difference-js.min.js";
import mlog from "mocha-logger";
var expect = require("chai").expect;

describe("student data comparison", () => {
  let left = {
      id: 12389,
      name: "mike",
      birthday: new Date("2016/08/16"),
      address: {
        zipCode: 800123,
        line: "Raod A, ar",
        city: ""
      }
    },
    right = {
      id: 12389,
      name: "Mike Grant",
      birthday: new Date("2016/08/16"),
      address: {
        zipCode: 800123,
        line: "Raod A, MM district",
        city: "Shenzhen"
      }
    };

  let expectedDiff = [
    {
      property: "name",
      type: "updated",
      from: "mike",
      to: "Mike Grant"
    },
    {
      property: "address.line",
      type: "updated",
      from: "Raod A, ar",
      to: "Raod A, MM district"
    },
    {
      property: "address.city",
      type: "created",
      from: "",
      to: "Shenzhen"
    }
  ];

  it("should have comparison results list", () => {
    let result = ObjectDifference("", left, right);
    for (let r of result) {
      mlog.log(JSON.stringify(r));
    }
    //npm  expect(result).to.have.lengthOf(5, "length of comparison results");
  });
});
