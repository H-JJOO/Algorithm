// 정수 배열 arr가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.

// 단, arr에 2가 없는 경우 [-1]을 return 합니다.

function solution(arr) {
  let left = 0;
  let right = 0;
  let minWindowSize = Infinity;
  let result = [-1];
  let countOfTwo = 0;

  for (let num of arr) {
    if (num === 2) {
      countOfTwo++;
    }
  }

  if (countOfTwo === 0) {
    return [-1];
  }

  let currentWindowCountOfTwo = 0;

  while (right < arr.length) {
    if (arr[right] === 2) {
      currentWindowCountOfTwo++;
    }

    while (currentWindowCountOfTwo === countOfTwo) {
      if (right - left + 1 < minWindowSize) {
        minWindowSize = right - left + 1;
        result = arr.slice(left, right + 1);
      }

      if (arr[left] === 2) {
        currentWindowCountOfTwo--;
      }

      left++;
    }

    right++;
  }

  return result;
}

console.log(solution([1, 2, 1, 2, 1, 10, 2, 1]));
