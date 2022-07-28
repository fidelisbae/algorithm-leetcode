// 기능 개발

function solution(progresses, speeds) {
  let day = 0;
  for (let i = 0; i < progresses.length; i++) {
    let progress = Math.ceil((100 - progresses[i]) / speeds[i]);
  }
}
