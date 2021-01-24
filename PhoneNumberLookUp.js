function solution(A, B, P) {
    // write your code in JavaScript (Node.js 8.9.4)

    let results = []; // this will store phone numbers that match the search
    let names = A;
    let phone_numbers = B;
    let search = P;
    
    for (let i = 0; i < phone_numbers.length; i++) {
        if (phone_numbers[i].includes(search)) {
            results.push({num: phone_numbers[i], key: i})
        }
    }

    // if results has no item, return "NO CONTACT"
    if (results.length === 0) return "NO CONTACT"

    // if results has just one item, return the corresponding name
    if (results.length === 1) return names[results[0].key]

    // if results has more than one item
    let corresponding_names = []

    for (let i = 0; i < results.length; i++) {
        corresponding_names.push(names[results[i].key])
    }

    return corresponding_names.sort()[0];
}

console.log(solution(['sander', 'amy', 'ann', 'michael'], ['123456789', '234567890', '789123456', '123123123'], '1'))