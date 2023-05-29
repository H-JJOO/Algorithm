// 문자열 myString과 pat이 주어집니다. myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.

function solution(myString, pat) {
  let count = 0;
  let index = 0;

  while (index < myString.length) {
    index = myString.indexOf(pat, index);
    if (index === -1) {
      break;
    }
    count++;
    index++;
  }

  return count;
}

console.log(solution("abababa", "aba"));
