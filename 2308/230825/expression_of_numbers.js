function solution(n) {
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    let sum = 0;
    let j = i;

    while (sum < n) {
      sum += j;
      j++;
    }

    if (sum === n) {
      cnt++;
    }
  }

  return cnt;
}

console.log(solution(15));
