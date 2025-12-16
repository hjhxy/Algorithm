impl Solution {
    pub fn compare_version(version1: String, version2: String) -> i32 {
        let version1 = version1.split(".").map(|x| x.parse::<i32>().unwrap_or(i32::default()));
        let mut version2 = version2.split(".").map(|x| x.parse::<i32>().unwrap_or(i32::default()));

        let mut res = 0;
        for el in version1 {
            if let Some(v) = version2.next() {
                if el < v {
                    res = -1;
                    break;
                } else if el > v {
                    res = 1;
                    break;
                }
            } else {
                if el != 0 {
                    res = 1;
                    break;   
                }
            }
        }
        if res == 0 {
            while let Some(v) = version2.next() {
                if v != 0 {
                    return -1;
                }
            }
        }
        res
    }
}

fn main(){}