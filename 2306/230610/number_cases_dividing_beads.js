function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

function combination(balls, share) {
  return factorial(balls) / (factorial(share) * factorial(balls - share));
}

function solution(balls, share) {
  return combination(balls, share);
}

console.log(solution(5, 3));
