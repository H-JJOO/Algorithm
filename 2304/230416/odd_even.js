function solution(num_list) {
  let answer = [];

  let evenCnt = 0;

  let oddCnt = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      evenCnt++;
    } else if (num_list[i] % 2 === 1) {
      oddCnt++;
    }
  }

  answer.push(evenCnt);
  answer.push(oddCnt);

  return answer;
}

