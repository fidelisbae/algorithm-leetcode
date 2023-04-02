/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let str1 = "";
  let str2 = "";

  while (l1 != null) {
    str1 = l1.val + str1;
    l1 = l1.next;
  }
  while (l2 != null) {
    str2 = l2.val + str2;
    l2 = l2.next;
  }

  let str3 = String(BigInt(str1) + BigInt(str2));

  const n = str3.length;
  let head = new ListNode();
  let current = head;
  for (let i = n - 1; i >= 0; i--) {
    current.val = Number(str3[i]);
    if (i == 0) {
      break;
    }
    current.next = new ListNode();
    current = current.next;
  }
  return head;
};
