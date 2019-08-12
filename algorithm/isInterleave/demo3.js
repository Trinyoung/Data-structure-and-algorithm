/*给定三个字符串 s1, s2, s3, 验证 s3 是否是由 s1 和 s2 交错组成的。*/
var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false;
    }
    let num1 = 0;
    let offstr = '';
    for (let i = 0; i < s3.length; i++) {
        if (num1 === s1.length - 1 && s3[i] !== s1[num1]) {
            offstr += s3[i]
            break;
        }
        if (num1 < s1.length - 1 && s3[i] !== s1[num1]) {
            offstr += s3[i]
            num1++;
        }
    }

    if (offstr !== s2) {
        return false;
    }
    return true;
}
'dbcba'
let s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac";
                                      aa b c c
                                        d b b a c
    // d b b ac
console.log(isInterleave(s1, s2, s3));