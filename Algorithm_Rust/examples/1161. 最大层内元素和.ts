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

function maxLevelSum(root: TreeNode | null): number {
  let stack: TreeNode[] = [];
  if (!root) {
    return 0;
  }
  let res = 0;
  let maxSum = 0;
  let count = 0;
  stack.push(root);
  while (stack.length) {
    let len = stack.length;
    count += 1;
    let sum = 0;
    while (len) {
      let node = stack.shift();
      node?.left && stack.push(node.left);
      node?.right && stack.push(node.right);
      sum += node!.val;
      len -= 1;
    }
    console.log(sum, count);
    if (sum > maxSum) {
      res = count;
    }
  }
  return res;
}
