// Solution result: https://app.codility.com/demo/results/trainingM4VN2C-KQB/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let B = []
    let C = []
    let min = 10000
    let result = 0;
    for (let i = 0; i < A.length-1; i++){
        B[i] = (A[i]+A[i+1])/2
        if ((B[i]) < min){
            min = B[i]
            result = i
        }
    }

    let  = 0
    for (let i = 0; i < A.length-2; i++){
        C[i] = (A[i]+A[i+1]+A[i+2])/3
        if ((C[i]) < min){
            min = C[i]
            result = i
        }
    }


    return(result)
    
}