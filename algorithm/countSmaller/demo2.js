// 给你一个整数数组 nums ，按要求返回一个新数组 counts 。数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。
var countSmaller = function(nums) {
    let res = [];
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let leftCount = 0;
        let rightCount = 0;
        let i = nums.length - 1;
        while (i > left) {
            if (nums[i] < nums[left]) {
                leftCount ++;
            }
            if (i > right && nums[i] < nums[right]) {
                rightCount ++;
            }
            i --;
        } 
        [res[left], res[right]] = [leftCount, rightCount]
        left ++;
        right --;
    }
};