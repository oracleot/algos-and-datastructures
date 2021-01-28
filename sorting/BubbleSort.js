function bs(arr) {
    let swap, iterations = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        swap = false;
        for (let j = 0; j < i; j++) {
            iterations++; // this line is not necessary
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swap = true;
            }
        }
        if (!swap) break;
    }
    console.log(iterations); // toggle swap to see changes in iterations count
    return arr
}

console.log(bs([8,1,2,3,4,5,6,7]))