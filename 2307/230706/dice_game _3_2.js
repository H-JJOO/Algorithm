// 1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.

// 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
// 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
// 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
// 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
// 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
// 네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

function solution(a, b, c, d) {
  let dice = [a, b, c, d];
  let counts = {};
  let score = 0;

  dice.forEach((num) => {
    if (counts[num] === undefined) {
      counts[num] = 1;
    } else {
      counts[num]++;
    }
  });

  let uniqueNumbers = Object.keys(counts);
  let countsArray = Object.values(counts);

  if (uniqueNumbers.length === 1) {
    score = 1111 * parseInt(uniqueNumbers[0]);
  } else if (countsArray.includes(3)) {
    let p = parseInt(uniqueNumbers[countsArray.indexOf(3)]);
    let q = parseInt(uniqueNumbers[countsArray.indexOf(1)]);
    score = (10 * p + q) * (10 * p + q);
  } else if (countsArray.every((count) => count === 2)) {
    let p = parseInt(uniqueNumbers[0]);
    let q = parseInt(uniqueNumbers[1]);
    score = (p + q) * Math.abs(p - q);
  } else if (countsArray.includes(2)) {
    let p = parseInt(uniqueNumbers[countsArray.indexOf(2)]);
    let q = parseInt(uniqueNumbers[countsArray.indexOf(1)]);
    let r = parseInt(uniqueNumbers[countsArray.lastIndexOf(1)]);
    score = q * r;
  } else {
    score = Math.min(...dice);
  }

  return score;
}

console.log(solution(4, 1, 4, 4));
