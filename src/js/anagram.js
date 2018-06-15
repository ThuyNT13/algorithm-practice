/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

// adds time complexity by adding sort function O(n) and split() O(n) so possibly O(n^2) or even  O(n^3) for join().

const isAnagram = function(s1, s2) {
  return (s1.split("").sort().join("") == s2.split("").sort().join("")) ? true : false;
}
