var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }
  let double = '';
  let empty = '';
  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < s3.length; i++) {
    if (num1 < s1.length && num2 < s2.length) {
      if (s3[i] === s1[num1] && s3[i] === s2[num2]) {
        num1++;
        num2++;
        double += s3[i];
        continue;
      }

      if (s3[i] === s1[num1] && s3[i] !== s2[num2]) {
        num1++;
        continue;
      }

      if (s3[i] === s2[num2] && s3[i] !== s1[num1]) {
        num2++;
        continue;
      }

      if (s3[i] !== s1[num1] && s3[i] !== s2[num2]) {
        empty += s3[i];
        continue;
      }
    }
    if (num1 < s1.length && num2 === s2.length) {
      if (s3[i] === s1[num1]) {
        num1++;
        continue;
      } else {
        empty += s3[i];
        continue;
      }
    }

    if (num2 < s2.length && num1 === s1.length) {
      if (s3[i] === s2[num2]) {
        num2++;
        continue;
      } else {
        empty += s3[i];
        continue;
      }
    }

    if (num2 === s2.length && num1 === s1.length) {
      empty += s3.substr(i);
      break;
    }
  }
  if (double !== empty) {
    return false;
  }
  return true;
}
let s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac";
// aa b c c                           aa b c c
                                      aa    b c c
                                        dbbc  a
//   dbbc  a                            d b b ca
//    b c
//       b  c

let s1 = "aabc", s2 = "abad", s3 = "aabcabad";
                                   "aabc"
                                   "a b a  d"
                                   "    abad"
                                    2 2  00
                                    ab   ba
                                    
                                    "aabacbad"
                                    //  2 2  00
                                    "aab c   "
                                    "a ba   d"
                                    "aab c   "
                                    "   a bad"


let s1 = "abac", s2 = "abad", s3 = "abaabad"
                                     
console.log(isInterleave(s1, s2, s3));