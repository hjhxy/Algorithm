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
    pub fn split_list_to_parts(head: Option<Box<ListNode>>, k: i32) -> Vec<Option<Box<ListNode>>> {
        let mut sum = 0;
        let mut head = head;
        let mut node = &head;
        while let Some(n) = node {
            sum += 1;
            node = &n.next;
        }

        let yushu = sum % k;
        let chushu = (sum - yushu) / k;
        let mut res = vec![None; k as usize];
        let mut node = head;

        for i in 0..k {
            let mut count = chushu;
            let mut n = Box::new(ListNode::new(0));
            let mut n1 = &mut n;
            while count > 0 {
                let mut n2 = node.unwrap();
                node = n2.next.take();
                n1.next = Some(n2);
                n1 = n1.next.as_mut().unwrap();
                count -= 1;
            }
            if i < yushu {
                // 多拼接一个
                let mut n2 = node.unwrap();
                node = n2.next.take();
                n1.next = Some(n2);
                n1 = n1.next.as_mut().unwrap();
            }
            res[i as usize] = n.next;
        }
        res
    }
}

fn main() {}
