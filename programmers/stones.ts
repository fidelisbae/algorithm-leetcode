// 징검다리

function solution(stones, k) {
  let count = 0;
  let zero = 0;
  while (true) {
    for (let i = 0; i < stones.length; i++) {
      if (stones[i] === 0) {
        zero = zero + 1;
        if (zero === k) {
          break;
        }
      }
      if (stones[i] !== 0) {
        zero = 0;
      }
    }
    if (zero === k) {
      break;
    }
    for (let i = 0; i < stones.length; i++) {
      if (stones[i] !== 0) {
        stones[i] = stones[i] - 1;
      }
    }
    count = count + 1;
  }

  return count;
}
