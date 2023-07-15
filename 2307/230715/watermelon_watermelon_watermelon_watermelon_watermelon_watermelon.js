function solution(n) {
  let answer = "";

  let cnt = 1;

  while (cnt <= n) {
    if (cnt % 2 !== 0) {
      answer += "수";
    } else {
      answer += "박";
    }
    cnt++;
  }

  return answer;
}

console.log(solution(4));
