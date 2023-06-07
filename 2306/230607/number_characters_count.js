//알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때, my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수, my_string에서 'a'의 개수, my_string에서 'b'의 개수,..., my_string에서 'z'의 개수를 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string) {
  let countArray = new Array(52).fill(0);

  for (let i = 0; i < my_string.length; i++) {
    let char = my_string.charCodeAt(i);
    if (65 <= char && char <= 90) {
      // 대문자인 경우
      countArray[char - 65]++;
    } else if (97 <= char && char <= 122) {
      // 소문자인 경우
      countArray[char - 97 + 26]++;
    }
  }

  return countArray;
}

console.log(solution("Programmers"));
