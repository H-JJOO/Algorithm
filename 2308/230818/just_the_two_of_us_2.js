function solution(s, skip, index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .filter((c) => !skip.includes(c)); // skip에 포함되는 알파벳은 s에 포함되지 않는다.
  return s
    .split("")
    .map((c) => alphabet[(alphabet.indexOf(c) + index) % alphabet.length])
    .join(""); // index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아간다.
}

console.log(solution("aukks", "wbqd", 5));
