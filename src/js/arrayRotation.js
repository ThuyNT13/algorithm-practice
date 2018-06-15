/*
Given an array, rotate the array to the right by k steps, where k is non-negative.
* @param {number[]} nums
* @param {number} k
* @return {void} Do not return anything, modify nums in-place instead.

- Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
- Could you do it in-place with O(1) extra space?
*/

const rotateRight = function(nums, k) {
  for (let i=0; i<k; i++) {
    let store = nums.pop();
    nums.unshift(store);
  }
  return nums;
};
