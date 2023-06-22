//이차원 정수 배열 arr이 매개변수로 주어집니다. arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고, 열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(arr) {
  let rowLength = arr.length;
  let columnLength = arr[0].length;

  // 행의 수가 더 많다면
  if (rowLength > columnLength) {
    for (let i = 0; i < rowLength; i++) {
      while (arr[i].length < rowLength) {
        arr[i].push(0);
      }
    }
  } else if (rowLength < columnLength) {
    // 열의 수가 더 많다면
    while (arr.length < columnLength) {
      arr.push(Array(columnLength).fill(0));
    }
  }

  return arr;
}

console.log(
  solution([
    [57, 192, 534, 2],
    [9, 345, 192, 999],
  ])
);
