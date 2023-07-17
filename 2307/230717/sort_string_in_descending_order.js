// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

function solution(s) {
  let arr = s.split("");

  let new_arr = [];

  let answer_arr = [];

  for (let i = 0; i < arr.length; i++) {
    new_arr.push(arr[i].charCodeAt());
  }

  new_arr.sort((a, b) => b - a);

  for (let i = 0; i < new_arr.length; i++) {
    answer_arr.push(String.fromCharCode(new_arr[i]));
  }

  return answer_arr.join("");
}

console.log(solution("aZbcdefg"));
