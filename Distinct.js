// Solution result: https://app.codility.com/demo/results/trainingPP85AC-BVN/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const count = new Object();
    for (let i = 0; i< A.length; i++){
        count[A[i]] = 1;
    }
    return(Object.keys(count).length)

}