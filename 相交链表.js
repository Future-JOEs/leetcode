/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  var a = getLength(headA);
  var b = getLength(headB);

  let h1 = headA;
  let h2 = headB;
  let difference = a > b ? a - b : b - a;

  if (a > b) {
    while (difference-- > 0) {
      h1 = h1.next;
    }
  } else {
    while (difference-- > 0) {
      h2 = h2.next;
    }
  }
  while (h1 !== h2) {
    h1 = h1.next;
    h2 = h2.next;
  }

  return h1;
};

var getLength = head => {
  let length = 0;
  let cur = head;
  while (cur) {
    cur = cur.next;
    length++;
  }
  return length;
};
