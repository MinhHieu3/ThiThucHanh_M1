function findThirdLargest(scores) {
    let max1=0
    let max2=0
    let max3=0
    for (let i = 0; i < scores.length; i++) {
        let score = scores[i];
        if (score > max1) {
            max3 = max2;
            max2 = max1;
            max1 = score;
        } else if (score > max2 && score !== max1) {
            max3 = max2;
            max2 = score;
        } else if (score > max3 && score !== max1 && score !== max2) {
            max3 = score;
        }
    }

    return max3;
}

let scores = [1,3,5,3,8,9,10,6,4];
let thirdLargest = findThirdLargest(scores);
console.log( thirdLargest);
