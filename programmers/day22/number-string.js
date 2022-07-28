// 숫자 문자열과 영단어

function solution(s) {
  let arr = [
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
  for (let i = 0; i < 10; i++) {
    while (s.includes(arr[i])) {
      s = s.replace(arr[i], i);
    }
  }
  return Number(s);
}
