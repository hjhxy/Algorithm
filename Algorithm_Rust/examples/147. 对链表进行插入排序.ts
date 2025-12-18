class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function insertionSortList(head: ListNode | null): ListNode | null {
  let new_head = new ListNode(-10000);
  new_head.next = head;
  let node1: ListNode | null = new_head;
  let node2: ListNode | null = new_head;
  while (node2?.next) {
    let flag = false;
    while (node1?.next && node2?.next && node1.next != node2.next) {
      if (node2.next.val < node1.next.val) {
        let n = node2.next;
        node2.next = node2.next!.next;
        n.next = node1.next;
        node1.next = n;
        flag = true;
        break;
      } else {
        node1 = node1?.next;
      }
    }
    if (!flag) {
      node2 = node2.next;
    }
    node1 = new_head;
  }

  return new_head?.next;
}
// [-1,5,3,4,0]
let node = new ListNode(
  -1,
  new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0))))
);

insertionSortList(node);

export {};
