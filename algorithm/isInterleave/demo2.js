/*给定三个字符串 s1, s2, s3, 验证 s3 是否是由 s1 和 s2 交错组成的。*/
var isInterleave = function (s1, s2, s3) {
  let num1 = 0;
  let num2 = 0;
  let offset = 0;
  let offstr = '';
  let num3 = 0;
  if (s3.length !== s1.length + s2.length) {
    return false;
  }
  for (let i = 0; i < s3.length; i++) {
    const a = s3[i];
    const b = s1[num1];
    const c = s2[num2];
    if (num3 > 0) {
      if (offstr[num3] === a) {
        num3++;
      } else {
        if (a === b) {
          num1++;
          num2 = num2 - offset + num3;
        }

        if (a === c) {
          num2++;
          num1 = num1 - offset + num3;
        }
      }
    }
    if (a === b && a === c) {
      num1++;
      num2++;
      offset++;
      offstr += a;
    }
    if (a !== b && a !== c) {
      if (offset === 0) {
        return false;
      } else {
        if (offstr[0] === a) {
          num3++;
        } else {
          return false;
        }
        if (offstr) {

        }
      }
    }
    if (a !== b && a == c) {
      num1 -= offset;
      offset = 0;
      if (s1[num1] === a) {
        num1++
        offset++;
        offstr += a;
      }
      num2++;
    }
    if (a !== c && a === b) {
      num2 -= offset;
      offset = 0;
      if (s2[num2] === a) {
        num2++
        offset++;
        offstr += a;
      }
      num1++;
    }
  }
  return true;
};

s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac";
s1 = {
  'a': [0, 1],
  'b': [2],
  'c': [3, 4]
};

s2 = {
  'd': [0],
  'b': [1, 2],
  'c': [3],
  'a': [4]
};

s3 = {
  'a': [0, 1, 8],
  'd': [2],
  'b': [3, 4, 6],
  'c': [5, 9]
};