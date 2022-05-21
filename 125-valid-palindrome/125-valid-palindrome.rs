impl Solution {
    // O(n) time | O(1) space
    pub fn is_palindrome(s: String) -> bool {
        // Cleaning input string
        let cleaned_string = s
            .chars() // returns iterator over the chars of string slice
            .filter(|c| c.is_alphanumeric()) // returns iterator over filtered string slice
            .map(|c| c.to_ascii_lowercase()); // maps each char to lowercase
        cleaned_string.clone().eq(cleaned_string.rev())
    }
}