function solution(arr, flag) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (flag[i]) {
      for (let j = 0; j < arr[i]; j++) {
        answer.push(arr[i]);
        answer.push(arr[i]);
      }
    } else {
      answer.splice(answer.length - arr[i], arr[i]);
    }
  }
  return answer;
}

console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false]));
