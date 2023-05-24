//문자열 myString과 pat가 주어집니다. myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.

function solution(myString, pat) {
  let maxLength = 0;
  let answer = "";

  for (let i = 0; i < myString.length; i++) {
    for (let j = i + 1; j <= myString.length; j++) {
      const substring = myString.substring(i, j);
      if (substring.endsWith(pat) && substring.length > maxLength) {
        maxLength = substring.length;
        answer = substring;
      }
    }
  }

  return answer;
}

console.log(solution("AAAAaaaa", "a"));
