function solution(name, yearning, photo) {
  return photo.map((group) =>
    group.reduce((acc, value) => {
      const score = yearning[name.indexOf(value)] || 0;
      return acc + score;
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
