/* 
给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回 滑动窗口中的最大值 。
 */
var maxSlidingWindow = function(nums, k) {
    const q = [];
    let i  = 0;
    let res = [];
    while (i < nums.length) {
        if (q[0] < i - k + 1) q.shift();
        while (q.length && nums[q[q.length - 1]] < nums[i]) {
            q.pop();
        }
        q.push(i);
        if (i >= k - 1) {
            res.push(nums[q[0]]);
        }
        
        i++;
    }
    return res;
}
// 这是单调栈的算法