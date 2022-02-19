/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const diffDict = {};
    let count = 0;
    for (let num of nums){
        let diff_val = target - num;
        if (num in diffDict)
            return [diffDict[num], count];
        else
            diffDict[diff_val] = count;
        count++;
    }
    return []
};