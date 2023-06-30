// 소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다. 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.

// 기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
// 두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.

// 정답

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function solution(a, b) {
  // 분수를 기약분수로 만듭니다.
  const divisor = gcd(a, b);
  a /= divisor;
  b /= divisor;

  // 분모의 소인수가 2와 5만으로 구성되어 있는지 확인합니다.
  while (b % 2 === 0) {
    b /= 2;
  }
  while (b % 5 === 0) {
    b /= 5;
  }

  // 분모가 1이면 유한소수이고, 그렇지 않으면 무한소수입니다.
  return b === 1 ? 1 : 2;
}

console.log(solution(11, 22));
