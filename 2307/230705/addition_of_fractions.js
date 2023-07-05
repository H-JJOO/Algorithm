//첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// denmo = 분모, numer = 분자
function solution(numer1, denom1, numer2, denom2) {
  let denom = denom1 * denom2;

  let numer = numer1 * denom2 + numer2 * denom1;

  function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  }

  return [numer / gcd(numer, denom), denom / gcd(numer, denom)];
}

console.log(solution(9, 2, 1, 3));

1 / 2 + 3 / 4;
