function tryRemoveFromArray(array,index) {
    let nexArray=[];
    for (let i = 0; i < array.length; i++) {
        if (i !== index) {
            nexArray.push(array[i])
        }
    }
    return nexArray;
}
let index=2;
let array=[2,3,4,62,5,7];
let x= tryRemoveFromArray(array,index);
console.log(x);