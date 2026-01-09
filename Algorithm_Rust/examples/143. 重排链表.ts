class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reorderList(head: ListNode | null): void {
  if (!head) return;
  let arr: ListNode[] = [];
  let node: ListNode | null = head;
  while (node) {
    arr.push(node);
    node = node.next;
  }
  let count = 0;
  let pre_node = null as ListNode | null;
  while (count < Math.floor(arr.length / 2)) {
    if (pre_node) {
      pre_node.next = arr[count];
    }
    let node = arr[arr.length - 1 - count];
    arr[count].next = node;
    pre_node = node;
    count += 1;
  }
  if (!pre_node) {
    return;
  }
  if (count * 2 == arr.length) {
    pre_node.next = null;
  } else {
    let node = arr[(arr.length - 1) / 2];
    pre_node.next = node;
    node.next = null;
  }
}

export {};
