var findMaximumElegance = function (items, k) {
    const selectedCategory = {};
    const selectedNum = 0;
    let categoryNum = 0;
    let res = 0;
    const newArr = items.sort((a, b) => b[0] - a[0]);
    for (let i = 0; i < newArr.length; i++) {
        if (selectedNum < k) {
            selectedNum++;
            if (selectedCategory[newArr[i][1]]) {
                selectedCategory[newArr[i][1]].push(newArr[i][0]); // 
            } else {
                selectedCategory[newArr[i][1]] = [newArr[i][0]];
            }
            if (selectedNum === k) {
                const selectedNums = Object.values(selectedCategory);
                categoryNum = selectedNums.length;
                res = categoryNum ** 2 + selectedNums.reduce((res, item) => res += item.reduce((r, i) => r += i, 0), 0)
            }
        } else {
            if (!selectedCategory[newArr[i][1]]) {
                // 就需要往前找，直到找到它所在的值
                let j = i - 1;
                while(j >= 0) {
                    if (selectedCategory[newArr[j][1]].length > 1) {
                        const newNum = res - selectedCategory[newArr[j][1]][selectedCategory[newArr[j][1]].length - 1] + newArr[i] + 2 * categoryNum + 1;
                        if (newNum > res) {
                            categoryNum++;
                            selectedCategory[newArr[j][1]].pop();
                            res = newNum;
                            selectedCategory[newArr[i][1]] = [newArr[i][0]];
                        }
                        break;
                    }
                    j--;
                }
            }
        }
        if (categoryNum === k) return res;
    }
    return res;
}