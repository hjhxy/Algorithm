use std::collections::HashMap;

impl Solution {
    pub fn report_spam(message: Vec<String>, banned_words: Vec<String>) -> bool {
        let hash: HashMap<String, bool> = banned_words.into_iter().map(|el| (el, true)).collect();
        let mut res = 0;
        for el in message.into_iter() {
            if hash.contains_key(&el) {
                count += 1;
                if count >=2 {
                    return true;
                }
            }
        }
        false
    }
}


fn main() {}