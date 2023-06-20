function solution(str_list) {
  let answer = [];

  const index_l = str_list.indexOf("l");

  const index_r = str_list.indexOf("r");

  if (index_l === 0 || index_r === 0 || index_l === -1 || index_r === -1) {
    return answer;
  }

  if (index_l < index_r) {
    for (let i = 0; i < index_l; i++) {
      answer.push(str_list[i]);
    }
  } else if (index_l > index_r) {
    for (let i = index_r + 1; i < str_list.length; i++) {
      answer.push(str_list[i]);
    }
  }

  return answer;
}

console.log(solution(["l"]));
