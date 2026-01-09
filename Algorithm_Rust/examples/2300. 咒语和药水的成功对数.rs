
struct Solution;
impl Solution {
    pub fn successful_pairs(spells: Vec<i32>, potions: Vec<i32>, success: i64) -> Vec<i32> {
        let mut potions = potions;
        potions.sort();
        let success = success as i32;
        let mut res = vec![];
        for el in spells.iter() {
            let index = Solution::binary_search(&potions, (success+*el-1)/(*el));
            println!("{} 从 * {} 开始满足要求", el, index);
            res.push((potions.len() - index) as i32);
        }
        res
    }
    pub fn binary_search(arr: &[i32], target: i32) -> usize {
        let mut left = 0;
        let mut right = arr.len();
        let mut mid;
        while left<right {
            mid = left + (right-left)/2;
            if arr[mid] >= target {
                right = mid;
            } else {
                left = mid+1;
            }
        }
        left
    }
}

fn main(){
    let spells = vec![5,1,3];
    let potions = vec![1,2,3,4,5];
    let success = 7;
    Solution::successful_pairs(spells, potions, success)
}