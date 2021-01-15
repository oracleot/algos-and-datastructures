// Solution result: https://app.codility.com/demo/results/training38SPHU-KH3/
function solution(S, P, Q) {
    results = []
    impact = {'A':1, 'C':2, 'G':3, 'T':4}
    for (let i=0; i<P.length;i++){
        let analyze = S.substring(P[i],Q[i]+1)
        if (analyze.indexOf('A')!== -1) {
            results[i] = 1
            continue
        }
        if (analyze.indexOf('C')!== -1) {
            results[i] = 2
            continue
        }
        if (analyze.indexOf('G')!== -1) {
            results[i] = 3
            continue
        }
        results[i] = 4

    }
    return results
}