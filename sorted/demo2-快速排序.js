function quickSort(arr) {
  // 如果数组长度小于等于1，直接返回
  if (arr.length <= 1) {
    return arr;
  }

  // 选择一个基准元素
  const pivot = arr[0];

  // 定义左右两个数组
  const left = [];
  const right = [];

  // 将比基准元素小的数放入左数组，大的数放入右数组
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // 对左右两个数组再次进行快速排序，然后合并结果
  return quickSort(left).concat(pivot, quickSort(right));
}

// 示例用法
const arr = [9, 4, 6, 2, 7, 1, 5, 3, 8];
const sortedArr = quickSort(arr);
console.log(sortedArr);