function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    for (let j = start; j <= end; j++) {
      arr[j]++;
    }
  }
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ]
  )
);
