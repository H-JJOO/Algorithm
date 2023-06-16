function solution(ineq, eq, n, m) {
  let answer = 0;

  if (ineq === ">" && eq === "=") {
    answer = n >= m;
  } else if (ineq === "<" && eq === "=") {
    answer = n <= m;
  } else if (ineq === ">" && eq === "!") {
    answer = n > m;
  } else if (ineq === "<" && eq === "!") {
    answer = n < m;
  }

  return answer === true ? 1 : 0;
}

console.log(solution(">", "!", 41, 78));
