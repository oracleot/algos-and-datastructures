// Solution result: https://app.codility.com/demo/results/trainingAWQBXT-N43/
function solution1(X, A) {
    //get max
    const min = Math.min(...A);
    const max = X;
  
    if (min === max && max > 1) {
      return -1;
    }
  
    //get what total sum should be with n * (n+1)/2
    let totalPossibleSum = (max * (max + 1)) / 2;
  
    //use a map to substract numbers and use a counter to see if all the leafes are on the water
    const map = {};
    for (let i = 0; i < A.length; i++) {
      //finish condition
      if (!map[A[i]]) {
        map[A[i]] = true;
        totalPossibleSum -= A[i];
  
        if (totalPossibleSum === 0) {
          return i;
        }
      }
    }
  
    return -1;
  }

  // Solution result: https://app.codility.com/demo/results/trainingF5HZU2-4PF/
  function solution2(X, A) {
    if (A.length === 1) { // If the array is one element
      // And if its first item is 1 as well as the value to search for,
      // the frog doesn't need to move
      if (A[0] === 1 && X === 1) return 0; 
      // If not, it's impossible to go anywhere
      else return -1;
    }
      
    var i = -1, // Counter
      sum = 0, // Comparison sum
      Y = (X * (X+1)) / 2,  // Sum of 1..X
      f = []; // Found elements
      
    do { // Start searching
      i++; // Increase the counter
      // If we've already found the element, continue
      if (f[A[i]]) continue;
      // If we haven't found the element, mark it
      f[A[i]] = true;
      // Add to the comparison sum that we will be using
      // to determine whether the frog will have been
      // able to cross successfully by this point and then
      // compare it
      sum += A[i];
      if (sum === Y) break;
    } while (i < A.length) // If the counter is over the length, we didn't find it
    
    // If we reached this point and this conditional is true,
    // we didn't find the number.
    if (i === A.length) return -1;
      
    return i; // Return how long it took
  }