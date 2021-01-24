function getPivotIndex(arr, start=0, end=arr.length-1) {
    let pivot = arr[start]
    let indexTracker = start
    
    for (let i = start+1; i <= end; i++) {
      if (pivot > arr[i]) {
        indexTracker++
        [arr[indexTracker], arr[i]] = [arr[i], arr[indexTracker]]
      }
    }
    [arr[indexTracker], arr[start]] = [arr[start], arr[indexTracker]]
    
    return indexTracker
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (right > left) {
        let pivotIndex = getPivotIndex(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

quickSort([3,1,4,7,2,5,6])