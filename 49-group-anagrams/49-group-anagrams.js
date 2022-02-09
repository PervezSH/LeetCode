/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hashT = {};
    for (let str of strs){
        const sorted = str.split('').sort().join('');
        if (hashT[sorted]) hashT[sorted].push(str);
        else hashT[sorted] = [str];
    }
    return Object.values(hashT)
};