/*给定三个字符串 s1, s2, s3, 验证 s3 是否是由 s1 和 s2 交错组成的。*/
var isInterleave = function (s1, s2, s3) {
  let num1 = 0;
  let num2 = 0;
  let turn = 1;
  let result = true;
  if(s3.length < s1.length+ s2.length) {
    return false;
  }
  for (let i = 0; i < s3.length; i++) {
    if (turn === 1) {
      if (s3[i] === s1[num1]) {
        num1++;
      } else {
        if (s3[i] === s2[num2]) {
          num2++;
          turn = 2;
        } else {
          result = false;
          return result;
        }
      }
    } else {
      if (s3[i] === s2[num2]) {
        num2++;
      } else {
        if (s3[i] === s1[num1]) {
          num1++;
          turn = 1;
        } else {
          result = false;
          return result;
        }
      }
    }
  }
  return result;
};
s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
console.log(isInterleave(s1, s2, s3))