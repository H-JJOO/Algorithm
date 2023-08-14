function solution(n, lost, reserve) {
  let reserveCnt = 0;

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] - 1 === reserve[j] || lost[i] + 1 === reserve[j]) {
        reserveCnt++;
      }
      if (
        Math.abs(lost[i] - reserve[j]) - Math.abs(lost[i + 1] - reserve[j]) ===
        0
      ) {
        reserveCnt--;
      }
    }
  }

  reserveCnt = reserveCnt > lost.length ? lost.length : reserveCnt;

  console.log("reserveCnt : ", reserveCnt);

  let studentMax = n - lost.length + reserveCnt;

  return studentMax;
}

console.log(solution(5, [3], [1]));
