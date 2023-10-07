function countSmaller(nums) {
    let privot = nums[0];
    let left = [];
    let right = [];
    for(let i = 1; i < nums.length; i++ ) {
        if (nums[i] < privot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }
    // const leftCount = countSmaller(left);
    function count(nums, i) {
        let privot = nums[0];
        let left = [];
        let right = [];
        let c = 0;
        for (let i = 1; i < nums.lenght; i++) {
            if (nums[i] < privot) {
                left.push(nums[i]);
                c++;
            } else {
                right.push(nums[i]);
            }
        }
        return count().concat(c);
    }
}
// 我们不歌颂苦难的人的，人啊，总得为活着留点希望吧，虽说人是向死而生的， 但是怎么活着，总得留点意义吧！
// 他们不是在歌颂苦难，是有人在歪曲事实，偷换概念，总不能劝人去死吧！不是吗？