/*给定三个字符串 s1, s2, s3, 验证 s3 是否是由 s1 和 s2 交错组成的。*/
function isInterleave(s1, s2, s3) {
    // s1 和 s2的长度及组成元素在s3中，其中并且顺序符合s1 和s2的顺序；

    if (s1.length + s2.length !== s3.length) return false;
    const s3Obj = {};
    for (let i = 0; i < s3.length; i++) {
        if (!s3Obj[s3[i]]) {
            s3Obj[s3[i]] = [i];
        } else {
            s3Obj[s3[i]].push(i);
        }
    }
    // s3 中有多少个s1呢，剩下的有1个s2 即可。
    const arr = [];
    for (let i = 0; i < s1.length; i++) {
        if (!s3Obj[s1[i]]) {
            return false;
        }
        for (let j = 0; j < s3Obj[s1[i]].length; j ++ ) {
            
            // if (arr.length === 0) {
            //     let item = [];
            // }
            arr.push()
        }
    }
}