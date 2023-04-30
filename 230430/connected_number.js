//정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  let answer = 0;

  let odd_arry = [];

  let even_arry = [];

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      even_arry.push(num_list[i]);
    } else {
      odd_arry.push(num_list[i]);
    }
  }

  let odd = odd_arry.join("");

  let even = even_arry.join("");

  answer = parseInt(odd) + parseInt(even);

  return answer;
}

solution([3, 4, 5, 2, 1]);
