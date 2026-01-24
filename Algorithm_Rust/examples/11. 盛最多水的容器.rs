impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        let mut front = 0;
        let mut back = height.len() - 1;
        let mut res = 0;
        while front != back {
            if height[front] < height[back] {
                front += 1;
            } else {
                back -= 1;
            }
            res = res.max(height[front].min(height[back]) * (back - front));
        }

        res
    }
}

fn main() {}
