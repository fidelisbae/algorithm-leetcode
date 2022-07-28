class listNode {
  val;
  next;
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let head = new listNode();
let current = head;
for (i = 0; i < 10; i++) {
  current.next = new listNode(i, current.next);
  current = current.next;
}
console.log(head.next);
