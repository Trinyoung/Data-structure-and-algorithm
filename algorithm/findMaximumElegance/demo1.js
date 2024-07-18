/**
 * @param {number[][]} items
 * @param {number} k
 * @return {number}
 */
var findMaximumElegance = function (items, k) {
    const selectedCategory = {};
    let selectedNum = 0;
    let categoryNum = 0;
    let res = 0;
    const newArr = items.sort((a, b) => b[0] - a[0]);
    console.log(newArr, 'newArr')
    for (let i = 0; i < newArr.length; i++) {
        // console.log(selectedCategory, newArr, i, 'selectedCategory')
        if (selectedNum < k) {
            selectedNum++;
            if (selectedCategory[newArr[i][1]]) {
                selectedCategory[newArr[i][1]].push(i); // 
            } else {
                selectedCategory[newArr[i][1]] = [i];
            }
            if (selectedNum === k) {
                const selectedNums = Object.values(selectedCategory);
                // console.log(selectedNums, 'selectedNums')
                categoryNum = selectedNums.length;
                res = categoryNum ** 2 + selectedNums.reduce((res, item) => res += item.reduce((r, i) => r += newArr[i][0], 0), 0)
            }
        } else {
            // console.log(res,'res is ddddd', i)
            if (!selectedCategory[newArr[i][1]]) {
                // 就需要往前找，直到找到它所在的值
                let j = i - 1;
                let obj = {};
                let num = 1;
                while(j >= 0) {
                    if (selectedCategory[newArr[j][1]]?.length > 1) {
                        const index = selectedCategory[newArr[j][1]][selectedCategory[newArr[j][1]].length - 1];
                        const newNum = res - newArr[index][0] + newArr[i][0] + 2 * categoryNum + 1;
                        if (newNum > res) {
                            categoryNum++;
                            selectedCategory[newArr[j][1]].pop();
                            res = newNum;
                            selectedCategory[newArr[i][1]] = [newArr[i][0]];
                            newArr.splice(index, 1);
                            i--;
                        }
                        break;
                    } else {
                        num++;
                        if (num === k - 1 && new) {}
                        if (obj[newArr[j][1]]) {
                            obj[newArr[j][1]].push(j);
                        } else {
                            obj[newArr[j][1]] = [j];
                        }
                    }
                    j--;
                }
            }
        }
        if (categoryNum === k) return res;
    }
    console.log(selectedCategory, 'selectedCategory')
    return res;
}
console.log(findMaximumElegance([[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11]], 10))
// 8 + 6 + 4 + 1 = 14 + 5 = 19 + 3 * 3 = 28;
// 25 + 3 + 18 + 14 + 6 + 2 = 58;
