//머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
  let answer = 0;

  console.log(String(array).split(""));

  let arr = String(array).split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "7") {
      answer++;
    }
  }

  return answer;
}

solution([10, 29]);
