# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        currentNode = head
        # While theres a list
        while currentNode:
            nextNode = currentNode.next
            while nextNode and currentNode.val == nextNode.val:
                nextNode = nextNode.next
            # Remove duplicate nodes
            currentNode.next = nextNode
            # Change current node
            currentNode = nextNode
        return head
                