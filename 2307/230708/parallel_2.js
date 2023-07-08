function solution(dots) {
  function isEqualSlope(slope1, slope2) {
    const epsilon = 0.00001;
    return Math.abs(slope1 - slope2) < epsilon;
  }

  let slopes = [];
  for (let i = 0; i < dots.length - 1; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      slopes.push((dots[j][1] - dots[i][1]) / (dots[j][0] - dots[i][0]));
    }
  }

  for (let i = 0; i < slopes.length - 1; i++) {
    for (let j = i + 1; j < slopes.length; j++) {
      if (isEqualSlope(slopes[i], slopes[j])) {
        return 1;
      }
    }
  }

  return 0;
}

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
);
