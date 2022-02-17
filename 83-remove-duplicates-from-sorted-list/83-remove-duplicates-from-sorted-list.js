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
var deleteDuplicates = function(head) {
    let currentNode = head;
    // While theres a list
    while (currentNode){
        let nextNode = currentNode.next;
        while (nextNode && currentNode.val === nextNode.val)
            nextNode = nextNode.next;
        // Remove duplicate nodes
        currentNode.next = nextNode;
        // Change current node
        currentNode = nextNode;
    }
    return head;
};