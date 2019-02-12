/* global describe, it, before */

import chai from "chai";
import { ObjectDifference } from "../lib/object-difference-js.min.js";

chai.expect();

const expect = chai.expect;

let lib;

describe("running ObjectDifference", () => {
  describe("ObjectDifference", () => {
    it("should print the Array for differences", () => {
      let result = ObjectDifference("","test","abc",123);
      console.log("comparing result: ",result);
    });
  });
});