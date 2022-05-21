use std::collections::HashMap;
impl Solution {
    // O(n) time | O(1) space
    pub fn is_valid(s: String) -> bool {
        let mut stack = Vec::new();
        let pairs = HashMap::from([('(', ')'), ('{', '}'), ('[', ']')]);
        for c in s.chars() {
            if pairs.contains_key(&c) {
                stack.push(c);
            } else {
                if stack.is_empty() {
                    return false;
                }
                let last = stack.pop().unwrap();
                if pairs.get(&last) != Some(&c) {
                    return false;
                }
            }
        }
        stack.is_empty()
    }
}