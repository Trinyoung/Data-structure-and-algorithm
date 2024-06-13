function maxPointsInsideSquare(points, s) {
    const distances = new Map();
    let num = 0;
    let border = Infinity;
    for (let i = 0; i < s.length; i++) {
        const point = points[i];
        const distance = Math.max(Math.abs(point[0]), Math.abs(point[1]));
        if (distances.has(s[i])) {
            
            if (distances.get(s[i]) !== distance) {
                border = Math.min(Math.max(distances.get(s[i]), distance) - 1, border);
                
            } else {
                border = distance - 1;
            }
            distances.set(s[i], Math.max(distances.get(s[i]), distance) - 1);
        } else {
            distances.set(s[i], distance)
        }
    }
    console.log(distances, border, 'dddd')
    for (const [key, value] of distances) {
      if (value <= border) num++;
    }
    return num;
}

// console.log(maxPointsInsideSquare([[16,32],[27,3],[23,-14],[-32,-16],[-3,26],[-14,33]], "aaabfc"))

console.log(maxPointsInsideSquare([[1,1],[-2,-2],[-2,2]], "abb"))