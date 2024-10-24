// 给定一个仅包含 0 和 1 、大小为 rows x cols 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
const maximalRectangle = (matrix) => {
    // dp[i][j] = [Math.min(dp[i][j - 1][0], dp[i-1][j][0] - 1) + 1, dp[i - 1][j][1] + 1]
    
    // 解题思路是什么？
    if(!matrix.length || !matrix[0].length) return 0;

    const heights = new Array(matrix[0].length).fill(0);
    let maxArea = 0;

    for (let i = 0; i < matrix.length; j++) {
        for (let j = 0; j < matrix[0].length; j++) {
            heights[j] = matrix[i][j] === '1'? heights[j] + 1: 0;
        }
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }
    
    return maxArea;
}
const largestRectangleArea = (heights) => {
    const stack = [];
    let maxArea = 0;
    heights = [0, ...heights, 0];
    for (let i = 0; i < heights.length; i++) {
        while(stack.length && heights[stack[stack.length - 1]] > heights[i]) {
            const height = heights[stack.pop()];
            const width = i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width)
        }
        stack.push(i)
    }
    return maxArea;
};
demo1([
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]])