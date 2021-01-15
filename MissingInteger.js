// Solution result: https://app.codility.com/demo/results/trainingBUDACG-GVB/
function solution1(A) {
    var F = []; // Found list
    var I = 0, V = 0; // Counter, container
      
    while (I < A.length) { // Iterate through the array
      V = A[I]; // Store the value
      I++; // Increase counter
      if (F[V]) continue; // If the value exists, continue
      F[V] = true; // Store the value
    }
      
    I = 0;
      
    do { // Look for the first value that doesn't appear
      I++;
    } while (F[I]) // We do this by looping through the array until falsy
      
    return I; // Return the number of times we iterated 
  }