function solution(board, moves) {
  var answer = 0;
  const topIdx = Array(board[0].length).fill(0); // 각 column의 top index를 저장하는 배열

  for (let column = 0; column < board[0].length; column++) {
    for (let row = 0; row < board.length; row++) {
      if (board[row][column] !== 0) {
        // 해당 column 에 인형이 있을경우
        topIdx[column] = row;
        break;
      } // 0이 아닌 값이 나오면 해당 column의 top index를 저장하고 break
    }
  } // 각 column의 top index를 저장

  const stack = [];
  moves.forEach((move) => {
    const columnIdx = move - 1; // 0부터 시작하므로 -1
    const rowIdx = topIdx[columnIdx]; // 해당 column의 top index
    topIdx[columnIdx]++; // 해당 column의 top index 증가
    if (board[rowIdx] !== undefined) {
      // 해당 column에 인형이 있을 경우
      const lastStackValue = stack.at(-1); // stack의 마지막 값
      const pushStackValue = board[rowIdx][columnIdx]; // stack에 push할 값
      if (lastStackValue === pushStackValue) {
        // stack의 마지막 값과 push할 값이 같을 경우
        stack.pop();
        answer += 2; // 2개가 터지므로 +2
      } else {
        stack.push(board[rowIdx][columnIdx]); // stack에 push
      }
    }
  });

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
