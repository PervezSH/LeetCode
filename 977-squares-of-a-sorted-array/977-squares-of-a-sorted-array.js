/**
 * @param {number[]} nums
 * @return {number[]}
 */
// O(n) time | O (n) space
var sortedSquares = function(nums) {
    // declare squared array, initialized its value to 0
    const squaredArray = Array(nums.length).fill(0);
    // two pointer, left and right
    let left = 0;
    let right = nums.length - 1;
    for (let index = nums.length - 1; index >= 0; index--){
        const leftVal = nums[left];
        const rightVal = nums[right];
        if (Math.abs(leftVal) > Math.abs(rightVal)){
            // store square of leftVal, and increment left pointer
            squaredArray[index] = leftVal*leftVal;
            left++;
        }
        else{
            // store square of rightVal, and decrement right pointer
            squaredArray[index] = rightVal*rightVal;
            right--;
        }
    } 
    return squaredArray;
};