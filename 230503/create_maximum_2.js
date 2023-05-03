//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let answer = 0;

  let sort_arr_numbers = numbers.sort((a, b) => a - b);

  for (let i = 0; i < sort_arr_numbers.length; i++) {
    sort_arr_numbers[0] * sort_arr_numbers[1] >
    sort_arr_numbers[sort_arr_numbers.length - 1] *
      sort_arr_numbers[sort_arr_numbers.length - 2]
      ? (answer = sort_arr_numbers[0] * sort_arr_numbers[1])
      : (answer =
          sort_arr_numbers[sort_arr_numbers.length - 1] *
          sort_arr_numbers[sort_arr_numbers.length - 2]);
  }

  return answer;
}

solution([10, 20, 30, 5, 5, 20, 5]);
