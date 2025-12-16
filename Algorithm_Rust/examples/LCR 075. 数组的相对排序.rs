use std::collections::HashMap;

impl Solution {
    pub fn relative_sort_array(arr1: Vec<i32>, arr2: Vec<i32>) -> Vec<i32> {
        let mut map = arr2.iter().map(|&el| (el, 0)).collect::<HashMap<_,_>>();
        let mut res2 = vec![];
        for &el in arr1.iter() {
            if let Some(v) = map.get_mut(&el) {
                *v += 1;
            } else {
                res2.push(el);
            }
        }
        res2.sort();
        let mut res1 = vec![];
        for &el in arr2.iter() {
            if let Some(&v) = map.get(&el) {
                for i in 0..v {
                    res1.push(el);
                }
            }
        }
        res1.append(&mut res2);
        res1
    }
}

fn main(){}