impl Solution {
    pub fn max_score(card_points: Vec<i32>, k: i32) -> i32 {
        let k = k as usize;
        let mut i: usize = 0;
        let mut s = 0;
        while i<k {
            s+=card_points[i];
            i+=1;
        }
        i-=1;
        let mut max = 0;
        let mut j = card_points.len()-1;
        println!("{} {}", i, j);
        while j>=card_points.len()-k {
            s+=(card_points[j]-card_points[i]);
            max = max.max(s);
            j-=1;
            i-=1;
        }
        max
    }
}