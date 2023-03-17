/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Given an integer array nums, return true if any value 
// appears at least twice in the array, and return false if every element is distinct.

const containsDuplicate = function(nums) {
  if (nums.length < 2) return false;
  const numsSet = new Set();

  for (const el of nums) {
    if (numsSet.has(el)) {
      return true;
    }
    numsSet.add(el);
  }
  return false;
};

console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,2,3,1]));