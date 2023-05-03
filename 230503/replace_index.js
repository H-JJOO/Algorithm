//문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, num1, num2) {
  let answer = [];

  let arr_my_string = my_string.split("");

  for (let i = 0; i < arr_my_string.length; i++) {
    if (i === num1) {
      answer.push(arr_my_string[num2]);
    } else if (i === num2) {
      answer.push(arr_my_string[num1]);
    } else {
      answer.push(arr_my_string[i]);
    }
  }

  answer = answer.join("");

  return answer;
}

solution("hello", 1, 2);
