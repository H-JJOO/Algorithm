function solution(s, n) {
  let answer = "";

  let ascii = 0;

  for (let i = 0; i < s.length; i++) {
    ascii = s[i].charCodeAt() + n;
    if (ascii > 122 || (ascii > 90 && ascii < 97) || ascii < 65) ascii -= 26;

    if (s[i].charCodeAt() === 32) {
      answer += " ";
    } else {
      answer += String.fromCharCode(ascii);
    }
  }

  return answer;
}

console.log(solution("a B z", 4));
