function quickSort(arr){
    quick(arr, 0, arr.length -1)
}

function quick(arr , left, right){
    var index;
    if (arr.length > 1) {
        index = partition(arr, left, right);
        if(left < index -1){
            quick(arr, left, index - 1);
        }
        if(index < right){
            quick(arr, index, right);
        }
    }
}

function partition(arr, left, right){
    var pivot = arr[Math.floor((right + left)/2)],
    i = left,
    j = right;

    while(i<=j){
        while(arr[i]<pivot){
            i++;
        }
        while(arr[j]>pivot){
            j--;
        }
        if(i<=j){
            [arr[i],arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    return i;
}