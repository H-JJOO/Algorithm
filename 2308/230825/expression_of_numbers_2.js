function solution(n) {
  let cnt = 1;
  for (let i = 1; i < n / 2; i++) {
    let sum = i;

    for (let j = i + 1; j < n; j++) {
      sum += j;
      if (sum === n) {
        cnt++;
        break;
      } else if (sum > n) {
        break;
      }
    }
  }
  return cnt;
}

console.log(solution(15));
