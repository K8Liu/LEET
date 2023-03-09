/* 
Determine whether a target substring can be found within a string! 
No regex allowed! No string.prototype.includes or string.prototype.indexOf!

Your solution should have O(n * m) time-complexity where:
n is equal to the given string length
m is equal to the target substring length

I.e. in 'xztzcatbfbbq' find 'cat' 

Input: 'xztzcatbfbbq', 'cat'
Output: true

Input: 'finding a needle in a haystack', 'lein'
Output: false
*/

const { transpileModule } = require("typescript");


const needleInHaystack = (string, substring) => {
  let compare = '';
  let substringIndex = 0;

  for (let i=0; i<string.length; i++) {
    console.log(substringIndex);
    if (string[i] !== substring[substringIndex]) {
      compare = '';
      substringIndex = 0;
    }
    if (string[i] === substring[substringIndex]) {
      compare += string[i];
      if (substringIndex < substring.length) {
        substringIndex+=1;
      }
      if (compare === substring) return true;
    }
  }
  return false;
};

console.log(needleInHaystack('abcde', 'abc'));

/*
Extension: Now imagine the target substring and string both might have underscores '_'.
Treat '_'s as wildcards, or blank pieces in Scrabble - i.e., they can be any letter.

Input: '_ello_orld', 'helloworl_'
Output: true

Input: 'montana', '__o__'
Output: false
*/

const needleInHaystackWithWildcards = (string, substring) => {

};

module.exports = { needleInHaystack, needleInHaystackWithWildcards };