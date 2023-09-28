var search = function (nums, target) {
    // 两段升序的过程；可以从头找，从尾找；也可以从中间找
    let left = 0, right = nums.length - 1;
    let result = -1;
    function searchTarget(left, right) {
        let mid = Math.ceil((left + right)/2);
        if (nums[mid] !== target) {
            if (mid -1 >= left) {
                searchTarget(left, mid -1);
            }
            if (mid + 1 <= right) {
                searchTarget(mid + 1, right);
            }
        } else {
            result = mid;
        }
    }
    searchTarget(left, right);
    return result;
}
console.log(search([4,5,6,7,0,1,2], 0));