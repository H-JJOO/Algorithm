function solution(balls, share) {
  let answer = 1;
  for (let i = balls; i > balls - share; i--) {
    answer *= i;
  }
  for (let i = share; i > 0; i--) {
    answer /= i;
  }
  return Math.floor(answer);
}

console.log(solution(3, 2));

// 이 코드는 조합 문제를 해결하기 위한 코드입니다. 주어진 'balls' 개수의 공 중 'share' 개의 공을 선택하는 경우의 수를 구하는 문제입니다.

// 함수를 정의합니다: solution(balls, share)

// 매개 변수: balls(전체 공의 개수), share(선택할 공의 개수)
// 변수 'answer'를 1로 초기화합니다.

// 구할 조합의 경우의 수를 저장할 변수입니다.
// 첫 번째 반복문을 사용하여 조합의 분자를 계산합니다.

// 반복할 횟수: balls - share + 1
// 반복문 내에서 변수 'answer'에 i(현재 반복값)를 계속 곱합니다.
// 두 번째 반복문을 사용하여 조합의 분모를 계산합니다.

// 반복할 횟수: share
// 반복문 내에서 변수 'answer'에 i(현재 반복값)를 계속 나눕니다.
// 결과값 'answer'를 반환합니다.

// 계산된 경우의 수를 리턴합니다.