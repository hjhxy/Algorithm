impl Solution {
    pub fn next_greatest_letter(letters: Vec<char>, target: char) -> char {
        let mut start = 0_usize;
        let mut end = letters.len() - 1;
        while start < end {
            let mid = (start + end) / 2;
            if letters[mid] > target {
                end = mid;
            } else if letters[mid] < target {
                start = mid + 1;
            } else {
                start = mid + 1;
            }
        }
        if letters[end] > target {
            letters[end]
        } else {
            letters[0]
        }
    }
}

fn main() {}
