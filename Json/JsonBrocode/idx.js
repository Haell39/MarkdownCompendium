// JSON.parse() = converts a JSON string to a JavaScript object or value.

// Parseing ^^
const jsonString = '{"name": "rael", "age": 20, "isEmployee": false}';

const parsedJson = JSON.parse(jsonString);
console.log(parsedJson);

const jsonArrayString =
  '[{"name": "rael", "age": 20, "isEmployee": false}, {"name": "john", "age": 15, "isEmployee": true}, {"name": "michael", "age": 25, "isEmployee": false}, {"name": "james", "age": 30, "isEmployee": true}]';

const parsedJsonArray = JSON.parse(jsonArrayString);
console.log(parsedJsonArray);

