/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


const twoSum = function(nums, target) {
  const numIndexMap = {};

  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (numIndexMap.hasOwnProperty(complement)) {
          return [numIndexMap[complement], i];
      }
      numIndexMap[nums[i]] = i;
  }

  return [];
};