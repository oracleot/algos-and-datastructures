// Using Jay Kadane's algorithm O(N)
function largestSubArraySum(arr) {
    let currentSum = 0,
        largestSum = 0;

    for (let num of arr) {
        currentSum = Math.max(0, (currentSum + num));
        largestSum = Math.max(currentSum, largestSum);
    }

    return largestSum;
}

console.log(largestSubArraySum([1, 100, 4, 15, 9, 30])) // ===> 159
console.log(largestSubArraySum([1, 100, 4, 15, 9, 30, -1])); // ===> 159
console.log(largestSubArraySum([-3, 1, 100, 4, 15, 9, 30])); // ===> 159
console.log(largestSubArraySum([-3, 1, 100, 4, 15, 9, 30, -1])); // ===> 159
console.log(largestSubArraySum([2, 1, -3, 4, -1, 2, 1, -5, 4])) // ===> 6
console.log(largestSubArraySum([-1, -1, -5, -3, -7, -4, -5, -6, -100, -4])) // ===> 0