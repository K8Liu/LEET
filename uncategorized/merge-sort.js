/* 
  Given an array of integers, sort and return the array.
  The sorted integers should be in ascending order from left to right.
  Do not use the array sort method built in to the array prototype while solving the
  problem. 

  We will sort the array using a strategy called merge sort, which functions as follows:
  First, split the array by half until each array contains a single element.
  Then, compare each set of elements and combine them into a sorted pair.
  Next, compare sorted sets of elements and combine them in order to form a new sorted array.
  Continue this process until the entire array is sorted.

*/

const mergeSort = array => {
  if (array.length < 2) return array;
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let res = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } 
    else {
      res.push(right.shift());
    }
  }
  return [...res, ...left, ...right];
}

console.log(mergeSort([2, 5, 1, 3, 7]));

module.exports = { mergeSort };