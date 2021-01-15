function solution1(A) {
    // make a dictionary of expected values: O(n)
    let map = []
   
    for (let i = 0; i < A.length + 1; i+= 1) {
        map[i] = { num: i+1, bool: -1 }
    }
    
    // evaluate subset against dictionary, marking included values: O(n)
    for (let j = 0; j < A.length; j+= 1) {
        let num = A[j] // find the num in A
        map[num -1].bool = 0 // mark as found in map
    }
    
    // evaluate dicionary for the missing values: O(n)
    for (let k = 0; k < map.length; k+= 1) {
        if(map[k].bool === - 1) {
            return map[k].num
        }
    }
}

function solution2(A) {
    var length = A.length;
    var sum = ((length + 1) /2) * (length + 2);
    var sumMinusMissing = 0;
    for (i = 0; i < length; i++) { 
        sumMinusMissing += A[i];
    }
    return sum - sumMinusMissing;
}