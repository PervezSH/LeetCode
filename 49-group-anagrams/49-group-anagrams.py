class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashT = {}
        for s in strs:
            sorted_str = ''.join(sorted(s))
            if sorted_str in hashT.keys():
                hashT[sorted_str].append(s)
            else:
                hashT[sorted_str] = [s]
        return hashT.values()