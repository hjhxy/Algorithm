use std::{collections::HashMap, i32};

impl Solution {
    pub fn minimum_card_pickup(cards: Vec<i32>) -> i32 {
        let mut map = HashMap::new();
        let mut res  = usize::MAX;
        let mut flag = false;
        for (i, el) in cards.into_iter().enumerate() {
            if let Some(v) = map.get_mut(&el) {
                res = res.min(i - *v + 1);
                flag = true;
                *v = i;
            } else {
                map.insert(el, i);
            }
        }
        if flag { res as i32 } else {-1}
    }
}

fn main(){}