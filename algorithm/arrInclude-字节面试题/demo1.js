// <!--arrA 包含arrB 返回2， arrB 包含arrA返回1，arrA等于arrB返回0，互不包含返回-1-->
function arrInclude(arrA, arrB) {
    const arrItems = {};
    for (let item of arrA) {
        if (arrItems[item]) {
            arrItems[item]++;
        } else {
            arrItems[item] = 1;
        }
    }

    for (let item of arrB) {
        if (arrItems.hasOwnProperty(item)) {
            arrItems[item]--;
        }
    }
}