class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function convertBST(root: TreeNode | null): TreeNode | null {
  if (!root) return root;
  let new_root = new TreeNode();
  traval(root, new_root, 0);
  return new_root;
}

function traval(root: TreeNode, new_root: TreeNode, f_val: number): number {
  let right = 0;
  let left = 0;
  if (root.right) {
    new_root.right = new TreeNode();
    right = traval(root.right, new_root.right, 0);
    new_root.right.val = right;
  }
  if (root.left) {
    new_root.left = new TreeNode();
    left = traval(root.left, new_root.left, f_val + right);
    new_root.left.val = left;
  }
  new_root.val = f_val + right + root.val;
  return left;
}

export {};


// 干什么
// 缺什么