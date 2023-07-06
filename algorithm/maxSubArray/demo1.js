var maxSubArray = function(nums) {
    let max = nums[0];
    let i = 1;
    let pre = 0;
    while(i < nums.length) {
        if (nums[i] > 0) {
            if (nums[i] + pre > 0 && max + pre >=0 ) {
                max += (nums[i] + pre);
                pre = 0;
                continue;
            }
            if (nums[i] + pre <= 0 && max + pre >=0) {
                pre += nums[i];
                continue;
            }

            if (nums[i] + pre > 0 && max + pre <0) {
                
            }
            // if (nums[i] + pre > 0 && max + pre >= 0) {
            //     max += (nums[i] + pre);
            //     console.log(max, 'max is first');
            //     pre = 0;
            //     i++;
            //     continue;
            // }
            // if (nums[i] > max) {
            //     max =
            // }
            // if (max + pre < 0) {
            //     if (nums[i] >= max) {
            //         max = nums[i];
            //         pre = 0;
            //     } else {
            //         pre = nums[i];
            //     }
            //     i++;
            //     continue;
            // }
            // pre += nums[i];
            // i++;
        } else {
            // if (nums[i] > max) {
            //     max = nums[i]
            //     pre = 0;
            // } else {
            //     pre += nums[i];
            // }; 
            // i++;
        }
    }
    return max;
};
console.log(maxSubArray([8, -19, 5, -1, 14]));