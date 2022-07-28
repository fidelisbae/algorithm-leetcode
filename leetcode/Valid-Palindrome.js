// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let valid = "";
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i].charCodeAt() > 47 && s[i].charCodeAt() < 58) ||
      (s[i].charCodeAt() > 64 && s[i].charCodeAt() < 91) ||
      (s[i].charCodeAt() > 96 && s[i].charCodeAt() < 123)
    ) {
      valid = valid + s[i];
    }
  }
  valid = valid.toLowerCase();
  for (i = 0; i < valid.length; i++) {
    if (valid[i] !== valid[valid.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
let s = "A man, a plan, a canal: Panama";
isPalindrome(s);
