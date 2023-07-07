// 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

// lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다.

// img/length_overlapping_line_segments.png

// 선분이 두 개 이상 겹친 곳은 [-2, -1], [0, 1]로 길이 2만큼 겹쳐있습니다.

function solution(lines) {
  // 1. 모든 선분의 시작과 끝 지점을 구합니다.
  const points = [];
  for (const line of lines) {
    points.push({ position: line[0], type: "start" });
    points.push({ position: line[1], type: "end" });
  }

  console.log("points", points);

  // 2. 지점들을 위치를 기준으로 정렬합니다.
  points.sort((a, b) => a.position - b.position);

  let overlapLength = 0; // 겹치는 구간들의 길이의 합

  let overlappingLineCount = 0; // 현재 겹치는 선분의 개수

  // 3. 겹치는 구간들의 길이의 합을 구합니다.
  for (let i = 0; i < points.length - 1; i++) {
    if (points[i].type === "start") {
      overlappingLineCount++;
    } else {
      overlappingLineCount--;
    }

    if (overlappingLineCount >= 2) {
      overlapLength += points[i + 1].position - points[i].position;
    }
  }

  return overlapLength;
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
