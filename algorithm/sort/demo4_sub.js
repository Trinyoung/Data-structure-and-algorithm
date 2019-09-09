function mergeSort(arr) {
  const length = arr.length;
  if (length > 1) {
    const mid = Math.floor(length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return mergeSortRec(mergeSort(left), mergeSort(right));
  } else {
    return arr;
  }
}
// 1,2,3,4,5
function mergeSortRec(left, right) {
  let result = [];
  let num1 = 0;
  let num2 = 0;
  while (num1 < left.length && num2 < right.length) {
    if (left[num1] < right[num2]) {
      result.push(left[num1++]);
    } else {
      result.push(right[num2++]);
    }
  }
  if (num1 < left.length) {
    result = result.concat(left.slice(num1));
  }
  if (num2 < right.length) {
    result = result.concat(right.slice(num2));
  }
  return result;
}
const before = new Date().getTime();
console.log(mergeSort([1, 2, 4, 5, 12, 4, 5, 6, 1, 8, 7, 9, 5, 3, 2, 1, 3, 45, 3, 3, 2, 1, 21, 3, 4, 23, 121212, 12, 12, 31112, 4, 1, 1, 4, 56, 6, 2, 5]));
console.log(new Date().getTime() - before);