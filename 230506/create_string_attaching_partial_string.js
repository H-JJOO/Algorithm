//길이가 같은 문자열 배열 my_strings와 이차원 정수 배열 parts가 매개변수로 주어집니다. parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다. 각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_strings, parts) {
  var answer = "";

  for (let i = 0; i < my_strings.length; i++) {
    let str = my_strings[i];

    answer += str.substring(parts[i][0], parts[i][1] + 1);
  }

  console.log(answer);

  return answer;
}

solution(
  ["progressive", "hamburger", "hammer", "ahocorasick"],
  [
    [0, 4],
    [1, 2],
    [3, 5],
    [7, 7],
  ]
);


const str = "Hello, world!";
const substr1 = str.substring(0, 5); // "Hello"
const substr2 = str.substring(7); // "world!"
