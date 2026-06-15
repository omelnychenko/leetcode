/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    if (pattern.length !== s.split(' ').length) return false;
    for (const i in pattern) {
        if ([...new Set(pattern)].indexOf(pattern[i]) !== [...new Set(s.split(' '))].indexOf(s.split(' ')[i])) {
            return false;
        }
    }
    return true;
};