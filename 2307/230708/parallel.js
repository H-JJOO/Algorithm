// (y2 - y1) / (x2 - x1) = (y4 - y3) / (x4 - x3), 평행

function solution(dots) {
  let answer = 0;

  const slopes = [];

  for (let i = 0; i < dots.length - 1; i++) {
    slopes.push((dots[i + 1][1] - dots[i][1]) / (dots[i + 1][0] - dots[i][0]));
  }

  if (slopes[0] === slopes[1] || slopes[0] === slopes[2]) {
    answer = 1;
  } else {
    answer = 0;
  }

  return answer;
}

console.log(
  solution([
    [3, 5],
    [4, 1],
    [2, 4],
    [5, 10],
  ])
);
