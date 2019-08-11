/*给定三个字符串 s1, s2, s3, 验证 s3 是否是由 s1 和 s2 交错组成的。*/
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3) {
    return false;
  }
  let num1 = 0;
  let num2 = 0;
  let offstr = '';
  // let num3 = 0;
  for (let i = 0; i < s3.length; i++) {
    const item = s3[i];
    if (offstr === item) {
      offstr = '';
      num2++
      continue;
    }
    if (item === s1[num1] && item === s2[num2]) {
      offstr = item;
      num1++;
      continue;
    }

    if (item === s1[num1] && item !== s2[num2]) {
      num1++;
      continue;
    }

    if (item === s2[num2] && item !== s1[num1]) {
      num2++;
      continue;
    }

    if (item !== s1[num1] && item !== s2[num2]) {
      return false;
    }
  }
  return true;
}

let s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac";
//                                       aa b c c
//                                         dbbc  a
//                                       1112120110      
//                                             b  c
// // "aabcc";
// // "dbbca";
// // "aadbbcbcac";
//                                     "abcaebcfbcg";
//                                     "abc    f"
//                                     "abc ebc   g";
//                                      22201111001
//                                      abc
//                                         a
// // abcf
// // abcebcg
// // abcaebcfbcg

// console.log(isInterleave(s1, s2, s3));