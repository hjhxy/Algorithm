impl Solution {
    pub fn answer_string(word: String, num_friends: i32) -> String {
        let num_friends = num_friends as usize;
        let mut max_c = 0;
        for c in word.as_bytes() {
            max_c = max_c.max(*c);
        }
        let mut res = "";
        for (i, el) in word.as_bytes().iter().enumerate() {
            if *el == max_c {
                res = res.max(&word[i..(i+word.len()-num_friends+1).min(word.len())])
            }
        }
        res.to_string()
    }
}

fn main(){}