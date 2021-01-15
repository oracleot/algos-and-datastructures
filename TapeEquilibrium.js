// Solution1 result: https://app.codility.com/demo/results/trainingER5ZC2-BSN/
// https://github.com/yaseenshaik/codility-solutions-javascript/blob/master/TapeEquilibrium.md
function solution1(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var sum1 = 0;
    var sum2 = A.reduce(function(acc, i) {
        return acc + i;
    });

    var minDiff = Number.POSITIVE_INFINITY;
    
    for (var p = 0; p < A.length - 1; p++)
    {
        sum1 += A[p];
        sum2 -= A[p];
        var diff = sum2 - sum1;
        minDiff = Math.min(minDiff, Math.abs(diff));
    }
    
    return minDiff;
}
