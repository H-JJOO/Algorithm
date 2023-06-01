function solution(arr) {
  let n = 1;

  while (n < arr.length) {
    n *= 2;
  }
  while (arr.length < n) {
    arr.push(0);
  }

  return arr;
}

