function solution(t, p) {
  let cnt = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let val = t.slice(i, i + p.length);
    if (+p >= +val) cnt++;
  }
  return cnt;
}

console.log(solution("3141592", "271"));
