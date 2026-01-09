impl Solution {
    pub fn min_operations(nums: Vec<i32>) -> i32 {
        for i in 0..nums.len() - 1 {
            println!(
                "{} {} {}",
                nums[i],
                nums[i + 1],
                Solution::gcd(nums[i], nums[i + 1])
            );
            if Solution::gcd(nums[i], nums[i + 1]) == 1 {
                return nums.len() as i32;
            }
        }
        -1
    }
    pub fn gcd(a: i32, b: i32) -> i32 {
        let max = if a > b { a } else { b };
        let min = if a < b { a } else { b };
        let y = max % min;
        if y == 0 {
            return b;
        } else {
            return Solution::gcd(min, y);
        }
    }
}

fn main() {}
