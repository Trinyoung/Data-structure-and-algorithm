// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
function convert(s, numRows) {
    const arrs = [];
    if (numRows === 1) {
        return s;
    }
    for (let i = 0; i < numRows; i ++) {
        arrs[i] = s[i];
    }
    let i = numRows -1; //行数
    let up = true; // 往上走
    let j = numRows - 1; //字符行进的长度
    if (numRows === 1) {
        return s;
    }
    while (j < s.length-1) {

        if (i === 0) {
            up = false;
        }
        if (i === numRows - 1) {
            up = true;
        }

        if (up) {
            i --;
        } else {
            i ++;
        }
        arrs[i] +=s[++j];
    }
    return arrs[i].join('');
}
