/*给定三个字符串 s1, s2, s3, 验证 s3 是否是由 s1 和 s2 交错组成的。*/
var isInterleave = function (s1, s2, s3) {
    if (s3.length !== s1.length + s2.length) {
        return false;
    }
    const result = [];
    for (let i = 0; i <= s1.length; i++) {
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0 && j === 0) {
                result[j] = true;
            } else if (i === 0) { // 全部由 s2 前缀构成
                result[j] = result[j - 1] && s2[j - 1] === s3[i + j - 1];
            } else if (j === 0) { // 全部由 s1 前缀构成
                result[j] = result[j] && s1[i - 1] === s3[i + j - 1];
            } else {
                result[j] = (result[j] && s1[i - 1] === s3[i + j - 1]) || (result[j - 1] && s2[j - 1] === s3[i + j - 1]);
            }
        }
    }
    return result[s2.length];
}

const s1 = 'abccd';
const s2 = 'bce';
const s3 = 'abccbcde';

isInterleave(s1, s2, s3);
