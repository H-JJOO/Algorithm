// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

function solution(array, n) {
  let answer = [];

  array.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    answer.push(Math.abs(array[i] - n));
  }

  return array[answer.indexOf(Math.min(...answer))];
}

console.log(solution([3, 20, 40], 30));
