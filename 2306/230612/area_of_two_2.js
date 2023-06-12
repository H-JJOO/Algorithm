function solution(arr) {
  let answer = [];

  const start = arr.indexOf(2);
  const end = arr.lastIndexOf(2);

  console.log(start, end);

  console.log(arr.slice(start, end + 1));

  answer = start === -1 ? [-1] : arr.slice(start, end + 1);

  return answer;
}

console.log(solution([1, 2, 1, 2, 1, 10, 2, 1]));
