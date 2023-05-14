//문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, n) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    answer.push(my_string[my_string.length - n + i]);
  }

  answer = answer.join("");

  return answer;
}

solution("ProgrammerS123", 11);
