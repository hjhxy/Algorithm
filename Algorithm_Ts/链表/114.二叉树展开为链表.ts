
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    let arr:TreeNode[] = [];
    traval(root, arr);
    if(root){
        root.val = arr[0].val;
        root.left = null;
        let node = root; 
        for(let i=1;i<arr.length;i++){
            node.right = arr[i];
            node = arr[i];
        }
    }
    console.log(arr);
};

function traval(root: TreeNode | null, arr: TreeNode[]) {
    if(!root) return;
    let node = new TreeNode(root.val);
    arr.push(node);
    traval(root.left, arr);
    traval(root.right, arr);
}

const res = flatten(null);
console.log(res);
export {}