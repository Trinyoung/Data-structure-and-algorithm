var trap = function(height) {
    if (height.length <= 1) return 0;

    let left = 0;
    let right = height.length - 1;
    let area = 0;
    let leftMax = height[left];
    let rightMax = height[right];

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                area += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                area += rightMax - height[right];
            }
            right--;
        }
    }

    return area;
};