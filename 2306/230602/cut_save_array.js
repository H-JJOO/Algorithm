//문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
  let answer = [];

  let arr_my_str = my_str.split("");

  let cnt = 0;

  for (let i = 0; i < arr_my_str.length; i++) {
    if (cnt < n) {
      answer.push(arr_my_str[i]);
      cnt++;
    } else {
      answer.push(",");
      answer.push(arr_my_str[i]);
      cnt = 1;
    }
  }

  return answer.join("").split(",");
}

console.log(solution("abcdef123", 3));


