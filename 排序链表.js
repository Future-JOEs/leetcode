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
var sortList = function (head) {
  let arr = new Array();
  while (head) {
    arr.push(head);
    head = head.next;
  }
  arr = arr.sort((a, b) => a.val - b.val);
  arr.map((v, index) => {
    if (index < arr.length - 1) {
      v.next = arr[index + 1];
    } else {
      v.next = null;
    }
  });
  return arr[0] || null;
};

// TODO: 重新用归并写一下
