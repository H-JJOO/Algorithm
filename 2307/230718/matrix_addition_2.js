function solution(arr1, arr2) {
  return arr1.map((a1, i) => a1.map((a2, j) => a2 + arr2[i][j]));
}

console.log(solution([[1], [2]], [[3], [4]]));
