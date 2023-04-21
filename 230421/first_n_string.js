function solution(my_string, n) {
  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    if (i < n) {
      answer += my_string[i];
    }
  }

  return answer;
}
