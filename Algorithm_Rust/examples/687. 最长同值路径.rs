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
    pub fn longest_univalue_path(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
      let mut max = 0;
      Solution::traval(&root, &mut max);
      max
    }
    pub fn traval(root: &Option<Rc<RefCell<TreeNode>>>, res: &mut i32) -> i32 {
        match root {
          Some(root)=>{
            let root = root.as_ref().borrow();
            let mut lv = 0;
            let mut rv = 0;
            if let Some(left) = &root.left {
              let leftv = Solution::traval(&root.left, res);
              if root.val == left.as_ref().borrow().val{
                lv = leftv + 1;
              }
            }
            if let Some(right) = &root.right {
              let rightv = Solution::traval(&root.right, res);
              if root.val == right.as_ref().borrow().val{
                rv = rightv + 1;
              }
            }
            *res = *res.max(&mut lv.max(rv));
            lv.max(rv)
          }
          None => {
            return 0;
          }
        }
    }
}

fn main() {}
