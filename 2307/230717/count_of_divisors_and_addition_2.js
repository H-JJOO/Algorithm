function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }

  return answer;
}

console.log(solution(24, 27));

// Math.sqrt(i)  숫자 i의 제곱근을 반환합니다.