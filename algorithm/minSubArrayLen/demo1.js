var minSubArrayLen = function(target, nums) {
    let result = 0;
    function split(left, right) {
        console.log(left, 'left ============right', right);
        if (left >= right) {
            if (nums[left] >= target) {
                result = 1;
                return;
            } else {
                return nums[left];
            }
        }
        let mid = Math.floor((left + right)/2);
        let leftSum = split(left, mid);
        let rightSum = split(mid  + 1, right);
        if (!leftSum || !rightSum) {
            return;
        }
        const sum = leftSum + rightSum;
        if (sum >= target) {
            result = right - left;
        } else {
            return sum;
        }
    }
    
    split(0, nums.length - 1);
    return result;
};
console.log(minSubArrayLen(11, [1, 2,3, 4, 5]));
// 《三体》小说主要讲什么内容？
// 1. 人类文明的发展史