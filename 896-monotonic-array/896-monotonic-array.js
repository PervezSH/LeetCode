/**
 * @param {number[]} nums
 * @return {boolean}
 */
// O(n) time | O(1) space
var isMonotonic = function(nums) {
    // handle edge case
    if (nums.length <= 2) return true;
    // determine whether the array is decreasing or increasing
    let dir = nums[1] - nums[0];
    let startIdx = 2;
    for (let i = 2; i < nums.length; i++){
        if (dir !== 0) break
        dir = nums[i] - nums[i - 1]
        startIdx = i
    }
    // check for the entire array
    for (let i = startIdx; i < nums.length; i++){
        if (dir > 0 && !(nums[i] >= nums[i-1])) return false
        if (dir < 0 && !(nums[i] <= nums[i-1])) return false
    }
    return true
};