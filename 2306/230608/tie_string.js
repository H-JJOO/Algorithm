function solution(strArr) {
  let cnt = 0;

  let maxLength = 0;

  strArr.forEach((str) => {
    if (str.length > maxLength) {
      maxLength = str.length;
    }
  });

  let countArray = new Array(maxLength).fill(0);

  countArray.forEach((arr) => {
    if ()
  })

  cnt = Math.max(...countArray);

  return cnt;
}

solution(["a", "bc", "d", "efg", "hi"]);
