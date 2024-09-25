
var longestCommonPrefix = function(strs) {
    ans = "";
    m = "";
    k = 100000;
    for (let i = 0; i < strs.length; i++) {
        if (k > strs[i].length) {
            m = strs[i];
            k = strs[i].length;
        }
    }

    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (m[i] != strs[j][i]) {
                return ans;
            }
        }
        ans += m[i];
    }
    return ans;
};
