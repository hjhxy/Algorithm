// Definition for a binary tree node.
#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}
use std::cell::RefCell;
use std::rc::Rc;
struct Codec {}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Codec {
    pub fn serialize(&self, root: Option<Rc<RefCell<TreeNode>>>) -> String {
        fn preorder(node: &Option<Rc<RefCell<TreeNode>>>, out: &mut Vec<String>) {
            if let Some(rc) = node {
                let n = rc.borrow();
                out.push(n.val.to_string());
                preorder(&n.left, out);
                preorder(&n.right, out);
            }
        }

        let mut res = Vec::new();
        preorder(&root, &mut res);
        res.join(",")
    }

    pub fn deserialize(&self, data: String) -> Option<Rc<RefCell<TreeNode>>> {
        if data.is_empty() {
            return None;
        }

        let preorder: Vec<i32> = data
            .split(',')
            .filter_map(|s| s.parse::<i32>().ok())
            .collect();

        let mut i = 0;
        Self::build_bst(&preorder, i32::MAX, &mut i)
    }

    fn build_bst(preorder: &[i32], bound: i32, i: &mut usize) -> Option<Rc<RefCell<TreeNode>>> {
        if *i == preorder.len() || preorder[*i] > bound {
            return None;
        }

        let val = preorder[*i];
        *i += 1;

        let node = Rc::new(RefCell::new(TreeNode {
            val,
            left: Self::build_bst(preorder, val, i),
            right: Self::build_bst(preorder, bound, i),
        }));

        Some(node)
    }
}

fn main() {
    let obj = Codec::new();
    let data: String = obj.serialize(str);
    let ans: Option<Rc<RefCell<TreeNode>>> = obj.deserialize(data);
}
