/**
 * @param {number} n
 * @return {number}
 */
// O(n) time | O(1) Space
var fib = function(n) {
    if (n <= 1) return n;
    let f0 = 0
    let f1 = 1
    let sum = 1
    for (let i=2; i<n; i++){
        let temp = f1;
        f1 += f0;
        f0 = temp;
        sum = f1 + f0;
    }
    return sum;
};