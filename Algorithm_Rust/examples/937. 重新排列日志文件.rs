impl Solution {
    pub fn reorder_log_files(logs: Vec<String>) -> Vec<String> {
        let mut letter_logs = Vec::new();
        let mut digit_logs = Vec::new();

        for log in logs {
            if let Some(pos) = log.find(' ') {
                let content = &log[pos + 1..];
                if content.chars().next().unwrap().is_ascii_digit() {
                    digit_logs.push(log);
                } else {
                    letter_logs.push(log);
                }
            }
        }

        letter_logs.sort_by(|a, b| {
            let (id_a, rest_a) = a.split_once(' ').unwrap();
            let (id_b, rest_b) = b.split_once(' ').unwrap();
            match rest_a.cmp(rest_b) {
                std::cmp::Ordering::Equal => id_a.cmp(id_b),
                other => other,
            }
        });

        letter_logs.extend(digit_logs);
        letter_logs
    }
}

fn main() {}
