function solution(n) {
  let cnt = 0;
  let i = 0;
  while (n > 0) {
    i++;
    if (n % i === 0) {
      cnt++;
      n -= i;
    }
  }
  return cnt;
}
console.log(solution(15));
