
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

function rob(root: TreeNode | null): number {
    if(root === null) return 0;
    const dp: number[] = [];
    traval(dp, root);
    return Math.max(...dp);
};

function traval(dp: number[], node: TreeNode|null): any {
    if(node === null) return null;
    let stack:TreeNode[] = [];
    stack.push(node);
    while(stack.length){
        let len = stack.length;
        let sum = 0;
        while(len--){
            let m_node = stack.shift() as TreeNode;
            sum += m_node.val;
            if(m_node.left){
                stack.push(m_node.left);
            }
            if(m_node.right){
                stack.push(m_node.right);
            }
        }
        dp.push(Math.max(dp[dp.length-1]||0, (dp[dp.length-2]||0)+sum));
    }
}
