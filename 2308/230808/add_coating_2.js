function solution(n, m, sections) {
  let cnt = 0;
  let painted = 0;
  for (let section of sections) {
    if (painted < section) {
      cnt++;
      painted = section + m - 1;
    }
  }
  return cnt;
}

console.log(solution(4, 1, [1, 2, 3, 4]));
