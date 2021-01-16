function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    
    return mergeArrs(left, right);
}
  
function mergeArrs(arr1, arr2) {
    let res = [], i = 0, j = 0;

    while (i < arr1.length && j < arr1.length) {
        if (arr1[i] > arr2[j]) {
        res.push(arr2[j]);
        j++;
        } else {
        res.push(arr1[i]);
        i++;
        }
    }

    while (i < arr1.length) {
        res.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        res.push(arr2[j]);
        j++;
    }

    return res;
}

console.log(mergeSort([2,14,99,100,4,5,90]));