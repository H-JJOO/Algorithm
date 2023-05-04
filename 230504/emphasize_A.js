//문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.

function solution(myString) {
  let answer = "";

  let arr_myString = myString.split("");

  for (let i = 0; i < arr_myString.length; i++) {
    if (arr_myString[i] === "a") {
      answer += arr_myString[i].toUpperCase();
    } else if (arr_myString[i] === "A") {
      answer += arr_myString[i];
    } else {
      answer += arr_myString[i].toLowerCase();
    }
  }

  return answer;
}

solution("abstract algebra");
