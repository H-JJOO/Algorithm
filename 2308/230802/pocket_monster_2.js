function solution(nums) {
  const take = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > take ? take : arr.length;
}

console.log(solution([3, 3, 3, 2, 2, 4]));

