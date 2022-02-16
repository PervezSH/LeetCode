/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// O(n) time | O(1) space
var swapPairs = function(head) {
    // Set on pointer to head
    let on = head
    // While theres a list
    while (on){
        if (!on.next) break
        // Store current listnode value in temp
        let temp = on.val
        // Update current listnode value
        on.val = on.next.val
        // Update adjacent listnode value
        on.next.val = temp
        // Advance current listnode twice
        on = on.next.next
    }
    return head
};