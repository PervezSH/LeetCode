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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true
    const leftHeight = maxDepth(root.left)
    const rightHeight = maxDepth(root.right)
    const balanced = Math.abs(leftHeight-rightHeight) <= 1
    return balanced && isBalanced(root.left) && isBalanced(root.right)
};

var maxDepth = function(root) {
    if (!root) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};