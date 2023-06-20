function solution(str_list) {
  let l_index = str_list.indexOf("l");
  let r_index = str_list.indexOf("l");

  // let l_index = str_list.findIndex((el) => el === "l");
  // let r_index = str_list.findIndex((el) => el === "r");

  if (l_index !== -1 && (l_index < r_index || r_index === -1)) {
    return str_list.slice(0, l_index);
  } else if (r_index !== -1 && (r_index < l_index || l_index === -1)) {
    return str_list.slice(r_index + 1);
  } else {
    return [];
  }
}

console.log(solution(["u", "u", "l", "r"]));
