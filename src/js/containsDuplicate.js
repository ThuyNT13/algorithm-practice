/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/

const containsDuplicate = function(nums) {
  let dup = [];
  for (let i=0; i<nums.length; i++) {
    if (dup.includes(nums[i])) {
      return true;
    } else {
      dup.push(nums[i]);
    };
  };
  return false;
};
