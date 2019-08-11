/*给定三个字符串 s1, s2, s3, 验证 s3 是否是由 s1 和 s2 交错组成的。*/
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }
  let num1 = 0;
  let num2 = s1.length - 1;
  // const endNum = s3.length - 1;
  let str1 = '';
  let str2 = '';
  for (let i = 0; i < s3.length; i++) {
    if (num1 < s1.length) {
      if (s1[num1] === s3[i]) {
        num1++;
      } else {
        str1 += s3[i];
      }
    } else {
      console.log(i, str1, s3.substr(i));
      str1 += s3.substr(i);
      break;
    }
  }

  for (let i = s3.length - 1; i >= 0; i--) {
    if (num2 >= 0) {
      if (s1[num2] === s3[i]){
        num2 --;
      } else {
        str2 = s3[i] + str2;
      }
    } else {
      str2 = s3.substr(0, i+1) + str2;
      break;
    }
  }
  console.log(str1, str2);
  if (str1 === s2 || str2 === s2) {
    return true;
  } else {
    return false;
  }
}
let s1 = "aabcc",
  s2 = "dbbca",
  s3 = "aadbbcbcac";

// "aabc"
// "abad"
// "aabadabc"   // adab; // aabd
console.log(isInterleave(s1, s2, s3));