class ListNode {
  next;
  val;

  constructor(val, nextNode) {
    this.val = val === undefined ? 0 : val;
    this.next = nextNode === undefined ? null : nextNode;
  }
}
head = new ListNode(0);
console.log(head);
current = head;

for (let i = 1; i < 10; i++) {
  current.next = new ListNode(i, current.next);
  current = current.next;
}
// console.log(head.next.next);
