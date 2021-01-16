/*
    Pseudocode:
    - Store the first element [index] as the smallest value you've seen so far.
    - Compare this item to the next item in the array until you find a smaller number.
    - If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
    - If the "minimum" is not the value (index) you initially began with, swap the two values.
    - Repeat this with the next element until the array is sorted.
*/

// [1,4,2,5,6,8,7]
// []

function selectionSort(arr) {
    for (let i=0; i<arr.length; i++) {
        let min = i;
        for (let j=i+1; j<arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}

console.log(selectionSort([3,1,4,2,5,6,8,7]));