function solution(score) {
  let avg = score.map((v) => (v[0] + v[1]) / 2);
  let sorted = [...avg].sort((a, b) => b - a);
  return avg.map((v) => sorted.indexOf(v) + 1);
}

console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
);
