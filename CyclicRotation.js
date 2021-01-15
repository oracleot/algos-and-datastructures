function solution1(A, K) {
    if (K === A.length || K === 0) {
        return A
    }

    for (let i = 0; i < K; i++) {
        let lastEl = A[A.length - 1]
        A.unshift(lastEl);
        A.pop()
    }

    return A
}

function solution2(A, K) {
    K = K % A.length;
    const sliceIndex = A.length - K;
    return [...A.slice(sliceIndex), ...A.slice(0, sliceIndex)]
}

console.log(solution1([1,2,3,4], 2)) // => [3,4,1,2]
console.log(solution2([1,2,7,3,4,6], 2)) // => [ 4, 6, 1, 2, 7, 3 ]