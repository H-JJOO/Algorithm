function solution(arr) {
  let answer = 0;

  let cnt = 0;

  let last_arr = [];

  while (arr[cnt] !== arr[cnt + 1]) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 50 && arr[i] % 2 === 0) {
        arr[i] = arr[i] / 2;
      } else if (arr[i] < 50 && arr[i] % 2 === 1) {
        arr[i] = arr[i] * 2 + 1;
      }
    }

    cnt++;
    console.log(cnt, "번", arr);
    last_arr = arr;
  }

  console.log(last_arr);
  return answer;
}

solution([1, 2, 3, 100, 99, 98]);
