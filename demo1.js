function isPowerOfFiveMultiple(num) {
    // 判断是否为正整数
    if (num <= 0 || Math.floor(num) !== num) {
      return false;
    }
  
    // 判断是否为5的次方的倍数
    while (num > 1) {
      if (num % 5 !== 0) {
        return false;
      }
      num /= 5;
    }
  
    return true;
  }
  
  // 示例
  console.log(isPowerOfFiveMultiple(50));  // true，因为25是5的二次方
  console.log(isPowerOfFiveMultiple(125)); // true，因为125是5的三次方
  console.log(isPowerOfFiveMultiple(30));  // false，因为30不是5的次方的倍数
  