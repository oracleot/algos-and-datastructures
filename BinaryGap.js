// Solution 1
function solution1(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let bin = N.toString(2),
        curGap = 0,
        maxGap = 0;

    for (let i=0; i<bin.length; i++) {
        if (bin[i] === "0") {
            curGap++;
        }
        if (bin[i] === "1") {
            maxGap = Math.max(maxGap, curGap);
            curGap = 0;
        }
    }

    return maxGap
}

// Solution 2
function solution2(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let bin = N.toString(2),
        curGap = 0,
        maxGap = 0;

    for (let i=0; i<bin.length; i++) {
        curGap = 0;
        
        while (bin[i] === "0") {
            ++curGap && ++i;
        }

        if (bin[i] === "1") {
            maxGap = Math.max(maxGap, curGap);
        }
    }

    return maxGap
}

console.log(solution1(1)); // 1 //=> 0
console.log(solution2(5)); // 101 //=> 1
console.log(solution2(6)); // 110 //=> 0
console.log(solution2(19)); // 10011 //=> 2
console.log(solution1(1041)); // 10000010001 //=> 5
console.log(solution2(6291457)); // 11000000000000000000001 //=> 20
console.log(solution1(1376796946)); // 1010010000100000100000100010010 //=> 5
console.log(solution2(1610612737)); // 1100000000000000000000000000001 //=> 28