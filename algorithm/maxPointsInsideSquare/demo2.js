function distance(point) {
    return Math.pow(point[0], 2) + Math.pow(point[1], 2);
}

function maxPointsInsideSquare(points, s) {
    const labelPointsMap = new Map();
    
    // 将具有相同标签的点放在一起
    for (let i = 0; i < s.length; i++) {
        const label = s[i];
        const point = points[i];
        if (!labelPointsMap.has(label)) {
            labelPointsMap.set(label, []);
        }
        labelPointsMap.get(label).push(point);
    }
    
    let maxPoints = 0;
    
    // 遍历所有相同标签的点，找出能够构成合法正方形的最大点数
    for (const pointsArr of labelPointsMap.values()) {
        const distances = new Map();
        
        // 将点与原点的距离分类
        for (const point of pointsArr) {
            const dist = distance(point);
            distances.set(dist, (distances.get(dist) || 0) + 1);
        }
        
        // 遍历距离 Map，找出能够构成合法正方形的点数
        for (const [dist, count] of distances) {
            maxPoints = Math.max(maxPoints, count);
        }
    }
    
    return maxPoints;
}
console.log(maxPointsInsideSquare([[16,32],[27,3],[23,-14],[-32,-16],[-3,26],[-14,33]], "aaabfc"))

