function solution(money) {
  let answer = [];

  let coffeeCnt = Math.floor(money / 5500);

  let change = money % 5500;

  answer.push(coffeeCnt, change);

  return answer;
}

solution(10000);
