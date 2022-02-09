# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    # O(n) Space
    # def hasCycle(self, head: Optional[ListNode]) -> bool:
    #     on = head
    #     hashSet = set()
    #     while on:
    #         if on in hashSet: return True
    #         hashSet.add(on)
    #         on = on.next
    #     return False
    # O(1) Space
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        tortoise = hare = head
        while hare and hare.next:
            tortoise = tortoise.next
            hare = hare.next.next
            if tortoise == hare: return True
        return False
        
