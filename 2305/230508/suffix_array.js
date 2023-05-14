// 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
// 문자열 my_string이 매개변수로 주어질 때, my_string의 모든 접미사를 사전순으로 정렬한 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

// 1. 문자열의 각 인덱스에서 시작하는 부분 문자열을 순회하여 push

// 2. push 한 배열을 sort() 메소드를 사용하여 사전순 으로 정렬

function solution(my_string) {
  const answer = [];
  for (let i = 0; i < my_string.length; i++) {
    answer.push(my_string.slice(i));
  }
  answer.sort();

  console.log(answer);

  return answer;
}

solution("banana");
