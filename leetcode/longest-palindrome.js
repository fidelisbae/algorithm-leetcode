/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let count = new Map();
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (!count.has(s[i])) {
      count.set(s[i], 1);
    } else {
      count.set(s[i], count.get(s[i]) + 1);
    }
  }
  for (const x of count.values()) {
    if (x % 2 === 0) {
      answer = answer + x;
    } else {
      answer = answer + x - 1;
    }
  }
  if (answer === s.length) {
    return answer;
  } else {
    return answer + 1;
  }
};
