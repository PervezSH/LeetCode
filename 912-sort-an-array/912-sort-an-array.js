/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    return mergeSort(nums)
};

var mergeSort = function(nums) {
    // Split the array into sub-array untill its length is 1
    if (nums.length <= 1) return nums

    // Get the mid point to split array into half
    let mid = Math.floor(nums.length / 2)
    // Left sub-array
    let leftArray = nums.slice(0, mid)
    // Right sub-array
    let rightArray = nums.slice(mid)

    // Call recursively
    leftArray = mergeSort(leftArray)
    rightArray = mergeSort(rightArray)

    // Empty block to store sorted sub-array
    let block = []
    // Left pointer
    let l = 0
    // Right Pointer
    let r = 0

    // Compare and push to block
    while (l < leftArray.length && r < rightArray.length){
        if (leftArray[l] < rightArray[r]){
            block.push(leftArray[l])
            l++
        }
        else{
            block.push(rightArray[r])
            r++
        }
    }
    // Push remaining
    if (l < leftArray.length) block = block.concat(leftArray.slice(l))
    if (r < rightArray.length) block = block.concat(rightArray.slice(r))

    return block
};