/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/

const containsDuplicate = function(nums) {
  let dup = [];
  for (let i=0; i<nums.length; i++) {
    if (dup.includes(nums[i])) {
      return true;
    }
    dup.push(nums[i]);
  };
  return false;
};

// const countDuplicates = function(nums) {
//   let repeatCount = {};
//   for (let i=0; i<nums.length; i++) {
//     if (repeatCount.hasOwnProperty(nums[i])) {
//       repeatCount[nums[i]] += 1;
//     } else {
//       repeatCount[nums[i]] = 1;
//     }
//   }
//   return repeatCount;
// }

/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

---
Does not change array but modifies in place by utilizing *count* to keep track of index of unique nums, and *org* to be the index iterating over the "original" array.

https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
*/

const removeDuplicates = function(nums) {
  let count = 0;
  let org = 1;
  let result = [];

  while (org < nums.length) {
    if (nums[count] == nums[org]) {
      org++;
    } else {
      count++;
      nums[count] = nums[org];
      org++;
    }
  }

  result.push(count+1);
  result.push(nums.slice(0,count+1));
  return result;
}
