function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    let result = -1;
    for (let i = s; i <= e; i += 1) {
      const v = arr[i];
      if (v <= k) continue;
      result = result === -1 ? v : Math.min(result, v);
    }
    return result;
  });
}

solution(
  [0, 1, 2, 4, 3],
  [
    [0, 4, 2],
    [0, 3, 2],
    [0, 2, 2],
  ]
);
