var twoSum = function (nums, target) {
    const n = nums.length, anw = []
    let slow = 0, fast = n - 1
    while (slow < fast) {
      const sum = nums[slow] + nums[fast]
      if (sum < target) {
        slow++
      } else if (sum > target) {
        fast--
      } else {
        anw.push(slow + 1, fast + 1)
        break
      }
    }
    return anw
  }