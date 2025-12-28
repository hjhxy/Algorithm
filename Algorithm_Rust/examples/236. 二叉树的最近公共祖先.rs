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
      right: None
    }
  }
}
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn lowest_common_ancestor(root: Option<Rc<RefCell<TreeNode>>>, p: Option<Rc<RefCell<TreeNode>>>, q: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        let mut node: Option<Rc<RefCell<TreeNode>>> = None;
        if root.is_none() || p.is_none() || q.is_none() {
            return None;
        }
        Solution::dfs(&root, &p.unwrap(), &q.unwrap(), &mut node);
        node
    }
    fn dfs(
        node: &Option<Rc<RefCell<TreeNode>>>,
        p: &Rc<RefCell<TreeNode>>,
        q: &Rc<RefCell<TreeNode>>,
        res: &mut Option<Rc<RefCell<TreeNode>>>,
    ) -> bool {
        if node.is_none() {
            return false;
        }
        let node_rc = node.as_ref().unwrap();
        let node_ref = node_rc.borrow();

        let left = Self::dfs(&node_ref.left, p, q, res);
        let right = Self::dfs(&node_ref.right, p, q, res);

        let mid = Rc::ptr_eq(node_rc, p) || Rc::ptr_eq(node_rc, q);

        if (mid as i32 + left as i32 + right as i32) >= 2 {
            *res = Some(Rc::clone(node_rc));
        }

        mid || left || right
    }
}

fn main(){}