// https://leetcode.com/problems/valid-anagram/
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const countS= {};
    const countT = {};

    for (let i = 0; i < s.length; i++) {
        countS[s[i]] = (countS[s[i]] || 0) + 1;
        countT[t[i]] = (countT[t[i]] || 0) + 1;
    }

    for (const c in countS) {
        if (countS[c] !== (countT[c] || 0)) {
            return false;
        }
    }

    return true;
};