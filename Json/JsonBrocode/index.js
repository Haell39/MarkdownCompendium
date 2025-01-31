/* 
JSON = (JavaScript Object Notation) data-interchange format used for exchanging data between a server and a web application.

JSON files {key: value} OR [value, value].

JSON.stringify() = converts a JavaScript object or value to a JSON string.
JSON.parse() = converts a JSON string to a JavaScript object or value.
 */


// Stringfying ^^
const names = ["rael", "john", "michael", "james"];
const person = {
  name: "rael",
  age: 20,
  isEmployee: false,
  hobbies: ["reading", "coding", "gaming"],
};
const people = [
  {
    name: "rael",
    age: 20,
    isEmployee: false,
  },
  {
    name: "john",
    age: 15,
    isEmployee: true,
  },
  {
    name: "michael",
    age: 25,
    isEmployee: false,
  },
  {
    name: "james",
    age: 30,
    isEmployee: true,
  },
];
const jsonString = JSON.stringify(people);
console.log(names);
console.log(jsonString);

// console.log(people);
