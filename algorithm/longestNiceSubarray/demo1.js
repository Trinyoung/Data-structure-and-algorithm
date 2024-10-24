var longestNiceSubarray = function(nums) {
    if (nums.length < 2) return nums.length;
    let max = 0;
    let left = 0;
    let right = left + 1;
    while (right < nums.length) {
        if (nums[right] & nums[left]) {
            left = right;
            right++;
        } else {
            max = Math.max(max, right - left);
            right++;
        }
    }
};