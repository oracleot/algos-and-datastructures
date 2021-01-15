function solution1(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const array = A;
    const sortedArray = array.sort();

    let oddElement;
    
    for(let elementIndex = 0; elementIndex < sortedArray.length; elementIndex++) {
        const thisElement = sortedArray[elementIndex];
        const elementAhead = sortedArray[elementIndex + 1]
        
        if(thisElement === elementAhead) {
            // if it's the same value skip the next element.
            elementIndex++;
        } else {
            oddElement = thisElement;
        }
    }
    return oddElement;
}

function solution2(A) {
    let result = 0;

    for (let el in A) {
        result ^= el
    }

    return result
}