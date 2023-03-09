/*

Reverse and return an array in-place. Do not create a new array in memory.
Instead, modify the array as given. Do not use the array reverse method built in
to the array prototype while solving the problem.

*/

const reverseArray = array => {
  let n = array.length-1;

  for (let i=0; i<(n/2); i++) {
    let temp = array[i];
    array[i] = array[n-i];
    array[n-i] = temp; 
  }
  return array;
};

console.log(reverseArray([1,2,3,4,5,6,7]));

/*

Extension: (recommended to solve reverseArray first)

Given a string as a sentence "bob likes dogs alot" return the word reversal
"alot dogs likes bob". Do not use the array reverse method built in to the array
prototype.

The input string will always be a series of words separated by spaces between
them, with each word containing only lowercase letters and no punctuation. The
input string will always have at least one word

*/

const reverseSentence = sentence => {
  let split = sentence.split(" ");
  let n = split.length-1; 
  for (let i=0; i<(n/2); i++) {
    let temp = split[i];
    split[i] = split[n-i];
    split[n-i] = temp; 
  }
  return split.join(" ");
};

console.log(reverseSentence('bob likes dogs alot'))

module.exports = {reverseArray, reverseSentence};
