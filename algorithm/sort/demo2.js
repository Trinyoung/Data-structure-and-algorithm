// 首先找到最小值，然后依次找到第二小的值，以此类推
// 选择排序
// function selectSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let min = arr[i];
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < min) {
//                 min = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = min;
//             }
//         }
//     }
//     return arr;
// }
console.log(selectSort([9, 1, 4, 2, 4, 6, 4, 6, 7, 2]));

function selectSort() {
    for (let i =0; i < arr.length; i++){
        let min = arr[i];
        for(let j = i + 1; j < arr.length; j ++){
            if (arr[j] < arr[i]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
// 1,2,2,4,4,4,6,6,7,9