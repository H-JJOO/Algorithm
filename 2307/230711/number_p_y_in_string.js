function solution(s) {
  let answer = true;

  let p_cnt = 0;
  let y_cnt = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      p_cnt++;
    } else if (s[i] === "y" || s[i] === "Y") {
      y_cnt++;
    }
  }

  if (p_cnt !== y_cnt) {
    answer = false;
  }

  return answer;
}

console.log(solution("Pyy"));
