// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (s[i] === t[j]) {
        t = t.replace(s[i], "");
        break;
      }
    }
  }
  if (t.length === 0) {
    return true;
  } else {
    return false;
  }
};
