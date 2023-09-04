// Destructing 객체 구조 분해

let person = {
  name: "noona",
  age: 20,
};

// let name = person.name;
// let age = person["age"];

let { name, age } = person;

console.log(name, age);

let arr = [1, 2, 3, 4];

let [a, b, ...rest] = arr;

console.log(a, b, rest);
