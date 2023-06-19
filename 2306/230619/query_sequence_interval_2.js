// 뭔소린지 모르겠다.

function solution(arr, queries) {
  const answer = [];

  // 각 쿼리별로 검색을 시작
  for (const query of queries) {
    const [s, e, k] = query;
    let min = Number.MAX_VALUE;

    console.log(min);

    // 주어진 범위(s, e) 내의 숫자들 중 k보다 큰 숫자들 중 가장 작은 값을 찾는다.
    for (let i = s; i <= e; i++) {
      if (arr[i] > k && arr[i] < min) {
        min = arr[i];
      }
    }

    // 원소를 찾았으면 결과 배열에 추가하고, 아니면 -1을 추가
    if (min !== Number.MAX_VALUE) {
      answer.push(min);
    } else {
      answer.push(-1);
    }
  }

  // 결과 배열 반환
  return answer;
}

solution(
  [0, 1, 2, 4, 3],
  [
    [0, 4, 2],
    [0, 3, 2],
    [0, 2, 2],
  ]
);
