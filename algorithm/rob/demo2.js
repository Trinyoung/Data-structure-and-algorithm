function rob(nums) {
    let i = 0;
    let j = 1;
    let sum1 = 0;
    let sum2 = 0;
    while(i < nums.length) {
        const current = nums[i];
        const next = nums[j] || 0;
        sum2 = sum1 + next > sum2 + next? sum1 + next: sum2 + next;
        sum1 = sum1 + current;
        i += 2;
        j += 2;
    }
}