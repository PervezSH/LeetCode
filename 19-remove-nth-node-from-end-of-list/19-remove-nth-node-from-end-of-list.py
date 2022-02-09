# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        # Measure length
        on = head
        length = 1
        while on:
            length = length + 1
            on = on.next
        # Point arount to delete the node
        leftIndex = length - n - 1
        # Handle head delete
        if leftIndex == 0:
            return head.next
        on = head
        while leftIndex > 1:
            on = on.next
            leftIndex = leftIndex - 1
        on.next = on.next.next
        return head