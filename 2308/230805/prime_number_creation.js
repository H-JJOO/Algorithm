function solution(nums) {
  let arr = [];

  let cnt = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        arr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  arr.forEach((num) => {
    let isPrime = true;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        isPrime = false;
      }
    }
    cnt += isPrime ? 1 : 0;
  });

  return cnt;
}

console.log(solution([1, 2, 7, 6, 4]));
