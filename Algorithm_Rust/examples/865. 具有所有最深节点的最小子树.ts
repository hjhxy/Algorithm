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

function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
  let max = 0;
  function getMax(root: TreeNode | null, count: number = 0) {
    if (root) {
      count += 1;
      if (count > max) {
        max = count;
      }
      getMax(root.left, count);
      getMax(root.right, count);
    }
  }

  getMax(root);

  let res: TreeNode | null = null;

  function getNode(root: TreeNode | null, count: number = 0): boolean {
    if (root) {
      count += 1;
      let left = getNode(root.left, count);
      let right = getNode(root.right, count);
      console.log(root.val, root.left, root.right, count, left, right);

      if (left && right) {
        res = root;
      }

      return left || right;
    }
    return count == max;
  }

  getNode(root);

  console.log(max);

  return res;
}
