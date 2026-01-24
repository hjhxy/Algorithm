use std::cmp::min;

impl Solution {
    pub fn trap(height: Vec<i32>) -> i32 {
        let mut res = 0;
        let mut stack = vec![];
        for (i, &el) in height.iter().enumerate() {
            while let Some(&last) = stack.last() {
                if el <= height[last] {
                    break;
                }
                while stack.len() != 0 {
                    let pop = stack.pop().unwrap();
                    if height[pop] > height[last] {
                        res += ((i - pop - 1) as i32) * (min(height[pop], el) - height[last]);
                        stack.push(pop);
                        break;
                    }
                }
            }
            stack.push(i);
        }
        res
    }
}

fn main() {}
