use std::collections::HashMap;

/**
 * 单调栈
*/
impl Solution {
    pub fn trap(height: Vec<i32>) -> i32 {}
}

/**
 * 双指针
*/
// impl Solution {
//     pub fn trap(height: Vec<i32>) -> i32 {
//         let mut max_l = HashMap::new();
//         let mut max_r = HashMap::new();
//         let mut res = 0;
//         for (i, el) in height.iter().enumerate() {
//             max_l.insert(i, *max_l.get(&(i - 1)).unwrap_or(&0).max(el));
//         }
//         for i in (0..height.len()).rev() {
//             max_r.insert(i, *max_r.get(&(i + 1)).unwrap_or(&0).max(&height[i]));
//         }
//         println!("{:?}, {:?}", max_l, max_r);
//         for i in 0..height.len() {
//             res += (*max_l.get(&i).unwrap().min(max_r.get(&i).unwrap())) - height[i];
//         }
//         res
//     }
// }

fn main() {}
