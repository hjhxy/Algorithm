class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
  let map = new Map<number, boolean>();
  nums.forEach((el) => map.set(el, true));
  let new_head = new ListNode();
  let node = new_head;
  while (head) {
    if (!map.get(head.val)) {
      node.next = head;
      node = node.next;
    }
    head = head.next;
  }
  node.next = null;
  return new_head.next;
}

export {};
