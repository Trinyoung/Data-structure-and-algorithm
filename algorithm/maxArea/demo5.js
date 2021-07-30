function maxArea (height) {
    let maxArea = 0;
    let high = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
       high = height[left] >= height[right]? height[right]: height[left];
       let width = right - left;
       let area = high * width;
       maxArea = area > maxArea ? area: maxArea;
       if (height[left] > height[right]) {
           right --;
       } else {
            left ++;
       }
    }
    return maxArea;
}
console.log(maxArea([4, 3, 2, 1, 4]));