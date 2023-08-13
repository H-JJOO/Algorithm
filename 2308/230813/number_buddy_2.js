function solution(X, Y) {
  let answer = "";
  const arrX = X.split("");
  const arrY = Y.split("");
  const yObj = {}; // 객체 조기화, Y의 각 문자가 몇 번 등장했는지 저장

  arrX.sort((a, b) => b - a);

  arrY.forEach((y) => {
    // Y의 각 문자가 몇 번 등장했는지 저장
    if (yObj[y] === undefined) {
      // 객체에 없으면
      yObj[y] = 1; // 1로 초기화
    } else {
      // 객체에 있으면
      yObj[y]++; // 1 증가
    }
  });

  arrX.forEach((x) => {
    // X의 각 문자가 Y에 몇 번 등장하는지 확인
    if (yObj[x] !== undefined && yObj[x] !== 0) {
      // Y에 등장하면
      yObj[x]--; // 1 감소
      answer = answer.concat(x); // answer에 추가
    }
  });

  if (answer.length === 0) {
    return "-1";
  }
  if (answer[0] === "0") {
    return "0";
  }
  return answer;
}

console.log(solution("5525", "1255"));



