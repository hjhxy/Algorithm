impl Solution {
    pub fn remove_subfolders(folder: Vec<String>) -> Vec<String> {
        if folder.len() <= 1 {
            return folder;
        }
        let mut folder = folder.iter().map(|s| s.as_str()).collect::<Vec<&str>>();
        folder.sort();
        let mut start = 0;
        let mut end = 1;
        let mut res = vec![];
        while end < folder.len(){
            if folder[end].starts_with(&format!("{}/", folder[start])) {
                end+=1;
            } else {
                res.push(folder[start]);
                start = end;
                end+=1;
            }
        }
        if start < folder.len(){
            res.push(folder[start]);
        }
        res.into_iter().map(|s| s.to_string()).collect::<Vec<String>>()
    }
}


// ["/a","/a/b","/c/d","/c/d/e","/c/f"]
fn main(){}