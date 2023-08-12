function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/; // \1은 앞의 그룹과 동일한 문자열을 의미
  const regexp2 = /^(aya|ye|woo|ma)+$/; // ^는 문자열의 시작, $는 문자열의 끝을 의미

  return babbling.reduce( // reduce는 배열의 각 요소에 대해 주어진 reducer 함수를 실행하고, 하나의 결과값을 반환
    (cnt, word) => (!regexp1.test(word) && regexp2.test(word) ? ++cnt : cnt),
    0
  );
}

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
