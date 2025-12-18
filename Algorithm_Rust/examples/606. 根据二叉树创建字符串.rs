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
impl Solution {
    pub fn tree2str(root: Option<Rc<RefCell<TreeNode>>>) -> String {
        if root.is_none() {
            String::from("")
        } else {
            let mut str = String::new();
            let node = root.unwrap();
            let root = node.borrow();
            let left = Solution::tree2str(root.left.clone());
            let right = Solution::tree2str(root.right.clone());
            format!(
                "{}{}{}",
                root.val,
                if left == "" && right == "" {
                    left
                } else {
                    format!("({})", left)
                },
                if right != "" {
                    format!("({})", right)
                } else {
                    right
                },
            )
        }
    }
}

fn main() {}
