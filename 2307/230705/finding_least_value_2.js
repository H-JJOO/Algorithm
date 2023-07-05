function solution(array) {
  let counts = {};

  for (let num of array) {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }

  let mode = null;
  let maxCount = 0;
  let multipleModes = false;

  for (let key in counts) {
    if (counts[key] > maxCount) {
      mode = Number(key);
      maxCount = counts[key];
      multipleModes = false;
    } else if (counts[key] === maxCount) {
      multipleModes = true;
    }
  }

  if (multipleModes) {
    return -1;
  }
  return mode;
}

console.log(solution([1]));
