function solution(name, yearning, photo) {
  return photo.map((group) =>
    group.reduce((acc, val) => {
      const yearnScore = yearning[name.indexOf(val)] || 0;
      return acc + yearnScore;
    }, 0)
  );
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
