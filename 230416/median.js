function solution(array) {
  let sortedArray = array.sort((a, b) => a - b);

  let middleIndex = Math.floor(sortedArray.length / 2);

  return sortedArray[middleIndex];
}
