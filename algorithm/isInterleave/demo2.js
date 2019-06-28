/*给定三个字符串 s1, s2, s3, 验证 s3 是否是由 s1 和 s2 交错组成的。*/
var isInterleave = function (s1, s2, s3) {
  let num1 = 0;
  let num2 = 0;
  let offset = 0;
  if (s3.length !== s1.length + s2.length) {
    return false;
  }
  for (let i = 0; i < s3.length; i++) {
    const a = s3[i];
    // s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac";
    // 漏了一种情况， 而且这还是s1和s2相同字符都被消费后，再出现这段字符首字的字符时，无法向下匹配。
    const b = s1[num1];
    const c = s2[num2];
    if (a === b && a === c) {
      num1++;
      num2++;
      offset++;
    }
    if (a !== b && a !== c) {
      if (offset === 0) {
        return false;
      } else {

      }
    }
    if (a !== b && a == c) {
      num1 -= offset;
      offset = 0;
      if (s1[num1] === a) {
        num1++
        offset++;
      }
      num2++;
    }
    if (a !== c && a === b) {
      num2 -= offset;
      offset = 0;
      if (s2[num2] === a) {
        num2++
        offset++;
      }
      num1++;
    }
  }
  return true;
};
// s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc";
"abcd"
"adc"
"aabcddc"
s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac";
// s1 = "aa", s2 = "ab", s3 = "aaba"
console.log(isInterleave(s1, s2, s3))