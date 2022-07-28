// 3진법 뒤집기

function solution(n) {
  var answer = 0;
  let reverse = "";
  n = n.toString(3);
  for (let i = n.length - 1; i >= 0; i--) {
    reverse = reverse + n[i];
  }
  reverse = parseInt(reverse, 3);
  answer = reverse;
  return answer;
}
