function solution(A, B) {
  let cnt = 0;

  let word = "";

  for (let i = 0; i < A.length; i++) {
    if (A == B) {
      break;
    }
    cnt++;
    for (let j = 0; j < A.length; j++) {
      word += A[A.length - 1 + cnt];
    }
  }

  console.log(cnt);

  console.log(word);

  return cnt;
}

solution("hello", "ohell");
