function solution(lines) {
  let line = new Array(200).fill(0); // 선분의 시작과 끝 지점을 기록할 배열, 배열의 길이 200 짜리 생성 후 모든 요소를 0 으로 초기화

  lines.forEach(([a, b]) => {
    for (; a < b; a++) line[a + 100]++;
  }); // 선분의 시작과 끝 지점을 기록합니다.

  return line.reduce((a, c) => (c > 1 ? a + 1 : a), 0); // 선분의 시작과 끝 지점을 기록한 배열에서 2 이상인 요소의 개수를 구합니다.
}

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ])
); // 2
console.log(
  solution([
    [-1, 1],
    [1, 3],
    [3, 9],
  ])
); // 0
console.log(
  solution([
    [0, 5],
    [3, 9],
    [1, 10],
  ])
); // 8
