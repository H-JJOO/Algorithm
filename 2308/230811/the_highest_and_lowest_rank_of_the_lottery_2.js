function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCnt = lottos.filter(v => win_nums.includes(v)).length;
  let zeroCnt = lottos.filter(v => !v).length;

  const maxCnt = minCnt + zeroCnt;

  return [rank[maxCnt], rank[minCnt]];
}