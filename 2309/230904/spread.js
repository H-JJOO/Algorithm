// spread

let person = { name: "noona", age: 20 };

let person2 = { ...person, name: "noona2" }; // 깊은 복사

let person3 = person; // 얕은 복사, 주소값 복사

console.log(person2);

console.log(person === person3); // 얕은 복사이기 때문에 true
console.log(person === person2); // 깊은 복사이기 때문에 false

let arr_a = [1, 2, 3];

let arr_b = [...arr_a, 4, 5, 6];

console.log(arr_b);

let arr_c = [...arr_a, ...arr_b];

console.log(arr_c);
