# object-difference-js
This library provide a function to get deep difference between two javascript objeccts. To make it easier to save differences to DB, the result is provided in a simple array.

## Example
before and after user made some change to a student's record:
```js
foo = {
      id: 12389,
      name: "mike",
      birthday: new Date("2016/08/16"),
      address: {
        zipCode: 800123,
        line: "Raod A, ar",
        city: ""
      }
    }
bar = {
      id: 12389,
      name: "Mike Grant",
      birthday: new Date("2016/08/16"),
      address: {
        zipCode: 800123,
        line: "Raod A, MM district",
        city: "Shenzhen"
      }
}
```
function ObjectDifference("", foo, bar) will return the difference in array:
```js
[
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
  ]
```
property names are chained by "." between levels. 
type could have 4 values: "updated", "created", "deleted" or "NA". Since the main purpose is to compare between two data objects, it make no sense to compare between function to a value or between two function, this case is marked by type NA.
from and to value are always the string converted from the "value", e.g.
* boolean, number and string value is converted by .toString()
* Date object is converted by .toUTCString()
* null, undefined, symbol, function is convert to string "null", "undefined", "symbol", "function"

## Getting Started

Install it:
```
npm install object-difference-js
```
In ES6 code, import the function:
```js
import { ObjectDifference } from 'object-difference-ks'
```
To load as a UMD module:
```js
var ObjectDifference = require("../lib/object-difference-js.min.js").ObjectDifference;
```
Load from js directly in browser, it will be registered as a global varaible:
```html
<script type="text/javascript" src="../lib/object-difference-js.min.js"></script>
<script type="text/javascript">
  var result = window.ObjDiff.ObjectDifference("", foo, bar);
</script>
```
call the function to get difference between any two objects:
```js
let foo = {...},
    bar = {...};
let rootName = "";
let result = ObjectDifference(rootName, foo, bar);  
//result should be the array as in above example.
```
If there is no difference between the two object, the array will be empty, result.length === 0 ;

To run an wide range of test and see some test comparison, please clone the project;
```
npm run build
```
will build the lid and run test.                                                                                                                                                              
```
npm run test
```
will run the test only.
## Comparison rules
the comparison is mainly from a database data perspective, so we have following rules:
* between basic value types, the comparison is not strict, i.e. check by left == right.
* initial value for different types are considered as same, i.e. "", undefined, null, {}, [] are all "same" blank values.
* between two Date objects, it is checked by .getTime() value, and we think a Date object is always differenct to value in other types. For example, New Date("2018/12/1") is differnet to "2018/12/1".
* Comparison between arrays are checked deeply, but while the order of element is not checked. 
    * [{a:1, b2:},{a:3, b:4}] is different to [{a:2, b:2}, {a:3, b:4}]
    * [{a:1, b2:},{a:3, b:4}] has no difference to [{a:3, b:4},{a:1, b:2}]
* For a performance reason: if array on left or array on right has different length and any one of them is longer than 30, the deep conparison will be ignored and only record array length difference.
