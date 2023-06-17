function solution(spell, dic) {
  const sortedSpell = spell.sort().join("");

  const sortedDic = dic.map((s) => s.split("").sort().join(""));

  return sortedDic.includes(sortedSpell) ? 1 : 2;
}

console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));
