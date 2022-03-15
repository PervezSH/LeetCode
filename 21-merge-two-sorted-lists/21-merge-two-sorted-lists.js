/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// O(n + m) time | O(1) space, where n, m length of lists
// Recursive
var mergeTwoLists = function(list1, list2) {
    // base case
    if (!list1) return list2;
    if (!list2) return list1;
    
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else{
        list2.next = mergeTwoLists(list2.next, list1);
        return list2;
    }
};