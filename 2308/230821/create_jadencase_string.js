function solution(s) {
  const answer = s
    .split(" ")
    .map((word) =>
      word.replace(/\w/g, (t, idx) => {
        return idx === 0 ? t.toUpperCase() : t.toLowerCase();
      })
    )
    .join(" ");

  return answer;
}

console.log(solution("for the last week"));
