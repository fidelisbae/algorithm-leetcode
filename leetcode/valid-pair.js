// 20. Valid Parentheses
// Easy

// 13141

// 588

// Add to List

// Share
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function (s) {
  let stack = [];
  let pop;
  for (i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
      stack.push(s[i]);
    }
    if (s[i] === "}") {
      pop = stack.pop();
      if (pop === undefined || pop !== "{") {
        return false;
      }
    }
    if (s[i] === "]") {
      pop = stack.pop();
      if (pop === undefined || pop !== "[") {
        return false;
      }
    }
    if (s[i] === ")") {
      pop = stack.pop();
      if (pop === undefined || pop !== "(") {
        return false;
      }
    }
  }

  return stack.length === 0;
};
