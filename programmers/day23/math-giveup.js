// 모의고사
// 문제 설명
// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

function solution(answers) {
  let first = [1, 2, 3, 4, 5];
  let count1 = 0;
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let count2 = 0;
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count3 = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === first[i % 5]) {
      count1++;
    }
    if (answers[i] === second[i % 8]) {
      count2++;
    }
    if (answers[i] === third[i % 10]) {
      count3++;
    }
  }
  if (count1 === count2 && count2 === count3) {
    return [1, 2, 3];
  } else if (count1 > count2 && count1 > count3) {
    return [1];
  } else if (count2 > count3 && count2 > count1) {
    return [2];
  } else if (count3 > count1 && count3 > count2) {
    return [3];
  } else if (count1 > count2 && count1 === count3) {
    return [1, 3];
  } else if (count1 > count3 && count1 === count2) {
    return [1, 2];
  } else if (count2 > count1 && count3 === count2) {
    return [2, 3];
  }
}
