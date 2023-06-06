//두 정수 q, r과 문자열 code가 주어질 때, code의 각 인덱스를 q로 나누었을 때 나머지가 r인 위치의 문자를 앞에서부터 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(q, r, code) {
  let answer = "";

  let code_arr = code.split("");

  console.log(code_arr);

  for (let i = 0; i < code_arr.length; i++) {
    if (i % q === r) {
      answer += code_arr[i];
    }
  }

  return answer;
}

solution(1, 0, "programmers");
