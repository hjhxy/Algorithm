class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  let map = new WeakMap<ListNode, boolean>();
  let node = head;
  while (node) {
    if (map.get(node)) {
      return node;
    }
    map.set(node, true);
    node = node.next;
  }
  return null;
}

export {};
