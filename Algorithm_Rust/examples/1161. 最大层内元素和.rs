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
use std::collections::VecDeque;
use std::i32;
use std::rc::Rc;
impl Solution {
    pub fn max_level_sum(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        if root.is_none() {
            return 0;
        }
        let mut res = 0;
        let mut count = 0;
        let mut max_sum = i32::MAX;
        let mut stack: VecDeque<Rc<RefCell<TreeNode>>> = VecDeque::new();
        if let Some(node) = root.as_ref() {
            stack.push_back(node.clone());
        }
        while stack.len() > 0 {
            count += 1;
            let mut sum = 0;
            let mut len = stack.len();
            while len > 0 {
                let node = stack.pop_front().unwrap();
                sum += node.borrow().val;
                if let Some(left) = node.borrow().left.as_ref() {
                    stack.push_back(left.clone());
                }
                if let Some(right) = node.borrow().right.as_ref() {
                    stack.push_back(right.clone());
                }
                len -= 1;
            }
            println!("{} {}", sum, count);
            if sum > max_sum {
                max_sum = sum;
                res = count;
            }
        }
        res
    }
}
