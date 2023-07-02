function solution(numlist, n) {
  let answer = [];

  let dist = [];

  for (let i = 0; i < numlist.length; i++) {
    dist.push(Math.abs(n - numlist[i]));
  }

  console.log(dist);

  for (let i = 0; i < dist.length; i++) {
    console.log(numlist[dist[i]]);
  }

  console.log(answer);

  return answer;
}

solution([1, 2, 3, 4, 5, 6], 4);
