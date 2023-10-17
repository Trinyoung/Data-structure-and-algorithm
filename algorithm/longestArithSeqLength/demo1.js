var longestArithSeqLength = function(nums) {
    // 极限法；
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            let difference = nums[j] - nums[i];
            let pre = nums[j];
            let len = 2;
            for (let k = j+1; k < nums.length; k++) {
                if (nums[k] - pre === difference) {
                    pre = nums[k];
                    len++;
                }
            }
            max = Math.max(max, len);
        }
    }
    return max;
};