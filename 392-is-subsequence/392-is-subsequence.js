/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// O(n) time | O(1) space
var isSubsequence = function(s, t) {
    let subseqIndex = 0;
    for (let letter of t){
        if (subseqIndex === s.length) break;
        if (s[subseqIndex] === letter) subseqIndex++;
    }
    return subseqIndex === s.length;
};