/*

Given an arbitrarily nested array of strings, and a target keyword strong,
return the number of times a keyword appears in a nested array of arrays.

keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0

*/

const keywordCount = (array, keyword) => {
  let count = 0
  if (!array[0]) return count;
  for (const el in array) {
    if (array[el] === keyword) count++;
    else {
      if (Array.isArray(array[el])) count += keywordCount(array[el], keyword, count);
    }
  }
  return count;
};

console.log(keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi'));

/*

Extension:

Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexiographical (alphabetic) order.

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']

*/

const keywordMode = array => {
  const countKey = {};
  
  const keyCounter = (arr) => {
    for (const el in arr) {
      if (!countKey[arr[el]]) countKey[arr[el]] += 1;
      if (countKey[arr[el]]) countKey[arr[el]] += 1; 
      else if (Array.isArray(arr[el])) keyCounter(arr[el], countKey);
    }
  }

  return keyCounter(array);
};

module.exports = {keywordCount, keywordMode};
