var minSubArrayLen = function(target, nums) {
    // let result = 0;
    nums.sort((a, b) => b - a);
    let sum = 0;
    let i = 0;
    console.log(nums, 'nums ======');
    while ( i < nums.length ) {
        sum += nums[i];
        console.log(i, sum, nums[i], '=-======');
        if (sum >= target) {
            return i + 1;
        }
        i ++;
    }
    return 0;
};
console.log(minSubArrayLen(213, [12,28,83,4,25,26,25,2,25,25,25,12]));