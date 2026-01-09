class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let new_head = new ListNode();
  new_head.next = head;
  let node = head;
  let map = {};
  while (node) {
    map[node.val] = (map[node.val] || 0) + 1;
    node = node.next;
  }
  console.log(map);
  let pre_node: ListNode | null = new_head;
  node = head;
  while (node) {
    console.log(node);
    let count = map[node.val];
    if (count <= 1) {
      pre_node!.next = node;
      pre_node = node;
      node = node.next;
    } else {
      console.log(count);
      while (count && node) {
        node = node?.next;
        count -= 1;
      }
      pre_node.next = node;
    }
  }

  return new_head.next;
}

export {};
