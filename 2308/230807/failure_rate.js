// 이해 못함 복습

function solution(N, stages) {
  let stageFailures = [];

  for (let stage = 1; stage <= N; stage++) {
    let playersAtStage = stages.filter(
      (playerStage) => playerStage === stage
    ).length;
    let playersReachedStage = stages.filter(
      (playerStage) => playerStage >= stage
    ).length;

    let failureRate = playersAtStage / playersReachedStage;
    stageFailures.push({ stage, failureRate });
  }

  stageFailures.sort(
    (a, b) => b.failureRate - a.failureRate || a.stage - b.stage
  );

  return stageFailures.map((stageFailure) => stageFailure.stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
