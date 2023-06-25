function solution(keyInput, board) {
  let x = 0;
  let y = 0;
  const maxX = (board[0] - 1) / 2;
  const maxY = (board[1] - 1) / 2;

  for (const key of keyInput) {
    if (key === "up") {
      y = Math.min(y + 1, maxY);
    } else if (key === "down") {
      y = Math.max(y - 1, -maxY);
    } else if (key === "left") {
      x = Math.max(x - 1, -maxX);
    } else if (key === "right") {
      x = Math.min(x + 1, maxX);
    }
  }

  return [x, y];
}

console.log(solution(["down", "down", "down", "down", "down"], [7, 9]));

// 여기서부터 복습

// function solution(keyInput, board) {: solution이라는 함수를 정의하고, 매개변수로 keyInput(방향키 배열)과 board(맵의 크기)를 받습니다.
// let x = 0;: 캐릭터의 x좌표를 초기화하여 0으로 설정합니다.
// let y = 0;: 캐릭터의 y좌표를 초기화하여 0으로 설정합니다.
// const maxX = (board[0] - 1) / 2;: board의 가로 크기를 이용하여 캐릭터가 이동할 수 있는 최대 x좌표를 계산합니다.
// const maxY = (board[1] - 1) / 2;: board의 세로 크기를 이용하여 캐릭터가 이동할 수 있는 최대 y좌표를 계산합니다.
// 6-14. for (const key of keyInput) ~ }: 주어진 keyInput(방향키 배열)의 모든 요소에 대해 반복하면서 캐릭터의 위치를 변경합니다. 7-8. if (key === 'up') { ~ }: 현재 방향키가 'up'인 경우, y좌표를 1 증가시키고 최대값으로 maxY를 설정하여 이를 넘지 않도록 합니다. 9-10. else if (key === 'down') { ~ }: 현재 방향키가 'down'인 경우, y좌표를 1 감소시키고 최소값으로 -maxY를 설정하여 이를 넘지 않도록 합니다. 11-12. else if (key === 'left') { ~ }: 현재 방향키가 'left'인 경우, x좌표를 1 감소시키고 최소값으로 -maxX를 설정하여 이를 넘지 않도록 합니다. 13-14. else if (key === 'right') { ~ }: 현재 방향키가 'right'인 경우, x좌표를 1 증가시키고 최대값으로 maxX를 설정하여 이를 넘지 않도록 합니다.
// return [x, y];: 반복이 끝난 후 캐릭터의 최종 좌표 [x, y]를 반환합니다.
// 코드는 각 방향키에 따라 캐릭터의 위치를 변경하고, board의 크기를 고려하여 캐릭터가 맵 바깥으로 벗어나지 않도록 제한을 두고 있습니다. 이렇게 모든 방향키 입력이 끝난 후에 캐릭터의 최종 좌표 [x, y]를 반환합니다.