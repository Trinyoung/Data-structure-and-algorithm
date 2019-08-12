const arr = [1, 3, 4, 5, 1, 3, 4, 2]
function arrayquchong(arr) {
  const obj = {};
  for (let i = 0; i< arr.length; i++) {
    if (obj[arr[i]]) {
      arr.splice(i, 1);
      i--;
    } else {
      obj[arr[i]] = true;
    }
  }
  return arr;
}
console.log(arrayquchong(arr));