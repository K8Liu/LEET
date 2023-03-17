/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word 
// or phrase, typically using all the original letters exactly once.

const isAnagram = function(s, t) {
    s = s.normalize();
    t = t.normalize();
    if (s.length !== t.length) return false;

    const charMap = {};

    for (const char of s) {
      charMap[char] = (charMap[char] || 0) + 1;
    }

    for (const char of t) {
      if (!charMap[char]) return false;
      charMap[char]--;
    }
    return true;
};

console.log(isAnagram("hello", "ehllo"));
console.log(isAnagram("hello", "ehllp"));