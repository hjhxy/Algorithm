impl Solution {
    pub fn num_moves_stones(a: i32, b: i32, c: i32) -> Vec<i32> {
        let mut vec = vec![a,b,c];
        vec.sort();
        let mut min ;
        let mut max = vec[2]-vec[0]-2;

        if vec[2]-vec[1] == vec[1]-vec[0] && vec[1]-vec[0] == 1 {
            min = 0;
        } else if vec[2]-vec[1] <=2 || vec[1]-vec[0]<=2 {
            min = 1;
        } else {
            min = 2;
        }

        vec![min, max]
    }
}


fn main(){}