//문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다. myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.

function solution(myString, pat) {
  let answer = 0;

  let arr_myString = myString.split("");

  let change_arr_myString = [];

  console.log(arr_myString);

  for (let i = 0; i < arr_myString.length; i++) {
    if (arr_myString[i] === "A") {
      change_arr_myString.push("B");
    } else if (arr_myString[i] === "B") {
      change_arr_myString.push("A");
    }
  }

  let change_myString = change_arr_myString.join("");

  if (change_myString.includes(pat)) {
    answer = 1;
  }

  return answer;
}

solution("ABBAA", "AABB");
