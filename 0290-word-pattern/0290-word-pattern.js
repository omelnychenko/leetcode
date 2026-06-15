/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    if (pattern.length !== s.split(' ').length) return false;
    const pSet = [...new Set(pattern)];
    const sSet = [...new Set(s.split(' '))];
    if (pSet.length !== sSet.length) return false;
    for (const i in pattern) {
        if (pSet.indexOf(pattern[i]) !== sSet.indexOf(s.split(' ')[i])) {
            return false;
        }
    }
    return true;
};