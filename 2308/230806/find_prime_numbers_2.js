// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

function solution(n) {
  let primeArr = Array.from({ length: n + 1 }, () => true); // 0 ~ n까지의 배열을 만들고 true로 초기화
  primeArr[0] = primeArr[1] = false; // 0, 1은 소수가 아니다.
  const limit = Math.sqrt(n); // n의 제곱근까지만 검사하면 된다.

  for (let i = 2; i <= limit; i++) {
    if (primeArr[i]) {
      for (let j = i * i; j <= n; j += i) {
        primeArr[j] = false;
      }
    }
  } // 소수가 아닌 수를 걸러내는 과정

  return primeArr.filter((v) => v).length; // 소수만 남긴 후 길이를 반환
}

console.log(solution(10));
