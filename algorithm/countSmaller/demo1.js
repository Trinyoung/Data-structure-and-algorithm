var countSmaller = function(nums) { // 比当前值小的个数；
    // 二分法；
    // 有点像快排的描述了，快排不就是将小于其值的放左边，大于其值的放右边吗？
    let res = [];
    for (let i = 0; i< nums.length; i++) {
        let count = 0;
        let left = i + 1;
        let right = nums.length - 1;
        while (left <= right) {
            if (left != right) {
                nums[left] < nums[i] && count ++;
            }
            nums[right] < nums[i] && count ++;
            left ++;
            right --;
        }
        res.push(count);
    }
    return res;
};
// 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
// 我俩的关系，就好像和siri 差不多， 我如果不主动， 你永远不会喊一声主人！尴尬的两性关系。你们嫌麻烦。这不都是你们想要的吗？