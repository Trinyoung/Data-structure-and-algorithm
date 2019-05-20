var checkInclusion = function (s1, s2) {
  const length1 = s1.length; // 子
  const length2 = s2.length; // 母
  let i = length1;
  let j = length1;
  if (length1 > length2) {
    return false;
  }
  while (i < length2) {
    while (s1[j] === s2[i]) {
      j--;
      i--;
    }

  }
};