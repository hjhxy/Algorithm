struct TrieNode {
    child: [Option<Box<TrieNode>>; 26],
    is_end: bool,
}

impl TrieNode {
    fn new() -> Self {
        Self {
            child: Default::default(),
            is_end: false,
        }
    }
}

struct Trie {
    root: TrieNode,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Trie {
    fn new() -> Self {
        Self {
            root: TrieNode::new(),
        }
    }

    fn insert(&mut self, word: String) {
        let mut node = &mut self.root;
        for c in word.chars() {
            let idx = (c as u8 - b'a') as usize;
            if node.child[idx].is_none() {
                node.child[idx] = Some(Box::new(TrieNode::new()));
            }
            node = node.child[idx].as_mut().unwrap();
        }
        node.is_end = true;
    }

    fn search(&self, word: String) -> bool {
        let mut node = &self.root;
        for c in word.chars() {
            let idx = (c as u8 - b'a') as usize;
            match node.child[idx].as_ref() {
                Some(n) => {
                    node = n;
                }
                None => {
                    return false;
                }
            }
        }
        node.is_end
    }

    fn starts_with(&self, prefix: String) -> bool {
        let mut node = &self.root;
        for c in prefix.chars() {
            let idx = (c as u8 - b'a') as usize;
            match node.child[idx].as_ref() {
                Some(n) => {
                    node = n;
                }
                None => {
                    return false;
                }
            }
        }
        true
    }
}

fn main() {
    let obj = Trie::new();
    obj.insert(word);
    let ret_2: bool = obj.search(word);
    let ret_3: bool = obj.starts_with(prefix);
}
