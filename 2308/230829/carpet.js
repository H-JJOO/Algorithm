function solution(brown, yellow) {
  const x =
    ((brown - 4) / 2 + Math.sqrt(Math.pow((brown - 4) / 2, 2) - 4 * yellow)) /
    2;

  const y = yellow / x;

  return [Math.max(x + 2, y + 2), Math.min(x + 2, y + 2)];
}

// 1 : 8, 2: 10, 3:

console.log(solution(10, 2));
