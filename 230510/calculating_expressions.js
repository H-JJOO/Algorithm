function solution(binomial) {
  const s = binomial.split(" ");
  const num1 = Number(s[0]);
  const num2 = Number(s[2]);

  switch (s[1]) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}

solution("43 + 12");
