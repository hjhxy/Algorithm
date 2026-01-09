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
impl Solution {
    pub fn count_pairs(root: Option<Rc<RefCell<TreeNode>>>, distance: i32) -> i32 {
        let mut res = 0;
        Solution::traval(&root, distance, &mut res);
        res
    }
    fn traval(root: &Option<Rc<RefCell<TreeNode>>>, distance: i32, res: &mut i32) -> Vec<i32> {
        if let Some(node) = root {
            let node = node.borrow();
            let left = Solution::traval(&node.left, distance, res); // [1,2,3]
            let right = Solution::traval(&node.right, distance, res); // [2,3,4]
            for &l in &left {
                for &r in &right {
                    if l + r <= distance {
                        *res += 1;
                    }
                }
            }
            if node.left.is_none() && node.right.is_none() {
                vec![1]
            }
            let mut merged = vec![];
            for &d in &left {
                if d + 1 < distance {
                    merged.push(d + 1);
                }
            }
            for &d in &right {
                if d + 1 < distance {
                    merged.push(d + 1);
                }
            }
            merged
        } else {
            vec![]
        }
    }
}

fn main() {}
