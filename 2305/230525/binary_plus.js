//이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(bin1, bin2) {
  let answer = "";

  let num1 = parseInt(bin1, 2);
  let num2 = parseInt(bin2, 2);

  answer = (num1 + num2).toString(2);
  return answer;
}


