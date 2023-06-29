function solution(arr, k) {
  let answer = [];
  let uniqueNumbers = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueNumbers.has(arr[i])) {
      uniqueNumbers.add(arr[i]);
      answer.push(arr[i]);
    }

    if (answer.length === k) {
      break;
    }
  }

  while (answer.length < k) {
    answer.push(-1);
  }

  return answer;
}

console.log(solution([0, 1, 1, 2, 2, 3], 3));
