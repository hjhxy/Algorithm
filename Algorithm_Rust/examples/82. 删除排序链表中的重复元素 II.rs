use std::collections::HashMap;

// Definition for singly-linked list.
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
    pub fn delete_duplicates(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut t_node = Box::new(ListNode::new(-1));
        let new_head = &t_node;

        let mut map = HashMap::new();
        t_node.next = head;
        while let Some(node) = &t_node.next {
            *map.entry(node.val).or_insert(0) += 1;
            t_node = &t_node.next;
        }
        t_node = new_head;
        while let Some(node) = &t_node.next {
            let &mut count = map.get(&node.val).unwrap();
            while count > 0 {
                t_node = node.next;
            }
        }
        t_node.next
    }
}

fn main() {}
