// Solution result: https://app.codility.com/demo/results/trainingBTNZJH-6CU/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let max = 0
    for (let i = 0; i < A.length; i++){
        if (A[i] > max) max = A[i]
    }

    if (A.length !== max) return 0
    let Indexes = Array(max).fill(0)
    for (let i = 0; i < A.length; i++){
        Indexes[A[i]-1]++
    }
    result = Indexes.indexOf(0)
    if (result === -1) {
        return 1
    } else {
        return 0
    }
}