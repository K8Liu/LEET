/*

Given an array of numbers (integers), return the mode, that is, the number that
appears most often. If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8

*/

const mode = array => {
  if (array.length === 1) return array[0];

  const cache = {};

  for (const el in array) {
    if (!cache[array[el]]) cache[array[el]] = 1;
    else cache[array[el]] += 1;
  }

  console.log(cache);

  let biggestNum = 0;
  let highestCount = 0;

  for (const key in cache) {
    if (cache[key] > highestCount) {
      biggestNum = Number(key);
      highestCount = cache[key];
    }
    if (cache[key] === highestCount) {
      if (Number(key) > biggestNum) biggestNum = Number(key);
    }
  }
  return biggestNum;
};

console.log(mode([3, 2, 4, 3]));
console.log(mode([7, 5, 8, 8, 2, 5]));

/*
const mode = (array) => {
  const tally = {};
  let modeVal = -Infinity, maxCount = 0;

  array.forEach(val => {
    tally[val] = (tally[val] || 0) + 1;
    if (tally[val] > maxCount || (tally[val] === maxCount && val > modeVal)) {
      maxCount = tally[val];
      modeVal = val;
    }
  });

  return modeVal;
}

*/



/*

Extension:

Given an arbitrarily nested array of numbers (integers), return the mode, that
is, the number that appears most often. If there are multiple modes, use the max
of the modes.

Assume that at least one number is present in the nested array structure,
although some of the nested arrays may be empty.

e.g.
mode([[3], [2, [4]], 3]) -> 3
mode([7, [[5, [8], 8], 2, 5]]) -> 8
mode([4, []]) -> 4 

*/

const modeNested = array => {
  const cache = {};
  console.log(array.flat());
  console.log(array.toString().split(','))

};

console.log(modeNested([[3], [2, [4]], 3]));
console.log(modeNested([7, [[5, [8], 8], 2, 5]]));
console.log(modeNested([4, []]));

module.exports = {mode, modeNested};
