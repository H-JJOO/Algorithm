function solution(n) {
  let result = 0;

  let x = 0;

  while (x * x < n) {
    x++;
  }
  if (x * x === n) {
    x++;
    result = x * x;
  } else {
    result = -1;
  }
  return result;
}

console.log(solution(121));
