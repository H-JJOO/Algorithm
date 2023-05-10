function solution(myString) {
  let answer = [];

  const myString_arr = myString.split("");

  for (let i = 0; i < myString_arr.length; i++) {
    let asciiCode = myString.charCodeAt(i);
    if (asciiCode > 108) {
      answer.push(myString_arr[i]);
    } else {
      answer.push("l");
    }
  }

  answer = answer.join("");

  return answer;
}

solution("jjnnllkkmm");
