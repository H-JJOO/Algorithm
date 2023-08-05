function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  let arr = [];

  let cnt = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        arr.push(nums[i] + nums[j] + nums[k]);
        if (isPrime(nums[i] + nums[j] + nums[k])) cnt++;
      }
    }
  }
  return cnt;
}

console.log(solution([1, 2, 7, 6, 4]));
