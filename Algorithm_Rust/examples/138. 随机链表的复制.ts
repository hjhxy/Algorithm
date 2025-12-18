class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: _Node | null): _Node | null {
  if (!head) return head;
  let map = new WeakMap<_Node, _Node>();
  let root = new _Node();
  let root_copy = root;
  let head_copy = head;
  while (head_copy) {
    let node = new _Node(head_copy.val);
    map.set(head_copy, node);
    root_copy.next = node;
    root_copy = node;
    head_copy = head_copy.next!;
  }
  head_copy = head;
  root_copy = root.next!;
  while (head_copy) {
    let node = map.get(head_copy.random!)!;
    root_copy.random = node;
    root_copy = root_copy.next!;
    head_copy = head_copy.next!;
  }
  return root.next;
}

export {};
