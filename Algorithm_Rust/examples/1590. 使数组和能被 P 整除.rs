impl Solution {
    pub fn min_subarray(nums: Vec<i32>, p: i32) -> i32 {
        let p = p as u64;
        let mut arr = vec![0];
        nums.iter().enumerate().for_each(|(i, &el)| {
            arr.push(arr[i] + el as u64);
        });

        let yu = arr[arr.len() - 1] % p; // 4

        if arr[arr.len() - 1] < p {
            return -1;
        }

        if yu == 0 {
            return 0;
        }

        let mut res = arr.len();
        let mut flag = false;

        // println!("{:?}, {}", arr, yu);

        for i in 1..arr.len() {
            for j in 0..i {
                // println!("{} {} {} {}", i, j, arr[j], arr[i]);
                if (arr[i] - arr[j]) % p == yu {
                    res = res.min(i - j);
                    flag = true;
                }
            }
        }

        if flag { res as i32 } else { -1 }
    }
}

fn main() {}
