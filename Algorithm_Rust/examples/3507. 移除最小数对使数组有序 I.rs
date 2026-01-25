impl Solution {
    pub fn minimum_pair_removal(nums: Vec<i32>) -> i32 {
        let mut len = 0;
        let mut sum = 0;
        let mut pre = nums[0];
        let mut pre_i = 0;
        let mut count = 0;
        for i in 1..nums.len() {
            println!("{}, {}", sum, nums[i]);
            if sum + nums[i] >= pre {
                pre = sum + nums[i];
                pre_i = i;
                sum = 0;
            } else {
                sum += nums[i];
                count += (i - pre_i - 1);
            }
        }
        count as i32
    }
}

// impl Solution {
//     pub fn minimum_pair_removal(nums: Vec<i32>) -> i32 {
//         let mut len = 0;
//         let mut sum = 0;
//         let mut pre = nums[0];
//         let mut pre_i = 0;
//         let mut count = 0;
//         for i in 1..nums.len() {
//             // println!("{}, {}", sum, nums[i]);
//             if sum + nums[i] >= pre {
//                 pre = sum + nums[i];
//                 count += (i - pre_i - 1);
//                 pre_i = i;
//                 sum = 0;
//             } else {
//                 sum += nums[i];
//             }
//         }
//         if sum!=0 && pre_i!=nums.len()-1 {
//             count += nums.len() - 1 - pre_i;
//         }
//         count as i32
//     }
// }

fn main() {}
