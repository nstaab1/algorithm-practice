
// O(n^2) quadratic solution
// function sumZero(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }

function sumZero(arr) {
    let lowPointer = 0;
    let highPointer = arr.length -1;
    for (let i = 0; i < arr.length; i ++) {
        if (lowPointer === highPointer) {
            return undefined;
        }

        let sum = arr[lowPointer] + arr[highPointer];

        if (0 < sum) {
            highPointer--;
        } else if (0 > sum) {
            lowPointer++;
        } else if ( sum === 0 ) {
            let returnArray = []
            returnArray.push(arr[lowPointer]);
            returnArray.push(arr[highPointer]);
            return returnArray;
        }
    }
    return undefined;
}

let val = sumZero([-4,-3,-2,0,1,2,5]);
console.log(val);

