/**
 * @param {string} s
 * @return {string}
 */
// O(n^2) time | O(n) space
var longestPalindrome = function(s) {
    let currentLongest = [0, 1]; // 0th and nth indices of the longest palindromic substring
    for (let i=0; i < s.length; i++){ // iterate string
        const odd = getPalindromic(s, i-1, i+1); // check for odd length
        const even = getPalindromic(s, i-1, i); // check for even length
        const longest = even[1] - even[0] > odd[1] - odd[0] ? even : odd; // get the longest one
        currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest;
    }
    return s.slice(currentLongest[0], currentLongest[1])
};

var getPalindromic = function(string, leftIndex, rightIndex) {
    while (leftIndex >= 0 && rightIndex < string.length){
        if (string[leftIndex] != string[rightIndex]) break;
        leftIndex -= 1;
        rightIndex += 1;
    }
    return [leftIndex + 1, rightIndex];
}