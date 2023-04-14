function solution(n) {
  let answer = 1;

  for (let i = 1; i <= n; i++) {
    if (i * 7 < n) {
      answer += 1;
    }
  }

  return answer;
}
