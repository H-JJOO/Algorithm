//양의 정수 n이 매개변수로 주어집니다. n × n 배열에 1부터 n2 까지 정수를 인덱스 [0][0]부터 시계방향 나선형으로 배치한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

// 이게 뭐람

function solution(n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  let count = 1;
  let row = 0;
  let col = 0;
  let dir = 0;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let i = 0; i < n * n; i++) {
    matrix[row][col] = count++;
    const newRow = row + directions[dir][0];
    const newCol = col + directions[dir][1];

    if (
      newRow < 0 ||
      newRow >= n ||
      newCol < 0 ||
      newCol >= n ||
      matrix[newRow][newCol] !== 0
    ) {
      dir = (dir + 1) % 4;
    }

    row += directions[dir][0];
    col += directions[dir][1];
  }

  return matrix;
}

console.log(solution(4));
