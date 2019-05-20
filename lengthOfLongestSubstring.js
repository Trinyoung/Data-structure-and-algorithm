// "abcabcbb"
var lengthOfLongestSubstring = function (s) {
  if (s != undefined) {
    const strArr = s.split('');
    let j = 0; // 当前字符串的长度；
    let max = 0; // 最长字符串长度；
    let item = {};
    let first = 0;
    for (let i = 0; i < strArr.length; i++) {
      if (item[strArr[i]] == undefined || first > item[strArr[i]]) {
        if (j==3){
          // console.log(j,'j');
          console.log(first, item[strArr[i]], strArr[i]);
        }
        item[strArr[i]] = i;
        j++;
      } else {
        if (j > max) {
          max = j;
        }
        first = item[strArr[i]] + 1;
        j = i - item[strArr[i]];
        console.log(first, j);
        item[strArr[i]] = i;
      }
    }
    if (j > max) {
      max = j;
    }
    return max;
  } else {
    return 0;
  }
};

console.log(lengthOfLongestSubstring("abcabcbb"));
// first j
// 0     
