// 문자열 배열 strArr이 주어집니다. strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.

function solution(strArr) {
  const groups = {};

  strArr.forEach((str) => {
    const len = str.length;
    if (groups[len]) {
      groups[len]++;
    } else {
      groups[len] = 1;
    }
  });

  let maxGroupSize = 0;
  for (const groupSize in groups) {
    if (groups[groupSize] > maxGroupSize) {
      maxGroupSize = groups[groupSize];
    }
  }

  return maxGroupSize;
}

console.log(solution(["a", "bc", "d", "efg", "hi"]));
