//정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  let answer = 0;

  let sum = 0;

  let mul = 1;

  for (let i = 0; i < num_list.length; i++) {
    sum += num_list[i];
    mul *= num_list[i];
  }

  if (mul < sum ** 2) {
    answer = 1;
  } else {
    answer = 0;
  }

  return answer;
}
