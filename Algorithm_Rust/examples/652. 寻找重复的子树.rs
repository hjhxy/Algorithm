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
use std::collections::HashMap;
use std::rc::Rc;
impl Solution {
    pub fn find_duplicate_subtrees(
        root: Option<Rc<RefCell<TreeNode>>>,
    ) -> Vec<Option<Rc<RefCell<TreeNode>>>> {
        let mut vec = vec![];
        let mut map: HashMap<String, i32> = HashMap::new();

        Solution::traval(&root, &mut map, &mut vec);
        println!("{:?}", map);

        vec
    }
    pub fn traval(
        root: &Option<Rc<RefCell<TreeNode>>>,
        map: &mut HashMap<String, i32>,
        vec: &mut Vec<Option<Rc<RefCell<TreeNode>>>>,
    ) -> String {
        if let Some(root) = root {
            let node = root.borrow();
            let left = Solution::traval(&node.left, map, vec);
            let right = Solution::traval(&node.right, map, vec);
            let result = format!("{}#{}#{}", node.val, left, right);
            *map.entry(result.clone()).or_insert(0) += 1;
            if let Some(count) = map.get_mut(&result) {
                if *count == 2 {
                    vec.push(Some(root.clone()));
                }
            }
            result
        } else {
            String::from("")
        }
    }
}

fn main() {}
