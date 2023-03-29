/**
 * @param {string} 
 * @return {boolean}
 */

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
// it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string str, return true if it is a 
// palindrome, or false otherwise.

const isPalindrome = function(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (!isAlphanumeric(str[left])) {
      left++;
      continue;
    }
    if (!isAlphanumeric(str[right])) {
      right--;
      continue;
    }
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

function isAlphanumeric(char) {
  return /^[a-z0-9]+$/i.test(char);
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));