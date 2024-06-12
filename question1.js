function pointsComparing(a, b){
    let alicePoints = 0
    let bobPoints = 0
    for (let i = 0; i < a.length; i++) {
        if(a[i] > b[i]){
            alicePoints++;
        }else if(a[i] < b[i]){
            bobPoints++;
        }
        
    }
    return [alicePoints, bobPoints]
}

console.log(pointsComparing([1,2,3], [3,2,1]))

console.log(pointsComparing([17,28,30], [99,16,0]))