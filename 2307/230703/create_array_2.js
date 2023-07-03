// 정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

// 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.

function solution(l, r) {
  let answer = [];

  let num = l;

  while (num <= r) {
    if (
      !String(num).includes("1") &&
      !String(num).includes("2") &&
      !String(num).includes("3") &&
      !String(num).includes("4") &&
      !String(num).includes("6") &&
      !String(num).includes("7") &&
      !String(num).includes("8") &&
      !String(num).includes("9")
    ) {
      answer.push(num);
    }
    num++;
  }

  return answer.length === 0 ? [-1] : answer;
}

console.log(solution(5, 555));
