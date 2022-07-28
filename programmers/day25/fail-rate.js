// 실패율
// for문을 돌면서 도달한 사람 수 배열과 막힌 사람 수 배열을 만든다
// 실패율 배열을 만든다 실패율 배열의 길이는 스테이지수와 같다
// 실패율 배열과 스테이지 넘버를 맵으로 연결한다
// 정렬한다
function solution(N, stages) {
  let totalCount;
  let failCount;
  let total = [];
  let fail = [];
  let rate = [];
  for (let i = 1; i <= N; i++) {
    totalCount = 0;
    failCount = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] >= i) {
        totalCount++;
      }
      if (stages[j] === i) {
        failCount++;
      }
    }
    fail.push(failCount);
    total.push(totalCount);
  }
  for (let i = 0; i < N; i++) {
    rate.push([i + 1, fail[i] / total[i]]);
  }
  let tem;
  for (let i = 0; i < rate.length; i++) {
    for (let j = i + 1; j < rate.length; j++) {
      if (rate[i][1] <= rate[j][1]) {
        tem = rate[i];
        rate[i] = rate[j];
        rate[j] = tem;
      }
    }
  }
  for (let i = 0; i < rate.length; i++) {
    for (let j = i + 1; j < rate.length; j++) {
      if (rate[i][1] === rate[j][1]) {
        tem = rate[i];
        rate[i] = rate[j];
        rate[j] = tem;
      }
    }
  }
  let answer = [];
  for (let i = 0; i < rate.length; i++) {
    answer.push(rate[i][0]);
  }
  console.log(answer);
  return answer;
}
