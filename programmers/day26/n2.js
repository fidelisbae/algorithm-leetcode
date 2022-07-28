function solution(s) {
  let tem = "";
  let answer = 0;
  while (answer !== 1) {
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "1") {
        tem = tem + s[i];
      }
    }
    answer = tem.tem;
    answer.toString(2);
  }
  return answer;
}
