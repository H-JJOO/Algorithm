//정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(n_str) {
  let answer = [];

  let arr_n_str = n_str.split("");

  for (let i = 0; i < arr_n_str.length; i++) {
    if (arr_n_str[i] !== "0" || (answer[0] !== "0" && answer[0])) {
      answer.push(arr_n_str[i]);
    }
  }

  answer = answer.join("");

  return answer;
}

solution("854020");
