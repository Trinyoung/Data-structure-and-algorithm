function maxStr(s) {
  let maxValues = [];
  let maxValue = 0;
  const obj = {};
  if (s && s.length <= 1) {
    maxValues.push(s);
  }
  if (s && s.length > 1) {
    for(let ele of s){
      if (obj[ele]) {
        obj[ele]++;
      } else {
        obj[ele] = 1;
      }
      if (obj[ele] === maxValue) {
        maxValues.push(ele);
        continue;
      }
      if (obj[ele] > maxValue) {
        maxValues = [ele];
        maxValue = obj[ele];
      }
    };
  }
  // console.log(obj);
  return maxValues;
}

console.log(maxStr());