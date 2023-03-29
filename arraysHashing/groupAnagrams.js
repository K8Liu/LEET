/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


const groupAnagrams = function(strs) {
  const anagrams = {};

  for (const s of strs) {
      // Sort the string and use it as a key
      const key = s.split('').sort().join('');

      // If the key is not in the dictionary, initialize an empty array
      if (!anagrams.hasOwnProperty(key)) {
          anagrams[key] = [];
      }

      // Append the original string to the array associated with the key
      anagrams[key].push(s);
  }

  // Return the values in the dictionary as an array of arrays
  return Object.values(anagrams);
};