class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function insertionSortList(head: ListNode | null): ListNode | null {
  const new_head = new ListNode(-10000);
  let node = head;
  while (node?.next) {
    node = node.next;
  }
  return new_head;
}

export {};
