/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 * @see: Permutations: https://stattrek.com/statistics/dictionary.aspx?definition=permutation
 * @see: Palindromes: https://examples.yourdictionary.com/palindrome-examples.html
 *
 * In terms of time complexity, see if you can solve this in O(n) / linear time.
 * 
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 * Hint: Think about the length of the string and how that relates to the frequencies of the characters
 */

const permPalin = str => {
  if (typeof str !== 'string') return false;
  const charMap = {};
  const normStr = str.toLowerCase();

  for (let i = 0; i < normStr.length; i ++) {
    const char = normStr[i];

    if (char !== " ") {
      charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    }
  }
  let hasFoundOddFreq = false;

  for (let char in charMap) {
    const freq = charMap[char];

    if (freq % 2 !== 0) {
      if (hasFoundOddFreq) {
        return false;
      } else {
        hasFoundOddFreq = true;
      }
    } 
  }
  return true;
};

/* 
 * Extension: Solve in constant space complexity.
 */
const permPalinAdvanced = str => {

};

module.exports = { permPalin };