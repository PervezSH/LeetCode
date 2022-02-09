/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Measure length
    let on = head
    let length = 1
    while (on) {
        length++
        on = on.next
    }
    // Point arount to delete the node
    let leftIndex = length - n - 1
    // Handle head delete
    if (leftIndex === 0) return head.next
    on = head
    while (leftIndex-- > 1) on = on.next
    on.next = on.next.next
    return head
};