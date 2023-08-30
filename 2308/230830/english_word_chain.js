function solution(n, words) {
  var answer = [];

  const wordSet = new Set(); // 중복 체크
  let prevWord = words[0]; // 이전 단어
  wordSet.add(prevWord); // 첫 단어 추가

  for (let i = 1; i < words.length; i++) {
    const word = words[i]; // 현재 단어

    if (wordSet.has(word) || prevWord[prevWord.length - 1] !== word[0]) {
      // 중복이거나 이전 단어의 마지막 글자와 현재 단어의 첫 글자가 다르면
      answer.push((i % n) + 1); // 번호
      answer.push(Math.floor(i / n) + 1); // 차례
      break;
    }

    wordSet.add(word); // 중복이 아니면 추가
    prevWord = word; // 이전 단어 갱신
  }

  return answer[0] === undefined ? [0, 0] : answer;
}

console.log(
  solution(5, [
    [
      "hello",
      "observe",
      "effect",
      "take",
      "either",
      "recognize",
      "encourage",
      "ensure",
      "establish",
      "hang",
      "gather",
      "refer",
      "reference",
      "estimate",
      "executive",
    ],
  ])
);
