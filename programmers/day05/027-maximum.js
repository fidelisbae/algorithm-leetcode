// 1. str을 스플릿으로 분해
// 2. 각 인덱스를 순차적으로 비교

function bigNum(str) {
  let biggest = 0;
  let num = str.split("");
  let max = 0;

  console.log(num);

  for (i = 0; i < num.length; i++) {
    if (Number(num[i]) >= max) {
      max = Number(num[i]);
    }
  }
  return max;
}

console.log(bigNum("2343247"));
