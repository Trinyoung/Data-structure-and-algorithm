/* 
    -  首先从数组中选择中间一项作为主元。
    -  创建两个指针，左边指向数组的第一项，右边指向数组的最后一项。移动左指针直到我们找到一个比主元大的元素，
    接着移动右指针直到找到一个比主元小的元素，然后交换他们，重复这个过程，直到左指针超过了右指针。
    这个过程将使得比主元小的值都排在了主元之前，比主元大的数组都排在了主元之后。这一步叫划分操作。
    -  接着，算法对划分后的小数组(较主元小的数组，较主元大的数组)重复之前两个步骤，直至数组已完全排序。
*/
function quickSort(arr) {
    quick(arr, 0, arr.length - 1)
}

function quick(arr, left, right) {
    var index;
    if (arr.length > 1) {
        index = partition(arr, left, right);
        if (left < index - 1) {
            quick(arr, left, index - 1);
        }
        if (index < right) {
            quick(arr, index, right);
        }
    }
}

function partition(arr, left, right) {
    var pivot = arr[Math.floor((right + left) / 2)],
        i = left,
        j = right;

    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    return i;
}