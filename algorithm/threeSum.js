var threeSum = function (nums) {
  let res = [];
  let frontTwo = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j]
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] <= 0) {
      for (let j = i + 1; j < nums.length - 1; j++) {
        if (nums[i] + nums[j] <= 0) {
          let temp = nums[i] + nums[j];
          for (let k = j + 1; k < nums.length; k++) {
            if (nums[k] == 0 - temp) {
              let arr = [nums[i], nums[j], nums[k]];
              if (frontTwo[arr[0] + arr[1]] !== arr[1]) {
                res.push(arr);
                frontTwo[arr[0] + arr[1]] = arr[1]
              }
              break;
            }
          }
        }
      }
    } else {
      break;
    }
  }
  return res;
};
console.log(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]));