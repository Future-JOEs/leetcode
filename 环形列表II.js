/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // 遍历到两个相同的节点即为环链表
  const set = new Set();
  while (head) {
    if (set.has(head)) return head;
    set.add(head);
    head = head.next;
  }
  return null;
};

// 快慢指针
// 一个快指针 一个慢指针 一定会相遇
