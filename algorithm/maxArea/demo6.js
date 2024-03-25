var maxArea = function(height) {
    let left = 0;
    let right = height.length -1;
    let max = 0;
    
    function interate(left, right) {
        if (left < right) {
            max = Math.min(height[left], height[right]) * (right - left);
            console.log(max, 'max -------<')
            interate(left + 1, right);
            interate(left, right -1);
        }
    }
    interate(left, right);
    return max;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]));