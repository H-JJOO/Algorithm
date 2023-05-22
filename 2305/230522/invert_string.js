//문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, s, e) {
  // 인덱스 범위 확인
  if (s < 0 || e >= my_string.length || s > e) {
    return "유효하지 않은 인덱스 범위입니다.";
  }

  // 문자열을 배열로 변환
  let arr = my_string.split("");

  // 인덱스 s부터 e까지의 부분 문자열을 추출하여 뒤집기
  let reversed = arr.slice(s, e + 1).reverse();

  // 뒤집은 부분 문자열을 원래 문자열에 삽입
  arr.splice(s, reversed.length, ...reversed);

  // 결과 문자열 반환
  return arr.join("");
}

console.log(solution("Progra21Sremm3", 6, 12));
