// PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(spell, dic) {
  // spell에 담긴 알파벳을 정렬해서 하나의 문자열로 합치기
  const sortedSpell = spell.sort().join("");

  for (let word of dic) {
    // 외계어 사전의 단어를 정렬해서 하나의 문자열로 합치기
    const sortedWord = word.split("").sort().join("");

    // 정렬된 spell과 정렬된 외계어 사전의 단어가 같다면 1 반환
    if (sortedSpell === sortedWord) {
      return 1;
    }
  }

  // 반복이 끝나고도 단어를 찾지 못한 경우 2 반환
  return 2;
}

console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));
