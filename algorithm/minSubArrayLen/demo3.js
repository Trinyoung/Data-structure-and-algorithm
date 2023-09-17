var minSubArrayLen = function(target, nums) { 
    let sum = 0;
    let start = 0;
    let end = 0;
    let min = Infinity;
    while (end < nums.length) {
        sum += nums[end];
        while (sum >= target) {
            // if (sum >= target) {
            //     return end - start + 1;
            // }
            min = Math.min(min, end - start + 1);
            sum -= nums[start];
            start ++;
        }
        end ++;
    }
    return min;
}
console.log(minSubArrayLen(7, [2,3,1,2,4,3]));