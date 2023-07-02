function solution(numlist, n) {
  numlist.sort((a, b) => {
    const distA = Math.abs(a - n);
    const distB = Math.abs(b - n);

    if (distA === distB) {
      return b - a;
    } else {
      return distA - distB;
    }
  });

  return numlist;
}

console.log(solution([1, 2, 3, 4, 5, 6], 4));
