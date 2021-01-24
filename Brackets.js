
/*
The Brackets challenge from Codility was a fun exercise.

A solution with O(N) complexity requires a single run of the array.

At each step, we operate on a stack following three cases:

- If the stack is empty and we the current element is a closing bracket of any kind, then the string is not properly nested
- If the stack is not empty and we are placing a closing bracket, then if the closing bracket matches the last opened bracket in the stack, then we eliminate the last opening bracket from the stack
- Otherwise, we add to the stack the element if it is an opening bracket. If we are trying to push a closing bracket that did not match, again we have the conclusion that the string is not properly nested.
*/

// Solution Report: https://app.codility.com/demo/results/trainingQM56E5-U24/

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let progress = true
    let index = 0
    let stack = []
    let error = false
    while (index < S.length) {
        if (stack.length === 0) {
            if (S[index] === ')' || S[index] === ']' || S[index] === '}') {
                 return 0
            } else {
            stack.push(S[index])
            }
        }
        else if (is_properly_nested(stack[stack.length-1],S[index])) {
            stack.pop(stack[stack.length-1])
        } else {
            if (S[index] === ')' || S[index] === ']' || S[index] === '}') {
                return 0
            }
            else {
                stack.push(S[index])
            }
        }
        index ++
    }

    if (stack.length === 0) {
        return 1
    } else {
        return 0
    }
}

function is_properly_nested(a,b) {
    if ( (a === '(' && b === ')') || (a === '[' && b === ']') || (a === '{' && b === '}')) {
        return true
    }
    else {
        return false
    }
}