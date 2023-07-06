function solution(a, b, c, d) {
  var answer = 0;

  if (a === b && b === c && c === d) {
    answer = 1111 * a;
  } else if (a === b && b === c && c !== d) {
    answer = (10 * a + d) ** 2;
  } else if (a === b && c === d && a !== c) {
    answer = (a + c) * Math.abs(a - c);
  } else if (a === b && a !== c && c !== d) {
    answer = c * d;
  } else if (a !== b && b !== c && c !== d) {
    answer = a + b + c + d;
  }

  return answer;
}

console.log(solution(4, 1, 4, 4));
