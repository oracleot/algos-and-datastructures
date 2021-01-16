// The most efficient way I found was iterating until the square root of the number and subsequently dividing the number by all the factors we find.

// Solution Report: https://app.codility.com/demo/results/trainingAJ9FE3-94M/

function solution(N) {
    if (N===1) return 1;
    let multiplier = 1;
    let result = 1;
    //can be even more quick if we take out the 2s
    for (let i = 2; i <=Math.sqrt(N) ; i++) {
        if (N % i === 0) {
            multiplier = 1
            while (N % i === 0) {
                N /= i
                multiplier++
            }
            result *= multiplier
        }
    }
    //if it is a prime number, we add another factor of 2
    if (N !== 1) {result *=2}
    return result
}