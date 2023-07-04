function solution(polynomial) {
  let arr = polynomial.split("+");

  let x_cnt = 0;

  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("x")) {
      console.log(arr[i].split("x")[0]);
      console.log(typeof arr[i].split("x")[0]);
      if (arr[i].split("x")[0] === " " || arr[i].split("x")[0] === "") {
        x_cnt += 1;
      }

      x_cnt += Number(arr[i].split("x")[0]);
    } else {
      cnt += Number(arr[i]);
    }
  }

  if (x_cnt === 1) {
    x_cnt = "";
  }

  if (x_cnt === 0) {
    return cnt.toString();
  } else if (cnt === 0) {
    return (x_cnt + "x").toString();
  } else if (x_cnt !== 0 && cnt !== 0) {
    return (x_cnt + "x" + " + " + cnt).toString();
  }
}

console.log(solution("1"));
