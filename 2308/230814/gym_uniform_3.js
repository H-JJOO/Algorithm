function solution(n, lost, reserve) {
  return (
    n -
    lost.filter((a) => { // lost 중에서
      const b = reserve.find((r) => Math.abs(r - a) <= 1); // reserve 중에서
      if (!b) return true; // 없으면 lost에서 제외
      reserve = reserve.filter((r) => r !== b); // 있으면 reserve에서 제외
    }).length // lost의 길이를 리턴
  );
}

console.log(solution(5, [2, 4], [3]));
