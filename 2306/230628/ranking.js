//영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(score) {
  let rank = [];

  let average = [];

  for (let i = 0; i < score.length; i++) {
    average.push((score[i][0] + score[i][1]) / 2);
  }

  //내림차순
  const sortAverage = [...average].sort((a, b) => b - a);

  rank = average.map((v) => sortAverage.indexOf(v) + 1);

  return rank;
}

solution([
  [80, 70],
  [90, 50],
  [40, 70],
  [50, 80],
]);
