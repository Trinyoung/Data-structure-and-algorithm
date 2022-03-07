var threeSumClosest = function (nums, target) {
    let min = Infinity;
    let diff = Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        const cur = nums[i];
        for (let k = i + 1; k < nums.length - 1; k++) {
            const next = nums[k];
            for (let j = k + 1; j < nums.length; j++) {
                const third = nums[j];
                if (cur + next + third === target) {
                    return cur + next + third;
                }
                if (Math.abs(cur + next + third - target) < Math.abs(diff)) {
                    min = cur + next + third;
                    diff = min - target;
                };
            }
        }
    }
    return min;
};