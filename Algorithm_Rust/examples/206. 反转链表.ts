class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }
  let newhead = new ListNode();
  newhead.next = head;
  let node: ListNode | null = head;
  while (node?.next) {
    let next = node.next;
    node.next = next.next;
    next.next = newhead.next;
    newhead.next = next;
  }
  return newhead.next;
}
