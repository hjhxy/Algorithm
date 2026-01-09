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
    pub fn merge_nodes(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut head = head;
        let mut new_head = Box::new(ListNode::new(0));
        let mut node = &mut new_head;
        let mut sum = 0;
        let mut flag = false;
        while let Some(n) = head.as_mut() {
            if n.val == 0 {
                if !flag {
                    flag = true;
                } else {
                    node.next = Some(Box::new(ListNode::new(sum)));
                    node = node.next.as_mut().unwrap();
                    sum = 0;
                }
            }
            sum += n.val;
            head = n.next.take();
        }

        new_head.next
    }
}

fn main() {}
