class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (!head) return head;
  let new_head = new ListNode(0, head);
  let prev: ListNode | null = null;
  let next: ListNode | null = null;
  while (head) {
    if (head.next?.val == left) {
      prev = head;
      next = head.next;
      break;
    }
    head = head.next;
  }

  console.log(head);

  while (next?.next) {
    let node = next.next;
    next!.next = node.next;
    node.next = prev!.next;
    prev!.next = node;
    console.log(prev?.val, prev?.next?.val, node.val, next.val);
  }
  console.log("=", 1, prev, next);

  return new_head.next;
}

export {};
