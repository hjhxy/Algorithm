impl Solution {
    pub fn is_trionic(nums: Vec<i32>) -> bool {
        let mut top = vec![];
        let mut bottom = vec![];

        for (i, el) in nums.iter().enumerate(){
            if i == 0 || i == nums.len() {
                continue;
            }
            let el = *el;
            if el > nums[i-1] && el > nums[i+1] {
                top.push(i);
            }
            if el < nums[i-1] && el < nums[i+1] {
                bottom.push(i);
            }
        }
        if top.len() != bottom.len() {
            return false;
        }
        return top[0] < bottom[0];
    }
}

fn main() {
    
}