/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
  * @param {string} s
  * @return {boolean}

Note: For the purpose of this problem, we define empty string as valid palindrome.
*/

const isPalindrome = function(s) {
  const arr = s.toLowerCase().replace(/[^0-9a-z]/gi, '').split("");
  const mid = Math.floor(arr.length/2);

  if (s=="") {
    return true;
  };

  for (let i=0; i<mid; i++) {
    if (arr[i] != arr[arr.length-1-i]) {
      return false;
    }
  }
  return true;
};
