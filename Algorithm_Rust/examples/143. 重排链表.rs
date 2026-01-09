#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { val, next: None }
    }
}

impl Solution {
    pub fn reorder_list(head: &mut Option<Box<ListNode>>) {
        let mut arr: Vec<*mut ListNode> = Vec::new();
        let mut node = head.as_mut();

        while let Some(n) = node {
            arr.push(&mut **n as *mut _);
            node = n.next.as_mut();
        }

        let mut i = 0;
        let mut j = arr.len().saturating_sub(1);

        while i < j {
            unsafe {
                (*arr[i]).next = Some(Box::from_raw(arr[j]));
                j -= 1;
                if i < j {
                    (*arr[j + 1]).next = Some(Box::from_raw(arr[i + 1]));
                }
                i += 1;
            }
        }

        if let Some(&last) = arr.last() {
            unsafe {
                (*last).next = None;
            }
        }
    }
}

fn main() {}
