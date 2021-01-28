/*
    Pseudocode:
    - Start by picking the second element in the array.
    - Now compare the second element with the one before it and swap if necessary.
    - Continue to the next element and if it is in the incorrect order, iterate through the second portion (ie the left side) to place the element in the correct place.
    - Repeat until the array is sorted.
*/

function insertionSort(arr) {
    for (var i=1; i<arr.length; i++) {
        var currentVal = arr[i]; // keep current arr[i] safe for future overthrow
        for (var j=i-1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]; // arr[j] takes over arr[i]
        }
        arr[j+1] = currentVal; // smart way to assign old arr[i] to its original position
    }
    return arr
}

console.log(insertionSort([2,1,46,9]));