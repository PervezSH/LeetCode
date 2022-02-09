# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        # Using DFS
        if not root: return 0
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
        
        # Using BFS
        # # Handle edge case
        # if not root: return 0
        # # Queue for storing TreeNode value temporarily
        # queue = [root]
        # # Store level count
        # levelCount = 0
        # while len(queue):
        #     size = len(queue)
        #     # Store Node values of current level
        #     currentLevel = []
        #     while size:
        #         # Pull out first element from queue
        #         item = queue.pop(0)
        #         # Add left and right children into the queue
        #         if item.left: queue.append(item.left)
        #         if item.right: queue.append(item.right)
        #         size = size - 1
        #     # Increase level count
        #     levelCount = levelCount + 1
        # return levelCount