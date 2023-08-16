function solution(s) {
  let count = 0;
  let idx = 0;

  while (idx < s.length) {
    let xCount = 0;
    let notXCount = 0;
    let x = s[idx];

    for (let i = idx; i < s.length; i++) {
      if (s[i] === x) {
        xCount++;
      } else {
        notXCount++;
      }

      if (xCount === notXCount) {
        count++;
        idx = i + 1;
        break;
      }
    }

    // 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없는 경우
    if (xCount !== notXCount) {
      count++;
      break;
    }
  }

  return count;
}

console.log(solution("aaabbaccccabba"));
