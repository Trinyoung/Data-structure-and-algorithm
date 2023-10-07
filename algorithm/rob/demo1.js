var rob = function(nums) {
    function rob2(i, j, sum1, sum2) {
        if (i < nums.length) {
            const current = nums[i];
            const next = nums[j] || 0;
            sum2 = sum1 + next > sum2 + next? sum1 + next: sum2 + next;
            sum1 = sum1 + current;
            return rob2(i + 2, j + 2, sum1, sum2);
        }
        return Math.max(sum1, sum2);
    }
    return Math.max(rob2(2, 3, nums[0], nums[1] || 0), rob2(1,2, 0, nums[0]));
};
console.log(rob([6,3,10,8,2,10,3,5,10,5,3]));