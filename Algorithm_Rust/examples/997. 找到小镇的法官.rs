use std::collections::HashMap;

impl Solution {
    pub fn find_judge(n: i32, trust: Vec<Vec<i32>>) -> i32 {
        let mut map1:HashMap<i32, i32> = HashMap::new();
        let mut map2:HashMap<i32, i32> = HashMap::new();

        for el in trust.iter(){
            let v1 = map1.get(&el[0]).unwrap_or(&0);
            map1.insert(el[0], v1+1);
            let v2 = map2.get(&el[1]).unwrap_or(&0);
            map2.insert(el[1], v2+1);
        }
        
        let mut flag = false;
        let mut res = -1;
        for (k, &v) in map2.iter() {
            if v == n-1 && *map1.get(k).unwrap_or(&0) == 0 {
                if flag == false {
                    flag = true;
                    res = *k;
                } else {
                    return -1;
                }
            }
        }
        res
    }
}
fn main(){}