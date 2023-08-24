function solution(s) {
  var answer = [];

  // 1. 이진수에서 0 제거
  // 2. 0 제거한 이진수의 길이를 이진수로 변환
  // 3. 1 ~ 2 반복
  // 4. 1 ~ 3 반복한 횟수와 제거한 0의 개수를 배열에 담아 반환

  let arr = s.split("");

  let cnt = 0;

  let zeroCnt = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "0") {
      zeroCnt++;
    }
  }

  arr = arr.filter((num) => num !== "0");

  let len = arr.length;

  let x = 0;

  while (len !== 1) {
    let binary = len.toString(2);
    console.log(binary);

    console.log(len);

    let arr = binary.split("");

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "0") {
        zeroCnt++;
      }
    }

    if (binary === "10") {
      cnt
      break;
    }

    console.log(arr);

    len = binary.length;
    cnt++;
  }

  console.log(zeroCnt);

  console.log(arr);

  console.log(cnt);

  return answer;
}

console.log(solution("110010101001"));
