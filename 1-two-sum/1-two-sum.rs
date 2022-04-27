use std::collections::HashMap;
impl Solution {
    // O(n) time | O(n) space - where n is length of the array
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut differences: HashMap<i32, usize> = HashMap::new();
        for (pos, num) in nums.iter().enumerate() {
            match differences.get(num) {
                Some(i) => return vec![*i as i32, pos as i32],
                None => differences.insert(target - num, pos),
            };
        }
        vec![]
    }
}