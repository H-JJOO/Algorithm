function solution(n) {
  const answer = [];

  let i = 2;

  while (i <= n) {
    if (n % i === 0) {
      if (!answer.includes(i)) {// 중복된 값이 없을 때
        answer.push(i);
      }
      n /= i;
    } else {
      i++;
    }
  }

  return answer;
}

console.log(solution(420));
