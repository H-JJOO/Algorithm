// 삼항연산자
// let person = { name: "noona", age: 20 };
let person = null;

if (person) {
  console.log(person.name);
} else {
  console.log("person이 없습니다.");
}

// 위의 if문을 삼항연산자로 바꾸면

person ? console.log(person.name) : console.log("person이 없습니다.");
