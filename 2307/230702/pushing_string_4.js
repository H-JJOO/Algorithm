let solution = (a, b) => {
  // 문자열 b를 두 번 연결한 새로운 문자열을 생성합니다.
  let concatenatedB = b + b;

  // indexOf를 사용하여 연결된 문자열에서 문자열 a의 위치를 찾습니다.
  // a가 b를 회전시켜 생성할 수 있는 경우, 위치 값은 a를 회전시킨 횟수와 같습니다.
  let indexOfA = concatenatedB.indexOf(a);

  // indexOf 값이 -1이면 문자열 a로 b를 생성할 수 없습니다.
  // 그렇지 않다면 indexOf 값을 반환하고, 회전해야 할 최소 횟수를 알려줍니다.
  return indexOfA;
};

console.log(solution("hello", "ohell")); // 1
