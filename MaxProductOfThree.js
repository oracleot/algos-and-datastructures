/*
The problem can be solved in O(n) without sorting the array. All you need to do is find the three maximums and the two minimums of the array and that requires only one pass.

The logic behind the solution is:

- If the three maximums are all positives, their product will be the maximum.
- If the two minimums are negatives, their product will be a large positive.
- If between these 5 values there are three negatives or all of them are negatives, the maximum product will be the one between the two minimums and the maximum value of all the array.
*/

// Solution Report: https://app.codility.com/demo/results/trainingXSN9SH-PDX/

function solution(A) {

    if (A.length === 3) {
        return A[0] * A[1] * A[2]
    }
    
    let min1, min2,max1, max2, max3
    min1 = min2 = 1001
    max1 = max2 = max3 = -1001
    
    for (let i = 0; i < A.length; i++){
        if (A[i] > max1){
            max3 = max2
            max2 = max1
            max1 = A[i]
        } else if (A[i] > max2) {
            max3 = max2
            max2 = A[i]
        } else if (A[i] > max3) {
            max3 = A[i]
        }
    
        if ( A[i] < min1) {
            min2 = min1
            min1 = A[i]
        } else if (A[i] < min2){
            min2 = A[i]
        }
    }

    prod1 = max1 * max2 * max3
    prod2 = max1 * min1 * min2

    if (prod1 > prod2) {
        return prod1
    } else {
        return prod2
    }
}