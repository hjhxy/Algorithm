impl Solution {
    pub fn sum_four_divisors(nums: Vec<i32>) -> i32 {
        nums.iter().fold(0, |s, &el| s + Solution::get_count(el))
    }
    pub fn get_count(num: i32) -> i32 {
        let num = num as u32;
        let el = (num as f32).sqrt() as u32;
        let mut i = 1;
        let mut count = 0;
        let mut sum = 0;
        while i <= el {
            if num % i == 0 {
                if i == el {
                    count += 1;
                    sum += i as i32;
                } else {
                    count += 2;
                    sum += (i + num / i) as i32;
                }
            }
            if count > 4 {
                return 0;
            }
            i += 1;
        }
        println!("{} {}", num, sum);
        return if count != 4 { 0 } else { sum };
    }
}
