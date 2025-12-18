impl Solution {
    pub fn repeated_substring_pattern(s: String) -> bool {
        let len = s.len();
        if len%2==1 {
            return false;
        }
        len == 1 || &s[0..len/2] == &s[len/2..]
    }
}

fn main(){}