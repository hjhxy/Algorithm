use std::collections::HashMap;

#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

impl Solution {
    pub fn modified_list(nums: Vec<i32>, head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut map = HashMap::new();
        nums.iter().for_each(|el| {
            map.insert(*el, true);
        });
        let mut head = head;
        let mut new_head = Box::new(ListNode::new(0));
        let mut node = &mut new_head;
        while let Some(mut h) = head {
            head = h.next.take();
            if !map.contains_key(&h.val) {
                node.next = Some(h);
                node = node.next.as_mut().unwrap();
            }
        }
        new_head.next
    }
}

fn main() {}
