// Solution Report: https://app.codility.com/demo/results/training4ENARX-UM3/

function solution(A,B,K) {
    return (Math.floor(B/K) - Math.floor((A-1)/K));
}

console.log(solution(6,11,2)) // => 3