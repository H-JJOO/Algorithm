function solution(arr, k) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    console.log("i :", i);
    console.log(answer.includes(arr[i]));
    console.log("첫번째 :", answer);
    if (answer.includes(arr[i])) {
      if (answer.length === k) {
        break;
      }
    } else {
      console.log("두번째 :", answer);
      if (answer.includes(arr[i])) {
        answer.push(-1);
      } else {
        answer.push(arr[i]);
      }
    }
  }

  return answer;
}

console.log(solution([0, 1, 1, 1, 1], 4));

