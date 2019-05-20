const str = "adfasdf";
console.log(str.charAt(1))
console.log(str[2])
var lengthOfLongestSubstring = function (s) {
  let obj = {};
  let sLength = 0;
  let max = 0;
  let first = 0;
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (obj[item] >= first) {
      if (sLength > max) {
        max = sLength;
      }
      first = obj[item] + 1;
      sLength = i - obj[item];
      obj[item] = i;

    } else {
      obj[item] = i;
      sLength++;
    }
  }
  if (sLength > max) {
    max = sLength;
  }
  return max;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
