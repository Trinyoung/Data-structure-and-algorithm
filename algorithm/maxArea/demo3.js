var maxArea = function (height) {
    let left = 0
    let right = height.length - 1
    let res = 0
    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left)
        if (area > res) res = area
        if (height[left] > height[right]) {
            right--
        } else {
            left++
        }
    }
    return res
};