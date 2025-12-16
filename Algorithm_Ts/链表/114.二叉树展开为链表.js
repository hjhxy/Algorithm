var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root) {
    var arr = [];
    traval(root, arr);
    console.log(arr);
}
;
function traval(root, arr) {
    if (!root)
        return;
    var node = new TreeNode(root.val);
    arr.push(node);
    traval(root.left, arr);
    traval(root.right, arr);
}
