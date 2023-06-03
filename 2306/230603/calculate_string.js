function solution(my_string) {
  // 문자열을 공백을 기준으로 나눠 배열로 변환합니다.
  const arr = my_string.split(" ");

  // 첫 번째 숫자를 초기 결과값으로 설정합니다.
  let result = parseInt(arr[0]);

  // 배열의 요소를 순회하며 연산을 수행합니다.
  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] === "+") {
      result += parseInt(arr[i + 1]);
    } else if (arr[i] === "-") {
      result -= parseInt(arr[i + 1]);
    }
  }

  return result;
}

console.log(solution("3 + 4 + 1"));
