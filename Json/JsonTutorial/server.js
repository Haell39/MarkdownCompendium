const userData = [
  {
    username: "rael",
    age: 20,
    isAdmin: false,
  },

  {
    username: "john",
    age: 15,
    isAdmin: true,
  },
];

const stringJson = JSON.stringify(userData);
console.log(stringJson);

const jsonParse = JSON.parse(stringJson);
console.log(jsonParse[0].username);
