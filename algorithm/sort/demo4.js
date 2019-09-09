/**
 * 归并算法是第一个可以在现实中实现的算法，它的算法复杂度为：O(nlog^n) ;
 * 归并排序的思想是通过将数组不断进行分割，分割到最小单元时在进行比较大小合并。
 */
function mergeSortRec(arr) {
    var length = arr.length;
    if (length === 1) {
        return arr;
    }
    var mid = Math.floor(length / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);
    return merge(mergeSortRec(left), mergeSortRec(right));
}

function merge(left, right) {
    var result = [];
    il = 0;
    ir = 0;
    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    while (il < left.length) {
        result.push(left[il++]);
    }
    while (ir < right.length) {
        result.push(right[ir++]);
    }
    return result;
};
const before = new Date().getTime();
console.log(mergeSortRec([1, 2, 4, 5, 12, 4, 5, 6, 1, 8, 7, 9, 5, 3, 2, 1, 3, 45, 3, 3, 2, 1, 21, 3, 4, 23, 121212, 12, 12, 31112, 4, 1, 1, 4, 56, 6, 2, 5]));
console.log(new Date().getTime() - before);