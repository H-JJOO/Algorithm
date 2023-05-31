function solution(myStr) {
  let answer = myStr.split(/a|b|c/).filter((el) => el);

  return answer.length ? answer : ["EMPTY"];
}

console.log(solution("baconlettucetomato"));

let fruits = ["", "", "", "apple", "banana", "ornage"];

fruits = fruits.filter((el) => el);

console.log(fruits);
