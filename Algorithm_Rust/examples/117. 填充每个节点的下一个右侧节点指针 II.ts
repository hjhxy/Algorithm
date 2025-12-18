class _Node {
  val: number;
  left: _Node | null;
  right: _Node | null;
  next: _Node | null;

  constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

function connect(root: _Node | null): _Node | null {
  if (!root) return root;
  let queue: Array<_Node> = [];
  queue.push(root);
  while (queue.length) {
    let len = queue.length;
    while (len) {
      let node = queue.shift()!;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      if (len > 1) {
        node.next = queue[0];
      }
      len -= 1;
    }
  }
  return root;
}

export {};
