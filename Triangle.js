/*
The Triangle problem is solved once we realize that 3 elements in an array are triplets, then they are somehow close as value (proportionally to how big they are as numbers). Thus, if we sort the array, the first triplet we encounter will be made up of consecutive elements. There can be cases when the same triplet can be formed with some of the following numbers if they are similar in value, but for the solution we only need the first triplet.

Thus, the solution with O(N*log(N)) complexity is enough to give a 100% correct score.
*/

// Solution Report: https://app.codility.com/demo/results/training37BRDJ-SEX/

function solution(A) {
    if (A.length < 2) return 0
    
    A = A.sort((a,b) => a-b)
    
    for (let i = 0; i < A.length-2; i++){
        if (A[i]+A[i+1] > A[i+2] && A[i+1]+A[i+2] > A[i] && A[i]+A[i+2] > A[i+1]) {
            return 1
        }
    }

    return 0
}