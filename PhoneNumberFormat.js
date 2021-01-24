function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let phoneNumberFormat = S;
    phoneNumberFormat = phoneNumberFormat.replace(/\W/g, '');
    
    let subArrays = [];

    if (phoneNumberFormat.length % 3 === 1) {
        for (let i = 0; i < phoneNumberFormat.length - 4; i+=3) {
            subArrays.push([phoneNumberFormat[i], phoneNumberFormat[i+1], phoneNumberFormat[i+2]]);
        }
        for (let i = phoneNumberFormat.length - 4; i < phoneNumberFormat.length; i+=2) {
            subArrays.push([phoneNumberFormat[i], phoneNumberFormat[i+1]]);
        }
    } else {
        for (let i = 0; i < phoneNumberFormat.length - 3; i+=3) {
            subArrays.push([phoneNumberFormat[i], phoneNumberFormat[i+1], phoneNumberFormat[i+2]]);
        }
        if (phoneNumberFormat.length % 3 === 2) {
            subArrays.push([phoneNumberFormat[phoneNumberFormat.length - 2], phoneNumberFormat[phoneNumberFormat.length - 1]]);
        }
    }

    phoneNumberFormat = "";

    for (let i = 0; i < subArrays.length; i++) {
        if (i < subArrays.length - 1) {
            phoneNumberFormat += subArrays[i].join('') + '-';
        } else {
            phoneNumberFormat += subArrays[i].join('');
        }
    }

    return phoneNumberFormat
}

console.log(solution("00-44  48 5555 8361 0 *9834"));
console.log(solution("0 - 22 1985--324"));