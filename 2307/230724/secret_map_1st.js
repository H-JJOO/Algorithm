function solution(n, arr1, arr2) {
  let answer = [];

  let r_answer = [];

  let binArr1 = [];
  let binArr2 = [];

  for (let i = 0; i < arr1.length; i++) {
    binArr1.push(
      "0".repeat(n - arr1[i].toString(2).length) + arr1[i].toString(2)
    );
  }

  for (let i = 0; i < arr2.length; i++) {
    binArr2.push(
      "0".repeat(n - arr2[i].toString(2).length) + arr2[i].toString(2)
    );
  }

  console.log(binArr1, binArr2);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (binArr1[i][j] === "1" || binArr2[i][j] === "1") {
        answer.push("#");
      } else {
        answer.push(" ");
      }
    }
  }

  for (let i = 0; i < n; i++) {
    r_answer.push(answer.splice(0, n).join(""));
  }

  return r_answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
