/*
The Min Perimeter Rectangle challenge brings us back to a lot of math. I had a gut feeling on this one and I only checked with a few examples but the minimum perimeter of a rectangle for a given area happens when the rectangle is in fact a square.

So all we need to do in this case is to find the closest integer number to the square root which is a dividing factor for the given area.
*/

// Solution Report: https://app.codility.com/demo/results/trainingSTP854-FSE/

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  for (let i = Math.floor(Math.sqrt(N)); i > 0; i--) {
    if (N % i === 0) {
      return (i + N / i) * 2;
    }
  }
}