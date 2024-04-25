var trap = function(height) {
    //  双指针，高者可以不动；
    if (height.length <= 1) return 0;
    let left = 0;
    let right = height.length - 1;
    let area = (right - left - 1) * Math.min(height[left], height[right]);
    let h = Math.min(height[left], height[right]);
    while (left < right) {
        if (height[left] < height[right]) {
            left++;
            if (left < right) {
                if (height[left] < h) {
                    area -= height[left];
                } else {
                    area-= (h);
                    const newH = Math.min(height[left], height[right])
                    const extra = newH - h;
                    area += (right - left - 1) * extra;
                    h = newH;
                }
            }
        } else {
            right--;
            if (left < right) {
                if (height[right] < h) {
                    area -= height[right];
                } else {
                    area -= (h);
                    const newH = Math.min(height[left], height[right])
                    const extra = newH - h;
                    area += (right - left - 1) * extra;
                    h = newH;
                }
            }
            
        }
    }
    return area;
};
console.log(trap([2,1,0,1,3]))