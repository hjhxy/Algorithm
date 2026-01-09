impl Solution {
    pub fn final_value_after_operations(operations: Vec<String>) -> i32 {
        operations.iter().fold(0, |s, el| match el.as_str() {
            "--X" => s - 1,
            "X--" => s - 1,
            "++X" => s + 1,
            "X++" => s + 1,
            _ => s,
        })
    }
}
