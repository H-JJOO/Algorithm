function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let ascii = s[i].charCodeAt();

    if (ascii >= 65 && ascii <= 90) {
      answer += String.fromCharCode(((ascii - 65 + n) % 26) + 65);
    } else if (ascii >= 97 && ascii <= 122) {
      answer += String.fromCharCode(((ascii - 97 + n) % 26) + 97);
    } else {
      answer += s[i];
    }
  }
  return answer;
}

console.log(solution("a B z", 4));
