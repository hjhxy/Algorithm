impl Solution {
    pub fn get_encrypted_string(s: String, k: i32) -> String {
        let mut res = vec![];
        let chars:Vec<char> = s.chars().collect();
        let k = k as usize;
        for (i, _) in chars.iter().enumerate() {
            res.push(chars[(i+k)%s.len()]);
        }
        res.iter().collect()
    }
}

fn main(){}