/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

const balancedParens = input => {
  const parensKey = {
    '(': ')'
  };
  const parensCache = {
    '(': 0
  };

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') parensCache[input[i]] += 1;
    console.log(input[i])
    console.log(parensKey[input[i]])
    if (input[i] === parensKey[input[i]]) parensCache[input[i]] -= 1;
    console.log(parensCache)
  }
  for (const key in parensCache) {
    if (parensCache[key] !== 0) return false
  }
  return true;
};

console.log(balancedParens('('));
console.log(balancedParens('()'));
// console.log(balancedParens(')('));
// console.log(balancedParens('(())'));
// console.log(balancedParens('[](){}'));
// console.log(balancedParens('[({})]'));
// console.log(balancedParens('[(]{)}'));

module.exports = { balancedParens} ;
