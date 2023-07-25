function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < numbers.length; i++) {
    let arr = s.split(numbers[i]);
    console.log("arr: ", arr);
    s = arr.join(i);
    console.log("s: ", s);
  }

  console.log(s);

  return Number(s);
}

console.log(solution("23four5six7"));
