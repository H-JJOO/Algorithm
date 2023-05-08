//약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  let count = 0;

  for (let i = 2; i <= n; i++) {
    let divCnt = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        divCnt++;
      }
    }
    if (divCnt >= 3) {
      count++;
    }
  }
  console.log(count);

  return count;
}

solution(10);
