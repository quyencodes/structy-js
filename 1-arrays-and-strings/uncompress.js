"use strict";
exports.__esModule = true;
exports.uncompress = void 0;
function uncompress(s) {
    var nums = '0123456789';
    var i = 0;
    var j = 0;
    var res = [];
    while (j < s.length) {
        while (j < s.length && nums.includes(s[j]))
            j += 1;
        var n = Number(s.slice(i, j));
        for (var k = 0; k < n; k += 1) {
            res.push(s[j]);
        }
        j += 1;
        i = j;
    }
    return res.join('');
}
exports.uncompress = uncompress;
