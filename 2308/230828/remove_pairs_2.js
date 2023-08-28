function solution(s) {
  let stringToArr = s.split("");
  let stack = [];

  for (let i = 0; i < stringToArr.length; i++) {
    if (stack[stack.length - 1] === stringToArr[i]) {
      stack.pop();
    } else {
      stack.push(stringToArr[i]);
    }
  }
  return stack.length === 0 ? 1 : 0;
}
console.log(solution("cdcd"));
