/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;
    const c2w = new Map(), w2c = new Map();
    for (let i = 0; i < pattern.length; i++) {
        const c = pattern[i], w = words[i];
        if (c2w.has(c) && c2w.get(c) !== w) return false;
        if (w2c.get(w) && w2c.get(w) !== c) return false;
        c2w.set(c, w);
        w2c.set(w, c);
    }
    return true;
};