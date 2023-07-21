function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  sizes.forEach(([width, height]) => {
    const maxLength = Math.max(width, height);
    const minLength = Math.min(width, height);

    maxWidth = Math.max(maxWidth, maxLength);
    maxHeight = Math.max(maxHeight, minLength);
  });

  return maxWidth * maxHeight;
}

console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
