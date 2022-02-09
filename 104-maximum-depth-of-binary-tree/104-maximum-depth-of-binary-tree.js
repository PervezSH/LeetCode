/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // Using DFS
    // if (!root) return 0
    // return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
    
    // Using BFS
    // Handle edge case
    if (!root) return 0
    // Queue for storing TreeNode value temporarily
    const queue = [root]
    // Store Node values in level order
    let levelCount = 0
    while (queue.length){
        let size = queue.length
        while (size--){
            // Pull out first element from queue
            let item = queue.shift()
            // Add left and right children into the queue
            if (item.left) queue.push(item.left)
            if (item.right) queue.push(item.right)
        }
        // Append current level
        levelCount++
    }
    return levelCount
};