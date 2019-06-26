var checkInclusion = function (s1, s2) {
  const length1 = s1.length; // 子
  const length2 = s2.length; // 母
  let i = length1;
  let j = length1;
  let dis = 0;
  if (length1 > length2) {
    return false;
  }
  // 后移位数 = 坏字符的位置 - 搜索词中的上一次出现位置
  // 后移位数 = 好后缀的位置 - 搜索词中的上一次出现位置
  while (j >= 0) {
    if (s1[i] === s2[j]) {
      if (j == 0) {
        return true;
      }
      i--;
      j--;
    } else {
      dis = j - x;
    }
  }
};