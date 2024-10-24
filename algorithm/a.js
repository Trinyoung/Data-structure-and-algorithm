const func = (arr, k) => { 
    // arr 是长度为2n的服务器数组，arr[i]表示服务的容量，两两配对，每一对要关闭其中一台，其中关闭小的，会使cost+1，关闭大的，成本cost不变；
    // 返回关闭服务器后，剩下值的和大于等于k的最小cost；
    let n = arr.length;
    const total = arr.reduce((res, item) => {
        return res += item;
    }, 0);
    // 排序和二分法是一个不错的选择
    arr.sort((a, b) => a - b);
    
    
    // 所以，我们尽量要关闭大的;
    let j = n - 1;
    let sum = 0;
    while (sum < total - k) {
        sum += arr[j];
        j--;
    }
    
    // 得到了j的值，如果j + 1 => n - 1; n - 1 - j 长度； 
    const minLen = n - 1 - j; // minLen < n/2; 
    // n/2 - minLen
}
// 我们先把它所存在的有几个给数出来，