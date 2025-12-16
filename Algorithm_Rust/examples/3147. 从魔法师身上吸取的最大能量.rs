use std::i32;

impl Solution {
    pub fn maximum_energy(energy: Vec<i32>, k: i32) -> i32 {
        let k = k as usize;
        let mut i = energy.len()-1;
        let mut sum = i32::MIN;
        while i >= energy.len()-k {
            let mut s = 0;
            let mut start = i as i32;
            while start >= 0 {
                s += energy[start as usize];
                sum = sum.max(s);
                start -= k as i32;
            }
            i -= 1;
        }
        sum
    }
}

fn main(){
    
}