function solution(arr) {
  let answer = 0;

  for (const x of arr) {
    answer += x;
  }

  return answer / arr.length;
}

console.log(solution([5, 5]));
