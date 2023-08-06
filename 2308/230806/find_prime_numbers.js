// 효율성 실패
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n) {
  var cnt = 0;
  for (let i = 2; i <= n; i++) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (i) {
      }
    }
  }
  return cnt;
}

console.log(solution(10));
