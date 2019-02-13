# object-difference-js
This library provide a function to get deep difference between two javascript objeccts, especially when is's recording changes uses made to business data. it's will generate a simple array for deep difference, to make it saved to DB effectively.

## Example
let's say the first object for a student data is:
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
function ObjectDifference("", foo, bar) will return the difference:
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
property name is separated by "." in levels.


## Getting Started

Install it:
```
npm install object-difference-js
```
