/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// DFS
// O(n*n!) time | O(n*n!) space
var permute = function(nums) {
    // Store all possible permutations
    let permutations = [];
    permuteHelper(nums, [], permutations);
    return permutations;
};

var permuteHelper = function(nums, perm, permutations){
    if (nums.length == 0){
        // This means perm is ready to append
        permutations.push(perm.slice());
    }
    else{
        // For each items in nums
        for (let i = 0; i < nums.length; i++){
            // Recursively call permuteHelper, after
            // removing item from nums, and
            // adding removed item to perm
            permuteHelper(nums.slice(0, i).concat(nums.slice(i + 1)), perm.concat([nums[i]]), permutations);
        }
    }
}