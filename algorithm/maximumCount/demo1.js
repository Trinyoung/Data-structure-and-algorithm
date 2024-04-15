var maximumCount = function(nums) {
    let start = 0;
    let end = nums.length -1;
    let pos = 0;
    let ng = 0;
    while(start < end) {
        // console.log(start, end, '----')
        let center = Math.floor((start + end)/2);
        console.log(center, nums[center])
        if (nums[center] === 0) {
            nums.splice(center, 1);
            end --;
        } else {
            if (nums[center] > 0) {
                end = center;
                if (nums[center - 1] < 0) {
                    ng = center;
                    pos = nums.length - center;
                    break;
                }
            }
            if (nums[center] < 0) {
                start = center;
                if (nums[center + 1] > 0) {
                    pos = nums.length - center - 1
                    ng = center + 1;
                    break;
                }
            }
        }
        
    }
    console.log(pos, ng, Math.max(pos, ng))
    return Math.max(pos, ng)
};
// [-1764,-1562,-1226,-1216,-402,-386,-133,979,1227,1992]
maximumCount([-1764,-1562,-1226,-1216,-402,-386,-133,979,1227,1992])