// 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.

// 10진법 : 1, 3x 마을에서 쓰는 숫자 : 1
// 10진법 : 2, 3x 마을에서 쓰는 숫자 : 1
// 10진법 : 3, 3x 마을에서 쓰는 숫자 : 4
// 10진법 : 4, 3x 마을에서 쓰는 숫자 : 5
// 10진법 : 5, 3x 마을에서 쓰는 숫자 : 7
// 10진법 : 6, 3x 마을에서 쓰는 숫자 : 8
// 10진법 : 7, 3x 마을에서 쓰는 숫자 : 10
// 10진법 : 8, 3x 마을에서 쓰는 숫자 : 11
// 10진법 : 9, 3x 마을에서 쓰는 숫자 : 14
// 10진법 : 10, 3x 마을에서 쓰는 숫자 : 16

// 정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  let num = 0;
  let x_num = 0;

  while (num !== n) {
    num++;
    x_num++;
    if (x_num % 3 === 0) {
      x_num++;
    }
    if (String(x_num).includes("3")) {
      x_num++;
      if (x_num % 3 === 0) {
        x_num++;
      }
      if (String(x_num).includes("3")) {
        while (String(x_num).includes("3")) {
          x_num++;
        }
      }
    }
  }

  return x_num;
}

solution(40);
