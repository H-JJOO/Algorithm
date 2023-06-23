//문자열 my_string, overwrite_string과 정수 s가 주어집니다. 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, overwrite_string, s) {
  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    if (i < s) {
      answer += my_string[i];
    } else if (i <= overwrite_string.length + s - 1) {
      answer += overwrite_string[i - s];
    } else {
      answer += my_string[i];
    }
  }

  return answer;
}

solution("Program29b8UYP", "merS123", 7);
