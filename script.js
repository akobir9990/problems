// leetcode
//                 PROBLEM - 1
// Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

//                       SOLVING OF PROBLEM

// let twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

//                        END

//                        PROBLEM - 2


// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

//                        SOLVING OF PROBLEM
let num1 = [2, 4, 3],
  num2 = [5, 6, 4];

function addTwoNumbers(num1, num2) {
  let res = 0;
  let firstNum = 0;
  let secondNum = 0;
  for (let i = 0, j = num1.length - 1; i < num1.length, j >= 0; i++, j--) {
    firstNum += 10 ** i * num1[j];
  }
  for (let i = 0, j = num2.length - 1; i < num2.length, j >= 0; i++, j--) {
    secondNum += 10 ** i * num2[j];
  }
  res = firstNum + secondNum;
  return console.log(res);
}
addTwoNumbers(num1, num2);
