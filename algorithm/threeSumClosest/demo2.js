var threeSumClosest = function (nums, target) {
    let min = Infinity;
    let diff = min - target;
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        let [l, r] = [i + 1, nums.length - 1];

        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum === target) {
                return sum;
            }
            if (Math.abs(sum - target) < diff) {
                min = sum;
                diff = Math.abs(sum - target);
            }
            if (sum < target) {
                l++
            } else if (sum > target) {
                r--
            } else {
                return target;
            }
        }
    }
    return min;
};