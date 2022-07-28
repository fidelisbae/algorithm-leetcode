var climbStairs = function (n) {
  let answer = 0;
  let half = Math.floor(n / 2);
  function factorial(number) {
    if (number === 0) {
      return 1;
    }
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result = result * i;
    }
    return result;
  }
  for (let i = 0; i <= half; i++) {
    answer = answer + factorial(n - i) / factorial(n - i - i) / factorial(i);
  }
  return answer;
};
