// 점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.

// [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
// 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.

function solution(dots) {
  0;
  const slope = (a, b) => (b[1] - a[1]) / (b[0] - a[0]);

  const slopes = [
    slope(dots[0], dots[1]) - slope(dots[2], dots[3]),
    slope(dots[0], dots[2]) - slope(dots[1], dots[3]),
    slope(dots[0], dots[3]) - slope(dots[1], dots[2]),
  ];

  const eps = 1e-9; // 0.000000001, 평행을 의미하는 값
  return slopes.some((difference) => Math.abs(difference) < eps) ? 1 : 0;
}

console.log(
  solution([
    [3, 5],
    [4, 1],
    [2, 4],
    [5, 10],
  ])
);
