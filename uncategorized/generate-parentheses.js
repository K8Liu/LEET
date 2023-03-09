/*

Given n pairs of parentheses, write a function to generate all combinations of
well-formed parentheses.

For example, given n = 2, a solution set is:

[
  "(())",
  "()()"
]

Given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

Given n = 0, a solution set is:

[
  ""
]

*/

const { resourceLimits } = require("worker_threads");

// const generateParentheses = n => {
//   const stack = [];
//   const res = [];

//   function track(open, close) {
//     if (open === n && close === n) {
//       res.push(stack.join(''));
//       return;
//     }
//     if (open < n) {
//       stack.push('(');
//       track(open + 1, close);
//       stack.pop();
//     }
//     if (close < open) {
//       stack.push(')');
//       track(open, close + 1);
//       stack.pop()
//     }
//   }
//   track(0,0);
//   return res;
// };

const generateParentheses = n => {
  const results = [];

  const generate = (str, l, r) => {
    if (r === 0) { 
      results.push(str);
      return;
    }
    if (l>0) generate(str + '(', l - 1, r);
    if (l<r) generate(str+')', l, r - 1);
  };
  generate('', n, n);
  return results;
}

module.exports = {generateParentheses};
