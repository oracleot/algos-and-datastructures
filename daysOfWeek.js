function solution(Y, A, B, W) {
    // write your code in JavaScript (Node.js 8.9.4)
    // get if the month is feb
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const lengthOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (Y % 4 === 0) {
        lengthOfMonths[1] = 29
    }
    
    let monthEq, lengthOfMonthEq, dayEq;
    
    for (let i = 0; i < months.length; i++) {
        if(A === months[i]) {
            monthEq = i;
            lengthOfMonthEq = lengthOfMonths[i];
        }
    }
    for (let i = 0; i < days.length; i++) {
        if(W === days[i]) {
            dayEq = i
        }
    }
    return Math.ceil(((Y - 2000) * monthEq * lengthOfMonthEq * dayEq) / 360)
    
}

console.log(solution(2015, "April", "May", "Wednesday"))

// https://app.codility.com/c/feedback/GEAY9R-MKF/