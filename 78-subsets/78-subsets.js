/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // Time Complexity: O(n*2^n)
    // Space Complexity O(2^n)
    const queue = [[]];
    // Iterate through nums
    for (let num of nums){
        // Make a copy of queue and iterate through
        for (let curr of [...queue]){
            // Append modified set into the queue
            queue.push([...curr, num]);
        }
    }
    return queue;
};