# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    # O(n) time | O(1) space
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Set on pointer to head
        on = head
        # While theres a list
        while on:
            if not on.next: break
            # Store current listnode value in temp
            temp = on.val
            # Update current listnode value
            on.val = on.next.val
            # Update adjacent listnode value
            on.next.val = temp
            # Advance current listnode twice
            on = on.next.next
        return head