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
    let Bextra = false;
    for (let item of arrB) {
        if (arrItems.hasOwnProperty(item)) {
            arrItems[item]--;
            if (arrItems[item] === 0) {
                delete arrItems[item];
            }
        } else {
            Bextra = true;
        }
    }
    let Aextra = false;
    if (Object.keys(arrItems).length > 0 ) {
        Aextra = true;
    }
    if (Bextra && Aextra) return -1;
    if (!Bextra && !Aextra) return 0;
    if (Bextra && !Aextra) return 1;
    if (!Bextra && Aextra) return 2;
}

console.log(arrInclude([1, 2, 3, 4], [1, 2, 4, 3]));