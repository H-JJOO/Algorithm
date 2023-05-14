function solution(arr, n) {
  let answer = [];

  if (arr.length % 2 === 1) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        answer.push(arr[i] + n);
      } else {
        answer.push(arr[i]);
      }
    }
  } else if (arr.length % 2 === 0) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 1) {
        answer.push(arr[i] + n);
      } else {
        answer.push(arr[i]);
      }
    }
  }

  return answer;
}

solution([49, 12, 100, 276, 33], 27);
